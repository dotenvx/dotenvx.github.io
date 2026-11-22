---
title: createMutable
description: Create a loader that replaces existing environment values.
permalink: "/docs/sdk/php/create-mutable/"
doc_type: sdk
command: Dotenvx\Dotenvx::createMutable($paths = [])
command_language: php
eyebrow: PHP
eyebrow_href: "/docs/sdk/php/"
---
```php
<?php
use Dotenvx\Dotenvx;
$dotenv = Dotenvx::createMutable(__DIR__);
$values = $dotenv->load();
```
