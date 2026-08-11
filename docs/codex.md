---
layout: docs-quickstart
title: "Codex"
social_title: "Redact secrets from Codex agents"
description: "Redact secrets from your Codex agents and prevent them from leaking into logs."
icon: codex
permalink: /docs/codex/
redirect_from:
  - /docs/secrets-in-codex/
  - /docs/secrets-in-codex
prerequisite_lede: "Install the [Codex CLI](https://developers.openai.com/codex/cli/) to get the `codex` command."
prerequisite_copy: |
  npm install -g @openai/codex
  codex --version
prerequisite: |
  $ npm install -g @openai/codex
  $ codex --version
install_copy: "curl -sfS https://dotenvx.sh | sh"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt_title: "2. Add your secrets"
encrypt_lede: "Add a secret to your `.env` file."
encrypt_copy: 'echo "HELLO=World" > .env'
encrypt: |
  $ echo "HELLO=World" > .env
inject_title: "3. Run Codex with redaction"
inject_lede: "Run Codex with your real secrets while redacting them from its output."
inject_copy: "dotenvx run --redact -- codex exec 'Run `dotenvx get HELLO` and echo back just Hello VALUE' --skip-git-repo-check"
inject: |
  $ dotenvx run --redact -- codex exec 'Run `dotenvx get HELLO` and echo back just Hello VALUE' --skip-git-repo-check
  Hello [REDACTED]
video: https://github.com/user-attachments/assets/36cdfe6b-429a-4cb7-a087-894c5f043a2b
---
