---
title: overwrite!
description: Overwrite ENV using strict loading.
permalink: "/docs/sdk/ruby/overwrite-bang/"
doc_type: sdk
command: Dotenvx.overwrite!(*filenames)
command_language: ruby
eyebrow: Ruby
eyebrow_href: "/docs/sdk/ruby/"
---

overload! is an alias. Equivalent to load with overwrite: true, ignore: false, strict: true.

```ruby
require "dotenvx"
changed = Dotenvx.overwrite!(".env.production")
```
