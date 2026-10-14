---
layout: docs-markdown
title: "Clojure"
social_title: "Encrypt a .env file in Clojure"
description: "Encrypt a .env file in Clojure with dotenvx, commit it safely, and inject its secrets at runtime."
icon: clojure
permalink: /docs/clojure/
redirect_from:
  - /docs/secrets-in-clojure/
  - /docs/secrets-in-clojure
quickstart_pager: true
---

## Install

Get the Dotenvx CLI.

```console
$ curl -sfS https://dotenvx.sh | sh
```
{: copy="curl -sfS https://dotenvx.sh | sh"}

## Encrypt

Encrypt your .env file.

```console
$ dotenvx encrypt
```
{: copy="dotenvx encrypt"}

## Inject

Then inject your encrypted secrets at runtime with `dotenvx run`.


```clojure
(println "Hello" (System/getenv "HELLO"))
```

```console
$ dotenvx run -- clojure -M index.clj
```
{: copy="dotenvx run -- clojure -M index.clj"}
