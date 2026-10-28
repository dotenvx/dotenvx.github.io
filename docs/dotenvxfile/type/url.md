---
layout: docs-cli
title: url
description: Validate url values.
permalink: "/docs/dotenvxfile/type/url/"
redirect_from:
  - /docs/envfile/type/url
  - /docs/envfile/type/url/
eyebrow: Types
eyebrow_href: "/docs/dotenvxfile/type/"
command: 'env "DATABASE_URL", type: "url"'
command_prompt: false
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
A URL with a scheme, including database URLs such as `postgres://localhost/app`.

```ruby
env "DATABASE_URL", type: "url"
```

Validation leaves the value as a string. Storage defaults to `"any"` and redaction is off. Set `storage: "encrypted"` and `redacted: true` for secrets.
