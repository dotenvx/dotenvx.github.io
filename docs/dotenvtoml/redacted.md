---
doc_type: cli
title: Redaction
description: Keep secret values out of terminal output.
permalink: "/docs/dotenvtoml/redacted/"
eyebrow: Dotenv.toml
eyebrow_href: "/docs/dotenvtoml/"
command: '[env.API_KEY]'
command_prompt: false
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenvtoml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenvtoml/spec/"
---
`redacted = true` marks a value for output redaction. Your app receives the real value while matching terminal output shows `[REDACTED]`. Redaction is off by default. `redact` is an alias.

```toml
[env.DATABASE_URL]
required = true
redacted = true

[env.PORT]
type = "port"
storage = "plaintext"
redacted = false
```

Set `redacted = true` at the root to apply redaction by default. A variable table can override that setting. Dotenvx applies the rules when running your app.

Configure storage and redaction independently.
