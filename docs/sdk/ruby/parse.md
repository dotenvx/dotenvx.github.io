---
title: parse
description: Resolve files without changing ENV.
permalink: "/docs/sdk/ruby/parse/"
doc_type: sdk
command: Dotenvx.parse(*filenames, **options)
command_language: ruby
eyebrow: Ruby
eyebrow_href: "/docs/sdk/ruby/"
---

Returns a hash of values. Unlike Node parse, this function accepts filenames, not inline env text.

```ruby
require "dotenvx"
values = Dotenvx.parse(".env.production", strict: true)
```

Keyword options for load and parse are overwrite, ignore (diagnostic codes), strict, convention, environment, key_files, and resolve_references. References are opt-in.
