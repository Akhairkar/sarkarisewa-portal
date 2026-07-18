/* ==========================================================================
   sitemap.js
   Powers sitemap.html's "Services by Category" section — groups all
   services from data/services.json under their category (from
   data/categories.json) and links each one to its real service page.
   ========================================================================== */

(function () {
  const ROOT = window.SS_ROOT || "";
  const container = document.getElementById("sitemap-categories");
  if (!container) return;

  function normalizeServices(data) {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.services)) return data.services;
    return [];
  }
  function normalizeCategories(data) {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.categories)) return data.categories;
    return [];
  }

  Promise.all([
    fetch(`${ROOT}data/services.json`).then((r) => r.json()),
    fetch(`${ROOT}data/categories.json`).then((r) => r.json()),
  ])
    .then(([servicesRaw, categoriesRaw]) => {
      const services = normalizeServices(servicesRaw);
      const categories = normalizeCategories(categoriesRaw);
      render(services, categories);
      onLangChange(() => render(services, categories));
    })
    .catch((err) => {
      console.error("Failed to load sitemap data:", err);
      container.innerHTML = `<p class="empty-state">Could not load the sitemap. Please try again later.</p>`;
    });

  function render(services, categories) {
    container.innerHTML = categories
      .map((cat) => {
        const inCat = services
          .filter((s) => s.category === cat.slug)
          .sort((a, b) => t(a.name).localeCompare(t(b.name)));
        const items = inCat
          .map(
            (s) => `<li><a href="${ROOT}service/service.html?id=${s.slug || s.id}">${t(s.name)}</a></li>`
          )
          .join("");
        return `
        <div class="sitemap-category-block">
          <h3><a href="${ROOT}category/category.html?cat=${cat.slug}">${t(cat.name)}</a></h3>
          <ul class="sitemap-static-list">${items}</ul>
        </div>
      `;
      })
      .join("");
  }
})();
