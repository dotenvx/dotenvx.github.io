---
doc_type: cli
title: url
description: Validate url values.
permalink: "/docs/dotenv-toml/type/url/"
eyebrow: Types
eyebrow_href: "/docs/dotenv-toml/type/"
command: '[env.DATABASE_URL]'
command_prompt: false
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenv-toml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenv-toml/spec/"
---
A URL with a scheme, including database URLs such as `postgres://localhost/app`.

```toml
[env.DATABASE_URL]
type = "url"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage = "encrypted"` and `redacted = true` for secrets.
