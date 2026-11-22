---
doc_type: cli
title: Minimum
description: Set an inclusive lower bound for numeric values.
permalink: "/docs/dotenvtoml/min/"
eyebrow: Dotenv.toml
eyebrow_href: "/docs/dotenvtoml/"
command: '[env.WORKERS]'
command_prompt: false
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenvtoml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenvtoml/spec/"
---
`min` and `max` are inclusive numeric bounds for `type = "integer"` or `type = "port"`, and length bounds for `type = "string"`. The minimum cannot exceed the maximum. Port bounds are clamped to `0`–`65535`.

```toml
[env.WORKERS]
type = "integer"
min = 1
```

There is no default lower bound for integers. Ports have a minimum of `0` and a maximum of `65535`.
