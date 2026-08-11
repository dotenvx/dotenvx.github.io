---
layout: docs-cli
title: get KEY --convention=nextjs
description: Return a single environment variable\
permalink: /docs/cli/get-key-convention-nextjs/
redirect_from:
  - /docs/ref/cli/get-key-convention-nextjs/
  - /docs/ref/cli/get-key-convention-nextjs
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
s value using the Next.js convention'

{% capture cli_code_0 %}
$ echo "HELLO=development local" > .env.development.local
echo "HELLO=local" > .env.local
echo "HELLO=development" > .env.development
echo "HELLO=env" > .env
echo "console.log('Hello ' + process.env.HELLO)" > index.js

dotenvx get HELLO --convention=nextjs
development local
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=development local" > .env.development.local{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

You can also set `DOTENV_CONFIG_CONVENTION=nextjs`.

{% capture cli_code_1 %}
$ DOTENV_CONFIG_CONVENTION=nextjs dotenvx get HELLO
development local
{% endcapture %}
{% capture cli_code_1_copy %}DOTENV_CONFIG_CONVENTION=nextjs dotenvx get HELLO{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}
