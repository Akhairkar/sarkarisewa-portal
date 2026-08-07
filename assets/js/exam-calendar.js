/* ==========================================================================
   exam-calendar.js — Renders /exams/index.html — government exam calendar.
   Reads the "exam_calendar" Supabase table (see supabase/exam-calendar-schema.sql)
   via the shared getSupabaseClient() helper. Only status = 'published' rows
   are ever fetched — the table's RLS policy already hides drafts from anon
   reads.

   Status shown on each card (Upcoming / Open / Closed) is NOT stored in the
   database — it is computed here, right now, from today's date vs
   notification_date / last_date. So it is always correct without anyone
   having to update it by hand.
   ========================================================================== */

(function () {
  const listEl = document.getElementById("exam-list");
  if (!listEl) return;

  let allExams = [];

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
    if (!iso) return "";
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    const locale = typeof getLang === "function" && getLang() === "hi" ? "hi-IN" : "en-IN";
    return d.toLocaleDateString(locale, { year: "numeric", month: "short", day: "numeric" });
  }

  // Returns one of "upcoming" | "open" | "closed" for a given exam row,
  // based purely on today's date — the same logic used to badge "Closed"
  // job alerts, extended with a notification_date check for "Upcoming".
  function computeStatus(exam) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (exam.notification_date) {
      const notif = new Date(exam.notification_date + "T00:00:00");
      if (today < notif) return "upcoming";
    }

    const last = new Date(exam.last_date + "T00:00:00");
    if (today <= last) return "open";

    return "closed";
  }

  function statusBadge(status) {
    if (status === "open") {
      return `<span class="exam-badge exam-badge--open">${tk("examcal_status_open", "Open")}</span>`;
    }
    if (status === "upcoming") {
      return `<span class="exam-badge exam-badge--upcoming">${tk("examcal_status_upcoming", "Upcoming")}</span>`;
    }
    return `<span class="exam-badge exam-badge--closed">${tk("examcal_status_closed", "Closed")}</span>`;
  }

  function renderList(exams) {
    if (!exams.length) {
      listEl.innerHTML = `<p class="exam-empty">${tk("examcal_empty", "No exams posted yet. Check back soon.")}</p>`;
      return;
    }
    const lang = typeof getLang === "function" ? getLang() : "en";
    listEl.innerHTML = exams
      .map((ex) => {
        const status = computeStatus(ex);
        const name = lang === "hi" && ex.exam_name_hi ? ex.exam_name_hi : ex.exam_name_en;
        const org = lang === "hi" && ex.organisation_hi ? ex.organisation_hi : ex.organisation_en;

        return `
      <article class="exam-card exam-card--${status}">
        <div class="exam-card__head">
          <h3 class="exam-card__title">${escapeHtml(name)}</h3>
          ${statusBadge(status)}
        </div>
        ${org ? `<p class="exam-card__org">${escapeHtml(org)}</p>` : ""}
        <div class="exam-card__meta">
          ${ex.notification_date ? `<span><strong>${tk("examcal_notification_label", "Notification")}:</strong> ${formatDate(ex.notification_date)}</span>` : ""}
          <span><strong>${tk("examcal_last_date_label", "Last Date to Apply")}:</strong> ${formatDate(ex.last_date)}</span>
          ${ex.exam_date ? `<span><strong>${tk("examcal_exam_date_label", "Exam Date")}:</strong> ${formatDate(ex.exam_date)}</span>` : ""}
        </div>
        <div class="exam-card__actions">
          <a class="btn btn-primary" href="exam.html?slug=${encodeURIComponent(ex.slug)}">${tk("examcal_view_details", "View Details →")}</a>
        </div>
      </article>`;
      })
      .join("");
  }

  async function loadExams() {
    const client = await getSupabaseClient();
    if (!client) {
      listEl.innerHTML = `<p class="exam-empty">${tk("examcal_error", "Could not load the exam calendar right now. Please try again later.")}</p>`;
      return;
    }
    try {
      const { data, error } = await client
        .from("exam_calendar")
        .select("id, slug, exam_name_en, exam_name_hi, organisation_en, organisation_hi, category, notification_date, last_date, exam_date, official_link")
        .eq("status", "published")
        .order("last_date", { ascending: true });
      if (error) throw error;
      allExams = data || [];
      renderList(allExams);
    } catch (err) {
      console.error("Failed to load exam calendar:", err);
      listEl.innerHTML = `<p class="exam-empty">${tk("examcal_error", "Could not load the exam calendar right now. Please try again later.")}</p>`;
    }
  }

  loadExams();
  if (typeof onLangChange === "function") {
    onLangChange(() => renderList(allExams));
  }
})();
