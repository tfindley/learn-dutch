import { getRelatedRules } from '../lib/content';
import { t } from '../lib/i18n';
import RelatedCardList from './RelatedCardList';

const KIND_LABEL = {
  leerpad:   rule => `Leerpad ${rule.leerpad}`,
  grammar:   ()   => 'Rules',
  reference: ()   => 'Reference',
  uitspraak: ()   => 'Uitspraak',
};

export default function RelatedRules({ ids }) {
  const items = getRelatedRules(ids).map(({ rule, path, kind }) => ({
    key: rule.id,
    to: path,
    caption: KIND_LABEL[kind]?.(rule) ?? kind,
    titleNl: t(rule.title, 'nl'),
    titleEn: t(rule.title, 'en'),
  }));
  return <RelatedCardList heading="See also" accent="blue" items={items} />;
}
