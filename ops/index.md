---
title: "Dotenvx Ops"
logo: ops
image: "/assets/img/og-image-ops.png"
---

<section class="w-full max-w-2xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-8">
  <h1 class="font-extrabold text-3xl sm:text-5xl text-zinc-950 dark:text-zinc-50 text-center">Commercial tooling for .env files – Dotenvx Ops</h1>
  <p class="text-xl text-center">Built to fix the real problems developers hit every day.</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <p class="text-left">
      <strong>Radar.</strong>
      Ops' Radar feature watches every app launch, process, or container, capturing the exact environment variables injected at runtime. Total visibility across dev, staging, and production.
    </p>
    <p class="text-left">
      <strong>DB.</strong>
      Ops DB tracks every change to your envs across time. View diffs, roll back instantly, and understand who changed what, where, and when.
    </p>
    <p class="text-left">
      <strong>Sync.</strong>
      Keep your environment variables in sync across teammates, servers, and CI machines with secure, automated updates and zero manual hassle.
    </p>
  </div>
  <div class="flex flex-col gap-4">
    <p class="text-center italic">Dotenvx Ops is commercial tooling for dotenvx.</p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a class="btn-primary" href="https://buy.stripe.com/cNi4gz90p6P22u868Y7IY03">Get Early Access – $49/year</a>
      <a class="btn link-ops" href="/docs/ops">Documentation</a>
    </div>
  </div>
  <img src="/ops/ui.png" class="rounded-md border border-zinc-200 dark:border-zinc-800"/>
</section>

<section class="w-full max-w-2xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-8">
  <h2 class="font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">Changelog</h2>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-10-07</h3>
    <p>Teams can sync project .env* files.</p>
    <p>Team can force sync with `dotenvx-ops sync --force` when conflicts occur.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-09-29</h3>
    <p>Users can request an invitation to an existing organization.</p>
    <p>Change a user's role.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-09-26</h3>
    <p>List any invitations under user settings.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-09-25</h3>
    <p>Invite members to your team.</p>
    <p>Remove members from your team.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-09-22</h3>
    <p>Added ability to create organizational accounts.</p>
    <p>Early access for org accounts is $490/year.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-09-18</h3>
    <p>Rename Dotenvx Radar to Dotenvx Ops.</p>
    <p>Radar becomes a feature of Dotenvx Ops.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-09-17</h3>
    <p>Introduce organizational accounts.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-08-25</h3>
    <p>Smart reuse of existing tokens by device.</p>
    <p>Added ability to delete token.</p>
    <p>Create env files when syncing.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-08-23</h3>
    <p>Added organizations – to make way for teams.</p>
    <p>Moved projects to organizational ownership schema.</p>
    <p>Added ability to delete account.</p>
    <p>Added list of personal oauth tokens to settings page.</p>
    <p>Mark device during cli login handshake.</p>
    <p>Connected devices to users in schema.</p>
    <p>Connected devices to oauth requests in schema.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-08-18</h3>
    <p>Added `dotenvx-ops sync` command.</p>
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
    <p>Added `dotenvx-ops status` command.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-07-16</h3>
    <p>Added observations system for idempotentently generating .env files, key/values, and projects from observation data.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-07-15</h3>
    <p>Added `dotenvx-ops status` command.</p>
    <p>Added `dotenvx-ops settings` command.</p>
    <p>Added observation of git and systeminfo to `dotenvx-ops observe` command.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-07-14</h3>
    <p>Added `dotenvx-ops logout` command.</p>
    <p>Added bearer token support to `dotenvx-ops observe` command.</p>
    <p>Added `dotenvx-ops login` command.</p>
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
    <p>Added `dotenvx-ops observe` command.</p>
    <p>Added `observe()` function.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-07-09</h3>
    <p>Added `dotenvx-ops observe` command.</p>
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
    <p>Added automated publishing for `install.sh` at <a href="https://dotenvx.sh/ops">dotenvx.sh/ops</a>.</p>
    <p>Added automated publishing of builds for darwin-amd64, darwin-x86_64, darwin-arm64, linux-amd64, linux-x86_64, linux-arm64, linux-aarch64, linux-armv7l, windows-amd64, and windows-x86_64 on tagged releases.</p>
    <p>First lines of Ops code 🏰.</p>
  </div>
</section>

<!--
  future marketing-related text/content:

  handle key exchange and storage https://www.reddit.com/r/javascript/comments/1ng10iq/i_built_envie_a_secrets_manager_and_dropin/
  prevent Claude from reading secrets and credentials https://www.reddit.com/r/ClaudeAI/comments/1nfvh46/i_got_tired_of_claude_code_reading_secrets_and/
  KMS
  Sync
  Backup
  Rotation
-->
