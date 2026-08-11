---
layout: docs-cli
title: "--redact"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Run commands with real environment variables while redacting their values from output.
permalink: /docs/cli/run-redact/
redirect_from:
  - /docs/ref/cli/run-redact/
  - /docs/ref/cli/run-redact
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
related_title: Related
related:
  - title: Claude
    href: /docs/claude/
  - title: Cursor
    href: /docs/cursor/
  - title: Codex
    href: /docs/codex/
---
Run any command with real environment variables while automatically redacting their values from stdout and stderr. Keys ending in `_PLAIN` are left visible.

{% capture cli_code_0 %}
$ echo "SECRET=super-secret-value" > .env
$ echo "VISIBLE_PLAIN=visible-value" >> .env
$ echo "console.log(process.env.SECRET, process.env.VISIBLE_PLAIN)" > index.js

$ dotenvx run --redact --quiet -- node index.js
[REDACTED] visible-value
{% endcapture %}
{% capture cli_code_0_copy %}echo "SECRET=super-secret-value" > .env
echo "VISIBLE_PLAIN=visible-value" >> .env
echo "console.log(process.env.SECRET, process.env.VISIBLE_PLAIN)" > index.js
dotenvx run --redact --quiet -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Redaction is off by default. It applies to every key declared in `.env` files and `--env` flags unless the key ends in `_PLAIN`. If an existing environment variable takes precedence, its effective value is redacted too. Matching is exact, so transformed or derived values are not redacted.

When stdin, stdout, and stderr are attached to a terminal, dotenvx preserves interactive behavior on macOS and Linux systems with `script` available. Piped and redirected commands continue to use normal stdin, stdout, and stderr streams.
