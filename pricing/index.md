---
title: "Pricing"
---

<section class="max-w-5xl mx-auto mt-20 flex flex-col px-5 mb-20">
  <h1 class="my-5 text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-zinc-950 dark:text-[#ECD53F]">Pricing</h1>
  <p class="mb-10 text-center leading-relaxed text-lg md:text-2xl"><span class="italic">Two simple plans</span>–one free and one paid. No credit card required.</p>

  <div class="flex flex-col lg:flex-row items-center gap-y-4">
    <!-- pro -->
    <div class="flex-1 flex flex-col rounded-lg w-full border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 shadow-md lg:order-2">
      <div class="p-6 flex flex-col gap-3">
        <div class="flex gap-1.5">
          <h2 class="font-bold tracking-tight leading-none text-zinc-950 dark:text-zinc-50 text-2xl py-1">dotenvx <span class="hidden">pro</span></h2>
          <div class="inline-block bg-[#ECD53F] text-black font-bold px-2.5 py-1 text-lg italic rounded-sm">PRO</div>
        </div>
        <p class="text-xl font-light">For small and medium businesses. All-inclusive fixed pricing. 🏆</p>
        <ul class="ml-6 list-disc list-outside text-zinc-700 dark:text-zinc-300">
          <li class="font-bold">Extended 75-day free trial</li>
          <li class=""><span class="font-bold">Fixed price</span> no per-user charges</li>
          <li class=""><span class="font-bold">Unlimited secrets</span></li>
          <li class=""><span class="font-bold">Unlimited users</span></li>
          <li class=""><span class="font-bold">Fully managed private keys</span> securely synced with zero-knowledge encryption</li>
          <li class=""><span class="font-bold">Team permissions</span> to control access</li>
          <li class=""><span class="font-bold">Includes</span> syncing to Chrome Extension</li>
          <li class=""><span class="font-bold">Includes</span> syncing to VS Code Extension</li>
          <li>24/7/365 customer support</li>
          <li class=""><span class="font-bold">Personal onboarding</span> with our founder</li>
          <li class="">Billed in one lump sum annually for simplified accounting. Or $349/month if you prefer to pay monthly.</li>
        </ul>
      </div>
      <hr class="m-0 border-0 border-t border-zinc-200 dark:border-zinc-800 m-0 p-0" />
      <div class="p-6">
        <h4 class="font-bold tracking-tight leading-none text-zinc-950 dark:text-zinc-50 text-2xl">$299/month billed annually, all-inclusive</h4>
        <p class="mt-3 mb-0.5 font-bold">No per-user charges. Your whole organization for one fixed price.</p>
        <p class="mb-4">If you prefer to pay month-to-month, it's $349/month.</p>
        <a href="https://pro.dotenvx.com/signup" class="btn-success w-auto flex-none inline-block">Try it free for 75 days</a>
      </div>
    </div>
    <!-- OSS -->
    <div class="flex-2 flex flex-col rounded-lg w-full lg:w-80 border border-zinc-200 dark:border-zinc-800 lg:border-r-0 lg:rounded-r-none dark:bg-zinc-900">
      <div class="p-6 flex flex-col gap-3">
        <div class="flex gap-1.5">
          <h2 class="font-bold tracking-tight leading-none text-zinc-950 dark:text-zinc-50 text-2xl py-1">dotenvx <span class="hidden">OSS</span></h2>
          <div class="inline-block bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white font-bold px-2.5 py-1 text-lg italic rounded-sm">OSS</div>
        </div>
        <p class="text-xl font-light">Ideal for solo developers and some small teams.</p>
        <ul class="ml-6 list-disc list-outside text-zinc-700 dark:text-zinc-300">
          <li>Open source software</li>
          <li>Standalone, no cloud needed</li>
          <li>Upgrade later, for fully managed private keys and more</li>
        </ul>
      </div>
      <hr class="m-0 border-0 border-t border-zinc-200 m-0 p-0" />
      <div class="p-6">
        <h4 class="font-bold tracking-tight leading-none text-zinc-950 dark:text-zinc-50 text-2xl">Open source {% include logos/github.html class="ml-0.5 h-6 w-6 mb-1 inline-block" %}</h4>
        <p class="mt-3 mb-4">You manage the private keys.</p>
        <a class="btn-secondary w-auto flex-none" href="https://github.com/dotenvx/dotenvx" target="_blank">Get started ↗</a>
      </div>
    </div>
  </div>
	<div class="mt-20 max-w-3xl mx-auto w-full overflow-hidden border border-zinc-200 dark:border-zinc-800 rounded-lg">
		{% include v1/components/feature-table.html %}
	</div>
</section>
