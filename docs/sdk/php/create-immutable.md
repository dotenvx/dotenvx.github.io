---
title: createImmutable
description: Create a loader that preserves existing environment values.
permalink: "/docs/sdk/php/create-immutable/"
doc_type: sdk
command: Dotenvx\Dotenvx::createImmutable($paths = [])
command_language: php
eyebrow: PHP
eyebrow_href: "/docs/sdk/php/"
---
```php
<?php
use Dotenvx\Dotenvx;
$dotenv = Dotenvx::createImmutable(__DIR__);
$values = $dotenv->load();
```
