---
layout: docs-quickstart
title: "Go"
social_title: "Encrypt a .env file in Go"
description: "Encrypt a .env file in Go with dotenvx, commit it safely, and inject its secrets at runtime."
icon: go
permalink: /docs/go/
redirect_from:
  - /docs/secrets-in-go/
  - /docs/secrets-in-go
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
    "os"
  )

  func main() {
    fmt.Printf("HELLO: %s\n", os.Getenv("HELLO"))
  }
inject: |
  package main

  import (
    "fmt"
    "os"
  )

  func main() {
    fmt.Printf("HELLO: %s\n", os.Getenv("HELLO"))
  }
inject_after_copy: |
  dotenvx run -- go run main.go
inject_after: |
  $ dotenvx run -- go run main.go
---

