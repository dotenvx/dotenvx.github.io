---
layout: docs-cli
title: Encryption
description: Require encrypted values in your environment sources.
permalink: "/docs/dotenvxtoml/encrypted/"
eyebrow: Dotenvx.toml
eyebrow_href: "/docs/dotenvxtoml/"
command: '[env.API_KEY]'
command_prompt: false
related:
- title: Dotenvx.toml Quickstart
  href: "/docs/dotenvxtoml/quickstart/"
- title: Full Dotenvx.toml Spec
  href: "/docs/dotenvxtoml/spec/"
---
Use `storage = "encrypted"` for secret values and `storage = "plaintext"` for values that should stay readable. The default is `"any"`.

```toml
strict = true
storage = "encrypted"

[env.API_KEY]
required = true

[env.PORT]
type = "port"
storage = "plaintext"
```

The root `storage` setting supplies the default. Variable and file tables can override it. Run `dotenvx encrypt` to apply storage rules to your `.env` file. At startup, `dotenvx run` validates resolved values.

Storage rules and output redaction are independent. Use `redacted = true` to hide sensitive values in output. Keep private keys separate from Git.
