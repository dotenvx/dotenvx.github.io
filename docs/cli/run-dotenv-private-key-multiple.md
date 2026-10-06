---
layout: docs-cli
title: "Combine Multiple"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: "Decrypt your encrypted `.env` and `.env.production` files by selecting them with `DOTENV_FILE` and supplying their private keys before dotenvx run."
permalink: /docs/cli/run-dotenv-private-key-multiple/
redirect_from:
  - /docs/advanced/run-dotenv-private-key-multiple
  - /docs/advanced/run-dotenv-private-key-multiple/
  - /docs/ref/cli/run-dotenv-private-key-multiple
  - /docs/ref/cli/run-dotenv-private-key-multiple/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---

```console
$ touch .env
touch .env.production
dotenvx set HELLO encrypted
dotenvx set HELLO "production encrypted" -f .env.production
echo "console.log('Hello ' + process.env.HELLO)" > index.js

# check .env.keys for your privateKeys
DOTENV_FILE=".env,.env.production" DOTENV_PRIVATE_KEY="<.env private key>" DOTENV_PRIVATE_KEY_2="<.env.production private key>" dotenvx run -- node index.js
⟐ injected env (3) from .env, .env.production
Hello encrypted

DOTENV_FILE=".env.production,.env" DOTENV_PRIVATE_KEY="<.env private key>" DOTENV_PRIVATE_KEY_2="<.env.production private key>" dotenvx run -- node index.js
⟐ injected env (3) from .env.production, .env
Hello production encrypted
```
{: copy="touch .env"}

List files in `DOTENV_FILE`, separated by commas. The first file takes precedence. When files use different keys, supply both keys as `DOTENV_PRIVATE_KEY` and `DOTENV_PRIVATE_KEY_2`; dotenvx matches each key to the encrypted values it unlocks.
