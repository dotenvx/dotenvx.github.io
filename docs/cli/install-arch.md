---
doc_type: cli
title: install --arch
description: Choose the architecture for the Dotenvx build.
permalink: "/docs/cli/install-arch/"
command: dotenvx install --arch
eyebrow: dotenvx install
eyebrow_href: "/docs/cli/install/"
---

Pass the target architecture, such as x86_64 or arm64, to --arch. For example, download an ARM64 build into a separate directory:

```console
$ dotenvx install --build default --arch arm64 --directory ./build/arm64
```
{: copy="dotenvx install --build default --arch arm64 --directory ./build/arm64"}

The default is your current architecture. When targeting another platform, --directory is required and must not overwrite the running executable.

Use [--os](/docs/cli/install-os/) to choose the operating system too. --arch cannot be combined with --id, --add, or --remove.
