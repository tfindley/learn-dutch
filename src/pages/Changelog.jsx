import { Link } from 'react-router-dom';

const CHANGELOG = [
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
