import { Link } from 'react-router-dom';
import { getRelatedRules } from '../lib/content';
import { t } from '../lib/i18n';

export default function RelatedRules({ ids }) {
  const related = getRelatedRules(ids);
  if (related.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
        See also
      </h2>
      <div className="space-y-2">
        {related.map(({ rule, path, kindLabel }) => (
          <Link
            key={rule.id}
            to={path}
            className="block rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition-colors"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-0.5">{kindLabel}</div>
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  {t(rule.title, 'nl')}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {t(rule.title, 'en')}
                </div>
              </div>
              <span className="text-gray-400 dark:text-gray-600 shrink-0">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
