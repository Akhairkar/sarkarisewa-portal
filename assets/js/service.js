/* ==========================================================================
   service.js
   Renders /service/service.html for whichever service is requested via
   the URL, e.g. service.html?id=aadhaar-card
   ========================================================================== */

(function () {
  const ROOT = window.SS_ROOT || "";
  const params = new URLSearchParams(window.location.search);
  const serviceId = params.get("id");

  const breadcrumbEl = document.getElementById("breadcrumb");
  const heroEl = document.getElementById("service-hero");
  const sectionsEl = document.getElementById("service-sections");
  const relatedSection = document.getElementById("related-section");
  const relatedGrid = document.getElementById("related-grid");

  function getServiceTitle(service) {
    if (service.name) return t(service.name);
    const lang = getLang();
    return (service[lang] && service[lang].title) || (service.en && service.en.title) || "";
  }

  function getServiceSummary(service) {
    if (service.shortDescription) return t(service.shortDescription);
    const lang = getLang();
    return (service[lang] && service[lang].summary) || (service.en && service.en.summary) || "";
  }

  function getOfficialLinks(service) {
    if (service.officialLinks) return service.officialLinks;
    if (service.official_links) {
      return service.official_links.map((l) => ({
        url: l.url,
        label: { en: l.label_en, hi: l.label_hi },
      }));
    }
    return [];
  }

  if (!serviceId) {
    renderMissing();
    return;
  }

  function normalizeServices(data) {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.services)) return data.services;
    return [];
  }

  Promise.all([
    fetch(`${ROOT}data/services.json`).then((r) => r.json()),
    fetch(`${ROOT}data/categories.json`).then((r) => r.json()),
  ])
    .then(([servicesRaw, categories]) => {
      const services = normalizeServices(servicesRaw);
      const service = services.find((s) => (s.slug || s.id) === serviceId);
      if (!service) {
        renderMissing();
        return;
      }
      const category = categories.find((c) => c.slug === service.category);
      renderAll(service, category, services);
      onLangChange(() => renderAll(service, category, services));
    })
    .catch((err) => {
      console.error("Failed to load service data:", err);
      sectionsEl.innerHTML = `<p class="empty-state">Could not load this service. Please try again later.</p>`;
    });

  function renderAll(service, category, allServices) {
    document.title = `${getServiceTitle(service)} — SarkariSewa Portal`;
    renderBreadcrumb(service, category);
    renderHero(service, category);
    renderSections(service);
    renderRelated(service, allServices);
  }

  function renderBreadcrumb(service, category) {
    const catCrumb = category
      ? `<a href="${ROOT}category/category.html?cat=${category.slug}">${t(category.name)}</a><span class="sep">/</span>`
      : "";
    breadcrumbEl.innerHTML = `
      <a href="${ROOT}index.html">Home</a>
      <span class="sep">/</span>
      ${catCrumb}
      <span class="current">${getServiceTitle(service)}</span>
    `;
  }

  function renderHero(service, category) {
    const officialLinks = getOfficialLinks(service);
    const primaryUrl =
      (service.applyOnline && service.applyOnline.url) ||
      (officialLinks[0] && officialLinks[0].url) ||
      "#";
    heroEl.innerHTML = `
      ${category ? `<span class="service-hero__badge">${category.icon || ""} ${t(category.name)}</span>` : ""}
      <h1 class="service-hero__title">${getServiceTitle(service)}</h1>
      <p class="service-hero__desc">${getServiceSummary(service)}</p>
      <div class="service-hero__actions">
        <a class="btn btn--primary" href="${primaryUrl}" target="_blank" rel="noopener">Apply / Official Site</a>
        ${
          service.trackStatus
            ? `<a class="btn btn--outline" href="${service.trackStatus.url}" target="_blank" rel="noopener">Track Status</a>`
            : ""
        }
      </div>
    `;
  }

  function renderSections(service) {
    const blocks = [
      officialLinksBlock(service),
      applyOnlineBlock(service),
      downloadFormBlock(service),
      trackStatusBlock(service),
      helplineBlock(service),
      documentsBlock(service),
      eligibilityBlock(service),
      feesBlock(service),
      timelineBlock(service),
      faqsBlock(service),
    ]
      .filter(Boolean)
      .join("");

    sectionsEl.innerHTML =
      blocks || `<p class="empty-state">Details for this service are being added — check back soon.</p>`;
  }

  function section(icon, title, innerHtml) {
    return `
      <section class="service-section">
        <h2 class="service-section__title"><span class="icon">${icon}</span> ${title}</h2>
        ${innerHtml}
      </section>
    `;
  }

  function officialLinksBlock(service) {
    const links = getOfficialLinks(service);
    if (!links.length) return "";
    const items = links
      .map(
        (link) => `
      <li class="link-list__item">
        <span class="link-list__label">${t(link.label)}</span>
        <a class="link-list__go" href="${link.url}" target="_blank" rel="noopener">Visit →</a>
      </li>`
      )
      .join("");
    return section("🔗", "Official Links", `<ul class="link-list">${items}</ul>`);
  }

  function applyOnlineBlock(service) {
    const a = service.applyOnline;
    if (!a) return "";
    const steps = a.steps && a.steps.length
      ? `<ol class="steps-list">${a.steps.map((s) => `<li>${t(s)}</li>`).join("")}</ol>`
      : "";
    return section(
      "📝",
      "Apply Online",
      `<p>${t(a.note)}</p>
       ${steps}
       <div style="margin-top:1rem;"><a class="btn btn--primary" href="${a.url}" target="_blank" rel="noopener">Start Application</a></div>`
    );
  }

  function downloadFormBlock(service) {
    const f = service.downloadForm;
    if (!f) return "";
    return section(
      "📄",
      "Download Form",
      `<ul class="link-list">
        <li class="link-list__item">
          <span class="link-list__label">${t(f.formName)} (${f.fileType || "PDF"})</span>
          <a class="link-list__go" href="${f.url}" target="_blank" rel="noopener">Download →</a>
        </li>
      </ul>`
    );
  }

  function trackStatusBlock(service) {
    const ts = service.trackStatus;
    if (!ts) return "";
    return section(
      "📍",
      "Track Status",
      `<p>${t(ts.note)}</p>
       <div style="margin-top:1rem;"><a class="btn btn--outline" href="${ts.url}" target="_blank" rel="noopener">Check Status</a></div>`
    );
  }

  function helplineBlock(service) {
    if (!service.helpline) return "";
    if (typeof service.helpline === "string") {
      return section(
        "☎️",
        "Helpline",
        `<ul class="helpline-list"><li class="helpline-card"><div class="helpline-card__phone">${service.helpline}</div></li></ul>`
      );
    }
    if (!service.helpline.length) return "";
    const cards = service.helpline
      .map(
        (h) => `
      <li class="helpline-card">
        <div>${t(h.label)}</div>
        <div class="helpline-card__phone">${h.phone}</div>
        <div class="helpline-card__hours">${t(h.hours)}</div>
      </li>`
      )
      .join("");
    return section("☎️", "Helpline", `<ul class="helpline-list">${cards}</ul>`);
  }

  function documentsBlock(service) {
    if (!service.documentsRequired || !service.documentsRequired.length) return "";
    const items = service.documentsRequired.map((d) => `<li>${t(d)}</li>`).join("");
    return section("📋", "Documents Required", `<ul class="check-list">${items}</ul>`);
  }

  function eligibilityBlock(service) {
    if (!service.eligibility || !service.eligibility.length) return "";
    const items = service.eligibility.map((e) => `<li>${t(e)}</li>`).join("");
    return section("✅", "Eligibility", `<ul class="check-list">${items}</ul>`);
  }

  function feesBlock(service) {
    if (!service.fees || !service.fees.length) return "";
    const rows = service.fees
      .map((f) => `<tr><td>${t(f.label)}</td><td>${t(f.amount)}</td></tr>`)
      .join("");
    return section("💵", "Fees", `<table class="fees-table"><tbody>${rows}</tbody></table>`);
  }

  function timelineBlock(service) {
    if (!service.timeline || !service.timeline.length) return "";
    const items = service.timeline
      .map(
        (step) => `
      <li>
        ${t(step.step)}
        <span class="timeline__duration">${t(step.duration)}</span>
      </li>`
      )
      .join("");
    return section("⏱️", "Timeline", `<ul class="timeline">${items}</ul>`);
  }

  function faqsBlock(service) {
    if (!service.faqs || !service.faqs.length) return "";
    const items = service.faqs
      .map(
        (f, i) => `
      <details class="faq-item" ${i === 0 ? "open" : ""}>
        <summary class="faq-item__q">${t(f.q)} <span class="chev">⌄</span></summary>
        <div class="faq-item__a">${t(f.a)}</div>
      </details>`
      )
      .join("");
    return section("❓", "FAQs", `<div class="faq-list">${items}</div>`);
  }

  function renderRelated(service, allServices) {
    if (!service.relatedServices || !service.relatedServices.length) {
      relatedSection.hidden = true;
      return;
    }
    const related = service.relatedServices
      .map((id) => allServices.find((s) => (s.slug || s.id) === id))
      .filter(Boolean);
    if (!related.length) {
      relatedSection.hidden = true;
      return;
    }
    relatedSection.hidden = false;
    relatedGrid.innerHTML = related
      .map(
        (r) => `
      <a class="service-card" href="${ROOT}service/service.html?id=${r.slug || r.id}">
        <div class="service-card__name">${getServiceTitle(r)}</div>
        <div class="service-card__desc">${getServiceSummary(r)}</div>
        <div class="service-card__arrow">View details →</div>
      </a>`
      )
      .join("");
  }

  function renderMissing() {
    heroEl.innerHTML = `
      <h1 class="service-hero__title">Service not found</h1>
      <p class="service-hero__desc">This service doesn't exist or the link may be broken.</p>
    `;
    sectionsEl.innerHTML = "";
    breadcrumbEl.innerHTML = `<a href="${ROOT}index.html">Home</a>`;
  }
})();
