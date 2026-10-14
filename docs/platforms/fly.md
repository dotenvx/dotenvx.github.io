---
title: Fly
description: Use dotenvx with Fly.
permalink: /docs/platforms/fly/
layout: docs-markdown
mark: "fly"
---

Find [code examples for this guide](https://github.com/dotenvx/examples/tree/main/platforms/fly) on GitHub.

## Initial setup

Create a Hello World app, a `Dockerfile`, and `fly.toml`, then deploy.

```docker
# Dockerfile
FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
```
{: copy="false"}

```text
# .dockerignore
.env.keys
```
{: copy="false"}

```toml
[http_service]
  internal_port = 3000
```
{: copy="false"}

```bash
flyctl launch
flyctl deploy
```
{: copy="false"}

## Run dotenvx

Install dotenvx in your `Dockerfile` and prepend your app command with `dotenvx run --`.

```docker
# Dockerfile
FROM node:20
WORKDIR /app

# Install dotenvx
RUN curl -sfS https://dotenvx.sh/install.sh | sh

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

# Prepend dotenvx run
CMD ["dotenvx", "run", "--", "node", "index.js"]
```
{: copy="false"}

If you prefer, [install from GitHub Releases](/docs/install/#github) or view the [install.sh](https://dotenvx.sh/install.sh) file before executing.

## Encrypt production

```dotenv
# .env.production
HELLO="production"
```
{: copy="false"}

```console
$ dotenvx encrypt -f .env.production
```
{: copy="dotenvx encrypt -f .env.production"}

Commit `.env.production`. Do not commit `.env.keys`.

## Set decryption key

```bash
flyctl secrets set DOTENV_PRIVATE_KEY='your-private-key' DOTENV_FILE='.env.production'
flyctl deploy
```
{: copy="false"}

Your app restarts and env is injected from the encrypted `.env.production` file.
