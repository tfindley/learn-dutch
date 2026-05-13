import { Link } from 'react-router-dom';

const ACCENT = {
  blue:  'hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/30 dark:hover:bg-blue-950/20',
  amber: 'hover:border-amber-300 dark:hover:border-amber-700 hover:bg-amber-50/30 dark:hover:bg-amber-950/20',
  green: 'hover:border-green-300 dark:hover:border-green-700 hover:bg-green-50/30 dark:hover:bg-green-950/20',
};

export default function RelatedCardList({ heading, items, accent = 'blue', className = 'mb-8' }) {
  if (!items || items.length === 0) return null;
  const hover = ACCENT[accent] ?? ACCENT.blue;

  return (
    <section className={className}>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
        {heading}
      </h2>
      <div className="space-y-2">
        {items.map(item => (
          <Link
            key={item.key}
            to={item.to}
            className={`block rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3 transition-colors ${hover}`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                {item.emoji && <span className="text-2xl shrink-0">{item.emoji}</span>}
                <div className="min-w-0">
                  {item.caption && (
                    <div className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-0.5">
                      {item.caption}
                    </div>
                  )}
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    {item.titleNl}
                  </div>
                  {item.titleEn && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {item.titleEn}
                    </div>
                  )}
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
