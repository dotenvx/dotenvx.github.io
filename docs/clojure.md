---
layout: docs-quickstart
title: "Clojure"
social_title: "Encrypt a .env file in Clojure"
description: "Encrypt a .env file in Clojure with dotenvx, commit it safely, and inject its secrets at runtime."
icon: clojure
permalink: /docs/clojure/
redirect_from:
  - /docs/secrets-in-clojure/
  - /docs/secrets-in-clojure
install_copy: "curl -sfS https://dotenvx.sh | sh"
encrypt_copy: "dotenvx encrypt"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt: |
  $ dotenvx encrypt
inject_lede: |
  Then inject your encrypted secrets at runtime with `dotenvx run`.
inject_copy: |
  (println "Hello" (System/getenv "HELLO"))
inject: |
  (println "Hello" (System/getenv "HELLO"))
inject_after_copy: |
  dotenvx run -- clojure -M index.clj
inject_after: |
  $ dotenvx run -- clojure -M index.clj
---

