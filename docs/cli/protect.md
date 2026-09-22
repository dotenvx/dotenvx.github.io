---
layout: docs-cli
title: Protect
description: Keep plaintext secrets and private keys out of commits across your repositories on this machine.
permalink: /docs/cli/protect/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
related:
  - title: Encrypt
    href: /docs/cli/encrypt/
  - title: Private-key files
    href: /docs/env-keys-file/
  - title: Precommit
    href: /docs/cli/precommit/
---
Run once to protect existing and future repositories on this machine:

{% capture protect_setup %}
$ dotenvx protect
⛉ protection: full (.env*, .env.keys*)
{% endcapture %}
{% capture protect_setup_copy %}dotenvx protect{% endcapture %}
{% include components/design-codeblock.html value=protect_setup copy_text=protect_setup_copy %}

That's it! Attempts to add unencrypted .env secrets to a commit by you (or your coding agent) will be blocked. It even works if your coding agent attempts git add -f.

{% include components/design-video.html mp4="https://github.com/user-attachments/assets/da8da6ec-7acb-4d37-8283-7bf3e7856ac3" title="Watch dotenvx protect in action" %}

Under the hood, this uses a Git filter to check env files before they're staged, letting encrypted files through unchanged. It's installed globally for your Git user, so it works across existing and future repositories on this machine.

{% capture protect_faq_items %}
  <li>
    <span class="design-list-label">Does it protect <strong>existing and future repositories</strong>?</span>
    <span class="design-list-meta">Yes</span>
  </li>
  <li>
    <span class="design-list-label">Does it work in <strong>monorepos and subdirectories</strong>?</span>
    <span class="design-list-meta">Yes</span>
  </li>
  <li>
    <span class="design-list-label">Does the plaintext check block <strong>git add -f</strong> too?</span>
    <span class="design-list-meta">Yes</span>
  </li>
  <li>
    <span class="design-list-label">Can I still commit <strong>encrypted env files</strong>?</span>
    <span class="design-list-meta">Yes</span>
  </li>
  <li>
    <span class="design-list-label">Can I check <strong>Docker builds</strong> with dotenvx protect --docker?</span>
    <span class="design-list-meta">Yes</span>
  </li>
{% endcapture %}
{% include components/design-list.html title="FAQ" items=protect_faq_items %}
