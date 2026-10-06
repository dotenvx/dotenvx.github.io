---
layout: docs-cli
title: "DOTENV_FILE=.env.ci"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: "Decrypt your encrypted `.env.ci` by setting `DOTENV_PRIVATE_KEY` and `DOTENV_FILE=.env.ci` before dotenvx run."
permalink: /docs/cli/run-dotenv-private-key-ci/
redirect_from:
  - /docs/advanced/run-dotenv-private-key-ci
  - /docs/advanced/run-dotenv-private-key-ci/
  - /docs/ref/cli/run-dotenv-private-key-ci
  - /docs/ref/cli/run-dotenv-private-key-ci/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---

```console
$ touch .env.ci
dotenvx set HELLO "ci encrypted" -f .env.production
echo "console.log('Hello ' + process.env.HELLO)" > index.js

# check .env.keys for your privateKey
DOTENV_FILE=.env.ci DOTENV_PRIVATE_KEY="122...0b8" dotenvx run -- node index.js
⟐ injected env (2) from .env.ci
Hello ci encrypted
```
{: copy="touch .env.ci"}

Alternatively, this can be already set on your server or ci runner.

`DOTENV_FILE=.env.ci` selects the file. `DOTENV_PRIVATE_KEY` supplies its matching decryption key.
