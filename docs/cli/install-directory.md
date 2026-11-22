---
doc_type: cli
title: install --directory
description: Choose the directory where Dotenvx is installed.
permalink: "/docs/cli/install-directory/"
command: dotenvx install --directory
eyebrow: dotenvx install
eyebrow_href: "/docs/cli/install/"
---

Pass a destination directory to --directory. For example, install the default build into ./bin:

```console
$ dotenvx install --build default --directory ./bin
```
{: copy="dotenvx install --build default --directory ./bin"}

Without --directory, Dotenvx installs alongside the currently running executable.

Use a separate destination directory when downloading a build for another operating system or architecture. See [--os](/docs/cli/install-os/) and [--arch](/docs/cli/install-arch/).
