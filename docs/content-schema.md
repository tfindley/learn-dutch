# Content Schema Reference

Canonical schema for every content type in `src/content/`. New JSON files in the right directory are auto-discovered via `import.meta.glob` — no code changes needed.

---

## Conventions (apply to all types)

- **IDs**: lowercase kebab-case URL slugs (`formal-u`, not `formalU`). Used in routes — must be unique within their directory.
- **`order`**: integer. Leave gaps (10, 20, 30) so new items can be inserted without renumbering.
- **`difficulty`**: exactly `"easy"` | `"medium"` | `"hard"`. Drives the coloured left-border in lists.
- **Bilingual fields**: `{ "nl": "...", "en": "..." }` objects. The `t(field, lang)` helper in `src/lib/i18n.js` accepts both objects and plain strings.
- **Belgian Dutch flags**: be explicit when a word is Belgian-specific (e.g. `look` (BE) vs `knoflook` (NL), `confituur` (BE) vs `jam` (NL)). Add it inline in the example or tip.
- **Phonetic notation**: square brackets, syllable hyphens, stressed syllable in CAPS — e.g. `[duh VIN-kul]`, `[buh-VOLKT]`.

---

## 1. Leerpad section

**Path:** `src/content/leerpaden/<id>.json` — id is lowercase, e.g. `4d.json`.

```json
{
  "id": "4D",
  "group": "4",
  "order": 13,
  "description": { "en": "Short description shown on the leerpad index card." },
  "rules": [
    {
      "id": "lp4d",
      "order": 1,
      "tag": "LEERPAD 4D",
      "title": { "nl": "Dutch title", "en": "English title" },
      "difficulty": "easy",
      "shortcut": "One-line takeaway shown at the top of the rule page.",
      "explanation": "Two or three sentences explaining the why and the gotchas.",
      "patterns": [
        {
          "rule": "Pattern heading — short and scannable",
          "examples": [
            "Dutch sentence. (English gloss.) ← optional inline note",
            "de woord [duh vohrt] — meaning · alternative — alt meaning"
          ]
        }
      ],
      "memory": "🧠 A memorable hook — emoji optional but common.",
      "examples": [
        { "nl": "Dutch sentence.", "en": "English translation." }
      ],
      "practice": [
        { "role": "A", "nl": "Question?", "en": "Question?" },
        { "role": "B", "nl": "Reply.", "en": "Reply." }
      ]
    }
  ]
}
```

- `id` (file-level): uppercase like `"4A"`. `group`: just the digit `"4"`.
- `id` (rule-level): kebab-case slug, **must be unique across all leerpad files** (it's the URL).
- A leerpad section may contain multiple rules — see `3a.json` for an example with `lp3a` + `lp3a_prep`.
- New top-level group → also add an entry to `_groups.json` (see "Group entry" below).
- `tag` is the short label shown above the rule title (e.g. `"LEERPAD 4A"`, `"LEERPAD 3A · OM / OP / IN"`).
- `practice[].role` alternates `"A"` / `"B"` — controls chat-bubble side and colour.
- **`relatedRules`** (optional, any rule type): array of rule IDs (leerpaden, grammar, or uitspraak) — rendered as a "See also" section linking out. Use to connect a leerpad rule to the grammar/uitspraak rule that explains its mechanism, or to chain related leerpad rules.
- **`relatedWoordjes`** (optional, any rule type): array of woordjes category IDs — rendered as a "Vocabulary" section beneath "See also" on rule pages. The woordjes Category page automatically shows the reverse direction ("Used in") for any rule that references it. Use to surface the vocab a learner will need to make the rule's examples meaningful.

### Group entry — `_groups.json`

```json
{
  "id": "4",
  "order": 4,
  "title": { "en": "Leerpad 4" },
  "description": { "en": "Real-world Dutch — weather, schedules, shopping." },
  "playlist": {
    "url": "https://youtube.com/playlist?list=...",
    "title": "Leerpad 4 — full course playlist"
  }
}
```

- **`playlist`** (optional): renders as a "📺 Watch the playlist" button on `/leerpaden` and `/leerpaden/<id>`. Omit if there's no playlist.
- A group may have **zero sections** — the page still renders the playlist and a "Content coming soon" placeholder. Useful for outline groups (e.g. Leerpad 0, Leerpad 5) where the course videos are available but text content isn't written yet.

### Sentence-anatomy tables inside patterns

A pattern's `examples` array can mix plain strings with **anatomy objects** — a structured way to break a Dutch sentence into labelled columns. Each anatomy object renders as a small inline table; mix and match freely with plain-string examples.

```json
{
  "rule": "🔍 Sentence anatomy — what sits in each slot",
  "examples": [
    "Plain string examples still render normally.",
    {
      "caption": "TIME at position 1 → inversion",
      "labels":  ["TIME",    "VERB", "SUBJECT", "PLACE"],
      "words":   ["Vandaag", "werk", "ik",      "thuis"],
      "english": ["Today",   "work", "I",       "at home"],
      "note": "Optional footnote shown under the table."
    }
  ]
}
```

- **`labels`** (required, array of strings): column headers — small caps, mono font.
- **`words`** (required, array of strings, SAME length as `labels`): the Dutch sentence broken into one word/phrase per column.
- **`english`** (optional, array of strings): translation row beneath the words.
- **`caption`** (optional): heading above the table.
- **`note`** (optional): footnote below the table.

Detected structurally — any object with both `labels` and `words` arrays renders as an anatomy table. Use a long-dash or empty string for visually-empty cells (e.g. yes/no questions where position 1 is empty); the renderer shows them as a faint `—`. Table widths are flexible — different examples can have different column counts (3, 4, 5+).

This is the right tool whenever you want to show "this word does X" mappings — much more scannable than `'word' = LABEL` inline lists.

### Style notes for leerpad content

- **Pattern examples** mix three formats freely:
  - Sentence with translation: `"Het regent. (It is raining.)"`
  - Vocabulary with phonetic: `"de winkel [duh VIN-kul] — the shop"`
  - Annotation arrows: `"... ← from 'regenen'"` or `"↳ Rule: ..."`
- Lead the `shortcut` with the single most useful takeaway. If there's a major trap (like `half drie` = 2:30), call it out there.
- The `memory` field uses a 🧠 emoji prefix by convention.
- Practice dialogues should be 4–10 turns, naturalistic, and reuse vocabulary from the patterns.

---

## 2. Grammar / Uitspraak rule

**Path:** `src/content/grammar/<id>.json` or `src/content/uitspraak/<id>.json`.

Same shape — only `kind` and the directory differ.

```json
{
  "id": "passive-voice",
  "kind": "grammar",
  "order": 10,
  "tag": "GRAMMAR · PASSIVE",
  "title": { "nl": "De lijdende vorm", "en": "Passive voice" },
  "difficulty": "hard",
  "shortcut": "worden + past participle",
  "explanation": "Two or three sentences.",
  "patterns": [
    { "rule": "Pattern heading", "examples": ["Dutch. (English.)"] }
  ],
  "memory": "Memorable hook.",
  "examples": [{ "nl": "...", "en": "..." }],
  "practice": []
}
```

- `kind`: `"grammar"` for `src/content/grammar/`, `"uitspraak"` for `src/content/uitspraak/`.
- `practice` may be empty `[]` for pure reference rules.
- `tag` convention: `"GRAMMAR · TOPIC"` or `"UITSPRAAK · TOPIC"`.

---

## 3. Woordjes (vocabulary category)

**Path:** `src/content/woordjes/<id>.json`.

```json
{
  "id": "clothing",
  "order": 28,
  "title": { "nl": "Kleding", "en": "Clothing" },
  "emoji": "👕",
  "color": "#4a90d9",
  "words": [
    {
      "nl": "de jas",
      "phonetic": "duh yas",
      "en": "the coat",
      "tip": "Optional flip-card back tip — pronunciation, gender, or memory hook."
    }
  ]
}
```

- `color`: any CSS hex — used for the category card background tint.
- `emoji`: shown on cards and the category page header.
- `words[].tip` is optional but encouraged — appears on the back of the flip card.

The pronunciation tips that show on every category page live in `_tips.json`:

```json
{ "pronunciationTips": [{ "sound": "g / ch", "rule": "Description..." }] }
```

---

## 4. Test (quiz)

**Path:** `src/content/tests/<id>.json`.

```json
{
  "id": "test-lp4d",
  "order": 10,
  "title": "Leerpad 4D",
  "subtitle": "Formal register and idiomatic expressions",
  "leerpad": "4D",
  "difficulty": "hard",
  "emoji": "🎓",
  "questions": [
    {
      "q": "Question text in English (or mixed).",
      "options": ["A", "B", "C", "D"],
      "answer": 2,
      "explanation": "Why C is correct, with the rule that proves it."
    }
  ]
}
```

- `options`: must be exactly 4.
- `answer`: 0-based index into `options`.
- `leerpad`: links the test to a leerpad section so a "Test this leerpad" button appears on matching rule pages. Match the leerpad `id` exactly (`"4A"`, `"4B"`, etc.). Use `"4"` to match all of leerpad 4 (see `test_lp4.json`).
- `title` and `subtitle` are plain strings (not bilingual objects) — they're shown in the test card and quiz header.

---

## 5. Course module (curriculum sequencing)

**Path:** `src/content/course/<id>.json` — e.g. `module-3.json`.

A course module sequences EXISTING content (vocabulary, grammar, lessons, tests) into an ordered path. Modules don't contain new content of their own — they only reference content by ID.

```json
{
  "id": "module-3",
  "order": 3,
  "weeks": "11-14",
  "title":    { "nl": "Tijd en sociaal leven", "en": "Time and Social Life" },
  "subtitle": { "en": "Clock time, time prepositions, daily routines, social plans." },
  "leerpadGroup": "3",
  "milestone": {
    "en": "Can tell the time, use om/op/in correctly, say what you like to do, and accept/decline plans."
  },
  "reference":  [{ "id": "terms_sentence", "priority": "supplementary", "note": "Optional refresher." }],
  "vocabulary": [{ "id": "time",       "priority": "core" }],
  "grammar":    [{ "id": "wordorder",  "priority": "core" }],
  "uitspraak":  [{ "id": "spelling_plural", "priority": "supplementary" }],
  "lessons":    [{ "id": "lp3a",       "priority": "core" }],
  "tests":      [{ "id": "test_lp3ab", "priority": "core" }]
}
```

- **`id`** is the URL slug (`/course/module-3`).
- **`order`** controls the timeline order (and is rendered as the module number).
- **`weeks`** is a free-form string like `"11-14"` — displayed but not parsed.
- **`leerpadGroup`** (optional): if set, the module page renders a "Leerpad N" badge + the playlist link from that group's entry in `_groups.json`.
- **`milestone`**: a "by the end of this module you can…" statement — rendered in a green callout near the top.
- The six section arrays — `reference`, `vocabulary`, `grammar`, `uitspraak`, `lessons`, `tests` — each contain `{id, priority?, note?}` items. The section name determines which content pool the `id` is resolved against (vocabulary → woordjes categories, lessons → leerpaden rules, etc).
- **`priority`** is `"core"` (default, shown prominently) or `"supplementary"` (dimmer, tagged "optional"). Omit for core.
- **`note`** is optional inline italic text rendered under the linked item — use it for "do this twice, it's a long-term retention problem" style guidance.

The course page is the **recommended entry point** for new learners — the landing page has a prominent CTA card pointing at `/course`.

---

## Hard rules for AI agents

1. **Never** modify `src/lib/content.js` to add content — add JSON files instead.
2. **Never** modify `src/App.jsx` route table for content — routes are derived from the file structure.
3. **Always** use the `t()` helper for bilingual fields in JSX — never `.nl`/`.en` directly.
4. **Preserve** `order` field gaps for future inserts.
5. **IDs** are URL slugs — lowercase kebab-case, unique within their content type.
6. **Difficulty** is exactly `easy` | `medium` | `hard`.
7. **Practice keys** are `nl`/`en`, not `dutch`/`english`.

## Verifying content

```bash
npm run build
```

Build fails with a clear error on malformed JSON or missing required fields.
