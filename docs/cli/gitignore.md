---
doc_type: cli
title: Gitignore
description: Append patterns to ignore files.
permalink: "/docs/cli/gitignore/"
redirect_from:
- "/docs/advanced/gitignore"
- "/docs/advanced/gitignore/"
- "/docs/ref/cli/gitignore"
- "/docs/ref/cli/gitignore/"
crumbs:
- label: Docs
  href: "/docs/introduction"
- label: CLI
  href: "/docs/cli"
options_title: Options
options:
- title: gitignore --pattern
  href: "/docs/cli/gitignore-pattern/"
video: cli-gitignore
command: dotenvx gitignore
global_options: true
---

```console
$ dotenvx gitignore
▣ ignored .env* (.gitignore)
```
{: copy="dotenvx gitignore"}

Requires the gitignore build feature. Add it with [dotenvx install --add](/docs/cli/install-add/).
