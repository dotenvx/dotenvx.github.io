---
layout: docs-cli
title: Minimum
description: Set an inclusive lower bound for numeric values.
permalink: "/docs/dotenvxfile/min/"
redirect_from:
  - /docs/envfile/min
  - /docs/envfile/min/
eyebrow: Dotenvxfile
eyebrow_href: "/docs/dotenvxfile/"
command: 'env "WORKERS", type: "integer", min: 1'
command_prompt: false
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
`min` and `max` are inclusive numeric bounds for `type: "integer"` or `type: "port"`, and length bounds for `type: "string"`. The minimum cannot exceed the maximum. Port bounds are clamped to `0`–`65535`.

```ruby
env "WORKERS", type: "integer", min: 1
```

There is no default lower bound for integers. Ports have a minimum of `0` and a maximum of `65535`.
