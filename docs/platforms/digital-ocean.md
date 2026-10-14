---
title: DigitalOcean
description: Use dotenvx with DigitalOcean.
permalink: /docs/platforms/digital-ocean/
layout: docs-markdown
mark: "do"
---

Find [code examples for this guide](https://github.com/dotenvx/examples/tree/main/platforms/docker) on GitHub.

DigitalOcean has multiple deploy paths—[droplets](https://docs.digitalocean.com/products/droplets/getting-started/quickstart/), [Kubernetes](https://docs.digitalocean.com/products/kubernetes/getting-started/quickstart/), and [App Platform](https://docs.digitalocean.com/products/app-platform/getting-started/quickstart/). This guide assumes Docker (the most common path).

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

Set `DOTENV_PRIVATE_KEY` to your production private key and `DOTENV_FILE` to `.env.production` in DigitalOcean's environment variable manager (or pass it into `docker run -e`), then redeploy. Your app injects env from the encrypted `.env.production` file.
