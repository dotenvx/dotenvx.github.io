---
layout: docs-cli
title: validate --ignore
description: Ignore specific validation error codes.
permalink: /docs/cli/validate-ignore/
redirect_from:
  - /docs/ref/cli/validate-ignore/
  - /docs/ref/cli/validate-ignore
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Validate
    href: /docs/cli/validate/
---
{% capture cli_code_0 %}
$ dotenvx validate --ignore=MISSING_ENV_EXAMPLE
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx validate --ignore=MISSING_ENV_EXAMPLE{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Ignore multiple error codes by separating them with spaces.

{% capture cli_code_1 %}
$ dotenvx validate --ignore=MISSING_ENV_FILE MISSING_ENV_EXAMPLE
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx validate --ignore=MISSING_ENV_FILE MISSING_ENV_EXAMPLE{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

You can also set `DOTENV_CONFIG_IGNORE`. Its value is a comma-separated list.

{% capture cli_code_2 %}
$ DOTENV_CONFIG_IGNORE=MISSING_ENV_FILE,OTHER dotenvx validate
{% endcapture %}
{% capture cli_code_2_copy %}DOTENV_CONFIG_IGNORE=MISSING_ENV_FILE,OTHER dotenvx validate{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}
