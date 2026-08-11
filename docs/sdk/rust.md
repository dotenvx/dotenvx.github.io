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
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Packages</h2>
    <div class="design-list">
      <ul class="design-list-items">
        <li>
          <a class="design-link" href="/docs/sdk/rust/primitives/">dotenvx-primitives</a>
          <span class="design-list-meta">crates.io</span>
        </li>
      </ul>
    </div>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Install</h2>
    {% capture sdk_rust_install %}
$ cargo add dotenvx-primitives
    {% endcapture %}
    {% include components/design-codeblock.html value=sdk_rust_install copy_text="cargo add dotenvx-primitives" %}

    <p class="design-paragraph">See <a class="design-link" href="/docs/sdk/rust/primitives/">Rust primitives</a> for details, or the <a class="design-link" href="/docs/rust/">Rust quickstart</a> for the CLI.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
