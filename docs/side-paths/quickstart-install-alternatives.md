---
layout: docs-side-path
title: More installation options
description: Install the Dotenvx CLI with npm, Homebrew, or winget.
permalink: /docs/quickstart/install-alternatives/
markdown_url: /docs/quickstart/install-alternatives.md
parent_url: /docs/quickstart/#install
parent_title: Quickstart
side_path_kind: Alternative
---

Choose an installation method for your machine.

## npm

Install the CLI globally to use the dotenvx commands in this quickstart:

```console
$ npm install --global @dotenvx/dotenvx
```
{: copy="npm install --global @dotenvx/dotenvx"}

## Homebrew

```console
$ brew tap dotenvx/brew
$ brew trust dotenvx/brew
$ brew install dotenvx
```
{: copy="brew tap dotenvx/brew
brew trust dotenvx/brew
brew install dotenvx"}

## Windows

```console
$ winget install dotenvx
```
{: copy="winget install dotenvx"}

## Check your installation

Open a new terminal and check that Dotenvx is available:

```console
$ dotenvx --version
```
{: copy="dotenvx --version"}

Continue with [Encrypt](/docs/quickstart/#encrypt), or see [all installation options](/docs/install/).
