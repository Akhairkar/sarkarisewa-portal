// admin-solar.js
// PM Surya Ghar quote requests (solar_leads): list with address, need and the
// page/referrer each lead came from, per-page and per-state counts, status
// updates and CSV export. All visitor-entered text is escaped.
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("solar-list");
  const summary = document.getElementById("solar-summary");
  const filter = document.getElementById("solar-filter");
  const count = document.getElementById("solar-count");
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const when = (d) => new Date(d).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
  const host = (u) => { try { return u ? new URL(u).hostname.replace(/^www\./, "") : "direct"; } catch (e) { return "direct"; } };
  let rows = [];

  const top = (title, map) => `<div class="dash-card" style="margin:0;"><strong>${title}</strong><ol style="margin:6px 0 0; padding-left:18px; font-size:0.85rem;">${Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([k, v]) => `<li>${esc(k)}: <b>${v}</b></li>`).join("") || "<li>-</li>"}</ol></div>`;
  const tally = (f) => rows.reduce((m, r) => { const k = f(r) || "-"; m[k] = (m[k] || 0) + 1; return m; }, {});

  function render() {
    const shown = rows.filter((r) => !filter.value || r.status === filter.value);
    const week = rows.filter((r) => Date.now() - new Date(r.created_at) < 7 * 864e5).length;
    count.textContent = `Leads: ${rows.length} total · ${week} in 7 days`;
    summary.innerHTML = top("By page", tally((r) => (r.source_page || "").replace(/^\/solar\//, "") || "/solar/"))
      + top("From (referrer)", tally((r) => host(r.referrer)))
      + top("By state", tally((r) => r.state));
    list.innerHTML = shown.map((r) => `<tr>
      <td>${when(r.created_at)}</td>
      <td><strong>${esc(r.name)}</strong><br><a href="tel:+91${esc(r.mobile)}">${esc(r.mobile)}</a> · <a href="https://wa.me/91${esc(r.mobile)}" target="_blank" rel="noopener">WhatsApp</a></td>
      <td>${esc(r.address)}<br><small>${esc([r.city, r.district, r.state, r.pincode].filter(Boolean).join(", "))}</small>${r.discom ? `<br><small>DISCOM: ${esc(r.discom)}</small>` : ""}</td>
      <td><small>Bill ₹${esc(r.monthly_bill ?? "-")}/month · ${r.kw_wanted ? esc(r.kw_wanted) + " kW" : "kW ?"}<br>${r.own_house === true ? "Own house" : r.own_house === false ? "Rented" : ""} · ${esc(r.roof_type || "")} ${esc(r.roof_area || "")}<br>${esc(r.need || "")}</small></td>
      <td><small>${esc(r.source_page || "")}<br>from: ${esc(host(r.referrer))}${r.utm ? `<br>${esc(r.utm)}` : ""}</small></td>
      <td><select data-id="${r.id}" class="theme-toggle-btn">${["new", "contacted", "sent", "installed", "junk"].map((s) => `<option${s === r.status ? " selected" : ""}>${s}</option>`).join("")}</select></td>
    </tr>`).join("") || '<tr><td colspan="6" style="text-align:center;">No leads yet.</td></tr>';
  }

  async function load() {
    list.innerHTML = '<tr><td colspan="6">Loading…</td></tr>';
    try {
      const client = await getSupabaseClient();
      const { data, error } = await client.from("solar_leads").select("*").order("created_at", { ascending: false }).limit(2000);
      if (error) throw error;
      rows = data || [];
      render();
    } catch (e) {
      list.innerHTML = `<tr><td colspan="6">Could not load: ${esc(e.message)}</td></tr>`;
    }
  }

  list.addEventListener("change", async (e) => {
    const sel = e.target.closest("select[data-id]");
    if (!sel) return;
    const client = await getSupabaseClient();
    const { error } = await client.from("solar_leads").update({ status: sel.value }).eq("id", sel.dataset.id);
    if (error) alert("Could not update: " + error.message);
    else { const r = rows.find((x) => String(x.id) === sel.dataset.id); if (r) r.status = sel.value; render(); }
  });
  filter.addEventListener("change", render);
  document.getElementById("solar-refresh").addEventListener("click", load);
  document.getElementById("solar-csv").addEventListener("click", () => {
    const cols = ["created_at", "name", "mobile", "address", "city", "district", "state", "pincode", "discom", "monthly_bill", "kw_wanted", "own_house", "roof_type", "roof_area", "need", "source_page", "referrer", "utm", "status"];
    const csv = [cols.join(",")].concat(rows.map((r) => cols.map((c) => `"${String(r[c] ?? "").replace(/"/g, '""')}"`).join(","))).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv" }));
    a.download = `solar-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  });
  load();
});
