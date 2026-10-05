---
layout: docs-cli
title: Types
description: Validate values before your app starts.
permalink: "/docs/envfile/type/"
eyebrow: Envfile
eyebrow_href: "/docs/envfile/"
command: 'env "PORT", type: "port", encrypted: false'
command_prompt: false
options_title: Types
options:
- title: integer
  href: "/docs/envfile/type/integer/"
- title: boolean
  href: "/docs/envfile/type/boolean/"
- title: port
  href: "/docs/envfile/type/port/"
- title: url
  href: "/docs/envfile/type/url/"
- title: email
  href: "/docs/envfile/type/email/"
- title: ip
  href: "/docs/envfile/type/ip/"
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
All environment values remain strings. Types validate them; they do not convert them. No type is set by default.

```ruby
env "PORT", type: "port", encrypted: false
env "DATABASE_URL", type: "url"
```

Choose a type below. Numeric types also support inclusive [`min`](/docs/envfile/min/) and [`max`](/docs/envfile/max/) bounds.
