---
layout: docs-cli
permalink: /docs/cli/check-fk/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "check -fk"
command: "dotenvx check -fk"
description: "Use a specific private-key file for validation."
redirect_from:
  - /docs/cli/validate-fk/
  - /docs/cli/validate-fk
---
Use a specific private-key file for validation.

{% capture cli_code_0 %}
$ dotenvx check -fk .env.keys.production
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx check -fk .env.keys.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy format="cli" %}
