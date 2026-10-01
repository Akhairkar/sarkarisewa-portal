/* ==========================================================================
   exam-post.js
   Renders /exams/exam.html for whichever exam is requested via the URL,
   e.g. exam.html?slug=ssc-cgl-2026 — the dynamic fallback for any exam
   added since the last time tools/generate-exam-pages.py ran, exactly
   the same pattern job-post.js already uses for jobs/post.html.
   ========================================================================== */

(function () {
  const ROOT = window.SS_ROOT || "";
  const params = new URLSearchParams(window.location.search);
  // Static pages (exams/<slug>.html, see tools/generate-exam-pages.py)
  // carry the slug on <body data-slug="...">. Fall back to the ?slug=
  // query string for this dynamic route.
  const slug = document.body.dataset.slug || params.get("slug");

  const breadcrumbEl = document.getElementById("breadcrumb");
  const loadingEl = document.getElementById("exam-post-loading");
  const heroEl = document.getElementById("exam-post-hero");
  const bodyEl = document.getElementById("exam-post-body");
  const relatedEl = document.getElementById("exam-post-related");

  const EXAM_CATEGORIES = {
    central: { en: "Central Govt", hi: "केंद्र सरकार" },
    state: { en: "State Govt", hi: "राज्य सरकार" },
    banking: { en: "Banking", hi: "बैंकिंग" },
    railway: { en: "Railway", hi: "रेलवे" },
    ssc: { en: "SSC", hi: "SSC" },
    upsc: { en: "UPSC", hi: "UPSC" },
    police: { en: "Police", hi: "पुलिस" },
    defence: { en: "Defence", hi: "रक्षा" },
    other: { en: "Other", hi: "अन्य" },
  };

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str || "";
    return div.innerHTML;
  }

  function nl2br(str) {
    return escapeHtml(str).replace(/\n/g, "<br>");
  }

  function formatDate(iso) {
    if (!iso) return "";
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    const locale = getLang() === "hi" ? "hi-IN" : "en-IN";
    return d.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
  }

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

  async function fetchExam(theSlug) {
    const client = await getSupabaseClient();
    if (!client) return null;
    const published = await client
      .from("exam_calendar")
      .select("*")
      .eq("status", "published")
      .eq("slug", theSlug)
      .maybeSingle();
    if (published.error) throw published.error;
    if (published.data) return published.data;

    // Same admin-preview pattern as job-post.js — authenticated admin
    // sessions can preview an unpublished exam via RLS.
    const draft = await client.from("exam_calendar").select("*").eq("slug", theSlug).maybeSingle();
    if (draft.error) return null;
    if (draft.data) draft.data.__isDraftPreview = true;
    return draft.data;
  }

  async function fetchRelatedExams(category, excludeSlug) {
    const client = await getSupabaseClient();
    if (!client || !category) return [];
    const { data, error } = await client
      .from("exam_calendar")
      .select("slug, exam_name_en, exam_name_hi, last_date")
      .eq("status", "published")
      .eq("category", category)
      .neq("slug", excludeSlug)
      .order("last_date", { ascending: true })
      .limit(4);
    if (error) return [];
    return data || [];
  }

  if (!slug) {
    renderMissing();
  } else {
    fetchExam(slug)
      .then(async (exam) => {
        if (loadingEl) loadingEl.hidden = true;
        if (!exam) {
          renderMissing();
          return;
        }
        const relatedExams = await fetchRelatedExams(exam.category, exam.slug);
        renderAll(exam, relatedExams);
        if (exam.__isDraftPreview) renderDraftBanner();
        onLangChange(() => renderAll(exam, relatedExams));
      })
      .catch((err) => {
        console.error("Failed to load exam:", err);
        if (loadingEl) {
          loadingEl.textContent = t({
            en: "Could not load this exam. Please try again later.",
            hi: "यह परीक्षा लोड नहीं हो सकी। कृपया बाद में पुनः प्रयास करें।",
          });
        }
      });
  }

  function pick(exam, baseKey) {
    const lang = getLang();
    return (lang === "hi" && exam[baseKey + "_hi"]) ? exam[baseKey + "_hi"] : exam[baseKey + "_en"];
  }

  function renderAll(exam, relatedExams) {
    const name = pick(exam, "exam_name");
    heroEl.hidden = false;
    bodyEl.hidden = false;
    document.title = `${name} — SarkariSewaIndia`;
    renderMeta(exam, name);
    renderBreadcrumb(name);
    renderHero(exam, name);
    renderBody(exam);
    renderRelated(relatedExams);
  }

  function setMetaTag(attr, key, content) {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function renderMeta(exam, name) {
    const desc = pick(exam, "description") || name;
    const url = `https://sarkarisewaindia.com/exams/exam.html?slug=${exam.slug}`;

    setMetaTag("name", "description", desc.slice(0, 160));
    setMetaTag("property", "og:title", `${name} — SarkariSewaIndia`);
    setMetaTag("property", "og:description", desc.slice(0, 160));
    setMetaTag("property", "og:type", "article");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    renderSchema(exam, name, desc, url);
  }

  function renderSchema(exam, name, desc, url) {
    const existing = document.getElementById("exam-post-schema");
    if (existing) existing.remove();

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Event",
          name: name,
          description: desc,
          startDate: exam.exam_date || exam.last_date,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          organizer: { "@type": "Organization", name: exam.organisation_en || "Government of India" },
          location: { "@type": "Place", name: "India" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://sarkarisewaindia.com/index.html" },
            { "@type": "ListItem", position: 2, name: "Exam Calendar", item: "https://sarkarisewaindia.com/exams/index.html" },
            { "@type": "ListItem", position: 3, name: name, item: url },
          ],
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "exam-post-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  function renderBreadcrumb(name) {
    breadcrumbEl.innerHTML = `
      <a href="${ROOT}index.html">Home</a>
      <span class="sep">/</span>
      <a href="${ROOT}exams/index.html" data-i18n="nav_examcal">Exam Calendar</a>
      <span class="sep">/</span>
      <span class="current">${escapeHtml(name)}</span>
    `;
  }

  function renderHero(exam, name) {
    const status = computeStatus(exam);
    const catLabel = EXAM_CATEGORIES[exam.category] ? EXAM_CATEGORIES[exam.category][getLang()] || EXAM_CATEGORIES[exam.category].en : exam.category;
    const org = pick(exam, "organisation");

    heroEl.innerHTML = `
      <div class="job-post-hero__badges">
        ${catLabel ? `<span class="job-badge job-badge--type">${escapeHtml(catLabel)}</span>` : ""}
        ${status === "closed" ? `<span class="job-badge job-badge--closed">${t({ en: "Closed", hi: "बंद" })}</span>` : ""}
      </div>
      <h1 class="job-post-hero__title">${escapeHtml(name)}</h1>
      ${org ? `<p class="job-post-hero__dept">${escapeHtml(org)}</p>` : ""}
      <div class="job-post-hero__meta">
        ${exam.notification_date ? `<div><strong>${t({ en: "Notification Date", hi: "अधिसूचना तिथि" })}:</strong> ${formatDate(exam.notification_date)}</div>` : ""}
        <div><strong>${t({ en: "Last Date to Apply", hi: "आवेदन की अंतिम तिथि" })}:</strong> ${formatDate(exam.last_date)}</div>
        ${exam.exam_date ? `<div><strong>${t({ en: "Exam Date", hi: "परीक्षा तिथि" })}:</strong> ${formatDate(exam.exam_date)}</div>` : ""}
      </div>
      <div class="job-post-hero__actions">
        <a class="btn btn-primary" href="${exam.official_link}" target="_blank" rel="noopener noreferrer">${t({ en: "Official Website →", hi: "आधिकारिक वेबसाइट →" })}</a>
        ${exam.notification_pdf_link ? `<a class="job-card__notification-link" href="${exam.notification_pdf_link}" target="_blank" rel="noopener noreferrer">${t({ en: "Official Notification (PDF)", hi: "आधिकारिक अधिसूचना (PDF)" })}</a>` : ""}
      </div>
      <div id="job-share-row"></div>
    `;

    if (typeof renderShareRow === "function") {
      const shareUrl = `https://sarkarisewaindia.com/exams/exam.html?slug=${exam.slug}`;
      renderShareRow("job-share-row", shareUrl, name, "exam-share");
    }
  }

  function section(labelObj, content) {
    if (!content) return "";
    return `
      <section class="job-post-section">
        <h2>${t(labelObj)}</h2>
        <div class="job-post-section__body">${nl2br(content)}</div>
      </section>
    `;
  }

  function renderBody(exam) {
    bodyEl.innerHTML = [
      section({ en: "Overview", hi: "विवरण" }, pick(exam, "description")),
      section({ en: "Eligibility", hi: "पात्रता" }, pick(exam, "eligibility")),
      section({ en: "Age Limit", hi: "आयु सीमा" }, pick(exam, "age_limit")),
      section({ en: "Exam Pattern", hi: "परीक्षा पैटर्न" }, pick(exam, "exam_pattern")),
      section({ en: "Syllabus", hi: "पाठ्यक्रम" }, pick(exam, "syllabus")),
      section({ en: "Selection Process", hi: "चयन प्रक्रिया" }, pick(exam, "selection_process")),
      section({ en: "Application Fee", hi: "आवेदन शुल्क" }, pick(exam, "application_fee")),
      section({ en: "How to Apply", hi: "आवेदन कैसे करें" }, pick(exam, "how_to_apply")),
    ]
      .filter(Boolean)
      .join("");

    if (!bodyEl.innerHTML.trim()) {
      bodyEl.innerHTML = `<p class="job-empty">${t({
        en: "Full details for this exam haven't been added yet — use the Official Website link above.",
        hi: "इस परीक्षा का पूरा विवरण अभी जोड़ा नहीं गया है — ऊपर दिए आधिकारिक वेबसाइट लिंक का उपयोग करें।",
      })}</p>`;
    }
  }

  function renderRelated(relatedExams) {
    if (!relatedExams || !relatedExams.length) {
      relatedEl.hidden = true;
      return;
    }
    relatedEl.hidden = false;
    const lang = getLang();
    relatedEl.innerHTML = `
      <p class="job-post-related__label">${t({ en: "Other exams in this category", hi: "इसी श्रेणी की अन्य परीक्षाएं" })}</p>
      <div class="job-post-related__list">
        ${relatedExams
          .map((e) => {
            const name = lang === "hi" && e.exam_name_hi ? e.exam_name_hi : e.exam_name_en;
            return `<a class="job-post-related__item" href="${ROOT}exams/exam.html?slug=${e.slug}">${escapeHtml(name)} <span>· ${formatDate(e.last_date)}</span></a>`;
          })
          .join("")}
      </div>
    `;
  }

  function renderDraftBanner() {
    const banner = document.createElement("div");
    banner.className = "job-post-draft-banner";
    banner.textContent = t({
      en: "⚠ Draft preview — this exam is not published yet. Only you (logged in) can see this page.",
      hi: "⚠ ड्राफ्ट प्रीव्यू — यह परीक्षा अभी प्रकाशित नहीं हुई है। केवल आप (लॉग-इन) ही यह पेज देख सकते हैं।",
    });
    heroEl.parentNode.insertBefore(banner, heroEl);
  }

  function renderMissing() {
    if (loadingEl) loadingEl.hidden = true;
    heroEl.hidden = false;
    bodyEl.hidden = false;
    heroEl.innerHTML = `
      <h1 class="job-post-hero__title">${t({ en: "Exam not found", hi: "परीक्षा नहीं मिली" })}</h1>
      <p class="job-post-hero__dept">${t({
        en: "This exam doesn't exist, has been removed, or the link may be broken.",
        hi: "यह परीक्षा मौजूद नहीं है, हटा दी गई है, या लिंक टूटा हो सकता है।",
      })}</p>
    `;
    bodyEl.innerHTML = "";
    relatedEl.hidden = true;
    breadcrumbEl.innerHTML = `<a href="${ROOT}index.html">Home</a><span class="sep">/</span><a href="${ROOT}exams/index.html">Exam Calendar</a>`;
  }
})();
