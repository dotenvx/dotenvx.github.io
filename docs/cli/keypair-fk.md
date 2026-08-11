---
layout: docs-cli
title: keypair -fk
description: Specify path to .env.keys. This is useful for printing public/private keys for monorepos.
permalink: /docs/cli/keypair-fk/
redirect_from:
  - /docs/advanced/keypair-fk
  - /docs/advanced/keypair-fk/
  - /docs/ref/cli/keypair-fk
  - /docs/ref/cli/keypair-fk/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Keypair
    href: /docs/cli/keypair/
---
{% capture cli_code_0 %}
$ mkdir -p apps/app1
echo "HELLO=World" > apps/app1/.env
dotenvx encrypt -fk .env.keys -f apps/app1/.env

dotenvx keypair -fk .env.keys -f apps/app1/.env
{"DOTENV_PUBLIC_KEY":"<publicKey>","DOTENV_PRIVATE_KEY":"<privateKey>"}
{% endcapture %}
{% capture cli_code_0_copy %}mkdir -p apps/app1{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
