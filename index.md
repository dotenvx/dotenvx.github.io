---
title: ""
---

<section class="hero-top-adaptive hero-no-select relative w-full max-w-7xl mx-auto px-6 mb-16 md:mb-20 lg:mb-24 mt-20">
  <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.18fr)] gap-x-0 items-center">
    <div class="order-2 md:order-1 flex flex-col gap-4 md:gap-6 hero-copy-enter pl-0 lg:pl-12">
      <div class="mx-auto md:mx-0 mb-1 md:mb-0 flex items-center gap-2 text-center md:text-left text-xs md:text-sm font-semibold tracking-[0.08em] uppercase text-zinc-500 dark:text-zinc-400"><span>From the creator of</span> {% include components/dotenv.html %}</div>
      <h1 class="hero-title-shaded font-canela font-normal tracking-[-0.018em] text-[4.00rem] md:text-[4.62rem] lg:text-[5rem] xl:whitespace-nowrap text-center md:text-left leading-[1.02] md:leading-[1.00] pb-2">Secure Dotenv</h1>
      <p class="mx-auto md:mx-0 text-center md:text-left text-[1.07rem] md:text-[1.16rem] leading-[1.34] md:leading-[1.32]">Keep .env. Encrypt secrets.</p>
      <div class="flex flex-col md:flex-row gap-3 md:gap-4 my-2 items-center md:items-start justify-center md:justify-start w-full mx-auto">
        <a class="btn-primary w-full max-w-md md:w-auto text-center" href="/start">Get Started</a>
        <a class="inline-flex w-full max-w-md md:w-auto items-center justify-center p-3 font-extrabold tracking-tight no-underline hover:no-underline text-zinc-500 dark:text-zinc-300/90 hover:text-zinc-700 dark:hover:text-zinc-100 transition-colors duration-200 text-center" href="/docs">Documentation</a>
      </div>
    </div>
    <div class="order-1 md:order-2 w-full max-w-[24rem] md:max-w-none mx-auto md:mx-0 md:justify-self-stretch">
      {% include components/three-key-rect.html height="170px" class="h-[170px] md:!h-[560px]" %}
    </div>
  </div>
</section>

<section class="w-full max-w-7xl mx-auto px-1 md:px-6 mb-24 sm:mb-32 md:mb-40 lg:mb-48">
  <div class="relative w-full overflow-hidden rounded-t-[0.9rem] md:rounded-t-[1.1rem] bg-black pt-14 md:pt-20 pb-14 md:pb-20" style="border-top: 1px solid rgba(86, 86, 94, 0.42);">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(245,223,152,0.34)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute left-1/2 top-0 h-10 w-[46%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(242,214,134,0.18)_0%,rgba(242,214,134,0.08)_34%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-x-0 top-px h-52 md:h-64 bg-[radial-gradient(ellipse_at_50%_0%,rgba(170,133,56,0.09)_0%,rgba(170,133,56,0.05)_24%,rgba(0,0,0,0)_62%)]" aria-hidden="true"></div>
    <p class="mx-auto max-w-[52ch] text-center text-lg leading-relaxed">Running inside modern developer infrastructure.</p>

  <div class="trust-logo-grid mt-10 md:mt-12 max-w-[58rem] md:max-w-[50rem] lg:max-w-[64rem] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-x-3 md:gap-x-4 lg:gap-x-8 gap-y-7 md:gap-y-8 items-center">
  <a href="https://github.com/search?q=repo%3AGoogleCloudPlatform%2Fcloud-run-mcp%20dotenvx&type=code" target="_blank" class="flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Google Cloud Run MCP repository">
        {% include logos/google2.html class="w-[10rem] lg:w-[12rem] h-auto mx-auto" %}
  </a>
  <a href="https://supabase.com/docs/guides/local-development/managing-config#going-further" target="_blank" class="flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Supabase documentation using dotenvx for branching">
        {% include logos/supabase2.html class="w-[9.2rem] lg:w-[12.1rem] h-auto mx-auto" %}
  </a>
  <a href="https://github.com/search?q=repo%3Adaytonaio%2Fdaytona%20dotenvx&type=code" target="_blank" class="flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Daytona repository">
        {% include logos/daytona.html class="w-[10.2rem] lg:w-[12.3rem] h-auto mx-auto" %}
  </a>
  <a href="https://github.com/search?q=org%3A0xPolygon%20dotenvx&type=code" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Polygon using dotenvx">
        {% include logos/polygon.html class="w-[7rem] lg:w-[7rem] h-auto mx-auto" %}
  </a>
  <a href="https://github.com/search?q=repo%3Anasa%2Fearthdata-search%20dotenvx&type=code" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="NASA Earthdata Search using dotenvx">
        {% include logos/nasa.html class="h-16 lg:h-[4.5rem] w-auto mx-auto" %}
  </a>
  <a href="https://www.npmjs.com/package/@webflow/webflow-cli?activeTab=dependencies" target="_blank" class="flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Webflow CLI npm package">
        {% include logos/webflow.html class="w-[10.2rem] lg:w-[12.3rem] h-auto mx-auto" %}
  </a>
  <a href="https://github.com/search?q=org%3ATencentCloudBase%20dotenvx&type=code" target="_blank" class="flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Tencent CloudBase organization">
        {% include logos/tencent.html class="w-[10.2rem] lg:w-[12.3rem] h-auto mx-auto" %}
  </a>
  <a href="https://github.com/search?q=repo%3Apaypal%2Fagent-toolkit%20dotenvx&type=code" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="PayPal agent toolkit using dotenvx">
    {% include logos/paypal.html class="h-10 lg:h-11 w-auto mx-auto" %}
  </a>
  <a href="https://github.com/search?q=repo%3ACrowdStrike%2Ffoundry-playwright%20dotenvx&type=code" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="CrowdStrike foundry-playwright using dotenvx">
        {% include logos/crowdstrike.html class="w-[12rem] lg:w-[15rem] h-auto mx-auto" %}
  </a>
  <a href="https://docs.amplify.aws/react/deploy-and-host/fullstack-branching/secrets-and-vars/#local-environment-2" target="_blank" class="flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="AWS documentation referencing dotenvx">
        {% include logos/aws.html class="h-16 lg:h-15 w-auto mx-auto" %}
  </a>
  <a href="https://github.com/search?q=repo%3Ashadcn-ui%2Fui%20dotenvx&type=code" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="shadcn/ui repository">
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
    <h2 class="font-normal text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">One-line upgrade</h2>
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
    class="group relative mx-auto mt-10 w-fit max-w-full cursor-pointer overflow-hidden rounded-md font-mono text-xs leading-none text-zinc-500 transition-colors duration-150 hover:text-zinc-400"
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
    x-on:click="copyToClipboard();"
  >
    <div class="flex max-w-full items-center gap-2">
      <code class="min-w-0 flex-1 overflow-x-auto whitespace-nowrap px-3 py-2">npm install @dotenvx/dotenvx --save</code>
      <div class="flex-0 pr-1.5 scale-[0.58] text-zinc-600 transition-colors duration-150 group-hover:text-zinc-400">
        {% include components/copy.html class="text-zinc-600 group-hover:text-zinc-400" %}
      </div>
    </div>
  </div>
</section>

<section class="w-full max-w-5xl mx-auto px-6 mt-8 md:mt-16 lg:mt-20 mb-40 md:mb-56 lg:mb-72">
  <div class="text-center max-w-3xl mx-auto">
    <h2 class="font-normal text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Your .env file — encrypted.</h2>
    <p class="mt-4 text-zinc-400 text-lg">Commit encrypted secrets to git while keeping decryption keys separate.</p>
  </div>
  <div class="mx-auto mt-10 md:mt-12 max-w-3xl relative overflow-hidden rounded-t-[0.9rem] md:rounded-t-[1.1rem] pt-5 md:pt-6" style="border-top: 1px solid rgba(86, 86, 94, 0.32); border-right: 1px solid rgba(86, 86, 94, 0.24); border-left: 1px solid rgba(86, 86, 94, 0.24);">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(245,223,152,0.32)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute left-1/2 top-0 h-10 w-[46%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(242,214,134,0.16)_0%,rgba(242,214,134,0.07)_34%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>
    {% include components/encrypted-env-file.html bare=true %}
  </div>
</section>

<section class="w-full max-w-4xl mx-auto px-6 mb-44 md:mb-64 lg:mb-[18rem]">
  <div class="text-center max-w-3xl mx-auto">
    <h2 class="font-normal text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Built on public-key cryptography.</h2>
    <p class="mt-5 mx-auto max-w-[44rem] text-zinc-500 text-base md:text-[1.05rem] leading-relaxed">Dotenvx encrypts each secret individually using ECIES public-key encryption. Encrypted .env files can be safely committed to Git while decryption keys remain separate.</p>
  </div>
  <div class="mt-14 md:mt-16 relative overflow-hidden rounded-t-[0.9rem] md:rounded-t-[1.1rem] px-6 py-9 md:px-10 md:py-10" style="border-top: 1px solid rgba(86, 86, 94, 0.32);">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(245,223,152,0.32)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute left-1/2 top-0 h-10 w-[46%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(242,214,134,0.16)_0%,rgba(242,214,134,0.07)_34%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>
    <div class="relative mx-auto max-w-2xl">
      <div class="flex flex-wrap items-center justify-center gap-1.5">
        <span class="rounded-full border border-zinc-800/70 bg-zinc-950/30 px-2.5 py-1 text-[11px] font-medium text-zinc-600">ECIES</span>
        <span class="rounded-full border border-zinc-800/70 bg-zinc-950/30 px-2.5 py-1 text-[11px] font-medium text-zinc-600">AES-256</span>
        <span class="rounded-full border border-zinc-800/70 bg-zinc-950/30 px-2.5 py-1 text-[11px] font-medium text-zinc-600">secp256k1</span>
      </div>
      <a href="/dotenvx.pdf" target="_blank" rel="noopener noreferrer" aria-label="Read the Dotenvx whitepaper" class="whitepaper-artifact group relative mx-auto mt-10 block w-56 sm:w-64 md:w-72 no-underline hover:no-underline">
        <img src="/assets/img/whitepaper-thumb.png" alt="Dotenvx whitepaper preview" class="whitepaper-artifact-img block w-full border border-zinc-800/80 bg-zinc-950/40 shadow-[0_1.8rem_4rem_rgba(0,0,0,0.34)] transition duration-200 group-hover:border-zinc-700/90 group-hover:shadow-[0_2rem_4.5rem_rgba(0,0,0,0.42)]" />
        <span class="whitepaper-artifact-overlay absolute inset-0 flex items-center justify-center bg-black/18 opacity-100 transition duration-200 group-hover:bg-black/28">
          <span class="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-black/70 px-4 py-2 text-sm md:text-base font-medium text-zinc-100 shadow-[0_1rem_2.5rem_rgba(0,0,0,0.36)] backdrop-blur-sm">
            Read Whitepaper
            <span aria-hidden="true">→</span>
          </span>
        </span>
      </a>
    </div>
  </div>
</section>

<section class="w-full max-w-6xl mx-auto px-6 mt-10 md:mt-16 lg:mt-20 mb-36 md:mb-56 lg:mb-72">
  <div class="text-center max-w-3xl mx-auto">
    <h2 class="font-normal text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Built for secure .env workflows.</h2>
    <p class="mt-5 mx-auto max-w-[44rem] text-zinc-500 text-base md:text-[1.05rem] leading-relaxed">Keep the simplicity of .env files while adding encryption, auditing, and rotation.</p>
  </div>

  <div class="mt-8 md:mt-10 relative">
  <div class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
    <article class="feature-cli-card feature-cli-card-primary flex flex-col rounded-lg border border-zinc-800 bg-zinc-950/60 p-5 md:p-6 md:col-span-2 lg:col-span-2 min-h-[14rem] md:min-h-[15.5rem]">
      <div class="text-[#ecd53f] text-xs font-semibold tracking-[0.12em] uppercase">01</div>
      <div class="feature-card-head mt-3">
        <h3 class="m-0 text-zinc-100 text-2xl md:text-[2rem] font-semibold leading-[1.08]">Encrypt</h3>
        <div class="feature-cli-cmd"><code>dotenvx encrypt</code></div>
      </div>
      {% include components/live-demo-encrypt.html %}
    </article>
    <article class="feature-cli-card hidden lg:flex flex-col rounded-lg border border-zinc-800 bg-zinc-950/60 p-5 md:p-6 md:col-span-1 lg:col-span-3 min-h-[14rem] md:min-h-[15.5rem]">
      <div class="text-[#ecd53f] text-xs font-semibold tracking-[0.12em] uppercase">02</div>
      <div class="feature-card-head mt-3">
        <h3 class="m-0 text-zinc-100 text-2xl md:text-[2rem] leading-[1.08]">Inject</h3>
        <div class="feature-cli-cmd"><code>dotenvx run -- your-command</code></div>
      </div>
      {% include components/live-demo-run.html %}
    </article>
  </div>

  <div class="mt-4 md:mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
    <article class="feature-cli-card flex lg:hidden flex-col rounded-lg border border-zinc-800 bg-zinc-950/60 p-5 md:p-6 min-h-[11.5rem] md:min-h-[12.5rem]">
      <div class="text-[#ecd53f] text-xs font-semibold tracking-[0.12em] uppercase">02</div>
      <div class="feature-card-head mt-3">
        <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Inject</h3>
        <div class="feature-cli-cmd"><code>dotenvx run -- your-command</code></div>
      </div>
      {% include components/live-demo-run.html %}
    </article>

    <article class="feature-cli-card flex flex-col rounded-lg border border-zinc-800 bg-zinc-950/60 p-5 md:p-6 min-h-[11.5rem] md:min-h-[12.5rem]">
      <div class="text-[#ecd53f] text-xs font-semibold tracking-[0.12em] uppercase">03</div>
      <div class="feature-card-head mt-3">
        <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Scope</h3>
        <div class="feature-cli-cmd"><code>dotenvx run -f .env.production</code></div>
      </div>
      <div class="feature-cli-visual feature-cli-visual-scope">
        <div class="feature-chip-row">
          <span class="feature-chip">.env</span>
          <span class="feature-chip feature-chip-active">.env.production</span>
          <span class="feature-chip">.env.ci</span>
        </div>
      </div>
    </article>

    <article class="feature-cli-card flex flex-col rounded-lg border border-zinc-800 bg-zinc-950/60 p-5 md:p-6 min-h-[11.5rem] md:min-h-[12.5rem]">
      <div class="text-[#ecd53f] text-xs font-semibold tracking-[0.12em] uppercase">04</div>
      <div class="feature-card-head mt-3">
        <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Audit</h3>
        <div class="feature-cli-cmd"><code>git diff .env*</code></div>
      </div>
      <div class="feature-cli-visual feature-cli-visual-audit">
        <div class="feature-diff-line">+ DATABASE_URL="encrypted:..."</div>
        <div class="feature-diff-line">+ OPENAI_API_KEY="encrypted:..."</div>
      </div>
    </article>

    <article class="feature-cli-card flex flex-col rounded-lg border border-zinc-800 bg-zinc-950/60 p-5 md:p-6 min-h-[11.5rem] md:min-h-[12.5rem]">
      <div class="text-[#ecd53f] text-xs font-semibold tracking-[0.12em] uppercase">05</div>
      <div class="feature-card-head mt-3">
        <h3 class="m-0 text-zinc-100 text-xl md:text-[1.55rem] leading-[1.1]">Rotate</h3>
        <div class="feature-cli-cmd"><code>dotenvx rotate</code></div>
      </div>
      <div class="feature-cli-visual feature-cli-visual-rotate">
        <div class="feature-rotate-row">
          <span class="feature-rotate-key">DOTENV_PRIVATE_KEY</span>
          <span class="feature-rotate-v">v3</span>
          <span class="feature-rotate-arrow">→</span>
          <span class="feature-rotate-v feature-rotate-v-new">v4</span>
        </div>
      </div>
    </article>
  </div>
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

<section class="w-full max-w-5xl mx-auto px-6 mt-0 pt-8 md:pt-12 lg:pt-16 mb-24 md:mb-40 lg:mb-52">
  <div class="text-center max-w-3xl mx-auto">
    <h2 class="font-normal text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Developers are keeping .env — and encrypting it.</h2>
    <p class="mt-5 mx-auto max-w-[44rem] text-zinc-500 text-base md:text-[1.05rem] leading-relaxed">Developers are installing dotenvx 6.5 million times a week on npm to secure local development, CI, cloud infrastructure, and software agents.</p>
  </div>

  <div class="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
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
    {/% include components/product-table.html %/}
  </div>
</section>
-->

<section class="relative overflow-hidden w-full max-w-6xl mx-auto px-6 mt-44 md:mt-60 mb-0 pt-16 md:pt-20 pb-36 md:pb-48 lg:pb-56 text-center">
  <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
    <div class="absolute bottom-0 right-0 w-[26rem] sm:w-[24rem] md:w-[34rem] lg:w-[40rem] aspect-[1368/768] bg-no-repeat bg-contain bg-bottom bg-right" style="background-image: url('/assets/img/bg/church-door.jpg'); -webkit-mask-image: radial-gradient(circle at 82% 38%, rgba(0,0,0,1) 22%, rgba(0,0,0,0.92) 36%, rgba(0,0,0,0.55) 52%, rgba(0,0,0,0.2) 66%, rgba(0,0,0,0) 80%); mask-image: radial-gradient(circle at 82% 38%, rgba(0,0,0,1) 22%, rgba(0,0,0,0.92) 36%, rgba(0,0,0,0.55) 52%, rgba(0,0,0,0.2) 66%, rgba(0,0,0,0) 80%); -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;"></div>
  </div>
  <div class="relative z-10">
    <h3 class="hero-title-shaded font-canela font-normal tracking-[-0.018em] text-[3.9rem] md:text-[4.25rem] lg:text-[5.05rem] leading-[1.03]">
      Keep .env.<br />Encrypt secrets.
    </h3>
    <div class="mt-12 md:mt-14 mx-auto w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-7 md:gap-7">
      <a class="btn-primary inline-flex w-full md:w-auto items-center justify-center gap-0.5 py-5 md:py-3" href="/start">
        <span>Get Started</span>
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
