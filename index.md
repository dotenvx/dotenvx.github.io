---
title: ""
---

{% include components/homepage-hero.html %}

{% include components/homepage-trust.html %}

<section class="w-full max-w-5xl mx-auto px-6 mt-0 mb-14 md:mb-[4.5rem] lg:mb-20">
  <div class="space-y-14 md:space-y-[4.5rem] lg:space-y-20">
    <div class="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:items-center md:gap-10 lg:gap-12">
      <div class="max-w-xl">
        <h2 class="font-medium text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Run on Anything</h2>
        <div class="mt-5 max-w-[34rem] space-y-5 text-zinc-500 text-base md:text-[1.05rem] leading-relaxed">
          <p>Whether you're using Node, Python, Ruby, Docker, CI, or AI agents, dotenvx works the same way. No custom integrations required. It just works &ndash; anywhere.</p>
        </div>
        <div class="mt-7 max-w-[34rem]">
          <p class="homepage-testimonial-quote m-0 text-[0.95rem] md:text-base italic font-normal leading-relaxed">&ldquo;It has cross-platform and cross-language support so you can use it with Node.js, Python, Ruby, Go, Rust, and more.&rdquo;</p>
          {% include components/homepage-testimonial-author.html href="https://rebeccamdeprey.com/blog/dotenvx-encrypted-env-files-for-javascript-apps" img="/assets/img/testimonials/rebecca-deprey.jpg" alt="Rebecca Deprey" name="Rebecca" title="Software Engineer" %}
        </div>
      </div>

      <div class="min-w-0 py-2 md:py-4">
        <div class="homepage-code-window">
          <div class="homepage-code-toolbar">
            <div class="homepage-code-dots">
              <span class="homepage-code-dot bg-[#ff6b5e]"></span>
              <span class="homepage-code-dot bg-[#f5bd4f]"></span>
              <span class="homepage-code-dot bg-[#61c554]"></span>
            </div>
            {% include components/homepage-code-copy-button.html %}
          </div>
          <pre class="homepage-code-body"><code><span class="homepage-code-prompt">$</span> <span class="homepage-code-program">echo</span> <span class="homepage-code-string">"HELLO=Dotenvx"</span> <span class="homepage-code-muted">&gt;</span> <span class="homepage-code-file">.env</span>
<span class="homepage-code-prompt">$</span> <span class="homepage-code-program">echo</span> <span class="homepage-code-string">"console.log('Hello ' + process.env.HELLO)"</span> <span class="homepage-code-muted">&gt;</span> <span class="homepage-code-file">index.js</span>
<span class="homepage-code-prompt">$</span> <span class="homepage-code-command">dotenvx</span> <span class="homepage-code-command">run --</span> <span class="homepage-code-file">node index.js</span>
<span class="homepage-code-output">⟐ injected env (1) from .env</span>
<span class="homepage-code-result">Hello Dotenvx</span></code></pre>
        </div>
      </div>
    </div>

    <div class="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:items-center md:gap-10 lg:gap-12">
      <div class="max-w-xl">
        <h2 class="font-medium text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Multiple Environments</h2>
        <div class="mt-5 max-w-[34rem] space-y-5 text-zinc-500 text-base md:text-[1.05rem] leading-relaxed">
          <p>Development, production, agents, or anywhere in between. Load the right .env file with a single flag.</p>
        </div>
        <div class="mt-7 max-w-[34rem]">
          <p class="homepage-testimonial-quote m-0 text-[0.95rem] md:text-base italic font-normal leading-relaxed">&ldquo;You can deploy env files to prod now? Creators of dotenv have been working on dotenvx which encrypts your env variables.&rdquo;</p>
          {% include components/homepage-testimonial-author.html href="https://x.com/zaidmukaddam/status/1941193539486089311?s=46" img="/assets/img/testimonials/zaid.jpg" name="Zaid" title="Founder, Scira.ai" %}
        </div>
      </div>

      <div class="min-w-0 py-2 md:py-4">
        <div class="homepage-code-window">
          <div class="homepage-code-toolbar">
            <div class="homepage-code-dots">
              <span class="homepage-code-dot bg-[#ff6b5e]"></span>
              <span class="homepage-code-dot bg-[#f5bd4f]"></span>
              <span class="homepage-code-dot bg-[#61c554]"></span>
            </div>
            {% include components/homepage-code-copy-button.html %}
          </div>
          <pre class="homepage-code-body"><code><span class="homepage-code-prompt">$</span> <span class="homepage-code-program">echo</span> <span class="homepage-code-string">"HELLO=Production"</span> <span class="homepage-code-muted">&gt;</span> <span class="homepage-code-file">.env.prod</span>
<span class="homepage-code-prompt">$</span> <span class="homepage-code-program">echo</span> <span class="homepage-code-string">"console.log('Hello ' + process.env.HELLO)"</span> <span class="homepage-code-muted">&gt;</span> <span class="homepage-code-file">index.js</span>
<span class="homepage-code-prompt">$</span> <span class="homepage-code-command">dotenvx</span> <span class="homepage-code-command">run -f</span> <span class="homepage-code-command">.env.prod</span> <span class="homepage-code-command">--</span> <span class="homepage-code-file">node index.js</span>
<span class="homepage-code-output">⟐ injected env (1) from .env.prod</span>
<span class="homepage-code-result">Hello Production</span></code></pre>
        </div>
      </div>
    </div>

    <div class="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:items-center md:gap-10 lg:gap-12">
      <div class="max-w-xl">
        <h2 class="font-medium text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Encrypt in One Command</h2>
        <div class="mt-5 max-w-[34rem] space-y-5 text-zinc-500 text-base md:text-[1.05rem] leading-relaxed">
          <p>Add encryption to your .env files with a single command. Generate a public/private keypair and securely share encrypted secrets without changing your workflow.</p>
        </div>
        <div class="mt-7 max-w-[34rem]">
          <p class="homepage-testimonial-quote m-0 text-[0.95rem] md:text-base italic font-normal leading-relaxed">&ldquo;Dotenvx is the strongest option for sharing .env files. It&rsquo;s a tool that lets you commit .env files to Git while keeping them encrypted. Same convenience, almost zero leak risk.&rdquo;</p>
          {% include components/homepage-testimonial-author.html href="https://x.com/commte/status/1996144456891060730?s=46" img="/assets/img/testimonials/commte.jpg" alt="コムテ" name="Comte" title="Founder, Izanami" %}
        </div>
      </div>

      <div class="mx-auto w-full max-w-2xl min-w-0 space-y-4">
        <div class="homepage-code-window">
          <div class="homepage-code-toolbar">
            <div class="homepage-code-dots">
              <span class="homepage-code-dot bg-[#ff6b5e]"></span>
              <span class="homepage-code-dot bg-[#f5bd4f]"></span>
              <span class="homepage-code-dot bg-[#61c554]"></span>
            </div>
            {% include components/homepage-code-copy-button.html %}
          </div>
          <pre class="homepage-code-body"><code><span class="homepage-code-prompt">$</span> <span class="homepage-code-command">dotenvx</span> <span class="homepage-code-command">encrypt -f</span> <span class="homepage-code-command">.env.prod</span>
<span class="homepage-code-prompt">$</span> <span class="homepage-code-command">cat</span> <span class="homepage-code-command">.env.prod</span>
<span class="homepage-code-cat-output"><span class="homepage-code-muted">#/-------------------[DOTENV_PUBLIC_KEY]--------------------/</span>
<span class="homepage-code-muted">#/            public-key encryption for .env files          /</span>
<span class="homepage-code-muted">#/       [how it works](https://dotenvx.com/encryption)     /</span>
<span class="homepage-code-muted">#/----------------------------------------------------------/</span>
<span class="homepage-code-command">DOTENV_PUBLIC_KEY_PROD</span><span class="homepage-code-muted">="</span><span class="homepage-code-string">03d4b0d392c92320fe751163293282bc434f38d7fe72a0429c3e449f312abd5121</span><span class="homepage-code-muted">"</span>

<span class="homepage-code-muted"># .env.prod</span>
<span class="homepage-code-command">HELLO</span><span class="homepage-code-muted">=</span><span class="homepage-code-string">encrypted:BH1SPwuO10wBx/V1in3L9Hgkcap75QKIiMXUXqniJDd9xA6WJwvWedyuvRk0M1HdZt9MlvFMUHrqmuwzE0dPDEcpvx4MIMhSJzzSyGbwdFniJ1pjqjEqjRkQfdroB6iOVZR8UmsyaJcz/18=</span></span>
<span class="homepage-code-return" aria-hidden="true">↵</span>
<span class="homepage-code-prompt">$</span> <span class="homepage-code-command">dotenvx</span> <span class="homepage-code-command">run -f</span> <span class="homepage-code-command">.env.prod</span> <span class="homepage-code-command">--</span> <span class="homepage-code-file">node index.js</span>
<span class="homepage-code-output">⟐ injected env (2) from .env.prod</span>
<span class="homepage-code-result">Hello Production</span></code></pre>
        </div>
      </div>
    </div>

    <div class="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:items-center md:gap-10 lg:gap-12">
      <div class="max-w-xl">
        <h2 class="font-medium text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">Drop-In for Dotenv</h2>
        <div class="mt-5 max-w-[34rem] space-y-5 text-zinc-500 text-base md:text-[1.05rem] leading-relaxed">
          <p>Install and use it in code just like dotenv. Or install the CLI globally and unlock dotenv for any language, framework, or platform.</p>
        </div>
        <div class="homepage-run-logos mt-7 flex flex-wrap items-center gap-x-5 gap-y-4">
          <a href="/docs/languages/nodejs" class="text-current no-underline hover:text-current hover:no-underline" aria-label="Node.js">
            {% include icons/nodejs.html class="h-6 w-auto" %}
          </a>
          <a href="/docs/languages/python" class="text-current no-underline hover:text-current hover:no-underline" aria-label="Python">
            {% include icons/python.html class="h-6 w-auto" %}
          </a>
          <a href="/docs/languages/ruby" class="text-current no-underline hover:text-current hover:no-underline" aria-label="Ruby">
            {% include icons/ruby.html class="h-6 w-auto" %}
          </a>
          <a href="/docs/languages/go" class="text-current no-underline hover:text-current hover:no-underline" aria-label="Go">
            {% include icons/go.html class="h-5 w-auto" %}
          </a>
          <a href="/docs/languages/rust" class="text-current no-underline hover:text-current hover:no-underline" aria-label="Rust">
            {% include icons/rust.html class="h-6 w-auto" %}
          </a>
          <a href="/docs/languages/dotnet" class="text-current no-underline hover:text-current hover:no-underline" aria-label=".NET">
            {% include icons/dotnet.html class="h-6 w-auto" %}
          </a>
          <a href="/docs/languages/php" class="text-current no-underline hover:text-current hover:no-underline" aria-label="PHP">
            {% include icons/php.html class="h-5 w-auto" %}
          </a>
          <a href="/docs/platforms/openai" class="text-current no-underline hover:text-current hover:no-underline" aria-label="OpenAI">
            {% include logos/openai.html class="h-6 w-auto" %}
          </a>
          <a href="/docs/platforms/claude" class="text-current no-underline hover:text-current hover:no-underline" aria-label="Claude">
            {% include logos/claude.html class="h-6 w-auto" %}
          </a>
          <a href="/docs/platforms/cloudflare" class="text-current no-underline hover:text-current hover:no-underline" aria-label="Cloudflare">
            {% include icons/cloudflare.html class="h-6 w-auto" %}
          </a>
          <a href="/docs/frameworks/nextjs" class="text-current no-underline hover:text-current hover:no-underline" aria-label="Next.js">
            {% include icons/nextjs.html class="h-6 w-auto" %}
          </a>
        </div>
      </div>

      <div class="min-w-0 py-2 md:py-4">
        <div class="homepage-code-window">
          <div class="homepage-code-toolbar">
            <div class="homepage-code-dots">
              <span class="homepage-code-dot bg-[#ff6b5e]"></span>
              <span class="homepage-code-dot bg-[#f5bd4f]"></span>
              <span class="homepage-code-dot bg-[#61c554]"></span>
            </div>
            {% include components/homepage-code-copy-button.html %}
          </div>
          <pre class="homepage-code-body"><code><span class="homepage-code-prompt">$</span> <span class="homepage-code-command">npm install</span> <span class="homepage-code-file">@dotenvx/dotenvx</span> <span class="homepage-code-muted">--save</span>

<span class="homepage-code-muted">// swap require('dotenv').config() for:</span>
<span class="homepage-code-command">require</span><span class="homepage-code-muted">(</span><span class="homepage-code-string">'@dotenvx/dotenvx'</span><span class="homepage-code-muted">).</span><span class="homepage-code-command">config</span><span class="homepage-code-muted">()</span>
<span class="homepage-code-muted">// or import '@dotenvx/dotenvx/config' // for esm</span></code></pre>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.homepage-code-copy-button').forEach(function (button) {
      button.addEventListener('click', function () {
        const code = button.closest('.homepage-code-window')?.querySelector('.homepage-code-body code')
        if (!code) return

        const text = code.innerText
          .split('\n')
          .filter((line) => /^\$\s?/.test(line))
          .map((line) => line.replace(/^\$\s?/, ''))
          .join('\n')
          .trim()

        const markCopied = function () {
          button.classList.add('is-copied')
          window.clearTimeout(button._copyTimeout)
          button._copyTimeout = window.setTimeout(function () {
            button.classList.remove('is-copied')
          }, 1100)
        }

        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(markCopied)
          return
        }

        const textarea = document.createElement('textarea')
        textarea.value = text
        textarea.setAttribute('readonly', '')
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
        markCopied()
      })
    })
  })
</script>

<section class="w-full max-w-6xl mx-auto px-6 mt-28 md:mt-40 lg:mt-48">
  <div class="mx-auto max-w-5xl text-center">
    <div class="mx-auto flex items-center justify-center text-zinc-100">
      {% include logos/warp.html class="h-7 w-auto" %}
    </div>
    <blockquote class="mx-auto mt-10 max-w-[39rem] text-zinc-100 text-lg md:text-[1.45rem] leading-[1.06] font-semibold tracking-tight">
      <p class="m-0">Dotenvx is a really smart concept. Instead of plaintext .envs, secrets are encrypted files. Agents can't read them, and they're shippable to cloud runners with a single key.</p>
    </blockquote>
    <div class="mt-8 flex justify-center">
      {% include components/homepage-testimonial-author.html href="https://x.com/BHolmesDev" img="/assets/img/testimonials/ben-holmes.jpg" name="Ben Holmes" title="Warp Dev Rel Lead" %}
    </div>
  </div>
</section>

<section class="w-full max-w-6xl mx-auto px-6 mt-24 md:mt-[7.5rem] lg:mt-36 mb-24 md:mb-32 lg:mb-40">
  <div class="text-center">
    <h2 class="mx-auto max-w-4xl font-medium text-5xl sm:text-5xl md:text-[3.6rem] text-zinc-100 leading-[1.04] tracking-[-0.02em]">
      Built because<br />.env files still matter.
    </h2>
    <ul class="mx-auto mt-10 flex max-w-[50rem] list-none flex-wrap items-start justify-center gap-x-3 gap-y-6 p-0">
      <li class="w-full max-w-[16rem] sm:w-[16rem]">
        <a href="https://github.com/dotenvx/dotenvx" target="_blank" rel="noopener noreferrer" class="homepage-proof-strip">
          <span class="homepage-proof-strip-value">5,600 stars</span>
          <span class="homepage-proof-strip-label">GitHub</span>
        </a>
      </li>
      <li class="w-full max-w-[16rem] sm:w-[16rem]">
        <a href="/dotenvx.pdf" target="_blank" rel="noopener noreferrer" class="homepage-proof-strip">
          <span class="homepage-proof-strip-value">99.5% less exposure</span>
          <span class="homepage-proof-strip-label">Whitepaper</span>
        </a>
      </li>
      <li class="w-full max-w-[16rem] sm:w-[16rem]">
        <a href="https://npm.chart.dev/@dotenvx/dotenvx" target="_blank" rel="noopener noreferrer" class="homepage-proof-strip">
          <span class="homepage-proof-strip-value">131 million</span>
          <span class="homepage-proof-strip-label">NPM</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="mx-auto mt-14 md:mt-16 max-w-[38rem] border-l border-zinc-800/80 pl-6 md:pl-8">
    <div class="space-y-5 text-sm leading-6 text-zinc-400 md:text-[0.92rem] md:leading-7">
      <p>I love .env files.</p>
      <p>They work everywhere: local development, CI, containers, servers, cloud platforms, and even agents. Easy to get started with, yet flexible enough for advanced use cases, few tools are as practical as they are elegant.</p>
      <p>But they've had a downside. Plaintext. Plaintext secrets have spread quietly across laptops, repositories, CI systems, chat messages, screenshots, and production machines. But the answer is not replacing them, a universal standard with more complicated platforms and solutions. The answer is securing them.</p>
      <p>That's why I built dotenvx and why I continue to build it. I care about .env files and want to see them secured. I want to see them have a bright future and you along with them.</p>
      <p>Thank you and please enjoy dotenvx.</p>
    </div>
    <div class="mt-5">
      {% include components/homepage-testimonial-author.html href="https://github.com/motdotla" img="/assets/img/mot.jpg" alt="Scott Motte" name="Scott Motte" title="Creator of dotenv and dotenvx" %}
    </div>
  </div>
</section>

<section class="w-full px-6 mt-10 md:mt-14 lg:mt-[4.5rem] mb-24 md:mb-32 lg:mb-40 text-center">
  <div class="mx-auto flex max-w-4xl flex-col items-center justify-center gap-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-zinc-500 sm:flex-row sm:gap-4 md:text-xs">
    <span>Free &amp; open source above</span>
    <span aria-hidden="true">↕︎</span>
    <span class="text-zinc-300">Professional security below</span>
  </div>
</section>

<!--
<section class="w-full max-w-2xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-4">
  <h2 class="font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">And free to use.</h2>
  <p>
    Dotenvx is open source – with optional commercial Dotenvx Ops tooling.
  </p>

  <div class="overflow-scroll w-full p-4 border border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 rounded-lg overflow-hidden">
    {/% include components/product-table.html %/}
  </div>
</section>
-->

<section class="homepage-trust-boundary w-full px-6" aria-hidden="true">
  <div class="homepage-trust-boundary-frame relative mx-auto max-w-5xl"></div>
</section>

<section class="w-full px-6 mt-0 mb-0">
  <div class="relative overflow-hidden mx-auto max-w-6xl px-6 pt-0 md:pt-2 pb-32 md:pb-44 lg:pb-52 text-center">
    <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div class="absolute bottom-[-15rem] right-0 w-[26rem] sm:w-[24rem] md:bottom-[-2rem] md:w-[34rem] lg:bottom-[-3rem] lg:w-[40rem] aspect-[1396/1127] bg-no-repeat bg-contain bg-bottom bg-right opacity-70 md:opacity-100" style="background-image: url('/assets/img/bg/armor-gunmetal.png'); -webkit-mask-image: radial-gradient(circle at 82% 38%, rgba(0,0,0,1) 22%, rgba(0,0,0,0.92) 36%, rgba(0,0,0,0.55) 52%, rgba(0,0,0,0.2) 66%, rgba(0,0,0,0) 80%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0.34) 86%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 84%, rgba(0,0,0,0.52) 94%, rgba(0,0,0,0) 100%); mask-image: radial-gradient(circle at 82% 38%, rgba(0,0,0,1) 22%, rgba(0,0,0,0.92) 36%, rgba(0,0,0,0.55) 52%, rgba(0,0,0,0.2) 66%, rgba(0,0,0,0) 80%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0.34) 86%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 84%, rgba(0,0,0,0.52) 94%, rgba(0,0,0,0) 100%); -webkit-mask-composite: source-in, source-in; mask-composite: intersect; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;"></div>
    </div>
    <div class="relative z-10">
      <div class="mx-auto mt-4 max-w-4xl text-center md:mt-6">
        <div class="text-xs md:text-sm font-semibold uppercase tracking-[0.08em] text-[#ecd53f]">
          PROFESSIONAL SECURITY
        </div>
        <h3 class="mt-8 font-canela font-medium uppercase tracking-[-0.018em] text-[3.7rem] md:text-[4.65rem] lg:text-[5.5rem] leading-[0.95] text-zinc-100">
          Armored<br />Keys <span aria-hidden="true">⛨</span>
        </h3>
        <p class="mt-9 text-[1.07rem] md:text-[1.16rem] leading-[1.34] md:leading-[1.32] text-zinc-500">
          Private keys. Off device. Under guard.
        </p>
      </div>
      <div class="mx-auto mt-10 md:mt-12 w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-7 md:gap-7">
        <a class="btn-primary inline-flex w-full md:w-auto items-center justify-center gap-0.5 py-5 md:py-3" href="/armor">
          <span>Learn more</span>
          <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
          </svg>
        </a>
        <a class="inline-flex items-center justify-center gap-0.5 p-3 font-extrabold tracking-tight no-underline hover:no-underline text-zinc-500 dark:text-zinc-300/90 hover:text-zinc-700 dark:hover:text-zinc-100 transition-colors duration-200" href="/pricing">
          <span>See Pricing</span>
          <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
