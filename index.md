---
title: ""
---

<section class="w-full max-w-6xl mx-auto px-6 mt-24 md:mt-36 lg:mt-40 mb-32 md:mb-40 lg:mb-44">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
    <div class="flex flex-col gap-4 md:gap-6 hero-copy-enter">
      <div class="mx-auto md:mx-0 mb-1 md:mb-0 flex items-center gap-2 text-center md:text-left text-xs md:text-sm font-semibold tracking-[0.08em] uppercase text-zinc-500 dark:text-zinc-400">
        <span>From the creator of</span>
        {% include v1/components/dotenv.html %}
      </div>
      <h1 class="hero-title-shaded font-canela font-normal tracking-[-0.018em] text-[3.88rem] md:text-[4.62rem] lg:text-[5.38rem] text-center md:text-left leading-[1.02] md:leading-[1.00] pb-2">Secrets for developers</h1>
      <p class="mt-[-0.72rem] md:mt-[-0.92rem] mx-auto lg:mx-0 max-w-[28rem] sm:max-w-[34rem] md:max-w-none text-center md:text-left text-[1.07rem] md:text-[1.16rem]">Encrypt your .env files without changing your workflow. <br class="hidden sm:block md:hidden lg:block" />Protect secrets in source code and AI prompts.</p>

      <div class="flex flex-row gap-4 my-2 justify-center md:justify-start">
        <a class="btn-primary" href="/docs/quickstart">Get Started</a>
        <a class="inline-flex items-center justify-center p-3 font-extrabold tracking-tight no-underline hover:no-underline text-zinc-500 dark:text-zinc-300/90 hover:text-zinc-700 dark:hover:text-zinc-100 transition-colors duration-200" href="/docs">Documentation</a>
      </div>
    </div>

    <div class="md:pl-2 hero-terminal-enter">
      <div class="max-w-xl mx-auto md:max-w-lg lg:max-w-xl">
        {% include v1/components/encrypted-env-file-small.html %}
      </div>
    </div>
  </div>
</section>

<section class="w-full max-w-5xl mx-auto px-6 mt-44 md:mt-64 lg:mt-[18rem] mb-32 sm:mb-48 md:mb-64 lg:mb-[18rem]">
  <p class="mx-auto max-w-[42ch] text-center text-lg leading-relaxed">
    Companies of all sizes trust Dotenvx to<br />protect secrets in source code and AI prompts.
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
    <a href="https://github.com/browser-use/browser-use" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Browser Use repository">
          {% include logos/browser-use.html class="w-[8.9rem] lg:w-[12.1rem] h-auto mx-auto" %}
    </a>
  </div>
</section>

<section class="w-full max-w-5xl mx-auto px-6 mt-8 md:mt-16 lg:mt-20 mb-44 md:mb-64 lg:mb-[18rem]">
  <div class="text-center max-w-3xl mx-auto">
    <h2 class="font-normal text-4xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Same dotenv workflow, but encrypted.</h2>
    <p class="mt-4 text-zinc-400 text-lg">Switch from plaintext <code>.env</code> files to encrypted <code>.env</code> files without changing how your app runs.</p>
  </div>

  <div class="mt-8 md:mt-10 mx-auto max-w-3xl bg-zinc-100 dark:bg-zinc-900 px-6 py-6 md:px-8 md:py-8 font-mono text-sm md:text-base leading-[1.45]">
    <div class="text-zinc-500 text-[0.9em]">// before</div>
    <div class="mt-2 text-[#a7b4cc] font-semibold">require('dotenv').config()</div>
    <div class="mt-8 text-zinc-500 text-[0.9em]">// after</div>
    <div class="mt-2 text-[#ecd53f] font-semibold">require('@dotenvx/dotenvx').config()</div>
  </div>

  <div class="mt-8 md:mt-10 mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
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
      <h3 class="mt-2 text-zinc-100 font-semibold">Deploy + AI</h3>
      <p class="mt-1 text-zinc-400 text-sm">Ship apps and AI prompts without plaintext secrets.</p>
    </div>
  </div>
</section>

<section class="w-full max-w-7xl mx-auto px-6 mt-10 md:mt-16 lg:mt-20 mb-24 md:mb-40 lg:mb-52">
  <div class="text-center max-w-3xl mx-auto">
    <h2 class="font-normal text-4xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">More capability. Zero plaintext secrets.</h2>
    <p class="mt-4 text-zinc-400 text-lg">Protect secrets in source code and AI prompts with an upgrade that takes seconds.</p>
  </div>

  <div class="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-5 gap-4 md:gap-5">
    <div class="sm:col-span-2 relative overflow-hidden rounded-xl border bg-[#0d0a07] p-5 md:p-6 min-h-[19rem] md:min-h-[22rem]" style="border-color: rgba(236, 213, 63, 0.62);">
      <div class="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#ecd53f]/16 blur-3xl"></div>
      <div class="pointer-events-none absolute -bottom-20 right-[-4.5rem] h-52 w-52 rounded-full bg-[#7a5321]/22 blur-3xl"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(236,213,63,0.20),transparent_42%),linear-gradient(165deg,rgba(56,36,14,0.18),rgba(0,0,0,0.76))]"></div>

      <div class="pointer-events-none absolute inset-x-4 md:inset-x-5 bottom-4 md:bottom-5 font-mono text-[10px] md:text-[11px] leading-[1.45] tracking-[0.02em] text-[#cbb98a]/62 select-none">
        <div>DOTENV_PUBLIC_KEY="03d7...f2a1"</div>
        <div>API_KEY="encrypted:BE9Y7LKA..."</div>
        <div>DB_URL="encrypted:B2k4V3..."</div>
        <div>JWT_SECRET="encrypted:A8mP0..."</div>
        <div>OPENAI_KEY="encrypted:C9x2Q..."</div>
      </div>

      <div class="relative z-10">
        <div class="inline-flex items-center gap-2">
          <span class="inline-flex h-7 w-7 items-center justify-center rounded-md border bg-black/45 text-[#ecd53f] text-sm" style="border-color: rgba(236, 213, 63, 0.62);">◈</span>
          <span class="text-[#ecd53f] text-xs font-semibold tracking-[0.08em]"><code>dotenvx encrypt</code></span>
        </div>
        <h3 class="mt-4 text-zinc-100 font-semibold text-3xl md:text-[2.2rem] leading-[1.05] tracking-tight">Encryption</h3>
        <p class="mt-2 text-[#cbb98a] text-xs md:text-sm">Commit ciphertext. Keep keys separate.</p>
      </div>
    </div>
    <div class="sm:col-span-3 relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950/80 p-5 md:p-6 min-h-[19rem] md:min-h-[22rem]">
      <div class="pointer-events-none absolute -top-20 right-[-4rem] h-56 w-56 rounded-full bg-[#ecd53f]/10 blur-3xl"></div>
      <div class="pointer-events-none absolute -bottom-24 left-[-5rem] h-64 w-64 rounded-full bg-blue-300/8 blur-3xl"></div>
      <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(7,10,20,0.96)_12%,rgba(7,10,20,0.72)_45%,rgba(7,10,20,0.92)_88%)]"></div>

      <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div class="-rotate-[12deg] grid grid-cols-5 gap-2 md:gap-3 opacity-80 md:opacity-90 translate-y-3 md:translate-y-5 scale-[1.03]">
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">TypeScript</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Node.js</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Python</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Ruby</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Go</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Rust</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Java</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">PHP</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">.NET</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Deno</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Bun</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Bash</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Fish</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Clojure</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Kotlin</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Docker</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Compose</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">GitHub</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Heroku</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Vercel</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Cloudflare</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Netlify</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Railway</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Render</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Fly</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Digital Ocean</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">NPM</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Nx</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Turborepo</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Trigger</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Frameworks</span>
        </div>
      </div>

      <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,18,0.94)_0%,rgba(8,10,18,0.56)_40%,rgba(8,10,18,0.78)_100%)]"></div>

      <div class="relative z-10 max-w-2xl">
        <div class="inline-flex items-center gap-2">
          <span class="inline-flex h-7 w-7 items-center justify-center rounded-md border bg-black/45 text-[#ecd53f] text-sm" style="border-color: rgba(236, 213, 63, 0.62);">◈</span>
          <span class="text-[#ecd53f] text-xs font-semibold tracking-[0.08em]"><code>dotenvx run -- your-cmd</code></span>
        </div>
        <h3 class="mt-4 text-zinc-100 font-semibold text-3xl md:text-[2.2rem] leading-[1.05] tracking-tight">Cross Platform</h3>
        <p class="mt-2 text-zinc-300/95 text-xs md:text-sm leading-relaxed">Run anywhere. Works across languages.</p>
      </div>
    </div>
  </div>

  <div class="mt-4 md:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
    <div class="sm:col-span-1 relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950/85 p-5 md:p-6 min-h-[18rem] md:min-h-[20rem]">
      <div class="pointer-events-none absolute -top-20 left-[-4rem] h-56 w-56 rounded-full bg-[#ecd53f]/10 blur-3xl"></div>
      <div class="pointer-events-none absolute -bottom-20 right-[-4rem] h-56 w-56 rounded-full bg-emerald-300/8 blur-3xl"></div>
      <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,rgba(9,12,21,0.94)_0%,rgba(9,12,21,0.78)_50%,rgba(9,12,21,0.94)_100%)]"></div>

      <div class="pointer-events-none absolute left-6 bottom-6 hidden md:block font-mono text-[11px] leading-[1.5] text-zinc-300/35 select-none">
        <div>diff --git a/.env b/.env</div>
        <div>+ DOTENV_PUBLIC_KEY="03d7...f2a1"</div>
        <div>+ API_KEY="encrypted:BE9Y7LKA..."</div>
        <div>+ DB_URL="encrypted:B2k4V3..."</div>
      </div>

      <div class="relative z-10 max-w-2xl">
        <div class="inline-flex items-center gap-2">
          <span class="inline-flex h-7 w-7 items-center justify-center rounded-md border bg-black/40 text-[#ecd53f] text-sm" style="border-color: rgba(236, 213, 63, 0.62);">◈</span>
          <span class="text-[#ecd53f] text-xs font-semibold tracking-[0.08em]"><code>git add .env</code></span>
        </div>
        <h3 class="mt-4 text-zinc-100 font-semibold text-3xl md:text-[2.2rem] leading-[1.05] tracking-tight">GitOps</h3>
        <p class="mt-2 text-zinc-300/95 text-xs md:text-sm leading-relaxed">Secrets, encrypted in Git. Decrypted only at runtime.</p>
      </div>
    </div>

    <div class="sm:col-span-1 relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950/85 p-5 md:p-6 min-h-[18rem] md:min-h-[20rem]">
      <div class="pointer-events-none absolute -top-20 right-[-4rem] h-56 w-56 rounded-full bg-[#ecd53f]/10 blur-3xl"></div>
      <div class="pointer-events-none absolute -bottom-16 left-[-4rem] h-52 w-52 rounded-full bg-blue-300/8 blur-3xl"></div>
      <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,rgba(9,12,21,0.94)_0%,rgba(9,12,21,0.78)_50%,rgba(9,12,21,0.94)_100%)]"></div>

      <div class="pointer-events-none absolute inset-0 hidden md:block select-none">
        <span class="absolute top-[5.0rem] right-[12.2rem] font-mono text-[10px] text-[#ecd53f]/42">›</span>
        <span class="absolute top-[5.55rem] right-[11.15rem] font-mono text-[10px] text-[#ecd53f]/34">›</span>
        <span class="absolute top-[6.1rem] right-[10.1rem] font-mono text-[10px] text-[#ecd53f]/26">›</span>
      </div>

      <div class="pointer-events-none absolute inset-x-5 bottom-6 hidden md:block select-none">
        <div class="relative h-[7.4rem] w-full">
          <div class="absolute inset-x-0 top-6 bottom-0 rounded-lg border border-zinc-700 bg-zinc-900/54"></div>

          <div class="absolute z-10 top-0 inset-x-4 flex gap-3">
            <div class="h-6 min-w-[6.8rem] px-3 rounded-t-md border border-zinc-700 border-b-0 bg-zinc-900/62 font-mono text-[10px] leading-6 text-zinc-400/85 text-center">.env.local</div>
            <div class="h-6 min-w-[9.4rem] px-3 rounded-t-md border border-yellow-300 border-b-0 bg-zinc-900/78 font-mono text-[10px] leading-6 text-[#ecd53f] text-center shadow-[0_0_14px_rgba(236,213,63,0.10)]">.env.production</div>
            <div class="h-6 min-w-[5.7rem] px-3 rounded-t-md border border-zinc-700 border-b-0 bg-zinc-900/62 font-mono text-[10px] leading-6 text-zinc-400/85 text-center">.env.ci</div>
          </div>

          <div class="absolute inset-x-4 bottom-3 font-mono text-[10px] leading-[1.45] text-zinc-400/42">
            <div>DOTENV_ENV=production</div>
            <div>DOTENV_PRIVATE_KEY_PRODUCTION=***</div>
          </div>
        </div>
      </div>

      <div class="relative z-10 max-w-2xl">
        <div class="inline-flex items-center gap-2">
          <span class="inline-flex h-7 w-7 items-center justify-center rounded-md border bg-black/40 text-[#ecd53f] text-sm" style="border-color: rgba(236, 213, 63, 0.62);">◈</span>
          <span class="text-[#ecd53f] text-xs font-semibold tracking-[0.08em]"><code>dotenvx run -f .env.production</code></span>
        </div>
        <h3 class="mt-4 text-zinc-100 font-semibold text-3xl md:text-[2.2rem] leading-[1.05] tracking-tight">Multiple Environments</h3>
        <p class="mt-2 text-zinc-300/95 text-xs md:text-sm leading-relaxed">Many contexts. Load only what you need.</p>
      </div>
    </div>
  </div>

</section>

<section class="w-full max-w-5xl mx-auto px-6 mt-10 md:mt-16 lg:mt-20 mb-24 md:mb-40 lg:mb-52">
  <div class="text-center max-w-3xl mx-auto">
    <h2 class="font-normal text-4xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Developers are talking about Dotenvx.</h2>
    <p class="mt-4 text-zinc-400 text-lg">Installed almost 3 million times a week on <a href="https://www.npmjs.com/package/@dotenvx/dotenvx" target="_blank" rel="noopener noreferrer" class="text-[#ecd53f] hover:text-[#f7e87a] no-underline hover:no-underline">npm</a>.</p>
  </div>

  <div class="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
    <a href="https://x.com/bholmesdev/status/2029285485693039077?s=46" target="_blank" rel="noopener noreferrer" class="block h-full cursor-pointer select-none rounded-xl border border-zinc-700 bg-zinc-950/80 p-5 md:p-6 no-underline hover:no-underline hover:border-zinc-500 transition-colors duration-200 md:flex md:flex-col">
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

    <a href="https://x.com/commte/status/1996144456891060730?s=46" target="_blank" rel="noopener noreferrer" class="block h-full cursor-pointer select-none rounded-xl border border-zinc-700 bg-zinc-950/80 p-5 md:p-6 no-underline hover:no-underline hover:border-zinc-500 transition-colors duration-200 md:flex md:flex-col">
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

    <a href="https://x.com/kristianfreeman/status/1808552701673808135?s=46" target="_blank" rel="noopener noreferrer" class="block h-full cursor-pointer select-none rounded-xl border border-zinc-700 bg-zinc-950/80 p-5 md:p-6 no-underline hover:no-underline hover:border-zinc-500 transition-colors duration-200 md:flex md:flex-col">
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-2 min-w-0">
          <span class="inline-flex h-9 w-9 self-center items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-xs font-semibold text-zinc-300">KF</span>
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
  <h2 class="font-normal text-3xl sm:text-4xl md:text-[2.9rem] leading-[1.06] tracking-[-0.02em] text-zinc-950 dark:text-zinc-50">FAQ</h2>
  <dl class="divide-y divide-zinc-200 dark:divide-zinc-800">
    {% include v1/components/faq-question.html question="How does encryption work?" answer='Dotenvx uses Elliptic Curve Integrated Encryption Scheme (ECIES) to encrypt each secret with a unique ephemeral key, while ensuring it can be decrypted using a long-term private key.<br/><br/>When you initialize encryption, a DOTENV_PUBLIC_KEY (encryption key) and DOTENV_PRIVATE_KEY (decryption key) are generated. The DOTENV_PUBLIC_KEY is used to encrypt secrets, and the DOTENV_PRIVATE_KEY is securely stored in your cloud secrets manager or .env.keys file.<br/><br/>Your encrypted .env file is then safely committed to code. Even if the file is exposed, secrets remain protected since decryption requires the separate DOTENV_PRIVATE_KEY, which is never stored alongside it. Read <a href="/dotenvx.pdf">the whitepaper</a> for more details.' %}
    {% include v1/components/faq-question.html question="Is it safe to commit an encrypted .env file to code?" answer='Yes. Dotenvx encrypts secrets using AES-256 with ephemeral keys, ensuring that even if the encrypted .env file is exposed, its contents remain secure. The encryption keys themselves are protected using Secp256k1 elliptic curve cryptography, which is widely used for secure key exchange in technologies like Bitcoin.<br/><br/>This means that every secret in the .env file is encrypted with a unique AES-256 key, and that key is further encrypted using a public key (Secp256k1). Even if an attacker obtains the encrypted .env file, they would still need the corresponding private key—stored separately—to decrypt anything.<br/><br/>Breaking this encryption would require brute-forcing both AES-256 and elliptic curve cryptography, which is computationally infeasible with current technology. Read <a href="/dotenvx.pdf">the whitepaper</a> for more details.' %}
    {% include v1/components/faq-question.html question="How does it protect me from third-party breaches like CircleCI?" answer="In the CircleCI breach the attacker accessed environment variables only. They could not access codebases. To steal your encrypted .env secrets, an attacker needs both – the private decryption key AND the encrypted .env files." %}
    {% include v1/components/faq-question.html question="<sup>1</sup>Is it true AWS uses .env files internally?" answer="A former AWS engineer mentioned to me (and others) that AWS used them on their production infrastructure. He has since left to start his own business so maybe this is no longer the case." div_id="footnote-1" %}
    {% include v1/components/faq-question.html question="Can I email you?" answer="Yes, at mot [at] dotenvx [dot] com. I particularly like to hear from large organizations using dotenvx. We have an SLA with enterprise assurances your compliance team will appreciate." %}
    <div x-data="{ open: false }">
      <dt class="">
        <button x-on:click="open = ! open" type="button" class="py-3 flex w-full items-start justify-between text-left" aria-controls="faq-0" aria-expanded="false">
          <span class="font-semibold leading-7 dark:text-zinc-300">Where is the changelog?</span>
          <span class="ml-6 flex h-7 items-center">
            <svg x-show="!open" class="h-6 w-6 text-zinc-400 dark:text-zinc-600" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
            </svg>
            <svg x-cloak x-show="open" class="h-6 w-6 text-zinc-400 dark:text-zinc-600" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
            </svg>
          </span>
        </button>
      </dt>
      <dd x-cloak x-show="open" class="" id="faq-0">
        <div class="border border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 rounded-lg p-4 pb-2">
          <div class="relative">
            <!-- Faded scrollable content -->
            <div class="overflow-auto max-h-72 changelog flex flex-col gap-4">
              {{ site.data.changelog_html }}
            </div>
            <!-- fade overlay -->
            <div class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white dark:to-zinc-950 rounded-b-lg"></div>
          </div>
          <!-- Always visible link -->
          <a href="https://github.com/dotenvx/dotenvx/blob/main/CHANGELOG.md" class="text-sm text-center mx-auto block w-full bg-white dark:bg-zinc-950 py-2">Full changelog →</a>
        </div>
      </dd>
    </div>
  </dl>
</section>

<section class="w-full max-w-6xl mx-auto px-6 mt-32 md:mt-44 mb-12 md:mb-20 text-center">
  <h3 class="hero-title-shaded font-canela font-normal tracking-[-0.018em] text-[3rem] md:text-[4rem] lg:text-[4.8rem] leading-[1.03]">
    Dotenv secured.<br />Available today.
  </h3>
  <div class="mt-8 flex items-center justify-center gap-6">
    <a class="btn-primary inline-flex items-center gap-0.5" href="/docs/quickstart">
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
