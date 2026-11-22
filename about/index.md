---
title: About
description: "A small file. Years of work."
permalink: /about/
main_layout: two-columns
---

> {{ page.description }}

<p><img class="main-image" src="{{ '/about.png' | relative_url }}" alt="Scott Motte working on a laptop at an office desk" width="768" height="307"></p>

We’re the team behind [dotenv](https://github.com/motdotla/dotenv) and [dotenvx](https://github.com/dotenvx/dotenvx), both started by [Scott Motte](https://github.com/motdotla).

We started with a problem every developer recognizes. An app needs credentials, but those credentials don’t belong in its source code. [Dotenv](https://github.com/motdotla/dotenv) gave them a home in a small, readable file. No dashboard to learn. Just a file and the code you were already writing.

That simplicity mattered. But the file still had to reach teammates, build servers, and production. Keeping it out of Git meant finding another way to move it around.

So we built [dotenvx](https://github.com/dotenvx/dotenvx). Encryption lets .env travel with your code while its private key stays separate. The same file becomes something you can version, review, and share through Git.

Now we’re working on the next question: how can an agent work on your app without being handed its secrets? [Dotenv.toml](/docs/dotenvtoml/) makes the rules for secrets explicit so software can enforce them. Your app gets secrets. Your agents get rules.

Through each step, the aim stays the same: keep secrets safe without making software harder to ship.

## Get in touch

Questions about the tools or the company? Reach us at [support@dotenvx.com](mailto:support@dotenvx.com). For security review materials, visit our [Trust Center](/trust/).

2450 Colorado Ave #100<br>
Santa Monica, CA 90404
