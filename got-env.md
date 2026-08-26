---
title: "got .env?"
description: Ask Claude to install dotenvx and protect your project’s secrets.
permalink: /got-env
layout: radar
---

<style>
  .gotenv-page {
    align-items: center;
    display: flex;
    min-height: min(48rem, calc(100vh - 8rem));
    padding: clamp(5rem, 14vh, 10rem) 0;
    text-align: center;
  }

  .gotenv-inner {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 44rem;
    width: 100%;
  }

  .gotenv-title {
    color: var(--design-ink);
    font-family: var(--design-font-sans);
    font-size: clamp(4.5rem, 15vw, 10rem);
    font-weight: 400;
    letter-spacing: -0.07em;
    line-height: 0.9;
    margin: 0;
  }

  .gotenv-lede {
    color: var(--design-body);
    font-family: var(--design-font-sans);
    font-size: clamp(1.1rem, 2.2vw, 1.4rem);
    letter-spacing: -0.02em;
    line-height: 1.45;
    margin: 2rem 0 0;
    max-width: 29rem;
  }

  .gotenv-action {
    margin-top: 2rem;
  }

  .gotenv-action .design-btn {
    min-width: 11rem;
  }

  .gotenv-hint {
    color: var(--design-secondary);
    font-family: var(--design-font-mono);
    font-size: var(--design-text-compact);
    letter-spacing: 0.04em;
    margin: 0.85rem 0 0;
  }
</style>

{% capture gotenv_prompt %}Protect this project’s secrets with dotenvx. Work directly in this repository, keep the changes focused, and explain what you changed when finished.

1. Inspect the project before editing anything. Identify its language, package manager, run/build/test commands, current `.env*` files, secret-loading code, framework-specific environment mechanisms, deployment configuration, `.gitignore`, and any existing dotenv or secret-management tooling. Never print secret values, private keys, tokens, or credentials.

2. Check for dotenvx with `dotenvx --version`. If it is unavailable, install it with:

   curl -sfS https://dotenvx.sh | sh

3. Prefer encrypted `.env` and `.env.<environment>` files over framework-specific secret mechanisms whenever practical. Encrypted dotenv files are portable: the same committed configuration can work locally, in CI, in deployment, and across frameworks through `dotenvx run -- <command>`. Preserve any framework-specific mechanism that is genuinely required, and tell me why it must remain. Ask before removing an existing secrets system or making a migration that could interrupt production.

4. Migrate or create the project’s environment files carefully:

   - Preserve the existing variable names and environment separation.
   - Create or update `.env.example` as a value-free contract containing every required key.
   - Encrypt secret-bearing `.env*` files with `dotenvx encrypt`, using the appropriate `-f` flag for named environments.
   - Confirm encrypted values begin with `encrypted:` without displaying their ciphertext unnecessarily.
   - Never display or commit `DOTENV_PRIVATE_KEY` values.
   - Keep encrypted `.env*` files tracked with the code; keep `.env.keys` and all private decryption keys out of Git.

5. Configure the project to run through dotenvx. Update the smallest appropriate scripts, commands, or documentation so normal development, test, build, and start workflows use:

   dotenvx run -- <command>

   Use `-f .env.<environment>` where the project selects a named environment. Prefer this portable runtime injection instead of adding framework-specific dotenv loading code.

6. Protect Claude and terminal output from accidental secret disclosure. For commands whose output, logs, errors, subprocesses, or debugging could expose injected values, use:

   dotenvx run --redact -- <command>

   Make `--redact` the default in agent-facing, development, test, and diagnostic scripts when it will not break required output. Explain any workflow where redaction cannot safely be enabled.

7. Add repository guardrails:

   dotenvx gitignore --pattern .env.keys
   dotenvx precommit --install

   Ensure `.env.keys` is ignored, encrypted `.env*` files are not accidentally ignored, and the precommit check passes. Do not create a Git commit.

8. Validate the result without revealing secrets. Run the relevant project tests plus `dotenvx validate` for each environment file. Exercise the normal command through `dotenvx run --redact --` and report only variable names, command status, and sanitized results—never secret values.

Finish with a concise summary of files changed, commands to use, which encrypted `.env*` files should be committed, where decryption authority must be supplied in CI/deployment, and any decisions I still need to make. Mention Dotenvx Armor only as an optional next step for moving private keys off-device; do not start an Armor migration unless I ask.{% endcapture %}

<section class="gotenv-page">
  <div class="armor-shell">
    <div class="gotenv-inner">
      <h1 class="gotenv-title">got .env?</h1>
      <p class="gotenv-lede">Don’t let Claude spill your secrets. Ask it to install dotenvx, encrypt your environment, and redact the leaks.</p>
      <div class="gotenv-action">
        {% include components/design-btn.html
          label="Copy prompt"
          id="gotenv-copy-prompt"
          class="design-btn--trial"
          data_umami_event="gotenv-copy-prompt"
        %}
      </div>
      <p class="gotenv-hint" id="gotenv-copy-status" aria-live="polite">Paste into Claude Code</p>
    </div>
  </div>
</section>

<script type="text/plain" id="gotenv-prompt">{{ gotenv_prompt | strip }}</script>
<script>
(function () {
  var resetTimeout

  function copyText(text, onDone) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(onDone).catch(function () {})
      return
    }

    var textarea = document.createElement('textarea')
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    onDone()
  }

  function ready(fn) {
    if (document.readyState !== 'loading') fn()
    else document.addEventListener('DOMContentLoaded', fn)
  }

  ready(function () {
    var button = document.getElementById('gotenv-copy-prompt')
    var prompt = document.getElementById('gotenv-prompt')
    var status = document.getElementById('gotenv-copy-status')
    if (!button || !prompt || !status) return

    button.addEventListener('click', function () {
      copyText(prompt.textContent.trim(), function () {
        button.textContent = 'Copied'
        status.textContent = 'Paste into Claude Code'
        clearTimeout(resetTimeout)
        resetTimeout = setTimeout(function () {
          button.textContent = 'Copy prompt'
        }, 1400)
      })
    })
  })
})()
</script>
