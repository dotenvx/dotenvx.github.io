---
title: "Dotenvx and SOC 2 Compliance"
logo: ops
image: "/assets/img/og-image-soc2.png"
---

<section class="w-full max-w-2xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-8">
  <h1 class="font-extrabold text-3xl sm:text-5xl text-zinc-950 dark:text-zinc-50 text-center">Dotenvx and SOC 2 Compliance</h1>
  <p class="text-xl text-center"><strong>The Problem.</strong> Most engineering teams store API keys, tokens, and passwords in .env files. While convenient, plaintext .env files introduce major SOC 2 control gaps:</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <p class="text-left">
      <strong>Unencrypted at Rest.</strong> Any insider or attacker with file access can read credentials directly from disk. 
    </p>
    <p class="text-left">
      <strong>Unrestricted Distribution.</strong> .env files are easily copied or committed to Git, spreading secrets beyond intended boundaries.
    </p>
    <p class="text-left">
      <strong>Unaudited Changes.</strong> Updates to secrets happen without traceability, making it impossible to verify rotation or authorization.
    </p>
    <p class="text-left">
      <strong>Unmonitered Usage.</strong> Secrets can be accessed or reused without detection, exposing organizations to silent credential abuse.
    </p>
  </div>
  <p>These risks map directly to SOC 2 deficiencies under the <strong>Security (CC6, CC7), Confidentiality (C1), Change Management (CC8)</strong>, and <strong>System Operations (CC7)</strong> criteria. And SOC 2 isn't just a checkbox—it's proof your organization takes security seriously.</p>
  <hr/>
  <p class="text-xl text-center"><strong>The Solution.</strong> Dotenvx closes these control gaps by enforcing encryption, access boundaries, and auditability for all your organization's .env files.</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <p class="text-left">
      <strong>Encrypted at Rest.</strong> Dotenvx encrypts every .env file using asymmetric keys, ensuring only authorized devices can decrypt and read secrets.
    </p>
    <p class="text-left">
      <strong>Controlled Distribution.</strong> Access is restricted to team members holding the decryption keys, preventing unauthorized sharing.
    </p>
    <p class="text-left">
      <strong>Audited Changes.</strong> Every rotation and key update is logged—giving your team full traceability and verifiable evidence for compliance.
    </p>
    <p class="text-left">
      <strong>Monitored Usage.</strong> Dotenvx's Radar feature tracks runtime env-file activity, detecting anomalies or credential abuse before they become incidents.
    </p>
  </div>
  <p><strong>Ready to strengthen your SOC 2 controls?</strong> Inquire about our SOC 2 Implementation Pack — a full set of control mappings, policy templates, and auditor-ready evidence built for teams using dotenvx.</p>
  <div class="flex flex-row gap-4 justify-center my-6">
    <a class="btn-primary" href="mailto:soc2@dotenvx.com">Request the SOC 2 Implementation Pack →</a>
    <a class="btn" href="https://dotenvx.com/dotenvx.pdf">Whitepaper</a>
  </div>
</section>



