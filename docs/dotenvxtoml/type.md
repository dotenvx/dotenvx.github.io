---
doc_type: cli
title: Types
description: Validate values before your app starts.
permalink: "/docs/dotenvxtoml/type/"
eyebrow: Dotenvx.toml
eyebrow_href: "/docs/dotenvxtoml/"
command: '[env.PORT]'
command_prompt: false
options_title: Types
options:
- title: integer
  href: "/docs/dotenvxtoml/type/integer/"
- title: boolean
  href: "/docs/dotenvxtoml/type/boolean/"
- title: port
  href: "/docs/dotenvxtoml/type/port/"
- title: url
  href: "/docs/dotenvxtoml/type/url/"
- title: email
  href: "/docs/dotenvxtoml/type/email/"
- title: ip
  href: "/docs/dotenvxtoml/type/ip/"
related:
- title: Dotenvx.toml Quickstart
  href: "/docs/dotenvxtoml/quickstart/"
- title: Full Dotenvx.toml Spec
  href: "/docs/dotenvxtoml/spec/"
---
Types validate environment values, which remain strings. The default type is `"string"`.

```toml
[env.PORT]
type = "port"
storage = "plaintext"

[env.DATABASE_URL]
type = "url"
```

Choose a type below. Numeric types also support inclusive [`min`](/docs/dotenvxtoml/min/) and [`max`](/docs/dotenvxtoml/max/) bounds.
