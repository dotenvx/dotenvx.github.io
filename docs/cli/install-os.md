---
doc_type: cli
title: install --os
description: Choose the operating system for the Dotenvx build.
permalink: "/docs/cli/install-os/"
command: dotenvx install --os
eyebrow: dotenvx install
eyebrow_href: "/docs/cli/install/"
---

Pass the target operating system, such as linux or darwin, to --os. For example, download a Linux build into a separate directory:

```console
$ dotenvx install --build default --os linux --directory ./build/linux
```
{: copy="dotenvx install --build default --os linux --directory ./build/linux"}

The default is your current operating system. When targeting another platform, --directory is required and must not overwrite the running executable.

Use [--arch](/docs/cli/install-arch/) to choose the architecture too. --os cannot be combined with --id, --add, or --remove.
