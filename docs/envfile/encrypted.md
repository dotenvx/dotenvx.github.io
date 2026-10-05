---
layout: docs-cli
title: Encryption
description: Require encrypted values in your environment sources.
permalink: "/docs/envfile/encrypted/"
eyebrow: Envfile
eyebrow_href: "/docs/envfile/"
command: 'env "API_KEY", encrypted: true'
command_prompt: false
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
`encrypted: true` is the default. It requires an encrypted source for a nonblank value. Use `encrypted: false` for values that may remain plaintext. `encrypt` is an alias.

```ruby
strict true

env "API_KEY"
env "PORT", type: "port", encrypted: false
```

Declaring a rule does not rewrite your `.env`; run [`dotenvx encrypt`](/docs/cli/encrypt/) to encrypt its values. Encryption and [redaction](/docs/envfile/redacted/) are independent: allowing plaintext does not automatically allow output visibility.

Undeclared loaded variables are not an allowlist violation. They still use the default encryption policy. Dotenvx public-key metadata is exempt from the encryption requirement.
