---
layout: docs-cli
title: "--redact -- codex"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Runtime leak protection and log redaction for Codex. Start an interactive Codex session with real secrets while redacting them from output and transcripts.
permalink: /docs/cli/run-redact-codex/
redirect_from:
  - /docs/ref/cli/run-redact-codex/
  - /docs/ref/cli/run-redact-codex
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
video: ai-redaction
---
Runtime leak protection for Codex: Codex receives the real environment variables, but log redaction replaces any matching values it prints with `[REDACTED]` throughout the interactive session — so secrets stay out of the terminal and agent transcript.

{% capture cli_code_0 %}
$ echo "SECRET=super-secret-value" > .env

$ dotenvx run --redact --quiet -- codex
{% endcapture %}
{% capture cli_code_0_copy %}echo "SECRET=super-secret-value" > .env
dotenvx run --redact --quiet -- codex{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
