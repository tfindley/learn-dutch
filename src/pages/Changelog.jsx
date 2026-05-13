import { Link } from 'react-router-dom';

const CHANGELOG = [
  {
    version: '2.3.0',
    date: '2026-05-13',
    added: [
      'Sentence-anatomy tables — pattern examples and rule-level examples can now be authored as labelled column tables ({caption, labels, words, english, note}). Renders as a clean grid showing what role each word plays in the sentence. The "Pos 1: ... Pos 2: ..." inline annotations are gone',
      'New <SentenceAnatomy> component plus dispatch in PatternBlock and both Rule pages',
    ],
    changed: [
      'Inversion, terms_sentence, wordorder, negation, terms_words, and Leerpad 5B (V1+V2) all converted to anatomy tables — sentence structure is now visually scannable',
      'Rule pages widened from max-w-3xl (768 px) to max-w-4xl (896 px), and Course Module too. More breathing room on desktop, better fit for the new tables',
    ],
    fixed: [],
  },
  {
    version: '2.2.0',
    date: '2026-05-13',
    added: [
      'New "Course" top-level section — a six-module curriculum (~22 weeks) sequencing every leerpad, woordje category, grammar rule, uitspraak rule, and test into a structured path. Each module bundles core + supplementary items with optional per-item notes and a "by the end of this module" milestone',
      'Landing page "Follow the course" CTA card directing new learners straight into the curriculum',
      'New `relatedWoordjes` field on rules — pages now show a "Vocabulary" section linking to relevant woordjes categories. 56 cross-links wired across all leerpaden and three grammar rules (inversion, separable, imperative)',
      'Auto-derived "Used in" section on every woordjes Category page, listing the leerpaden and grammar rules that reference it',
      'Roadmap document at docs/roadmap.md tracking the deferred UX improvements (progress tracking, global search, revision sheets, mobile audit, etc.)',
    ],
    changed: [
      'Grammar nav restructured into three tabs: Rules (the rules), Reference (the Word Types and Sentence Anatomy glossaries), and Uitspraak. Old /grammar/reference/<id> URLs auto-redirect to their canonical /grammar/rules/<id> home, so existing bookmarks keep working',
      'Pattern examples now render in normal sans-serif text instead of monospace — easier to read and scan',
      'Extracted a shared <RelatedCardList> primitive consumed by "See also", "Vocabulary", and "Used in" — three near-duplicate card blocks collapsed into one styled component',
      'Internal: simplified Module page (dropped a redundant useMemo, removed narrate-the-obvious comments) following the post-release code review',
    ],
    fixed: [
      'Module page subtitle rendering had dead code — a section==="tests" check inside the section!=="tests" branch was unreachable. Flattened.',
    ],
  },
  {
    version: '2.1.0',
    date: '2026-05-13',
    added: [
      'Leerpad 5 now has full content — three new sections (5A daily activities, 5B free time + modals in practice, 5C studying + imperative + course enrolment)',
      'New grammar rule: "Inversie · V2 — When Subject and Verb Swap" — the V2/inversion word-order rule with 13 pattern blocks, dedicated TIME-inversion coverage, the kunt→kun / wilt→wil special cases, separable verbs under inversion, and a labelled sentence-anatomy block showing what sits in each position',
      'New grammar rule: "De imperatief · Commands" — the command form with separable variants and the formal "u" form',
      'Two new GLOSSARY entries at the top of Grammar Reference: "Word Types" (verb, infinitive — including split infinitives "to boldly go" — noun, pronoun, adjective, adverb, preposition, article, conjunction, modal, synonym/antonym, vowel/consonant, singular/plural, tense, imperative, diminutive) and "Sentence Anatomy" (subject, conjugated verb, object, information, main/subordinate clause, the position-1/2/3+ slot model with worked examples)',
      'Three new woordjes categories: Days of the Week, Daily Activities, and Free Time',
      'Added location prepositions (achter / boven / onder / naast) and time-of-day expressions (\'s morgens / \'s ochtends / \'s middags / \'s avonds / \'s nachts / namiddag / vanavond / vanmorgen / vannacht) to the existing categories',
      'Three new tests: Inversion (10 Q), Imperative (6 Q), Modals in Practice (7 Q)',
      'Cross-rule "See also" links now span the new content — every leerpad and grammar rule that touches inversion, modals, or imperative now has direct jumps to the relevant glossary entries and rules',
    ],
    changed: [
      'Leerpad 5 group description updated from placeholder to a real summary of the daily-life / inversion focus',
    ],
    fixed: [],
  },
  {
    version: '2.0.2',
    date: '2026-05-06',
    added: [],
    changed: [
      'CI/CD switched to a tag-driven release pipeline — pushing a v* tag is now the only way to trigger a build, and that single build publishes :sha-<sha>, :<version>, and :latest in one go (previously a main push and a tag push triggered two parallel builds, leading to a race on :latest)',
      'Gitea weekly schedule now rebuilds the latest v* tag for Alpine security-patch refreshes, keeping :latest pinned to the most recent release rather than mainline HEAD',
      'Internal: rule lookups (getRuleById, getLeerpadRuleById, getGrammarRuleById, getRelatedRules) now share a single Map index instead of repeating Array.find scans',
    ],
    fixed: [
      'Footer version on the deployed v2.0.1 image showed "sha-<sha>" instead of "v2.0.1" — caused by the dual-build race in the old CI flow. Fixed structurally by the new tag-driven pipeline.',
    ],
  },
  {
    version: '2.0.1',
    date: '2026-05-06',
    added: [
      'Course video playlists wired into every leerpad group — clickable from /leerpaden and each /leerpaden/<id> page',
      'Leerpad 0 and Leerpad 5 placeholder pages — playlists available now, text content coming later',
      'New grammar rule: "De stam — ik-vorm" (verb stems / present-tense formation, four sub-rules)',
      'New uitspraak rule: "U · UU · OU" — three look-alike sounds with side-by-side minimal pairs',
      'New woordjes category: "Hoe vaak?" — frequency adverbs (nooit / soms / dikwijls / vaak / meestal / altijd) with a 0–100% scale',
      'Three new tests: verb stems, U/UU/OU pronunciation, and Leerpad 4B train timetables',
      'Cross-rule "See also" links via a new optional relatedRules field — wired across 11 rules connecting leerpaden to grammar/uitspraak references',
      'Canonical content schema reference at docs/content-schema.md, covering all five content types',
    ],
    changed: [
      'Leerpad 4A enriched with extra weather adjectives (lichtbewolkt, zwaarbewolkt, fris, stormt, onweert, dondert), weather-gear vocabulary, temperature/forecast patterns, and two full forecast paragraphs',
      'Leerpad 4B split into two rules — shop/library opening hours + train timetable Q&A — with appointment-booking patterns added',
      'Leerpad 4C extended with the "Ik doe (niet) graag boodschappen" conversation pattern, checkout vocabulary (winkelkarretje, scan zelf, GSM, draag), and a Mexicaans-koken shopping list example',
      'Difficulty re-calibrated for lp4a / lp4b / lp4c / lp3a_prep / negation — bumped easy → medium where the underlying distinction trips learners up',
      'CLAUDE.md trimmed to a focused pointer file (~2 KB) — content-schema.md is now the source of truth for content schemas',
      'Minor woordjes additions: croissant, watermeloen, ananas',
    ],
    fixed: [],
  },
  {
    version: '2.0.0',
    date: '2026-04-19',
    added: [
      'Leerpaden separated as a top-level navigation module with its own menu and landing page',
      'Two-level leerpad hierarchy: Leerpad 1–4 as top-level units, A/B/C sections as children — each with a description',
      'Leerpaden, Grammar Reference, and Uitspraak each have dedicated routes and pages',
      'Four pillar cards on the home page (Woordjes, Leerpaden, Grammar, Tests)',
      'Belgium flag 🇧🇪 in the title bar with reliable emoji rendering across all platforms',
      'All content split into individual JSON files — adding a new file is automatically picked up at build time',
      'Multi-language field schema: bilingual fields use { nl, en } objects with a t() helper for future language support',
      'PatternBlock and PracticeConversation extracted as shared components used by both Leerpad and Grammar rule pages',
      'Contribution guide (CONTRIBUTING.md) written for both human developers and AI agents',
    ],
    changed: [
      'Grammar module now contains only Grammar Reference and Uitspraak (Leerpaden moved to its own top-level section)',
      'Content directory restructured to mirror navigation: leerpaden/, grammar/, uitspraak/, woordjes/, tests/',
      'Nav hover states updated to more visible gray-200/gray-700 (was barely visible gray-100/gray-800)',
      'Home page grid changed to 2×2 on tablet, 4-across on desktop to accommodate the new Leerpaden card',
      'Vite upgraded 5 → 6 (esbuild 0.21 → 0.25) — resolves GHSA-67mh-4wv8-2f99, npm audit clean',
      'Container version tag injected at build time — UI footer reflects the actual git tag',
      'Tests index switched to full-width list rows, consistent with grammar module',
      'Rule rows across all sections have colour-coded left borders by difficulty (green/amber/red)',
    ],
    fixed: [
      'Leerpad ordering was broken (2A/2B appeared after 4C, 3C missing) — resolved by switching to explicit order fields',
      'Woordjes category name was silently undefined — search by category name now works',
      'Windows platform-specific rollup binary was in package.json dependencies, breaking Linux CI builds',
    ],
  },
  {
    version: '1.1.0',
    date: '2026-04-19',
    added: [
      'Full UX redesign: pinned top nav, dark/light mode, Tailwind CSS',
      'URL-based routing — browser back/forward now works',
      'Grammar split into three sections: Leerpaden, Grammar Reference, Uitspraak',
      'Global English toggle across all three modules',
      'Per-leerpad "Test this leerpad" button in grammar',
      'Responsive mobile drawer navigation',
    ],
    changed: [
      'Content extracted from JSX to JSON data files',
      'Flip cards now show phonetic on front, tip on back',
    ],
    fixed: [],
  },
  {
    version: '1.0.0',
    date: '2026-02-01',
    added: [
      'Initial release with Woordjes, Grammar, and Tests modules',
      'Vocabulary flashcards with phonetics (27 categories)',
      'Grammar rules (31 rules across Leerpaden 1A–4C + reference + uitspraak)',
      'Practice quizzes (8 tests + Marathon mode)',
      'Single nginx container delivery',
      'GitHub Actions and Gitea Actions CI/CD',
      'Optional Google Analytics via VITE_GA_ID build arg',
    ],
    changed: [],
    fixed: [],
  },
];

export default function Changelog() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Link to="/" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
          ← Home
        </Link>
        <h1 className="text-2xl font-bold">Changelog</h1>
      </div>

      <div className="space-y-10">
        {CHANGELOG.map(entry => (
          <section key={entry.version}>
            <div className="flex items-baseline gap-3 mb-4">
              <h2 className="text-lg font-bold font-mono">v{entry.version}</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400">{entry.date}</span>
            </div>

            {entry.added.length > 0 && (
              <div className="mb-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400 mb-2">Added</h3>
                <ul className="space-y-1">
                  {entry.added.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex gap-2">
                      <span className="text-green-500 shrink-0">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {entry.changed.length > 0 && (
              <div className="mb-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">Changed</h3>
                <ul className="space-y-1">
                  {entry.changed.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex gap-2">
                      <span className="text-amber-500 shrink-0">~</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {entry.fixed.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">Fixed</h3>
                <ul className="space-y-1">
                  {entry.fixed.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex gap-2">
                      <span className="text-blue-500 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
