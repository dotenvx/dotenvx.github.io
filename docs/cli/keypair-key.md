---
layout: docs-cli
title: keypair KEY
description: Print specific keypair for .env file.
permalink: /docs/cli/keypair-key/
redirect_from:
  - /docs/ref/cli/keypair-key/
  - /docs/ref/cli/keypair-key
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
dotenvx encrypt

dotenvx keypair DOTENV_PRIVATE_KEY
<privateKey>
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
