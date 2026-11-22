---
title: load
description: Return the resolved environment as a map.
permalink: "/docs/sdk/rust/load/"
doc_type: sdk
command: dotenvx_official::load()
command_language: rust
eyebrow: Rust
eyebrow_href: "/docs/sdk/rust/"
---

Takes no arguments. Reads the current directory and process environment and returns io::Result<HashMap<String, String>>. Existing environment values take precedence and remain in the returned environment. Loading is strict. It does not mutate std::env or install an output filter.

```rust
fn main() -> std::io::Result<()> {
    let values = dotenvx_official::load()?;
    println!("Hello {}", values["HELLO"]);
    Ok(())
}
```
