---
layout: docs-cli
title: Set
description: Encrypt a single environment variable.
permalink: /docs/cli/set/
redirect_from:
  - /docs/ref/cli/set/
  - /docs/ref/cli/set
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
options_title: Options
options:
  - title: "set KEY value"
    href: /docs/cli/set-key-value/
  - title: "set KEY value -f"
    href: /docs/cli/set-key-value-f/
  - title: "set KEY value -fk"
    href: /docs/cli/set-key-value-fk/
  - title: "set KEY value --encrypt"
    href: /docs/cli/set-key-value-encrypt/
  - title: "set KEY value --plain"
    href: /docs/cli/set-key-value-plain/
  - title: "set KEY_PLAIN value"
    href: /docs/cli/set-key-plain-suffix/
  - title: "set KEY value --no-create"
    href: /docs/cli/set-key-value-no-create/
  - title: "set KEY value --no-armor"
    href: /docs/cli/set-key-value-no-armor/
  - title: "set KEY value --no-native"
    href: /docs/cli/set-key-value-no-native/
  - title: 'set KEY "value with spaces"'
    href: /docs/cli/set-key-value-with-spaces/
  - title: 'set KEY -- "- + * ÷"'
    href: /docs/cli/set-key-value-with-leading-dash/
---
{% capture cli_code_0 %}
$ dotenvx set HELLO World
◈ encrypted HELLO (.env)
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx set HELLO World{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
