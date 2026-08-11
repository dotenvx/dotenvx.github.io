---
layout: docs-cli
title: up
description: Move a private key from .env.keys into your OS secret store.
permalink: /docs/cli/native/up/
redirect_from:
  - /docs/ref/cli/native/up/
  - /docs/ref/cli/native/up
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Native
    href: /docs/cli/native/
video: https://github.com/user-attachments/assets/57cc4f94-8513-4b61-9a25-250d3da528b5f
---
{% capture cli_code_0 %}
$ dotenvx native up
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx native up{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Specify files with -f and -fk.

{% capture cli_code_1 %}
$ dotenvx native up -f .env.production -fk .env.keys
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx native up -f .env.production -fk .env.keys{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}
