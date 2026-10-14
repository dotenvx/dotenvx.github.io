---
layout: docs-markdown
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
quickstart_pager: true
---

## Install

Get the Dotenvx Ruby gem.

```console
$ gem install dotenvx
```
{: copy="gem install dotenvx"}

And the CLI to encrypt files.

```console
$ curl -sfS https://dotenvx.sh | sh
```
{: copy="curl -sfS https://dotenvx.sh | sh"}

## Encrypt

Encrypt your .env file.

```console
$ dotenvx encrypt
```
{: copy="dotenvx encrypt"}

## Inject

Then inject your encrypted secrets at runtime.

```ruby
require "dotenvx"
require "sinatra"

Dotenvx.load

get "/" do
  "HELLO: #{ENV['HELLO']}"
end
```
