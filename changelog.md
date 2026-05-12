---
title: Changelog
social_title: Dotenvx Ops Changelog
permalink: /changelog/
---

<style>
  body > footer {
    margin-top: 0 !important;
  }

  [data-changelog-entry] > div:first-child {
    transition: color 160ms ease, text-shadow 160ms ease;
  }

  [data-changelog-entry] {
    border: 1px solid transparent;
    border-radius: 10px;
    margin: -0.875rem -1rem;
    padding: 0.875rem 1rem;
    transition: background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
  }

  [data-changelog-entry]:hover,
  [data-changelog-entry]:focus-within {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
  }



  .changelog-card {
    align-items: center;
    aspect-ratio: 16 / 9;
    background: linear-gradient(180deg, rgba(24, 24, 27, 0.94), rgba(9, 9, 11, 0.98));
    border: 1px solid rgba(63, 63, 70, 0.62);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .changelog-card::before {
    background: radial-gradient(circle at 50% 0%, rgba(236, 213, 63, 0.1), transparent 44%);
    content: "";
    inset: 0;
    pointer-events: none;
    position: absolute;
  }

  .changelog-card > span {
    color: #f4f4f5;
    font-size: clamp(1.45rem, 5vw, 2.35rem);
    line-height: 1.05;
    max-width: 82%;
    position: relative;
    text-align: center;
  }

  .changelog-card-command > span {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
    font-size: clamp(1.15rem, 4.4vw, 1.95rem);
  }

  .changelog-card-terminal {
    align-items: flex-start;
    background: #0a0a0a;
    border-color: rgba(113, 113, 122, 0.28);
    box-shadow: 0 0 46px rgba(236, 213, 63, 0.08);
    color: #d4d4d4;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
    justify-content: flex-start;
    padding: 2rem;
  }

  .changelog-card-terminal::before {
    background: radial-gradient(70% 90% at 12% 80%, rgba(236, 213, 63, 0.12) 0%, rgba(236, 213, 63, 0.06) 34%, rgba(236, 213, 63, 0) 74%);
    display: block;
  }

  .changelog-card-terminal pre {
    color: #ededed;
    font-size: clamp(0.72rem, 2vw, 0.98rem);
    font-weight: 400;
    line-height: 1.45;
    margin: 0;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    white-space: pre;
  }

  .terminal-yellow {
    color: #ecd53f;
  }

  .terminal-muted {
    color: #ededed;
  }

  .changelog-google-button {
    align-items: center;
    background: rgba(244, 244, 245, 0.9);
    border: 1px solid rgba(161, 161, 170, 0.7);
    border-radius: 0.35rem;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.42) inset, 0 1px 2px rgba(0, 0, 0, 0.28);
    color: #3f3f46;
    display: inline-flex;
    font-size: clamp(0.95rem, 3vw, 1.35rem);
    font-weight: 400;
    gap: 0.75rem;
    justify-content: center;
    line-height: 1;
    padding: 0.85rem 1.05rem;
  }

  .changelog-google-button svg {
    height: 1.2em;
    width: 1.2em;
  }

  .changelog-keysee-logo {
    height: auto;
    max-width: min(72%, 22rem);
    position: relative;
    width: 100%;
  }

  .changelog-trust-logos {
    align-items: center;
    display: flex;
    gap: clamp(1.15rem, 4vw, 2rem);
    justify-content: center;
    position: relative;
  }

  .changelog-whitepaper-thumb {
    border: 1px solid rgba(228, 228, 231, 0.18);
    border-radius: 4px;
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.34);
    height: 82%;
    max-height: 82%;
    object-fit: contain;
    position: relative;
    width: auto;
  }

  .ops-lockup {
    align-items: baseline;
    display: inline-flex;
    gap: 0.28em;
    white-space: nowrap;
  }

  .ops-glyph {
    color: currentColor;
    flex: 0 0 auto;
    height: 0.72em;
    transform: translateY(0.06em);
    width: 0.72em;
  }

  [data-changelog-entry]:hover > div:first-child,
  [data-changelog-entry]:focus-within > div:first-child {
    color: #ecd53f;
    text-shadow: 0 0 18px rgba(236, 213, 63, 0.28);
  }
</style>

<div class="relative overflow-hidden bg-black text-zinc-100">
  <svg class="absolute h-0 w-0 overflow-hidden" aria-hidden="true" focusable="false">
    <symbol id="ops-shield-cross" viewBox="0 0 24 24">
      <path d="M12 2.5 19 5v6.35c0 4.45-2.84 8.35-7 10.15-4.16-1.8-7-5.7-7-10.15V5l7-2.5Z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"></path>
      <path d="M12 7.1v8.25M8.35 11.2h7.3" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"></path>
    </symbol>
  </svg>
  <div class="pointer-events-none fixed inset-x-0 top-0 z-0 h-[30rem] bg-[radial-gradient(ellipse_at_52%_0%,rgba(85,118,158,0.16)_0%,rgba(35,47,66,0.08)_34%,rgba(0,0,0,0)_70%)]" aria-hidden="true"></div>
  <div class="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0)_24%,rgba(0,0,0,0.74)_100%)]" aria-hidden="true"></div>

  <section class="relative z-10 mx-auto w-full max-w-2xl px-6 pt-14 md:pt-20 pb-9 md:pb-12">
    <div class="text-center">
      <h1 class="font-canela font-normal tracking-[-0.018em] text-[3rem] md:text-[4.2rem] leading-[0.98] text-zinc-100">Changelog</h1>
    </div>
  </section>

  <section class="relative z-10 mx-auto w-full max-w-2xl px-6 pb-20 md:pb-28">
    <div class="space-y-10 md:space-y-12" data-changelog-list>
      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="trust page trust center trust dotenvx compliance security may 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">May 12, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <div class="changelog-trust-logos">
                  {% include logos/framework-soc2.html uid="changelog-soc2" class="h-20 w-20 md:h-28 md:w-28" %}
                  {% include logos/framework-gdpr.html class="h-20 w-20 md:h-28 md:w-28" %}
                </div>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Trust Page</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">We launched <code class="text-zinc-300">trust.dotenvx.com</code> as the home for Dotenvx security, compliance, and trust resources.</p>
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="https://trust.dotenvx.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="google login sign in authentication dotenvx ops may 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">May 11, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <div class="changelog-google-button">
                  <svg viewBox="0 0 18 18" aria-hidden="true"><path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62z"></path><path fill="#34A853" d="M9 18c2.43 0 4.47-.81 5.96-2.18l-2.91-2.26c-.81.54-1.84.86-3.05.86-2.35 0-4.34-1.58-5.05-3.71H.94v2.33A9 9 0 0 0 9 18z"></path><path fill="#FBBC05" d="M3.95 10.71a5.41 5.41 0 0 1 0-3.42V4.96H.94a9 9 0 0 0 0 8.08l3.01-2.33z"></path><path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.43 1.34l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .94 4.96l3.01 2.33C4.66 5.16 6.65 3.58 9 3.58z"></path></svg>
                  <span>Login with Google</span>
                </div>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Google Login</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Users can now sign in with Google, making it faster for teams to get into Dotenvx and start managing their workflows.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="team aware armored keys team selector armor up armor push armor down armor pull may 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">May 7, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card changelog-card-terminal" aria-hidden="true"><pre><span class="terminal-muted">$ dotenvx armor up</span>
<span class="terminal-yellow">⟐ select team</span>
<span class="terminal-yellow">› acme-team</span>
  orbit-labs
  northstar</pre></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Team Armor</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><span class="ops-lockup">Ops <svg class="ops-glyph" aria-hidden="true"><use href="#ops-shield-cross"></use></svg></span> now prompts for the right team when armoring, pushing, pulling, or restoring keys across multi-team accounts.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="keysee whitepaper deterministic visual identity compressed public keys may 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">May 7, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>KEYSEE⎔ Whitepaper</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">KEYSEE⎔ Whitepaper</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Published the KEYSEE whitepaper for deterministic visual identity from compressed public keys.</p>
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="https://keysee.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer">Read Whitepaper</a>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="armor commands armor up armor down armor push armor pull armor move armored keys dotenvx ops may 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">May 6, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card changelog-card-command" aria-hidden="true"><span>$ dotenvx armor up</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Dotenvx Armor</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">armor up</code>, <code class="text-zinc-300">armor down</code>, <code class="text-zinc-300">armor push</code>, <code class="text-zinc-300">armor pull</code>, and <code class="text-zinc-300">armor move</code> shipped for moving private keys under <span class="ops-lockup">Ops <svg class="ops-glyph" aria-hidden="true"><use href="#ops-shield-cross"></use></svg></span> control.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="keysee released deterministic visual identity public keys may 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">May 4, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <svg class="changelog-keysee-logo" viewBox="0 0 448 126" role="img" aria-label="KEYSEE">
                  <text x="36" y="86" fill="#ffffff" stroke="#ffffff" stroke-width="4.2" stroke-linejoin="round" paint-order="stroke fill" font-family="Inter, Arial, Helvetica, sans-serif" font-size="72" font-weight="900" letter-spacing="3">KEYSEE</text>
                  <polygon points="374,45 398,45 412,66 398,87 374,87 360,66" fill="none" stroke="#ecd26b" stroke-width="7" stroke-linejoin="round"></polygon>
                </svg>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">KEYSEE⎔</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">KEYSEE released as a deterministic visual identity system for public keys.</p>
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="https://keysee.io/" target="_blank" rel="noopener noreferrer">Visit Website</a>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="dotenv npm installs monthly 500000000 half billion april 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Apr 26, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>500,000,000 Installs</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">500,000,000 Installs</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">dotenv</code> reached half a billion monthly npm installs.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="cloudflare workers wrangler encrypted env values envs colon dotenvx april 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Apr 24, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Cloudflare Workers Support</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Cloudflare Workers Support</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Use encrypted dotenvx env files cleanly in Cloudflare Workers and Wrangler workflows.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="dotenvx ops released armored keys access control private keys april 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Apr 17, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Dotenvx <span class="ops-lockup">Ops <svg class="ops-glyph" aria-hidden="true"><use href="#ops-shield-cross"></use></svg></span> [beta]</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Dotenvx <span class="ops-lockup">Ops <svg class="ops-glyph" aria-hidden="true"><use href="#ops-shield-cross"></use></svg></span> <span class="ml-1 align-middle text-xs font-normal text-zinc-500">[beta]</span></h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Dotenvx <span class="ops-lockup">Ops <svg class="ops-glyph" aria-hidden="true"><use href="#ops-shield-cross"></use></svg></span> opened to early teams testing hardened private keys, access control, and agent-driven secret workflows.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="npm installs monthly 15000000 dotenvx march 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Mar 1, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>15,000,000 Installs</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">15,000,000 Installs</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">@dotenvx/dotenvx</code> reached 15,000,000 monthly npm installs.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="npm installs monthly 6000000 dotenvx january 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jan 1, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>6,000,000 Installs</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">6,000,000 Installs</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">@dotenvx/dotenvx</code> reached 6,000,000 monthly npm installs.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="gateway openai dotenvx ops gateway start january 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jan 17, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Gateway [beta]</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Gateway <span class="ml-1 align-middle text-xs font-normal text-zinc-500">[beta]</span></h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">dotenvx-ops gateway start</code> launched with initial OpenAI support.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="backup env keys automatic login settings path open project dotenvx ops december 2025">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Dec 22, 2025</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Backup [beta]</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Backup <span class="ml-1 align-middle text-xs font-normal text-zinc-500">[beta]</span></h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><span class="ops-lockup">Ops <svg class="ops-glyph" aria-hidden="true"><use href="#ops-shield-cross"></use></svg></span> added secure <code class="text-zinc-300">.env.keys</code> backup, automatic login, project opening, and path settings for smoother recovery workflows.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="rotation workflows rotate get rotation tokens npm github openai connect dotenvx ops december 2025">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Dec 14, 2025</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Rotation Workflows</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Rotation Workflows</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Rotation tokens, <code class="text-zinc-300">rotate</code>, URI rotation, and npm, GitHub, and OpenAI connection flows landed in <span class="ops-lockup">Ops <svg class="ops-glyph" aria-hidden="true"><use href="#ops-shield-cross"></use></svg></span>.</p>
          </div>
        </div>
      </article>
      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="dotenvx ops command production grade operational primitives teams infrastructure agents september 2025">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Sep 18, 2025</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card changelog-card-command" aria-hidden="true"><span>$ dotenvx ops</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]"><span class="ops-lockup">Ops <svg class="ops-glyph" aria-hidden="true"><use href="#ops-shield-cross"></use></svg></span> Command</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">The first <span class="ops-lockup">Ops <svg class="ops-glyph" aria-hidden="true"><use href="#ops-shield-cross"></use></svg></span> command landed in dotenvx, introducing operational primitives for teams, infrastructure, agents, and more.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="npm installs monthly 2000000 dotenvx june 2025">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jun 1, 2025</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>2,000,000 Installs</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">2,000,000 Installs</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">@dotenvx/dotenvx</code> reached 2,000,000 monthly npm installs.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="dotenvx rotate command rotation whitepaper february 2025">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Feb 20, 2025</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Rotate [beta]</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Rotate <span class="ml-1 align-middle text-xs font-normal text-zinc-500">[beta]</span></h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Added the first <code class="text-zinc-300">dotenvx rotate</code> command.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="whitepaper draft dotenvx pdf decryption at access february 2025">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Feb 20, 2025</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <img class="changelog-whitepaper-thumb" src="/assets/img/whitepaper-thumb.png" alt="" loading="lazy">
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Whitepaper</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Published the dotenvx whitepaper draft.</p>
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="https://dotenvx.com/dotenvx.pdf" target="_blank" rel="noopener noreferrer">Read Whitepaper</a>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="decryption at access main get main set programmatic encrypted values february 2025">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Feb 7, 2025</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Decryption at Access</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Decryption at Access</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Added <code class="text-zinc-300">main.get</code> and <code class="text-zinc-300">main.set</code>, enabling programmatic encrypted value access and write workflows.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="npm installs monthly 1000000 dotenvx january 2025">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jan 1, 2025</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>1,000,000 Installs</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">1,000,000 Installs</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">@dotenvx/dotenvx</code> reached 1,000,000 monthly npm installs.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="monorepo key files env keys file shared env keys docker december 2024">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Dec 13, 2024</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Monorepo Support</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Monorepo Support</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Added <code class="text-zinc-300">--env-keys-file</code> so monorepos can share one <code class="text-zinc-300">.env.keys</code> file across many apps.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="strict mode ignore missing env file decryption failed ci november 2024">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Nov 25, 2024</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>--strict</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Strict Mode</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Added strict failure behavior and ignore controls for CI-safe missing-file and decryption-error handling.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="npm installs monthly 500000 dotenvx september 2024">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Sep 1, 2024</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>500,000 Installs</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">500,000 Installs</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">@dotenvx/dotenvx</code> reached 500,000 monthly npm installs.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="dotenvx 1.0 released next generation config management dotenv june 2024">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jun 24, 2024</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Dotenvx 1.0</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Dotenvx 1.0</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Dotenvx 1.0 shipped as the next generation of configuration management for dotenv, built around three problems developers kept running into: inconsistent env behavior across platforms, juggling multiple environments, and the risk of leaking <code class="text-zinc-300">.env</code> files.</p>
              <p class="mt-3 text-zinc-400 text-sm md:text-base">It introduced a cross-platform <code class="text-zinc-300">dotenvx run -- your-cmd</code> workflow, first-class multiple environment files, and public-key encryption for <code class="text-zinc-300">.env</code> values, replacing the older <code class="text-zinc-300">.env.vault</code> path with a simpler encrypted <code class="text-zinc-300">.env</code> format.</p>
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="/blog/2024/06/24/dotenvx-next-generation-config-management.html" target="_blank" rel="noopener noreferrer">Read Blogpost</a>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="encrypted env files public key encryption safe commit env keys may 2024 dotenvx">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">May 9, 2024</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Encrypted .env</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Encrypted .env</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">.env.vault</code> helped prove that encrypted environment files could work in real teams. It got dotenv users much farther than plaintext secrets alone.</p>
              <p class="mt-3 text-zinc-400 text-sm md:text-base">With dotenvx, that mechanism became deprecated in favor of the new encrypted <code class="text-zinc-300">.env</code> format: public-key encryption, safe-to-commit secret values, and local <code class="text-zinc-300">.env.keys</code> for decryption.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-search-text="work started on dotenvx first release commit history november 2023">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Nov 26, 2023</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-full w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Dotenvx Begins</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Dotenvx Begins</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">From the creator of dotenv, the first dotenvx work began as a next-generation approach to configuration. The goal was to keep the simplicity developers loved about <code class="text-zinc-300">.env</code> files while solving the problems that show up as teams and systems grow.</p>
              <p class="mt-3 text-zinc-400 text-sm md:text-base">That early work laid the foundation for cross-platform env loading, multiple environment files, encrypted environment values, and safer secrets workflows built for modern teams.</p>
          </div>
        </div>
      </article>
    </div>

  </section>
</div>
