---
doc_type: cli
title: email
description: Validate email values.
permalink: "/docs/dotenv-toml/type/email/"
eyebrow: Types
eyebrow_href: "/docs/dotenv-toml/type/"
command: '[env.CONTACT_EMAIL]'
command_prompt: false
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenv-toml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenv-toml/spec/"
---
An email address with a valid local part and DNS-style domain.

```toml
[env.CONTACT_EMAIL]
type = "email"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage = "encrypted"` and `redacted = true` for secrets.
