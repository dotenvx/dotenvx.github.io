---
title: "Spec"
---

<section class="w-full max-w-5xl mx-auto px-6 mt-10">
  <h1 class="text-center font-bold tracking-tight leading-none text-zinc-950 dark:text-zinc-50 text-2xl py-1">.env</h1>
  <h2 class="my-5 text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-zinc-950 dark:text-[#ECD53F]">Parsing Spec</h2>
  <p class="mx-auto mt-3 max-w-3xl text-center text-md md:text-lg text-zinc-600 leading-2 mb-6">A formal comparison of dotenv behavior across popular libraries.</p>

  <div class="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-700">
    <table class="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 text-sm text-left">
      <thead class="bg-zinc-50 dark:bg-zinc-800">
        <tr>
          <th class="px-4 py-2 font-semibold text-zinc-600 dark:text-zinc-300 whitespace-nowrap">Scenario</th>
          {% assign langs = site.data.report[0].results %}
          {% for lang in langs %}
            <th class="px-4 py-2 font-semibold text-zinc-600 dark:text-zinc-300 whitespace-nowrap">
              {{ lang[0] | capitalize }}
            </th>
          {% endfor %}
        </tr>
      </thead>
      <tbody class="divide-y divide-zinc-100 dark:divide-zinc-800">
        {% for row in site.data.report %}
          <tr class="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
            <td class="px-4 py-2 font-medium text-zinc-800 dark:text-zinc-200 whitespace-nowrap">{{ row.scenario }}</td>
            {% for lang in row.results %}
            <td class="text-center text-zinc-800 dark:text-zinc-200">
              {% assign result = lang[1] %}
              <span class="relative group inline-block cursor-help px-4 py-2">
                {% if result.pass %}
                  <span class="text-green-500">✔</span>
                {% else %}
                  <span class="text-red-500">✘</span>
                {% endif %}
                <div
                  class="pointer-events-none absolute z-10 left-full ml-1 bg-white dark:bg-zinc-900 text-xs text-left text-zinc-800 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 shadow-lg rounded-md p-2 w-64 max-w-xs break-words opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  style="top: 0%"
                >
                  <pre class="whitespace-pre-wrap">{{ result.output | escape }}</pre>
                </div>
              </span>
            </td>
            {% endfor %}
          </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>

</section>
