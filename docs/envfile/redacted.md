---
layout: docs-cli
title: Redaction
description: Keep secret values out of terminal output.
permalink: "/docs/envfile/redacted/"
eyebrow: Envfile
eyebrow_href: "/docs/envfile/"
command: 'env "API_KEY", redacted: true'
command_prompt: false
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
`redacted: true` is the default. Your app receives the real value while terminal output shows `[REDACTED]`. Use `redacted: false` for values that may be visible. `redact` is an alias.

```ruby
env "DATABASE_URL", redacted: true
env "PORT", type: "port", encrypted: false, redacted: false
```

Encryption and redaction are independent rules. Allowing visible output does not permit plaintext storage. A redaction requirement from any active file policy takes precedence over an allowance to display a value.
