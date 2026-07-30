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

`/pricing` loads plan prices and limits from Radar at build time:

```
https://armor.dotenvx.com/public/plans
```

The Jekyll plugin `_plugins/plans.rb` fetches that JSON into `site.data.plans`. If the fetch fails, or the API payload is missing audit pricing fields, it falls back to committed `_data/plans.json`.

Plans are priced by **users** and **audit events** (decrypt trail). Armored keys are unlimited on every plan.

Override the URL when needed:

```
PLANS_API_URL=http://localhost:3000/public/plans JEKYLL_ENV=production bundle exec jekyll serve
```

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
