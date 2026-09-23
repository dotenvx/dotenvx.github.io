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

#### Search

`/search` is the dedicated search page. Press `/` on any public page to open the search modal. Both load `/search.json` (generated at build from pages + posts). Tune ranking in `_data/search.yml` (`boost`, `aliases`). Optional per-page front matter: `search_boost`, `search_aliases`, or `search: false`. Committed queries send a production Umami `Search` event (`query`, `source`, `results`) — Events → Properties.

## Codeblock syntax highlighting

Use the shared component with an explicit language:

```liquid
{% include components/design-codeblock.html value=example language="javascript" %}
{% include components/design-codeblock.html value=env_example language="dotenv" %}
{% include components/design-codeblock.html value=terminal_example format="cli" %}
```

`format="cli"` highlights `$ ` commands (including backslash continuations), keeps
ordinary output neutral, and colors dotenvx status lines amber. Use `language="bash"`
for shell scripts without prompts. Omit the language for plain text. Unknown languages
also fall back to escaped plain text. `copy_text` still controls exactly what gets copied.

Choice-code items accept `language` and `format`; the choice include accepts defaults.
Quickstart front matter accepts matching fields such as `inject_language: python` or
`install_format: cli`. Markdown fences use Rouge and the same syntax palette.

The renderer in `_plugins/design_syntax.rb` and palette in `assets/css/design-syntax.css`
are mirrored in Radar (`lib/design_syntax.rb` and the syntax section at the end of
`app/assets/stylesheets/application.tailwind.css`). Keep both copies aligned. Dotenv
has a dedicated lexer for assignments, comments, multiline values, and interpolation.

Run `bundle exec ruby scripts/test-design-syntax.rb`, then `npm run build:css` and
`bundle exec jekyll build`. Preview `/docs/quickstart/`, `/docs/env-file/`, and
`/docs/cloudflare/` in both themes. Radar's `/design/codeblock` is the specimen gallery.
