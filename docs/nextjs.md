---
layout: docs-markdown
og_image:
  template: logo
  logo: _includes/icons/docs/nextjs.html
  alt: Next.js
title: Next.js
hero_description: "Use Dotenvx with Next.js."
icon: nextjs
show_icon: true
secrets_artifact: true
social_title: Encrypt a .env file in Next.js
description: "Use Dotenvx with Next.js to load encrypted .env files and manage environment variables across local development and deployments."
permalink: /docs/nextjs/
redirect_from:
  - /docs/platforms/vercel
  - /docs/platforms/vercel/
  - /docs/frameworks/next
  - /docs/frameworks/next/
  - /docs/secrets-in-nextjs
  - /docs/secrets-in-nextjs/
---

## Prerequisites

Create a [Next.js app](https://nextjs.org/docs/app/getting-started/installation).

## Install

In your Next.js project, install Dotenvx and [@dotenvx/next-env](https://www.npmjs.com/package/@dotenvx/next-env).

```console
$ npm install @dotenvx/dotenvx
$ npm install @dotenvx/next-env
```
{: copy="npm install @dotenvx/dotenvx
npm install @dotenvx/next-env" package-manager="npm"}

```console
$ pnpm add @dotenvx/dotenvx
$ pnpm add @dotenvx/next-env
```
{: copy="pnpm add @dotenvx/dotenvx
pnpm add @dotenvx/next-env" package-manager="pnpm"}

Add this override to your package manager’s configuration:

```json
{
  "overrides": {
    "@next/env": "npm:@dotenvx/next-env"
  }
}
```
{: copy="\"overrides\": {
  \"@next/env\": \"npm:@dotenvx/next-env\"
\}" package-manager="npm" label="package.json"}

```yaml
overrides:
  "@next/env": "npm:@dotenvx/next-env"
```
{: package-manager="pnpm" label="pnpm-workspace.yaml"}

Apply it:

```console
$ npm install
```
{: copy="npm install" package-manager="npm"}

```console
$ pnpm install
```
{: copy="pnpm install" package-manager="pnpm"}

Next.js now loads encrypted secrets automatically through @dotenvx/next-env.

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

Commit your encrypted .env files with your code. It's safe. Now you can securely share secrets through git. Keep .env.keys out of git. The -f flag adds the encrypted file even if your Next.js project ignores .env files.

```console
$ git add -f .env
$ git commit -m "encrypt .env"
```
{: copy="git add -f .env
git commit -m \"encrypt .env\""}

## Ship

Read your secrets through process.env. Create app/api/hello/route.js:

```javascript
// app/api/hello/route.js
import { connection } from 'next/server'

export async function GET() {
  await connection()
  return new Response(`Hello ${process.env.HELLO}`)
}
```

Run your app:

```console
$ npm run dev
⟐ injected env (2) from .env (022 0D8) via .env.keys
▲ Next.js 16.4.1 (Turbopack)
- Local:         http://localhost:3000
```
{: copy="npm run dev" package-manager="npm"}

```console
$ pnpm dev
⟐ injected env (2) from .env (022 0D8) via .env.keys
▲ Next.js 16.4.1 (Turbopack)
- Local:         http://localhost:3000
```
{: copy="pnpm dev" package-manager="pnpm"}

Next.js loads and decrypts .env before your server code reads process.env.

Visit [http://localhost:3000/api/hello](http://localhost:3000/api/hello) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:3000/api/hello" text="Hello Secret" %}

[**Seeing encrypted:ciphertext only?** Troubleshoot →](/docs/nextjs/encrypted-text/){: .side-path .side-path--troubleshooting}

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

They can now pull (git), decrypt, and run.

```console
$ npm run dev
⟐ injected env (2) from .env (022 0D8) via Armor ⛨
▲ Next.js 16.4.1 (Turbopack)
- Local:         http://localhost:3000
```
{: copy="npm run dev" package-manager="npm"}

```console
$ pnpm dev
⟐ injected env (2) from .env (022 0D8) via Armor ⛨
▲ Next.js 16.4.1 (Turbopack)
- Local:         http://localhost:3000
```
{: copy="pnpm dev" package-manager="pnpm"}

{% include components/design-browser.html url="http://localhost:3000/api/hello" text="Hello Secret" %}

[**Not using Armor?** Alternative →](/docs/nextjs/share-private-key/){: .side-path}

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

# 1. ⛨ Choose key type …
# ❯ ◊ Enclaved
# 2. ◊ Select service …
# ❯ Vercel
# 3. ◊ Select connection …
# 4. ◊ Select resource/project …
# 5. ? Private key name › DOTENV_PRIVATE_KEY_PRODUCTION
```
{: copy="pnpm exec dotenvx encrypt -f .env.production" package-manager="pnpm"}

Commit .env.production.

```console
$ git add -f .env.production
$ git commit -m "encrypt .env.production"
```
{: copy="git add -f .env.production
git commit -m \"encrypt .env.production\""}

Deploy to Vercel.

```console
$ npm install vercel --save-dev
$ npx vercel --prod
```
{: copy="npm install vercel --save-dev
npx vercel --prod" package-manager="npm"}

```console
$ pnpm add -D vercel
$ pnpm exec vercel --prod
```
{: copy="pnpm add -D vercel
pnpm exec vercel --prod" package-manager="pnpm"}

Vercel loads and decrypts .env.production with your Enclaved Key ◊

Visit [https://your-app.vercel.app/api/hello](https://your-app.vercel.app/api/hello) to see Hello Production.

{% include components/design-browser.html url="https://your-app.vercel.app/api/hello" text="Hello Production" %}

[**Not using Armor Enclaves?** Alternative →](/docs/nextjs/deploy-private-key/){: .side-path}

## Conclusion

You've encrypted your secrets, shared access with Armor, and deployed to Vercel with Armor Enclaves.
