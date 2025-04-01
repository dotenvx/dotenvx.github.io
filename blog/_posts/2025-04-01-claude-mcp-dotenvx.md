---
layout: blog
author: "Scott Motte – Mot"
title: "Claude MCP + Dotenvx"
image: "/assets/img/blog/blog-9.png"
excerpt: "Add Dotenvx as a Claude MCP Server."
---

<p class="text-center small">Add Dotenvx to Claude as an MCP Server.</p>

<video class="my-10 w-full rounded-md border border-zinc-200 dark:border-zinc-800" controls>
<source src="https://github.com/user-attachments/assets/5f974de0-1831-4ae7-a3c8-a724418863db" type="video/mp4">
your browser does not support the video tag
</video>

Dotenvx works with [Claude MCP](https://www.anthropic.com/news/model-context-protocol). Here's how to get it in your Claude.

## Step 1

Type `claude mcp add`.

```
$ claude mcp add
Add MCP Server

Choose a unique name for this server:

> dotenvx

```

## Step 2

For *Server Scope*, choose *User*.

```
Server Scope

Choose where this server will be available:

  
  Project (shared via .mcp.json)
  Local (private to you in this project)
> User (available in all your projects)

```

## Step 3

For *Transport Type*, choose *Stdio*.

```
Transport Type

Choose how Claude Code will connect to your MCP server:

> Stdio (command-line process)
  SSE (Server-Sent Events over HTTP)

```

## Step 4

Enter `npx @dotenvx/dotenvx` as the server command.

```
Server Command

Enter the full command to start your MCP server.

> npx @dotenvx/dotenvx

```

Confirm that. That's it!

Now you can ask Claude to *encrypt my .env file* and it will do it!

> Hey Claude, encrypt my .env file please.

## Bonus

Additionally, be sure to share [llms.txt](https://dotenvx.com/llms.txt) and [llms-full.txt](https://dotenvx.com/llms-full.txt) with Claude to make it smarter about all this.

Thanks for using Dotenvx.

---

If you enjoyed this post, please [share dotenvx with friends](https://github.com/dotenvx/dotenvx) or [star it on GitHub](https://github.com/dotenvx/dotenvx) to help spread the word.
