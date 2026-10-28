---
layout: docs-cli
title: Dotenvxfile
description: Define the rules for your environment variables.
permalink: "/docs/dotenvxfile/"
redirect_from:
  - /docs/envfile
  - /docs/envfile/
eyebrow: Advanced
eyebrow_href: "/docs/advanced/"
command: Dotenvxfile
command_prompt: false
options_title: Reference
options:
- title: Declarations
  href: "/docs/dotenvxfile/env/"
- title: Strictness
  href: "/docs/dotenvxfile/strict/"
- title: Required
  href: "/docs/dotenvxfile/required/"
- title: Optional
  href: "/docs/dotenvxfile/optional/"
- title: Types
  href: "/docs/dotenvxfile/type/"
- title: Choices
  href: "/docs/dotenvxfile/enum/"
- title: Minimum
  href: "/docs/dotenvxfile/min/"
- title: Maximum
  href: "/docs/dotenvxfile/max/"
- title: Encryption
  href: "/docs/dotenvxfile/encrypted/"
- title: Redaction
  href: "/docs/dotenvxfile/redacted/"
- title: File overrides
  href: "/docs/dotenvxfile/file/"
- title: Syntax
  href: "/docs/dotenvxfile/syntax/"
- title: Commands
  href: "/docs/dotenvxfile/commands/"
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
A Dotenvxfile contains variable names and rules. Values stay in your `.env` files or other environment sources. It is safe to commit.

Start with the [Dotenvxfile quickstart](/docs/quickstart/dotenvxfile/), then explore each declaration and setting below.

```ruby
strict true

env "DATABASE_URL", type: "url", required: true, storage: "encrypted", redacted: true
env "PORT", type: "port", storage: "plaintext", redacted: false
```
