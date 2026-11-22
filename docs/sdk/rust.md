---
title: Rust
description: Load encrypted environment values with the Rust SDK.
permalink: "/docs/sdk/rust/"
icon: rust
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

{% assign install_commands = sdk.command | newline_to_br | split: '<br />' %}
{% capture install_display %}{% for command in install_commands %}$ {{ command | strip }}
{% endfor %}{% endcapture %}
{% include components/design-codeblock.html value=install_display format='cli' copy_text=sdk.command %}

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

[Low-level Rust primitives](/docs/sdk/rust/primitives/) provide parsing, encryption, policies, and source editing.

## Reference

- [load](/docs/sdk/rust/load/)

For process-output redaction, run your application through [dotenvx run](/docs/cli/run/) with [Dotenvx.toml redaction rules](/docs/dotenvxtoml/redacted/).
