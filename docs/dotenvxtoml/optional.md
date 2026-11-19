---
layout: docs-cli
title: Optional
description: Allow a variable to be missing or blank.
permalink: "/docs/dotenvxtoml/optional/"
eyebrow: Dotenvx.toml
eyebrow_href: "/docs/dotenvxtoml/"
command: '[env.SENTRY_DSN]'
command_prompt: false
related:
- title: Dotenvx.toml Quickstart
  href: "/docs/dotenvxtoml/quickstart/"
- title: Full Dotenvx.toml Spec
  href: "/docs/dotenvxtoml/spec/"
---
`required = true` requires a value that is present and not blank. `optional = true` allows missing or blank values. When an optional value is supplied, its other rules still apply.

Use either `required` or `optional` in a declaration, never both. `optional = false` is equivalent to `required = true`.

```toml
[env.SENTRY_DSN]
optional = true
```

The default is `optional = true`, unless a root or file-level `required` setting overrides it.
