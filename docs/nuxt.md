---
layout: docs-markdown
title: "Nuxt"
social_title: "Encrypt a .env file in Nuxt"
description: "Encrypt a .env file in Nuxt with Dotenvx, commit it safely, and load its secrets at runtime."
icon: nuxt
permalink: /docs/nuxt/
markdown_url: /docs/nuxt.md
agent_prompt: Set up Dotenvx with Nuxt 4 for me.
redirect_from:
  - /docs/frameworks/nuxt
  - /docs/frameworks/nuxt/
quickstart_pager: true
---

## Prerequisites

Start with a [Nuxt 4 app](https://nuxt.com/docs/4.x/getting-started/installation) and Node.js. This guide deploys a standalone Node server.

## Install

In your Nuxt project, install Dotenvx.

```console
$ npm install @dotenvx/dotenvx
```
{: copy="npm install @dotenvx/dotenvx" package-manager="npm"}

```console
$ pnpm add @dotenvx/dotenvx
```
{: copy="pnpm add @dotenvx/dotenvx" package-manager="pnpm"}

## Encrypt

Start with a secret value in the .env file at your project root, like:

```dotenv
# .env
NUXT_HELLO="Secret"
```
{: copy="NUXT_HELLO=\"Secret\""}

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

NUXT_HELLO="encrypted:BHLTACNJMr00nTG6yXpkCyWFKF/MY0ajN855tg3uVtKopTe2AGzSkQlcPd21pTOT3Ci8IKrdIg2TMZFoq1mDR6yb06QCRvqHXtpkZkAHYCEHfeWqqC8tMFovcYq5JS2uZSrC/qUGDA=="
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

Declare your private runtime configuration, keeping your other options:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    hello: ''
  }
})
```

Nuxt maps NUXT_HELLO to runtimeConfig.hello at runtime. Keep the default empty so the build does not capture your secret.

Read it in a server route:

```ts
// server/api/hello.get.ts
export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  return { hello: config.hello }
})
```

Display the result:

{% raw %}
```vue
<!-- app/app.vue -->
<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
  <h1>Hello {{ data?.hello }}</h1>
</template>
```
{% endraw %}

NUXT_HELLO is a demonstration value. API responses reach the browser; use real secrets inside server routes without returning them.

Update these scripts in package.json, keeping your other scripts:

```json
{
  "scripts": {
    "dev": "dotenvx run -- nuxt dev",
    "build": "nuxt build --preset node-server",
    "start": "dotenvx run -f .env.production --strict -- node .output/server/index.mjs"
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

Dotenvx loads and decrypts .env before Nuxt starts. Your server route reads it through useRuntimeConfig(event).

Visit [http://localhost:3000](http://localhost:3000) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:3000" text="Hello Secret" %}

[**Public browser variables** Alternative →](/docs/nuxt/public-variables/){: .side-path}

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

Visit [http://localhost:3000](http://localhost:3000) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:3000" text="Hello Secret" %}

[**Share a private key** Alternative →](/docs/nuxt/share-private-key/){: .side-path}

## Production

Create a .env.production file.

```dotenv
# .env.production
NUXT_HELLO="Production"
```
{: copy="NUXT_HELLO=\"Production\""}

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

Deploy .output, package.json, the dependencies needed to run Dotenvx, and the encrypted .env.production file to the selected resource. Keep .env.production at the project root and .env.keys on your local machine.

Set NODE_ENV to production and PORT to the port your host expects (3000 by default). From the project root, run:

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

[**Static generation** Alternative →](/docs/nuxt/static-generation/){: .side-path}

[**Deploy with a private key** Alternative →](/docs/nuxt/deploy-private-key/){: .side-path}

For serverless or edge deployments, follow your platform’s [Nuxt deployment preset](https://nuxt.com/docs/4.x/getting-started/deployment); the scripts above target a Node server.

## Conclusion

You've encrypted your secrets, shared access with Armor, and loaded production secrets in Nuxt with an Enclaved Key. Your secrets now travel with your code.
