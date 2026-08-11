---
layout: docs-quickstart
title: "Cursor"
social_title: "Redact secrets from Cursor agents"
description: "Redact secrets from your Cursor agents and prevent them from leaking into logs."
icon: cursor
permalink: /docs/cursor/
redirect_from:
  - /docs/secrets-in-cursor/
  - /docs/secrets-in-cursor
prerequisite_lede: "Install the [Cursor CLI](https://cursor.com/cli). The Cursor desktop app does not necessarily install the separate `agent` command."
prerequisite_copy: |
  curl https://cursor.com/install -fsS | bash
  agent --version
prerequisite: |
  $ curl https://cursor.com/install -fsS | bash
  $ agent --version
install_copy: "curl -sfS https://dotenvx.sh | sh"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt_title: "2. Add your secrets"
encrypt_lede: "Add a secret to your `.env` file."
encrypt_copy: 'echo "HELLO=World" > .env'
encrypt: |
  $ echo "HELLO=World" > .env
inject_title: "3. Run Cursor with redaction"
inject_lede: "Run Cursor with your real secrets while redacting them from its output."
inject_copy: "dotenvx run --redact -- agent -p --force 'Run `dotenvx get HELLO` and echo back just Hello VALUE' --output-format text"
inject: |
  $ dotenvx run --redact -- agent -p --force 'Run `dotenvx get HELLO` and echo back just Hello VALUE' --output-format text
  Hello [REDACTED]
video: https://github.com/user-attachments/assets/36cdfe6b-429a-4cb7-a087-894c5f043a2b
---
