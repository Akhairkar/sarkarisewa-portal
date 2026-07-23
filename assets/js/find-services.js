/* ==========================================================================
   find-services.js
   "Find Services For You" — a lightweight, fully client-side eligibility
   wizard. No backend: filters the existing services.json/categories.json
   using a small set of persona keyword rules plus category selection.
   ========================================================================== */

(function () {
  const ROOT = window.SS_ROOT || "";
  const wizardEl = document.getElementById("wizard");

  // Keyword lists matched against each service's English name + short
  // description (lowercased). Not exhaustive/perfect — the goal is a
  // useful shortlist, not a guarantee of eligibility. Self-maintaining:
  // new services with matching keywords automatically get picked up
  // without needing a manual per-service tag to be added.
  const PERSONAS = [
    { id: "student", labelKey: "persona_student", keywords: ["student", "scholarship", "school", "college", "education", "admission", "skill", "apprentice", "learning", "course", "university"] },
    { id: "farmer", labelKey: "persona_farmer", keywords: ["farmer", "kisan", "agricult", "crop", "irrigation", "fasal"] },
    { id: "senior", labelKey: "persona_senior", keywords: ["senior citizen", "pension", "elderly"] },
    { id: "woman", labelKey: "persona_woman", keywords: ["woman", "women", "girl", "maternity", "beti", "sukanya", "matru"] },
    { id: "jobseeker", labelKey: "persona_jobseeker", keywords: ["job", "employment", "recruitment", "career", "apprentice", "skill", "vacancy", "exam"] },
    { id: "business", labelKey: "persona_business", keywords: ["business", "msme", "udyam", "gst", "startup", "entrepreneur", "trade", "vishwakarma", "artisan", "shop"] },
    { id: "employee", labelKey: "persona_employee", keywords: ["salary", "salaried", "employee", "epf", "esic", "tax", "tds", "provident fund", "form 16"] },
    { id: "general", labelKey: "persona_general", keywords: [] }, // matches everything — no filter applied
  ];

  let ALL_SERVICES = [];
  let ALL_CATEGORIES = [];
  let selectedPersonas = new Set();
  let selectedCategories = new Set();
  let step = 1;

  // Looks up a plain lang.json key (not a {en,hi} object) — separate from
  // t() in i18n-helper.js, which only handles bilingual objects.
  function tk(key, fallback) {
    const lang = getLang();
    if (window.SITE && SITE.langData && SITE.langData[lang] && SITE.langData[lang][key]) {
      return SITE.langData[lang][key];
    }
    return fallback || key;
  }

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
      selectedCategories = new Set(ALL_CATEGORIES.map((c) => c.slug));
      render();
      onLangChange(render);
    })
    .catch((err) => {
      console.error("Failed to load wizard data:", err);
      wizardEl.innerHTML = `<p class="empty-state">Could not load services. Please try again later.</p>`;
    });

  function render() {
    if (step === 1) renderStep1();
    else if (step === 2) renderStep2();
    else renderResults();
  }

  function renderStep1() {
    wizardEl.innerHTML = `
      <div class="wizard-step">
        <h2 class="wizard-step__title">${tk("wizard_step1_title", "Which of these describes you?")}</h2>
        <p class="wizard-step__sub">${tk("wizard_step1_sub", "Select all that apply")}</p>
        <div class="wizard-options" id="persona-options">
          ${PERSONAS.map(
            (p) => `
            <button type="button" class="wizard-option${selectedPersonas.has(p.id) ? " wizard-option--active" : ""}" data-persona="${p.id}">
              ${tk(p.labelKey, p.id)}
            </button>`
          ).join("")}
        </div>
        <div class="wizard-actions">
          <button type="button" class="btn-primary" id="step1-next">${tk("wizard_continue", "Continue →")}</button>
        </div>
      </div>
    `;
    document.querySelectorAll("#persona-options .wizard-option").forEach((btn) => {
      const persona = PERSONAS.find((p) => p.id === btn.dataset.persona);
      btn.addEventListener("click", () => {
        if (selectedPersonas.has(persona.id)) selectedPersonas.delete(persona.id);
        else selectedPersonas.add(persona.id);
        renderStep1();
      });
    });
    document.getElementById("step1-next").addEventListener("click", () => {
      if (selectedPersonas.size === 0) selectedPersonas.add("general");
      step = 2;
      render();
    });
  }

  function renderStep2() {
    wizardEl.innerHTML = `
      <div class="wizard-step">
        <h2 class="wizard-step__title">${tk("wizard_step2_title", "Any specific area you're interested in?")}</h2>
        <p class="wizard-step__sub">${tk("wizard_step2_sub", "Optional — leave all selected to see everything relevant")}</p>
        <div class="wizard-options" id="category-options">
          ${ALL_CATEGORIES.map(
            (c) => `
            <button type="button" class="wizard-option${selectedCategories.has(c.slug) ? " wizard-option--active" : ""}" data-cat="${c.slug}">
              ${c.icon || ""} ${t(c.name)}
            </button>`
          ).join("")}
        </div>
        <div class="wizard-actions">
          <button type="button" class="wizard-back" id="step2-back">${tk("wizard_back", "← Back")}</button>
          <button type="button" class="btn-primary" id="step2-next">${tk("wizard_see_results", "Show My Services →")}</button>
        </div>
      </div>
    `;
    document.querySelectorAll("#category-options .wizard-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        const slug = btn.dataset.cat;
        if (selectedCategories.has(slug)) selectedCategories.delete(slug);
        else selectedCategories.add(slug);
        renderStep2();
      });
    });
    document.getElementById("step2-back").addEventListener("click", () => {
      step = 1;
      render();
    });
    document.getElementById("step2-next").addEventListener("click", () => {
      if (selectedCategories.size === 0) selectedCategories = new Set(ALL_CATEGORIES.map((c) => c.slug));
      step = 3;
      render();
    });
  }

  function matchesPersonas(service) {
    if (selectedPersonas.has("general") || selectedPersonas.size === 0) return true;
    const haystack = `${service.name.en} ${service.shortDescription.en}`.toLowerCase();
    for (const pid of selectedPersonas) {
      const persona = PERSONAS.find((p) => p.id === pid);
      if (!persona || !persona.keywords.length) continue;
      if (persona.keywords.some((kw) => haystack.includes(kw))) return true;
    }
    return false;
  }

  function renderResults() {
    let filtered = ALL_SERVICES.filter((s) => selectedCategories.has(s.category));
    let personaFiltered = filtered.filter(matchesPersonas);

    let usedFallback = false;
    if (!personaFiltered.length) {
      personaFiltered = filtered;
      usedFallback = true;
    }

    wizardEl.innerHTML = `
      <div class="wizard-step">
        <div class="wizard-results-head">
          <h2 class="wizard-step__title">${tk("wizard_results_title", "Recommended for you")}</h2>
          <p class="wizard-step__sub">${personaFiltered.length} ${tk("wizard_results_count", "matching services")}</p>
        </div>
        ${usedFallback ? `<p class="wizard-fallback-note">${tk("wizard_no_results", "No specific matches — here are all services in your selected area instead.")}</p>` : ""}
        <div class="service-grid">
          ${personaFiltered
            .map(
              (s) => `
            <a class="service-card" href="${ROOT}service/service.html?id=${s.slug || s.id}">
              <div class="service-card__name">${t(s.name)}</div>
              <div class="service-card__desc">${t(s.shortDescription)}</div>
              <div class="service-card__arrow">${t({ en: "View details →", hi: "विवरण देखें →" })}</div>
            </a>`
            )
            .join("")}
        </div>
        <div class="wizard-actions">
          <button type="button" class="wizard-back" id="start-over">${tk("wizard_start_over", "Start over")}</button>
        </div>
      </div>
    `;
    document.getElementById("start-over").addEventListener("click", () => {
      selectedPersonas = new Set();
      selectedCategories = new Set(ALL_CATEGORIES.map((c) => c.slug));
      step = 1;
      render();
    });
  }
})();
