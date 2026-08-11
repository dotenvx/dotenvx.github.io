---
layout: docs-cli
title: decrypt --stdout --mask
description: Decrypt an encrypted .env file to stdout with its values masked.
permalink: /docs/cli/decrypt-stdout-mask/
redirect_from:
  - /docs/ref/cli/decrypt-stdout-mask/
  - /docs/ref/cli/decrypt-stdout-mask
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Decrypt
    href: /docs/cli/decrypt/
---
The encrypted `.env` file remains unchanged. By default, up to the first six characters are visible.

{% capture cli_code_0 %}
$ echo "SECRET=abcdefghijkl" > .env
$ dotenvx encrypt
◈ encrypted (.env)

$ dotenvx decrypt --stdout --mask
...
SECRET="abcdef******"
{% endcapture %}
{% capture cli_code_0_copy %}echo "SECRET=abcdefghijkl" > .env
dotenvx encrypt
dotenvx decrypt --stdout --mask{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Pass a number to control how many characters are visible, such as `--mask 0` to fully mask values.
