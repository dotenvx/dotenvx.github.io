---
layout: docs-side-path
title: Deploy with a private key
description: Keep your key in .env.keys locally and add it to Vercel yourself.
permalink: /docs/nextjs/deploy-private-key/
parent_url: /docs/nextjs/#production
parent_title: Next.js
side_path_kind: Alternative
secrets_artifact: true
---

You can keep the production private key in your local .env.keys file and paste it into Vercel instead of using Armor Enclaves.

## Encrypt for production

Create a .env.production file:

```dotenv
# .env.production
HELLO="Production"
```
{: copy="HELLO=\"Production\""}

Encrypt it. When prompted, choose **Local**, then **File .env.keys**.

```console
$ npx dotenvx encrypt -f .env.production
```
{: copy="npx dotenvx encrypt -f .env.production" package-manager="npm"}

```console
$ pnpm exec dotenvx encrypt -f .env.production
```
{: copy="pnpm exec dotenvx encrypt -f .env.production" package-manager="pnpm"}

Commit the encrypted file. Keep .env.keys out of git.

```console
$ git add -f .env.production
$ git commit -m "encrypt .env.production"
```
{: copy="git add -f .env.production
git commit -m \"encrypt .env.production\""}

## Get the private key

Use keypair to read the production private key stored in .env.keys:

```console
$ npx dotenvx keypair DOTENV_PRIVATE_KEY_PRODUCTION -f .env.production
c09d6f8918835c82f0df3b7d100c501ac199af5a76405892d641def691b5f015
```
{: copy="npx dotenvx keypair DOTENV_PRIVATE_KEY_PRODUCTION -f .env.production" package-manager="npm"}

```console
$ pnpm exec dotenvx keypair DOTENV_PRIVATE_KEY_PRODUCTION -f .env.production
c09d6f8918835c82f0df3b7d100c501ac199af5a76405892d641def691b5f015
```
{: copy="pnpm exec dotenvx keypair DOTENV_PRIVATE_KEY_PRODUCTION -f .env.production" package-manager="pnpm"}

## Add it to Vercel

Open your Vercel project's [Settings → Environment Variables](https://vercel.com/docs/environment-variables/managing-environment-variables). Add DOTENV_PRIVATE_KEY_PRODUCTION, paste the value printed by your command, and select **Production**. Save it.

{% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY_PRODUCTION" value="c09d6f8918835c82f0df3b7d100c501ac199af5a76405892d641def691b5f015" %}

Next.js also loads .env as a fallback. If that file uses a different key, add its private key to Vercel as DOTENV_PRIVATE_KEY too. Retrieve it with `dotenvx keypair DOTENV_PRIVATE_KEY -f .env`.

## Deploy

Deploy after saving the environment variable so the new deployment uses it:

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

Next.js loads .env.production and decrypts it with the private key you added to Vercel.

Visit [https://your-app.vercel.app/api/hello](https://your-app.vercel.app/api/hello) to see Hello Production.

{% include components/design-browser.html url="https://your-app.vercel.app/api/hello" text="Hello Production" %}
