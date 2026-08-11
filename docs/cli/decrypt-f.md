---
layout: docs-cli
title: "-f"
eyebrow: "dotenvx decrypt"
eyebrow_href: /docs/cli/decrypt/
description: Decrypt the contents of a specified encrypted .env file to an unencrypted .env file.
permalink: /docs/cli/decrypt-f/
redirect_from:
  - /docs/advanced/decrypt-f
  - /docs/advanced/decrypt-f/
  - /docs/ref/cli/decrypt-f
  - /docs/ref/cli/decrypt-f/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Decrypt
    href: /docs/cli/decrypt/
---
{% capture cli_code_0 %}
$ echo "HELLO=World" > .env
echo "HELLO=Production" > .env.production

dotenvx encrypt -f .env.production
◈ encrypted (.env.production)
dotenvx decrypt -f .env.production
◇ decrypted (.env.production)
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
