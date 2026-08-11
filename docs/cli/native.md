---
layout: docs-cli
title: Native
description: Move private keys into your OS secret store.
permalink: /docs/cli/native/
redirect_from:
  - /docs/ref/cli/native/
  - /docs/ref/cli/native
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
options_title: Commands
options:
  - title: "native up"
    href: /docs/cli/native/up/
  - title: "native down"
    href: /docs/cli/native/down/
  - title: "native push"
    href: /docs/cli/native/push/
  - title: "native pull"
    href: /docs/cli/native/pull/
---
Native uses your operating system's secret store:

- macOS: Keychain
- Windows: Credential Manager
- Linux: Secret Service through `secret-tool`

On Linux, `secret-tool` and an available Secret Service are required.

{% capture cli_code_0 %}
$ dotenvx native
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx native{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
