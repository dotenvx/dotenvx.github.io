---
title: "Fastify"
social_title: "Encrypt a .env file in Fastify"
description: "Encrypt a .env file in Fastify with Dotenvx, commit it safely, and load its secrets at runtime."
icon: fastify
permalink: /docs/fastify/
markdown_url: /docs/fastify.md
agent_prompt: Set up Dotenvx with Fastify for me.
redirect_from:
  - /docs/frameworks/fastify
  - /docs/frameworks/fastify/
search_boost: 35
---

## Prerequisites

Start with a [Fastify app](https://fastify.dev/docs/latest/Guides/Getting-Started/) and a supported Node.js LTS release. This guide uses Fastify 5.

## Install

In your Fastify project, install Dotenvx.

```console
$ npm install @dotenvx/dotenvx
```
{: copy="npm install @dotenvx/dotenvx" package-manager="npm"}

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
```
{: copy="npx dotenvx encrypt" package-manager="npm"}

The values become ciphertext and only your private key can unlock them.

```dotenv
# .env
DOTENV_PUBLIC_KEY="DOTENV-PUBLIC-KEY-3-SECP256K1-0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990"

HELLO="DOTENV-CIPHERTEXT-3-SECP256K1-AES256GCM-0220d83035-BP8FZxI4vhmRmfTAmvZGnzBd6AoJG0ZSjKDLRbE4XpxaWBDD7PpxLMkB/2I0glwVkHXeIcpJwY13qtdhjySs+a9NT9myy5uzErUYb2Uc/1LDY886yF8SxslAxfiJzhZ5NV3qQDQ6Tg=="
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

Read your value through process.env. Create server.mjs:

```js
// server.mjs
import Fastify from 'fastify'

const app = Fastify({ logger: true })

app.get('/', async () => {
  return `Hello ${process.env.HELLO}`
})

try {
  await app.listen({
    port: Number(process.env.PORT || 3000),
    host: process.env.HOST || '127.0.0.1'
  })
} catch (error) {
  app.log.error(error)
  process.exit(1)
}
```

HELLO is a demonstration value. Responses reach the browser; use real secrets inside server code without returning them.

Update these scripts in package.json, keeping your other scripts:

```json
{
  "scripts": {
    "dev": "dotenvx run --strict -- node server.mjs",
    "start": "dotenvx run -f .env.production --strict -- node server.mjs"
  }
}
```
{: label="package.json"}

Run your app:

```console
$ npm run dev
```
{: copy="npm run dev" package-manager="npm"}

Dotenvx loads and decrypts .env before Fastify starts. Your routes and plugins can read the decrypted values through process.env.

Visit [http://localhost:3000](http://localhost:3000) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:3000" text="Hello Secret" %}

[**CommonJS** Alternative →](/docs/fastify/commonjs/){: .side-path}

## Share

Have teammates? Share access with Dotenvx Armor ⛨

Install the [Armor feature](/docs/cli/install-add/) before using Armor commands:

```console
$ npx dotenvx install --add armor
```
{: copy="npx dotenvx install --add armor"}

Log in to Dotenvx.

```console
$ npx dotenvx login
◉ logged in (username)
```
{: copy="npx dotenvx login" class="design-codeblock--nowrap" package-manager="npm"}

Create the Armored Key ⛨

```console
$ npx dotenvx armor up
```
{: copy="npx dotenvx armor up" class="design-codeblock--nowrap" package-manager="npm"}

Invite your teammate.

```console
$ npx dotenvx armor invite
⛨ invited person@example.com to team
```
{: copy="npx dotenvx armor invite" class="design-codeblock--nowrap" package-manager="npm"}

Your teammate accepts the invitation, pulls the repository, installs dependencies, and logs in with dotenvx login. They can then run the app:

```console
$ npm run dev
```
{: copy="npm run dev" package-manager="npm"}

Visit [http://localhost:3000](http://localhost:3000) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:3000" text="Hello Secret" %}

[**Share a private key** Alternative →](/docs/fastify/share-private-key/){: .side-path}

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
```
{: copy="npx dotenvx encrypt -f .env.production" package-manager="npm"}

When prompted, choose **Armor**, then **Enclaved**, select your deployment service, connection, and resource, and use DOTENV_PRIVATE_KEY_PRODUCTION as the private key name.

Commit .env.production.

```console
$ git add -f .env.production
$ git commit -m "encrypt .env.production"
```
{: copy="git add -f .env.production
git commit -m \"encrypt .env.production\""}

Deploy your code, package.json, lockfile, and encrypted .env.production file to the selected resource. Install your dependencies there:

```console
$ npm install
```
{: copy="npm install" package-manager="npm"}

Keep .env.production at the project root and .env.keys on your local machine. This JavaScript example does not need a build step.

Set NODE_ENV to production, HOST to 0.0.0.0, and PORT to the port your host expects (3000 by default). From the project root, run:

```console
$ npm start
```
{: copy="npm start" package-manager="npm"}

Dotenvx loads and decrypts .env.production with your Enclaved Key ◊

Open your deployed app's URL to see Hello Production.

{% include components/design-browser.html url="https://your-app.example.com" text="Hello Production" %}

[**Deploy with a private key** Alternative →](/docs/fastify/deploy-private-key/){: .side-path}

## Conclusion

You've encrypted your secrets, shared access with Armor, and loaded production secrets in Fastify with an Enclaved Key. Your secrets now travel with your code.
