---
layout: docs-cli
title: status
eyebrow: "dotenvx armor"
eyebrow_href: /docs/cli/armor/introduction/
description: Print the current Dotenvx Armor status.
permalink: /docs/cli/armor/status/
redirect_from:
  - /docs/ref/cli/armor/status/
  - /docs/ref/cli/armor/status
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Armor
    href: /docs/cli/armor/introduction/
---
{% capture cli_code_0 %}
$ dotenvx armor status
on
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx armor status{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

The command prints `on` when you are logged in and Armor is enabled. Otherwise, it prints `off`.
