---
layout: docs-cli
title: integer
description: Validate integer values.
permalink: "/docs/envfile/type/integer/"
eyebrow: Types
eyebrow_href: "/docs/envfile/type/"
command: 'env "WORKERS", type: "integer"'
command_prompt: false
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
A signed or unsigned whole number, such as `42` or `-1`.

```ruby
env "WORKERS", type: "integer"
```

Validation leaves the value as a string. Encryption and redaction remain enabled by default; add `encrypted: false` to permit plaintext and `redacted: false` to permit output visibility.

Use [`min`](/docs/envfile/min/) and [`max`](/docs/envfile/max/) to narrow the allowed range.
