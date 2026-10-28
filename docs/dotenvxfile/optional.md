---
layout: docs-cli
title: Optional
description: Allow a variable to be missing or blank.
permalink: "/docs/dotenvxfile/optional/"
redirect_from:
  - /docs/envfile/optional
  - /docs/envfile/optional/
eyebrow: Dotenvxfile
eyebrow_href: "/docs/dotenvxfile/"
command: 'env "SENTRY_DSN", optional: true'
command_prompt: false
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
`required: true` requires a value that is present and not blank. `optional: true` allows missing or blank values. When an optional value is supplied, its other rules still apply.

Use either `required` or `optional` in a declaration, never both. `optional: false` is equivalent to `required: true`.

```ruby
env "SENTRY_DSN", optional: true
```

The default is `optional: true`, unless a root or file-level `required` setting overrides it.
