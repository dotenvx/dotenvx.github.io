---
layout: docs-cli
title: integer
description: Validate integer values.
permalink: "/docs/dotenvxtoml/type/integer/"
eyebrow: Types
eyebrow_href: "/docs/dotenvxtoml/type/"
command: '[env.WORKERS]'
command_prompt: false
related:
- title: Dotenvx.toml Quickstart
  href: "/docs/dotenvxtoml/quickstart/"
- title: Full Dotenvx.toml Spec
  href: "/docs/dotenvxtoml/spec/"
---
A signed or unsigned whole number, such as `42` or `-1`.

```toml
[env.WORKERS]
type = "integer"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage = "encrypted"` and `redacted = true` for secrets.

Use [`min`](/docs/dotenvxtoml/min/) and [`max`](/docs/dotenvxtoml/max/) to narrow the allowed range.
