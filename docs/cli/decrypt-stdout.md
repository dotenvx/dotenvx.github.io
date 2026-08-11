---
layout: docs-cli
title: decrypt --stdout
description: Decrypt the contents of an encrypted .env file and send to stdout.
permalink: /docs/cli/decrypt-stdout/
redirect_from:
  - /docs/advanced/decrypt-stdout
  - /docs/advanced/decrypt-stdout/
  - /docs/ref/cli/decrypt-stdout
  - /docs/ref/cli/decrypt-stdout/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Decrypt
    href: /docs/cli/decrypt/
---
{% capture cli_code_0 %}
$ dotenvx decrypt --stdout
#/-------------------[DOTENV_PUBLIC_KEY]--------------------/
#/            public-key encryption for .env files          /
#/       [how it works](https://dotenvx.com/encryption)     /
#/----------------------------------------------------------/
DOTENV_PUBLIC_KEY="034af93e93708b994c10f236c96ef88e47291066946cce2e8d98c9e02c741ced45"
# .env
HELLO="World"
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx decrypt --stdout{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

or send to a file:

{% capture cli_code_1 %}
$ dotenvx decrypt --stdout > somefile.txt
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx decrypt --stdout > somefile.txt{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}
