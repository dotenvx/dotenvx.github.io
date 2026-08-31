---
layout: docs-cli
title: "Variable Expansion"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Reference and expand variables already on your machine for use in your .env file.
permalink: /docs/cli/run-variable-expansion/
redirect_from:
  - /docs/advanced/run-variable-expansion
  - /docs/advanced/run-variable-expansion/
  - /docs/ref/cli/run-variable-expansion
  - /docs/ref/cli/run-variable-expansion/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
video: cli-variable-expansion
---
{% capture cli_code_0 %}
# .env
USERNAME="username"
DATABASE_URL="postgres://${USERNAME}@localhost/my_database"
{% endcapture %}
{% capture cli_code_0_copy %}# .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

{% capture cli_code_1 %}
// index.js
console.log('DATABASE_URL', process.env.DATABASE_URL)
{% endcapture %}
{% capture cli_code_1_copy %}// index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

{% capture cli_code_2 %}
$ dotenvx run --debug -- node index.js
⟐ injected env (2) from .env
DATABASE_URL postgres://username@localhost/my_database
{% endcapture %}
{% capture cli_code_2_copy %}dotenvx run --debug -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}

<h2 class="design-page-title design-page-title--flush" id="disabling">Disabling</h2>

To disable variable expansion use single quotes like `PASSWORD='pa$$word@'` to get the result 'pa$$word@'.
