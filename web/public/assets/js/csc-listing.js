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
    var map = c.latitude && c.longitude ? "https://www.google.com/maps?q=" + c.latitude + "," + c.longitude
      : c.full_address ? "https://www.google.com/maps/search/" + encodeURIComponent(c.full_address + " " + (c.pincode || "")) : "";
    var h = hours(c.working_hours);
    return '<li class="csc-card vcard" data-app="' + esc(c.application_id) + '">'
      + '<span class="vbadge">✓ SarkariSewa पर सत्यापित</span>'
      + "<strong>" + esc(c.centre_name) + "</strong>"
      + (c.full_address ? "<span>" + esc(c.full_address) + "</span>" : "<span>" + esc([c.locality, c.city].filter(Boolean).join(", ")) + "</span>")
      + '<span class="pin">' + esc([c.district, c.pincode ? "PIN " + c.pincode : ""].filter(Boolean).join(" · ")) + "</span>"
      + (h ? "<span>समय: " + esc(h) + "</span>" : "")
      + (services.length ? "<span>सेवाएं: " + esc(services.join(", ")) + "</span>" : "")
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

  window.SSCsc = {
    card: card, wire: wire, log: log, esc: esc,
    // Approved centres of a district: matched by district name or PIN.
    district: function (root, cfg) {
      var names = (cfg.names || []).map(norm).filter(Boolean), pins = cfg.pins || [], st = norm(cfg.state);
      return get("csc_public_centres?select=*&order=approved_at.desc&limit=500").then(function (rows) {
        var mine = rows.filter(function (c) {
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
