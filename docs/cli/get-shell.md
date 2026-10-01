---
layout: docs-cli
title: "--format shell"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Return a shell formatted response of all key/value pairs in a .env file.
permalink: /docs/cli/get-shell/
redirect_from:
  - /docs/advanced/get-shell
  - /docs/advanced/get-shell/
  - /docs/ref/cli/get-shell
  - /docs/ref/cli/get-shell/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---

```console
$ echo "HELLO=World" > .env
echo "KEY=value" >> .env

dotenvx get --format shell
HELLO=World KEY=value
```
{: copy="echo \"HELLO=World\" > .env"}

This can be useful when combined with `env` on the command line.

```console
$ echo "console.log('Hello ' + process.env.KEY + ' ' + process.env.HELLO)" > index.js
env $(dotenvx get --format=shell) node index.js
Hello value World
```
{: copy="echo \"console.log('Hello ' + process.env.KEY + ' ' + process.env.HELLO)\" > index.js"}

or with `export`.

```console
$ echo "console.log('Hello ' + process.env.KEY + ' ' + process.env.HELLO)" > index.js
export $(dotenvx get --format=shell)
node index.js
Hello value World
```
{: copy="echo \"console.log('Hello ' + process.env.KEY + ' ' + process.env.HELLO)\" > index.js"}
