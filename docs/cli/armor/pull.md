---
layout: docs-cli
title: pull
description: Pull armored key into .env.keys.
permalink: /docs/cli/armor/pull/
redirect_from:
  - /docs/ref/cli/armor/pull/
  - /docs/ref/cli/armor/pull
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Armor
    href: /docs/cli/armor/introduction/
---
{% capture cli_code_0 %}
$ dotenvx armor pull
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx armor pull{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Use a specific env file.

{% capture cli_code_1 %}
$ dotenvx armor pull -f .env.production
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx armor pull -f .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

Use a token or team.

{% capture cli_code_2 %}
$ dotenvx armor pull --token token --team team
{% endcapture %}
{% capture cli_code_2_copy %}dotenvx armor pull --token token --team team{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}
