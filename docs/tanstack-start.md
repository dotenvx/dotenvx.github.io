---
layout: docs-markdown
title: "TanStack Start"
social_title: "Encrypt a .env file in TanStack Start"
description: "Encrypt a .env file in TanStack Start with Dotenvx, commit it safely, and load its secrets at runtime."
icon: tanstack-start
permalink: /docs/tanstack-start/
markdown_url: /docs/tanstack-start.md
agent_prompt: Set up Dotenvx with TanStack Start for me.
redirect_from:
  - /docs/frameworks/tanstack-start
  - /docs/frameworks/tanstack-start/
quickstart_pager: true
---

## Prerequisites

Start with a [TanStack Start React app using Vite](https://tanstack.com/start/latest/docs/framework/react/overview) and a supported Node.js release. This guide uses Nitro to deploy a Node server.

## Install

In your TanStack Start project, install Dotenvx.

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

Read your value inside a server function:

```tsx
// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

const getHello = createServerFn({ method: 'GET' }).handler(() => {
  return process.env.HELLO
})

export const Route = createFileRoute('/')({
  loader: () => getHello(),
  component: Home,
})

function Home() {
  const hello = Route.useLoaderData()
  return <h1>Hello {hello}</h1>
}
```

The handler runs on the server. Route loaders can also run during browser navigation, so read secrets inside the server function.

HELLO is a demonstration value. Server function results reach the browser; use real secrets inside the handler without returning them.

Update these scripts in package.json, keeping your other scripts:

```json
{
  "scripts": {
    "dev": "dotenvx run --strict -- vite --port 3000",
    "build": "vite build",
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

Dotenvx loads and decrypts .env before TanStack Start starts. Your server function reads process.env when it handles a request.

Visit [http://localhost:3000](http://localhost:3000) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:3000" text="Hello Secret" %}

[**Public browser variables** Alternative →](/docs/tanstack-start/public-variables/){: .side-path}

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

[**Share a private key** Alternative →](/docs/tanstack-start/share-private-key/){: .side-path}

## Production

Install [Nitro](https://tanstack.com/start/latest/docs/framework/react/guide/hosting#nitro) for Node deployment:

```console
$ npm install -D nitro
```
{: copy="npm install -D nitro" package-manager="npm"}

```console
$ pnpm add -D nitro
```
{: copy="pnpm add -D nitro" package-manager="pnpm"}

Add Nitro to your existing Vite configuration, keeping your other plugins and options:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'

export default defineConfig({
  plugins: [
    tanstackStart(),
    nitro({ preset: 'node-server' }),
    react(),
  ],
})
```

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

[**Build-time configuration** Alternative →](/docs/tanstack-start/build-time/){: .side-path}

[**Deploy with a private key** Alternative →](/docs/tanstack-start/deploy-private-key/){: .side-path}

For serverless or edge deployments, follow your platform’s [TanStack Start hosting setup](https://tanstack.com/start/latest/docs/framework/react/guide/hosting); the scripts above target a Node server.

## Conclusion

You've encrypted your secrets, shared access with Armor, and loaded production secrets in TanStack Start with an Enclaved Key. Your secrets now travel with your code.
