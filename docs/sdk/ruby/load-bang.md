---
title: load!
description: Load strictly and fail when an env file is missing.
permalink: "/docs/sdk/ruby/load-bang/"
doc_type: sdk
command: Dotenvx.load!(*filenames)
command_language: ruby
eyebrow: Ruby
eyebrow_href: "/docs/sdk/ruby/"
---

Equivalent to load(*filenames, ignore: false, strict: true). Missing files raise Errno::ENOENT; other strict diagnostics raise Dotenvx::ParseError, whose code is available as error.code. Returns changed values.

```ruby
require "dotenvx"
changed = Dotenvx.load!(".env.production")
```
