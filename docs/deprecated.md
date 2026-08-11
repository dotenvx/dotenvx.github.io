---
title: Deprecated
description: Deprecated .env file formats and technologies.
permalink: /docs/deprecated/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Deprecated"
  description="Deprecated .env file formats and technologies."
  mark="deprecated"
%}

{% capture deprecated_items %}
  <li>
    <a class="design-link" href="/docs/env-vault-file">.env.vault file (deprecated)</a>
  </li>
  <li>
    <a class="design-link" href="/docs/env-keys-file-deprecated">.env.keys file (old format deprecated)</a>
  </li>
  <li>
    <a class="design-link" href="/docs/dotenv-key">DOTENV_KEY (deprecated)</a>
  </li>
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
    <p class="design-paragraph" style="max-width: 36rem; margin-bottom: 1.5rem;">These file formats and technologies have come and gone and been deprecated.</p>
    {% include components/design-list.html
      title="Resources"
      items=deprecated_items
    %}
  </div>
</section>
