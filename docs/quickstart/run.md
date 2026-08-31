---
title: Run Anywhere
description: dotenvx works the same across every language, framework, and platform. Simply preface your application process with dotenvx run --
permalink: /docs/quickstart/run/
layout: radar
redirect_from:
  - /docs/quickstarts/run
  - /docs/quickstarts/run/
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Run Anywhere"
  description="dotenvx works the same across every language, framework, and platform. Simply preface your application process with dotenvx run --"
  mark="run"
%}

<div class="armor-shell">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Node</h2>

    {% capture run_node %}
$ echo "HELLO=World" > .env
$ echo "console.log('Hello ' + process.env.HELLO)" > index.js

$ node index.js
Hello undefined

$ dotenvx run -- node index.js
Hello World
> :-D
    {% endcapture %}
    {% include components/design-codeblock.html value=run_node copy_text="dotenvx run -- node index.js" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Python</h2>

    {% capture run_python %}
$ echo "HELLO=World" > .env
$ echo 'import os;print("Hello " + os.getenv("HELLO", ""))' > index.py

$ dotenvx run -- python3 index.py
Hello World
    {% endcapture %}
    {% include components/design-codeblock.html value=run_python copy_text="dotenvx run -- python3 index.py" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">PHP</h2>

    {% capture run_php %}
$ echo "HELLO=World" > .env
$ echo '<?php echo "Hello {$_SERVER["HELLO"]}\n";' > index.php

$ dotenvx run -- php index.php
Hello World
    {% endcapture %}
    {% include components/design-codeblock.html value=run_php copy_text="dotenvx run -- php index.php" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Ruby</h2>

    {% capture run_ruby %}
$ echo "HELLO=World" > .env
$ echo 'puts "Hello #{ENV["HELLO"]}"' > index.rb

$ dotenvx run -- ruby index.rb
Hello World
    {% endcapture %}
    {% include components/design-codeblock.html value=run_ruby copy_text="dotenvx run -- ruby index.rb" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Go</h2>

    {% capture run_go %}
$ echo "HELLO=World" > .env
$ echo 'package main; import ("fmt"; "os"); func main() { fmt.Printf("Hello %s\n", os.Getenv("HELLO")) }' > main.go

$ dotenvx run -- go run main.go
Hello World
    {% endcapture %}
    {% include components/design-codeblock.html value=run_go copy_text="dotenvx run -- go run main.go" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Rust</h2>

    {% capture run_rust %}
$ echo "HELLO=World" > .env
$ echo 'fn main() {let hello = std::env::var("HELLO").unwrap_or("".to_string());println!("Hello {hello}");}' > src/main.rs

$ dotenvx run -- cargo run
Hello World
    {% endcapture %}
    {% include components/design-codeblock.html value=run_rust copy_text="dotenvx run -- cargo run" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Java</h2>

    {% capture run_java %}
$ echo "HELLO=World" > .env
$ echo 'public class Index { public static void main(String[] args) { System.out.println("Hello " + System.getenv("HELLO")); } }' > index.java

$ dotenvx run -- java index.java
Hello World
    {% endcapture %}
    {% include components/design-codeblock.html value=run_java copy_text="dotenvx run -- java index.java" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">.NET</h2>

    {% capture run_dotnet %}
$ dotnet new console -n HelloWorld -o HelloWorld
$ cd HelloWorld
$ echo "HELLO=World" > .env
$ echo 'Console.WriteLine($"Hello {Environment.GetEnvironmentVariable("HELLO")}");' > Program.cs

$ dotenvx run -- dotnet run
Hello World
    {% endcapture %}
    {% include components/design-codeblock.html value=run_dotnet copy_text="dotenvx run -- dotnet run" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Frameworks</h2>

    {% capture run_frameworks %}
$ dotenvx run -- next dev
$ dotenvx run -- npm start
$ dotenvx run -- bin/rails s
$ dotenvx run -- php artisan serve
    {% endcapture %}
    {% include components/design-codeblock.html value=run_frameworks copy=false %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Anywhere</h2>

    {% capture run_anywhere %}
# dotenvx works with any language or framework
# 1. create your application
# 2. create your .env file
# 3. preface its boot command with `dotenvx run --`
$ dotenvx run -- your-app-boot-command
    {% endcapture %}
    {% include components/design-codeblock.html value=run_anywhere copy_text="dotenvx run -- your-app-boot-command" %}

    {% include components/design-video.html video="quickstart-run" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
