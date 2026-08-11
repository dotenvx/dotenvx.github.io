---
layout: docs-cli
title: get KEY
description: Return a single environment variable\
permalink: /docs/cli/get-key/
redirect_from:
  - /docs/advanced/get-key
  - /docs/advanced/get-key/
  - /docs/ref/cli/get-key
  - /docs/ref/cli/get-key/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
video: https://github.com/user-attachments/assets/84eb8164-53ab-45a7-bcc1-57ebfe919725
---
s value.'

{% capture cli_code_0 %}
$ echo "HELLO=World" > .env

dotenvx get HELLO
World
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
