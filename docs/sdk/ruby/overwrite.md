---
title: overwrite
description: Load while replacing existing ENV values.
permalink: "/docs/sdk/ruby/overwrite/"
doc_type: sdk
command: Dotenvx.overwrite(*filenames)
command_language: ruby
eyebrow: Ruby
eyebrow_href: "/docs/sdk/ruby/"
---

overload is an alias. Returns changed values.

```ruby
require "dotenvx"
changed = Dotenvx.overwrite(".env.production")
# Dotenvx.overload(".env.production") is equivalent.
```
