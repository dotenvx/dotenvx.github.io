---
title: Railway
description: Use dotenvx with Railway.
permalink: /docs/platforms/railway/
layout: docs-markdown
mark: "railway"
---

Find [code examples for this guide](https://github.com/dotenvx/examples/tree/main/platforms/railway) on GitHub.

## Initial setup

Create a Hello World app and `Dockerfile`, then deploy to Railway.

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
# .railwayignore
.env.keys
!.env.production
```
{: copy="false"}

```bash
npx @railway/cli@latest init
npx @railway/cli@latest up
npx @railway/cli@latest domain
```
{: copy="false"}

Set `PORT` to `3000` (or your app's listen port) in the Railway dashboard, then redeploy.

## Run dotenvx

Install dotenvx in your `Dockerfile` and prepend your app command with `dotenvx run --`.

```docker
# Dockerfile
FROM node:20
WORKDIR /app

RUN curl -sfS https://dotenvx.sh/install.sh | sh

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

CMD ["dotenvx", "run", "--", "node", "index.js"]
```
{: copy="false"}

## Encrypt production

```dotenv
# .env.production
HELLO="production"
```
{: copy="false"}

```console
$ dotenvx set HELLO production -f .env.production
```
{: copy="dotenvx set HELLO production -f .env.production"}

Commit `.env.production`. Do not commit `.env.keys`.

## Set decryption key

Set `DOTENV_PRIVATE_KEY` to your production private key and `DOTENV_FILE` to `.env.production` in the Railway environment variable manager (apply the change), then redeploy.

```bash
npx @railway/cli@latest up
```

Your app reboots and env is injected from the encrypted production file.
