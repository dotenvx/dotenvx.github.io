---
title: Load
description: Load files into the process environment.
permalink: "/docs/sdk/go/load/"
doc_type: sdk
command: dotenvx.Load(files...)
command_language: go
eyebrow: Go
eyebrow_href: "/docs/sdk/go/"
---

Defaults to .env. Existing environment variables and earlier files take precedence. Returns an error when loading fails.

```go
if err := dotenvx.Load(".env.production", ".env"); err != nil {
    log.Fatal(err)
}
```
