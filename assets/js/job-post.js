/* ==========================================================================
   job-post.js
   Renders /jobs/post.html for whichever job alert is requested via the
   URL, e.g. post.html?slug=isro-recruitment-2026-abc123
   ========================================================================== */

(function () {
  const ROOT = window.SS_ROOT || "";
  const params = new URLSearchParams(window.location.search);
  // Static pages (jobs/<slug>.html, see tools/generate-job-pages.py) carry
  // the slug on <body data-slug="...">. Fall back to the old ?slug= query
  // string for the dynamic jobs/post.html route, kept working for any job
  // alert added since the last time the generator was run.
  const slug = document.body.dataset.slug || params.get("slug");

  const breadcrumbEl = document.getElementById("breadcrumb");
  const loadingEl = document.getElementById("job-post-loading");
  const heroEl = document.getElementById("job-post-hero");
  const bodyEl = document.getElementById("job-post-body");
  const relatedEl = document.getElementById("job-post-related");

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

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str || "";
    return div.innerHTML;
  }

  function nl2br(str) {
    return escapeHtml(str).replace(/\n/g, "<br>");
  }

  function formatDate(iso) {
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    const locale = getLang() === "hi" ? "hi-IN" : "en-IN";
    return d.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
  }

  function isClosed(lastDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(lastDate + "T00:00:00") < today;
  }

  async function fetchJob(theSlug) {
    const client = await getSupabaseClient();
    if (!client) return null;
    const published = await client
      .from("job_alerts")
      .select("*")
      .eq("status", "published")
      .eq("slug", theSlug)
      .maybeSingle();
    if (published.error) throw published.error;
    if (published.data) return published.data;

    // Not found as published — if this browser has an authenticated admin
    // session (RLS grants authenticated users read on all rows, drafts
    // included), this second query lets the admin preview an unpublished
    // job alert from the dashboard's "Preview" button. Anonymous visitors
    // simply get null here, same as before.
    const draft = await client.from("job_alerts").select("*").eq("slug", theSlug).maybeSingle();
    if (draft.error) return null;
    if (draft.data) draft.data.__isDraftPreview = true;
    return draft.data;
  }

  async function fetchRelatedJobs(jobType, excludeSlug) {
    const client = await getSupabaseClient();
    if (!client || !jobType) return [];
    const { data, error } = await client
      .from("job_alerts")
      .select("slug, title_en, title_hi, last_date")
      .eq("status", "published")
      .eq("job_type", jobType)
      .neq("slug", excludeSlug)
      .order("last_date", { ascending: true })
      .limit(4);
    if (error) return [];
    return data || [];
  }

  if (!slug) {
    renderMissing();
  } else {
    fetchJob(slug)
      .then(async (job) => {
        loadingEl.hidden = true;
        if (!job) {
          renderMissing();
          return;
        }
        const relatedJobs = await fetchRelatedJobs(job.job_type, job.slug);
        renderAll(job, relatedJobs);
        if (job.__isDraftPreview) renderDraftBanner();
        onLangChange(() => renderAll(job, relatedJobs));
      })
      .catch((err) => {
        console.error("Failed to load job alert:", err);
        loadingEl.textContent = t({
          en: "Could not load this job alert. Please try again later.",
          hi: "यह नौकरी अलर्ट लोड नहीं हो सका। कृपया बाद में पुनः प्रयास करें।",
        });
      });
  }

  function pick(job, baseKey) {
    const lang = getLang();
    return (lang === "hi" && job[baseKey + "_hi"]) ? job[baseKey + "_hi"] : job[baseKey + "_en"];
  }

  function renderAll(job, relatedJobs) {
    const title = pick(job, "title");
    heroEl.hidden = false;
    bodyEl.hidden = false;
    document.title = `${title} — SarkariSewaIndia`;
    renderMeta(job, title);
    renderBreadcrumb(job, title);
    renderHero(job, title);
    renderBody(job);
    renderRelated(relatedJobs);
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

  function renderMeta(job, title) {
    const desc = pick(job, "description") || pick(job, "qualification") || title;
    const url = `https://sarkarisewaindia.com/jobs/post.html?slug=${job.slug}`;

    setMetaTag("name", "description", desc.slice(0, 160));
    setMetaTag("property", "og:title", `${title} — SarkariSewaIndia`);
    setMetaTag("property", "og:description", desc.slice(0, 160));
    setMetaTag("property", "og:type", "article");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    renderSchema(job, title, desc, url);
  }

  function renderSchema(job, title, desc, url) {
    const existing = document.getElementById("job-post-schema");
    if (existing) existing.remove();

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "JobPosting",
          title: title,
          description: desc,
          datePosted: job.created_at ? job.created_at.slice(0, 10) : undefined,
          validThrough: job.last_date,
          employmentType: "FULL_TIME",
          hiringOrganization: {
            "@type": "Organization",
            name: job.department_en || "Government of India",
          },
          jobLocation: {
            "@type": "Place",
            address: job.location_en || "India",
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://sarkarisewaindia.com/index.html" },
            { "@type": "ListItem", position: 2, name: "Job Alerts", item: "https://sarkarisewaindia.com/jobs/index.html" },
            { "@type": "ListItem", position: 3, name: title, item: url },
          ],
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "job-post-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  function renderBreadcrumb(job, title) {
    breadcrumbEl.innerHTML = `
      <a href="${ROOT}index.html">Home</a>
      <span class="sep">/</span>
      <a href="${ROOT}jobs/index.html" data-i18n="jobalerts_title">Job Alerts</a>
      <span class="sep">/</span>
      <span class="current">${escapeHtml(title)}</span>
    `;
  }

  function renderHero(job, title) {
    const closed = isClosed(job.last_date);
    const typeLabel = JOB_TYPES[job.job_type] ? JOB_TYPES[job.job_type][getLang()] || JOB_TYPES[job.job_type].en : job.job_type;
    const dept = pick(job, "department");
    const location = pick(job, "location");

    heroEl.innerHTML = `
      <div class="job-post-hero__badges">
        ${typeLabel ? `<span class="job-badge job-badge--type">${escapeHtml(typeLabel)}</span>` : ""}
        ${closed ? `<span class="job-badge job-badge--closed">${t({ en: "Closed", hi: "बंद" })}</span>` : ""}
      </div>
      <h1 class="job-post-hero__title">${escapeHtml(title)}</h1>
      ${dept ? `<p class="job-post-hero__dept">${escapeHtml(dept)}${location ? " · " + escapeHtml(location) : ""}</p>` : ""}
      <div class="job-post-hero__meta">
        ${job.vacancies ? `<div><strong>${t({ en: "Vacancies", hi: "रिक्तियां" })}:</strong> ${escapeHtml(job.vacancies)}</div>` : ""}
        <div><strong>${t({ en: "Last Date to Apply", hi: "आवेदन की अंतिम तिथि" })}:</strong> ${formatDate(job.last_date)}</div>
      </div>
      <div class="job-post-hero__actions">
        <a class="btn btn-primary" href="${job.apply_link}" target="_blank" rel="noopener noreferrer">${t({ en: "Apply Now →", hi: "अभी आवेदन करें →" })}</a>
        ${job.notification_link ? `<a class="job-card__notification-link" href="${job.notification_link}" target="_blank" rel="noopener noreferrer">${t({ en: "Official Notification (PDF)", hi: "आधिकारिक अधिसूचना (PDF)" })}</a>` : ""}
      </div>
      <div id="job-share-row"></div>
    `;

    if (typeof renderShareRow === "function") {
      const shareUrl = `https://sarkarisewaindia.com/jobs/post.html?slug=${job.slug}`;
      renderShareRow("job-share-row", shareUrl, title, "job-share");
    }
  }

  function section(labelObj, content, isPre) {
    if (!content) return "";
    return `
      <section class="job-post-section">
        <h2>${t(labelObj)}</h2>
        <div class="job-post-section__body">${isPre ? nl2br(content) : content}</div>
      </section>
    `;
  }

  function renderBody(job) {
    const qualification = pick(job, "qualification");
    const ageLimit = pick(job, "age_limit");
    const fee = pick(job, "fee_info");
    const description = pick(job, "description");
    const vacancyBreakdown = pick(job, "vacancy_breakdown");
    const selectionProcess = pick(job, "selection_process");
    const salary = pick(job, "salary");
    const howToApply = pick(job, "how_to_apply");
    const importantDates = pick(job, "important_dates");

    const notificationEmbed = job.notification_link && /\.pdf(\?|#|$)/i.test(job.notification_link)
      ? `
      <section class="job-post-section">
        <h2>${t({ en: "Official Notification", hi: "आधिकारिक अधिसूचना" })}</h2>
        <div class="job-post-pdf-embed">
          <iframe src="${job.notification_link}" title="${t({ en: "Official Notification PDF", hi: "आधिकारिक अधिसूचना PDF" })}" loading="lazy"></iframe>
        </div>
        <a class="job-post-pdf-fallback" href="${job.notification_link}" target="_blank" rel="noopener noreferrer">${t({ en: "Open PDF in a new tab ↗", hi: "PDF नए टैब में खोलें ↗" })}</a>
      </section>`
      : "";

    bodyEl.innerHTML = [
      section({ en: "Overview", hi: "विवरण" }, description),
      section({ en: "Eligibility", hi: "योग्यता" }, qualification, true),
      section({ en: "Vacancy Breakdown", hi: "रिक्ति विवरण" }, vacancyBreakdown, true),
      section({ en: "Age Limit", hi: "आयु सीमा" }, ageLimit, true),
      section({ en: "Application Fee", hi: "आवेदन शुल्क" }, fee, true),
      section({ en: "Salary / Pay Scale", hi: "वेतन" }, salary, true),
      section({ en: "Selection Process", hi: "चयन प्रक्रिया" }, selectionProcess, true),
      section({ en: "Important Dates", hi: "महत्वपूर्ण तिथियां" }, importantDates, true),
      section({ en: "How to Apply", hi: "आवेदन कैसे करें" }, howToApply, true),
      notificationEmbed,
    ]
      .filter(Boolean)
      .join("");

    if (!bodyEl.innerHTML.trim()) {
      bodyEl.innerHTML = `<p class="job-empty">${t({
        en: "Full details for this alert haven't been added yet — use the Apply Now link above for the official notification.",
        hi: "इस अलर्ट का पूरा विवरण अभी जोड़ा नहीं गया है — आधिकारिक अधिसूचना के लिए ऊपर दिए Apply Now लिंक का उपयोग करें।",
      })}</p>`;
    }
  }

  function renderRelated(relatedJobs) {
    if (!relatedJobs || !relatedJobs.length) {
      relatedEl.hidden = true;
      return;
    }
    relatedEl.hidden = false;
    const lang = getLang();
    relatedEl.innerHTML = `
      <p class="job-post-related__label">${t({ en: "Other similar job alerts", hi: "अन्य समान नौकरी अलर्ट" })}</p>
      <div class="job-post-related__list">
        ${relatedJobs
          .map((j) => {
            const title = lang === "hi" && j.title_hi ? j.title_hi : j.title_en;
            return `<a class="job-post-related__item" href="${ROOT}jobs/post.html?slug=${j.slug}">${escapeHtml(title)} <span>· ${formatDate(j.last_date)}</span></a>`;
          })
          .join("")}
      </div>
    `;
  }

  function renderDraftBanner() {
    const banner = document.createElement("div");
    banner.className = "job-post-draft-banner";
    banner.textContent = t({
      en: "⚠ Draft preview — this job alert is not published yet. Only you (logged in) can see this page.",
      hi: "⚠ ड्राफ्ट प्रीव्यू — यह नौकरी अलर्ट अभी प्रकाशित नहीं हुआ है। केवल आप (लॉग-इन) ही यह पेज देख सकते हैं।",
    });
    heroEl.parentNode.insertBefore(banner, heroEl);
  }

  function renderMissing() {
    heroEl.hidden = false;
    bodyEl.hidden = false;
    heroEl.innerHTML = `
      <h1 class="job-post-hero__title">${t({ en: "Job alert not found", hi: "नौकरी अलर्ट नहीं मिला" })}</h1>
      <p class="job-post-hero__dept">${t({
        en: "This job alert doesn't exist, has been removed, or the link may be broken.",
        hi: "यह नौकरी अलर्ट मौजूद नहीं है, हटा दिया गया है, या लिंक टूटा हो सकता है।",
      })}</p>
    `;
    bodyEl.innerHTML = "";
    relatedEl.hidden = true;
    breadcrumbEl.innerHTML = `<a href="${ROOT}index.html">Home</a><span class="sep">/</span><a href="${ROOT}jobs/index.html">Job Alerts</a>`;
  }
})();
