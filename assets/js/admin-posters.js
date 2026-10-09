// admin-posters.js
// Daily WhatsApp Status posters (daily_posters): write, preview in the four
// designs, save as draft or publish, hide/delete, and see how many people
// viewed, shared and downloaded each poster (poster_events). The preview uses
// the same poster-draw.js as /poster/, so it matches what visitors get.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pa-form");
  const list = document.getElementById("pa-list");
  const stats = document.getElementById("pa-stats");
  const msg = document.getElementById("pa-msg");
  const canvas = document.getElementById("pa-preview");
  const designs = document.getElementById("pa-designs");
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const today = () => new Date(Date.now() + 5.5 * 36e5).toISOString().slice(0, 10);
  const CAT = (window.SSPoster && SSPoster.CAT) || {};
  let rows = [], events = [], design = "saffron";

  const card = (label, value, sub) => `<div class="dash-card" style="margin:0;"><div style="font-size:.8rem;opacity:.75">${label}</div><div style="font-size:1.6rem;font-weight:800">${value}</div>${sub ? `<div style="font-size:.78rem;opacity:.7">${sub}</div>` : ""}</div>`;

  function values() {
    const f = new FormData(form), v = {};
    for (const [k, x] of f.entries()) v[k] = String(x).trim();
    return v;
  }

  function preview() {
    if (!window.SSPoster) return;
    const v = values();
    document.getElementById("pa-c-title").textContent = `(${v.title.length}/90)`;
    document.getElementById("pa-c-body").textContent = `(${v.body.length}/320)`;
    SSPoster.draw(canvas, { ...v, title: v.title || "शीर्षक यहां", body: v.body || "जानकारी यहां" }, { design, size: "status", scale: 0.4,
      user: { name: "आपका नाम / संस्थान", line: "📞 98xxxxxx10", photo: null } });
  }

  if (window.SSPoster) {
    designs.innerHTML = Object.entries(SSPoster.DESIGNS).map(([k, d]) => `<button type="button" class="theme-toggle-btn" data-d="${k}">${d.label}</button>`).join("");
    designs.addEventListener("click", (e) => { const b = e.target.closest("[data-d]"); if (b) { design = b.dataset.d; preview(); } });
    SSPoster.ready().then(preview);
  }
  form.addEventListener("input", preview);

  function reset() {
    form.reset();
    form.id.value = "";
    form.publish_date.value = today();
    document.getElementById("pa-form-title").textContent = "New poster";
    preview();
  }
  document.getElementById("pa-reset").addEventListener("click", reset);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const status = (e.submitter && e.submitter.dataset.status) || "draft";
    const v = values();
    if (v.source_url && !/^https:\/\//.test(v.source_url)) { msg.textContent = "Source URL must start with https://"; return; }
    if (v.page_url && !v.page_url.startsWith("/")) { msg.textContent = "Our page must start with / (e.g. /jobs/...)"; return; }
    if (status === "published" && !v.source_label) { msg.textContent = "Add a source before publishing."; return; }
    const row = {
      publish_date: v.publish_date || today(), category: v.category, title: v.title, body: v.body,
      highlight: v.highlight || null, source_label: v.source_label || null, source_url: v.source_url || null,
      page_url: v.page_url || null, sort: Number(v.sort) || 0, status,
    };
    msg.textContent = "Saving…";
    try {
      const client = await getSupabaseClient();
      const q = v.id ? client.from("daily_posters").update(row).eq("id", v.id) : client.from("daily_posters").insert(row);
      const { error } = await q;
      if (error) throw error;
      msg.textContent = status === "published" ? "✅ Published. It shows on /poster/ right away (and in the page text after the next deploy)." : "💾 Saved as draft.";
      reset();
      load();
    } catch (err) {
      msg.textContent = "Could not save: " + err.message;
    }
  });

  function edit(id) {
    const r = rows.find((x) => x.id === id); if (!r) return;
    for (const k of ["id", "publish_date", "category", "title", "body", "highlight", "source_label", "source_url", "page_url", "sort"]) form[k].value = r[k] ?? "";
    document.getElementById("pa-form-title").textContent = "Edit poster";
    preview();
    form.scrollIntoView({ behavior: "smooth" });
  }

  async function setStatus(id, status) {
    const client = await getSupabaseClient();
    const { error } = await client.from("daily_posters").update({ status }).eq("id", id);
    if (error) alert(error.message); else load();
  }
  async function remove(id) {
    if (!confirm("Delete this poster and its counts?")) return;
    const client = await getSupabaseClient();
    const { error } = await client.from("daily_posters").delete().eq("id", id);
    if (error) alert(error.message); else load();
  }

  list.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-act]"); if (!b) return;
    const id = b.dataset.id;
    if (b.dataset.act === "edit") edit(id);
    else if (b.dataset.act === "del") remove(id);
    else setStatus(id, b.dataset.act);
  });

  function render() {
    const count = (id, a) => events.filter((x) => x.poster_id === id && x.action === a).length;
    const week = events.filter((x) => Date.now() - new Date(x.created_at) < 7 * 864e5);
    const n = (arr, a) => arr.filter((x) => x.action === a).length;
    const byDesign = {};
    events.filter((x) => x.action === "share" || x.action === "download").forEach((x) => { byDesign[x.design || "-"] = (byDesign[x.design || "-"] || 0) + 1; });
    const topDesign = Object.entries(byDesign).sort((a, b) => b[1] - a[1])[0];
    const label = (k) => (SSPoster && SSPoster.DESIGNS[k] ? SSPoster.DESIGNS[k].label : k);
    const photo = events.filter((x) => (x.action === "share" || x.action === "download") && x.with_photo).length;
    stats.innerHTML =
      card("Poster views (7 days)", n(week, "view"), `all time ${n(events, "view")}`) +
      card("Status shares (7 days)", n(week, "share"), `all time ${n(events, "share")}`) +
      card("Downloads (7 days)", n(week, "download"), `all time ${n(events, "download")}`) +
      card("People who added their name/photo", n(events, "customise"), `${photo} shares/downloads carried a photo`) +
      card("Most used design", topDesign ? esc(label(topDesign[0])) : "-", topDesign ? `${topDesign[1]} uses` : "") +
      card("Published posters", rows.filter((r) => r.status === "published").length, `${rows.filter((r) => r.status === "draft").length} drafts`);
    list.innerHTML = rows.map((r) => `<tr>
      <td>${esc(r.publish_date)}</td>
      <td><strong>${esc(r.title)}</strong><br><small>${esc(CAT[r.category] || r.category)} · ${esc((r.body || "").slice(0, 90))}…</small>${r.page_url ? `<br><small>${esc(r.page_url)}</small>` : ""}</td>
      <td>${r.status === "published" ? "✅ published" : r.status === "draft" ? "📝 draft" : "🙈 hidden"}</td>
      <td>${count(r.id, "view")}</td><td>${count(r.id, "share")}</td><td>${count(r.id, "download")}</td>
      <td style="white-space:nowrap">
        <button class="theme-toggle-btn" data-act="edit" data-id="${r.id}">Edit</button>
        ${r.status === "published" ? `<button class="theme-toggle-btn" data-act="hidden" data-id="${r.id}">Hide</button>` : `<button class="theme-toggle-btn" data-act="published" data-id="${r.id}">Publish</button>`}
        <button class="theme-toggle-btn" data-act="del" data-id="${r.id}">🗑</button>
      </td></tr>`).join("") || '<tr><td colspan="7" style="text-align:center;">No posters yet.</td></tr>';
  }

  async function load() {
    try {
      const client = await getSupabaseClient();
      const [p, ev] = await Promise.all([
        client.from("daily_posters").select("*").order("publish_date", { ascending: false }).order("sort").limit(300),
        client.from("poster_events").select("poster_id,action,design,with_photo,created_at").order("created_at", { ascending: false }).limit(20000),
      ]);
      if (p.error) throw p.error;
      rows = p.data || []; events = (ev.data || []);
      render();
    } catch (e) {
      list.innerHTML = `<tr><td colspan="7">Could not load: ${esc(e.message)}</td></tr>`;
    }
  }
  document.getElementById("pa-refresh").addEventListener("click", load);

  // Drafts from vacancies closing in the next three weeks (built with the site).
  document.getElementById("pa-jobs").addEventListener("click", async () => {
    const box = document.getElementById("pa-jobs-list");
    box.innerHTML = "Loading…";
    try {
      const jobs = await (await fetch("/poster-drafts.json?" + Date.now())).json();
      const MONTHS = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
      const hi = (d) => { const x = new Date(d + "T00:00:00"); return `${x.getDate()} ${MONTHS[x.getMonth()]}`; };
      box.innerHTML = jobs.length ? "<p style='margin:6px 0'>Pick one to fill the form, then check the facts on the job page before publishing:</p>" + jobs.map((j, i) =>
        `<button type="button" class="theme-toggle-btn" data-j="${i}" style="margin:3px 0;text-align:left;width:100%">${esc(j.title)} · last date ${esc(j.last_date)}</button>`).join("") : "No open vacancy closes in the next 3 weeks.";
      box.onclick = (e) => {
        const b = e.target.closest("[data-j]"); if (!b) return;
        const j = jobs[+b.dataset.j];
        reset();
        form.category.value = "deadline";
        form.title.value = j.title.slice(0, 90);
        form.body.value = "";
        form.highlight.value = `आखिरी तारीख: ${hi(j.last_date)}`;
        form.page_url.value = j.url;
        msg.textContent = "Write 2-3 lines of checked facts in Body and add the official source, then publish.";
        preview();
      };
    } catch (e) {
      box.textContent = "Could not load drafts: " + e.message;
    }
  });

  reset();
  load();
});
