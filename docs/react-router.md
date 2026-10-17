---
layout: docs-markdown
title: "React Router"
social_title: "Encrypt a .env file in React Router"
description: "Encrypt a .env file in React Router with Dotenvx, commit it safely, and load its secrets at runtime."
icon: react-router
permalink: /docs/react-router/
markdown_url: /docs/react-router.md
agent_prompt: Set up Dotenvx with React Router Framework Mode for me.
redirect_from:
  - /docs/frameworks/react-router
  - /docs/frameworks/react-router/
quickstart_pager: true
---

## Prerequisites

Start with a [React Router Framework Mode app](https://reactrouter.com/start/framework/installation) using Vite and Node.js. Keep server rendering enabled. This guide uses @react-router/serve for production.

For a browser-only app using BrowserRouter or createBrowserRouter, follow the [Vite guide](/docs/vite/).

## Install

In your React Router project, install Dotenvx and the production server.

```console
$ npm install @dotenvx/dotenvx @react-router/serve
```
{: copy="npm install @dotenvx/dotenvx @react-router/serve" package-manager="npm"}

```console
$ pnpm add @dotenvx/dotenvx @react-router/serve
```
{: copy="pnpm add @dotenvx/dotenvx @react-router/serve" package-manager="pnpm"}

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

Read your value in a server loader:

```tsx
// app/routes/home.tsx
import { useLoaderData } from 'react-router'

export function loader() {
  return { hello: process.env.HELLO }
}

export default function Home() {
  const { hello } = useLoaderData<typeof loader>()
  return <h1>Hello {hello}</h1>
}
```

Keep your home route registered in app/routes.ts:

```ts
// app/routes.ts
import { index, type RouteConfig } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
] satisfies RouteConfig
```

Keep any other routes in that array. HELLO is a demonstration value: loader results reach the browser. Use real secrets inside server loaders or actions without returning them, and keep secret access out of clientLoader.

Update these scripts in package.json, keeping your other scripts:

```json
{
  "scripts": {
    "dev": "dotenvx run --strict -- react-router dev",
    "build": "react-router build",
    "start": "dotenvx run -f .env.production --strict -- react-router-serve ./build/server/index.js"
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

Dotenvx loads and decrypts .env before React Router starts. Your loader reads process.env on the server at request time.

Visit [http://localhost:5173](http://localhost:5173) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:5173" text="Hello Secret" %}

[**Public browser variables** Alternative →](/docs/react-router/public-variables/){: .side-path}

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

[**Share a private key** Alternative →](/docs/react-router/share-private-key/){: .side-path}

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

Deploy the compiled build directory, package.json, runtime dependencies, and encrypted .env.production file to the selected resource. Keep .env.production at the project root and .env.keys on your local machine.

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

[**Build-time configuration** Alternative →](/docs/react-router/build-time/){: .side-path}

[**Deploy with a private key** Alternative →](/docs/react-router/deploy-private-key/){: .side-path}

For custom servers or edge hosts, use the matching [React Router deployment setup](https://reactrouter.com/start/framework/deploying); the start script above targets Node.js.

## Conclusion

You've encrypted your secrets, shared access with Armor, and loaded production secrets in React Router with an Enclaved Key. Your secrets now travel with your code.
