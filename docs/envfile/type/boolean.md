---
layout: docs-cli
title: boolean
description: Validate boolean values.
permalink: "/docs/envfile/type/boolean/"
eyebrow: Types
eyebrow_href: "/docs/envfile/type/"
command: 'env "FEATURE_ENABLED", type: "boolean"'
command_prompt: false
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
Exactly `true`, `false`, `1`, or `0`.

```ruby
env "FEATURE_ENABLED", type: "boolean"
```

Validation leaves the value as a string. Encryption and redaction remain enabled by default; add `encrypted: false` to permit plaintext and `redacted: false` to permit output visibility.
