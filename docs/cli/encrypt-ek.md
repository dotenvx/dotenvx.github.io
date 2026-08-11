---
layout: docs-cli
title: "-ek"
eyebrow: "dotenvx encrypt"
eyebrow_href: /docs/cli/encrypt/
description: Specify the key(s) to NOT encrypt by passing --exclude-key.
permalink: /docs/cli/encrypt-ek/
redirect_from:
  - /docs/advanced/encrypt-ek
  - /docs/advanced/encrypt-ek/
  - /docs/ref/cli/encrypt-ek
  - /docs/ref/cli/encrypt-ek/
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

dotenvx encrypt -ek HELLO
◈ encrypted (.env)
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World\nHELLO2=Universe" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Even specify a glob pattern.

{% capture cli_code_1 %}
$ echo "HELLO=World\nHOLA=Mundo" > .env

dotenvx encrypt -ek "HO*"
◈ encrypted (.env)
{% endcapture %}
{% capture cli_code_1_copy %}echo "HELLO=World\nHOLA=Mundo" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}
