---
title: Ruby
description: Load and manage encrypted env from Ruby and Rails.
permalink: /docs/sdk/ruby/
layout: docs-markdown
eyebrow: "SDKs"
eyebrow_href: "/docs/sdk"
icon: "ruby"
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
