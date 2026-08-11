---
layout: docs-cli
title: get KEY -f
description: Return a single environment variable\
permalink: /docs/cli/get-key-f/
redirect_from:
  - /docs/ref/cli/get-key-f/
  - /docs/ref/cli/get-key-f
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
s value from a specific .env file.'

{% capture cli_code_0 %}
$ echo "HELLO=World" > .env
echo "HELLO=production" > .env.production

dotenvx get HELLO -f .env.production
production
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
