import { grammarRules } from '../../lib/content';
import RuleListItem from '../../components/RuleListItem';

export default function GrammarRules() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">Grammar Rules</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        Topic-based grammar rules you can dip into at any time.
      </p>

      <div className="space-y-2">
        {grammarRules.map(rule => (
          <RuleListItem key={rule.id} rule={rule} basePath="/grammar/rules" />
        ))}
      </div>
    </div>
  );
}
