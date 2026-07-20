/* ==========================================================================
   support.js — Module 7
   Powers two data-driven support pages:
     1. helpline-directory.html — searchable/filterable table of every
        service's helpline number, built from data/services.json.
     2. state-wise-services.html — lists services whose application portal
        varies by state (identified by the `note` field already used in
        Module 3/6 data) plus a reference grid of all states/UTs.
   Both pages load this one file; each block below only runs if its
   target elements exist on the current page.
   ========================================================================== */

(function () {
  const ROOT = window.SS_ROOT || "";

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

  function loadData() {
    return Promise.all([
      fetch(`${ROOT}data/services.json`).then((r) => r.json()),
      fetch(`${ROOT}data/categories.json`).then((r) => r.json()),
    ]).then(([servicesRaw, categoriesRaw]) => ({
      services: normalizeServices(servicesRaw),
      categories: normalizeCategories(categoriesRaw),
    }));
  }

  /* ---------------- Helpline Directory ---------------- */
  const tbody = document.getElementById("helpline-tbody");
  if (tbody) {
    const searchEl = document.getElementById("helpline-search");
    const filterEl = document.getElementById("helpline-filter");
    const countEl = document.getElementById("helpline-count");
    const emptyEl = document.getElementById("helpline-empty");

    let ALL_SERVICES = [];
    let ALL_CATEGORIES = [];

    loadData()
      .then(({ services, categories }) => {
        ALL_SERVICES = services;
        ALL_CATEGORIES = categories;
        populateFilter(categories);
        render();
        onLangChange(() => {
          populateFilter(categories);
          render();
        });
      })
      .catch((err) => {
        console.error("Failed to load helpline data:", err);
        tbody.innerHTML = "";
        if (emptyEl) {
          emptyEl.hidden = false;
          emptyEl.textContent = "Could not load helpline data. Please try again later.";
        }
      });

    function populateFilter(categories) {
      if (!filterEl) return;
      const current = filterEl.value;
      filterEl.innerHTML =
        `<option value="">${t({ en: "All categories", hi: "सभी श्रेणियां" })}</option>` +
        categories.map((c) => `<option value="${c.slug}">${t(c.name)}</option>`).join("");
      if (current) filterEl.value = current;
    }

    function categoryName(slug) {
      const cat = ALL_CATEGORIES.find((c) => c.slug === slug);
      return cat ? t(cat.name) : slug;
    }

    function render() {
      const q = (searchEl && searchEl.value.trim().toLowerCase()) || "";
      const catFilter = (filterEl && filterEl.value) || "";

      const filtered = ALL_SERVICES.filter((s) => {
        const name = t(s.name).toLowerCase();
        const matchesSearch = !q || name.includes(q);
        const matchesCat = !catFilter || s.category === catFilter;
        return matchesSearch && matchesCat;
      }).sort((a, b) => t(a.name).localeCompare(t(b.name)));

      if (countEl) {
        countEl.textContent = `${filtered.length} ${filtered.length === 1 ? "service" : "services"}`;
      }

      if (!filtered.length) {
        tbody.innerHTML = "";
        if (emptyEl) emptyEl.hidden = false;
        return;
      }
      if (emptyEl) emptyEl.hidden = true;

      tbody.innerHTML = filtered
        .map(
          (s) => `
        <tr>
          <td><a href="${ROOT}service/service.html?id=${s.slug || s.id}">${t(s.name)}</a></td>
          <td><span class="cat-pill">${categoryName(s.category)}</span></td>
          <td class="helpline-number">${formatHelpline(s.helpline)}</td>
        </tr>
      `
        )
        .join("");
    }

    function formatHelpline(helpline) {
      if (!helpline) return "—";
      if (typeof helpline === "string") return helpline;
      if (Array.isArray(helpline)) {
        if (!helpline.length) return "—";
        return helpline.map((h) => h.phone).filter(Boolean).join(" / ");
      }
      return "—";
    }

    if (searchEl) searchEl.addEventListener("input", render);
    if (filterEl) filterEl.addEventListener("change", render);
  }

  /* ---------------- State-wise Services ---------------- */
  const stateServicesGrid = document.getElementById("state-services-grid");
  const stateGrid = document.getElementById("state-grid");

  const INDIA_STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal", "Andaman & Nicobar Islands", "Chandigarh",
    "Dadra & Nagar Haveli and Daman & Diu", "Delhi (NCT)",
    "Jammu & Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
  ];

  if (stateGrid) {
    stateGrid.innerHTML = INDIA_STATES.map(
      (s) => `<button type="button" class="state-card" data-state="${s}">${s}</button>`
    ).join("");

    const selectedLabel = document.getElementById("state-selected-label");
    const stateServicesList = document.querySelector(".state-services-list");

    stateGrid.querySelectorAll(".state-card").forEach((btn) => {
      btn.addEventListener("click", () => {
        stateGrid.querySelectorAll(".state-card").forEach((b) => b.classList.remove("state-card--active"));
        btn.classList.add("state-card--active");
        if (selectedLabel) {
          selectedLabel.hidden = false;
          selectedLabel.textContent = `${t({ en: "Selected state:", hi: "चयनित राज्य:" })} ${btn.dataset.state}`;
        }
        if (stateServicesList) {
          stateServicesList.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  if (stateServicesGrid) {
    loadData()
      .then(({ services }) => {
        const varied = services.filter((s) => s.note);
        renderStateServices(varied);
        onLangChange(() => renderStateServices(varied));
      })
      .catch((err) => {
        console.error("Failed to load state-wise service data:", err);
        stateServicesGrid.innerHTML = `<p class="empty-state">Could not load this list. Please try again later.</p>`;
      });
  }

  function renderStateServices(list) {
    if (!list.length) {
      stateServicesGrid.innerHTML = `<p class="empty-state">No state-variable services published yet.</p>`;
      return;
    }
    stateServicesGrid.innerHTML = list
      .map(
        (s) => `
      <a class="service-card" href="${ROOT}service/service.html?id=${s.slug || s.id}">
        <div class="service-card__name">${t(s.name)}</div>
        <div class="service-card__desc">${t(s.note)}</div>
        <div class="service-card__arrow">View details →</div>
      </a>
    `
      )
      .join("");
  }
})();
