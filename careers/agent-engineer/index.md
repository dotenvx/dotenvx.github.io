---
title: Agent Engineer
description: "Build the future of secrets security for humans and agents."
permalink: /careers/agent-engineer/
layout: radar
body_class: home-page careers-page
---

<div class="home-sections">
  <section class="design-hero-section home-hero" aria-label="Agent Engineer">
    <div class="armor-shell">
      {% include components/design-hero.html
        compact=true
        secondary=true
        name_heading=true
        name=page.title
        description=page.description
      %}
    </div>
  </section>

  <section class="radar-section" aria-label="The opportunity">
    <div class="armor-shell">
      {% capture engineering_content %}
        <div class="design-prose">
          <p><a href="/careers/">← All opportunities</a></p>
          <p>Agents are becoming part of everyday development. They need access to tools and services, but every new workflow creates questions about which secrets they can use and where those secrets might end up. Help us build clear, practical answers into Dotenvx.</p>

          <h2>The work</h2>
          <p>Build integrations that help agents use secrets safely. Improve the CLI and SDKs, develop workflows for controlled access and human approval, and make secret redaction reliable across agent tools.</p>
          <p>Work through real developer workflows from setup to production. Reproduce failures, write tests for security boundaries, and ship improvements that are easy to understand and adopt. Use agents in your own engineering work and bring what you learn back into the product.</p>
          <p><a href="/ai">Read about the next chapter of .env →</a></p>

          <h2>What you bring</h2>
          <p>You build and ship developer tools, care about security, and can explain the tradeoffs in your code. You're comfortable working with command-line tools, APIs, and agent integrations, and you test what happens when things go wrong.</p>

          <h2>Let's talk</h2>
          <p>Show us something you've built and tell us how you'd make it safer for agents to work with secrets. Code, open-source contributions, and concrete examples are welcome.</p>
        </div>
        {% include components/design-btn.html
          label="Get in touch"
          href="/contact"
          data_umami_event="Careers Agent Engineer Contact button"
        %}
      {% endcapture %}
      {% include components/design-content-width.html content=engineering_content %}
    </div>
  </section>
</div>
