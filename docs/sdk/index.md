---
description: "Load encrypted environment values with the Dotenvx 3.0 SDKs. Browse language APIs and Rust primitives."
title: SDKs
permalink: /docs/sdk/
redirect_from:
  - /docs/ref/sdk
  - /docs/ref/sdk/
  - /docs/sdk/introduction
  - /docs/sdk/introduction/
sdk_languages:
  - label: Node.js
    slug: nodejs
  - label: Next.js
    slug: nextjs
    main_only: true
  - label: Python
    slug: python
  - label: Ruby
    slug: ruby
  - label: Go
    slug: go
    main_only: true
  - label: Rust
    slug: rust
  - label: PHP
    slug: php
    main_only: true
---


> Load encrypted environment values from your language.

These references describe the Dotenvx 3.0 implementations. SDKs resolve and load configuration; use the [CLI](/docs/cli/) to edit env files.

## Languages

{% include main-sdk-list.md languages=page.sdk_languages %}

## API reference

{% for reference in site.data.advanced_sdk -%}
- [{{ reference.label }}]({{ reference.href }})
{% endfor %}
