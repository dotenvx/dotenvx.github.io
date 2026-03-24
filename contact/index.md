---
title: "Contact"
---

<section class="w-full max-w-7xl mx-auto px-6 mt-16 md:mt-24 mb-24 md:mb-32">
  <div class="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-14 md:gap-20">
    <div>
      <h1 class="hero-title-shaded font-canela font-normal tracking-[-0.018em] text-[3.2rem] md:text-[4.8rem] leading-[1.02]">Get in touch</h1>

      <form class="mt-10 space-y-7" action="mailto:support@dotenvx.com" method="post" enctype="text/plain">
        <div>
          <label for="contact-email" class="block text-zinc-400 text-sm md:text-base mb-2">Email address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            class="w-full rounded-2xl border border-zinc-800 bg-zinc-900/70 px-5 py-3.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600"
          />
        </div>

        <div>
          <label for="contact-message" class="block text-zinc-400 text-sm md:text-base mb-2">How can we help?</label>
          <textarea
            id="contact-message"
            name="message"
            rows="7"
            required
            placeholder="I'd like to know how dotenvx can help me with..."
            class="w-full rounded-2xl border border-zinc-800 bg-zinc-900/70 px-5 py-4 text-zinc-100 placeholder-zinc-500 resize-y focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600"
          ></textarea>
        </div>

        <div class="pt-1">
          <button type="submit" class="btn-primary inline-flex items-center gap-1.5">
            <span>Submit</span>
            <svg fill="none" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>

    <aside class="lg:pt-28 space-y-11">
      <div>
        <p class="m-0 text-zinc-500 text-sm md:text-base">Get help</p>
        <a href="mailto:support@dotenvx.com" class="mt-1.5 inline-block text-zinc-100 hover:text-zinc-300 no-underline hover:no-underline transition-colors duration-200 text-[1.9rem] leading-[1.1] font-medium tracking-tight">support@dotenvx.com</a>
      </div>

      <div>
        <p class="m-0 text-zinc-500 text-sm md:text-base">Work at Dotenvx</p>
        <a href="mailto:mot@dotenvx.com" class="mt-1.5 inline-block text-zinc-100 hover:text-zinc-300 no-underline hover:no-underline transition-colors duration-200 text-[1.9rem] leading-[1.1] font-medium tracking-tight">mot@dotenvx.com</a>
      </div>

      <div>
        <p class="m-0 text-zinc-500 text-sm md:text-base">Report security concerns</p>
        <a href="mailto:security@dotenvx.com" class="mt-1.5 inline-block text-zinc-100 hover:text-zinc-300 no-underline hover:no-underline transition-colors duration-200 text-[1.9rem] leading-[1.1] font-medium tracking-tight">security@dotenvx.com</a>
      </div>
    </aside>
  </div>
</section>
