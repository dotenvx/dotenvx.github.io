---
layout: docs-cli
title: Run --no-native
description: Disable loading private keys from the OS secret store.
permalink: /docs/cli/run-no-native/
redirect_from:
  - /docs/ref/cli/run-no-native/
  - /docs/ref/cli/run-no-native
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
{% capture cli_code_0 %}
$ dotenvx run --no-native -- yourcommand
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx run --no-native -- yourcommand{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
