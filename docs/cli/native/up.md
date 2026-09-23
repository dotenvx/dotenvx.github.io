---
layout: docs-cli
title: "native up"
eyebrow: "dotenvx native"
eyebrow_href: /docs/cli/native/
description: "Move a private key from .env.keys into your OS secret store."
permalink: /docs/cli/native/up/
redirect_from:
  - /docs/ref/cli/native/up/
  - /docs/ref/cli/native/up
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Native
    href: /docs/cli/native/
video: cli-native-up
command: "dotenvx native up"
options_title: Options
options:
  - title: "native up -f"
    href: /docs/cli/native/up-f/
  - title: "native up -fk"
    href: /docs/cli/native/up-fk/
---
Move a private key from `.env.keys` into your OS secret store.

{% capture cli_code_0 %}
$ dotenvx native up
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx native up{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
