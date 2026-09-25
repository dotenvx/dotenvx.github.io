---
title: AI Dotenv
description: "The next chapter of .env–starting with encryption."
permalink: /ai
layout: radar
body_class: home-page about-page
---

<style>
  .about-page .design-hero-content { display: flex; align-items: center; justify-content: center; }
  .about-page .about-manifesto { padding-bottom: 0; }
  .ecosystem-project { display: inline-flex; align-items: center; gap: .5rem; }
  .ecosystem-project img { width: 1.5rem; height: 1.5rem; }
  .ecosystem-project-marks { display: inline-flex; align-items: center; flex: none; }
  .ecosystem-project-marks img { display: block; }
  .ecosystem-project-marks img + img { margin-left: -.65rem; transform: translateY(-.2rem); }
  .ecosystem-table .design-table td { text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }
  .ecosystem-table .design-table thead th:not(:first-child) { text-align: right; }
  .ecosystem-total { font-weight: 700; border-top: 2px solid var(--design-line); }
  .ecosystem-note { margin-top: 1rem; }
  .about-manifesto .design-prose { margin: 0; }
  .about-marks { position: relative; width: var(--hero-illustration-width); height: var(--hero-illustration-width); flex: none; }
  .about-marks { perspective: 700px; }
  .about-joined-slab { display: block; width: 100%; height: 100%; pointer-events: none; transform-origin: 50% 60%; transition: transform 220ms cubic-bezier(.2, .8, .2, 1), filter 220ms ease; }
  .about-joined-hit { pointer-events: fill; cursor: pointer; outline: none; }
  .about-joined-hit:focus-visible { stroke: var(--design-mid); stroke-width: 2; }
  @media (hover: hover) {
    .about-joined-slab:has(.about-joined-hit:hover) { transform: translateY(1px) translateZ(-4px) rotateX(1.5deg); filter: brightness(.98); }
  }
  .about-joined-slab.is-pressed, .about-joined-slab.is-pressed:has(.about-joined-hit:hover) { transform: translateY(3px) translateZ(-12px) rotateX(4deg); filter: brightness(.94); transition-duration: 80ms; }
  @media (prefers-reduced-motion: reduce) {
    .about-joined-slab { transition: none; }
    .about-joined-slab:has(.about-joined-hit:hover), .about-joined-slab.is-pressed, .about-joined-slab.is-pressed:has(.about-joined-hit:hover) { transform: none; }
  }
</style>

{% capture about_visual %}
  <div class="about-marks">
    {% include components/joined-slab.html %}
  </div>
{% endcapture %}


<div class="home-sections">
  <section class="design-hero-section home-hero" aria-label="Agentic Dotenv">
    <div class="armor-shell">
      {% include components/design-hero.html compact=true name_heading=true name=page.title description=page.description content=about_visual %}
    </div>
  </section>


  <article class="radar-section about-manifesto" aria-label="The next chapter of .env">
    <div class="armor-shell">
      {% capture about_essay %}
        <div class="design-prose">
          <p>A small file became part of how the world builds software. Now the way we build software is changing.</p>

          <p>Agents are reading repositories, writing code, and running applications. The configuration those workflows depend on needs to evolve with them.</p>

          <p>Dotenvx began by bringing encryption to .env. That gives us a foundation to build on: familiar files, protected values, and keys kept separate. The opportunity ahead is broader—helping humans and agents work with secrets safely, across languages, tools, and platforms.</p>

          <p>{% include components/design-link.html href="https://github.com/motdotla/dotenv" label="Dotenv - 20.5k ★" %} helped make .env familiar: a name, an equals sign, a value. Developers brought it into their projects. Frameworks adopted it. Tools learned to read it. Eventually, the convention became bigger than the library itself. Today, even <a href="https://nodejs.org/api/environment_variables.html#dotenv">Node.js includes .env support</a> and credits Dotenv with popularizing the format.</p>

          <p>That is how a de facto standard takes shape—through people choosing something simple enough to keep using.</p>

          <p>In the week of September 15–21, 2026, npm recorded <a href="https://api.npmjs.org/downloads/point/2026-09-15:2026-09-21/dotenv">130.9 million downloads of Dotenv</a> and <a href="https://api.npmjs.org/downloads/point/2026-09-15:2026-09-21/@dotenvx/dotenvx">8.8 million downloads of Dotenvx</a>. These include repeat installations and automated builds. Behind that activity are development workflows, build pipelines, and applications that depend on this small piece of infrastructure.</p>

          <p>That reach creates an opportunity. Improvements to a familiar foundation can travel through the ecosystem with it.</p>

          <p>Dotenvx is pursuing that opportunity by making secrets safer to handle while preserving the simplicity that made the format useful. Encrypted values can travel with code while the private key stays separate. Commit protection and output redaction add guardrails to the workflows people already use.</p>

          <p>As agents take on more of that work, we want to make those foundations stronger: deliberate access to secrets, safer defaults, and guardrails that help keep secrets from leaking. Encryption is the beginning of that work, with more to build together.</p>

          <p>We want to build that future in the open, across languages, platforms, and tools. The more widely this foundation is shared, the more people can benefit from improving it.</p>

          <p>We’re building that next chapter in the open. Use Dotenvx and help shape what comes next.</p>
          <p>Help your company advance this work through {% include components/design-link.html href="/corp" label="corporate support" %}.</p>
        </div>
      {% endcapture %}
      {% include components/design-content-width.html content=about_essay %}
    </div>
  </article>
  <section class="radar-section" id="ecosystem" aria-label="Ecosystem">
    <div class="armor-shell">
      {% capture ecosystem_content %}
        {% assign ecosystem_stars = 0 %}
        {% assign ecosystem_downloads = 0 %}
        {% capture ecosystem_rows %}
          <thead>
            <tr><th scope="col" aria-label="Project"></th><th scope="col">STARS</th><th scope="col">DOWNLOADS</th></tr>
          </thead>
          <tbody>
            {% assign ecosystem_projects = site.data.ecosystem.projects | sort: 'downloads' | reverse %}
            {% for project in ecosystem_projects %}
              {% if project.stars %}{% assign ecosystem_stars = ecosystem_stars | plus: project.stars %}{% endif %}
              {% assign ecosystem_downloads = ecosystem_downloads | plus: project.downloads %}
              {% capture star_label %}{% if project.stars == nil %}—{% elsif project.stars >= 1000 %}{{ project.stars | divided_by: 1000.0 | round: 1 }}k{% else %}{{ project.stars }}{% endif %}{% endcapture %}
              {% capture download_label %}{% if project.downloads >= 1000000000 %}{{ project.downloads | divided_by: 1000000000.0 | round: 1 }}b{% elsif project.downloads >= 1000000 %}{{ project.downloads | divided_by: 1000000.0 | round: 1 }}m{% elsif project.downloads >= 1000 %}{{ project.downloads | divided_by: 1000.0 | round: 1 }}k{% else %}{{ project.downloads }}{% endif %}{% endcapture %}
              {% assign project_url = project.url | default: project.repo %}
              <tr>
                <th scope="row"><span class="ecosystem-project"><span class="ecosystem-project-marks"><img src="{{ project.logo }}" width="24" height="24" alt="">{% if project.secondary_logo %}<img src="{{ project.secondary_logo }}" width="24" height="24" alt="">{% endif %}</span>{% include components/design-link.html href=project_url label=project.name %}</span></th>
                <td>{% if project.stars %}{% include components/design-link.html href=project.repo label=star_label %}{% else %}—{% endif %}</td>
                <td>{% include components/design-link.html href=project.downloads_source label=download_label %}</td>
              </tr>
            {% endfor %}
          </tbody>
          <tfoot>
            <tr class="ecosystem-total"><th scope="row">Total</th><td>≈{{ ecosystem_stars | divided_by: 1000.0 | round: 1 }}k</td><td>{{ ecosystem_downloads | divided_by: 1000000000.0 | round: 1 }}b</td></tr>
          </tfoot>
        {% endcapture %}
        {% capture ecosystem_table %}
          {% include components/design-table.html content=ecosystem_rows class="design-table-wrap--fill ecosystem-table" %}
        {% endcapture %}
        {% include components/design-card.html content=ecosystem_table class="pricing-summary-card" %}
        <p class="design-paragraph ecosystem-note text-center">as of September 2026</p>
      {% endcapture %}
      {% include components/design-content-width.html content=ecosystem_content %}
    </div>
  </section>
</div>

<script>
(() => {
  const slab = document.querySelector('[data-joined-slab]');
  if (!slab) return;
  const hit = slab.querySelector('.about-joined-hit');
  const release = () => slab.classList.remove('is-pressed');
  const changeTheme = () => window.__radarToggleTheme?.(hit);
  hit.addEventListener('click', changeTheme);
  hit.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    slab.classList.add('is-pressed');
    hit.setPointerCapture(event.pointerId);
  });
  ['pointerup', 'pointercancel', 'lostpointercapture', 'blur'].forEach(type => hit.addEventListener(type, release));
  hit.addEventListener('keydown', event => {
    if (event.key !== ' ' && event.key !== 'Enter') return;
    event.preventDefault();
    slab.classList.add('is-pressed');
  });
  hit.addEventListener('keyup', event => {
    if (event.key !== ' ' && event.key !== 'Enter') return;
    event.preventDefault();
    if (slab.classList.contains('is-pressed')) changeTheme();
    release();
  });
  window.addEventListener('blur', release);
})();
</script>
