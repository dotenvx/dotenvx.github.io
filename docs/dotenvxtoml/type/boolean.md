---
doc_type: cli
title: boolean
description: Validate boolean values.
permalink: "/docs/dotenvxtoml/type/boolean/"
eyebrow: Types
eyebrow_href: "/docs/dotenvxtoml/type/"
command: '[env.FEATURE_ENABLED]'
command_prompt: false
related:
- title: Dotenvx.toml Quickstart
  href: "/docs/dotenvxtoml/quickstart/"
- title: Full Dotenvx.toml Spec
  href: "/docs/dotenvxtoml/spec/"
---
Exactly `true`, `false`, `1`, or `0`.

```toml
[env.FEATURE_ENABLED]
type = "boolean"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage = "encrypted"` and `redacted = true` for secrets.
