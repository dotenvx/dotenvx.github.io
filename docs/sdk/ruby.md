---
title: Ruby
description: Load and manage encrypted env from Ruby and Rails.
permalink: /docs/sdk/ruby/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="SDKs"
  eyebrow_href="/docs/sdk"
  title="Ruby"
  description="Load and manage encrypted env from Ruby and Rails."
  icon="ruby"
%}

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

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
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

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

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Usage

```ruby
require "dotenvx"
Dotenvx.load
# or: require "dotenvx/load"
```
{: copy="false"}

See the [Ruby](/docs/ruby/), [Rails](/docs/rails/), or [Sinatra](/docs/sinatra/) quickstart for a full walkthrough.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
</section>
</div>
</div>
