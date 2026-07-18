/* ==========================================================================
   blog.js
   Renders /blog/index.html — the full list of blog posts, newest first.
   ========================================================================== */

(function () {
  const ROOT = window.SS_ROOT || "";
  const listEl = document.getElementById("blog-list");

  function normalizePosts(data) {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.posts)) return data.posts;
    return [];
  }

  function formatDate(iso) {
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    const locale = getLang() === "hi" ? "hi-IN" : "en-IN";
    return d.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
  }

  fetch(`${ROOT}data/blog-posts.json`)
    .then((r) => r.json())
    .then((raw) => {
      const posts = normalizePosts(raw).slice().sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));
      render(posts);
      onLangChange(() => render(posts));
    })
    .catch((err) => {
      console.error("Failed to load blog posts:", err);
      listEl.innerHTML = `<p class="empty-state">Could not load blog posts. Please try again later.</p>`;
    });

  function render(posts) {
    if (!posts.length) {
      listEl.innerHTML = `<p class="empty-state">${t({
        en: "No blog posts published yet. Check back soon.",
        hi: "अभी तक कोई ब्लॉग पोस्ट प्रकाशित नहीं हुई। जल्द ही देखें।",
      })}</p>`;
      return;
    }
    listEl.innerHTML = posts
      .map(
        (post) => `
      <a class="blog-card" href="${ROOT}blog/post.html?slug=${post.slug}">
        <div class="blog-card__date">${formatDate(post.datePublished)}</div>
        <div class="blog-card__title">${t(post.title)}</div>
        <div class="blog-card__excerpt">${t(post.excerpt)}</div>
        <div class="blog-card__arrow">${t({ en: "Read more →", hi: "और पढ़ें →" })}</div>
      </a>
    `
      )
      .join("");
  }
})();
