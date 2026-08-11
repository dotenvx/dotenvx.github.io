---
layout: docs-cli
title: decrypt -ek
description: Decrypt the contents inside an encrypted .env file except for an excluded key.
permalink: /docs/cli/decrypt-ek/
redirect_from:
  - /docs/advanced/decrypt-ek
  - /docs/advanced/decrypt-ek/
  - /docs/ref/cli/decrypt-ek
  - /docs/ref/cli/decrypt-ek/
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
dotenvx decrypt -ek HOLA
◇ decrypted (.env)
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World\nHOLA=Mundo" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Even specify a glob pattern.

{% capture cli_code_1 %}
$ echo "HELLO=World\nHOLA=Mundo" > .env
dotenvx encrypt
◈ encrypted (.env)
dotenvx decrypt -ek "HO*"
◇ decrypted (.env)
{% endcapture %}
{% capture cli_code_1_copy %}echo "HELLO=World\nHOLA=Mundo" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}
