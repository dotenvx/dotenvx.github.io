---
layout: docs-cli
permalink: /docs/cli/init-f/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "init -f"
command: "dotenvx init -f"
eyebrow: "dotenvx init"
eyebrow_href: /docs/cli/init/
description: "Create an Envfile from one env file without copying its values."
---
Create an Envfile from one env file without copying its values.

{% capture cli_code_0 %}
$ dotenvx init -f .env.production
◈ created (Envfile)
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx init -f .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy format="cli" %}
