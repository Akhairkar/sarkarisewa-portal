/* ==========================================================================
   category.js  (REBUILT — the version in the repo was missing its entire
   top half: no IIFE wrapper, no ROOT/catSlug setup, no DOM lookups, no
   fetch() calls. Execution crashed on line 1 because `services` was never
   defined anywhere, which is why the category page showed only the static
   "Services in this category" heading from category.html and nothing else.

   Renders /category/category.html for whichever category is requested via
   the URL, e.g. category.html?cat=identity-documents
   ========================================================================== */

(function () {
  const ROOT = window.SS_ROOT || "";
  const params = new URLSearchParams(window.location.search);
  const catSlug = params.get("cat");

  const breadcrumbEl = document.getElementById("breadcrumb");
  const heroEl = document.getElementById("category-hero");
  const gridEl = document.getElementById("service-grid");

  if (!catSlug) {
    renderMissingCategory();
  } else {
    loadAndRender();
  }

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

  function loadAndRender() {
    Promise.all([
      fetch(`${ROOT}data/services.json`).then((r) => r.json()),
      fetch(`${ROOT}data/categories.json`).then((r) => r.json()),
    ])
      .then(([servicesRaw, categoriesRaw]) => {
        const services = normalizeServices(servicesRaw);
        const categories = normalizeCategories(categoriesRaw);
        const category = categories.find((c) => c.slug === catSlug);

        if (!category) {
          renderMissingCategory();
          return;
        }

        const servicesInCategory = services.filter((s) => s.category === catSlug);

        document.title = `${t(category.name)} — SarkariSewa Portal`;
        renderMeta(category, servicesInCategory);
        renderBreadcrumb(category);
        renderHero(category, servicesInCategory.length);
        renderGrid(servicesInCategory);

        onLangChange(() => {
          document.title = `${t(category.name)} — SarkariSewa Portal`;
          renderMeta(category, servicesInCategory);
          renderBreadcrumb(category);
          renderHero(category, servicesInCategory.length);
          renderGrid(servicesInCategory);
        });
      })
      .catch((err) => {
        console.error("Failed to load category data:", err);
        gridEl.innerHTML = `<p class="empty-state">Could not load this category. Please try again later.</p>`;
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

  function renderMeta(category, servicesInCategory) {
    const title = t(category.name);
    const desc = t(category.description) || `Browse ${title} government services on SarkariSewa Portal.`;
    const url = `https://akhairkar.github.io/sarkarisewa-portal/category/category.html?cat=${category.slug}`;

    setMetaTag("name", "description", desc);
    setMetaTag("property", "og:title", `${title} — SarkariSewa Portal`);
    setMetaTag("property", "og:description", desc);
    setMetaTag("property", "og:type", "website");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    const existing = document.getElementById("category-schema");
    if (existing) existing.remove();

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ItemList",
          name: title,
          description: desc,
          numberOfItems: servicesInCategory.length,
          itemListElement: servicesInCategory.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: t(s.name),
            url: `https://akhairkar.github.io/sarkarisewa-portal/service/service.html?id=${s.slug || s.id}`,
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://akhairkar.github.io/sarkarisewa-portal/index.html",
            },
            { "@type": "ListItem", position: 2, name: title, item: url },
          ],
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "category-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  function renderBreadcrumb(category) {
    breadcrumbEl.innerHTML = `
      <a href="${ROOT}index.html">Home</a>
      <span class="sep">/</span>
      <span class="current">${t(category.name)}</span>
    `;
  }

  function renderHero(category, count) {
    heroEl.innerHTML = `
      <div class="category-hero__icon" aria-hidden="true">${category.icon || ""}</div>
      <h1 class="category-hero__title">${t(category.name)}</h1>
      <p class="category-hero__desc">${t(category.description)}</p>
      <p class="category-hero__count">${count} ${count === 1 ? "service" : "services"}</p>
    `;
  }

  function renderGrid(list) {
    if (!list.length) {
      gridEl.innerHTML = `<p class="empty-state">No services published in this category yet. Check back soon.</p>`;
      return;
    }
    gridEl.innerHTML = list
      .map(
        (service) => `
      <a class="service-card" href="${ROOT}service/service.html?id=${service.slug || service.id}">
        <div class="service-card__name">${t(service.name)}</div>
        <div class="service-card__desc">${t(service.shortDescription)}</div>
        <div class="service-card__arrow">View details →</div>
      </a>
    `
      )
      .join("");
  }

  function renderMissingCategory() {
    heroEl.innerHTML = `
      <h1 class="category-hero__title">Category not found</h1>
      <p class="category-hero__desc">This category doesn't exist or the link may be broken.</p>
    `;
    gridEl.innerHTML = "";
    breadcrumbEl.innerHTML = `<a href="${ROOT}index.html">Home</a>`;
  }
})();
