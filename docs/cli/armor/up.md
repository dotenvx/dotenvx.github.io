---
layout: docs-cli
title: up
description: Armor private key.
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
video: https://github.com/user-attachments/assets/ecc906ef-ecd2-47ec-87dc-4c6ffad173d4
---
{% capture cli_code_0 %}
$ dotenvx armor up
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx armor up{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Use a specific env file.

{% capture cli_code_1 %}
$ dotenvx armor up -f .env.production
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx armor up -f .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

Use a token or team.

{% capture cli_code_2 %}
$ dotenvx armor up --token token --team team
{% endcapture %}
{% capture cli_code_2_copy %}dotenvx armor up --token token --team team{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}
