import { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getLeerpadRuleById, leerpaden, getTestsForLeerpad } from '../../lib/content';
import { t } from '../../lib/i18n';
import DifficultyBadge from '../../components/DifficultyBadge';
import PatternBlock from '../../components/PatternBlock';
import PracticeConversation from '../../components/PracticeConversation';

export default function LeerpadRule() {
  const { groupId, ruleId } = useParams();
  const rule = getLeerpadRuleById(ruleId);
  const [expandedPatterns, setExpandedPatterns] = useState({});

  if (!rule) return <Navigate to={`/leerpaden/${groupId ?? ''}`} replace />;

  const togglePattern = i => setExpandedPatterns(prev => ({ ...prev, [i]: !prev[i] }));
  const toggleAllPatterns = () => {
    const allExpanded = rule.patterns.every((_, i) => expandedPatterns[i]);
    setExpandedPatterns(allExpanded ? {} : Object.fromEntries(rule.patterns.map((_, i) => [i, true])));
  };
  const matchingTests = useMemo(
    () => rule.leerpad ? getTestsForLeerpad(rule.leerpad) : [],
    [rule.leerpad]
  );

  const { prevRule, nextRule } = useMemo(() => {
    const sectionRules = leerpaden.filter(r => r.leerpad === rule.leerpad);
    const idx = sectionRules.findIndex(r => r.id === rule.id);
    return {
      prevRule: idx > 0 ? sectionRules[idx - 1] : null,
      nextRule: idx < sectionRules.length - 1 ? sectionRules[idx + 1] : null,
    };
  }, [rule.leerpad, rule.id]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link to="/leerpaden" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Leerpaden</Link>
        <span>/</span>
        <Link to={`/leerpaden/${rule.group}`} className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
          Leerpad {rule.group}
        </Link>
        <span>/</span>
        <span className="text-gray-400 dark:text-gray-500 font-mono text-xs">{rule.leerpad}</span>
        <span>/</span>
        <span className="text-gray-700 dark:text-gray-300 truncate">{t(rule.title, 'nl')}</span>
      </div>

      <div className="mb-8">
        <div className="flex items-start justify-between gap-4 mb-1">
          <h1 className="text-2xl font-bold leading-tight">{t(rule.title, 'nl')}</h1>
          <DifficultyBadge difficulty={rule.difficulty} />
        </div>
        <div className="text-sm text-gray-400 dark:text-gray-500 mb-4">{t(rule.title, 'en')}</div>
        <div className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-4">{rule.tag}</div>

        {rule.shortcut && (
          <div className="rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 px-4 py-3 font-mono text-sm text-green-800 dark:text-green-300">
            💡 {rule.shortcut}
          </div>
        )}
      </div>

      {rule.explanation && (
        <div className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{rule.explanation}</p>
        </div>
      )}

      {rule.patterns?.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Patterns</h2>
            <button
              onClick={toggleAllPatterns}
              className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              {rule.patterns.every((_, i) => expandedPatterns[i]) ? 'Collapse all' : 'Expand all'}
            </button>
          </div>
          <div className="space-y-2">
            {rule.patterns.map((pattern, i) => (
              <PatternBlock key={i} pattern={pattern} expanded={!!expandedPatterns[i]} onToggle={() => togglePattern(i)} />
            ))}
          </div>
        </section>
      )}

      {rule.memory && (
        <section className="mb-8">
          <div className="rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 px-4 py-3 text-sm text-amber-800 dark:text-amber-300">
            {rule.memory}
          </div>
        </section>
      )}

      {rule.examples?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Examples</h2>
          <div className="space-y-2">
            {rule.examples.map((ex, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:gap-4 text-sm py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                <span className="font-mono font-medium text-gray-900 dark:text-gray-100 sm:w-1/2">{ex.nl}</span>
                <span className="text-gray-500 dark:text-gray-400 sm:w-1/2">{ex.en}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {rule.practice?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Practice Conversation</h2>
          <PracticeConversation practice={rule.practice} />
        </section>
      )}

      {matchingTests.length > 0 && (
        <div className="mb-8 p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900">
          <p className="text-sm text-purple-700 dark:text-purple-400 mb-3 font-medium">
            Ready to test leerpad {rule.leerpad}?
          </p>
          <div className="flex flex-wrap gap-2">
            {matchingTests.map(test => (
              <Link key={test.id} to={`/tests/${test.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors">
                {test.emoji} {test.title} →
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
        {prevRule ? (
          <Link to={`/leerpaden/${rule.group}/${prevRule.id}`}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors min-w-0">
            <span className="shrink-0">←</span>
            <span className="truncate">{t(prevRule.title, 'nl')}</span>
          </Link>
        ) : <div />}
        {nextRule && (
          <Link to={`/leerpaden/${rule.group}/${nextRule.id}`}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors min-w-0 text-right">
            <span className="truncate">{t(nextRule.title, 'nl')}</span>
            <span className="shrink-0">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
