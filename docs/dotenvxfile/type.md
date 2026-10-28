---
layout: docs-cli
title: Types
description: Validate values before your app starts.
permalink: "/docs/dotenvxfile/type/"
redirect_from:
  - /docs/envfile/type
  - /docs/envfile/type/
eyebrow: Dotenvxfile
eyebrow_href: "/docs/dotenvxfile/"
command: 'env "PORT", type: "port", storage: "plaintext"'
command_prompt: false
options_title: Types
options:
- title: integer
  href: "/docs/dotenvxfile/type/integer/"
- title: boolean
  href: "/docs/dotenvxfile/type/boolean/"
- title: port
  href: "/docs/dotenvxfile/type/port/"
- title: url
  href: "/docs/dotenvxfile/type/url/"
- title: email
  href: "/docs/dotenvxfile/type/email/"
- title: ip
  href: "/docs/dotenvxfile/type/ip/"
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
All environment values remain strings. Types validate them; they do not convert them. The default type is `"string"`.

```ruby
env "PORT", type: "port", storage: "plaintext"
env "DATABASE_URL", type: "url"
```

Choose a type below. Numeric types also support inclusive [`min`](/docs/dotenvxfile/min/) and [`max`](/docs/dotenvxfile/max/) bounds.
