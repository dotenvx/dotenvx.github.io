---
title: Changelog
social_title: Changelog
image: "/assets/img/og-image-changelog.png"
permalink: /changelog/
layout: radar
---

<style>
  .changelog-index {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    max-width: 36rem;
  }

  .changelog-index .design-list-items li {
    color: var(--design-body, var(--design-ink));
    font-family: var(--design-font-sans);
    font-size: 1em;
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 1.45;
  }

  /* Two-line ascii — taller than single-line legal/pricing so top padding matches */
  .changelog-design-hero .design-hero-visual {
    min-height: 11rem;
  }

  .changelog-hero-ascii {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    min-height: inherit;
    width: 100%;
  }

  .changelog-hero-ascii-art {
    color: var(--design-ink);
    font-family: var(--design-font-mono);
    font-size: clamp(0.95rem, 2vw, 1.35rem);
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.2;
    margin: 0;
    text-align: center;
    user-select: none;
    white-space: pre;
  }

  @media (min-width: 900px) {
    .changelog-design-hero .design-hero-visual {
      min-height: 23rem;
    }

    .changelog-hero-ascii {
      height: 100%;
      min-height: inherit;
    }
  }
</style>

{% capture changelog_hero_visual %}
  <div class="changelog-hero-ascii" aria-hidden="true">
    <pre class="changelog-hero-ascii-art">●────●────●────●
v1   v2   v3   v4</pre>
  </div>
{% endcapture %}

<div class="changelog-page">
  {% include components/design-hero.html
    class="changelog-design-hero"
    eyebrow="Company"
    title="Changelog"
    description="Check back often. We're working hard still on Dotenvx and Armor."
    visual=changelog_hero_visual
  %}

  <section class="radar-section">
    <div class="armor-shell">
      <nav class="changelog-index" data-changelog-index aria-label="Changelog by month"></nav>
    </div>
  </section>

  <section class="radar-section" aria-label="Install dotenvx">
    <div class="armor-shell">
      {% include components/design-cta-message.html
        text="From here, the fastest next step is installing dotenvx."
      %}
    </div>
  </section>
</div>

<script type="application/json" id="changelog-data">
{{ site.data.changelog | jsonify }}
</script>

<script>
  (() => {
    const indexRoot = document.querySelector('[data-changelog-index]')
    const dataEl = document.getElementById('changelog-data')
    if (!indexRoot || !dataEl) return

    let entries = []
    try {
      entries = JSON.parse(dataEl.textContent || '[]')
    } catch (_) {
      return
    }

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]

    const monthValue = (monthKey) => {
      const year = Number(monthKey.slice(0, 4))
      const month = Number(monthKey.slice(5, 7))
      return year * 12 + month
    }

    const formatMonthLabel = (monthKey) => {
      const year = monthKey.slice(0, 4)
      const monthIndex = Number(monthKey.slice(5, 7)) - 1
      return `${monthNames[monthIndex] || monthKey} ${year}`
    }

    const formatRangeLabel = (startKey, endKey) => {
      if (startKey === endKey) return formatMonthLabel(startKey)

      const startYear = startKey.slice(0, 4)
      const endYear = endKey.slice(0, 4)
      const startName = monthNames[Number(startKey.slice(5, 7)) - 1] || startKey
      const endName = monthNames[Number(endKey.slice(5, 7)) - 1] || endKey

      if (startYear === endYear) return `${startName} – ${endName} ${startYear}`
      return `${startName} ${startYear} – ${endName} ${endYear}`
    }

    const groups = new Map()

    entries.forEach((entry) => {
      const date = entry.date || ''
      let summary = (entry.summary || '').replace(/\s+/g, ' ').trim()
      if (summary) summary = summary.charAt(0).toUpperCase() + summary.slice(1)
      if (!date || !summary) return

      const [year, month] = date.split('-')
      if (!year || !month) return

      const monthKey = `${year}-${month}`
      if (!groups.has(monthKey)) groups.set(monthKey, [])
      groups.get(monthKey).push({
        title: summary,
        milestone: entry.milestone === true,
        url: entry.url || ''
      })
    })

    const monthKeys = Array.from(groups.keys())
    const SPARSE_MAX = 2
    const MERGE_MAX_ITEMS = 6
    const MERGE_MAX_MONTHS = 6
    const buckets = []
    let sparse = null

    const flushSparse = () => {
      if (!sparse) return
      buckets.push(sparse)
      sparse = null
    }

    monthKeys.forEach((monthKey, index) => {
      const items = groups.get(monthKey)
      // Newest month always gets its own section (e.g. "August 2026")
      const isSparse = index > 0 && items.length <= SPARSE_MAX

      if (!isSparse) {
        flushSparse()
        buckets.push({ keys: [monthKey], items: items.slice() })
        return
      }

      if (!sparse) {
        sparse = { keys: [monthKey], items: items.slice() }
        return
      }

      const nextCount = sparse.items.length + items.length
      const newest = sparse.keys[0]
      const nextSpan = monthValue(newest) - monthValue(monthKey) + 1
      const canMerge = nextCount <= MERGE_MAX_ITEMS && nextSpan <= MERGE_MAX_MONTHS

      if (!canMerge) {
        flushSparse()
        sparse = { keys: [monthKey], items: items.slice() }
        return
      }

      sparse.keys.push(monthKey)
      sparse.items.push(...items)
    })
    flushSparse()

    const frag = document.createDocumentFragment()

    buckets.forEach((bucket) => {
      const newestKey = bucket.keys[0]
      const oldestKey = bucket.keys[bucket.keys.length - 1]
      const list = document.createElement('div')
      list.className = 'design-list'

      const title = document.createElement('p')
      title.className = 'design-list-title'
      title.textContent = formatRangeLabel(oldestKey, newestKey)
      list.appendChild(title)

      const ul = document.createElement('ul')
      ul.className = 'design-list-items'
      bucket.items.forEach((item) => {
        const li = document.createElement('li')
        if (item.url) {
          const link = document.createElement('a')
          link.className = item.milestone ? 'design-link design-link--milestone' : 'design-link'
          link.href = item.url
          if (/^https?:\/\//.test(item.url)) {
            link.target = '_blank'
            link.rel = 'noopener noreferrer'
          }
          link.textContent = item.title
          li.appendChild(link)
        } else if (item.milestone) {
          const mark = document.createElement('span')
          mark.className = 'design-link--milestone'
          mark.textContent = item.title
          li.appendChild(mark)
        } else {
          li.textContent = item.title
        }
        ul.appendChild(li)
      })
      list.appendChild(ul)
      frag.appendChild(list)
    })

    indexRoot.replaceChildren(frag)
  })()
</script>
