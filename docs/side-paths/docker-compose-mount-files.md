---
layout: docs-side-path
title: Mount your files
description: Mount your files with Docker Compose and Dotenvx.
permalink: /docs/docker-compose/mount-files/
markdown_url: /docs/docker-compose/mount-files.md
parent_url: /docs/docker-compose/#ship
parent_title: Docker Compose
side_path_kind: Alternative
---

Keep configuration outside the image. Change the main Dockerfile to copy only your app:

```dockerfile
COPY index.js ./
```

Replace compose.yaml with:

```yaml
services:
  app:
    build: .
    volumes:
      - type: bind
        source: ./.env
        target: /app/.env
        read_only: true
        bind:
          create_host_path: false
      - type: bind
        source: ./.env.keys
        target: /app/.env.keys
        read_only: true
        bind:
          create_host_path: false
```

Create and encrypt .env before running this. Both source files must exist; create_host_path: false prevents a missing file from silently becoming a directory.

```console
$ docker compose up --build
$ docker compose down
```
{: copy="docker compose up --build
docker compose down"}

The source paths are relative to your Compose file and must be available on the Docker host. No --env-file option is needed: Dotenvx reads the mounted files directly.

For production, mount the encrypted production file, select it with DOTENV_FILE, and supply its key separately through runtime secrets. See [Docker's mounted-file alternative](/docs/docker/mount-files/) for the distinction between mounted files and already-injected ciphertext.
