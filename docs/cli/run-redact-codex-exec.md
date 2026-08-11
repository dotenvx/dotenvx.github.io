---
layout: docs-cli
title: run --redact -- codex exec
description: Run Codex non-interactively while redacting injected values from its output.
permalink: /docs/cli/run-redact-codex-exec/
redirect_from:
  - /docs/ref/cli/run-redact-codex-exec/
  - /docs/ref/cli/run-redact-codex-exec
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
video: https://github.com/user-attachments/assets/36cdfe6b-429a-4cb7-a087-894c5f043a2b
---
Codex receives the real environment variables, but any matching values it prints are replaced with `[REDACTED]`.

{% capture cli_code_0 %}
$ echo "SECRET=super-secret-value" > .env

$ dotenvx run --redact --quiet -- codex exec 'Print the value of $SECRET'
[REDACTED]
{% endcapture %}
{% capture cli_code_0_copy %}echo "SECRET=super-secret-value" > .env
dotenvx run --redact --quiet -- codex exec 'Print the value of $SECRET'{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
