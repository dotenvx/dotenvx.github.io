module.exports = {
  darkMode: 'class',
  content: [
    // Jekyll rewrites generated Markdown in _site on every rebuild.
    './*.{html,md}',
    './{_includes,_layouts,_posts}/**/*.{html,md}',
    './{about,armor,blog,careers,docs,legal,members,opensource,pricing-old,privacy,search,terms}/**/*.{html,md}',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
}
