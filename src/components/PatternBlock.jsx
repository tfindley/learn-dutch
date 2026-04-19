export default function PatternBlock({ pattern, expanded, onToggle }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-left bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="font-medium text-sm text-gray-800 dark:text-gray-200">{pattern.rule}</span>
        <svg className={`w-4 h-4 text-gray-400 transition-transform shrink-0 ml-2 ${expanded ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 4l4 4 4-4"/>
        </svg>
      </button>
      {expanded && (
        <div className="px-4 py-3 space-y-1.5 bg-white dark:bg-gray-900">
          {pattern.examples.map((ex, i) => (
            <div key={i} className="text-sm font-mono text-gray-700 dark:text-gray-300 leading-relaxed">{ex}</div>
          ))}
        </div>
      )}
    </div>
  );
}
