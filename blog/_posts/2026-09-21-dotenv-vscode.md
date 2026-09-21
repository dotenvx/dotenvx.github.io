---
layout: blog
author: "Scott Motte"
title: "Dotenv for VS Code: 1.0 and beyond"
excerpt: "The official dotenv extension is back, with a 1.0 release focused on keeping secrets out of sight while you edit your .env files."
---

We're back to work on [Dotenv Official](https://marketplace.visualstudio.com/items?itemName=dotenv.dotenv-vscode), our VS Code extension. After a long stretch on 0.x, we've graduated it to **1.0** and kept going.

A lot is changing about how we write code. Agents do more of the typing. But editing a .env file is still something many of us do ourselves: paste in an API key, change a database URL, or add a variable for a new service.

That puts secrets right on your screen. Open the wrong tab during a screen share and they're there for everyone to see.

The extension's job is simple: **keep secrets out of sight while you work in your editor.** Reveal them when you need them, then get back to work. That's the focus of 1.0 and the releases that followed.

## Open your .env without the flash

Auto-cloaking has been part of the extension for years. But a limitation of VS Code's native editor meant secrets could briefly flash before the extension could mask them when opening a file or switching tabs.

For 1.0, we worked around that limitation by building our own Dotenv Editor. It masks values before the editor becomes visible. Open your .env and the names are readable, while the values stay hidden.

<img src="https://github.com/user-attachments/assets/53d25529-ab04-4c5d-8a74-ae6cb39b93cf" alt="Opening a dotenv file with values cloaked and toggling their visibility" loading="lazy">

Click **Toggle auto-cloaking** to reveal or hide values. Switching tabs hides them again. Editing, find and replace, multiple cursors, undo, and redo still work. Cloaking only changes what you see; copying a value copies its actual text.

We've also added cloaking for Docker Compose environment values. YAML uses the native editor, so it doesn't have the same no-flash behavior as the Dotenv Editor.

## Complete names. Reveal when needed.

Start typing process.env. and choose a variable from your dotenv files. Suggestions show the source filenames and keep values masked.

<img src="https://github.com/user-attachments/assets/ad2b730e-d32f-4573-acd8-f7491bf48e25" alt="Autocompleting an environment variable with its source file shown" loading="lazy">

Already have a variable in your code? Hover over it to see its source, then use **Reveal value** or **Hide value** in the popup.

<img src="https://github.com/user-attachments/assets/f4441d8d-8765-4849-b947-6ce36412ca03" alt="Peeking at an environment variable from source code using the reveal control" loading="lazy">

The latest releases add support for `import { env } from 'node:process'`, including aliases, plus Julia, Erlang, Swift, and Clojure. Nested dotenv files are discovered too, with lookups scoped to the source file's directory and its parents up to the workspace root.

## Still your .env file

You can keep working with the .env files you already have. Syntax highlighting keeps names, values, comments, and quoted strings easy to read. The new editor also highlights numeric values.

<img src="https://github.com/user-attachments/assets/f276e078-c60e-4cb2-9664-f6750d8387c9" alt="Syntax highlighting for dotenv variable names, values, and comments" loading="lazy">

## Encrypted files, too

If you use dotenvx encryption, the latest releases also let you hover over an encrypted: value and click **Decrypt value**. The file stays encrypted, and the displayed plaintext clears when you hide it, leave the popup, or switch tabs.

<img src="https://github.com/user-attachments/assets/ba5ec15b-1be8-40b1-902d-116fdbf81591" alt="Decrypting an encrypted value in the Dotenv Editor without changing the file" loading="lazy">

This feature needs the [dotenvx CLI](/install) installed locally, a saved file in a trusted workspace, and the matching private key available locally. You don't need encryption or the CLI to use the extension's cloaking, completion, and syntax highlighting.

## Try it

[Install or update Dotenv Official](https://marketplace.visualstudio.com/items?itemName=dotenv.dotenv-vscode) to **1.5.2 or later**. You can find the full release history in the [changelog](https://github.com/dotenvx/dotenv-vscode/blob/master/CHANGELOG.md).

As more of our coding moves to agents, the moments we spend editing secrets ourselves still deserve care. Dotenv for VS Code is back, past 1.0, and focused on making that everyday task a little safer.
