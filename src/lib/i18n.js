/**
 * Resolve a potentially multi-language field.
 *
 * Fields may be plain strings (legacy) or objects keyed by language code:
 *   { nl: "Hoe gaat het?", en: "Starting a Conversation", fr: "..." }
 *
 * To add a new language (e.g. French), add "fr" keys to content files —
 * no code changes needed beyond passing lang="fr" to t().
 */
export function t(field, lang = 'en') {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'object') {
    return field[lang] ?? field.en ?? field.nl ?? Object.values(field)[0] ?? '';
  }
  return String(field);
}
