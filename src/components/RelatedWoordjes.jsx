import { getRelatedWoordjes } from '../lib/content';
import { t } from '../lib/i18n';
import RelatedCardList from './RelatedCardList';

export default function RelatedWoordjes({ ids }) {
  const items = getRelatedWoordjes(ids).map(({ category, path }) => ({
    key: category.id,
    to: path,
    emoji: category.emoji,
    titleNl: t(category.title, 'nl'),
    titleEn: `${t(category.title, 'en')} · ${category.words?.length || 0} woordjes`,
  }));
  return <RelatedCardList heading="Vocabulary" accent="amber" items={items} />;
}
