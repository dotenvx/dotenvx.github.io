---
layout: docs-cli
title: run -f directory
description: Run a command using the .env file in a directory. This is useful with monorepos.
permalink: /docs/cli/run-f-directory/
redirect_from:
  - /docs/ref/cli/run-f-directory/
  - /docs/ref/cli/run-f-directory
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
From a workspace, point `-f` at the monorepo root to load its `.env`:

{% capture cli_code_0 %}
$ cd apps/web

dotenvx run -f ../.. -- node index.js
⟐ injected env (1) from ../../.env
Hello World
{% endcapture %}
{% capture cli_code_0_copy %}cd apps/web{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

When `.env.keys` sits beside the resolved `.env`, encrypted values are decrypted automatically.
