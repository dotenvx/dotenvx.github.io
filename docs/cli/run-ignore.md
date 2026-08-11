---
layout: docs-cli
title: "--ignore"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Ignore specific error codes.
permalink: /docs/cli/run-ignore/
redirect_from:
  - /docs/ref/cli/run-ignore/
  - /docs/ref/cli/run-ignore
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
{% capture cli_code_0 %}
$ dotenvx run --ignore=MISSING_ENV_FILE -- yourcommand
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx run --ignore=MISSING_ENV_FILE -- yourcommand{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Ignore multiple error codes by separating them with spaces.

{% capture cli_code_1 %}
$ dotenvx run --ignore=MISSING_ENV_FILE MISSING_KEY -- yourcommand
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx run --ignore=MISSING_ENV_FILE MISSING_KEY -- yourcommand{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

You can also set `DOTENV_CONFIG_IGNORE`. Its value is a comma-separated list.

{% capture cli_code_2 %}
$ DOTENV_CONFIG_IGNORE=MISSING_ENV_FILE,OTHER dotenvx run -- yourcommand
{% endcapture %}
{% capture cli_code_2_copy %}DOTENV_CONFIG_IGNORE=MISSING_ENV_FILE,OTHER dotenvx run -- yourcommand{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}
