---
title: Rust
description: Load encrypted .env files in Rust.
permalink: /docs/sdk/rust/
layout: docs-markdown
eyebrow: "SDKs"
eyebrow_href: "/docs/sdk"
icon: "rust"
---

{% assign sdk = site.data.install_sdks_v2 | where: 'name', 'Rust' | first %}
## Packages

<div class="design-list">
<ul class="design-list-items">
<li>
<a class="design-link" href="{{ sdk.package_url }}">dotenvx-official</a>
<span class="design-list-meta">crates.io</span>
</li>
<li>
<a class="design-link" href="/docs/sdk/rust/primitives/">dotenvx-primitives</a>
<span class="design-list-meta">crates.io</span>
</li>
</ul>
</div>

## Install

```bash
{{ sdk.command }}
```

## Usage

With `HELLO=World` in `.env`, load the values as a map.

```rust
fn main() -> std::io::Result<()> {
    let env = dotenvx_official::load()?;
    println!("Hello {}", env["HELLO"]);
    Ok(())
}
```

## Primitives

```console
$ cargo add dotenvx-primitives
```
{: copy="cargo add dotenvx-primitives"}

See [Rust primitives](/docs/sdk/rust/primitives/) for details, or the [Rust quickstart](/docs/rust/) for a full walkthrough.
