---
doc_type: cli
title: Native
description: Manage private keys in your OS secret store.
permalink: "/docs/cli/native/"
redirect_from:
- "/docs/ref/cli/native/"
- "/docs/ref/cli/native"
crumbs:
- label: Docs
  href: "/docs/introduction"
- label: CLI
  href: "/docs/cli"
options_title: Commands
options:
- title: native up
  href: "/docs/cli/native/up/"
- title: native down
  href: "/docs/cli/native/down/"
- title: native push
  href: "/docs/cli/native/push/"
- title: native pull
  href: "/docs/cli/native/pull/"
- title: native list
  href: "/docs/cli/native/list/"
- title: native show
  href: "/docs/cli/native/show/"
platforms:
- id: macos
  label: macOS
  format: cli
  code: "$ dotenvx native list"
  copy_text: dotenvx native list
- id: windows
  label: Windows
  format: cli
  code: "$ dotenvx native list"
  copy_text: dotenvx native list
- id: linux
  label: Linux
  format: cli
  code: "$ dotenvx native list"
  copy_text: dotenvx native list
command: dotenvx native
global_options: true
---

Native uses your operating system's secret store.

{% include components/design-choice-code.html
  items=page.platforms
  selected="macos"
  lines=1
  aria_label="Operating system"
%}

On Linux, `secret-tool` and an available Secret Service are required.

Requires the native build feature. Add it with [dotenvx install --add](/docs/cli/install-add/).
