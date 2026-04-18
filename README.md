# Learn Dutch (Belgian)

A self-hosted Belgian Dutch learning app — three interactive modules served as a static site from an nginx container.

[![Build and Test](https://github.com/tfindley/learn-dutch/actions/workflows/build.yml/badge.svg)](https://github.com/tfindley/learn-dutch/actions/workflows/build.yml)

## Disclaimer
This tool was written collaboratively with AI: Claude Code - Claude Sonnet 4.6. [CLAUDE.md](CLAUDE.md) is included for reference.

## Modules

| Module | Description |
| --- | --- |
| **100 Words** | Essential vocabulary with phonetics and flip-card practice |
| **Grammar** | Rules, patterns, and conversations across multiple leerpaden |
| **Tests** | Practice quizzes and marathon sessions to test recall |

All content is focused on **Belgian Dutch** — pronunciation, vocabulary, and usage specific to Belgium rather than the Netherlands.

## Running locally

**With Node (dev server):**

```bash
npm install
npm run dev       # http://localhost:5173
```

**With Docker:**

```bash
docker build -t learn-dutch .
docker run --rm -p 8080:80 learn-dutch
# open http://localhost:8080
```

**With Docker Compose:**

```bash
# Build from source
docker compose -f docker-compose.build.yml up --build

# Pull from registry
docker compose up
```

## Configuration

| Variable | Where | Purpose |
| --- | --- | --- |
| `VITE_GA_ID` | Build arg / CI secret | Google Analytics 4 Measurement ID — omit to disable analytics |
| `CA_CERT_URL` | Build arg / CI secret | PEM CA bundle URL for npm traffic behind an internal proxy |

## Contributing

The three content files at the repo root are the main things to update:

- `dutch-100-words.jsx` — add words to the `CATEGORIES` array
- `dutch-grammar.jsx` — add rules to the `RULES` array
- `dutch-tests.jsx` — add tests to the `TESTS` array

The app shell (`src/`) rarely needs changing.

## Support

If you find this useful, consider buying me a coffee:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/tfindley)

---

Made by [tfindley.co.uk](https://tfindley.co.uk)
