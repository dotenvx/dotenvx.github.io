---
layout: docs-quickstart
title: "Ruby"
social_title: "Encrypt a .env file in Ruby"
description: "Encrypt a .env file in Ruby with the Dotenvx gem, commit it safely, and load its secrets at runtime."
icon: ruby
permalink: /docs/ruby/
redirect_from:
  - /docs/languages/ruby
  - /docs/languages/ruby/
  - /docs/secrets-in-ruby/
  - /docs/secrets-in-ruby
install_lede: "Get the Dotenvx Ruby gem."
install_after_lede: "And the CLI to encrypt files."
inject_lede: "Then inject your encrypted secrets at runtime."
install_copy: "gem install dotenvx"
install_after_copy: "curl -sfS https://dotenvx.sh | sh"
encrypt_copy: "dotenvx encrypt"
inject_copy: |
  require "dotenvx"

  Dotenvx.load

  puts "HELLO: #{ENV['HELLO']}"
install: |
  $ gem install dotenvx
install_after: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt: |
  $ dotenvx encrypt
inject: |
  require "dotenvx"

  Dotenvx.load

  puts "HELLO: #{ENV['HELLO']}"
---
