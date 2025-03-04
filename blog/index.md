---
title: "Blog"
---

<section class="mx-auto max-w-6xl px-4 pt-20">
  <ul class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
    {% for post in site.categories.blog %}
      {% if forloop.first %}
        <li class="col-span-full">
          <a href="{{ post.url }}">
            <div class="space-y-2 md:grid md:grid-cols-3 md:gap-4">
              <img alt="{{ post.title }}" loading="lazy" width="395" height="208" decoding="async" class="col-span-2 w-full object-cover rounded lg:rounded-md border border-zinc-50 dark:border-zinc-700 shadow-sm" style="color:transparent" src="{{ post.image }}">

              <div class="mt-2 lg:mt-0">

                <h2 class="lg:text-4xl text-xl font-bold text-zinc-900 dark:text-zinc-100">{{ post.title }}</h2>

                <div class="mt-2.5 flex items-center gap-1.5 md:gap-2 lg:mt-3">

                  <img alt="Mot" loading="lazy" width="48" height="48" decoding="async" class="h-6 w-6 rounded-full object-cover" style="color:transparent" src="/assets/img/mot.jpg">

                  <div class="flex gap-1">
                    <p class="text-zinc-900 dark:text-zinc-100">Mot</p>
                    <p class="text-zinc-500">
                      <time datetime="2023-09-14">· {{ post.date | date: "%B %d, %Y" }}</time>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
      {% else %}
        <li class="my-6 sm:my-0">
          <a href="{{ post.url }}">
            <div class="space-y-2">
              <img alt="{{ post.title }}" loading="lazy" width="395" height="208" decoding="async" class="col-span-2 w-full object-cover rounded lg:rounded-md border border-zinc-50 dark:border-zinc-700 shadow-sm" style="color:transparent" src="{{ post.image }}">

              <div class="col-span-2">

                <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100">{{ post.title }}</h2>

                <div class="mt-2.5 flex items-center gap-1.5 md:gap-2 lg:mt-3">

                  <img alt="Mot" loading="lazy" width="48" height="48" decoding="async" class="h-6 w-6 rounded-full object-cover" style="color:transparent" src="/assets/img/mot.jpg">

                  <div class="flex gap-1">
                    <p class="text-zinc-900 dark:text-zinc-100">Mot</p>
                    <p class="text-zinc-500">
                      <time datetime="2023-09-14">· {{ post.date | date: "%B %d, %Y" }}</time>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
      {% endif %}
    {% endfor %}
  </ul>

  <div class="prose prose-lg mx-auto max-w-prose">
    <p class="text-center my-10"><a href="/feed.xml" class="link-primary underline">Subscribe to this blog's feed</a></p>
  </div>
</section>

