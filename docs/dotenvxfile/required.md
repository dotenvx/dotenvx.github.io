---
layout: docs-cli
title: Required
description: Require a value that is present and not blank.
permalink: "/docs/dotenvxfile/required/"
redirect_from:
  - /docs/envfile/required
  - /docs/envfile/required/
eyebrow: Dotenvxfile
eyebrow_href: "/docs/dotenvxfile/"
command: 'env "API_KEY", required: true'
command_prompt: false
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
Variables are optional by default; set `required true` at the root to change the default. `required: true` requires a present, nonblank value.

```ruby
strict true

env "API_KEY", required: true
```

Use either `required` or [`optional`](/docs/dotenvxfile/optional/) in a declaration, never both. `optional: false` is equivalent to `required: true`.
