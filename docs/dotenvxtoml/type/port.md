---
layout: docs-cli
title: port
description: Validate port values.
permalink: "/docs/dotenvxtoml/type/port/"
eyebrow: Types
eyebrow_href: "/docs/dotenvxtoml/type/"
command: '[env.PORT]'
command_prompt: false
related:
- title: Dotenvx.toml Quickstart
  href: "/docs/dotenvxtoml/quickstart/"
- title: Full Dotenvx.toml Spec
  href: "/docs/dotenvxtoml/spec/"
---
An integer from `0` through `65535`.

```toml
[env.PORT]
type = "port"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage = "encrypted"` and `redacted = true` for secrets.

Use [`min`](/docs/dotenvxtoml/min/) and [`max`](/docs/dotenvxtoml/max/) to narrow the allowed range.
