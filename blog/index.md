---
title: "Blog"
---

<section class="w-full max-w-2xl mx-auto px-6 mt-16 md:mt-24 flex flex-col gap-8">
  <h1 class="mb-2 font-canela font-normal tracking-[-0.018em] text-[2.50rem] md:text-[3.00rem] lg:text-[3.50rem] text-center leading-[1.02] md:leading-[1.00] pb-2 text-zinc-100">Blog</h1>
  <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {% for post in site.categories.blog %}
      <li class="">
        <a href="{{ post.url }}" class="hover:no-underline bg-transparent p-2 rounded block h-full">
          <div class="space-y-2">
            <img alt="{{ post.title }}" loading="lazy" width="395" height="208" decoding="async" class="w-full" src="{{ post.image }}">
            <div class="flex flex-col">
              <time class="text-xs text-zinc-500 font-normal" datetime="{{ post.date | date: "%Y-%m-%d" }}">
                {{ post.date | date: "%B %d, %Y" }}
              </time>
              <h2 class="font-bold text-zinc-950 dark:text-white">{{ post.title }}</h2>
            </div>
          </div>
        </a>
      </li>
    {% endfor %}
  </ul>
</section>
