---
layout: docs-cli
title: Choices
description: Restrict values to a list of allowed choices.
permalink: "/docs/envfile/enum/"
eyebrow: Envfile
eyebrow_href: "/docs/envfile/"
command: 'env "NODE_ENV", enum: ["development", "test", "production"]'
command_prompt: false
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
`enum` is a nonempty array of quoted strings or integers. Values must match one of the choices. With an integer or port type, choices compare numerically; other choices compare exactly. When combined with a type, every choice must satisfy that type.

Enum strings support escaped quotes, backslashes, and `\n`, `\r`, and `\t`. Arrays and proxy objects may have a trailing comma. A declaration cannot end with a trailing comma.

```ruby
env "NODE_ENV", enum: ["development", "test", "production"]
```

No choices are imposed by default.
