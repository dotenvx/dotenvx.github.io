---
doc_type: cli
title: install --version
description: Choose the Dotenvx version to install.
permalink: "/docs/cli/install-version/"
command: dotenvx install --version
eyebrow: dotenvx install
eyebrow_href: "/docs/cli/install/"
---

Pass a version number to --version. For example, install version 0.1.0 with the default build:

```console
$ dotenvx install --build default --version 0.1.0
```
{: copy="dotenvx install --build default --version 0.1.0"}

Replace 0.1.0 with the version you want. Without --build, the command uses the browser-based install flow.

--version cannot be combined with --id, --add, or --remove.
