---
title: Read
description: Read resolved values without changing the environment.
permalink: "/docs/sdk/go/read/"
doc_type: sdk
command: dotenvx.Read(files...)
command_language: go
eyebrow: Go
eyebrow_href: "/docs/sdk/go/"
---

Returns (map[string]string, error). Later files take precedence.

```go
values, err := dotenvx.Read(".env", ".env.production")
if err != nil {
    log.Fatal(err)
}
fmt.Println(values["HELLO"])
```
