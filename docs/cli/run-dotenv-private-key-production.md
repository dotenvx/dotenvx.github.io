---
layout: docs-cli
title: DOTENV_PRIVATE_KEY_PRODUCTION=key dotenvx run
description: "Decrypt your encrypted `.env.production` by setting `DOTENV_PRIVATE_KEY_PRODUCTION` before dotenvx run."
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
{% capture cli_code_0 %}
$ touch .env.production
dotenvx set HELLO "production encrypted" -f .env.production
echo "console.log('Hello ' + process.env.HELLO)" > index.js

# check .env.keys for your privateKey
DOTENV_PRIVATE_KEY_PRODUCTION="122...0b8" dotenvx run -- node index.js
⟐ injected env (2) from .env.production
Hello production encrypted
{% endcapture %}
{% capture cli_code_0_copy %}touch .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Alternatively, this can be already set on your server or cloud provider.

You can also load this value from 1Password with `op read`.

{% capture cli_code_1 %}
DOTENV_PRIVATE_KEY_PRODUCTION="$(op read op://Engineering/my-app/DOTENV_PRIVATE_KEY_PRODUCTION)" dotenvx run -- node index.js
{% endcapture %}
{% capture cli_code_1_copy %}DOTENV_PRIVATE_KEY_PRODUCTION="$(op read op://Engineering/my-app/DOTENV_PRIVATE_KEY_PRODUCTION)" dotenvx run -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

See [Use dotenvx with 1Password](/docs/secrets-in-1password).

Or load it from Bitwarden with `bw get password`.

{% capture cli_code_2 %}
export BW_SESSION="$(bw unlock --raw)"
DOTENV_PRIVATE_KEY_PRODUCTION="$(bw get password DOTENV_PRIVATE_KEY_PRODUCTION)" dotenvx run -- node index.js
{% endcapture %}
{% capture cli_code_2_copy %}export BW_SESSION="$(bw unlock --raw)"{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}

See [Use dotenvx with Bitwarden](/docs/secrets-in-bitwarden).

Note the `DOTENV_PRIVATE_KEY_PRODUCTION` ends with `_PRODUCTION`. This instructs dotenvx run to load the `.env.production` file.
