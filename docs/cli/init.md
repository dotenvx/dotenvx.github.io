---
layout: docs-cli
permalink: /docs/cli/init/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "init"
command: "dotenvx init"
description: "Create an Envfile from .env files and source code."
options_title: Options
options:
  - title: "init -f"
    href: /docs/cli/init-f/
---
Create an `Envfile` from your `.env` files and source code. In an interactive terminal, select the files to include and whether to scan code for environment variable references.

{% capture cli_code_0 %}
$ dotenvx init
◈ created (Envfile)
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx init{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy format="cli" %}

Outside an interactive terminal, the command reads `.env.example` and `.env` when present. Use `-f` to select a single file. It records variable declarations without copying secret values and leaves an existing `Envfile` unchanged.

Review the generated declarations, then run [`dotenvx check`](/docs/cli/check/) to check your configuration against the `Envfile`. Validation requires an `Envfile`; `.env.example` alone is not used for validation.
