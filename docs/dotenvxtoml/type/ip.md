---
doc_type: cli
title: ip
description: Validate ip values.
permalink: "/docs/dotenvxtoml/type/ip/"
eyebrow: Types
eyebrow_href: "/docs/dotenvxtoml/type/"
command: '[env.HOST_IP]'
command_prompt: false
related:
- title: Dotenvx.toml Quickstart
  href: "/docs/dotenvxtoml/quickstart/"
- title: Full Dotenvx.toml Spec
  href: "/docs/dotenvxtoml/spec/"
---
An IPv4 or IPv6 address.

```toml
[env.HOST_IP]
type = "ip"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage = "encrypted"` and `redacted = true` for secrets.
