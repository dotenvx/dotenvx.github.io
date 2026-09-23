---
layout: radar
og_image:
  template: logo
  logo: _includes/icons/docs/nextjs.html
  alt: Next.js
title: Next.js
social_title: Encrypt a .env file in Next.js
description: Use Dotenvx with Next.js.
permalink: /docs/nextjs/
redirect_from:
  - /docs/platforms/vercel
  - /docs/platforms/vercel/
  - /docs/frameworks/next
  - /docs/frameworks/next/
  - /docs/secrets-in-nextjs
  - /docs/secrets-in-nextjs/
---



{% include components/docs-hero.html
  eyebrow="Docs"
  title="Next.js"
  description="Use Dotenvx with Next.js."
  icon="nextjs"
  show_icon=true
%}

<div class="armor-shell">
  <div class="design-content-width">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Install</h2>
    <p class="design-paragraph">In your Next.js project, install Dotenvx and @dotenvx/next-env.</p>
    {% capture install_commands %}
$ npm install @dotenvx/dotenvx
$ npm install @dotenvx/next-env
    {% endcapture %}
    {% capture install_commands_copy %}
npm install @dotenvx/dotenvx
npm install @dotenvx/next-env
    {% endcapture %}
    {% include components/design-codeblock.html value=install_commands copy_text=install_commands_copy format="cli" %}
    <p class="design-paragraph">Add this override to your package.json:</p>
    {% capture next_override %}
{
  "overrides": {
    "@next/env": "npm:@dotenvx/next-env"
  }
}
    {% endcapture %}
    {% include components/design-codeblock.html value=next_override language="json" %}
    <p class="design-paragraph">Apply it:</p>
    {% capture next_install %}
$ npm install
    {% endcapture %}
    {% include components/design-codeblock.html value=next_install copy_text="npm install" format="cli" %}
    <p class="design-paragraph">Next.js now loads encrypted secrets automatically through @dotenvx/next-env.</p>
    <details>
      <summary class="design-paragraph">Override not taking effect?</summary>
      <p class="design-paragraph">Check npm ls @next/env to confirm Next.js resolves to @dotenvx/next-env. If npm still uses the original package, remove node_modules and package-lock.json, then run npm install again. Review the regenerated lockfile before committing it.</p>
    </details>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Encrypt</h2>
    <p class="design-paragraph">Start with a secret value in the .env file at your project root, like:</p>
    {% capture plaintext_example %}
# .env
HELLO="Secret"
    {% endcapture %}
    {% include components/design-codeblock.html value=plaintext_example copy_text='HELLO="Secret"' language="dotenv" %}
    <p class="design-paragraph">Encrypt it with a single command.</p>
    {% capture encrypt_commands %}
$ npx dotenvx encrypt
◈ encrypted (.env)
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_commands copy_text="npx dotenvx encrypt" format="cli" %}
    <p class="design-paragraph">The values become ciphertext and only your private key can unlock them.</p>
    {% capture encrypted_example %}
# .env
DOTENV_PUBLIC_KEY="0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990"

HELLO="encrypted:BHLTACNJMr00nTG6yXpkCyWFKF/MY0ajN855tg3uVtKopTe2AGzSkQlcPd21pTOT3Ci8IKrdIg2TMZFoq1mDR6yb06QCRvqHXtpkZkAHYCEHfeWqqC8tMFovcYq5JS2uZSrC/qUGDA=="
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypted_example class="design-codeblock--nowrap" language="dotenv" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Commit</h2>
    <p class="design-paragraph">Commit your encrypted .env files with your code. It's safe. Now you can securely share secrets through git. Keep .env.keys out of git. The -f flag adds the encrypted file even if your Next.js project ignores .env files.</p>
    {% capture commit_commands %}
$ git add -f .env
$ git commit -m "encrypt .env"
    {% endcapture %}
    {% capture commit_commands_copy %}
git add -f .env
git commit -m "encrypt .env"
    {% endcapture %}
    {% include components/design-codeblock.html value=commit_commands copy_text=commit_commands_copy format="cli" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Ship</h2>
    <p class="design-paragraph">Read your secrets through process.env. Create app/api/hello/route.js (or src/app/api/hello/route.js if you use src):</p>
    {% capture app_example %}
// app/api/hello/route.js
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  return new Response(`Hello ${process.env.HELLO}`)
}
    {% endcapture %}
    {% include components/design-codeblock.html value=app_example language="javascript" %}
    <p class="design-paragraph">Run your app:</p>
    {% capture run_commands %}
$ npx next dev
    {% endcapture %}
    {% include components/design-codeblock.html value=run_commands copy_text="npx next dev" format="cli" %}
    <p class="design-paragraph">Visit /api/hello to see Hello Secret. Next.js loads and decrypts .env before your server code reads process.env.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Deploy</h2>
    <p class="design-paragraph">Find your private key with the keypair command.</p>
    {% capture keypair_commands %}
$ npx dotenvx keypair
{"DOTENV_PUBLIC_KEY":"0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990","DOTENV_PRIVATE_KEY":"b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf"}
    {% endcapture %}
    {% include components/design-codeblock.html value=keypair_commands copy_text="npx dotenvx keypair" class="design-codeblock--nowrap" format="cli" %}
    <p class="design-paragraph">Deploy your code and encrypted .env file, install your npm dependencies, and set DOTENV_PRIVATE_KEY in your hosting platform's environment variables. Make it available during both build and runtime. On Vercel, select the environments you deploy to. Keep .env.keys on your local machine.</p>
    {% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY" value="b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf" %}
    <p class="design-paragraph">Build and run your app:</p>
    {% capture deploy_commands %}
$ npx next build
$ npx next start
    {% endcapture %}
    {% capture deploy_commands_copy %}
npx next build
npx next start
    {% endcapture %}
    {% include components/design-codeblock.html value=deploy_commands copy_text=deploy_commands_copy format="cli" %}
    <p class="design-paragraph">Your app reads the same secrets, but this time with the private key stored in your hosting environment.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Production</h2>
    <p class="design-paragraph">Give production its own secrets by creating a .env.production file:</p>
    {% capture production_example %}
# .env.production
HELLO="Production"
    {% endcapture %}
    {% include components/design-codeblock.html value=production_example copy_text='HELLO="Production"' language="dotenv" %}
    <p class="design-paragraph">Encrypt it:</p>
    {% capture production_encrypt %}
$ npx dotenvx encrypt -f .env.production
◈ encrypted (.env.production)
    {% endcapture %}
    {% include components/design-codeblock.html value=production_encrypt copy_text="npx dotenvx encrypt -f .env.production" format="cli" %}
    <p class="design-paragraph">Commit it:</p>
    {% capture production_commit %}
$ git add -f .env.production
$ git commit -m "encrypt .env.production"
    {% endcapture %}
    {% capture production_commit_copy %}
git add -f .env.production
git commit -m "encrypt .env.production"
    {% endcapture %}
    {% include components/design-codeblock.html value=production_commit copy_text=production_commit_copy format="cli" %}
    <p class="design-paragraph">Find the matching private key with npx dotenvx keypair -f .env.production. Set it as DOTENV_PRIVATE_KEY_PRODUCTION in your hosting platform's environment variables for both build and runtime.</p>
    {% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY_PRODUCTION" value="c09d6f8918835c82f0df3b7d100c501ac199af5a76405892d641def691b5f015" %}
    <p class="design-paragraph">Build and run it:</p>
    {% include components/design-codeblock.html value=deploy_commands copy_text=deploy_commands_copy format="cli" %}
    <p class="design-paragraph">Next.js automatically loads .env.production for next build and next start. Visit /api/hello to see Hello Production. Same code, production secrets.</p>
    <p class="design-paragraph">Next.js also loads .env as a fallback. If it contains encrypted values, keep its DOTENV_PRIVATE_KEY available alongside DOTENV_PRIVATE_KEY_PRODUCTION.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Conclusion</h2>
    <p class="design-paragraph">You've encrypted a .env file, committed it to git, and loaded its secrets through Next.js with @dotenvx/next-env. You've also learned how to set a private key on your server and load different secrets for production without changing your code.</p>
    <p class="design-paragraph">Your encrypted secrets now travel with your code. Set the matching keys in your hosting environment, and Next.js handles loading them.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

  </section>
</div>
</div>
<script src="{{ '/assets/js/secrets-artifact.js' | relative_url }}" defer></script>
