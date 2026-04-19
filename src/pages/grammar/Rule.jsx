import { useState, useMemo } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { getGrammarRuleById, referenceRules, uitspraakRules } from '../../lib/content';
import { t } from '../../lib/i18n';
import DifficultyBadge from '../../components/DifficultyBadge';
import PatternBlock from '../../components/PatternBlock';
import PracticeConversation from '../../components/PracticeConversation';

export default function GrammarRule() {
  const { ruleId } = useParams();
  const location = useLocation();
  const rule = getGrammarRuleById(ruleId);
  const [expandedPatterns, setExpandedPatterns] = useState({});

  if (!rule) {
    const section = location.pathname.includes('/uitspraak') ? 'uitspraak' : 'reference';
    return <Navigate to={`/grammar/${section}`} replace />;
  }

  const backPath = rule.kind === 'uitspraak' ? '/grammar/uitspraak' : '/grammar/reference';
  const backLabel = rule.kind === 'uitspraak' ? 'Uitspraak' : 'Grammar';

  const togglePattern = i => setExpandedPatterns(prev => ({ ...prev, [i]: !prev[i] }));
  const toggleAllPatterns = () => {
    const allExpanded = rule.patterns.every((_, i) => expandedPatterns[i]);
    setExpandedPatterns(allExpanded ? {} : Object.fromEntries(rule.patterns.map((_, i) => [i, true])));
  };

  const { prevRule, nextRule } = useMemo(() => {
    const sectionRules = rule.kind === 'uitspraak' ? uitspraakRules : referenceRules;
    const idx = sectionRules.findIndex(r => r.id === rule.id);
    return {
      prevRule: idx > 0 ? sectionRules[idx - 1] : null,
      nextRule: idx < sectionRules.length - 1 ? sectionRules[idx + 1] : null,
    };
  }, [rule.kind, rule.id]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link to="/grammar" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Grammar</Link>
        <span>/</span>
        <Link to={backPath} className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">{backLabel}</Link>
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

      <div className="flex justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
        {prevRule ? (
          <Link to={`${backPath}/${prevRule.id}`}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors min-w-0">
            <span className="shrink-0">←</span>
            <span className="truncate">{t(prevRule.title, 'nl')}</span>
          </Link>
        ) : <div />}
        {nextRule && (
          <Link to={`${backPath}/${nextRule.id}`}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors min-w-0 text-right">
            <span className="truncate">{t(nextRule.title, 'nl')}</span>
            <span className="shrink-0">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
