---
title: ""
---

<section class="w-full max-w-xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-4">
  <h1 class="font-bold text-zinc-950 dark:text-zinc-50">Dotenv/x. Secured.</h1>
  <p>Env files have been a major attack vector. But they are too useful to do without. Heck, even AWS uses them internally.<sup><a href="#footnote-1">1</a></sup></p>
  <p><span class="italic">What if you could encrypt them?</span> Now you can with dotenvx. Dotenvx encrypts your .env files–limiting their attack vector while retaining their benefits.</p>
  <p>It's free, open-source, and built and maintained by the creator of the original <a class="whitespace-nowrap" href="https://github.com/motdotla/dotenv">dotenv – 19.9k stars</a>.</p>

  <div class="flex flex-row gap-4 justify-center my-6">
    <a class="btn-submit" href="/docs/quickstart">Quickstart &rarr;</a>
    <a class="btn" href="/docs">Documentation</a>
  </div>

  <div class="">
    {% include v1/components/encrypted-env-file-small.html %}
  </div>
</section>

<section class="w-full max-w-xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-4">
  <h2 class="font-bold text-zinc-950 dark:text-zinc-50">Tons of features.</h2>
  <div class="grid grid-cols-1 gap-4">
    {% include v1/components/feature-box3.html feature="Run anywhere" description="Cross-platform–works everywhere" href="/features/run-anywhere" %}
    {% include v1/components/feature-box3.html feature="Multi-environment" description="Switch environments easily" href="/features/multiple-environments" %}
    {% include v1/components/feature-box3.html feature="Encrypted envs" description="Encrypt your envs at-rest" href="/features/encryption" %}
    {% include v1/components/feature-box3.html feature="Monorepo" description="First-class monorepo support" href="/docs#monorepos" %}
    {% include v1/components/feature-box3.html feature="Multiple .env files" description="Compose multiple .env files flexibly" href="/features/multiple-files" %}
    {% include v1/components/feature-box3.html feature="Multi-line values" description="Add multi-line secrets like public keys" href="/docs/advanced/run-multiline" %}
    {% include v1/components/feature-box3.html feature="Variable expansion" description="Reference and expand variables" href="/features/variable-expansion" %}
    {% include v1/components/feature-box3.html feature="Command substitution" description="Add the output of a command" href="/features/command-substitution" %}
    {% include v1/components/feature-box3.html feature="Get/Set" description="Conveniently get/set single variables" href="/features/get-key" %}
    {% include v1/components/feature-box3.html feature="Contextual help" description="Built-in next steps" href="/features/contextual-help" %}
    {% include v1/components/feature-box3.html feature="Append .gitignore" description="Append to .gitignore in one command" href="/features/gitignore" %}
    {% include v1/components/feature-box3.html feature="Generate .env.example" description="Generate .env.example in one command" href="/docs/advanced/genexample" %}
    {% include v1/components/feature-box3.html feature="Prebuild" description="Prevent building .env files into docker images" href="/features/prebuild" %}
    {% include v1/components/feature-box3.html feature="Precommit" description="Prevent committing .env files to code" href="/features/precommit" %}
  </div>
</section>

<section class="w-full max-w-xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-4">
  <h2 class="font-bold text-zinc-950 dark:text-zinc-50">With strong cryptography.</h2>
  <p class="font-serif">Dotenvx: Reducing Secrets Risk with Cryptographic Separation.</p>
  <div class="flex gap-8">
    <div class="basis-2/3 flex flex-col gap-4">
      <p class="font-serif"><span class="italic">Abstract.</span> An ideal secrets solution would not only centralize secrets but also contain the fallout of a breach. While secrets managers offer centralized storage and distribution, their design creates a large blast radius, risking exposure of thousands or even millions of secrets. We propose a solution that reduces the blast radius by splitting secrets management into two distinct components: an encrypted secrets file and a separate decryption key.</p>
      <p><a target="_blank" href="/dotenvx.pdf?v={{ site.time | date: '%Y%m%d%H%M%S' }}">Read the Whitepaper</a></p>
    </div>
    <div class="basis-1/3">
      <a target="_blank" href="/dotenvx.pdf?v={{ site.time | date: '%Y%m%d%H%M%S' }}" class="aspect-[8.5/11] min-w-0 w-full block border-2 border-zinc-500 hover:border-blue-500 drop-shadow-lg">
        <img src="/assets/img/whitepaper-thumb.png" class="w-[700px] aspect-[8.5/11] max-w-full max-h-screen border-0 mx-auto"/>
      </a>
    </div>
  </div>
</section>

<section class="w-full max-w-xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-4">
  <h2 class="font-bold text-zinc-950 dark:text-zinc-50">Growing rapidly.</h2>
  <p>
    Dotenvx is installed more than <a href="http://npmjs.com/@dotenvx/dotenvx">half a million times weekly</a>.
  </p>
  <p>
    It's only <a href="https://dotenvx.com/blog/2024/06/24/dotenvx-next-generation-config-management.html">one year old</a>, and yet <a href="https://paypal.com">Paypal</a>, <a href="https://www.nasa.gov/">NASA</a>, <a href="https://procore.com">Procore</a>, <a href="https://supabase.com">Supabase</a>, <a href="https://opennext.js.org/">OpenNext</a>, <a href="https://aws.amazon.com">AWS</a>, <a href="https://socket.dev">Socket</a>, <a href="https://daytona.io">Daytona</a>, <a href="https://stacks.co">Stacks</a>, and <a href="https://facebook.com">Facebook</a> have all adopted it. Even stereotypically slow moving government departments in <a href="https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service">Britain</a>, <a href="https://www.numerique.gouv.fr/">France</a>, <a href="https://github.com/bcgov">Canada</a>, and <a href="https://www.hel.fi/fi">Finland</a>, having evaluated it for its extra security benefits, adopted it.
  </p>
  <p>
    It's being used inside AI tooling like <a href="https://github.com/paypal/agent-toolkit">Paypal's Agent-Toolkit</a> and <a href="https://www.daytona.io/docs/typescript-sdk/">Daytona's SDK</a>. It's trusted by security software like <a href="https://github.com/SocketDev/socket-cli">Socket's CLI and Registry</a>. AWS recommends it with <a
      href="https://docs.amplify.aws/react/deploy-and-host/fullstack-branching/secrets-and-vars/#local-environment-2">AWS Amplify</a>, NASA uses it to help power <a href="https://github.com/nasa/earthdata-search">Earthdata Search</a>, and Supabase requires it to unlock their <a href="https://supabase.com/docs/guides/deployment/branching#using-dotenvx-for-git-based-workflow">Branching feature</a>. It's incredible, and it will be even more exciting to watch year two unfold.
  </p>
  <div class="md:py-0 rounded-lg overflow-hidden">
    <div class="flex gap-5 lg:gap-10 items-center justify-center">
      {% include logos/socket.html class="h-10" %}
      {% include logos/aws.html class="h-12" %}
      {% include logos/paypal.html class="h-10" %}
      {% include logos/nasa.html class="h-12" %}
      {% include logos/facebook.html class="h-10" %}
      {% include logos/supabase.html class="h-10" %}
    </div>
  </div>
</section>

<section class="w-full max-w-xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-4">
  <h2 class="font-bold text-zinc-950 dark:text-zinc-50">Easy to switch.</h2>
  <p>
    Just replace:
  </p>
  <div class="rounded border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 p-6 font-mono text-sm text-zinc-800 dark:text-zinc-100 shadow-sm overflow-x-auto">
    <code class="block text-zinc-500">// before</code>
    <div class="my-1 text-slate-400 font-semibold">require('dotenv').config()</div>
    <code class="block text-zinc-500 mt-6">// after</code>
    <div class="text-green-500 dark:text-green-400 font-semibold">require('@dotenvx/dotenvx').config()</div>
  </div>
  <p>
    And opt-in to all the benefits of dotenvx — without changing your current workflow.
  </p>
</section>

<section class="w-full max-w-xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-4">
  <h2 class="font-bold text-zinc-950 dark:text-zinc-50">Frequently asked questions.</h2>
  <dl class="divide-y divide-zinc-200 dark:divide-zinc-800">
    {% include v1/components/faq-question.html question="How does encryption work?" answer='Dotenvx uses Elliptic Curve Integrated Encryption Scheme (ECIES) to encrypt each secret with a unique ephemeral key, while ensuring it can be decrypted using a long-term private key.<br/><br/>When you initialize encryption, a DOTENV_PUBLIC_KEY (encryption key) and DOTENV_PRIVATE_KEY (decryption key) are generated. The DOTENV_PUBLIC_KEY is used to encrypt secrets, and the DOTENV_PRIVATE_KEY is securely stored in your cloud secrets manager or .env.keys file.<br/><br/>Your encrypted .env file is then safely committed to code. Even if the file is exposed, secrets remain protected since decryption requires the separate DOTENV_PRIVATE_KEY, which is never stored alongside it. Read <a class="link-primary" href="/dotenvx.pdf">the whitepaper</a> for more details.' %}
    {% include v1/components/faq-question.html question="Is it safe to commit an encrypted .env file to code?" answer='Yes. Dotenvx encrypts secrets using AES-256 with ephemeral keys, ensuring that even if the encrypted .env file is exposed, its contents remain secure. The encryption keys themselves are protected using Secp256k1 elliptic curve cryptography, which is widely used for secure key exchange in technologies like Bitcoin.<br/><br/>This means that every secret in the .env file is encrypted with a unique AES-256 key, and that key is further encrypted using a public key (Secp256k1). Even if an attacker obtains the encrypted .env file, they would still need the corresponding private key—stored separately—to decrypt anything.<br/><br/>Breaking this encryption would require brute-forcing both AES-256 and elliptic curve cryptography, which is computationally infeasible with current technology. Read <a class="link-primary" href="/dotenvx.pdf">the whitepaper</a> for more details.' %}
    {% include v1/components/faq-question.html question="How does it protect me from third-party breaches like CircleCI?" answer="In the CircleCI breach the attacker accessed environment variables only. They could not access codebases. To steal your encrypted .env secrets, an attacker needs both – the private decryption key AND the encrypted .env files." %}
    {% include v1/components/faq-question.html question="<sup>1</sup>Is it true AWS uses .env files internally?" answer="A former AWS engineer mentioned to me (and others) that AWS used them on their production infrastructure. He has since left to start his own business so maybe this is no longer the case." div_id="footnote-1" %}
  </dl>
</section>
