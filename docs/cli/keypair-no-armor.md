---
layout: docs-cli
title: "--no-armor"
eyebrow: "dotenvx keypair"
eyebrow_href: /docs/cli/keypair/
description: Disable Dotenvx Armor features.
permalink: /docs/cli/keypair-no-armor/
redirect_from:
  - /docs/ref/cli/keypair-no-armor/
  - /docs/ref/cli/keypair-no-armor
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Keypair
    href: /docs/cli/keypair/
---
{% capture cli_code_0 %}
$ dotenvx keypair --no-armor
{"DOTENV_PUBLIC_KEY":"<publicKey>","DOTENV_PRIVATE_KEY":"<privateKey>"}
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx keypair --no-armor{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
