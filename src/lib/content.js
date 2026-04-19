// ── Leerpaden ──────────────────────────────────────────────────────────────
import leerpadGroupsData from '../content/leerpaden/_groups.json';

const loadSorted = files => Object.values(files).map(m => m.default).sort((a, b) => a.order - b.order);

const _sectionFiles = import.meta.glob('../content/leerpaden/[!_]*.json', { eager: true });
export const leerpadGroups = leerpadGroupsData.groups;
export const leerpadSections = loadSorted(_sectionFiles);

export const leerpaden = leerpadSections.flatMap(s =>
  s.rules.map(r => ({ ...r, kind: 'leerpad', leerpad: s.id, group: s.group }))
);

export const leerpadTree = leerpadGroups.map(g => ({
  ...g,
  sections: leerpadSections.filter(s => s.group === g.id),
}));

// ── Grammar reference ───────────────────────────────────────────────────────
const _grammarFiles = import.meta.glob('../content/grammar/*.json', { eager: true });
export const referenceRules = loadSorted(_grammarFiles);

// ── Uitspraak ───────────────────────────────────────────────────────────────
const _uitspraakFiles = import.meta.glob('../content/uitspraak/*.json', { eager: true });
export const uitspraakRules = loadSorted(_uitspraakFiles);

// ── Woordjes ────────────────────────────────────────────────────────────────
import tipsData from '../content/woordjes/_tips.json';

const _woordjesFiles = import.meta.glob('../content/woordjes/[!_]*.json', { eager: true });
export const pronunciationTips = tipsData.pronunciationTips;
export const categories = loadSorted(_woordjesFiles);

// ── Tests ───────────────────────────────────────────────────────────────────
const _testFiles = import.meta.glob('../content/tests/*.json', { eager: true });
export const tests = loadSorted(_testFiles);

// ── Lookups ─────────────────────────────────────────────────────────────────
const allGrammarRules = [...referenceRules, ...uitspraakRules];

export function getLeerpadRuleById(id) {
  return leerpaden.find(r => r.id === id);
}

export function getGrammarRuleById(id) {
  return allGrammarRules.find(r => r.id === id);
}

export function getRuleById(id) {
  return getLeerpadRuleById(id) ?? getGrammarRuleById(id);
}

export function getLeerpadSectionById(id) {
  return leerpadSections.find(s => s.id.toLowerCase() === id.toLowerCase());
}

export function getTestsForLeerpad(leerpad) {
  return tests.filter(t => t.leerpad === leerpad || t.leerpad === leerpad.replace(/[A-Z]$/, ''));
}

export const marathonTest = {
  id: 'marathon',
  title: 'Marathon',
  subtitle: 'All questions — shuffled',
  leerpad: null,
  difficulty: 'hard',
  emoji: '🏃',
  questions: [],
};

export function getTestById(id) {
  if (id === 'marathon') return marathonTest;
  return tests.find(t => t.id === id);
}
