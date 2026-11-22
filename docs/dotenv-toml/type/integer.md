---
doc_type: cli
title: integer
description: Validate integer values.
permalink: "/docs/dotenv-toml/type/integer/"
eyebrow: Types
eyebrow_href: "/docs/dotenv-toml/type/"
command: '[env.WORKERS]'
command_prompt: false
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenv-toml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenv-toml/spec/"
---
A signed or unsigned whole number, such as `42` or `-1`.

```toml
[env.WORKERS]
type = "integer"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage = "encrypted"` and `redacted = true` for secrets.

Use [`min`](/docs/dotenv-toml/min/) and [`max`](/docs/dotenv-toml/max/) to narrow the allowed range.
