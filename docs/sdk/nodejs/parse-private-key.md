---
title: parse privateKey
description: Decrypt source text using an explicit private key.
permalink: "/docs/sdk/nodejs/parse-private-key/"
redirect_from:
- "/docs/sdk/parse-private-key"
- "/docs/sdk/parse-private-key/"
- "/docs/advanced/parse-private-key"
- "/docs/advanced/parse-private-key/"
- "/docs/ref/sdk/parse-private-key"
- "/docs/ref/sdk/parse-private-key/"
doc_type: sdk
command: dotenvx.parse(source, { privateKey })
command_language: javascript
eyebrow: Node.js parse
eyebrow_href: "/docs/sdk/nodejs/parse/"
---

{% capture sdk_code_0 %}
{% raw %}
// index.js
const dotenvx = require('@dotenvx/dotenvx')
const src = 'HELLO="DOTENV-CIPHERTEXT-3-SECP256K1-AES256GCM-0321274c06-BCVESe5IG0eL8auTdgPHh8TOJUziz4y2pKLyYnFdxzfRiDr/L83zu4/DSYMn0V/t4RXN0LVe4JMq5ih36nyb3Lx3CVRmxjXc0zfj+XUVuHJbX4OL/g/aFEnBr6GqgRt7Vj4snUzN"'
const parsed = dotenvx.parse(src, { privateKey: 'DOTENV-PRIVATE-KEY-3-SECP256K1-63219facdc0e448b4958348de7973508dcf386bb6391ef74a583e030dea12ca7' })
console.log(`Hello ${parsed.HELLO}`)
{% endraw %}
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 language="javascript" %}

```console
$ node index.js
Hello World
```
{: copy="node index.js"}
