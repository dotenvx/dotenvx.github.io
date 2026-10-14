---
layout: docs-markdown
title: "Docker"
social_title: "Encrypt a .env file for Docker"
description: "Encrypt a .env file for Docker, include it safely in your image, and inject its secrets when the container starts."
icon: docker
permalink: /docs/docker/
redirect_from:
  - /docs/platforms/docker
  - /docs/platforms/docker/
  - /docs/secrets-in-docker
  - /docs/secrets-in-docker/
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

Install dotenvx and use `dotenvx run --` as the image entrypoint. Docker appends the existing `CMD`, so your application command stays easy to change.

```docker
FROM node:22-alpine

RUN apk add --no-cache curl \
  && curl -sfS https://dotenvx.sh | sh \
  && apk del curl

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .

ENTRYPOINT ["dotenvx", "run", "--"]
CMD ["node", "index.js"]
```

## Run

For a local check, pass the private key from your ignored `.env.keys` file.

```console
$ docker build -t myapp .
$ docker run --env-file .env.keys myapp
```
{: copy="docker build -t myapp .
docker run --env-file .env.keys myapp"}
