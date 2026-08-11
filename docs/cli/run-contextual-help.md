---
layout: docs-cli
title: run - Contextual Help
description: "Unlike other dotenv libraries, dotenvx attempts to unblock you with contextual help."
permalink: /docs/cli/run-contextual-help/
redirect_from:
  - /docs/advanced/run-contextual-help
  - /docs/advanced/run-contextual-help/
  - /docs/ref/cli/run-contextual-help
  - /docs/ref/cli/run-contextual-help/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
video: https://github.com/user-attachments/assets/75b7d048-552a-4a7c-bccf-195749b3b7a3
---
For example, when missing a custom .env file:

{% capture cli_code_0 %}
$ dotenvx run -f .env.missing -- sh -c 'echo $HELLO'
[MISSING_ENV_FILE] missing file (/Users/scottmotte/Code/dotenvx/playground/apr-16/.env.missing). fix: [echo "HELLO=World" > .env.missing]
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx run -f .env.missing -- sh -c 'echo $HELLO'{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

or when missing a KEY:

{% capture cli_code_1 %}
$ echo "HELLO=World" > .env
dotenvx get GOODBYE
[MISSING_KEY] missing key (GOODBYE)
{% endcapture %}
{% capture cli_code_1_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}
