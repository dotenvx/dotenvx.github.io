---
layout: docs-side-path
title: Multiple services
description: Multiple services with Docker Compose and Dotenvx.
permalink: /docs/docker-compose/multiple-services/
markdown_url: /docs/docker-compose/multiple-services.md
parent_url: /docs/docker-compose/#ship
parent_title: Docker Compose
side_path_kind: Alternative
---

Give each service its own encrypted file and key. For this example, create .env.api with HELLO="API" and .env.worker with HELLO="Worker".

Encrypt both. Choose **Local** and store the keys in .env.keys:

```console
$ dotenvx encrypt -f .env.api
$ dotenvx encrypt -f .env.worker
```
{: copy="dotenvx encrypt -f .env.api
dotenvx encrypt -f .env.worker"}

Change the main Dockerfile's COPY instruction to:

```dockerfile
COPY index.js .env.api .env.worker ./
```

Replace compose.yaml with:

```yaml
services:
  api:
    build: .
    environment:
      DOTENV_FILE: .env.api
      DOTENV_PRIVATE_KEY_API: ${DOTENV_PRIVATE_KEY_API:?Set DOTENV_PRIVATE_KEY_API}
  worker:
    build: .
    environment:
      DOTENV_FILE: .env.worker
      DOTENV_PRIVATE_KEY_WORKER: ${DOTENV_PRIVATE_KEY_WORKER:?Set DOTENV_PRIVATE_KEY_WORKER}
```

Run both:

```console
$ docker compose --env-file .env.keys up --build
api-1     | Hello API
worker-1  | Hello Worker
```
{: copy="docker compose --env-file .env.keys up --build"}

Output order can vary. Each service receives only its own private key, although this demonstration image contains both encrypted files. For different applications, use separate build contexts and copy only each application's configuration.

Commit the encrypted files and updated setup, keeping .env.keys out of git. Run docker compose --env-file .env.keys down to clean up.
