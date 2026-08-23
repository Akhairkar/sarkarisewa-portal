/* ==========================================================================
   home.js  (FIXED)
   Runs only on index.html. Depends on core.js (main.js) having set up
   SITE.lang and fired ss:ready / ss:language-changed, AND on i18n-helper.js
   being loaded before this file (for t() / getLang() / onLangChange()).

   PREVIOUS BUGS FIXED:
   1. Used to read data.categories straight out of services.json — but
      Module 2 moved categories into their own file (data/categories.json).
      data.categories was `undefined`, so `.map()` threw and crashed BOTH
      renderCategories() and renderServices() (the whole script stopped),
      which is why the homepage category grid AND latest-services grid were
      both blank.
   2. Used the old snake_case service schema (official_links, s[lang].title).
      services.json now uses the same camelCase schema as category.js /
      service.js (officialLinks, name:{en,hi}, shortDescription:{en,hi}).
   3. Category cards used a hardcoded "count" field that goes stale as
      services are added. Count is now computed live from services.json.
   ========================================================================== */

let SERVICES_DATA = null;
let CATEGORIES_DATA = null;
let BLOG_DATA = null;

async function loadHomeData() {
  if (SERVICES_DATA && CATEGORIES_DATA && BLOG_DATA) return;
  const [services, categoriesRaw, blogRaw] = await Promise.all([
    fetchAllServices().catch((err) => {
      console.error("fetchAllServices failed:", err);
      return [];
    }),
    fetch(ROOT + "data/categories.json").then((r) => r.json()).catch(() => []),
    fetch(ROOT + "data/blog-posts.json").then((r) => r.json()).catch(() => []),
  ]);
  // Support either a plain array or an older { services: [...] } wrapper.
  SERVICES_DATA = services;
  CATEGORIES_DATA = Array.isArray(categoriesRaw) ? categoriesRaw : (categoriesRaw.categories || []);
  BLOG_DATA = Array.isArray(blogRaw) ? blogRaw : (blogRaw.posts || []);

  const statEl = document.getElementById("trust-stat-services");
  if (statEl && SERVICES_DATA && SERVICES_DATA.length > 0) {
    const roundedCount = Math.floor(SERVICES_DATA.length / 10) * 10;
    statEl.textContent = roundedCount + "+";
  }
}

function renderCategories() {
  const host = document.getElementById("category-grid");
  if (!host) return;
  const lang = getLang();
  host.innerHTML = CATEGORIES_DATA.map((c) => {
    const count = SERVICES_DATA.filter((s) => s.category === c.slug).length;
    return `
      <a class="cat-card" href="${ssCategoryHref(ROOT, c.slug)}">
        <div class="cat-icon" aria-hidden="true">${c.icon}</div>
        <div class="cat-name">${t(c.name)}</div>
        <div class="cat-count mono">${count} ${lang === "hi" ? "सेवाएँ" : "services"}</div>
      </a>
    `;
  }).join("");
}

function renderServices() {
  const host = document.getElementById("latest-grid");
  if (!host) return;
  const lang = getLang();
  const dict = (window.SITE && SITE.langData && SITE.langData[lang]) || {};

  // "Latest" = genuinely sorted by each service's dateAdded
  // Handle undefined dates by defaulting to empty string.
  const sorted = SERVICES_DATA.slice().sort((a, b) => {
    const da = a.dateAdded || "";
    const db = b.dateAdded || "";
    return da < db ? 1 : (da > db ? -1 : 0);
  });

  const TARGET = 8;
  const picked = sorted.slice(0, TARGET);

  host.innerHTML = picked.map((s) => {
    const links = (s.officialLinks || []).slice(0, 3).map((l, i) => `
      <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="${i === 0 ? "official" : ""}">
        ${t(l.label)}
      </a>
    `).join("");
    return `
      <article class="service-card">
        <h3>${t(s.name)}</h3>
        <p>${t(s.shortDescription)}</p>
        <div class="service-links">
          ${links}
          <a href="${ssServiceHref(ROOT, s)}">${dict.read_more || (lang === "hi" ? "गाइड पढ़ें" : "Read guide")}</a>
        </div>
      </article>
    `;
  }).join("");

  const viewAllHost = document.getElementById("latest-view-all");
  if (viewAllHost) {
    viewAllHost.innerHTML = `<a href="${ROOT}search.html">${t({
      en: `View all ${SERVICES_DATA.length}+ services →`,
      hi: `सभी ${SERVICES_DATA.length}+ सेवाएं देखें →`,
    })}</a>`;
  }
}

function renderBlogSection() {
  const host = document.getElementById("homepage-blog-list");
  if (!host || !BLOG_DATA) return;
  const lang = getLang();
  const locale = lang === "hi" ? "hi-IN" : "en-IN";

  const latest = BLOG_DATA.slice()
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))
    .slice(0, 3);

  if (!latest.length) {
    host.innerHTML = "";
    return;
  }

  host.innerHTML = latest.map((post) => {
    const d = new Date(post.datePublished + "T00:00:00");
    const dateStr = isNaN(d.getTime()) ? post.datePublished : d.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
    return `
      <a class="blog-card" href="${ROOT}blog/post.html?slug=${post.slug}">
        <div class="blog-card__date">${dateStr}</div>
        <div class="blog-card__title">${t(post.title)}</div>
        <div class="blog-card__excerpt">${t(post.excerpt)}</div>
        <div class="blog-card__arrow">${t({ en: "Read more →", hi: "और पढ़ें →" })}</div>
      </a>
    `;
  }).join("");
}

function renderTrustStats() {
  const servicesEl = document.getElementById("trust-stat-services");
  const categoriesEl = document.getElementById("trust-stat-categories");
  if (servicesEl && SERVICES_DATA) servicesEl.textContent = SERVICES_DATA.length + "+";
  if (categoriesEl && CATEGORIES_DATA) categoriesEl.textContent = CATEGORIES_DATA.length;
}

async function renderHome() {
  await loadHomeData();
  renderCategories();
  renderServices();
  renderBlogSection();
  renderTrustStats();
}

document.addEventListener("ss:ready", renderHome);

// Re-render on language toggle (onLangChange comes from i18n-helper.js and
// is now correctly wired to core.js's real "ss:language-changed" event).
onLangChange(() => {
  if (!SERVICES_DATA || !CATEGORIES_DATA) return;
  renderCategories();
  renderServices();
  renderBlogSection();
  renderHomeDailyUpdates();
});

async function renderHomeDailyUpdates() {
  const host = document.getElementById("home-daily-updates-grid");
  if (!host) return;
  const lang = getLang();
  try {
    const cb = new Date().getTime();
    const res = await fetch(ROOT + "data/latest-updates.json?v=" + cb);
    if (!res.ok) throw new Error("Not found");
    const data = await res.json();
    if (!data || data.length === 0) { host.innerHTML = ""; return; }
    const now = Date.now();
    const DAY_MS = 24 * 60 * 60 * 1000;
    // Only show top 6 on homepage
    const topData = data.slice(0, 6);
    host.innerHTML = topData.map(update => {
      const title = lang === "hi" ? update.title_hi : update.title_en;
      const summary = lang === "hi" ? (update.summary_hi || "") : (update.summary_en || "");
      const d = new Date(update.published_date);
      const dateStr = isNaN(d.getTime()) ? update.published_date : d.toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", { year: "numeric", month: "short", day: "numeric" });
      const isNew = !isNaN(d.getTime()) && (now - d.getTime()) < (2 * DAY_MS);
      const newBadge = isNew ? `<span style="display:inline-block; padding:2px 8px; background:#ef4444; color:#fff; font-size:0.7rem; font-weight:700; border-radius:10px; margin-left:6px; vertical-align:middle;">🔴 NEW</span>` : "";
      // Category color
      const catColors = {"Central Government":"#10243E","Employment & Labour":"#0369a1","Finance":"#065f46","Education":"#7c3aed"};
      const catColor = catColors[update.category] || "#10243E";
      // Link to static page if slug exists, fallback to dynamic
      const href = update.slug ? `${ROOT}updates/${update.slug}.html` : `${ROOT}update.html?id=${update.id}`;
      const truncSummary = summary.length > 100 ? summary.substring(0, 100) + "..." : summary;
      return `
        <article class="service-card" style="position:relative;">
          <div style="font-size:0.8rem; color:var(--color-text-light); margin-bottom:8px; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <span style="display:inline-block; padding:3px 10px; background:${catColor}; color:#fff; font-size:0.75rem; font-weight:600; border-radius:12px;">📢 ${update.category}</span>
            <span>🏛️ ${update.source_name}</span>
            <span>📅 ${dateStr}</span>
            ${newBadge}
          </div>
          <h3 style="font-size:1.05rem; margin-top:0; line-height:1.4;">${title}</h3>
          <p style="font-size:0.9rem; color:var(--color-text-light); margin:8px 0 0 0; line-height:1.5;">${truncSummary}</p>
          <div class="service-links" style="margin-top:12px;">
            <a href="${href}" class="official">
              ${lang === "hi" ? "पूरी जानकारी पढ़ें →" : "Read Full Details →"}
            </a>
          </div>
        </article>
      `;
    }).join("");
  } catch (e) {
    host.innerHTML = "";
  }
}

document.addEventListener("ss:ready", renderHomeDailyUpdates);


// ==========================================
// Live Search Suggestions (Autocomplete)
// ==========================================
function initSearchAutocomplete() {
  const searchInput = document.getElementById("hero-search");
  const suggestionsBox = document.getElementById("search-suggestions");
  if (!searchInput || !suggestionsBox) return;

  // Utility to escape html
  const escapeHTML = (str) => {
    return (str || "").replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag])
    );
  };

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      suggestionsBox.innerHTML = "";
      suggestionsBox.style.display = "none";
      return;
    }

    if (!SERVICES_DATA) return;

    const lang = getLang();
    
    // Filter services based on query
    const matches = SERVICES_DATA.filter(s => {
      const nameEn = (s.name && s.name.en ? s.name.en.toLowerCase() : "");
      const nameHi = (s.name && s.name.hi ? s.name.hi.toLowerCase() : "");
      const descEn = (s.shortDescription && s.shortDescription.en ? s.shortDescription.en.toLowerCase() : "");
      const descHi = (s.shortDescription && s.shortDescription.hi ? s.shortDescription.hi.toLowerCase() : "");
      const tags = (s.tags || []).join(" ").toLowerCase();
      
      return nameEn.includes(query) || nameHi.includes(query) || tags.includes(query) || descEn.includes(query) || descHi.includes(query);
    }).slice(0, 8); // top 8 results

    if (matches.length === 0) {
      suggestionsBox.innerHTML = `
        <li style="padding: 10px 16px; color: var(--color-text-muted); font-size: 0.95rem;">
          ${lang === 'hi' ? 'कोई परिणाम नहीं मिला' : 'No results found'}
        </li>
      `;
      suggestionsBox.style.display = "block";
      return;
    }

    suggestionsBox.innerHTML = matches.map(s => {
      const href = ssServiceHref(ROOT, s);
      const title = escapeHTML(t(s.name));
      const desc = escapeHTML(t(s.shortDescription));
      return `
        <li class="search-suggestion-item">
          <a href="${href}">
            <span class="search-suggestion-title">${title}</span>
            <span class="search-suggestion-desc">${desc.substring(0, 80)}${desc.length > 80 ? '...' : ''}</span>
          </a>
        </li>
      `;
    }).join("");
    
    suggestionsBox.style.display = "block";
  });

  // Hide when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
      suggestionsBox.style.display = "none";
    }
  });

  // Show again on focus if query exists
  searchInput.addEventListener("focus", () => {
    if (searchInput.value.trim() && suggestionsBox.innerHTML.trim() !== "") {
      suggestionsBox.style.display = "block";
    }
  });
}

document.addEventListener("ss:ready", initSearchAutocomplete);
