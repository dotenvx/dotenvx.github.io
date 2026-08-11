---
layout: docs-cli
title: down
eyebrow: "dotenvx armor"
eyebrow_href: /docs/cli/armor/introduction/
description: Dearmor private key.
permalink: /docs/cli/armor/down/
redirect_from:
  - /docs/advanced/armor-down
  - /docs/advanced/armor-down/
  - /docs/ref/cli/armor/down
  - /docs/ref/cli/armor/down/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Armor
    href: /docs/cli/armor/introduction/
---
{% capture cli_code_0 %}
$ dotenvx armor down
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx armor down{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Use a specific env file.

{% capture cli_code_1 %}
$ dotenvx armor down -f .env.production
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx armor down -f .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

Use a token or team.

{% capture cli_code_2 %}
$ dotenvx armor down --token token --team team
{% endcapture %}
{% capture cli_code_2_copy %}dotenvx armor down --token token --team team{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}
