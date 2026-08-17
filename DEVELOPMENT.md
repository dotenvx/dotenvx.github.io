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

Plans are priced by **users**, **audit retention**, and included monthly audited accesses. Armored keys are unlimited on every plan; audit usage beyond the included allowance is billed as an overage.

#### Search

`/search` is the dedicated search page. Press `/` on any public page to open the search modal. Both load `/search.json` (generated at build from pages + posts). Tune ranking in `_data/search.yml` (`boost`, `aliases`). Optional per-page front matter: `search_boost`, `search_aliases`, or `search: false`. Committed queries send a production Umami `Search` event (`query`, `source`, `results`) — Events → Properties.

## Other Notes

To change the kramdown rouge theme:

```
gem install rouge
rougify help style
rougify style monokai > _sass/rouge-theme.scss
```
