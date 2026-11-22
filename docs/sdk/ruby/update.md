---
title: update
description: Populate ENV from a hash of values.
permalink: "/docs/sdk/ruby/update/"
doc_type: sdk
command: 'Dotenvx.update(env = {}, overwrite: false)'
command_language: ruby
eyebrow: Ruby
eyebrow_href: "/docs/sdk/ruby/"
---

Stringifies keys and values and returns the changed entries. overwrite defaults to false. true replaces existing values; :warn preserves them and reports a warning. This method does not read files.

```ruby
require "dotenvx"
changed = Dotenvx.update({ "HELLO" => "World" }, overwrite: true)
```
