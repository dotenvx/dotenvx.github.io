---
title: "Dotenvx Ops"
logo: ops
image: "/assets/img/og-image-ops.png"
---

<section class="w-full max-w-2xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-8">
  <h1 class="font-extrabold text-3xl sm:text-5xl text-zinc-950 dark:text-zinc-50 text-center">Commercial tooling for .env files – Dotenvx Ops</h1>
  <p class="text-xl text-center">Everything around .env, we're solving it.</p>
  <div class="flex flex-row gap-4 justify-center my-6">
    <a class="btn-primary" href="/docs/ops/quickstart">Quickstart &rarr;</a>
    <a class="btn" href="/docs/ops">Documentation</a>
  </div>

  <div class="flex flex-col gap-2">
    <h2 class="font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">Ops Sync</h2>
    <p>Keep your .env files and secrets consistent everywhere — across teammates, servers, and CI/CD. No merges, no copy-paste, no plaintext. Just secure, automatic sync for your entire stack.</p>
  </div>

  <div class="flex flex-col gap-2">
    <h2 class="font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">Ops DB</h2>
    <p>All your .env files and secrets, centralized. Ops DB captures every .env across your repos, machines, and services into a single source of truth. Full history, complete visibility, every version of every secret, forever.</p>
  </div>

  <div class="flex flex-col gap-2">
    <h2 class="font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">Ops Radar</h2>
    <p>See how your environment variables used across your stack and infrastructure. Detect drift, misconfigurations, and unused variables before they cause issues. It's runtime observability for secrets.</p>
  </div>

  <div class="flex flex-col gap-2">
    <h2 class="font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">Ops Automation</h2>
    <p>Let your .env files take care of themselves. Automate secret rotation, renewal, expiry, and integration to third party platforms like Vercel, Heroku, AWS, and more.</p>
  </div>

  <div class="flex flex-col gap-2">
    <h2 class="font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">Ops Compliance</h2>
    <p>Prove your .env secrets are under control. Every change, sync, and rotation is logged for audit and compliance. SOC 2, ISO, or just peace of mind — built right in.</p>
  </div>

  <div class="flex flex-col gap-2">
    <p class="font-bold">Your teammate's .env always out of date?</p>
    <p>Ops keeps your environment variables in sync across teammates, servers, and CI machines with secure, automated updates and zero manual hassle.</p>
  </div>
  <div class="flex flex-col gap-2">
    <p class="font-bold">Secrets still sitting in plaintext?</p>
    <p>Ops encrypts every .env file at rest and in transit. You keep your workflow — just without the exposure.</p>
  </div>
  <div class="flex flex-col gap-2">
    <p class="font-bold">No record of who changed what?</p>
    <p>Ops versions and diffs every update. You get full history, authorship, and timestamps across all environments.</p>
  </div>
  <div class="flex flex-col gap-2">
    <p class="font-bold">Rotating secrets still risky?</p>
    <p>Ops handles re-encryption and key rotation seamlessly — no downtime, no broken builds.</p>
  </div>
  <div class="flex flex-col gap-2">
    <p class="font-bold">Don't know which keys are actually in use?</p>
    <p>Ops Radar feature observes real runtime variable usage across projects, helping you prune dead keys and detect leaks early.</p>
  </div>
  <div class="flex flex-col gap-2">
    <p class="font-bold">Need a record of every secret change?</p>
    <p>Ops DB tracks every secret modification. See who changed what, where, and when.</p>
  </div>
  <div class="flex flex-col gap-2">
    <p class="font-bold">Multiple repos, multiple .envs, total chaos?</p>
    <p>Ops replaces that with a secure sync channel for your team — no copy-paste, no plaintext ever.</p>
  </div>
  <div class="flex flex-col gap-2">
    <p class="font-bold">Need to prove access control and audit history?</p>
    <p>Ops enforces permissions and logs every key event automatically, so compliance isn't a separate system — it's built in.</p>
  </div>







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
  <img src="/ops/ui.png" class="rounded-md border border-zinc-200 dark:border-zinc-800"/>
</section>

<section class="w-full max-w-2xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-8">
  <h2 class="font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">Changelog</h2>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-10-19</h3>
    <p>Set access controls per project per team member.</p>
  </div>

  <div class="flex gap-2 flex-col">
    <h3 class="font-bold">2025-10-14</h3>
    <p>DB is populated with all synced and observed keys now.</p>
    <p>DB smartly links up different keypairs to te project > file > version they belonged to.</p>
    <p>Foundational features – Sync, Observe, and Audit – are completed. Price will increase soon.</p>
  </div>

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
