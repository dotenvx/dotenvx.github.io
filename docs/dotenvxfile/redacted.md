---
layout: docs-cli
title: Redaction
description: Keep secret values out of terminal output.
permalink: "/docs/dotenvxfile/redacted/"
redirect_from:
  - /docs/envfile/redacted
  - /docs/envfile/redacted/
eyebrow: Dotenvxfile
eyebrow_href: "/docs/dotenvxfile/"
command: 'env "API_KEY", redacted: true'
command_prompt: false
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
`redacted: true` marks a value for output redaction. Your app receives the real value while matching terminal output shows `[REDACTED]`. Redaction is off by default. `redact` is an alias.

```ruby
env "DATABASE_URL", required: true, redacted: true
env "PORT", type: "port", storage: "plaintext", redacted: false
```

Set `redacted true` at the root to apply redaction by default. An individual declaration can override that setting. Dotenvx applies these rules when running your app; no separate redaction flag is needed.

Storage and redaction are independent: permitting plaintext storage does not turn redaction on or off.
