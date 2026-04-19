# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Belgian Dutch learning app — three content sections served as a static React SPA from an nginx container.

Content is stored in JSON files under `src/content/` and rendered by page components under `src/pages/`.

## Development

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the built dist/
```

## Docker

```bash
# Build
docker build -t learn-dutch .

# Run
docker run --rm -p 8080:80 learn-dutch
# open http://localhost:8080
```

Pass `--build-arg CA_CERT_URL=<url>` if your npm traffic goes through a proxy with an internal CA.

## Architecture

```text
index.html                    Vite entry point
vite.config.js                Vite config (React plugin)
tailwind.config.js            Tailwind CSS config (darkMode: "class")
postcss.config.js             PostCSS config (Tailwind + autoprefixer)
nginx.conf                    nginx config for the serve stage (includes /healthz)
Dockerfile                    Multi-stage: node:20-alpine build → nginx:1.27-alpine serve

src/
  main.jsx                    React 18 root + providers + optional GA injection
  index.css                   Tailwind directives + CSS variables
  App.jsx                     React Router route table + ScrollToTop

  providers/
    ThemeProvider.jsx         dark/light/system theme, persisted to localStorage
    LanguageProvider.jsx      global English-toggle, persisted to localStorage

  lib/
    content.js                import.meta.glob loaders + lookup helpers (leerpadTree, categories, tests…)
    i18n.js                   t(field, lang) — resolves plain strings or { nl, en } objects
    useLocalStorage.js        Hook for localStorage-backed state

  components/
    TopNav.jsx                Pinned top nav: Leerpaden dropdown, Grammar dropdown, EN/theme toggles
    MobileDrawer.jsx          Full-height mobile drawer (Leerpaden + Grammar sections)
    DifficultyBadge.jsx       Easy / Medium / Hard badge
    RuleListItem.jsx          Shared rule link row with difficulty border
    PatternBlock.jsx          Collapsible pattern + examples block (used by both rule pages)
    PracticeConversation.jsx  Chat-style practice dialogue (respects showEnglish)
    EnglishText.jsx           Renders children only when showEnglish is true

  pages/
    Landing.jsx               Home — three pillar cards + links
    Changelog.jsx             Version history
    NotFound.jsx              404 fallback

    woordjes/
      Index.jsx               Category grid + search (uses cat.title.nl / cat.title.en)
      Category.jsx            Flip-card word list + pronunciation guide

    leerpaden/
      Index.jsx               Two-level index: Leerpad 1–4 → sections A/B/C with descriptions
      Group.jsx               Single leerpad group (e.g. Leerpad 2) with its sections
      Rule.jsx                Single leerpad rule page (patterns, examples, practice, test link)

    grammar/
      Layout.jsx              Secondary tab bar (Grammar Reference | Uitspraak)
      Reference.jsx           Topic-based grammar reference index
      Uitspraak.jsx           Pronunciation & spelling rules index
      Rule.jsx                Single grammar/uitspraak rule page

    tests/
      Index.jsx               Test cards grouped by leerpad + Marathon card
      Quiz.jsx                4-option MCQ with immediate feedback
      Results.jsx             Score summary + full answer review

  content/                    ← Edit these to add/update content
    leerpaden/
      _groups.json            { groups: [{id, order, title, description}] }
      1a.json … 4c.json       { id, group, order, description, rules[] }
    grammar/
      articles.json …         Individual grammar reference rules
    uitspraak/
      pron_vowels.json …      Individual pronunciation rules
    woordjes/
      _tips.json              { pronunciationTips[] }
      greetings.json …        { id, order, title:{nl,en}, emoji, color, words[] }
    tests/
      test_opening.json …     Individual test files

obsolete/                     Former monolithic JSX/JSON content (superseded by split files)
```

## Routing

```text
/                        Landing
/woordjes                Category index
/woordjes/:categoryId    Single category (flip cards)
/leerpaden               Two-level leerpad index (groups 1–4 → sections A/B/C)
/leerpaden/:groupId      Single leerpad group (e.g. /leerpaden/2)
/leerpaden/:groupId/:id  Single leerpad rule
/grammar                 → redirects to /grammar/reference
/grammar/reference       Grammar reference list
/grammar/reference/:id   Single reference rule
/grammar/uitspraak       Pronunciation list
/grammar/uitspraak/:id   Single pronunciation rule
/tests                   Test index + Marathon
/tests/:testId           Quiz
/tests/:testId/results   Results
/changelog               Version history
```

## Adding content

Content uses `import.meta.glob` — adding a new JSON file to the right directory is all that's needed; no code changes required.

- **Words** — add a file to `src/content/woordjes/`. Schema: `{ id, order, title:{nl,en}, emoji, color, words:[{nl, phonetic, en, tip}] }`.
- **Leerpad section** — add a file to `src/content/leerpaden/` (e.g. `4d.json`). Schema: `{ id, group, order, description:{en}, rules:[...] }`. Add the group to `_groups.json` if needed.
- **Grammar rule** — add a file to `src/content/grammar/`. Schema: `{ id, kind:"grammar", order, tag, title:{nl,en}, difficulty, shortcut, explanation, patterns, memory, examples, practice }`.
- **Uitspraak rule** — add a file to `src/content/uitspraak/`. Same schema with `kind:"uitspraak"`.
- **Test** — add a file to `src/content/tests/`. Schema: `{ id, order, title, subtitle, leerpad, difficulty, emoji, questions:[{q, options[4], answer(0-3), explanation}] }`.

### Multi-language fields

Bilingual fields use `{ nl: "...", en: "..." }` objects. The `t(field, lang)` helper in `src/lib/i18n.js` resolves both plain strings (legacy) and language-code objects. Adding a French translation would mean adding `fr` keys and passing `lang:'fr'`.

## Providers

- `ThemeProvider` — wraps the app; exposes `{ resolvedTheme, toggle }` via `useTheme()`. Reads `localStorage.theme` first, falls back to `prefers-color-scheme`.
- `LanguageProvider` — exposes `{ showEnglish, toggle }` via `useLanguage()`. Controls English text visibility across all modules.

## CI/CD

Source code lives on **GitHub**: [github.com/tfindley/learn-dutch](https://github.com/tfindley/learn-dutch)

Two CI pipelines run in parallel.

**GitHub Actions** ([.github/workflows/build.yml](.github/workflows/build.yml)) — `ubuntu-latest` runner:

- Triggers on push to `main`, version tags (`v*`), PRs, or manual dispatch. Skips `.md`-only changes.
- Pushes to `ghcr.io/tfindley/learn-dutch` using the built-in `GITHUB_TOKEN` — no extra secrets needed. PRs run build + test only (no push).
- Optional secret: `VITE_GA_ID`

**Gitea Actions** ([.gitea/workflows/build.yml](.gitea/workflows/build.yml)) — `docker`-labelled runner:

- Triggers on push to `main`, version tags (`v*`), manual dispatch, and weekly on Mondays at 03:00 UTC (to pick up Alpine security patches). Skips `.md`-only changes.
- Builds, tests, and pushes `sha-<12char>` + `:latest` tags; also pushes `:<version>` on version tag pushes.

Required secrets (Gitea — Repository → Settings → Actions → Secrets):

- `CI_REGISTRY_HOST` — registry hostname
- `CI_REGISTRY_USER` — registry username
- `CI_REGISTRY_TOKEN` — registry password / personal access token

Optional (both platforms):

- `CA_CERT_URL` — URL to a PEM CA bundle, passed as a Docker build arg (Gitea only)
- `VITE_GA_ID` — Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`). When set, GA is injected at build time. Omit to disable analytics entirely.
