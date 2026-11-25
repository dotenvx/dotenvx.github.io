---
doc_type: cli
title: install
main_title: "$ dotenvx install"
description: Add or remove features from your Dotenvx installation.
permalink: "/docs/cli/install/"
command: dotenvx install
options:
- title: install --add
  href: "/docs/cli/install-add/"
- title: install --remove
  href: "/docs/cli/install-remove/"
- title: install --build
  href: "/docs/cli/install-build/"
- title: install --version
  href: "/docs/cli/install-version/"
- title: install --directory
  href: "/docs/cli/install-directory/"
- title: install --os
  href: "/docs/cli/install-os/"
- title: install --arch
  href: "/docs/cli/install-arch/"
- title: install --id
  href: "/docs/cli/install-id/"
- title: install --hostname
  href: "/docs/cli/install-hostname/"
global_options: true
---

Use [--add](/docs/cli/install-add/) or [--remove](/docs/cli/install-remove/) to change features while preserving your current version and other installed features.

Add Armor:

```console
$ dotenvx install --add armor
```
{: copy="dotenvx install --add armor"}

Remove Armor:

```console
$ dotenvx install --remove armor
```
{: copy="dotenvx install --remove armor"}

Repeat --add or --remove, or pass comma-separated feature IDs, to change multiple features.

For a custom installation, choose a [build](/docs/cli/install-build/), [version](/docs/cli/install-version/), or [destination directory](/docs/cli/install-directory/). See the options below for platform overrides and install requests.
