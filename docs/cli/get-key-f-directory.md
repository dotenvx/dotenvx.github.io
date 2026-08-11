---
layout: docs-cli
title: get KEY -f directory
description: Return an environment variable from the .env file in a directory. This is useful with monorepos.
permalink: /docs/cli/get-key-f-directory/
redirect_from:
  - /docs/ref/cli/get-key-f-directory/
  - /docs/ref/cli/get-key-f-directory
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
From a workspace, point `-f` at the monorepo root to read its `.env`:

{% capture cli_code_0 %}
$ cd apps/web

dotenvx get HELLO -f ../..
World
{% endcapture %}
{% capture cli_code_0_copy %}cd apps/web{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

When `.env.keys` sits beside the resolved `.env`, encrypted values are decrypted automatically.
