---
title: load
description: Populate ENV and return the values that changed.
permalink: "/docs/sdk/ruby/load/"
doc_type: sdk
command: Dotenvx.load(*filenames, **options)
command_language: ruby
eyebrow: Ruby
eyebrow_href: "/docs/sdk/ruby/"
---

Existing values win by default. Accepts multiple filenames, including arrays. Installs stdout redaction for secrets marked by policy.

```ruby
require "dotenvx"
changed = Dotenvx.load(".env.production", ".env", strict: true)
```

Keyword options for load and parse are overwrite, ignore (diagnostic codes), strict, convention, environment, key_files, and resolve_references. References are opt-in.
