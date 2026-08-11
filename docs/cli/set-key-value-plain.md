---
layout: docs-cli
title: set KEY value --plain
description: Set a plain key/value.
permalink: /docs/cli/set-key-value-plain/
redirect_from:
  - /docs/advanced/set-key-value-plain
  - /docs/advanced/set-key-value-plain/
  - /docs/ref/cli/set-key-value-plain
  - /docs/ref/cli/set-key-value-plain/
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

dotenvx set HELLO World --plain
◇ set HELLO (.env)
{% endcapture %}
{% capture cli_code_0_copy %}touch .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
