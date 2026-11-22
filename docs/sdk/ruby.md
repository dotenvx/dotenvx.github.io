---
title: Ruby
description: Load encrypted environment values with the Ruby SDK.
permalink: "/docs/sdk/ruby/"
icon: ruby
---

## Packages

<div class="design-list">
<ul class="design-list-items">
<li>
<a class="design-link" href="https://rubygems.org/gems/dotenvx" target="_blank" rel="noopener noreferrer">dotenvx</a>
<span class="design-list-meta">RubyGems</span>
</li>
<li>
<a class="design-link" href="https://rubygems.org/gems/dotenvx-rails" target="_blank" rel="noopener noreferrer">dotenvx-rails</a>
<span class="design-list-meta">Rails</span>
</li>
</ul>
</div>

## Install

Ruby:

```console
$ gem install dotenvx
```
{: copy="gem install dotenvx"}

Rails:

```ruby
# Gemfile
gem "dotenvx-rails"
```
{: copy="false"}

## Usage

```ruby
require "dotenvx"
Dotenvx.load
# or: require "dotenvx/load"
```
{: copy="false"}

See the [Ruby](/docs/ruby/), [Rails](/docs/rails/), or [Sinatra](/docs/sinatra/) quickstart for a full walkthrough.
## Reference

- [load](/docs/sdk/ruby/load/)
- [load!](/docs/sdk/ruby/load-bang/)
- [overwrite](/docs/sdk/ruby/overwrite/)
- [overwrite!](/docs/sdk/ruby/overwrite-bang/)
- [parse](/docs/sdk/ruby/parse/)
- [update](/docs/sdk/ruby/update/)
- [preload](/docs/sdk/ruby/preload/)
- [Rails](/docs/sdk/ruby/rails/)
- [overload](/docs/sdk/ruby/overwrite/)
- [overload!](/docs/sdk/ruby/overwrite-bang/)

Stored-key custody uses a compatible Dotenvx CLI with sdk and the required provider feature on PATH. Matching environment keys and local .env.keys do not require remote custody.
