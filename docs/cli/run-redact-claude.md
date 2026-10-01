---
layout: docs-cli
title: "--redact -- claude"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Runtime leak protection and log redaction for Claude Code. Start an interactive Claude session with real secrets while redacting them from output and transcripts.
permalink: /docs/cli/run-redact-claude/
redirect_from:
  - /docs/ref/cli/run-redact-claude/
  - /docs/ref/cli/run-redact-claude
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
video: ai-redaction
---
Runtime leak protection for Claude Code: Claude receives the real environment variables, but log redaction replaces any matching values it prints with `[REDACTED]` throughout the interactive session — so secrets stay out of the terminal and agent transcript.

```console
$ echo "SECRET=super-secret-value" > .env

$ dotenvx run --redact --quiet -- claude
```
{: copy="echo \"SECRET=super-secret-value\" > .env
dotenvx run --redact --quiet -- claude"}
