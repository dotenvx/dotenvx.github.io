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
{% capture cli_code_0 %}
$ touch .env
dotenvx set HELLO encrypted
echo "console.log('Hello ' + process.env.HELLO)" > index.js

# check your .env.keys files for your privateKey
DOTENV_PRIVATE_KEY="122...0b8" dotenvx run -- node index.js
⟐ injected env (2) from .env
Hello encrypted
{% endcapture %}
{% capture cli_code_0_copy %}touch .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

You can also load this value from 1Password with `op read`.

{% capture cli_code_1 %}
DOTENV_PRIVATE_KEY="$(op read op://Engineering/my-app/DOTENV_PRIVATE_KEY)" dotenvx run -- node index.js
{% endcapture %}
{% capture cli_code_1_copy %}DOTENV_PRIVATE_KEY="$(op read op://Engineering/my-app/DOTENV_PRIVATE_KEY)" dotenvx run -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

See [Use dotenvx with 1Password](/docs/secrets-in-1password).

Or load it from Bitwarden with `bw get password`.

{% capture cli_code_2 %}
export BW_SESSION="$(bw unlock --raw)"
DOTENV_PRIVATE_KEY="$(bw get password DOTENV_PRIVATE_KEY)" dotenvx run -- node index.js
{% endcapture %}
{% capture cli_code_2_copy %}export BW_SESSION="$(bw unlock --raw)"{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}

See [Use dotenvx with Bitwarden](/docs/secrets-in-bitwarden).
