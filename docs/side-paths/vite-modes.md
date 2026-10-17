---
layout: docs-side-path
title: Staging and other modes
description: Match the encrypted file to Vite's build mode.
permalink: /docs/vite/modes/
markdown_url: /docs/vite/modes.md
parent_url: /docs/vite/#production
parent_title: Vite
side_path_kind: Alternative
---

Create .env.staging with the public values for staging:

```dotenv
VITE_HELLO="Staging"
```

Encrypt it and provision DOTENV_PRIVATE_KEY_STAGING for your staging build job:

```console
$ npx dotenvx encrypt -f .env.staging
```
{: copy="npx dotenvx encrypt -f .env.staging" package-manager="npm"}

```console
$ pnpm exec dotenvx encrypt -f .env.staging
```
{: copy="pnpm exec dotenvx encrypt -f .env.staging" package-manager="pnpm"}

Commit the encrypted .env.staging file and add this script:

```json
{
  "scripts": {
    "build:staging": "dotenvx run -f .env.staging --strict -- vite build --mode staging"
  }
}
```
{: label="package.json"}

Run npm run build:staging or pnpm build:staging, then deploy dist.

The -f flag chooses the file Dotenvx decrypts; --mode chooses Vite's mode. Keep each selected file complete: Vite also reads .env and mode-specific files, but cannot decrypt extra files itself.

Staging mode still produces an optimized production build. See [Vite modes](https://vite.dev/guide/env-and-mode#modes).
