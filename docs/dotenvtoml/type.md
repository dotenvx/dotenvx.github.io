---
doc_type: cli
title: Types
description: Validate values before your app starts.
permalink: "/docs/dotenvtoml/type/"
eyebrow: Dotenv.toml
eyebrow_href: "/docs/dotenvtoml/"
command: '[env.PORT]'
command_prompt: false
options_title: Types
options:
- title: integer
  href: "/docs/dotenvtoml/type/integer/"
- title: boolean
  href: "/docs/dotenvtoml/type/boolean/"
- title: port
  href: "/docs/dotenvtoml/type/port/"
- title: url
  href: "/docs/dotenvtoml/type/url/"
- title: email
  href: "/docs/dotenvtoml/type/email/"
- title: ip
  href: "/docs/dotenvtoml/type/ip/"
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenvtoml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenvtoml/spec/"
---
Types validate environment values, which remain strings. The default type is `"string"`.

```toml
[env.PORT]
type = "port"
storage = "plaintext"

[env.DATABASE_URL]
type = "url"
```

Choose a type below. Numeric types also support inclusive [`min`](/docs/dotenvtoml/min/) and [`max`](/docs/dotenvtoml/max/) bounds.
