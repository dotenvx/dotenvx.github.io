## Development

Leave `JEKYLL_ENV` unset so Umami stays off:

```
npm install
bundle install
bin/dev
```

That starts Jekyll (`--livereload --verbose --incremental`) and a PostCSS watcher from `Procfile.dev`.

`assets/css/main.src.css` is the source. `npm run build:css` / `npm run watch:css` write `assets/css/main.css` (gitignored). We do **not** use `jekyll-postcss` — it passes the whole stylesheet on the CLI and fails with `Argument list too long` once the file is large.

#### Production build

CI and deploy use production env (Umami on, CSS minified):

```
npm ci
JEKYLL_ENV=production npm run build:css
JEKYLL_ENV=production bundle exec jekyll build
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

Use `layout: prose` for pages with a title, description, and ordinary Markdown body.
The layout renders the hero and wraps the body in `design-content-width design-prose`,
so paragraphs inherit the same typography as `design-paragraph`. Headings, links,
lists, and code use the existing prose styles. No paragraph includes or HTML wrappers
are needed. An empty body renders only the hero.

```markdown
---
layout: prose
title: Agentic Dotenv
description: "The dotenv you love–now ready for agents."
permalink: /agents
hero_visual: components/joined-slab-hero.html
---

This is paragraph 1.

This is paragraph 2 with **emphasis** and a [link](/docs).

## A heading

- A list item
- Another item
```

`hero_visual` is optional; it names an include for the illustration above the title.
Keep illustration markup and behavior in that include, leaving the page for writing.
See `agents.md` for a minimal example.

#### Markdown in docs

All docs content columns style ordinary Markdown paragraphs like `design-paragraph`,
including the existing spacing inside steps. Use plain paragraphs, backticks,
`**bold**`, and `[links](/docs)` in `docs-cli` and `docs-quickstart` page bodies.
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

By default, Copy copies the displayed code. For a transcript whose output should
not be copied, add a Kramdown attribute line immediately after the closing fence:

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

The renderer in `_plugins/design_syntax.rb` and palette in `assets/css/design-syntax.css`
are mirrored in Radar (`lib/design_syntax.rb` and the syntax section at the end of
`app/assets/stylesheets/application.tailwind.css`). Keep both copies aligned. Dotenv
has a dedicated lexer for assignments, comments, multiline values, and interpolation.

Run `bundle exec ruby scripts/test-design-syntax.rb` and
`bundle exec ruby scripts/test-design-codeblocks.rb`, then `npm run build:css` and
`bundle exec jekyll build`. Preview `/docs/quickstart/`, `/docs/env-file/`, and
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
