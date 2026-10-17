---
layout: docs-side-path
title: Deploy with a private key
description: Deploy with a private key with Docker and Dotenvx.
permalink: /docs/docker/deploy-private-key/
markdown_url: /docs/docker/deploy-private-key.md
parent_url: /docs/docker/#production
parent_title: Docker
side_path_kind: Alternative
secrets_artifact: true
---

For a deployment without Armor Enclaves, encrypt .env.production and choose **Local**, storing its key in .env.keys:

```console
$ dotenvx encrypt -f .env.production
$ dotenvx keypair DOTENV_PRIVATE_KEY_PRODUCTION -f .env.production
```
{: copy="dotenvx encrypt -f .env.production
dotenvx keypair DOTENV_PRIVATE_KEY_PRODUCTION -f .env.production"}

Set DOTENV_PRIVATE_KEY_PRODUCTION to the returned value in your container platform's runtime secret settings. Set DOTENV_FILE to .env.production.

{% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY_PRODUCTION" value="c09d6f8918835c82f0df3b7d100c501ac199af5a76405892d641def691b5f015" path=".env.production" %}

For a local production check, after rebuilding the main image with .env.production included:

```shell
DOTENV_PRIVATE_KEY_PRODUCTION="$(dotenvx keypair DOTENV_PRIVATE_KEY_PRODUCTION -f .env.production)" \
  docker run --rm --env DOTENV_FILE=.env.production --env DOTENV_PRIVATE_KEY_PRODUCTION hello-docker
```

Keep the key out of Dockerfile ARG and ENV instructions, image layers, and git. Return to [Production](/docs/docker/#production) for the image changes.
