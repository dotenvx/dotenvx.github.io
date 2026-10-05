---
layout: docs-cli
title: Required
description: Require a value that is present and not blank.
permalink: "/docs/envfile/required/"
eyebrow: Envfile
eyebrow_href: "/docs/envfile/"
command: 'env "API_KEY", required: true'
command_prompt: false
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
Variables are required by default. `required: true` requires a present, nonblank value.

```ruby
strict true

env "API_KEY", required: true
```

Use either `required` or [`optional`](/docs/envfile/optional/) in a declaration, never both. `optional: false` is equivalent to `required: true`.
