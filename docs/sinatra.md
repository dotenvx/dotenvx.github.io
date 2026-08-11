---
layout: docs-quickstart
title: "Sinatra"
social_title: "Encrypt a .env file in Sinatra"
description: "Encrypt a .env file in Sinatra with the Dotenvx gem, commit it safely, and load its secrets at runtime."
icon: sinatra
permalink: /docs/sinatra/
redirect_from:
  - /docs/frameworks/sinatra
  - /docs/frameworks/sinatra/
  - /docs/secrets-in-sinatra/
  - /docs/secrets-in-sinatra
install_lede: "Get the Dotenvx Ruby gem."
install_after_lede: "And the CLI to encrypt files."
inject_lede: "Then inject your encrypted secrets at runtime."
install_copy: "gem install dotenvx"
install_after_copy: "curl -sfS https://dotenvx.sh | sh"
encrypt_copy: "dotenvx encrypt"
inject_copy: |
  require "dotenvx"
  require "sinatra"

  Dotenvx.load

  get "/" do
    "HELLO: #{ENV['HELLO']}"
  end
install: |
  $ gem install dotenvx
install_after: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt: |
  $ dotenvx encrypt
inject: |
  require "dotenvx"
  require "sinatra"

  Dotenvx.load

  get "/" do
    "HELLO: #{ENV['HELLO']}"
  end
---
