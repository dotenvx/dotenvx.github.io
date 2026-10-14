---
layout: docs-markdown
title: "Echo"
social_title: "Encrypt a .env file in Echo"
description: "Encrypt a .env file in Echo with dotenvx, commit it safely, and inject its secrets at runtime."
icon: go
permalink: /docs/echo/
redirect_from:
  - /docs/frameworks/echo
  - /docs/frameworks/echo/
  - /docs/secrets-in-echo/
  - /docs/secrets-in-echo
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
  "net/http"
  "os"

  "github.com/labstack/echo/v4"
)

func main() {
  e := echo.New()
  e.GET("/", func(c echo.Context) error {
    return c.String(http.StatusOK, fmt.Sprintf("HELLO: %s", os.Getenv("HELLO")))
  })
  e.Logger.Fatal(e.Start(":1323"))
}
```

```console
$ dotenvx run -- go run main.go
```
{: copy="dotenvx run -- go run main.go"}
