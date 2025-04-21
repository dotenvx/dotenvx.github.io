---
title: Features
---

<section class="w-full max-w-5xl mx-auto px-6 mt-10">
  <h1 class="text-center font-bold tracking-tight leading-none text-zinc-950 dark:text-zinc-50 text-2xl py-1">Features</h1>
  <h2 class="my-5 text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-zinc-950 dark:text-[#ECD53F]">Everything to make .env files great</h2>
  <p class="mx-auto mt-3 max-w-3xl text-center text-md md:text-lg text-zinc-600 leading-2 mb-6"><span class="btick">.env</span> files are simple, but they don't scale. Dotenvx adds encryption, syncing, and zero-knowledge key sharing to make <span class="btick">.env</span> files secure and team-friendly. Everything you need to stop copy-pasting secrets and start treating them like code.</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
    {% include v1/components/feature-box2.html feature="Run Anywhere" description="Cross-platform. It works everywhere." mp4="https://github.com/user-attachments/assets/a1604f27-c08d-478a-b7dd-86ece1e157ef" href="/features/run-anywhere" %}
    {% include v1/components/feature-box2.html feature="Multiple Environments" description="Switch environments easily with .env, .env.production, and more." mp4="https://github.com/user-attachments/assets/6fadc884-371e-4aec-a14c-d5e7bce2a48a" href="/features/multiple-environments" %}
    {% include v1/components/feature-box2.html feature="Encryption" description="Encrypt your .env files using asymmetric keys." png="https://github.com/user-attachments/assets/634ce9a4-48f4-48db-829e-b792bfa8c930" href="/features/encryption" %}
    {% include v1/components/feature-box2.html feature="Multiple Files" description="Compose multiple .env files flexibly." png="https://github.com/user-attachments/assets/cd68a192-9877-4f37-90e5-bdddaf59cc88" href="/features/multiple-files" %}
    {% include v1/components/feature-box2.html feature="Variable Expansion" description="Reference and expand variables already on your machine for use in your .env file." href="/features/variable-expansion" txt="${EXPAND}" %}
    {% include v1/components/feature-box2.html feature="Command Substitution" description="Add the output of a command to one of your variables in your .env file." href="/features/command-substitution" txt="$(COMMAND)" %}
    {% include v1/components/feature-box2.html feature="Cloaked Keys" description="Hide private keys with zero-knowledge encryption. Share access, not the key." href="/features/cloaked-keys" txt="dotenvx pro cloak" pro="true" %}
    {% include v1/components/feature-box2.html feature="Pull Requests" description="Review and approve .env changes through GitHub pull requests." href="/features/pull-requests" txt="Pull Requests" pro="true" %}
  </div>
</section>
{% include v1/mods.html %}
