---
title: safeLoad
description: Load while ignoring missing env files.
permalink: "/docs/sdk/php/safe-load/"
doc_type: sdk
command: "$dotenv->safeLoad()"
command_language: php
eyebrow: PHP
eyebrow_href: "/docs/sdk/php/"
---
Equivalent to load(ignore: ['MISSING_ENV_FILE']). Returns injected values and still reports other diagnostics or throws for fatal errors. It takes no arguments.

```php
<?php
$values = Dotenvx\Dotenvx::createImmutable(__DIR__)->safeLoad();
```
