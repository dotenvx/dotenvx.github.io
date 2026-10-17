---
layout: docs-markdown
title: "Vite"
social_title: "Encrypt a .env file in Vite"
description: "Encrypt a .env file in Vite with Dotenvx, share access with your team, and load configuration before bundling."
icon: vite
permalink: /docs/vite/
markdown_url: /docs/vite.md
agent_prompt: Set up Dotenvx with Vite for me.
redirect_from:
  - /docs/secrets-in-vite/
  - /docs/secrets-in-vite
quickstart_pager: true
---

## Prerequisites

Start with a [Vite app](https://vite.dev/guide/) and a supported Node.js release. This guide works with client-side React, Vue, and vanilla JavaScript apps.

VITE_ values are public in the browser. Encryption protects the committed file; keep real secrets in your backend or build tooling.

## Install

Install Dotenvx in your Vite project:

```console
$ npm install @dotenvx/dotenvx
```
{: copy="npm install @dotenvx/dotenvx" package-manager="npm"}

```console
$ pnpm add @dotenvx/dotenvx
```
{: copy="pnpm add @dotenvx/dotenvx" package-manager="pnpm"}

## Encrypt

Start with a demonstration value in the .env file at your project root:

```dotenv
# .env
VITE_HELLO="Secret"
```
{: copy="VITE_HELLO=\"Secret\""}

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

VITE_HELLO="encrypted:BHLTACNJMr00nTG6yXpkCyWFKF/MY0ajN855tg3uVtKopTe2AGzSkQlcPd21pTOT3Ci8IKrdIg2TMZFoq1mDR6yb06QCRvqHXtpkZkAHYCEHfeWqqC8tMFovcYq5JS2uZSrC/qUGDA=="
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

Display the value in your project's index.html:

```html
<h1>Hello %VITE_HELLO%</h1>
```

In JavaScript or a component, read the same value with import.meta.env.VITE_HELLO.

Update these scripts in package.json, keeping your other scripts and any existing type-checking step before the build:

```json
{
  "scripts": {
    "dev": "dotenvx run --strict -- vite",
    "build": "dotenvx run -f .env.production --strict -- vite build",
    "preview": "vite preview"
  }
}
```
{: label="package.json"}

Dotenvx decrypts .env before Vite starts. Those process variables take precedence over Vite's own .env loading.

Run your app:

```console
$ npm run dev
⟐ injected env (2) from .env (022 0D8) via .env.keys
```
{: copy="npm run dev" package-manager="npm"}

```console
$ pnpm run dev
⟐ injected env (2) from .env (022 0D8) via .env.keys
```
{: copy="pnpm run dev" package-manager="pnpm"}

Visit [http://localhost:5173](http://localhost:5173) to see Hello Secret. Restart the command after changing .env.

{% include components/design-browser.html url="http://localhost:5173" text="Hello Secret" %}

[**Build-only secrets** Alternative →](/docs/vite/build-secrets/){: .side-path}

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
$ pnpm run dev
⟐ injected env (2) from .env (022 0D8) via Armor ⛨
```
{: copy="pnpm run dev" package-manager="pnpm"}

Open the app to see Hello Secret.

[**Share a private key** Alternative →](/docs/vite/share-private-key/){: .side-path}

## Production

Create a .env.production file:

```dotenv
# .env.production
VITE_HELLO="Production"
```
{: copy="VITE_HELLO=\"Production\""}

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

When prompted, choose **Enclaved**, select your build service, connection, and resource, and use DOTENV_PRIVATE_KEY_PRODUCTION as the private key name. The key must be available to the build job.

Commit the encrypted file:

```console
$ git add -f .env.production
$ git commit -m "encrypt .env.production"
```
{: copy="git add -f .env.production
git commit -m \"encrypt .env.production\""}

Install dependencies and build on that service:

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

Dotenvx decrypts .env.production before Vite builds. Deploy dist to your static host; keep .env.keys off the build service and out of git.

Open your deployed URL to see Hello Production.

{% include components/design-browser.html url="https://your-app.example.com" text="Hello Production" %}

Public values are baked into the output. Changing them requires rebuilding. Your static host and visitors do not need Dotenvx or a private key. Keep encrypted .env files outside public so Vite does not copy them into dist.

Use npm run preview or pnpm preview to inspect an existing build locally; vite preview is not a production server.

[**Build with a private key** Alternative →](/docs/vite/build-private-key/){: .side-path}

[**Staging and other modes** Alternative →](/docs/vite/modes/){: .side-path}

## Conclusion

You've encrypted your configuration, shared access with Armor, and loaded production values before Vite builds. Your encrypted files travel with your code; private keys stay on development and build machines.
