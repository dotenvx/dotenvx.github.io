---
layout: docs-cli
title: run --mask
description: Inject masked values into a command.
permalink: /docs/cli/run-mask/
redirect_from:
  - /docs/ref/cli/run-mask/
  - /docs/ref/cli/run-mask
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
By default, up to the first six characters are visible.

{% capture cli_code_0 %}
$ echo "SECRET=abcdefghijkl" > .env
$ echo "console.log(process.env.SECRET)" > index.js

$ dotenvx run --mask --quiet -- node index.js
abcdef******
{% endcapture %}
{% capture cli_code_0_copy %}echo "SECRET=abcdefghijkl" > .env
echo "console.log(process.env.SECRET)" > index.js
dotenvx run --mask --quiet -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Pass a number to control how many characters are visible.

{% capture cli_code_1 %}
$ dotenvx run --mask 0 --quiet -- node index.js
************
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx run --mask 0 --quiet -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}
