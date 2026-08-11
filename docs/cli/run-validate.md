---
layout: docs-cli
title: run --validate
description: Validate .env file(s) against .env.example.
permalink: /docs/cli/run-validate/
redirect_from:
  - /docs/ref/cli/run-validate/
  - /docs/ref/cli/run-validate
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
Use `.env.example` to declare the environment variables your command requires and validate `.env` file(s) before it runs.

{% capture cli_code_0 %}
# .env.example
DATABASE_URL=
API_KEY=
SENTRY_DSN= # optional
{% endcapture %}
{% capture cli_code_0_copy %}# .env.example{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

{% capture cli_code_1 %}
$ dotenvx run --validate -- node index.js
[VALIDATION_FAILED] missing required (DATABASE_URL, API_KEY). fix: [https://github.com/dotenvx/dotenvx/issues/907]
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx run --validate -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

Validation errors are reported without stopping your command. Combine `--validate` with `--strict` to exit with code 1 before the command runs.

{% capture cli_code_2 %}
$ dotenvx run --validate --strict -- node index.js
{% endcapture %}
{% capture cli_code_2_copy %}dotenvx run --validate --strict -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}

Any inline comment containing the word `optional` marks that key as optional.

{% capture cli_code_3 %}
SENTRY_DSN= # optional
LOG_LEVEL=info # this value is optional
{% endcapture %}
{% capture cli_code_3_copy %}SENTRY_DSN= # optional{% endcapture %}
{% include components/design-codeblock.html value=cli_code_3 copy_text=cli_code_3_copy %}

If `.env.example` is missing, dotenvx reports `MISSING_ENV_EXAMPLE`. An empty `.env.example` is valid and declares no required variables.
