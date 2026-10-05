---
layout: docs-cli
title: ip
description: Validate ip values.
permalink: "/docs/envfile/type/ip/"
eyebrow: Types
eyebrow_href: "/docs/envfile/type/"
command: 'env "HOST_IP", type: "ip"'
command_prompt: false
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
An IPv4 or IPv6 address.

```ruby
env "HOST_IP", type: "ip"
```

Validation leaves the value as a string. Encryption and redaction remain enabled by default; add `encrypted: false` to permit plaintext and `redacted: false` to permit output visibility.
