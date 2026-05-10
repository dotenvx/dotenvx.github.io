---
title: "Dotenvx Trust Center"
social_title: "Dotenvx Trust Center"
description: "From the creator of dotenv, Dotenvx extends the .env workflow trusted by developers for over a decade with encryption, key separation, and secure secret distribution."
layout: blank
image: "/assets/img/og-image-trust.png"
---

<style>
  .trust-page {
    transition: background-color 160ms ease, color 160ms ease;
  }

  html.trust-light .trust-page, .trust-page.trust-light {
    background: #f8fafc !important;
    color: #27272a !important;
  }

  html.trust-light .trust-page .bg-black,
  html.trust-light .trust-page .bg-zinc-950,
  .trust-page.trust-light .bg-black,
  .trust-page.trust-light .bg-zinc-950 {
    background: #fff !important;
  }

  html.trust-light .trust-page [class~="bg-zinc-900/40"],
  .trust-page.trust-light [class~="bg-zinc-900/40"] {
    background: #f4f4f5 !important;
  }

  html.trust-light .trust-page [class~="hover:bg-zinc-900/60"]:hover,
  .trust-page.trust-light [class~="hover:bg-zinc-900/60"]:hover {
    background: #f8fafc !important;
  }

  html.trust-light .trust-page [class~="border-zinc-900"],
  html.trust-light .trust-page [class~="border-zinc-800"],
  html.trust-light .trust-page [class~="divide-zinc-900"] > :not([hidden]) ~ :not([hidden]),
  .trust-page.trust-light [class~="border-zinc-900"],
  .trust-page.trust-light [class~="border-zinc-800"],
  .trust-page.trust-light [class~="divide-zinc-900"] > :not([hidden]) ~ :not([hidden]) {
    border-color: #e4e4e7 !important;
  }

  html.trust-light .trust-page [class~="text-white"],
  html.trust-light .trust-page [class~="!text-white"],
  html.trust-light .trust-page [class~="text-zinc-100"],
  .trust-page.trust-light [class~="text-white"],
  .trust-page.trust-light [class~="!text-white"],
  .trust-page.trust-light [class~="text-zinc-100"] {
    color: #18181b !important;
  }

  html.trust-light .trust-page [class~="text-zinc-400"],
  html.trust-light .trust-page [class~="!text-zinc-400"],
  .trust-page.trust-light [class~="text-zinc-400"],
  .trust-page.trust-light [class~="!text-zinc-400"] {
    color: #52525b !important;
  }

  html.trust-light .trust-page [class~="text-zinc-500"],
  .trust-page.trust-light [class~="text-zinc-500"] {
    color: #71717a !important;
  }

  html.trust-light .trust-page [class~="text-zinc-600"],
  html.trust-light .trust-page [class~="text-zinc-700"],
  html.trust-light .trust-page [class~="text-zinc-800"],
  .trust-page.trust-light [class~="text-zinc-600"],
  .trust-page.trust-light [class~="text-zinc-700"],
  .trust-page.trust-light [class~="text-zinc-800"] {
    color: #a1a1aa !important;
  }

  html.trust-light .trust-page [class~="hover:!text-white"]:hover,
  .trust-page.trust-light [class~="hover:!text-white"]:hover {
    color: #18181b !important;
  }

  html.trust-light .trust-page [class~="hover:border-zinc-700"]:hover,
  .trust-page.trust-light [class~="hover:border-zinc-700"]:hover {
    border-color: #d4d4d8 !important;
  }

  html.trust-light .trust-page .trust-email-address,
  .trust-page.trust-light .trust-email-address {
    color: #3f3f46 !important;
    text-decoration: underline !important;
    text-decoration-color: #d4d4d8 !important;
    text-underline-offset: 3px;
    -webkit-text-fill-color: #3f3f46 !important;
  }

	  html.trust-light .trust-page .trust-email-address:hover,
	  .trust-page.trust-light .trust-email-address:hover {
	    color: #18181b !important;
	    text-decoration-color: #a1a1aa !important;
	    -webkit-text-fill-color: #18181b !important;
	  }

	  .trust-framework-row {
	    transition: background-color 160ms ease;
	  }

	  .trust-framework-row:hover {
	    background: rgba(39, 39, 42, 0.52);
	  }

	  .trust-framework-row:hover .trust-framework-title {
	    color: #fff !important;
	  }

	  .trust-framework-row:hover .trust-framework-status {
	    border-color: rgba(34, 197, 94, 0.38);
	    background: rgba(34, 197, 94, 0.08);
	    color: #d4d4d8 !important;
	  }

	  html.trust-light .trust-page .trust-framework-row:hover,
	  .trust-page.trust-light .trust-framework-row:hover {
	    background: #f4f4f5;
	  }

	  html.trust-light .trust-page .trust-framework-row:hover .trust-framework-title,
	  .trust-page.trust-light .trust-framework-row:hover .trust-framework-title {
	    color: #18181b !important;
	  }

	  html.trust-light .trust-page .trust-framework-row:hover .trust-framework-status,
	  .trust-page.trust-light .trust-framework-row:hover .trust-framework-status {
	    border-color: rgba(34, 197, 94, 0.32) !important;
	    background: rgba(34, 197, 94, 0.08) !important;
	    color: #52525b !important;
	  }

	  html.trust-light .trust-page .trust-document-action,
	  .trust-page.trust-light .trust-document-action {
	    color: #3f3f46 !important;
	    border-color: #d4d4d8 !important;
	    background: #fff !important;
	  }

	  html.trust-light .trust-page .trust-document-action:hover,
	  .trust-page.trust-light .trust-document-action:hover {
	    color: #18181b !important;
	    border-color: #a1a1aa !important;
	    background: #f4f4f5 !important;
	  }

	  html.trust-light .trust-page .trust-document-action-mail,
	  .trust-page.trust-light .trust-document-action-mail {
	    color: #3f3f46 !important;
	    border-color: #d4d4d8 !important;
	    background: #fff !important;
	    text-decoration: none !important;
	    -webkit-text-fill-color: #3f3f46 !important;
	  }

	  html.trust-light .trust-page .trust-document-action-mail:hover,
	  .trust-page.trust-light .trust-document-action-mail:hover {
	    color: #18181b !important;
	    border-color: #a1a1aa !important;
	    background: #f4f4f5 !important;
	    text-decoration: none !important;
	    -webkit-text-fill-color: #18181b !important;
	  }

	  html.trust-light .trust-page .trust-email-icon,
	  .trust-page.trust-light .trust-email-icon {
	    color: #3f3f46 !important;
	  }

	  .trust-logo-light {
	    display: none;
	  }

  html.trust-light .trust-page .trust-logo-dark,
  .trust-page.trust-light .trust-logo-dark {
    display: none;
  }

  html.trust-light .trust-page .trust-logo-light,
  .trust-page.trust-light .trust-logo-light {
    display: block;
  }

  html.trust-light .trust-page .trust-hero-gradient-1,
  .trust-page.trust-light .trust-hero-gradient-1 {
    background: linear-gradient(270deg, rgba(236, 213, 63, 0.18) 0%, rgba(236, 213, 63, 0.075) 34%, rgba(255, 255, 255, 0.48) 72%, rgba(255, 255, 255, 0) 100%) !important;
  }

  html.trust-light .trust-page .trust-hero-gradient-2,
  .trust-page.trust-light .trust-hero-gradient-2 {
    background: radial-gradient(ellipse at 100% 50%, rgba(236, 213, 63, 0.16) 0%, rgba(236, 213, 63, 0.055) 38%, rgba(255, 255, 255, 0) 72%) !important;
  }

  html.trust-light .trust-page .trust-hero-gradient-3,
  .trust-page.trust-light .trust-hero-gradient-3 {
    background: linear-gradient(180deg, rgba(24, 24, 27, 0.025) 0%, rgba(24, 24, 27, 0) 38%, rgba(228, 228, 231, 0.35) 100%) !important;
  }
</style>

<script>
  ;(() => {
    const paramName = 'm'
    const lightValue = 'light'
    const darkValue = 'dark'

    const applyTrustMode = () => {
      const params = new URLSearchParams(window.location.search)
      const isLight = params.get(paramName) === lightValue
      document.documentElement.classList.toggle('trust-light', isLight)
      document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.trust-page')?.classList.toggle('trust-light', isLight)
      }, { once: true })
    }

    const toggleTrustMode = () => {
      const url = new URL(window.location.href)
      const isLight = url.searchParams.get(paramName) === lightValue

      if (isLight) {
        url.searchParams.set(paramName, darkValue)
      } else {
        url.searchParams.set(paramName, lightValue)
      }

      window.history.replaceState({}, '', url)
      document.documentElement.classList.toggle('trust-light', !isLight)
      document.querySelector('.trust-page')?.classList.toggle('trust-light', !isLight)
    }

    applyTrustMode()

    window.addEventListener('keydown', (event) => {
      const tagName = event.target?.tagName
      const isEditable = event.target?.isContentEditable || tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT'

      if (isEditable || event.metaKey || event.ctrlKey || event.altKey || event.key.toLowerCase() !== 'm') return

      toggleTrustMode()
    })
  })()
</script>

<div class="trust-page min-h-screen bg-black text-zinc-100">
  <header class="border-t border-yellow-300 border-b border-zinc-900">
    <div class="mx-auto flex w-full max-w-5xl items-center gap-3 px-6 py-5">
      <a href="https://dotenvx.com" class="inline-flex items-center no-underline hover:no-underline">
        <img src="/assets/img/logo-dotenvx-dark.svg" alt="Dotenvx" class="trust-logo-dark h-4">
        <img src="/assets/img/logo-dotenvx.svg" alt="Dotenvx" class="trust-logo-light h-4">
      </a>
      <span class="text-zinc-700">/</span>
      <a href="https://trust.dotenvx.com" class="text-sm font-medium !text-zinc-400 no-underline hover:!text-white hover:no-underline">Trust Center</a>
    </div>
  </header>

  <main class="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
    <section class="relative overflow-hidden border border-zinc-900 bg-black px-6 py-12 md:px-8 md:py-16">
      <div class="pointer-events-none absolute inset-0" aria-hidden="true">
        <div class="trust-hero-gradient-1 absolute inset-0 bg-[linear-gradient(270deg,rgba(236,213,63,0.11)_0%,rgba(236,213,63,0.045)_34%,rgba(0,0,0,0.18)_72%,rgba(0,0,0,0)_100%)]"></div>
        <div class="trust-hero-gradient-2 absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,rgba(236,213,63,0.10)_0%,rgba(236,213,63,0.035)_38%,rgba(0,0,0,0)_72%)]"></div>
        <div class="trust-hero-gradient-3 absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.025)_0%,rgba(255,255,255,0)_38%,rgba(0,0,0,0.18)_100%)]"></div>
      </div>
      <div class="relative z-10">
        <h1 class="max-w-3xl text-2xl font-semibold leading-tight text-white md:text-3xl">Dotenvx</h1>
        <p class="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
          From the creator of dotenv, Dotenvx extends the <code>.env</code> workflow trusted by developers for over a decade with encryption, key separation, and secure secret distribution.
        </p>
        <a class="trust-email-address mt-5 inline-flex items-center gap-2 text-sm font-medium !text-[#ecd53f] no-underline hover:!text-[#f7e87a] hover:no-underline" href="mailto:security@dotenvx.com">
          <svg class="trust-email-icon h-4 w-4 text-[#ecd53f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v10.5A2.75 2.75 0 0 1 17.25 20H6.75A2.75 2.75 0 0 1 4 17.25V6.75Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="m5 7 7 5 7-5" />
          </svg>
          <span>security@dotenvx.com</span>
        </a>
      </div>
    </section>

    <nav aria-label="Trust center" class="mt-12 flex flex-wrap gap-2 border-y border-zinc-900 py-3">
      <a href="#compliance" class="inline-flex items-center gap-2 rounded border border-zinc-800 px-3 py-2 text-sm font-medium !text-zinc-400 no-underline hover:border-zinc-700 hover:!text-white hover:no-underline">Compliance</a>
      <a href="#documents" class="inline-flex items-center gap-2 rounded border border-zinc-800 px-3 py-2 text-sm font-medium !text-zinc-400 no-underline hover:border-zinc-700 hover:!text-white hover:no-underline">
        <span>Documents</span>
        <span class="rounded-sm border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-[0.65rem] font-semibold leading-none text-zinc-500">4</span>
      </a>
      <a href="#controls" class="inline-flex items-center gap-2 rounded border border-zinc-800 px-3 py-2 text-sm font-medium !text-zinc-400 no-underline hover:border-zinc-700 hover:!text-white hover:no-underline">
        <span>Security Controls</span>
        <span class="rounded-sm border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-[0.65rem] font-semibold leading-none text-zinc-500">16</span>
      </a>
      <a href="#subprocessors" class="inline-flex items-center gap-2 rounded border border-zinc-800 px-3 py-2 text-sm font-medium !text-zinc-400 no-underline hover:border-zinc-700 hover:!text-white hover:no-underline">
        <span>Subprocessors</span>
        <span class="rounded-sm border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-[0.65rem] font-semibold leading-none text-zinc-500">8</span>
      </a>
    </nav>

    <div class="mt-12 space-y-10">
      <div class="grid gap-6 lg:grid-cols-3">
        <section id="compliance" class="scroll-mt-5 lg:col-span-1">
          <h2 class="text-xl font-semibold text-white">Compliance Overview</h2>
          <p class="mt-2 text-sm text-zinc-500">Formal assurance work currently underway.</p>
          <div class="mt-4 border border-zinc-800 bg-zinc-950">
            <div class="border-b border-zinc-900 bg-zinc-900/40 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">Framework</div>
            <div class="divide-y divide-zinc-900">
	              <div class="trust-framework-row px-5 py-5">
	                <div class="flex items-center gap-4">
	                  {% include logos/framework-soc2.html uid="overview-soc2" class="h-12 w-12" %}
	                  <div class="min-w-0">
	                    <p class="trust-framework-title m-0 text-sm font-semibold text-white">SOC 2 Type 1</p>
	                    <span class="trust-framework-status mt-2 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-zinc-800 bg-black px-2.5 py-1 text-[0.68rem] font-semibold text-zinc-500">
                      <span class="text-green-500" aria-hidden="true">◐</span>
                      <span>Readiness in Progress</span>
                    </span>
                  </div>
                </div>
              </div>
	              <div class="trust-framework-row px-5 py-5">
	                <div class="flex items-center gap-4">
	                  {% include logos/framework-iso27001.html class="h-12 w-12" %}
	                  <div class="min-w-0">
	                    <p class="trust-framework-title m-0 text-sm font-semibold text-white">ISO 27001</p>
	                    <span class="trust-framework-status mt-2 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-zinc-800 bg-black px-2.5 py-1 text-[0.68rem] font-semibold text-zinc-500">
                      <span class="text-green-500" aria-hidden="true">◐</span>
                      <span>Readiness in Progress</span>
                    </span>
                  </div>
                </div>
              </div>
	              <div class="trust-framework-row px-5 py-5">
	                <div class="flex items-center gap-4">
	                  {% include logos/framework-gdpr.html class="h-12 w-12" %}
	                  <div class="min-w-0">
	                    <p class="trust-framework-title m-0 text-sm font-semibold text-white">GDPR</p>
	                    <span class="trust-framework-status mt-2 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-zinc-800 bg-black px-2.5 py-1 text-[0.68rem] font-semibold text-zinc-500">
                      <span class="text-green-500" aria-hidden="true">◐</span>
                      <span>DPA in Preparation</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section id="documents" class="scroll-mt-5 lg:col-span-2">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 class="text-xl font-semibold text-white">Documents</h2>
            <p class="mt-2 text-sm text-zinc-500">Security artifacts and review materials.</p>
          </div>
        </div>
        <div class="mt-4 overflow-x-auto border border-zinc-800 bg-zinc-950">
          <table class="w-full min-w-[38rem] border-collapse">
            <thead>
              <tr class="border-b border-zinc-900 bg-zinc-900/40 text-left text-xs font-semibold uppercase tracking-widest text-zinc-500">
                <th class="px-5 py-3 font-semibold">Document</th>
                <th class="w-44 px-5 py-3 text-right font-semibold"><span class="sr-only">Action</span></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-zinc-900">
              <tr class="hover:bg-zinc-900/60">
                <td class="p-0">
                  <a href="https://dotenvx.com/whitepaper.pdf" target="_blank" rel="noopener noreferrer" class="flex min-w-0 items-center gap-4 px-5 py-5 no-underline hover:no-underline">
                    <span class="flex h-11 w-11 shrink-0 items-center justify-center border border-zinc-800 bg-black text-zinc-400">
                      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 3.75h6.25L18 8.5v11.75H7V3.75Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 4v5h5" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.5 13h5" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.5 16h5" />
                      </svg>
                    </span>
                    <span class="min-w-0">
                      <span class="block truncate text-sm font-semibold !text-white">Dotenvx Whitepaper</span>
                      <span class="mt-1 block text-sm font-normal leading-6 !text-zinc-500">Reducing secrets risk with cryptographic separation.</span>
                    </span>
                  </a>
                </td>
                <td class="p-0 align-middle">
                  <a href="https://dotenvx.com/whitepaper.pdf" target="_blank" rel="noopener noreferrer" class="block px-5 py-5 text-right no-underline hover:no-underline">
                    <span class="trust-document-action inline-flex w-36 items-center justify-center gap-2 whitespace-nowrap border border-zinc-800 bg-black px-3 py-2 text-xs font-semibold text-zinc-300 hover:border-zinc-700 hover:text-white">
                      <span>Open Document</span>
                      <svg class="relative top-px h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h8v8" />
                      </svg>
                    </span>
                  </a>
                </td>
              </tr>
              <tr class="hover:bg-zinc-900/60">
                <td class="px-5 py-5">
                  <div class="flex min-w-0 items-center gap-4">
                    <span class="flex h-11 w-11 shrink-0 items-center justify-center border border-zinc-800 bg-black text-zinc-400">
                      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 3.75h6.25L18 8.5v11.75H7V3.75Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 4v5h5" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.5 13h5" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.5 16h3" />
                      </svg>
                    </span>
                    <span class="min-w-0">
                      <span class="block truncate text-sm font-semibold !text-white">Pentest Report</span>
                      <span class="mt-1 block text-sm font-normal leading-6 !text-zinc-500">Security assessment report.</span>
                    </span>
                  </div>
                </td>
                <td class="px-5 py-5 text-right align-middle">
                  <a href="mailto:security@dotenvx.com?subject=Pentest%20Report%20Access%20Request" class="trust-document-action-mail inline-flex w-36 items-center justify-center gap-2 whitespace-nowrap border border-zinc-800 bg-black px-3 py-2 text-xs font-semibold !text-zinc-300 no-underline hover:border-zinc-700 hover:!text-white hover:no-underline">
                    <span>Request Access</span>
                    <svg class="relative top-px h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.75 6.75h14.5v10.5H4.75V6.75Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 7.25 6.75 5 6.75-5" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr class="hover:bg-zinc-900/60">
                <td class="p-0">
                  <a href="https://dotenvx.com/privacy" target="_blank" rel="noopener noreferrer" class="flex min-w-0 items-center gap-4 px-5 py-5 no-underline hover:no-underline">
                    <span class="flex h-11 w-11 shrink-0 items-center justify-center border border-zinc-800 bg-black text-zinc-400">
                      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75c2.1 2.26 3.15 5.01 3.15 8.25S14.1 18 12 20.25C9.9 18 8.85 15.25 8.85 12S9.9 6.01 12 3.75Z" />
                      </svg>
                    </span>
                    <span class="min-w-0">
                      <span class="block truncate text-sm font-semibold !text-white">Privacy Policy</span>
                      <span class="mt-1 block text-sm font-normal leading-6 !text-zinc-500">Data handling and privacy commitments.</span>
                    </span>
                  </a>
                </td>
                <td class="p-0 align-middle">
                  <a href="https://dotenvx.com/privacy" target="_blank" rel="noopener noreferrer" class="block px-5 py-5 text-right no-underline hover:no-underline">
                    <span class="trust-document-action inline-flex w-36 items-center justify-center gap-2 whitespace-nowrap border border-zinc-800 bg-black px-3 py-2 text-xs font-semibold text-zinc-300 hover:border-zinc-700 hover:text-white">
                      <span>Open Webpage</span>
                      <svg class="relative top-px h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h8v8" />
                      </svg>
                    </span>
                  </a>
                </td>
              </tr>
              <tr class="hover:bg-zinc-900/60">
                <td class="p-0">
                  <a href="https://dotenvx.com/terms" target="_blank" rel="noopener noreferrer" class="flex min-w-0 items-center gap-4 px-5 py-5 no-underline hover:no-underline">
                    <span class="flex h-11 w-11 shrink-0 items-center justify-center border border-zinc-800 bg-black text-zinc-400">
                      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75c2.1 2.26 3.15 5.01 3.15 8.25S14.1 18 12 20.25C9.9 18 8.85 15.25 8.85 12S9.9 6.01 12 3.75Z" />
                      </svg>
                    </span>
                    <span class="min-w-0">
                      <span class="block truncate text-sm font-semibold !text-white">Terms of Service</span>
                      <span class="mt-1 block text-sm font-normal leading-6 !text-zinc-500">Legal terms for using Dotenvx services.</span>
                    </span>
                  </a>
                </td>
                <td class="p-0 align-middle">
                  <a href="https://dotenvx.com/terms" target="_blank" rel="noopener noreferrer" class="block px-5 py-5 text-right no-underline hover:no-underline">
                    <span class="trust-document-action inline-flex w-36 items-center justify-center gap-2 whitespace-nowrap border border-zinc-800 bg-black px-3 py-2 text-xs font-semibold text-zinc-300 hover:border-zinc-700 hover:text-white">
                      <span>Open Webpage</span>
                      <svg class="relative top-px h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h8v8" />
                      </svg>
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      </div>

      <section id="controls" class="scroll-mt-5">
        <div>
          <div class="flex flex-wrap items-center gap-3">
            <h2 class="text-xl font-semibold text-white">Compliance Program</h2>
            <span class="border border-zinc-800 bg-zinc-950 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-zinc-500">Being formalized</span>
          </div>
          <p class="mt-2 text-sm text-zinc-500">An overview of security controls in place.</p>
        </div>
        <div class="mt-5 space-y-6">
          <div>
            <h3 class="m-0 text-base font-semibold text-white">Infrastructure Security</h3>
            <table class="mt-3 w-full border-collapse border border-zinc-800 bg-zinc-950">
              <thead>
                <tr class="border-b border-zinc-900 bg-zinc-900/40 text-left text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  <th class="px-5 py-3 font-semibold">Control</th>
                  <th class="w-36 px-5 py-3 text-right font-semibold"><span class="sr-only">Frameworks</span></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-900">
                <tr>
                  <td class="px-5 py-4 text-sm leading-6 text-zinc-500">Production infrastructure access is restricted.</td>
                  <td class="px-5 py-4 text-right">{% include components/framework-badges.html frameworks="soc2" uid="prod-access" %}</td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-sm leading-6 text-zinc-500">Public web properties are served over HTTPS.</td>
                  <td class="px-5 py-4 text-right">{% include components/framework-badges.html frameworks="soc2,iso27001" uid="https" %}</td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-sm leading-6 text-zinc-500">Production systems are monitored for operational events.</td>
                  <td class="px-5 py-4 text-right">{% include components/framework-badges.html frameworks="soc2,iso27001" uid="prod-monitoring" %}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 class="m-0 text-base font-semibold text-white">Internal Security</h3>
            <table class="mt-3 w-full border-collapse border border-zinc-800 bg-zinc-950">
              <thead>
                <tr class="border-b border-zinc-900 bg-zinc-900/40 text-left text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  <th class="px-5 py-3 font-semibold">Control</th>
                  <th class="w-36 px-5 py-3 text-right font-semibold"><span class="sr-only">Frameworks</span></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-900">
                <tr>
                  <td class="px-5 py-4 text-sm leading-6 text-zinc-500">MFA is used for business-critical accounts where supported.</td>
                  <td class="px-5 py-4 text-right">{% include components/framework-badges.html frameworks="soc2" uid="mfa" %}</td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-sm leading-6 text-zinc-500">Unique account authentication is used where supported.</td>
                  <td class="px-5 py-4 text-right">{% include components/framework-badges.html frameworks="soc2" uid="unique-auth" %}</td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-sm leading-6 text-zinc-500">Privileged access is limited to named accounts.</td>
                  <td class="px-5 py-4 text-right">{% include components/framework-badges.html frameworks="soc2,iso27001" uid="privileged-access" %}</td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-sm leading-6 text-zinc-500">Security findings are classified and tracked.</td>
                  <td class="px-5 py-4 text-right">{% include components/framework-badges.html frameworks="soc2,iso27001" uid="security-findings" %}</td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-sm leading-6 text-zinc-500">Security reports can be sent to <a href="mailto:security@dotenvx.com" class="trust-email-address !text-[#ecd53f] no-underline hover:!text-[#f7e87a] hover:no-underline">security@dotenvx.com</a>.</td>
                  <td class="px-5 py-4 text-right">{% include components/framework-badges.html frameworks="soc2,iso27001" uid="security-reports" %}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 class="m-0 text-base font-semibold text-white">Product Security</h3>
            <table class="mt-3 w-full border-collapse border border-zinc-800 bg-zinc-950">
              <thead>
                <tr class="border-b border-zinc-900 bg-zinc-900/40 text-left text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  <th class="px-5 py-3 font-semibold">Control</th>
                  <th class="w-36 px-5 py-3 text-right font-semibold"><span class="sr-only">Frameworks</span></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-900">
                <tr>
                  <td class="px-5 py-4 text-sm leading-6 text-zinc-500">Material code changes are reviewed before release.</td>
                  <td class="px-5 py-4 text-right">{% include components/framework-badges.html frameworks="soc2" uid="code-review" %}</td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-sm leading-6 text-zinc-500">Dependency and source scans are performed.</td>
                  <td class="px-5 py-4 text-right">{% include components/framework-badges.html frameworks="soc2,iso27001" uid="dependency-scans" %}</td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-sm leading-6 text-zinc-500">Independent third-party penetration testing is conducted at least annually.</td>
                  <td class="px-5 py-4 text-right">{% include components/framework-badges.html frameworks="soc2,iso27001" uid="pentest" %}</td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-sm leading-6 text-zinc-500">Encrypted <code>.env</code> files are used with keys stored separately.</td>
                  <td class="px-5 py-4 text-right">{% include components/framework-badges.html frameworks="soc2,iso27001" uid="encrypted-env" %}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 class="m-0 text-base font-semibold text-white">Data & Privacy</h3>
            <table class="mt-3 w-full border-collapse border border-zinc-800 bg-zinc-950">
              <thead>
                <tr class="border-b border-zinc-900 bg-zinc-900/40 text-left text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  <th class="px-5 py-3 font-semibold">Control</th>
                  <th class="w-36 px-5 py-3 text-right font-semibold"><span class="sr-only">Frameworks</span></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-900">
                <tr>
                  <td class="px-5 py-4 text-sm leading-6 text-zinc-500">The service does not store customer secret values.</td>
                  <td class="px-5 py-4 text-right">{% include components/framework-badges.html frameworks="soc2" uid="no-secret-storage" %}</td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-sm leading-6 text-zinc-500">Customer data handling is limited to service operation and support.</td>
                  <td class="px-5 py-4 text-right">{% include components/framework-badges.html frameworks="soc2,iso27001" uid="data-handling" %}</td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-sm leading-6 text-zinc-500">Data retention and deletion procedures are maintained.</td>
                  <td class="px-5 py-4 text-right">{% include components/framework-badges.html frameworks="soc2,iso27001" uid="data-retention" %}</td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-sm leading-6 text-zinc-500">Subprocessors and supporting vendors are reviewed.</td>
                  <td class="px-5 py-4 text-right">{% include components/framework-badges.html frameworks="soc2,iso27001" uid="subprocessors" %}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="subprocessors" class="scroll-mt-5">
        <div>
          <h2 class="text-xl font-semibold text-white">Subprocessors</h2>
          <p class="mt-2 text-sm text-zinc-500">Third-party providers used to deliver, secure, and operate Dotenvx services.</p>
        </div>
        <div class="mt-4 overflow-x-auto border border-zinc-800 bg-zinc-950">
          <table class="w-full min-w-[44rem] border-collapse">
            <colgroup>
              <col class="w-[42%]">
              <col>
            </colgroup>
            <thead>
              <tr class="border-b border-zinc-900 bg-zinc-900/40 text-left text-xs font-semibold uppercase tracking-widest text-zinc-500">
                <th class="px-6 py-4 font-semibold">Provider</th>
                <th class="px-6 py-4 font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-zinc-900">
              <tr class="hover:bg-zinc-900/60">
                <td class="px-6 py-5">
                  <div class="flex items-center gap-4">
                    <span class="flex h-10 w-10 shrink-0 items-center justify-center text-zinc-400">
                      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727"/>
                      </svg>
                    </span>
                    <span class="text-base font-semibold text-white">Cloudflare</span>
                  </div>
                </td>
                <td class="px-6 py-5 text-sm leading-6 text-zinc-500">DNS, traffic proxying, CDN, and network security.</td>
              </tr>
              <tr class="hover:bg-zinc-900/60">
                <td class="px-6 py-5">
                  <div class="flex items-center gap-4">
                    <span class="flex h-10 w-10 shrink-0 items-center justify-center text-zinc-400">
                      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </span>
                    <span class="text-base font-semibold text-white">GitHub</span>
                  </div>
                </td>
                <td class="px-6 py-5 text-sm leading-6 text-zinc-500">Authentication, account identity, and repository metadata.</td>
              </tr>
              <tr class="hover:bg-zinc-900/60">
                <td class="px-6 py-5">
                  <div class="flex items-center gap-4">
                    <span class="flex h-10 w-10 shrink-0 items-center justify-center text-zinc-400">
                      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                      </svg>
                    </span>
                    <span class="text-base font-semibold text-white">Google Workspace</span>
                  </div>
                </td>
                <td class="px-6 py-5 text-sm leading-6 text-zinc-500">Business email, internal documentation, and security communications.</td>
              </tr>
              <tr class="hover:bg-zinc-900/60">
                <td class="px-6 py-5">
                  <div class="flex items-center gap-4">
                    <span class="flex h-10 w-10 shrink-0 items-center justify-center text-zinc-400">
                      <svg class="h-7 w-7" viewBox="0 0 101.8 119.14" fill="currentColor" aria-hidden="true">
                        <path d="M91.62,0C86,0,81.43,5.18,81.43,11.51V53.64c0,6.34-4.58,11.51-10.17,11.51S61.08,60,61.08,53.64V34.17c0-6.33-4.58-11.51-10.18-11.51S40.72,27.84,40.72,34.17v3.36C40.72,43.86,36.14,49,30.54,49S20.36,43.86,20.36,37.53V30.89c0-6.33-4.58-11.51-10.18-11.51S0,24.56,0,30.89v47.8C0,85,4.58,90.2,10.18,90.2S20.36,85,20.36,78.69V72.05c0-6.33,4.58-11.5,10.18-11.5s10.18,5.17,10.18,11.5v35.59c0,6.33,4.58,11.5,10.18,11.5s10.18-5.17,10.18-11.5V88.17c0-6.33,4.58-11.51,10.18-11.51s10.17,5.18,10.17,11.51v14.51c0,6.33,4.59,11.51,10.19,11.51S101.8,109,101.8,102.68V11.51C101.8,5.18,97.22,0,91.62,0Z" />
                      </svg>
                    </span>
                    <span class="text-base font-semibold text-white">Hatchbox</span>
                  </div>
                </td>
                <td class="px-6 py-5 text-sm leading-6 text-zinc-500">Production deployment orchestration and infrastructure management.</td>
              </tr>
              <tr class="hover:bg-zinc-900/60">
                <td class="px-6 py-5">
                  <div class="flex items-center gap-4">
                    <span class="flex h-10 w-10 shrink-0 items-center justify-center text-zinc-400">
                      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M0 0v24h24V0H0zm4.602 4.025h2.244c.509 0 .716.215.716.717v5.64h8.883v-5.64c0-.509.215-.717.717-.717h2.229c.5 0 .71.23.724.717v14.516c0 .509-.215.717-.717.717h-2.23c-.51 0-.717-.215-.717-.717v-5.735H7.562v5.735c0 .516-.215.717-.716.717H4.602c-.51 0-.717-.208-.717-.717V4.742c0-.509.207-.717.717-.717z"/>
                      </svg>
                    </span>
                    <span class="text-base font-semibold text-white">Hetzner</span>
                  </div>
                </td>
                <td class="px-6 py-5 text-sm leading-6 text-zinc-500">Application hosting and infrastructure.</td>
              </tr>
              <tr class="hover:bg-zinc-900/60">
                <td class="px-6 py-5">
                  <div class="flex items-center gap-4">
                    <span class="flex h-10 w-10 shrink-0 items-center justify-center text-zinc-400">
                      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M11.999 0c-.346 0-.691.131-.955.395L.394 11.045a1.35 1.35 0 0 0 0 1.91l6.243 6.24.915-1.95L2.306 12l9.693-9.693 1.158 1.157 1.432-1.432L12.954.395A1.346 1.346 0 0 0 11.999 0Zm5.54 1.106a.331.331 0 0 0-.218.102l-1.777 1.778-1.432 1.432-8.393 8.392h4.726l-3.76 9.26c-.139.34.29.626.55.366l1.321-1.32v-.001l1.432-1.432h.001l8.56-8.561h-4.727l2.083-4.91v.001l.854-2.012 1.112-2.623c.108-.256-.108-.485-.333-.472Zm.25 4.125-.853 2.012 4.756 4.756L12 21.693l-1.056-1.055-1.432 1.432 1.533 1.534a1.35 1.35 0 0 0 1.91 0l10.65-10.65a1.35 1.35 0 0 0 0-1.91z"/>
                      </svg>
                    </span>
                    <span class="text-base font-semibold text-white">Honeybadger</span>
                  </div>
                </td>
                <td class="px-6 py-5 text-sm leading-6 text-zinc-500">Error monitoring and operational diagnostics.</td>
              </tr>
              <tr class="hover:bg-zinc-900/60">
                <td class="px-6 py-5">
                  <div class="flex items-center gap-4">
                    <span class="flex h-10 w-10 shrink-0 items-center justify-center text-zinc-400">
                      <svg class="h-7 w-7" viewBox="0 0 90 90" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M6 0h12.947v4.737h18.948V0h14.208v4.736H71.05V0H84a6 6 0 0 1 6 6v12.947h-4.737v18.948H90v14.21h-4.737v18.948H90V84a6 6 0 0 1-6 6H71.05v-4.738H52.103V90H37.895v-4.737H18.947V90H6a6 6 0 0 1-6-6V71.053h4.737V52.105H0v-14.21h4.736V18.947H0V6a6 6 0 0 1 6-6Zm52.26 46.11c2.558-2.578 3.838-5.941 3.838-10.09 0-3.344-.584-6.023-1.753-8.037-1.168-2.034-3.102-3.545-5.8-4.532-2.68-.987-6.305-1.48-10.877-1.48h-16.95v5.68h5.68v34.17h-5.68v5.68h18.49v-5.68h-5.92V50.038h5.981c6.103-.04 10.434-1.35 12.992-3.928Zm-5.65-16.465c1.673 1.309 2.508 3.384 2.508 6.223 0 2.236-.392 3.988-1.178 5.257-.785 1.25-2.014 2.135-3.686 2.66-1.671.503-3.907.754-6.707.754h-4.26V27.651h4.743c4.049 0 6.91.664 8.58 1.994Z" clip-rule="evenodd"/>
                      </svg>
                    </span>
                    <span class="text-base font-semibold text-white">Postmark</span>
                  </div>
                </td>
                <td class="px-6 py-5 text-sm leading-6 text-zinc-500">Transactional email delivery and related message metadata.</td>
              </tr>
              <tr class="hover:bg-zinc-900/60">
                <td class="px-6 py-5">
                  <div class="flex items-center gap-4">
                    <span class="flex h-10 w-10 shrink-0 items-center justify-center text-zinc-400">
                      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/>
                      </svg>
                    </span>
                    <span class="text-base font-semibold text-white">Stripe</span>
                  </div>
                </td>
                <td class="px-6 py-5 text-sm leading-6 text-zinc-500">Billing, checkout, payment processing, and customer billing records.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>

    <footer class="mt-16 border-t border-zinc-900 py-6">
      <p class="text-center text-xs font-medium text-zinc-600">
        Maintained by
        <a href="mailto:security@dotenvx.com" class="!text-zinc-400 no-underline hover:!text-white hover:no-underline">Dotenvx Security</a>
        <span class="mx-1.5 text-zinc-600">·</span>
        Trust automation by
        <a href="https://github.com/trycompai/comp" class="!text-zinc-400 no-underline hover:!text-white hover:no-underline">CompAI</a>
      </p>
    </footer>
  </main>
</div>
