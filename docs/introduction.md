---
description: "Learn how to install Dotenvx, encrypt .env files, and load secrets at runtime. Explore quickstarts, CLI commands, SDKs, and deployment guides."
title: Docs
permalink: /docs/
redirect_from:
  - /docs/introduction
  - /docs/introduction/
  - /docs/package-managers
  - /docs/package-managers/
  - /docs/process-managers
  - /docs/process-managers/
---

<div class="main-section-columns" markdown="block">

<div markdown="block">

> Get dotenvx working. Understand how it works.

Start with [Install]({{ '/docs/install/' | relative_url }}) for the CLI or an SDK for your language. Then follow the [Quickstart]({{ '/docs/quickstart/' | relative_url }}) to encrypt your first .env, commit it, and run your app.

For more options, see [Advanced]({{ '/docs/advanced/' | relative_url }}). To use dotenvx directly from your application, head to [SDKs]({{ '/docs/sdk/' | relative_url }}).

Your encrypted files travel with your code. Where the private key lives is your choice. [Custody]({{ '/docs/custody/' | relative_url }}) explains the options and links to setup.

Evaluating the security model? Read the [whitepaper]({{ '/whitepaper.pdf' | relative_url }}). Company security review materials are in the [Trust Center]({{ '/trust/' | relative_url }}).

</div>

<div markdown="block">

## Guides

{% assign guides_page = site.pages | where: 'url', '/docs/guides/' | first %}
{% for section in guides_page.guide_sections %}
### {{ section.title }}

<ul>
{% for guide in section.links %}
<li><a href="{{ guide.href | relative_url }}">{{ guide.label }}</a></li>
{% endfor %}
</ul>

{% endfor %}

## SDKs

{% assign sdk_page = site.pages | where: 'url', '/docs/sdk/' | first %}
{% include main-sdk-list.md languages=sdk_page.sdk_languages %}

</div>

<div markdown="block">

## CLI

<ul class="advanced-cli-commands">
{% for command in site.data.advanced_cli %}
{% unless command.label contains ' ' %}
{% unless site.data.hidden_cli_commands contains command.label %}
<li><a href="{{ command.href | relative_url }}">{{ command.label }}</a></li>
{% endunless %}
{% endunless %}
{% endfor %}

</ul>

[All commands]({{ '/docs/cli/' | relative_url }})

## Custody

{% assign custody_page = site.pages | where: 'url', '/docs/custody/' | first %}
<ul>
{% for option in custody_page.options %}
<li><a href="{{ option.href | relative_url }}">{{ option.title }}</a></li>
{% endfor %}
</ul>

## Dotenvx.toml

<ul>
<li><a href="{{ '/docs/dotenvxtoml/quickstart/' | relative_url }}">Quickstart</a></li>
{% assign toml_page = site.pages | where: 'url', '/docs/dotenvxtoml/' | first %}
{% for option in toml_page.options %}
<li><a href="{{ option.href | relative_url }}">{{ option.title }}</a></li>
{% endfor %}
<li><a href="{{ '/docs/dotenvxtoml/spec/' | relative_url }}">Full specification</a></li>
</ul>

## Resources

<ul>
{% include components/docs-resource-items.html %}
</ul>

## Security

- [Whitepaper]({{ '/whitepaper.pdf' | relative_url }})
- [Trust Center]({{ '/trust/' | relative_url }})

</div>

</div>
