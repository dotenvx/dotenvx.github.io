---
layout: blog
draft: true
sitemap: false
search: false
noindex: true
author: "Scott Motte"
title: "Faster than Node's native parseEnv?"
excerpt: "Dotenv's fast mode now beats Node's native parser on all current LTS versions - Node 22 and 24 - across Linux and Windows in our benchmarks."
---

Faster than Node's native parseEnv?

No, way.

Yes. Yes, way.

[Dotenv's](https://github.com/motdotla/dotenv) fast mode now beats Node's native parser on all current LTS versions - Node 22 and 24 - across Linux and Windows in our benchmarks. See below where Node native is still faster.

## Background

Five months ago, the wildest PR ever landed in dotenv. Dotenv contributions are typically small parser changes, type detail additions, or proposals for all new features. This was something different.

This was a new parser, claiming 2x speedup.

<img src="https://github.com/user-attachments/assets/572df7e0-a186-4beb-9aeb-93042cad0649" alt="Pull request introducing the faster dotenv parser" loading="lazy">

Some guy from Sweden, [homanp](https://github.com/homanp). A character scanning approach. Pretty sick, tbh.

So what did I do? What any maintainer does for a package depended on by [tens of millions](https://github.com/motdotla/dotenv/network/dependents). I sat on it. lol.

But we also got in touch with each other and had a chat. He and his cofounder ran a service called [Superagent.sh](https://superagent.sh) - securing PRs. They generously offered to secure Dotenvx's, and today they do that for all kinds of open source projects - even cURL!

## The Release

Back to Dotenv. The parser was contributed as a full replacement. That's too risky so we put it behind the --fast flag. On September 17th, five months after that initial PR dropped, we released it.

<img src="https://github.com/user-attachments/assets/d1792485-6e04-4f05-8a34-4f34f98e2e04" alt="Dotenv changelog announcing the fast parser" loading="lazy">

It's fast.

{% capture parser_benchmark_rows %}
<thead>
  <tr><th scope="col">Node</th><th scope="col">Linux</th><th scope="col">Windows</th></tr>
</thead>
<tbody>
  <tr><th scope="row" style="white-space: nowrap;">20</th><td style="white-space: nowrap;">Native wins</td><td>Native wins</td></tr>
  <tr><th scope="row" style="white-space: nowrap;">22 LTS</th><td style="white-space: nowrap;"><strong>Dotenv wins</strong></td><td><strong>Dotenv wins</strong></td></tr>
  <tr><th scope="row" style="white-space: nowrap;">24 LTS</th><td style="white-space: nowrap;"><strong>Dotenv wins</strong></td><td><strong>Dotenv wins</strong></td></tr>
  <tr><th scope="row" style="white-space: nowrap;">26 Current</th><td style="white-space: nowrap;">Native wins</td><td><strong>Dotenv wins Buffers</strong>; strings tied</td></tr>
</tbody>
{% endcapture %}
{% capture parser_benchmark_table %}
{% include components/design-table.html class="design-table-wrap--fill" content=parser_benchmark_rows %}
{% endcapture %}
{% include components/design-card.html content=parser_benchmark_table %}

<p style="margin-top: .375rem; font-size: var(--design-text-micro); color: var(--design-mid);">Source: <a style="font-size: inherit; color: inherit !important;" href="https://github.com/motdotla/dotenv/actions/runs/35872614990">GitHub Actions benchmarks, September 23, 2026</a>.</p>

Since then the community is using it, have found edge cases, and those have been patched. It's cool to see, and I won't be surprised if it becomes adopted by other dotenv implementations.

## Usage

With dotenv 18 or later, enable fast mode in your app:

{% capture fast_config_example %}
require('dotenv').config({ fast: true })
{% endcapture %}
{% include components/design-codeblock.html value=fast_config_example language="javascript" %}

Or use the new CLI:

{% include components/design-codeblock.html value="$ npx dotenv run --fast -- node index.js" copy_text="npx dotenv run --fast -- node index.js" format="cli" %}

## The Future

Software is changing, fast. With Dotenv we're committed to maintaining the past while still evolving .env. This --fast parser is an example of that.

If you love .env and also want to see it evolve, please support us. Use [dotenv](https://github.com/motdotla/dotenv), use [dotenvx](https://github.com/dotenvx/dotenvx), and even snag a [dotenv membership](https://dotenvx.com/membership). Be part of the .env story. It's not all written yet.

<div class="blog-partner-thanks">
  <p>Lastly, a giant thank you to <a href="https://superagent.sh">Superagent.sh</a> for bringing this to the dotenv community.</p>
  <a class="blog-partner-logo" href="https://superagent.sh" aria-label="Visit Superagent.sh">
    <img class="blog-partner-logo-light" src="https://www.superagent.sh/images/superagent-logo-square-flat-favicon.webp" alt="Superagent.sh" width="48" height="48" loading="lazy">
    <img class="blog-partner-logo-dark" src="https://www.superagent.sh/images/superagent-logo-square-flat-favicon-dark.webp" alt="Superagent.sh" width="48" height="48" loading="lazy">
    <span>superagent_</span>
  </a>
</div>
