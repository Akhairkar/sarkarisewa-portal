/* poster-draw.js
   Draws a daily government-info poster on a canvas in one of four designs.
   Used by /poster/ (visitors) and admin/posters.html (preview), so both show
   exactly the same image. Everything is drawn in the browser; a visitor's
   name, line and photo never leave their phone.

   SSPoster.draw(canvas, post, { design, size, user, scale })
     post: { category, title, body, highlight, source_label, page_url, publish_date }
     user: { name, line, photo (Image|null) } or null
     size: "status" (1080x1920) | "square" (1080x1080)
*/
(function () {
  var SITE = "sarkarisewaindia.com";
  var FONT = "'Mukta', 'Noto Sans Devanagari', sans-serif";
  var CAT = {
    naukri: "सरकारी नौकरी",
    yojana: "सरकारी योजना",
    deadline: "आखिरी तारीख",
    document: "दस्तावेज़",
    alert: "ज़रूरी सूचना",
  };
  var MONTHS = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];

  // bg: background, card: text panel, ink: title, text: body, accent: chip and
  // highlight, accentInk: text on accent, muted: small print.
  var DESIGNS = {
    saffron: { label: "केसरिया", bg: ["#ff9933", "#ffb366"], card: "#ffffff", ink: "#1f2937", text: "#374151", accent: "#138808", accentInk: "#ffffff", muted: "#6b7280", band: "#138808" },
    blue: { label: "नीला", bg: ["#0b3d91", "#1d4ed8"], card: null, ink: "#ffffff", text: "#e5edff", accent: "#facc15", accentInk: "#1f2937", muted: "#c7d2fe", band: "#facc15" },
    green: { label: "हरा", bg: ["#ecfdf5", "#d1fae5"], card: "#ffffff", ink: "#064e3b", text: "#1f2937", accent: "#059669", accentInk: "#ffffff", muted: "#4b5563", band: "#059669" },
    dark: { label: "प्रीमियम", bg: ["#0f172a", "#1e293b"], card: null, ink: "#fde68a", text: "#e2e8f0", accent: "#f59e0b", accentInk: "#111827", muted: "#94a3b8", band: "#f59e0b" },
  };

  function dateHi(iso) {
    var d = iso ? new Date(iso + "T00:00:00") : new Date();
    return d.getDate() + " " + MONTHS[d.getMonth()] + " " + d.getFullYear();
  }

  // Word wrap that also works for Devanagari (words are space separated).
  function wrap(ctx, text, maxW, maxLines) {
    var words = String(text || "").split(/\s+/).filter(Boolean), lines = [], line = "";
    for (var i = 0; i < words.length; i++) {
      var t = line ? line + " " + words[i] : words[i];
      if (ctx.measureText(t).width > maxW && line) { lines.push(line); line = words[i]; } else line = t;
    }
    if (line) lines.push(line);
    if (maxLines && lines.length > maxLines) {
      lines = lines.slice(0, maxLines);
      var last = lines[maxLines - 1];
      while (last && ctx.measureText(last + "…").width > maxW) last = last.slice(0, -1);
      lines[maxLines - 1] = last + "…";
    }
    return lines;
  }

  function rrect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }

  function qr(ctx, url, x, y, size, dark, light) {
    if (!window.qrcode) return;
    var q = window.qrcode(0, "M"); q.addData(url); q.make();
    var n = q.getModuleCount(), cell = size / (n + 2);
    ctx.fillStyle = light; ctx.fillRect(x, y, size, size);
    ctx.fillStyle = dark;
    for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) if (q.isDark(r, c)) ctx.fillRect(x + (c + 1) * cell, y + (r + 1) * cell, Math.ceil(cell), Math.ceil(cell));
  }

  function draw(canvas, post, opt) {
    opt = opt || {};
    var D = DESIGNS[opt.design] || DESIGNS.saffron;
    var square = opt.size === "square";
    var s = opt.scale || 1, W = 1080, H = square ? 1080 : 1920;
    canvas.width = Math.round(W * s); canvas.height = Math.round(H * s);
    var ctx = canvas.getContext("2d");
    ctx.setTransform(s, 0, 0, s, 0, 0);
    ctx.textBaseline = "top";

    // Background
    var g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, D.bg[0]); g.addColorStop(1, D.bg[1]);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = D.band; ctx.fillRect(0, 0, W, 18); ctx.fillRect(0, H - 18, W, 18);

    var pad = 72, x = pad, w = W - pad * 2, y = square ? 70 : 130;
    var user = opt.user && (opt.user.name || opt.user.photo) ? opt.user : null;

    // Category chip + date
    ctx.font = "700 40px " + FONT;
    var chip = CAT[post.category] || "सरकारी जानकारी", cw = ctx.measureText(chip).width + 56;
    ctx.fillStyle = D.accent; rrect(ctx, x, y, cw, 70, 35); ctx.fill();
    ctx.fillStyle = D.accentInk; ctx.fillText(chip, x + 28, y + 12);
    ctx.font = "600 36px " + FONT; ctx.fillStyle = D.card ? D.ink : D.muted;
    var dt = dateHi(post.publish_date);
    ctx.fillText(dt, x + w - ctx.measureText(dt).width, y + 16);
    y += square ? 110 : 140;

    // Text panel
    var footerH = square ? 170 : 250, userH = user ? (square ? 120 : 170) : 0;
    var panelH = H - y - footerH - userH - (square ? 30 : 60);
    if (D.card) { ctx.fillStyle = D.card; rrect(ctx, x - 24, y - 24, w + 48, panelH + 24, 36); ctx.fill(); }
    var ty = y + (D.card ? 24 : 0), tx = x + (D.card ? 24 : 0), tw = w - (D.card ? 48 : 0);

    // Measure first, then centre the text block in the panel.
    var tSize = square ? 66 : 92, bSize = square ? 40 : 56, hSize = square ? 38 : 50;
    ctx.font = "800 " + tSize + "px " + FONT;
    var tLines = wrap(ctx, post.title, tw, 3);
    var gapA = square ? 14 : 34, gapB = square ? 34 : 56, srcH = post.source_label ? (square ? 60 : 80) : 20;
    var hh = post.highlight ? (square ? 66 : 88) + (square ? 12 : 34) : 0;
    var room = panelH - (D.card ? 48 : 0) - srcH;
    var used = tLines.length * tSize * 1.25 + gapA + 8 + gapB + hh;
    ctx.font = "400 " + bSize + "px " + FONT;
    var bLines = wrap(ctx, post.body, tw, Math.max(2, Math.floor((room - used) / (bSize * 1.45))));
    used += bLines.length * bSize * 1.45;
    ty += Math.max(0, (room - used) * 0.4);

    ctx.font = "800 " + tSize + "px " + FONT; ctx.fillStyle = D.ink;
    tLines.forEach(function (l) { ctx.fillText(l, tx, ty); ty += tSize * 1.25; });
    ty += gapA;
    ctx.fillStyle = D.accent; ctx.fillRect(tx, ty, 120, 8); ty += 8 + gapB;
    ctx.font = "400 " + bSize + "px " + FONT; ctx.fillStyle = D.text;
    bLines.forEach(function (l) { ctx.fillText(l, tx, ty); ty += bSize * 1.45; });

    if (post.highlight) {
      ty += square ? 12 : 34;
      ctx.font = "700 " + hSize + "px " + FONT;
      var hl = wrap(ctx, post.highlight, tw - 60, 1)[0], hw = ctx.measureText(hl).width + 60, hb = square ? 66 : 88;
      ctx.fillStyle = D.accent; rrect(ctx, tx, ty, hw, hb, 18); ctx.fill();
      ctx.fillStyle = D.accentInk; ctx.fillText(hl, tx + 30, ty + (hb - hSize) / 2 - 4);
      ty += hb;
    }
    if (post.source_label) {
      ctx.font = "400 " + (square ? 28 : 34) + "px " + FONT; ctx.fillStyle = D.card ? "#6b7280" : D.muted;
      ctx.fillText(wrap(ctx, "स्रोत: " + post.source_label, tw, 1)[0], tx, y + panelH - (square ? 44 : 56));
    }

    // Visitor block: photo + name + line
    var fy = H - footerH - userH - (square ? 10 : 20);
    if (user) {
      var ph = square ? 96 : 130, ux = x;
      if (user.photo) {
        ctx.save(); ctx.beginPath(); ctx.arc(ux + ph / 2, fy + ph / 2, ph / 2, 0, Math.PI * 2); ctx.clip();
        ctx.drawImage(user.photo, ux, fy, ph, ph); ctx.restore();
        ctx.lineWidth = 6; ctx.strokeStyle = D.accent; ctx.beginPath(); ctx.arc(ux + ph / 2, fy + ph / 2, ph / 2, 0, Math.PI * 2); ctx.stroke();
        ux += ph + 30;
      }
      ctx.fillStyle = D.card ? D.ink : "#ffffff";
      ctx.font = "800 " + (square ? 46 : 58) + "px " + FONT;
      ctx.fillText(wrap(ctx, user.name || "", W - pad - ux, 1)[0] || "", ux, fy + (user.line ? 0 : ph / 4));
      if (user.line) {
        ctx.font = "600 " + (square ? 32 : 40) + "px " + FONT; ctx.fillStyle = D.card ? D.text : D.muted;
        ctx.fillText(wrap(ctx, user.line, W - pad - ux, 1)[0], ux, fy + (square ? 56 : 74));
      }
    }

    // Footer: QR to the full guide + brand + not-government line
    var qs = square ? 130 : 190, qy = H - footerH + (square ? 10 : 20);
    var url = "https://" + SITE + (post.page_url || "/poster/") + "?utm_source=poster";
    qr(ctx, url, x, qy, qs, "#111827", "#ffffff");
    var bx = x + qs + 30;
    ctx.fillStyle = D.card ? D.ink : "#ffffff"; ctx.font = "800 " + (square ? 42 : 52) + "px " + FONT;
    ctx.fillText("SarkariSewa India", bx, qy + (square ? 4 : 10));
    ctx.font = "600 " + (square ? 28 : 36) + "px " + FONT; ctx.fillStyle = D.card ? D.text : D.muted;
    ctx.fillText("पूरी जानकारी के लिए QR स्कैन करें", bx, qy + (square ? 56 : 76));
    ctx.font = "400 " + (square ? 24 : 30) + "px " + FONT;
    ctx.fillText(SITE + " · निजी सेवा, सरकारी वेबसाइट नहीं", bx, qy + (square ? 94 : 126));
    return canvas;
  }

  function ready() {
    if (!document.fonts || !document.fonts.load) return Promise.resolve();
    return Promise.all(["800 80px Mukta", "700 40px Mukta", "600 36px Mukta", "400 50px Mukta"].map(function (f) { return document.fonts.load(f, "अआ"); })).catch(function () {});
  }

  window.SSPoster = { draw: draw, ready: ready, DESIGNS: DESIGNS, CAT: CAT };
})();
