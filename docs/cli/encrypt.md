---
layout: docs-cli
title: Encrypt
description: Convert any .env file to an encrypted .env file.
permalink: /docs/cli/encrypt/
redirect_from:
  - /docs/ref/cli/encrypt/
  - /docs/ref/cli/encrypt
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
options_title: Options
options:
  - title: encrypt -f
    href: /docs/cli/encrypt-f/
  - title: encrypt -fk
    href: /docs/cli/encrypt-fk/
  - title: encrypt -k
    href: /docs/cli/encrypt-k/
  - title: encrypt -ek
    href: /docs/cli/encrypt-ek/
  - title: encrypt KEY_PLAIN
    href: /docs/cli/encrypt-plain-suffix/
  - title: encrypt --stdout
    href: /docs/cli/encrypt-stdout/
  - title: encrypt --token
    href: /docs/cli/encrypt-token/
  - title: encrypt --no-create
    href: /docs/cli/encrypt-no-create/
  - title: encrypt --no-armor
    href: /docs/cli/encrypt-no-armor/
---
{% capture cli_code_0 %}
$ dotenvx encrypt
◈ encrypted (.env)
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx encrypt{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
