## Development

Use production env for serve/build. Tailwind/PostCSS then match CI, and you avoid a `jekyll-postcss` development-mode socket bug with large CSS (`Unterminated string in JSON` / `Connection reset by peer`):

```
JEKYLL_ENV=production bundle exec jekyll serve --livereload --verbose --incremental
```

#### Production build

```
JEKYLL_ENV=production bundle exec jekyll build
```

#### Pricing plans

`/pricing` loads plan prices and limits from committed `_data/plans.json` (Pro audit retention is **5 days**).

Optionally sync from Radar by setting `PLANS_API_URL`:

```
PLANS_API_URL=https://armor.dotenvx.com/public/plans JEKYLL_ENV=production bundle exec jekyll serve
PLANS_API_URL=http://localhost:3000/public/plans JEKYLL_ENV=production bundle exec jekyll serve
```

Plans are priced by **users** and **audit retention**. Armored keys and audit log volume are unlimited on every plan.

#### To include /docs

GitHub Actions takes care of building the docs into the deploy.

Make sure you run `NODE_ENV='production' npm run build` on the `/docs` project and push that to main before the CI here runs.

## Other Notes

To change the kramdown rouge theme:

```
gem install rouge
rougify help style
rougify style monokai > _sass/rouge-theme.scss
```
