---
doc_type: cli
title: port
description: Validate port values.
permalink: "/docs/dotenvtoml/type/port/"
eyebrow: Types
eyebrow_href: "/docs/dotenvtoml/type/"
command: '[env.PORT]'
command_prompt: false
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenvtoml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenvtoml/spec/"
---
An integer from `0` through `65535`.

```toml
[env.PORT]
type = "port"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage = "encrypted"` and `redacted = true` for secrets.

Use [`min`](/docs/dotenvtoml/min/) and [`max`](/docs/dotenvtoml/max/) to narrow the allowed range.
