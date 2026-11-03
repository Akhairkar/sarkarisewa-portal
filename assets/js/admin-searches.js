// admin-searches.js
// Site search log (supabase/search-queries.sql, RPC search_stats): searches
// that found nothing, searches nobody clicked, and the most searched words.
document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);
  if (!$("sq-top")) return;
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const day = (d) => (d ? new Date(d).toLocaleString("en-IN", { dateStyle: "short", timeStyle: "short" }) : "");
  const link = (q) => `<a href="../search.html?q=${encodeURIComponent(q)}" target="_blank" rel="noopener">${esc(q)}</a>`;
  const empty = (el, cols, t) => { el.innerHTML = `<tr><td colspan="${cols}" style="text-align:center; color:var(--admin-text-muted);">${t}</td></tr>`; };
  let client = null;
  async function load() {
    try {
      if (!client) client = await getSupabaseClient();
      const { data, error } = await client.rpc("search_stats", { p_days: Number($("sq-days").value) });
      if (error) throw error;
      $("sq-total").innerHTML = `Searches saved: <strong>${data.total}</strong>`;
      data.none.length ? ($("sq-none").innerHTML = data.none.map((r) => `<tr><td>${link(r.q)}</td><td>${r.n}</td><td>${day(r.last)}</td></tr>`).join("")) : empty($("sq-none"), 3, "None yet.");
      data.noclick.length ? ($("sq-noclick").innerHTML = data.noclick.map((r) => `<tr><td>${link(r.q)}</td><td>${r.n}</td><td>${r.avg_results}</td></tr>`).join("")) : empty($("sq-noclick"), 3, "None yet.");
      data.top.length ? ($("sq-top").innerHTML = data.top.map((r) => `<tr><td>${link(r.q)}</td><td>${r.n}</td><td>${r.avg_results}</td><td>${r.clicks}</td></tr>`).join("")) : empty($("sq-top"), 4, "No searches yet.");
    } catch (e) {
      $("sq-total").textContent = "Could not load: " + (e.message || e) + " (has supabase/search-queries.sql been run?)";
    }
  }
  $("sq-days").addEventListener("change", load);
  load();
});
