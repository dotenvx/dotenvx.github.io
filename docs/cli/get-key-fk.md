---
layout: docs-cli
title: "KEY -fk"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Specify a .env.keys file or a directory containing one.
permalink: /docs/cli/get-key-fk/
redirect_from:
  - /docs/ref/cli/get-key-fk/
  - /docs/ref/cli/get-key-fk
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
{% capture cli_code_0 %}
$ cd apps/web

dotenvx get HELLO -f . -fk ../..
World
{% endcapture %}
{% capture cli_code_0_copy %}cd apps/web{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Here the workspace uses its own `.env`, while `-fk ../..` loads the shared root `.env.keys`.
