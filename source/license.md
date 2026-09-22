---
title: Armor Source License
description: "Run Armor yourself. Modify it for your team. Keep the source private."
permalink: /source/license
layout: radar
body_class: home-page
---

<div class="home-sections">
  <section class="design-hero home-hero2" aria-label="Armor Source License">
    <div class="armor-shell">
      {% include components/design-hero2.html compact=true secondary=true name="Armor Source License" name_heading=true description="Run it yourself. Make it yours. Keep it private." %}
    </div>
  </section>
  <section class="radar-section">
    <div class="armor-shell">
      {% capture license_content %}
      <p>License version: August 22, 2026.</p>

      <h2>The short version</h2>
      <p>You can run Armor for yourself or your organization, inspect the source, and modify and extend it for that use. You can also build private integrations and tools for your licensed installation. You cannot resell Armor, redistribute its code, or turn it into a product or service for others.</p>
      <p>This is a paid commercial self-hosting license, not an open-source license. The terms below define the permissions and restrictions.</p>

      <h2>1. Who and what this covers</h2>
      <p>This license is between Dotenvx LLC ("we") and the individual or single legal entity named on the purchase order ("you"). "Software" means the Armor source code, executables, and documentation supplied under that order, including modifications and derivative works to the extent they contain or derive from our code.</p>
      <p>A purchase licenses the Software; it does not transfer ownership of it. Separate legal entities, including affiliates, need their own licenses unless the order expressly includes them.</p>

      <h2>2. What you may do</h2>
      <p>Once the agreed fee is paid and the Software is delivered, we grant you a perpetual, worldwide, non-exclusive license that is non-transferable except as permitted in section 9, subject to these terms, to:</p>
      <ul>
        <li>Install and run the Software for your own personal use or your organization's internal business operations.</li>
        <li>Inspect, copy, modify, and extend the Software for that permitted use, including private plugins, integrations, and automation tools supporting your licensed installation. Those tools may run separately from Armor.</li>
        <li>Maintain production, development, test, staging, backup, and disaster-recovery copies, with no per-instance limit, subject to the seat allowance below.</li>
        <li>Allow your employees and contractors to use or maintain the Software solely on your behalf. They must be subject to enforceable duties protecting the source code and limiting their use to work on your behalf, consistent with this license. You are responsible for their compliance.</li>
      </ul>
      <p>Your order specifies your seat allowance: up to 10, up to 50, up to 100, or a larger allowance agreed in writing. A "seat" is one individual authorized to use or administer the Software, including employees and contractors. Count each individual once across all your installations, regardless of the number of accounts they hold. Shared accounts do not reduce the number of seats required.</p>
      <p>Service accounts and automated workloads do not count as seats, but may not be used to provide access to uncounted individuals. You may reassign a seat when an individual's access is removed. There is no limit on applications, environments, or installations.</p>
      <p>Before exceeding your seat allowance, purchase an upgrade under the schedule agreed in your order. A seat-tier upgrade does not itself include newer Software versions, maintenance, or support.</p>
      <p>You may run the Software on infrastructure you own or rent, including cloud infrastructure. Providers may host or administer your installation on your behalf, but receive no right to use it for other customers. Their service terms must provide appropriate confidentiality and security protections and limit access to providing their services to you; an individually negotiated agreement is not required.</p>
      <p>You may use the Software to support your own business, including commercial applications and services you operate. For example, using Armor to manage secrets for your paid application is permitted. You may not provide third parties with the Software or its secrets-management functionality as a standalone, bundled, or hosted offering. Giving a customer access to an Armor-backed secrets-management service is prohibited, even if you rename it or include it free with another product.</p>

      <h2>3. What you may not do</h2>
      <p>Except with our prior written permission, you may not:</p>
      <ul>
        <li>Sell, resell, sublicense, rent, distribute, or otherwise transfer the Software or any part of it, whether modified or unmodified.</li>
        <li>Publish the source or make it available outside the permitted employees, contractors, and hosting providers described above.</li>
        <li>Offer Armor or a modified version as a hosted service, managed service, white-label product, or other offering for third parties, whether paid or free.</li>
        <li>Extract or reuse our code in a separate product, library, template, or service, except for the private extensions and integrations supporting your licensed installation expressly permitted in section 2. You may not distribute or offer those code-containing extensions to others.</li>
        <li>Remove copyright, license, or attribution notices from the source or distributed third-party components.</li>
        <li>Publish or otherwise publicly disclose performance information or performance analysis relating to the Software, including benchmark results, comparative performance tests, and capacity or scalability measurements.</li>
      </ul>
      <p>You may conduct performance testing and analysis for your permitted internal use and share the results privately with us or with the people and providers permitted in section 2, subject to the same confidentiality duties. The performance-publication restriction does not prohibit private reporting of suspected security vulnerabilities to us at support@dotenvx.com, disclosures required by law, or reporting protected by applicable law.</p>
      <p>These restrictions do not prevent you from building independent software without copying or deriving it from our code, or from using general skills and knowledge.</p>

      <h2>4. Protecting the source</h2>
      <p>You must keep our non-public source code and non-public technical materials confidential. Use at least reasonable care to protect them, including access controls appropriate to the sensitivity of the code. Limit access to the people and providers permitted in section 2, and remove their access when they no longer need it.</p>
      <p>Notify us at support@dotenvx.com without undue delay after discovering unauthorized access to or disclosure of our source. Take reasonable steps to stop the disclosure, recover exposed copies where practicable, and cooperate with us in addressing it. You remain responsible for access you authorize.</p>
      <p>Confidentiality does not apply to information you can demonstrate was lawfully known to you without restriction, independently developed without using our confidential information, lawfully received from another source without a confidentiality duty, or made public without a breach of a duty to us. These exceptions do not grant additional rights to use or distribute the Software.</p>
      <p>If disclosure is legally required, disclose only what is required and, where legally permitted, give us prompt advance notice and reasonable assistance in seeking confidential treatment.</p>

      <h2>5. Ownership and third-party software</h2>
      <p>We retain ownership of the Software we provide. You retain any rights you hold in your original modifications, but those rights do not permit distribution or use of our Software beyond this license. You do not have to send us your modifications.</p>
      <p>Third-party and separately licensed open-source components remain governed by their own licenses. Nothing here limits rights granted under those licenses. This agreement does not change the licenses of dotenv, dotenvx, or any other separately licensed project, and grants no right to use our trademarks to market your own offering.</p>

      <h2>6. Purchase, delivery, and operation</h2>
      <p>Before payment, the order must identify the licensed buyer, price and currency, final license version, Software version or deliverable, delivery deadline, and any included updates or support. It must state whether the purchase is for a pre-release or includes a later final release, and identify the governing law, courts, and notice contacts under section 9.</p>
      <p>The base tier is $990 USD paid once for one individual or legal entity and up to 10 seats, with unlimited applications and installations and no included future updates, maintenance, or support. The tier for up to 50 seats is $2,990 USD paid once on the same terms. The tier for up to 100 seats is $4,990 USD paid once on the same terms. Pricing for more than 100 seats is negotiable, with the agreed seat allowance specified in the order. The order must confirm the selected seat allowance, price, and upgrade-price schedule, together with these defaults or any agreed exceptions. Affiliates are included only if expressly named.</p>
      <p>We will provide the final license before payment and obtain explicit acceptance, through a signed order or an affirmative electronic acceptance identifying the license version. The person accepting for an organization must have authority to bind it. We will retain the accepted order and license version. Visiting this page, requesting information, or clicking an email link is not acceptance.</p>
      <p>If we miss the agreed delivery deadline, you may give written notice requiring delivery within 30 days. If we do not deliver within that period, you may cancel the undelivered order for a full refund. Any different delivery or cancellation arrangement must be expressly agreed in the order. This remedy does not limit rights that cannot legally be waived.</p>
      <p> A one-time payment grants continued use of the delivered version; it does not promise future releases, maintenance, support, or access to our hosted services unless the order says otherwise. Updates supplied under this license carry the same restrictions.</p>
      <p>If you purchase the optional annual updates plan, we will deliver two updated source-code versions during each paid 12-month term, one every six months. Your order specifies the annual fee, term start date, delivery dates, and renewal terms. You retain the right to use versions delivered during a paid term under this license after the updates plan ends. The plan does not include installation services or technical support unless expressly agreed in the order.</p>
      <p>You are responsible for hosting, backups, access controls, private keys, security updates, and operating your installation. Pre-release software may be incomplete or change before final release.</p>

      <h2>7. Warranty and liability</h2>
      <p>To the maximum extent permitted by law, the Software is provided "as is" and "as available," without warranties, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not promise uninterrupted operation or that the Software is free of defects.</p>
      <p>To the maximum extent permitted by law, we are not liable for indirect, incidental, special, or consequential damages, or lost profits, data, or business opportunities arising from the Software. Our total liability under this license will not exceed the amount you paid for the Software. These limits do not excuse an expressly agreed refund or delivery obligation, or exclude liability or rights that cannot legally be excluded or limited. Express commitments in the order remain effective despite these disclaimers.</p>

      <h2>8. Termination</h2>
      <p>Your license continues unless terminated for a material breach. We may terminate it if you do not remedy a breach within 30 days after written notice. We may terminate immediately by written notice for intentional unauthorized sale, distribution, or public disclosure of our source code. A remediable accidental disclosure is subject to the 30-day cure period, but you must act promptly to contain it under section 4.</p>
      <p>After termination, stop using the Software and delete copies under your control, including modified versions containing our code. Copies retained solely to comply with law or in routine inaccessible backups must remain protected and may not be used. Accrued payment and refund obligations, ownership, confidentiality, restrictions on unauthorized use and redistribution, liability provisions, and dispute terms survive termination. Confidentiality continues for as long as the information remains confidential under section 4.</p>

      <h2>9. Agreement, notices, and transfers</h2>
      <p>The accepted order and the final license version it identifies form the entire agreement for the source-code purchase. Express exceptions in the order control over conflicting license terms. General website and hosted-service terms do not change this license; they apply only to separately used services. Later website edits do not change the license for a version already purchased. Changes or additional rights require a written agreement accepted by both parties.</p>
      <p>Legal notices must be sent to support@dotenvx.com and to the buyer's notice email in the order, or to a replacement address designated by written notice. Email notice is effective when the recipient acknowledges receipt or when delivery to the designated mail server is confirmed without a failure response. If delivery cannot be confirmed, use tracked delivery to the postal address specified in the order; notice is effective on confirmed delivery. Both parties must keep their notice details current.</p>
      <p>The order must specify the governing law and the courts with jurisdiction over disputes. Those choices remain subject to mandatory applicable law and any non-waivable rights to bring a claim elsewhere.</p>
      <p>You may request transfer of the license in connection with a merger, reorganization, or sale of substantially all the business assets using the Software. Transfer requires our prior written consent, which we will not unreasonably withhold or delay if the successor accepts this agreement in writing and the transfer does not expand the licensed scope. After transfer, you must stop using your copies. Other transfers require our prior written consent.</p>
      <p>If a provision cannot be enforced, it will be limited to the minimum extent necessary where permitted, and the remaining provisions continue in effect. Failure or delay in enforcing a provision is not a waiver. Nothing here limits rights that applicable law does not permit the parties to restrict.</p>
      <p>For licensing questions or permission beyond these terms, email <a href="mailto:support@dotenvx.com">support@dotenvx.com</a>.</p>
      <p class="text-center"><a href="/source/">← back to Armor Source</a></p>
      {% endcapture %}
      {% include components/design-content-width.html content=license_content class="design-prose" %}
    </div>
  </section>
</div>
