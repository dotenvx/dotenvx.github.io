---
title: prebuild
redirect_to: /features/prebuild
---

<div class="flex flex-col gap-6 mx-auto w-fit text-center items-center mt-40">
  <div class="flex flex-col gap-2">
    <span class="">You are being redirected to</span>
    <a href="/features/prebuild"><u>/features/prebuild</u></a>
  </div>

  <a class="btn-outline w-fit" href="/features/prebuild">Continue</a>

  <span class="text-xs">in <span id="counter">4</span> second(s)</span>
</div>

<script>
  var interval
  interval = setInterval(function() {
    var div = document.querySelector("#counter")
    var count = div.textContent * 1 - 1
    div.textContent = count
    if (count <= 0) {
      window.location.replace("/features/prebuild")
      clearInterval(interval)
    }
  }, 1000)
</script>
