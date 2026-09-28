/* SarkariSewa India Homepage V2 — safe enhancement layer. */
(function () {
  "use strict";

  const ROOT = window.SS_ROOT || "";
  const TELEGRAM = "https://t.me/sarkarisewaindia";
  const FEATURED = [
    ["🆔", "Aadhaar Card", "UIDAI Services", "aadhaar-card"],
    ["💳", "PAN Card", "Income Tax Department", "pan-card"],
    ["🗳️", "Voter ID", "Election Commission", "voter-id-card"],
    ["🚗", "Driving Licence", "Transport Department", "driving-licence"],
    ["🌐", "Passport", "MEA Services", "passport"],
    ["☁️", "DigiLocker", "Digital Documents", "digilocker"],
    ["❤️", "Ayushman Bharat", "Health Insurance", "ayushman-bharat"],
    ["⚙️", "EPFO", "Provident Fund", "epfo"],
    ["🧮", "Income Tax", "e-Filing Portal", "income-tax-return-filing"],
    ["🍚", "Ration Card", "Food & Civil Supplies", "ration-card"],
    ["📜", "Birth Certificate", "Municipal Services", "birth-certificate"]
  ];

  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));

  const text = (value) => {
    if (typeof window.t === "function") return window.t(value);
    if (value && typeof value === "object") return value.en || value.hi || "";
    return value || "";
  };

  const serviceHref = (service) => {
    if (typeof window.ssServiceHref === "function") return window.ssServiceHref(ROOT, service);
    return ROOT + "service/" + encodeURIComponent(service.slug) + ".html";
  };

  const sortedByDate = (items) => items.slice().sort((a, b) => {
    const da = a.dateAdded || "";
    const db = b.dateAdded || "";
    return da < db ? 1 : da > db ? -1 : 0;
  });

  async function getServices() {
    if (typeof window.fetchAllServices !== "function") return [];
    try { return await window.fetchAllServices(); } catch (e) {
      console.warn("Homepage V2 service data unavailable:", e);
      return [];
    }
  }

  function addQuickChips() {
    const form = document.querySelector(".hero .search-form");
    if (!form || document.querySelector(".ss-quick-chips")) return;
    const chips = [
      ["Aadhaar", "aadhaar"], ["PAN Card", "pan"], ["Ration Card", "ration"],
      ["Government Jobs", "job"], ["Calculators", "calculator"]
    ];
    const wrap = document.createElement("div");
    wrap.className = "ss-quick-chips";
    wrap.setAttribute("aria-label", "Popular searches");
    wrap.innerHTML = chips.map(([label, q]) =>
      '<a href="' + ROOT + 'search.html?q=' + encodeURIComponent(q) + '">' + esc(label) + '</a>'
    ).join("");
    form.insertAdjacentElement("afterend", wrap);
  }

  function addSocial() {
    const hero = document.querySelector(".hero");
    if (!hero || document.querySelector(".ss-home-social")) return;
    const wrap = document.createElement("div");
    wrap.className = "ss-home-social";
    wrap.innerHTML =
      '<div class="ss-social-card ss-social-telegram">' +
        '<div><strong>📢 SarkariSewa India Telegram</strong><span>Jobs, schemes, government updates & useful alerts</span></div>' +
        '<a class="ss-social-btn" href="' + TELEGRAM + '" target="_blank" rel="noopener noreferrer">✈️ Join Channel</a>' +
      '</div>' +
      '<div class="ss-social-card ss-social-whatsapp">' +
        '<div><strong>💬 Share on WhatsApp</strong><span>Useful government guides family & friends ke saath share karein</span></div>' +
        '<a class="ss-social-btn" href="https://wa.me/?text=' +
          encodeURIComponent("SarkariSewa India – Government services, schemes, jobs & free tools: https://sarkarisewaindia.com/") +
          '" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>' +
      '</div>';
    hero.insertAdjacentElement("afterend", wrap);
  }

  function addFeatured(services) {
    if (document.querySelector(".ss-featured")) return;
    const host = document.querySelector("#category-grid")?.closest(".section");
    if (!host) return;

    const bySlug = new Map(services.map((s) => [s.slug, s]));
    const cards = FEATURED.filter(([, , , slug]) => bySlug.has(slug)).map(([icon, fallbackName, fallbackDesc, slug]) => {
      const s = bySlug.get(slug);
      const name = text(s.name) || fallbackName;
      const desc = text(s.shortDescription) || fallbackDesc;
      return '<a class="ss-feature-card" href="' + serviceHref(s) + '">' +
        '<span class="ss-feature-icon" aria-hidden="true">' + icon + '</span>' +
        '<span><strong>' + esc(name) + '</strong><small>' + esc(desc) + '</small></span><b aria-hidden="true">›</b></a>';
    }).join("");

    const sec = document.createElement("section");
    sec.className = "ss-featured";
    sec.setAttribute("aria-labelledby", "ss-featured-title");
    sec.innerHTML =
      '<div class="ss-featured-head"><h2 id="ss-featured-title">⚡ Important Services</h2>' +
      '<a href="' + ROOT + 'services/index.html">View All Services →</a></div>' +
      '<div class="ss-featured-grid">' + cards +
      '<a class="ss-feature-card ss-feature-tool" href="' + ROOT + 'tools/csc-locator.html">' +
      '<span class="ss-feature-icon" aria-hidden="true">📍</span><span><strong>CSC Locator</strong><small>Find Common Service Centres</small></span><b aria-hidden="true">›</b></a>' +
      '</div>';
    host.insertAdjacentElement("beforebegin", sec);
  }

  function addLatestSplit(services) {
    if (document.querySelector(".ss-split")) return;
    const jobs = sortedByDate(services.filter((s) => s.category === "jobs-education")).slice(0, 4);
    const schemes = sortedByDate(services.filter((s) => s.category === "government-schemes")).slice(0, 4);
    if (!jobs.length && !schemes.length) return;

    const make = (title, icon, list, allHref) =>
      '<div class="ss-split-card"><div class="ss-split-head"><h2>' + icon + ' ' + title + '</h2><a href="' +
      ROOT + allHref + '">View All →</a></div><div class="ss-list">' +
      list.map((s) => '<a class="ss-list-item" href="' + serviceHref(s) + '">' +
        '<span class="ss-list-icon">📄</span><span><strong>' + esc(text(s.name)) +
        '</strong><small>' + esc(text(s.shortDescription) || "Government service guide") +
        '</small></span><b aria-hidden="true">›</b></a>').join("") +
      '</div></div>';

    const sec = document.createElement("section");
    sec.className = "ss-split";
    sec.setAttribute("aria-label", "Latest jobs and schemes");
    sec.innerHTML = make("Latest Jobs", "💼", jobs, "jobs/index.html") +
                    make("Latest Schemes", "📜", schemes, "category/government-schemes.html");

    const featured = document.querySelector(".ss-featured");
    const category = document.querySelector("#category-grid")?.closest(".section");
    (featured || category)?.insertAdjacentElement("afterend", sec);
  }

  function updateCount(services) {
    const count = services.length;
    const stat = document.getElementById("trust-stat-services");
    if (stat) stat.textContent = count + "+";
  }

  function addMobileBottomNav() {
    if (document.querySelector(".ss-mobile-bottom-nav") || window.innerWidth > 640) return;
    const nav = document.createElement("nav");
    nav.className = "ss-mobile-bottom-nav";
    nav.setAttribute("aria-label", "Quick navigation");
    nav.innerHTML =
      '<a href="' + ROOT + 'index.html">⌂<span>Home</span></a>' +
      '<a href="' + ROOT + 'services/index.html">▦<span>Services</span></a>' +
      '<a href="' + ROOT + 'jobs/index.html">💼<span>Jobs</span></a>' +
      '<a href="' + ROOT + 'category/government-schemes.html">📜<span>Schemes</span></a>' +
      '<a href="' + ROOT + 'tools/index.html">🛠️<span>Tools</span></a>';
    document.body.appendChild(nav);
  }

  async function init() {
    if (!document.body.classList.contains("homepage-v2")) return;
    const services = await getServices();
    updateCount(services);
    addQuickChips();
    addSocial();
    if (services.length) {
      addFeatured(services);
      addLatestSplit(services);
    }
    const all = document.querySelector('.hero-cta a[href="sitemap.html"]');
    if (all) all.href = ROOT + "services/index.html";
    addMobileBottomNav();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
  document.addEventListener("ss:ready", init, { once: true });
})();
