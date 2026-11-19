---
layout: docs-cli
title: url
description: Validate url values.
permalink: "/docs/dotenvxtoml/type/url/"
eyebrow: Types
eyebrow_href: "/docs/dotenvxtoml/type/"
command: '[env.DATABASE_URL]'
command_prompt: false
related:
- title: Dotenvx.toml Quickstart
  href: "/docs/dotenvxtoml/quickstart/"
- title: Full Dotenvx.toml Spec
  href: "/docs/dotenvxtoml/spec/"
---
A URL with a scheme, including database URLs such as `postgres://localhost/app`.

```toml
[env.DATABASE_URL]
type = "url"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage = "encrypted"` and `redacted = true` for secrets.
