---
layout: docs-cli
title: "KEY value --no-armor"
eyebrow: "dotenvx set"
eyebrow_href: /docs/cli/set/
description: Disable Dotenvx Armor features.
permalink: /docs/cli/set-key-value-no-armor/
redirect_from:
  - /docs/ref/cli/set-key-value-no-armor/
  - /docs/ref/cli/set-key-value-no-armor
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Set
    href: /docs/cli/set/
---
{% capture cli_code_0 %}
$ dotenvx set HELLO World --no-armor
◈ encrypted HELLO (.env)
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx set HELLO World --no-armor{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
