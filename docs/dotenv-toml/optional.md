---
doc_type: cli
title: Optional
description: Allow a variable to be missing or blank.
permalink: "/docs/dotenv-toml/optional/"
eyebrow: Dotenv.toml
eyebrow_href: "/docs/dotenv-toml/"
command: '[env.SENTRY_DSN]'
command_prompt: false
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenv-toml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenv-toml/spec/"
---
`required = true` requires a value that is present and not blank. `optional = true` allows missing or blank values. When an optional value is supplied, its other rules still apply.

Use either `required` or `optional` in a declaration, never both. `optional = false` is equivalent to `required = true`.

```toml
[env.SENTRY_DSN]
optional = true
```

The default is `optional = true`, unless a root or file-level `required` setting overrides it.
