---
layout: docs-cli
title: "--format colon"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Return a colon formatted response.
permalink: /docs/cli/get-colon/
redirect_from:
  - /docs/ref/cli/get-colon/
  - /docs/ref/cli/get-colon
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
dotenvx get --format colon
HELLO: World
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
