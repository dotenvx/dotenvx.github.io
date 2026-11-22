---
doc_type: cli
title: Types
description: Validate values before your app starts.
permalink: "/docs/dotenv-toml/type/"
eyebrow: Dotenv.toml
eyebrow_href: "/docs/dotenv-toml/"
command: '[env.PORT]'
command_prompt: false
options_title: Types
options:
- title: integer
  href: "/docs/dotenv-toml/type/integer/"
- title: boolean
  href: "/docs/dotenv-toml/type/boolean/"
- title: port
  href: "/docs/dotenv-toml/type/port/"
- title: url
  href: "/docs/dotenv-toml/type/url/"
- title: email
  href: "/docs/dotenv-toml/type/email/"
- title: ip
  href: "/docs/dotenv-toml/type/ip/"
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenv-toml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenv-toml/spec/"
---
Types validate environment values, which remain strings. The default type is `"string"`.

```toml
[env.PORT]
type = "port"
storage = "plaintext"

[env.DATABASE_URL]
type = "url"
```

Choose a type below. Numeric types also support inclusive [`min`](/docs/dotenv-toml/min/) and [`max`](/docs/dotenv-toml/max/) bounds.
