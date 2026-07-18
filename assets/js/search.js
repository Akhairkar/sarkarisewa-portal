/* ==========================================================================
   search.js
   Powers /search.html — the destination for the homepage hero search form
   (index.html's <form action="search.html">) and the header search box.
   Reads ?q= from the URL, then supports live re-filtering by keyword and
   category chip, across all services in data/services.json.
   ========================================================================== */

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
    fetch(`${ROOT}data/services.json`).then((r) => r.json()),
    fetch(`${ROOT}data/categories.json`).then((r) => r.json()),
  ])
    .then(([servicesRaw, categoriesRaw]) => {
      ALL_SERVICES = normalizeServices(servicesRaw);
      ALL_CATEGORIES = normalizeCategories(categoriesRaw);

      const initialQ = params.get("q") || "";
      if (inputEl) inputEl.value = initialQ;

      renderFilters();
      render();
      onLangChange(() => {
        renderFilters();
        render();
      });
    })
    .catch((err) => {
      console.error("Failed to load search data:", err);
      resultsEl.innerHTML = `<p class="empty-state">Could not load services. Please try again later.</p>`;
    });

  function renderFilters() {
    if (!filtersEl) return;
    const chips = [`<button type="button" class="chip${activeCategory === "" ? " chip--active" : ""}" data-cat="">${
      getLang() === "hi" ? "सभी" : "All"
    }</button>`]
      .concat(
        ALL_CATEGORIES.map(
          (c) =>
            `<button type="button" class="chip${activeCategory === c.slug ? " chip--active" : ""}" data-cat="${c.slug}">${t(
              c.name
            )}</button>`
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

  function render() {
    const q = ((inputEl && inputEl.value) || "").trim().toLowerCase();

    let filtered = ALL_SERVICES;
    if (activeCategory) {
      filtered = filtered.filter((s) => s.category === activeCategory);
    }
    if (q) {
      filtered = filtered.filter((s) => {
        const name = t(s.name).toLowerCase();
        const nameOther = ((s.name && (s.name.en + " " + s.name.hi)) || "").toLowerCase();
        const desc = t(s.shortDescription || "").toLowerCase();
        return name.includes(q) || nameOther.includes(q) || desc.includes(q);
      });
    }

    if (!q && !activeCategory) {
      statusEl.textContent = "";
      resultsEl.innerHTML = `<p class="empty-state" data-i18n="search_no_query">${t({
        en: "Start typing above to search all services.",
        hi: "सभी सेवाओं में खोजने के लिए ऊपर टाइप करना शुरू करें।",
      })}</p>`;
      return;
    }

    statusEl.textContent = `${filtered.length} ${
      t({ en: "results", hi: "परिणाम" })
    }`;

    if (!filtered.length) {
      resultsEl.innerHTML = `<p class="empty-state">${t({
        en: "No services matched your search. Try a different keyword.",
        hi: "आपकी खोज से कोई सेवा मेल नहीं खाई। कोई अलग शब्द आज़माएं।",
      })}</p>`;
      return;
    }

    resultsEl.innerHTML = filtered
      .map(
        (service) => `
      <a class="service-card" href="${ROOT}service/service.html?id=${service.slug || service.id}">
        <div class="service-card__name">${t(service.name)}</div>
        <div class="service-card__desc">${t(service.shortDescription || "")}</div>
        <div class="service-card__arrow">${t({ en: "View details →", hi: "विवरण देखें →" })}</div>
      </a>
    `
      )
      .join("");
  }

  if (inputEl) {
    inputEl.addEventListener("input", () => {
      const url = new URL(window.location.href);
      if (inputEl.value) url.searchParams.set("q", inputEl.value);
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
})();
