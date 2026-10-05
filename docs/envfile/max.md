---
layout: docs-cli
title: Maximum
description: Set an inclusive upper bound for numeric values.
permalink: "/docs/envfile/max/"
eyebrow: Envfile
eyebrow_href: "/docs/envfile/"
command: 'env "WORKERS", type: "integer", max: 32'
command_prompt: false
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
`min` and `max` are inclusive integer bounds. They require `type: "integer"` or `type: "port"`. The minimum cannot exceed the maximum. Port bounds are clamped to `0`–`65535`.

```ruby
env "WORKERS", type: "integer", max: 32
```

There is no default upper bound for integers. Ports have a minimum of `0` and a maximum of `65535`.
