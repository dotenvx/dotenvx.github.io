---
layout: docs-cli
title: encrypt -k
description: Specify the key(s) to encrypt by passing --key.
permalink: /docs/cli/encrypt-k/
redirect_from:
  - /docs/advanced/encrypt-k
  - /docs/advanced/encrypt-k/
  - /docs/ref/cli/encrypt-k
  - /docs/ref/cli/encrypt-k/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Encrypt
    href: /docs/cli/encrypt/
---
{% capture cli_code_0 %}
$ echo "HELLO=World\nHELLO2=Universe" > .env

dotenvx encrypt -k HELLO2
◈ encrypted (.env)
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World\nHELLO2=Universe" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Even specify a glob pattern.

{% capture cli_code_1 %}
$ echo "HELLO=World\nHOLA=Mundo" > .env

dotenvx encrypt -k "HE*"
◈ encrypted (.env)
{% endcapture %}
{% capture cli_code_1_copy %}echo "HELLO=World\nHOLA=Mundo" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}
