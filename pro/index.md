---
title: "Pro – Secrets manager for env files"
---

{% include v1/pro-hero.html %}

<section class="w-full max-w-5xl mx-auto px-6 my-20 md:my-32">
  <div class="flex gap-10 h-full flex-col md:flex-row items-center justify-center">
    <div class="flex-1">
      <!--<h2 class="my-5 text-center md:text-start text-5xl lg:text-6xl font-bold tracking-tight leading-none text-zinc-950 dark:text-zinc-50">Encrypt your env files</h2>-->
      <h2 class="my-5 text-center md:text-start text-5xl lg:text-6xl font-bold tracking-tight leading-none text-zinc-950 dark:text-zinc-50">Encrypt them</h2>
      <p class="text-center md:text-start leading-relaxed text-md md:text-lg">Encrypt <span class="btick">.env</span> files to be safely committed to your repo. Secrets become part of your code — versioned, synced, and shareable.</p>
    </div>
    <div class="flex-1 min-w-0 w-full">
      {% include v1/components/terminal-dotenvx-encrypt.html %}
    </div>
  </div>
</section>

<section class="w-full max-w-5xl mx-auto px-6 my-20 md:my-32">
  <div class="flex gap-10 h-full flex-col md:flex-row items-center justify-center">
    <div class="flex-1">
      <!--<h2 class="my-5 text-center md:text-start text-5xl lg:text-6xl font-bold tracking-tight leading-none text-zinc-950 dark:text-zinc-50">Cloak their private keys</h2>-->
      <h2 class="my-5 text-center md:text-start text-5xl lg:text-6xl font-bold tracking-tight leading-none text-zinc-950 dark:text-zinc-50">Cloak them</h2>
      <p class="text-center md:text-start leading-relaxed text-md md:text-lg">Cloak private keys with a single command. They vanish from <span class="btick">.env.keys</span> — but stay accessible when you need them.</p>
    </div>
    <div class="flex-1 min-w-0 w-full">
      {% include v1/components/terminal-dotenvx-pro-cloak.html %}
    </div>
  </div>
</section>

<section class="w-full max-w-5xl mx-auto px-6 my-20 md:my-32">
  <div class="flex gap-10 h-full flex-col md:flex-row items-center justify-center">
    <div class="flex-1">
      <!--<h2 class="my-5 text-center md:text-start text-5xl lg:text-6xl font-bold tracking-tight leading-none text-zinc-950 dark:text-zinc-50">Sync them like code</h2>-->
      <h2 class="my-5 text-center md:text-start text-5xl lg:text-6xl font-bold tracking-tight leading-none text-zinc-950 dark:text-zinc-50">Sync them</h2>
      <p class="mx-auto mt-3 text-center md:text-start leading-relaxed text-md md:text-lg">With encryption and cloaking in place, secrets move through git. Unlock familiar workflows like PR review, approvals, branching, and deploys — now for secrets too.</p>
    </div>
    <div class="flex-1 min-w-0 w-full">
      {% include v1/components/terminal-dotenvx-pro-sync.html %}
    </div>
  </div>
</section>

<!--
<section class="w-full max-w-5xl mx-auto px-6 mt-20 md:mt-40">
  <h2 class="my-5 text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-zinc-950 dark:text-[#ECD53F]">Team Sync</h2>
  <p class="mx-auto mt-3 max-w-3xl text-center text-md md:text-lg text-zinc-600 leading-2 mb-6">Stay in sync with a single command.</p>
</section>
-->

<section class="w-full max-w-5xl mx-auto px-6">
  <div class="max-w-5xl mx-auto">
    <div class="border border-zinc-200 dark:border-zinc-800 rounded overflow-hidden">
      {% include v1/components/feature-table.html %}
    </div>

    <p class="text-center text-sm mt-4 italic">"100% Open Source. 100% Free – with optional <span class="font-black italic">Pro</span> extension." - <a target="_blank" href="https://mot.la" class="underline" target="_blank">Founder, Mot</a></p>

    <div class="mx-auto mt-20 w-full divide-y divide-zinc-200 dark:divide-zinc-800">
      <h2 class="text-xl text-center md:text-left md:text-xl font-bold leading-10 tracking-tight text-zinc-900 dark:text-zinc-300">Frequently asked questions</h2>
      <dl class="mt-6 divide-y divide-zinc-200 dark:divide-zinc-800">
        {% include v1/components/faq-question.html question="How does encryption work?" answer='Dotenvx uses Elliptic Curve Integrated Encryption Scheme (ECIES) to encrypt each secret with a unique ephemeral key, while ensuring it can be decrypted using a long-term private key.<br/><br/>When you initialize encryption, a DOTENV_PUBLIC_KEY (encryption key) and DOTENV_PRIVATE_KEY (decryption key) are generated. The DOTENV_PUBLIC_KEY is used to encrypt secrets, and the DOTENV_PRIVATE_KEY is securely stored in your cloud secrets manager or .env.keys file.<br/><br/>Your encrypted .env file is then safely committed to code. Even if the file is exposed, secrets remain protected since decryption requires the separate DOTENV_PRIVATE_KEY, which is never stored alongside it. Read <a class="link-primary" href="/dotenvx.pdf">the whitepaper</a> for more details.' %}
        {% include v1/components/faq-question.html question="Is it safe to commit an encrypted .env file to code?" answer='Yes. Dotenvx encrypts secrets using AES-256 with ephemeral keys, ensuring that even if the encrypted .env file is exposed, its contents remain secure. The encryption keys themselves are protected using Secp256k1 elliptic curve cryptography, which is widely used for secure key exchange in technologies like Bitcoin.<br/><br/>This means that every secret in the .env file is encrypted with a unique AES-256 key, and that key is further encrypted using a public key (Secp256k1). Even if an attacker obtains the encrypted .env file, they would still need the corresponding private key—stored separately—to decrypt anything.<br/><br/>Breaking this encryption would require brute-forcing both AES-256 and elliptic curve cryptography, which is computationally infeasible with current technology. Read <a class="link-primary" href="/dotenvx.pdf">the whitepaper</a> for more details.' %}
        {% include v1/components/faq-question.html question="How does it protect me from third-party breaches like CircleCI?" answer="In the CircleCI breach the attacker accessed environment variables only. They could not access codebases. To steal your encrypted .env secrets, an attacker needs both – the private decryption key AND the encrypted .env files." %}
      </dl>
    </div>

    <div class="text-center p-0 m-0 my-6 text-center leading-7 text-zinc-600 dark:text-zinc-400">Can't find what you're looking for? Send us an email – <a href="mailto:support@dotenvx.com" class="font-semibold link-primary underline">support@dotenvx.com</a>.</div>

    <div class="flex gap-3 flex-col items-center justify-center">
      <div class="flex-0 max-w-full mx-0 md:mx-4 lg:mx-10">
        {% include v1/components/install-box.html buttons="false" docs="false" %}
      </div>
    </div>
  </div>
</section>
