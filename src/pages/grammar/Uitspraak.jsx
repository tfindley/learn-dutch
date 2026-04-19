import { uitspraakRules } from '../../lib/content';
import RuleListItem from '../../components/RuleListItem';

export default function GrammarUitspraak() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">Uitspraak & Spelling</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        Pronunciation and spelling rules specific to Belgian Dutch.
      </p>

      <div className="space-y-2">
        {uitspraakRules.map(rule => (
          <RuleListItem key={rule.id} rule={rule} basePath="/grammar/uitspraak" />
        ))}
      </div>
    </div>
  );
}
