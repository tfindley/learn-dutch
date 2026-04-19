/**
 * One-shot migration: split monolithic JSON files into per-unit files and
 * apply the multi-language schema (title: {nl, en}, practice: nl/en keys).
 * Run once, commit output, then delete this script.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CONTENT = join(ROOT, 'src', 'content');

function ensure(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

function write(path, data) {
  writeFileSync(path, JSON.stringify(data, null, 2) + '\n');
  console.log('  written:', path.replace(ROOT + '/', ''));
}

function splitTitle(title) {
  if (!title) return { nl: '', en: '' };
  const sep = ' — ';
  const idx = title.indexOf(sep);
  if (idx === -1) return { nl: title, en: title };
  return { nl: title.slice(0, idx).trim(), en: title.slice(idx + sep.length).trim() };
}

function migrateRule(r, order) {
  return {
    id: r.id,
    order,
    tag: r.tag,
    title: splitTitle(r.title),
    difficulty: r.difficulty,
    shortcut: r.shortcut || null,
    explanation: r.explanation || null,
    patterns: r.patterns || [],
    memory: r.memory || null,
    examples: (r.examples || []).map(e => ({ nl: e.nl, en: e.en })),
    practice: (r.practice || []).map(p => ({
      role: p.role,
      nl: p.dutch ?? p.nl ?? '',
      en: p.english ?? p.en ?? '',
    })),
  };
}

const grammar  = JSON.parse(readFileSync(join(CONTENT, 'grammar.json'),  'utf8'));
const woordjes = JSON.parse(readFileSync(join(CONTENT, 'woordjes.json'), 'utf8'));
const tests    = JSON.parse(readFileSync(join(CONTENT, 'tests.json'),    'utf8'));

// ── Leerpaden ──────────────────────────────────────────────────────────────
console.log('\nLeerpaden sections:');
ensure(join(CONTENT, 'leerpaden'));

const leerpadDescMap = Object.fromEntries(
  (grammar.leerpads || []).map(l => [l.id, l.description])
);

// Groups meta (1, 2, 3, 4)
const groups = ['1', '2', '3', '4'].map((id, i) => ({
  id,
  order: i + 1,
  title: { en: `Leerpad ${id}` },
  description: { en: leerpadDescMap[id] || '' },
}));
write(join(CONTENT, 'leerpaden', '_groups.json'), { groups });

// Per-section files (1a.json … 4c.json)
const leerpadRules = grammar.rules.filter(r => r.kind === 'leerpad');
const sectionRuleMap = {};
leerpadRules.forEach(r => {
  const key = r.leerpad.toLowerCase();
  (sectionRuleMap[key] = sectionRuleMap[key] || []).push(r);
});

const SECTION_ORDER = ['1a','1b','2a','2b','3a','3b','3c','4a','4b','4c'];
SECTION_ORDER.forEach((sid, idx) => {
  const sectionId = sid.toUpperCase();
  const groupId = sectionId.replace(/[A-Z]$/, '');
  const rules = (sectionRuleMap[sid] || []).map((r, i) => migrateRule(r, i + 1));
  write(join(CONTENT, 'leerpaden', `${sid}.json`), {
    id: sectionId,
    group: groupId,
    order: idx + 1,
    description: { en: leerpadDescMap[sectionId] || '' },
    rules,
  });
});

// ── Grammar reference ───────────────────────────────────────────────────────
console.log('\nGrammar rules:');
ensure(join(CONTENT, 'grammar'));
grammar.rules
  .filter(r => r.kind === 'grammar')
  .forEach((r, i) => {
    write(join(CONTENT, 'grammar', `${r.id}.json`), {
      kind: 'grammar',
      ...migrateRule(r, i + 1),
    });
  });

// ── Uitspraak ───────────────────────────────────────────────────────────────
console.log('\nUitspraak rules:');
ensure(join(CONTENT, 'uitspraak'));
grammar.rules
  .filter(r => r.kind === 'uitspraak')
  .forEach((r, i) => {
    write(join(CONTENT, 'uitspraak', `${r.id}.json`), {
      kind: 'uitspraak',
      ...migrateRule(r, i + 1),
    });
  });

// ── Woordjes ────────────────────────────────────────────────────────────────
console.log('\nWoordje categories:');
ensure(join(CONTENT, 'woordjes'));
write(join(CONTENT, 'woordjes', '_tips.json'), {
  pronunciationTips: woordjes.pronunciationTips,
});
woordjes.categories.forEach((cat, i) => {
  write(join(CONTENT, 'woordjes', `${cat.id}.json`), {
    id: cat.id,
    order: i + 1,
    title: { nl: cat.nl, en: cat.label },
    emoji: cat.emoji,
    color: cat.color,
    words: cat.words,
  });
});

// ── Tests ───────────────────────────────────────────────────────────────────
console.log('\nTests:');
ensure(join(CONTENT, 'tests'));
tests.tests.forEach((t, i) => {
  write(join(CONTENT, 'tests', `${t.id}.json`), { ...t, order: i + 1 });
});

console.log('\nDone. Commit src/content/ then delete this script.');
