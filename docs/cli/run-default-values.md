---
layout: docs-cli
title: run - Default Values
description: Use default values when environment variables are unset or empty.
permalink: /docs/cli/run-default-values/
redirect_from:
  - /docs/advanced/run-default-values
  - /docs/advanced/run-default-values/
  - /docs/ref/cli/run-default-values
  - /docs/ref/cli/run-default-values/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
{% capture cli_code_0 %}
# .env
# Default value syntax: use value if set, otherwise use default
DATABASE_HOST=${DB_HOST:-localhost}
DATABASE_PORT=${DB_PORT:-5432}

# Alternative syntax (no colon): use value if set, otherwise use default
API_URL=${API_BASE_URL-https://api.example.com}
{% endcapture %}
{% capture cli_code_0_copy %}# .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

{% capture cli_code_1 %}
// index.js
console.log('DATABASE_HOST', process.env.DATABASE_HOST)
console.log('DATABASE_PORT', process.env.DATABASE_PORT)
console.log('API_URL', process.env.API_URL)
{% endcapture %}
{% capture cli_code_1_copy %}// index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

{% capture cli_code_2 %}
$ dotenvx run --debug -- node index.js
⟐ injected env (3) from .env
DATABASE_HOST localhost
DATABASE_PORT 5432
API_URL https://api.example.com
{% endcapture %}
{% capture cli_code_2_copy %}dotenvx run --debug -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}
