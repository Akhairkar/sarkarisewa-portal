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

  // Quick fill: today's posters, jobs closing soon (deadlines-jobs.json),
  // recently updated pages (lastmod.json); page search from search-index.json.
  const TPL = {
    yojana: [
      "कौन ले सकता है, कौन से कागज़ लगेंगे और आवेदन का तरीका आसान हिंदी में देखें।",
      "आखिरी तारीख पास है। घर बैठे आवेदन का तरीका और ज़रूरी कागज़ देखें।",
      "पेंशन न रुके, इसलिए समय पर यह काम कर लें। पूरा तरीका देखें।",
      "नया सरकारी फैसला: किसे फायदा होगा और क्या करना है, यहां पढ़ें।",
    ],
    naukri: [
      "योग्यता, उम्र सीमा, फीस और आवेदन का तरीका देखें।",
      "आवेदन की आखिरी तारीख पास है। आज ही फॉर्म भरें।",
      "एडमिट कार्ड जारी: डाउनलोड करने का तरीका देखें।",
      "रिजल्ट जारी: अपना रिजल्ट देखने का तरीका यहां है।",
    ],
  };
  const QCAT = { yojana: ["yojana", "alert", "document"], naukri: ["naukri", "deadline"] };
  const MONTHS = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
  const today = new Date(Date.now() + 330 * 60000).toISOString().slice(0, 10);
  const dayHi = (iso) => { const d = new Date(iso + "T00:00:00Z"); return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`; };
  const cut = (t, n) => { t = String(t || "").replace(/\s+/g, " ").trim(); if (t.length <= n) return t; const s = t.slice(0, n - 1); return (s.lastIndexOf(" ") > n / 2 ? s.slice(0, s.lastIndexOf(" ")) : s) + "…"; };
  const isJobUrl = (u) => /^\/(jobs|exams)\//.test(u);
  let pages = [], deadlines = [], recent = [], posters = [], quick = [];
  const getJson = (u) => fetch(u, { cache: "no-store" }).then((r) => (r.ok ? r.json() : null)).catch(() => null);

  async function loadSources() {
    const [idx, dl, lm] = await Promise.all([getJson("../search-index.json"), getJson("../deadlines-jobs.json"), getJson("../lastmod.json")]);
    pages = (idx || []).filter((x) => Array.isArray(x) && x[0] && x[1]);
    const title = Object.fromEntries(pages.map(([u, t]) => [u, t]));
    deadlines = (dl || []).filter((d) => d.deadline_date >= today).sort((a, b) => a.deadline_date.localeCompare(b.deadline_date));
    recent = Object.entries(lm || {}).map(([u, v]) => [u.replace(/^https?:\/\/[^/]+/, ""), v && v[1]])
      .filter(([u, d]) => d && title[u] && !/^\/(states|arzi|en|embed|tools|support)\//.test(u) && !/index\.html$/.test(u))
      .sort((a, b) => b[1].localeCompare(a[1])).slice(0, 60).map(([u, d]) => ({ u, d, t: title[u] }));
    try {
      const { data } = await client.from("daily_posters").select("category,title,body,page_url,publish_date").eq("status", "published").gte("publish_date", today).order("publish_date").order("sort").limit(20);
      posters = data || [];
    } catch { posters = []; }
    fillChoices();
  }
  function fillChoices() {
    const topic = form.topic.value;
    quick = [];
    const groups = [];
    const add = (label, items) => { if (items.length) groups.push(`<optgroup label="${esc(label)}">${items.map((q) => { quick.push(q); return `<option value="${quick.length - 1}">${esc(q.label)}</option>`; }).join("")}</optgroup>`); };
    add("Today's posters", posters.filter((p) => QCAT[topic].includes(p.category) && p.page_url).map((p) => ({ label: p.title, title: p.title, body: p.body, url: p.page_url })));
    if (topic === "naukri") {
      add("Jobs: last date coming", deadlines.slice(0, 30).map((d) => {
        const name = String(d.title_hi || "").split(":")[0];
        return { label: `${dayHi(d.deadline_date)} · ${name}`, title: cut(`${name}: आखिरी तारीख ${dayHi(d.deadline_date)}`, 70), body: cut(`आवेदन ${/^\d/.test(d.description_hi || "") ? d.description_hi : `${dayHi(d.deadline_date)} ${d.description_hi || "तक"}`}। योग्यता, फीस और फॉर्म भरने का तरीका देखें।`, 200), url: d.href };
      }));
      add("Recently updated job pages", recent.filter((r) => isJobUrl(r.u)).slice(0, 20).map((r) => ({ label: r.t, title: cut(r.t, 70), body: TPL.naukri[0], url: r.u })));
    } else {
      add("Recently updated pages", recent.filter((r) => !isJobUrl(r.u)).slice(0, 30).map((r) => ({ label: r.t, title: cut(r.t, 70), body: TPL.yojana[0], url: r.u })));
    }
    $("pu-quick").innerHTML = `<option value="">— choose (or fill by hand) —</option>${groups.join("")}`;
    $("pu-tpl").innerHTML = `<option value="">Ready text: choose one, or write your own below</option>${TPL[topic].map((t, i) => `<option value="${i}">${esc(t)}</option>`).join("")}`;
    $("pu-pages").innerHTML = pages.filter(([u]) => (topic === "naukri") === isJobUrl(u)).slice(0, 2500).map(([u, t]) => `<option value="${esc(u)}">${esc(t)}</option>`).join("");
  }

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
        + (s.ready ? "" : `<br><span style="color:#b91c1c;">Not ready yet: send key or VAPID keys missing (PUSH_SEND_KEY / VAPID keys).</span>`);
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
  form.topic.addEventListener("change", fillChoices);
  $("pu-quick").addEventListener("change", (e) => {
    const q = quick[e.target.value];
    if (!q) return;
    form.title.value = cut(q.title, 70); form.body.value = cut(q.body || TPL[form.topic.value][0], 200); form.url.value = q.url;
    preview();
  });
  $("pu-tpl").addEventListener("change", (e) => { const t = TPL[form.topic.value][e.target.value]; if (t) { form.body.value = t; preview(); } });
  form.url.addEventListener("change", () => {
    const hit = pages.find(([u]) => u === path(form.url.value));
    if (hit && !form.title.value.trim()) { form.title.value = cut(hit[1], 70); preview(); }
  });
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
    msg.textContent = "Queued. It will go out within about 5 minutes (7:30 AM to 9:25 PM).";
    form.reset(); fillChoices(); preview(); load();
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
  load().then(loadSources);
});
