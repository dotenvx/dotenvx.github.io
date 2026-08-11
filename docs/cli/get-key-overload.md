---
layout: docs-cli
title: get KEY --overload
description: Return a single environment variable\
permalink: /docs/cli/get-key-overload/
redirect_from:
  - /docs/ref/cli/get-key-overload/
  - /docs/ref/cli/get-key-overload
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
s value where each found value is overloaded.'

{% capture cli_code_0 %}
$ echo "HELLO=World" > .env
echo "HELLO=production" > .env.production

dotenvx get HELLO -f .env.production --env HELLO=String -f .env --overload
World
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
