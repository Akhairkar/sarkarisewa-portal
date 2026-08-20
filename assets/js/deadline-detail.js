/* ==========================================================================
   deadline-detail.js
   Renders /tools/deadline-detail.html for whichever deadline is requested
   via ?slug=..., the same dynamic-route pattern job-post.js and
   exam-post.js already use. Title/description/schema come from the SEO
   fields the admin filled in directly (supabase/deadlines-schema.sql).
   ========================================================================== */

(function () {
  const ROOT = window.SS_ROOT || "";
  const params = new URLSearchParams(window.location.search);
  const slug = document.body.dataset.slug || params.get("slug");

  const breadcrumbEl = document.getElementById("breadcrumb");
  const loadingEl = document.getElementById("dl-post-loading");
  const draftSlotEl = document.getElementById("dl-post-draft-slot");
  const heroEl = document.getElementById("dl-post-hero");
  const bodyEl = document.getElementById("dl-post-body");
  const relatedEl = document.getElementById("dl-post-related");

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

  const TOOLS_BY_CATEGORY = {
    scheme: ["eligibility-checker", "csc-locator", "document-checklist"],
    jobs: ["age-calculator", "typing-speed-test", "eligibility-checker"],
    exam: ["age-calculator", "typing-speed-test", "eligibility-checker"],
    scholarship: ["eligibility-checker", "document-checklist", "self-declaration-builder"],
    education: ["eligibility-checker", "document-checklist", "age-calculator"],
    tax: ["income-tax-calculator", "hra-calculator", "itr-penalty-calculator"],
    ekyc: ["pan-aadhaar-conflict-resolver", "document-checklist", "status-troubleshooter"],
    banking: ["savings-comparator", "epf-calculator", "gratuity-calculator"],
    farmer: ["eligibility-checker", "csc-locator", "document-checklist"],
    pension: ["epf-calculator", "gratuity-calculator", "savings-comparator"],
    documents: ["document-checklist", "document-compressor", "self-declaration-builder"],
    certificates: ["document-checklist", "self-declaration-builder", "status-troubleshooter"],
    housing: ["eligibility-checker", "document-checklist", "csc-locator"],
    business: ["savings-comparator", "document-checklist", "csc-locator"],
    other: ["document-checklist", "eligibility-checker", "csc-locator"],
  };

  const TOOL_META = {
    "income-tax-calculator": { icon: "💰", en: "Income Tax Calculator", hi: "इनकम टैक्स कैलकुलेटर" },
    "hra-calculator": { icon: "🏠", en: "HRA Exemption Calculator", hi: "HRA छूट कैलकुलेटर" },
    "itr-penalty-calculator": { icon: "⚖️", en: "Late Filing Penalty Calculator", hi: "विलंब शुल्क कैलकुलेटर" },
    "savings-comparator": { icon: "📊", en: "Savings Scheme Comparator", hi: "बचत योजना तुलनित्र" },
    "epf-calculator": { icon: "🏦", en: "EPF Calculator", hi: "EPF कैलकुलेटर" },
    "gratuity-calculator": { icon: "🎁", en: "Gratuity Calculator", hi: "ग्रेच्युटी कैलकुलेटर" },
    "eligibility-checker": { icon: "✅", en: "Eligibility Checker", hi: "पात्रता चेकर" },
    "csc-locator": { icon: "🏬", en: "Nearest CSC Locator", hi: "निकटतम CSC खोजें" },
    "document-checklist": { icon: "📋", en: "Document Checklist", hi: "दस्तावेज़ चेकलिस्ट" },
    "document-compressor": { icon: "🗜️", en: "Document Compressor", hi: "दस्तावेज़ कंप्रेसर" },
    "self-declaration-builder": { icon: "📝", en: "Self-Declaration Builder", hi: "स्व-घोषणा निर्माता" },
    "pan-aadhaar-conflict-resolver": { icon: "🆔", en: "PAN-Aadhaar Conflict Resolver", hi: "पैन-आधार समस्या समाधान" },
    "status-troubleshooter": { icon: "🔍", en: "Application Status Troubleshooter", hi: "आवेदन स्थिति समाधान" },
    "age-calculator": { icon: "🎂", en: "Age & Retirement Calculator", hi: "आयु व सेवानिवृत्ति कैलकुलेटर" },
    "typing-speed-test": { icon: "⌨️", en: "Typing Speed Test", hi: "टाइपिंग स्पीड टेस्ट" },
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

  function statusLabel(status) {
    const labels = {
      "closing-today": { en: "Closing Today", hi: "आज अंतिम दिन" },
      "closing-tomorrow": { en: "Ends Tomorrow", hi: "कल अंतिम दिन" },
      urgent: { en: `${status.daysLeft} Days Left`, hi: `${status.daysLeft} दिन बचे` },
      week: { en: `${status.daysLeft} Days Left`, hi: `${status.daysLeft} दिन बचे` },
      upcoming: { en: "Upcoming", hi: "आगामी" },
      expired: { en: "Expired", hi: "समाप्त" },
    };
    const l = labels[status.key];
    return l[getLang()] || l.en;
  }

  function pick(row, baseKey) {
    return getLang() === "hi" && row[baseKey + "_hi"] ? row[baseKey + "_hi"] : row[baseKey + "_en"];
  }

  async function fetchDeadline(theSlug) {
    const client = await getSupabaseClient();
    if (!client) return null;
    const published = await client
      .from("deadlines")
      .select("*")
      .eq("status", "published")
      .eq("slug", theSlug)
      .maybeSingle();
    if (published.error) throw published.error;
    if (published.data) return published.data;

    // Same admin-preview pattern as job-post.js/exam-post.js — an
    // authenticated admin session can preview a draft via RLS.
    const draft = await client.from("deadlines").select("*").eq("slug", theSlug).maybeSingle();
    if (draft.error) return null;
    if (draft.data) draft.data.__isDraftPreview = true;
    return draft.data;
  }

  async function fetchRelated(category, excludeSlug) {
    const client = await getSupabaseClient();
    if (!client || !category) return [];
    const { data, error } = await client
      .from("deadlines")
      .select("slug, title_en, title_hi, deadline_date")
      .eq("status", "published")
      .eq("category", category)
      .neq("slug", excludeSlug)
      .order("deadline_date", { ascending: true })
      .limit(4);
    if (error) return [];
    return data || [];
  }

  if (!slug) {
    renderMissing();
  } else {
    fetchDeadline(slug)
      .then(async (row) => {
        if (loadingEl) loadingEl.hidden = true;
        if (!row) {
          renderMissing();
          return;
        }
        const related = await fetchRelated(row.category, row.slug);
        renderAll(row, related);
        if (row.__isDraftPreview) renderDraftBanner();
        onLangChange(() => renderAll(row, related));
      })
      .catch((err) => {
        console.error("Failed to load deadline:", err);
        if (loadingEl) {
          loadingEl.textContent = t({
            en: "Could not load this deadline. Please try again later.",
            hi: "यह जानकारी लोड नहीं हो सकी। कृपया बाद में पुनः प्रयास करें।",
          });
        }
      });
  }

  function renderAll(row, related) {
    const name = pick(row, "title");
    heroEl.hidden = false;
    bodyEl.hidden = false;
    document.title = (pick(row, "seo_title") || name) + " — SarkariSewaIndia";
    renderMeta(row, name);
    renderBreadcrumb(name);
    renderHero(row, name);
    renderBody(row);
    renderRelated(row, related);
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

  function renderMeta(row, name) {
    const seoTitle = pick(row, "seo_title") || name;
    const seoDesc = pick(row, "seo_desc") || pick(row, "description") || name;
    const url = `https://sarkarisewaindia.com/tools/deadline-detail.html?slug=${row.slug}`;

    setMetaTag("name", "description", seoDesc.slice(0, 160));
    setMetaTag("property", "og:title", seoTitle);
    setMetaTag("property", "og:description", seoDesc.slice(0, 160));
    setMetaTag("property", "og:type", "article");
    setMetaTag("property", "og:url", url);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    renderSchema(row, name, seoDesc, url);
  }

  function parseFaq(faqText) {
    if (!faqText) return [];
    const blocks = faqText.split(/\n\s*\n/);
    const pairs = [];
    blocks.forEach((block) => {
      const qMatch = block.match(/Q:\s*([\s\S]*?)(?:\n|$)A:/i);
      const aMatch = block.match(/A:\s*([\s\S]*)/i);
      if (qMatch && aMatch) {
        pairs.push({ q: qMatch[1].trim(), a: aMatch[1].trim() });
      }
    });
    return pairs;
  }

  function renderSchema(row, name, desc, url) {
    const existing = document.getElementById("dl-post-schema");
    if (existing) existing.remove();

    const graph = [
      {
        "@type": "WebPage",
        name: name,
        description: desc,
        url: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://sarkarisewaindia.com/index.html" },
          { "@type": "ListItem", position: 2, name: "Deadline Calendar", item: "https://sarkarisewaindia.com/tools/deadline-calendar.html" },
          { "@type": "ListItem", position: 3, name: name, item: url },
        ],
      },
    ];

    if (row.deadline_type === "exam_date") {
      graph.push({
        "@type": "Event",
        name: name,
        description: desc,
        startDate: row.deadline_date,
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        organizer: { "@type": "Organization", name: row.source_name || "Government of India" },
        location: { "@type": "Place", name: "India" },
      });
    }

    const faqPairs = parseFaq(pick(row, "faq"));
    if (faqPairs.length) {
      graph.push({
        "@type": "FAQPage",
        mainEntity: faqPairs.map((p) => ({
          "@type": "Question",
          name: p.q,
          acceptedAnswer: { "@type": "Answer", text: p.a },
        })),
      });
    }

    const schema = { "@context": "https://schema.org", "@graph": graph };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "dl-post-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  function renderBreadcrumb(name) {
    breadcrumbEl.innerHTML = `
      <a href="${ROOT}index.html">Home</a>
      <span class="sep">/</span>
      <a href="${ROOT}tools/deadline-calendar.html">${t({ en: "Deadline Calendar", hi: "डेडलाइन कैलेंडर" })}</a>
      <span class="sep">/</span>
      <span class="current">${escapeHtml(name)}</span>
    `;
  }

  function renderHero(row, name) {
    const status = computeStatus(row);
    const catLabel = (CATEGORIES[row.category] || CATEGORIES.other)[getLang()];

    heroEl.innerHTML = `
      <div class="job-post-hero__badges">
        <span class="job-badge job-badge--type">${escapeHtml(catLabel)}</span>
        <span class="dl-badge dl-badge--${status.key}">${statusLabel(status)}</span>
      </div>
      <h1 class="job-post-hero__title">${escapeHtml(name)}</h1>
      <div class="job-post-hero__meta">
        <div><strong>${t({ en: "Last Date", hi: "अंतिम तिथि" })}:</strong> ${formatDate(row.deadline_date)}</div>
        ${row.last_verified ? `<div><strong>${t({ en: "Last Verified", hi: "अंतिम सत्यापन" })}:</strong> ${formatDate(row.last_verified)}</div>` : ""}
        ${row.source_name ? `<div><strong>${t({ en: "Source", hi: "स्रोत" })}:</strong> ${escapeHtml(row.source_name)}</div>` : ""}
      </div>
      ${row.previous_deadline_date ? `
      <div class="job-post-hero__meta" style="margin-top:6px;">
        <div><strong>${t({ en: "Deadline Updated", hi: "तिथि अपडेट हुई" })}:</strong>
          ${formatDate(row.previous_deadline_date)} → ${formatDate(row.deadline_date)}
          ${pick(row, "extension_reason") ? ` (${escapeHtml(pick(row, "extension_reason"))})` : ""}
        </div>
      </div>` : ""}
      <div class="job-post-hero__actions">
        ${row.official_url ? `<a class="btn btn-primary" href="${row.official_url}" target="_blank" rel="noopener noreferrer">${t({ en: "Official Portal →", hi: "आधिकारिक पोर्टल →" })}</a>` : ""}
      </div>
      <div id="dl-share-row"></div>
    `;

    if (typeof renderShareRow === "function") {
      const shareUrl = `https://sarkarisewaindia.com/tools/deadline-detail.html?slug=${row.slug}`;
      renderShareRow("dl-share-row", shareUrl, name, "dl-share");
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

  function renderFaqSection(row) {
    const faqPairs = parseFaq(pick(row, "faq"));
    if (!faqPairs.length) return "";
    return `
      <section class="job-post-section">
        <h2>${t({ en: "Frequently Asked Questions", hi: "अक्सर पूछे जाने वाले प्रश्न" })}</h2>
        <div class="job-post-section__body">
          ${faqPairs.map((p) => `<p><strong>${escapeHtml(p.q)}</strong><br>${escapeHtml(p.a)}</p>`).join("")}
        </div>
      </section>
    `;
  }

  function renderBody(row) {
    bodyEl.innerHTML = [
      section({ en: "Overview", hi: "विवरण" }, pick(row, "description")),
      section({ en: "Eligibility", hi: "पात्रता" }, pick(row, "eligibility")),
      section({ en: "Required Documents", hi: "आवश्यक दस्तावेज़" }, pick(row, "documents")),
      section({ en: "Important Dates", hi: "महत्वपूर्ण तिथियां" }, pick(row, "important_dates")),
      section({ en: "How to Apply", hi: "आवेदन कैसे करें" }, pick(row, "how_to_apply")),
      section({ en: "What if you miss this deadline?", hi: "अगर डेडलाइन छूट जाए तो क्या होगा?" }, pick(row, "what_if_missed")),
      renderFaqSection(row),
    ]
      .filter(Boolean)
      .join("");

    if (!bodyEl.innerHTML.trim()) {
      bodyEl.innerHTML = `<p class="job-empty">${t({
        en: "Full details for this deadline haven't been added yet — use the Official Portal link above.",
        hi: "इस डेडलाइन का पूरा विवरण अभी जोड़ा नहीं गया है — ऊपर दिए आधिकारिक पोर्टल लिंक का उपयोग करें।",
      })}</p>`;
    }
  }

  function parseRelatedServices(text) {
    if (!text) return [];
    return text
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const parts = line.split("|").map((p) => p.trim());
        return { slug: parts[0], en: parts[1] || parts[0], hi: parts[2] || parts[1] || parts[0] };
      })
      .filter((s) => s.slug);
  }

  function relatedCard(href, icon, title, desc) {
    return `
      <a href="${href}" class="dl-related-card">
        <span class="dl-related-card__icon">${icon}</span>
        <div>
          <strong>${escapeHtml(title)}</strong>
          ${desc ? `<span>${escapeHtml(desc)}</span>` : ""}
        </div>
      </a>`;
  }

  function renderRelated(row, related) {
    const blocks = [];

    // Related deadlines (same category, live from DB)
    if (related && related.length) {
      const cards = related
        .map((r) => {
          const name = getLang() === "hi" && r.title_hi ? r.title_hi : r.title_en;
          return relatedCard(
            `${ROOT}tools/deadline-detail.html?slug=${r.slug}`,
            "🗓️",
            name,
            formatDate(r.deadline_date)
          );
        })
        .join("");
      blocks.push(`
        <div class="dl-related-block">
          <h3>${t({ en: "Related Deadlines", hi: "सम्बंधित डेडलाइन" })}</h3>
          <div class="dl-related-grid">${cards}</div>
        </div>`);
    }

    // Related tools — automatic, based on category, always shown
    const toolSlugs = TOOLS_BY_CATEGORY[row.category] || TOOLS_BY_CATEGORY.other;
    const toolCards = toolSlugs
      .map((slug) => {
        const meta = TOOL_META[slug];
        if (!meta) return "";
        return relatedCard(`${ROOT}tools/${slug}.html`, meta.icon, meta[getLang()] || meta.en);
      })
      .filter(Boolean)
      .join("");
    if (toolCards) {
      blocks.push(`
        <div class="dl-related-block">
          <h3>${t({ en: "Related Tools", hi: "सम्बंधित टूल्स" })}</h3>
          <div class="dl-related-grid">${toolCards}</div>
        </div>`);
    }

    // Related services — only if the admin filled this in
    const services = parseRelatedServices(row.related_services);
    if (services.length) {
      const serviceCards = services
        .map((s) => relatedCard(`${ROOT}service/${s.slug}.html`, "⚙️", getLang() === "hi" ? s.hi : s.en))
        .join("");
      blocks.push(`
        <div class="dl-related-block">
          <h3>${t({ en: "Related Government Services", hi: "सम्बंधित सरकारी सेवाएं" })}</h3>
          <div class="dl-related-grid">${serviceCards}</div>
        </div>`);
    }

    if (!blocks.length) {
      relatedEl.hidden = true;
      return;
    }
    relatedEl.hidden = false;
    relatedEl.innerHTML = blocks.join("");
  }

  function renderDraftBanner() {
    const banner = document.createElement("div");
    banner.className = "job-post-draft-banner";
    banner.textContent = t({
      en: "⚠ Draft preview — this deadline is not published yet. Only you (logged in) can see this page.",
      hi: "⚠ ड्राफ्ट प्रीव्यू — यह डेडलाइन अभी प्रकाशित नहीं हुई है। केवल आप (लॉग-इन) ही यह पेज देख सकते हैं।",
    });
    draftSlotEl.appendChild(banner);
  }

  function renderMissing() {
    if (loadingEl) loadingEl.hidden = true;
    heroEl.hidden = false;
    bodyEl.hidden = false;
    heroEl.innerHTML = `
      <h1 class="job-post-hero__title">${t({ en: "Deadline not found", hi: "डेडलाइन नहीं मिली" })}</h1>
      <p class="job-post-hero__dept">${t({
        en: "This deadline doesn't exist, has been removed, or the link may be broken.",
        hi: "यह डेडलाइन मौजूद नहीं है, हटा दी गई है, या लिंक टूटा हो सकता है।",
      })}</p>
    `;
    bodyEl.innerHTML = "";
    relatedEl.hidden = true;
    breadcrumbEl.innerHTML = `<a href="${ROOT}index.html">Home</a><span class="sep">/</span><a href="${ROOT}tools/deadline-calendar.html">Deadline Calendar</a>`;
  }
})();
