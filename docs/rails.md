---
layout: radar
title: Rails
social_title: Encrypt a .env file in Rails
description: Use Dotenvx with Rails.
permalink: /docs/rails/
redirect_from:
  - /docs/frameworks/rails
  - /docs/frameworks/rails/
  - /docs/secrets-in-rails/
  - /docs/secrets-in-rails
---


{% include components/docs-hero.html
  eyebrow="Docs"
  title="Rails"
  description="Use Dotenvx with Rails."
  icon="rails"
  show_icon=true
%}

<div class="armor-shell">
  <div class="design-content-width">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Install</h2>
    <p class="design-paragraph">Add the Dotenvx Rails gem to your Gemfile, outside any environment-specific group:</p>
    {% capture install_commands %}
# Gemfile
gem "dotenvx-rails"
    {% endcapture %}
    {% include components/design-codeblock.html value=install_commands copy_text='gem "dotenvx-rails"' %}
    <p class="design-paragraph">Install it:</p>
    {% capture bundle_install %}
$ bundle install
    {% endcapture %}
    {% include components/design-codeblock.html value=bundle_install copy_text="bundle install" %}
    <p class="design-paragraph">And get the CLI to encrypt files:</p>
    {% capture install_cli %}
$ curl -sfS https://dotenvx.sh | sh
    {% endcapture %}
    {% include components/design-codeblock.html value=install_cli copy_text="curl -sfS https://dotenvx.sh | sh" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Encrypt</h2>
    <p class="design-paragraph">Start with a secret value in the .env file at your Rails project root, like:</p>
    {% capture plaintext_example %}
# .env
HELLO="Secret"
    {% endcapture %}
    {% include components/design-codeblock.html value=plaintext_example copy_text='HELLO="Secret"' %}
    <p class="design-paragraph">Encrypt it with a single command.</p>
    {% capture encrypt_commands %}
$ dotenvx encrypt
◈ encrypted (.env)
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_commands copy_text="dotenvx encrypt" %}
    <p class="design-paragraph">The values become ciphertext and only your private key can unlock them.</p>
    {% capture encrypted_example %}
# .env
DOTENV_PUBLIC_KEY="0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990"

HELLO="encrypted:BHLTACNJMr00nTG6yXpkCyWFKF/MY0ajN855tg3uVtKopTe2AGzSkQlcPd21pTOT3Ci8IKrdIg2TMZFoq1mDR6yb06QCRvqHXtpkZkAHYCEHfeWqqC8tMFovcYq5JS2uZSrC/qUGDA=="
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypted_example class="design-codeblock--nowrap" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Commit</h2>
    <p class="design-paragraph">Commit your encrypted .env files with your code. It's safe. Now you can securely share secrets through git.</p>
    {% capture commit_commands %}
$ git add .env
$ git commit -m "encrypt .env"
    {% endcapture %}
    {% capture commit_commands_copy %}
git add .env
git commit -m "encrypt .env"
    {% endcapture %}
    {% include components/design-codeblock.html value=commit_commands copy_text=commit_commands_copy %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Ship</h2>
    <p class="design-paragraph">Rails loads your encrypted secrets automatically. Create script/hello.rb to try it:</p>
    {% capture app_example %}
# script/hello.rb
puts "Hello #{ENV['HELLO']}"
    {% endcapture %}
    {% capture app_example_copy %}
puts "Hello #{ENV['HELLO']}"
    {% endcapture %}
    {% include components/design-codeblock.html value=app_example copy_text=app_example_copy %}
    <p class="design-paragraph">Run it through Rails:</p>
    {% capture run_commands %}
$ bin/rails runner script/hello.rb
⟐ injected env (2) from .env
Hello Secret
    {% endcapture %}
    {% include components/design-codeblock.html value=run_commands copy_text="bin/rails runner script/hello.rb" %}
    <p class="design-paragraph">The dotenvx-rails gem loads your secrets before Rails configures your application. Read them through ENV in your controllers, jobs, and other server code.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Deploy</h2>
    <p class="design-paragraph">Find your private key with the keypair command.</p>
    {% capture keypair_commands %}
$ dotenvx keypair
{"DOTENV_PUBLIC_KEY":"0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990","DOTENV_PRIVATE_KEY":"b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf"}
    {% endcapture %}
    {% include components/design-codeblock.html value=keypair_commands copy_text="dotenvx keypair" class="design-codeblock--nowrap" %}
    <p class="design-paragraph">Deploy your code and encrypted .env file, install your gems with bundle install, and set DOTENV_PRIVATE_KEY on your production environment. Keep .env.keys on your local machine.</p>
    {% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY" value="b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf" %}
    <p class="design-paragraph">Run it in production:</p>
    {% capture deploy_run %}
$ RAILS_ENV=production bin/rails runner script/hello.rb
⟐ injected env (2) from .env
Hello Secret
    {% endcapture %}
    {% include components/design-codeblock.html value=deploy_run copy_text="RAILS_ENV=production bin/rails runner script/hello.rb" %}
    <p class="design-paragraph">Dotenvx uses your private key to decrypt and inject your secrets just-in-time, but this time with the private key stored on your server.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Production</h2>
    <p class="design-paragraph">Give production its own secrets by creating a .env.production file:</p>
    {% capture production_example %}
# .env.production
HELLO="Production"
    {% endcapture %}
    {% include components/design-codeblock.html value=production_example copy_text='HELLO="Production"' %}
    <p class="design-paragraph">Encrypt it:</p>
    {% capture production_encrypt %}
$ dotenvx encrypt -f .env.production
◈ encrypted (.env.production)
    {% endcapture %}
    {% include components/design-codeblock.html value=production_encrypt copy_text="dotenvx encrypt -f .env.production" %}
    <p class="design-paragraph">Commit it:</p>
    {% capture production_commit %}
$ git add .env.production
$ git commit -m "encrypt .env.production"
    {% endcapture %}
    {% capture production_commit_copy %}
git add .env.production
git commit -m "encrypt .env.production"
    {% endcapture %}
    {% include components/design-codeblock.html value=production_commit copy_text=production_commit_copy %}
    <p class="design-paragraph">Find the matching private key with dotenvx keypair -f .env.production. Set it as DOTENV_PRIVATE_KEY_PRODUCTION on your server.</p>
    {% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY_PRODUCTION" value="c09d6f8918835c82f0df3b7d100c501ac199af5a76405892d641def691b5f015" %}
    <p class="design-paragraph">Run the same script in production:</p>
    {% capture production_run %}
$ RAILS_ENV=production bin/rails runner script/hello.rb
⟐ injected env (3) from .env.production, .env
Hello Production
    {% endcapture %}
    {% include components/design-codeblock.html value=production_run copy_text="RAILS_ENV=production bin/rails runner script/hello.rb" %}
    <p class="design-paragraph">With RAILS_ENV=production, dotenvx-rails automatically loads .env.production and uses DOTENV_PRIVATE_KEY_PRODUCTION to unlock it. Same code, production secrets.</p>
    <p class="design-paragraph">Rails also loads .env as a fallback. If it contains encrypted values, keep its DOTENV_PRIVATE_KEY available alongside DOTENV_PRIVATE_KEY_PRODUCTION.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Conclusion</h2>
    <p class="design-paragraph">You've encrypted a .env file, committed it to git, and loaded its secrets automatically with dotenvx-rails. You've also learned how to set a private key on your server and use a separate encrypted file for production without changing your application code.</p>
    <p class="design-paragraph">Your encrypted secrets now travel with your code. Set the matching keys in your hosting environment, and Rails handles loading them.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

  </section>
</div>
</div>
<script src="{{ '/assets/js/secrets-artifact.js' | relative_url }}" defer></script>
