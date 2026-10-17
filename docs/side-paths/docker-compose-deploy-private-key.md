---
layout: docs-side-path
title: Deploy with a private key
description: Deploy with a private key with Docker Compose and Dotenvx.
permalink: /docs/docker-compose/deploy-private-key/
markdown_url: /docs/docker-compose/deploy-private-key.md
parent_url: /docs/docker-compose/#production
parent_title: Docker Compose
side_path_kind: Alternative
secrets_artifact: true
---

For a self-managed Compose host, encrypt .env.production and choose **Local**, storing the key in .env.keys:

```console
$ dotenvx encrypt -f .env.production
$ dotenvx keypair DOTENV_PRIVATE_KEY_PRODUCTION -f .env.production
```
{: copy="dotenvx encrypt -f .env.production
dotenvx keypair DOTENV_PRIVATE_KEY_PRODUCTION -f .env.production"}

Set DOTENV_PRIVATE_KEY_PRODUCTION to the returned value in the environment running Compose. The production Compose file passes it to the container and selects .env.production.

{% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY_PRODUCTION" value="c09d6f8918835c82f0df3b7d100c501ac199af5a76405892d641def691b5f015" path=".env.production" %}

For a local check, after following [Production](/docs/docker-compose/#production) to build hello-compose:production:

```console
$ docker compose --env-file .env.keys -f compose.production.yaml up
$ docker compose --env-file .env.keys -f compose.production.yaml down
```
{: copy="docker compose --env-file .env.keys -f compose.production.yaml up
docker compose --env-file .env.keys -f compose.production.yaml down"}

For deployment, use the host's secret-management workflow to supply the production key. Keep keys out of Dockerfile ARG and ENV instructions and out of git. Avoid printing resolved docker compose config output with real keys: it can include interpolated secret values.
