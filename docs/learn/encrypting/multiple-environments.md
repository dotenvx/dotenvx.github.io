---
title: Multiple Environments
description: Use encrypted env files across multiple environments.
permalink: /docs/learn/encrypting/multiple-environments/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Multiple Environments"
  description="Use encrypted env files across multiple environments."
  mark=".env.*"
%}

<section class="radar-section">
<div class="armor-shell">
<div class="design-content-width">
<div class="docs-guide-body design-prose" markdown="block">

Use the same encryption workflow for each environment. Create a `.env.ENVIRONMENT` file, encrypt it, and decrypt it at runtime with `-f`.

```dotenv
# .env.production
HELLO="Production"
```
{: copy="false"}

```console
$ dotenvx encrypt -f .env.production
◈ encrypted (.env.production)
```
{: copy="dotenvx encrypt -f .env.production"}

Run with the same file.

```console
$ dotenvx run -f .env.production -- node index.js
⟐ injected env (2) from .env.production
Hello Production
```
{: copy="dotenvx run -f .env.production -- node index.js"}

This keeps each environment's values separate while preserving the same encrypted-file workflow.

</div>
</div>
</div>
</section>
