/**
 * hidden-tax-calculator.js
 * Client-side only — no backend, no data stored or sent anywhere.
 * Tax-rate ranges are approximate illustrative averages (GST slabs +
 * state excise/VAT patterns as of 2026), not official figures. See
 * the on-page disclaimer.
 */
(function () {
  "use strict";

  // Category tax-rate ranges (min%, max%). `null` = excluded from the
  // "hidden tax" total (either already-taxed product, or a fixed
  // government charge that isn't really a hidden indirect tax).
  var CATEGORY_RATES = {
    petrol: { min: 45, max: 55, icon: "⛽", label: "Petrol/Fuel" },
    grocery: { min: 0, max: 5, icon: "🛒", label: "Grocery/Kirana" },
    mobile: { min: 18, max: 18, icon: "📱", label: "Mobile & Subscriptions" },
    emi: { min: null, max: null, icon: "💳", label: "EMI/Installments", excluded: "na" },
    hotels: { min: 5, max: 18, icon: "🍽️", label: "Hotels/Cafes/Restaurants" },
    alcohol: { min: 40, max: 60, icon: "🍾", label: "Alcohol" },
    shopping: { min: 12, max: 18, icon: "🛍️", label: "Shopping" },
    electricity: { min: 0, max: 2, icon: "💡", label: "Electricity Bill" },
    ott: { min: 18, max: 18, icon: "📺", label: "OTT/Subscriptions" },
    travel: { min: 5, max: 12, icon: "✈️", label: "Travel" },
    toll: { min: null, max: null, icon: "🛣️", label: "Toll", excluded: "govt" },
    other: { min: 12, max: 12, icon: "🧾", label: "Other" }
  };

  // Illustrative state-wise adjustment for petrol & alcohol only (the
  // two categories where state excise/VAT genuinely swings the range
  // the most). "avg" = All-India Average, used as default.
  var STATE_ADJUST = {
    avg: { petrol: [45, 55], alcohol: [40, 60] },
    mh: { petrol: [52, 58], alcohol: [45, 65] },
    dl: { petrol: [45, 50], alcohol: [40, 55] },
    up: { petrol: [44, 50], alcohol: [40, 58] },
    ka: { petrol: [48, 54], alcohol: [45, 62] },
    tn: { petrol: [46, 52], alcohol: [42, 60] },
    gj: { petrol: [42, 48], alcohol: null }, // prohibition state
    rj: { petrol: [50, 56], alcohol: [40, 58] },
    wb: { petrol: [47, 53], alcohol: [42, 58] },
    mp: { petrol: [48, 54], alcohol: [42, 58] },
    pb: { petrol: [44, 50], alcohol: [40, 55] },
    kl: { petrol: [48, 54], alcohol: [45, 65] },
    tg: { petrol: [46, 52], alcohol: [42, 58] }
  };

  var STATE_LABELS = {
    avg: "All India Average",
    mh: "Maharashtra",
    dl: "Delhi",
    up: "Uttar Pradesh",
    ka: "Karnataka",
    tn: "Tamil Nadu",
    gj: "Gujarat (Prohibition State)",
    rj: "Rajasthan",
    wb: "West Bengal",
    mp: "Madhya Pradesh",
    pb: "Punjab",
    kl: "Kerala",
    tg: "Telangana"
  };

  var CHART_COLORS = ["#0F766E", "#6D28D9", "#D97F2B", "#146B3A", "#B3261E", "#2563EB", "#DB2777", "#65A30D", "#9333EA", "#0891B2"];

  var form = document.getElementById("htc-form");
  var stateSelect = document.getElementById("htc-state");
  var resultsEl = document.getElementById("htc-results");
  var donutChart = null;
  var barChart = null;

  function populateStates() {
    Object.keys(STATE_LABELS).forEach(function (key) {
      var opt = document.createElement("option");
      opt.value = key;
      opt.textContent = STATE_LABELS[key];
      stateSelect.appendChild(opt);
    });
  }

  function fmtINR(n) {
    return "₹" + Math.round(n).toLocaleString("en-IN");
  }

  function getEffectiveRate(catKey, stateKey) {
    var base = CATEGORY_RATES[catKey];
    if (base.min === null) return null;
    if ((catKey === "petrol" || catKey === "alcohol")) {
      var adj = STATE_ADJUST[stateKey] || STATE_ADJUST.avg;
      var range = adj[catKey];
      if (range === null) return null; // e.g. Gujarat alcohol prohibition
      return { min: range[0], max: range[1] };
    }
    return { min: base.min, max: base.max };
  }

  function calculate() {
    var salary = parseFloat(document.getElementById("htc-salary").value) || 0;
    var stateKey = stateSelect.value || "avg";

    var totalSpend = 0;
    var minTax = 0, maxTax = 0;
    var perCategory = []; // {key, label, amount, min, max, taxMidpoint}

    Object.keys(CATEGORY_RATES).forEach(function (key) {
      var input = document.getElementById("htc-cat-" + key);
      var amount = input ? (parseFloat(input.value) || 0) : 0;
      if (amount > 0) totalSpend += amount;

      var rate = getEffectiveRate(key, stateKey);
      var meta = CATEGORY_RATES[key];
      var catMin = 0, catMax = 0;
      if (rate && amount > 0) {
        catMin = amount * (rate.min / 100);
        catMax = amount * (rate.max / 100);
        minTax += catMin;
        maxTax += catMax;
      }
      if (amount > 0) {
        perCategory.push({
          key: key,
          label: meta.label,
          icon: meta.icon,
          amount: amount,
          min: catMin,
          max: catMax,
          mid: (catMin + catMax) / 2,
          excluded: !rate
        });
      }
    });

    renderResults({
      salary: salary,
      totalSpend: totalSpend,
      minTax: minTax,
      maxTax: maxTax,
      perCategory: perCategory,
      stateKey: stateKey
    });
  }

  function renderResults(d) {
    var midTax = (d.minTax + d.maxTax) / 2;
    var annualMin = d.minTax * 12;
    var annualMax = d.maxTax * 12;
    var pctMin = d.salary > 0 ? (d.minTax / d.salary) * 100 : 0;
    var pctMax = d.salary > 0 ? (d.maxTax / d.salary) * 100 : 0;
    var pctMid = (pctMin + pctMax) / 2;
    var savings = d.salary > 0 ? d.salary - d.totalSpend : null;

    document.getElementById("htc-stat-spend").textContent = fmtINR(d.totalSpend);
    document.getElementById("htc-stat-range").textContent =
      d.minTax || d.maxTax ? fmtINR(d.minTax) + " – " + fmtINR(d.maxTax) : "₹0";
    document.getElementById("htc-stat-annual").textContent =
      annualMin || annualMax ? fmtINR(annualMin) + " – " + fmtINR(annualMax) : "₹0";
    document.getElementById("htc-stat-pct").textContent =
      d.salary > 0 ? pctMin.toFixed(1) + "% – " + pctMax.toFixed(1) + "%" : "Salary daalein";
    var savingsEl = document.getElementById("htc-stat-savings");
    savingsEl.textContent = savings !== null ? fmtINR(savings) : "—";

    // Gauge: tax as % of salary (midpoint), capped visually at 60%
    var gaugeRing = document.getElementById("htc-gauge-ring");
    var gaugePct = Math.min(pctMid, 60);
    gaugeRing.style.setProperty("--htc-pct", (gaugePct / 60) * 100);
    document.getElementById("htc-gauge-value").textContent = d.salary > 0 ? pctMid.toFixed(1) + "%" : "—";

    // Insights
    var sorted = d.perCategory.filter(function (c) { return !c.excluded; }).sort(function (a, b) { return b.mid - a.mid; });
    var biggestTax = sorted[0];
    var bySpend = d.perCategory.slice().sort(function (a, b) { return b.amount - a.amount; });
    var biggestSpend = bySpend[0];

    document.getElementById("htc-insight-tax").textContent = biggestTax
      ? biggestTax.label + " — approx. " + fmtINR(biggestTax.mid) + "/month tax"
      : "Categories bharein taaki pata chale";
    document.getElementById("htc-insight-spend").textContent = biggestSpend
      ? biggestSpend.label + " — " + fmtINR(biggestSpend.amount) + "/month"
      : "Categories bharein taaki pata chale";

    var savingsTip;
    if (savings === null) {
      savingsTip = "Salary bharein taaki savings suggestion mile.";
    } else if (savings <= 0) {
      savingsTip = "Aapka spending salary se zyada/barabar hai — pehle ek monthly budget banayein.";
    } else if (savings < d.salary * 0.2) {
      savingsTip = "Aap salary ka 20% se kam bacha rahe hain. Discretionary categories (shopping, hotels, OTT) thoda kam karke saving badhayein.";
    } else {
      savingsTip = "Achhi savings rate hai — isi tarah continue rakhein, aur bachat ko kisi safe investment me daalein.";
    }
    document.getElementById("htc-insight-savings").textContent = savingsTip;

    renderCharts(d.perCategory);

    resultsEl.classList.add("is-visible");
    resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });

    window.__htcLastResult = {
      totalSpend: d.totalSpend, minTax: d.minTax, maxTax: d.maxTax, pctMin: pctMin, pctMax: pctMax
    };
  }

  function renderCharts(perCategory) {
    var taxCats = perCategory.filter(function (c) { return !c.excluded && c.mid > 0; });
    var donutCtx = document.getElementById("htc-donut-chart");
    var barCtx = document.getElementById("htc-bar-chart");
    if (!window.Chart || !donutCtx || !barCtx) return;

    if (donutChart) donutChart.destroy();
    if (barChart) barChart.destroy();

    if (taxCats.length === 0) {
      return;
    }

    donutChart = new Chart(donutCtx, {
      type: "doughnut",
      data: {
        labels: taxCats.map(function (c) { return c.label; }),
        datasets: [{
          data: taxCats.map(function (c) { return Math.round(c.mid); }),
          backgroundColor: taxCats.map(function (_, i) { return CHART_COLORS[i % CHART_COLORS.length]; }),
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 10 } } } }
      }
    });

    var spendCats = perCategory.filter(function (c) { return c.amount > 0; }).sort(function (a, b) { return b.amount - a.amount; });
    barChart = new Chart(barCtx, {
      type: "bar",
      data: {
        labels: spendCats.map(function (c) { return c.label; }),
        datasets: [{
          data: spendCats.map(function (c) { return c.amount; }),
          backgroundColor: spendCats.map(function (_, i) { return CHART_COLORS[i % CHART_COLORS.length]; })
        }]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { x: { ticks: { font: { size: 9 } } }, y: { ticks: { font: { size: 9 } } } }
      }
    });
  }

  function shareResult() {
    var r = window.__htcLastResult;
    var text = r
      ? "Maine apna hidden tax check kiya — ₹" + Math.round(r.minTax) + "–₹" + Math.round(r.maxTax) + " monthly tax dete hain! Check karo:"
      : "Hidden Tax Calculator try karo:";
    var url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: "Hidden Tax Calculator India", text: text, url: url }).catch(function () {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text + " " + url).then(function () {
        var btn = document.getElementById("htc-share-btn");
        var original = btn.textContent;
        btn.textContent = "✅ Copied!";
        setTimeout(function () { btn.textContent = original; }, 2000);
      });
    }
  }

  function downloadPdf() {
    window.print();
  }

  function resetCalculator() {
    form.reset();
    resultsEl.classList.remove("is-visible");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.addEventListener("DOMContentLoaded", function () {
    populateStates();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      calculate();
    });
    var shareBtn = document.getElementById("htc-share-btn");
    var pdfBtn = document.getElementById("htc-pdf-btn");
    var resetBtn = document.getElementById("htc-reset-btn");
    if (shareBtn) shareBtn.addEventListener("click", shareResult);
    if (pdfBtn) pdfBtn.addEventListener("click", downloadPdf);
    if (resetBtn) resetBtn.addEventListener("click", resetCalculator);
    var heroCta = document.getElementById("htc-hero-cta");
    if (heroCta) {
      heroCta.addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("htc-form").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  });
})();
