# Open Graph images

`bundle exec jekyll build` and `bin/dev` automatically generate 1200 × 630 PNGs
for posts using `layout: blog`. Run `npm ci` first. Restart an existing dev
server once after adding or changing the Ruby generator plugin.

The template uses the site's dark colors and bundled Inter/Symbols fonts.
It reads the post's title, author, and date; no image front matter is needed.
Long titles shrink to fit, and a build fails rather than silently clipping a title.

Images are cached under `.jekyll-cache/og-images/` and copied into
`_site/assets/img/og/`. Their URLs contain a hash of their content, template,
fonts, and dependencies, so a changed card gets a fresh URL. Nothing is fetched
from the network during generation. Open Graph, Twitter, and structured data
receive the same generated image through Jekyll SEO Tag.

To use a custom image on one post:

```yaml
og_image: false
image: /assets/img/my-custom-card.png
```

To override only the card's title:

```yaml
og_image:
  title: A shorter social title
```

To reuse the centered logo template on another page:

```yaml
og_image:
  template: logo
  logo: _includes/logos/supermemory.svg
  alt: Supermemory
```

Logo templates use a local SVG with a viewBox. `currentColor` becomes the
site's warm cream color; existing explicit brand colors are preserved. The
card contains only the centered logo on a dark background.

Edit `scripts/build-og-images.mjs` to change the design. `npm run test:og`
checks generation, dimensions, long/symbol titles, caching, and URL changes.
The Jekyll plugin lives in `_plugins/og_images.rb`.
