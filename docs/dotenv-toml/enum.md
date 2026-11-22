---
doc_type: cli
title: Choices
description: Restrict values to a list of allowed choices.
permalink: "/docs/dotenv-toml/enum/"
eyebrow: Dotenv.toml
eyebrow_href: "/docs/dotenv-toml/"
command: '[env.NODE_ENV]'
command_prompt: false
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenv-toml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenv-toml/spec/"
---
`enum` is a nonempty array of quoted strings or integers. Values must match one of the choices. Integer and port choices compare numerically. Other choices compare exactly. When combined with a type, every choice must satisfy that type.

Use TOML array syntax for choices. A multiline array can end with a trailing comma.

```toml
[env.NODE_ENV]
enum = ["development", "test", "production"]
```

No choices are imposed by default.
