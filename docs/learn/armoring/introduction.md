---
title: Armoring
description: Learn how armored keys keep private decryption keys off device.
permalink: /docs/learn/armoring/introduction/
layout: radar
redirect_from:
  - /docs/armor/
  - /docs/armor
  - /docs/learn/armoring/
  - /docs/learn/armoring
  - /docs/ops/
  - /docs/ops
  - /docs/ops/advanced/
  - /docs/ops/advanced
  - /docs/ops/quickstart/
  - /docs/ops/quickstart
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Armoring"
  description="Learn how armored keys keep private decryption keys off device."
  mark="⛨"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
    <p class="design-paragraph">Armoring stores private decryption keys remotely as armored keys instead of writing them locally to <code class="design-code">.env.keys</code>.</p>

    <p class="design-paragraph">Use Armor to move an existing private key off device.</p>

    {% capture armor_up %}
$ dotenvx armor up
    {% endcapture %}
    {% include components/design-codeblock.html value=armor_up copy_text="dotenvx armor up" %}

    <p class="design-paragraph">Pull an armored key back into <code class="design-code">.env.keys</code> when a local workflow needs it.</p>

    {% capture armor_down %}
$ dotenvx armor down
    {% endcapture %}
    {% include components/design-codeblock.html value=armor_down copy_text="dotenvx armor down" %}

    <p class="design-paragraph">Push and pull are also available for syncing armored keys with <code class="design-code">.env.keys</code>.</p>

    {% capture armor_sync %}
$ dotenvx armor push
$ dotenvx armor pull
    {% endcapture %}
    {% include components/design-codeblock.html value=armor_sync copy=false %}

    <p class="design-paragraph">See the <a class="design-link" href="/docs/cli/armor/introduction">Armor CLI reference</a> for the full command set.</p>
    </div>
  </div>
</section>
