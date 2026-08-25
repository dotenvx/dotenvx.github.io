---
title: API
description: API endpoints available through Dotenvx Armor.
permalink: /docs/api/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="API"
  description="API endpoints available through Dotenvx Armor."
  mark="&lt;/&gt;"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
      <h2 class="design-page-title">Dotenvx</h2>
      <p class="design-paragraph">Dotenvx does not have an API of its own. Its core encrypt, decrypt, get, set, and run workflows stay local—simple, private, and independent of a hosted service.</p>
      <p class="design-paragraph">When you want more—off-device private keys, team access, Guard approvals, Enclave decryption, audit logs, and an API your agents can control—that is what Armor adds. Every endpoint below belongs to Armor, and Dotenvx becomes its secure command-line client when Armor is enabled.</p>

      <h2 class="design-page-title">Armor</h2>
      <p class="design-paragraph">The Armor API is served from <code>https://armor.dotenvx.com</code>. Authenticate with <code>Authorization: Bearer TOKEN</code>, or use <code>dotenvx curl</code> after running <code>dotenvx login</code> to supply your Armor credentials automatically.</p>
      <p class="design-paragraph">Requests and responses use JSON unless an endpoint returns a plain value. List endpoints accept <code>page</code> and <code>per</code>; <code>per</code> must be between 1 and 100.</p>

      <h3 class="design-page-title">Account</h3>
      {% capture account_api %}
        <thead>
          <tr><th scope="col">Method</th><th scope="col">Endpoint</th><th scope="col">Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>GET</code></td><td><code>/api/account</code></td><td>Return the authenticated Armor account.</td></tr>
        </tbody>
      {% endcapture %}
      {% include components/design-table.html class="design-table-wrap--fill" content=account_api %}

      <h3 class="design-page-title">Armored keys</h3>
      {% capture keypair_api %}
        <thead>
          <tr><th scope="col">Method</th><th scope="col">Endpoint</th><th scope="col">Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>GET</code></td><td><code>/api/armor/keypairs</code></td><td>List armored keys available to the authenticated account.</td></tr>
          <tr><td><code>GET</code></td><td><code>/api/armor/keypairs/:public_key</code></td><td>Return one armored key.</td></tr>
          <tr><td><code>POST</code></td><td><code>/api/armor/keypairs/:public_key/name</code></td><td>Set or clear an armored key's name.</td></tr>
          <tr><td><code>POST</code></td><td><code>/api/armor/keypairs/:public_key/members/:member_id/grant</code></td><td>Grant a team member access to an armored key.</td></tr>
          <tr><td><code>POST</code></td><td><code>/api/armor/keypairs/:public_key/members/:member_id/revoke</code></td><td>Revoke a team member's access to an armored key.</td></tr>
          <tr><td><code>POST</code></td><td><code>/api/armor/keypairs/:public_key/settings/guard</code></td><td>Turn Guard on or off for an armored key.</td></tr>
          <tr><td><code>POST</code></td><td><code>/api/armor/keypairs/:public_key/settings/enclave</code></td><td>Turn Enclave on or off for an armored key.</td></tr>
        </tbody>
      {% endcapture %}
      {% include components/design-table.html class="design-table-wrap--fill" content=keypair_api %}

      <h3 class="design-page-title">Teams</h3>
      {% capture team_api %}
        <thead>
          <tr><th scope="col">Method</th><th scope="col">Endpoint</th><th scope="col">Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>GET</code></td><td><code>/api/teams</code></td><td>List teams available to the authenticated account.</td></tr>
          <tr><td><code>GET</code></td><td><code>/api/teams/:team</code></td><td>Return one team.</td></tr>
          <tr><td><code>GET</code></td><td><code>/api/teams/:team/members</code></td><td>List a team's members.</td></tr>
          <tr><td><code>POST</code></td><td><code>/api/teams/:team/members/:member_id/keypairs/:public_key/grant</code></td><td>Grant a member access to an armored key.</td></tr>
          <tr><td><code>POST</code></td><td><code>/api/teams/:team/members/:member_id/keypairs/:public_key/revoke</code></td><td>Revoke a member's access to an armored key.</td></tr>
          <tr><td><code>GET</code></td><td><code>/api/teams/:team/invitations</code></td><td>List a team's invitations.</td></tr>
          <tr><td><code>POST</code></td><td><code>/api/teams/:team/invitations</code></td><td>Invite a member by email or username.</td></tr>
          <tr><td><code>POST</code></td><td><code>/api/teams/:team/invitations/:id/cancel</code></td><td>Cancel a pending invitation.</td></tr>
          <tr><td><code>GET</code></td><td><code>/api/teams/:team/join_requests</code></td><td>List a team's pending join requests.</td></tr>
          <tr><td><code>POST</code></td><td><code>/api/teams/:team/join_requests/:id/accept</code></td><td>Accept a join request and optionally assign a role.</td></tr>
          <tr><td><code>POST</code></td><td><code>/api/teams/:team/join_requests/:id/decline</code></td><td>Decline a join request.</td></tr>
          <tr><td><code>POST</code></td><td><code>/api/armor/:team/settings/join_requests</code></td><td>Turn join requests on or off for a team.</td></tr>
        </tbody>
      {% endcapture %}
      {% include components/design-table.html class="design-table-wrap--fill" content=team_api %}

      <h3 class="design-page-title">Your join requests</h3>
      {% capture join_request_api %}
        <thead>
          <tr><th scope="col">Method</th><th scope="col">Endpoint</th><th scope="col">Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>GET</code></td><td><code>/api/join_requests</code></td><td>List your join requests.</td></tr>
          <tr><td><code>POST</code></td><td><code>/api/join_requests</code></td><td>Request to join a team.</td></tr>
          <tr><td><code>POST</code></td><td><code>/api/join_requests/:id/cancel</code></td><td>Cancel one of your pending join requests.</td></tr>
        </tbody>
      {% endcapture %}
      {% include components/design-table.html class="design-table-wrap--fill" content=join_request_api %}

      <h3 class="design-page-title">Logs</h3>
      {% capture logs_api %}
        <thead>
          <tr><th scope="col">Method</th><th scope="col">Endpoint</th><th scope="col">Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>GET</code></td><td><code>/api/logs?team=:team</code></td><td>List activity logs for a team. Filter with <code>events</code>, <code>before</code>, <code>page</code>, and <code>per</code>.</td></tr>
        </tbody>
      {% endcapture %}
      {% include components/design-table.html class="design-table-wrap--fill" content=logs_api %}

      <h3 class="design-page-title">Dotenvx command protocol</h3>
      <p class="design-paragraph">Dotenvx uses these Armor endpoints to implement Armor-backed commands. Prefer the corresponding Dotenvx command unless you are building an Armor client.</p>
      {% capture protocol_api %}
        <thead>
          <tr><th scope="col">Method</th><th scope="col">Endpoint</th><th scope="col">Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>GET</code> / <code>POST</code></td><td><code>/api/keypair</code></td><td>Create or retrieve a keypair.</td></tr>
          <tr><td><code>GET</code> / <code>POST</code></td><td><code>/api/armor/keyring</code></td><td>Retrieve an armored private key, subject to its access settings.</td></tr>
          <tr><td><code>POST</code></td><td><code>/api/armor/decrypt</code></td><td>Decrypt encrypted values inside Enclave.</td></tr>
          <tr><td><code>GET</code> / <code>POST</code></td><td><code>/api/armor/up</code></td><td>Move a private key into Armor.</td></tr>
          <tr><td><code>GET</code> / <code>POST</code></td><td><code>/api/armor/down</code></td><td>Remove a private key from Armor.</td></tr>
          <tr><td><code>GET</code> / <code>POST</code></td><td><code>/api/armor/push</code></td><td>Push a private key to Armor.</td></tr>
          <tr><td><code>GET</code> / <code>POST</code></td><td><code>/api/armor/pull</code></td><td>Pull a private key from Armor.</td></tr>
          <tr><td><code>GET</code> / <code>POST</code></td><td><code>/api/armor/move</code></td><td>Move an armored key to another team.</td></tr>
          <tr><td><code>GET</code> / <code>POST</code></td><td><code>/api/backup</code></td><td>Back up an encrypted project snapshot.</td></tr>
          <tr><td><code>GET</code> / <code>POST</code></td><td><code>/api/sync</code></td><td>Synchronize an encrypted project snapshot.</td></tr>
          <tr><td><code>GET</code> / <code>POST</code></td><td><code>/api/synchronization/:id</code></td><td>Return one synchronization.</td></tr>
          <tr><td><code>GET</code> / <code>POST</code></td><td><code>/api/get</code></td><td>Read the value referenced by a Dotenvx URI.</td></tr>
          <tr><td><code>GET</code> / <code>POST</code></td><td><code>/api/set</code></td><td>Write the value referenced by a Dotenvx URI.</td></tr>
          <tr><td><code>GET</code> / <code>POST</code></td><td><code>/api/rotate</code></td><td>Run a passcard rotation.</td></tr>
          <tr><td><code>POST</code></td><td><code>/api/rotate/connect</code></td><td>Connect credentials used by a passcard rotation.</td></tr>
          <tr><td><code>GET</code> / <code>POST</code> / <code>DELETE</code></td><td><code>/api/logout</code></td><td>Revoke the current Armor token.</td></tr>
          <tr><td><code>GET</code> / <code>POST</code></td><td><code>/api/observe</code></td><td>Deprecated observation endpoint; retained as a no-op for older clients.</td></tr>
        </tbody>
      {% endcapture %}
      {% include components/design-table.html class="design-table-wrap--fill" content=protocol_api %}

      <h3 class="design-page-title">Example</h3>
      <pre><code>dotenvx curl "https://armor.dotenvx.com/api/armor/keypairs"

dotenvx curl "https://armor.dotenvx.com/api/armor/keypairs/PUBLIC_KEY/name" \
  --data '{"name":"Production"}'</code></pre>

      <p class="design-paragraph">See <a class="design-link" href="/docs/errors">Errors</a> for Armor error codes and <a class="design-link" href="/docs/events">Events</a> for activity names recorded by these operations.</p>
    </div>
  </div>
</section>
