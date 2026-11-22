---
title: Trigger.dev
description: Use dotenvx with Trigger.dev.
permalink: /docs/background-jobs/triggerdotdev/
mark: "trigger"
---

Find [code examples for this guide](https://github.com/dotenvx/examples/tree/main/background-jobs/triggerdotdev) on GitHub.

## Initial setup

First, complete the [Trigger.dev quickstart steps](https://trigger.dev/docs/quick-start) so you end up with a `trigger/example.ts` file like this.

```typescript
import { logger, task, wait } from "@trigger.dev/sdk/v3";

export const helloWorldTask = task({
  id: "hello-world",
  maxDuration: 300,
  run: async (payload: any, { ctx }) => {
    logger.log("Hello, world!", { payload, ctx });

    await wait.for({ seconds: 5 });

    return {
      message: "Hello, world!",
    }
  },
});
```
{: copy="false"}

## Install dotenvx

Install [dotenvx](https://github.com/dotenvx/dotenvx).

```console
$ npm install @dotenvx/dotenvx --save
```
{: copy="npm install @dotenvx/dotenvx --save"}

And configure dotenvx in `trigger/example.ts`.

```typescript
import { logger, task, wait } from "@trigger.dev/sdk/v3";
import dotenv from "@dotenvx/dotenvx";

dotenv.config({ path: ".env.production", strict: true });

export const helloWorldTask = task({
  id: "hello-world",
  maxDuration: 300,
  run: async (payload: any, { ctx }) => {
    logger.log(`Hello, ${process.env.HELLO}!`, { payload, ctx });

    await wait.for({ seconds: 5 });

    return {
      message: `Hello, ${process.env.HELLO}!`,
    }
  },
});
```
{: copy="false"}

## Add production environment

Create `.env.production` in the root of your project.

```dotenv
# .env.production
HELLO="production"
```
{: copy="false"}

## Encrypt production

```console
$ npx dotenvx encrypt -f .env.production
```
{: copy="npx dotenvx encrypt -f .env.production"}

Choose **Classic (.env.keys)** when prompted. Your `.env.production` file is now encrypted, and you have a `.env.keys` file.

```dotenv
#/-------------------[DOTENV_PUBLIC_KEY]--------------------/
#/            public-key encryption for .env files          /
#/       [how it works](https://dotenvx.com/encryption)     /
#/----------------------------------------------------------/
DOTENV_PUBLIC_KEY_PRODUCTION="DOTENV-PUBLIC-KEY-3-SECP256K1-0274b2a9b2ddb1ca80e4a707b0e887ea6e1115c6d6779a86d9c7b8170a137e75e7"

# .env.production
HELLO="DOTENV-CIPHERTEXT-3-SECP256K1-AES256GCM-0274b2a9b2-BO9/5MY6YDePKGDGgMiXiYBCQPc2hNKmlepubjau7yamsaZsd6MO12NJcXh0aS7AZoui5QjE8PLZ4plRmGrbUqorh7ud70T9keMgKP0bOzhDHK7eE3sq7GidqhSIBg1bO7559H0urPjpg2A="
```
{: copy="false"}

```dotenv
#/------------------!DOTENV_PRIVATE_KEYS!-------------------/
#/ private decryption keys. DO NOT commit to source control /
#/     [how it works](https://dotenvx.com/encryption)       /
#/----------------------------------------------------------/

# .env.production
DOTENV_PRIVATE_KEY_PRODUCTION="DOTENV-PRIVATE-KEY-3-SECP256K1-c09d6f8918835c82f0df3b7d100c501ac199af5a76405892d641def691b5f015"
```
{: copy="false"}

You SHOULD commit `.env.production` to code. It is now encrypted, safe, and recommended to do so. But DO NOT commit `.env.keys` to code. Keep them somewhere safe like 1Password or [Armor](/armor).

## Run your task

Include encrypted .env.production in the deployed task and keep the platform-specific native dependencies of @dotenvx/dotenvx installed. Set DOTENV_PRIVATE_KEY_PRODUCTION to the production private key in your Trigger.dev environment settings. Keep .env.keys on your local machine.

Run your task in Trigger's UI. Your env is successfully injected using the encrypted contents of `.env.production`.

Visit the dashboard and it says `Hello production`.
