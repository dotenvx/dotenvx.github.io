---
layout: docs-cli
title: boolean
description: Validate boolean values.
permalink: "/docs/dotenvxfile/type/boolean/"
redirect_from:
  - /docs/envfile/type/boolean
  - /docs/envfile/type/boolean/
eyebrow: Types
eyebrow_href: "/docs/dotenvxfile/type/"
command: 'env "FEATURE_ENABLED", type: "boolean"'
command_prompt: false
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
Exactly `true`, `false`, `1`, or `0`.

```ruby
env "FEATURE_ENABLED", type: "boolean"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage: "encrypted"` and `redacted: true` for secrets.
