---
layout: docs-cli
title: move
eyebrow: "dotenvx armor"
eyebrow_href: /docs/cli/armor/introduction/
description: Move armored key to another team.
permalink: /docs/cli/armor/move/
redirect_from:
  - /docs/advanced/armor-move
  - /docs/advanced/armor-move/
  - /docs/ref/cli/armor/move
  - /docs/ref/cli/armor/move/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Armor
    href: /docs/cli/armor/introduction/
---
{% capture cli_code_0 %}
$ dotenvx armor move
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx armor move{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Use a specific env file.

{% capture cli_code_1 %}
$ dotenvx armor move -f .env.production
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx armor move -f .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

Use a token.

{% capture cli_code_2 %}
$ dotenvx armor move --token token
{% endcapture %}
{% capture cli_code_2_copy %}dotenvx armor move --token token{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}
