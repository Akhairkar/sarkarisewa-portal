// admin-csc.js
// CSC claims: verify pending claims, approve (the public profile is live at
// once: csc-centre.html?id=<application id>), and see how many visitors
// contacted each listed centre (csc_leads) and what operators reported back
// (csc_feedback). All user-submitted text is escaped before it is shown.

document.addEventListener("DOMContentLoaded", async () => {
  const pendingList = document.getElementById("csc-pending-list");
  const approvedList = document.getElementById("csc-approved-list");
  const feedbackList = document.getElementById("csc-feedback-list");
  const refreshBtn = document.getElementById("csc-refresh-btn");
  if (!pendingList || !approvedList) return;

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const digits = (s) => { const d = String(s || "").replace(/\D/g, ""); return d.length > 10 ? d.slice(-10) : d; };
  const day = (d) => (d ? new Date(d).toLocaleDateString("en-IN") : "");
  const list = (v) => (Array.isArray(v) ? v : []);
  let byId = {};

  // Admin messages go from the SarkariSewa India WhatsApp Business account:
  // on Android the link opens WhatsApp Business directly (package
  // com.whatsapp.w4b); elsewhere wa.me opens whichever WhatsApp is set up.
  const isAndroid = /Android/i.test(navigator.userAgent);
  const waLink = (mobile, text) => isAndroid
    ? `intent://send/?phone=91${mobile}&text=${text}#Intent;scheme=whatsapp;package=com.whatsapp.w4b;S.browser_fallback_url=${encodeURIComponent(`https://wa.me/91${mobile}?text=${text}`)};end`
    : `https://wa.me/91${mobile}?text=${text}`;

  async function loadCSCData() {
    pendingList.innerHTML = '<tr><td colspan="6" style="text-align:center;">Loading...</td></tr>';
    approvedList.innerHTML = '<tr><td colspan="6" style="text-align:center;">Loading...</td></tr>';
    try {
      if (typeof getSupabaseClient !== "function") throw new Error("Supabase client not available.");
      const client = await getSupabaseClient();
      if (!client) throw new Error("Could not initialize Supabase.");

      const [claims, leads, feedback] = await Promise.all([
        client.from("csc_claims").select("*").order("submitted_at", { ascending: false }),
        client.from("csc_leads").select("application_id,action,created_at").order("created_at", { ascending: false }).limit(5000),
        client.from("csc_feedback").select("*").order("created_at", { ascending: false }).limit(200),
      ]);
      if (claims.error) throw claims.error;

      byId = {};
      claims.data.forEach((c) => { byId[c.id] = c; });
      const since = Date.now() - 30 * 864e5;
      const stats = {};
      (leads.data || []).forEach((l) => {
        const s = (stats[l.application_id] ||= { call: 0, whatsapp: 0, map: 0, profile: 0, recent: 0 });
        s[l.action] = (s[l.action] || 0) + 1;
        if (new Date(l.created_at).getTime() > since && l.action !== "profile") s.recent++;
      });

      renderPending(claims.data.filter((c) => c.status === "pending" || c.status === "changes_requested"));
      renderApproved(claims.data.filter((c) => c.status === "approved"), stats);
      renderFeedback(feedback.data || [], claims.data);
    } catch (err) {
      console.error("Error loading CSC data:", err);
      pendingList.innerHTML = `<tr><td colspan="6" style="text-align:center; color:red;">Failed to load: ${esc(err.message)}</td></tr>`;
      approvedList.innerHTML = '<tr><td colspan="6" style="text-align:center; color:red;">Failed to load</td></tr>';
    }
  }

  function verifyLink(c) {
    const m = digits(c.owner_mobile);
    if (!m) return "";
    const text = encodeURIComponent(`नमस्ते ${c.owner_name}, SarkariSewa India से बात कर रहे हैं। आपने "${c.centre_name}" को हमारी साइट पर फ्री में जोड़ने का आवेदन (${c.application_id}) भेजा है। जांच के लिए कृपया केंद्र के बोर्ड की एक फोटो और CSC/VLE ID (हो तो) भेजें।`);
    return `<a href="${waLink(m, text)}" target="_blank" rel="noopener">💬 WhatsApp verify</a> · <a href="tel:+91${m}">📞 Call</a>`;
  }

  function renderPending(centers) {
    if (!centers.length) {
      pendingList.innerHTML = '<tr><td colspan="6" style="text-align:center; color:var(--admin-text-muted);">No pending claims.</td></tr>';
      return;
    }
    pendingList.innerHTML = centers.map((c) => {
      const map = c.latitude && c.longitude ? `https://www.google.com/maps?q=${c.latitude},${c.longitude}` : `https://www.google.com/maps/search/${encodeURIComponent(`${c.full_address || ""} ${c.pincode || ""}`)}`;
      const services = list(c.online_services).concat(list(c.offline_services), list(c.custom_services)).join(", ");
      return `<tr>
        <td>${day(c.submitted_at)}</td>
        <td style="font-weight:600;">${esc(c.centre_name)}<br><small>${esc(c.centre_type)}${c.years_of_operation != null ? ` · ${esc(c.years_of_operation)} yrs` : ""}${c.csc_id ? `<br>CSC ID: <code>${esc(c.csc_id)}</code>` : '<br><span style="color:#f59e0b">No CSC ID</span>'}</small></td>
        <td><code>${esc(c.application_id)}</code></td>
        <td>${esc(c.full_address)}<br><small>${esc([c.city, c.district, c.state, c.pincode].filter(Boolean).join(", "))}</small><br><a href="${map}" target="_blank" rel="noopener">Map ↗</a>${services ? `<br><small>${esc(services)}</small>` : ""}</td>
        <td>${esc(c.owner_name)}<br><code>${esc(c.owner_mobile)}</code><br>${verifyLink(c)}<br><small>Public: ${esc(c.public_phone || "-")} / WA ${esc(c.public_whatsapp || "-")}</small></td>
        <td>
          <button class="theme-toggle-btn" style="background:#10b981; color:#fff; border:none;" onclick="approveCSC('${esc(c.id)}')">Approve</button>
          <button class="logout-btn" style="margin-left:8px;" onclick="rejectCSC('${esc(c.id)}')">Reject</button>
        </td>
      </tr>`;
    }).join("");
  }

  function renderApproved(centers, stats) {
    if (!centers.length) {
      approvedList.innerHTML = '<tr><td colspan="6" style="text-align:center; color:var(--admin-text-muted);">No approved profiles yet.</td></tr>';
      return;
    }
    approvedList.innerHTML = centers.map((c) => {
      const s = stats[c.application_id] || { call: 0, whatsapp: 0, map: 0, profile: 0, recent: 0 };
      const url = c.profile_url || `csc-centre.html?id=${encodeURIComponent(c.application_id)}`;
      return `<tr>
        <td>${day(c.approved_at || c.submitted_at)}</td>
        <td style="font-weight:600;">${esc(c.centre_name)}<br><small>${esc(c.owner_name)} · <code>${esc(c.owner_mobile)}</code></small></td>
        <td><code>${esc(c.application_id)}</code></td>
        <td>${esc([c.city, c.district].filter(Boolean).join(", "))}<br><a href="../${esc(url)}" target="_blank" style="font-size:0.85rem; color:#10b981;">View Live Page</a></td>
        <td><strong>${s.recent}</strong> in 30 days<br><small>📞 ${s.call} · 💬 ${s.whatsapp} · 🗺️ ${s.map} · 👁 ${s.profile} views</small></td>
        <td>
          <button class="theme-toggle-btn" style="background:#3b82f6; color:#fff; border:none; margin-bottom:4px;" onclick="shareProfile('${esc(c.id)}')">💬 Send link</button><br>
          <button class="logout-btn" onclick="rejectCSC('${esc(c.id)}')">Revoke</button>
        </td>
      </tr>`;
    }).join("");
  }

  function renderFeedback(rows, claims) {
    if (!feedbackList) return;
    if (!rows.length) {
      feedbackList.innerHTML = '<tr><td colspan="5" style="text-align:center; color:var(--admin-text-muted);">No reports from operators yet.</td></tr>';
      return;
    }
    const byApp = {};
    claims.forEach((c) => { byApp[c.application_id] = c; });
    feedbackList.innerHTML = rows.map((f) => {
      const c = byApp[f.application_id];
      const match = c && digits(c.owner_mobile) === digits(f.mobile);
      return `<tr>
        <td>${day(f.created_at)}</td>
        <td>${c ? esc(c.centre_name) : "?"}<br><code>${esc(f.application_id)}</code></td>
        <td><code>${esc(f.mobile)}</code><br><small style="color:${match ? "#10b981" : "#ef4444"}">${match ? "✓ matches owner" : "✗ not owner mobile"}</small></td>
        <td><strong>${f.customers ?? "-"}</strong></td>
        <td>${esc(f.message || "")}</td>
      </tr>`;
    }).join("");
  }

  // Send the operator their live page on WhatsApp.
  window.shareProfile = (id) => {
    const c = byId[id];
    if (!c) return;
    const url = "https://sarkarisewaindia.com/" + (c.profile_url || `csc-centre.html?id=${encodeURIComponent(c.application_id)}`);
    const text = encodeURIComponent(`नमस्ते ${c.owner_name}, आपका केंद्र "${c.centre_name}" SarkariSewa India पर सत्यापित होकर लाइव है (फ्री): ${url}\nहमारी साइट से आने वाले ग्राहक WhatsApp पर "SarkariSewa India पर देखा" लिखकर आएंगे। ग्राहक मिलें तो इसी पेज पर "भेजें" फॉर्म से हमें बताएं।`);
    window.open(waLink(digits(c.owner_mobile), text), "_blank", "noopener");
  };

  window.approveCSC = async (id) => {
    const c = byId[id];
    if (!c || !confirm(`Approve "${c.centre_name}"? Make sure you have spoken to the owner first.`)) return;
    try {
      const client = await getSupabaseClient();
      const now = new Date().toISOString();
      const { error } = await client
        .from("csc_claims")
        .update({ status: "approved", approved_at: now, reviewed_at: now, profile_url: `csc-centre.html?id=${encodeURIComponent(c.application_id)}`, profile_generated_at: now })
        .eq("id", id);
      if (error) throw error;
      loadCSCData();
    } catch (err) {
      alert("Error approving: " + err.message);
    }
  };

  window.rejectCSC = async (id) => {
    const reason = prompt("Enter rejection/revocation reason:");
    if (reason === null) return;
    try {
      const client = await getSupabaseClient();
      const { error } = await client
        .from("csc_claims")
        .update({ status: "rejected", rejection_reason: reason, reviewed_at: new Date().toISOString() })
        .eq("id", id);
      if (error) throw error;
      loadCSCData();
    } catch (err) {
      alert("Error rejecting: " + err.message);
    }
  };

  refreshBtn.addEventListener("click", loadCSCData);
  loadCSCData();
});
