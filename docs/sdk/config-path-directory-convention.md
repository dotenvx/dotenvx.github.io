---
layout: docs-cli
title: "config(path: directory, convention: 'nextjs')"
description: Use a directory as the base for convention files.
permalink: /docs/sdk/config-path-directory-convention/
redirect_from:
  - /docs/advanced/config-path-directory-convention
  - /docs/advanced/config-path-directory-convention/
  - /docs/ref/sdk/config-path-directory-convention
  - /docs/ref/sdk/config-path-directory-convention/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDK
    href: /docs/sdk
  - label: config
    href: /docs/sdk/config/
---
<p class="design-paragraph">This is useful when loading a workspace's env files from a monorepo root.</p>

{% capture sdk_code_0 %}
// index.js
require('@dotenvx/dotenvx').config({
  path: 'apps/web',
  convention: 'nextjs'
})
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 %}

<p class="design-paragraph">The directory becomes the base for every file in the convention:</p>

{% capture sdk_code_1 %}
apps/web/.env.development.local
apps/web/.env.local
apps/web/.env.development
apps/web/.env
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_1 %}

<p class="design-paragraph">Without a convention, a directory path loads the <code class="design-code">.env</code> inside it:</p>

{% capture sdk_code_2 %}
require('@dotenvx/dotenvx').config({
  path: 'apps/web'
})
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_2 %}
