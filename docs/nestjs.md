---
title: "NestJS"
social_title: "Encrypt a .env file in NestJS"
description: "Encrypt a .env file in NestJS with Dotenvx, commit it safely, and load its secrets at runtime."
permalink: /docs/nestjs/
markdown_url: /docs/nestjs.md
agent_prompt: Set up Dotenvx with NestJS for me.
search_boost: 35
---

## Prerequisites

Create a [NestJS app](https://docs.nestjs.com/first-steps).

## Install

In your NestJS project, install Dotenvx.

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

Read your secret in the starter app's service:

```typescript
// src/app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello ${process.env.HELLO}`;
  }
}
```

Update these scripts in package.json, keeping your other scripts:

```json
{
  "scripts": {
    "build": "nest build",
    "start": "dotenvx run -- nest start",
    "start:dev": "dotenvx run -- nest start --watch",
    "start:prod": "dotenvx run -f .env.production --strict -- node dist/main.js"
  }
}
```
{: label="package.json"}

Run your app:

```console
$ npm start
```
{: copy="npm start" package-manager="npm"}

Dotenvx loads and decrypts .env before NestJS initializes your modules. Use npm run start:dev to watch for code changes.

Visit [http://localhost:3000](http://localhost:3000) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:3000" text="Hello Secret" %}

[**Use ConfigService** Alternative →](/docs/nestjs/config-service/){: .side-path}

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
$ npm start
```
{: copy="npm start" package-manager="npm"}

Visit [http://localhost:3000](http://localhost:3000) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:3000" text="Hello Secret" %}

[**Share a private key** Alternative →](/docs/nestjs/share-private-key/){: .side-path}

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

Install dependencies and [build your app](https://docs.nestjs.com/deployment) in your deployment build step:

```console
$ npm install
$ npm run build
```
{: copy="npm install
npm run build" package-manager="npm"}

Deploy the compiled dist directory, package.json, runtime dependencies, and encrypted .env.production file to the selected resource. Keep .env.production at the project root and .env.keys on your local machine.

Set NODE_ENV to production in your deployment environment. From the project root, run:

```console
$ npm run start:prod
```
{: copy="npm run start:prod" package-manager="npm"}

Dotenvx loads and decrypts .env.production with your Enclaved Key ◊

Open your deployed app's URL to see Hello Production.

{% include components/design-browser.html url="https://your-app.example.com" text="Hello Production" %}

[**Deploy with a private key** Alternative →](/docs/nestjs/deploy-private-key/){: .side-path}

## Conclusion

You've encrypted your secrets, shared access with Armor, and loaded production secrets in NestJS with an Enclaved Key. Your secrets now travel with your code.
