---
layout: docs-markdown
title: "Kotlin"
social_title: "Encrypt a .env file in Kotlin"
description: "Encrypt a .env file in Kotlin with dotenvx, commit it safely, and inject its secrets at runtime."
icon: kotlin
permalink: /docs/kotlin/
redirect_from:
  - /docs/secrets-in-kotlin/
  - /docs/secrets-in-kotlin
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

```kotlin
fun main() {
  val hello = System.getenv("HELLO") ?: ""
  println("Hello $hello")
}
```

```console
$ kotlinc index.kt -include-runtime -d index.jar

$ dotenvx run -- java -jar index.jar
```
{: copy="kotlinc index.kt -include-runtime -d index.jar
dotenvx run -- java -jar index.jar"}
