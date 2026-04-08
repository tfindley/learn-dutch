# =============================================================================
# Learn Dutch — Static React App
# =============================================================================
# Multi-stage build:
#   Stage 1 (build)  — Node + Vite compiles JSX → static assets in /dist
#   Stage 2 (serve)  — nginx serves the static assets
#
# Usage:
#   docker build -t learn-dutch .
#   docker run --rm -p 8080:80 learn-dutch
#   open http://localhost:8080
# =============================================================================

# ---------------------------------------------------------------------------
# Stage 1: Build
# ---------------------------------------------------------------------------
FROM node:20-alpine AS build

ARG CA_CERT_URL=""

WORKDIR /app

# Install internal CA certificate before any npm traffic (optional).
RUN if [ -n "${CA_CERT_URL}" ]; then \
        apk add --no-cache curl ca-certificates && \
        curl -fsSL "${CA_CERT_URL}" -o /usr/local/share/ca-certificates/internal-ca.crt && \
        update-ca-certificates; \
    fi

# Install dependencies first (layer-cached unless package.json changes).
COPY package.json package-lock.json* ./
RUN npm ci --prefer-offline 2>/dev/null || npm install

# Copy source.
# dutch-100-words.jsx and dutch-grammar.jsx live at the repo root
# and are imported directly by src/App.jsx.
COPY index.html vite.config.js ./
COPY dutch-100-words.jsx dutch-grammar.jsx ./
COPY src/ ./src/

RUN npm run build

# ---------------------------------------------------------------------------
# Stage 2: Serve
# ---------------------------------------------------------------------------
FROM nginx:1.27-alpine AS serve

# Upgrade all Alpine packages to pick up current security patches.
RUN apk upgrade --no-cache

LABEL maintainer="tfind"
LABEL description="Learn Dutch — Belgian Dutch vocabulary and grammar reference"

# Replace default nginx config with one suited to a single-page app.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the compiled assets from the build stage.
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
