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

  // GUARD: Pre-rendered static pages already contain HTML content.
  // Do NOT wipe or dynamically overwrite pre-rendered content on static blog pages.
  const isDynamicShell = window.location.pathname.endsWith("post.html") || window.location.pathname.endsWith("post.html/");
  if (!isDynamicShell && bodyEl && bodyEl.children.length > 0) {
    return;
  }

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

  // Converts a Supabase blog_posts row into the same shape as a
  // data/blog-posts.json entry (see assets/js/blog.js for the list-page twin).
  function fromSupabaseRow(row) {
    return {
      slug: row.slug,
      title: { en: row.title_en, hi: row.title_hi || row.title_en },
      excerpt: { en: row.excerpt_en || "", hi: row.excerpt_hi || row.excerpt_en || "" },
      datePublished: row.date_published,
      category: row.category,
      relatedServiceId: row.related_service_id,
      tags: row.tags || [],
      body: { en: row.body_en, hi: row.body_hi || row.body_en },
    };
  }

  async function fetchDbPost(theSlug) {
    try {
      const client = typeof getSupabaseClient === "function" ? await getSupabaseClient() : null;
      if (!client) return null;
      const { data, error } = await client
        .from("blog_posts")
        .select("slug, title_en, title_hi, excerpt_en, excerpt_hi, body_en, body_hi, category, related_service_id, tags, date_published")
        .eq("status", "published")
        .eq("slug", theSlug)
        .maybeSingle();
      if (error) throw error;
      return data ? fromSupabaseRow(data) : null;
    } catch (err) {
      console.error("Could not load post from the admin dashboard:", err);
      return null;
    }
  }

  if (!slug) {
    renderMissing();
  } else {
    Promise.all([
      fetch(`${ROOT}data/blog-posts.json`).then((r) => r.json()),
      fetchAllServices(),
      fetch(`${ROOT}data/categories.json`).then((r) => r.json()),
    ])
      .then(async ([postsRaw, services, categoriesRaw]) => {
        const posts = normalizePosts(postsRaw);
        let post = posts.find((p) => p.slug === slug);
        if (!post) {
          post = await fetchDbPost(slug);
        }
        if (!post) {
          renderMissing();
          return;
        }
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
    document.title = `${t(post.title)} — SarkariSewa India Blog`;
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
    const url = `https://sarkarisewaindia.com/blog/post.html?slug=${post.slug}`;

    setMetaTag("name", "description", excerpt);
    setMetaTag("property", "og:title", `${title} — SarkariSewa India Blog`);
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
          author: { "@type": "Organization", name: "SarkariSewa India" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://sarkarisewaindia.com/index.html" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://sarkarisewaindia.com/blog/index.html" },
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
      <div id="blog-share-row"></div>
    `;

    if (typeof renderShareRow === "function") {
      const shareUrl = `https://sarkarisewaindia.com/blog/post.html?slug=${post.slug || post.id}`;
      renderShareRow("blog-share-row", shareUrl, t(post.title), "blog-share");
    }
  }

  function renderRelated(relatedService) {
    if (!relatedService) {
      relatedEl.hidden = true;
      return;
    }
    relatedEl.hidden = false;
    relatedEl.innerHTML = `
      <p class="blog-post-related__label">${t({ en: "Related service", hi: "संबंधित सेवा" })}</p>
      <a class="service-card" href="${ssServiceHref(ROOT, relatedService)}">
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
