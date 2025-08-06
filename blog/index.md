---
title: "Blog"
---

<section class="w-full max-w-2xl mx-auto px-6 mt-12 md:mt-20 flex flex-col gap-4">
  <h1 class="font-extrabold text-2xl text-zinc-950 dark:text-zinc-50 text-center">Blog</h1>
  <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {% for post in site.categories.blog %}
      <li class="my-6 sm:my-0">
        <a href="{{ post.url }}" class="hover:no-underline bg-transparent p-2 opacity-90 hover:opacity-100 rounded block h-full">
          <div class="space-y-2">
            <img alt="{{ post.title }}" loading="lazy" width="395" height="208" decoding="async" class="" src="{{ post.image }}">
            <div class="flex flex-col">
              <time class="text-xs text-zinc-500 font-normal" datetime="{{ post.date | date: "%Y-%m-%d" }}">
                {{ post.date | date: "%B %d, %Y" }}
              </time>
              <h2 class="font-bold text-zinc-950 dark:text-zinc-50">{{ post.title }}</h2>
            </div>
          </div>
        </a>
      </li>
    {% endfor %}
  </ul>
</section>
