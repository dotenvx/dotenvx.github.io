---
doc_type: cli
title: Syntax
description: Understand valid declarations and syntax errors.
permalink: "/docs/dotenv-toml/syntax/"
eyebrow: Dotenv.toml
eyebrow_href: "/docs/dotenv-toml/"
command: '[env.KEY]'
command_prompt: false
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenv-toml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenv-toml/spec/"
---
Use ordinary TOML tables and assignments for rules. Put global settings before the first table, then declare variable rules in `[env.NAME]` tables.

```toml
strict = true

[env.API_KEY]
required = true
storage = "encrypted"
```

Keep values in your environment sources. Duplicate tables or keys, unknown settings, and duplicate normalized file paths report `MALFORMED_DOTENVX_TOML`. A failed value check reports `INVALID_ENV`.
