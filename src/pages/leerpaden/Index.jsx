import { Link } from 'react-router-dom';
import { leerpadTree } from '../../lib/content';
import { t } from '../../lib/i18n';
import RuleListItem from '../../components/RuleListItem';

export default function LeerpadeIndex() {
  const totalRules = leerpadTree.reduce((n, g) => n + g.sections.reduce((m, s) => m + s.rules.length, 0), 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-1">Leerpaden</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        Sequential curriculum — follow from Leerpad 1 through 4 for a structured learning path.
        {' '}{totalRules} rules across {leerpadTree.length} units.
      </p>

      <div className="space-y-10">
        {leerpadTree.map(group => (
          <section key={group.id}>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-lg font-bold">Leerpad {group.id}</h2>
              <Link
                to={`/leerpaden/${group.id}`}
                className="text-xs text-green-600 dark:text-green-400 hover:underline font-medium"
              >
                Open unit →
              </Link>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {t(group.description)}
            </p>

            <div className="space-y-4">
              {group.sections.map(section => (
                <div key={section.id}>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 font-mono">
                      {section.id}
                    </h3>
                    <span className="text-xs text-gray-400 dark:text-gray-600">—</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {t(section.description)}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {section.rules.map(rule => (
                      <RuleListItem key={rule.id} rule={rule} basePath={`/leerpaden/${group.id}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
