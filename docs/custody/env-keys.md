---
layout: docs-custody
title: ".env.keys"
description: Keep your private keys in a local .env.keys file.
permalink: "/docs/custody/env-keys/"
eyebrow: Custody
eyebrow_href: "/docs/custody/"
mark: ".env.keys"
---

Keep the encrypted `.env` in your project. Keep the private key in `.env.keys`.

## Store

Encrypt your `.env`:

```console
$ dotenvx encrypt
```
{: copy="dotenvx encrypt"}

Choose **Local**, then **File .env.keys**. Dotenvx saves the private key alongside your encrypted `.env`.

Add `.env.keys` to `.gitignore`. Commit `.env`, but keep `.env.keys` private and backed up.

## Run

Dotenvx reads `.env.keys` automatically.

```console
$ dotenvx run -- node index.js
```
{: copy="dotenvx run -- node index.js"}

Replace `node index.js` with your app's command.

## Other environments

For `.env.production`, use:

```console
$ dotenvx encrypt -f .env.production
$ dotenvx run -f .env.production -- node index.js
```
{: copy="dotenvx encrypt -f .env.production
dotenvx run -f .env.production -- node index.js"}

The key is named `DOTENV_PRIVATE_KEY_PRODUCTION`. See the [file format](/docs/env-keys-file/) for more.
