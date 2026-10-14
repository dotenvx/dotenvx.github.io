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
◈ encrypted (.env)
```
{: copy="npx dotenvx encrypt" package-manager="npm"}

```console
$ pnpm exec dotenvx encrypt
◈ encrypted (.env)
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

{% capture override_help %}

Next.js may still be using the original @next/env package, even after adding the override. Check which package is installed:

```console
$ npm ls @next/env
```
{: copy="npm ls @next/env" package-manager="npm"}

```console
$ pnpm why @next/env
```
{: copy="pnpm why @next/env" package-manager="pnpm"}

The output should show @next/env as an alias of @dotenvx/next-env. An original Next.js version followed by “overridden” does not mean the replacement was installed.

If the original package is still installed, stop the dev server with Ctrl+C. From your project directory, rebuild the dependency installation:

```console
$ rm -rf node_modules package-lock.json
$ npm install
$ npm ls @next/env
```
{: copy="rm -rf node_modules package-lock.json
npm install
npm ls @next/env" package-manager="npm"}

```console
$ rm -rf node_modules pnpm-lock.yaml
$ pnpm install
$ pnpm why @next/env
```
{: copy="rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm why @next/env" package-manager="pnpm"}

Confirm the alias now points to @dotenvx/next-env, then restart:

```console
$ npm run dev
```
{: copy="npm run dev" package-manager="npm"}

```console
$ pnpm dev
```
{: copy="pnpm dev" package-manager="pnpm"}

Refresh [/api/hello](http://localhost:3000/api/hello). Review the regenerated lockfile before committing, since reinstalling can update dependency versions.

{% endcapture %}
{% include components/design-warning.html title="Seeing Hello encrypted:ciphertext instead of Hello Secret?" content=override_help markdown=true open=true %}

## Deploy

Find your private key with the keypair command.

```console
$ npx dotenvx keypair
{"DOTENV_PUBLIC_KEY":"0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990","DOTENV_PRIVATE_KEY":"b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf"}
```
{: copy="npx dotenvx keypair" class="design-codeblock--nowrap" package-manager="npm"}

```console
$ pnpm exec dotenvx keypair
{"DOTENV_PUBLIC_KEY":"0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990","DOTENV_PRIVATE_KEY":"b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf"}
```
{: copy="pnpm exec dotenvx keypair" class="design-codeblock--nowrap" package-manager="pnpm"}

Deploy your code and encrypted .env file, install your dependencies, and set DOTENV_PRIVATE_KEY in your hosting platform's environment variables. Make it available during both build and runtime. On Vercel, select the environments you deploy to. Keep .env.keys on your local machine.

{% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY" value="b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf" %}

Build and run your app:

```console
$ npm run build
$ npm start
```
{: copy="npm run build
npm start" package-manager="npm"}

```console
$ pnpm build
$ pnpm start
```
{: copy="pnpm build
pnpm start" package-manager="pnpm"}

Your app reads the same secrets, but this time with the private key stored in your hosting environment.

## Production

Give production its own secrets by creating a .env.production file:

```dotenv
# .env.production
HELLO="Production"
```
{: copy="HELLO=\"Production\""}

Encrypt it:

```console
$ npx dotenvx encrypt -f .env.production
◈ encrypted (.env.production)
```
{: copy="npx dotenvx encrypt -f .env.production" package-manager="npm"}

```console
$ pnpm exec dotenvx encrypt -f .env.production
◈ encrypted (.env.production)
```
{: copy="pnpm exec dotenvx encrypt -f .env.production" package-manager="pnpm"}

Commit it:

```console
$ git add -f .env.production
$ git commit -m "encrypt .env.production"
```
{: copy="git add -f .env.production
git commit -m \"encrypt .env.production\""}

Find the matching private key:

```console
$ npx dotenvx keypair -f .env.production
```
{: copy="npx dotenvx keypair -f .env.production" package-manager="npm"}

```console
$ pnpm exec dotenvx keypair -f .env.production
```
{: copy="pnpm exec dotenvx keypair -f .env.production" package-manager="pnpm"}

Set it as DOTENV_PRIVATE_KEY and set DOTENV_FILE to .env.production in your hosting platform's environment variables for both build and runtime.

{% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY" path=".env.production" value="c09d6f8918835c82f0df3b7d100c501ac199af5a76405892d641def691b5f015" %}

Build and run it:

```console
$ npm run build
$ npm start
```
{: copy="npm run build
npm start" package-manager="npm"}

```console
$ pnpm build
$ pnpm start
```
{: copy="pnpm build
pnpm start" package-manager="pnpm"}

Next.js automatically loads .env.production for next build and next start. Visit /api/hello to see Hello Production. Same code, production secrets.

Next.js also loads .env as a fallback. If it uses a different encryption key, supply that key as DOTENV_PRIVATE_KEY_2.

## Conclusion

You've encrypted a .env file, committed it to git, and loaded its secrets through Next.js with @dotenvx/next-env. You've also learned how to set a private key on your server and load different secrets for production without changing your code.

Your encrypted secrets now travel with your code. Set the matching keys in your hosting environment, and Next.js handles loading them.
