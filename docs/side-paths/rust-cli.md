---
layout: docs-side-path
title: Use the CLI
description: Load configuration before starting your Rust app.
permalink: /docs/rust/cli/
markdown_url: /docs/rust/cli.md
parent_url: /docs/rust/#ship
parent_title: Rust
side_path_kind: Alternative
---

If you prefer process environment variables, let the CLI load them before your app starts:

```rust
// src/main.rs
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let hello = std::env::var("HELLO")?;
    println!("Hello {hello}");
    Ok(())
}
```

```console
$ dotenvx run --strict -- cargo run
Hello Secret
```
{: copy="dotenvx run --strict -- cargo run"}

For production, install the CLI on the host and wrap your compiled binary:

```console
$ dotenvx run -f .env.production --strict -- ./hello-rust
Hello Production
```
{: copy="dotenvx run -f .env.production --strict -- ./hello-rust"}

This uses the CLI's key resolution. The Rust code only reads the resulting environment; it does not call dotenvx-primitives. See [CLI run](/docs/cli/run/) for its options.
