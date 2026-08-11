---
title: Installing
description: Install dotenvx.
permalink: /docs/learn/installing/
layout: radar
redirect_from:
  - /docs/install/
  - /docs/install
  - /docs/armor/install/
  - /docs/armor/install
  - /docs/ops/install/
  - /docs/ops/install
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Installing"
  description="Install dotenvx."
  mark="↓_"
%}

<div class="armor-shell">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="curl">cURL</h2>

    {% capture install_curl %}
$ curl -sfS https://dotenvx.sh | sh
    {% endcapture %}
    {% include components/design-codeblock.html value=install_curl copy_text="curl -sfS https://dotenvx.sh | sh" %}

    <p class="design-paragraph"><a class="design-link" href="https://dotenvx.sh/install.sh">install.sh</a></p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="npm">NPM</h2>
    <p class="design-paragraph"><code class="design-code">dotenvx</code> is made with javascript – so use it just like <code class="design-code">dotenv</code> – as a drop-in replacement.</p>

    {% capture install_npm %}
$ npm install @dotenvx/dotenvx
    {% endcapture %}
    {% include components/design-codeblock.html value=install_npm copy_text="npm install @dotenvx/dotenvx" %}

    {% capture install_npm_js %}
// index.js
require('@dotenvx/dotenvx').config()
// or import '@dotenvx/dotenvx/config' if you're using esm

console.log(`Hello ${process.env.HELLO}`)
    {% endcapture %}
    {% include components/design-codeblock.html value=install_npm_js copy=false %}

    <p class="design-paragraph"><a class="design-link" href="https://www.npmjs.com/package/@dotenvx/dotenvx">npmjs.com</a></p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="windows">Windows</h2>

    {% capture install_winget %}
$ winget install dotenvx
    {% endcapture %}
    {% include components/design-codeblock.html value=install_winget copy_text="winget install dotenvx" %}

    <p class="design-paragraph"><a class="design-link" href="https://github.com/dotenvx/dotenvx/releases">releases</a> · <a class="design-link" href="https://github.com/dotenvx/releases/raw/main/latest/dotenvx-windows-amd64.zip">amd64</a> · <a class="design-link" href="https://github.com/dotenvx/releases/raw/main/latest/dotenvx-windows-x86_64.zip">x86_64</a> · unzip to extract dotenvx.exe</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Other</h2>

    <h3 class="design-list-title" id="brew">Brew</h3>
    <p class="design-paragraph">Install with <a class="design-link" href="https://brew.sh">brew</a>:</p>

    {% capture install_brew %}
# install with Homebrew and then use the dotenvx command
brew tap dotenvx/brew
brew trust dotenvx/brew
brew install dotenvx
    {% endcapture %}
    {% include components/design-codeblock.html value=install_brew copy=false %}

    <p class="design-paragraph">Find the <a class="design-link" href="https://github.com/dotenvx/homebrew-brew">dotenvx brew tap here</a>.</p>

    <h3 class="design-list-title" id="docker">Docker</h3>
    <p class="design-paragraph">We also provide a <a class="design-link" href="https://hub.docker.com/r/dotenv/dotenvx">docker image</a> for your convenience:</p>

    {% capture install_docker %}
docker run -it --rm -v $(pwd):/app dotenv/dotenvx help
docker run -it --rm -v $(pwd):/app dotenv/dotenvx run -- node index.js
    {% endcapture %}
    {% include components/design-codeblock.html value=install_docker copy=false %}

    <p class="design-paragraph">Or in any image:</p>

    {% capture install_docker_dockerfile %}
FROM node:latest
RUN echo "HELLO=World" > .env && echo "console.log('Hello ' + process.env.HELLO)" > index.js
RUN curl -sfS https://dotenvx.sh/install.sh | sh
CMD ["dotenvx", "run", "--", "echo", "Hello $HELLO"]
    {% endcapture %}
    {% include components/design-codeblock.html value=install_docker_dockerfile copy=false %}

    <h3 class="design-list-title" id="github">GitHub Releases</h3>
    <p class="design-paragraph">You can also download straight from <a class="design-link" href="https://github.com/dotenvx/dotenvx/releases">GitHub Releases</a>.</p>

    {% capture install_github %}
curl -L -o dotenvx.tar.gz "https://github.com/dotenvx/dotenvx/releases/latest/download/dotenvx-$(uname -s)-$(uname -m).tar.gz"
tar -xzf dotenvx.tar.gz
./dotenvx help
    {% endcapture %}
    {% include components/design-codeblock.html value=install_github copy=false %}

    <p class="design-paragraph">If you download manually you'll need to move the binary somewhere in your PATH.</p>

    <h3 class="design-list-title" id="heroku">Heroku Buildpack</h3>
    <p class="design-paragraph">For our Heroku friends, we have a <a class="design-link" href="https://github.com/dotenvx/heroku-buildpack-dotenvx">heroku buildpack</a>.</p>

    {% capture install_heroku %}
heroku buildpacks:add https://github.com/dotenvx/heroku-buildpack-dotenvx
    {% endcapture %}
    {% include components/design-codeblock.html value=install_heroku copy_text="heroku buildpacks:add https://github.com/dotenvx/heroku-buildpack-dotenvx" %}

    <p class="design-paragraph">The <code class="design-code">dotenvx</code> binary will be available to your deployment so that you can use it in your Procfile like so.</p>

    {% capture install_heroku_procfile %}
# Procfile
web: dotenvx run -- node index.js
    {% endcapture %}
    {% include components/design-codeblock.html value=install_heroku_procfile copy=false %}

    <h3 class="design-list-title" id="standalone">Standalone</h3>
    <p class="design-paragraph"><code class="design-code">dotenvx</code> is a standalone binary, so (if you want) you can just download it directly:</p>

    {% capture install_standalone %}
# download it to `./dotenvx`
curl -sfS --proto '=https' https://dotenvx.sh/$(uname)/$(uname -m).tgz | tar xz

# install it to `/usr/local/bin/dotenvx`
sudo install -m 755 dotenvx /usr/local/bin

# check it works
dotenvx help
    {% endcapture %}
    {% include components/design-codeblock.html value=install_standalone copy=false %}

    <p class="design-paragraph">Download a specific version:</p>

    {% capture install_standalone_version %}
# download version 0.6.9
curl -sfS --proto '=https' "https://dotenvx.sh/$(uname)/$(uname -m).tgz?version=v0.6.9" | tar xz

# check the version
./dotenvx --version
    {% endcapture %}
    {% include components/design-codeblock.html value=install_standalone_version copy=false %}

    <p class="design-paragraph">You can view available versions at <a class="design-link" href="https://github.com/dotenvx/releases/tree/main">github.com/dotenvx/releases</a>.</p>

    <h3 class="design-list-title" id="npm-local">Npm local</h3>
    <p class="design-paragraph">Use dotenvx locally as a cli in your node project.</p>

    {% capture install_npm_local %}
npm i @dotenvx/dotenvx --save
    {% endcapture %}
    {% include components/design-codeblock.html value=install_npm_local copy_text="npm i @dotenvx/dotenvx --save" %}

    {% capture install_npm_local_pkg %}
{
  "scripts": {
    "start": "./node_modules/.bin/dotenvx run -- node index.js"
  },
  "dependencies": {
    "@dotenvx/dotenvx": "^1.48.4"
  }
}
    {% endcapture %}
    {% include components/design-codeblock.html value=install_npm_local_pkg copy=false %}

    <h3 class="design-list-title" id="npm-global">Npm global</h3>
    <p class="design-paragraph">You can also install globally using npm's <code class="design-code">--global</code> flag.</p>

    {% capture install_npm_global %}
npm install @dotenvx/dotenvx --global
dotenvx help
    {% endcapture %}
    {% include components/design-codeblock.html value=install_npm_global copy=false %}

    <h3 class="design-list-title" id="npx">Npx</h3>
    <p class="design-paragraph">Or prefer to run as needed, uses <code class="design-code">npx</code>.</p>

    {% capture install_npx %}
npx @dotenvx/dotenvx help
    {% endcapture %}
    {% include components/design-codeblock.html value=install_npx copy_text="npx @dotenvx/dotenvx help" %}

    <h3 class="design-list-title" id="wget">Wget</h3>

    {% capture install_wget %}
wget -qO- https://dotenvx.sh | sh
    {% endcapture %}
    {% include components/design-codeblock.html value=install_wget copy_text="wget -qO- https://dotenvx.sh | sh" %}

    <p class="design-paragraph"><a class="design-link" href="https://github.com/dotenvx/dotenvx.sh/blob/main/install.sh">install.sh source</a></p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
