---
layout: docs-cli
title: "KEY value --encrypt"
eyebrow: "dotenvx set"
eyebrow_href: /docs/cli/set/
description: Set an encrypted key/value.
permalink: /docs/cli/set-key-value-encrypt/
redirect_from:
  - /docs/advanced/set-key-value-encrypt
  - /docs/advanced/set-key-value-encrypt/
  - /docs/ref/cli/set-key-value-encrypt
  - /docs/ref/cli/set-key-value-encrypt/
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

dotenvx set HELLO World --encrypt
◈ encrypted HELLO (.env)
{% endcapture %}
{% capture cli_code_0_copy %}touch .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
