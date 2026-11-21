---
title: Render
description: Use dotenvx with Render.
permalink: /docs/platforms/render/
mark: "render"
---

Find [code examples for this guide](https://github.com/dotenvx/examples/tree/main/platforms/docker) on GitHub.

Deploying to [Render](https://render.com) takes more steps than we document here. Follow their [Docker guide](https://docs.render.com/docker#docker-builds-on-render) (Render recognizes your `Dockerfile` automatically). This guide shows the dotenvx pieces in a Docker context.

## Dockerfile

```text
# .dockerignore
.env.keys
```
{: copy="false"}

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

{% assign github_install = '/docs/install/#github' %}
{% assign github_install = 'https://github.com/dotenvx/dotenvx/releases' %}
If you prefer, [install from GitHub Releases]({{ github_install }}) or view the [install.sh](https://dotenvx.sh/install.sh) file before executing.

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

Set `DOTENV_PRIVATE_KEY` to your production private key and `DOTENV_FILE` to `.env.production` in Render's environment variable manager, then redeploy. Your app injects env from the encrypted `.env.production` file.
