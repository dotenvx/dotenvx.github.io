---
layout: docs-side-path
title: Use Compose secrets
description: Use Compose secrets with Docker Compose and Dotenvx.
permalink: /docs/docker-compose/runtime-secrets/
markdown_url: /docs/docker-compose/runtime-secrets.md
parent_url: /docs/docker-compose/#ship
parent_title: Docker Compose
side_path_kind: Alternative
---

Mount your local key file as a [Compose secret](https://docs.docker.com/compose/how-tos/use-secrets/) instead of putting the private key in the container's configured environment.

Keep the main Dockerfile. Replace compose.yaml with:

```yaml
services:
  app:
    build: .
    secrets:
      - dotenv_keys
    entrypoint: ["/usr/local/bin/dotenvx", "run", "-fk", "/run/secrets/dotenv_keys", "--strict", "--"]
    command: ["node", "index.js"]

secrets:
  dotenv_keys:
    file: ./.env.keys
```

Compose mounts the key file at /run/secrets/dotenv_keys. The -fk option tells Dotenvx where to read it. The explicit command is needed because overriding entrypoint in Compose replaces the image entrypoint and ignores its default CMD.

```console
$ docker compose up --build
$ docker compose down
```
{: copy="docker compose up --build
docker compose down"}

This is a file-backed secret on your Docker host, not an encrypted remote secret store. Keep .env.keys out of git and the image. Grant it only to services that need it; for separate service keys, use separate key files.
