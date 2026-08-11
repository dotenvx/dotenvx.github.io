(function () {
  var DAY_MS = 24 * 60 * 60 * 1000
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  function pad(n) {
    return n < 10 ? "0" + n : String(n)
  }

  function formatDateKey(date) {
    return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate())
  }

  function formatMonth(date) {
    return MONTHS[date.getMonth()]
  }

  function ordinal(n) {
    var v = n % 100
    if (v >= 11 && v <= 13) return n + "th"
    switch (n % 10) {
      case 1: return n + "st"
      case 2: return n + "nd"
      case 3: return n + "rd"
      default: return n + "th"
    }
  }

  function levelForCount(count) {
    if (count <= 0) return 0
    if (count <= 2) return 1
    if (count <= 4) return 2
    if (count <= 7) return 3
    return 4
  }

  function tipForDay(day) {
    var date = day.date instanceof Date ? day.date : new Date(day.date + "T12:00:00")
    var label = formatMonth(date) + " " + ordinal(date.getDate())
    if (!day.count) return "No events on " + label + "."
    if (day.count === 1) return "1 event on " + label + "."
    return day.count.toLocaleString() + " events on " + label + "."
  }

  // Deterministic placeholder until a real usage API is wired.
  function fakeDays(total) {
    var days = []
    var end = new Date()
    end.setHours(12, 0, 0, 0)
    var start = new Date(end.getTime() - (total - 1) * DAY_MS)

    for (var i = 0; i < total; i++) {
      var date = new Date(start.getTime() + i * DAY_MS)
      var weekday = date.getDay()
      var wave = Math.sin(i / 5.5) * 3.2 + Math.cos(i / 11) * 2.1
      var weekendBoost = weekday === 0 || weekday === 6 ? -1.5 : 1.2
      var count = Math.max(0, Math.round(4.5 + wave + weekendBoost + ((i * 3) % 5) * 0.35))
      if (i % 17 === 0) count = 0
      days.push({
        date: date,
        count: count,
        level: levelForCount(count)
      })
    }

    return days
  }

  function normalizeDays(payload) {
    var raw = Array.isArray(payload) ? payload : (payload && payload.days) || []
    return raw.map(function (entry) {
      var date = entry.date instanceof Date ? entry.date : new Date(String(entry.date) + (String(entry.date).length === 10 ? "T12:00:00" : ""))
      var count = Number(entry.count) || 0
      var level = entry.level != null ? Number(entry.level) : levelForCount(count)
      return { date: date, count: count, level: level }
    })
  }

  function monthLabels(days) {
    var weeks = []
    for (var i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7))
    var labels = new Array(weeks.length)
    var lastLabelWeek = -10

    weeks.forEach(function (week, index) {
      var monthStart = week.find(function (day) {
        return day.date.getDate() === 1
      })
      var label = null
      if (monthStart) label = formatMonth(monthStart.date)
      else if (index === 0) label = formatMonth(week[0].date)

      if (label && index - lastLabelWeek >= 2) {
        labels[index] = label
        lastLabelWeek = index
      }
    })

    return labels
  }

  function render(root, days) {
    var labels = monthLabels(days)
    var months = document.createElement("div")
    months.className = "design-access-days-months"
    months.setAttribute("aria-hidden", "true")
    labels.forEach(function (label) {
      var span = document.createElement("span")
      span.className = "design-access-days-month"
      span.textContent = label || ""
      months.appendChild(span)
    })

    var grid = document.createElement("div")
    grid.className = "design-access-days-grid"

    days.forEach(function (day) {
      var tipWrap = document.createElement("span")
      tipWrap.className = "design-tooltip design-tooltip--top"
      tipWrap.tabIndex = 0

      var cell = document.createElement("span")
      cell.className = "design-access-day"
      if (day.level > 0) cell.className += " design-access-day--" + day.level
      cell.dataset.date = formatDateKey(day.date)
      cell.dataset.count = String(day.count)

      var tip = document.createElement("span")
      tip.className = "design-tooltip-tip"
      tip.setAttribute("role", "tooltip")
      tip.textContent = tipForDay(day)

      tipWrap.appendChild(cell)
      tipWrap.appendChild(tip)
      grid.appendChild(tipWrap)
    })

    root.replaceChildren(months, grid)
  }

  function loadDays(mount) {
    var url = mount.getAttribute("data-usage-url")
    if (!url) return Promise.resolve(fakeDays(90))

    return fetch(url, { credentials: "omit" })
      .then(function (res) {
        if (!res.ok) throw new Error("usage " + res.status)
        return res.json()
      })
      .then(normalizeDays)
      .catch(function () {
        return fakeDays(90)
      })
  }

  function init(mount) {
    var root = mount.querySelector("[data-armor-usage-root]")
    if (!root) return
    loadDays(mount).then(function (days) {
      render(root, days)
    })
  }

  function ready(fn) {
    if (document.readyState !== "loading") fn()
    else document.addEventListener("DOMContentLoaded", fn)
  }

  ready(function () {
    document.querySelectorAll("[data-armor-usage]").forEach(init)
  })
})()
