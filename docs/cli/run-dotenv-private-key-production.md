---
layout: docs-cli
title: "DOTENV_FILE=.env.production"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: "Decrypt your encrypted `.env.production` by setting `DOTENV_PRIVATE_KEY` and `DOTENV_FILE=.env.production` before dotenvx run."
permalink: /docs/cli/run-dotenv-private-key-production/
redirect_from:
  - /docs/advanced/run-dotenv-private-key-production
  - /docs/advanced/run-dotenv-private-key-production/
  - /docs/ref/cli/run-dotenv-private-key-production
  - /docs/ref/cli/run-dotenv-private-key-production/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---

```console
$ touch .env.production
dotenvx set HELLO "production encrypted" -f .env.production
echo "console.log('Hello ' + process.env.HELLO)" > index.js

# check .env.keys for your privateKey
DOTENV_FILE=.env.production DOTENV_PRIVATE_KEY="122...0b8" dotenvx run -- node index.js
⟐ injected env (2) from .env.production
Hello production encrypted
```
{: copy="touch .env.production"}

Alternatively, this can be already set on your server or cloud provider.

You can also load this value from 1Password with `op read`.

```bash
DOTENV_FILE=.env.production DOTENV_PRIVATE_KEY="$(op read op://Engineering/my-app/DOTENV_PRIVATE_KEY)" dotenvx run -- node index.js
```

See [Use dotenvx with 1Password](/docs/secrets-in-1password).

Or load it from Bitwarden with `bw get password`.

```bash
export BW_SESSION="$(bw unlock --raw)"
DOTENV_FILE=.env.production DOTENV_PRIVATE_KEY="$(bw get password DOTENV_PRIVATE_KEY)" dotenvx run -- node index.js
```
{: copy="export BW_SESSION=\"$(bw unlock --raw)\""}

See [Use dotenvx with Bitwarden](/docs/secrets-in-bitwarden).

`DOTENV_FILE=.env.production` selects the file. `DOTENV_PRIVATE_KEY` supplies its matching decryption key.
