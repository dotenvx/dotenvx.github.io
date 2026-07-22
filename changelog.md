---
title: Changelog
social_title: Changelog
image: "/assets/img/og-image-changelog.png"
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
    cursor: pointer;
    margin: -0.875rem -1rem;
    outline: none;
    padding: 0.875rem 1rem;
    scroll-margin-top: 6rem;
    transition: background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
  }

  [data-changelog-entry]:hover,
  [data-changelog-entry]:focus-within {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
  }

  [data-changelog-entry]:focus-visible {
    outline: none;
  }

  [data-changelog-entry]:focus-visible > div:first-child {
    color: #ecd53f;
    text-shadow: 0 0 18px rgba(236, 213, 63, 0.28);
  }

  [data-changelog-entry]:focus-visible > div:nth-child(2) > div:last-child {
    background-color: #ecd53f;
    box-shadow: 0 0 22px rgba(236, 213, 63, 0.34);
  }

  [data-changelog-entry] h3 code {
    color: inherit;
    font-family: inherit;
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
    font-size: clamp(0.8rem, 3.1vw, 1.35rem);
  }

  .changelog-card-version > span {
    font-size: clamp(5rem, 18vw, 8.5rem);
    font-weight: 800;
    line-height: 0.9;
  }

  .changelog-card-brand-icon {
    height: clamp(4.5rem, 14vw, 6rem);
    position: relative;
    width: clamp(4.5rem, 14vw, 6rem);
  }

  .changelog-card-brand-icon-1password {
    color: #f4f4f5;
  }

  .changelog-card-brand-icon-bitwarden {
    color: #f4f4f5;
  }

  .changelog-agent-logos {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .changelog-agent-logo {
    align-items: center;
    color: #f4f4f5;
    display: flex;
    height: clamp(6rem, 20vw, 8.5rem);
    justify-content: center;
    width: clamp(6rem, 20vw, 8.5rem);
  }

  .changelog-agent-logo + .changelog-agent-logo {
    margin-left: clamp(-3rem, -7vw, -2.25rem);
  }

  .changelog-agent-logo svg {
    height: 72%;
    width: 72%;
  }

  .changelog-sublinks {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
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
    max-width: min(32vw, 8.5rem);
    position: relative;
    width: 8.5rem;
  }

  .changelog-keysee-logo-panel {
    align-items: center;
    background: #050505;
    border: 1px solid rgba(63, 63, 70, 0.7);
    border-radius: 0;
    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.46), 0 0 32px rgba(236, 213, 63, 0.06);
    display: inline-flex;
    justify-content: center;
    padding: clamp(0.28rem, 1vw, 0.42rem) clamp(0.38rem, 1.3vw, 0.55rem);
    position: relative;
  }

  .changelog-trust-logos {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .changelog-trust-logos > * + * {
    margin-left: clamp(-1.4rem, -4vw, -0.85rem);
  }

  .changelog-trust-logos > * {
    position: relative;
  }

  .changelog-trust-logos > *:nth-child(1) {
    z-index: 2;
  }

  .changelog-trust-logos > *:nth-child(2) {
    z-index: 1;
  }

  .changelog-python-uv-logos {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .changelog-python-uv-logo {
    height: clamp(4.8rem, 17vw, 7.2rem);
    position: relative;
    width: clamp(4.8rem, 17vw, 7.2rem);
    z-index: 2;
  }

  .changelog-uv-logo {
    height: clamp(2.4rem, 8.5vw, 3.6rem);
    margin-left: clamp(-2rem, -6vw, -1.35rem);
    position: relative;
    width: clamp(2.4rem, 8.5vw, 3.6rem);
    z-index: 1;
  }

  .changelog-whitepaper-thumb {
    border: 1px solid rgba(228, 228, 231, 0.18);
    border-radius: 4px;
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.46);
    height: auto;
    max-height: none;
    object-fit: contain;
    position: relative;
    transform: translateY(30%);
    width: 70%;
  }

  .changelog-key-guard-visual {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: clamp(1rem, 4vw, 1.5rem);
    width: 100%;
  }

  .changelog-key-guard-panel {
    background: rgba(9, 9, 11, 0.82);
    border: 0;
    border-radius: 0;
    box-shadow: none;
    max-width: 21rem;
    overflow: hidden;
    position: relative;
    width: min(100%, 21rem);
  }

  .changelog-key-guard-body {
    padding: 0;
    position: relative;
  }

  .changelog-key-guard-actions {
    display: grid;
    gap: clamp(0.75rem, 3vw, 1rem);
    grid-template-columns: 1fr 1fr;
  }

  .changelog-key-guard-action {
    align-items: center;
    border: 1px solid rgba(113, 113, 122, 0.68);
    border-radius: 6px;
    display: flex;
    font-size: clamp(0.82rem, 2.4vw, 0.96rem);
    font-weight: 650;
    justify-content: center;
    min-height: clamp(3.05rem, 10vw, 4rem);
    padding: 0.9rem 0.9rem;
    white-space: nowrap;
  }

  .changelog-key-guard-approve,
  .changelog-key-guard-deny {
    background: rgba(9, 9, 11, 0.72);
    color: #d4d4d8;
  }

  .changelog-enclave-state {
    align-items: center;
    color: #e4e4e7;
    display: flex;
    font-size: clamp(1.35rem, 4vw, 2rem);
    font-weight: 650;
    gap: clamp(0.8rem, 3vw, 1.1rem);
    position: relative;
  }

  .changelog-cloudflare-logo {
    height: auto;
    max-width: min(36%, 10rem);
    position: relative;
    width: 100%;
  }

  .changelog-next-logo {
    color: #f4f4f5;
    height: clamp(5rem, 18vw, 8rem);
    position: relative;
    width: clamp(5rem, 18vw, 8rem);
  }

  .changelog-macos-logo {
    color: #f4f4f5;
    height: auto;
    max-width: min(46%, 12rem);
    position: relative;
    width: 100%;
  }

  .changelog-powershell-logo {
    color: #f4f4f5;
    height: clamp(5rem, 18vw, 8rem);
    position: relative;
    width: clamp(5rem, 18vw, 8rem);
  }

  .changelog-install-chart {
    height: 100%;
    position: relative;
    width: 100%;
  }

  .changelog-install-chart text {
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
    font-size: 0.88em;
    line-height: 1;
    transform: translateY(0.02em);
  }

  [data-changelog-entry]:hover > div:first-child,
  [data-changelog-entry]:focus-within > div:first-child {
    color: #ecd53f;
    text-shadow: 0 0 18px rgba(236, 213, 63, 0.28);
  }

  [data-changelog-entry][data-copied-link="true"] > div:first-child::after {
    color: #ecd53f;
    content: " copied";
    display: block;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    margin-top: 0.25rem;
    text-shadow: 0 0 14px rgba(236, 213, 63, 0.22);
  }
</style>

<div class="relative overflow-hidden bg-black text-zinc-100">
  <div class="pointer-events-none fixed inset-x-0 top-0 z-0 h-[30rem] bg-[radial-gradient(ellipse_at_52%_0%,rgba(85,118,158,0.16)_0%,rgba(35,47,66,0.08)_34%,rgba(0,0,0,0)_70%)]" aria-hidden="true"></div>
  <div class="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0)_24%,rgba(0,0,0,0.74)_100%)]" aria-hidden="true"></div>

  <section class="relative z-10 mx-auto w-full max-w-2xl px-6 pt-14 md:pt-20 pb-9 md:pb-12">
    <div class="text-center">
      <h1 class="font-canela font-normal tracking-[-0.018em] text-[3rem] md:text-[4.2rem] leading-[0.98] text-zinc-100">Changelog</h1>
    </div>
  </section>

  <section class="relative z-10 mx-auto w-full max-w-2xl px-6 pb-20 md:pb-28">
    <div class="space-y-10 md:space-y-12" data-changelog-list>
      <article id="2026-07-22-dotenv-weekly-installs" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-07-22" data-search-text="dotenv npm installs weekly 150000000 150 million july 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jul 22, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card changelog-card-version" aria-hidden="true"><span>150M</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">150,000,000 Weekly Installs</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">dotenv</code> just broke 150 million weekly npm installs.</p>
          </div>
        </div>
      </article>

      <article id="2026-07-21-bitwarden" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-07-21" data-search-text="bitwarden bw secrets password manager dotenvx july 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jul 21, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <svg class="changelog-card-brand-icon changelog-card-brand-icon-bitwarden" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.722.296A.964.964 0 0 0 21.018 0H2.982a.959.959 0 0 0-.703.296.96.96 0 0 0-.297.702v12c0 .895.174 1.783.523 2.665.349.88.783 1.66 1.3 2.345.517.68 1.132 1.346 1.848 1.993a21.807 21.807 0 0 0 1.98 1.609c.605.427 1.235.83 1.893 1.212.657.381 1.125.638 1.4.772.276.134.5.241.664.311a.916.916 0 0 0 .814 0c.168-.073.389-.177.667-.311.275-.134.743-.394 1.401-.772a25.305 25.305 0 0 0 1.894-1.212A21.891 21.891 0 0 0 18.348 20c.716-.647 1.33-1.31 1.847-1.993s.949-1.463 1.3-2.345c.35-.879.524-1.767.524-2.665V1.001a.95.95 0 0 0-.297-.705zm-2.325 12.815c0 4.344-7.397 8.087-7.397 8.087V2.57h7.397v10.54z"></path>
                </svg>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Bitwarden</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Use Bitwarden secrets in dotenvx with a <code class="text-zinc-300">bw://</code> reference.</p>
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="/docs/secrets-in-bitwarden">Read documentation</a>
          </div>
        </div>
      </article>

      <article id="2026-07-20-1password" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-07-20" data-search-text="1password op secrets password manager dotenvx july 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jul 20, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <svg class="changelog-card-brand-icon changelog-card-brand-icon-1password" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c6.627 0 12 5.373 12 12 0 6.628-5.373 12-12 12S0 18.628 0 12C0 5.373 5.373 0 12 0m-.893 4.86c-.485 0-.727.001-.913.095a.87.87 0 0 0-.378.379c-.094.185-.095.428-.095.912v2.747c0 .12 0 .182.016.238q.02.075.065.138a1 1 0 0 0 .175.162l.695.564c.113.092.17.139.19.194a.22.22 0 0 1 0 .15c-.02.056-.077.102-.19.194l-.695.564a1 1 0 0 0-.175.162.4.4 0 0 0-.065.138 1 1 0 0 0-.016.238v6.019c0 .485 0 .728.095.913a.87.87 0 0 0 .378.378c.186.094.428.094.913.094h1.786c.485 0 .727 0 .913-.094a.87.87 0 0 0 .378-.378c.095-.185.095-.428.095-.913v-2.747c0-.12 0-.182-.016-.238a.4.4 0 0 0-.065-.138 1 1 0 0 0-.175-.162l-.695-.564c-.113-.092-.17-.138-.191-.193a.22.22 0 0 1 0-.152c.02-.055.078-.1.19-.193l.696-.564a1 1 0 0 0 .175-.162.4.4 0 0 0 .065-.138 1 1 0 0 0 .016-.238V6.246c0-.484 0-.727-.095-.912a.87.87 0 0 0-.378-.379c-.186-.094-.428-.094-.913-.094Z"></path>
                </svg>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">1Password</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Use 1Password secrets in dotenvx with an <code class="text-zinc-300">op://</code> reference.</p>
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="/docs/secrets-in-1password">Read documentation</a>
          </div>
        </div>
      </article>

      <article id="2026-07-16-validate" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-07-16" data-search-text="validate validation env example dotenvx run strict july 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jul 16, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <div class="changelog-enclave-state">
                  <code>.env.example</code>
                </div>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Validate</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Check your <code class="text-zinc-300">.env</code> against <code class="text-zinc-300">.env.example</code> before your app runs.</p>
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="/docs/cli/validate">Read documentation</a>
          </div>
        </div>
      </article>

      <article id="2026-07-15-redact" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-07-15" data-search-text="redact secrets command output stdout stderr dotenvx run july 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jul 15, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <div class="changelog-agent-logos">
                  <div class="changelog-agent-logo">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"></path>
                    </svg>
                  </div>
                  <div class="changelog-agent-logo">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Redact secrets from Claude and Codex</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Keep secrets out of logs and agent output.</p>
              <div class="changelog-sublinks mt-2">
                <a class="font-normal text-[#ecd53f] no-underline hover:underline" href="/docs/secrets-in-claude">Claude guide</a>
                <a class="font-normal text-[#ecd53f] no-underline hover:underline" href="/docs/secrets-in-codex">Codex guide</a>
              </div>
          </div>
        </div>
      </article>

      <article id="2026-07-14-ls" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-07-14" data-search-text="dotenvx ls json progress scan traverse env files directories july 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jul 14, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card changelog-card-command" aria-hidden="true"><span>$ dotenvx ls --json</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]"><code class="text-zinc-300">dotenvx ls</code></h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Now with progress updates and <code class="text-zinc-300">--json</code> output.</p>
          </div>
        </div>
      </article>

      <article id="2026-07-14-enclaved-private-keys" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-07-14" data-search-text="software enclave enclaved armored private keys server side decryption armor july 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jul 14, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <div class="changelog-enclave-state">
                  <span>Enclaved</span>
                </div>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Enclaved Private Keys</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Dotenvx can now decrypt with Armored private keys held inside a software enclave, so the private key does not have to leave its protected environment.</p>
          </div>
        </div>
      </article>

      <article id="2026-07-13-armor-sessions" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-07-13" data-search-text="armor login token native os secret store status settings session macos keychain linux windows credential manager july 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jul 13, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                {% include logos/macos.html class="changelog-macos-logo" %}
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Safer Armor Sessions</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Dotenvx now secures your Armor token in your OS-native secret store. Safer for you and safer with agents.</p>
          </div>
        </div>
      </article>

      <article id="2026-07-13-mask" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-07-13" data-search-text="mask masked values secrets run get decrypt stdout config library sdk dotenvx july 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jul 13, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card changelog-card-command" aria-hidden="true"><span>--mask</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Masked Values</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Use <code class="text-zinc-300">--mask</code> with <code class="text-zinc-300">run</code>, <code class="text-zinc-300">get</code>, and <code class="text-zinc-300">decrypt --stdout</code>, or <code class="text-zinc-300">mask: true</code> with <code class="text-zinc-300">config()</code> and <code class="text-zinc-300">get()</code>, to keep secret values obscured.</p>
          </div>
        </div>
      </article>

      <article id="2026-07-11-native" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-07-11" data-search-text="native macos keychain linux secret service windows credential manager private keys local storage dotenvx native up down push pull july 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jul 11, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card changelog-card-command" aria-hidden="true"><span>$ dotenvx native up</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Native Secret Stores</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Move private keys into macOS Keychain, Linux Secret Service, or Windows Credential Manager with <code class="text-zinc-300">dotenvx native</code>.</p>
          </div>
        </div>
      </article>

      <article id="2026-07-10-monorepo-directories" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-07-10" data-search-text="monorepo directories directory path workspace root env keys file nextjs convention dotenvx run get config july 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jul 10, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Monorepos</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Monorepo Directories</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Point <code class="text-zinc-300">-f</code>, <code class="text-zinc-300">-fk</code>, or <code class="text-zinc-300">config(path:)</code> at a directory to load a workspace's env files and conventions from its monorepo root.</p>
          </div>
        </div>
      </article>

      <article id="2026-07-08-lock-private-keys" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-07-08" data-search-text="lock password passphrase protect private keys env keys dotenvx lock up down july 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jul 8, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card changelog-card-command" aria-hidden="true"><span>$ dotenvx lock up</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Passphrase Protected Secrets</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Use <code class="text-zinc-300">dotenvx lock up</code> and <code class="text-zinc-300">dotenvx lock down</code> to protect private keys in <code class="text-zinc-300">.env.keys</code> with a local passphrase.</p>
          </div>
        </div>
      </article>

      <article id="2026-07-06-plain-values" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-07-06" data-search-text="plain plaintext _plain public env values precommit prebuild sealed dotenvx primitives july 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jul 6, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card changelog-card-command" aria-hidden="true"><span>HELLO_PLAIN</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">_PLAIN Values</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Use <code class="text-zinc-300">_PLAIN</code> to keep a value unencrypted.</p>
          </div>
        </div>
      </article>

      <article id="2026-06-30-installs" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-06-30" data-search-text="npm installs monthly 30000000 dotenvx june 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jun 30, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <svg class="changelog-install-chart" viewBox="0 0 720 405" preserveAspectRatio="none">
                  <rect x="0" y="0" width="720" height="405" fill="#09090b"></rect>
                  <g stroke="#27272a" stroke-width="1">
                    <path d="M64 40H690M64 116H690M64 192H690M64 268H690M64 344H690"></path>
                    <path d="M64 40V344M180 40V344M296 40V344M412 40V344M528 40V344M644 40V344"></path>
                  </g>
                  <g fill="#71717a" font-size="14" font-weight="500">
                    <text x="28" y="47">30M</text>
                    <text x="28" y="199">15M</text>
                    <text x="28" y="351">0</text>
                    <text x="170" y="374">Sep 2024</text>
                    <text x="492" y="374">Jun 2026</text>
                  </g>
                  <path d="M64 344 C118 344 164 341 210 337 C256 332 292 322 326 306 C360 290 388 268 420 238 C452 208 482 169 516 130 C550 91 594 58 632 38 C656 25 674 17 690 24 L690 344 L64 344 Z" fill="#ecd53f" fill-opacity="0.14"></path>
                  <path d="M64 344 C118 344 164 341 210 337 C256 332 292 322 326 306 C360 290 388 268 420 238 C452 208 482 169 516 130 C550 91 594 58 632 38 C656 25 674 17 690 24" fill="none" stroke="#ecd53f" stroke-width="3.5" stroke-linecap="round"></path>
                  <circle cx="690" cy="24" r="6" fill="#ecd53f"></circle>
                  <circle cx="690" cy="24" r="11" fill="none" stroke="#ecd53f" stroke-opacity="0.38" stroke-width="2"></circle>
                  <g style="filter: drop-shadow(0 12px 16px rgba(0,0,0,0.42));">
                    <rect x="244" y="78" width="330" height="118" rx="12" fill="#f4f4f5"></rect>
                    <rect x="244.5" y="78.5" width="329" height="117" rx="11.5" fill="none" stroke="#d4d4d8"></rect>
                    <text x="409" y="119" text-anchor="middle" fill="#18181b" font-size="22" font-weight="700">npm:@dotenvx/dotenvx</text>
                    <circle cx="300" cy="151" r="5" fill="#ecd53f"></circle>
                    <text x="318" y="160" fill="#18181b" font-size="26" font-weight="700">30,000,000</text>
                  </g>
                </svg>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">30,000,000 Installs</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">@dotenvx/dotenvx</code> reached 30,000,000 monthly npm installs.</p>
          </div>
        </div>
      </article>

      <article id="2026-06-30-dotenvx-2-primitives" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-06-30" data-search-text="dotenvx 2 primitives resolvers transforms keyring parse scan encrypt decrypt set get run config june 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jun 30, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card changelog-card-version" aria-hidden="true"><span>2.0</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Dotenvx 2.0</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Dotenvx is now built on <code class="text-zinc-300">@dotenvx/primitives</code>, a cleaner foundation for parsing, keyrings, and transforms.</p>
          </div>
        </div>
      </article>

      <article id="2026-06-24-powershell-npm-binaries" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-06-24" data-search-text="powershell windows npm shim named binaries pack ci dotenvx encrypted env local june 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jun 24, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">{% include logos/powershell.html class="changelog-powershell-logo" %}</div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">PowerShell</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Dotenvx now runs correctly across Windows PowerShell.</p>
          </div>
        </div>
      </article>

      <article id="2026-06-19-next-env" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-06-19" data-search-text="next env dotenvx next-env nextjs encrypted env files next environment loading vercel june 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jun 19, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">{% include logos/next.html class="changelog-next-logo" %}</div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Dotenvx Next.js</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Now available: <code class="text-zinc-300">@dotenvx/next-env</code>, a drop-in replacement for Next.js <code class="text-zinc-300">@next/env</code> that lets encrypted dotenvx files load during Next.js' own environment-loading step.</p>
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="/docs/secrets-in-nextjs">Read documentation</a>
          </div>
        </div>
      </article>

      <article id="2026-06-16-armor-first-class" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-06-16" data-search-text="armor first class dotenvx armor login logout professional security local first june 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jun 16, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>First-Class ⛨</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Armor ⛨ in Dotenvx</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Dotenvx Armor is now built directly into dotenvx. Run <code class="text-zinc-300">dotenvx armor login</code> to get started.</p>
          </div>
        </div>
      </article>

      <article id="2026-06-10-key-guard-development" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-06-10" data-search-text="key guard development approval context lifecycle approve deny expired command device location private key dotenvx armor june 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jun 10, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <div class="changelog-key-guard-visual">
                  <div class="changelog-key-guard-panel">
                    <div class="changelog-key-guard-body">
                      <div class="changelog-key-guard-actions">
                        <div class="changelog-key-guard-action changelog-key-guard-approve">Approve</div>
                        <div class="changelog-key-guard-action changelog-key-guard-deny">Deny</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Key Guard Development</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Work has started on Key Guard, a new Armor feature for approving private-key access only when a workflow needs it. Early development includes approval requests, approve and deny decisions, expiration, and helpful request context like command, device, and location.</p>
          </div>
        </div>
      </article>

      <article id="2026-06-01-soc2-observation" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-06-01" data-search-text="soc 2 type 2 observation process compliance trust center audit evidence controls security confidentiality availability june 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jun 1, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <div class="changelog-trust-logos">
                  {% include logos/framework-soc2.html uid="changelog-soc2-observation" class="h-20 w-20 md:h-28 md:w-28" %}
                </div>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">SOC 2 Observation Started</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">We started our SOC 2 Type 2 observation process. This begins the formal period where controls are operated, evidence is collected, and Dotenvx moves toward independent assurance for security, confidentiality, and availability.</p>
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="https://trust.dotenvx.com" target="_blank" rel="noopener noreferrer">Visit Trust Center</a>
          </div>
        </div>
      </article>

      <article id="2026-06-01-automation-tokens" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-06-01" data-search-text="automation token armor dotenvx run token ci agents keypair private key june 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jun 1, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card changelog-card-command" aria-hidden="true"><span>$ dotenvx run --token</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Automation Tokens for Armor</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">dotenvx run</code> now accepts an optional <code class="text-zinc-300">--token</code> for Armor users, making it easier to run approved secret workflows from automation, CI, and agentic environments.</p>
          </div>
        </div>
      </article>

      <article id="2026-05-31" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-05-31" data-search-text="ops is now armor dotenvx ops renamed dotenvx armor product copy docs cli references service constants account messaging urls may 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">May 31, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Ops is now Armor ⛨</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Ops is now Armor ⛨</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Dotenvx Ops has been renamed to Dotenvx Armor ⛨. Product copy, docs, CLI references, service constants, account messaging, and URLs now use Armor ⛨ naming.</p>
          </div>
        </div>
      </article>

      <article id="2026-05-21" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-05-21" data-search-text="rate limiting rack attack protection attackers traffic reliability armor dotenvx ops may 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">May 21, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Rate Limiting</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Rate Limiting</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">We added lenient rate limiting today to keep attackers at bay and make sure our systems serve you well.</p>
          </div>
        </div>
      </article>

      <article id="2026-05-15" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-05-15" data-search-text="organization avatar team avatar settings upload png jpeg gif webp armor dotenvx ops may 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">May 15, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Team Avatars</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Team Avatars</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">You can now change the avatar for your organization under Settings.</p>
          </div>
        </div>
      </article>

      <article id="2026-05-14" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-05-14" data-search-text="encrypt key storage armored local dotenvx ops may 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">May 14, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card changelog-card-terminal" aria-hidden="true"><pre><span class="terminal-muted">$ dotenvx encrypt</span>
<span class="terminal-yellow">? Select key storage</span>
  Local (.env.keys)
<span class="terminal-yellow">› Armored ⛨</span></pre></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Choose Key Storage</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">When using <span class="ops-lockup">Ops <span class="ops-glyph" aria-hidden="true">⛨</span></span>, get prompted for a local or armored key when creating for the first time.</p>
          </div>
        </div>
      </article>

      <article id="2026-05-13" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-05-13" data-search-text="python uv guide secrets dotenvx docs may 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">May 13, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <div class="changelog-python-uv-logos">
                  {% include logos/python.html class="changelog-python-uv-logo" %}
                  {% include logos/uv.html class="changelog-uv-logo" %}
                </div>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Python UV</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">We added a new guide for encrypting secrets in Python projects using uv.</p>
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="https://dotenvx.com/docs/secrets-in-uv" target="_blank" rel="noopener noreferrer">Encrypt secrets in uv</a>
          </div>
        </div>
      </article>

      <article id="2026-05-12" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-05-12" data-search-text="trust page trust center trust dotenvx compliance security may 2026">
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
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="https://trust.dotenvx.com" target="_blank" rel="noopener noreferrer">Visit Trust Page</a>
          </div>
        </div>
      </article>

      <article id="2026-05-11" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-05-11" data-search-text="google login sign in authentication dotenvx ops may 2026">
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

      <article id="2026-05-08" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-05-08" data-search-text="automated pentest security assessment zap nmap nuclei testssl gitleaks trivy semgrep hostedscan ops dotenvx may 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">May 8, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Pentest - May 2026</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Pentest - May 2026</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">We ran an automated security assessment against <code class="text-zinc-300">armor.dotenvx.com</code> and supporting application code, covering public network exposure, TLS posture, passive web behavior, dependency vulnerabilities, static analysis, and secret exposure.</p>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Evidence was retained from HostedScan, Nuclei, OWASP ZAP, Nmap, testssl.sh, Gitleaks, Trivy, and Semgrep. Remediation work will get its own follow-up entry.</p>
          </div>
        </div>
      </article>

      <article id="2026-05-07" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-05-07" data-search-text="team aware armored keys team selector armor up armor push armor down armor pull may 2026">
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
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><span class="ops-lockup">Ops <span class="ops-glyph" aria-hidden="true">⛨</span></span> now prompts for the right team when armoring, pushing, pulling, or restoring keys across multi-team accounts.</p>
          </div>
        </div>
      </article>

      <article class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-05-07" data-search-text="keysee whitepaper deterministic visual identity compressed public keys may 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">May 7, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <img class="changelog-whitepaper-thumb" src="/assets/img/keysee-whitepaper-thumb.png" alt="" loading="lazy">
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">KEYSEE⎔ Whitepaper</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Published the KEYSEE whitepaper for deterministic visual identity from compressed public keys.</p>
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="https://keysee.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer">Read Whitepaper</a>
          </div>
        </div>
      </article>

      <article id="2026-05-06" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-05-06" data-search-text="armor commands armor up armor down armor push armor pull armor move armored keys dotenvx ops may 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">May 6, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card changelog-card-command" aria-hidden="true"><span>$ dotenvx armor up</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Dotenvx Armor</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">armor up</code>, <code class="text-zinc-300">armor down</code>, <code class="text-zinc-300">armor push</code>, <code class="text-zinc-300">armor pull</code>, and <code class="text-zinc-300">armor move</code> shipped for moving private keys under <span class="ops-lockup">Ops <span class="ops-glyph" aria-hidden="true">⛨</span></span> control.</p>
          </div>
        </div>
      </article>

      <article id="2026-05-04" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-05-04" data-search-text="keysee released deterministic visual identity public keys may 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">May 4, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <div class="changelog-keysee-logo-panel">
                  <svg class="changelog-keysee-logo" viewBox="0 0 448 126" role="img" aria-label="KEYSEE">
                    <text x="36" y="86" fill="#ffffff" stroke="#ffffff" stroke-width="4.2" stroke-linejoin="round" paint-order="stroke fill" font-family="Inter, Arial, Helvetica, sans-serif" font-size="72" font-weight="900" letter-spacing="3">KEYSEE</text>
                    <polygon points="374,45 398,45 412,66 398,87 374,87 360,66" fill="none" stroke="#ecd26b" stroke-width="7" stroke-linejoin="round"></polygon>
                  </svg>
                </div>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">KEYSEE⎔</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">KEYSEE released as a deterministic visual identity system for public keys.</p>
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="https://keysee.io/" target="_blank" rel="noopener noreferrer">Visit Website</a>
          </div>
        </div>
      </article>

      <article id="2026-04-26" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-04-26" data-search-text="dotenv npm installs monthly 500000000 half billion april 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Apr 26, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <svg class="changelog-install-chart" viewBox="0 0 720 405" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="install-area-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stop-color="#ecd53f" stop-opacity="0.24"></stop>
                      <stop offset="1" stop-color="#ecd53f" stop-opacity="0.04"></stop>
                    </linearGradient>
                    <filter id="install-card-shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.42"></feDropShadow>
                    </filter>
                  </defs>

                  <rect x="0" y="0" width="720" height="405" fill="#09090b"></rect>
                  <g stroke="#27272a" stroke-width="1">
                    <path d="M64 40H690M64 116H690M64 192H690M64 268H690M64 344H690"></path>
                    <path d="M64 40V344M180 40V344M296 40V344M412 40V344M528 40V344M644 40V344"></path>
                  </g>
                  <g fill="#71717a" font-size="14" font-weight="500">
                    <text x="28" y="47">500M</text>
                    <text x="28" y="123">400M</text>
                    <text x="28" y="199">300M</text>
                    <text x="28" y="275">200M</text>
                    <text x="28" y="351">0</text>
                    <text x="170" y="374">Apr 2019</text>
                    <text x="492" y="374">Jun 2023</text>
                  </g>
                  <path d="M64 344 C96 344 118 343 146 343 C176 342 196 342 224 339 C252 336 270 330 292 322 C314 314 328 302 350 289 C372 276 388 250 408 232 C430 212 448 186 470 170 C492 154 506 136 530 123 C552 111 572 96 594 86 C616 76 630 66 646 49 C662 32 674 18 690 24 L690 344 L64 344 Z" fill="url(#install-area-gradient)"></path>
                  <path d="M64 344 C96 344 118 343 146 343 C176 342 196 342 224 339 C252 336 270 330 292 322 C314 314 328 302 350 289 C372 276 388 250 408 232 C430 212 448 186 470 170 C492 154 506 136 530 123 C552 111 572 96 594 86 C616 76 630 66 646 49 C662 32 674 18 690 24" fill="none" stroke="#ecd53f" stroke-width="3.5" stroke-linecap="round"></path>
                  <circle cx="690" cy="24" r="6" fill="#ecd53f"></circle>
                  <circle cx="690" cy="24" r="11" fill="none" stroke="#ecd53f" stroke-opacity="0.38" stroke-width="2"></circle>
                  <g filter="url(#install-card-shadow)">
                    <rect x="284" y="78" width="260" height="118" rx="12" fill="#f4f4f5"></rect>
                    <rect x="284.5" y="78.5" width="259" height="117" rx="11.5" fill="none" stroke="#d4d4d8"></rect>
                    <text x="414" y="119" text-anchor="middle" fill="#18181b" font-size="22" font-weight="700">npm:dotenv</text>
                    <circle cx="324" cy="151" r="5" fill="#ecd53f"></circle>
                    <text x="342" y="160" fill="#18181b" font-size="26" font-weight="700">500,000,000</text>
                  </g>
                </svg>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">500,000,000 Installs</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">dotenv</code> reached half a billion monthly npm installs.</p>
          </div>
        </div>
      </article>

      <article id="2026-04-24" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-04-24" data-search-text="cloudflare workers wrangler encrypted env values envs colon dotenvx april 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Apr 24, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">{% include logos/cloudflare.html class="changelog-cloudflare-logo" %}</div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Cloudflare Workers Support</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Use encrypted dotenvx env files cleanly in Cloudflare Workers and Wrangler workflows.</p>
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="https://dotenvx.com/docs/secrets-in-cloudflare-workers" target="_blank" rel="noopener noreferrer">Read documentation</a>
          </div>
        </div>
      </article>

      <article id="2026-04-17" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-04-17" data-search-text="dotenvx ops released armored keys access control private keys april 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Apr 17, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Dotenvx <span class="ops-lockup">Ops <span class="ops-glyph" aria-hidden="true">⛨</span></span></span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Dotenvx <span class="ops-lockup">Ops <span class="ops-glyph" aria-hidden="true">⛨</span></span> <span class="ml-1 align-middle text-xs font-normal text-zinc-500">[beta]</span></h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Dotenvx <span class="ops-lockup">Ops <span class="ops-glyph" aria-hidden="true">⛨</span></span> opened to early teams testing hardened private keys, access control, and agent-driven secret workflows.</p>
          </div>
        </div>
      </article>

      <article id="2026-03-01" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-03-01" data-search-text="npm installs monthly 15000000 dotenvx march 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Mar 1, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <svg class="changelog-install-chart" viewBox="0 0 720 405" preserveAspectRatio="none">
                  <rect x="0" y="0" width="720" height="405" fill="#09090b"></rect>
                  <g stroke="#27272a" stroke-width="1">
                    <path d="M64 40H690M64 116H690M64 192H690M64 268H690M64 344H690"></path>
                    <path d="M64 40V344M180 40V344M296 40V344M412 40V344M528 40V344M644 40V344"></path>
                  </g>
                  <g fill="#71717a" font-size="14" font-weight="500">
                    <text x="28" y="47">15M</text>
                    <text x="28" y="199">7.5M</text>
                    <text x="28" y="351">0</text>
                    <text x="170" y="374">Sep 2024</text>
                    <text x="492" y="374">Mar 2026</text>
                  </g>
                  <path d="M64 344 C118 344 164 340 210 336 C256 331 292 318 326 296 C360 274 388 244 420 210 C452 176 482 139 516 112 C550 85 594 64 632 42 C656 28 674 20 690 24 L690 344 L64 344 Z" fill="#ecd53f" fill-opacity="0.14"></path>
                  <path d="M64 344 C118 344 164 340 210 336 C256 331 292 318 326 296 C360 274 388 244 420 210 C452 176 482 139 516 112 C550 85 594 64 632 42 C656 28 674 20 690 24" fill="none" stroke="#ecd53f" stroke-width="3.5" stroke-linecap="round"></path>
                  <circle cx="690" cy="24" r="6" fill="#ecd53f"></circle>
                  <circle cx="690" cy="24" r="11" fill="none" stroke="#ecd53f" stroke-opacity="0.38" stroke-width="2"></circle>
                  <g style="filter: drop-shadow(0 12px 16px rgba(0,0,0,0.42));">
                    <rect x="244" y="78" width="330" height="118" rx="12" fill="#f4f4f5"></rect>
                    <rect x="244.5" y="78.5" width="329" height="117" rx="11.5" fill="none" stroke="#d4d4d8"></rect>
                    <text x="409" y="119" text-anchor="middle" fill="#18181b" font-size="22" font-weight="700">npm:@dotenvx/dotenvx</text>
                    <circle cx="300" cy="151" r="5" fill="#ecd53f"></circle>
                    <text x="318" y="160" fill="#18181b" font-size="26" font-weight="700">15,000,000</text>
                  </g>
                </svg>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">15,000,000 Installs</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">@dotenvx/dotenvx</code> reached 15,000,000 monthly npm installs.</p>
          </div>
        </div>
      </article>

      <article id="2026-02-17" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-02-17" data-search-text="nextjs next vercel serverless encrypted env instrumentation dotenvx february 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Feb 17, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">{% include logos/next.html class="changelog-next-logo" %}</div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Next.js Setup</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Published a practical guide for using encrypted <code class="text-zinc-300">.env</code> files with Next.js and Vercel, including the serverless runtime gotcha around <code class="text-zinc-300">instrumentation.ts</code>.</p>
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="/blog/2026/02/17/dotenvx-nextjs.html" target="_blank" rel="noopener noreferrer">Read Blogpost</a>
          </div>
        </div>
      </article>

      <article id="2026-02-10" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-02-10" data-search-text="vestauth agent identity remove secrets signature agent uid february 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Feb 10, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Vestauth</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Vestauth</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Research began into removing secrets entirely from agent workflows by giving agents durable identity. Instead of passing long-lived credentials around, Vestauth explores signed agent identity as the trust primitive.</p>
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="https://vestauth.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
          </div>
        </div>
      </article>

      <article id="2026-01-17" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-01-17" data-search-text="gateway openai dotenvx ops gateway start january 2026">
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

      <article id="2026-01-01" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2026-01-01" data-search-text="npm installs monthly 6000000 dotenvx january 2026">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jan 1, 2026</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <svg class="changelog-install-chart" viewBox="0 0 720 405" preserveAspectRatio="none">
                  <rect x="0" y="0" width="720" height="405" fill="#09090b"></rect>
                  <g stroke="#27272a" stroke-width="1">
                    <path d="M64 40H690M64 116H690M64 192H690M64 268H690M64 344H690"></path>
                    <path d="M64 40V344M180 40V344M296 40V344M412 40V344M528 40V344M644 40V344"></path>
                  </g>
                  <g fill="#71717a" font-size="14" font-weight="500">
                    <text x="28" y="47">6M</text>
                    <text x="28" y="199">3M</text>
                    <text x="28" y="351">0</text>
                    <text x="170" y="374">Sep 2024</text>
                    <text x="492" y="374">Jan 2026</text>
                  </g>
                  <path d="M64 344 C126 344 176 341 224 336 C272 331 314 318 352 294 C390 270 424 232 458 196 C492 160 528 124 566 94 C604 64 650 36 690 42 L690 344 L64 344 Z" fill="#ecd53f" fill-opacity="0.14"></path>
                  <path d="M64 344 C126 344 176 341 224 336 C272 331 314 318 352 294 C390 270 424 232 458 196 C492 160 528 124 566 94 C604 64 650 36 690 42" fill="none" stroke="#ecd53f" stroke-width="3.5" stroke-linecap="round"></path>
                  <circle cx="690" cy="42" r="6" fill="#ecd53f"></circle>
                  <circle cx="690" cy="42" r="11" fill="none" stroke="#ecd53f" stroke-opacity="0.38" stroke-width="2"></circle>
                  <g style="filter: drop-shadow(0 12px 16px rgba(0,0,0,0.42));">
                    <rect x="244" y="78" width="330" height="118" rx="12" fill="#f4f4f5"></rect>
                    <rect x="244.5" y="78.5" width="329" height="117" rx="11.5" fill="none" stroke="#d4d4d8"></rect>
                    <text x="409" y="119" text-anchor="middle" fill="#18181b" font-size="22" font-weight="700">npm:@dotenvx/dotenvx</text>
                    <circle cx="300" cy="151" r="5" fill="#ecd53f"></circle>
                    <text x="318" y="160" fill="#18181b" font-size="26" font-weight="700">6,000,000</text>
                  </g>
                </svg>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">6,000,000 Installs</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">@dotenvx/dotenvx</code> reached 6,000,000 monthly npm installs.</p>
          </div>
        </div>
      </article>

      <article id="2025-12-22" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2025-12-22" data-search-text="backup env keys automatic login settings path open project dotenvx ops december 2025">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Dec 22, 2025</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Backup [beta]</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Backup <span class="ml-1 align-middle text-xs font-normal text-zinc-500">[beta]</span></h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><span class="ops-lockup">Ops <span class="ops-glyph" aria-hidden="true">⛨</span></span> added secure <code class="text-zinc-300">.env.keys</code> backup, automatic login, project opening, and path settings for smoother recovery workflows.</p>
          </div>
        </div>
      </article>

      <article id="2025-12-14" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2025-12-14" data-search-text="rotation workflows rotate get rotation tokens npm github openai connect dotenvx ops december 2025">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Dec 14, 2025</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Rotation [beta]</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Rotation <span class="ml-1 align-middle text-xs font-normal text-zinc-500">[beta]</span></h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">Rotation tokens, <code class="text-zinc-300">rotate</code>, URI rotation, and npm, GitHub, and OpenAI connection flows landed in <span class="ops-lockup">Ops <span class="ops-glyph" aria-hidden="true">⛨</span></span>.</p>
          </div>
        </div>
      </article>
      <article id="2025-09-18" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2025-09-18" data-search-text="dotenvx ops command production grade operational primitives teams infrastructure agents september 2025">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Sep 18, 2025</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card changelog-card-command" aria-hidden="true"><span>$ dotenvx ops</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]"><span class="ops-lockup">Ops <span class="ops-glyph" aria-hidden="true">⛨</span></span> Command</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">The first <span class="ops-lockup">Ops <span class="ops-glyph" aria-hidden="true">⛨</span></span> command landed in dotenvx, introducing operational primitives for teams, infrastructure, agents, and more.</p>
          </div>
        </div>
      </article>

      <article id="2025-06-01" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2025-06-01" data-search-text="npm installs monthly 2000000 dotenvx june 2025">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jun 1, 2025</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <svg class="changelog-install-chart" viewBox="0 0 720 405" preserveAspectRatio="none">
                  <rect x="0" y="0" width="720" height="405" fill="#09090b"></rect>
                  <g stroke="#27272a" stroke-width="1">
                    <path d="M64 40H690M64 116H690M64 192H690M64 268H690M64 344H690"></path>
                    <path d="M64 40V344M180 40V344M296 40V344M412 40V344M528 40V344M644 40V344"></path>
                  </g>
                  <g fill="#71717a" font-size="14" font-weight="500">
                    <text x="28" y="47">2M</text>
                    <text x="28" y="199">1M</text>
                    <text x="28" y="351">0</text>
                    <text x="170" y="374">Sep 2024</text>
                    <text x="492" y="374">Jun 2025</text>
                  </g>
                  <path d="M64 344 C122 344 174 340 222 334 C270 328 318 314 356 288 C394 262 424 224 456 185 C488 146 524 110 566 81 C608 52 652 35 690 46 L690 344 L64 344 Z" fill="#ecd53f" fill-opacity="0.14"></path>
                  <path d="M64 344 C122 344 174 340 222 334 C270 328 318 314 356 288 C394 262 424 224 456 185 C488 146 524 110 566 81 C608 52 652 35 690 46" fill="none" stroke="#ecd53f" stroke-width="3.5" stroke-linecap="round"></path>
                  <circle cx="690" cy="46" r="6" fill="#ecd53f"></circle>
                  <circle cx="690" cy="46" r="11" fill="none" stroke="#ecd53f" stroke-opacity="0.38" stroke-width="2"></circle>
                  <g style="filter: drop-shadow(0 12px 16px rgba(0,0,0,0.42));">
                    <rect x="244" y="78" width="330" height="118" rx="12" fill="#f4f4f5"></rect>
                    <rect x="244.5" y="78.5" width="329" height="117" rx="11.5" fill="none" stroke="#d4d4d8"></rect>
                    <text x="409" y="119" text-anchor="middle" fill="#18181b" font-size="22" font-weight="700">npm:@dotenvx/dotenvx</text>
                    <circle cx="300" cy="151" r="5" fill="#ecd53f"></circle>
                    <text x="318" y="160" fill="#18181b" font-size="26" font-weight="700">2,000,000</text>
                  </g>
                </svg>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">2,000,000 Installs</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">@dotenvx/dotenvx</code> reached 2,000,000 monthly npm installs.</p>
          </div>
        </div>
      </article>

      <article id="2025-02-20" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2025-02-20" data-search-text="whitepaper draft dotenvx pdf decryption at access february 2025">
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

      <article id="2025-02-07" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2025-02-07" data-search-text="decryption at access main get main set programmatic encrypted values february 2025">
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

      <article id="2025-01-01" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2025-01-01" data-search-text="npm installs monthly 1000000 dotenvx january 2025">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jan 1, 2025</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <svg class="changelog-install-chart" viewBox="0 0 720 405" preserveAspectRatio="none">
                  <rect x="0" y="0" width="720" height="405" fill="#09090b"></rect>
                  <g stroke="#27272a" stroke-width="1">
                    <path d="M64 40H690M64 116H690M64 192H690M64 268H690M64 344H690"></path>
                    <path d="M64 40V344M180 40V344M296 40V344M412 40V344M528 40V344M644 40V344"></path>
                  </g>
                  <g fill="#71717a" font-size="14" font-weight="500">
                    <text x="28" y="47">1M</text>
                    <text x="28" y="199">500k</text>
                    <text x="28" y="351">0</text>
                    <text x="170" y="374">Sep 2024</text>
                    <text x="492" y="374">Jan 2025</text>
                  </g>
                  <path d="M64 344 C122 344 174 340 224 333 C274 326 316 310 354 283 C392 256 426 217 462 178 C498 139 536 100 578 72 C620 44 654 34 690 50 L690 344 L64 344 Z" fill="#ecd53f" fill-opacity="0.14"></path>
                  <path d="M64 344 C122 344 174 340 224 333 C274 326 316 310 354 283 C392 256 426 217 462 178 C498 139 536 100 578 72 C620 44 654 34 690 50" fill="none" stroke="#ecd53f" stroke-width="3.5" stroke-linecap="round"></path>
                  <circle cx="690" cy="50" r="6" fill="#ecd53f"></circle>
                  <circle cx="690" cy="50" r="11" fill="none" stroke="#ecd53f" stroke-opacity="0.38" stroke-width="2"></circle>
                  <g style="filter: drop-shadow(0 12px 16px rgba(0,0,0,0.42));">
                    <rect x="244" y="78" width="330" height="118" rx="12" fill="#f4f4f5"></rect>
                    <rect x="244.5" y="78.5" width="329" height="117" rx="11.5" fill="none" stroke="#d4d4d8"></rect>
                    <text x="409" y="119" text-anchor="middle" fill="#18181b" font-size="22" font-weight="700">npm:@dotenvx/dotenvx</text>
                    <circle cx="300" cy="151" r="5" fill="#ecd53f"></circle>
                    <text x="318" y="160" fill="#18181b" font-size="26" font-weight="700">1,000,000</text>
                  </g>
                </svg>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">1,000,000 Installs</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">@dotenvx/dotenvx</code> reached 1,000,000 monthly npm installs.</p>
          </div>
        </div>
      </article>

      <article id="2024-12-13" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2024-12-13" data-search-text="monorepo key files env keys file shared env keys docker december 2024">
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

      <article id="2024-11-25" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2024-11-25" data-search-text="strict mode ignore missing env file decryption failed ci november 2024">
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

      <article id="2024-09-01" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2024-09-01" data-search-text="npm installs monthly 500000 dotenvx september 2024">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Sep 1, 2024</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true">
                <svg class="changelog-install-chart" viewBox="0 0 720 405" preserveAspectRatio="none">
                  <rect x="0" y="0" width="720" height="405" fill="#09090b"></rect>
                  <g stroke="#27272a" stroke-width="1">
                    <path d="M64 40H690M64 116H690M64 192H690M64 268H690M64 344H690"></path>
                    <path d="M64 40V344M180 40V344M296 40V344M412 40V344M528 40V344M644 40V344"></path>
                  </g>
                  <g fill="#71717a" font-size="14" font-weight="500">
                    <text x="28" y="47">500k</text>
                    <text x="28" y="199">250k</text>
                    <text x="28" y="351">0</text>
                    <text x="170" y="374">Jun 2024</text>
                    <text x="492" y="374">Sep 2024</text>
                  </g>
                  <path d="M64 344 C118 344 168 340 218 332 C268 324 310 306 350 277 C390 248 424 210 462 169 C500 128 538 91 580 64 C622 37 654 31 690 54 L690 344 L64 344 Z" fill="#ecd53f" fill-opacity="0.14"></path>
                  <path d="M64 344 C118 344 168 340 218 332 C268 324 310 306 350 277 C390 248 424 210 462 169 C500 128 538 91 580 64 C622 37 654 31 690 54" fill="none" stroke="#ecd53f" stroke-width="3.5" stroke-linecap="round"></path>
                  <circle cx="690" cy="54" r="6" fill="#ecd53f"></circle>
                  <circle cx="690" cy="54" r="11" fill="none" stroke="#ecd53f" stroke-opacity="0.38" stroke-width="2"></circle>
                  <g style="filter: drop-shadow(0 12px 16px rgba(0,0,0,0.42));">
                    <rect x="244" y="78" width="330" height="118" rx="12" fill="#f4f4f5"></rect>
                    <rect x="244.5" y="78.5" width="329" height="117" rx="11.5" fill="none" stroke="#d4d4d8"></rect>
                    <text x="409" y="119" text-anchor="middle" fill="#18181b" font-size="22" font-weight="700">npm:@dotenvx/dotenvx</text>
                    <circle cx="300" cy="151" r="5" fill="#ecd53f"></circle>
                    <text x="318" y="160" fill="#18181b" font-size="26" font-weight="700">500,000</text>
                  </g>
                </svg>
              </div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">500,000 Installs</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base"><code class="text-zinc-300">@dotenvx/dotenvx</code> reached 500,000 monthly npm installs.</p>
          </div>
        </div>
      </article>

      <article id="2024-07-11" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2024-07-11" data-search-text="feature complete decrypt run get set encrypt dotenvx july 2024">
        <div class="pt-1 text-left md:text-right text-sm font-semibold text-zinc-500">Jul 11, 2024</div>
        <div class="relative hidden md:block" aria-hidden="true">
          <div class="absolute left-1/2 top-2 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-zinc-800"></div>
          <div class="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 shadow-[0_0_16px_rgba(228,228,231,0.35)]"></div>
        </div>
        <div>
          <div class="max-w-2xl">
              <div class="changelog-card" aria-hidden="true"><span>Feature Complete</span></div>
              <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Feature Complete</h3>
              <p class="mt-2 text-zinc-400 text-sm md:text-base">With <code class="text-zinc-300">decrypt</code> added in dotenvx 1.6.0, dotenvx reached feature-complete status across its five core commands: <code class="text-zinc-300">run</code>, <code class="text-zinc-300">get</code>, <code class="text-zinc-300">set</code>, <code class="text-zinc-300">encrypt</code>, and <code class="text-zinc-300">decrypt</code>.</p>
              <a class="mt-2 inline-block font-normal text-[#ecd53f] no-underline hover:underline" href="/blog/2024/07/11/feature-complete.html" target="_blank" rel="noopener noreferrer">Read Blogpost</a>
          </div>
        </div>
      </article>

      <article id="2024-06-24" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2024-06-24" data-search-text="dotenvx 1.0 released next generation config management dotenv june 2024">
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

      <article id="2024-05-09" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2024-05-09" data-search-text="encrypted env files public key encryption safe commit env keys may 2024 dotenvx">
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

      <article id="2023-11-26" class="grid gap-4 md:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)]" data-changelog-entry data-date="2023-11-26" data-search-text="work started on dotenvx first release commit history november 2023">
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

<script>
  (() => {
    const entries = document.querySelectorAll('[data-changelog-entry][id]')

    entries.forEach((entry) => {
      entry.setAttribute('tabindex', '0')
      entry.setAttribute('role', 'link')
      entry.setAttribute('aria-label', `Copy link to changelog entry for ${entry.id}`)

      const copyEntryLink = async () => {
        const url = `${window.location.origin}${window.location.pathname}#${entry.id}`
        window.history.replaceState(null, '', `#${entry.id}`)

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(url)
          }
        } catch (_) {
          // Updating the URL is the reliable fallback when clipboard access is unavailable.
        }

        entry.dataset.copiedLink = 'true'
        window.clearTimeout(entry._copyTimeout)
        entry._copyTimeout = window.setTimeout(() => {
          delete entry.dataset.copiedLink
        }, 1200)
      }

      entry.addEventListener('click', (event) => {
        if (event.target.closest('a, button')) return
        copyEntryLink()
      })

      entry.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return
        if (event.target.closest('a, button')) return
        event.preventDefault()
        copyEntryLink()
      })
    })
  })()
</script>
