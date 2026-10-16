---
og_image:
  template: logo
  logo: _includes/icons/cloudflare.html
  alt: Cloudflare
title: Cloudflare
description: Use Dotenvx with Cloudflare.
permalink: /docs/cloudflare/
markdown_url: /docs/cloudflare.md
agent_prompt: Set up Dotenvx with Cloudflare Workers and Wrangler for me.
layout: docs-markdown
hero_include: "icons/cloudflare.html"
hero_class: "docs-cloudflare-logo"
---

## Prerequisites

Create a [Cloudflare Worker](https://developers.cloudflare.com/workers/get-started/guide/). Choose the Hello World example and JavaScript to follow along.

## Install

In your Worker project, install Dotenvx and [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/).

```console
$ npm install --save-dev @dotenvx/dotenvx
$ npm install --save-dev wrangler@latest
```
{: copy="npm install --save-dev @dotenvx/dotenvx
npm install --save-dev wrangler@latest" package-manager="npm"}

```console
$ pnpm add -D @dotenvx/dotenvx
$ pnpm add -D wrangler@latest
```
{: copy="pnpm add -D @dotenvx/dotenvx
pnpm add -D wrangler@latest" package-manager="pnpm"}

## Encrypt

Start with a secret value in the .env file at your project root, like:

```dotenv
# .env
HELLO="Secret"
```
{: copy="HELLO=\"Secret\""}

Encrypt it with a single command.

```console
$ npx dotenvx encrypt
◈ encrypted .env (022 0D8) via .env.keys ⛉
```
{: copy="npx dotenvx encrypt" package-manager="npm"}

```console
$ pnpm exec dotenvx encrypt
◈ encrypted .env (022 0D8) via .env.keys ⛉
```
{: copy="pnpm exec dotenvx encrypt" package-manager="pnpm"}

The values become ciphertext and only your private key can unlock them.

```dotenv
# .env
DOTENV_PUBLIC_KEY="0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990"

HELLO="encrypted:BHLTACNJMr00nTG6yXpkCyWFKF/MY0ajN855tg3uVtKopTe2AGzSkQlcPd21pTOT3Ci8IKrdIg2TMZFoq1mDR6yb06QCRvqHXtpkZkAHYCEHfeWqqC8tMFovcYq5JS2uZSrC/qUGDA=="
```
{: class="design-codeblock--nowrap"}

## Commit

Commit your encrypted .env files with your code. It's safe. Now you can securely share secrets through git. Keep .env.keys out of git. The -f flag adds the encrypted file even if your project ignores .env files.

```console
$ git add -f .env
$ git commit -m "encrypt .env"
```
{: copy="git add -f .env
git commit -m \"encrypt .env\""}

## Ship

Read your secrets through env. Update src/index.js:

```javascript
// src/index.js
export default {
  async fetch(request, env) {
    return new Response(`Hello ${env.HELLO}`)
  }
}
```

Add HELLO to the required secrets in your existing Wrangler configuration:

```json
{
  "secrets": {
    "required": ["HELLO"]
  }
}
```
{: label="wrangler.jsonc"}

Wrangler loads these named secrets from the process environment during local development. Use .env for this setup and do not create a .dev.vars file; Wrangler gives .dev.vars precedence over the .env and process-environment loader.

Update the dev script in your existing package.json:

```json
{
  "scripts": {
    "dev": "dotenvx run -- wrangler dev"
  }
}
```
{: label="package.json"}

Run your Worker:

```console
$ npm run dev
```
{: copy="npm run dev" package-manager="npm"}

```console
$ pnpm dev
```
{: copy="pnpm dev" package-manager="pnpm"}

Dotenvx decrypts .env into the process environment. Wrangler gives those values precedence over the encrypted file and makes HELLO available to your Worker as env.HELLO. See [Wrangler's local environment handling](https://developers.cloudflare.com/workers/local-development/environment-variables/).

Visit [http://localhost:8787](http://localhost:8787) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:8787" text="Hello Secret" %}

## Share

Have teammates? Share access with Dotenvx Armor ⛨

Log in to Dotenvx.

```console
$ npx dotenvx login
◉ logged in (username)
```
{: copy="npx dotenvx login" class="design-codeblock--nowrap" package-manager="npm"}

```console
$ pnpm exec dotenvx login
◉ logged in (username)
```
{: copy="pnpm exec dotenvx login" class="design-codeblock--nowrap" package-manager="pnpm"}

Create the Armored Key ⛨

```console
$ npx dotenvx armor up
⛨ armored .env (022 0D8)
```
{: copy="npx dotenvx armor up" class="design-codeblock--nowrap" package-manager="npm"}

```console
$ pnpm exec dotenvx armor up
⛨ armored .env (022 0D8)
```
{: copy="pnpm exec dotenvx armor up" class="design-codeblock--nowrap" package-manager="pnpm"}

Invite your teammate.

```console
$ npx dotenvx armor invite
⛨ invited person@example.com to team
```
{: copy="npx dotenvx armor invite" class="design-codeblock--nowrap" package-manager="npm"}

```console
$ pnpm exec dotenvx armor invite
⛨ invited person@example.com to team
```
{: copy="pnpm exec dotenvx armor invite" class="design-codeblock--nowrap" package-manager="pnpm"}

Your teammate accepts the invitation, pulls the repository, installs dependencies, and logs in with dotenvx login. With the Wrangler configuration and dev script from [Ship](#ship), they can then run the Worker:

```console
$ npm run dev
```
{: copy="npm run dev" package-manager="npm"}

```console
$ pnpm dev
```
{: copy="pnpm dev" package-manager="pnpm"}

Dotenvx decrypts .env through Armor and passes the values to Wrangler.

Visit [http://localhost:8787](http://localhost:8787) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:8787" text="Hello Secret" %}

[**Not using Armor?** Alternative →](/docs/cloudflare/share-private-key/){: .side-path}

## Production

Create a .env.production file.

```dotenv
# .env.production
HELLO="Production"
```
{: copy="HELLO=\"Production\""}

Encrypt it:

```console
$ npx dotenvx encrypt -f .env.production
```
{: copy="npx dotenvx encrypt -f .env.production" package-manager="npm"}

```console
$ pnpm exec dotenvx encrypt -f .env.production
```
{: copy="pnpm exec dotenvx encrypt -f .env.production" package-manager="pnpm"}

Store the production key in Armor so authorized teammates can deploy:

```console
$ npx dotenvx armor up -f .env.production
```
{: copy="npx dotenvx armor up -f .env.production" package-manager="npm"}

```console
$ pnpm exec dotenvx armor up -f .env.production
```
{: copy="pnpm exec dotenvx armor up -f .env.production" package-manager="pnpm"}

Commit .env.production. Keep .env.keys out of git.

```console
$ git add -f .env.production
$ git commit -m "encrypt .env.production"
```
{: copy="git add -f .env.production
git commit -m \"encrypt .env.production\""}

Log in to Cloudflare:

```console
$ npx wrangler login
```
{: copy="npx wrangler login" package-manager="npm"}

```console
$ pnpm exec wrangler login
```
{: copy="pnpm exec wrangler login" package-manager="pnpm"}

Add the deploy script to your existing package.json, keeping the dev script from Ship:

```json
{
  "scripts": {
    "dev": "dotenvx run -- wrangler dev",
    "deploy": "bash -c 'dotenvx_secrets=\"$(dotenvx get -f .env.production --strict)\" && wrangler deploy --secrets-file <(printf \"%s\" \"$dotenvx_secrets\")'"
  }
}
```
{: label="package.json" class="design-codeblock--nowrap"}

The deploy script requires Bash. Deploy your Worker:

```console
$ npm run deploy
```
{: copy="npm run deploy" package-manager="npm"}

```console
$ pnpm deploy
```
{: copy="pnpm deploy" package-manager="pnpm"}

Dotenvx decrypts .env.production through Armor. The && runs Wrangler only if decryption succeeds, and process substitution passes the JSON without saving a plaintext secrets file.

Wrangler [uploads the secrets alongside your code](https://developers.cloudflare.com/workers/configuration/secrets/#upload-secrets-alongside-code). Cloudflare stores the values as Worker secrets, and your Worker reads env.HELLO. The Dotenvx private key stays with Armor; the Worker does not need it.

Open the workers.dev URL printed by Wrangler to see Hello Production.

{% include components/design-browser.html url="https://your-worker.your-subdomain.workers.dev" text="Hello Production" %}

[**Using Cloudflare Pages?** Alternative →](/docs/cloudflare/pages/){: .side-path}

[**Want to decrypt inside your Worker?** Advanced →](/docs/cloudflare/runtime-decryption/){: .side-path}

## Conclusion

You've encrypted your secrets, shared access with Armor, and deployed your Worker with Wrangler. Your encrypted .env files travel with your code, and Cloudflare serves your production secrets through env.
