---
title: "Agentic Secret Storage"
image: "/assets/img/og-image-ass.png"
---

<section class="w-full max-w-2xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-8">
  <img id="ass-rotate" src="/assets/img/ass1.jpg" class="rounded-md border border-zinc-200 dark:border-zinc-800 mx-auto max-w-sm" />

  <!--
  <img
    id="ass-hero"
    src="/assets/img/ass.png"
    data-src-blurred="/assets/img/ass-blurred.jpg"
    data-src-revealed="/assets/img/ass-revealed.jpg"
    class="rounded-md border border-zinc-200 dark:border-zinc-800 mx-auto max-w-sm"
  />
  -->

  <h1 class="hidden font-extrabold text-3xl sm:text-5xl text-zinc-950 dark:text-zinc-50 text-center">Agentic Secret Storage</h1>
  <p class="text-center">Secrets designed for agents. No logins. No consoles. Pure cryptography.</p>
  <p class="text-center">Get in touch for early access – <a href="mailto:mot@dotenvx.com" target="_blank">mot@dotenvx.com</a>.</p>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const img = document.getElementById('ass-rotate')
    if (!img) return

    const frames = [
      '/assets/img/ass1.jpg',
      '/assets/img/ass2.jpg',
      '/assets/img/ass3.jpg',
      '/assets/img/ass4.jpg',
      '/assets/img/ass5.jpg',
      '/assets/img/ass6.jpg'
    ]

    let index = 0

    setInterval(() => {
      index = (index + 1) % frames.length
      img.src = frames[index]
    }, 1000) // 1000 ms = 1 second
  })
</script>

<script>
  // document.addEventListener('DOMContentLoaded', function () {
  //   const img = document.getElementById('ass-hero')
  //   if (!img) return

  //   const blurred = img.dataset.srcBlurred
  //   const revealed = img.dataset.srcRevealed

  //   img.addEventListener('mouseenter', function () {
  //     img.src = revealed
  //   })

  //   img.addEventListener('mouseleave', function () {
  //     img.src = blurred
  //   })
  // })
</script>
