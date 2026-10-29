// admin-sahayak.js
// Seva Sahayak: approve or reject helpers (sahayak_providers), see how many
// visitors contacted each approved helper and the help requests
// (sahayak_leads), and the CSC "was it open?" votes (csc_status_votes).
// All user-submitted text is escaped before it is shown.

document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);
  const pending = $("sh-pending"), approved = $("sh-approved"), requests = $("sh-requests"), votes = $("sh-votes");
  if (!pending) return;

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const day = (d) => (d ? new Date(d).toLocaleDateString("en-IN") : "");
  const empty = (el, cols, text) => { el.innerHTML = `<tr><td colspan="${cols}" style="text-align:center; color:var(--admin-text-muted);">${text}</td></tr>`; };
  const isAndroid = /Android/i.test(navigator.userAgent);
  const wa = (mobile, text) => {
    const t = encodeURIComponent(text);
    return isAndroid
      ? `intent://send/?phone=91${mobile}&text=${t}#Intent;scheme=whatsapp;package=com.whatsapp.w4b;S.browser_fallback_url=${encodeURIComponent(`https://wa.me/91${mobile}?text=${t}`)};end`
      : `https://wa.me/91${mobile}?text=${t}`;
  };
  const verifyMsg = (p) => `नमस्ते ${p.name} जी, SarkariSewa India से। आपने सेवा सहायक के रूप में जुड़ने का फॉर्म भरा है (${p.district})। पुष्टि के लिए अपनी दुकान/काम की एक फोटो भेज दें। हम कभी OTP या पैसा नहीं मांगते।`;
  const liveMsg = (p) => `नमस्ते ${p.name} जी, आपकी सेवा सहायक लिस्टिंग मंज़ूर हो गई है। अब ${p.district} के लोग आपको SarkariSewa India से कॉल/WhatsApp कर सकेंगे। ग्राहक से OTP न लें और सरकारी फीस सही बताएं।`;

  let client = null;

  async function load() {
    try {
      if (!client) client = await getSupabaseClient();
      const [prov, leads, vt] = await Promise.all([
        client.from("sahayak_providers").select("*").order("created_at", { ascending: false }).limit(500),
        client.from("sahayak_leads").select("*").order("created_at", { ascending: false }).limit(500),
        client.from("csc_status_votes").select("centre_key,vote,created_at").order("created_at", { ascending: false }).limit(2000),
      ]);
      if (prov.error) throw prov.error;
      const rows = prov.data || [];
      const leadRows = leads.data || [];
      const contacts = {};
      leadRows.filter((l) => l.provider_id).forEach((l) => { (contacts[l.provider_id] ??= { call: 0, whatsapp: 0 })[l.kind] = ((contacts[l.provider_id] || {})[l.kind] || 0) + 1; });

      const pend = rows.filter((p) => p.status === "pending");
      if (!pend.length) empty(pending, 7, "No pending helpers.");
      else pending.innerHTML = pend.map((p) => `<tr>
        <td>${day(p.created_at)}</td>
        <td><strong>${esc(p.business_name || p.name)}</strong><br><small>${esc(p.name)}${p.experience_years ? ` · ${esc(p.experience_years)} yrs` : ""}</small>${p.about ? `<br><small>${esc(p.about)}</small>` : ""}</td>
        <td>${esc(p.phone)}${p.whatsapp && p.whatsapp !== p.phone ? `<br><small>WA ${esc(p.whatsapp)}</small>` : ""}<br><a href="${wa(p.whatsapp || p.phone, verifyMsg(p))}" target="_blank" rel="noopener">WhatsApp to verify</a></td>
        <td>${esc(p.district)}, ${esc(p.state)}${p.area ? `<br><small>${esc(p.area)}</small>` : ""}</td>
        <td><small>${esc((p.services || []).join(", "))}</small></td>
        <td>${p.meets_in_person ? "🤝 meets" : ""}${p.online_work ? " 💻 online" : ""}</td>
        <td><button class="theme-toggle-btn" data-act="approved" data-id="${esc(p.id)}">Approve</button> <button class="theme-toggle-btn" data-act="rejected" data-id="${esc(p.id)}">Reject</button></td>
      </tr>`).join("");

      const live = rows.filter((p) => p.status === "approved");
      if (!live.length) empty(approved, 6, "No approved helpers yet.");
      else approved.innerHTML = live.map((p) => {
        const c = contacts[p.id] || {};
        return `<tr><td>${day(p.approved_at)}</td><td><strong>${esc(p.business_name || p.name)}</strong></td><td>${esc(p.phone)}<br><a href="${wa(p.whatsapp || p.phone, liveMsg(p))}" target="_blank" rel="noopener">Send "you are live"</a></td>
          <td>${esc(p.district)}, ${esc(p.state)}</td><td>📞 ${c.call || 0} · WhatsApp ${c.whatsapp || 0}</td>
          <td><button class="theme-toggle-btn" data-act="rejected" data-id="${esc(p.id)}">Remove</button></td></tr>`;
      }).join("");

      const reqs = leadRows.filter((l) => l.kind === "request");
      const helpersIn = (l) => live.filter((p) => p.state === l.state && p.district.toLowerCase() === String(l.district || "").toLowerCase()).length;
      if (!reqs.length) empty(requests, 6, "No help requests yet.");
      else requests.innerHTML = reqs.map((l) => `<tr><td>${day(l.created_at)}</td><td>${esc(l.state)} / ${esc(l.district)}<br><small>${esc(l.service)}</small></td><td>${esc(l.name)}</td>
        <td>${esc(l.phone)}</td><td>${esc(l.message)}</td><td>${helpersIn(l)}</td></tr>`).join("");

      const agg = {};
      (vt.data || []).forEach((v) => { const a = (agg[v.centre_key] ??= { up: 0, down: 0, last: v.created_at }); if (v.vote > 0) a.up++; else a.down++; });
      const keys = Object.keys(agg);
      if (!keys.length) empty(votes, 4, "No votes yet.");
      else votes.innerHTML = keys.slice(0, 300).map((k) => `<tr><td>${esc(k)}</td><td>${agg[k].up}</td><td>${agg[k].down}</td><td>${day(agg[k].last)}</td></tr>`).join("");
    } catch (e) {
      empty(pending, 7, "Could not load: " + esc(e.message || e));
    }
  }

  document.addEventListener("click", async (e) => {
    const b = e.target.closest("button[data-act]");
    if (!b) return;
    const status = b.dataset.act;
    if (status === "rejected" && !confirm("Remove / reject this helper?")) return;
    b.disabled = true;
    const patch = { status, approved_at: status === "approved" ? new Date().toISOString() : null };
    const { error } = await client.from("sahayak_providers").update(patch).eq("id", b.dataset.id);
    if (error) { alert("Could not update: " + error.message); b.disabled = false; return; }
    load();
  });
  $("sh-refresh").addEventListener("click", load);
  load();
});
