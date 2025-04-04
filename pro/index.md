---
title: Pro
---

<section class="w-full max-w-5xl mx-auto px-6 my-20 md:my-40">
  <div class="flex gap-3 h-full flex-col items-center justify-center">
    <div class="flex gap-1.5 mt-5 text-center leading-relaxed text-lg md:text-2xl">
      <h1 class="font-bold tracking-tight leading-none text-zinc-950 dark:text-zinc-50 text-2xl py-1">dotenvx <span class="hidden">pro</span></h1>
      <div class="inline-block bg-[#ECD53F] text-black font-bold px-2.5 py-1 text-lg italic rounded-sm">PRO</div>
    </div>
    <h1 class="my-5 text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-zinc-950 dark:text-[#ECD53F]">Secrets Management–Done Right.</h1>
    <div class="text-center">
      <a href="/docs/pro" class="flex flex-col gap-2">
        <span class="link-primary font-semibold underline">Read the docs</span>
      </a>
    </div>
  </div>
</section>

<section class="w-full max-w-5xl mx-auto px-6 my-20 md:my-32">
  <div class="flex gap-10 h-full flex-col md:flex-row items-center justify-center">
    <div class="flex-1">
      <h2 class="my-5 text-center md:text-start text-5xl lg:text-6xl font-bold tracking-tight leading-none text-zinc-950 dark:text-zinc-50">Encrypt .env</h2>
      <p class="text-center md:text-start leading-relaxed text-md md:text-lg">Encrypt your <span class="btick">.env</span> file so it can be safely committed to your repo.
Secrets become part of your code — versioned, synced, and shareable.</p>
    </div>
    <div class="flex-1 min-w-0 w-full">
      {% include v1/components/terminal-dotenvx-encrypt.html %}
    </div>
  </div>
</section>

<section class="w-full max-w-5xl mx-auto px-6 my-20 md:my-32">
  <div class="flex gap-10 h-full flex-col md:flex-row items-center justify-center">
    <div class="flex-1">
      <h2 class="my-5 text-center md:text-start text-5xl lg:text-6xl font-bold tracking-tight leading-none text-zinc-950 dark:text-zinc-50">Cloak your keys</h2>
      <p class="text-center md:text-start leading-relaxed text-md md:text-lg">Cloak private keys with a single command. They vanish from <span class="btick">.env.keys</span> — but stay accessible when you need them.</p>
    </div>
    <div class="flex-1 min-w-0 w-full">
      {% include v1/components/terminal-dotenvx-pro-cloak.html %}
    </div>
  </div>
</section>

<section class="w-full max-w-5xl mx-auto px-6 my-20 md:my-32">
  <h2 class="my-5 text-center md:text-start text-5xl lg:text-6xl font-bold tracking-tight leading-none text-zinc-950 dark:text-zinc-50">Treat secrets like code</h2>
  <p class="mx-auto mt-3 text-center md:text-start leading-relaxed text-md md:text-lg">With encryption and cloaking in place, secrets move through git. Unlock familiar workflows like PR review, approvals, branching, and deploys — now for secrets too.</p>

  <div class="mt-6 text-center">
    [depict secrets as code]
  </div>

  <!--
  <div class="mt-8 flex flex-col gap-3 text-center">
    <div class="italic">
      "Our company was exposed to the CircleCI breach. Encryption would have protected us. We're using it now."
    </div>
    <div class="flex justify-center items-center gap-2">
      <div>
        <img src="/assets/img/remy-logic.png" class="rounded-full h-10 w-10"/>
      </div>

      <div>
        Remy Logic <span class="text-zinc-400 dark:text-zinc-600">– CTO</span>
      </div>
    </div>
  </div>
  -->
</section>

<section class="w-full max-w-5xl mx-auto px-6 mt-20 md:mt-40">
  <h2 class="my-5 text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-zinc-950 dark:text-[#ECD53F]">Team Sync</h2>
  <p class="mx-auto mt-3 max-w-3xl text-center text-md md:text-lg text-zinc-600 leading-2 mb-6">Stay in sync with a single command.</p>
</section>
