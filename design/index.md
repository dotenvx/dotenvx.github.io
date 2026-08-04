---
title: Design
permalink: /design/
layout: radar
---

<section class="radar-hero design-hero">
  <div class="radar-shell design-shell">
    <p class="radar-kicker">dotenvx</p>
    <h1 class="radar-title">Design</h1>
    <p class="radar-lede">Marketing radar specimens. Shared chrome for cards, panels, type, and controls — keep pages aligned here.</p>
  </div>
</section>

<section class="radar-section">
  <div class="radar-shell design-shell">

    <section class="design-section" aria-labelledby="design-tokens">
      <div class="design-section-heading">
        <p>01</p>
        <h2 id="design-tokens">Tokens</h2>
      </div>
      <div class="design-swatch-grid">
        <div class="design-swatch"><span class="design-swatch-chip" style="background: var(--design-bg)"></span><code>--design-bg</code></div>
        <div class="design-swatch"><span class="design-swatch-chip" style="background: var(--design-ink)"></span><code>--design-ink</code></div>
        <div class="design-swatch"><span class="design-swatch-chip" style="background: var(--design-gold)"></span><code>--design-gold</code></div>
        <div class="design-swatch"><span class="design-swatch-chip" style="background: var(--design-mark)"></span><code>--design-mark</code></div>
        <div class="design-swatch"><span class="design-swatch-chip" style="background: var(--design-link)"></span><code>--design-link</code></div>
        <div class="design-swatch"><span class="design-swatch-chip" style="background: var(--design-panel); box-shadow: var(--design-etch)"></span><code>--design-panel + etch</code></div>
      </div>
    </section>

    <section class="design-section" aria-labelledby="design-brand">
      <div class="design-section-heading">
        <p>02</p>
        <h2 id="design-brand">Brand</h2>
      </div>
      <div class="design-brand-row">
        <img src="/assets/img/logo-env.svg" alt="" class="design-brand-mark" />
        <img src="/assets/img/logo-env-yellow.svg" alt="" class="design-brand-mark" />
        <code>.radar-brand · logo-env.svg / logo-env-yellow.svg</code>
      </div>
    </section>

    <section class="design-section" aria-labelledby="design-type">
      <div class="design-section-heading">
        <p>03</p>
        <h2 id="design-type">Typography</h2>
      </div>
      <p class="radar-kicker">Company</p>
      <h1 class="radar-title" style="font-size: clamp(2rem, 5vw, 3rem)">Open Source</h1>
      <p class="radar-lede">Our open work and contributions to the community.</p>
      <h2 class="radar-section-title" style="margin-top: 2rem">Published Work</h2>
      <p class="radar-section-lede">Technical papers and presentations.</p>
      <p class="design-specimen-note"><code>.radar-kicker</code> · <code>.radar-title</code> · <code>.radar-lede</code> · <code>.radar-section-title</code></p>
    </section>

    <section class="design-section" aria-labelledby="design-card">
      <div class="design-section-heading">
        <p>04</p>
        <h2 id="design-card">Card</h2>
      </div>
      <div class="radar-card-grid design-card-grid">
        <a href="#" class="radar-card" onclick="return false">
          <span class="radar-card-name">dotenv</span>
          <span class="radar-card-desc">Load environment variables from .env files.</span>
          <span class="radar-card-meta">
            <span>20.4k ★</span>
            <span aria-hidden="true">›</span>
          </span>
        </a>
        <a href="#" class="radar-card" onclick="return false">
          <img alt="" class="radar-card-thumb" src="/assets/img/og-image-changelog.png" loading="lazy" />
          <time class="radar-card-meta radar-card-meta--top">April 2, 2026</time>
          <span class="radar-card-name">Blog card specimen</span>
        </a>
      </div>
      <p class="design-specimen-note"><code>.radar-card</code> · square etch · used by open-source + blog</p>
    </section>

    <section class="design-section" aria-labelledby="design-panel">
      <div class="design-section-heading">
        <p>05</p>
        <h2 id="design-panel">Panel</h2>
      </div>
      <div class="radar-panel radar-panel-gap">
        <div class="radar-table-head">
          <span>File</span>
          <span>Title</span>
          <span class="radar-table-meta">Format</span>
          <span class="sr-only">Open</span>
        </div>
        <a href="#" class="radar-table-row" onclick="return false">
          <span class="radar-table-thumb radar-table-thumb--doc">
            <img src="/assets/img/whitepaper-thumb.png" alt="" aria-hidden="true" loading="lazy">
          </span>
          <span class="radar-table-title">Dotenvx: Reducing Secrets Risk with Cryptographic Separation</span>
          <span class="radar-table-meta">PDF</span>
          <span class="radar-table-arrow" aria-hidden="true">›</span>
        </a>
        <a href="#" class="radar-table-row" onclick="return false">
          <span class="radar-table-thumb radar-table-thumb--doc">
            <img src="/assets/img/keysee-whitepaper-thumb.png" alt="" aria-hidden="true" loading="lazy">
          </span>
          <span class="radar-table-title">KEYSEE⎔: Deterministic Visual Identity for Public Keys</span>
          <span class="radar-table-meta">PDF</span>
          <span class="radar-table-arrow" aria-hidden="true">›</span>
        </a>
      </div>
      <p class="design-specimen-note"><code>.radar-panel</code> · <code>.radar-table-row</code> · square etch</p>
    </section>

    <section class="design-section" aria-labelledby="design-controls">
      <div class="design-section-heading">
        <p>06</p>
        <h2 id="design-controls">Controls</h2>
      </div>
      <div class="design-control-row">
        <a href="#" class="radar-btn" onclick="return false">Get Started</a>
        <a href="#" class="radar-nav-link" onclick="return false">Log In</a>
        <span class="radar-footer-badge">5.7k ★</span>
        <span class="radar-theme-keycap">M</span>
        <a href="#" class="radar-text-link" onclick="return false">Text link</a>
      </div>
      <p class="design-specimen-note"><code>.radar-btn</code> · <code>.radar-nav-link</code> · <code>.radar-footer-badge</code> · <code>.radar-theme-keycap</code></p>
    </section>

    <section class="design-section" aria-labelledby="design-shell">
      <div class="design-section-heading">
        <p>07</p>
        <h2 id="design-shell">Shell</h2>
      </div>
      <div class="design-shell-demo">
        <div class="design-shell-bar design-shell-bar--wide"><code>.radar-shell</code> 72rem</div>
        <div class="design-shell-bar design-shell-bar--reading"><code>.open-source-shell</code> / <code>.blog-*-shell</code> / <code>.contact-shell</code> 48rem</div>
        <div class="design-shell-bar design-shell-bar--narrow"><code>.legal-shell</code> 42rem · <code>.design-shell</code> 40rem</div>
      </div>
    </section>

  </div>
</section>
