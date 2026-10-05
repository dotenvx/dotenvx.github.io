---
layout: docs-cli
title: Optional
description: Allow a variable to be missing or blank.
permalink: "/docs/envfile/optional/"
eyebrow: Envfile
eyebrow_href: "/docs/envfile/"
command: 'env "SENTRY_DSN", optional: true'
command_prompt: false
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
`required: true` requires a value that is present and not blank. `optional: true` allows missing or blank values. When an optional value is supplied, its other rules still apply.

Use either `required` or `optional` in a declaration, never both. `optional: false` is equivalent to `required: true`.

```ruby
env "SENTRY_DSN", optional: true
```

The default is `optional: false`.
