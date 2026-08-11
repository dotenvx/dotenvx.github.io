---
layout: docs-cli
title: "-f"
eyebrow: "dotenvx keypair"
eyebrow_href: /docs/cli/keypair/
description: "Print public/private keys for chosen .env* files."
permalink: /docs/cli/keypair-f/
redirect_from:
  - /docs/advanced/keypair-f
  - /docs/advanced/keypair-f/
  - /docs/ref/cli/keypair-f
  - /docs/ref/cli/keypair-f/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Keypair
    href: /docs/cli/keypair/
---
{% capture cli_code_0 %}
$ echo "HELLO=Production" > .env.production
dotenvx encrypt -f .env.production

dotenvx keypair -f .env.production
{"DOTENV_PUBLIC_KEY_PRODUCTION":"<publicKey>","DOTENV_PRIVATE_KEY_PRODUCTION":"<privateKey>"}
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=Production" > .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
