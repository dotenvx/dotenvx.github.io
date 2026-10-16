---
layout: docs-side-path
title: Deploy to Cloudflare Pages
description: Upload production secrets and deploy a Cloudflare Pages project.
permalink: /docs/cloudflare/pages/
markdown_url: /docs/cloudflare/pages.md
parent_url: /docs/cloudflare/#production
parent_title: Cloudflare
side_path_kind: Alternative
---

For a Cloudflare Pages project, upload the decrypted production secrets, then deploy your built site. Start with the encrypted .env.production file from [Production](/docs/cloudflare/#production). Replace my-site with your Pages project name and dist with your build output directory. Run these commands in Bash or Zsh.

```console
$ npx wrangler pages secret bulk <(npx dotenvx get -f .env.production --strict) --project-name my-site
$ npx wrangler pages deploy dist --project-name my-site
```
{: copy="npx wrangler pages secret bulk <(npx dotenvx get -f .env.production --strict) --project-name my-site
npx wrangler pages deploy dist --project-name my-site" class="design-codeblock--nowrap"}
