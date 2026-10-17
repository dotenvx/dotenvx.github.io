---
layout: docs-side-path
title: Build-only secrets
description: Use credentials in build tooling without putting them in your Expo app.
permalink: /docs/expo/build-secrets/
markdown_url: /docs/expo/build-secrets.md
parent_url: /docs/expo/#ship
parent_title: Expo
side_path_kind: Alternative
---

Tokens for uploading source maps or accessing private services belong in Node.js build scripts or your backend. Leave off the EXPO_PUBLIC_ prefix, and never copy them into app config's extra field or application code.

For example, add a build-only token to .env.production alongside your public configuration, then run dotenvx encrypt -f .env.production again.

```dotenv
# Build tooling only. Replace this example value with your token.
SENTRY_AUTH_TOKEN="example-only"
```

Run your tool through Dotenvx so it receives the decrypted environment:

```json
{
  "scripts": {
    "upload:sourcemaps": "dotenvx run -f .env.production --strict -- node scripts/upload-sourcemaps.cjs"
  }
}
```
{: label="package.json"}

The script is your existing source-map upload tool. It reads process.env.SENTRY_AUTH_TOKEN on the build machine. Do not import that script or @dotenvx/dotenvx into an Expo screen.

Removing the prefix alone does not protect a value that you manually put in app code, assets, or config. Anything shipped to a device can be inspected.
