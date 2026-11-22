---
doc_type: cli
title: Choices
description: Restrict values to a list of allowed choices.
permalink: "/docs/dotenvtoml/enum/"
eyebrow: Dotenv.toml
eyebrow_href: "/docs/dotenvtoml/"
command: '[env.NODE_ENV]'
command_prompt: false
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenvtoml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenvtoml/spec/"
---
`enum` is a nonempty array of quoted strings or integers. Values must match one of the choices. Integer and port choices compare numerically. Other choices compare exactly. When combined with a type, every choice must satisfy that type.

Use TOML array syntax for choices. A multiline array can end with a trailing comma.

```toml
[env.NODE_ENV]
enum = ["development", "test", "production"]
```

No choices are imposed by default.
