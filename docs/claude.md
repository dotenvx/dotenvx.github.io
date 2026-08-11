---
layout: docs-quickstart
title: "Claude Code"
social_title: "Runtime leak protection for Claude coding agents"
description: "Runtime leak protection and log redaction for Claude Code. Give Claude real secrets while redacting them from output, terminals, and agent transcripts."
icon: claude
permalink: /docs/claude/
redirect_from:
  - /docs/secrets-in-claude/
  - /docs/secrets-in-claude
prerequisite_lede: "Install [Claude Code](https://code.claude.com/docs/en/setup) to get the `claude` command."
prerequisite_copy: |
  curl -fsSL https://claude.ai/install.sh | bash
  claude --version
prerequisite: |
  $ curl -fsSL https://claude.ai/install.sh | bash
  $ claude --version
install_copy: "curl -sfS https://dotenvx.sh | sh"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt_title: "2. Add your secrets"
encrypt_lede: "Add a secret to your `.env` file."
encrypt_copy: 'echo "HELLO=World" > .env'
encrypt: |
  $ echo "HELLO=World" > .env
inject_title: "3. Run Claude with redaction"
inject_lede: "Runtime leak protection: Claude gets real secrets, while log redaction strips them from its output."
inject_copy: "dotenvx run --redact -- claude -p 'Run `dotenvx get HELLO` and echo back just Hello VALUE' --dangerously-skip-permissions"
inject: |
  $ dotenvx run --redact -- claude -p 'Run `dotenvx get HELLO` and echo back just Hello VALUE' --dangerously-skip-permissions
  Hello [REDACTED]
video: https://github.com/user-attachments/assets/36cdfe6b-429a-4cb7-a087-894c5f043a2b
---
