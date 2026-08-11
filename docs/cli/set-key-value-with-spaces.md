---
layout: docs-cli
title: "set KEY \"value with spaces\""
description: Set a value containing spaces.
permalink: /docs/cli/set-key-value-with-spaces/
redirect_from:
  - /docs/ref/cli/set-key-value-with-spaces/
  - /docs/ref/cli/set-key-value-with-spaces
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Set
    href: /docs/cli/set/
---
{% capture cli_code_0 %}
$ touch .env.ci

dotenvx set HELLO "my ci" -f .env.ci
◈ encrypted HELLO (.env.ci)
{% endcapture %}
{% capture cli_code_0_copy %}touch .env.ci{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
