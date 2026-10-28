---
layout: docs-cli
title: port
description: Validate port values.
permalink: "/docs/dotenvxfile/type/port/"
redirect_from:
  - /docs/envfile/type/port
  - /docs/envfile/type/port/
eyebrow: Types
eyebrow_href: "/docs/dotenvxfile/type/"
command: 'env "PORT", type: "port"'
command_prompt: false
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
An integer from `0` through `65535`.

```ruby
env "PORT", type: "port"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage: "encrypted"` and `redacted: true` for secrets.

Use [`min`](/docs/dotenvxfile/min/) and [`max`](/docs/dotenvxfile/max/) to narrow the allowed range.
