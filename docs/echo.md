---
layout: docs-quickstart
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
install_copy: "curl -sfS https://dotenvx.sh | sh"
encrypt_copy: "dotenvx encrypt"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt: |
  $ dotenvx encrypt
inject_lede: |
  Then inject your encrypted secrets at runtime with `dotenvx run`.
inject_copy: |
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
inject: |
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
inject_after_copy: |
  dotenvx run -- go run main.go
inject_after: |
  $ dotenvx run -- go run main.go
---
