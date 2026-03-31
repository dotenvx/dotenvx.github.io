---
title: ""
---

<section class="hero-top-adaptive hero-no-select relative w-full max-w-7xl mx-auto px-6 mb-32 md:mb-40 lg:mb-44 mt-20">
  <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-x-0 items-center">
    <div class="order-2 md:order-1 flex flex-col gap-4 md:gap-6 hero-copy-enter pl-0 lg:pl-12">
      <div class="mx-auto md:mx-0 mb-1 md:mb-0 flex items-center gap-2 text-center md:text-left text-xs md:text-sm font-semibold tracking-[0.08em] uppercase text-zinc-500 dark:text-zinc-400"><span>From the creator of</span> {% include v1/components/dotenv.html %}</div>
      <h1 class="hero-title-shaded font-canela font-normal tracking-[-0.018em] text-[4.00rem] md:text-[4.62rem] lg:text-[5.38rem] text-center md:text-left leading-[1.02] md:leading-[1.00] pb-2">Secrets for Agents</h1>
      <p class="mx-auto md:mx-0 text-center md:text-left text-[1.07rem] md:text-[1.16rem] leading-[1.34] md:leading-[1.32]">The secrets CLI for agents—<span class="font-medium">and developers.</span><span class="hidden sm:inline md:hidden lg:inline"><br /></span><span class="inline sm:hidden md:inline lg:hidden"> </span>Protect secrets across prompts, code, and runtime.</p>
      <div class="flex flex-col md:flex-row gap-3 md:gap-4 my-2 items-center md:items-start justify-center md:justify-start w-full mx-auto">
        <a class="btn-primary w-full max-w-md md:w-auto text-center" href="/signup">Get Started</a>
        <a class="inline-flex w-full max-w-md md:w-auto items-center justify-center p-3 font-extrabold tracking-tight no-underline hover:no-underline text-zinc-500 dark:text-zinc-300/90 hover:text-zinc-700 dark:hover:text-zinc-100 transition-colors duration-200 text-center" href="/docs">Documentation</a>
      </div>
    </div>
    <div class="order-1 md:order-2 w-full max-w-[24rem] md:max-w-none mx-auto md:mx-0 md:justify-self-stretch">
      {% include v1/components/three-standing-rect.html height="170px" class="h-[170px] md:!h-[560px]" %}
    </div>
  </div>
</section>

<section class="w-full max-w-7xl mx-auto px-1 md:px-6 mt-44 md:mt-64 lg:mt-[18rem] mb-32 sm:mb-48 md:mb-64 lg:mb-[18rem]">
  <div class="relative w-full overflow-hidden rounded-t-[0.9rem] md:rounded-t-[1.1rem] bg-black pt-14 md:pt-20 pb-14 md:pb-20" style="border-top: 1px solid rgba(86, 86, 94, 0.42);">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(245,223,152,0.34)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute left-1/2 top-0 h-10 w-[46%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(242,214,134,0.18)_0%,rgba(242,214,134,0.08)_34%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-x-0 top-px h-52 md:h-64 bg-[radial-gradient(ellipse_at_50%_0%,rgba(170,133,56,0.09)_0%,rgba(170,133,56,0.05)_24%,rgba(0,0,0,0)_62%)]" aria-hidden="true"></div>
    <p class="mx-auto max-w-[36ch] text-center text-lg leading-relaxed">
      Trusted by AI platforms and tools powering agentic software.
    </p>

    <div class="mt-10 md:mt-12 max-w-[58rem] md:max-w-[50rem] lg:max-w-[64rem] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-x-3 md:gap-x-4 lg:gap-x-8 gap-y-7 md:gap-y-8 items-center">
    <a href="https://github.com/GoogleCloudPlatform/cloud-run-mcp" target="_blank" class="flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Google Cloud Run MCP repository">
          {% include logos/google2.html class="w-[10.2rem] lg:w-[12.3rem] h-auto mx-auto" %}
    </a>
    <a href="https://supabase.com/docs/guides/local-development/managing-config#going-further" target="_blank" class="flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Supabase documentation using dotenvx for branching">
          {% include logos/supabase2.html class="w-[9.2rem] lg:w-[12.1rem] h-auto mx-auto" %}
    </a>
    <a href="https://github.com/daytonaio/daytona" target="_blank" class="flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Daytona repository">
          {% include logos/daytona.html class="w-[10.2rem] lg:w-[12.3rem] h-auto mx-auto" %}
    </a>
    <a href="https://github.com/RooCodeInc/Roo-Code" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="RooCode repository">
          {% include logos/roocode.html class="w-[10.2rem] lg:w-[13.6rem] h-auto mx-auto" %}
    </a>
    <a href="https://github.com/nasa/earthdata-search" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="NASA Earthdata Search using dotenvx">
          {% include logos/nasa.html class="h-14 lg:h-15 w-auto mx-auto" %}
    </a>
    <a href="https://www.npmjs.com/package/@webflow/webflow-cli?activeTab=readme" target="_blank" class="flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Webflow CLI npm package">
          {% include logos/webflow.html class="w-[10.2rem] lg:w-[12.3rem] h-auto mx-auto" %}
    </a>
    <a href="https://github.com/TencentCloudBase" target="_blank" class="flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Tencent CloudBase organization">
          {% include logos/tencent.html class="w-[10.2rem] lg:w-[12.3rem] h-auto mx-auto" %}
    </a>
    <a href="https://github.com/paypal/agent-toolkit" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="PayPal agent toolkit using dotenvx">
      {% include logos/paypal.html class="h-10 lg:h-11 w-auto mx-auto" %}
    </a>
    <a href="https://github.com/SocketDev/socket-cli" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Socket CLI using dotenvx">
          {% include logos/socket2.html class="w-[8.9rem] lg:w-[12.1rem] h-auto mx-auto" %}
    </a>
    <a href="https://docs.amplify.aws/react/deploy-and-host/fullstack-branching/secrets-and-vars/#local-environment-2" target="_blank" class="flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="AWS documentation referencing dotenvx">
          {% include logos/aws.html class="h-16 lg:h-15 w-auto mx-auto" %}
    </a>
    <a href="https://github.com/shadcn-ui/ui" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="shadcn/ui repository">
          {% include logos/shadcn.html class="w-[8.9rem] lg:w-[12.1rem] h-auto mx-auto" %}
    </a>
    <a href="https://github.com/search?q=org%3Abrowser-use%20dotenvx&type=code" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Browser Use repository">
          {% include logos/browser-use.html class="w-[8.9rem] lg:w-[12.1rem] h-auto mx-auto" %}
    </a>
    </div>
  </div>
</section>

<section class="w-full max-w-5xl mx-auto px-6 mt-8 md:mt-16 lg:mt-20 mb-44 md:mb-64 lg:mb-[18rem]">
  <div class="text-center max-w-3xl mx-auto">
    <h2 class="font-normal text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Encrypted .env for agent stacks in one line.</h2>
    <p class="mt-4 text-zinc-400 text-lg">Keep the .env interface agents already expect, but make it encrypted.</p>
  </div>
  <div class="mt-8 md:mt-10 mx-auto max-w-3xl">
    <!-- {% include v1/components/encrypted-env-file.html %} -->
  </div>
  <div class="mt-2 md:mt-3 mx-auto max-w-3xl">
    <!-- {% include v1/components/dotenvx-cli-demo.html %} -->
  </div>

  <div class="mt-8 md:mt-10 mx-auto max-w-3xl bg-zinc-100 dark:bg-zinc-900 px-6 py-6 md:px-8 md:py-8 font-mono text-sm md:text-base leading-[1.45]">
    <div class="text-zinc-500 text-[0.9em]">// before</div>
    <div class="mt-2 text-[#8B9BB4] font-semibold">require('dotenv').config()</div>
    <div class="mt-8 text-zinc-500 text-[0.9em]">// after</div>
    <div class="mt-2 text-[#ecd53f] font-semibold">require('@dotenvx/dotenvx').config()</div>
  </div>

  <div class="mt-8 md:mt-10 mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-5">
    <div class="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
      <div class="text-[#ecd53f] font-semibold text-sm tracking-wide">1</div>
      <h3 class="mt-2 text-zinc-100 font-semibold">Install</h3>
      <p class="mt-1 text-zinc-400 text-sm">Replace <code class="font-mono tracking-[-0.02em] text-[0.95em] text-zinc-300">dotenv</code> with <code class="font-mono tracking-[-0.02em] text-[0.95em] text-zinc-300">@dotenvx/dotenvx</code>.</p>
    </div>
    <div class="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
      <div class="text-[#ecd53f] font-semibold text-sm tracking-wide">2</div>
      <h3 class="mt-2 text-zinc-100 font-semibold">Encrypt</h3>
      <p class="mt-1 text-zinc-400 text-sm">Run <code class="font-mono tracking-[-0.02em] text-[0.95em] text-zinc-300">dotenvx encrypt</code> and protect your secrets.</p>
    </div>
    <div class="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
      <div class="text-[#ecd53f] font-semibold text-sm tracking-wide">3</div>
      <h3 class="mt-2 text-zinc-100 font-semibold">Protect</h3>
      <p class="mt-1 text-zinc-400 text-sm">Protect secrets across prompts, code, and runtime.</p>
    </div>
  </div>
</section>

<section class="w-full max-w-6xl mx-auto px-6 mt-10 md:mt-16 lg:mt-20 mb-24 md:mb-40 lg:mb-52">
  <div class="text-center max-w-3xl mx-auto">
    <h2 class="font-normal text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Built-in for agent architecture.</h2>
    <p class="mt-4 text-zinc-400 text-lg">Encrypt, inject, scope, and audit secrets without changing how agents run.</p>
  </div>

  <div class="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
    <article class="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5 md:p-6 lg:col-span-1 min-h-[14rem] md:min-h-[15.5rem]">
      <div class="text-[#ecd53f] text-xs font-semibold tracking-[0.12em] uppercase">01</div>
      <h3 class="mt-3 text-zinc-100 text-2xl md:text-[2rem] leading-[1.08]">Encrypt</h3>
      <p class="mt-2 text-zinc-400 text-sm md:text-base">Commit ciphertext in <code>.env</code> files. Keep private keys separate from code.</p>
      <div class="mt-4 font-mono text-[11px] md:text-xs text-zinc-500"><code>dotenvx encrypt</code></div>
    </article>

    <article class="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5 md:p-6 lg:col-span-2 min-h-[14rem] md:min-h-[15.5rem]">
      <div class="text-[#ecd53f] text-xs font-semibold tracking-[0.12em] uppercase">02</div>
      <h3 class="mt-3 text-zinc-100 text-2xl md:text-[2rem] leading-[1.08]">Inject</h3>
      <p class="mt-2 text-zinc-400 text-sm md:text-base">Decrypt only at runtime for the command or agent process that needs it.</p>
      <div class="mt-4 font-mono text-[11px] md:text-xs text-zinc-500"><code>dotenvx run -- your-agent</code></div>
    </article>
  </div>

  <div class="mt-4 md:mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
    <article class="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5 md:p-6 min-h-[11.5rem] md:min-h-[12.5rem]">
      <div class="text-[#ecd53f] text-xs font-semibold tracking-[0.12em] uppercase">03</div>
      <h3 class="mt-3 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Scope</h3>
      <p class="mt-2 text-zinc-400 text-sm md:text-base">Load the right secret set per environment so agents only get what they should.</p>
      <div class="mt-4 font-mono text-[11px] md:text-xs text-zinc-500"><code>dotenvx run -f .env.production</code></div>
    </article>

    <article class="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5 md:p-6 min-h-[11.5rem] md:min-h-[12.5rem]">
      <div class="text-[#ecd53f] text-xs font-semibold tracking-[0.12em] uppercase">04</div>
      <h3 class="mt-3 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Audit</h3>
      <p class="mt-2 text-zinc-400 text-sm md:text-base">Track encrypted secret changes through Git history and PR review workflows.</p>
      <div class="mt-4 font-mono text-[11px] md:text-xs text-zinc-500"><code>git diff .env*</code></div>
    </article>

    <article class="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5 md:p-6 min-h-[11.5rem] md:min-h-[12.5rem]">
      <div class="text-[#ecd53f] text-xs font-semibold tracking-[0.12em] uppercase">05</div>
      <h3 class="mt-3 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Rotate</h3>
      <p class="mt-2 text-zinc-400 text-sm md:text-base">Rotate aging or compromised secrets without rewriting agent code.</p>
      <div class="mt-4 font-mono text-[11px] md:text-xs text-zinc-500"><code>dotenvx rotate</code></div>
    </article>
  </div>
</section>

<section class="w-full max-w-5xl mx-auto px-6 mt-10 md:mt-16 lg:mt-20 mb-24 md:mb-40 lg:mb-52">
  <div class="text-center max-w-3xl mx-auto">
    <h2 class="font-normal text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Developers are talking about Dotenvx.</h2>
    <p class="mt-4 text-zinc-400 text-lg">Installed 4 million times a week on <a href="https://www.npmjs.com/package/@dotenvx/dotenvx" target="_blank" rel="noopener noreferrer" class="text-[#ecd53f] hover:text-[#f7e87a] no-underline hover:no-underline">npm</a>.</p>
  </div>

  <div class="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
    <a href="https://x.com/bholmesdev/status/2029285485693039077?s=46" target="_blank" rel="noopener noreferrer" class="block h-full cursor-pointer select-none rounded-lg border border-zinc-800 bg-[#06080d] p-5 md:p-6 no-underline hover:no-underline hover:border-zinc-700 transition-[border-color,transform] duration-150 active:translate-y-px md:flex md:flex-col">
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-2 min-w-0">
          <img src="/assets/img/testimonials/ben-holmes.jpg" alt="Ben Holmes" class="h-9 w-9 self-center rounded-full border border-zinc-700 object-cover" />
          <div class="min-w-0 self-center">
            <p class="m-0 text-zinc-100 font-semibold text-sm leading-tight truncate inline-flex items-center gap-2">
              <span>Ben Holmes</span>
              <span class="inline-flex h-4 w-4 items-center justify-center rounded-[3px] border border-zinc-700/80 bg-zinc-950" aria-label="Warp">
                <img src="/assets/img/testimonials/warp.jpg" alt="Warp" class="h-3 w-3 rounded-[1px] object-cover" />
              </span>
            </p>
            <p class="m-0 mt-px text-zinc-500 text-xs leading-tight truncate font-normal">@BHolmesDev</p>
          </div>
        </div>
      </div>
      <p class="mt-3.5 text-zinc-300 text-sm leading-relaxed font-normal">
        <span class="block">dotenvx is really smart concept.</span>
        <span class="mt-2.5 block">Instead of plaintext <code>.env</code>&rsquo;s, secrets are encrypted files. Agents can't read them, and they're shippable to cloud runners with a single key.</span>
      </p>
      <div class="mt-auto">
      <div class="mt-3.5 text-[11px] leading-4 font-normal text-zinc-500">11:58 AM · Mar 4, 2026 · <span class="text-zinc-400 font-medium">65.9K</span> views</div>
      <div class="mt-3 border-t border-zinc-800 py-2.5 flex items-center justify-start gap-5 text-zinc-500 text-xs">
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5h-6l-3.5 2 1.3-3.9A8.5 8.5 0 1 1 21 11.5Z"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">21</span>
        </div>
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m17 1 4 4-4 4"></path>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
            <path d="m7 23-4-4 4-4"></path>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">26</span>
        </div>
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 21s-7.2-4.5-9.4-8.2C.7 9.8 2 6.2 5.4 5.2c2-.6 4.2.1 5.6 1.8 1.4-1.7 3.6-2.4 5.6-1.8 3.4 1 4.7 4.6 2.8 7.6C19.2 16.5 12 21 12 21Z"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">426</span>
        </div>
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">505</span>
        </div>
      </div>
      </div>
    </a>

    <a href="https://x.com/commte/status/1996144456891060730?s=46" target="_blank" rel="noopener noreferrer" class="block h-full cursor-pointer select-none rounded-lg border border-zinc-800 bg-[#06080d] p-5 md:p-6 no-underline hover:no-underline hover:border-zinc-700 transition-[border-color,transform] duration-150 active:translate-y-px md:flex md:flex-col">
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-2 min-w-0">
          <img src="/assets/img/testimonials/commte.jpg" alt="コムテ" class="h-9 w-9 self-center rounded-full border border-zinc-700 object-cover" />
          <div class="min-w-0 self-center">
            <p class="m-0 text-zinc-100 font-semibold text-sm leading-tight truncate">コムテ</p>
            <p class="m-0 mt-px text-zinc-500 text-xs leading-tight truncate font-normal">@commte</p>
          </div>
        </div>
      </div>
      <p class="mt-3.5 text-zinc-500 text-xs leading-tight font-normal"><span class="text-sky-400">Show translation</span></p>
      <p class="mt-2.5 text-zinc-300 text-sm leading-relaxed font-normal">
        <span class="block">.env 共有は dotenvxが最強</span>
        <span class="block">.env を暗号化したまま Git にコミットできるツール</span>
        <span class="block">便利さそのまま＋漏洩リスクほぼゼロ</span>
        <span class="mt-3 block">・平文 .env を配らなくていい</span>
        <span class="block">・GitHub に上げても解読されない</span>
        <span class="block">・チーム開発で共有がラク</span>
      </p>
      <div class="mt-auto">
      <div class="mt-3.5 text-[11px] leading-4 font-normal text-zinc-500">1:08 AM · Dec 3, 2025 · <span class="text-zinc-400 font-medium">505.3K</span> views</div>
      <div class="mt-3 border-t border-zinc-800 py-2.5 flex items-center justify-start gap-5 text-zinc-500 text-xs">
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5h-6l-3.5 2 1.3-3.9A8.5 8.5 0 1 1 21 11.5Z"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">3</span>
        </div>
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m17 1 4 4-4 4"></path>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
            <path d="m7 23-4-4 4-4"></path>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">346</span>
        </div>
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 21s-7.2-4.5-9.4-8.2C.7 9.8 2 6.2 5.4 5.2c2-.6 4.2.1 5.6 1.8 1.4-1.7 3.6-2.4 5.6-1.8 3.4 1 4.7 4.6 2.8 7.6C19.2 16.5 12 21 12 21Z"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">2K</span>
        </div>
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">1.9K</span>
        </div>
      </div>
      </div>
    </a>

    <a href="https://x.com/kristianfreeman/status/1808552701673808135?s=46" target="_blank" rel="noopener noreferrer" class="block h-full cursor-pointer select-none rounded-lg border border-zinc-800 bg-[#06080d] p-5 md:p-6 no-underline hover:no-underline hover:border-zinc-700 transition-[border-color,transform] duration-150 active:translate-y-px md:flex md:flex-col">
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-2 min-w-0">
          <img src="/assets/img/testimonials/kristian-freeman.jpg" alt="Kristian Freeman" class="h-9 w-9 self-center rounded-full border border-zinc-700 object-cover" />
          <div class="min-w-0 self-center">
            <p class="m-0 text-zinc-100 font-semibold text-sm leading-tight truncate inline-flex items-center gap-1.5">
              <span>Kristian Freeman</span>
              <span class="inline-flex h-4 w-4 items-center justify-center rounded-[3px] border border-zinc-700/80 bg-zinc-950">
                <img src="/assets/img/testimonials/cloudflare.jpg" alt="Cloudflare" class="h-3 w-3 rounded-[1px] object-cover" />
              </span>
            </p>
            <p class="m-0 mt-px text-zinc-500 text-xs leading-tight truncate font-normal">@kristianfreeman</p>
          </div>
        </div>
      </div>
      <p class="mt-3.5 text-zinc-300 text-sm leading-relaxed font-normal">
        <span class="block">Dotenvx looks like an interesting upgrade to .env</span>
        <span class="mt-2.5 block">Automatic encrypting of each value, almost identical usage in CLI and API</span>
        <span class="mt-2.5 block">Rails does something similar - though the whole file is encrypted!</span>
      </p>
      <div class="mt-auto">
      <div class="mt-3.5 text-[11px] leading-4 font-normal text-zinc-500">10:25 AM · Jul 3, 2024 · <span class="text-zinc-400 font-medium">652</span> views</div>
      <div class="mt-3 border-t border-zinc-800 py-2.5 flex items-center justify-start gap-5 text-zinc-500 text-xs">
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5h-6l-3.5 2 1.3-3.9A8.5 8.5 0 1 1 21 11.5Z"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">1</span>
        </div>
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m17 1 4 4-4 4"></path>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
            <path d="m7 23-4-4 4-4"></path>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">3</span>
        </div>
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 21s-7.2-4.5-9.4-8.2C.7 9.8 2 6.2 5.4 5.2c2-.6 4.2.1 5.6 1.8 1.4-1.7 3.6-2.4 5.6-1.8 3.4 1 4.7 4.6 2.8 7.6C19.2 16.5 12 21 12 21Z"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">10</span>
        </div>
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">3</span>
        </div>
      </div>
      </div>
    </a>

    <a href="https://x.com/mizchi/status/2028845137833631901?s=46" target="_blank" rel="noopener noreferrer" class="block h-full cursor-pointer select-none rounded-lg border border-zinc-800 bg-[#06080d] p-5 md:p-6 no-underline hover:no-underline hover:border-zinc-700 transition-[border-color,transform] duration-150 active:translate-y-px md:flex md:flex-col">
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-2 min-w-0">
          <img src="/assets/img/testimonials/mizchi.jpg" alt="mizchi" class="h-9 w-9 self-center rounded-full border border-zinc-700 object-cover" />
          <div class="min-w-0 self-center">
            <p class="m-0 text-zinc-100 font-semibold text-sm leading-tight truncate">mizchi</p>
            <p class="m-0 mt-px text-zinc-500 text-xs leading-tight truncate font-normal">@mizchi</p>
          </div>
        </div>
      </div>
      <p class="mt-3.5 text-zinc-500 text-xs leading-tight font-normal"><span class="text-sky-400">Show translation</span></p>
      <p class="mt-2.5 text-zinc-300 text-sm leading-relaxed font-normal">
        <span class="block">.env とAIの問題、dotenvx がもっと普及したらいいと思う</span>
      </p>
      <div class="mt-auto">
      <div class="mt-3.5 text-[11px] leading-4 font-normal text-zinc-500">6:49 AM · Mar 3, 2026 · <span class="text-zinc-400 font-medium">43.8K</span> views</div>
      <div class="mt-3 border-t border-zinc-800 py-2.5 flex items-center justify-start gap-5 text-zinc-500 text-xs">
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m17 1 4 4-4 4"></path>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
            <path d="m7 23-4-4 4-4"></path>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">82</span>
        </div>
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 21s-7.2-4.5-9.4-8.2C.7 9.8 2 6.2 5.4 5.2c2-.6 4.2.1 5.6 1.8 1.4-1.7 3.6-2.4 5.6-1.8 3.4 1 4.7 4.6 2.8 7.6C19.2 16.5 12 21 12 21Z"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">640</span>
        </div>
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">726</span>
        </div>
      </div>
      </div>
    </a>
    <a href="https://x.com/zaidmukaddam/status/1941193539486089311?s=46" target="_blank" rel="noopener noreferrer" class="block h-full cursor-pointer select-none rounded-lg border border-zinc-800 bg-[#06080d] p-5 md:p-6 no-underline hover:no-underline hover:border-zinc-700 transition-[border-color,transform] duration-150 active:translate-y-px md:flex md:flex-col">
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-2 min-w-0">
          <img src="/assets/img/testimonials/zaid.jpg" alt="Zaid" class="h-9 w-9 self-center rounded-full border border-zinc-700 object-cover" />
          <div class="min-w-0 self-center">
            <p class="m-0 text-zinc-100 font-semibold text-sm leading-tight truncate">Zaid</p>
            <p class="m-0 mt-px text-zinc-500 text-xs leading-tight truncate font-normal">@zaidmukaddam</p>
          </div>
        </div>
      </div>
      <p class="mt-3.5 text-zinc-300 text-sm leading-relaxed font-normal">
        <span class="block">you can deploy env files to prod now?</span>
        <span class="mt-2.5 block">creators of dotenv have been working on dotenvx which encrypts your env variables so llms can’t read them, basically it keeps secrets from leaking into prompts or model context</span>
      </p>
      <div class="mt-auto">
      <div class="mt-3.5 text-[11px] leading-4 font-normal text-zinc-500">10:53 AM · Jul 4, 2025 · <span class="text-zinc-400 font-medium">6,760</span> views</div>
      <div class="mt-3 border-t border-zinc-800 py-2.5 flex items-center justify-start gap-5 text-zinc-500 text-xs">
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5h-6l-3.5 2 1.3-3.9A8.5 8.5 0 1 1 21 11.5Z"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">9</span>
        </div>
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m17 1 4 4-4 4"></path>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
            <path d="m7 23-4-4 4-4"></path>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">10</span>
        </div>
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 21s-7.2-4.5-9.4-8.2C.7 9.8 2 6.2 5.4 5.2c2-.6 4.2.1 5.6 1.8 1.4-1.7 3.6-2.4 5.6-1.8 3.4 1 4.7 4.6 2.8 7.6C19.2 16.5 12 21 12 21Z"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">154</span>
        </div>
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">71</span>
        </div>
      </div>
      </div>
    </a>

    <a href="https://x.com/kenn/status/1906194315358937095" target="_blank" rel="noopener noreferrer" class="block h-full cursor-pointer select-none rounded-lg border border-zinc-800 bg-[#06080d] p-5 md:p-6 no-underline hover:no-underline hover:border-zinc-700 transition-[border-color,transform] duration-150 active:translate-y-px md:flex md:flex-col">
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-2 min-w-0">
          <img src="/assets/img/testimonials/kenn.jpg" alt="Kenn Ejima" class="h-9 w-9 self-center rounded-full border border-zinc-700 object-cover" />
          <div class="min-w-0 self-center">
            <p class="m-0 text-zinc-100 font-semibold text-sm leading-tight truncate">Kenn Ejima</p>
            <p class="m-0 mt-px text-zinc-500 text-xs leading-tight truncate font-normal">@kenn</p>
          </div>
        </div>
      </div>
      <p class="mt-3.5 text-zinc-500 text-xs leading-tight font-normal"><span class="text-sky-400">Show translation</span></p>
      <p class="mt-2.5 text-zinc-300 text-sm leading-relaxed font-normal">
        <span class="block">今まで1passwordで.envを共有してたけど、dotenvxを使えば.env自体を暗号化してgit管理できるようになることを知ってこれに乗り換えることにした。</span>
        <span class="mt-2.5 block">管理対象が秘密鍵1個だけになるのでメンバーの入れ替わりなどでAPI Keyを個別にローテーションする手間もなくなる。</span>
        <span class="mt-2.5 block">時代は進化している！</span>
      </p>
      <div class="mt-auto">
      <div class="mt-3.5 text-[11px] leading-4 font-normal text-zinc-500">8:58 PM · Mar 29, 2025 · <span class="text-zinc-400 font-medium">250.5K</span> views</div>
      <div class="mt-3 border-t border-zinc-800 py-2.5 flex items-center justify-start gap-5 text-zinc-500 text-xs">
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5h-6l-3.5 2 1.3-3.9A8.5 8.5 0 1 1 21 11.5Z"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">1</span>
        </div>
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m17 1 4 4-4 4"></path>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
            <path d="m7 23-4-4 4-4"></path>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">154</span>
        </div>
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 21s-7.2-4.5-9.4-8.2C.7 9.8 2 6.2 5.4 5.2c2-.6 4.2.1 5.6 1.8 1.4-1.7 3.6-2.4 5.6-1.8 3.4 1 4.7 4.6 2.8 7.6C19.2 16.5 12 21 12 21Z"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">1.3K</span>
        </div>
        <div class="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"></path>
          </svg>
          <span class="text-zinc-300 font-semibold">1.1K</span>
        </div>
      </div>
      </div>
    </a>
  </div>
</section>

<!--
<section class="w-full max-w-2xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-4">
  <h2 class="font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">And free to use.</h2>
  <p>
    Dotenvx is open source – with optional commercial Dotenvx Ops tooling.
  </p>

  <div class="overflow-scroll w-full p-4 border border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 rounded-lg overflow-hidden">
    {/% include v1/components/product-table.html %/}
  </div>
</section>
-->

<section class="w-full max-w-2xl mx-auto px-6 mt-20 flex flex-col gap-4">
  <h2 class="font-normal text-4xl sm:text-4xl md:text-[2.9rem] leading-[1.06] tracking-[-0.02em] text-zinc-950 dark:text-zinc-50">FAQ</h2>
  <dl class="divide-y divide-zinc-200 dark:divide-zinc-800">
    {% include v1/components/faq-question.html question="How does encryption work?" answer='Dotenvx uses Elliptic Curve Integrated Encryption Scheme (ECIES) to encrypt each secret with a unique ephemeral key, while ensuring it can be decrypted using a long-term private key.<br/><br/>When you initialize encryption, a DOTENV_PUBLIC_KEY (encryption key) and DOTENV_PRIVATE_KEY (decryption key) are generated. The DOTENV_PUBLIC_KEY is used to encrypt secrets, and the DOTENV_PRIVATE_KEY is securely stored in your cloud secrets manager or .env.keys file.<br/><br/>Your encrypted .env file is then safely committed to code. Even if the file is exposed, secrets remain protected since decryption requires the separate DOTENV_PRIVATE_KEY, which is never stored alongside it. Read <a href="/dotenvx.pdf">the whitepaper</a> for more details.' %}
    {% include v1/components/faq-question.html question="Is it safe to commit an encrypted .env file to code?" answer='Yes. Dotenvx encrypts secrets using AES-256 with ephemeral keys, ensuring that even if the encrypted .env file is exposed, its contents remain secure. The encryption keys themselves are protected using Secp256k1 elliptic curve cryptography, which is widely used for secure key exchange in technologies like Bitcoin.<br/><br/>This means that every secret in the .env file is encrypted with a unique AES-256 key, and that key is further encrypted using a public key (Secp256k1). Even if an attacker obtains the encrypted .env file, they would still need the corresponding private key—stored separately—to decrypt anything.<br/><br/>Breaking this encryption would require brute-forcing both AES-256 and elliptic curve cryptography, which is computationally infeasible with current technology. Read <a href="/dotenvx.pdf">the whitepaper</a> for more details.' %}
    {% include v1/components/faq-question.html question="How does it protect me from third-party breaches like CircleCI?" answer="In the CircleCI breach the attacker accessed environment variables only. They could not access codebases. To steal your encrypted .env secrets, an attacker needs both – the private decryption key AND the encrypted .env files." %}
  </dl>
</section>

<section class="w-full max-w-6xl mx-auto px-6 mt-32 md:mt-44 mb-12 md:mb-20 text-center">
  <h3 class="hero-title-shaded font-canela font-normal tracking-[-0.018em] text-[3.7rem] md:text-[4rem] lg:text-[4.8rem] leading-[1.03]">
    The future of secrets.<br />Available today.
  </h3>
  <div class="mt-10 mx-auto w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-7 md:gap-6">
    <a class="btn-primary inline-flex w-full md:w-auto items-center justify-center gap-0.5 py-5 md:py-3" href="/signup">
      <span>Get Started</span>
      <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
    </a>
    <a class="inline-flex items-center justify-center gap-0.5 p-3 font-extrabold tracking-tight no-underline hover:no-underline text-zinc-500 dark:text-zinc-300/90 hover:text-zinc-700 dark:hover:text-zinc-100 transition-colors duration-200" href="mailto:support@dotenvx.com">
      <span>Contact Us</span>
      <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
    </a>
  </div>
</section>

<section class="w-full max-w-6xl mx-auto px-6 mt-8 mb-16 flex items-center justify-center">
  <div class="w-full max-w-[220px]">
    {% include v1/components/three-secrets-box-single.html height="220px" %}
  </div>
</section>
