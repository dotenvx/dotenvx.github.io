---
doc_type: cli
title: ip
description: Validate ip values.
permalink: "/docs/dotenv-toml/type/ip/"
eyebrow: Types
eyebrow_href: "/docs/dotenv-toml/type/"
command: '[env.HOST_IP]'
command_prompt: false
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenv-toml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenv-toml/spec/"
---
An IPv4 or IPv6 address.

```toml
[env.HOST_IP]
type = "ip"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage = "encrypted"` and `redacted = true` for secrets.
