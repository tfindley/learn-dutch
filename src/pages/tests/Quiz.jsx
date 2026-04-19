import { useState } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { getTestById, tests } from '../../lib/content';
import { useLocalStorage } from '../../lib/useLocalStorage';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function TestsQuiz() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [, setScores] = useLocalStorage('test-scores', {});

  const baseTest = getTestById(testId);
  const [questions] = useState(() => {
    if (!baseTest) return [];
    if (testId === 'marathon') {
      return shuffle(tests.filter(t => t.id !== 'marathon').flatMap(t => t.questions));
    }
    return baseTest.questions;
  });

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState([]);

  if (!baseTest) return <Navigate to="/tests" replace />;

  const q = questions[current];
  const progress = ((current) / questions.length) * 100;
  const isLast = current === questions.length - 1;

  function handleSelect(idx) {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
  }

  function handleNext() {
    const newAnswers = [...answers, { question: q, selected, correct: q.answer }];
    if (isLast) {
      const score = (newAnswers.filter(a => a.selected === a.correct).length / questions.length) * 100;
      setScores(prev => ({ ...prev, [testId]: score }));
      navigate(`/tests/${testId}/results`, { state: { answers: newAnswers, testId } });
    } else {
      setAnswers(newAnswers);
      setCurrent(c => c + 1);
      setSelected(null);
      setRevealed(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/tests" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
          ← Tests
        </Link>
        <div className="flex-1">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>{baseTest.emoji} {baseTest.title}</span>
            <span>{current + 1} / {questions.length}</span>
          </div>
          <div className="h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <div
              className="h-full rounded-full bg-purple-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-relaxed mb-6">
          {q.q}
        </h2>

        <div className="space-y-2">
          {q.options.map((opt, i) => {
            let style = 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-purple-400 dark:hover:border-purple-600';
            if (revealed) {
              if (i === q.answer) style = 'border-green-400 bg-green-50 dark:bg-green-950/40 dark:border-green-600';
              else if (i === selected) style = 'border-red-400 bg-red-50 dark:bg-red-950/40 dark:border-red-600';
              else style = 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 opacity-50';
            } else if (selected === i) {
              style = 'border-purple-400 bg-purple-50 dark:bg-purple-950/40 dark:border-purple-600';
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={revealed && i !== selected && i !== q.answer}
                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all text-sm font-medium ${style}`}
              >
                <span className="text-gray-400 dark:text-gray-500 mr-2">{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {revealed && q.explanation && (
        <div className="mb-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-300">{q.explanation}</p>
        </div>
      )}

      {revealed && (
        <button
          onClick={handleNext}
          className="w-full py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
        >
          {isLast ? 'See Results' : 'Next Question →'}
        </button>
      )}
    </div>
  );
}
