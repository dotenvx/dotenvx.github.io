---
title: "Start"
description: "Choose how to get started with Dotenvx: open source CLI or managed Ops."
layout: blank
---

<style>
  .start-path:hover {
    background: rgba(24, 24, 27, 0.52);
  }
</style>

<main class="relative min-h-screen overflow-hidden bg-black text-zinc-100">
  <div class="pointer-events-none absolute inset-x-0 bottom-0 h-[42vh] bg-[radial-gradient(ellipse_at_50%_100%,rgba(236,213,63,0.16)_0%,rgba(104,150,202,0.08)_34%,rgba(0,0,0,0)_72%)] blur-[2px]" aria-hidden="true"></div>
  <div class="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-6 md:py-8">
    <header class="flex items-center justify-between">
      <a href="/" class="inline-flex items-center no-underline hover:no-underline" aria-label="Dotenvx home">
        <img src="/assets/img/logo-dotenvx-dark.svg" alt="Dotenvx" class="h-4">
      </a>
      <a href="/" class="text-sm font-semibold !text-zinc-500 no-underline transition-colors duration-200 hover:!text-zinc-100 hover:no-underline">Back</a>
    </header>

    <section class="flex flex-1 items-center justify-center py-16 md:py-24">
      <div class="w-full max-w-lg">
        <h1 class="sr-only">Start with Dotenvx</h1>
        <p class="mb-8 text-center text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600">Choose your path</p>

        <div class="grid grid-cols-[1fr_auto_1fr] py-12">
          <a href="https://github.com/dotenvx/dotenvx" target="_blank" rel="noopener noreferrer" aria-label="Start with Open Source on GitHub" class="start-path group flex min-h-72 min-w-0 flex-col justify-center p-3 no-underline transition-colors duration-200 hover:no-underline sm:p-5">
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

          <a href="/signup" aria-label="Start with Ops" class="start-path group flex min-h-72 min-w-0 flex-col justify-center p-3 no-underline transition-colors duration-200 hover:no-underline sm:p-5">
            <span class="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-zinc-500 sm:text-xs">
              <svg class="h-4 w-4 text-[#ecd53f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75 19.25 7v5.35c0 4.25-2.87 6.92-7.25 7.9-4.38-.98-7.25-3.65-7.25-7.9V7L12 3.75Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="m9.25 12.15 1.85 1.85 3.9-4" />
              </svg>
              <span>Hardened</span>
            </span>
            <span class="mt-5 text-base font-semibold leading-tight tracking-tight !text-white sm:text-lg">Dotenvx Ops</span>
            <span class="mt-2 max-w-[12rem] text-xs font-normal leading-5 !text-zinc-500 sm:text-sm sm:leading-6">Secrets CLI + Armor ⛨</span>
            <span class="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm font-extrabold tracking-tight !text-white no-underline transition-all duration-200 hover:bg-zinc-100 hover:!text-zinc-950 hover:shadow-[0_0_24px_rgba(236,213,63,0.18)]">
              <span>Get Started</span>
              <span class="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true">›</span>
            </span>
            <span class="mt-3 text-center text-xs font-medium !text-zinc-600">For hardened keys</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</main>
