---
layout: docs-quickstart
title: "Claude Code"
social_title: "Redact secrets from Claude coding agents"
description: "Redact secrets from your Claude coding agents and prevent them from leaking into logs."
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
inject_lede: "Run Claude with your real secrets while redacting them from its output."
inject_copy: "dotenvx run --redact -- claude -p 'Run `dotenvx get HELLO` and echo back just Hello VALUE' --dangerously-skip-permissions"
inject: |
  $ dotenvx run --redact -- claude -p 'Run `dotenvx get HELLO` and echo back just Hello VALUE' --dangerously-skip-permissions
  Hello [REDACTED]
video: https://github.com/user-attachments/assets/36cdfe6b-429a-4cb7-a087-894c5f043a2b
---
