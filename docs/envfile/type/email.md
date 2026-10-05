---
layout: docs-cli
title: email
description: Validate email values.
permalink: "/docs/envfile/type/email/"
eyebrow: Types
eyebrow_href: "/docs/envfile/type/"
command: 'env "CONTACT_EMAIL", type: "email"'
command_prompt: false
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
An email address with a valid local part and DNS-style domain.

```ruby
env "CONTACT_EMAIL", type: "email"
```

Validation leaves the value as a string. Encryption and redaction remain enabled by default; add `encrypted: false` to permit plaintext and `redacted: false` to permit output visibility.
