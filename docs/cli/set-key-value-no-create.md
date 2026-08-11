---
layout: docs-cli
title: set KEY value --no-create
description: Do not create missing .env files.
permalink: /docs/cli/set-key-value-no-create/
redirect_from:
  - /docs/ref/cli/set-key-value-no-create/
  - /docs/ref/cli/set-key-value-no-create
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Set
    href: /docs/cli/set/
---
{% capture cli_code_0 %}
$ dotenvx set HELLO World -f .env.production --no-create
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx set HELLO World -f .env.production --no-create{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
