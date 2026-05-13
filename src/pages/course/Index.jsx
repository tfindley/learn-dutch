import { Link } from 'react-router-dom';
import { courseModules, leerpadGroups } from '../../lib/content';
import { t } from '../../lib/i18n';

export default function CourseIndex() {
  const lastWeek = courseModules.reduce((max, m) => {
    const end = parseInt(String(m.weeks).split('-').pop(), 10);
    return Number.isFinite(end) && end > max ? end : max;
  }, 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">Course</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        A {lastWeek}-week structured path through everything on the site. Each module bundles the vocabulary, grammar, pronunciation, lessons, and tests for one Leerpad, in the order you'd cover them in a CVO Scala class — roughly four weeks each.
      </p>

      <div className="relative">
        <div className="absolute left-4 top-4 bottom-4 w-px bg-gray-200 dark:bg-gray-700" aria-hidden />

        <div className="space-y-6">
          {courseModules.map(m => {
            const group = leerpadGroups.find(g => g.id === m.leerpadGroup);
            const totalItems = (
              (m.reference?.length || 0) +
              (m.vocabulary?.length || 0) +
              (m.grammar?.length || 0) +
              (m.uitspraak?.length || 0) +
              (m.lessons?.length || 0) +
              (m.tests?.length || 0)
            );
            return (
              <Link
                key={m.id}
                to={`/course/${m.id}`}
                className="relative block pl-12 pr-4 py-4 rounded-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
              >
                <div className="absolute left-0 top-4 w-9 h-9 rounded-full bg-white dark:bg-gray-950 border-2 border-green-500 dark:border-green-400 flex items-center justify-center font-mono font-bold text-sm text-green-700 dark:text-green-400">
                  {m.order}
                </div>

                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {t(m.title, 'nl')}
                  </h2>
                  <span className="text-xs font-mono text-gray-400 dark:text-gray-500 shrink-0">
                    weeks {m.weeks}
                  </span>
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {t(m.title, 'en')}
                </div>

                {m.subtitle && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    {t(m.subtitle)}
                  </p>
                )}

                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500">
                  {group && (
                    <span className="font-mono">Leerpad {group.id}</span>
                  )}
                  <span>·</span>
                  <span>{totalItems} items</span>
                  {m.milestone && (
                    <>
                      <span>·</span>
                      <span className="italic">milestone included</span>
                    </>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
