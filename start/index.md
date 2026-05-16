---
title: "Start"
description: "Choose how to get started with Dotenvx: open source CLI or managed Ops."
layout: blank
---

<main class="min-h-screen bg-black text-zinc-100">
  <div class="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-6 md:py-8">
    <header class="flex items-center justify-between">
      <a href="/" class="inline-flex items-center no-underline hover:no-underline" aria-label="Dotenvx home">
        <img src="/assets/img/logo-dotenvx-dark.svg" alt="Dotenvx" class="h-4">
      </a>
      <a href="/" class="text-sm font-semibold !text-zinc-500 no-underline transition-colors duration-200 hover:!text-zinc-100 hover:no-underline">Back</a>
    </header>

    <section class="flex flex-1 items-center justify-center py-16 md:py-24">
      <div class="w-full max-w-xl">
        <h1 class="sr-only">Start with Dotenvx</h1>
        <p class="mb-8 text-center text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600">Choose your path</p>

        <div class="grid grid-cols-[1fr_auto_1fr] py-12">
          <a href="https://github.com/dotenvx/dotenvx" target="_blank" rel="noopener noreferrer" aria-label="Start with Open Source on GitHub" class="group flex min-h-72 min-w-0 flex-col justify-center p-5 no-underline transition-colors duration-200 hover:bg-zinc-900/55 hover:no-underline sm:p-7">
            <span class="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-zinc-500 sm:text-xs">
              {% include logos/github.html class="h-4 w-4" %}
              <span>No account</span>
            </span>
            <span class="mt-5 text-base font-semibold leading-tight tracking-tight !text-white sm:text-lg">Open Source</span>
            <span class="mt-2 max-w-[12rem] text-xs font-normal leading-5 !text-zinc-500 sm:text-sm sm:leading-6">Secrets CLI</span>
            <span class="mt-7 inline-flex min-h-[42px] w-full items-center gap-2 text-sm font-semibold !text-zinc-100 no-underline group-hover:!text-white">
              <span>GitHub</span>
              <span class="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true">›</span>
            </span>
            <span class="mt-3 text-xs font-medium text-transparent" aria-hidden="true">Protect secrets</span>
          </a>

          <div class="w-px bg-zinc-800" aria-hidden="true"></div>

          <a href="/signup" aria-label="Start with Ops" class="group flex min-h-72 min-w-0 flex-col justify-center p-5 no-underline transition-colors duration-200 hover:bg-zinc-900/55 hover:no-underline sm:p-7">
            <span class="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-zinc-500 sm:text-xs">
              <svg class="h-4 w-4 text-[#ecd53f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75 19.25 7v5.35c0 4.25-2.87 6.92-7.25 7.9-4.38-.98-7.25-3.65-7.25-7.9V7L12 3.75Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="m9.25 12.15 1.85 1.85 3.9-4" />
              </svg>
              <span>Hardened</span>
            </span>
            <span class="mt-5 text-base font-semibold leading-tight tracking-tight !text-white sm:text-lg">Dotenvx Ops</span>
            <span class="mt-2 max-w-[12rem] text-xs font-normal leading-5 !text-zinc-500 sm:text-sm sm:leading-6">Secrets CLI + Armor ⛨</span>
            <span class="mt-7 inline-flex w-full items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm font-extrabold tracking-tight !text-white no-underline transition-all duration-200 hover:bg-zinc-100 hover:!text-zinc-950 hover:shadow-[0_0_24px_rgba(236,213,63,0.18)]">Get Started</span>
            <span class="mt-3 text-center text-xs font-medium !text-zinc-600">For hardened keys</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</main>
