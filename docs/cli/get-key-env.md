---
layout: docs-cli
title: "KEY --env"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: "Return a single environment variable's value from a --env string."
permalink: /docs/cli/get-key-env/
redirect_from:
  - /docs/advanced/get-key-env
  - /docs/advanced/get-key-env/
  - /docs/ref/cli/get-key-env
  - /docs/ref/cli/get-key-env/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
{% capture cli_code_0 %}
$ dotenvx get HELLO --env HELLO=String -f .env.production
String
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx get HELLO --env HELLO=String -f .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
