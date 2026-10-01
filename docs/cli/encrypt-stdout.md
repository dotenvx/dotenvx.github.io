---
layout: docs-cli
title: "--stdout"
eyebrow: "dotenvx encrypt"
eyebrow_href: /docs/cli/encrypt/
description: Encrypt the contents of a .env file and send to stdout.
permalink: /docs/cli/encrypt-stdout/
redirect_from:
  - /docs/advanced/encrypt-stdout
  - /docs/advanced/encrypt-stdout/
  - /docs/ref/cli/encrypt-stdout
  - /docs/ref/cli/encrypt-stdout/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Encrypt
    href: /docs/cli/encrypt/
---

```console
$ echo "HELLO=World" > .env
dotenvx encrypt --stdout
#/-------------------[DOTENV_PUBLIC_KEY]--------------------/
#/            public-key encryption for .env files          /
#/       [how it works](https://dotenvx.com/encryption)     /
#/----------------------------------------------------------/
DOTENV_PUBLIC_KEY="034af93e93708b994c10f236c96ef88e47291066946cce2e8d98c9e02c741ced45"
# .env
HELLO="encrypted:BDqDBibm4wsYqMpCjTQ6BsDHmMadg9K3dAt+Z9HPMfLEIRVz50hmLXPXRuDBXaJi/LwWYEVUNiq0HISrslzQPaoyS8Lotg3gFWJTsNCdOWnqpjF2xNUX2RQiP05kAbEXM6MWVjDr"
```
{: copy="echo \"HELLO=World\" > .env"}

or send to a file:

```console
$ echo "HELLO=World" > .env
dotenvx encrypt --stdout > somefile.txt
```
{: copy="echo \"HELLO=World\" > .env"}
