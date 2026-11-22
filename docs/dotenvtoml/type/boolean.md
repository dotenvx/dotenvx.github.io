---
doc_type: cli
title: boolean
description: Validate boolean values.
permalink: "/docs/dotenvtoml/type/boolean/"
eyebrow: Types
eyebrow_href: "/docs/dotenvtoml/type/"
command: '[env.FEATURE_ENABLED]'
command_prompt: false
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenvtoml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenvtoml/spec/"
---
Exactly `true`, `false`, `1`, or `0`.

```toml
[env.FEATURE_ENABLED]
type = "boolean"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage = "encrypted"` and `redacted = true` for secrets.
