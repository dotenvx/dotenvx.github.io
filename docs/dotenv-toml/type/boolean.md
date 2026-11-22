---
doc_type: cli
title: boolean
description: Validate boolean values.
permalink: "/docs/dotenv-toml/type/boolean/"
eyebrow: Types
eyebrow_href: "/docs/dotenv-toml/type/"
command: '[env.FEATURE_ENABLED]'
command_prompt: false
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenv-toml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenv-toml/spec/"
---
Exactly `true`, `false`, `1`, or `0`.

```toml
[env.FEATURE_ENABLED]
type = "boolean"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage = "encrypted"` and `redacted = true` for secrets.
