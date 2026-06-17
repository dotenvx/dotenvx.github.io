---
title: ""
---

{% include components/homepage-hero.html %}

{% include components/homepage-trust.html %}

<section class="w-full max-w-6xl mx-auto px-6 mt-0 mb-16 md:mb-20 lg:mb-24">
  <div class="space-y-16 md:space-y-20 lg:space-y-24">
    <div class="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-12 lg:gap-16">
      <div class="max-w-xl">
        <h2 class="font-normal text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Run Anywhere</h2>
        <div class="mt-5 max-w-[34rem] space-y-5 text-zinc-500 text-base md:text-[1.05rem] leading-relaxed">
          <p>Inject envs anywhere with a single CLI.</p>
        </div>
        <div class="mt-6 flex items-center gap-4 text-zinc-300 opacity-75">
          {% include icons/nodejs.html class="h-6 w-6" %}
          {% include icons/python.html class="h-6 w-6" %}
          {% include icons/ruby.html class="h-6 w-6" %}
          {% include icons/go.html class="h-6 w-6" %}
          {% include icons/rust.html class="h-6 w-6" %}
          {% include icons/php.html class="h-6 w-6" %}
          {% include logos/openai.html class="h-6 w-6" %}
          {% include logos/claude.html class="h-6 w-6" %}
        </div>
      </div>

      <div class="min-w-0 py-2 md:py-4">
        <div class="homepage-code-window">
          <div class="homepage-code-toolbar" aria-hidden="true">
            <div class="homepage-code-dots">
              <span class="homepage-code-dot bg-[#ff6b5e]"></span>
              <span class="homepage-code-dot bg-[#f5bd4f]"></span>
              <span class="homepage-code-dot bg-[#61c554]"></span>
            </div>
          </div>
          <pre class="homepage-code-body"><code><span class="homepage-code-prompt">$</span> <span class="homepage-code-program">echo</span> <span class="homepage-code-string">"HELLO=Dotenvx"</span> <span class="homepage-code-muted">&gt;</span> <span class="homepage-code-file">.env</span>
<span class="homepage-code-prompt">$</span> <span class="homepage-code-program">echo</span> <span class="homepage-code-string">"console.log('Hello ' + process.env.HELLO)"</span> <span class="homepage-code-muted">&gt;</span> <span class="homepage-code-file">index.js</span>
<span class="homepage-code-prompt">$</span> <span class="homepage-code-command">dotenvx</span> <span class="homepage-code-muted">run --</span> <span class="homepage-code-file">node index.js</span></code></pre>
        </div>
      </div>
    </div>

    <div class="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-12 lg:gap-16">
      <div class="max-w-xl">
        <h2 class="font-normal text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Multiple Environments</h2>
        <div class="mt-5 max-w-[34rem] space-y-5 text-zinc-500 text-base md:text-[1.05rem] leading-relaxed">
          <p>Create a .env.production file and use -f to load it. It's straightforward, yet flexible.</p>
        </div>
      </div>

      <div class="min-w-0 py-2 md:py-4">
        <div class="homepage-code-window">
          <div class="homepage-code-toolbar" aria-hidden="true">
            <div class="homepage-code-dots">
              <span class="homepage-code-dot bg-[#ff6b5e]"></span>
              <span class="homepage-code-dot bg-[#f5bd4f]"></span>
              <span class="homepage-code-dot bg-[#61c554]"></span>
            </div>
          </div>
          <pre class="homepage-code-body"><code><span class="homepage-code-prompt">$</span> <span class="homepage-code-command">dotenvx</span> <span class="homepage-code-muted">encrypt -f</span> <span class="homepage-code-file">.env.production</span>
<span class="homepage-code-prompt">$</span> <span class="homepage-code-command">dotenvx</span> <span class="homepage-code-muted">run -f</span> <span class="homepage-code-file">.env.production</span> <span class="homepage-code-muted">--</span> <span class="homepage-code-file">npm start</span></code></pre>
        </div>
      </div>
    </div>

    <div class="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-12 lg:gap-16">
      <div class="max-w-xl">
        <h2 class="font-normal text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Encryption</h2>
        <div class="mt-5 max-w-[34rem] space-y-5 text-zinc-500 text-base md:text-[1.05rem] leading-relaxed">
          <p>Add encryption to your .env files with a single command. Use dotenvx encrypt.</p>
        </div>
      </div>

      <div class="homepage-code-window homepage-encryption-preview mx-auto w-full max-w-2xl min-w-0">
        <div class="homepage-code-toolbar" aria-hidden="true">
          <div class="homepage-code-dots">
            <span class="homepage-code-dot bg-[#ff6b5e]"></span>
            <span class="homepage-code-dot bg-[#f5bd4f]"></span>
            <span class="homepage-code-dot bg-[#61c554]"></span>
          </div>
        </div>
        {% include components/encrypted-env-file.html bare=true %}
      </div>
    </div>
  </div>
</section>

<section class="w-full max-w-6xl mx-auto px-6 mb-28 md:mb-40 lg:mb-48">
  <div class="relative overflow-hidden rounded-t-[0.9rem] md:rounded-t-[1.1rem] bg-black px-4 py-8 md:px-8 md:py-10" style="border-top: 1px solid rgba(86, 86, 94, 0.42);">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(245,223,152,0.30)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute left-1/2 top-0 h-10 w-[42%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(242,214,134,0.13)_0%,rgba(242,214,134,0.055)_34%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>
    <p class="relative mx-auto mb-7 max-w-[62rem] text-center text-sm md:text-base leading-relaxed text-zinc-500">Backed by open source usage and a documented security model</p>
    <div class="trust-proof-grid relative grid gap-4 md:grid-cols-3 md:gap-5">
      <a href="https://github.com/dotenvx/dotenvx" target="_blank" rel="noopener noreferrer" class="block w-full rounded-lg border border-zinc-900/80 bg-zinc-950/30 px-5 py-4 text-zinc-300 no-underline hover:no-underline hover:border-zinc-800 hover:bg-zinc-950/55 hover:text-zinc-100 transition-colors duration-200">
        <span class="block text-[0.68rem] md:text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-600">GitHub</span>
        <span class="mt-2 block text-xl md:text-2xl font-extrabold tracking-tight">5,500</span>
      </a>
      <a href="https://npm.chart.dev/@dotenvx/dotenvx" target="_blank" rel="noopener noreferrer" class="block w-full rounded-lg border border-zinc-900/80 bg-zinc-950/30 px-5 py-4 text-zinc-300 no-underline hover:no-underline hover:border-zinc-800 hover:bg-zinc-950/55 hover:text-zinc-100 transition-colors duration-200">
        <span class="block text-[0.68rem] md:text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-600">NPM</span>
        <span class="mt-2 block text-xl md:text-2xl font-extrabold tracking-tight">131,000,000</span>
      </a>
      <a href="/dotenvx.pdf" target="_blank" rel="noopener noreferrer" class="block w-full rounded-lg border border-zinc-900/80 bg-zinc-950/30 px-5 py-4 text-zinc-300 no-underline hover:no-underline hover:border-zinc-800 hover:bg-zinc-950/55 hover:text-zinc-100 transition-colors duration-200">
        <span class="block text-[0.68rem] md:text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-600">Whitepaper</span>
        <span class="mt-2 block text-xl md:text-2xl font-extrabold tracking-tight">99.5% less exposure</span>
      </a>
    </div>
  </div>
</section>

<section class="w-full max-w-5xl mx-auto px-6 mt-0 mb-40 md:mb-56 lg:mb-72">
  <div class="mx-auto max-w-3xl text-center">
    <div class="mx-auto inline-flex items-center justify-center gap-2 text-zinc-100">
      <img src="/assets/img/testimonials/warp.jpg" alt="Warp" class="h-8 w-8 rounded-md object-cover" />
      <span class="text-lg font-semibold tracking-tight">warp</span>
    </div>
    <blockquote class="mx-auto mt-9 max-w-3xl text-zinc-200 text-xl md:text-[1.55rem] leading-relaxed font-normal tracking-tight">
      <p class="m-0">Dotenvx is really smart concept. Instead of plaintext .env&rsquo;s, secrets are encrypted files. Agents can't read them, and they're shippable to cloud runners with a single key.</p>
    </blockquote>
    <div class="mt-9 inline-flex items-center justify-center gap-3 text-left">
      <img src="/assets/img/testimonials/ben-holmes.jpg" alt="Ben Holmes" class="h-10 w-10 rounded-full border border-zinc-700 object-cover" />
      <div>
        <p class="m-0 text-sm font-medium leading-tight text-zinc-100">Ben Holmes</p>
        <p class="m-0 mt-1 text-sm leading-tight text-zinc-500">Warp Dev Rel Lead</p>
      </div>
    </div>
  </div>
</section>

<section class="w-full max-w-5xl mx-auto px-6 mt-8 md:mt-16 lg:mt-20 mb-44 md:mb-64 lg:mb-[18rem]">
  <div class="text-center max-w-3xl mx-auto">
    <h2 class="font-normal text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Easy to switch</h2>
    <p class="mt-4 text-zinc-400 text-lg">Install and use it in code just like dotenv.</p>
  </div>
  <div class="mx-auto mt-10 md:mt-12 max-w-2xl relative overflow-hidden rounded-[0.9rem] md:rounded-[1.1rem] py-10 md:py-12 transition-colors duration-150 hover:bg-zinc-950/45" style="border-top: 1px solid rgba(86, 86, 94, 0.32); border-right: 1px solid rgba(86, 86, 94, 0.24); border-bottom: 1px solid rgba(86, 86, 94, 0.32); border-left: 1px solid rgba(86, 86, 94, 0.24);">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(245,223,152,0.30)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute left-1/2 top-0 h-10 w-[40%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(242,214,134,0.13)_0%,rgba(242,214,134,0.055)_34%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(245,223,152,0.22)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute left-1/2 bottom-0 h-10 w-[40%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(242,214,134,0.10)_0%,rgba(242,214,134,0.045)_34%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>
    <div class="mx-auto max-w-2xl overflow-x-auto px-4 md:px-6 font-mono text-sm md:text-base leading-[1.55]">
      <div class="text-zinc-500">// index.js</div>
      <pre class="mt-2 whitespace-nowrap"><span class="text-[rgba(236,213,63,0.9)]">require('@dotenvx/dotenvx').config()</span></pre>
      <pre class="mt-2 whitespace-nowrap"><span class="text-zinc-500">// or import '@dotenvx/dotenvx/config' // for esm</span></pre>
      <pre class="mt-8 whitespace-nowrap"><span class="text-zinc-400">console.log(`Hello ${process.env.HELLO}`)</span></pre>
    </div>
  </div>
  <div
    class="relative mx-auto mt-10 w-fit max-w-full text-xs leading-none"
    x-data="{
      copyText: 'npm install @dotenvx/dotenvx --save',
      copyNotification: false,
      copyToClipboard() {
        navigator.clipboard.writeText(this.copyText);
        this.copyNotification = true;
        let that = this;
        setTimeout(function(){
          that.copyNotification = false;
        }, 3000);
      }
    }"
  >
    <button
      type="button"
      class="inline-flex max-w-full items-center justify-center overflow-hidden rounded-xl px-5 py-3 font-extrabold tracking-tight no-underline transition-all duration-200 active:translate-y-px whitespace-nowrap"
      x-bind:class="copyNotification ? 'border border-zinc-800 bg-zinc-100 text-zinc-950 shadow-[0_0_24px_rgba(236,213,63,0.12)]' : 'border border-transparent bg-transparent text-zinc-500 hover:text-zinc-100'"
      x-on:click="copyToClipboard();"
    >
      <span x-show="!copyNotification" class="min-w-0 overflow-x-auto font-mono">npm install @dotenvx/dotenvx --save</span>
      <span x-show="copyNotification" x-cloak>copied</span>
    </button>
  </div>
</section>

<section class="w-full max-w-6xl mx-auto px-6 mt-10 md:mt-16 lg:mt-20 mb-36 md:mb-56 lg:mb-72">
  <div class="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start md:gap-12 lg:gap-16">
    <div class="max-w-xl">
      <h2 class="font-normal text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Built because .env files still matter.</h2>
      <p class="mt-5 max-w-[44rem] text-zinc-500 text-base md:text-[1.05rem] leading-relaxed">A message from the creator of dotenv and dotenvx.</p>
    </div>
    <div class="border-l border-zinc-800/80 pl-6 md:pl-8">
      <div class="space-y-5 text-sm leading-6 text-zinc-400 md:text-[0.92rem] md:leading-7">
        <p>Developers use environment files because they are simple.</p>
        <p>They work everywhere: local development, CI, containers, servers, and cloud platforms. They became part of modern software because they reduced friction instead of adding to it.</p>
        <p>But simplicity came with a cost. Plaintext secrets spread quietly across laptops, repositories, CI systems, chat messages, screenshots, and production machines.</p>
        <p>We believe the answer is not abandoning environment files. The answer is securing them properly.</p>
        <p>Dotenvx extends the environment file workflow with encryption, auditing, rotation, and runtime injection while preserving the simplicity that made .env successful in the first place.</p>
        <p>As software becomes increasingly autonomous, secrets become increasingly valuable. API keys, credentials, tokens, and signing keys are now operational infrastructure. They deserve stronger protection.</p>
        <p>That is what we are building with Dotenvx.</p>
      </div>
      <div class="mt-9 font-mono text-sm leading-6 text-zinc-500">
        <p class="m-0">- Scott Motte</p>
        <p class="m-0 mt-1">Creator of dotenv and dotenvx</p>
      </div>
    </div>
  </div>
</section>

<!--
<section class="w-full max-w-2xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-4">
  <h2 class="font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">And free to use.</h2>
  <p>
    Dotenvx is open source – with optional commercial Dotenvx Ops tooling.
  </p>

  <div class="overflow-scroll w-full p-4 border border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 rounded-lg overflow-hidden">
    {/% include components/product-table.html %/}
  </div>
</section>
-->

<section class="relative overflow-hidden w-full max-w-6xl mx-auto px-6 mt-24 md:mt-32 mb-0 pt-16 md:pt-20 pb-36 md:pb-48 lg:pb-56 text-center">
  <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
    <div class="absolute bottom-[-15rem] right-0 w-[26rem] sm:w-[24rem] md:bottom-[-2rem] md:w-[34rem] lg:bottom-[-3rem] lg:w-[40rem] aspect-[1396/1127] bg-no-repeat bg-contain bg-bottom bg-right opacity-70 md:opacity-100" style="background-image: url('/assets/img/bg/armor-gunmetal.png'); -webkit-mask-image: radial-gradient(circle at 82% 38%, rgba(0,0,0,1) 22%, rgba(0,0,0,0.92) 36%, rgba(0,0,0,0.55) 52%, rgba(0,0,0,0.2) 66%, rgba(0,0,0,0) 80%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0.34) 86%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 84%, rgba(0,0,0,0.52) 94%, rgba(0,0,0,0) 100%); mask-image: radial-gradient(circle at 82% 38%, rgba(0,0,0,1) 22%, rgba(0,0,0,0.92) 36%, rgba(0,0,0,0.55) 52%, rgba(0,0,0,0.2) 66%, rgba(0,0,0,0) 80%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0.34) 86%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 84%, rgba(0,0,0,0.52) 94%, rgba(0,0,0,0) 100%); -webkit-mask-composite: source-in, source-in; mask-composite: intersect; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;"></div>
  </div>
  <div class="relative z-10">
    <h3 class="font-canela font-normal tracking-[-0.018em] text-[3.9rem] md:text-[4.25rem] lg:text-[5.05rem] leading-[1.03] text-zinc-100">
      Armored keys.<br />Under guard.
    </h3>
    <div class="mt-12 md:mt-14 mx-auto w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-7 md:gap-7">
      <a class="btn-primary inline-flex w-full md:w-auto items-center justify-center gap-0.5 py-5 md:py-3" href="/signup">
        <span>Create Account</span>
        <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
        </svg>
      </a>
      <a class="inline-flex items-center justify-center gap-0.5 p-3 font-extrabold tracking-tight no-underline hover:no-underline text-zinc-500 dark:text-zinc-300/90 hover:text-zinc-700 dark:hover:text-zinc-100 transition-colors duration-200" href="/contact">
        <span>Contact Us</span>
        <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
        </svg>
      </a>
    </div>
  </div>
</section>
