---
layout: docs-cli
title: keypair --format colon
description: Print a colon formatted response of public/private keys.
permalink: /docs/cli/keypair-colon/
redirect_from:
  - /docs/ref/cli/keypair-colon/
  - /docs/ref/cli/keypair-colon
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Keypair
    href: /docs/cli/keypair/
---
{% capture cli_code_0 %}
$ echo "HELLO=World" > .env
dotenx encrypt

dotenvx keypair --format colon
DOTENV_PUBLIC_KEY:<publicKey> DOTENV_PRIVATE_KEY:<privateKey>
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
