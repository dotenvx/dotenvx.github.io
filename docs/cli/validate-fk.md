---
layout: docs-cli
permalink: /docs/cli/validate-fk/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "validate -fk"
command: "dotenvx validate -fk"
description: "Use a specific private-key file for validation."
---
Use a specific private-key file for validation.

{% capture cli_code_0 %}
$ dotenvx validate -fk .env.keys.production
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx validate -fk .env.keys.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy format="cli" %}
