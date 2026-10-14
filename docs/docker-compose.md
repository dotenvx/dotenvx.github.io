---
layout: docs-markdown
title: "Docker Compose"
social_title: "Encrypt a .env file for Docker Compose"
description: "Encrypt a .env file for Docker Compose and inject its secrets when your service starts."
icon: docker-compose
permalink: /docs/docker-compose/
redirect_from:
  - /docs/platforms/docker-compose
  - /docs/platforms/docker-compose/
  - /docs/secrets-in-docker-compose
  - /docs/secrets-in-docker-compose/
quickstart_pager: true
---

## Encrypt

Encrypt your `.env` file before building the image.

```console
$ dotenvx encrypt
```
{: copy="dotenvx encrypt"}

Commit the encrypted `.env` file, but never commit or copy `.env.keys` into the image.

```text
.env.keys
```

## Add dotenvx to your image

Install dotenvx in the image that runs your application.

```docker
FROM node:22-alpine

RUN apk add --no-cache curl \
  && curl -sfS https://dotenvx.sh | sh \
  && apk del curl

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .

CMD ["node", "index.js"]
```

## Run with Compose

Prepend the service command with `dotenvx run --` and pass the private key through from the environment running Compose.

```yaml
services:
  app:
    build: .
    command: dotenvx run -- node index.js
    environment:
      DOTENV_PRIVATE_KEY: ${DOTENV_PRIVATE_KEY}
```

For a local check, let Compose read the private key from your ignored `.env.keys` file.

```console
$ docker compose --env-file .env.keys up --build
```
{: copy="docker compose --env-file .env.keys up --build"}
