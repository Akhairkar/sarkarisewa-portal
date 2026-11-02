// admin-push.js
// Browser notifications: subscriber counts per topic (push_stats), write a
// notification (push_campaigns, sent by .github/workflows/push-send.yml) and
// cancel one that has not gone yet. Max 2 per topic per day (database rule).

document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);
  const form = $("pu-form"), list = $("pu-list"), stats = $("pu-stats"), msg = $("pu-msg");
  if (!form) return;
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const when = (d) => (d ? new Date(d).toLocaleString("en-IN", { dateStyle: "short", timeStyle: "short" }) : "");
  const TOPIC = { yojana: "योजना", naukri: "नौकरी" };
  let client = null;

  const path = (v) => {
    v = String(v || "").trim();
    const m = v.match(/^https?:\/\/(?:www\.)?sarkarisewaindia\.com(\/.*)?$/i);
    if (m) v = m[1] || "/";
    return v.split("?")[0];
  };
  function preview() {
    const f = new FormData(form);
    $("pu-tc").textContent = `${String(f.get("title")).length}/70`;
    $("pu-bc").textContent = `${String(f.get("body")).length}/200`;
    $("pu-preview").innerHTML = `<strong>🔔 ${esc(f.get("title") || "Title")}</strong><br>${esc(f.get("body") || "Text")}<br><small>sarkarisewaindia.com${esc(path(f.get("url")))} · to ${esc(TOPIC[f.get("topic")])} subscribers</small>`;
  }

  async function load() {
    try {
      if (!client) client = await getSupabaseClient();
      const [st, cs] = await Promise.all([
        client.rpc("push_stats"),
        client.from("push_campaigns").select("*").order("id", { ascending: false }).limit(50),
      ]);
      if (st.error) throw st.error;
      const s = st.data;
      stats.innerHTML = `योजना: <strong>${s.yojana}</strong> · नौकरी: <strong>${s.naukri}</strong> · stopped: ${s.stopped} · new in 7 days: ${s.last7}`
        + (s.ready ? "" : `<br><span style="color:#b91c1c;">Not ready yet: send key or VAPID keys missing (run the push-send workflow once after setting PUSH_SEND_KEY).</span>`);
      const rows = cs.data || [];
      list.innerHTML = rows.length ? rows.map((c) => `<tr><td>${when(c.created_at)}</td><td>${esc(TOPIC[c.topic])}</td>
        <td><strong>${esc(c.title)}</strong><br><small>${esc(c.body)}</small><br><small>${esc(c.url)}</small></td>
        <td>${esc(c.status)}${c.finished_at ? `<br><small>${when(c.finished_at)}</small>` : ""}</td><td>${c.sent_count} / ${c.failed_count}</td>
        <td>${c.status === "queued" ? `<button class="theme-toggle-btn" data-cancel="${c.id}">Cancel</button>` : ""}</td></tr>`).join("")
        : `<tr><td colspan="6" style="text-align:center; color:var(--admin-text-muted);">Nothing sent yet.</td></tr>`;
    } catch (e) {
      stats.textContent = "Could not load: " + (e.message || e) + " (has supabase/push.sql been run?)";
    }
  }

  form.addEventListener("input", preview);
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = new FormData(form);
    const row = { topic: f.get("topic"), title: String(f.get("title")).trim(), body: String(f.get("body")).trim(), url: path(f.get("url")) };
    if (!/^\/[A-Za-z0-9/_.#?=&%-]*$/.test(row.url)) { msg.textContent = "Page must be a link on sarkarisewaindia.com, e.g. /jobs/index.html"; return; }
    if (!confirm(`Send to all ${TOPIC[row.topic]} subscribers?\n\n${row.title}\n${row.body}`)) return;
    $("pu-send").disabled = true;
    const { error } = await client.from("push_campaigns").insert(row);
    $("pu-send").disabled = false;
    if (error) { msg.textContent = "Not queued: " + error.message; return; }
    msg.textContent = "Queued. It will go out within about 20 minutes.";
    form.reset(); preview(); load();
  });
  list.addEventListener("click", async (e) => {
    const b = e.target.closest("button[data-cancel]");
    if (!b || !confirm("Cancel this notification?")) return;
    const { error } = await client.from("push_campaigns").update({ status: "cancelled" }).eq("id", b.dataset.cancel);
    if (error) alert(error.message);
    load();
  });
  $("pu-refresh").addEventListener("click", load);
  preview();
  load();
});
