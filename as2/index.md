---
title: "Agentic Secret Storage"
image: "/assets/img/og-image-as2.png"
---

<style>
  .as2-shell {
    position: relative;
    overflow: hidden;
    background: #050906;
    color: #d5ffe5;
  }
  .as2-shell * {
    box-sizing: border-box;
  }
  .as2-shell::before {
    content: "";
    position: absolute;
    inset: -30%;
    background:
      radial-gradient(60% 40% at 20% 20%, rgba(24, 255, 173, 0.20), transparent 60%),
      radial-gradient(55% 45% at 80% 30%, rgba(0, 186, 116, 0.18), transparent 65%),
      radial-gradient(40% 35% at 40% 80%, rgba(0, 120, 70, 0.25), transparent 60%);
    filter: blur(12px);
    opacity: 0.9;
  }
  .as2-shell::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(rgba(22, 255, 164, 0.18) 1px, transparent 1px),
      linear-gradient(135deg, rgba(5, 9, 6, 0.9), rgba(3, 14, 9, 0.2));
    background-size: 18px 18px, cover;
    opacity: 0.5;
    pointer-events: none;
  }
  .as2-grid {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 2.5rem;
    padding: 4.5rem 1.5rem 5.5rem;
    max-width: 1060px;
    margin: 0 auto;
  }
  .as2-hero {
    display: grid;
    gap: 2rem;
    align-items: center;
  }
  .as2-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    border: 1px solid rgba(33, 255, 176, 0.5);
    background: rgba(7, 30, 18, 0.75);
    color: #7dffc3;
    font-family: ui-monospace, SFMono-Regular, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .as2-title {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-weight: 700;
    font-size: clamp(2.6rem, 5vw, 4.4rem);
    line-height: 1.05;
    color: #e8fff1;
    text-shadow: 0 0 18px rgba(36, 255, 177, 0.18);
  }
  .as2-title span {
    color: #33ff9b;
  }
  .as2-subtitle {
    font-size: 1.05rem;
    line-height: 1.7;
    max-width: 600px;
    color: rgba(200, 255, 224, 0.78);
  }
  .as2-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    font-family: ui-monospace, SFMono-Regular, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 0.82rem;
    color: rgba(162, 255, 204, 0.7);
  }
  .as2-pill {
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    border: 1px solid rgba(64, 255, 170, 0.25);
    background: rgba(6, 21, 13, 0.55);
  }
  .as2-frame {
    position: relative;
    padding: 1rem;
    border-radius: 22px;
    border: 1px solid rgba(64, 255, 170, 0.35);
    background: linear-gradient(135deg, rgba(6, 25, 15, 0.9), rgba(6, 12, 9, 0.3));
    box-shadow: 0 0 30px rgba(39, 255, 167, 0.16);
  }
  .as2-frame::before {
    content: "";
    position: absolute;
    inset: 8px;
    border-radius: 16px;
    border: 1px dashed rgba(64, 255, 170, 0.25);
    pointer-events: none;
  }
  .as2-frame img {
    display: block;
    width: 100%;
    border-radius: 14px;
  }
  .as2-panels {
    display: grid;
    gap: 1rem;
  }
  .as2-panel {
    padding: 1.1rem 1.2rem;
    border-radius: 16px;
    border: 1px solid rgba(64, 255, 170, 0.2);
    background: rgba(6, 18, 12, 0.75);
    box-shadow: inset 0 0 18px rgba(12, 255, 154, 0.06);
  }
  .as2-panel h3 {
    margin: 0 0 0.4rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 1rem;
    color: #caffdf;
  }
  .as2-panel p {
    margin: 0;
    font-size: 0.95rem;
    color: rgba(200, 255, 224, 0.7);
  }
  .as2-cta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;
  }
  .as2-cta a {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.8rem 1.2rem;
    border-radius: 999px;
    border: 1px solid rgba(39, 255, 154, 0.5);
    background: linear-gradient(120deg, rgba(19, 74, 44, 0.8), rgba(18, 180, 107, 0.25));
    color: #dcffef;
    font-family: ui-monospace, SFMono-Regular, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    text-decoration: none;
  }
  .as2-cta small {
    color: rgba(200, 255, 224, 0.6);
    font-size: 0.9rem;
  }
  .as2-scanline {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent, rgba(48, 255, 171, 0.07), transparent);
    animation: as2-scan 9s linear infinite;
    mix-blend-mode: screen;
    pointer-events: none;
  }
  @keyframes as2-scan {
    0% { transform: translateY(-60%); }
    100% { transform: translateY(60%); }
  }
  @media (min-width: 900px) {
    .as2-hero {
      grid-template-columns: 1.05fr 0.95fr;
    }
    .as2-grid {
      padding: 6rem 2rem 7rem;
    }
  }
</style>

<section class="as2-shell">
  <div class="as2-scanline"></div>
  <div class="as2-grid">
    <div class="as2-hero">
      <div>
        <span class="as2-badge">Agentic Secret Storage</span>
        <h1 class="as2-title">Secrets that <span>agents</span> can trust.</h1>
        <p class="as2-subtitle">
          AS2 is built for autonomous software: encrypted by default, zero console access, and
          cryptography-first delivery that keeps operators out of the loop.
        </p>
        <div class="as2-meta">
          <span class="as2-pill">No logins</span>
          <span class="as2-pill">Signed handoff</span>
          <span class="as2-pill">Ephemeral access</span>
          <span class="as2-pill">Audit-friendly</span>
        </div>
        <div class="as2-cta">
          <a href="mailto:mot@dotenvx.com" target="_blank">Request early access</a>
          <small>mot@dotenvx.com</small>
        </div>
      </div>
      <div class="as2-frame">
        <img id="as2-rotate" src="/assets/img/as2/2.jpg" alt="AS2 preview" />
      </div>
    </div>
    <div class="as2-panels">
      <div class="as2-panel">
        <h3>Agent-native delivery</h3>
        <p>Secrets are emitted as cryptographic envelopes that your agents can unwrap in isolation.</p>
      </div>
      <div class="as2-panel">
        <h3>Deterministic rotation</h3>
        <p>Key material and credentials rotate on a schedule you can verify, not just hope for.</p>
      </div>
      <div class="as2-panel">
        <h3>No ops console</h3>
        <p>Remove the human breach path: no UI, no clipboard, no accidental exposure.</p>
      </div>
    </div>
  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const img = document.getElementById('as2-rotate')
    if (!img) return

    const frames = [
      // '/assets/img/as2/1.jpg',
      '/assets/img/as2/2.jpg',
      '/assets/img/as2/9.jpg',
      // '/assets/img/as2/3.jpg',
      '/assets/img/as2/4.jpg',
      // '/assets/img/as2/5.jpg',
      '/assets/img/as2/6.jpg',
      '/assets/img/as2/10.jpg',
      // '/assets/img/as2/7.jpg',
      // '/assets/img/as2/8.jpg'
    ]

    let index = 0

    setInterval(() => {
      index = (index + 1) % frames.length
      img.src = frames[index]
    }, 250) // 1000 ms = 1 second
  })
</script>
