---
layout: docs-cli
title: run --token
description: Set the Armor token for retrieving armored private keys.
permalink: /docs/cli/run-token/
redirect_from:
  - /docs/ref/cli/run-token/
  - /docs/ref/cli/run-token
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
{% capture cli_code_0 %}
$ dotenvx run --token "$DOTENVX_ARMOR_TOKEN" -- yourcommand
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx run --token "$DOTENVX_ARMOR_TOKEN" -- yourcommand{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
