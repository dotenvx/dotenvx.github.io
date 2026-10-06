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
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

## Install

Add the Dotenvx Rails gem to your Gemfile, outside any environment-specific group:

```ruby
# Gemfile
gem "dotenvx-rails"
```
{: copy="gem \"dotenvx-rails\""}

Install it:

```console
$ bundle install
```
{: copy="bundle install"}

And get the CLI to encrypt files:

```console
$ curl -sfS https://dotenvx.sh | sh
```
{: copy="curl -sfS https://dotenvx.sh | sh"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Encrypt

Start with a secret value in the .env file at your Rails project root, like:

```dotenv
# .env
HELLO="Secret"
```
{: copy="HELLO=\"Secret\""}

Encrypt it with a single command.

```console
$ dotenvx encrypt
◈ encrypted (.env)
```
{: copy="dotenvx encrypt"}

The values become ciphertext and only your private key can unlock them.

```dotenv
# .env
DOTENV_PUBLIC_KEY="0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990"

HELLO="encrypted:BHLTACNJMr00nTG6yXpkCyWFKF/MY0ajN855tg3uVtKopTe2AGzSkQlcPd21pTOT3Ci8IKrdIg2TMZFoq1mDR6yb06QCRvqHXtpkZkAHYCEHfeWqqC8tMFovcYq5JS2uZSrC/qUGDA=="
```
{: class="design-codeblock--nowrap"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Commit

Commit your encrypted .env files with your code. It's safe. Now you can securely share secrets through git.

```console
$ git add .env
$ git commit -m "encrypt .env"
```
{: copy="git add .env
git commit -m \"encrypt .env\""}


{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Ship

Rails loads your encrypted secrets automatically. Create script/hello.rb to try it:

```ruby
# script/hello.rb
puts "Hello #{ENV['HELLO']}"
```
{: copy="puts \"Hello #{ENV['HELLO']\}\""}

Run it through Rails:

```console
$ bin/rails runner script/hello.rb
⟐ injected env (2) from .env
Hello Secret
```
{: copy="bin/rails runner script/hello.rb"}

The dotenvx-rails gem loads your secrets before Rails configures your application. Read them through ENV in your controllers, jobs, and other server code.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Deploy

Find your private key with the keypair command.

```console
$ dotenvx keypair
{"DOTENV_PUBLIC_KEY":"0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990","DOTENV_PRIVATE_KEY":"b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf"}
```
{: copy="dotenvx keypair" class="design-codeblock--nowrap"}

Deploy your code and encrypted .env file, install your gems with bundle install, and set DOTENV_PRIVATE_KEY on your production environment. Keep .env.keys on your local machine.

{% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY" value="b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf" %}

Run it in production:

```console
$ RAILS_ENV=production bin/rails runner script/hello.rb
⟐ injected env (2) from .env
Hello Secret
```
{: copy="RAILS_ENV=production bin/rails runner script/hello.rb"}

Dotenvx uses your private key to decrypt and inject your secrets just-in-time, but this time with the private key stored on your server.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Production

Give production its own secrets by creating a .env.production file:

```dotenv
# .env.production
HELLO="Production"
```
{: copy="HELLO=\"Production\""}

Encrypt it:

```console
$ dotenvx encrypt -f .env.production
◈ encrypted (.env.production)
```
{: copy="dotenvx encrypt -f .env.production"}

Commit it:

```console
$ git add .env.production
$ git commit -m "encrypt .env.production"
```
{: copy="git add .env.production
git commit -m \"encrypt .env.production\""}



Find the matching private key with dotenvx keypair -f .env.production. Set it as DOTENV_PRIVATE_KEY and set DOTENV_FILE to .env.production on your server.

{% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY" path=".env.production" value="c09d6f8918835c82f0df3b7d100c501ac199af5a76405892d641def691b5f015" %}

Run the same script in production:

```console
$ RAILS_ENV=production bin/rails runner script/hello.rb
⟐ injected env (3) from .env.production, .env
Hello Production
```
{: copy="RAILS_ENV=production bin/rails runner script/hello.rb"}

With RAILS_ENV=production, dotenvx-rails automatically loads .env.production and uses DOTENV_PRIVATE_KEY to unlock it. Same code, production secrets.

Rails also loads .env as a fallback. If it uses a different encryption key, supply that key as DOTENV_PRIVATE_KEY_2.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Conclusion

You've encrypted a .env file, committed it to git, and loaded its secrets automatically with dotenvx-rails. You've also learned how to set a private key on your server and use a separate encrypted file for production without changing your application code.

Your encrypted secrets now travel with your code. Set the matching keys in your hosting environment, and Rails handles loading them.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

</section>
</div>
</div>
<script src="{{ '/assets/js/secrets-artifact.js' | relative_url }}" defer></script>
