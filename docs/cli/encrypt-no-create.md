---
layout: docs-cli
title: "--no-create"
eyebrow: "dotenvx encrypt"
eyebrow_href: /docs/cli/encrypt/
description: Do not create missing .env files.
permalink: /docs/cli/encrypt-no-create/
redirect_from:
  - /docs/ref/cli/encrypt-no-create/
  - /docs/ref/cli/encrypt-no-create
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Encrypt
    href: /docs/cli/encrypt/
---
{% capture cli_code_0 %}
$ dotenvx encrypt -f .env.production --no-create
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx encrypt -f .env.production --no-create{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
