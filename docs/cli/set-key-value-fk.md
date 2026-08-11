---
layout: docs-cli
title: "KEY value -fk"
eyebrow: "dotenvx set"
eyebrow_href: /docs/cli/set/
description: Specify path to .env.keys.
permalink: /docs/cli/set-key-value-fk/
redirect_from:
  - /docs/ref/cli/set-key-value-fk/
  - /docs/ref/cli/set-key-value-fk
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Set
    href: /docs/cli/set/
---
{% capture cli_code_0 %}
$ dotenvx set HELLO World -f apps/app1/.env -fk .env.keys
◈ encrypted HELLO (apps/app1/.env)
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx set HELLO World -f apps/app1/.env -fk .env.keys{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
