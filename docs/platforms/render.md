---
title: Render
description: Use dotenvx with Render.
permalink: /docs/platforms/render/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Render"
  description="Use dotenvx with Render."
  mark="render"
%}

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

Find [code examples for this guide](https://github.com/dotenvx/examples/tree/main/platforms/docker) on GitHub.

Deploying to [Render](https://render.com) takes more steps than we document here. Follow their [Docker guide](https://docs.render.com/docker#docker-builds-on-render) (Render recognizes your `Dockerfile` automatically). This guide shows the dotenvx pieces in a Docker context.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

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

Set `DOTENV_PRIVATE_KEY` to your production private key and `DOTENV_FILE` to `.env.production` in Render's environment variable manager, then redeploy. Your app injects env from the encrypted `.env.production` file.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
</section>
</div>
</div>
