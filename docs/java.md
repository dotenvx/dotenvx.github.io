---
layout: docs-quickstart
title: "Java"
social_title: "Encrypt a .env file in Java"
description: "Encrypt a .env file in Java with dotenvx, commit it safely, and inject its secrets at runtime."
icon: java
permalink: /docs/java/
redirect_from:
  - /docs/secrets-in-java/
  - /docs/secrets-in-java
install_copy: "curl -sfS https://dotenvx.sh | sh"
encrypt_copy: "dotenvx encrypt"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt: |
  $ dotenvx encrypt
inject_lede: |
  Then inject your encrypted secrets at runtime with `dotenvx run`.
inject_copy: |
  public class Index {
    public static void main(String[] args) {
      String hello = System.getenv("HELLO");
      System.out.println("Hello " + hello);
    }
  }
inject: |
  public class Index {
    public static void main(String[] args) {
      String hello = System.getenv("HELLO");
      System.out.println("Hello " + hello);
    }
  }
inject_after_copy: |
  dotenvx run -- java index.java
inject_after: |
  $ dotenvx run -- java index.java
---

