---
layout: docs-cli
title: decrypt -k
description: Decrypt the contents of a specified key inside an encrypted .env file.
permalink: /docs/cli/decrypt-k/
redirect_from:
  - /docs/advanced/decrypt-k
  - /docs/advanced/decrypt-k/
  - /docs/ref/cli/decrypt-k
  - /docs/ref/cli/decrypt-k/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Decrypt
    href: /docs/cli/decrypt/
---
{% capture cli_code_0 %}
$ echo "HELLO=World\nHOLA=Mundo" > .env
dotenvx encrypt
◈ encrypted (.env)
dotenvx decrypt -k HELLO
◇ decrypted (.env)
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World\nHOLA=Mundo" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Even specify a glob pattern.

{% capture cli_code_1 %}
$ echo "HELLO=World\nHOLA=Mundo" > .env
dotenvx encrypt
◈ encrypted (.env)
dotenvx decrypt -k "HE*"
◇ decrypted (.env)
{% endcapture %}
{% capture cli_code_1_copy %}echo "HELLO=World\nHOLA=Mundo" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}
