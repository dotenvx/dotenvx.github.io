---
layout: docs-side-path
title: Deploy with a private key
description: Keep your production key locally and add it to your server yourself.
permalink: /docs/nuxt/deploy-private-key/
markdown_url: /docs/nuxt/deploy-private-key.md
parent_url: /docs/nuxt/#production
parent_title: Nuxt
side_path_kind: Alternative
secrets_artifact: true
---

You can manage the production private key yourself if your team's security model allows permanent copies on developer machines outside your deployment platform. Anyone who obtains a copy can decrypt your production secrets.

Store the key locally and add it to your deployment environment instead of using Armor Enclaves.

## Encrypt for production

Encrypt it. When prompted, choose **Local**, then your preferred storage option.

```console
$ npx dotenvx encrypt -f .env.production
```
{: copy="npx dotenvx encrypt -f .env.production" package-manager="npm"}

```console
$ pnpm exec dotenvx encrypt -f .env.production
```
{: copy="pnpm exec dotenvx encrypt -f .env.production" package-manager="pnpm"}

## Get the private key

Use keypair to retrieve your production private key:

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

## Configure your deployment

In your deployment environment, set DOTENV_PRIVATE_KEY_PRODUCTION to the value printed by your command. The start script selects .env.production.

{% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY_PRODUCTION" value="c09d6f8918835c82f0df3b7d100c501ac199af5a76405892d641def691b5f015" %}

Keep .env.keys out of git and off your server. Return to [Production](/docs/nuxt/#production) to commit the encrypted file, build and deploy your code, and start your app with npm start or pnpm start.
