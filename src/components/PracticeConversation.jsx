import { useLanguage } from '../providers/LanguageProvider';

export default function PracticeConversation({ practice }) {
  const { showEnglish } = useLanguage();
  return (
    <div className="space-y-2">
      {practice.map((line, i) => (
        <div key={i} className={`flex gap-3 ${line.role === 'B' ? 'flex-row-reverse' : ''}`}>
          <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
            line.role === 'A'
              ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-400'
              : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-400'
          }`}>
            {line.role}
          </div>
          <div className={`max-w-[80%] rounded-xl px-4 py-2.5 ${
            line.role === 'A' ? 'bg-gray-100 dark:bg-gray-800' : 'bg-green-50 dark:bg-green-950/40'
          }`}>
            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{line.nl}</div>
            {showEnglish && (
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 italic">{line.en}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
