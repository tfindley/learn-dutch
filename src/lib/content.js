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

// ── Grammar rules (the rules themselves: articles, modals, inversion, etc.) ─
const _grammarFiles = import.meta.glob('../content/grammar/*.json', { eager: true });
export const grammarRules = loadSorted(_grammarFiles);

// ── Reference (glossary entries — word types, sentence anatomy) ─────────────
const _referenceFiles = import.meta.glob('../content/reference/*.json', { eager: true });
export const referenceRules = loadSorted(_referenceFiles);

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

// ── Course (curriculum modules sequencing existing content) ─────────────────
const _courseFiles = import.meta.glob('../content/course/*.json', { eager: true });
export const courseModules = loadSorted(_courseFiles);

export function getCourseModuleById(id) {
  return courseModules.find(m => m.id === id);
}

// Resolve a course-module item ({id, priority?, note?}) within a given section
// to the underlying content, returning { item, path, title, difficulty?, ... }
// or null if the id doesn't resolve (e.g. typo in the module file).
// `section` is one of: reference | vocabulary | grammar | uitspraak | lessons | tests
export function getCourseItem(section, id) {
  switch (section) {
    case 'reference': {
      const r = referenceRules.find(r => r.id === id);
      if (!r) return null;
      return { item: r, path: `/grammar/reference/${id}`, title: r.title, difficulty: r.difficulty };
    }
    case 'vocabulary': {
      const c = categories.find(c => c.id === id);
      if (!c) return null;
      return { item: c, path: `/woordjes/${id}`, title: c.title, emoji: c.emoji, color: c.color };
    }
    case 'grammar': {
      const r = grammarRules.find(r => r.id === id);
      if (!r) return null;
      return { item: r, path: `/grammar/rules/${id}`, title: r.title, difficulty: r.difficulty };
    }
    case 'uitspraak': {
      const r = uitspraakRules.find(r => r.id === id);
      if (!r) return null;
      return { item: r, path: `/grammar/uitspraak/${id}`, title: r.title, difficulty: r.difficulty };
    }
    case 'lessons': {
      const r = leerpaden.find(r => r.id === id);
      if (!r) return null;
      return { item: r, path: `/leerpaden/${r.group}/${id}`, title: r.title, difficulty: r.difficulty, tag: r.tag, leerpad: r.leerpad };
    }
    case 'tests': {
      const t = tests.find(t => t.id === id);
      if (!t) return null;
      return { item: t, path: `/tests/${id}`, title: t.title, subtitle: t.subtitle, difficulty: t.difficulty, emoji: t.emoji };
    }
    default: return null;
  }
}

// ── Lookups ─────────────────────────────────────────────────────────────────
const _ruleIndex = new Map();
for (const r of leerpaden) _ruleIndex.set(r.id, r);
for (const r of grammarRules) _ruleIndex.set(r.id, r);
for (const r of referenceRules) _ruleIndex.set(r.id, r);
for (const r of uitspraakRules) _ruleIndex.set(r.id, r);

export function getRuleById(id) {
  return _ruleIndex.get(id);
}

export function getLeerpadRuleById(id) {
  const r = _ruleIndex.get(id);
  return r?.kind === 'leerpad' ? r : undefined;
}

export function getGrammarRuleById(id) {
  const r = _ruleIndex.get(id);
  return r && r.kind !== 'leerpad' ? r : undefined;
}

const _routeFor = rule => {
  switch (rule.kind) {
    case 'leerpad':   return `/leerpaden/${rule.group}/${rule.id}`;
    case 'grammar':   return `/grammar/rules/${rule.id}`;
    case 'reference': return `/grammar/reference/${rule.id}`;
    case 'uitspraak': return `/grammar/uitspraak/${rule.id}`;
    default:          return null;
  }
};

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

export function getRelatedRules(ids = []) {
  return ids
    .map(id => _ruleIndex.get(id))
    .filter(rule => rule && _routeFor(rule))
    .map(rule => ({ rule, path: _routeFor(rule), kind: rule.kind }));
}

// Resolve woordjes (vocabulary category) IDs to their category objects + paths.
// Kept separate from getRelatedRules so the rule-ID namespace can't collide with
// woordjes-category IDs (e.g. both pools have an "adjectives" entry).
export function getRelatedWoordjes(ids = []) {
  return ids
    .map(id => categories.find(c => c.id === id))
    .filter(Boolean)
    .map(category => ({ category, path: `/woordjes/${category.id}` }));
}

// Auto-derived back-link: given a woordjes category id, return every leerpad
// rule that lists it in `relatedWoordjes`. Used to render "Used in" on the
// category page.
export function getLeerpadenReferencingWoordje(woordjeId) {
  return leerpaden
    .filter(r => Array.isArray(r.relatedWoordjes) && r.relatedWoordjes.includes(woordjeId))
    .map(rule => ({ rule, path: `/leerpaden/${rule.group}/${rule.id}`, kind: rule.kind }));
}
