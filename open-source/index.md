---
title: Open Source
permalink: /open-source/
---

<style>
  .os-artifact-card::after {
    background: linear-gradient(90deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.035) 20%, rgba(236,213,63,0.12) 50%, rgba(255,255,255,0.035) 80%, rgba(255,255,255,0.01) 100%);
    bottom: 0;
    content: "";
    height: 1px;
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
  }

  .os-artifact-window {
    position: relative;
  }

  .os-artifact-window::after {
    background:
      linear-gradient(rgba(236,213,63,0.34), rgba(236,213,63,0.34)) left top / 1.15rem 1px no-repeat,
      linear-gradient(rgba(236,213,63,0.34), rgba(236,213,63,0.34)) right top / 1.15rem 1px no-repeat,
      linear-gradient(rgba(236,213,63,0.2), rgba(236,213,63,0.2)) left bottom / 1.15rem 1px no-repeat,
      linear-gradient(rgba(236,213,63,0.2), rgba(236,213,63,0.2)) right bottom / 1.15rem 1px no-repeat,
      linear-gradient(rgba(236,213,63,0.34), rgba(236,213,63,0.34)) left top / 1px 1.15rem no-repeat,
      linear-gradient(rgba(236,213,63,0.34), rgba(236,213,63,0.34)) right top / 1px 1.15rem no-repeat,
      linear-gradient(rgba(236,213,63,0.2), rgba(236,213,63,0.2)) left bottom / 1px 1.15rem no-repeat,
      linear-gradient(rgba(236,213,63,0.2), rgba(236,213,63,0.2)) right bottom / 1px 1.15rem no-repeat;
    content: "";
    inset: 0.55rem;
    opacity: 0.75;
    pointer-events: none;
    position: absolute;
    transition: opacity 200ms ease;
  }

  .os-artifact-card:hover .os-artifact-window::after {
    opacity: 1;
  }
</style>

<section class="mx-auto flex w-full max-w-7xl flex-col px-5 pt-24 pb-14 md:pt-32 md:pb-20">
  <div class="mx-auto max-w-4xl text-center">
    <h1 class="pb-2 text-center font-canela text-[3rem] font-normal leading-[0.98] tracking-[-0.018em] text-zinc-100 md:text-[4.4rem] lg:text-[5.25rem]">Open Source</h1>
    <p class="mx-auto mt-8 max-w-3xl text-center text-xl leading-relaxed text-zinc-400 md:text-2xl">Our open work and contributions to the community.</p>
  </div>
</section>

<section class="mx-auto w-full max-w-7xl px-5 pb-28 md:pb-36">
  <div class="relative mx-auto max-w-4xl overflow-hidden rounded-lg border border-zinc-800/70 bg-black/20">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.22)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute left-1/2 top-0 h-10 w-[42%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(236,213,63,0.075)_0%,rgba(236,213,63,0.03)_36%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.16)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute left-1/2 bottom-0 h-10 w-[38%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(236,213,63,0.055)_0%,rgba(236,213,63,0.022)_36%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>

    <div class="grid grid-cols-[6.5rem_1fr_auto] gap-4 border-b border-zinc-900 px-5 py-3 font-mono text-[0.64rem] font-normal uppercase tracking-[0.16em] text-zinc-600 md:grid-cols-[8rem_1fr_7rem_2rem] md:px-7">
      <span>Artifact</span>
      <span>Purpose</span>
      <span class="hidden text-right md:block">Signal</span>
      <span class="sr-only">Open</span>
    </div>

    <a href="https://github.com/motdotla/dotenv" target="_blank" rel="noopener noreferrer" class="group grid gap-3 border-b border-zinc-900 px-5 py-5 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[8rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="font-mono text-xs font-normal text-zinc-500">dotenv</span>
      <span class="text-sm font-normal leading-6 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-500">Load environment variables from .env files.</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">20.4k ★</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-[#ecd53f]/80">›</span>
    </a>

    <a href="https://github.com/dotenvx/dotenvx" target="_blank" rel="noopener noreferrer" class="group relative grid gap-3 border-b border-zinc-900 bg-[#ecd53f]/[0.025] px-5 py-5 no-underline transition-colors duration-200 hover:bg-[#ecd53f]/[0.045] hover:no-underline md:grid-cols-[8rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="absolute inset-y-3 left-0 w-px bg-[#ecd53f]/70 shadow-[0_0_18px_rgba(236,213,63,0.18)]" aria-hidden="true"></span>
      <span class="font-mono text-xs font-normal text-[#ecd53f]/80">dotenvx</span>
      <span class="text-sm font-normal leading-6 text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">Encrypt .env files and run them anywhere.</span>
      <span class="font-mono text-xs font-normal text-[#ecd53f]/65 md:text-right">5.5k ★</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-[#ecd53f]/70">›</span>
    </a>

    <a href="https://keysee.io" target="_blank" rel="noopener noreferrer" class="group grid gap-3 border-b border-zinc-900 px-5 py-5 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[8rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="font-mono text-xs font-normal text-zinc-500">KEYSEE⎔</span>
      <span class="text-sm font-normal leading-6 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-500">Visual fingerprints for public keys.</span>
      <span aria-hidden="true" class="hidden md:block"></span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-[#ecd53f]/80">›</span>
    </a>

    <a href="https://github.com/vestauth/vestauth" target="_blank" rel="noopener noreferrer" class="group grid gap-3 border-b border-zinc-900 px-5 py-5 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[8rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="font-mono text-xs font-normal text-zinc-500">vestauth</span>
      <span class="text-sm font-normal leading-6 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-500">Verifiable identity and authentication for autonomous software.</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">139 ★</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-[#ecd53f]/80">›</span>
    </a>

    <a href="https://github.com/dotenvx/llmstxt" target="_blank" rel="noopener noreferrer" class="group grid gap-3 px-5 py-5 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[8rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="font-mono text-xs font-normal text-zinc-500">llmstxt</span>
      <span class="text-sm font-normal leading-6 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-500">Convert sitemap.xml to llms.txt.</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">145 ★</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-[#ecd53f]/80">›</span>
    </a>
  </div>
</section>

<section class="mx-auto w-full max-w-7xl px-5 pb-28 md:pb-36">
  <div class="relative mx-auto max-w-4xl">
    <h2 class="text-4xl font-normal tracking-[-0.02em] text-zinc-100 md:text-5xl">Published Work</h2>
    <p class="mt-4 max-w-2xl text-base leading-7 text-zinc-500 md:text-lg">Technical papers and presentations from our work on secrets, cryptography, and identity.</p>
  </div>

  <div class="relative mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
    <a href="https://dotenvx.com/whitepaper.pdf" target="_blank" rel="noopener noreferrer" class="os-artifact-card group relative overflow-hidden rounded-lg border border-zinc-800/70 bg-black/20 p-4 no-underline transition-colors duration-200 hover:border-zinc-700/80 hover:bg-zinc-950/35 hover:no-underline">
      <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.035)_20%,rgba(236,213,63,0.16)_50%,rgba(255,255,255,0.035)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
      <div class="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-zinc-700">paper</div>
      <div class="os-artifact-window flex justify-center overflow-hidden rounded-md border border-zinc-900 bg-black/70 py-4">
        <img src="https://dotenvx.com/assets/img/whitepaper-thumb.png" alt="Dotenvx whitepaper preview" class="block w-40 opacity-85 shadow-[0_1.2rem_2.4rem_rgba(0,0,0,0.3)] transition duration-200 group-hover:scale-[1.015] group-hover:opacity-100 sm:w-48" loading="lazy">
      </div>
      <div class="mt-4 border-t border-zinc-900 pt-4">
        <p class="m-0 font-mono text-xs font-normal text-[#ecd53f]/80">Dotenvx: Reducing Secrets Risk with Cryptographic Separation</p>
        <span class="mt-4 inline-flex items-center gap-2 font-mono text-xs font-normal text-zinc-600 transition-colors duration-200 group-hover:text-[#ecd53f]/75">read paper <span aria-hidden="true">↗</span></span>
      </div>
    </a>

    <a href="https://keysee.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" class="os-artifact-card group relative overflow-hidden rounded-lg border border-zinc-800/70 bg-black/20 p-4 no-underline transition-colors duration-200 hover:border-zinc-700/80 hover:bg-zinc-950/35 hover:no-underline">
      <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.035)_20%,rgba(236,213,63,0.16)_50%,rgba(255,255,255,0.035)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
      <div class="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-zinc-700">paper</div>
      <div class="os-artifact-window flex justify-center overflow-hidden rounded-md border border-zinc-900 bg-black/70 py-4">
        <img src="https://keysee.io/whitepaper.png" alt="KEYSEE whitepaper preview" class="block w-40 opacity-85 shadow-[0_1.2rem_2.4rem_rgba(0,0,0,0.3)] transition duration-200 group-hover:scale-[1.015] group-hover:opacity-100 sm:w-48" loading="lazy">
      </div>
      <div class="mt-4 border-t border-zinc-900 pt-4">
        <p class="m-0 font-mono text-xs font-normal text-zinc-400">KEYSEE⎔: Deterministic Visual Identity for Public Keys</p>
        <span class="mt-4 inline-flex items-center gap-2 font-mono text-xs font-normal text-zinc-600 transition-colors duration-200 group-hover:text-[#ecd53f]/75">read paper <span aria-hidden="true">↗</span></span>
      </div>
    </a>

    <a href="https://dotenvx.com/laruby.pdf" target="_blank" rel="noopener noreferrer" class="os-artifact-card group relative overflow-hidden rounded-lg border border-zinc-800/70 bg-black/20 p-4 no-underline transition-colors duration-200 hover:border-zinc-700/80 hover:bg-zinc-950/35 hover:no-underline">
      <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.035)_20%,rgba(236,213,63,0.16)_50%,rgba(255,255,255,0.035)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
      <div class="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-zinc-700">presentation</div>
      <div class="os-artifact-window flex justify-center overflow-hidden rounded-md border border-zinc-900 bg-black/70 py-4">
        <img src="/assets/img/laruby-thumb.png" alt="Dark ages of app configuration presentation preview" class="block w-40 opacity-85 shadow-[0_1.2rem_2.4rem_rgba(0,0,0,0.3)] transition duration-200 group-hover:scale-[1.015] group-hover:opacity-100 sm:w-48" loading="lazy">
      </div>
      <div class="mt-4 border-t border-zinc-900 pt-4">
        <p class="m-0 font-mono text-xs font-normal text-zinc-400">Dark ages of app configuration</p>
        <span class="mt-4 inline-flex items-center gap-2 font-mono text-xs font-normal text-zinc-600 transition-colors duration-200 group-hover:text-[#ecd53f]/75">view slides <span aria-hidden="true">↗</span></span>
      </div>
    </a>
  </div>
</section>

<section class="mx-auto w-full max-w-7xl px-5 pb-24 md:pb-32">
  <div class="relative pt-16 md:pt-20">
    <div class="relative mx-auto max-w-4xl">
      <h2 class="text-4xl font-normal tracking-[-0.02em] text-zinc-100 md:text-5xl">Sponsorship</h2>
      <p class="mt-4 max-w-2xl text-base leading-7 text-zinc-500 md:text-lg">Our financial contributions to the community through direct sponsorship.</p>
    </div>

    <div class="relative mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-3">
      <a href="https://github.com/yao-pkg/pkg" target="_blank" rel="noopener noreferrer" class="os-artifact-card group relative overflow-hidden rounded-lg border border-zinc-800/70 bg-black/20 p-4 no-underline transition-colors duration-200 hover:border-zinc-700/80 hover:bg-zinc-950/35 hover:no-underline">
        <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.035)_20%,rgba(236,213,63,0.16)_50%,rgba(255,255,255,0.035)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
        <div class="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-zinc-700">sponsor.record</div>
        <div class="os-artifact-window aspect-[16/9] overflow-hidden rounded-md border border-zinc-900 bg-black/70">
          <img src="https://opengraph.githubassets.com/ac3f8d5cf843f6baa1eafd2ea05edaceecb4be06ecb2ec9cc7c56db954b66d29/yao-pkg/pkg" alt="yao-pkg/pkg" class="h-full w-full object-cover opacity-75 transition duration-200 group-hover:scale-[1.015] group-hover:opacity-90" loading="lazy">
        </div>
        <div class="mt-4 border-t border-zinc-900 pt-4">
          <p class="m-0 font-mono text-xs font-normal text-zinc-400">yao-pkg/pkg</p>
          <p class="mt-1 font-mono text-xs text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">@robertsLando</p>
        </div>
      </a>

      <a href="https://github.com/ecies/js" target="_blank" rel="noopener noreferrer" class="os-artifact-card group relative overflow-hidden rounded-lg border border-zinc-800/70 bg-black/20 p-4 no-underline transition-colors duration-200 hover:border-zinc-700/80 hover:bg-zinc-950/35 hover:no-underline">
        <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.035)_20%,rgba(236,213,63,0.16)_50%,rgba(255,255,255,0.035)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
        <div class="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-zinc-700">sponsor.record</div>
        <div class="os-artifact-window aspect-[16/9] overflow-hidden rounded-md border border-zinc-900 bg-[radial-gradient(circle_at_50%_0%,rgba(236,213,63,0.08),transparent_58%),linear-gradient(180deg,rgba(24,24,27,0.78),rgba(0,0,0,0.95))]">
          <img src="https://opengraph.githubassets.com/f730c56355f8b9ff50160668f1de9cbfe60d26642abe0430ddd86442f25603db/ecies/js" alt="ecies/js" class="h-full w-full object-cover opacity-75 transition duration-200 group-hover:scale-[1.015] group-hover:opacity-90" loading="lazy">
        </div>
        <div class="mt-4 border-t border-zinc-900 pt-4">
          <p class="m-0 font-mono text-xs font-normal text-[#ecd53f]/80">ecies/js</p>
          <p class="mt-1 font-mono text-xs text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">@kigawas</p>
        </div>
      </a>

      <a href="https://github.com/abetomo" target="_blank" rel="noopener noreferrer" class="os-artifact-card group relative overflow-hidden rounded-lg border border-zinc-800/70 bg-black/20 p-4 no-underline transition-colors duration-200 hover:border-zinc-700/80 hover:bg-zinc-950/35 hover:no-underline">
        <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.035)_20%,rgba(236,213,63,0.16)_50%,rgba(255,255,255,0.035)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
        <div class="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-zinc-700">sponsor.record</div>
        <div class="os-artifact-window aspect-[16/9] overflow-hidden rounded-md border border-zinc-900 bg-black/70">
          <img src="https://avatars.githubusercontent.com/u/846454?v=4?s=400" alt="abetomo" class="h-full w-full object-cover opacity-75 transition duration-200 group-hover:scale-[1.015] group-hover:opacity-90" loading="lazy">
        </div>
        <div class="mt-4 border-t border-zinc-900 pt-4">
          <p class="m-0 font-mono text-xs font-normal text-zinc-400">abetomo</p>
          <p class="mt-1 font-mono text-xs text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">@abetomo</p>
        </div>
      </a>
    </div>
  </div>
</section>
