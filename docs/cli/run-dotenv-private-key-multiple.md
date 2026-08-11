---
layout: docs-cli
title: DOTENV_PRIVATE_KEY=key DOTENV_PRIVATE_KEY_PRODUCTION=key dotenvx run
description: "Decrypt your encrypted `.env` and `.env.production` files by setting `DOTENV_PRIVATE_KEY` and `DOTENV_PRIVATE_KEY_PRODUCTION` before dotenvx run."
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
{% capture cli_code_0 %}
$ touch .env
touch .env.production
dotenvx set HELLO encrypted
dotenvx set HELLO "production encrypted" -f .env.production
echo "console.log('Hello ' + process.env.HELLO)" > index.js

# check .env.keys for your privateKeys
DOTENV_PRIVATE_KEY="122...0b8" DOTENV_PRIVATE_KEY_PRODUCTION="122...0b8" dotenvx run -- node index.js
⟐ injected env (3) from .env, .env.production
Hello encrypted

DOTENV_PRIVATE_KEY_PRODUCTION="122...0b8" DOTENV_PRIVATE_KEY="122...0b8" dotenvx run -- node index.js
⟐ injected env (3) from .env.production, .env
Hello production encrypted
{% endcapture %}
{% capture cli_code_0_copy %}touch .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Compose any encrypted files you want this way. As long as a `DOTENV_PRIVATE_KEY_${environment}` is set, the values from `.env.${environment}` will be decrypted at runtime.
