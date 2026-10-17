---
layout: docs-side-path
title: Protect your commits
description: Block plaintext .env secrets from being staged in Git.
permalink: /docs/quickstart/protect/
markdown_url: /docs/quickstart/protect.md
parent_url: /docs/quickstart/#commit
parent_title: Quickstart
side_path_kind: Extra protection
---

Block accidental plaintext secrets from entering your commits. Run once:

```console
$ dotenvx protect
⛉ protection: full (.env*, .env.keys*)
```
{: copy="dotenvx protect"}

Dotenvx checks env files before Git stages them. Encrypted files pass through; unencrypted secrets are blocked, even with git add -f.

Protection applies to existing and future repositories for your Git user on this machine.

[Read more about protect →](/docs/cli/protect/)
