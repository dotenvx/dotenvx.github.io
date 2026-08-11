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
---
Native uses your operating system's secret store.

{% capture native_macos %}
$ dotenvx native # stored in your keychain
{% endcapture %}
{% capture native_windows %}
$ dotenvx native # stored in Credential Manager
{% endcapture %}
{% capture native_linux %}
$ dotenvx native # stored with secret-tool
{% endcapture %}
{% capture native_copy %}dotenvx native{% endcapture %}
{% capture native_panels %}
  {% include components/design-choice-code-panel.html
    id="macos"
    active=true
    code=native_macos
    copy_text=native_copy
  %}
  {% include components/design-choice-code-panel.html
    id="windows"
    code=native_windows
    copy_text=native_copy
  %}
  {% include components/design-choice-code-panel.html
    id="linux"
    code=native_linux
    copy_text=native_copy
  %}
{% endcapture %}
{% capture native_options %}
  {% include components/design-choice-option.html label="macOS" value="macos" selected=true %}
  {% include components/design-choice-option.html label="Windows" value="windows" %}
  {% include components/design-choice-option.html label="Linux" value="linux" %}
{% endcapture %}
{% include components/design-choice-code.html
  count=3
  selected="macos"
  lines=1
  aria_label="Operating system"
  panels=native_panels
  options=native_options
%}

On Linux, `secret-tool` and an available Secret Service are required.
