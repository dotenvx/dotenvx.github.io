---
title: CLI
description: Encrypt, run, and manage .env files from the command line.
permalink: /docs/cli/
redirect_from:
  - /docs/cli/introduction
  - /docs/cli/introduction/
  - /docs/ref/cli
  - /docs/ref/cli/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="CLI"
  description="Encrypt, run, and manage .env files from the command line."
  icon="cli"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="design-content-width">
      {% capture step_content %}
        {% include components/docs-cli-commands.html %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}
    </div>
  </div>
</section>
