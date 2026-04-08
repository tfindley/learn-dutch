# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Belgian Dutch learning app — two standalone React modules served as a static site from an nginx container.

- `dutch-100-words.jsx` — vocabulary flashcard app (`DutchTutor` component). Updated periodically with new words/categories.
- `dutch-grammar.jsx` — grammar rules and quiz app (`DutchGrammar` component). Updated periodically with new lessons.
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
  main.jsx          React 18 root
  App.jsx           Landing page — imports both JSX modules, switches on state
dutch-100-words.jsx Content module (root-level, imported by App.jsx)
dutch-grammar.jsx   Content module (root-level, imported by App.jsx)
nginx.conf          nginx config for the serve stage (includes /healthz endpoint)
Dockerfile          Multi-stage: node:20-alpine build → nginx:1.27-alpine serve
```

The two `.jsx` content files live at the repo root (not under `src/`) so they are easy to find and update. `App.jsx` imports them with `../dutch-100-words` etc.

## CI/CD

Built by Gitea Actions on a `docker`-labelled runner. Pipeline: build → test → push.

Workflow: [.gitea/workflows/build.yml](.gitea/workflows/build.yml)

- Triggers on push to `main`, version tags (`v*`), or manual dispatch. Skips on `.md`-only changes.
- Test step starts the built container and polls `/healthz` before verifying `index.html` is served.
- Pushes `sha-<12char>` and `:latest` tags; also pushes `:<version>` on version tag pushes.

Required secrets (Repository → Settings → Actions → Secrets):

- `CI_REGISTRY_HOST` — registry hostname (e.g. `code.findley.pm`)
- `CI_REGISTRY_USER` — registry username
- `CI_REGISTRY_TOKEN` — registry password / personal access token

Optional:

- `CA_CERT_URL` — URL to a PEM CA bundle, passed as a Docker build arg
- `VITE_GA_ID` — Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`). When set, GA is injected at build time. Omit to disable analytics entirely.
