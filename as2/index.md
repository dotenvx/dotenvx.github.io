---
title: "Agentic Secret Storage"
image: "/assets/img/og-image-as2.png"
---

<section class="w-full max-w-md mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-6">
  <div class="flex justify-center">
    <img id="as2-rotate" src="/assets/img/as2/2.jpg" alt="Agentic Secret Storage" class="w-full max-w-md border border-zinc-200 dark:border-zinc-800" />
  </div>
  <div class="flex flex-col gap-5 text-zinc-700 dark:text-zinc-300">
    <p>
      Software is changing, and dotenv must change with it. That is why I built
      <a href="https://as2.dotenvx.com">agentic secret storage (AS2)</a>. Agents run code without humans at terminals, so plaintext
      <code>.env</code> files are the wrong primitive.
    </p>
    <p>
      AS2 is built for autonomous software: encrypted by default, zero console access, and
      cryptography-first delivery that keeps operators out of the loop.
    </p>
    <p>
      It is backed by <a href="https://vestauth.com">Vestauth</a>, the trusted auth layer for agents. Each agent has
      a cryptographic identity, requests are signed with private keys, and verified with public keys.
    </p>
    <p>
      It is what I am using now. <span class="italic text-zinc-500 dark:text-zinc-400">- motdotla</span>
    </p>
  </div>
</section>

<section class="w-full max-w-md mx-auto px-6 mt-12 md:mt-16 flex flex-col gap-6">
  <h2 class="font-bold text-xl sm:text-3xl text-zinc-950 dark:text-zinc-50">Quickstart</h2>
  <p>Install vestauth and initialize your agent.</p>

  <pre class="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 p-6 overflow-x-auto"><code>npm i -g vestauth

vestauth agent init</code></pre>

  <p>Your agent sets secrets with a simple <code>curl</code> endpoint:</p>
  <pre class="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 p-6 overflow-x-auto"><code>vestauth agent curl -X POST https://as2.dotenvx.com/set -d '{"KEY":"value"}'</code></pre>

  <p>And your agent gets secrets with a simple <code>curl</code> endpoint:</p>
  <pre class="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 p-6 overflow-x-auto"><code>vestauth agent curl "https://as2.dotenvx.com/get?key=KEY"</code></pre>

  <p>
    That is it. This primitive unlocks secret access for agents without human-in-the-loop, oauth flows, or API keys.
  </p>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const img = document.getElementById('as2-rotate')
    if (!img) return

    const frames = [
      '/assets/img/as2/2.jpg',
      '/assets/img/as2/9.jpg',
      '/assets/img/as2/4.jpg',
      '/assets/img/as2/6.jpg',
      '/assets/img/as2/10.jpg'
    ]

    let index = 0

    setInterval(() => {
      index = (index + 1) % frames.length
      img.src = frames[index]
    }, 350)
  })
</script>
