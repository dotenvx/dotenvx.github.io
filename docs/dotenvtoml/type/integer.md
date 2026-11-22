---
doc_type: cli
title: integer
description: Validate integer values.
permalink: "/docs/dotenvtoml/type/integer/"
eyebrow: Types
eyebrow_href: "/docs/dotenvtoml/type/"
command: '[env.WORKERS]'
command_prompt: false
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenvtoml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenvtoml/spec/"
---
A signed or unsigned whole number, such as `42` or `-1`.

```toml
[env.WORKERS]
type = "integer"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage = "encrypted"` and `redacted = true` for secrets.

Use [`min`](/docs/dotenvtoml/min/) and [`max`](/docs/dotenvtoml/max/) to narrow the allowed range.
