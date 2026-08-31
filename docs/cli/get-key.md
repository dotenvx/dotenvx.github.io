---
layout: docs-cli
title: KEY
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: "Return a single environment variable's value."
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
video: cli-get-key
---
{% capture cli_code_0 %}
$ echo "HELLO=World" > .env

dotenvx get HELLO
World
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
