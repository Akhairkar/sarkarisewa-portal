// admin-requests.js
// "Get it done at home through a verified CSC" requests (service_requests)
// and the yes/no demand counts (service_interest).
// Hand-off to a verified CSC happens through the admin's own WhatsApp in
// three steps, each recorded on the request:
//   1. tell the suggested centre about the task and the rules, WITHOUT the
//      customer's number, and ask it to reply "हाँ";
//   2. once it agrees, send it the customer's name and number;
//   3. tell the customer which centre will call and what to watch out for.
// Info-only requests (consent "v4-info-*", states without a verified CSC)
// get their own table with a WhatsApp "send the details" button and are
// never offered to a CSC: that consent covers only sending information.
// Answers from the demand box (DemandBox.astro, consent "v5-demand-*") are a
// survey for a service not started yet: shown in their own table, kept out
// of the lead list and never offered to a CSC.
// The "demand without a verified CSC" table is admin-only, for inviting
// centres in those districts to claim their listing.
document.addEventListener("DOMContentLoaded", async () => {
  const client = await adminGuard();
  const esc = adminEsc;
  const list = document.getElementById("rq-list"), stats = document.getElementById("rq-stats"), filter = document.getElementById("rq-filter");
  const STATUS = ["new", "contacted", "assigned", "done", "cancelled", "spam"];
  const FEEDBACK = [["", "— feedback —"], ["good", "👍 काम हुआ"], ["complaint", "👎 शिकायत"], ["no_response", "📵 जवाब नहीं"]];
  const OPEN = ["new", "contacted", "assigned"];
  // Requests carry the Hindi state name from the guide; claims are in English.
  const STATE_EN = { "आंध्र प्रदेश": "Andhra Pradesh", "अरुणाचल प्रदेश": "Arunachal Pradesh", "असम": "Assam", "बिहार": "Bihar", "छत्तीसगढ़": "Chhattisgarh", "गोवा": "Goa", "गुजरात": "Gujarat", "हरियाणा": "Haryana", "हिमाचल प्रदेश": "Himachal Pradesh", "झारखंड": "Jharkhand", "कर्नाटक": "Karnataka", "केरल": "Kerala", "मध्य प्रदेश": "Madhya Pradesh", "महाराष्ट्र": "Maharashtra", "मणिपुर": "Manipur", "मेघालय": "Meghalaya", "मिज़ोरम": "Mizoram", "नागालैंड": "Nagaland", "ओडिशा": "Odisha", "पंजाब": "Punjab", "राजस्थान": "Rajasthan", "सिक्किम": "Sikkim", "तमिलनाडु": "Tamil Nadu", "तेलंगाना": "Telangana", "त्रिपुरा": "Tripura", "उत्तर प्रदेश": "Uttar Pradesh", "उत्तराखंड": "Uttarakhand", "पश्चिम बंगाल": "West Bengal", "अंडमान-निकोबार": "Andaman & Nicobar", "चंडीगढ़": "Chandigarh", "दादरा नगर हवेली, दमन-दीव": "Dadra & Nagar Haveli and Daman & Diu", "दिल्ली": "Delhi", "जम्मू-कश्मीर": "Jammu & Kashmir", "लद्दाख": "Ladakh", "लक्षद्वीप": "Lakshadweep", "पुडुचेरी": "Puducherry" };
  const norm = (s) => String(s || "").toLowerCase().replace(/district|जिला|ज़िला|&|and|[^a-zऀ-ॿ]/g, "");
  const ten = (s) => String(s || "").replace(/\D/g, "").slice(-10);
  // Send from the WhatsApp Business app (the admin's business number): on
  // Android an intent opens com.whatsapp.w4b directly (falls back to wa.me if
  // it is not installed); elsewhere wa.me opens WhatsApp / WhatsApp Web.
  const ANDROID = /Android/i.test(navigator.userAgent);
  const wa = (phone, text) => {
    const web = `https://wa.me/91${ten(phone)}?text=${encodeURIComponent(text)}`;
    return ANDROID ? `intent://send/?phone=91${ten(phone)}&text=${encodeURIComponent(text)}#Intent;scheme=whatsapp;package=com.whatsapp.w4b;S.browser_fallback_url=${encodeURIComponent(web)};end` : web;
  };
  // An intent must load in the current tab; a new tab would stay blank.
  const openWa = (url) => { if (ANDROID) location.href = url; else window.open(url, "_blank"); };
  const slugify = (s) => String(s || "").toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
  const profileUrl = (c) => "https://sarkarisewaindia.com/csc-centre/" + [slugify(c.centre_name), slugify(c.district), (String(c.application_id || "").match(/\d{4,}$/) || [slugify(c.application_id)])[0]].filter(Boolean).join("-") + ".html";
  const when = (t) => (t ? new Date(t).toLocaleString("en-IN", { dateStyle: "short", timeStyle: "short" }) : "");
  const card = (label, value) => `<div class="dash-card" style="margin:0;"><div style="font-size:.8rem;opacity:.75">${label}</div><div style="font-size:1.6rem;font-weight:800">${value}</div></div>`;
  let rows = [], centres = [], resp = {}, infoRows = [];
  // How each centre answered offers: replied = said yes (② sent),
  // skipped = no reply or said no, so the offer went to the next centre.
  function tally() {
    resp = {};
    const t = (id) => (resp[id] = resp[id] || { replied: 0, skipped: 0 });
    rows.forEach((r) => {
      (r.skipped_claim_ids || []).forEach((id) => t(id).skipped++);
      if (r.csc_claim_id && r.csc_accepted_at) t(r.csc_claim_id).replied++;
    });
  }
  const rate = (c) => { const x = resp[c.id]; return x && x.replied + x.skipped ? x.replied / (x.replied + x.skipped) : 0.5; };
  const record = (c) => { const x = resp[c.id]; return x && x.replied + x.skipped ? ` · जवाब ${x.replied}/${x.replied + x.skipped}` : ""; };
  const WAIT_H = 2;

  const stateEn = (r) => STATE_EN[r.state] || r.state || "";
  const sameState = (c, r) => norm(c.state) && norm(c.state) === norm(stateEn(r));
  const sameDistrict = (c, r) => { const a = norm(c.district), b = norm(r.district); return a && b && (a === b || a.includes(b) || b.includes(a)); };
  // Best first: same district, then same state; within those, centres that
  // reply to offers, then home visit or remote work. Centres with leads
  // paused, and those that already let this request go, are left out.
  function suggest(r) {
    const skipped = r.skipped_claim_ids || [];
    return centres
      .filter((c) => c.id === r.csc_claim_id || (!c.leads_paused && !skipped.includes(c.id)))
      .map((c) => ({ c, s: (sameState(c, r) ? 2 : 0) + (sameState(c, r) && sameDistrict(c, r) ? 3 : 0) + rate(c) * 1.5 + (c.home_visit ? 0.25 : 0) + ((c.remote_services || []).length ? 0.25 : 0) }))
      .sort((a, b) => b.s - a.s);
  }
  const label = (c, r) => `${sameState(c, r) && sameDistrict(c, r) ? "✅ " : sameState(c, r) ? "🟡 " : "⚪ "}${c.centre_name} · ${c.district || "?"}, ${String(c.state || "").trim()}${c.home_visit ? " · घर आते हैं" : ""}${(c.remote_services || []).length ? " · ऑनलाइन काम" : ""}${record(c)}`;
  const task = (r) => r.service || "सरकारी काम";
  const place = (r) => [r.district, r.state].filter(Boolean).join(", ") || "ज़िला नहीं बताया";

  // Rules sent with every lead; the same text is shown on the admin page.
  const RULES = [
    "ग्राहक से विनम्रता और धैर्य से बात करें। ज़्यादातर बुज़ुर्ग, मज़दूर और ऐसे लोग हैं जो खुद फॉर्म नहीं भर पाते।",
    "सरकारी फीस जितनी है उतनी ही लें। अपना सेवा शुल्क काम शुरू करने से पहले साफ बताएं, CSC की तय दर से ज़्यादा न लें और हर भुगतान की रसीद दें।",
    "अंगूठा, आँख या लाइव फोटो (बायोमेट्रिक) वाले काम फोन या ऑनलाइन से न करें। ग्राहक को केंद्र पर बुलाएं या घर जाकर उनकी मौजूदगी में अपने रजिस्टर्ड डिवाइस से करें।",
    "बैंक/UPI का OTP, PIN या पासवर्ड कभी न मांगें। आधार OTP सिर्फ़ इसी काम के लिए, ग्राहक को बताकर इस्तेमाल करें।",
    "ग्राहक का नंबर और कागज़ सिर्फ़ इसी काम के लिए हैं। किसी और को न दें, प्रचार के मैसेज न भेजें, काम के बाद कागज़ों की कॉपी न रखें।",
    "गलत या नकली कागज़ से कोई काम न करें। काम न हो सके तो ग्राहक को साफ बताएं।",
    "काम पूरा होने पर या न हो पाने पर हमें इसी नंबर पर बताएं।",
  ];
  document.getElementById("rq-rules").innerHTML = RULES.map((t) => `<li>${esc(t)}</li>`).join("");

  const msgOffer = (r, c) => `नमस्ते ${c.owner_name || ""} जी, SarkariSewa India से।
आपके इलाके से एक नया काम आया है:
• काम: ${task(r)}${r.details ? ` (${r.details})` : ""}
• जगह: ${place(r)}
ग्राहक ने SarkariSewa पर अपना नंबर एक सत्यापित CSC को देने की सहमति दी है।

यह काम लेने के नियम:
${RULES.map((t, i) => `${i + 1}. ${t}`).join("\n")}

ये नियम मंज़ूर हों और आप यह काम कर सकें तो "हाँ" लिखें। तब हम ग्राहक का नाम और नंबर भेजेंगे। ${WAIT_H} घंटे में जवाब न आने पर यह काम किसी और CSC को दे दिया जाएगा।`;

  // One-time invitation to the lead programme for each verified centre.
  const msgJoin = (c) => `नमस्ते ${c.owner_name || ""} जी, SarkariSewa India से। आपका केंद्र "${c.centre_name}" हमारी साइट पर सत्यापित है।
हमारी साइट पर कई लोग (ज़्यादातर बुज़ुर्ग और मज़दूर) घर बैठे CSC से काम करवाना चाहते हैं। आपके इलाके से ऐसा अनुरोध आने पर हम सबसे पहले आपको WhatsApp पर काम बताएंगे। यह अभी आपके लिए मुफ़्त है।

शर्तें: विनम्र व्यवहार, तय फीस से ज़्यादा नहीं, हर भुगतान की रसीद, बायोमेट्रिक काम सिर्फ़ ग्राहक की मौजूदगी में, और ${WAIT_H} घंटे के अंदर जवाब। जो केंद्र जवाब देते हैं, उन्हें आगे ज़्यादा काम मिलेगा।

ऐसे काम लेना चाहते हैं तो "हाँ" लिखें।`;

  const msgLead = (r) => `धन्यवाद! ग्राहक की जानकारी:
• नाम: ${r.name || "नहीं बताया"}
• मोबाइल: ${r.phone}
• जगह: ${place(r)}
• काम: ${task(r)}${r.details ? ` (${r.details})` : ""}

कृपया आज ही संपर्क करें और ऊपर के नियमों का पालन करें। फीस और सेवा शुल्क पहले बताएं, बायोमेट्रिक काम सिर्फ़ ग्राहक की मौजूदगी में करें। काम के बाद हमें बताएं।`;

  // For a request no centre can take yet: what to do meanwhile, no call needed.
  const msgNoCsc = (r) => `नमस्ते${r.name ? ` ${r.name} जी` : ""}, SarkariSewa India से।
आपने ${task(r)} के लिए मदद मांगी थी। अभी आपके इलाके में हमारे साथ कोई सत्यापित CSC नहीं जुड़ा है, इसलिए हम यह काम अभी नहीं करवा पा रहे। माफ़ी चाहते हैं।

आप खुद ऐसे करवा सकते हैं:
• पूरी जानकारी और ज़रूरी कागज़: https://sarkarisewaindia.com${r.page || "/"}
• अपने पास का CSC सेंटर: https://sarkarisewaindia.com/tools/csc-locator.html
• CSC पर सरकारी फीस और सेवा शुल्क पहले पूछें और रसीद लें। बैंक का OTP या PIN किसी को न बताएं।

आपके इलाके में CSC जुड़ते ही हम आपको बताएंगे।
SarkariSewa India एक निजी सेवा है, सरकारी विभाग नहीं।`;

  const msgCustomer = (r, c) => {
    const pub = ten(c.public_whatsapp) || ten(c.public_phone);
    return `नमस्ते${r.name ? ` ${r.name} जी` : ""}, SarkariSewa India से।
आपने ${task(r)} के लिए मदद मांगी थी। आपका काम ${c.centre_name} (${[c.city, c.district].map((s) => String(s || "").trim()).filter(Boolean).join(", ")}) के सत्यापित CSC संचालक ${c.owner_name || ""} करेंगे। वे आपको जल्द फोन/WhatsApp करेंगे।${pub ? `\nउनका नंबर: ${pub}\nकेंद्र की जानकारी: ${profileUrl(c)}` : ""}

ध्यान रखें:
• सरकारी फीस और CSC का सेवा शुल्क काम से पहले पूछ लें, रसीद ज़रूर लें।
• अंगूठा/आँख वाले (बायोमेट्रिक) काम फोन से नहीं होते। इसके लिए आपको केंद्र जाना होगा या संचालक घर आएंगे।
• बैंक का OTP, PIN या पासवर्ड किसी को न बताएं।
• कोई ज़्यादा पैसा मांगे या परेशानी हो तो इसी नंबर पर बताएं।
SarkariSewa India एक निजी सेवा है, सरकारी विभाग नहीं।`;
  };

  // Details for someone who asked only for information (no CSC involved).
  const msgInfo = (r) => `नमस्ते${r.name ? ` ${r.name} जी` : ""}, SarkariSewa India से।
आपने ${task(r)} की जानकारी मांगी थी:
• पूरी जानकारी, ज़रूरी कागज़ और आवेदन का तरीका: https://sarkarisewaindia.com${r.page || "/"}
• अपने पास का CSC सेंटर: https://sarkarisewaindia.com/tools/csc-locator.html
• नई योजनाएं और भर्ती: ${"https://whatsapp.com/channel/0029VbDjAqgEAKWFibyzWr0g"}

CSC पर सरकारी फीस और सेवा शुल्क पहले पूछें और रसीद लें। बैंक का OTP या PIN किसी को न बताएं।
आपके इलाके में भरोसेमंद CSC जुड़ते ही हम बताएंगे।
SarkariSewa India एक निजी सेवा है, सरकारी विभाग नहीं।`;

  function renderInfo() {
    const open = infoRows.filter((r) => OPEN.includes(r.status));
    const el = document.getElementById("rq-info");
    el.innerHTML = open.length ? open.map((r) => `<tr data-id="${r.id}">
        <td>${esc(when(r.created_at))}</td>
        <td><strong>${esc(r.name || "(नाम नहीं दिया)")}</strong><br>${esc(r.phone)}<br><small>${esc(place(r))}</small></td>
        <td>${esc(task(r))}${r.details ? `<br><small>“${esc(String(r.details).replace("[सिर्फ जानकारी] ", ""))}”</small>` : ""}<br><small><a href="${esc(r.page || "#")}" target="_blank">${esc(r.page || "")}</a></small></td>
        <td><button type="button" class="theme-toggle-btn" data-info="send">📲 WhatsApp पर जानकारी भेजें</button>
          <button type="button" class="theme-toggle-btn" data-info="done">✓ भेज दी (done)</button>
          <button type="button" class="logout-btn" data-info="del">Delete</button></td></tr>`).join("") : `<tr><td colspan="4">कोई बाकी नहीं।</td></tr>`;
  }

  document.getElementById("rq-info").addEventListener("click", async (e) => {
    const act = e.target.dataset.info, tr = e.target.closest("tr[data-id]");
    if (!act || !tr) return;
    const r = infoRows.find((x) => x.id === tr.dataset.id);
    if (act === "send") {
      openWa(wa(r.phone, msgInfo(r)));
      await save(r.id, { customer_told_at: new Date().toISOString(), status: "done" });
    } else if (act === "done") {
      await save(r.id, { status: "done" });
    } else if (act === "del") {
      if (!confirm("Delete this request permanently?")) return;
      const { error } = await client.from("service_requests").delete().eq("id", r.id);
      if (error) { alert("Not deleted: " + error.message); return; }
    }
    load();
  });

  // An offer the centre has not answered yet: how long, and a way to move on.
  function waiting(r) {
    if (!r.csc_told_at || r.csc_accepted_at || !OPEN.includes(r.status)) return "";
    const h = (Date.now() - new Date(r.csc_told_at)) / 36e5;
    const late = h >= WAIT_H;
    return `<div class="rq-wait${late ? " late" : ""}">${late ? "⏰" : "⏳"} CSC के जवाब का इंतज़ार: ${h < 1 ? Math.max(1, Math.round(h * 60)) + " मिनट" : Math.floor(h) + " घंटे"}
      <button type="button" class="theme-toggle-btn" data-step="skip">✖ जवाब नहीं / मना किया: अगला CSC</button></div>`;
  }

  // Verified centres: reply record and whether they get leads.
  function renderCentres() {
    document.getElementById("rq-centres").innerHTML = centres.length ? centres.map((c) => {
      const x = resp[c.id] || { replied: 0, skipped: 0 };
      return `<tr data-cid="${c.id}"><td><strong>${esc(c.centre_name)}</strong><br><small>${esc([c.district, String(c.state || "").trim()].filter(Boolean).join(", "))}</small></td>
        <td>${x.replied}</td><td>${x.skipped}</td>
        <td>${c.leads_paused ? "⏸ बंद" : "✅ चालू"}</td>
        <td><a class="theme-toggle-btn" href="${wa(c.public_whatsapp || c.owner_mobile, msgJoin(c))}" target="_blank" rel="noopener">🤝 लीड प्रोग्राम संदेश</a>
          <button type="button" class="theme-toggle-btn rq-pause">${c.leads_paused ? "▶ लीड चालू करें" : "⏸ लीड बंद करें"}</button></td></tr>`;
    }).join("") : `<tr><td colspan="5">अभी कोई verified CSC नहीं।</td></tr>`;
  }

  function render() {
    const f = filter.value;
    const shown = rows.filter((r) => f === "all" || (f === "open" ? OPEN.includes(r.status) : f === "cancelled" ? ["cancelled", "spam"].includes(r.status) : r.status === f));
    list.innerHTML = shown.length ? shown.map((r) => {
      const opts = suggest(r);
      const chosen = r.csc_claim_id || (opts[0] && opts[0].c.id) || "";
      const steps = [r.csc_told_at && `① CSC को बताया ${when(r.csc_told_at)}`, r.csc_accepted_at && `② नंबर भेजा ${when(r.csc_accepted_at)}`, r.customer_told_at && `③ ग्राहक को बताया ${when(r.customer_told_at)}`].filter(Boolean).join("<br>");
      return `<tr data-id="${r.id}">
        <td>${esc(when(r.created_at))}</td>
        <td><strong>${esc(r.name || "(नाम नहीं दिया)")}</strong><br><a href="tel:+91${esc(r.phone)}">${esc(r.phone)}</a><br><small>${esc(place(r))}</small></td>
        <td>${esc(task(r))}${r.details ? `<br><small>“${esc(r.details)}”</small>` : ""}<br><small><a href="${esc(r.page || "#")}" target="_blank">${esc(r.page || "")}</a></small></td>
        <td style="min-width:240px">${centres.length ? `<select class="rq-in rq-csc-pick" style="width:100%">${opts.map(({ c }) => `<option value="${c.id}"${c.id === chosen ? " selected" : ""}>${esc(label(c, r))}</option>`).join("")}</select>
            <div class="rq-steps">
              <button type="button" class="theme-toggle-btn" data-step="offer">① CSC को काम + नियम</button>
              <button type="button" class="theme-toggle-btn" data-step="lead" ${r.csc_told_at ? "" : "disabled title=\"पहले ① भेजें और CSC का 'हाँ' आने दें\""}>② CSC ने हाँ कहा: नंबर भेजें</button>
              <button type="button" class="theme-toggle-btn" data-step="customer" ${r.csc_accepted_at ? "" : "disabled title=\"पहले ② पूरा करें\""}>③ ग्राहक को CSC बताएं</button>
            </div>` : "<small>अभी कोई verified CSC नहीं</small>"}
            <button type="button" class="theme-toggle-btn rq-nocsc" data-step="nocsc" title="बिना कॉल किए ग्राहक को बताएं कि अभी CSC नहीं है और क्या करें">📩 CSC नहीं: ग्राहक को सादा संदेश</button>
            <small class="rq-done">${steps}</small>${waiting(r)}</td>
        <td><select class="rq-in rq-status">${STATUS.map((s) => `<option${s === r.status ? " selected" : ""}>${s}</option>`).join("")}</select>
            <select class="rq-in rq-feedback" style="margin-top:4px">${FEEDBACK.map(([v, t]) => `<option value="${v}"${v === (r.feedback || "") ? " selected" : ""}>${t}</option>`).join("")}</select>
            <input class="rq-in rq-note" placeholder="Note" value="${esc(r.admin_notes || "")}" style="margin-top:4px;width:100%">
            <div style="margin-top:4px"><button class="theme-toggle-btn rq-save" type="button">Save</button> <button class="logout-btn rq-del" type="button">Delete</button></div></td>
      </tr>`;
    }).join("") : `<tr><td colspan="5">No requests here yet.</td></tr>`;
  }

  // Open requests in districts with no verified CSC (admin-only).
  function renderGaps() {
    const gap = {};
    rows.filter((r) => OPEN.includes(r.status)).forEach((r) => {
      if (centres.some((c) => sameState(c, r) && sameDistrict(c, r))) return;
      const k = `${r.state || "?"}|${r.district || "ज़िला नहीं बताया"}`;
      gap[k] = (gap[k] || 0) + 1;
    });
    const top = Object.entries(gap).sort((a, b) => b[1] - a[1]);
    document.getElementById("rq-gaps").innerHTML = top.length ? top.map(([k, n]) => { const [s, d] = k.split("|"); return `<tr><td>${esc(s)}</td><td>${esc(d)}</td><td>${n}</td></tr>`; }).join("") : `<tr><td colspan="3">हर खुली request के ज़िले में verified CSC है।</td></tr>`;
  }

  async function load() {
    const [{ data, error }, { data: cs }] = await Promise.all([
      client.from("service_requests").select("*").order("created_at", { ascending: false }).limit(500),
      client.from("csc_claims").select("id,application_id,centre_name,owner_name,owner_mobile,public_phone,public_whatsapp,city,district,state,home_visit,remote_services,leads_paused").eq("status", "approved"),
    ]);
    if (error) { list.innerHTML = `<tr><td colspan="5">Could not load: ${esc(error.message)}</td></tr>`; return; }
    // Survey answers (demand box, consent v5-demand) are not leads.
    const isSurvey = (x) => String(x.consent_version || "").startsWith("v5-demand");
    const survey = (data || []).filter(isSurvey);
    // Info-only requests (consent v4-info) may not be shared with a CSC.
    const isInfo = (x) => String(x.consent_version || "").startsWith("v4-info");
    infoRows = (data || []).filter(isInfo);
    rows = (data || []).filter((x) => !isSurvey(x) && !isInfo(x));
    renderInfo();
    tally();
    centres = (cs || []).filter((c) => ten(c.public_whatsapp) || ten(c.owner_mobile));
    const since = new Date(Date.now() - 90 * 864e5).toISOString();
    const { data: ints } = await client.from("service_interest").select("page,state,service,choice").gte("created_at", since).limit(20000);
    const SV = "[सर्वे] ", isSvNo = (i) => String(i.service || "").startsWith(SV);
    const svNo = (ints || []).filter(isSvNo);
    const sum = {};
    survey.forEach((x) => {
      const a = (sum[x.service] = sum[x.service] || { paid: 0, cheap: 0, no: 0, places: {} });
      if (/देकर/.test(x.details || "")) a.paid++; else a.cheap++;
      const t = x.district || "—"; a.places[t] = (a.places[t] || 0) + 1;
    });
    svNo.forEach((i) => { const s = i.service.slice(SV.length); (sum[s] = sum[s] || { paid: 0, cheap: 0, no: 0, places: {} }).no++; });
    document.getElementById("sv-sum").innerHTML = Object.keys(sum).length ? Object.entries(sum).map(([s, a]) => `<tr><td>${esc(s)}</td><td><strong>${a.paid}</strong></td><td>${a.cheap}</td><td>${a.no}</td><td><small>${Object.entries(a.places).sort((p, q) => q[1] - p[1]).map(([t, n]) => `${esc(t)} (${n})`).join(", ")}</small></td></tr>`).join("") : `<tr><td colspan="5">अभी कोई जवाब नहीं।</td></tr>`;
    document.getElementById("sv-list").innerHTML = survey.map((x) => `<tr><td>${esc(when(x.created_at))}</td><td>${esc(x.name || "(नाम नहीं)")}<br><a href="tel:+91${esc(x.phone)}">${esc(x.phone)}</a></td><td>${esc(x.service || "")}</td><td>${esc(String(x.details || "").replace("[मांग] ", ""))}</td><td>${esc(x.district || "")}</td></tr>`).join("");
    const intsL = (ints || []).filter((i) => !isSvNo(i));
    const yes = intsL.filter((i) => i.choice === "yes").length, no = intsL.length - yes;
    stats.innerHTML = card("Open requests", rows.filter((r) => OPEN.includes(r.status)).length)
      + card("Done", rows.filter((r) => r.status === "done").length)
      + card("Verified CSCs", centres.length)
      + card("📋 Survey answers", survey.length)
      + card("📲 Info to send", infoRows.filter((r) => OPEN.includes(r.status)).length)
      + card("Said yes (90 days)", yes) + card("Said no (90 days)", no)
      + card("Yes → request", yes ? Math.round((rows.filter((r) => r.created_at >= since).length * 100) / yes) + "%" : "—");
    const agg = {};
    intsL.forEach((i) => { const k = [i.page, i.state, i.service].join("|"); (agg[k] = agg[k] || { ...i, yes: 0, no: 0 })[i.choice]++; });
    const top = Object.values(agg).sort((a, b) => b.yes - a.yes || b.no - a.no).slice(0, 50);
    document.getElementById("rq-interest").innerHTML = top.length ? top.map((a) => `<tr><td><a href="${esc(a.page)}" target="_blank">${esc(a.page)}</a></td><td>${esc(a.state || "")}</td><td>${esc(a.service || "")}</td><td>${a.yes}</td><td>${a.no}</td></tr>`).join("") : `<tr><td colspan="5">No answers yet.</td></tr>`;
    render();
    renderGaps();
    renderCentres();
  }

  async function save(id, patch) {
    const { error } = await client.from("service_requests").update({ ...patch, updated_at: new Date().toISOString() }).eq("id", id);
    if (error) { alert("Not saved: " + error.message); return false; }
    return true;
  }

  list.addEventListener("click", async (e) => {
    const tr = e.target.closest("tr[data-id]");
    if (!tr) return;
    const id = tr.dataset.id, r = rows.find((x) => x.id === id);
    const step = e.target.dataset.step;
    if (step) {
      const pick = tr.querySelector(".rq-csc-pick");
      const c = centres.find((x) => x.id === (pick && pick.value));
      if (!c && step !== "skip" && step !== "nocsc") return;
      const now = new Date().toISOString();
      if (step === "offer") {
        // Open WhatsApp first (a popup must come straight from the click).
        openWa(wa(c.public_whatsapp || c.owner_mobile, msgOffer(r, c)));
        await save(id, { csc_claim_id: c.id, csc_told_at: now, assigned_to: c.centre_name, status: r.status === "new" ? "contacted" : r.status });
      } else if (step === "lead") {
        if (r.csc_claim_id && r.csc_claim_id !== c.id && !confirm("① किसी दूसरे CSC को भेजा था। फिर भी इस CSC को नंबर भेजें?")) return;
        openWa(wa(c.public_whatsapp || c.owner_mobile, msgLead(r)));
        await save(id, { csc_claim_id: c.id, csc_accepted_at: now, assigned_to: c.centre_name, status: "assigned" });
      } else if (step === "nocsc") {
        openWa(wa(r.phone, msgNoCsc(r)));
        await save(id, { customer_told_at: now, status: r.status === "new" ? "contacted" : r.status, admin_notes: [r.admin_notes, `CSC नहीं: संदेश भेजा ${when(now)}`].filter(Boolean).join(" · ").slice(0, 1000) });
      } else if (step === "skip") {
        if (!confirm("इस CSC ने जवाब नहीं दिया या मना किया? request अगले CSC के लिए खुल जाएगी।")) return;
        await save(id, { skipped_claim_ids: [...(r.skipped_claim_ids || []), r.csc_claim_id].filter(Boolean), csc_claim_id: null, csc_told_at: null, assigned_to: null });
      } else if (step === "customer") {
        openWa(wa(r.phone, msgCustomer(r, c)));
        await save(id, { customer_told_at: now });
      }
      load();
    } else if (e.target.classList.contains("rq-save")) {
      if (await save(id, { status: tr.querySelector(".rq-status").value, feedback: tr.querySelector(".rq-feedback").value || null, admin_notes: tr.querySelector(".rq-note").value.trim() || null })) load();
    } else if (e.target.classList.contains("rq-del")) {
      if (!confirm("Delete this request permanently?")) return;
      const { error } = await client.from("service_requests").delete().eq("id", id);
      if (error) alert("Not deleted: " + error.message); else load();
    }
  });
  document.getElementById("rq-centres").addEventListener("click", async (e) => {
    if (!e.target.classList.contains("rq-pause")) return;
    const c = centres.find((x) => x.id === e.target.closest("tr").dataset.cid);
    const { error } = await client.from("csc_claims").update({ leads_paused: !c.leads_paused }).eq("id", c.id);
    if (error) alert("Not saved: " + error.message); else load();
  });
  filter.addEventListener("change", render);
  document.getElementById("rq-refresh").addEventListener("click", load);
  load();
});
