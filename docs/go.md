---
layout: docs-markdown
title: "Go"
social_title: "Encrypt a .env file in Go"
description: "Encrypt a .env file in Go with dotenvx, commit it safely, and inject its secrets at runtime."
icon: go
permalink: /docs/go/
redirect_from:
  - /docs/languages/go
  - /docs/languages/go/
  - /docs/secrets-in-go/
  - /docs/secrets-in-go
quickstart_pager: true
---

## Install

Get the Dotenvx CLI.

```console
$ curl -sfS https://dotenvx.sh | sh
```
{: copy="curl -sfS https://dotenvx.sh | sh"}

## Encrypt

Encrypt your .env file.

```console
$ dotenvx encrypt
```
{: copy="dotenvx encrypt"}

## Inject

Then inject your encrypted secrets at runtime with `dotenvx run`.


```go
package main

import (
  "fmt"
  "os"
)

func main() {
  fmt.Printf("HELLO: %s\n", os.Getenv("HELLO"))
}
```

```console
$ dotenvx run -- go run main.go
```
{: copy="dotenvx run -- go run main.go"}
