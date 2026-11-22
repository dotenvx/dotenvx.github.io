---
doc_type: cli
title: Prebuild
description: Check env files before a Docker build.
permalink: "/docs/cli/prebuild/"
redirect_from:
- "/docs/advanced/prebuild"
- "/docs/advanced/prebuild/"
- "/docs/ref/cli/prebuild"
- "/docs/ref/cli/prebuild/"
crumbs:
- label: Docs
  href: "/docs/introduction"
- label: CLI
  href: "/docs/cli"
options_title: Options
options:
- title: prebuild directory
  href: "/docs/cli/prebuild-directory/"
video: cli-prebuild
command: dotenvx prebuild
global_options: true
---

Deprecated. Use [`dotenvx protect --docker`](/docs/cli/protect-docker/) instead. The build check is unchanged; `prebuild` remains available with a deprecation warning.

```docker
# Dockerfile
RUN curl -fsS https://dotenvx.sh | sh

...

RUN dotenvx protect --docker
CMD ["dotenvx", "run", "--", "node", "index.js"]
```
{: copy="# Dockerfile"}

Requires the prebuild build feature. Add it with [dotenvx install --add](/docs/cli/install-add/).
