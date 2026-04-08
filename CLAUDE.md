# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

This is a "learn Dutch" project. Currently there are two files:

- dutch-100-words.jsx
- dutch-grammer.jsx

We need to create a docker container to host the static content rendered by the .jsx files.

It should be executed by a Gitea runner (refer to previous gitea runner commands) to build a container. the container repo will be my gitea server.

When run, the artifact should have a basic front end to choose which of the two sites to visit, then display the site that the user selects. the two sites are the two .jsx files (content) that are provided. These will get updated periodically and the container will need to be automatically rebuilt.

### CI/CD

Built by Gitea Actions on a `docker`-labelled runner. Pipeline: build → test → push. Follows the same pattern as the `ansible` container repo. Required secrets: `CI_REGISTRY_HOST`, `CI_REGISTRY_USER`, `CI_REGISTRY_TOKEN`. Optional: `CA_CERT_URL`.
