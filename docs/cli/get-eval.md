---
layout: docs-cli
title: "--format eval"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Return an eval-ready shell formatted response of all key/value pairs in a .env file.
permalink: /docs/cli/get-eval/
redirect_from:
  - /docs/advanced/get-eval
  - /docs/advanced/get-eval/
  - /docs/ref/cli/get-eval
  - /docs/ref/cli/get-eval/
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

dotenvx get --format eval
HELLO="World"
KEY="value"
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Note that this exports newlines and quoted strings.

This can be useful for more complex .env values (spaces, escaped characters, quotes, etc) combined with `eval` on the command line.

{% capture cli_code_1 %}
$ echo "console.log('Hello ' + process.env.KEY + ' ' + process.env.HELLO)" > index.js
eval $(dotenvx get --format=eval) node index.js
Hello value World
{% endcapture %}
{% capture cli_code_1_copy %}echo "console.log('Hello ' + process.env.KEY + ' ' + process.env.HELLO)" > index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

Be careful with `eval` as it allows for arbitrary execution of commands. Prefer `dotenvx run --` but in some cases `eval` is a sharp knife that is useful to have.
