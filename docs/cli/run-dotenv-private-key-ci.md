---
layout: docs-cli
title: DOTENV_PRIVATE_KEY_CI=key dotenvx run
description: "Decrypt your encrypted `.env.ci` by setting `DOTENV_PRIVATE_KEY_CI` before dotenvx run."
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
{% capture cli_code_0 %}
$ touch .env.ci
dotenvx set HELLO "ci encrypted" -f .env.production
echo "console.log('Hello ' + process.env.HELLO)" > index.js

# check .env.keys for your privateKey
DOTENV_PRIVATE_KEY_CI="122...0b8" dotenvx run -- node index.js
⟐ injected env (2) from .env.ci
Hello ci encrypted
{% endcapture %}
{% capture cli_code_0_copy %}touch .env.ci{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Alternatively, this can be already set on your server or ci runner.

Note the `DOTENV_PRIVATE_KEY_CI` ends with `_CI`. This instructs dotenvx run to load the `.env.ci` file. See the pattern?
