---
title: About
description: "Working out of LA–on a small important file"
permalink: /about/
main_layout: two-columns
---


> {{ page.description }}

<p><a href="https://www.google.com/maps/search/?api=1&amp;query=2450%20Colorado%20Ave%20%23100%2C%20Santa%20Monica%2C%20CA%2090404" aria-label="View the Dotenvx office at 2450 Colorado Ave #100, Santa Monica, CA 90404 on Google Maps"><img class="main-image" src="{{ '/about.png' | relative_url }}" alt="Dotenvx Los Angeles office" width="768" height="307"></a></p>

[2450 Colorado Ave #100, Santa Monica, CA 90404](https://www.google.com/maps/search/?api=1&query=2450%20Colorado%20Ave%20%23100%2C%20Santa%20Monica%2C%20CA%2090404)


      {% capture about_content %}
      <div class="about-company">
        <p class="design-paragraph">Dotenvx keeps secrets safe without making software harder to ship. We're the team behind Dotenv, Dotenvx, and the next chapter of .env.</p>
        <p class="design-paragraph">We started with a problem every developer recognizes: an app needs credentials, but those credentials don't belong in its source code. Dotenv gave them a home in a small, readable file. No dashboard to learn. No service to depend on. Just a file and the code you were already writing.</p>
        <p class="design-paragraph">That simplicity mattered. But the secrets on one developer's laptop also had to reach teammates, build servers, and production. Keeping the file out of Git meant finding another way to move it around. We wanted secrets to follow the same path as the software they configure, without exposing their values.</p>
        <p class="design-paragraph">That's why we built Dotenvx. Encryption lets the file travel with your code while its private key stays separate. The familiar .env becomes something you can version, review, and share through Git.</p>
        <p class="design-paragraph">Now we're asking the next question: how can an agent work on your app without being handed its secrets? Dotenvx.toml carries our approach forward, making the rules for secrets explicit so software can enforce them.</p>
      </div>


      <ol class="main-numbered-list">
        <li><strong>Secrets separate from code.</strong> We created Dotenv to separate secrets from code. One small file made configuration safe.<br>
          <a href="https://www.npmjs.com/package/dotenv">Dotenv</a>
        </li>
        <li><strong>Secrets encrypted alongside code.</strong> We created Dotenvx to make that same file safe to commit and share through Git. Secrets stay encrypted alongside your code and decrypt in memory at runtime.<br>
          <a href="https://www.npmjs.com/package/@dotenvx/dotenvx">Dotenvx</a>
        </li>
        <li><strong>Secrets separate from agents.</strong> We're building Dotenvx.toml to keep secrets out of agents' reach. Your app gets secrets; your agents get rules.<br>
          <a href="{{ site.data.redirects['/agents/'] | relative_url }}">Dotenvx.toml</a>
        </li>
      </ol>


      {% endcapture %}


<div>
{{ about_content | strip }}
</div>
