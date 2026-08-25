---
title: Errors
description: Error codes surfaced by Dotenvx and Armor.
permalink: /docs/errors/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Errors"
  description="Error codes surfaced by Dotenvx and Armor."
  mark="[!]"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
      <p class="design-paragraph">Errors are written to stderr in the form <code>[ERROR_CODE] message</code>. Use the code to identify the failure independently of its contextual message.</p>

      <h2 class="design-page-title">Dotenvx</h2>
      {% capture dotenvx_errors %}
        <thead>
          <tr><th scope="col">Error</th><th scope="col">Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>1PASSWORD_FAILED</code></td><td>1Password could not resolve a referenced value.</td></tr>
          <tr><td><code>ACCESS_APPROVAL_TIMEOUT</code></td><td>The CLI stopped waiting for Armor key-access approval.</td></tr>
          <tr><td><code>BITWARDEN_FAILED</code></td><td>Bitwarden could not resolve a referenced value.</td></tr>
          <tr><td><code>BW_SESSION_MISSING</code></td><td>Bitwarden requires an active session.</td></tr>
          <tr><td><code>COMMAND_EXITED_WITH_CODE</code></td><td>The command run by Dotenvx exited unsuccessfully.</td></tr>
          <tr><td><code>COMMAND_SUBSTITUTION_FAILED</code></td><td>Command substitution in an environment value failed.</td></tr>
          <tr><td><code>DECRYPTION_FAILED</code></td><td>One or more encrypted values could not be decrypted.</td></tr>
          <tr><td><code>FILE_NOT_WRITABLE</code></td><td>Dotenvx cannot write to the target file.</td></tr>
          <tr><td><code>INVALID_COLOR</code></td><td>The requested terminal color setting is invalid.</td></tr>
          <tr><td><code>INVALID_CONVENTION</code></td><td>The requested environment-file convention is invalid.</td></tr>
          <tr><td><code>INVALID_PASSPHRASE</code></td><td>The passphrase could not unlock the private key.</td></tr>
          <tr><td><code>INVALID_PRIVATE_KEY</code></td><td>The supplied private key is invalid.</td></tr>
          <tr><td><code>INVALID_PUBLIC_KEY</code></td><td>The supplied public key is invalid.</td></tr>
          <tr><td><code>MALFORMED_ENCRYPTED_DATA</code></td><td>The encrypted value is malformed.</td></tr>
          <tr><td><code>MISPAIRED_PRIVATE_KEY</code></td><td>The private key does not match the expected public key.</td></tr>
          <tr><td><code>MISSING_DIRECTORY</code></td><td>The requested directory does not exist.</td></tr>
          <tr><td><code>MISSING_ENV_EXAMPLE</code></td><td>The expected <code>.env.example</code> file does not exist.</td></tr>
          <tr><td><code>MISSING_ENV_FILE</code></td><td>The requested environment file does not exist.</td></tr>
          <tr><td><code>MISSING_ENV_FILES</code></td><td>No matching environment files were found.</td></tr>
          <tr><td><code>MISSING_ENV_KEYS_FILE</code></td><td>The requested <code>.env.keys</code> file does not exist.</td></tr>
          <tr><td><code>MISSING_KEY</code></td><td>The requested environment key does not exist.</td></tr>
          <tr><td><code>MISSING_LOG_LEVEL</code></td><td>The requested log level is not implemented.</td></tr>
          <tr><td><code>MISSING_PRIVATE_KEY</code></td><td>No private key is available for decryption.</td></tr>
          <tr><td><code>MISSING_PUBLIC_KEY</code></td><td>No public key is available for encryption.</td></tr>
          <tr><td><code>MISSING_REQUIRED</code></td><td>A required environment value is missing.</td></tr>
          <tr><td><code>MISSING_VALUE</code></td><td>No value was provided for the requested key.</td></tr>
          <tr><td><code>PRECOMMIT_HOOK_MODIFY_FAILED</code></td><td>Dotenvx could not modify the Git pre-commit hook.</td></tr>
          <tr><td><code>PROMPT_CANCELLED</code></td><td>An interactive prompt was cancelled.</td></tr>
          <tr><td><code>VALIDATION_FAILED</code></td><td>Environment validation failed.</td></tr>
          <tr><td><code>WRONG_PRIVATE_KEY</code></td><td>The available private key cannot decrypt the value.</td></tr>
        </tbody>
      {% endcapture %}
      {% include components/design-table.html class="design-table-wrap--fill" content=dotenvx_errors %}

      <h2 class="design-page-title">Armor</h2>
      {% capture armor_errors %}
        <thead>
          <tr><th scope="col">Error</th><th scope="col">Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>ACCESS_APPROVAL_EXPIRED</code></td><td>The key-access approval expired before it was completed.</td></tr>
          <tr><td><code>ACCESS_APPROVAL_INVALID</code></td><td>The key-access approval token is invalid.</td></tr>
          <tr><td><code>ACCESS_APPROVAL_PENDING</code></td><td>The key-access request is still awaiting approval.</td></tr>
          <tr><td><code>ACCESS_APPROVAL_REQUIRED</code></td><td>The keypair requires interactive access approval.</td></tr>
          <tr><td><code>ARMOR_UPGRADE_REQUIRED</code></td><td>The installed Dotenvx Armor client must be upgraded.</td></tr>
          <tr><td><code>DECRYPTION_FAILED</code></td><td>Armor could not decrypt the supplied encrypted values.</td></tr>
          <tr><td><code>DEVICE_PUBLIC_KEY_MISSING</code></td><td>The request is missing <code>DOTENVX_DEVICE_PUBLIC_KEY</code>.</td></tr>
          <tr><td><code>DOTENVX_SYNC_CONFLICT</code></td><td>Local sync changes conflict with a newer server version.</td></tr>
          <tr><td><code>NO_TEAMS</code></td><td>Create or join a team before running the command.</td></tr>
          <tr><td><code>PERMISSION_DENIED</code></td><td>The authenticated member is not permitted to perform the action.</td></tr>
          <tr><td><code>PROJECT_ID_MISSING</code></td><td>The request is missing <code>DOTENVX_PROJECT_ID</code>.</td></tr>
          <tr><td><code>PROJECT_ID_NOT_FOUND</code></td><td>The requested <code>DOTENVX_PROJECT_ID</code> does not exist.</td></tr>
          <tr><td><code>SERVER_SIDE_DECRYPTION_REQUIRED</code></td><td>The private key cannot be returned; Armor must perform decryption.</td></tr>
          <tr><td><code>SYNC_ACCESS_DENIED</code></td><td>The authenticated member cannot access one or more synchronized files.</td></tr>
          <tr><td><code>TEAM_REQUIRED</code></td><td>The request must identify a team.</td></tr>
          <tr><td><code>UNAUTHORIZED</code></td><td>The request is not authenticated.</td></tr>
        </tbody>
      {% endcapture %}
      {% include components/design-table.html class="design-table-wrap--fill" content=armor_errors %}
    </div>
  </div>
</section>
