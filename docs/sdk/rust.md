---
title: Rust
description: Primitives for encrypted env in Rust.
permalink: /docs/sdk/rust/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="SDKs"
  eyebrow_href="/docs/sdk"
  title="Rust"
  description="Primitives for encrypted env in Rust."
  icon="rust"
%}

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

## Packages

<div class="design-list">
<ul class="design-list-items">
<li>
<a class="design-link" href="/docs/sdk/rust/primitives/">dotenvx-primitives</a>
<span class="design-list-meta">crates.io</span>
</li>
</ul>
</div>
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Install

```console
$ cargo add dotenvx-primitives
```
{: copy="cargo add dotenvx-primitives"}

See [Rust primitives](/docs/sdk/rust/primitives/) for details, or the [Rust quickstart](/docs/rust/) for the CLI.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
</section>
</div>
</div>
