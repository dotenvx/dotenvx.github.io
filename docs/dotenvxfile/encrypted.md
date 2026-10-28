---
layout: docs-cli
title: Encryption
description: Require encrypted values in your environment sources.
permalink: "/docs/dotenvxfile/encrypted/"
redirect_from:
  - /docs/envfile/encrypted
  - /docs/envfile/encrypted/
eyebrow: Dotenvxfile
eyebrow_href: "/docs/dotenvxfile/"
command: 'env "API_KEY", storage: "encrypted"'
command_prompt: false
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
Use `storage: "encrypted"` for secret values and `storage: "plaintext"` for values that should stay readable. The default is `"any"`.

```ruby
strict true
storage "encrypted"

env "API_KEY", required: true
env "PORT", type: "port", storage: "plaintext"
```

The root `storage` setting supplies the default; declarations and file blocks can override it. `dotenvx encrypt` respects plaintext rules when choosing values to encrypt. A storage declaration does not rewrite your `.env` or cause `dotenvx run` to reject plaintext at startup.

Storage rules and output redaction are independent. Use `redacted: true` to hide sensitive values in output. Keep private keys separate from Git.
