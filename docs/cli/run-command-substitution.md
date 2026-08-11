---
layout: docs-cli
title: run - Command Substitution
description: Add the output of a command to one of your variables in your .env file.
permalink: /docs/cli/run-command-substitution/
redirect_from:
  - /docs/advanced/run-command-substitution
  - /docs/advanced/run-command-substitution/
  - /docs/ref/cli/run-command-substitution
  - /docs/ref/cli/run-command-substitution/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
video: https://github.com/user-attachments/assets/5a2b04ef-d5de-433a-b6a6-34cd39e0449e
---
{% capture cli_code_0 %}
# .env
DATABASE_URL="postgres://$(whoami)@localhost/my_database"
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
⟐ injected env (1) from .env
DATABASE_URL postgres://yourusername@localhost/my_database
{% endcapture %}
{% capture cli_code_2_copy %}dotenvx run --debug -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}
