---
doc_type: cli
title: port
description: Validate port values.
permalink: "/docs/dotenv-toml/type/port/"
eyebrow: Types
eyebrow_href: "/docs/dotenv-toml/type/"
command: '[env.PORT]'
command_prompt: false
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenv-toml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenv-toml/spec/"
---
An integer from `0` through `65535`.

```toml
[env.PORT]
type = "port"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage = "encrypted"` and `redacted = true` for secrets.

Use [`min`](/docs/dotenv-toml/min/) and [`max`](/docs/dotenv-toml/max/) to narrow the allowed range.
