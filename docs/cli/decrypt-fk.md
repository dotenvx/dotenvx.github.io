---
layout: docs-cli
title: "-fk"
eyebrow: "dotenvx decrypt"
eyebrow_href: /docs/cli/decrypt/
description: Specify path to .env.keys. This is useful with monorepos.
permalink: /docs/cli/decrypt-fk/
redirect_from:
  - /docs/advanced/decrypt-fk
  - /docs/advanced/decrypt-fk/
  - /docs/ref/cli/decrypt-fk
  - /docs/ref/cli/decrypt-fk/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Decrypt
    href: /docs/cli/decrypt/
---
{% capture cli_code_0 %}
$ mkdir -p apps/app1
echo "HELLO=World" > apps/app1/.env

dotenvx encrypt -fk .env.keys -f apps/app1/.env
◈ encrypted (apps/app1/.env)
dotenvx decrypt -fk .env.keys -f apps/app1/.env
◇ decrypted (apps/app1/.env)
{% endcapture %}
{% capture cli_code_0_copy %}mkdir -p apps/app1{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
