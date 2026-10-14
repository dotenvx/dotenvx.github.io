---
layout: docs-markdown
title: "Java"
social_title: "Encrypt a .env file in Java"
description: "Encrypt a .env file in Java with dotenvx, commit it safely, and inject its secrets at runtime."
icon: java
permalink: /docs/java/
redirect_from:
  - /docs/languages/java
  - /docs/languages/java/
  - /docs/secrets-in-java/
  - /docs/secrets-in-java
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


```java
public class Index {
  public static void main(String[] args) {
    String hello = System.getenv("HELLO");
    System.out.println("Hello " + hello);
  }
}
```

```console
$ dotenvx run -- java index.java
```
{: copy="dotenvx run -- java index.java"}
