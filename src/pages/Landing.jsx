import { Link } from 'react-router-dom';
import { categories, leerpaden, leerpadGroups, referenceRules, uitspraakRules, tests } from '../lib/content';

const PILLARS = [
  {
    to: '/woordjes',
    title: 'Woordjes',
    subtitle: 'Vocabulary with phonetics and flip-card practice',
    emoji: '📚',
    accent: 'amber',
    stat: `${categories.length} categories`,
  },
  {
    to: '/leerpaden',
    title: 'Leerpaden',
    subtitle: 'Sequential curriculum — structured learning path from basics to advanced',
    emoji: '🎓',
    accent: 'green',
    stat: `${leerpaden.length} rules across ${leerpadGroups.length} units`,
  },
  {
    to: '/grammar',
    title: 'Grammar',
    subtitle: 'Reference rules, pronunciation and spelling guides',
    emoji: '📖',
    accent: 'teal',
    stat: `${referenceRules.length + uitspraakRules.length} reference rules`,
  },
  {
    to: '/tests',
    title: 'Tests',
    subtitle: 'Practice quizzes and marathon sessions',
    emoji: '✏️',
    accent: 'purple',
    stat: `${tests.length} tests`,
  },
];

const ACCENT_CLASSES = {
  amber: {
    border: 'border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-600',
    tag: 'text-amber-600 dark:text-amber-400',
    cta: 'text-amber-700 dark:text-amber-400 group-hover:text-amber-900 dark:group-hover:text-amber-200',
  },
  green: {
    border: 'border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600',
    tag: 'text-green-600 dark:text-green-400',
    cta: 'text-green-700 dark:text-green-400 group-hover:text-green-900 dark:group-hover:text-green-200',
  },
  teal: {
    border: 'border-teal-200 dark:border-teal-800 hover:border-teal-400 dark:hover:border-teal-600',
    tag: 'text-teal-600 dark:text-teal-400',
    cta: 'text-teal-700 dark:text-teal-400 group-hover:text-teal-900 dark:group-hover:text-teal-200',
  },
  purple: {
    border: 'border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600',
    tag: 'text-purple-600 dark:text-purple-400',
    cta: 'text-purple-700 dark:text-purple-400 group-hover:text-purple-900 dark:group-hover:text-purple-200',
  },
};

export default function Landing() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <p className="text-xs font-mono tracking-widest text-gray-400 dark:text-gray-600 mb-3 uppercase">
          Belgian Dutch
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Leer Nederlands
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          A self-hosted app for learning Belgian Dutch — vocabulary, grammar and interactive quizzes.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {PILLARS.map(p => {
          const ac = ACCENT_CLASSES[p.accent];
          return (
            <Link
              key={p.to}
              to={p.to}
              className={`group flex flex-col rounded-xl border bg-white dark:bg-gray-900 p-6 transition-colors ${ac.border}`}
            >
              <span className="text-3xl mb-4">{p.emoji}</span>
              <span className={`text-xs font-mono font-semibold tracking-wider mb-1 ${ac.tag}`}>
                {p.stat}
              </span>
              <h2 className="text-xl font-bold mb-2">{p.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex-1">{p.subtitle}</p>
              <span className={`mt-4 text-sm font-medium transition-colors ${ac.cta}`}>
                Open →
              </span>
            </Link>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 dark:text-gray-600">
        <a
          href="https://tfindley.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors font-mono"
        >
          tfindley.co.uk
        </a>
        <span>·</span>
        <a
          href="https://github.com/tfindley/learn-dutch"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          GitHub
        </a>
        <span>·</span>
        <a
          href="https://ko-fi.com/tfindley"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
        >
          Ko-fi ☕
        </a>
        <span>·</span>
        <Link
          to="/changelog"
          className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors font-mono"
        >
          {import.meta.env.VITE_APP_VERSION || 'dev'}
        </Link>
      </div>
    </div>
  );
}
