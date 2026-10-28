---
layout: docs-cli
title: integer
description: Validate integer values.
permalink: "/docs/dotenvxfile/type/integer/"
redirect_from:
  - /docs/envfile/type/integer
  - /docs/envfile/type/integer/
eyebrow: Types
eyebrow_href: "/docs/dotenvxfile/type/"
command: 'env "WORKERS", type: "integer"'
command_prompt: false
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
A signed or unsigned whole number, such as `42` or `-1`.

```ruby
env "WORKERS", type: "integer"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage: "encrypted"` and `redacted: true` for secrets.

Use [`min`](/docs/dotenvxfile/min/) and [`max`](/docs/dotenvxfile/max/) to narrow the allowed range.
