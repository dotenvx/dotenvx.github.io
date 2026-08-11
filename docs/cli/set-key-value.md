---
layout: docs-cli
title: "KEY value"
eyebrow: "dotenvx set"
eyebrow_href: /docs/cli/set/
description: Set a single key/value.
permalink: /docs/cli/set-key-value/
redirect_from:
  - /docs/advanced/set-key-value
  - /docs/advanced/set-key-value/
  - /docs/ref/cli/set-key-value
  - /docs/ref/cli/set-key-value/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Set
    href: /docs/cli/set/
video: https://github.com/user-attachments/assets/b4aef2f4-5e8d-469b-a3e3-24e43534a07f
---
{% capture cli_code_0 %}
$ touch .env

dotenvx set HELLO World
◈ encrypted HELLO (.env)
{% endcapture %}
{% capture cli_code_0_copy %}touch .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

* encryption defaults to on
