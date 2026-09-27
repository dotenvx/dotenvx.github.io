---
layout: docs-cli
permalink: /docs/cli/check-f/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "check -f"
command: "dotenvx check -f"
description: "Validate a specific env file against your Envfile."
redirect_from:
  - /docs/cli/validate-f/
  - /docs/cli/validate-f
---
Validate a specific env file against your Envfile.

{% capture cli_code_0 %}
$ dotenvx check -f .env.production
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx check -f .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy format="cli" %}
