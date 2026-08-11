---
layout: docs-cli
title: get -ik
description: Include only keys that match a glob pattern.
permalink: /docs/cli/get-include-key/
redirect_from:
  - /docs/ref/cli/get-include-key/
  - /docs/ref/cli/get-include-key
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
Pass `--include-key`, or its `-ik` alias. Glob patterns are supported.

{% capture cli_code_0 %}
$ echo "HELLO=World\nHOLA=Mundo\nGOODBYE=World" > .env

$ dotenvx get -ik "H*"
{"HELLO":"World","HOLA":"Mundo"}
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World\nHOLA=Mundo\nGOODBYE=World" > .env
dotenvx get -ik "H*"{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
