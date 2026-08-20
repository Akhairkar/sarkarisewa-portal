/* ==========================================================================
   deadline-calendar.js — Renders /tools/deadline-calendar.html.
   Reads the "deadlines" Supabase table (see supabase/deadlines-schema.sql)
   via the shared getSupabaseClient() helper. Only status = 'published' rows
   are ever fetched — the table's RLS policy already hides drafts from anon
   reads.

   Status shown on each card (Closing Today / Ends Tomorrow / X Days Left /
   Upcoming / Expired) is NOT stored in the database — it is computed here,
   right now, from today's date vs deadline_date. So it is always correct
   without anyone having to update it by hand. Expired deadlines are still
   shown (marked Expired), never deleted, so the page keeps its SEO value.
   ========================================================================== */

(function () {
  const listEl = document.getElementById("dl-list");
  if (!listEl) return;

  const ROOT = window.SS_ROOT || "../";

  function lang() {
    return typeof getLang === "function" ? getLang() : "hi";
  }

  function tk(key, fallback) {
    const l = lang();
    if (window.SITE && SITE.langData && SITE.langData[l] && SITE.langData[l][key]) {
      return SITE.langData[l][key];
    }
    return fallback || key;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str || "";
    return div.innerHTML;
  }

  function pick(row, baseKey) {
    return lang() === "hi" && row[baseKey + "_hi"] ? row[baseKey + "_hi"] : row[baseKey + "_en"];
  }

  function formatDate(iso) {
    if (!iso) return "";
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    const locale = lang() === "hi" ? "hi-IN" : "en-IN";
    return d.toLocaleDateString(locale, { year: "numeric", month: "short", day: "numeric" });
  }

  const CATEGORIES = {
    scheme: { en: "Govt Schemes", hi: "सरकारी योजनाएं" },
    jobs: { en: "Govt Jobs", hi: "सरकारी नौकरी" },
    exam: { en: "Exams", hi: "परीक्षा" },
    scholarship: { en: "Scholarship", hi: "छात्रवृत्ति" },
    education: { en: "Education/Admission", hi: "शिक्षा/Admission" },
    tax: { en: "Tax", hi: "टैक्स" },
    ekyc: { en: "e-KYC", hi: "e-KYC" },
    banking: { en: "Banking/Finance", hi: "बैंकिंग/वित्त" },
    farmer: { en: "Farmer", hi: "किसान" },
    pension: { en: "Pension", hi: "पेंशन" },
    documents: { en: "Documents", hi: "दस्तावेज़" },
    certificates: { en: "Certificates", hi: "प्रमाण पत्र" },
    housing: { en: "Housing", hi: "आवास" },
    business: { en: "Business/Loan", hi: "व्यवसाय/लोन" },
    other: { en: "Other", hi: "अन्य" },
  };

  const DEADLINE_TYPES = {
    application: { en: "Application Last Date", hi: "आवेदन अंतिम तिथि" },
    registration: { en: "Registration Last Date", hi: "पंजीकरण अंतिम तिथि" },
    correction: { en: "Correction Last Date", hi: "सुधार अंतिम तिथि" },
    document_submission: { en: "Document Submission", hi: "दस्तावेज़ जमा करना" },
    payment: { en: "Payment Last Date", hi: "भुगतान अंतिम तिथि" },
    ekyc: { en: "e-KYC Deadline", hi: "e-KYC अंतिम तिथि" },
    renewal: { en: "Renewal Deadline", hi: "नवीनीकरण अंतिम तिथि" },
    admission: { en: "Admission Deadline", hi: "प्रवेश अंतिम तिथि" },
    exam_date: { en: "Exam Date", hi: "परीक्षा तिथि" },
    result: { en: "Result/Notification", hi: "परिणाम/सूचना" },
    other: { en: "Other", hi: "अन्य" },
  };

  const STATES = {
    "all-india": { en: "All India", hi: "अखिल भारत" },
    maharashtra: { en: "Maharashtra", hi: "महाराष्ट्र" },
    "madhya-pradesh": { en: "Madhya Pradesh", hi: "मध्य प्रदेश" },
    rajasthan: { en: "Rajasthan", hi: "राजस्थान" },
    "uttar-pradesh": { en: "Uttar Pradesh", hi: "उत्तर प्रदेश" },
    bihar: { en: "Bihar", hi: "बिहार" },
    gujarat: { en: "Gujarat", hi: "गुजरात" },
    karnataka: { en: "Karnataka", hi: "कर्नाटक" },
    delhi: { en: "Delhi", hi: "दिल्ली" },
    other: { en: "Other States", hi: "अन्य राज्य" },
  };

  // Returns { key, daysLeft } where key is one of:
  // closing-today | closing-tomorrow | urgent (<=3d) | week (<=7d) | upcoming | expired
  function computeStatus(row) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(row.deadline_date + "T00:00:00");
    const daysLeft = Math.round((due - today) / (1000 * 60 * 60 * 24));

    if (daysLeft < 0) return { key: "expired", daysLeft };
    if (daysLeft === 0) return { key: "closing-today", daysLeft };
    if (daysLeft === 1) return { key: "closing-tomorrow", daysLeft };
    if (daysLeft <= 3) return { key: "urgent", daysLeft };
    if (daysLeft <= 7) return { key: "week", daysLeft };
    return { key: "upcoming", daysLeft };
  }

  function statusBadge(status) {
    const labels = {
      "closing-today": { en: "Closing Today", hi: "आज अंतिम दिन" },
      "closing-tomorrow": { en: "Ends Tomorrow", hi: "कल अंतिम दिन" },
      urgent: { en: `${status.daysLeft} Days Left`, hi: `${status.daysLeft} दिन बचे` },
      week: { en: `${status.daysLeft} Days Left`, hi: `${status.daysLeft} दिन बचे` },
      upcoming: { en: "Upcoming", hi: "आगामी" },
      expired: { en: "Expired", hi: "समाप्त" },
    };
    const l = labels[status.key];
    return `<span class="dl-badge dl-badge--${status.key}">${l[lang()] || l.en}</span>`;
  }

  let allDeadlines = [];
  let currentView = "list"; // "list" | "calendar"
  let calendarMonth = new Date().getMonth();
  let calendarYear = new Date().getFullYear();
  let calendarSelectedDate = null;

  const state = {
    category: "all",
    type: "all",
    stateFilter: "all",
    time: "all",
    q: "",
  };

  function matchesFilters(row) {
    if (state.category !== "all" && row.category !== state.category) return false;
    if (state.type !== "all" && row.deadline_type !== state.type) return false;
    if (state.stateFilter !== "all" && row.state !== state.stateFilter) return false;

    if (state.time !== "all") {
      const s = computeStatus(row);
      if (state.time === "today" && s.key !== "closing-today") return false;
      if (state.time === "tomorrow" && s.key !== "closing-tomorrow") return false;
      if (state.time === "3days" && !(s.daysLeft >= 0 && s.daysLeft <= 3)) return false;
      if (state.time === "7days" && !(s.daysLeft >= 0 && s.daysLeft <= 7)) return false;
      if (state.time === "30days" && !(s.daysLeft >= 0 && s.daysLeft <= 30)) return false;
      if (state.time === "later" && !(s.daysLeft > 30)) return false;
      if (state.time === "expired" && s.key !== "expired") return false;
    }

    if (state.q) {
      const hay = [
        row.title_en, row.title_hi, row.description_en, row.description_hi,
        (CATEGORIES[row.category] || {}).en, (CATEGORIES[row.category] || {}).hi,
        (STATES[row.state] || {}).en, (STATES[row.state] || {}).hi,
      ].join(" ").toLowerCase();
      if (!hay.includes(state.q.toLowerCase())) return false;
    }

    return true;
  }

  function renderSummary(rows) {
    const el = document.getElementById("dl-summary");
    if (!el) return;
    const published = rows.filter((r) => computeStatus(r).key !== "expired" || true);
    const counts = { today: 0, d3: 0, d7: 0, upcoming: 0 };
    rows.forEach((r) => {
      const s = computeStatus(r);
      if (s.key === "closing-today") counts.today++;
      if (s.daysLeft >= 0 && s.daysLeft <= 3) counts.d3++;
      if (s.daysLeft >= 0 && s.daysLeft <= 7) counts.d7++;
      if (s.key === "upcoming") counts.upcoming++;
    });

    const cards = [
      { icon: "🔴", n: counts.today, label: { en: "Closing Today", hi: "आज समाप्त हो रही हैं" } },
      { icon: "⏳", n: counts.d3, label: { en: "Next 3 Days", hi: "अगले 3 दिनों में" } },
      { icon: "📅", n: counts.d7, label: { en: "Next 7 Days", hi: "अगले 7 दिनों में" } },
      { icon: "🟡", n: counts.upcoming, label: { en: "Upcoming", hi: "आने वाली डेडलाइन" } },
    ];

    el.innerHTML = cards
      .map(
        (c) => `
      <div class="dl-summary-card">
        <span class="dl-summary-icon">${c.icon}</span>
        <span class="dl-summary-num">${c.n}</span>
        <span class="dl-summary-label">${c.label[lang()] || c.label.en}</span>
      </div>`
      )
      .join("");
  }

  function renderCard(row) {
    const status = computeStatus(row);
    const title = pick(row, "title");
    const desc = pick(row, "description");
    const catLabel = (CATEGORIES[row.category] || CATEGORIES.other)[lang()];
    const stateLabel = (STATES[row.state] || STATES.other)[lang()];
    const typeLabel = (DEADLINE_TYPES[row.deadline_type] || DEADLINE_TYPES.other)[lang()];

    return `
      <article class="dl-card dl-card--${status.key}">
        <div class="dl-card__top">
          <span class="dl-card__date">📅 ${formatDate(row.deadline_date)}</span>
          ${statusBadge(status)}
        </div>
        <h3 class="dl-card__title">${escapeHtml(title)}</h3>
        ${desc ? `<p class="dl-card__desc">${escapeHtml(desc.length > 140 ? desc.slice(0, 140) + "…" : desc)}</p>` : ""}
        <div class="dl-card__meta">
          <span class="dl-tag">${escapeHtml(catLabel)}</span>
          <span class="dl-tag">${escapeHtml(stateLabel)}</span>
          <span class="dl-tag">${escapeHtml(typeLabel)}</span>
        </div>
        <div class="dl-card__actions">
          <a class="btn btn-primary" href="${ROOT}tools/deadline-detail.html?slug=${encodeURIComponent(row.slug)}">${tk("dl_check_details", lang() === "hi" ? "विवरण देखें →" : "Check Details →")}</a>
          ${row.official_url ? `<a class="dl-card__official" href="${row.official_url}" target="_blank" rel="noopener noreferrer">${tk("dl_official_portal", lang() === "hi" ? "आधिकारिक पोर्टल ↗" : "Official Portal ↗")}</a>` : ""}
        </div>
      </article>`;
  }

  function renderList() {
    const filtered = allDeadlines.filter(matchesFilters);

    const active = filtered.filter((r) => computeStatus(r).key !== "expired");
    const expired = filtered.filter((r) => computeStatus(r).key === "expired");
    active.sort((a, b) => new Date(a.deadline_date) - new Date(b.deadline_date));
    expired.sort((a, b) => new Date(b.deadline_date) - new Date(a.deadline_date));

    if (!filtered.length) {
      listEl.innerHTML = `<p class="dl-empty">${tk(
        "dl_no_results",
        lang() === "hi" ? "कोई matching deadline नहीं मिली। दूसरा keyword या category try करें।" : "No matching deadlines found. Try a different keyword or category."
      )}</p>`;
      return;
    }

    let html = active.map(renderCard).join("");
    if (expired.length) {
      html += `<h3 class="dl-section-heading">${tk("dl_expired_heading", lang() === "hi" ? "समाप्त हो चुकी डेडलाइन" : "Expired / Past Deadlines")}</h3>`;
      html += expired.map(renderCard).join("");
    }
    listEl.innerHTML = html;
  }

  // ---------------- Calendar view ----------------

  function renderCalendar() {
    const wrap = document.getElementById("dl-calendar");
    if (!wrap) return;

    const monthNamesEn = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const monthNamesHi = ["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्टूबर","नवंबर","दिसंबर"];
    const monthNames = lang() === "hi" ? monthNamesHi : monthNamesEn;

    const firstDay = new Date(calendarYear, calendarMonth, 1);
    const startWeekday = firstDay.getDay();
    const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();

    const byDate = {};
    allDeadlines.filter(matchesFilters).forEach((r) => {
      const d = r.deadline_date;
      (byDate[d] = byDate[d] || []).push(r);
    });

    let cells = "";
    for (let i = 0; i < startWeekday; i++) cells += `<div class="dl-cal-cell dl-cal-cell--empty"></div>`;
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${calendarYear}-${String(calendarMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const items = byDate[dateStr] || [];
      const isToday = dateStr === new Date().toISOString().slice(0, 10);
      const isSelected = dateStr === calendarSelectedDate;
      cells += `
        <button type="button" class="dl-cal-cell ${items.length ? "dl-cal-cell--has-events" : ""} ${isToday ? "dl-cal-cell--today" : ""} ${isSelected ? "dl-cal-cell--selected" : ""}" data-date="${dateStr}">
          <span class="dl-cal-daynum">${day}</span>
          ${items.length ? `<span class="dl-cal-dot" title="${items.length}">${items.length}</span>` : ""}
        </button>`;
    }

    const weekdaysEn = ["Su","Mo","Tu","We","Th","Fr","Sa"];
    const weekdaysHi = ["र","सो","मं","बु","गु","शु","श"];
    const weekdays = (lang() === "hi" ? weekdaysHi : weekdaysEn).map((w) => `<div class="dl-cal-weekday">${w}</div>`).join("");

    wrap.innerHTML = `
      <div class="dl-cal-header">
        <button type="button" id="dl-cal-prev" class="dl-cal-nav" aria-label="Previous month">←</button>
        <strong>${monthNames[calendarMonth]} ${calendarYear}</strong>
        <button type="button" id="dl-cal-next" class="dl-cal-nav" aria-label="Next month">→</button>
      </div>
      <div class="dl-cal-grid dl-cal-grid--weekdays">${weekdays}</div>
      <div class="dl-cal-grid">${cells}</div>
      <div id="dl-cal-day-list"></div>
    `;

    document.getElementById("dl-cal-prev").addEventListener("click", () => {
      calendarMonth--;
      if (calendarMonth < 0) { calendarMonth = 11; calendarYear--; }
      renderCalendar();
    });
    document.getElementById("dl-cal-next").addEventListener("click", () => {
      calendarMonth++;
      if (calendarMonth > 11) { calendarMonth = 0; calendarYear++; }
      renderCalendar();
    });
    wrap.querySelectorAll(".dl-cal-cell--has-events").forEach((btn) => {
      btn.addEventListener("click", () => {
        calendarSelectedDate = btn.dataset.date;
        renderCalendar();
      });
    });

    const dayListEl = document.getElementById("dl-cal-day-list");
    if (calendarSelectedDate && byDate[calendarSelectedDate]) {
      dayListEl.innerHTML = `<h4 class="dl-section-heading">${formatDate(calendarSelectedDate)}</h4>` +
        byDate[calendarSelectedDate].map(renderCard).join("");
    } else {
      dayListEl.innerHTML = "";
    }
  }

  function setView(view) {
    currentView = view;
    document.getElementById("dl-list").hidden = view !== "list";
    document.getElementById("dl-calendar").hidden = view !== "calendar";
    document.querySelectorAll(".dl-view-btn").forEach((b) => b.classList.toggle("active", b.dataset.view === view));
    if (view === "calendar") renderCalendar();
  }

  function renderAll() {
    renderSummary(allDeadlines);
    renderList();
    if (currentView === "calendar") renderCalendar();
  }

  function wireControls() {
    document.querySelectorAll("[data-dl-category]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-dl-category]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.category = btn.dataset.dlCategory;
        renderAll();
      });
    });
    const typeSel = document.getElementById("dl-filter-type");
    if (typeSel) typeSel.addEventListener("change", () => { state.type = typeSel.value; renderAll(); });
    const stateSel = document.getElementById("dl-filter-state");
    if (stateSel) stateSel.addEventListener("change", () => { state.stateFilter = stateSel.value; renderAll(); });
    document.querySelectorAll("[data-dl-time]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-dl-time]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.time = btn.dataset.dlTime;
        renderAll();
      });
    });
    const searchInput = document.getElementById("dl-search");
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        state.q = searchInput.value.trim();
        renderAll();
      });
    }
    document.querySelectorAll(".dl-view-btn").forEach((btn) => {
      btn.addEventListener("click", () => setView(btn.dataset.view));
    });
  }

  async function loadDeadlines() {
    const client = await getSupabaseClient();
    if (!client) {
      listEl.innerHTML = `<p class="dl-empty">${tk("dl_error", lang() === "hi" ? "अभी डेटा लोड नहीं हो सका। कृपया बाद में पुनः प्रयास करें।" : "Could not load deadlines right now. Please try again later.")}</p>`;
      return;
    }
    try {
      const { data, error } = await client
        .from("deadlines")
        .select("id, slug, title_en, title_hi, category, deadline_type, state, deadline_date, description_en, description_hi, official_url")
        .eq("status", "published")
        .order("deadline_date", { ascending: true });
      if (error) throw error;
      allDeadlines = data || [];
      renderAll();
    } catch (err) {
      console.error("Failed to load deadlines:", err);
      listEl.innerHTML = `<p class="dl-empty">${tk("dl_error", lang() === "hi" ? "अभी डेटा लोड नहीं हो सका। कृपया बाद में पुनः प्रयास करें।" : "Could not load deadlines right now. Please try again later.")}</p>`;
    }
  }

  wireControls();
  loadDeadlines();
  if (typeof onLangChange === "function") {
    onLangChange(() => renderAll());
  }
})();
