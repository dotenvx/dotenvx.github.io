---
layout: docs-cli
title: keypair --pretty-print
description: Make JSON output more readable.
permalink: /docs/cli/keypair-pretty-print/
redirect_from:
  - /docs/ref/cli/keypair-pretty-print/
  - /docs/ref/cli/keypair-pretty-print
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Keypair
    href: /docs/cli/keypair/
---
{% capture cli_code_0 %}
$ dotenvx keypair --pretty-print
{
  "DOTENV_PUBLIC_KEY": "<publicKey>",
  "DOTENV_PRIVATE_KEY": "<privateKey>"
}
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx keypair --pretty-print{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
