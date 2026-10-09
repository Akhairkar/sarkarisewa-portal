/* poster-page.js — /poster/
   Renders every published poster in four designs, lets the visitor add their
   own name, line and photo (kept in localStorage only), and shares the image
   with the Web Share API (WhatsApp → My Status) or downloads it.
   Views, shares and downloads are counted with the poster_log() RPC. */
(function () {
  var root = document.querySelector(".poster-page");
  if (!root || !window.SSPoster) return;
  var URL_ = root.dataset.url, KEY = root.dataset.key;
  var list = document.getElementById("poster-list");
  var KEYS = { name: "ss_poster_name", line: "ss_poster_line", photo: "ss_poster_photo", on: "ss_poster_on" };
  var size = "status", user = { name: "", line: "", photo: null }, photoUrl = "";
  var $ = function (id) { return document.getElementById(id); };
  function get(k) { try { return localStorage.getItem(k) || ""; } catch (e) { return ""; } }
  function set(k, v) { try { v ? localStorage.setItem(k, v) : localStorage.removeItem(k); } catch (e) {} }

  function log(id, action, design) {
    try {
      fetch(URL_ + "/rest/v1/rpc/poster_log", {
        method: "POST",
        headers: { apikey: KEY, Authorization: "Bearer " + KEY, "Content-Type": "application/json" },
        body: JSON.stringify({ p_poster: id || null, p_action: action, p_design: design || null, p_size: size, p_photo: !!(on() && user.photo) }),
      });
    } catch (e) {}
    try { if (window.gtag) gtag("event", "poster_" + action, { poster_id: id, design: design, size: size }); } catch (e) {}
  }

  function on() { return $("pm-on").checked; }
  function activeUser() { return on() && (user.name || user.photo) ? user : null; }

  function loadPhoto(src) {
    return new Promise(function (res) {
      if (!src) return res(null);
      var img = new Image(); img.onload = function () { res(img); }; img.onerror = function () { res(null); }; img.src = src;
    });
  }

  // Shrink the chosen photo to a 320px square so it fits in localStorage.
  function readPhoto(file) {
    return new Promise(function (res) {
      var r = new FileReader();
      r.onload = function () {
        loadPhoto(r.result).then(function (img) {
          if (!img) return res("");
          var c = document.createElement("canvas"), n = 320, m = Math.min(img.width, img.height);
          c.width = c.height = n;
          c.getContext("2d").drawImage(img, (img.width - m) / 2, (img.height - m) / 2, m, m, 0, 0, n, n);
          res(c.toDataURL("image/jpeg", 0.85));
        });
      };
      r.readAsDataURL(file);
    });
  }

  function fileName(post, design) {
    return "sarkarisewa-" + (post.publish_date || "") + "-" + design + ".png";
  }

  function full(post, design) {
    var c = document.createElement("canvas");
    SSPoster.draw(c, post, { design: design, size: size, user: activeUser(), scale: 1 });
    return new Promise(function (res) { c.toBlob(res, "image/png"); });
  }

  function share(post, design) {
    full(post, design).then(function (blob) {
      var file = new File([blob], fileName(post, design), { type: "image/png" });
      var text = post.title + "\nपूरी जानकारी: https://sarkarisewaindia.com" + (post.page_url || "/poster/");
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file], text: text }).then(function () { log(post.id, "share", design); }).catch(function () {});
      } else {
        download(post, design, blob);
        alert("आपके फोन/ब्राउज़र में सीधा शेयर नहीं खुला। पोस्टर डाउनलोड हो गया है, गैलरी से WhatsApp Status पर लगाएं।");
      }
    });
  }

  function download(post, design, blob) {
    var go = function (b) {
      var a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = fileName(post, design);
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      log(post.id, "download", design);
    };
    blob ? go(blob) : full(post, design).then(go);
  }

  function renderItem(sec) {
    var post = JSON.parse(sec.dataset.post), box = sec.querySelector(".poster-designs");
    box.innerHTML = "";
    Object.keys(SSPoster.DESIGNS).forEach(function (d) {
      var fig = document.createElement("figure"); fig.className = "pd " + size;
      var c = document.createElement("canvas");
      SSPoster.draw(c, post, { design: d, size: size, user: activeUser(), scale: 0.32 });
      c.setAttribute("role", "img"); c.setAttribute("aria-label", post.title + " – " + SSPoster.DESIGNS[d].label + " डिज़ाइन");
      var cap = document.createElement("figcaption");
      cap.innerHTML = '<button type="button" class="cta pd-share">Status पर लगाएं</button><button type="button" class="pd-dl">⬇ Download</button>';
      cap.querySelector(".pd-share").onclick = function () { share(post, d); };
      cap.querySelector(".pd-dl").onclick = function () { download(post, d); };
      fig.appendChild(c); fig.appendChild(cap); box.appendChild(fig);
    });
  }

  function renderAll() { list.querySelectorAll(".poster-item").forEach(renderItem); }

  // Posters published after this page was built.
  function fetchNew() {
    return fetch(URL_ + "/rest/v1/daily_posters?select=id,publish_date,category,title,body,highlight,source_label,source_url,page_url&status=eq.published&order=publish_date.desc,sort.asc&limit=30", {
      headers: { apikey: KEY, Authorization: "Bearer " + KEY },
    }).then(function (r) { return r.ok ? r.json() : []; }).then(function (rows) {
      var have = {};
      list.querySelectorAll(".poster-item").forEach(function (s) { have[s.dataset.id] = 1; });
      var fresh = rows.filter(function (p) { return !have[p.id]; });
      if (!fresh.length) return;
      var empty = list.querySelector(".notice"); if (empty) empty.remove();
      fresh.reverse().forEach(function (p) {
        var s = document.createElement("section"); s.className = "section poster-item"; s.dataset.id = p.id; s.dataset.post = JSON.stringify(p);
        var h = document.createElement("h2"); h.textContent = p.title;
        var b = document.createElement("p"); b.textContent = p.body;
        var d = document.createElement("div"); d.className = "poster-designs";
        s.appendChild(h); s.appendChild(b); s.appendChild(d);
        list.insertBefore(s, list.firstChild);
      });
    }).catch(function () {});
  }

  function bindForm() {
    $("pm-name").value = user.name; $("pm-line").value = user.line; $("pm-on").checked = get(KEYS.on) !== "0";
    if (photoUrl) { $("pm-photo-prev").src = photoUrl; $("pm-photo-prev").hidden = false; }
    var t;
    function changed() {
      user.name = $("pm-name").value.trim(); user.line = $("pm-line").value.trim();
      set(KEYS.name, user.name); set(KEYS.line, user.line); set(KEYS.on, on() ? "" : "0");
      clearTimeout(t); t = setTimeout(function () { renderAll(); if (user.name || user.photo) log(null, "customise"); }, 400);
    }
    ["pm-name", "pm-line"].forEach(function (id) { $(id).addEventListener("input", changed); });
    $("pm-on").addEventListener("change", changed);
    $("pm-photo").addEventListener("change", function (e) {
      var f = e.target.files && e.target.files[0]; if (!f) return;
      readPhoto(f).then(function (data) {
        if (!data) return;
        photoUrl = data; set(KEYS.photo, data);
        $("pm-photo-prev").src = data; $("pm-photo-prev").hidden = false;
        loadPhoto(data).then(function (img) { user.photo = img; changed(); });
      });
    });
    $("pm-clear").addEventListener("click", function () {
      [KEYS.name, KEYS.line, KEYS.photo].forEach(function (k) { set(k, ""); });
      user = { name: "", line: "", photo: null }; photoUrl = "";
      $("pm-name").value = ""; $("pm-line").value = ""; $("pm-photo-prev").hidden = true;
      renderAll();
    });
    document.querySelectorAll(".pm-size button").forEach(function (b) {
      b.addEventListener("click", function () {
        size = b.dataset.size;
        document.querySelectorAll(".pm-size button").forEach(function (x) { x.classList.toggle("on", x === b); });
        renderAll();
      });
    });
  }

  user.name = get(KEYS.name); user.line = get(KEYS.line); photoUrl = get(KEYS.photo);
  Promise.all([SSPoster.ready(), loadPhoto(photoUrl)]).then(function (r) {
    user.photo = r[1];
    bindForm();
    return fetchNew();
  }).then(function () {
    renderAll();
    list.querySelectorAll(".poster-item").forEach(function (s) { log(s.dataset.id, "view"); });
  });
})();
