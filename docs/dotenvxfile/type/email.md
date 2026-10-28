---
layout: docs-cli
title: email
description: Validate email values.
permalink: "/docs/dotenvxfile/type/email/"
redirect_from:
  - /docs/envfile/type/email
  - /docs/envfile/type/email/
eyebrow: Types
eyebrow_href: "/docs/dotenvxfile/type/"
command: 'env "CONTACT_EMAIL", type: "email"'
command_prompt: false
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
An email address with a valid local part and DNS-style domain.

```ruby
env "CONTACT_EMAIL", type: "email"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage: "encrypted"` and `redacted: true` for secrets.
