---
layout: docs-cli
title: "KEY_PLAIN value"
eyebrow: "dotenvx set"
eyebrow_href: /docs/cli/set/
description: Set a plaintext key/value by ending the key with _PLAIN.
permalink: /docs/cli/set-key-plain-suffix/
redirect_from:
  - /docs/ref/cli/set-key-plain-suffix/
  - /docs/ref/cli/set-key-plain-suffix
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Set
    href: /docs/cli/set/
---
{% capture cli_code_0 %}
$ touch .env

dotenvx set HELLO_PLAIN World
◇ set HELLO_PLAIN (.env)
{% endcapture %}
{% capture cli_code_0_copy %}touch .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Keys ending in `_PLAIN` are not encrypted by `dotenvx set` or `dotenvx encrypt`.
