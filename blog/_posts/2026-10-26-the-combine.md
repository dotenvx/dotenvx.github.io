---
layout: blog
author: "Scott Motte"
title: "Making .env: The Combine"
excerpt: "There’s never been more opportunity, there’s never been more uncertainty."
image: "https://github.com/user-attachments/assets/40d76d16-5bd5-4c6b-a52f-67cb770e4f1b"
---

<a href="https://github.com/user-attachments/assets/40d76d16-5bd5-4c6b-a52f-67cb770e4f1b"><img src="https://github.com/user-attachments/assets/40d76d16-5bd5-4c6b-a52f-67cb770e4f1b" alt="Farm machinery in a field with mountains in the distance."></a>

That’s my grandfather, standing atop his combine, farming his land. The combine changed farming. That’s three men there doing the work of what used to be twenty. Software is having this moment.

One person can accomplish what once required many. And more code is being written than ever because of it.

[Dotenv](https://npmjs.com/dotenv) is somewhat of a yardstick for this. In December ’25 it was doing 300 million installs a month. Today, [750 million](https://npm.chart.dev/dotenv). That’s insane growth for a mature fully-distributed project.

Maybe you feel like me - excited but also unsettled, like the whole engineering discipline is completely changing. Where do you set your feet? What do you hold fast to? Every week a new model, new tool, new way to build.. it’s kind of a lot right now.

**There’s never been more opportunity, there’s never been more uncertainty.**

I don’t know what software engineering looks like in 10 years, but I know what we’re going to keep working on. We started with one simple idea, separate secrets from code. Then we made it possible for secrets to travel encrypted alongside code with [Dotenvx](https://dotenvx.com). And now we’re working to keep secrets separate from agents.

So much is changing, but some things are worth carrying with us. I want .env to be one of them. Something old but somehow new. Still the file you know, with a future ahead of it.

That’s what we’re working on. And that’s what I’ll be writing to you about (a few times a month) as we make .env for this new world.

---

**Dotenv 18: Fast Parser and CLI**

Dotenv now has an opt-in fast parser and its own CLI. Enable fast mode in your app, or run a command with dotenv straight from your terminal. It’s even faster than Node’s native parser.

{% include components/design-codeblock.html value="$ npx dotenv run --fast -- node index.js" copy_text="npx dotenv run --fast -- node index.js" format="cli" %}

<a href="https://dotenvx.com/blog/2026/09/28/dotenv-fast.html#usage"><img src="https://github.com/user-attachments/assets/ef7aceb7-e19f-4012-a06e-59bd13688de1" alt="Watch Scott demo Dotenv fast mode in 1 minute 10 seconds"></a>

[Watch the demo · 1:10](https://dotenvx.com/blog/2026/09/28/dotenv-fast.html#usage)

[Read about Dotenv 18](https://dotenvx.com/blog/2026/09/28/dotenv-fast.html)

**New: Dotenvx Armor ⛨**

Out of private beta for 3 months now, Armor lets security teams control who can decrypt encrypted .env files, share access without sharing private keys, and audit who accessed what and when. Dotenvx remains free and open source. Dotenvx Armor gives security teams the controls they need.

[See Pricing](https://dotenvx.com/pricing)

