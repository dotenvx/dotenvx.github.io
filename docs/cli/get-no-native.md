---
layout: docs-cli
title: get KEY --no-native
description: Disable loading private keys from the OS secret store.
permalink: /docs/cli/get-no-native/
redirect_from:
  - /docs/ref/cli/get-no-native/
  - /docs/ref/cli/get-no-native
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
{% capture cli_code_0 %}
$ dotenvx get HELLO --no-native
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx get HELLO --no-native{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
