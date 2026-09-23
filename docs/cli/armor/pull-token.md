---
layout: docs-cli
permalink: /docs/cli/armor/pull-token/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "armor pull --token"
command: "dotenvx armor pull --token"
description: "Use an Armor token when running non-interactively."
---
Use an Armor token when running non-interactively.

{% capture cli_code_0 %}
$ dotenvx armor pull --token "$DOTENVX_ARMOR_TOKEN"
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx armor pull --token "$DOTENVX_ARMOR_TOKEN"{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy format="cli" %}
