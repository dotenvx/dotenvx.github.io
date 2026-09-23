---
layout: docs-cli
title: "armor pull"
eyebrow: "dotenvx armor"
eyebrow_href: /docs/cli/armor/introduction/
description: "Copy a private key from Dotenvx Armor into .env.keys."
permalink: /docs/cli/armor/pull/
redirect_from:
  - /docs/advanced/armor-pull
  - /docs/advanced/armor-pull/
  - /docs/ref/cli/armor/pull
  - /docs/ref/cli/armor/pull/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Armor
    href: /docs/cli/armor/introduction/
command: "dotenvx armor pull"
options_title: Options
options:
  - title: "armor pull -f"
    href: /docs/cli/armor/pull-f/
  - title: "armor pull --team"
    href: /docs/cli/armor/pull-team/
  - title: "armor pull --token"
    href: /docs/cli/armor/pull-token/
---
Copy a private key from Dotenvx Armor into `.env.keys`.

{% capture cli_code_0 %}
$ dotenvx armor pull
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx armor pull{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy format="cli" %}
