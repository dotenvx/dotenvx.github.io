---
layout: docs-cli
title: "KEY --mask"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Return a masked environment variable value.
permalink: /docs/cli/get-key-mask/
redirect_from:
  - /docs/ref/cli/get-key-mask/
  - /docs/ref/cli/get-key-mask
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
By default, up to the first six characters are visible.

{% capture cli_code_0 %}
$ echo "SECRET=abcdefghijkl" > .env

$ dotenvx get SECRET --mask
abcdef******
{% endcapture %}
{% capture cli_code_0_copy %}echo "SECRET=abcdefghijkl" > .env
dotenvx get SECRET --mask{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Pass a number to control how many characters are visible.

{% capture cli_code_1 %}
$ dotenvx get SECRET --mask 0
************
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx get SECRET --mask 0{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}
