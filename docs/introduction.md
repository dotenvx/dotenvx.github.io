---
title: Documentation
permalink: /docs/introduction/
redirect_from:
  - /docs/package-managers
  - /docs/package-managers/
  - /docs/process-managers
  - /docs/process-managers/
layout: radar
body_class: docs-landing
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
        {% include components/design-key.html href="/docs/cli-quickstart" label="CLI" icon="dotenvx" %}
        {% include components/design-key.html href="/docs/claude" label="Claude" icon="claude" %}
        {% include components/design-key.html href="/docs/codex" label="Codex" icon="codex" %}
        {% include components/design-key.html href="/docs/cursor" label="Cursor" icon="cursor" %}
        {% include components/design-key.html href="/docs/github-actions" label="GitHub Actions" icon="github-actions" %}
        {% include components/design-key.html href="/docs/nodejs" label="Node.js" icon="nodejs" %}
        {% include components/design-key.html href="/docs/1password" label="1Password" icon="1password" %}
        {% include components/design-key.html href="/docs/bitwarden" label="Bitwarden" icon="bitwarden" %}
        {% include components/design-key.html href="/docs/cloudflare/" label="Cloudflare" icon="cloudflare" %}
        {% include components/design-key.html href="/docs/guides" label="30+ Guides" glyph="…" glyph_class="design-settings-tile-glyph--soft" %}
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
        {% include components/design-key.html href="/docs/cli/run" label="Run" glyph="›" glyph_class="design-settings-tile-glyph--soft" %}
        {% include components/design-key.html href="/docs/cli/encrypt" label="Encrypt" glyph="◈" glyph_class="design-settings-tile-glyph--soft" %}
        {% include components/design-key.html href="/docs/cli/run-redact" label="Redact" glyph="░" glyph_class="design-settings-tile-glyph--soft" title="Runtime leak protection & log redaction" %}
        {% include components/design-key.html href="/docs/cli/validate" label="Validate" glyph="✓" glyph_class="design-settings-tile-glyph--soft" %}
        {% include components/design-key.html href="/docs/cli/armor/introduction" label="Armor" glyph="⛨" glyph_class="design-settings-tile-glyph--soft" %}
        {% include components/design-key.html href="/docs/cli" label="Full Reference" glyph="…" glyph_class="design-settings-tile-glyph--soft" %}
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
        {% include components/design-key.html href="/docs/sdk/nodejs" label="Node.js" icon="nodejs" %}
        {% include components/design-key.html href="/docs/sdk/python" label="Python" icon="python" %}
        {% include components/design-key.html href="/docs/sdk/ruby" label="Ruby" icon="ruby" %}
        {% include components/design-key.html href="/docs/sdk/rust" label="Rust" icon="rust" %}
        {% include components/design-key.html href="/docs/sdk" label="All SDKs" glyph="…" glyph_class="design-settings-tile-glyph--soft" %}
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
        {% include components/design-key.html href="/docs/env-file" label=".env" glyph=".env" glyph_class="design-settings-tile-glyph--soft" %}
        {% include components/design-key.html href="/docs/env-keys-file" label=".env.keys" glyph="key" glyph_class="design-settings-tile-glyph--soft" %}
        {% include components/design-key.html href="/docs/resources" label="More Resources" glyph="…" glyph_class="design-settings-tile-glyph--soft" %}
      </div>
    </div>
  </div>
</div>
</section>

<script>
(() => {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return;
  const tiles = [...document.querySelectorAll('.docs-intro-cards .design-settings-tile')];
  const delays = [0, 90, 35, 140, 65, 170, 110, 20, 150, 75];
  const animations = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const tile = entry.target;
      observer.unobserve(tile);
      tile.style.opacity = '';
      if (motion.matches) return;
      const index = tiles.indexOf(tile);
      const face = tile.querySelector('.design-key-face');
      const surface = getComputedStyle(face);
      // Keep every edge and glyph stationary: only the apparent recess and
      // edge lighting change as the key meets the page surface.
      const animation = face.animate([
        { opacity: 0, borderColor: 'transparent', boxShadow: 'inset 0 5px 8px rgba(0,0,0,.28), inset 0 -2px 3px rgba(255,255,255,.08), inset 0 0 0 1px rgba(0,0,0,.12)', offset: 0 },
        { opacity: .85, borderColor: surface.borderColor, boxShadow: 'inset 0 2px 3px rgba(0,0,0,.12), inset 0 -1px 1px rgba(255,255,255,.08), inset 0 0 0 1px rgba(0,0,0,.08)', offset: .45 },
        { opacity: 1, borderColor: surface.borderColor, boxShadow: surface.boxShadow, offset: 1 }
      ], { duration: 540, delay: delays[index % delays.length], easing: 'cubic-bezier(.16, 1, .3, 1)', fill: 'backwards' });
      animations.set(tile, animation);
      animation.onfinish = () => animations.delete(tile);
    });
  }, { threshold: .08 });
  tiles.forEach(tile => {
    tile.style.opacity = '0';
    observer.observe(tile);
    tile.addEventListener('focus', () => {
      observer.unobserve(tile);
      tile.style.opacity = '';
      animations.get(tile)?.cancel();
      animations.delete(tile);
    });
  });
  motion.addEventListener('change', () => {
    if (!motion.matches) return;
    observer.disconnect();
    tiles.forEach(tile => tile.style.opacity = '');
    animations.forEach(animation => animation.cancel());
    animations.clear();
  });
})();
</script>
