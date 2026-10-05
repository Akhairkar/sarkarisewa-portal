// Verified CSC listings (approved claims) for district and profile pages.
// Reads the public view csc_public_centres and logs Call/WhatsApp/Map clicks
// to csc_leads so the admin panel can show how many people contacted a centre.
(function () {
  var URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co/rest/v1/";
  var KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I";
  var HEAD = { apikey: KEY, Authorization: "Bearer " + KEY };

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function norm(s) { return String(s || "").toLowerCase().replace(/district|जिला|ज़िला|[^a-zऀ-ॿ]/g, ""); }
  function digits(s) { var d = String(s || "").replace(/\D/g, ""); return d.length > 10 ? d.slice(-10) : d; }

  function get(path) {
    return fetch(URL + path, { headers: HEAD }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); });
  }
  function log(app, action) {
    try {
      fetch(URL + "csc_leads", {
        method: "POST", keepalive: true,
        headers: Object.assign({ "Content-Type": "application/json", Prefer: "return=minimal" }, HEAD),
        body: JSON.stringify({ application_id: app, action: action, page: location.pathname.slice(0, 300) }),
      });
    } catch (e) {}
  }
  // Non-empty values, case-insensitive duplicates removed ("Nagpur, nagpur" -> "Nagpur").
  function uniq(a) { var seen = {}; return a.filter(function (x) { var k = String(x || "").trim().toLowerCase(); if (!k || seen[k]) return false; seen[k] = 1; return true; }).join(", "); }
  function list(v) { return Array.isArray(v) ? v : []; }
  function hours(h) {
    if (!h || typeof h !== "object") return "";
    if (h.open && h.close) return h.open + " - " + h.close + (h.days ? " (" + h.days + ")" : "");
    var mon = h.monday || h.Monday;
    return mon && mon.open && mon.close ? mon.open + " - " + mon.close : "";
  }

  function card(c, opts) {
    var wa = digits(c.public_whatsapp), ph = digits(c.public_phone);
    var msg = encodeURIComponent("नमस्ते, मैंने आपका केंद्र SarkariSewa India (sarkarisewaindia.com) पर देखा। मुझे इस काम के लिए मदद चाहिए: ");
    var services = list(c.online_services).concat(list(c.offline_services), list(c.custom_services)).slice(0, 8);
    var remote = list(c.remote_services);
    var map = c.latitude && c.longitude ? "https://www.google.com/maps?q=" + c.latitude + "," + c.longitude
      : c.full_address ? "https://www.google.com/maps/search/" + encodeURIComponent(c.full_address + " " + (c.pincode || "")) : "";
    var h = hours(c.working_hours);
    return '<li class="csc-card vcard" data-app="' + esc(c.application_id) + '">'
      + '<span class="vbadge">✓ SarkariSewa पर सत्यापित</span>'
      + "<strong>" + esc(nice(c.centre_name)) + "</strong>"
      + (c.full_address ? "<span>" + esc(c.full_address) + "</span>" : "<span>" + esc([c.locality, c.city].filter(Boolean).join(", ")) + "</span>")
      + '<span class="pin">' + esc([c.district, c.pincode ? "PIN " + c.pincode : ""].filter(Boolean).join(" · ")) + "</span>"
      + (h ? "<span>समय: " + esc(h) + "</span>" : "")
      + (services.length ? "<span>🏢 केंद्र पर: " + esc(services.join(", ")) + "</span>" : "")
      + (remote.length ? "<span>🏠 घर बैठे: " + esc(remote.slice(0, 5).join(", ")) + "</span>" : "")
      + (c.home_visit ? "<span>घर पर सेवा उपलब्ध</span>" : "")
      + '<span class="ja-actions">'
      + (ph ? '<a data-act="call" href="tel:+91' + ph + '">📞 कॉल करें</a>' : "")
      + (wa ? '<a data-act="whatsapp" href="https://wa.me/91' + wa + "?text=" + msg + '" target="_blank" rel="noopener nofollow">💬 WhatsApp</a>' : "")
      + (map ? '<a data-act="map" href="' + map + '" target="_blank" rel="noopener nofollow">रास्ता ↗</a>' : "")
      + (opts && opts.profile === false ? "" : '<a href="/csc-centre.html?id=' + encodeURIComponent(c.application_id) + '">पूरी जानकारी →</a>')
      + "</span></li>";
  }
  function wire(root) {
    root.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a[data-act]");
      if (!a) return;
      var li = a.closest("[data-app]");
      if (li) log(li.dataset.app, a.dataset.act);
    });
  }


  // ---- Full centre view (same layout as the built page) for live updates ----
  var SVC_HI = { "PAN related assistance": "PAN कार्ड सहायता", "Certificate applications": "प्रमाण पत्र आवेदन", "Bill payment": "बिल भुगतान",
    "Banking-related services": "बैंकिंग सेवाएं", "Insurance-related services": "बीमा सेवाएं", "Government applications": "सरकारी आवेदन",
    "Online forms": "ऑनलाइन फॉर्म", "Exam/application assistance": "परीक्षा / आवेदन फॉर्म", "Education services": "शिक्षा सेवाएं",
    Printing: "प्रिंटिंग", Photocopy: "फोटोकॉपी", Scanning: "स्कैनिंग", Lamination: "लैमिनेशन", "Passport photo": "पासपोर्ट फोटो", "Document assistance": "डॉक्यूमेंट सहायता" };
  function svc(a) { return list(a).filter(Boolean).map(function (s) { return SVC_HI[s] || s; }); }
  function since(y) { var n = new Date().getFullYear(); return !y ? "" : y >= 1950 && y <= n ? y + " से चल रहा है" : y > 0 && y <= 60 ? y + " साल से चल रहा है" : ""; }
  function span(a, b) { return a && b && a !== b ? a + " - " + b : a ? a + " से (बंद होने का समय फोन पर पूछें)" : ""; }
  function hoursFull(h) {
    if (!h || typeof h !== "object") return "";
    if (h.open || h.close) return span(h.open, h.close) + (h.days ? " (" + h.days + ")" : "");
    var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], hi = { monday: "सोम", tuesday: "मंगल", wednesday: "बुध", thursday: "गुरु", friday: "शुक्र", saturday: "शनि", sunday: "रवि" };
    var rows = days.map(function (d) { var v = h[d] || h[d[0].toUpperCase() + d.slice(1)]; return v && typeof v === "object" ? [d, /closed/i.test(v.status || "") ? "बंद" : span(v.open, v.close) || "खुला"] : null; }).filter(Boolean);
    if (!rows.length) return "";
    var open = rows.filter(function (r) { return r[1] !== "बंद"; });
    if (open.length && open.every(function (r) { return r[1] === open[0][1]; })) {
      var closed = rows.filter(function (r) { return r[1] === "बंद"; }).map(function (r) { return hi[r[0]]; });
      return (open.length === 7 ? "हर दिन" : open.map(function (r) { return hi[r[0]]; }).join(", ")) + ": " + open[0][1] + (closed.length ? "; " + closed.join(", ") + " बंद" : "");
    }
    return rows.map(function (r) { return hi[r[0]] + ": " + r[1]; }).join(", ");
  }

  // Names typed in ALL CAPS read better in title case ("POOJA DIGITAL SEVA" -> "Pooja Digital Seva").
  function nice(n) { n = String(n || "").trim(); return /[a-z]/.test(n) || !/[A-Z]{3}/.test(n) ? n : n.toLowerCase().replace(/(^|[\s(\-\/&.])([a-z])/g, function (m, a, b) { return a + b.toUpperCase(); }); }

  // "Open now" from the owner's hours, in Indian time. Returns null when the
  // hours cannot be read reliably (then nothing is shown).
  function mins(t, isClose) {
    var m = String(t || "").trim().toLowerCase().match(/^(\d{1,2})(?:[:.](\d{2}))?\s*(am|pm|बजे)?/);
    if (!m) return null;
    var h = +m[1], mi = +(m[2] || 0);
    if (h > 23 || mi > 59) return null;
    if (m[3] === "pm" && h < 12) h += 12;
    if (m[3] === "am" && h === 12) h = 0;
    // "7" or "7:00" as a closing time means 7 PM; "07:00" is 24-hour time.
    if ((!m[3] || m[3] === "बजे") && isClose && h <= 9 && m[1].length === 1) h += 12;
    return h * 60 + mi;
  }
  function openNow(h) {
    if (!h || typeof h !== "object") return null;
    var now = new Date(Date.now() + 330 * 60000), day = now.getUTCDay(), t = now.getUTCHours() * 60 + now.getUTCMinutes();
    var names = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var o, c, closedToday = false;
    if (h.open || h.close) {
      o = mins(h.open, false); c = mins(h.close, true);
      var d = String(h.days || "").toLowerCase();
      if (day === 0 && /(सोम|mon)/.test(d) && /(शनि|sat)/.test(d) && !/(रवि|sun|all|हर|सभी|daily)/.test(d)) closedToday = true;
    } else {
      var v = h[names[day]] || h[names[day][0].toUpperCase() + names[day].slice(1)];
      if (!v || typeof v !== "object") return null;
      if (/closed/i.test(v.status || "")) closedToday = true;
      o = mins(v.open, false); c = mins(v.close, true);
    }
    if (closedToday) return { open: false, label: "आज बंद" };
    if (o == null || c == null || o === c) return null;
    var fmt = function (x) { var hh = Math.floor(x / 60), mm = x % 60, ap = hh >= 12 ? "PM" : "AM"; hh = hh % 12 || 12; return hh + (mm ? ":" + (mm < 10 ? "0" : "") + mm : "") + " " + ap; };
    var isOpen = c > o ? t >= o && t < c : t >= o || t < c;
    return isOpen ? { open: true, label: "अभी खुला है · " + fmt(c) + " तक" } : { open: false, label: "अभी बंद · " + fmt(o) + " पर खुलेगा" };
  }

  // Our guides for common CSC services (same list as the built pages).
  var GUIDES = [
    [/aadhaar|आधार/i, "/service/aadhaar-card.html", "आधार कार्ड", "अपडेट, फीस, ज़रूरी कागज़"],
    [/\bpan\b|पैन/i, "/service/pan-card.html", "PAN कार्ड", "नया PAN, सुधार, e-PAN"],
    [/ayushman|आयुष्मान/i, "/service/ayushman-bharat.html", "आयुष्मान कार्ड", "पात्रता, कार्ड डाउनलोड"],
    [/ration|राशन/i, "/service/ration-card.html", "राशन कार्ड", "नया कार्ड, नाम जोड़ना, e-KYC"],
    [/certificate|प्रमाण/i, "/service/income-certificate.html", "आय / जाति / निवास प्रमाण पत्र", "कागज़, फीस, कितने दिन"],
    [/kisan|किसान/i, "/service/pm-kisan.html", "PM-Kisan", "e-KYC, किस्त स्टेटस"],
    [/shram|labour|लेबर/i, "/service/e-shram-card.html", "ई-श्रम / लेबर कार्ड", "रजिस्ट्रेशन, फायदे"],
    [/passport|पासपोर्ट/i, "/service/passport.html", "पासपोर्ट", "आवेदन, फीस, अपॉइंटमेंट"],
    [/driving|licen|लाइसेंस/i, "/service/driving-licence.html", "ड्राइविंग लाइसेंस", "लर्नर, टेस्ट, फीस"],
    [/job|exam|नौकरी|परीक्षा/i, "/jobs/index.html", "सरकारी नौकरी फॉर्म", "नई भर्तियां, आखिरी तारीख"],
    [/gst|itr|tax/i, "/gst/", "GST / ITR", "रजिस्ट्रेशन, रिटर्न"],
    [/voter|वोटर/i, "/service/voter-id-card.html", "वोटर ID", "नया कार्ड, सुधार"],
  ];
  function guides(all) {
    var seen = {}, out = [];
    all.forEach(function (s) { GUIDES.forEach(function (g) { if (g[0].test(s) && !seen[g[1]]) { seen[g[1]] = 1; out.push({ href: g[1], label: g[2], text: g[3] }); } }); });
    return out;
  }
  function allServices(c) { return svc(c.online_services).concat(svc(c.offline_services), svc(c.custom_services), svc(c.remote_services)).filter(function (x, i, a) { return a.indexOf(x) === i; }); }

  function full(c, type) {
    var ph = digits(c.public_phone), wa = digits(c.public_whatsapp), name = nice(c.centre_name);
    var waText = encodeURIComponent("नमस्ते, मैंने आपका केंद्र SarkariSewa India (sarkarisewaindia.com) पर देखा। मुझे इस काम के लिए मदद चाहिए: ");
    var on = svc(c.online_services), off = svc(c.offline_services), cu = svc(c.custom_services), rem = svc(c.remote_services);
    var all = on.concat(off, cu, rem).filter(function (x, i, a) { return a.indexOf(x) === i; });
    var place = uniq([c.locality, c.city, c.district]);
    var hrs = hoursFull(c.working_hours), sn = since(c.years_of_operation);
    var map = c.latitude && c.longitude ? "https://www.google.com/maps?q=" + c.latitude + "," + c.longitude : c.full_address ? "https://www.google.com/maps/search/" + encodeURIComponent(c.full_address + " " + (c.pincode || "")) : "";
    var li = function (a) { return '<ul class="checklist">' + a.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; };
    var waLink = wa ? "https://wa.me/91" + wa + "?text=" + waText : "";
    var photo = /^https:\/\/[a-z0-9]+\.supabase\.co\/storage\/v1\/object\/public\/csc-photos\//.test(c.photo_url || "")
      ? '<img class="csc-photo" src="' + esc(c.photo_url) + '" alt="' + esc(name) + '" width="1200" height="800" decoding="async" />' : "";
    return '<section class="answer"><p class="answer-title">केंद्र की जानकारी</p>' + photo + '<p class="answer-lead">'
      + esc(name) + " " + esc(place) + " में एक " + esc(type) + " है" + (sn ? ", जो " + sn : "") + "।"
      + (all.length ? " यहां " + esc(all.slice(0, 5).join(", ")) + (all.length > 5 ? " और दूसरी" : "") + " सेवाएं मिलती हैं।" : "")
      + (rem.length ? " " + rem.length + " सेवाएं घर बैठे WhatsApp/फोन से भी हो जाती हैं।" : "")
      + (c.home_visit ? " केंद्र घर पर आकर भी सेवा देता है।" : "") + "</p><dl class=\"facts\">"
      + (c.full_address ? "<div><dt>पता</dt><dd>" + esc(c.full_address) + (c.pincode ? ", PIN " + esc(c.pincode) : "") + "</dd></div>" : "")
      + (hrs ? "<div><dt>समय</dt><dd>" + esc(hrs) + "</dd></div>" : "")
      + (ph ? '<div><dt>फोन</dt><dd><a href="tel:+91' + ph + '" data-act="call">' + ph.slice(0, 5) + " " + ph.slice(5) + "</a></dd></div>" : "")
      + (wa ? '<div><dt>WhatsApp</dt><dd><a href="' + waLink + '" data-act="whatsapp" target="_blank" rel="noopener nofollow">' + wa.slice(0, 5) + " " + wa.slice(5) + "</a></dd></div>" : "")
      + '</dl><div class="ja-actions" style="margin-top:12px">'
      + (ph ? '<a class="cta" href="tel:+91' + ph + '" data-act="call">📞 कॉल करें</a>' : "")
      + (wa ? '<a class="cta secondary" href="' + waLink + '" data-act="whatsapp" target="_blank" rel="noopener nofollow">💬 WhatsApp करें</a>' : "")
      + (map ? '<a href="' + map + '" data-act="map" target="_blank" rel="noopener nofollow">🗺️ रास्ता देखें ↗</a>' : "")
      + "</div></section>"
      + (c.about ? '<section class="section" id="parichay"><h2>केंद्र के बारे में</h2><p style="white-space:pre-line">' + esc(c.about) + "</p></section>" : "")
      + (all.length ? '<section class="section" id="sevayen"><h2>' + esc(name) + " पर मिलने वाली सेवाएं</h2>"
        + (rem.length ? "<h3>🏠 घर बैठे (WhatsApp/फोन से कागज़ भेजकर)</h3>" + li(rem) : "")
        + (on.length ? "<h3>🏢 केंद्र पर आकर: सरकारी सेवाएं</h3>" + li(on) : "")
        + (off.length || cu.length ? "<h3>🏢 केंद्र पर: दूसरी सेवाएं</h3>" + li(off.concat(cu)) : "")
        + (rem.length && wa ? '<p><a class="cta secondary" href="' + waLink + '" data-act="whatsapp" target="_blank" rel="noopener nofollow">💬 घर बैठे काम के लिए WhatsApp करें</a></p>' : "")
        + '<p class="cell-note">सेवाओं की जानकारी केंद्र के संचालक ने दी है। जाने से पहले फोन या WhatsApp पर पूछ लें।</p></section>' : "");
  }

  window.SSCsc = {
    full: full, uniq: uniq, nice: nice, openNow: openNow, guides: guides, allServices: allServices, hoursFull: hoursFull, since: since,
    card: card, wire: wire, log: log, esc: esc,
    // Approved centres of a district: matched by district name or PIN.
    district: function (root, cfg) {
      var names = (cfg.names || []).map(norm).filter(Boolean), pins = cfg.pins || [], st = norm(cfg.state);
      return get("csc_public_centres?select=*&order=approved_at.desc&limit=500").then(function (rows) {
        var mine = rows.filter(function (c) {
          if (cfg.exclude && c.application_id === cfg.exclude) return false;
          var d = norm(c.district), sOk = !st || !norm(c.state) || norm(c.state) === st;
          return sOk && (names.some(function (n) { return d && (d.indexOf(n) !== -1 || n.indexOf(d) !== -1); }) || pins.indexOf(String(c.pincode || "").trim()) !== -1);
        });
        if (!mine.length) return 0;
        root.querySelector(".v-list").innerHTML = mine.map(function (c) { return card(c); }).join("");
        root.hidden = false;
        wire(root);
        return mine.length;
      }).catch(function () { return 0; });
    },
    one: function (id) { return get("csc_public_centres?select=*&application_id=eq." + encodeURIComponent(id)).then(function (r) { return r[0] || null; }); },
    feedback: function (row) {
      return fetch(URL + "csc_feedback", {
        method: "POST",
        headers: Object.assign({ "Content-Type": "application/json", Prefer: "return=minimal" }, HEAD),
        body: JSON.stringify(row),
      }).then(function (r) { if (!r.ok) throw new Error(r.status); });
    },
  };
})();
