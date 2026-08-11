---
layout: docs-cli
title: run - Multiline
description: Dotenvx supports multiline values.
permalink: /docs/cli/run-multiline/
redirect_from:
  - /docs/advanced/run-multiline
  - /docs/advanced/run-multiline/
  - /docs/ref/cli/run-multiline
  - /docs/ref/cli/run-multiline/
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
MULTILINE_PEM="-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnNl1tL3QjKp3DZWM0T3u
LgGJQwu9WqyzHKZ6WIA5T+7zPjO1L8l3S8k8YzBrfH4mqWOD1GBI8Yjq2L1ac3Y/
bTdfHN8CmQr2iDJC0C6zY8YV93oZB3x0zC/LPbRYpF8f6OqX1lZj5vo2zJZy4fI/
kKcI5jHYc8VJq+KCuRZrvn+3V+KuL9tF9v8ZgjF2PZbU+LsCy5Yqg1M8f5Jp5f6V
u4QuUoobAgMBAAE=
-----END PUBLIC KEY-----"
{% endcapture %}
{% capture cli_code_0_copy %}# .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

{% capture cli_code_1 %}
// index.js
console.log('MULTILINE_PEM', process.env.MULTILINE_PEM)
{% endcapture %}
{% capture cli_code_1_copy %}// index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

{% capture cli_code_2 %}
$ dotenvx run -- node index.js
MULTILINE_PEM -----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnNl1tL3QjKp3DZWM0T3u
LgGJQwu9WqyzHKZ6WIA5T+7zPjO1L8l3S8k8YzBrfH4mqWOD1GBI8Yjq2L1ac3Y/
bTdfHN8CmQr2iDJC0C6zY8YV93oZB3x0zC/LPbRYpF8f6OqX1lZj5vo2zJZy4fI/
kKcI5jHYc8VJq+KCuRZrvn+3V+KuL9tF9v8ZgjF2PZbU+LsCy5Yqg1M8f5Jp5f6V
u4QuUoobAgMBAAE=
-----END PUBLIC KEY-----
{% endcapture %}
{% capture cli_code_2_copy %}dotenvx run -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}
