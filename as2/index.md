---
title: "Agentic Secret Storage"
layout: radar
---

<section class="radar-hero">
  <div class="radar-shell as2-shell">
    <div class="as2-hero-grid">
      <div>
        <p class="radar-kicker">AS2</p>
        <h1 class="radar-title">Agentic Secret Storage</h1>
        <p class="radar-lede">Encrypted secrets for autonomous software — no console, no human in the loop.</p>
      </div>
      <div class="as2-visual">
        <img id="as2-rotate" src="/assets/img/as2/2.jpg" alt="Agentic Secret Storage" class="as2-image" />
      </div>
    </div>
  </div>
</section>

<section class="radar-section">
  <div class="radar-shell as2-shell as2-prose">
    <p>
      Software is changing, and dotenv must change with it. That is why I built
      <a href="https://as2.dotenvx.com">agentic secret storage (AS2)</a>. Agents run code without humans at terminals, so plaintext
      <code>.env</code> files are the wrong primitive.
    </p>
    <p>
      AS2 is built for autonomous software: encrypted by default, zero console access, and
      cryptography-first delivery that keeps operators out of the loop.
    </p>
    <p>
      It is backed by <a href="https://vestauth.com">Vestauth</a>, the trusted auth layer for agents. Each agent has
      a cryptographic identity, requests are signed with private keys, and verified with public keys.
    </p>
    <p>
      It is what I am using now. <span class="as2-signoff">— motdotla</span>
    </p>
  </div>
</section>

<section class="radar-section">
  <div class="radar-shell as2-shell">
    <h2 class="radar-section-title">Quickstart</h2>
    <div class="as2-prose">
      <p>Install vestauth and initialize your agent.</p>
      <pre><code>npm i -g vestauth

vestauth agent init</code></pre>

      <p>Your agent sets secrets with a simple <code>curl</code> endpoint:</p>
      <pre><code>vestauth agent curl -X POST https://as2.dotenvx.com/set -d '{"KEY":"value"}'</code></pre>

      <p>And your agent gets secrets with a simple <code>curl</code> endpoint:</p>
      <pre><code>vestauth agent curl "https://as2.dotenvx.com/get?key=KEY"</code></pre>

      <p>
        That is it. This primitive unlocks secret access for agents without human-in-the-loop, oauth flows, or API keys.
      </p>
    </div>
  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var img = document.getElementById('as2-rotate')
    if (!img) return

    var frames = [
      '/assets/img/as2/2.jpg',
      '/assets/img/as2/9.jpg',
      '/assets/img/as2/4.jpg',
      '/assets/img/as2/6.jpg',
      '/assets/img/as2/10.jpg'
    ]

    var index = 0
    setInterval(function () {
      index = (index + 1) % frames.length
      img.src = frames[index]
    }, 350)
  })
</script>
