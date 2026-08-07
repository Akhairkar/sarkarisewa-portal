/* ==========================================================================
   states.js
   Drives BOTH state pages from a single data file (data/states.json):
     - states/index.html   → grid of all states that have data + "coming soon"
     - states/state.html?state=<slug> → full detail page for one state

   Adding a new state later = add one object to the "states" array in
   data/states.json (and remove it from "comingSoon" if it was listed
   there). No changes needed in this file or in the HTML.
   ========================================================================== */

(function () {
  const ROOT = window.SS_ROOT || "";
  let STATES_DATA = null;
  let COMING_SOON = null;

  function normalizeStates(raw) {
    if (Array.isArray(raw)) return raw;
    if (raw && Array.isArray(raw.states)) return raw.states;
    return [];
  }

  function loadData() {
    if (STATES_DATA) return Promise.resolve();
    return fetch(`${ROOT}data/states.json?v=${Date.now()}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((raw) => {
        STATES_DATA = normalizeStates(raw);
        COMING_SOON = Array.isArray(raw.comingSoon) ? raw.comingSoon : [];
      });
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

  function setCanonical(url) {
    let el = document.querySelector('link[rel="canonical"]');
    if (!el) {
      el = document.createElement("link");
      el.setAttribute("rel", "canonical");
      document.head.appendChild(el);
    }
    el.setAttribute("href", url);
  }

  function injectSchema(id, schema) {
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  /* ---------------------------------------------------------------------
     states/index.html — hub grid
     --------------------------------------------------------------------- */
  function renderHub() {
    const gridEl = document.getElementById("states-grid");
    const comingEl = document.getElementById("states-coming-soon");
    if (!gridEl) return;

    loadData().then(() => {
      const lang = getLang();

      gridEl.innerHTML = STATES_DATA.map((s) => `
        <a class="state-hub-card" href="${ROOT}states/${s.slug}.html">
          <div class="state-hub-card__icon" aria-hidden="true">${s.icon || "📍"}</div>
          <div class="state-hub-card__name">${t(s.name)}</div>
          <div class="state-hub-card__count mono">${s.services.length} ${lang === "hi" ? "लोकप्रिय सेवाएं" : "popular services"}</div>
          <div class="state-hub-card__arrow">${lang === "hi" ? "देखें →" : "View →"}</div>
        </a>
      `).join("");

      if (comingEl) {
        comingEl.innerHTML = (COMING_SOON || []).map((s) => `
          <div class="state-hub-card state-hub-card--soon" aria-disabled="true">
            <div class="state-hub-card__icon" aria-hidden="true">${s.icon || "📍"}</div>
            <div class="state-hub-card__name">${t(s.name)}</div>
            <div class="state-hub-card__soon-label">${lang === "hi" ? "जल्द आ रहा है" : "Coming soon"}</div>
          </div>
        `).join("");
      }

      injectSchema("states-hub-schema", {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": lang === "hi" ? "राज्यवार लोकप्रिय सरकारी सेवाएं" : "State-wise Popular Government Services",
        "itemListElement": STATES_DATA.map((s, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": t(s.name),
          "url": `https://sarkarisewaindia.com/states/${s.slug}.html`,
        })),
      });

      onLangChange(() => renderHub());
    });
  }

  /* ---------------------------------------------------------------------
     states/state.html?state=<slug> — detail page
     --------------------------------------------------------------------- */
  function renderDetail() {
    const heroEl = document.getElementById("state-hero");
    const breadcrumbEl = document.getElementById("state-breadcrumb");
    const listEl = document.getElementById("state-services-list");
    const portalEl = document.getElementById("state-official-portal");
    if (!heroEl && !listEl) return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("state");

    loadData().then(() => {
      const state = STATES_DATA.find((s) => s.slug === slug);
      const lang = getLang();

      if (!state) {
        heroEl.innerHTML = `
          <h1 class="page-hero__title">${lang === "hi" ? "यह राज्य अभी उपलब्ध नहीं है" : "This state isn't available yet"}</h1>
          <p class="page-hero__desc">${lang === "hi" ? "फिलहाल केवल महाराष्ट्र के लिए राज्य-विशेष सेवाएं जोड़ी गई हैं। बाकी राज्य जल्द जोड़े जाएंगे।" : "Only Maharashtra has state-specific services published so far. Other states are being added soon."}</p>
          <p><a href="${ROOT}states/index.html">${lang === "hi" ? "← सभी राज्य देखें" : "← Browse all states"}</a></p>
        `;
        if (listEl) listEl.innerHTML = "";
        if (portalEl) portalEl.innerHTML = "";
        return;
      }

      document.title = `${t(state.name)} — ${lang === "hi" ? "राज्यवार लोकप्रिय सेवाएं" : "State-wise Popular Services"} — SarkariSewa Portal`;

      const desc = t(state.intro);
      const pageUrl = `https://sarkarisewaindia.com/states/${state.slug}.html`;
      setMetaTag("name", "description", desc);
      setMetaTag("property", "og:title", `${t(state.name)} — SarkariSewa Portal`);
      setMetaTag("property", "og:description", desc);
      setMetaTag("property", "og:type", "website");
      setCanonical(pageUrl);

      if (breadcrumbEl) {
        breadcrumbEl.innerHTML = `
          <a href="${ROOT}index.html">${lang === "hi" ? "होम" : "Home"}</a>
          <span class="sep">/</span>
          <a href="${ROOT}states/index.html">${lang === "hi" ? "राज्यवार सेवाएं" : "State-wise Services"}</a>
          <span class="sep">/</span>
          <span class="current">${t(state.name)}</span>
        `;
      }

      heroEl.innerHTML = `
        <div class="state-hero__icon" aria-hidden="true">${state.icon || "📍"}</div>
        <h1 class="page-hero__title">${t(state.name)}${lang === "hi" ? " — लोकप्रिय राज्य सेवाएं" : " — Popular State Services"}</h1>
        <p class="page-hero__desc">${desc}</p>
        <p class="state-hero__meta mono">${lang === "hi" ? "राजधानी" : "Capital"}: ${t(state.capital)} · ${state.services.length} ${lang === "hi" ? "सेवाएं" : "services"}</p>
      `;

      if (listEl) {
        listEl.innerHTML = `
          <div class="service-grid">
            ${state.services.map((svc) => `
              <a class="service-card" href="${ROOT}service/${svc.id}.html">
                <div class="service-card__name">${t(svc.name)}</div>
                <div class="service-card__desc">${t(svc.shortDescription)}</div>
                <div class="service-card__arrow">${lang === "hi" ? "गाइड, फीस व दस्तावेज़ देखें →" : "Read guide, fees & documents →"}</div>
              </a>
            `).join("")}
          </div>
        `;
      }

      if (portalEl) {
        portalEl.innerHTML = `
          <h2>${lang === "hi" ? `${t(state.name)} सरकार — आधिकारिक पोर्टल` : `${t(state.name)} Government — Official Portal`}</h2>
          <p>${lang === "hi" ? "ऊपर दी गई सभी सेवाओं के लिए मूल आधिकारिक पोर्टल यही है। अगर किसी सेवा के लिए अलग विभागीय पोर्टल है, तो उसका सीधा लिंक उस सेवा कार्ड में ऊपर दिया गया है।" : "This is the primary official portal behind the services listed above. Where a service has its own dedicated departmental portal, its direct link is included in that service's card above."}</p>
          <a class="btn btn-primary" href="${state.officialPortal.url}" target="_blank" rel="noopener noreferrer">${t(state.officialPortal.label)}</a>
        `;
      }

      injectSchema("state-detail-schema", {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ItemList",
            "name": `${t(state.name)} — ${lang === "hi" ? "लोकप्रिय राज्य सेवाएं" : "Popular State Services"}`,
            "description": desc,
            "numberOfItems": state.services.length,
            "itemListElement": state.services.map((s, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "name": t(s.name),
            })),
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sarkarisewaindia.com/index.html" },
              { "@type": "ListItem", "position": 2, "name": "State-wise Services", "item": "https://sarkarisewaindia.com/states/index.html" },
              { "@type": "ListItem", "position": 3, "name": t(state.name), "item": pageUrl },
            ],
          },
        ],
      });

      onLangChange(() => renderDetail());
    });
  }

  /* ---------------------------------------------------------------------
     index.html — homepage spotlight (highlighted preview card)
     Homepage only ever shows the first 5 states — this keeps the homepage
     section compact even as more states get added to data/states.json.
     The full list (all states) is always shown on states/index.html via
     renderHub() above; "View all states →" links there.
     --------------------------------------------------------------------- */
  const HOME_SPOTLIGHT_LIMIT = 5;

  function renderHomeSpotlight() {
    const gridEl = document.getElementById("state-spotlight-grid");
    if (!gridEl) return;

    loadData().then(() => {
      const lang = getLang();
      const visibleStates = STATES_DATA.slice(0, HOME_SPOTLIGHT_LIMIT);

      gridEl.innerHTML = visibleStates.map((s) => `
        <a class="state-spotlight-card" href="${ROOT}states/${s.slug}.html">
          <div class="state-spotlight-card__icon" aria-hidden="true">${s.icon || "📍"}</div>
          <div class="state-spotlight-card__name">${t(s.name)}</div>
          <div class="state-spotlight-card__sub">${s.services.length} ${lang === "hi" ? "लोकप्रिय सेवाएं" : "popular services"}</div>
          <ul class="state-spotlight-card__list">
            ${s.services.slice(0, 3).map((svc) => `<li>${t(svc.name)}</li>`).join("")}
          </ul>
          <div class="state-spotlight-card__arrow">${lang === "hi" ? "फीस व दस्तावेज़ देखें →" : "See fees & documents →"}</div>
        </a>
      `).join("");

      const moreEl = document.getElementById("state-spotlight-more");
      const remaining = STATES_DATA.length - HOME_SPOTLIGHT_LIMIT;
      if (moreEl) {
        moreEl.innerHTML = remaining > 0
          ? `<a href="${ROOT}states/index.html">${lang === "hi" ? `+${remaining} और राज्य देखें →` : `+${remaining} more states →`}</a>`
          : "";
      }

      onLangChange(() => renderHomeSpotlight());
    });
  }

  document.addEventListener("ss:ready", () => {
    renderHub();
    renderDetail();
    renderHomeSpotlight();
  });
})();
