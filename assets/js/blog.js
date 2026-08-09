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

  // Converts a Supabase blog_posts row (title_en/title_hi, etc.) into the
  // same shape as a data/blog-posts.json entry so render() doesn't need
  // to know which source a post came from.
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

  async function fetchDbPosts() {
    try {
      const client = typeof getSupabaseClient === "function" ? await getSupabaseClient() : null;
      if (!client) return [];
      const { data, error } = await client
        .from("blog_posts")
        .select("slug, title_en, title_hi, excerpt_en, excerpt_hi, body_en, body_hi, category, related_service_id, tags, date_published")
        .eq("status", "published");
      if (error) throw error;
      return (data || []).map(fromSupabaseRow);
    } catch (err) {
      console.error("Could not load posts written from the admin dashboard:", err);
      return [];
    }
  }

  Promise.all([
    fetch(`${ROOT}data/blog-posts.json`).then((r) => r.json()),
    fetchDbPosts(),
  ])
    .then(([raw, dbPosts]) => {
      const posts = normalizePosts(raw)
        .concat(dbPosts)
        .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));
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
      <a class="blog-card" href="${ROOT}blog/${post.isStatic ? post.slug + '.html' : 'post.html?slug=' + post.slug}">
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
