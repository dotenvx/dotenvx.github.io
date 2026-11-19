---
layout: docs-cli
title: Required
description: Require a value that is present and not blank.
permalink: "/docs/dotenvxtoml/required/"
eyebrow: Dotenvx.toml
eyebrow_href: "/docs/dotenvxtoml/"
command: '[env.API_KEY]'
command_prompt: false
related:
- title: Dotenvx.toml Quickstart
  href: "/docs/dotenvxtoml/quickstart/"
- title: Full Dotenvx.toml Spec
  href: "/docs/dotenvxtoml/spec/"
---
Variables are optional by default. Set `required = true` at the root to require nonblank values for all declarations by default.

```toml
strict = true

[env.API_KEY]
required = true
```

Use either `required` or [`optional`](/docs/dotenvxtoml/optional/) in a declaration, never both. `optional = false` is equivalent to `required = true`.
