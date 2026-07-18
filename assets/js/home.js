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
  const [servicesRaw, categoriesRaw, blogRaw] = await Promise.all([
    fetch(ROOT + "data/services.json").then((r) => r.json()),
    fetch(ROOT + "data/categories.json").then((r) => r.json()),
    fetch(ROOT + "data/blog-posts.json").then((r) => r.json()).catch(() => []),
  ]);
  // Support either a plain array or an older { services: [...] } wrapper.
  SERVICES_DATA = Array.isArray(servicesRaw) ? servicesRaw : (servicesRaw.services || []);
  CATEGORIES_DATA = Array.isArray(categoriesRaw) ? categoriesRaw : (categoriesRaw.categories || []);
  BLOG_DATA = Array.isArray(blogRaw) ? blogRaw : (blogRaw.posts || []);
}

function renderCategories() {
  const host = document.getElementById("category-grid");
  if (!host) return;
  const lang = getLang();
  host.innerHTML = CATEGORIES_DATA.map((c) => {
    const count = SERVICES_DATA.filter((s) => s.category === c.slug).length;
    return `
      <a class="cat-card" href="${ROOT}category/category.html?cat=${c.slug}">
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

  // "Latest" = last 6 entries in services.json (new services get appended
  // to the end of the array as modules are added).
  const latest = SERVICES_DATA.slice(-6).reverse();

  host.innerHTML = latest.map((s) => {
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
          <a href="${ROOT}service/service.html?id=${s.slug || s.id}">${dict.read_more || (lang === "hi" ? "गाइड पढ़ें" : "Read guide")}</a>
        </div>
      </article>
    `;
  }).join("");
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

async function renderHome() {
  await loadHomeData();
  renderCategories();
  renderServices();
  renderBlogSection();
}

document.addEventListener("ss:ready", renderHome);

// Re-render on language toggle (onLangChange comes from i18n-helper.js and
// is now correctly wired to core.js's real "ss:language-changed" event).
onLangChange(() => {
  if (!SERVICES_DATA || !CATEGORIES_DATA) return;
  renderCategories();
  renderServices();
  renderBlogSection();
});
