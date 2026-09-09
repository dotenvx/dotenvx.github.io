---
title: "Dotenvx"
layout: radar
---

<style>
  /* Centered install choice — same arresting layout as /armor */
  .home-install-choice {
    width: 100%;
  }

  .home-install-choice .design-choice-current {
    min-height: 6.5rem;
    padding: 1.25rem 1.35rem;
  }

  .home-install-choice .design-btn[hidden],
  .home-install-choice [hidden] {
    display: none !important;
  }

  .home-install-you {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .home-install-code-copy {
    align-items: center;
    background: transparent;
    border: 0;
    cursor: pointer;
    display: inline-flex;
    font: inherit;
    justify-content: center;
    padding: 0;
  }

  .home-install-code-copy:hover .design-code,
  .home-install-code-copy:focus-visible .design-code {
    color: var(--design-ink) !important;
    outline: none;
  }

  .home-install-code-copy:focus-visible {
    outline: none;
  }

</style>

{% include components/home-hero2.html %}

{% include components/home-encrypt-commit-ship.html %}

{% include components/home-proof.html %}

{% include components/home-trust.html %}

<section class="radar-section" id="install" aria-label="Next step">
  <div class="armor-shell">
    <div class="home-cta">
      {% include components/design-cta-message.html
        class="!max-w-none !text-left"
        text="Once your secrets are in an encrypted git workflow, you'll wonder why you waited so long. It just feels so good."
      %}
      {% include components/home-install.html embedded=true %}
    </div>
  </div>
</section>
