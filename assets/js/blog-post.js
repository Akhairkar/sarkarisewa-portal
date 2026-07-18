/* ==========================================================================
   blog-post.js
   Renders /blog/post.html for whichever post is requested via the URL,
   e.g. post.html?slug=track-aadhaar-update-status-online
   ========================================================================== */

(function () {
  const ROOT = window.SS_ROOT || "";
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  const breadcrumbEl = document.getElementById("breadcrumb");
  const heroEl = document.getElementById("blog-post-hero");
  const bodyEl = document.getElementById("blog-post-body");
  const relatedEl = document.getElementById("blog-post-related");

  function normalizePosts(data) {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.posts)) return data.posts;
    return [];
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

  function formatDate(iso) {
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    const locale = getLang() === "hi" ? "hi-IN" : "en-IN";
    return d.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
  }

  if (!slug) {
    renderMissing();
  } else {
    Promise.all([
      fetch(`${ROOT}data/blog-posts.json`).then((r) => r.json()),
      fetch(`${ROOT}data/services.json`).then((r) => r.json()),
      fetch(`${ROOT}data/categories.json`).then((r) => r.json()),
    ])
      .then(([postsRaw, servicesRaw, categoriesRaw]) => {
        const posts = normalizePosts(postsRaw);
        const post = posts.find((p) => p.slug === slug);
        if (!post) {
          renderMissing();
          return;
        }
        const services = normalizeServices(servicesRaw);
        const categories = normalizeCategories(categoriesRaw);
        const category = post.category ? categories.find((c) => c.slug === post.category) : null;
        const relatedService = post.relatedServiceId
          ? services.find((s) => (s.slug || s.id) === post.relatedServiceId)
          : null;

        renderAll(post, category, relatedService);
        onLangChange(() => renderAll(post, category, relatedService));
      })
      .catch((err) => {
        console.error("Failed to load blog post:", err);
        bodyEl.innerHTML = `<p class="empty-state">Could not load this post. Please try again later.</p>`;
      });
  }

  function renderAll(post, category, relatedService) {
    document.title = `${t(post.title)} — SarkariSewa Portal Blog`;
    renderMeta(post, category);
    renderBreadcrumb(post);
    renderHero(post, category);
    bodyEl.innerHTML = t(post.body);
    renderRelated(relatedService);
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

  function renderMeta(post, category) {
    const title = t(post.title);
    const excerpt = t(post.excerpt) || "";
    const url = `https://akhairkar.github.io/sarkarisewa-portal/blog/post.html?slug=${post.slug}`;

    setMetaTag("name", "description", excerpt);
    setMetaTag("property", "og:title", `${title} — SarkariSewa Portal Blog`);
    setMetaTag("property", "og:description", excerpt);
    setMetaTag("property", "og:type", "article");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    renderSchema(post, category, title, excerpt, url);
  }

  function renderSchema(post, category, title, excerpt, url) {
    const existing = document.getElementById("blog-post-schema");
    if (existing) existing.remove();

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          headline: title,
          description: excerpt,
          datePublished: post.datePublished,
          url: url,
          author: { "@type": "Organization", name: "SarkariSewa Portal" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://akhairkar.github.io/sarkarisewa-portal/index.html" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://akhairkar.github.io/sarkarisewa-portal/blog/index.html" },
            { "@type": "ListItem", position: 3, name: title, item: url },
          ],
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "blog-post-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  function renderBreadcrumb(post) {
    breadcrumbEl.innerHTML = `
      <a href="${ROOT}index.html">Home</a>
      <span class="sep">/</span>
      <a href="${ROOT}blog/index.html" data-i18n="blog_title">Blog</a>
      <span class="sep">/</span>
      <span class="current">${t(post.title)}</span>
    `;
  }

  function renderHero(post, category) {
    heroEl.innerHTML = `
      ${category ? `<span class="service-hero__badge">${category.icon || ""} ${t(category.name)}</span>` : ""}
      <h1 class="blog-post-hero__title">${t(post.title)}</h1>
      <p class="blog-post-hero__date">${t({ en: "Published on", hi: "प्रकाशित" })} ${formatDate(post.datePublished)}</p>
    `;
  }

  function renderRelated(relatedService) {
    if (!relatedService) {
      relatedEl.hidden = true;
      return;
    }
    relatedEl.hidden = false;
    relatedEl.innerHTML = `
      <p class="blog-post-related__label">${t({ en: "Related service", hi: "संबंधित सेवा" })}</p>
      <a class="service-card" href="${ROOT}service/service.html?id=${relatedService.slug || relatedService.id}">
        <div class="service-card__name">${t(relatedService.name)}</div>
        <div class="service-card__desc">${t(relatedService.shortDescription)}</div>
        <div class="service-card__arrow">View details →</div>
      </a>
    `;
  }

  function renderMissing() {
    heroEl.innerHTML = `
      <h1 class="blog-post-hero__title">${t({ en: "Post not found", hi: "पोस्ट नहीं मिली" })}</h1>
      <p class="blog-post-hero__date">${t({
        en: "This blog post doesn't exist or the link may be broken.",
        hi: "यह ब्लॉग पोस्ट मौजूद नहीं है या लिंक टूटा हो सकता है।",
      })}</p>
    `;
    bodyEl.innerHTML = "";
    relatedEl.hidden = true;
    breadcrumbEl.innerHTML = `<a href="${ROOT}index.html">Home</a><span class="sep">/</span><a href="${ROOT}blog/index.html">Blog</a>`;
  }
})();
