---
layout: radar
og_image:
  template: logo
  logo: _includes/icons/docs/ruby.html
  alt: Ruby
title: Ruby
social_title: Encrypt a .env file in Ruby
description: Use Dotenvx with Ruby.
permalink: /docs/ruby/
redirect_from:
  - /docs/languages/ruby
  - /docs/languages/ruby/
  - /docs/secrets-in-ruby/
  - /docs/secrets-in-ruby
---


{% include components/docs-hero.html
  eyebrow="Docs"
  title="Ruby"
  description="Use Dotenvx with Ruby."
  icon="ruby"
  show_icon=true
%}

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

## Install

Get the Dotenvx Ruby gem.

```console
$ gem install dotenvx
```
{: copy="gem install dotenvx"}

And the CLI to encrypt files:

```console
$ curl -sfS https://dotenvx.sh | sh
```
{: copy="curl -sfS https://dotenvx.sh | sh"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Encrypt

Start with a secret value in your .env file, like:

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

Load your secrets before your app uses them. Create an app.rb file:

```ruby
# app.rb
require "dotenvx"

Dotenvx.load

puts "Hello #{ENV['HELLO']}"
```
{: copy="require \"dotenvx\"

Dotenvx.load

puts \"Hello #{ENV['HELLO']\}\""}



Run your app:

{% capture run_commands %}
$ ruby app.rb
⟐ injected env (2) from .env
Hello Secret
{% endcapture %}
{% include components/design-codeblock.html value=run_commands copy_text="ruby app.rb" format="cli" %}

Dotenvx uses your private key to decrypt and inject your secrets just-in-time to your code.

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

Deploy your code and encrypted .env file, install your gems, and set DOTENV_PRIVATE_KEY on your production environment. Keep .env.keys on your local machine.

{% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY" value="b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf" %}

And run your app:

{% include components/design-codeblock.html value=run_commands copy_text="ruby app.rb" format="cli" %}

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

Tell the Ruby gem to load .env.production:

```ruby
# app.rb
require "dotenvx"

Dotenvx.load(".env.production")

puts "Hello #{ENV['HELLO']}"
```

Run it:

```console
$ ruby app.rb
⟐ injected env (2) from .env.production
Hello Production
```
{: copy="ruby app.rb"}

Dotenvx loads .env.production and uses DOTENV_PRIVATE_KEY to unlock it. Your app reads its production secrets through ENV.

You can also load multiple files with Dotenvx.load(".env.production", ".env"). The first value wins. Make each file's matching private key available.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Conclusion

You've encrypted a .env file, committed it to git, and loaded its secrets with the Ruby gem. You've also learned how to set a private key on your server and choose a separate encrypted file for production.

Your secrets now travel with your code, and each environment needs just one private key to use them.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

</section>
</div>
</div>
<script src="{{ '/assets/js/secrets-artifact.js' | relative_url }}" defer></script>
