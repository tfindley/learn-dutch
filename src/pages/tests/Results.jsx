import { Link, useLocation, Navigate } from 'react-router-dom';
import { getTestById } from '../../lib/content';

function gradeEmoji(pct) {
  if (pct >= 90) return '🏆';
  if (pct >= 75) return '🎉';
  if (pct >= 60) return '👍';
  if (pct >= 40) return '📚';
  return '💪';
}

export default function TestsResults() {
  const { state } = useLocation();
  if (!state?.answers) return <Navigate to="/tests" replace />;

  const { answers, testId } = state;
  const test = getTestById(testId);
  const correct = answers.filter(a => a.selected === a.correct).length;
  const pct = Math.round((correct / answers.length) * 100);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <div className="text-5xl mb-3">{gradeEmoji(pct)}</div>
        <h1 className="text-3xl font-bold mb-1">{pct}%</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {correct} / {answers.length} correct
          {test && ` — ${test.title}`}
        </p>
      </div>

      <div className="space-y-4 mb-10">
        {answers.map((a, i) => {
          const isCorrect = a.selected === a.correct;
          return (
            <div
              key={i}
              className={`rounded-lg border p-4 ${
                isCorrect
                  ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20'
                  : 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20'
              }`}
            >
              <p className="font-medium text-sm text-gray-900 dark:text-gray-100 mb-2">{a.question.q}</p>
              {!isCorrect && (
                <p className="text-sm text-red-700 dark:text-red-400 mb-1">
                  Your answer: {a.question.options[a.selected] ?? '—'}
                </p>
              )}
              <p className="text-sm text-green-700 dark:text-green-400 mb-2">
                Correct: {a.question.options[a.correct]}
              </p>
              {a.question.explanation && (
                <p className="text-xs text-gray-600 dark:text-gray-400 italic">{a.question.explanation}</p>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex gap-3">
        <Link
          to={`/tests/${testId}`}
          className="flex-1 text-center py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
        >
          Try again
        </Link>
        <Link
          to="/tests"
          className="flex-1 text-center py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          All tests
        </Link>
      </div>
    </div>
  );
}
