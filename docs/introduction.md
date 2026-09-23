---
title: Documentation
permalink: /docs/introduction/
redirect_from:
  - /docs/package-managers
  - /docs/package-managers/
  - /docs/process-managers
  - /docs/process-managers/
layout: radar
---

<style>
  .docs-intro-cards {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    width: 100%;
  }

  .docs-intro-cards .design-settings-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 640px) {
    .docs-intro-cards .design-settings-grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

</style>

{% capture docs_hero_visual %}
  <div class="docs-hero-ascii" aria-hidden="true">
    <pre class="docs-hero-ascii-art">&lt;docs/&gt;</pre>
  </div>
{% endcapture %}

{% include components/docs-hero.html

  eyebrow="Dotenvx"
  eyebrow_href="/"
  title="Documentation"
  description="Get started with dotenvx—install, encrypt, and run. Guides for languages, infra, coding agents, and more."
  visual=docs_hero_visual
%}


<section class="radar-section" aria-label="Quickstarts">
  <div class="armor-shell">
  <div class="design-content-width">
    <div id="languages" class="docs-intro-cards">
      <p class="design-list-title">Quickstarts</p>
      <div class="design-settings-grid">
        {% include components/design-settings-tile.html href="/docs/cli-quickstart" label="CLI" icon="cli" %}
        {% include components/design-settings-tile.html href="/docs/claude" label="Claude" icon="claude" %}
        {% include components/design-settings-tile.html href="/docs/codex" label="Codex" icon="codex" %}
        {% include components/design-settings-tile.html href="/docs/cursor" label="Cursor" icon="cursor" %}
        {% include components/design-settings-tile.html href="/docs/github-actions" label="GitHub Actions" icon="github-actions" %}
        {% include components/design-settings-tile.html href="/docs/nodejs" label="Node.js" icon="nodejs" %}
        {% include components/design-settings-tile.html href="/docs/1password" label="1Password" icon="1password" %}
        {% include components/design-settings-tile.html href="/docs/bitwarden" label="Bitwarden" icon="bitwarden" %}
        {% include components/design-settings-tile.html href="/docs/cloudflare/" label="Cloudflare" icon="cloudflare" %}
        {% include components/design-settings-tile.html href="/docs/guides" label="30+ Guides" glyph="…" glyph_class="design-settings-tile-glyph--soft" %}
      </div>
    </div>
  </div>
</div>
</section>

<section class="radar-section" aria-label="CLI">
  <div class="armor-shell">
  <div class="design-content-width">
    <div class="docs-intro-cards">
      <p class="design-list-title">CLI</p>
      <div class="design-settings-grid">
        {% include components/design-settings-tile.html href="/docs/cli/run" label="Run" glyph="›" glyph_class="design-settings-tile-glyph--soft" %}
        {% include components/design-settings-tile.html href="/docs/cli/encrypt" label="Encrypt" glyph="◈" glyph_class="design-settings-tile-glyph--soft" %}
        {% include components/design-settings-tile.html href="/docs/cli/run-redact" label="Redact" glyph="░" glyph_class="design-settings-tile-glyph--soft" title="Runtime leak protection & log redaction" %}
        {% include components/design-settings-tile.html href="/docs/cli/validate" label="Validate" glyph="✓" glyph_class="design-settings-tile-glyph--soft" %}
        {% include components/design-settings-tile.html href="/docs/cli/armor/introduction" label="Armor" glyph="⛨" glyph_class="design-settings-tile-glyph--soft" %}
        {% include components/design-settings-tile.html href="/docs/cli" label="Full Reference" glyph="…" glyph_class="design-settings-tile-glyph--soft" %}
      </div>
    </div>
  </div>
</div>
</section>

<section class="radar-section" aria-label="SDKs">
  <div class="armor-shell">
  <div class="design-content-width">
    <div class="docs-intro-cards">
      <p class="design-list-title">SDKs</p>
      <div class="design-settings-grid">
        {% include components/design-settings-tile.html href="/docs/sdk/nodejs" label="Node.js" icon="nodejs" %}
        {% include components/design-settings-tile.html href="/docs/sdk/python" label="Python" icon="python" %}
        {% include components/design-settings-tile.html href="/docs/sdk/ruby" label="Ruby" icon="ruby" %}
        {% include components/design-settings-tile.html href="/docs/sdk/rust" label="Rust" icon="rust" %}
        {% include components/design-settings-tile.html href="/docs/sdk" label="All SDKs" glyph="…" glyph_class="design-settings-tile-glyph--soft" %}
      </div>
    </div>
  </div>
</div>
</section>

<section class="radar-section" aria-label="Resources">
  <div class="armor-shell">
  <div class="design-content-width">
    <div class="docs-intro-cards">
      <p class="design-list-title">Resources</p>
      <div class="design-settings-grid">
        {% include components/design-settings-tile.html href="/docs/env-file" label=".env" glyph=".env" glyph_class="design-settings-tile-glyph--soft" %}
        {% include components/design-settings-tile.html href="/docs/env-keys-file" label=".env.keys" glyph="key" glyph_class="design-settings-tile-glyph--soft" %}
        {% include components/design-settings-tile.html href="/docs/resources" label="More Resources" glyph="…" glyph_class="design-settings-tile-glyph--soft" %}
      </div>
    </div>
  </div>
</div>
</section>
