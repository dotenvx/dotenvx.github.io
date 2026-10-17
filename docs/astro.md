---
layout: docs-markdown
title: "Astro"
social_title: "Encrypt a .env file in Astro"
description: "Encrypt a .env file in Astro with Dotenvx, commit it safely, and load its secrets at runtime."
icon: astro
permalink: /docs/astro/
markdown_url: /docs/astro.md
agent_prompt: Set up Dotenvx with Astro for me.
redirect_from:
  - /docs/secrets-in-astro/
  - /docs/secrets-in-astro
  - /docs/frameworks/astro
  - /docs/frameworks/astro/
quickstart_pager: true
---

## Prerequisites

Create an [Astro app](https://docs.astro.build/en/install-and-setup/).

## Install

In your Astro project, install Dotenvx and the [Node.js adapter](https://docs.astro.build/en/guides/integrations-guide/node/). This guide uses server rendering on Node.js.

```console
$ npm install @dotenvx/dotenvx @astrojs/node
```
{: copy="npm install @dotenvx/dotenvx @astrojs/node" package-manager="npm"}

```console
$ pnpm add @dotenvx/dotenvx @astrojs/node
```
{: copy="pnpm add @dotenvx/dotenvx @astrojs/node" package-manager="pnpm"}

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

Commit your encrypted .env files with your code. It's safe. Now you can securely share secrets through git.

```console
$ git add .env
$ git commit -m "encrypt .env"
```
{: copy="git add .env
git commit -m \"encrypt .env\""}

## Ship

Configure Astro to render pages on the server. Merge these settings into astro.config.mjs, keeping your existing integrations:

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
});
```

Read your value in the page's server-side frontmatter:

```astro
---
// src/pages/index.astro
const hello = process.env.HELLO;
---
<html lang="en">
  <head><title>Dotenvx + Astro</title></head>
  <body><h1>Hello {hello}</h1></body>
</html>
```

HELLO is a demonstration value. Use real secrets in server-side operations without rendering them into HTML.

Update these scripts in package.json, keeping your other scripts:

```json
{
  "scripts": {
    "dev": "dotenvx run -- astro dev",
    "build": "astro build",
    "preview": "dotenvx run -- astro preview",
    "start": "dotenvx run -f .env.production --strict -- node dist/server/entry.mjs"
  }
}
```
{: label="package.json"}

Run your app:

```console
$ npm run dev
⟐ injected env (2) from .env (022 0D8) via .env.keys
```
{: copy="npm run dev" package-manager="npm"}

```console
$ pnpm dev
⟐ injected env (2) from .env (022 0D8) via .env.keys
```
{: copy="pnpm dev" package-manager="pnpm"}

Dotenvx loads and decrypts .env before Astro starts. This page reads process.env on the server at request time.

Visit [http://localhost:4321](http://localhost:4321) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:4321" text="Hello Secret" %}

[**Public browser variables** Alternative →](/docs/astro/public-variables/){: .side-path}

[**Static builds** Alternative →](/docs/astro/static-builds/){: .side-path}

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

Your teammate accepts the invitation, pulls the repository, installs dependencies, and logs in with dotenvx login. They can then run the app:

```console
$ npm run dev
⟐ injected env (2) from .env (022 0D8) via Armor ⛨
```
{: copy="npm run dev" package-manager="npm"}

```console
$ pnpm dev
⟐ injected env (2) from .env (022 0D8) via Armor ⛨
```
{: copy="pnpm dev" package-manager="pnpm"}

Visit [http://localhost:4321](http://localhost:4321) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:4321" text="Hello Secret" %}

[**Share a private key** Alternative →](/docs/astro/share-private-key/){: .side-path}

## Production

Create a .env.production file.

```dotenv
# .env.production
HELLO="Production"
```
{: copy="HELLO=\"Production\""}

Encrypt it with an Enclaved Key ◊

```console
$ npx dotenvx encrypt -f .env.production
◈ encrypted .env.production (022 0D8) via Armor Enclave ◊
```
{: copy="npx dotenvx encrypt -f .env.production" package-manager="npm"}

```console
$ pnpm exec dotenvx encrypt -f .env.production
◈ encrypted .env.production (022 0D8) via Armor Enclave ◊
```
{: copy="pnpm exec dotenvx encrypt -f .env.production" package-manager="pnpm"}

When prompted, choose **Enclaved**, select your deployment service, connection, and resource, and use DOTENV_PRIVATE_KEY_PRODUCTION as the private key name.

Commit .env.production.

```console
$ git add -f .env.production
$ git commit -m "encrypt .env.production"
```
{: copy="git add -f .env.production
git commit -m \"encrypt .env.production\""}

Install dependencies and build your app in your deployment build step:

```console
$ npm install
$ npm run build
```
{: copy="npm install
npm run build" package-manager="npm"}

```console
$ pnpm install
$ pnpm build
```
{: copy="pnpm install
pnpm build" package-manager="pnpm"}

This server-rendered example only needs its secret at runtime, so the build script does not decrypt it.

Deploy the compiled dist directory, package.json, runtime dependencies, and encrypted .env.production file to the selected resource. Keep .env.production at the project root and .env.keys on your local machine.

Set HOST to 0.0.0.0 and PORT to the port your host expects. From the project root, run:

```console
$ npm start
```
{: copy="npm start" package-manager="npm"}

```console
$ pnpm start
```
{: copy="pnpm start" package-manager="pnpm"}

Dotenvx loads and decrypts .env.production with your Enclaved Key ◊

Open your deployed app's URL to see Hello Production.

{% include components/design-browser.html url="https://your-app.example.com" text="Hello Production" %}

Use the start script for production; preview is for checking a build locally.

[**Deploy with a private key** Alternative →](/docs/astro/deploy-private-key/){: .side-path}

## Conclusion

You've encrypted your secrets, shared access with Armor, and loaded production secrets in Astro with an Enclaved Key. Your secrets now travel with your code.
