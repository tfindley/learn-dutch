import { Link } from 'react-router-dom';
import { tests, marathonTest } from '../../lib/content';
import { useLocalStorage } from '../../lib/useLocalStorage';
import DifficultyBadge from '../../components/DifficultyBadge';

const LEERPAD_ORDER = ['Opening', '1A', '1B', '2', '3A+B', '3A', '3B', '4', 'Pronunciation'];

function groupTests(tests) {
  return tests.reduce((acc, t) => {
    const key = t.leerpad ?? 'Other';
    if (!acc[key]) acc[key] = [];
    acc[key].push(t);
    return acc;
  }, {});
}

const groups = groupTests(tests);
const orderedKeys = [
  ...LEERPAD_ORDER.filter(k => groups[k]),
  ...Object.keys(groups).filter(k => !LEERPAD_ORDER.includes(k)),
];
const totalQuestions = tests.reduce((n, t) => n + t.questions.length, 0);

export default function TestsIndex() {
  const [scores] = useLocalStorage('test-scores', {});
  const completedTests = tests.filter(t => scores[t.id] !== undefined).length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Tests</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {tests.length} tests · {totalQuestions} questions · {completedTests} completed
        </p>
      </div>

      {marathonTest && (
        <div className="mb-8 rounded-xl border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/30 dark:to-gray-950 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-3xl mb-2">{marathonTest.emoji}</div>
              <h2 className="text-xl font-bold text-purple-900 dark:text-purple-300">{marathonTest.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{marathonTest.subtitle}</p>
              <p className="text-sm text-purple-600 dark:text-purple-400 mt-2 font-medium">
                All {totalQuestions} questions shuffled into one sitting
              </p>
            </div>
            {scores[marathonTest.id] !== undefined && (
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {Math.round(scores[marathonTest.id])}%
                </div>
                <div className="text-xs text-gray-500">last score</div>
              </div>
            )}
          </div>
          <Link
            to={`/tests/${marathonTest.id}`}
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
          >
            Start Marathon →
          </Link>
        </div>
      )}

      <div className="space-y-8">
        {orderedKeys.map(key => (
          <section key={key}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 font-mono">
              LEERPAD {key}
            </h2>
            <div className="space-y-2">
              {groups[key].map(test => {
                const score = scores[test.id];
                return (
                  <Link
                    key={test.id}
                    to={`/tests/${test.id}`}
                    className="group flex items-center gap-4 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-purple-400 dark:hover:border-purple-600 transition-colors"
                  >
                    <span className="text-xl shrink-0">{test.emoji}</span>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors truncate">
                        {test.title}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500 truncate">{test.subtitle}</div>
                    </div>
                    <div className="shrink-0 flex items-center gap-3">
                      <span className="text-xs text-gray-400 dark:text-gray-600 hidden sm:block">
                        {test.questions.length}q
                      </span>
                      {score !== undefined ? (
                        <span className={`text-sm font-bold ${score >= 80 ? 'text-green-600 dark:text-green-400' : score >= 60 ? 'text-amber-600 dark:text-amber-400' : 'text-red-600 dark:text-red-400'}`}>
                          {Math.round(score)}%
                        </span>
                      ) : (
                        <DifficultyBadge difficulty={test.difficulty} />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
