---
layout: docs-cli
title: Native
description: Move private keys into your OS secret store.
permalink: /docs/cli/native/
redirect_from:
  - /docs/ref/cli/native/
  - /docs/ref/cli/native
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
options_title: Commands
options:
  - title: "native up"
    href: /docs/cli/native/up/
  - title: "native down"
    href: /docs/cli/native/down/
  - title: "native push"
    href: /docs/cli/native/push/
  - title: "native pull"
    href: /docs/cli/native/pull/
platforms:
  - id: macos
    label: macOS
    code: "$ dotenvx native"
    copy_text: dotenvx native
  - id: windows
    label: Windows
    code: "$ dotenvx native"
    copy_text: dotenvx native
  - id: linux
    label: Linux
    code: "$ dotenvx native"
    copy_text: dotenvx native
---
Native uses your operating system's secret store.

{% include components/design-choice-code.html
  items=page.platforms
  selected="macos"
  lines=1
  aria_label="Operating system"
%}

On Linux, `secret-tool` and an available Secret Service are required.
