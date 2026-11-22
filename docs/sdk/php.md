---
title: PHP
description: Load encrypted environment values with the PHP SDK.
permalink: "/docs/sdk/php/"
icon: php
---

{% assign sdk = site.data.install_sdks_v2 | where: 'name', 'PHP' | first %}
## Package

[dotenvx/phpdotenvx]({{ sdk.package_url }})

## Install

Use [PIE](https://php.github.io/pie/) for the native extension and Composer for the PHP package.

{% assign install_commands = sdk.command | newline_to_br | split: '<br />' %}
{% capture install_display %}{% for command in install_commands %}$ {{ command | strip }}
{% endfor %}{% endcapture %}
{% include components/design-codeblock.html value=install_display format='cli' copy_text=sdk.command %}

## Usage

Load the `.env` file alongside `index.php` before reading variables in your app.

```php
<?php

require __DIR__ . '/vendor/autoload.php';

Dotenvx\Dotenvx::createImmutable(__DIR__)->safeLoad();
```

See the [PHP quickstart](/docs/php/) for the full encryption workflow.
## Reference

- [createImmutable](/docs/sdk/php/create-immutable/)
- [createMutable](/docs/sdk/php/create-mutable/)
- [load](/docs/sdk/php/load/)
- [safeLoad](/docs/sdk/php/safe-load/)

Stored-key custody uses a compatible Dotenvx CLI with sdk and the required provider feature on PATH. Matching environment keys and local .env.keys do not require remote custody.
