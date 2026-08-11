---
layout: docs-cli
title: encrypt -fk
description: Specify path to .env.keys. This is useful with monorepos.
permalink: /docs/cli/encrypt-fk/
redirect_from:
  - /docs/ref/cli/encrypt-fk/
  - /docs/ref/cli/encrypt-fk
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Encrypt
    href: /docs/cli/encrypt/
---
{% capture cli_code_0 %}
$ mkdir -p apps/app1
echo "HELLO=World" > apps/app1/.env

dotenvx encrypt -fk .env.keys -f apps/app1/.env
◈ encrypted (apps/app1/.env)
{% endcapture %}
{% capture cli_code_0_copy %}mkdir -p apps/app1{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Put it to use.

{% capture cli_code_1 %}
$ dotenvx run -fk .env.keys -f apps/app1/.env
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx run -fk .env.keys -f apps/app1/.env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

Use with a relative path.

{% capture cli_code_2 %}
$ cd apps/app1
dotenvx run -fk ../../.env.keys -f .env
{% endcapture %}
{% capture cli_code_2_copy %}cd apps/app1{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}
