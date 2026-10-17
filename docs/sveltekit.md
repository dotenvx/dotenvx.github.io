---
layout: docs-markdown
title: "SvelteKit"
social_title: "Encrypt a .env file in SvelteKit"
description: "Encrypt a .env file in SvelteKit with Dotenvx, commit it safely, and load its secrets at runtime."
icon: sveltekit
permalink: /docs/sveltekit/
markdown_url: /docs/sveltekit.md
agent_prompt: Set up Dotenvx with SvelteKit 3 for me.
redirect_from:
  - /docs/frameworks/sveltekit
  - /docs/frameworks/sveltekit/
quickstart_pager: true
---

## Prerequisites

Start with a [SvelteKit 3 app](https://svelte.dev/docs/kit/creating-a-project) and Node.js. This guide uses Svelte 5 and the Node adapter for production.

## Install

In your SvelteKit project, install Dotenvx.

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

Declare your server variable:

```js
// src/env.js
import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
  HELLO: {}
});
```

If your app already has src/env.ts, add HELLO there instead. Variables are private and loaded at runtime by default.

Read it in a server load function:

```js
// src/routes/+page.server.js
import { HELLO } from '$app/env/private';

export function load() {
  return { hello: HELLO };
}
```

Display the result:

```svelte
<!-- src/routes/+page.svelte -->
<script>
  let { data } = $props();
</script>

<h1>Hello {data.hello}</h1>
```

HELLO is a demonstration value. Load function results reach the browser; use real secrets inside server code without returning them.

Update these scripts in package.json, keeping your other scripts:

```json
{
  "scripts": {
    "dev": "dotenvx run -- vite dev",
    "build": "vite build",
    "preview": "dotenvx run -- vite preview",
    "start": "dotenvx run -f .env.production --strict -- node build"
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

Dotenvx loads and decrypts .env before SvelteKit starts. SvelteKit makes the decrypted value available through $app/env/private on the server.

Visit [http://localhost:5173](http://localhost:5173) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:5173" text="Hello Secret" %}

[**Public browser variables** Alternative →](/docs/sveltekit/public-variables/){: .side-path}

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

Visit [http://localhost:5173](http://localhost:5173) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:5173" text="Hello Secret" %}

[**Share a private key** Alternative →](/docs/sveltekit/share-private-key/){: .side-path}

## Production

Install the [Node adapter](https://svelte.dev/docs/kit/adapter-node).

```console
$ npm install -D @sveltejs/adapter-node
```
{: copy="npm install -D @sveltejs/adapter-node" package-manager="npm"}

```console
$ pnpm add -D @sveltejs/adapter-node
```
{: copy="pnpm add -D @sveltejs/adapter-node" package-manager="pnpm"}

Replace your existing adapter in vite.config.js (or vite.config.ts), keeping your other configuration:

```js
import adapter from '@sveltejs/adapter-node';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit({ adapter: adapter() })]
});
```
{: label="vite.config.js"}

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

Deploy the compiled build directory, package.json, runtime dependencies, and encrypted .env.production file to the selected resource. Keep .env.production at the project root and .env.keys on your local machine.

Set PORT to the port your host expects (3000 by default). Behind a reverse proxy, configure your [server origin](https://svelte.dev/docs/kit/adapter-node) for your deployment. From the project root, run:

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

[**Build-time variables** Alternative →](/docs/sveltekit/build-time-variables/){: .side-path}

[**Deploy with a private key** Alternative →](/docs/sveltekit/deploy-private-key/){: .side-path}

For serverless or edge deployments, follow your platform’s [SvelteKit adapter](https://svelte.dev/docs/kit/adapters) and secret configuration; the start script above runs a standalone Node server.

## Conclusion

You've encrypted your secrets, shared access with Armor, and loaded production secrets in SvelteKit with an Enclaved Key. Your secrets now travel with your code.
