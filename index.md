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
      {% include logos/google2.html class="w-[10.2rem] lg:w-[11.5rem] h-auto mx-auto" %}
    </a>
    <a href="https://supabase.com/docs/guides/local-development/managing-config#going-further" target="_blank" class="flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Supabase documentation using dotenvx for branching">
      {% include logos/supabase2.html class="w-[9.2rem] lg:w-[11.5rem] h-auto mx-auto" %}
    </a>
    <a href="https://github.com/daytonaio/daytona" target="_blank" class="flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Daytona repository">
      {% include logos/daytona.html class="w-[10.2rem] lg:w-[11.5rem] h-auto mx-auto" %}
    </a>
    <a href="https://github.com/RooCodeInc/Roo-Code" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="RooCode repository">
      {% include logos/roocode.html class="w-[10.2rem] lg:w-[12.8rem] h-auto mx-auto" %}
    </a>
    <a href="https://github.com/nasa/earthdata-search" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="NASA Earthdata Search using dotenvx">
      {% include logos/nasa.html class="h-14 lg:h-14 w-auto mx-auto" %}
    </a>
    <a href="https://www.npmjs.com/package/@webflow/webflow-cli?activeTab=readme" target="_blank" class="flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Webflow CLI npm package">
      {% include logos/webflow.html class="w-[10.2rem] lg:w-[11.5rem] h-auto mx-auto" %}
    </a>
    <a href="https://github.com/TencentCloudBase" target="_blank" class="flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Tencent CloudBase organization">
      {% include logos/tencent.html class="w-[10.2rem] lg:w-[11.5rem] h-auto mx-auto" %}
    </a>
    <a href="https://github.com/paypal/agent-toolkit" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="PayPal agent toolkit using dotenvx">
      {% include logos/paypal.html class="h-10 lg:h-10 w-auto mx-auto" %}
    </a>
    <a href="https://github.com/SocketDev/socket-cli" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Socket CLI using dotenvx">
      {% include logos/socket2.html class="w-[8.9rem] lg:w-[11.5rem] h-auto mx-auto" %}
    </a>
    <a href="https://docs.amplify.aws/react/deploy-and-host/fullstack-branching/secrets-and-vars/#local-environment-2" target="_blank" class="flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="AWS documentation referencing dotenvx">
      {% include logos/aws.html class="h-16 lg:h-14 w-auto mx-auto" %}
    </a>
    <a href="https://github.com/shadcn-ui/ui" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="shadcn/ui repository">
      {% include logos/shadcn.html class="w-[8.9rem] lg:w-[11.5rem] h-auto mx-auto" %}
    </a>
    <a href="https://github.com/browser-use/browser-use" target="_blank" class="hidden md:flex items-center justify-center opacity-100 text-zinc-100 dark:text-zinc-100" aria-label="Browser Use repository">
      {% include logos/browser-use.html class="w-[8.9rem] lg:w-[11.5rem] h-auto mx-auto" %}
    </a>
  </div>
</section>

<section class="w-full max-w-5xl mx-auto px-6 mt-8 md:mt-16 lg:mt-20 mb-44 md:mb-64 lg:mb-[18rem]">
  <div class="text-center max-w-3xl mx-auto">
    <h2 class="font-bold text-3xl sm:text-4xl text-zinc-100 leading-tight">Same dotenv workflow, but encrypted.</h2>
    <p class="mt-4 text-zinc-400 text-lg">Switch from plaintext <code>.env</code> files to encrypted <code>.env</code> files without changing how your app runs.</p>
  </div>

  <div class="mt-8 md:mt-10 mx-auto max-w-3xl bg-zinc-100 dark:bg-zinc-900 px-6 py-6 md:px-8 md:py-8 font-mono text-sm md:text-base leading-[1.45]">
    <div class="text-zinc-500 text-[0.9em]">// before</div>
    <div class="mt-2 text-[#a7b4cc] font-semibold">require('dotenv').config()</div>
    <div class="mt-8 text-zinc-500 text-[0.9em]">// after</div>
    <div class="mt-2 text-[#ecd53f] font-semibold">require('@dotenvx/dotenvx').config()</div>
  </div>

  <div class="mt-8 md:mt-10 mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
    <div class="rounded-xl border border-zinc-800/90 bg-zinc-950/60 p-4">
      <div class="text-[#ecd53f] font-semibold text-sm tracking-wide">1</div>
      <h3 class="mt-2 text-zinc-100 font-semibold">Install</h3>
      <p class="mt-1 text-zinc-400 text-sm">Add <code>@dotenvx/dotenvx</code> to your project.</p>
    </div>
    <div class="rounded-xl border border-zinc-800/90 bg-zinc-950/60 p-4">
      <div class="text-[#ecd53f] font-semibold text-sm tracking-wide">2</div>
      <h3 class="mt-2 text-zinc-100 font-semibold">Swap one line</h3>
      <p class="mt-1 text-zinc-400 text-sm">Replace <code>dotenv</code> with <code>dotenvx</code> in your app.</p>
    </div>
    <div class="rounded-xl border border-zinc-800/90 bg-zinc-950/60 p-4">
      <div class="text-[#ecd53f] font-semibold text-sm tracking-wide">3</div>
      <h3 class="mt-2 text-zinc-100 font-semibold">Encrypt your env</h3>
      <p class="mt-1 text-zinc-400 text-sm">Run <code>dotenvx encrypt</code> and protect your secrets.</p>
    </div>
  </div>
</section>

<section class="w-full max-w-5xl mx-auto px-6 mt-10 md:mt-16 lg:mt-20 mb-24 md:mb-40 lg:mb-52">
  <div class="text-center max-w-3xl mx-auto">
    <h2 class="font-bold text-3xl sm:text-4xl text-zinc-100 leading-tight">A powerful upgrade to dotenv.</h2>
    <p class="mt-4 text-zinc-400 text-lg">Protect secrets in source code and AI prompts with an upgrade that takes seconds.</p>
  </div>

  <div class="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-5 gap-4 md:gap-5">
    <div class="sm:col-span-2 relative overflow-hidden rounded-xl border border-yellow-300/45 bg-[#0d0a07] p-5 md:p-6 min-h-[19rem] md:min-h-[22rem]">
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
          <span class="inline-flex h-7 w-7 items-center justify-center rounded-md border border-yellow-300/55 bg-black/45 text-[#ecd53f] text-sm">◈</span>
          <span class="text-[#ecd53f] text-xs font-semibold tracking-[0.08em]"><code>dotenvx encrypt</code></span>
        </div>
        <h3 class="mt-4 text-zinc-100 font-semibold text-3xl md:text-[2.2rem] leading-[1.05] tracking-tight">Encryption</h3>
        <p class="mt-2 text-[#cbb98a] text-xs md:text-sm">Commit ciphertext. Keep keys separate.</p>
      </div>
    </div>
    <div class="sm:col-span-3 relative overflow-hidden rounded-xl border border-zinc-700/90 bg-zinc-950/80 p-5 md:p-6 min-h-[19rem] md:min-h-[22rem]">
      <div class="pointer-events-none absolute -top-20 right-[-4rem] h-56 w-56 rounded-full bg-[#ecd53f]/10 blur-3xl"></div>
      <div class="pointer-events-none absolute -bottom-24 left-[-5rem] h-64 w-64 rounded-full bg-blue-300/8 blur-3xl"></div>
      <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(7,10,20,0.96)_12%,rgba(7,10,20,0.72)_45%,rgba(7,10,20,0.92)_88%)]"></div>

      <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div class="-rotate-[12deg] grid grid-cols-5 gap-2 md:gap-3 opacity-80 md:opacity-90 translate-y-3 md:translate-y-5 scale-[1.03]">
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">TypeScript</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Node.js</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Python</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Ruby</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Go</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Rust</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Java</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">PHP</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">.NET</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Deno</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Bun</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Bash</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Fish</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Clojure</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Kotlin</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Docker</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Compose</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">GitHub</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Heroku</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Vercel</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Cloudflare</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Netlify</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Railway</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Render</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Fly</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Digital Ocean</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">NPM</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Nx</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Turborepo</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Trigger</span>
          <span class="h-8 md:h-9 px-3 rounded-md border border-zinc-700/80 bg-zinc-900/80 text-zinc-200/95 text-[11px] md:text-xs font-semibold inline-flex items-center justify-center">Frameworks</span>
        </div>
      </div>

      <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,18,0.94)_0%,rgba(8,10,18,0.56)_40%,rgba(8,10,18,0.78)_100%)]"></div>

      <div class="relative z-10 max-w-2xl">
        <div class="inline-flex items-center gap-2">
          <span class="inline-flex h-7 w-7 items-center justify-center rounded-md border border-yellow-300/55 bg-black/45 text-[#ecd53f] text-sm">◈</span>
          <span class="text-[#ecd53f] text-xs font-semibold tracking-[0.08em]"><code>dotenvx run -- your-cmd</code></span>
        </div>
        <h3 class="mt-4 text-zinc-100 font-semibold text-3xl md:text-[2.2rem] leading-[1.05] tracking-tight">Cross Platform</h3>
        <p class="mt-2 text-zinc-300/95 text-xs md:text-sm leading-relaxed">Run anywhere. Works across languages.</p>
      </div>
    </div>
  </div>

  <div class="mt-4 md:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
    <div class="sm:col-span-1 relative overflow-hidden rounded-xl border border-zinc-700/90 bg-zinc-950/85 p-5 md:p-6 min-h-[18rem] md:min-h-[20rem]">
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
          <span class="inline-flex h-7 w-7 items-center justify-center rounded-md border border-yellow-300/55 bg-black/40 text-[#ecd53f] text-sm">◈</span>
          <span class="text-[#ecd53f] text-xs font-semibold tracking-[0.08em]"><code>git add .env</code></span>
        </div>
        <h3 class="mt-4 text-zinc-100 font-semibold text-3xl md:text-[2.2rem] leading-[1.05] tracking-tight">Secure GitOps</h3>
        <p class="mt-2 text-zinc-300/95 text-xs md:text-sm leading-relaxed">Secrets, encrypted in Git. Decrypted only at runtime.</p>
      </div>
    </div>

    <div class="sm:col-span-1 relative overflow-hidden rounded-xl border border-zinc-700/90 bg-zinc-950/85 p-5 md:p-6 min-h-[18rem] md:min-h-[20rem]">
      <div class="pointer-events-none absolute -top-20 right-[-4rem] h-56 w-56 rounded-full bg-[#ecd53f]/10 blur-3xl"></div>
      <div class="pointer-events-none absolute -bottom-16 left-[-4rem] h-52 w-52 rounded-full bg-blue-300/8 blur-3xl"></div>
      <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,rgba(9,12,21,0.94)_0%,rgba(9,12,21,0.78)_50%,rgba(9,12,21,0.94)_100%)]"></div>

      <div class="pointer-events-none absolute inset-0 hidden md:block select-none">
        <span class="absolute top-[5.0rem] right-[12.2rem] font-mono text-[10px] text-[#ecd53f]/42">›</span>
        <span class="absolute top-[5.55rem] right-[11.15rem] font-mono text-[10px] text-[#ecd53f]/34">›</span>
        <span class="absolute top-[6.1rem] right-[10.1rem] font-mono text-[10px] text-[#ecd53f]/26">›</span>
      </div>

      <div class="pointer-events-none absolute right-5 bottom-6 hidden md:block select-none">
        <div class="relative h-[8.1rem] w-[13.2rem]">
          <div class="absolute top-0 right-0 h-10 w-[12rem] rounded-md border border-zinc-700/60 bg-zinc-900/48">
            <div class="absolute -top-3 left-3 h-4 w-[5.2rem] rounded-t-md border border-zinc-700/60 border-b-0 bg-zinc-900/60"></div>
            <div class="px-3 pt-2 font-mono text-[11px] text-zinc-400/85">.env.local</div>
          </div>
          <div class="absolute top-[2.35rem] right-[0.6rem] h-10 w-[12rem] rounded-md border border-yellow-300/45 bg-zinc-900/72 shadow-[0_0_20px_rgba(236,213,63,0.10)]">
            <div class="absolute -top-3 left-3 h-4 w-[7.6rem] rounded-t-md border border-yellow-300/45 border-b-0 bg-zinc-900/80"></div>
            <div class="px-3 pt-2 font-mono text-[11px] text-[#ecd53f]">.env.production</div>
          </div>
          <div class="absolute top-[4.7rem] right-[1.2rem] h-10 w-[12rem] rounded-md border border-zinc-700/60 bg-zinc-900/48">
            <div class="absolute -top-3 left-3 h-4 w-[4.2rem] rounded-t-md border border-zinc-700/60 border-b-0 bg-zinc-900/60"></div>
            <div class="px-3 pt-2 font-mono text-[11px] text-zinc-400/85">.env.ci</div>
          </div>
        </div>
      </div>

      <div class="relative z-10 max-w-2xl">
        <div class="inline-flex items-center gap-2">
          <span class="inline-flex h-7 w-7 items-center justify-center rounded-md border border-yellow-300/55 bg-black/40 text-[#ecd53f] text-sm">◈</span>
          <span class="text-[#ecd53f] text-xs font-semibold tracking-[0.08em]"><code>dotenvx run -f .env.production</code></span>
        </div>
        <h3 class="mt-4 text-zinc-100 font-semibold text-3xl md:text-[2.2rem] leading-[1.05] tracking-tight">Multiple Environments</h3>
        <p class="mt-2 text-zinc-300/95 text-xs md:text-sm leading-relaxed">Many contexts. Load only what you need.</p>
      </div>
    </div>
  </div>

</section>

<section class="w-full max-w-2xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-4">
  <h2 class="font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">A secure dotenv – from the creator of dotenv</h2>
  <p class="text-left text-lg">Plaintext .env files have been a major attack vector, but they've also been undeniably useful – even AWS uses them.<sup><a href="#footnote-1">1</a></sup> <span class="font-bold">What if you could encrypt them?</span> You can with <a href="https://github.com/dotenvx/dotenvx">dotenvx</a>. Dotenvx encrypts your .env files – limiting their attack vector while retaining their benefits. It's free, open-source, and built and maintained by the creator of the original <a class="whitespace-nowrap" href="https://github.com/motdotla/dotenv">dotenv</a>. <span class="mx-3 font-normal italic text-zinc-400 dark:text-zinc-600">– Scott (Mot) Motte</span></p>
</section>

<section class="w-full max-w-2xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-4">
  <h2 class="font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">With strong cryptography.</h2>
  <div class="flex flex-col sm:flex-row gap-8">
    <div class="sm:basis-2/3 flex flex-col gap-4">
      <p class="font-serif">Dotenvx: Reducing Secrets Risk with Cryptographic Separation.</p>
      <p class="font-serif"><span class="italic">Abstract.</span> An ideal secrets solution would not only centralize secrets but also contain the fallout of a breach. We propose a solution that reduces the blast radius by splitting secrets management into two distinct components: an encrypted secrets file and a separate decryption key.</p>
      <p><a target="_blank" href="/dotenvx.pdf?v={{ site.time | date: '%Y%m%d%H%M%S' }}">Read the whitepaper &rarr;</a></p>
    </div>
    <div class="px-10 sm:px-0 sm:basis-1/3">
      <a target="_blank" href="/dotenvx.pdf?v={{ site.time | date: '%Y%m%d%H%M%S' }}" class="cursor-pointer min-w-0 w-full block border-2 border-zinc-200 dark:hover:border-[#ecd53f] hover:border-blue-500">
        <img src="/assets/img/whitepaper-thumb.png" class="w-[700px] aspect-[8.5/11] max-w-full max-h-screen border-0 mx-auto"/>
      </a>
    </div>
  </div>

</section>

<section class="w-full max-w-2xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-4">
  <h2 class="font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">Growing rapidly.</h2>
  <p>
    Dotenvx is installed almost <a href="http://npmjs.com/@dotenvx/dotenvx">three million times weekly</a>.
  </p>
  <p>
    It's only <a href="https://dotenvx.com/blog/2024/06/24/dotenvx-next-generation-config-management.html">one year old</a>, and yet <a href="https://paypal.com">Paypal</a>, <a href="https://www.nasa.gov/">NASA</a>, <a href="https://procore.com">Procore</a>, <a href="https://supabase.com">Supabase</a>, <a href="https://opennext.js.org/">OpenNext</a>, <a href="https://aws.amazon.com">AWS</a>, <a href="https://socket.dev">Socket</a>, <a href="https://daytona.io">Daytona</a>, <a href="https://stacks.co">Stacks</a>, and <a href="https://facebook.com">Facebook</a> have all adopted it. Even stereotypically slow moving government departments in <a href="https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service">Britain</a>, <a href="https://www.numerique.gouv.fr/">France</a>, <a href="https://github.com/bcgov">Canada</a>, and <a href="https://www.hel.fi/fi">Finland</a>, having evaluated it for its extra security benefits, adopted it.
  </p>
  <p>
    It's being used inside AI tooling like <a href="https://github.com/paypal/agent-toolkit">Paypal's Agent-Toolkit</a> and <a href="https://www.daytona.io/docs/typescript-sdk/">Daytona's SDK</a>. It's trusted by security software like <a href="https://github.com/SocketDev/socket-cli">Socket's CLI and Registry</a>. AWS recommends it with <a
      href="https://docs.amplify.aws/react/deploy-and-host/fullstack-branching/secrets-and-vars/#local-environment-2">AWS Amplify</a>, NASA uses it to help power <a href="https://github.com/nasa/earthdata-search">Earthdata Search</a>, and Supabase requires it to unlock their <a href="https://supabase.com/docs/guides/deployment/branching#using-dotenvx-for-git-based-workflow">Branching feature</a>. It's incredible, and it will be even more exciting to watch year two unfold.
  </p>
  <div class="md:py-0 rounded-lg overflow-hidden">
    <div class="flex gap-5 lg:gap-10 items-center justify-center">
      {% include logos/socket.html class="h-10" %}
      {% include logos/aws.html class="h-12" %}
      {% include logos/paypal.html class="h-10" %}
      {% include logos/nasa.html class="h-12" %}
      {% include logos/facebook.html class="h-10" %}
      {% include logos/supabase.html class="h-10" %}
    </div>
  </div>
</section>

<section class="w-full max-w-2xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-4">
  <h2 class="font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">Easy to switch.</h2>
  <div class="bg-zinc-100 dark:bg-zinc-900 p-6 font-mono text-zinc-800 dark:text-zinc-100 shadow-sm overflow-x-auto">
    <code class="block text-zinc-500">// before</code>
    <div class="my-1 text-slate-400 font-semibold">require('dotenv').config()</div>
    <code class="block text-zinc-500 mt-6">// after</code>
    <div class="text-black dark:text-[#ecd53f] font-semibold">require('@dotenvx/dotenvx').config()</div>
  </div>
  <p>Just replace dotenv with @dotenvx/dotenvx and opt-in to all its benefits — without changing your current workflow.</p>
  <p><a href="/docs/install">See all install options &rarr;</a></p>
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

<hr class="my-12 md:my-20" />

<section class="w-full max-w-2xl mx-auto px-6 mt-20 flex flex-col gap-4">
  <h2 class="font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">Have questions?</h2>
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
