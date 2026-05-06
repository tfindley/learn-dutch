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
const _ruleIndex = new Map();
for (const r of leerpaden) _ruleIndex.set(r.id, r);
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
  return (r?.kind === 'grammar' || r?.kind === 'uitspraak') ? r : undefined;
}

const _routeFor = rule => {
  switch (rule.kind) {
    case 'leerpad':   return `/leerpaden/${rule.group}/${rule.id}`;
    case 'grammar':   return `/grammar/reference/${rule.id}`;
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
