---
layout: docs-cli
title: "validate --ignore"
eyebrow: "dotenvx validate"
eyebrow_href: /docs/cli/validate/
description: "Ignore specific loading or value-validation errors:"
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
command: "dotenvx validate --ignore"
---
Ignore specific loading or value-validation errors:

{% capture cli_code_0 %}
$ dotenvx validate --ignore=MISSING_ENV_FILE
$ dotenvx validate --ignore=MISSING_ENV_FILE INVALID_ENV
$ DOTENV_IGNORE=MISSING_ENV_FILE dotenvx validate
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx validate --ignore=MISSING_ENV_FILE
dotenvx validate --ignore=MISSING_ENV_FILE INVALID_ENV
DOTENV_IGNORE=MISSING_ENV_FILE dotenvx validate{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy format="cli" %}

An Envfile is still required, even when errors are ignored.
