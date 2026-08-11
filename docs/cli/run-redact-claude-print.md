---
layout: docs-cli
title: "--redact -- claude -p"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Runtime leak protection and log redaction for Claude print mode. Run Claude non-interactively with real secrets while redacting them from output and logs.
permalink: /docs/cli/run-redact-claude-print/
redirect_from:
  - /docs/ref/cli/run-redact-claude-print/
  - /docs/ref/cli/run-redact-claude-print
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
video: https://github.com/user-attachments/assets/36cdfe6b-429a-4cb7-a087-894c5f043a2b
---
Runtime leak protection for Claude print mode: Claude receives the real environment variables, but log redaction replaces any matching values it prints with `[REDACTED]`.

{% capture cli_code_0 %}
$ echo "SECRET=super-secret-value" > .env

$ dotenvx run --redact --quiet -- claude -p 'Print the value of $SECRET'
[REDACTED]
{% endcapture %}
{% capture cli_code_0_copy %}echo "SECRET=super-secret-value" > .env
dotenvx run --redact --quiet -- claude -p 'Print the value of $SECRET'{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
