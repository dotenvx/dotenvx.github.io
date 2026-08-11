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
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Packages</h2>
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
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Install</h2>
    <p class="design-paragraph">Ruby:</p>
    {% capture sdk_ruby_install %}
$ gem install dotenvx
    {% endcapture %}
    {% include components/design-codeblock.html value=sdk_ruby_install copy_text="gem install dotenvx" %}

    <p class="design-paragraph">Rails:</p>
    {% capture sdk_rails_install %}
# Gemfile
gem "dotenvx-rails"
    {% endcapture %}
    {% include components/design-codeblock.html value=sdk_rails_install copy=false %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Usage</h2>
    {% capture sdk_ruby_usage %}
require "dotenvx"
Dotenvx.load
# or: require "dotenvx/load"
    {% endcapture %}
    {% include components/design-codeblock.html value=sdk_ruby_usage copy=false %}

    <p class="design-paragraph">See the <a class="design-link" href="/docs/ruby/">Ruby</a>, <a class="design-link" href="/docs/rails/">Rails</a>, or <a class="design-link" href="/docs/sinatra/">Sinatra</a> quickstart for a full walkthrough.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
