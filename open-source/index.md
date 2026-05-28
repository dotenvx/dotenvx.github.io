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

<section class="mx-auto w-full max-w-4xl px-5 pt-8 pb-14 md:pt-12 md:pb-20">
  <div class="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-8">
    <div>
      <h1 class="pb-2 font-canela text-[2.9rem] font-normal leading-[0.98] tracking-[-0.018em] text-zinc-100 md:text-[3.65rem] lg:text-[4.25rem]">Open Source</h1>
      <p class="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-400 md:text-2xl">Our open work and contributions to the community.</p>
    </div>
    {% include components/keysee-viewer.html public_key="025ba50c55b823bcb7841fe43643fe827ef74c183b2544040943aa5856c7c39646" render_mode="wire" class="relative min-h-[17rem] overflow-hidden rounded-lg bg-transparent md:min-h-[23rem]" %}
  </div>
</section>

<section class="mx-auto w-full max-w-7xl px-5 pb-28 md:pb-36">
  <div class="relative mx-auto max-w-4xl overflow-hidden rounded-lg border border-zinc-800/70 bg-black/20">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.22)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute left-1/2 top-0 h-10 w-[42%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(236,213,63,0.075)_0%,rgba(236,213,63,0.03)_36%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.16)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute left-1/2 bottom-0 h-10 w-[38%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(236,213,63,0.055)_0%,rgba(236,213,63,0.022)_36%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>

    <div class="grid grid-cols-[6.5rem_1fr_auto] gap-4 border-b border-zinc-900 px-5 py-3 font-mono text-[0.64rem] font-normal uppercase tracking-[0.16em] text-zinc-600 md:grid-cols-[8rem_1fr_7rem_2rem] md:px-7">
      <span>Project</span>
      <span>Purpose</span>
      <span class="hidden text-right md:block" aria-hidden="true"></span>
      <span class="sr-only">Open</span>
    </div>

    <a href="https://github.com/motdotla/dotenv" target="_blank" rel="noopener noreferrer" class="group grid gap-3 border-b border-zinc-900 px-5 py-5 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[8rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="font-mono text-xs font-normal text-zinc-500">dotenv</span>
      <span class="text-sm font-normal leading-6 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-500">Load environment variables from .env files.</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">20.4k ★</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>

    <a href="https://github.com/motdotla/dotenv-expand" target="_blank" rel="noopener noreferrer" class="group grid gap-3 border-b border-zinc-900 px-5 py-5 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[8rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="font-mono text-xs font-normal text-zinc-500">dotenv-expand</span>
      <span class="text-sm font-normal leading-6 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-500">Expand variables already loaded from .env files.</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">1.1k ★</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>

    <a href="https://github.com/dotenvx/dotenvx" target="_blank" rel="noopener noreferrer" class="group relative grid gap-3 border-b border-zinc-900 px-5 py-5 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[8rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="font-mono text-xs font-normal text-zinc-500">dotenvx</span>
      <span class="text-sm font-normal leading-6 text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">Encrypt .env files and run them anywhere.</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">5.5k ★</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>

    <a href="https://keysee.io" target="_blank" rel="noopener noreferrer" class="group grid gap-3 border-b border-zinc-900 px-5 py-5 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[8rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="font-mono text-xs font-normal text-zinc-500">KEYSEE⎔</span>
      <span class="text-sm font-normal leading-6 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-500">Visual fingerprints for public keys.</span>
      <span aria-hidden="true" class="hidden md:block"></span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>

    <a href="https://github.com/vestauth/vestauth" target="_blank" rel="noopener noreferrer" class="group grid gap-3 border-b border-zinc-900 px-5 py-5 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[8rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="font-mono text-xs font-normal text-zinc-500">vestauth</span>
      <span class="text-sm font-normal leading-6 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-500">Verifiable identity and authentication for autonomous software.</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">139 ★</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>

    <a href="https://github.com/dotenvx/llmstxt" target="_blank" rel="noopener noreferrer" class="group grid gap-3 px-5 py-5 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[8rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="font-mono text-xs font-normal text-zinc-500">llmstxt</span>
      <span class="text-sm font-normal leading-6 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-500">Convert sitemap.xml to llms.txt.</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">145 ★</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>
  </div>
</section>

<section class="mx-auto w-full max-w-7xl px-5 pb-28 md:pb-36">
  <div class="relative mx-auto max-w-4xl">
    <h2 class="text-4xl font-normal tracking-[-0.02em] text-zinc-100 md:text-5xl">Published Work</h2>
    <p class="mt-4 max-w-4xl text-base leading-7 text-zinc-500 md:text-lg">Technical papers and presentations from our work on secrets, cryptography, and identity.</p>
  </div>

  <div class="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-lg border border-zinc-800/70 bg-black/20">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.22)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute left-1/2 top-0 h-10 w-[42%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(236,213,63,0.075)_0%,rgba(236,213,63,0.03)_36%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.16)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>

    <div class="grid grid-cols-[4.25rem_1fr_auto] gap-4 border-b border-zinc-900 px-5 py-3 font-mono text-[0.64rem] font-normal uppercase tracking-[0.16em] text-zinc-600 md:grid-cols-[5.5rem_1fr_7rem_2rem] md:px-7">
      <span>File</span>
      <span>Title</span>
      <span class="hidden text-right md:block">Format</span>
      <span class="sr-only">Open</span>
    </div>

    <a href="https://dotenvx.com/whitepaper.pdf" target="_blank" rel="noopener noreferrer" class="group grid gap-4 border-b border-zinc-900 px-5 py-4 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[5.5rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="flex h-16 w-12 items-center justify-center overflow-hidden rounded border border-zinc-900 bg-black/70">
        <img src="https://dotenvx.com/assets/img/whitepaper-thumb.png" alt="" aria-hidden="true" class="h-full w-full object-cover opacity-75 transition duration-200 group-hover:opacity-95" loading="lazy">
      </span>
      <span class="text-sm font-normal leading-6 text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">Dotenvx: Reducing Secrets Risk with Cryptographic Separation</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">PDF</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>

    <a href="https://keysee.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" class="group grid gap-4 px-5 py-4 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[5.5rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="flex h-16 w-12 items-center justify-center overflow-hidden rounded border border-zinc-900 bg-black/70">
        <img src="https://keysee.io/whitepaper.png" alt="" aria-hidden="true" class="h-full w-full object-cover opacity-75 transition duration-200 group-hover:opacity-95" loading="lazy">
      </span>
      <span class="text-sm font-normal leading-6 text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">KEYSEE⎔: Deterministic Visual Identity for Public Keys</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">PDF</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>
  </div>
</section>

<section class="mx-auto w-full max-w-7xl px-5 pb-24 md:pb-32">
  <div class="relative mx-auto max-w-4xl">
    <h2 class="text-4xl font-normal tracking-[-0.02em] text-zinc-100 md:text-5xl">Talks</h2>
    <p class="mt-4 max-w-4xl text-base leading-7 text-zinc-500 md:text-lg">Conference talks and presentations from our work on application configuration.</p>
  </div>

  <div class="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-lg border border-zinc-800/70 bg-black/20">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.22)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute left-1/2 top-0 h-10 w-[42%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(236,213,63,0.075)_0%,rgba(236,213,63,0.03)_36%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.16)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>

    <div class="grid grid-cols-[4.25rem_1fr_auto] gap-4 border-b border-zinc-900 px-5 py-3 font-mono text-[0.64rem] font-normal uppercase tracking-[0.16em] text-zinc-600 md:grid-cols-[5.5rem_1fr_7rem_2rem] md:px-7">
      <span>Video</span>
      <span>Title</span>
      <span class="hidden text-right md:block">Venue</span>
      <span class="sr-only">Open</span>
    </div>

    <a href="https://www.youtube.com/watch?v=BCKGvKTk3cU&t=3205s" target="_blank" rel="noopener noreferrer" class="group grid gap-4 px-5 py-4 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[5.5rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="flex h-12 w-16 items-center justify-center overflow-hidden rounded border border-zinc-900 bg-black/70">
        <img src="/assets/img/laruby-thumb.png" alt="" aria-hidden="true" class="h-full w-full object-cover opacity-75 transition duration-200 group-hover:opacity-95" loading="lazy">
      </span>
      <span class="text-sm font-normal leading-6 text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">The Dark Ages of App Configuration</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">SF Ruby</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>
  </div>
</section>

<section class="mx-auto w-full max-w-7xl px-5 pb-24 md:pb-32">
  <div class="relative pt-16 md:pt-20">
    <div class="relative mx-auto max-w-4xl">
      <h2 class="text-4xl font-normal tracking-[-0.02em] text-zinc-100 md:text-5xl">Sponsorship</h2>
      <p class="mt-4 max-w-2xl text-base leading-7 text-zinc-500 md:text-lg">Our financial contributions to the community through direct sponsorship.</p>
    </div>

    <div class="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-lg border border-zinc-800/70 bg-black/20">
      <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.22)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute left-1/2 top-0 h-10 w-[42%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(236,213,63,0.075)_0%,rgba(236,213,63,0.03)_36%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.16)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>

      <div class="grid grid-cols-[4.25rem_1fr_auto] gap-4 border-b border-zinc-900 px-5 py-3 font-mono text-[0.64rem] font-normal uppercase tracking-[0.16em] text-zinc-600 md:grid-cols-[5.5rem_1fr_8rem_2rem] md:px-7">
        <span>Project</span>
        <span>Repository</span>
        <span class="hidden text-right md:block">Maintainer</span>
        <span class="sr-only">Open</span>
      </div>

      <a href="https://github.com/yao-pkg/pkg" target="_blank" rel="noopener noreferrer" class="group grid gap-4 border-b border-zinc-900 px-5 py-4 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[5.5rem_1fr_8rem_2rem] md:items-center md:px-7">
        <span class="flex h-12 w-12 items-center justify-center overflow-hidden rounded border border-zinc-900 bg-black/70">
          <img src="https://opengraph.githubassets.com/ac3f8d5cf843f6baa1eafd2ea05edaceecb4be06ecb2ec9cc7c56db954b66d29/yao-pkg/pkg" alt="" aria-hidden="true" class="h-full w-full object-cover opacity-75 transition duration-200 group-hover:opacity-95" loading="lazy">
        </span>
        <span class="font-mono text-xs font-normal text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">yao-pkg/pkg</span>
        <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">@robertsLando</span>
        <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
      </a>

      <a href="https://github.com/ecies/js" target="_blank" rel="noopener noreferrer" class="group grid gap-4 border-b border-zinc-900 px-5 py-4 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[5.5rem_1fr_8rem_2rem] md:items-center md:px-7">
        <span class="flex h-12 w-12 items-center justify-center overflow-hidden rounded border border-zinc-900 bg-black/70">
          <img src="https://opengraph.githubassets.com/f730c56355f8b9ff50160668f1de9cbfe60d26642abe0430ddd86442f25603db/ecies/js" alt="" aria-hidden="true" class="h-full w-full object-cover opacity-75 transition duration-200 group-hover:opacity-95" loading="lazy">
        </span>
        <span class="font-mono text-xs font-normal text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">ecies/js</span>
        <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">@kigawas</span>
        <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
      </a>

      <a href="https://github.com/abetomo" target="_blank" rel="noopener noreferrer" class="group grid gap-4 px-5 py-4 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[5.5rem_1fr_8rem_2rem] md:items-center md:px-7">
        <span class="flex h-12 w-12 items-center justify-center overflow-hidden rounded border border-zinc-900 bg-black/70">
          <img src="https://avatars.githubusercontent.com/u/846454?v=4?s=400" alt="" aria-hidden="true" class="h-full w-full object-cover opacity-75 transition duration-200 group-hover:opacity-95" loading="lazy">
        </span>
        <span class="font-mono text-xs font-normal text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">abetomo</span>
        <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">@abetomo</span>
        <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
      </a>
    </div>
  </div>
</section>
