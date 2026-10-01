---
title: Fly
description: Use dotenvx with Fly.
permalink: /docs/platforms/fly/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Fly"
  description="Use dotenvx with Fly."
  mark="fly"
%}

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

Find [code examples for this guide](https://github.com/dotenvx/examples/tree/main/platforms/fly) on GitHub.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

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

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

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

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

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

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Set decryption key

```bash
flyctl secrets set DOTENV_PRIVATE_KEY_PRODUCTION='your-private-key'
flyctl deploy
```
{: copy="false"}

Your app restarts and env is injected from the encrypted `.env.production` file.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
</section>
</div>
</div>
