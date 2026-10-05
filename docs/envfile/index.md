---
layout: docs-cli
title: Envfile
description: Define the rules for your environment variables.
permalink: "/docs/envfile/"
eyebrow: Advanced
eyebrow_href: "/docs/advanced/"
command: Envfile
command_prompt: false
options_title: Reference
options:
- title: Declarations
  href: "/docs/envfile/env/"
- title: Strictness
  href: "/docs/envfile/strict/"
- title: Required
  href: "/docs/envfile/required/"
- title: Optional
  href: "/docs/envfile/optional/"
- title: Types
  href: "/docs/envfile/type/"
- title: Choices
  href: "/docs/envfile/enum/"
- title: Minimum
  href: "/docs/envfile/min/"
- title: Maximum
  href: "/docs/envfile/max/"
- title: Encryption
  href: "/docs/envfile/encrypted/"
- title: Redaction
  href: "/docs/envfile/redacted/"
- title: Proxy
  href: "/docs/envfile/proxy/"
- title: File overrides
  href: "/docs/envfile/file/"
- title: Syntax
  href: "/docs/envfile/syntax/"
- title: Commands
  href: "/docs/envfile/commands/"
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
An Envfile contains variable names and rules. Values stay in your `.env` files or other environment sources. It is safe to commit.

Start with the [Envfile quickstart](/docs/quickstart/envfile/), then explore each declaration and setting below.

```ruby
strict true

env "DATABASE_URL", type: "url"
env "PORT", type: "port", encrypted: false, redacted: false
```
