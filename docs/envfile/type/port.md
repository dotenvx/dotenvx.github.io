---
layout: docs-cli
title: port
description: Validate port values.
permalink: "/docs/envfile/type/port/"
eyebrow: Types
eyebrow_href: "/docs/envfile/type/"
command: 'env "PORT", type: "port"'
command_prompt: false
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
An integer from `0` through `65535`.

```ruby
env "PORT", type: "port"
```

Validation leaves the value as a string. Encryption and redaction remain enabled by default; add `encrypted: false` to permit plaintext and `redacted: false` to permit output visibility.

Use [`min`](/docs/envfile/min/) and [`max`](/docs/envfile/max/) to narrow the allowed range.
