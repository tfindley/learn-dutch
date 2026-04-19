import { Link } from 'react-router-dom';
import DifficultyBadge from './DifficultyBadge';
import { t } from '../lib/i18n';

const DIFF_BORDER = {
  easy:   'border-l-4 border-l-green-400 dark:border-l-green-600',
  medium: 'border-l-4 border-l-amber-400 dark:border-l-amber-500',
  hard:   'border-l-4 border-l-red-400 dark:border-l-red-500',
};

export default function RuleListItem({ rule, basePath }) {
  return (
    <Link
      to={`${basePath}/${rule.id}`}
      className={`flex items-center justify-between gap-4 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-green-400 dark:hover:border-green-600 transition-colors group ${DIFF_BORDER[rule.difficulty] ?? ''}`}
    >
      <div className="min-w-0">
        <div className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-0.5">{rule.tag}</div>
        <div className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
          {t(rule.title, 'nl')}
        </div>
        <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{t(rule.title, 'en')}</div>
      </div>
      <div className="shrink-0">
        <DifficultyBadge difficulty={rule.difficulty} />
      </div>
    </Link>
  );
}
