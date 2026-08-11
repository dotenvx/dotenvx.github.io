---
layout: docs-quickstart
title: "Rails"
social_title: "Encrypt a .env file in Rails"
description: "Encrypt a .env file in Rails with the Dotenvx gem, commit it safely, and load its secrets at runtime."
icon: rails
permalink: /docs/rails/
redirect_from:
  - /docs/frameworks/rails
  - /docs/frameworks/rails/
  - /docs/secrets-in-rails/
  - /docs/secrets-in-rails
install_lede: "Add the Dotenvx Rails gem."
install_after_lede: "Install it, and get the CLI to encrypt files."
inject_lede: "Your encrypted secrets are automatically loaded. Use them anywhere."
install_copy: |
  gem "dotenvx-rails"
install_after_copy: |
  bundle install
  curl -sfS https://dotenvx.sh | sh
encrypt_copy: "dotenvx encrypt"
inject_copy: |
  class HomeController < ApplicationController
    def index
      render plain: "HELLO: #{ENV['HELLO']}"
    end
  end
install: |
  # Gemfile
  gem "dotenvx-rails"
install_after: |
  $ bundle install
  $ curl -sfS https://dotenvx.sh | sh
encrypt: |
  $ dotenvx encrypt
inject: |
  class HomeController < ApplicationController
    def index
      render plain: "HELLO: #{ENV['HELLO']}"
    end
  end
---
