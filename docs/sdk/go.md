---
title: Go
description: Load encrypted .env files in Go.
permalink: /docs/sdk/go/
eyebrow: SDKs
eyebrow_href: /docs/sdk/
icon: go
---

{% assign sdk = site.data.install_sdks_v2 | where: 'name', 'Go' | first %}
## Package

[dotenvx-go]({{ sdk.package_url }})

## Install

Use Go 1.22 or later and a C compiler with cgo enabled. The package includes native builds for macOS and glibc Linux on amd64 and arm64.

```bash
{{ sdk.command }}
```

## Usage

With `HELLO=World` in `.env`, call `dotenvx.Load()` before reading your environment variables.

```go
package main

import (
	"fmt"
	"log"
	"os"

	"github.com/dotenvx/dotenvx-go"
)

func main() {
	if err := dotenvx.Load(); err != nil {
		log.Fatal(err)
	}

	fmt.Println("Hello", os.Getenv("HELLO"))
}
```

See the [Go quickstart](/docs/go/) for the full encryption workflow.
