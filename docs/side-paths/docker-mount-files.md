---
layout: docs-side-path
title: Mount your files
description: Mount your files with Docker and Dotenvx.
permalink: /docs/docker/mount-files/
markdown_url: /docs/docker/mount-files.md
parent_url: /docs/docker/#ship
parent_title: Docker
side_path_kind: Alternative
---

Keep configuration outside the image and mount it when the container starts. In the main Dockerfile, copy only your application:

```dockerfile
COPY index.js ./
```

Build it, then mount the encrypted file and local key file read-only:

```shell
docker build -t hello-docker-mounted .
docker run --rm \
  --mount "type=bind,source=$(pwd)/.env,target=/app/.env,readonly" \
  --mount "type=bind,source=$(pwd)/.env.keys,target=/app/.env.keys,readonly" \
  hello-docker-mounted
```

The files must exist on the Docker host. These paths assume a POSIX shell and a local Docker runtime. Match the container's /app paths to its WORKDIR.

For production, mount .env.production at /app/.env.production and set DOTENV_FILE=.env.production. Supply DOTENV_PRIVATE_KEY_PRODUCTION through your host's runtime secret settings instead of mounting your development key file.

A bind mount makes a file available to Dotenvx. Docker's --env-file instead loads entries into the container environment. Use the mounted-file approach here so Dotenvx reads and decrypts the file itself.

Do not substitute --env-file .env for this mount. With Dotenvx 2.38.0, our container test left already-injected ciphertext unchanged when no .env file was available to Dotenvx. This is the distinction raised in [issue #738](https://github.com/dotenvx/dotenvx/issues/738).

If an old installation reports injected env (0) despite working values, [issue #927](https://github.com/dotenvx/dotenvx/issues/927) was a logging regression fixed in 2.18.1. Rebuild with an updated Dotenvx version; that bug did not invalidate mounted files.
