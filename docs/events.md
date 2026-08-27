---
title: Events
description: Activity events recorded by Armor.
permalink: /docs/events/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Events"
  description="Activity events recorded by Armor."
  mark=":::"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
      <p class="design-paragraph">Events appear in Armor logs as <code>name</code> plus metadata. The event name identifies what happened; metadata adds context such as who performed the action, which team it affected, and where it occurred.</p>

      <h2 class="design-page-title">Dotenvx</h2>
      <p class="design-paragraph">No events are recorded without Armor. Local encrypt, decrypt, and run do not write an audit log.</p>

      <h2 class="design-page-title">Armor</h2>
      {% capture armor_events %}
        <thead>
          <tr><th scope="col">Event</th><th scope="col">Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>device/create</code></td><td>A CLI device was registered.</td></tr>
          <tr><td><code>invitation/create</code></td><td>A team invitation was created.</td></tr>
          <tr><td><code>invitation/delete</code></td><td>A team invitation was cancelled.</td></tr>
          <tr><td><code>invitation/update</code></td><td>A team invitation was updated.</td></tr>
          <tr><td><code>invitation/view</code></td><td>A team invitation was opened for management.</td></tr>
          <tr><td><code>invitations/view</code></td><td>The team invitations list was opened.</td></tr>
          <tr><td><code>join_request/cancel</code></td><td>A join request was cancelled.</td></tr>
          <tr><td><code>join_request/create</code></td><td>Someone requested to join the team.</td></tr>
          <tr><td><code>join_request/update</code></td><td>A join request was accepted or declined.</td></tr>
          <tr><td><code>join_request/view</code></td><td>A join request was opened for review.</td></tr>
          <tr><td><code>join_requests/view</code></td><td>The team join requests list was opened.</td></tr>
          <tr><td><code>keypair/access</code></td><td>The private key was accessed.</td></tr>
          <tr><td><code>keypair/create</code></td><td>An armored key was created.</td></tr>
          <tr><td><code>keypair/decrypt</code></td><td>Secrets were decrypted via Enclave without revealing the private key.</td></tr>
          <tr><td><code>keypair/delete</code></td><td>An armored key was deleted.</td></tr>
          <tr><td><code>keypair/move</code></td><td>An armored key was moved to another team.</td></tr>
          <tr><td><code>keypair/view</code></td><td>The keypair Details page was opened.</td></tr>
          <tr><td><code>keypair_access/grant</code></td><td>A member was granted access to a keypair.</td></tr>
          <tr><td><code>keypair_access/revoke</code></td><td>A member's keypair access was revoked.</td></tr>
          <tr><td><code>keypair_name/update</code></td><td>A keypair name was changed.</td></tr>
          <tr><td><code>keypair_setting_enclave/update</code></td><td>Enclave was turned on or off.</td></tr>
          <tr><td><code>keypair_setting_guard/update</code></td><td>Guard was turned on or off.</td></tr>
          <tr><td><code>keypair_settings/view</code></td><td>The keypair Settings page was opened.</td></tr>
          <tr><td><code>keypair_team/view</code></td><td>The keypair Team page was opened.</td></tr>
          <tr><td><code>keypair_viz/view</code></td><td>The keypair Viz page was opened.</td></tr>
          <tr><td><code>keypairs/view</code></td><td>The armored keys list was opened.</td></tr>
          <tr><td><code>logs/read</code></td><td>Logs were read.</td></tr>
          <tr><td><code>logs/view</code></td><td>The logs page was opened.</td></tr>
          <tr><td><code>member/create</code></td><td>A member was added to the team.</td></tr>
          <tr><td><code>member/delete</code></td><td>A member was removed from the team.</td></tr>
          <tr><td><code>member/update</code></td><td>A member's role was changed.</td></tr>
          <tr><td><code>member/view</code></td><td>A team member's profile was opened.</td></tr>
          <tr><td><code>member_keypairs/view</code></td><td>A team member's keypair access was opened.</td></tr>
          <tr><td><code>oauth_token/activate</code></td><td>An OAuth access token was activated.</td></tr>
          <tr><td><code>oauth_token/create</code></td><td>An OAuth access token was created.</td></tr>
          <tr><td><code>oauth_token/delete</code></td><td>An OAuth access token was deleted.</td></tr>
          <tr><td><code>oauth_token/revoke</code></td><td>An OAuth access token was revoked.</td></tr>
          <tr><td><code>organization/create</code></td><td>A team or workspace was created.</td></tr>
          <tr><td><code>settings/view</code></td><td>Settings home was opened.</td></tr>
          <tr><td><code>settings_avatar/update</code></td><td>The team avatar was changed.</td></tr>
          <tr><td><code>settings_avatar/view</code></td><td>Avatar settings were opened.</td></tr>
          <tr><td><code>settings_billing/view</code></td><td>Billing settings were opened.</td></tr>
          <tr><td><code>settings_danger_zone/cancel</code></td><td>The team plan was cancelled.</td></tr>
          <tr><td><code>settings_danger_zone/delete</code></td><td>The team was deleted.</td></tr>
          <tr><td><code>settings_danger_zone/view</code></td><td>The danger zone was opened.</td></tr>
          <tr><td><code>settings_digest/update</code></td><td>Digest preferences were changed.</td></tr>
          <tr><td><code>settings_digest/view</code></td><td>Digest settings were opened.</td></tr>
          <tr><td><code>settings_join_requests/update</code></td><td>Join-request settings were changed.</td></tr>
          <tr><td><code>settings_keypair_access/update</code></td><td>Default keypair access for a role was changed.</td></tr>
          <tr><td><code>settings_name/update</code></td><td>The team name was changed.</td></tr>
          <tr><td><code>settings_name/view</code></td><td>Team name settings were opened.</td></tr>
          <tr><td><code>settings_organization/view</code></td><td>Organization settings were opened.</td></tr>
          <tr><td><code>settings_security/view</code></td><td>Security settings were opened.</td></tr>
          <tr><td><code>settings_slack/request</code></td><td>A Slack support-channel request was submitted.</td></tr>
          <tr><td><code>settings_slack/view</code></td><td>Support settings were opened.</td></tr>
          <tr><td><code>settings_team/read</code></td><td>Team members, invitations, or join requests were read.</td></tr>
          <tr><td><code>settings_team/view</code></td><td>The team settings page was opened.</td></tr>
          <tr><td><code>settings_tokens/view</code></td><td>Automation tokens were opened.</td></tr>
          <tr><td><code>user/create</code></td><td>A user signed up.</td></tr>
        </tbody>
      {% endcapture %}
      {% include components/design-table.html class="design-table-wrap--fill" content=armor_events %}
    </div>
  </div>
</section>
