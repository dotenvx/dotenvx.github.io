---
title: Overload
description: Replace existing environment values with loaded values.
permalink: "/docs/sdk/go/overload/"
doc_type: sdk
command: dotenvx.Overload(files...)
command_language: go
eyebrow: Go
eyebrow_href: "/docs/sdk/go/"
---

Later files take precedence. Returns an error when loading fails.

```go
if err := dotenvx.Overload(".env", ".env.production"); err != nil {
    log.Fatal(err)
}
```
