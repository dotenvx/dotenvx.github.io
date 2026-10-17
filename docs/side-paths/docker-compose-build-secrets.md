---
layout: docs-side-path
title: Build-time secrets
description: Build-time secrets with Docker Compose and Dotenvx.
permalink: /docs/docker-compose/build-secrets/
markdown_url: /docs/docker-compose/build-secrets.md
parent_url: /docs/docker-compose/#production
parent_title: Docker Compose
side_path_kind: Alternative
---

If your build needs secrets, grant them through build.secrets. Runtime environment settings do not supply secrets to image builds.

Follow the [Docker build-time secrets example](/docs/docker/build-secrets/) to create and encrypt .env.build, add build.js, and update the Dockerfile with its BuildKit secret mount. Choose **Local** for this demonstration and store the build key in .env.keys.

Use this compose.build.yaml:

```yaml
services:
  app:
    build:
      context: .
      secrets:
        - dotenv_keys
    environment:
      DOTENV_PRIVATE_KEY: ${DOTENV_PRIVATE_KEY:?Set DOTENV_PRIVATE_KEY}

secrets:
  dotenv_keys:
    file: ./.env.keys
```

The secret name matches id=dotenv_keys in the Dockerfile. Build and run:

```console
$ docker compose --env-file .env.keys -f compose.build.yaml up --build
$ docker compose --env-file .env.keys -f compose.build.yaml down
```
{: copy="docker compose --env-file .env.keys -f compose.build.yaml up --build
docker compose --env-file .env.keys -f compose.build.yaml down"}

The build uses the temporary secret mount. At runtime, the service receives only DOTENV_PRIVATE_KEY through its environment mapping; build.secrets does not mount the key file in the running container.

For CI, use a dedicated build key supplied by the runner's secret storage. Avoid build.args for secrets, and check that build tools do not embed decrypted values into browser bundles or other published artifacts.
