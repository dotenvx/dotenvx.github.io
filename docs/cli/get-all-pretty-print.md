---
layout: docs-cli
title: get --all --pretty-print
description: Make the output more readable - pretty print it.
permalink: /docs/cli/get-all-pretty-print/
redirect_from:
  - /docs/ref/cli/get-all-pretty-print/
  - /docs/ref/cli/get-all-pretty-print
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

dotenvx get --all --pretty-print
{
  "PWD": "/some/filepath",
  "USER": "username",
  "LIBRARY_PATH": "/usr/local/lib",
  ...,
  "HELLO": "World"
}
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
