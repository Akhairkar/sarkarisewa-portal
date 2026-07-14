/* Runs only on index.html. Depends on core.js (main.js) having
   set up SITE.lang and fired ss:ready / ss:language-changed. */

let SERVICES_DATA = null;

async function loadServicesData() {
  if (SERVICES_DATA) return SERVICES_DATA;
  const res = await fetch(ROOT + "data/services.json");
  SERVICES_DATA = await res.json();
  return SERVICES_DATA;
}

function renderCategories(data, lang) {
  const host = document.getElementById("category-grid");
  if (!host) return;
  host.innerHTML = data.categories.map((c) => `
    <a class="cat-card" href="${ROOT}category/${c.slug}.html">
      <div class="cat-icon" aria-hidden="true">${c.icon}</div>
      <div class="cat-name">${c[lang]}</div>
      <div class="cat-count mono">${c.count} ${lang === "hi" ? "सेवाएँ" : "services"}</div>
    </a>
  `).join("");
}

function renderServices(data, lang) {
  const host = document.getElementById("latest-grid");
  if (!host) return;
  const dict = (window.SITE && SITE.langData && SITE.langData[lang]) || {};
  host.innerHTML = data.services.map((s) => {
    const links = s.official_links.slice(0, 3).map((l, i) => `
      <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="${i === 0 ? "official" : ""}">
        ${lang === "hi" ? l.label_hi : l.label_en}
      </a>
    `).join("");
    return `
      <article class="service-card">
        <h3>${s[lang].title}</h3>
        <p>${s[lang].summary}</p>
        <div class="service-links">
          ${links}
          <a href="${ROOT}service/${s.slug}.html">${dict.read_more || "Read guide"}</a>
        </div>
      </article>
    `;
  }).join("");
}

async function renderHome() {
  const data = await loadServicesData();
  renderCategories(data, SITE.lang);
  renderServices(data, SITE.lang);
}

document.addEventListener("ss:ready", renderHome);
document.addEventListener("ss:language-changed", (e) => {
  if (!SERVICES_DATA) return;
  renderCategories(SERVICES_DATA, e.detail.lang);
  renderServices(SERVICES_DATA, e.detail.lang);
});
