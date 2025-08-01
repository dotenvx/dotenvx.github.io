---
title: "Radar"
logo: radar
---

{% include v1/radar-hero.html %}

<section class="w-full max-w-4xl lg:max-w-5xl mx-auto px-6 mt-12 md:mt-20">
  <div class="flex gap-3 h-full flex-col items-center justify-center">
    <h2 class="mt-5 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">Radar in your inbox.</h2>
    <p class="md:text-xl font-medium text-center mb-5">Stay in the loop, we'll make it worth your time.</p>

    <form
      action="https://radar.dotenvx.com/subscribe"
      method="POST"
      class="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        onfocus="umami.track('Focus email')"
        class="w-full sm:flex-1 px-4 py-3 text-sm rounded-md border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400"
      />
      <button
        type="submit"
        class="w-full sm:w-auto px-5 py-3 text-sm font-semibold bg-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-50 text-black rounded-md transition"
      >
        Subscribe
      </button>
    </form>
  </div>
</section>
