---
doc_type: cli
title: email
description: Validate email values.
permalink: "/docs/dotenvxtoml/type/email/"
eyebrow: Types
eyebrow_href: "/docs/dotenvxtoml/type/"
command: '[env.CONTACT_EMAIL]'
command_prompt: false
related:
- title: Dotenvx.toml Quickstart
  href: "/docs/dotenvxtoml/quickstart/"
- title: Full Dotenvx.toml Spec
  href: "/docs/dotenvxtoml/spec/"
---
An email address with a valid local part and DNS-style domain.

```toml
[env.CONTACT_EMAIL]
type = "email"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage = "encrypted"` and `redacted = true` for secrets.
