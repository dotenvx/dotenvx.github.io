---
layout: docs-cli
title: "--mask"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Inject masked values into a command.
permalink: /docs/cli/run-mask/
redirect_from:
  - /docs/ref/cli/run-mask/
  - /docs/ref/cli/run-mask
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
By default, up to the first six characters are visible.

```console
$ echo "SECRET=abcdefghijkl" > .env
$ echo "console.log(process.env.SECRET)" > index.js

$ dotenvx run --mask --quiet -- node index.js
abcdef******
```
{: copy="echo \"SECRET=abcdefghijkl\" > .env
echo \"console.log(process.env.SECRET)\" > index.js
dotenvx run --mask --quiet -- node index.js"}



Pass a number to control how many characters are visible.

```console
$ dotenvx run --mask 0 --quiet -- node index.js
************
```
{: copy="dotenvx run --mask 0 --quiet -- node index.js"}
