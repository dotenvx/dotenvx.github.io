---
layout: docs-cli
title: "set KEY -- \"- + * ÷\""
description: Set a value containing a leading dash.
permalink: /docs/cli/set-key-value-with-leading-dash/
redirect_from:
  - /docs/ref/cli/set-key-value-with-leading-dash/
  - /docs/ref/cli/set-key-value-with-leading-dash
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Set
    href: /docs/cli/set/
---
If your value starts with a dash (`-`), then place two dashes instructing the cli that there are no more flag arguments.

{% capture cli_code_0 %}
$ touch .env.ci

dotenvx set HELLO -f .env.ci -- "- + * ÷"
◈ encrypted HELLO (.env.ci)
{% endcapture %}
{% capture cli_code_0_copy %}touch .env.ci{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
