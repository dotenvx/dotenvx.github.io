---
title: "Radar"
logo: radar
---

<section class="w-full max-w-2xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-8">
  <h1 class="font-extrabold text-3xl sm:text-4xl text-zinc-950 dark:text-zinc-50 text-center">Observe, version, and back up your environment variables at runtime.</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <p class="text-left">
      <strong>Observability.</strong>
      Radar watches every app launch, process, or container, capturing the exact environment variables injected at runtime. Total visibility across dev, staging, and production.
    </p>
    <p class="text-left">
      <strong>Versioning.</strong>
      Radar tracks every change to your envs across time. View diffs, roll back instantly, and understand who changed what, where, and when.
    </p>
    <p class="text-left">
      <strong>Backups.</strong>
      Every environment your app runs with is automatically captured, encrypted, and stored. Radar makes sure nothing gets lost.
    </p>
    <p class="text-left">
      <strong>Sync.</strong>
      Keep your environment variables in sync across teammates, servers, and CI machines with secure, automated updates and zero manual hassle.
    </p>
  </div>
  <div class="flex flex-col gap-4">
    <p class="text-center italic">Radar is an optional commercial extension for Dotenv/x.</p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a class="btn-success" href="https://buy.stripe.com/7sY4gzdgFddq3ycape7IY02">Get Early Access – $19/year</a>
      <a class="btn link-radar" href="/docs/radar">Documentation</a>
    </div>
  </div>
  <img src="/radar/ui.png" class="rounded-md border border-zinc-200 dark:border-zinc-800"/>
</section>

<section class="w-full max-w-2xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-8">
  <h2 class="font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">Changelog</h2>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-08-23</h3>
    <p>Added organizations – to make way for teams.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-08-18</h3>
    <p>Added `dotenvx-radar sync` command.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-08-16</h3>
    <p>Laid foundations for sync system.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-08-14</h3>
    <p>Simplified observations system.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-08-13</h3>
    <p>Added basic search to observations, keys, and projects.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-08-12</h3>
    <p>Changed UI to three sections - Radar, DB, and Sync.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-08-01</h3>
    <p>Added administration system.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-07-27</h3>
    <p>Added Pay page.</p>
    <p>Wired Stripe webhook and callbacks up to Pay page and supporting endpoints.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-07-23</h3>
    <p>Added backups section and download.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-07-22</h3>
    <p>Improved UI display of key/values.</p>
    <p>Added logic to handle observations from different git branches.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-07-21</h3>
    <p>Moved observations system to a schedule.</p>
    <p>Added billing section to settings page.</p>
    <p>Added system for locking out unpaid users.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-07-19</h3>
    <p>Added `dotenvx-radar status` command.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-07-16</h3>
    <p>Added observations system for idempotentently generating .env files, key/values, and projects from observation data.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-07-15</h3>
    <p>Added `dotenvx-radar status` command.</p>
    <p>Added `dotenvx-radar settings` command.</p>
    <p>Added observation of git and systeminfo to `dotenvx-radar observe` command.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-07-14</h3>
    <p>Added `dotenvx-radar logout` command.</p>
    <p>Added bearer token support to `dotenvx-radar observe` command.</p>
    <p>Added `dotenvx-radar login` command.</p>
    <p>Added oauth token system to API and UI.</p>
    <p>Added API logout system.</p>
    <p>Added observations UI.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-07-11</h3>
    <p>Added API observe system.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-07-09</h3>
    <p>Added `dotenvx-radar observe` command.</p>
    <p>Added `observe()` function.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-07-09</h3>
    <p>Added `dotenvx-radar observe` command.</p>
    <p>Added `observe()` function.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-07-08</h3>
    <p>Added authentication system to API and UI.</p>
    <p>Added error  monitoring to API and UI.</p>
    <p>Stood up production hosting infra.</p>
    <p>Added BI tool.</p>
    <p>Added background queuing system.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-07-01</h3>
    <p>Added `install.sh` script.</p>
    <p>Added hosting for `install.sh` script.</p>
    <p>Added automated publishing for `install.sh` at <a href="https://dotenvx.sh/radar">dotenvx.sh/radar</a>.</p>
    <p>Added automated publishing of builds for darwin-amd64, darwin-x86_64, darwin-arm64, linux-amd64, linux-x86_64, linux-arm64, linux-aarch64, linux-armv7l, windows-amd64, and windows-x86_64 on tagged releases.</p>
    <p>First lines of Radar code 📡.</p>
  </div>
</section>
