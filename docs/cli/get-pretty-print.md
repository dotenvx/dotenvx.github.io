---
layout: docs-cli
title: get --pretty-print
description: Make JSON output more readable.
permalink: /docs/cli/get-pretty-print/
redirect_from:
  - /docs/ref/cli/get-pretty-print/
  - /docs/ref/cli/get-pretty-print
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
{% capture cli_code_0 %}
$ echo "HELLO=World" > .env
dotenvx get --pretty-print
{
  "HELLO": "World"
}
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
