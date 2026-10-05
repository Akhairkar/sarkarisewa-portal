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
  // Live pages per application id, from the last site build (/csc-centre/listings.json).
  let listed = {};
  const SITE = "https://sarkarisewaindia.com";
  const LISTED_AFTER = 6 * 3600 * 1000;

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

      listed = await fetch("/csc-centre/listings.json?t=" + Date.now()).then((r) => (r.ok ? r.json() : { rows: [] })).then((j) => Object.fromEntries((j.rows || []).map((x) => [x.id, x]))).catch(() => ({}));
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
    const text = encodeURIComponent([
      `नमस्ते ${c.owner_name} जी,`,
      "मैं SarkariSewa India (sarkarisewaindia.com) से बात कर रहा हूं।",
      `आपने अपना केंद्र "${c.centre_name}" हमारी वेबसाइट पर फ्री लिस्टिंग के लिए भेजा है। आवेदन नंबर: ${c.application_id}`,
      "जांच के लिए कृपया ये भेजें:",
      "",
      "1. केंद्र के बोर्ड की एक फोटो, जिसमें केंद्र का नाम दिखे",
      "2. CSC ID / VLE ID या कोई प्रमाण (जैसे CSC सर्टिफिकेट या पोर्टल का स्क्रीनशॉट), अगर हो तो",
      '3. केंद्र की Google Maps लोकेशन (WhatsApp पर "Location" भेज दें)',
      "",
      'जांच के बाद आपका केंद्र आपके ज़िले के CSC पेज पर "✓ सत्यापित केंद्र" में सबसे ऊपर दिखेगा, कॉल और WhatsApp बटन के साथ।',
      "यह सेवा अभी पूरी तरह फ्री है। हम कभी कोई OTP, पासवर्ड या पैसा नहीं मांगते।",
      "धन्यवाद,",
      "टीम SarkariSewa India",
    ].join("\n"));
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
      const L = listed[c.application_id];
      return `<tr>
        <td>${day(c.approved_at || c.submitted_at)}</td>
        <td style="font-weight:600;">${esc(c.centre_name)}<br><small>${esc(c.owner_name)} · <code>${esc(c.owner_mobile)}</code></small></td>
        <td><code>${esc(c.application_id)}</code></td>
        <td>${esc([c.city, c.district].filter(Boolean).join(", "))}<br><a href="${esc(L ? L.page : "../" + url)}" target="_blank" style="font-size:0.85rem; color:#10b981;">View Live Page</a><br>${listedInfo(c, L)}${c.photo_url ? `<br><a href="${esc(c.photo_url)}" target="_blank" rel="noopener"><img src="${esc(c.photo_url)}" alt="" style="width:90px;height:60px;object-fit:cover;border-radius:6px;margin-top:4px"></a> <button class="logout-btn" style="font-size:0.75rem" onclick="removePhoto('${esc(c.id)}')">Remove photo</button>` : ""}</td>
        <td><strong>${s.recent}</strong> in 30 days<br><small>📞 ${s.call} · 💬 ${s.whatsapp} · 🗺️ ${s.map} · 👁 ${s.profile} views</small></td>
        <td>
          <button class="theme-toggle-btn" style="background:#3b82f6; color:#fff; border:none; margin-bottom:4px;" onclick="shareProfile('${esc(c.id)}')">💬 Send link${c.edit_code_hash ? "" : " + password"}</button><br>
          ${listedButton(c, L)}
          <button class="theme-toggle-btn" style="margin-bottom:4px;" onclick="sharePage('${esc(c.id)}')">📤 Share page</button>
          <button class="theme-toggle-btn" style="margin-bottom:4px;" onclick="copyPage('${esc(c.id)}')">📋 Copy link</button><br>
          <button class="theme-toggle-btn" style="margin-bottom:4px;" onclick="resetPassword('${esc(c.id)}')">🔑 New password</button>
          <small style="display:block;margin-bottom:4px;color:var(--admin-text-muted)">${c.edit_code_hash ? "Password set" : "No password yet"}</small>
          <button class="logout-btn" onclick="rejectCSC('${esc(c.id)}')">Revoke</button>
        </td>
      </tr>`;
    }).join("");
  }

  // Where the centre shows on the site (own page, district page, sitemap).
  // Public pages that show the centre, with what each one does for the owner.
  function listedPages(L) {
    if (!L) return [];
    const ja = L.kind === "ja";
    const out = [{ name: "आपका अपना पेज", why: "आपकी सेवाएं, समय, फोटो, नक्शा, कॉल और WhatsApp बटन; Google पर आपके केंद्र के नाम से खोजने वालों को यही मिलेगा", href: SITE + L.page }];
    if (L.district) out.push({ name: `${L.district.name} ज़िले के ${ja ? "जन औषधि" : "CSC"} पेज पर सबसे ऊपर`, why: `ज़िले में ${ja ? "जन औषधि केंद्र" : "CSC / जन सेवा केंद्र"} खोजने वाले हर व्यक्ति को सबसे पहले आपका "✓ सत्यापित" केंद्र दिखेगा`, href: SITE + L.district.href });
    if (L.state) out.push({ name: `${L.state.name} के ${ja ? "जन औषधि" : "CSC"} पेज पर "सत्यापित केंद्र" में`, why: "पूरे राज्य के पेज पर भी आपका केंद्र दिखेगा", href: SITE + L.state.href });
    return out;
  }
  // WhatsApp lines: numbered pages with links and benefits.
  function placementLines(c, L) {
    const pages = listedPages(L);
    if (!pages.length) return ["आपका पेज और ज़िले के पेज पर लिस्टिंग अगले कुछ घंटों में तैयार हो जाएगी, हम लिंक भेज देंगे।"];
    const top = pages.filter((p) => /सबसे ऊपर/.test(p.name)).length;
    return [
      `📍 आपका केंद्र अभी SarkariSewa India के *${pages.length} पब्लिक पेज* पर लाइव है${top ? ` (${top} पर सबसे ऊपर)` : ""}:`,
      "",
      ...pages.flatMap((p, i) => [`*${i + 1}. ${p.name}*`, p.why, p.href, ""]),
      "✅ आपका पेज Google के sitemap में जोड़ दिया गया है; कुछ दिनों में Google पर भी दिखने लगेगा।",
      "",
      "*इससे आपको क्या फायदा:*",
      "• पास के लोग सीधे आपको कॉल/WhatsApp करेंगे, बीच में कोई नहीं",
      "• \"✓ सत्यापित\" बैज से ग्राहक भरोसा करते हैं",
      "• 24 घंटे ऑनलाइन, दुकान बंद हो तब भी लोग आपका नंबर और सेवाएं देख सकते हैं",
      "• यह अभी पूरी तरह फ्री है",
      "",
      "👉 ऊपर के सभी लिंक एक बार खोलकर देख लें कि जानकारी सही है।",
    ];
  }
  function listedInfo(c, L) {
    if (!L) return '<small style="color:#f59e0b">⏳ Own page not built yet (site rebuilds every 3 hours)</small>';
    const n = listedPages(L).length;
    return `<small style="color:#10b981">✓ Listed on ${n} page${n > 1 ? "s" : ""}${L.district ? ` (own + ${esc(L.district.name)} district${L.state ? " + state" : ""})` : " (own page)"} + sitemap / Google</small>`;
  }
  function listedButton(c, L) {
    const due = new Date(c.approved_at || 0).getTime() + LISTED_AFTER;
    const sent = c.admin_notes && /\[listed-msg\]/.test(c.admin_notes);
    if (!L) return '<small style="display:block;margin-bottom:4px;color:var(--admin-text-muted)">📣 Listing message: after the page is built</small>';
    if (Date.now() < due) return `<small style="display:block;margin-bottom:4px;color:var(--admin-text-muted)">📣 Listing message from ${new Date(due).toLocaleString("en-IN", { hour: "2-digit", minute: "2-digit", day: "numeric", month: "short" })}</small>`;
    return `<button class="theme-toggle-btn" style="background:${sent ? "#64748b" : "#f59e0b"}; color:#fff; border:none; margin-bottom:4px;" onclick="sendListed('${esc(c.id)}')">📣 Listing message${sent ? " (sent)" : ""}</button><br>`;
  }

  // "Your centre is listed" message, about 6 hours after approval when the
  // pages are built and in the sitemap.
  window.sendListed = async (id) => {
    const c = byId[id], L = c && listed[c.application_id];
    if (!c || !L) return;
    const lines = [
      `नमस्ते ${c.owner_name} जी 🙏`,
      "",
      `खुशखबरी! आपका केंद्र *${c.centre_name}* अब SarkariSewa India पर लाइव है।`,
      "",
      ...placementLines(c, L),
      "",
      "*ज़्यादा ग्राहकों के लिए 3 आसान काम:*",
      "1. अपना पेज WhatsApp स्टेटस और ग्रुप में शेयर करें (पेज पर \"शेयर\" बटन है)।",
      "2. अपने केंद्र की एक साफ फोटो लगाएं और सारी सेवाएं चुनें; वहीं आपको दिखेगा कि कितने लोगों ने पेज देखा और कॉल/WhatsApp किया:",
      `${SITE}/csc-edit.html?id=${encodeURIComponent(c.application_id)}`,
      "3. ग्राहक \"SarkariSewa India पर देखा\" लिखकर आएं तो उसी पेज पर हमें बताएं।",
      "",
      "कोई सवाल हो तो इसी नंबर पर लिखें।",
      "धन्यवाद,",
      "टीम SarkariSewa India",
    ];
    const link = waLink(digits(c.owner_mobile), encodeURIComponent(lines.join("\n")));
    window.open(link, "_blank") || (window.location.href = link);
    try {
      const client = await getSupabaseClient();
      await client.from("csc_claims").update({ admin_notes: `${c.admin_notes ? c.admin_notes + "\n" : ""}[listed-msg] ${new Date().toISOString()}` }).eq("id", id);
      loadCSCData();
    } catch (e) { /* the message itself was opened; marking is best effort */ }
  };

  // Owner photos go live at once; remove one that is not a real centre photo.
  window.removePhoto = async (id) => {
    if (!confirm("Remove this photo from the centre page?")) return;
    const client = await getSupabaseClient();
    const { error } = await client.from("csc_claims").update({ photo_url: null, updated_at: new Date().toISOString() }).eq("id", id);
    if (error) alert("Could not remove: " + error.message); else loadCSCData();
  };

  const pageUrl = (c) => (listed[c.application_id] ? SITE + listed[c.application_id].page : `${SITE}/${c.profile_url || `csc-centre.html?id=${encodeURIComponent(c.application_id)}`}`);
  window.sharePage = (id) => {
    const c = byId[id];
    if (!c) return;
    const url = pageUrl(c);
    const text = `${c.centre_name} (${[c.city, c.district].filter(Boolean).join(", ")}): सरकारी ऑनलाइन सेवाएं, समय और संपर्क`;
    if (navigator.share) { navigator.share({ title: c.centre_name, text, url }).catch(() => {}); return; }
    window.open(`https://wa.me/?text=${encodeURIComponent(text + "\n" + url)}`, "_blank");
  };
  window.copyPage = (id) => {
    const c = byId[id];
    if (!c) return;
    const url = pageUrl(c);
    (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(() => alert("Copied: " + url), () => prompt("Copy:", url));
  };

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

  // New owner password: 8 easy-to-read characters; only its SHA-256 is stored.
  const newCode = () => {
    const abc = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
    const r = crypto.getRandomValues(new Uint32Array(8));
    return Array.from(r, (n) => abc[n % abc.length]).join("");
  };
  const sha256 = async (t) => Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t))), (b) => b.toString(16).padStart(2, "0")).join("");

  // Send the operator their live page and edit page on WhatsApp. A password
  // is made only the first time (or when admin presses "New password"); after
  // that the same password keeps working, so the owner is not confused.
  async function sendLinks(id, resetPassword) {
    const c = byId[id];
    if (!c) return;
    const makeCode = resetPassword || !c.edit_code_hash;
    if (resetPassword && !confirm(`Make a NEW password for ${c.owner_name}? The old password will stop working.`)) return;
    const win = window.open("about:blank", "_blank");
    try {
      let code = "";
      if (makeCode) {
        code = newCode();
        const client = await getSupabaseClient();
        const { error } = await client.from("csc_claims").update({ edit_code_hash: await sha256(code) }).eq("id", id);
        if (error) throw error;
        c.edit_code_hash = "set";
      }
      const live = pageUrl(c); // the centre's own page once built, else the live ?id= page
      const edit = `https://sarkarisewaindia.com/csc-edit.html?id=${encodeURIComponent(c.application_id)}`;
      const lines = resetPassword
        ? [`नमस्ते ${c.owner_name} जी,`, `आपके केंद्र "${c.centre_name}" का नया पासवर्ड: ${code}`, "पुराना पासवर्ड अब काम नहीं करेगा।", `जानकारी बदलने का पेज: ${edit}`, `आवेदन नंबर: ${c.application_id}`, "(पासवर्ड किसी से साझा न करें)", "टीम SarkariSewa India"]
        : [
          `नमस्ते ${c.owner_name} जी,`,
          `बधाई हो! आपका केंद्र "${c.centre_name}" SarkariSewa India पर सत्यापित होकर लाइव है (फ्री)।`,
          "",
          ...(listed[c.application_id] ? placementLines(c, listed[c.application_id]) : ["आपका पेज:", live, "(ज़िले के पेज पर लिस्टिंग अगले कुछ घंटों में दिखेगी)"]),
          "",
          "अपनी सेवाएं, समय और संपर्क आप खुद बदल सकते हैं, कोई कोडिंग नहीं, बस बटन दबाकर:",
          edit,
          `आवेदन नंबर: ${c.application_id}`,
          "मोबाइल: वही जो फॉर्म में दिया था",
          makeCode ? `पासवर्ड: ${code}` : "पासवर्ड: वही जो पहले भेजा था (भूल गए हों तो बताएं, नया भेज देंगे)",
          "(पासवर्ड किसी से साझा न करें, इसे संभालकर रखें)",
          "",
          'हमारी साइट से आने वाले ग्राहक WhatsApp पर "SarkariSewa India पर देखा" लिखकर आएंगे। ग्राहक मिलें तो ऊपर वाले पेज पर हमें बताएं।',
          "धन्यवाद,",
          "टीम SarkariSewa India",
        ];
      const link = waLink(digits(c.owner_mobile), encodeURIComponent(lines.join("\n")));
      if (win) win.location.href = link; else window.location.href = link;
      loadCSCData();
    } catch (err) {
      if (win) win.close();
      alert("Could not send: " + err.message);
    }
  }
  window.shareProfile = (id) => sendLinks(id, false);
  window.resetPassword = (id) => sendLinks(id, true);

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
