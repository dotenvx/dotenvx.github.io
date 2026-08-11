---
layout: docs-cli
title: "--format json"
eyebrow: "dotenvx keypair"
eyebrow_href: /docs/cli/keypair/
description: Return keypairs as JSON.
permalink: /docs/cli/keypair-json/
redirect_from:
  - /docs/ref/cli/keypair-json/
  - /docs/ref/cli/keypair-json
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Keypair
    href: /docs/cli/keypair/
---
{% capture cli_code_0 %}
$ dotenvx keypair --format json
{"DOTENV_PUBLIC_KEY":"<publicKey>","DOTENV_PRIVATE_KEY":"<privateKey>"}
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx keypair --format json{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
