---
og_image:
  template: logo
  logo: _includes/icons/cloudflare.html
  alt: Cloudflare
title: Cloudflare
description: Use Dotenvx with Cloudflare.
permalink: /docs/cloudflare/
layout: docs-markdown
hero_include: "icons/cloudflare.html"
hero_class: "docs-cloudflare-logo"
---

## Install

Install wrangler and dotenvx.

```console
$ npm install --save-dev wrangler@latest
$ npm install --save-dev @dotenvx/dotenvx
```
{: copy="npm install --save-dev wrangler@latest
npm install --save-dev @dotenvx/dotenvx"}

## Encrypt

Create .env.production:

```dotenv
# .env.production
HELLO="Production"
```

## Deploy

Deploy it with the dotenvx --secrets-file.

```console
$ npx wrangler deploy --secrets-file <(npx dotenvx get -f .env.production --strict)
```
{: copy="npx wrangler deploy --secrets-file <(npx dotenvx get -f .env.production --strict)" class="design-codeblock--nowrap"}

That's it. Your Worker reads env.HELLO just like any other Cloudflare secret.

```javascript
// src/index.js
export default {
  async fetch(request, env) {
    return new Response(`Hello ${env.HELLO}`)
  }
}
```

## Scripts

Add to your scripts for convenience.

```json
{
  "scripts": {
    "deploy": "bash -c 'wrangler deploy --secrets-file <(dotenvx get -f .env.production --strict)'",
    "preview": "bash -c 'wrangler preview --secrets-file <(dotenvx get -f .env.preview --strict)'"
  }
}
```
{: class="design-codeblock--nowrap"}

## Pages

Using pages? It is similar to workers.

```console
$ npx wrangler pages secret bulk <(npx dotenvx get -f .env.production --strict) --project-name my-site
$ npx wrangler pages deploy dist --project-name my-site
```
{: copy="npx wrangler pages secret bulk <(npx dotenvx get -f .env.production --strict) --project-name my-site
npx wrangler pages deploy dist --project-name my-site" class="design-codeblock--nowrap"}

{% include components/design-separator.html %}

## Advanced

The above set up is typical for Cloudflare but if you want to get full secrets separation in the spirit of dotenvx you can ship an encrypted .env.txt file to decrypt at runtime.

Install dotenvx.

```console
$ npm install @dotenvx/dotenvx
```
{: copy="npm install @dotenvx/dotenvx"}

Encrypt a .env.production.txt file. The .txt extension allows it to be included in the worker as an artifact.

```console
$ npx dotenvx encrypt -f .env.production.txt
```
{: copy="npx dotenvx encrypt -f .env.production.txt"}

Commit to code.

```console
$ git add .env.production.txt
$ git commit -m "encrypt .env.production.txt"
```
{: copy="git add .env.production.txt
git commit -m \"encrypt .env.production.txt\""}

Then inject your encrypted secrets at runtime.

```javascript
import envSrc from '../.env.production.txt'
import dotenvx from '@dotenvx/dotenvx'

const config = dotenvx.config({ envs: [{ type: 'env', value: envSrc, privateKeyName: 'DOTENV_PRIVATE_KEY_PRODUCTION' }] })
const envx = config.parsed

export default {
  async fetch(request, env, ctx) {
    return new Response(`Hello ${envx.HELLO}`)
  }
}
```

Adjust your deploy script to set your production keypair on Cloudflare.

```json
{
  "scripts": {
    "deploy": "bash -c 'wrangler deploy --secrets-file <(dotenvx keypair -f .env.production.txt)'"
  }
}
```
{: class="design-codeblock--nowrap"}

That's it! This gives you advanced protection.
