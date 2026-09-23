---
layout: docs-cli
permalink: /docs/cli/define-f/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "define -f"
command: "dotenvx define -f"
description: "Create an Envfile from one env file without copying its values."
---
Create an Envfile from one env file without copying its values.

{% capture cli_code_0 %}
$ dotenvx define -f .env.production
≡ defined (Envfile)
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx define -f .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy format="cli" %}
