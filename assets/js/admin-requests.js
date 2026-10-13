// admin-requests.js
// "Get it done at home through a verified CSC" requests (service_requests)
// and the yes/no demand counts (service_interest). Admin can change status,
// note which CSC got the task, open WhatsApp, and delete a request.
document.addEventListener("DOMContentLoaded", async () => {
  const client = await adminGuard();
  const esc = adminEsc;
  const list = document.getElementById("rq-list"), stats = document.getElementById("rq-stats"), filter = document.getElementById("rq-filter");
  const STATUS = ["new", "contacted", "assigned", "done", "cancelled", "spam"];
  const card = (label, value) => `<div class="dash-card" style="margin:0;"><div style="font-size:.8rem;opacity:.75">${label}</div><div style="font-size:1.6rem;font-weight:800">${value}</div></div>`;
  let rows = [];

  function render() {
    const f = filter.value;
    const shown = rows.filter((r) => f === "all" || (f === "open" ? ["new", "contacted", "assigned"].includes(r.status) : f === "cancelled" ? ["cancelled", "spam"].includes(r.status) : r.status === f));
    list.innerHTML = shown.length ? shown.map((r) => {
      const d = new Date(r.created_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
      const wa = `https://wa.me/91${r.phone}?text=${encodeURIComponent(`नमस्ते ${r.name} जी, SarkariSewa India से बात कर रहे हैं। आपने ${r.service || "सरकारी काम"} के लिए मदद मांगी थी।`)}`;
      return `<tr data-id="${r.id}">
        <td>${esc(d)}</td>
        <td><strong>${esc(r.name)}</strong><br><a href="tel:+91${esc(r.phone)}">${esc(r.phone)}</a> · <a href="${wa}" target="_blank" rel="noopener">WhatsApp</a><br><small>${esc(r.district)}, ${esc(r.state || "")}</small></td>
        <td>${esc(r.service || "—")}${r.details ? `<br><small>“${esc(r.details)}”</small>` : ""}<br><small><a href="${esc(r.page || "#")}" target="_blank">${esc(r.page || "")}</a></small></td>
        <td><select class="rq-in rq-status">${STATUS.map((s) => `<option${s === r.status ? " selected" : ""}>${s}</option>`).join("")}</select>
            <input class="rq-in rq-csc" placeholder="CSC / note" value="${esc(r.assigned_to || "")}" style="margin-top:4px;width:100%"></td>
        <td><button class="theme-toggle-btn rq-save" type="button">Save</button> <button class="logout-btn rq-del" type="button">Delete</button></td>
      </tr>`;
    }).join("") : `<tr><td colspan="5">No requests here yet.</td></tr>`;
  }

  async function load() {
    const { data, error } = await client.from("service_requests").select("*").order("created_at", { ascending: false }).limit(500);
    if (error) { list.innerHTML = `<tr><td colspan="5">Could not load: ${esc(error.message)}</td></tr>`; return; }
    rows = data || [];
    const since = new Date(Date.now() - 90 * 864e5).toISOString();
    const { data: ints } = await client.from("service_interest").select("page,state,service,choice").gte("created_at", since).limit(20000);
    const yes = (ints || []).filter((i) => i.choice === "yes").length, no = (ints || []).length - yes;
    stats.innerHTML = card("Open requests", rows.filter((r) => ["new", "contacted", "assigned"].includes(r.status)).length)
      + card("Done", rows.filter((r) => r.status === "done").length)
      + card("Said yes (90 days)", yes) + card("Said no (90 days)", no)
      + card("Yes → request", yes ? Math.round((rows.filter((r) => r.created_at >= since).length * 100) / yes) + "%" : "—");
    const agg = {};
    (ints || []).forEach((i) => { const k = [i.page, i.state, i.service].join("|"); (agg[k] = agg[k] || { ...i, yes: 0, no: 0 })[i.choice]++; });
    const top = Object.values(agg).sort((a, b) => b.yes - a.yes || b.no - a.no).slice(0, 50);
    document.getElementById("rq-interest").innerHTML = top.length ? top.map((a) => `<tr><td><a href="${esc(a.page)}" target="_blank">${esc(a.page)}</a></td><td>${esc(a.state || "")}</td><td>${esc(a.service || "")}</td><td>${a.yes}</td><td>${a.no}</td></tr>`).join("") : `<tr><td colspan="5">No answers yet.</td></tr>`;
    render();
  }

  list.addEventListener("click", async (e) => {
    const tr = e.target.closest("tr[data-id]");
    if (!tr) return;
    const id = tr.dataset.id;
    if (e.target.classList.contains("rq-save")) {
      const { error } = await client.from("service_requests").update({ status: tr.querySelector(".rq-status").value, assigned_to: tr.querySelector(".rq-csc").value.trim() || null, updated_at: new Date().toISOString() }).eq("id", id);
      if (error) alert("Not saved: " + error.message); else load();
    } else if (e.target.classList.contains("rq-del")) {
      if (!confirm("Delete this request permanently?")) return;
      const { error } = await client.from("service_requests").delete().eq("id", id);
      if (error) alert("Not deleted: " + error.message); else load();
    }
  });
  filter.addEventListener("change", render);
  document.getElementById("rq-refresh").addEventListener("click", load);
  load();
});
