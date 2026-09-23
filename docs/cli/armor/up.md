---
layout: docs-cli
title: "armor up"
eyebrow: "dotenvx armor"
eyebrow_href: /docs/cli/armor/introduction/
description: "Move a private key from .env.keys into Dotenvx Armor."
permalink: /docs/cli/armor/up/
redirect_from:
  - /docs/advanced/armor-up
  - /docs/advanced/armor-up/
  - /docs/ref/cli/armor/up
  - /docs/ref/cli/armor/up/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Armor
    href: /docs/cli/armor/introduction/
video: cli-armor-up
command: "dotenvx armor up"
options_title: Options
options:
  - title: "armor up -f"
    href: /docs/cli/armor/up-f/
  - title: "armor up --team"
    href: /docs/cli/armor/up-team/
  - title: "armor up --token"
    href: /docs/cli/armor/up-token/
---
Move a private key from `.env.keys` into Dotenvx Armor.

{% capture cli_code_0 %}
$ dotenvx armor up
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx armor up{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy format="cli" %}
