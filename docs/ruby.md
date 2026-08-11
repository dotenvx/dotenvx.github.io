---
layout: docs-quickstart
title: "Ruby"
social_title: "Encrypt a .env file in Ruby"
description: "Encrypt a .env file in Ruby with dotenvx, commit it safely, and inject its secrets at runtime."
icon: ruby
permalink: /docs/ruby/
redirect_from:
  - /docs/languages/ruby
  - /docs/languages/ruby/
  - /docs/secrets-in-ruby/
  - /docs/secrets-in-ruby
install_copy: "curl -sfS https://dotenvx.sh | sh"
encrypt_copy: "dotenvx encrypt"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt: |
  $ dotenvx encrypt
inject_lede: |
  Then inject your encrypted secrets at runtime with `dotenvx run`.
inject_copy: |
  puts "HELLO: #{ENV['HELLO']}"
inject: |
  puts "HELLO: #{ENV['HELLO']}"
inject_after_copy: |
  dotenvx run -- ruby index.rb
inject_after: |
  $ dotenvx run -- ruby index.rb
---

