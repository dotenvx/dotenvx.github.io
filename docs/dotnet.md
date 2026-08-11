---
layout: docs-quickstart
title: ".NET"
social_title: "Encrypt a .env file in .NET"
description: "Encrypt a .env file in .NET with dotenvx, commit it safely, and inject its secrets at runtime."
icon: dotnet
permalink: /docs/dotnet/
redirect_from:
  - /docs/secrets-in-dotnet/
  - /docs/secrets-in-dotnet
install_copy: "curl -sfS https://dotenvx.sh | sh"
encrypt_copy: "dotenvx encrypt"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt: |
  $ dotenvx encrypt
inject_lede: |
  Then inject your encrypted secrets at runtime with `dotenvx run`.
inject_copy: |
  var hello = Environment.GetEnvironmentVariable("HELLO");
  Console.WriteLine($"Hello {hello}");
inject: |
  var hello = Environment.GetEnvironmentVariable("HELLO");
  Console.WriteLine($"Hello {hello}");
inject_after_copy: |
  dotenvx run -- dotnet run
inject_after: |
  $ dotenvx run -- dotnet run
---

