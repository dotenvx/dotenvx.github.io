---
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
markdown_url: /docs/nextjs.md
agent_prompt: Set up Dotenvx with Next.js for me.
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

Install the standalone Dotenvx CLI and make sure `dotenvx` is on your `PATH`.

```console
$ curl -sfS https://dotenvx.sh | sh
```
{: copy="curl -sfS https://dotenvx.sh | sh"}

In your Next.js project, install [@dotenvx/next-env](https://www.npmjs.com/package/@dotenvx/next-env).

```console
$ npm install @dotenvx/next-env
```
{: copy="npm install @dotenvx/next-env" package-manager="npm"}

Add this override to package.json:

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

Apply it:

```console
$ npm install
```
{: copy="npm install" package-manager="npm"}

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
$ dotenvx encrypt
```
{: copy="dotenvx encrypt"}

The values become ciphertext and only your private key can unlock them.

```dotenv
# .env
DOTENV_PUBLIC_KEY="DOTENV-PUBLIC-KEY-3-SECP256K1-0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990"

HELLO="DOTENV-CIPHERTEXT-3-SECP256K1-AES256GCM-0220d83035-BP8FZxI4vhmRmfTAmvZGnzBd6AoJG0ZSjKDLRbE4XpxaWBDD7PpxLMkB/2I0glwVkHXeIcpJwY13qtdhjySs+a9NT9myy5uzErUYb2Uc/1LDY886yF8SxslAxfiJzhZ5NV3qQDQ6Tg=="
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
▲ Next.js 16.4.1 (Turbopack)
- Local:         http://localhost:3000
```
{: copy="npm run dev" package-manager="npm"}

Next.js loads and decrypts .env before your server code reads process.env.

Visit [http://localhost:3000/api/hello](http://localhost:3000/api/hello) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:3000/api/hello" text="Hello Secret" %}

[**Seeing ciphertext only?** Troubleshoot →](/docs/nextjs/encrypted-text/){: .side-path .side-path--troubleshooting}

## Share

Have teammates? Share access with Dotenvx Armor ⛨

Install the [Armor feature](/docs/cli/install-add/) before using Armor commands:

```console
$ dotenvx install --add armor
```
{: copy="dotenvx install --add armor"}

Log in to Dotenvx.

```console
$ dotenvx login
◉ logged in (username)
```
{: copy="dotenvx login" class="design-codeblock--nowrap"}

Create the Armored Key ⛨

```console
$ dotenvx armor up
```
{: copy="dotenvx armor up" class="design-codeblock--nowrap"}

Invite your teammate.

```console
$ dotenvx armor invite
⛨ invited person@example.com to team
```
{: copy="dotenvx armor invite" class="design-codeblock--nowrap"}

They can now pull (git), decrypt, and run.

```console
$ npm run dev
▲ Next.js 16.4.1 (Turbopack)
- Local:         http://localhost:3000
```
{: copy="npm run dev" package-manager="npm"}

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
$ dotenvx encrypt -f .env.production
```
{: copy="dotenvx encrypt -f .env.production"}

When prompted, choose **Armor**, then **Enclaved**. Select **Vercel**, your connection and project, and use DOTENV_PRIVATE_KEY_PRODUCTION as the private key name.

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

Vercel loads and decrypts .env.production with your Enclaved Key ◊

Visit [https://your-app.vercel.app/api/hello](https://your-app.vercel.app/api/hello) to see Hello Production.

{% include components/design-browser.html url="https://your-app.vercel.app/api/hello" text="Hello Production" %}

[**Not using Armor Enclaves?** Alternative →](/docs/nextjs/deploy-private-key/){: .side-path}

## Conclusion

You've encrypted your secrets, shared access with Armor, and deployed to Vercel with Armor Enclaves.
