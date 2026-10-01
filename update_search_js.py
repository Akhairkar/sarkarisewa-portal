import os

js_code = """
(function () {
  const ROOT = window.SS_ROOT || "";
  const params = new URLSearchParams(window.location.search);

  const inputEl = document.getElementById("search-page-input");
  const filtersEl = document.getElementById("search-page-filters");
  const statusEl = document.getElementById("search-page-status");
  const resultsEl = document.getElementById("search-page-results");
  const formEl = document.getElementById("search-page-form");

  let ALL_SERVICES = [];
  let ALL_CATEGORIES = [];
  let activeCategory = "";

  function normalizeServices(data) {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.services)) return data.services;
    return [];
  }
  function normalizeCategories(data) {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.categories)) return data.categories;
    return [];
  }

  Promise.all([
    fetchAllServices(),
    fetch(ROOT + "data/categories.json").then((r) => r.json()),
  ])
    .then(([services, categoriesRaw]) => {
      ALL_SERVICES = services;
      ALL_CATEGORIES = normalizeCategories(categoriesRaw);

      const initialQ = params.get("q") || "";
      if (inputEl) inputEl.value = initialQ;

      renderFilters();
      render();
      onLangChange(() => {
        renderFilters();
        render();
      });

      if (inputEl) {
        inputEl.addEventListener("input", () => {
          const newQ = inputEl.value.trim();
          const url = new URL(window.location);
          if (newQ) url.searchParams.set("q", newQ);
          else url.searchParams.delete("q");
          window.history.replaceState({}, "", url);
          render();
        });
      }

      if (formEl) {
        formEl.addEventListener("submit", (e) => {
          e.preventDefault();
          render();
        });
      }
    });

  function renderFilters() {
    if (!filtersEl) return;
    const chips = ['<button type="button" class="chip' + (activeCategory === "" ? " chip--active" : "") + '" data-cat="">' + (getLang() === "hi" ? "सभी" : "All") + '</button>']
      .concat(
        ALL_CATEGORIES.map(
          (c) =>
            '<button type="button" class="chip' + (activeCategory === c.slug ? " chip--active" : "") + '" data-cat="' + c.slug + '">' + t(c.name) + '</button>'
        )
      )
      .join("");
    filtersEl.innerHTML = chips;
    filtersEl.querySelectorAll(".chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.getAttribute("data-cat") || "";
        renderFilters();
        render();
      });
    });
  }

  function getPopularSearchesHTML() {
    return `
      <div class="search-initial-view">
        <h3 class="si-title" style="margin-top: 10px; color: var(--color-text);">${t({en: "Popular Searches", hi: "लोकप्रिय खोजें"})}</h3>
        <div class="si-chips" style="display:flex; flex-wrap:wrap; gap:10px; margin-top:12px;">
          <a href="${ROOT}service/pm-kisan.html" class="btn btn--outline" style="padding:6px 14px; font-size:0.9rem;">PM Kisan</a>
          <a href="${ROOT}service/ayushman-bharat-card.html" class="btn btn--outline" style="padding:6px 14px; font-size:0.9rem;">Ayushman Card</a>
          <a href="${ROOT}service/ration-card.html" class="btn btn--outline" style="padding:6px 14px; font-size:0.9rem;">Ration Card</a>
          <a href="${ROOT}service/birth-certificate.html" class="btn btn--outline" style="padding:6px 14px; font-size:0.9rem;">Birth Certificate</a>
          <a href="${ROOT}service/income-certificate.html" class="btn btn--outline" style="padding:6px 14px; font-size:0.9rem;">Income Certificate</a>
          <a href="${ROOT}states/index.html" class="btn btn--outline" style="padding:6px 14px; font-size:0.9rem;">State Services</a>
          <a href="${ROOT}service/pan-card.html" class="btn btn--outline" style="padding:6px 14px; font-size:0.9rem;">PAN Card</a>
          <a href="${ROOT}jobs/index.html" class="btn btn--outline" style="padding:6px 14px; font-size:0.9rem;">Govt Jobs</a>
        </div>
        
        <h3 class="si-title" style="margin-top: 32px; margin-bottom: 15px; color: var(--color-text);">${t({en: "Trending Government Services", hi: "ट्रेंडिंग सरकारी सेवाएं"})}</h3>
        <div class="service-grid">
          <a class="service-card" href="${ROOT}service/pm-kisan.html">
            <div class="service-card__name">PM Kisan Samman Nidhi</div>
            <div class="service-card__desc">${t({en: "Check eligibility, documents, application and status for PM Kisan Rs. 6000 scheme.", hi: "पीएम किसान योजना की पात्रता, दस्तावेज और आवेदन की पूरी जानकारी।"})}</div>
            <div class="service-card__tags" style="display:flex; gap:6px; margin: 10px 0; flex-wrap:wrap;">
              <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Eligibility", hi:"पात्रता"})}</span>
              <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Documents", hi:"दस्तावेज़"})}</span>
              <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Apply", hi:"आवेदन"})}</span>
              <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Status", hi:"स्थिति"})}</span>
            </div>
            <div class="service-card__arrow">${t({ en: "View Complete Guide &rarr;", hi: "पूरी गाइड देखें &rarr;" })}</div>
          </a>
          <a class="service-card" href="${ROOT}service/ayushman-bharat-card.html">
            <div class="service-card__name">Ayushman Bharat Card (PMJAY)</div>
            <div class="service-card__desc">${t({en: "Get free medical coverage up to 5 Lakhs. Apply and download online.", hi: "5 लाख तक का मुफ्त इलाज। आयुष्मान कार्ड के लिए ऑनलाइन आवेदन करें।"})}</div>
            <div class="service-card__tags" style="display:flex; gap:6px; margin: 10px 0; flex-wrap:wrap;">
              <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Eligibility", hi:"पात्रता"})}</span>
              <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Documents", hi:"दस्तावेज़"})}</span>
              <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Apply", hi:"आवेदन"})}</span>
            </div>
            <div class="service-card__arrow">${t({ en: "View Complete Guide &rarr;", hi: "पूरी गाइड देखें &rarr;" })}</div>
          </a>
          <a class="service-card" href="${ROOT}tools/eligibility-checker.html">
            <div class="service-card__name">${t({en: "Govt Scheme Eligibility Checker", hi: "सरकारी योजना पात्रता इंजन"})}</div>
            <div class="service-card__desc">${t({en: "Answer 4 simple questions to find 35+ govt schemes you are eligible for.", hi: "4 सवालों के जवाब देकर जानें कि आप किन-किन सरकारी योजनाओं के लिए पात्र हैं।"})}</div>
            <div class="service-card__tags" style="display:flex; gap:6px; margin: 10px 0; flex-wrap:wrap;">
              <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Free Tool", hi:"फ्री टूल"})}</span>
            </div>
            <div class="service-card__arrow">${t({ en: "Use Tool &rarr;", hi: "टूल का उपयोग करें &rarr;" })}</div>
          </a>
        </div>
      </div>
    `;
  }

  function render() {
    const q = ((inputEl && inputEl.value) || "").trim().toLowerCase();

    let filtered = ALL_SERVICES;
    if (activeCategory) {
      filtered = filtered.filter((s) => s.category === activeCategory);
    }
    
    // Typo-tolerant basic matching
    const normalize = (str) => str.replace(/[^a-z0-9\u0900-\u097f]/gi, '');
    const qNorm = normalize(q);

    if (q) {
      filtered = filtered.filter((s) => {
        const name = t(s.name).toLowerCase();
        const nameOther = ((s.name && (s.name.en + " " + s.name.hi)) || "").toLowerCase();
        const desc = t(s.shortDescription || "").toLowerCase();
        
        if (name.includes(q) || nameOther.includes(q) || desc.includes(q)) return true;
        if (qNorm.length > 3 && (normalize(name).includes(qNorm) || normalize(nameOther).includes(qNorm))) return true;
        
        return false;
      });
      
      // Sort by relevance
      filtered.sort((a, b) => {
        const aName = t(a.name).toLowerCase();
        const bName = t(b.name).toLowerCase();
        if (aName.startsWith(q) && !bName.startsWith(q)) return -1;
        if (!aName.startsWith(q) && bName.startsWith(q)) return 1;
        return 0;
      });
    }

    if (!q && !activeCategory) {
      statusEl.innerHTML = '';
      resultsEl.innerHTML = getPopularSearchesHTML();
      resultsEl.classList.remove("service-grid"); // we handle grid inside
      return;
    } else {
      resultsEl.classList.add("service-grid");
    }

    statusEl.innerHTML = `<strong>${filtered.length}</strong> ${t({ en: "results found", hi: "परिणाम मिले" })}`;

    if (!filtered.length) {
      resultsEl.classList.remove("service-grid");
      resultsEl.innerHTML = `
        <div class="no-results-box" style="background: var(--color-surface); border:1px solid var(--color-border); border-radius:8px; padding:24px; text-align:center; margin-bottom:40px; box-shadow: var(--shadow-card);">
          <h2 style="margin-top:0; color: var(--color-text);">${t({en: "No results found for", hi: "इसके लिए कोई परिणाम नहीं मिला:"})} <span style="color: var(--color-accent-saffron);">"${q}"</span></h2>
          <p style="color: var(--color-text-muted);">${t({en: "Don't worry, try one of these instead:", hi: "चिंता न करें, इसके बजाय इनमें से कोई एक आज़माएं:"})}</p>
          <div style="display:flex; justify-content:center; gap:15px; margin-top:20px; flex-wrap:wrap;">
            <a href="${ROOT}index.html" class="btn btn--primary">${t({en: "Browse All Schemes", hi: "सभी योजनाएं देखें"})}</a>
            <a href="${ROOT}tools/eligibility-checker.html" class="btn btn--outline">${t({en: "Use Eligibility Checker", hi: "पात्रता इंजन का उपयोग करें"})}</a>
          </div>
        </div>
        ${getPopularSearchesHTML()}
      `;
      return;
    }

    resultsEl.innerHTML = filtered
      .map(
        (service) => `
      <a class="service-card" href="${ssServiceHref(ROOT, service)}">
        <div class="service-card__name">${t(service.name)}</div>
        <div class="service-card__desc">${t(service.shortDescription || "")}</div>
        <div class="service-card__tags" style="display:flex; gap:6px; margin: 10px 0; flex-wrap:wrap;">
          <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Eligibility", hi:"पात्रता"})}</span>
          <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Documents", hi:"दस्तावेज़"})}</span>
          <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Apply", hi:"आवेदन"})}</span>
          <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Status", hi:"स्थिति"})}</span>
        </div>
        <div class="service-card__arrow">${t({ en: "View Complete Guide &rarr;", hi: "पूरी गाइड देखें &rarr;" })}</div>
      </a>
    `
      )
      .join("");
  }
})();
"""

with open("assets/js/search.js", "w", encoding="utf-8") as f:
    f.write(js_code)
