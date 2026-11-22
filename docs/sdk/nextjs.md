---
title: Next.js
description: Load encrypted .env files with the Next.js environment loader.
permalink: /docs/sdk/nextjs/
eyebrow: SDKs
eyebrow_href: /docs/sdk/
icon: nextjs
---

{% assign sdk = site.data.install_sdks_v2 | where: 'name', 'Next.js' | first %}
## Package

[@dotenvx/next-env]({{ sdk.package_url }})

## Install

```bash
{{ sdk.command }}
```

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
