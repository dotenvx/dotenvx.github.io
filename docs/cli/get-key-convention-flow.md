---
layout: docs-cli
title: "--convention=flow"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: "Return a single environment variable's value using the dotenv-flow convention."
permalink: /docs/cli/get-key-convention-flow/
redirect_from:
  - /docs/advanced/get-key-convention-flow
  - /docs/advanced/get-key-convention-flow/
  - /docs/ref/cli/get-key-convention-flow
  - /docs/ref/cli/get-key-convention-flow/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
{% capture cli_code_0 %}
$ echo "HELLO=development local" > .env.development.local
echo "HELLO=development" > .env.development
echo "HELLO=local" > .env.local
echo "HELLO=env" > .env
echo "console.log('Hello ' + process.env.HELLO)" > index.js

dotenvx get HELLO --convention=flow
development local
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=development local" > .env.development.local{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

You can also set `DOTENV_CONFIG_CONVENTION=flow`.

{% capture cli_code_1 %}
$ DOTENV_CONFIG_CONVENTION=flow dotenvx get HELLO
development local
{% endcapture %}
{% capture cli_code_1_copy %}DOTENV_CONFIG_CONVENTION=flow dotenvx get HELLO{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}
