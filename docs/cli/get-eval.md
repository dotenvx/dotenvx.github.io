---
layout: docs-cli
title: "--format eval"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Return an eval-ready shell formatted response of all key/value pairs in a .env file.
permalink: /docs/cli/get-eval/
redirect_from:
  - /docs/advanced/get-eval
  - /docs/advanced/get-eval/
  - /docs/ref/cli/get-eval
  - /docs/ref/cli/get-eval/
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

dotenvx get --format eval
HELLO="World"
KEY="value"
```
{: copy="echo \"HELLO=World\" > .env"}

Note that this exports newlines and quoted strings.

This can be useful for more complex .env values (spaces, escaped characters, quotes, etc) combined with `eval` on the command line.

```console
$ echo "console.log('Hello ' + process.env.KEY + ' ' + process.env.HELLO)" > index.js
eval $(dotenvx get --format=eval) node index.js
Hello value World
```
{: copy="echo \"console.log('Hello ' + process.env.KEY + ' ' + process.env.HELLO)\" > index.js"}

Be careful with `eval` as it allows for arbitrary execution of commands. Prefer `dotenvx run --` but in some cases `eval` is a sharp knife that is useful to have.
