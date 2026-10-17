---
layout: docs-side-path
title: Share a private key
description: Share a private key with Docker Compose and Dotenvx.
permalink: /docs/docker-compose/share-private-key/
markdown_url: /docs/docker-compose/share-private-key.md
parent_url: /docs/docker-compose/#share
parent_title: Docker Compose
side_path_kind: Alternative
---

Share the encrypted .env file through git and the development key through your team's approved private channel.

```console
$ dotenvx keypair DOTENV_PRIVATE_KEY
```
{: copy="dotenvx keypair DOTENV_PRIVATE_KEY"}

Your teammate saves the value in an ignored .env.keys file:

```dotenv
DOTENV_PRIVATE_KEY="your-shared-private-key"
```

They use the main compose.yaml:

```console
$ docker compose --env-file .env.keys up --build
$ docker compose --env-file .env.keys down
```
{: copy="docker compose --env-file .env.keys up --build
docker compose --env-file .env.keys down"}

Keep .env.keys out of git and Docker images. Anyone retaining the key can still decrypt the file after repository access is removed.
