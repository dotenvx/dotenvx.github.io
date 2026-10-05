---
layout: docs-cli
title: url
description: Validate url values.
permalink: "/docs/envfile/type/url/"
eyebrow: Types
eyebrow_href: "/docs/envfile/type/"
command: 'env "DATABASE_URL", type: "url"'
command_prompt: false
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
A URL with a scheme, including database URLs such as `postgres://localhost/app`.

```ruby
env "DATABASE_URL", type: "url"
```

Validation leaves the value as a string. Encryption and redaction remain enabled by default; add `encrypted: false` to permit plaintext and `redacted: false` to permit output visibility.
