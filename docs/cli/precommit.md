---
doc_type: cli
title: Precommit
description: Check staged env files before committing.
permalink: "/docs/cli/precommit/"
redirect_from:
- "/docs/advanced/precommit"
- "/docs/advanced/precommit/"
- "/docs/ref/cli/precommit"
- "/docs/ref/cli/precommit/"
crumbs:
- label: Docs
  href: "/docs/introduction"
- label: CLI
  href: "/docs/cli"
options_title: Options
options:
- title: precommit --install
  href: "/docs/cli/precommit-install/"
- title: precommit --uninstall
  href: "/docs/cli/precommit-uninstall/"
- title: precommit directory
  href: "/docs/cli/precommit-directory/"
video: cli-precommit
command: dotenvx precommit
global_options: true
---

Check staged env files before committing.

```console
$ dotenvx precommit
```
{: copy="dotenvx precommit"}

Requires the precommit build feature. Add it with [dotenvx install --add](/docs/cli/install-add/).
