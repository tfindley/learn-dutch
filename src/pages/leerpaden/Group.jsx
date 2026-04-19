import { useParams, Link, Navigate } from 'react-router-dom';
import { leerpadTree } from '../../lib/content';
import { t } from '../../lib/i18n';
import RuleListItem from '../../components/RuleListItem';

export default function LeerpadGroup() {
  const { groupId } = useParams();
  const group = leerpadTree.find(g => g.id === groupId);

  if (!group) return <Navigate to="/leerpaden" replace />;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link to="/leerpaden" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
          Leerpaden
        </Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-gray-100">Leerpad {group.id}</span>
      </div>

      <h1 className="text-2xl font-bold mb-2">Leerpad {group.id}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        {t(group.description)}
      </p>

      <div className="space-y-8">
        {group.sections.map(section => (
          <section key={section.id}>
            <div className="mb-2">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 font-mono mb-1">
                {section.id}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t(section.description)}
              </p>
            </div>
            <div className="space-y-2">
              {section.rules.map(rule => (
                <RuleListItem key={rule.id} rule={rule} basePath={`/leerpaden/${groupId}`} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
