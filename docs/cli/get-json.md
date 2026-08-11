---
layout: docs-cli
title: get
description: Return a json response of all key/value pairs in a .env file.
permalink: /docs/cli/get-json/
redirect_from:
  - /docs/advanced/get-json
  - /docs/advanced/get-json/
  - /docs/ref/cli/get-json
  - /docs/ref/cli/get-json/
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

dotenvx get
{"HELLO":"World"}
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
