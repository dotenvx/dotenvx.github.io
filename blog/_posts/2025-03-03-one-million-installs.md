---
layout: blog
author: "Scott Motte – Mot"
title: "1 Million Installs: From Experimental to Essential"
image: "/assets/img/blog/blog-8.png"
excerpt: "Eight months ago, dotenvx was just an experiment. Today, it's an essential tool with over 1 million monthly installs."
---

Eight months ago, dotenvx introduced a new way to think about [config management](/blog/2024/06/24/dotenvx-next-generation-config-management.html). Today, it's an essential secrets tool with over [1 million monthly installs](https://www.npmjs.com/package/@dotenvx/dotenvx) (and growing quickly).

<a href="https://npm.chart.dev/@dotenvx/dotenvx" target="_blank"><img src="https://github.com/user-attachments/assets/776ed814-b2d0-49be-a61f-98ed494c7aa3" /></a>

That growth didn't happen by accident—dotenvx development has been heavy with [88 releases in 8 months](https://github.com/dotenvx/dotenvx/blob/main/CHANGELOG.md#1383). That's a new release every 2.75 days!

Today, it is a world-class tool–handling [.env parsing](https://dotenvx.com/docs/quickstart), [variable expansion](https://dotenvx.com/docs/advanced/run-variable-expansion), [command substitution](https://dotenvx.com/docs/advanced/run-command-substitution), [encrypted .env files](https://dotenvx.com/docs/env-file#encryption), and [more](https://dotenvx.com/docs/advanced) better than anything else can. Each day, hundreds of software engineers newly learn of, and begin using, dotenvx.

<img src="https://github.com/user-attachments/assets/1297f2d5-579d-4894-8bc2-91f0f90e4f91" />

As a result, it's starting to grow into something bigger—**a community, an ecosystem, and a standard.**

## Community

Dotenvx has grown fast, and a big part of that is developer involvement. In just eight months, engineers have contributed ideas, issues, and pull requests that shaped its direction.

* **GitHub Activity.** More than [250 issues filed](https://github.com/dotenvx/dotenvx/issues), [275 PRs created](https://github.com/dotenvx/dotenvx/pulls), and [60,000 lines of code written](https://github.com/user-attachments/assets/1258fd84-165c-4947-b13b-ffeb49822860) in the last eight months.
* **Third-Party Documentation.** Users [wrote](https://medium.com/@t.dekiere/boost-dx-with-dotenvx-71e276dce6f6) [about](https://parottasalna.com/2024/06/30/migrating-from-env-to-dotenvx/) [dotenvx](https://dev.to/this-is-learning/exploring-dotenvx-46ng), made [videos](https://youtu.be/xcBHX2m2pNw?t=102) [about](https://www.youtube.com/watch?v=1p2MS8rKHzU&t=3s) [dotenvx](https://www.youtube.com/watch?v=APhfQ2xya9A), [recommended](https://www.reddit.com/r/webdev/comments/1gteux5/comment/lxmhzue/) [dotenvx](https://www.reddit.com/r/Python/comments/1gud1h9/comment/lxtv16s/), and [much](https://railway.com/template/zXEiVF) [more](https://forums.docker.com/t/docker-compose-argument-to-replace-env-file-directive-or-argument-to-enable-host-environment-passthrough/141671).
* **Adoption and Dependents.** Most significantly, major projects adopted dotenvx and became [dotenvx dependents](https://github.com/dotenvx/dotenvx/network/dependents).
    * [NASA](https://github.com/nasa/earthdata-search)
    * [AWS](https://docs.amplify.aws/nextjs/deploy-and-host/fullstack-branching/secrets-and-vars/#local-environment-2)
    * [Supabase](https://github.com/supabase/supabase/blob/master/examples/slack-clone/nextjs-slack-clone-dotenvx/README.md)
    * [Cloudflare](https://github.com/cloudflare/templates)

<img src="https://github.com/user-attachments/assets/7cb15832-8e91-494b-b825-4fe0f54fbbed" />

This kind of community involvement makes dotenvx better. The feedback loop between users and development is tight, and that's been key to its fast growth.

## Ecosystem

Dotenvx isn't just a CLI—it's extending into the tools developers use every day.

* **VS Code Extension.** Decrypt your encrypted .env files in VS Code with the [Dotenvx VS Code Extension](https://dotenvx.com/vscode-extension/).
* **Chrome Extension.** Decrypt your encrypted .env files directly on GitHub with the [Dotenvx Chrome Extension](https://dotenvx.com/chrome-extension).
* **Buildpacks.** Install dotenvx to Heroku (or any platform that supports buildpacks) with the [Dotenvx Buildpack](https://github.com/dotenvx/heroku-buildpack-dotenvx).

<a href="https://dotenvx.com/mods"><img src="https://github.com/user-attachments/assets/70047aa8-3510-463a-8858-d27a05e8777f" /></a>

This growing ecosystem ensures that no matter where developers work—local editors, browsers, or cloud platforms—dotenvx is increasingly there to seamlessly handle secrets.

## Standard

Dotenvx isn't just widely used—it's built on a foundation that makes it the right way to handle secrets.

From the [whitepaper](https://dotenvx.com/dotenvx.pdf):

> **Dotenvx: Reducing Secrets Risk with Cryptographic Separation**
> 
> **Abstract.** An ideal secrets solution would not only centralize secrets but also contain the fallout of a breach. While secrets managers offer centralized storage and distribution, their design creates a large blast radius, risking exposure of thousands or even millions of secrets. We propose a solution that reduces the blast radius by splitting secrets management into two distinct components: an encrypted secrets file and a separate decryption key.

This approach—cryptographic separation—ensures that even if one component is compromised, the overall security of secrets remains intact. The whitepaper breaks down the problem and solution, and "it makes a great case for dotenvx." <sup><a href="https://github.com/dotenvx/dotenvx/issues/537#issue-2881322629">1</a></sup> 

<iframe src="/dotenvx.pdf?v={{ site.time | date: '%Y%m%d%H%M%S' }}" class="w-[700px] aspect-[8.5/11] max-w-full max-h-screen border-0 mx-auto"></iframe>

By stating the problem well and implementing good <abbr title="Developer Experience">DX</abbr>, dotenvx is emerging as a new standard for secrets management of .env files. It's pretty incredible.

## Conclusion

What started as a rethink of .env files has quickly turned into something much bigger. In just eight months, dotenvx has gone from an emerging idea to an essential tool, trusted by developers and major platforms alike.

With over **1 million monthly installs**, an active and engaged **community**, an expanding **ecosystem**, and a well-defined **standard**, dotenvx isn't just growing—it's reshaping how secrets are managed in modern development.

And this is only the beginning. 💪

---

If you enjoyed this post, please [share dotenvx with friends](https://github.com/dotenvx/dotenvx) or [star it on GitHub](https://github.com/dotenvx/dotenvx) to help spread the word.
