---
layout: docs-cli
title: encrypt -f
description: Encrypt the contents of a specified .env file to an encrypted .env file.
permalink: /docs/cli/encrypt-f/
redirect_from:
  - /docs/advanced/encrypt-f
  - /docs/advanced/encrypt-f/
  - /docs/ref/cli/encrypt-f
  - /docs/ref/cli/encrypt-f/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Encrypt
    href: /docs/cli/encrypt/
---
{% capture cli_code_0 %}
$ echo "HELLO=World" > .env
echo "HELLO=Production" > .env.production

dotenvx encrypt -f .env.production
◈ encrypted (.env.production)
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
