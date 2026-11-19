---
layout: docs-cli
title: Choices
description: Restrict values to a list of allowed choices.
permalink: "/docs/dotenvxtoml/enum/"
eyebrow: Dotenvx.toml
eyebrow_href: "/docs/dotenvxtoml/"
command: '[env.NODE_ENV]'
command_prompt: false
related:
- title: Dotenvx.toml Quickstart
  href: "/docs/dotenvxtoml/quickstart/"
- title: Full Dotenvx.toml Spec
  href: "/docs/dotenvxtoml/spec/"
---
`enum` is a nonempty array of quoted strings or integers. Values must match one of the choices. Integer and port choices compare numerically. Other choices compare exactly. When combined with a type, every choice must satisfy that type.

Use TOML array syntax for choices. A multiline array can end with a trailing comma.

```toml
[env.NODE_ENV]
enum = ["development", "test", "production"]
```

No choices are imposed by default.
