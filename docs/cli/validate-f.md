---
layout: docs-cli
permalink: /docs/cli/validate-f/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "validate -f"
command: "dotenvx validate -f"
description: "Validate a specific env file against your Envfile."
---
Validate a specific env file against your Envfile.

{% capture cli_code_0 %}
$ dotenvx validate -f .env.production
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx validate -f .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy format="cli" %}
