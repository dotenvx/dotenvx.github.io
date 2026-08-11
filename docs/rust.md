---
layout: docs-quickstart
title: "Rust"
social_title: "Encrypt a .env file in Rust"
description: "Encrypt a .env file in Rust with dotenvx, commit it safely, and inject its secrets at runtime."
icon: rust
permalink: /docs/rust/
redirect_from:
  - /docs/secrets-in-rust/
  - /docs/secrets-in-rust
install_copy: "curl -sfS https://dotenvx.sh | sh"
encrypt_copy: "dotenvx encrypt"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt: |
  $ dotenvx encrypt
inject_lede: |
  Then inject your encrypted secrets at runtime with `dotenvx run`.
inject_copy: |
  use std::env;

  fn main() {
      let hello = env::var("HELLO").unwrap_or_default();
      println!("HELLO: {}", hello);
  }
inject: |
  use std::env;

  fn main() {
      let hello = env::var("HELLO").unwrap_or_default();
      println!("HELLO: {}", hello);
  }
inject_after_copy: |
  dotenvx run -- cargo run
inject_after: |
  $ dotenvx run -- cargo run
---

