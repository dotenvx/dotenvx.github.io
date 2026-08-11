---
title: Primitives
description: Low-level encryption primitives for Rust.
permalink: /docs/sdk/rust/primitives/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Rust"
  eyebrow_href="/docs/sdk/rust"
  title="Primitives"
  description="Low-level encryption primitives for Rust."
  icon="rust"
%}

<div class="armor-shell">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Package</h2>
    <div class="design-list">
      <ul class="design-list-items">
        <li>
          <a class="design-link" href="https://crates.io/crates/dotenvx-primitives" target="_blank" rel="noopener noreferrer">dotenvx-primitives</a>
          <span class="design-list-meta">crates.io</span>
        </li>
      </ul>
    </div>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Install</h2>
    {% capture sdk_rust_primitives_install %}
$ cargo add dotenvx-primitives
    {% endcapture %}
    {% include components/design-codeblock.html value=sdk_rust_primitives_install copy_text="cargo add dotenvx-primitives" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
