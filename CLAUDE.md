# CLAUDE.md

Belgian Dutch learning app — static React SPA (Vite + Tailwind, dark-mode via `class`) served from an nginx container. All course content lives as JSON under [src/content/](src/content/) and is auto-discovered by `import.meta.glob`.

## When working on content

**Adding or editing course material is the most common task.** The full schema for every content type (leerpaden, grammar, uitspraak, woordjes, tests) lives in [docs/content-schema.md](docs/content-schema.md) — read that file first.

Content directories:

| Type | Path |
| --- | --- |
| Leerpad sections | [src/content/leerpaden/](src/content/leerpaden/) |
| Grammar reference | [src/content/grammar/](src/content/grammar/) |
| Pronunciation rules | [src/content/uitspraak/](src/content/uitspraak/) |
| Vocabulary | [src/content/woordjes/](src/content/woordjes/) |
| Tests / quizzes | [src/content/tests/](src/content/tests/) |

User notes for ingestion go in `input_notes/` (gitignored).

### Hard rules for content work

1. Never modify [src/lib/content.js](src/lib/content.js) or the route table in [src/App.jsx](src/App.jsx) for content — add JSON files instead.
2. Always use `t(field, lang)` from [src/lib/i18n.js](src/lib/i18n.js) for bilingual fields in JSX.
3. IDs are URL slugs — lowercase kebab-case, unique within their content type.
4. `difficulty` is exactly `"easy"` | `"medium"` | `"hard"`.
5. Preserve `order` field gaps so new items can be inserted without renumbering.

### Verifying

```bash
npm run build
```

Build fails with a clear error on malformed JSON or missing required fields.

## When working on code

| Area | Path |
| --- | --- |
| Routes | [src/App.jsx](src/App.jsx) |
| Content loaders & helpers | [src/lib/content.js](src/lib/content.js) |
| Bilingual helper | [src/lib/i18n.js](src/lib/i18n.js) |
| Theme / language providers | [src/providers/](src/providers/) |
| Shared UI | [src/components/](src/components/) |
| Page components | [src/pages/](src/pages/) |

Conventions:

- Tailwind utility classes only (no inline styles). Pair every light class with a `dark:` variant.
- Difficulty borders: `border-l-4 border-l-green-400` / `-amber-400` / `-red-400` (easy / medium / hard) — see [src/components/RuleListItem.jsx](src/components/RuleListItem.jsx).
- English-toggle visibility: `{showEnglish && <span>...</span>}` via `useLanguage()`, or use [`<PracticeConversation>`](src/components/PracticeConversation.jsx) which handles it automatically.

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # → dist/
npm run preview    # serve dist/
```

Docker: `docker build -t learn-dutch .` then `docker run --rm -p 8080:80 learn-dutch`. Pass `--build-arg CA_CERT_URL=<url>` if behind a proxy with an internal CA.

## More detail

- Full content schemas, examples, and style notes: [docs/content-schema.md](docs/content-schema.md)
- Architecture, routing, and contribution workflow: [CONTRIBUTING.md](CONTRIBUTING.md)
- CI/CD pipelines and required secrets: [CONTRIBUTING.md](CONTRIBUTING.md#cicd)
