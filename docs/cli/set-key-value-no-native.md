---
layout: docs-cli
title: set KEY value --no-native
description: Disable loading private keys from the OS secret store.
permalink: /docs/cli/set-key-value-no-native/
redirect_from:
  - /docs/ref/cli/set-key-value-no-native/
  - /docs/ref/cli/set-key-value-no-native
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Set
    href: /docs/cli/set/
---
{% capture cli_code_0 %}
$ dotenvx set HELLO World --no-native
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx set HELLO World --no-native{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
