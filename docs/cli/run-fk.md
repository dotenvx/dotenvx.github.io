---
layout: docs-cli
title: "-fk"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Specify a .env.keys file or a directory containing one. This is useful with monorepos.
permalink: /docs/cli/run-fk/
redirect_from:
  - /docs/advanced/run-fk
  - /docs/advanced/run-fk/
  - /docs/ref/cli/run-fk
  - /docs/ref/cli/run-fk/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
{% capture cli_code_0 %}
$ cd apps/web

dotenvx run -f . -fk ../.. -- node index.js
{% endcapture %}
{% capture cli_code_0_copy %}cd apps/web{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Here the workspace uses its own `.env`, while `-fk ../..` loads the shared root `.env.keys`.
