---
title: Pricing
description: "Use Dotenvx for free. Add Armor for controlled key access, approvals, and audit logs. Compare Member and Business plans."
permalink: /pricing/
main_layout: wide

---

Use Dotenvx for free. Add [Armor]({{ '/armor/' | relative_url }}) when you need to control who can use your private keys.

<div class="main-pricing-plans" markdown="block">
<section aria-labelledby="plan-user" markdown="block">

## User
{: #plan-user}

**$0**

For using Dotenvx with keys you manage yourself.

- Encrypt and commit `.env` files
- Prevent plaintext secrets from being committed
- CLI and SDKs included
- Store keys locally or in your password manager

[Get started]({{ '/docs/quickstart/' | relative_url }})

</section>
<section aria-labelledby="plan-member" markdown="block">

## Member
{: #plan-member}

**$5/month** · 1 seat included

For getting started with managed key access.

- Everything in User, plus Armor
- Unlimited keys and human approvals
- 5 days of audit history
- 250,000 audit events per month

[Start a 5-day trial](https://armor.dotenvx.com/signup){: data-umami-event="Pricing Member Signup link"}

</section>
<section aria-labelledby="plan-business" markdown="block">

## Business
{: #plan-business}

**$90/month** · 10 seats included

For teams that need finer access control and longer audit history.

- Everything in Member
- Access rules for individual keys and secrets
- Automation tokens
- 90 days of audit history
- 1,000,000 audit events per month
- Ticket and Slack support

[Sign up](https://armor.dotenvx.com/signup){: data-umami-event="Pricing Business Signup link"}

</section>
</div>

## Usage and billing

Member includes a 5-day trial. Add seats for $15/month each on Member, or $90/month per 10 seats on Business.

Additional usage is priced per 10,000 audit events: $1 prepaid for Member, or $0.25 billed monthly for Business. Member access pauses when available usage runs out. Business access continues beyond the included allowance.

Key rotation by command and Enterprise SSO are coming soon.

## Full comparison

<div class="main-pricing-comparison">
{% include components/membership-dotenvx.html %}
</div>
