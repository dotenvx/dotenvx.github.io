---
title: Go
description: Load encrypted environment values with the Go SDK.
permalink: "/docs/sdk/go/"
icon: go
---

{% assign sdk = site.data.install_sdks_v2 | where: 'name', 'Go' | first %}
## Package

[dotenvx-go]({{ sdk.package_url }})

## Install

Use Go 1.22 or later and a C compiler with cgo enabled. The package includes native builds for macOS and glibc Linux on amd64 and arm64.

{% assign install_commands = sdk.command | newline_to_br | split: '<br />' %}
{% capture install_display %}{% for command in install_commands %}$ {{ command | strip }}
{% endfor %}{% endcapture %}
{% include components/design-codeblock.html value=install_display format='cli' copy_text=sdk.command %}

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
## Reference

- [Load](/docs/sdk/go/load/)
- [Overload](/docs/sdk/go/overload/)
- [Read](/docs/sdk/go/read/)

For process-output redaction, run your application through [dotenvx run](/docs/cli/run/) with [Dotenv.toml redaction rules](/docs/dotenvtoml/redacted/).
