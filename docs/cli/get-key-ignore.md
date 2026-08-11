---
layout: docs-cli
title: "KEY --ignore"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Ignore specific error codes.
permalink: /docs/cli/get-key-ignore/
redirect_from:
  - /docs/ref/cli/get-key-ignore/
  - /docs/ref/cli/get-key-ignore
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
{% capture cli_code_0 %}
$ dotenvx get HELLO --ignore=MISSING_ENV_FILE
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx get HELLO --ignore=MISSING_ENV_FILE{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Ignore multiple error codes by separating them with spaces.

{% capture cli_code_1 %}
$ dotenvx get HELLO --ignore=MISSING_ENV_FILE MISSING_KEY
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx get HELLO --ignore=MISSING_ENV_FILE MISSING_KEY{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

You can also set `DOTENV_CONFIG_IGNORE`. Its value is a comma-separated list.

{% capture cli_code_2 %}
$ DOTENV_CONFIG_IGNORE=MISSING_ENV_FILE,OTHER dotenvx get HELLO
{% endcapture %}
{% capture cli_code_2_copy %}DOTENV_CONFIG_IGNORE=MISSING_ENV_FILE,OTHER dotenvx get HELLO{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}
