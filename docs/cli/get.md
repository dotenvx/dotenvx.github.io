---
doc_type: cli
title: Get
description: Read resolved environment variable values.
permalink: "/docs/cli/get/"
redirect_from:
- "/docs/ref/cli/get/"
- "/docs/ref/cli/get"
crumbs:
- label: Docs
  href: "/docs/introduction"
- label: CLI
  href: "/docs/cli"
options_title: Options
options:
- title: get --file
  href: "/docs/cli/get-key-f/"
- title: get --keys-file
  href: "/docs/cli/get-key-fk/"
- title: get --env
  href: "/docs/cli/get-key-env/"
- title: get --overload
  href: "/docs/cli/get-key-overload/"
- title: get --strict
  href: "/docs/cli/get-key-strict/"
- title: get --ignore
  href: "/docs/cli/get-key-ignore/"
- title: get --convention
  href: "/docs/cli/get-convention/"
- title: get --token
  href: "/docs/cli/get-token/"
- title: get --all
  href: "/docs/cli/get-all/"
- title: get --pretty-print
  href: "/docs/cli/get-pretty-print/"
- title: get --format
  href: "/docs/cli/get-format/"
- title: get KEY
  href: "/docs/cli/get-key/"
- title: get KEY -f
  href: "/docs/cli/get-key-f/"
- title: get KEY -f directory
  href: "/docs/cli/get-key-f-directory/"
- title: get KEY --convention=nextjs
  href: "/docs/cli/get-key-convention-nextjs/"
- title: get (json)
  href: "/docs/cli/get-json/"
- title: get --format shell
  href: "/docs/cli/get-shell/"
- title: get --format eval
  href: "/docs/cli/get-eval/"
- title: get --format eval-export
  href: "/docs/cli/get-eval-export/"
- title: get --all --pretty-print
  href: "/docs/cli/get-all-pretty-print/"
command: dotenvx get
global_options: true
---

```console
$ dotenvx get HELLO
World
```
{: copy="dotenvx get HELLO"}

Select multiple keys by separating them with spaces, or quote glob patterns to keep your shell from expanding them:

```console
$ dotenvx get HELLO PORT
```
{: copy="dotenvx get HELLO PORT"}

```console
$ dotenvx get 'PUBLIC*' 'VITE_*'
```
{: copy="dotenvx get 'PUBLIC*' 'VITE_*'"}
