---
layout: docs-cli
title: "--stdout"
eyebrow: "dotenvx decrypt"
eyebrow_href: /docs/cli/decrypt/
description: Decrypt the contents of an encrypted .env file and send to stdout.
permalink: /docs/cli/decrypt-stdout/
redirect_from:
  - /docs/advanced/decrypt-stdout
  - /docs/advanced/decrypt-stdout/
  - /docs/ref/cli/decrypt-stdout
  - /docs/ref/cli/decrypt-stdout/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Decrypt
    href: /docs/cli/decrypt/
---

```console
$ dotenvx decrypt --stdout
#/-------------------[DOTENV_PUBLIC_KEY]--------------------/
#/            public-key encryption for .env files          /
#/       [how it works](https://dotenvx.com/encryption)     /
#/----------------------------------------------------------/
DOTENV_PUBLIC_KEY="034af93e93708b994c10f236c96ef88e47291066946cce2e8d98c9e02c741ced45"
# .env
HELLO="World"
```
{: copy="dotenvx decrypt --stdout"}

or send to a file:

```console
$ dotenvx decrypt --stdout > somefile.txt
```
{: copy="dotenvx decrypt --stdout > somefile.txt"}
