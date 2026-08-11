---
layout: docs-cli
title: get --format shell
description: Return a shell formatted response of all key/value pairs in a .env file.
permalink: /docs/cli/get-shell/
redirect_from:
  - /docs/ref/cli/get-shell/
  - /docs/ref/cli/get-shell
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
echo "KEY=value" >> .env

dotenvx get --format shell
HELLO=World KEY=value
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

This can be useful when combined with `env` on the command line.

{% capture cli_code_1 %}
$ echo "console.log('Hello ' + process.env.KEY + ' ' + process.env.HELLO)" > index.js
env $(dotenvx get --format=shell) node index.js
Hello value World
{% endcapture %}
{% capture cli_code_1_copy %}echo "console.log('Hello ' + process.env.KEY + ' ' + process.env.HELLO)" > index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

or with `export`.

{% capture cli_code_2 %}
$ echo "console.log('Hello ' + process.env.KEY + ' ' + process.env.HELLO)" > index.js
export $(dotenvx get --format=shell)
node index.js
Hello value World
{% endcapture %}
{% capture cli_code_2_copy %}echo "console.log('Hello ' + process.env.KEY + ' ' + process.env.HELLO)" > index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}
