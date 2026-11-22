---
doc_type: cli
title: Required
description: Require a value that is present and not blank.
permalink: "/docs/dotenvtoml/required/"
eyebrow: Dotenv.toml
eyebrow_href: "/docs/dotenvtoml/"
command: '[env.API_KEY]'
command_prompt: false
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenvtoml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenvtoml/spec/"
---
Variables are optional by default. Set `required = true` at the root to require nonblank values for all declarations by default.

```toml
strict = true

[env.API_KEY]
required = true
```

Use either `required` or [`optional`](/docs/dotenvtoml/optional/) in a declaration, never both. `optional = false` is equivalent to `required = true`.
