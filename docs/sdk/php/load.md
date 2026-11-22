---
title: load
description: Load values into the process environment and PHP superglobals.
permalink: "/docs/sdk/php/load/"
doc_type: sdk
command: "$dotenv->load()"
command_language: php
eyebrow: PHP
eyebrow_href: "/docs/sdk/php/"
---
Returns the injected values. Updates putenv(), $_ENV, and $_SERVER. Named arguments are strict, ignore (diagnostic codes), convention, environment, keyFiles, and resolveReferences. References default to false. Strict diagnostics throw RuntimeException before injection. Policy-marked secrets are redacted from buffered PHP output.

```php
<?php
$values = Dotenvx\Dotenvx::createImmutable(__DIR__)->load(strict: true);
```
