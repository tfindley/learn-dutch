# Contributing to Learn Dutch (Belgian)

This guide covers how to add content, fix bugs, and extend the app — whether you are a human developer or an AI agent.

---

## Quick start

```bash
git clone https://github.com/tfindley/learn-dutch
cd learn-dutch
npm install
npm run dev        # http://localhost:5173
```

---

## Project structure

```text
src/
  content/          ← All course content (JSON — edit here)
  components/       ← Shared UI components
  pages/            ← Route-level page components
  providers/        ← React context (theme, language)
  lib/              ← Data loaders (content.js) and utilities (i18n.js)
```

See [CLAUDE.md](CLAUDE.md) for the full architecture reference and routing table.

---

## Adding content

Content uses `import.meta.glob` — **adding a new JSON file to the right directory is automatically picked up at the next build with no code changes required**.

### Add vocabulary (Woordjes)

Create `src/content/woordjes/<id>.json`:

```json
{
  "id": "clothing",
  "order": 28,
  "title": { "nl": "Kleding", "en": "Clothing" },
  "emoji": "👕",
  "color": "#4a90d9",
  "words": [
    { "nl": "de jas",  "phonetic": "duh yas",  "en": "the coat",  "tip": "Soft 'j' — like English 'y'." },
    { "nl": "het hemd", "phonetic": "huht hemt", "en": "the shirt", "tip": "Final 'd' becomes 't' in speech." }
  ]
}
```

- `id` must be a unique URL-safe slug
- `order` controls display order on the index page (integers, gaps allowed)
- `title.nl` and `title.en` are shown on cards and the category page header
- `words[].phonetic` uses the app's Belgian Dutch phonetic notation (see existing files for examples)
- `words[].tip` is shown on the back of flip cards

### Add a leerpad section

Create `src/content/leerpaden/<id>.json` (e.g. `4d.json`):

```json
{
  "id": "4D",
  "group": "4",
  "order": 13,
  "description": { "en": "Advanced idiomatic expressions and formal register." },
  "rules": [
    {
      "id": "formal-u",
      "tag": "4D.1",
      "title": { "nl": "Formeel 'u'", "en": "Formal 'u'" },
      "difficulty": "medium",
      "shortcut": "Use 'u' with strangers, elders, and in professional contexts.",
      "explanation": "Belgian Dutch retains formal 'u' more strongly than Dutch in the Netherlands.",
      "patterns": [
        { "rule": "Subject pronoun", "examples": ["U bent welkom. (You are welcome.)"] }
      ],
      "memory": "Think of 'u' like 'vous' in French — always polite in Belgium.",
      "examples": [
        { "nl": "Kunt u mij helpen?", "en": "Can you help me?" }
      ],
      "practice": [
        { "role": "A", "nl": "Kunt u mij helpen?", "en": "Can you help me?" },
        { "role": "B", "nl": "Natuurlijk, met plezier.", "en": "Of course, with pleasure." }
      ]
    }
  ]
}
```

- Add the group to `src/content/leerpaden/_groups.json` if creating a new top-level unit (Leerpad 5 etc.)
- `difficulty`: `"easy"` | `"medium"` | `"hard"`
- `practice[].role`: `"A"` or `"B"` — controls chat bubble side and colour

### Add a grammar reference rule

Create `src/content/grammar/<id>.json`:

```json
{
  "id": "passive-voice",
  "kind": "grammar",
  "order": 10,
  "tag": "GR.10",
  "title": { "nl": "De lijdende vorm", "en": "Passive voice" },
  "difficulty": "hard",
  "shortcut": "worden + past participle",
  "explanation": "The passive voice shifts focus from the doer to the action or recipient.",
  "patterns": [
    { "rule": "Present passive", "examples": ["Het boek wordt gelezen. (The book is being read.)"] }
  ],
  "memory": "worden = to become — in passive, 'become acted upon'.",
  "examples": [
    { "nl": "De brief wordt geschreven.", "en": "The letter is being written." }
  ],
  "practice": []
}
```

### Add a pronunciation rule

Same schema as grammar, but save to `src/content/uitspraak/<id>.json` with `"kind": "uitspraak"`.

### Add a test

Create `src/content/tests/<id>.json`:

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
      "q": "Which pronoun is used in formal Belgian Dutch?",
      "options": ["jij", "je", "u", "jou"],
      "answer": 2,
      "explanation": "'u' is the formal second-person pronoun, used with strangers and in professional settings."
    }
  ]
}
```

- `answer` is the 0-based index into `options`
- `leerpad` links the test to a leerpad section — a "Test this leerpad" button appears on matching rule pages

---

## Multi-language fields

Bilingual fields use `{ "nl": "...", "en": "..." }` objects. The `t(field, lang)` helper in `src/lib/i18n.js` resolves both plain strings and language-code objects, so legacy plain-string fields still work. If you want to add a third language (e.g. French), add `"fr": "..."` keys and pass `lang: 'fr'` to the renderer.

---

## Code contributions

### Component conventions

- Shared UI goes in `src/components/`
- Page-level components go in `src/pages/<section>/`
- Use Tailwind utility classes — avoid inline styles
- Dark mode: pair every light class with a `dark:` variant (e.g. `text-gray-900 dark:text-gray-100`)
- Difficulty colours: use `border-l-4 border-l-green-400` (easy), `border-l-amber-400` (medium), `border-l-red-400` (hard) — same as `RuleListItem`
- English visibility: use `{showEnglish && <span>...</span>}` via `useLanguage()`, or the `<PracticeConversation>` component which handles it automatically

### i18n

Use `t(field, lang)` from `src/lib/i18n.js` whenever rendering a bilingual field:

```js
import { t } from '../../lib/i18n';
// ...
<h1>{t(rule.title, 'nl')}</h1>
<p className="text-sm text-gray-400">{t(rule.title, 'en')}</p>
```

### Content lookups

Use the helper functions in `src/lib/content.js` rather than filtering arrays directly:

| Helper | Returns |
| --- | --- |
| `getLeerpadRuleById(id)` | Single leerpad rule object |
| `getGrammarRuleById(id)` | Single grammar or uitspraak rule |
| `getTestById(id)` | Single test (or `marathonTest` for `"marathon"`) |
| `getTestsForLeerpad(leerpadId)` | Tests whose `leerpad` field matches |
| `leerpadTree` | Groups with nested sections (for index pages) |

### Running the build

```bash
npm run build     # production build → dist/
npm run preview   # serve dist/ locally
```

---

## Instructions for AI agents

> This section describes the codebase conventions that AI agents (Claude Code, etc.) should follow when contributing content or code.

### Key invariants

1. **Never modify `src/lib/content.js` to add content** — add JSON files instead.
2. **Never modify the route table in `src/App.jsx`** for new content — routes are derived from the file structure.
3. **Always use the `t()` helper** for bilingual fields — never access `.nl` or `.en` directly on raw data objects without going through `t()`.
4. **Preserve the `order` field sequence** — leave gaps (e.g. 10, 20, 30) so new items can be inserted without renumbering.
5. **IDs are URL slugs** — use lowercase kebab-case (e.g. `formal-u`, not `formalU` or `Formal_U`).
6. **Difficulty values** are exactly `"easy"`, `"medium"`, or `"hard"` — no other values are valid.
7. **Practice conversation keys** are `nl` and `en` (not `dutch`/`english`) — the old schema is obsolete.

### Content file placement

| What | Where |
| --- | --- |
| New word category | `src/content/woordjes/<id>.json` |
| New leerpad section | `src/content/leerpaden/<id>.json` (e.g. `5a.json`) |
| New grammar rule | `src/content/grammar/<id>.json` |
| New pronunciation rule | `src/content/uitspraak/<id>.json` |
| New test | `src/content/tests/<id>.json` |
| New leerpad unit | `src/content/leerpaden/_groups.json` (add entry) |

### Verifying content

After adding content, run `npm run build` to confirm the new file is picked up and the build is clean. The build will fail with a clear error if a JSON file is malformed or a required field is missing.

### DO NOT

- Add packages to `package.json` for content work — no new dependencies needed.
- Add Windows-platform-specific npm packages (e.g. `@rollup/rollup-win32-*`) to `dependencies` or `optionalDependencies` — these break Linux CI builds.
- Put content directly in JSX or JS files — all course content lives in `src/content/`.
- Create new top-level pages or routes without updating `src/App.jsx`, `src/components/TopNav.jsx`, and `src/components/MobileDrawer.jsx`.

---

## CI/CD

Two pipelines run in parallel on every push to `main` and version tags:

| Pipeline | File | Registry |
| --- | --- | --- |
| GitHub Actions | `.github/workflows/build.yml` | `ghcr.io/tfindley/learn-dutch` |
| Gitea Actions | `.gitea/workflows/build.yml` | Configured via `CI_REGISTRY_HOST` secret |

Both pipelines: build the Docker image → test nginx config + static assets → push tagged image.

**Secrets needed (Gitea):** `CI_REGISTRY_HOST`, `CI_REGISTRY_USER`, `CI_REGISTRY_TOKEN`

**Optional secrets (both):** `VITE_GA_ID` (Google Analytics), `CA_CERT_URL` (internal proxy CA — Gitea only)

**Version tags:** Push a `v*` tag (e.g. `git tag v2.1.0 && git push --tags`) to publish a versioned image and embed the version in the UI footer.
