---
layout: docs-cli
title: Dotenvx.toml
description: Define the rules for your environment variables.
permalink: "/docs/dotenvxtoml/"
eyebrow: Advanced
eyebrow_href: "/docs/advanced/"
command: Dotenvx.toml
command_prompt: false
options_title: Reference
options:
- title: Declarations
  href: "/docs/dotenvxtoml/env/"
- title: Strictness
  href: "/docs/dotenvxtoml/strict/"
- title: Required
  href: "/docs/dotenvxtoml/required/"
- title: Optional
  href: "/docs/dotenvxtoml/optional/"
- title: Types
  href: "/docs/dotenvxtoml/type/"
- title: Choices
  href: "/docs/dotenvxtoml/enum/"
- title: Minimum
  href: "/docs/dotenvxtoml/min/"
- title: Maximum
  href: "/docs/dotenvxtoml/max/"
- title: Encryption
  href: "/docs/dotenvxtoml/encrypted/"
- title: Redaction
  href: "/docs/dotenvxtoml/redacted/"
- title: File overrides
  href: "/docs/dotenvxtoml/file/"
- title: Syntax
  href: "/docs/dotenvxtoml/syntax/"
- title: Commands
  href: "/docs/dotenvxtoml/commands/"
related:
- title: Dotenvx.toml Quickstart
  href: "/docs/dotenvxtoml/quickstart/"
- title: Full Dotenvx.toml Spec
  href: "/docs/dotenvxtoml/spec/"
---
A Dotenvx.toml contains variable names and rules. Values stay in your `.env` files or other environment sources. It is safe to commit.

Start with the [Dotenvx.toml quickstart](/docs/dotenvxtoml/quickstart/), then explore each declaration and setting below.

```toml
strict = true

[env.DATABASE_URL]
type = "url"
required = true
storage = "encrypted"
redacted = true

[env.PORT]
type = "port"
storage = "plaintext"
redacted = false
```
