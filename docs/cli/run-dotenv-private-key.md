---
layout: docs-cli
title: DOTENV_PRIVATE_KEY
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: "Decrypt your encrypted `.env` by setting `DOTENV_PRIVATE_KEY` before dotenvx run."
permalink: /docs/cli/run-dotenv-private-key/
redirect_from:
  - /docs/advanced/run-dotenv-private-key
  - /docs/advanced/run-dotenv-private-key/
  - /docs/ref/cli/run-dotenv-private-key
  - /docs/ref/cli/run-dotenv-private-key/
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
dotenvx set HELLO encrypted
echo "console.log('Hello ' + process.env.HELLO)" > index.js

# check your .env.keys files for your privateKey
DOTENV_PRIVATE_KEY="122...0b8" dotenvx run -- node index.js
⟐ injected env (2) from .env
Hello encrypted
```
{: copy="touch .env"}

You can also load this value from 1Password with `op read`.

```bash
DOTENV_PRIVATE_KEY="$(op read op://Engineering/my-app/DOTENV_PRIVATE_KEY)" dotenvx run -- node index.js
```

See [Use dotenvx with 1Password](/docs/secrets-in-1password).

Or load it from Bitwarden with `bw get password`.

```bash
export BW_SESSION="$(bw unlock --raw)"
DOTENV_PRIVATE_KEY="$(bw get password DOTENV_PRIVATE_KEY)" dotenvx run -- node index.js
```
{: copy="export BW_SESSION=\"$(bw unlock --raw)\""}

See [Use dotenvx with Bitwarden](/docs/secrets-in-bitwarden).
