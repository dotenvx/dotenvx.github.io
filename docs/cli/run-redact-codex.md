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

```console
$ echo "SECRET=super-secret-value" > .env

$ dotenvx run --redact --quiet -- codex
```
{: copy="echo \"SECRET=super-secret-value\" > .env
dotenvx run --redact --quiet -- codex"}
