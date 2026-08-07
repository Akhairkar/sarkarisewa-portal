/* ==========================================================================
   comments.js — Module 15: Comments / Q&A on service pages
   Uses the Supabase "comments" table (see supabase/schema.sql) via the
   shared getSupabaseClient() helper from supabase-client.js.
   ========================================================================== */

(function () {
  const params = new URLSearchParams(window.location.search);
  const serviceId = params.get("id");

  const listEl = document.getElementById("comments-list");
  const formEl = document.getElementById("comment-form");
  const nameEl = document.getElementById("comment-name");
  const messageEl = document.getElementById("comment-message");
  const statusEl = document.getElementById("comment-form-status");
  const submitBtn = document.getElementById("comment-submit");

  if (!listEl || !serviceId) return;

  function tk(key, fallback) {
    const lang = typeof getLang === "function" ? getLang() : "hi";
    if (window.SITE && SITE.langData && SITE.langData[lang] && SITE.langData[lang][key]) {
      return SITE.langData[lang][key];
    }
    return fallback || key;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function formatDate(iso) {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return "";
    const lang = typeof getLang === "function" ? getLang() : "hi";
    const locale = lang === "en" ? "en-IN" : "hi-IN";
    return d.toLocaleDateString(locale, { year: "numeric", month: "short", day: "numeric" });
  }

  function renderComments(comments) {
    if (!comments.length) {
      listEl.innerHTML = `<p class="comments-empty">${tk("comments_empty", "No comments yet — be the first to ask a question.")}</p>`;
      return;
    }
    listEl.innerHTML = comments
      .map(
        (c) => `
      <div class="comment-item">
        <div class="comment-item__head">
          <span class="comment-item__name">${escapeHtml(c.name)}</span>
          <span class="comment-item__date">${formatDate(c.created_at)}</span>
        </div>
        <p class="comment-item__message">${escapeHtml(c.message)}</p>
      </div>
    `
      )
      .join("");
  }

  async function loadComments() {
    const client = await getSupabaseClient();
    if (!client) {
      listEl.innerHTML = `<p class="comments-empty">${tk("comments_not_configured", "Comments are not available right now.")}</p>`;
      if (formEl) formEl.hidden = true;
      return;
    }
    try {
      const { data, error } = await client
        .from("comments")
        .select("name, message, created_at")
        .eq("service_id", serviceId)
        .eq("status", "visible")
        .order("created_at", { ascending: false });
      if (error) throw error;
      renderComments(data || []);
    } catch (err) {
      console.error("Failed to load comments:", err);
      listEl.innerHTML = `<p class="comments-empty">${tk("comments_error", "Could not load comments right now. Please try again later.")}</p>`;
    }
  }

  if (formEl) {
    formEl.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = nameEl.value.trim();
      const message = messageEl.value.trim();

      if (!name) {
        statusEl.textContent = tk("comments_name_required", "Please enter your name.");
        statusEl.className = "comment-form__status comment-form__status--error";
        return;
      }
      if (!message) {
        statusEl.textContent = tk("comments_message_required", "Please enter a message.");
        statusEl.className = "comment-form__status comment-form__status--error";
        return;
      }

      const client = await getSupabaseClient();
      if (!client) {
        statusEl.textContent = tk("comments_not_configured", "Comments are not available right now.");
        statusEl.className = "comment-form__status comment-form__status--error";
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = tk("comments_posting", "Posting…");
      statusEl.textContent = "";

      try {
        const { error } = await client.from("comments").insert({
          service_id: serviceId,
          name: name.slice(0, 80),
          message: message.slice(0, 2000),
          status: "visible",
        });
        if (error) throw error;

        statusEl.textContent = tk("comments_post_success", "Posted! Thanks for your comment.");
        statusEl.className = "comment-form__status comment-form__status--success";
        formEl.reset();
        loadComments();
      } catch (err) {
        console.error("Failed to post comment:", err);
        statusEl.textContent = tk("comments_post_error", "Could not post your comment. Please try again.");
        statusEl.className = "comment-form__status comment-form__status--error";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = tk("comments_submit", "Post");
      }
    });
  }

  loadComments();
})();
