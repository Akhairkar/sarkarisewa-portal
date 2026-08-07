/* ==========================================================================
   job-alerts.js — Renders /jobs/index.html — government job vacancy alerts.
   Reads the "job_alerts" Supabase table (see supabase/job-alerts-schema.sql)
   via the shared getSupabaseClient() helper. Only status = 'published' rows
   are ever fetched — the table's RLS policy already hides drafts from anon
   reads. Alerts past their last_date stay visible but are marked "Closed".
   ========================================================================== */

(function () {
  const listEl = document.getElementById("job-list");
  const typeFilterEl = document.getElementById("job-type-filter");
  if (!listEl) return;

  const JOB_TYPES = {
    central: { en: "Central Govt", hi: "केंद्र सरकार" },
    state: { en: "State Govt", hi: "राज्य सरकार" },
    psu: { en: "PSU", hi: "PSU" },
    railway: { en: "Railway", hi: "रेलवे" },
    banking: { en: "Banking", hi: "बैंकिंग" },
    defence: { en: "Defence", hi: "रक्षा" },
    teaching: { en: "Teaching", hi: "शिक्षण" },
    other: { en: "Other", hi: "अन्य" },
  };

  let allJobs = [];

  function tk(key, fallback) {
    const lang = typeof getLang === "function" ? getLang() : "hi";
    if (window.SITE && SITE.langData && SITE.langData[lang] && SITE.langData[lang][key]) {
      return SITE.langData[lang][key];
    }
    return fallback || key;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str || "";
    return div.innerHTML;
  }

  function formatDate(iso) {
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    const locale = typeof getLang === "function" && getLang() === "hi" ? "hi-IN" : "en-IN";
    return d.toLocaleDateString(locale, { year: "numeric", month: "short", day: "numeric" });
  }

  function isClosed(lastDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const d = new Date(lastDate + "T00:00:00");
    return d < today;
  }

  function isClosingSoon(lastDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const d = new Date(lastDate + "T00:00:00");
    const diffDays = (d - today) / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays <= 3;
  }

  function populateTypeFilter() {
    Object.keys(JOB_TYPES).forEach((key) => {
      const opt = document.createElement("option");
      opt.value = key;
      opt.textContent = JOB_TYPES[key][typeof getLang === "function" ? getLang() : "en"] || JOB_TYPES[key].en;
      typeFilterEl.appendChild(opt);
    });
  }

  function renderList(jobs) {
    if (!jobs.length) {
      listEl.innerHTML = `<p class="job-empty">${tk("jobalerts_empty", "No job alerts posted yet. Check back soon.")}</p>`;
      return;
    }
    const lang = typeof getLang === "function" ? getLang() : "en";
    listEl.innerHTML = jobs
      .map((j) => {
        const closed = isClosed(j.last_date);
        const closingSoon = !closed && isClosingSoon(j.last_date);
        const title = lang === "hi" && j.title_hi ? j.title_hi : j.title_en;
        const dept = lang === "hi" && j.department_hi ? j.department_hi : j.department_en;
        const qualification = lang === "hi" && j.qualification_hi ? j.qualification_hi : j.qualification_en;
        const location = lang === "hi" && j.location_hi ? j.location_hi : j.location_en;

        return `
      <article class="job-card ${closed ? "job-card--closed" : ""}" data-slug="${escapeHtml(j.slug)}">
        <div class="job-card__head">
          <h3 class="job-card__title">${escapeHtml(title)}</h3>
          ${closed
            ? `<span class="job-badge job-badge--closed">${tk("jobalerts_closed_badge", "Closed")}</span>`
            : closingSoon
              ? `<span class="job-badge job-badge--soon">${tk("jobalerts_closing_soon_badge", "Closing Soon")}</span>`
              : ""}
        </div>
        ${dept ? `<p class="job-card__dept">${escapeHtml(dept)}${location ? " · " + escapeHtml(location) : ""}</p>` : ""}
        ${qualification ? `<p class="job-card__qualification"><strong>${tk("jobalerts_qualification_label", "Eligibility")}:</strong> ${escapeHtml(qualification)}</p>` : ""}
        <div class="job-card__meta">
          ${j.vacancies ? `<span><strong>${tk("jobalerts_vacancies_label", "Vacancies")}:</strong> ${escapeHtml(j.vacancies)}</span>` : ""}
          <span><strong>${tk("jobalerts_last_date_label", "Last Date to Apply")}:</strong> ${formatDate(j.last_date)}</span>
        </div>
        <div class="job-card__actions">
          <a class="btn btn-primary" href="${j.apply_link}" target="_blank" rel="noopener noreferrer">${tk("jobalerts_apply_now", "Apply Now →")}</a>
          ${j.notification_link ? `<a class="job-card__notification-link" href="${j.notification_link}" target="_blank" rel="noopener noreferrer">${tk("jobalerts_notification", "Official Notification (PDF)")}</a>` : ""}
        </div>
      </article>`;
      })
      .join("");
  }

  function applyFilter() {
    const type = typeFilterEl.value;
    const filtered = type ? allJobs.filter((j) => j.job_type === type) : allJobs;
    renderList(filtered);
  }

  async function loadJobs() {
    const client = await getSupabaseClient();
    if (!client) {
      listEl.innerHTML = `<p class="job-empty">${tk("jobalerts_error", "Could not load job alerts right now. Please try again later.")}</p>`;
      return;
    }
    try {
      const { data, error } = await client
        .from("job_alerts")
        .select("id, slug, title_en, title_hi, department_en, department_hi, qualification_en, qualification_hi, location_en, location_hi, vacancies, job_type, last_date, apply_link, notification_link")
        .eq("status", "published")
        .order("last_date", { ascending: true });
      if (error) throw error;
      allJobs = data || [];
      applyFilter();
    } catch (err) {
      console.error("Failed to load job alerts:", err);
      listEl.innerHTML = `<p class="job-empty">${tk("jobalerts_error", "Could not load job alerts right now. Please try again later.")}</p>`;
    }
  }

  function applyTypeFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    if (type && JOB_TYPES[type]) {
      typeFilterEl.value = type;
    }
  }

  typeFilterEl.addEventListener("change", () => {
    const params = new URLSearchParams(window.location.search);
    if (typeFilterEl.value) {
      params.set("type", typeFilterEl.value);
    } else {
      params.delete("type");
    }
    const qs = params.toString();
    history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
    applyFilter();
  });

  populateTypeFilter();
  applyTypeFromUrl();
  loadJobs();
  if (typeof onLangChange === "function") {
    onLangChange(() => applyFilter());
  }

  // Whole card navigates to the detail page — except clicks on the Apply
  // Now button, the notification link, or any other real link/button,
  // which keep their own behaviour (event delegation, since cards are
  // re-rendered on every filter/language change).
  listEl.addEventListener("click", (e) => {
    if (e.target.closest("a, button")) return;
    const card = e.target.closest(".job-card");
    if (!card) return;
    window.location.href = `post.html?slug=${encodeURIComponent(card.dataset.slug)}`;
  });
})();
