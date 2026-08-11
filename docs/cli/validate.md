---
layout: docs-cli
title: Validate
description: Validate .env file(s) against .env.example.
permalink: /docs/cli/validate/
redirect_from:
  - /docs/advanced/validate
  - /docs/advanced/validate/
  - /docs/ref/cli/validate
  - /docs/ref/cli/validate/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
options_title: Options
options:
  - title: validate --ignore
    href: /docs/cli/validate-ignore/
---
Use `.env.example` to declare required environment variables and validate `.env` file(s) before running your app.

{% capture cli_code_0 %}
# .env.example
DATABASE_URL=
API_KEY=
SENTRY_DSN= # optional
{% endcapture %}
{% capture cli_code_0_copy %}# .env.example{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

{% capture cli_code_1 %}
$ dotenvx validate
[VALIDATION_FAILED] missing required (DATABASE_URL, API_KEY). fix: [https://github.com/dotenvx/dotenvx/issues/907]
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx validate{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

`dotenvx validate` does not run a command. It loads and decrypts the selected env files, checks them against `.env.example`, and exits with code 1 when validation fails. On success, it prints `▣ validated` and exits with code 0.

{% capture cli_code_2 %}
$ dotenvx validate -f .env.production -fk .env.keys
{% endcapture %}
{% capture cli_code_2_copy %}dotenvx validate -f .env.production -fk .env.keys{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}

Any inline comment containing the word `optional` marks that key as optional.
