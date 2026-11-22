---
title: Next.js
description: Load encrypted environment values with the Next.js SDK.
permalink: "/docs/sdk/nextjs/"
icon: nextjs
---

{% assign sdk = site.data.install_sdks_v2 | where: 'name', 'Next.js' | first %}
## Package

[@dotenvx/next-env]({{ sdk.package_url }})

## Install

{% assign install_commands = sdk.command | newline_to_br | split: '<br />' %}
{% capture install_display %}{% for command in install_commands %}$ {{ command | strip }}
{% endfor %}{% endcapture %}
{% include components/design-codeblock.html value=install_display format='cli' copy_text=sdk.command %}

Add an override to your app’s `package.json`.

```json
{
  "overrides": {
    "@next/env": "npm:@dotenvx/next-env"
  }
}
```

Run `npm install` again to apply the override.

## Usage

Start Next.js with `npm run dev`. Next.js loads `.env` through `@dotenvx/next-env` and makes the values available to server-side code through `process.env`.

See the [Next.js quickstart](/docs/nextjs/) for setup and deployment.
## Reference

- [loadEnvConfig](/docs/sdk/nextjs/load-env-config/)
- [processEnv](/docs/sdk/nextjs/process-env/)
- [resetEnv](/docs/sdk/nextjs/reset-env/)
- [updateInitialEnv](/docs/sdk/nextjs/update-initial-env/)
- [initialEnv](/docs/sdk/nextjs/initial-env/)

Stored-key lookup requires a compatible CLI on PATH. Environment private keys and .env.keys work without it. Armor server-side decryption is unavailable in this loader.
