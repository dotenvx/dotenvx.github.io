---
title: Envfile Quickstart
description: Create your first Envfile.
permalink: /docs/quickstart/envfile/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Quickstart"
  title="Envfile"
  description="Create your first Envfile."
  mark="Envfile"
%}

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

## Create

[Install Dotenvx](/docs/install/) if you haven't already. Start in a project with a `.env` file. For this example:

```dotenv
# .env
PORT=3000
DATABASE_URL="postgres://localhost/myapp"
```

Create your Envfile:

```console
$ dotenvx spec
```
{: copy="dotenvx spec"}

Select `.env` if prompted. Dotenvx records the variable names without copying their values and adds `strict true` at the top so validation failures stop your command.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Define

Keep the generated `strict true` setting and edit the variable rules:

```ruby
# Envfile
strict true

env "PORT", type: "port", encrypted: false, redacted: false
env "DATABASE_URL", type: "url"
```

Both variables are required. `PORT` can stay public. `DATABASE_URL` must be encrypted and is redacted by default. `strict true` stops your command when validation fails.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Encrypt

Encrypt the secret values:

```console
$ dotenvx encrypt
```
{: copy="dotenvx encrypt"}

Dotenvx follows the Envfile. `DATABASE_URL` becomes ciphertext. `PORT` stays readable. Keep your private key separate from git.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Check

Validate your configuration:

```console
$ dotenvx check
```
{: copy="dotenvx check"}

Try setting `PORT=not-a-port` in `.env` and run it again. The check fails. Change it back to `3000`.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Run

Dotenvx checks the rules before starting your command:

```console
$ dotenvx run -- node index.js
```
{: copy="dotenvx run -- node index.js"}

Replace `node index.js` with your app's command. Commit your Envfile alongside your encrypted `.env`.

[Read the full Envfile spec →](/docs/envfile-spec/)

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
</section>
</div>
</div>
