export function isAnatomy(ex) {
  return ex && typeof ex === 'object' && Array.isArray(ex.labels) && Array.isArray(ex.words);
}

export default function SentenceAnatomy({ caption, labels, words, english, note }) {
  return (
    <div className="my-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden">
      {caption && (
        <div className="px-3 py-2 bg-gray-50 dark:bg-gray-900/60 text-xs font-medium text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
          {caption}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
              {labels.map((label, i) => (
                <th
                  key={i}
                  className="px-3 py-2 text-left text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 whitespace-nowrap"
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className={english ? 'border-b border-gray-100 dark:border-gray-800/50' : ''}>
              {words.map((word, i) => (
                <td
                  key={i}
                  className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap"
                >
                  {word || <span className="text-gray-300 dark:text-gray-700">—</span>}
                </td>
              ))}
            </tr>
            {english && (
              <tr>
                {english.map((word, i) => (
                  <td
                    key={i}
                    className="px-3 py-2 text-xs italic text-gray-500 dark:text-gray-400 whitespace-nowrap"
                  >
                    {word}
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {note && (
        <div className="px-3 py-2 bg-gray-50 dark:bg-gray-900/60 text-xs text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
          {note}
        </div>
      )}
    </div>
  );
}
