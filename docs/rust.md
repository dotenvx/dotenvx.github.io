---
layout: docs-markdown
title: "Rust"
social_title: "Encrypt a .env file in Rust"
description: "Encrypt a .env file in Rust with dotenvx, commit it safely, and inject its secrets at runtime."
icon: rust
permalink: /docs/rust/
redirect_from:
  - /docs/languages/rust
  - /docs/languages/rust/
  - /docs/secrets-in-rust/
  - /docs/secrets-in-rust
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


```rust
use std::env;

fn main() {
    let hello = env::var("HELLO").unwrap_or_default();
    println!("HELLO: {}", hello);
}
```

```console
$ dotenvx run -- cargo run
```
{: copy="dotenvx run -- cargo run"}
