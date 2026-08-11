---
layout: docs-quickstart
title: "Kotlin"
social_title: "Encrypt a .env file in Kotlin"
description: "Encrypt a .env file in Kotlin with dotenvx, commit it safely, and inject its secrets at runtime."
icon: kotlin
permalink: /docs/kotlin/
redirect_from:
  - /docs/secrets-in-kotlin/
  - /docs/secrets-in-kotlin
install_copy: "curl -sfS https://dotenvx.sh | sh"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt_copy: "dotenvx encrypt"
encrypt: |
  $ dotenvx encrypt
inject_lede: "Then inject your encrypted secrets at runtime with `dotenvx run`."
inject_copy: |
  fun main() {
    val hello = System.getenv("HELLO") ?: ""
    println("Hello $hello")
  }
inject: |
  fun main() {
    val hello = System.getenv("HELLO") ?: ""
    println("Hello $hello")
  }
inject_after_copy: |
  kotlinc index.kt -include-runtime -d index.jar
  dotenvx run -- java -jar index.jar
inject_after: |
  $ kotlinc index.kt -include-runtime -d index.jar

  $ dotenvx run -- java -jar index.jar
---
