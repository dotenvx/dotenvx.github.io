## Development

Leave `JEKYLL_ENV` unset so Umami stays off:

```
npm install
bundle install
bin/dev
```

That starts Jekyll with live reload.

The main design is the default for every public page. `_layouts/default.html`
contains the shared shell; `assets/css/main.css` contains the shared styles,
including docs components. Edit these files directly: there is no CSS compilation
or Tailwind dependency. Newsletter forms also use
`assets/css/newsletter-signup.css`.

`_plugins/main_site.rb` prepares Markdown content, page headings, docs frames,
blog posts, and Markdown exports. `/v2/` URLs remain redirects to the public pages.
Shared content components are still used by docs, pricing, and Markdown exports.
Docs inherit the homepage’s responsive column layout; quickstart explicitly uses
`main_layout: two-columns`. Table styles belong to their component classes rather
than a docs-specific page wrapper.

CLI references target the Rust implementation for Dotenvx 3.0 in
`../forge/dotenvx-cli/src/cli.rs` and `../forge/dotenvx-cli/src/commands/`.
Check those command definitions and their build features when documenting options.
Do not restore commands or flags from the older JavaScript CLI.

SDK references also target the implementations in `../forge/`: `dotenvx-nodejs`,
`next-env`, `dotenvx-ruby`, `python-dotenvx`, `dotenvx-go`, `dotenvx-rust`, and
`phpdotenvx`. Use adapter source and TypeScript declarations to check exported
methods, options, return values, and environment mutation. README examples can
lag the implementation. Rust primitives live in `../forge/dotenvx-primitives`.

#### Production build

CI and deploy use production env (Umami on):

```
npm ci
JEKYLL_ENV=production bundle exec jekyll build
bundle exec ruby scripts/test-seo.rb
```

#### Pricing plans

`/pricing` loads plan prices and limits from committed `_data/plans.json` (Solo audit retention is **5 days**).

Optionally sync from Radar by setting `PLANS_API_URL`:

```
PLANS_API_URL=https://armor.dotenvx.com/public/plans bundle exec jekyll serve
PLANS_API_URL=http://localhost:3000/public/plans bundle exec jekyll serve
```

Plans are priced by **users**, **audit retention**, and included monthly audited accesses. Armored keys are unlimited on every plan; additional usage is disclosed per 1,000 events at $0.20 on Solo, $0.10 on Team, and $0.025 on Business, charged only for complete blocks of 1,000 extra events. Collection timing and payment mechanics are not yet defined. This repository contains public copy only; it does not implement billing.

#### Writing Markdown pages

Ordinary Markdown pages inherit the default layout; no `layout` front matter is
needed. Supply a title and description. The renderer generates the main heading
from the title, so start body sections at `##`.

```markdown
---
title: Agentic Dotenv
description: "The dotenv you love–now ready for agents."
permalink: /agents/
---

This is paragraph 1.

This is paragraph 2 with **emphasis** and a [link](/docs/).

## A heading

- A list item
- Another item
```

Optional `main_layout` values are `single`, `two-columns`, `columns` (the
default), and `wide`. Docs use `doc_type: cli`, `custody`, or `side-path` when
specialized command, custody, or parent-page metadata is needed. These are content
types, not separate layouts.

#### Markdown in docs

All docs content columns style ordinary Markdown paragraphs like `design-paragraph`,
including the existing spacing inside steps. Use plain paragraphs, backticks,
`**bold**`, and `[links](/docs)` in docs page bodies.
Use `## Heading` and `### Subheading` for section headings; they inherit the docs
heading styles. To preserve a specific link target, put `{: #reference}` on the
line immediately below the heading. Otherwise, an anchor is generated from its text.

Hand-built guides can keep their interactive examples and step layout while writing
the step text in Markdown:

```liquid
{% capture step_content %}
## Install

Get the Dotenvx CLI.

This is another paragraph with a [link](/docs/install/).
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
```

Keep Markdown at the left margin: four leading spaces mean an indented code block.
For text inside a custom HTML container, add `markdown="block"` to that container
(including nested containers such as `<details>`). Use fenced code blocks for editable examples with copy controls and highlighting.
Keep choice components for tabs and codeblock includes for dynamically supplied code.

#### Search

`/search` is the dedicated search page. Press `/` on any public page to open the search modal. Both load `/search.json` (generated at build from pages + posts). Tune ranking in `_data/search.yml` (`boost`, `aliases`). Optional per-page front matter: `search_boost`, `search_aliases`, or `search: false`. Committed queries send a production Umami `Search` event (`query`, `source`, `results`) — Events → Properties.

## Codeblock syntax highlighting

Use ordinary Markdown fences. They render the same styled, highlighted codeblock
and copy button as the Liquid component:

````markdown
```ruby
env "KEY"
```
````

Show interactive shell commands in `console` fences with a `$ ` prompt on each
command, across all pages and blog posts. Keep continuation lines unprompted.
By default, Copy copies the displayed code, so always supply command-only copy
text without prompts or output immediately after the closing fence:

````markdown
```console
$ dotenvx encrypt
◈ encrypted (.env)
```
{: copy="dotenvx encrypt"}
````

`console` (also `cli` or `shell-session`) highlights `$ ` commands and their
backslash continuations, keeps ordinary output neutral, and colors dotenvx status
lines amber. Use `bash` for shell scripts without prompts, `dotenv` for .env files,
and `text` for plain output. Unknown languages fall back to escaped plain text.

Optional fence attributes:

- `{: copy="false"}` hides the copy button.
- `{: .design-codeblock--nowrap}` keeps long lines horizontally scrollable.
- `{: label="Example output"}` supplies an accessible label.
- Combine attributes on one line as needed.

Copy text can span lines inside its quotes. Escape embedded double quotes as
`\"`; escape closing braces as `\}`; other backslashes stay literal. For example:

````markdown
```console
$ git add .env
$ git commit -m "encrypt .env"
```
{: copy="git add .env
git commit -m \"encrypt .env\""}
````

For dynamic or reused examples, the existing component still works:

```liquid
{% include components/design-codeblock.html value=example language="javascript" %}
{% include components/design-codeblock.html value=transcript format="cli" copy_text=commands %}
```

Choice-code items and quickstart front matter retain their existing `language`,
`format`, and copy settings. `_plugins/design_codeblock.rb` shares the HTML renderer
between fences and includes, including fences rendered through `markdownify` in steps.
Restart Jekyll after changing this plugin, and clear its Markdown cache with
`bundle exec jekyll clean` when updating renderers (or build with `--disable-disk-cache`).

The renderer in `_plugins/design_syntax.rb` and token styling in `assets/css/main.css`
are mirrored in Radar (`lib/design_syntax.rb` and the syntax section at the end of
`app/assets/stylesheets/application.tailwind.css`). Keep both copies aligned. Dotenv
has a dedicated lexer for assignments, comments, multiline values, and interpolation.

Run `bundle exec ruby scripts/test-design-syntax.rb` and
`bundle exec ruby scripts/test-design-codeblocks.rb`, then `bundle exec jekyll build`. Preview `/docs/quickstart/`, `/docs/env-file/`, and
`/docs/cloudflare/` in both themes. Radar's `/design/codeblock` is the specimen gallery.

## Search engine metadata

Every public HTML page needs a descriptive `title`, a page-specific `description`
(or a blog `excerpt`), and one main `h1`. The shared head supplies canonical URLs,
Open Graph and Twitter cards, JSON-LD, and RSS discovery. `seo_title` optionally
sets the complete search title without changing the visible heading;
`social_title` can separately customize sharing copy.

Docs automatically receive contextual search titles and linked breadcrumbs from
existing parent pages, `crumbs`, and `eyebrow_href`. Keep those links pointed at
canonical pages. Use `noindex: true` for utility pages; the SEO generator also
excludes these from the sitemap. Redirects should use `redirect_to` or
`redirect_from`, with each old URL defined once and pointing to its final page.
Do not add generated timestamps as `last_modified_at`; use actual content changes.

Validate a production build (also enforced before deployment in CI):

```sh
JEKYLL_ENV=production bundle exec jekyll build
bundle exec ruby scripts/test-seo.rb
```

The check covers every indexable page, title and canonical uniqueness, descriptions,
headings, social metadata, valid JSON-LD, breadcrumb destinations, sitemap coverage,
and robots rules. An optional first argument selects another build directory.

## Side paths

Side paths are optional Markdown pages linked from a guide. Each has a normal
URL and works without JavaScript. Create a page with
`doc_type: side-path`, `title`, `description`, `permalink`, `parent_url`,
`parent_title`, and `side_path_kind` (`Alternative` or `Troubleshooting`) in its
front matter. Write its body as ordinary Markdown, including existing codeblock
attributes for copy text and package managers.

Link to it from a guide:

```markdown
[**Not using Armor?** Alternative →](/docs/nextjs/share-private-key/){: .side-path}

[**Seeing encrypted text?** Troubleshoot →](/docs/nextjs/encrypted-text/){: .side-path .side-path--troubleshooting}
```

Use “Alternative →” for alternative paths and “Troubleshoot →” for fixes.

Keep the attribute on the same line as the link so it applies to the link, not
the surrounding paragraph. Use `{: .side-path-inline}` for a link inside prose.
Side paths are ordinary linked pages in the main layout. Package-manager choices
stay synchronized across docs pages.

### Next.js Markdown export

The Jekyll build exports `docs/nextjs.md` to `/docs/nextjs.md` alongside the HTML guide. `_plugins/raw_markdown_exports.rb` removes front matter and styling attributes, labels package-manager examples, converts browser previews to text, and makes internal links absolute. Code examples are preserved. The three Next.js side paths are also exported under `/docs/nextjs/*.md`. Links between these four pages point to their Markdown exports, preserving section anchors. Other internal links stay on HTML pages. Deployment-variable components become dotenv examples.

Run `bundle exec ruby scripts/test_raw_markdown_exports.rb` to check the export.

The reusable `components/docs-agent-button.html` takes `prompt` and `markdown_url` parameters and uses the consistent label “Onboard your coding agent.” On docs pages, set `agent_prompt` and `markdown_url` in front matter to show it in the hero. The button copies the prompt followed by “Fetch <absolute Markdown URL> and follow it.” Currently enabled only for Next.js.

### Newsletter signup

The newsletter page, blog index, and article footer share `_includes/components/newsletter-signup.html`.
The form posts to `https://armor.dotenvx.com/public/newsletter/subscribe` with
`email`, `source` (`newsletter`, `blog`, or `blog-post`), and an empty `website` honeypot.
Armor sends a confirmation email; subscribers enter the newsletter list only
when they confirm. The source is stored on the confirmed subscriber.

Deploy the matching `radar` backend changes before deploying these forms.
The endpoint must allow POST requests from `https://dotenvx.com` and
`https://www.dotenvx.com`. Local signup submissions still target production;
use the Armor request specs to test without sending real emails.

### Agent documentation indexes

`llms.txt` is the curated, curl-first index of current documentation. Keep its
links and first install command aligned with the current site.

`/llms-full.txt` is generated during the build by `_plugins/llms_exports.rb`,
called from the main Markdown export hook. It combines the index, current
product pages, and current docs from their resolved Markdown exports. Historical
blog posts and changelog entries remain linked separately. Edit the source pages
rather than the generated file in `_site`.

Run `bundle exec ruby scripts/test_llms_exports.rb` and `bundle exec jekyll build`
to verify the indexes.
