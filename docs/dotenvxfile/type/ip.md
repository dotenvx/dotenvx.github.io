---
layout: docs-cli
title: ip
description: Validate ip values.
permalink: "/docs/dotenvxfile/type/ip/"
redirect_from:
  - /docs/envfile/type/ip
  - /docs/envfile/type/ip/
eyebrow: Types
eyebrow_href: "/docs/dotenvxfile/type/"
command: 'env "HOST_IP", type: "ip"'
command_prompt: false
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
An IPv4 or IPv6 address.

```ruby
env "HOST_IP", type: "ip"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage: "encrypted"` and `redacted: true` for secrets.
