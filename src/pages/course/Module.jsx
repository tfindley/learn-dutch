import { useParams, Link, Navigate } from 'react-router-dom';
import {
  getCourseModuleById,
  getCourseItem,
  courseModules,
  leerpadGroups,
} from '../../lib/content';
import { t } from '../../lib/i18n';
import DifficultyBadge from '../../components/DifficultyBadge';

const SECTIONS = [
  { key: 'reference',  label: 'Read first — Reference', hint: 'Glossary entries to bookmark.' },
  { key: 'vocabulary', label: 'Vocabulary',             hint: null },
  { key: 'grammar',    label: 'Grammar',                hint: null },
  { key: 'uitspraak',  label: 'Uitspraak',              hint: null },
  { key: 'lessons',    label: 'Lessons',                hint: null },
  { key: 'tests',      label: 'Tests',                  hint: null },
];

function ItemRow({ section, item }) {
  const resolved = getCourseItem(section, item.id);
  if (!resolved) {
    return (
      <div className="px-4 py-3 rounded-lg border border-dashed border-red-300 dark:border-red-700 text-sm text-red-600 dark:text-red-400">
        Missing: {section}/{item.id}
      </div>
    );
  }
  const isCore = item.priority !== 'supplementary';
  return (
    <Link
      to={resolved.path}
      className={`block px-4 py-3 rounded-lg border transition-colors ${
        isCore
          ? 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-green-300 dark:hover:border-green-700 hover:bg-green-50/30 dark:hover:bg-green-950/20'
          : 'border-gray-100 dark:border-gray-800/50 bg-transparent text-gray-500 dark:text-gray-500 hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900/50'
      }`}
    >
      <div className="flex items-center justify-between gap-3 mb-0.5">
        <div className="flex items-center gap-2 min-w-0">
          {resolved.emoji && <span className="shrink-0">{resolved.emoji}</span>}
          <span className={`text-sm font-medium truncate ${isCore ? 'text-gray-900 dark:text-gray-100' : ''}`}>
            {section === 'tests' ? resolved.title : t(resolved.title, 'nl')}
          </span>
          {section === 'lessons' && resolved.tag && (
            <span className="font-mono text-xs text-gray-400 dark:text-gray-600 shrink-0">{resolved.tag}</span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {!isCore && (
            <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-600">optional</span>
          )}
          {resolved.difficulty && <DifficultyBadge difficulty={resolved.difficulty} />}
          <span className="text-gray-400 dark:text-gray-600">→</span>
        </div>
      </div>
      {section === 'tests'
        ? resolved.subtitle && (
            <div className="text-xs text-gray-500 dark:text-gray-500 truncate">{resolved.subtitle}</div>
          )
        : (
            <div className="text-xs text-gray-500 dark:text-gray-500 truncate">{t(resolved.title, 'en')}</div>
          )}
      {item.note && (
        <div className="mt-1 text-xs italic text-gray-500 dark:text-gray-400">{item.note}</div>
      )}
    </Link>
  );
}

export default function CourseModule() {
  const { moduleId } = useParams();
  const module = getCourseModuleById(moduleId);

  if (!module) return <Navigate to="/course" replace />;

  const idx = courseModules.findIndex(m => m.id === module.id);
  const prev = idx > 0 ? courseModules[idx - 1] : null;
  const next = idx < courseModules.length - 1 ? courseModules[idx + 1] : null;
  const group = leerpadGroups.find(g => g.id === module.leerpadGroup);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link to="/course" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
          Course
        </Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-gray-100">
          Module {module.order}
        </span>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-3 mb-1">
          <h1 className="text-2xl font-bold">{t(module.title, 'nl')}</h1>
          <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
            weeks {module.weeks}
          </span>
        </div>
        <div className="text-sm text-gray-400 dark:text-gray-500 mb-4">
          {t(module.title, 'en')}
        </div>
        {module.subtitle && (
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {t(module.subtitle)}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {group && (
            <Link
              to={`/leerpaden/${group.id}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xs font-medium"
            >
              📚 Leerpad {group.id}
            </Link>
          )}
          {group?.playlist && (
            <a
              href={group.playlist.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-950/50 transition-colors text-xs font-medium"
            >
              📺 Course playlist ↗
            </a>
          )}
        </div>
      </div>

      {module.milestone && (
        <div className="mb-8 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 px-4 py-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-green-700 dark:text-green-400 mb-1">
            By the end of this module
          </div>
          <p className="text-sm text-green-900 dark:text-green-200 leading-relaxed">
            {t(module.milestone)}
          </p>
        </div>
      )}

      {SECTIONS.map(section => {
        const items = module[section.key] || [];
        if (items.length === 0) return null;
        return (
          <section key={section.key} className="mb-8">
            <div className="flex items-baseline justify-between mb-3">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {section.label}
              </h2>
              {section.hint && (
                <span className="text-xs text-gray-400 dark:text-gray-600">{section.hint}</span>
              )}
            </div>
            <div className="space-y-2">
              {items.map(item => (
                <ItemRow key={`${section.key}-${item.id}`} section={section.key} item={item} />
              ))}
            </div>
          </section>
        );
      })}

      <div className="flex justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
        {prev ? (
          <Link
            to={`/course/${prev.id}`}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors min-w-0"
          >
            <span className="shrink-0">←</span>
            <span className="truncate">Module {prev.order}: {t(prev.title, 'nl')}</span>
          </Link>
        ) : <div />}
        {next && (
          <Link
            to={`/course/${next.id}`}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors min-w-0 text-right"
          >
            <span className="truncate">Module {next.order}: {t(next.title, 'nl')}</span>
            <span className="shrink-0">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
