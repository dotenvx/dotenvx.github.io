---
doc_type: cli
title: install --build
description: Install a selected build without opening a browser.
permalink: "/docs/cli/install-build/"
command: dotenvx install --build
eyebrow: dotenvx install
eyebrow_href: "/docs/cli/install/"
---

Pass default, armor, or hyphen-separated feature IDs to select the build to install.

```console
$ dotenvx install --build default
```
{: copy="dotenvx install --build default"}

```console
$ dotenvx install --build armor
```
{: copy="dotenvx install --build armor"}

Use [--add](/docs/cli/install-add/) or [--remove](/docs/cli/install-remove/) to edit your current features instead.

You can combine --build with [--version](/docs/cli/install-version/), [--os](/docs/cli/install-os/), [--arch](/docs/cli/install-arch/), and [--directory](/docs/cli/install-directory/). It cannot be combined with --id, --add, or --remove.
