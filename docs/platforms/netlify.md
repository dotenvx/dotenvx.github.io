---
title: Netlify
description: Use dotenvx with Netlify.
permalink: /docs/platforms/netlify/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Netlify"
  description="Use dotenvx with Netlify."
  mark="netlify"
%}

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

Find [code examples for this guide](https://github.com/dotenvx/examples/tree/main/platforms/netlify) on GitHub (Next.js and Astro).

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Initial setup

```bash
npx create-next-app@latest --example hello-world .
```

```toml
[[plugins]]
  package = "@netlify/plugin-nextjs"

[build]
  command = "npm run build"
  publish = ".next"
```
{: copy="false"}

```bash
npx netlify-cli@latest deploy --build --prod
```

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Run dotenvx

```bash
npm install @dotenvx/dotenvx --save
```

Preload scripts with dotenvx so environment variables inject ahead of build, start, or dev.

```json
"scripts": {
  "dotenvx": "dotenvx",
  "dev": "dotenvx run -- next dev --turbo",
  "build": "dotenvx run -- next build",
  "start": "dotenvx run -- next start"
}
```
{: copy="false"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Encrypt production

```dotenv
# .env.production
HELLO="production"
```
{: copy="false"}

```bash
npm run dotenvx -- set HELLO production -f .env.production
```

Commit `.env.production`. Do not commit `.env.keys`.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Set decryption key

```bash
npx netlify-cli@latest env:set DOTENV_PRIVATE_KEY_PRODUCTION "your-private-key"
npx netlify-cli@latest deploy --build --prod
```
{: copy="false"}

Your build injects env from the encrypted `.env.production` file.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
</section>
</div>
</div>
