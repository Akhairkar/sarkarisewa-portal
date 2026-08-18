/* ==========================================================================
   job-alerts.js — Renders /jobs/index.html — government job vacancy alerts.
   With 100% defensive null-guards & safe i18n helper functions.
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

  function safeGetLang() {
    if (typeof window.getLang === "function") return window.getLang();
    if (typeof getLang === "function") return getLang();
    return document.documentElement.getAttribute("lang") || "hi";
  }

  function tk(key, fallback) {
    const lang = safeGetLang();
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
    if (!iso) return "";
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    const locale = safeGetLang() === "hi" ? "hi-IN" : "en-IN";
    return d.toLocaleDateString(locale, { year: "numeric", month: "short", day: "numeric" });
  }

  function isClosed(lastDate) {
    if (!lastDate) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const d = new Date(lastDate + "T00:00:00");
    return d < today;
  }

  function isClosingSoon(lastDate) {
    if (!lastDate) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const d = new Date(lastDate + "T00:00:00");
    const diffDays = (d - today) / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays <= 3;
  }

  function populateTypeFilter() {
    if (!typeFilterEl) return;
    Object.keys(JOB_TYPES).forEach((key) => {
      const opt = document.createElement("option");
      opt.value = key;
      opt.textContent = JOB_TYPES[key][safeGetLang()] || JOB_TYPES[key].en;
      typeFilterEl.appendChild(opt);
    });
  }

  function renderList(jobs) {
    if (!listEl) return;
    if (!jobs.length) {
      listEl.innerHTML = `<p class="job-empty">${tk("jobalerts_empty", "No job alerts posted yet. Check back soon.")}</p>`;
      return;
    }
    const lang = safeGetLang();
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
          <a class="btn btn-primary" href="${j.apply_link || '#'}" target="_blank" rel="noopener noreferrer">${tk("jobalerts_apply_now", "Apply Now →")}</a>
          ${j.notification_link ? `<a class="job-card__notification-link" href="${j.notification_link}" target="_blank" rel="noopener noreferrer">${tk("jobalerts_notification", "Official Notification (PDF)")}</a>` : ""}
        </div>
      </article>`;
      })
      .join("");
  }

  let currentPage = 1;
  const ITEMS_PER_PAGE = 15;

  function renderPagination(totalPages) {
    let pagEl = document.getElementById("job-pagination");
    if (!pagEl) {
      pagEl = document.createElement("div");
      pagEl.id = "job-pagination";
      pagEl.className = "pagination";
      listEl.parentNode.insertBefore(pagEl, listEl.nextSibling);
    }
    
    if (totalPages <= 1) {
      pagEl.innerHTML = "";
      return;
    }

    let html = '';
    const prevDisabled = currentPage === 1 ? 'disabled' : '';
    html += `<button class="btn btn-outline" ${prevDisabled} data-page="${currentPage - 1}">${tk("pag_prev", "Previous")}</button>`;

    // Show limited pages (max 5)
    let startP = Math.max(1, currentPage - 2);
    let endP = Math.min(totalPages, startP + 4);
    if (endP - startP < 4) {
      startP = Math.max(1, endP - 4);
    }

    for (let i = startP; i <= endP; i++) {
      const active = i === currentPage ? 'active' : '';
      html += `<button class="btn btn-outline ${active}" data-page="${i}">${i}</button>`;
    }

    const nextDisabled = currentPage === totalPages ? 'disabled' : '';
    html += `<button class="btn btn-outline" ${nextDisabled} data-page="${currentPage + 1}">${tk("pag_next", "Next")}</button>`;

    pagEl.innerHTML = html;

    const buttons = pagEl.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (btn.hasAttribute('disabled') || btn.classList.contains('active')) return;
        const targetPage = parseInt(btn.getAttribute('data-page'));
        if (targetPage >= 1 && targetPage <= totalPages) {
          applyFilter(targetPage);
          listEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function applyFilter(page = 1) {
    currentPage = page;
    let filtered = typeFilterEl && typeFilterEl.value ? allJobs.filter((j) => j.job_type === typeFilterEl.value) : allJobs;
    
    const active = [];
    const closed = [];
    filtered.forEach(j => {
      if (isClosed(j.last_date)) {
        closed.push(j);
      } else {
        active.push(j);
      }
    });

    closed.reverse();
    filtered = [...active, ...closed];

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
    if (currentPage > totalPages) currentPage = totalPages;
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const paged = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);

    renderList(paged);
    renderPagination(totalPages);
  }

  async function loadJobs() {
    if (typeof getSupabaseClient !== "function") return;
    try {
      const client = await getSupabaseClient();
      if (!client) {
        listEl.innerHTML = `<p class="job-empty">${tk("jobalerts_error", "Could not load job alerts right now. Please try again later.")}</p>`;
        return;
      }
      const { data, error } = await client
        .from("job_alerts")
        .select("id, slug, title_en, title_hi, department_en, department_hi, qualification_en, qualification_hi, location_en, location_hi, vacancies, job_type, last_date, apply_link, notification_link")
        .eq("status", "published")
        .order("last_date", { ascending: true });
      if (error) throw error;
      allJobs = data || [];
      applyFilter();
    } catch (err) {
      console.warn("Failed to load job alerts:", err);
      listEl.innerHTML = `<p class="job-empty">${tk("jobalerts_error", "Could not load job alerts right now. Please try again later.")}</p>`;
    }
  }

  function applyTypeFromUrl() {
    if (!typeFilterEl) return;
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    if (type && JOB_TYPES[type]) {
      typeFilterEl.value = type;
    }
  }

  if (typeFilterEl) {
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
  }

  populateTypeFilter();
  applyTypeFromUrl();
  loadJobs();

  if (typeof window.onLangChange === "function") {
    window.onLangChange(() => applyFilter());
  } else if (typeof onLangChange === "function") {
    onLangChange(() => applyFilter());
  }

  listEl.addEventListener("click", (e) => {
    if (e.target.closest("a, button")) return;
    const card = e.target.closest(".job-card");
    if (!card) return;
    window.location.href = `post.html?slug=${encodeURIComponent(card.dataset.slug)}`;
  });
})();
