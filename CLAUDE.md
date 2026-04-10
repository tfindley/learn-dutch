# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Belgian Dutch learning app — three standalone React modules served as a static site from an nginx container.

- `dutch-100-words.jsx` — vocabulary flashcard app (`DutchTutor` component). Updated periodically with new words/categories.
- `dutch-grammar.jsx` — grammar rules and quiz app (`DutchGrammar` component). Updated periodically with new lessons.
- `dutch-tests.jsx` — practice quizzes and marathon sessions (`DutchTests` component). Updated periodically with new tests.
- `src/App.jsx` — landing page that renders a module picker and conditionally mounts the chosen component.

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
index.html          Vite entry point
vite.config.js      Vite config (React plugin only)
src/
  main.jsx          React 18 root + optional GA injection
  App.jsx           Landing page — imports all JSX modules, switches on state
dutch-100-words.jsx Content module (root-level, imported by App.jsx)
dutch-grammar.jsx   Content module (root-level, imported by App.jsx)
dutch-tests.jsx     Content module (root-level, imported by App.jsx)
nginx.conf          nginx config for the serve stage (includes /healthz endpoint)
Dockerfile          Multi-stage: node:20-alpine build → nginx:1.27-alpine serve
```

The `.jsx` content files live at the repo root (not under `src/`) so they are easy to find and update. `App.jsx` imports them with `../dutch-100-words` etc.

## CI/CD

Source code lives on **GitHub**: [github.com/tfindley/learn-dutch](https://github.com/tfindley/learn-dutch)

Two CI pipelines run in parallel.

**GitHub Actions** ([.github/workflows/build.yml](.github/workflows/build.yml)) — `ubuntu-latest` runner:

- Triggers on push to `main`, version tags (`v*`), PRs, or manual dispatch. Skips `.md`-only changes.
- Builds the Docker image and runs the test suite. Does not push to a registry.
- Optional secret: `VITE_GA_ID`

**Gitea Actions** ([.gitea/workflows/build.yml](.gitea/workflows/build.yml)) — `docker`-labelled runner:

- Triggers on push to `main`, version tags (`v*`), manual dispatch, and weekly on Mondays at 03:00 UTC (to pick up Alpine security patches). Skips `.md`-only changes.
- Builds, tests, and pushes `sha-<12char>` + `:latest` tags; also pushes `:<version>` on version tag pushes.

Required secrets (Gitea — Repository → Settings → Actions → Secrets):

- `CI_REGISTRY_HOST` — registry hostname (e.g. `code.findley.pm`)
- `CI_REGISTRY_USER` — registry username
- `CI_REGISTRY_TOKEN` — registry password / personal access token

Optional (both platforms):

- `CA_CERT_URL` — URL to a PEM CA bundle, passed as a Docker build arg (Gitea only)
- `VITE_GA_ID` — Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`). When set, GA is injected at build time. Omit to disable analytics entirely.
