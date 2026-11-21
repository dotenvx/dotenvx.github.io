---
doc_type: cli
title: Syntax
description: Understand valid declarations and syntax errors.
permalink: "/docs/dotenvxtoml/syntax/"
eyebrow: Dotenvx.toml
eyebrow_href: "/docs/dotenvxtoml/"
command: '[env.KEY]'
command_prompt: false
related:
- title: Dotenvx.toml Quickstart
  href: "/docs/dotenvxtoml/quickstart/"
- title: Full Dotenvx.toml Spec
  href: "/docs/dotenvxtoml/spec/"
---
Use ordinary TOML tables and assignments for rules. Put global settings before the first table, then declare variable rules in `[env.NAME]` tables.

```toml
strict = true

[env.API_KEY]
required = true
storage = "encrypted"
```

Keep values in your environment sources. Duplicate tables or keys, unknown settings, and duplicate normalized file paths report `MALFORMED_DOTENVX_TOML`. A failed value check reports `INVALID_ENV`.
