---
title: "Pricing"
image: "/assets/img/og-image-pricing.png"
layout: radar
---

<div class="pricing-page">
  <section class="radar-hero pricing-hero">
    <div class="radar-shell">
      <p class="radar-kicker pricing-hero-kicker">Professional security</p>
      <h1 class="radar-title pricing-hero-title">Pricing</h1>
      <p class="radar-lede pricing-hero-lede">Price by people and audit. Unlimited armored keys.</p>
    </div>
  </section>

  {% assign members_feature = site.data.plans.features | where: "id", "members" | first %}
  {% assign audit_events_feature = site.data.plans.features | where: "id", "audit_events" | first %}
  {% assign audit_retention_feature = site.data.plans.features | where: "id", "audit_retention" | first %}
  {% assign armored_keys_feature = site.data.plans.features | where: "id", "armored_keys" | first %}

  <section class="radar-section">
    <div class="radar-shell">
      <div class="pricing-plan-grid">
        {% for plan in site.data.plans.plans %}
          {% case plan.id %}
            {% when "pro" %}
              {% assign border_classes = "pricing-plan--first" %}
            {% when "team" %}
              {% assign border_classes = "pricing-plan--mid" %}
            {% when "business" %}
              {% assign border_classes = "pricing-plan--mid" %}
            {% else %}
              {% assign border_classes = "pricing-plan--last" %}
          {% endcase %}
          {% include components/pricing-plan-card.html plan=plan border_classes=border_classes %}
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="radar-section">
    <div class="radar-shell pricing-why">
      <h2 class="radar-section-title pricing-center">Why Armor?</h2>
      <p class="radar-section-lede pricing-center-lede">
        Armor keeps your private decryption keys armored off device. Every decrypt is an audit event—so you know who accessed what, when. Your encrypted environment files stay in code. Your private keys stay under guard.
      </p>

      <div class="pricing-flow">
        <div class="radar-card pricing-flow-card">
          <p class="pricing-flow-label">Dotenvx</p>
          <h3 class="pricing-flow-title">Encrypted .env file</h3>
          <p class="pricing-flow-copy">Commit ciphertext safely with your application.</p>
        </div>
        <div class="pricing-flow-op" aria-hidden="true">+</div>
        <div class="radar-card pricing-flow-card pricing-flow-card--accent">
          <p class="pricing-flow-label pricing-flow-label--mark">Armor ⛨</p>
          <h3 class="pricing-flow-title">Armored private key ⛨</h3>
          <p class="pricing-flow-copy">Stored off device, managed by policy, separate from code.</p>
        </div>
        <div class="pricing-flow-op" aria-hidden="true">
          <span class="pricing-flow-op-desktop">→</span>
          <span class="pricing-flow-op-mobile">↓</span>
        </div>
        <div class="radar-card pricing-flow-card">
          <p class="pricing-flow-label">Runtime</p>
          <h3 class="pricing-flow-title">Decrypt + audit</h3>
          <p class="pricing-flow-copy">Secrets resolve only with an authorized key—and every access is logged.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="radar-section">
    <div class="radar-shell">
      <h2 class="radar-section-title pricing-center">Compare capabilities across plans.</h2>
    </div>
  </section>

  <section class="radar-section">
    <div class="radar-shell pricing-compare-shell">
      <h2 class="radar-section-title">Access &amp; Identity</h2>
      <div class="radar-panel pricing-table-wrap">
        <table class="pricing-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Pro</th>
              <th>Team</th>
              <th>Business</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Login with GitHub</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
            </tr>
            <tr>
              <td>Automation Tokens</td>
              <td class="pricing-empty">—</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
            </tr>
            <tr>
              <td>Users</td>
              <td>{{ members_feature.values.pro }}</td>
              <td>{{ members_feature.values.team }}</td>
              <td>{{ members_feature.values.business }}</td>
              <td>{{ members_feature.values.enterprise }}</td>
            </tr>
            <tr>
              <td>Armored Keys</td>
              <td>{{ armored_keys_feature.values.pro }}</td>
              <td>{{ armored_keys_feature.values.team }}</td>
              <td>{{ armored_keys_feature.values.business }}</td>
              <td>{{ armored_keys_feature.values.enterprise }}</td>
            </tr>
            <tr>
              <td>Rotations Daily Limit</td>
              <td>10</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="radar-section">
    <div class="radar-shell pricing-compare-shell">
      <h2 class="radar-section-title">Audit &amp; Trust</h2>
      <div class="radar-panel pricing-table-wrap">
        <table class="pricing-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Pro</th>
              <th>Team</th>
              <th>Business</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Decrypt Audit Trail</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
            </tr>
            <tr>
              <td>Audit Events / mo</td>
              <td>{{ audit_events_feature.values.pro }}</td>
              <td>{{ audit_events_feature.values.team }}</td>
              <td>{{ audit_events_feature.values.business }}</td>
              <td>{{ audit_events_feature.values.enterprise }}</td>
            </tr>
            <tr>
              <td>Audit Retention</td>
              <td>{{ audit_retention_feature.values.pro }}</td>
              <td>{{ audit_retention_feature.values.team }}</td>
              <td>{{ audit_retention_feature.values.business }}</td>
              <td>{{ audit_retention_feature.values.enterprise }}</td>
            </tr>
            <tr>
              <td>Access Alerts</td>
              <td class="pricing-empty">—</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
            </tr>
            <tr>
              <td>SIEM / Log Export</td>
              <td class="pricing-empty">—</td>
              <td class="pricing-empty">—</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="radar-section">
    <div class="radar-shell pricing-compare-shell">
      <h2 class="radar-section-title">Customer Support</h2>
      <div class="radar-panel pricing-table-wrap">
        <table class="pricing-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Pro</th>
              <th>Team</th>
              <th>Business</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Billing Method</td>
              <td>Annual</td>
              <td>Monthly</td>
              <td>Monthly</td>
              <td>Flexible</td>
            </tr>
            <tr>
              <td>Payment Method</td>
              <td>Card</td>
              <td>Card</td>
              <td>Card</td>
              <td>Flexible</td>
            </tr>
            <tr>
              <td>Ticket Support</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
            </tr>
            <tr>
              <td>Slack Support</td>
              <td class="pricing-empty">—</td>
              <td class="pricing-empty">—</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
            </tr>
            <tr>
              <td>.env Expertise</td>
              <td class="pricing-empty">—</td>
              <td class="pricing-empty">—</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
            </tr>
            <tr>
              <td>Urgent Response SLA</td>
              <td class="pricing-empty">—</td>
              <td class="pricing-empty">—</td>
              <td class="pricing-empty">—</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
            </tr>
            <tr>
              <td>Priority Security Updates</td>
              <td class="pricing-empty">—</td>
              <td class="pricing-empty">—</td>
              <td class="pricing-empty">—</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
            </tr>
            <tr>
              <td>In-App Documentation</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
              <td>{% include components/checkmark-circle-green.html %}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="radar-section">
    <div class="radar-shell pricing-faq-shell">
      <h2 class="radar-section-title">FAQ</h2>
      <dl class="pricing-faq">
        {% include components/faq-question.html question="What counts as an audit event?" answer="Each authorized decrypt (keypair access) creates an audit event—who accessed which key, and when. That trail is how Armor turns decryption into trust. Plans include a monthly allotment of audit events and a retention window. Higher plans include more events, longer retention, and export options." %}
        {% include components/faq-question.html question="Are armored keys limited?" answer="No. Every plan includes unlimited armored keys. You pay for users and audit coverage—not for how many keys you protect." %}
        {% include components/faq-question.html question="How does encryption work?" answer='Dotenvx uses Elliptic Curve Integrated Encryption Scheme (ECIES) to encrypt each secret with a unique ephemeral key, while ensuring it can be decrypted using a long-term private key.<br/><br/>When you initialize encryption, a DOTENV_PUBLIC_KEY (encryption key) and DOTENV_PRIVATE_KEY (decryption key) are generated. The DOTENV_PUBLIC_KEY is used to encrypt secrets, and the DOTENV_PRIVATE_KEY is securely stored in your cloud secrets manager or .env.keys file.<br/><br/>Your encrypted .env file is then safely committed to code. Even if the file is exposed, secrets remain protected since decryption requires the separate DOTENV_PRIVATE_KEY, which is never stored alongside it. Read <a href="/dotenvx.pdf">the whitepaper</a> for more details.' %}
        {% include components/faq-question.html question="Is it safe to commit an encrypted .env file to code?" answer='Yes. Dotenvx uses ECIES public-key encryption, combining ephemeral key agreement with AES-256 secret encryption so that even if the encrypted .env file is exposed, its contents remain secure. The encryption keys themselves are protected using Secp256k1 elliptic curve cryptography, which is widely used for secure key exchange in technologies like Bitcoin.<br/><br/>This means that every secret in the .env file is encrypted with a unique AES-256 key, and that key is further encrypted using a public key (Secp256k1). Even if an attacker obtains the encrypted .env file, they would still need the corresponding private key—stored separately—to decrypt anything.<br/><br/>Breaking this encryption would require brute-forcing both AES-256 and elliptic curve cryptography, which is computationally infeasible with current technology. Read <a href="/dotenvx.pdf">the whitepaper</a> for more details.' %}
        {% include components/faq-question.html question="How does it protect me from security incidents like Vercel's?" answer="In the Vercel incident scenario, if an attacker accesses environment variables, they still cannot decrypt your encrypted .env secrets without the separate private decryption key. To steal your secrets, an attacker needs both the private key and the encrypted .env files." %}
      </dl>
    </div>
  </section>

  <section class="radar-section pricing-cta-section">
    <div class="radar-shell pricing-cta">
      <img src="/logo-original.png" alt="" class="pricing-cta-mark" aria-hidden="true" />
      <h2 class="radar-title pricing-cta-title">Armor up.<br />Today.</h2>
      <a class="radar-btn radar-btn--lg" href="/signup">Get Started</a>
    </div>
  </section>
</div>
