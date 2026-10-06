// admin-rc-reports.js
// Paid RC challan reports (rc_reports, written by the Worker): what each
// customer saw (number of challans, amount, list), refunds and failures, and
// a summary of how many reports had zero challans.
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("rc-list");
  const summary = document.getElementById("rc-summary");
  const count = document.getElementById("rc-count");
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const when = (d) => new Date(d).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
  const tile = (label, value, note) => `<div class="dash-card" style="margin:0;"><div style="font-size:0.8rem;color:var(--admin-text-muted)">${label}</div><div style="font-size:1.6rem;font-weight:800">${value}</div>${note ? `<small>${note}</small>` : ""}</div>`;

  async function load() {
    list.innerHTML = '<tr><td colspan="5">Loading…</td></tr>';
    try {
      const client = await getSupabaseClient();
      const { data, error } = await client.from("rc_reports").select("*").order("created_at", { ascending: false }).limit(2000);
      if (error) throw error;
      const rows = (data || []).filter((r) => !/^pay_TEST/.test(r.payment_id));
      const reports = rows.filter((r) => r.outcome === "report");
      const zero = reports.filter((r) => !r.challan_count).length;
      const withCh = reports.length - zero;
      const pct = (n) => (reports.length ? Math.round((n * 100) / reports.length) + "%" : "-");
      count.textContent = `Reports: ${rows.length}`;
      summary.innerHTML = tile("Reports delivered", reports.length)
        + tile("With challans", withCh, pct(withCh))
        + tile("No challan", zero, pct(zero))
        + tile("Refunded / failed", rows.length - reports.length)
        + tile("Challan amount shown", "₹" + reports.reduce((n, r) => n + (r.pending_amount || 0), 0).toLocaleString("en-IN"));
      list.innerHTML = rows.map((r) => {
        const ch = Array.isArray(r.challans) ? r.challans : [];
        const result = r.outcome === "report"
          ? `<span style="color:${r.challan_count ? "#b45309" : "#047857"};font-weight:700">${r.challan_count ? r.challan_count + " challan(s)" : "No challan"}</span>${r.result_code ? `<br><small>code ${esc(r.result_code)}</small>` : ""}`
          : `<span style="color:#b91c1c;font-weight:700">${r.outcome}</span><br><small>${esc(r.error)}</small>`;
        const detail = ch.length
          ? `<details><summary>₹${(r.pending_amount || 0).toLocaleString("en-IN")} · ${ch.length} listed</summary><small>${ch.map((c) => `${esc(c.challan_no)} · ${esc(c.date)} · ₹${esc(c.amount)} · ${esc(c.status)}${c.offence ? " · " + esc(c.offence) : ""}`).join("<br>")}</small></details>`
          : r.outcome === "report" ? "-" : "";
        return `<tr><td>${when(r.created_at)}</td><td><code>${esc(r.rc_number)}</code></td><td>${result}</td><td>${detail}</td><td><small>${esc(r.payment_id)}</small></td></tr>`;
      }).join("") || '<tr><td colspan="5" style="text-align:center;">No reports yet.</td></tr>';
    } catch (e) {
      list.innerHTML = `<tr><td colspan="5">Could not load: ${esc(e.message)}</td></tr>`;
    }
  }
  document.getElementById("rc-refresh").addEventListener("click", load);
  load();
});
