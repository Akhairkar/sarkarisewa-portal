/* ==========================================================================
   csc-profile.js — Module 17: CSC individual profile page
   Reads one row from the "csc_centers" Supabase table by id.
   - Always shown: name, address, state, district.
   - Only if status === "verified": Google Maps embed (no API key needed —
     uses the public maps.google.com/maps?output=embed URL format),
     WhatsApp button, phone, description, and LocalBusiness schema markup
     (same dynamic-injection pattern as GovernmentService schema in
     service.js / Module 8).
   - If status === "unclaimed": shows a "Is this your CSC? Claim it" CTA
     linking to claim.html?id=...
   ========================================================================== */

(function () {
  const contentEl = document.getElementById("csc-profile-content");
  const breadcrumbEl = document.getElementById("csc-breadcrumb-name");
  if (!contentEl) return;

  const params = new URLSearchParams(window.location.search);
  const centreId = params.get("id");

  function tk(key, fallback) {
    const lang = typeof getLang === "function" ? getLang() : "hi";
    if (window.SITE && SITE.langData && SITE.langData[lang] && SITE.langData[lang][key]) {
      return SITE.langData[lang][key];
    }
    return fallback || key;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str || "";
    return div.innerHTML;
  }

  function waLink(phone) {
    const digits = (phone || "").replace(/\D/g, "");
    if (!digits) return null;
    const withCountry = digits.length === 10 ? "91" + digits : digits;
    return `https://wa.me/${withCountry}`;
  }

  function allowIndexing() {
    // profile.html defaults to noindex (see the ss-default-noindex tag) —
    // most centres now have a static twin at csc/<slug>.html (see
    // tools/generate-csc-pages.py) which is what should actually get
    // indexed. This dynamic shell only removes noindex when it's serving
    // a centre that's genuinely live here right now — covers the ≤24h gap
    // between a centre being added/claimed and the next daily static
    // regen picking it up. No redirect: unlike the fixed 20 states, CSC
    // centres are added continuously, so we can't assume a static twin
    // always exists yet — redirecting here could send someone to a 404.
    const tag = document.getElementById("ss-default-noindex");
    if (tag) tag.remove();
  }

  function renderSchema(centre, url) {
    const existing = document.getElementById("csc-schema");
    if (existing) existing.remove();
    if (centre.status !== "verified") return;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          name: centre.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: centre.address,
            addressRegion: centre.state,
            addressLocality: centre.district || undefined,
            postalCode: centre.pincode || undefined,
            addressCountry: "IN",
          },
          ...(centre.lat && centre.lng
            ? { geo: { "@type": "GeoCoordinates", latitude: centre.lat, longitude: centre.lng } }
            : {}),
          ...(centre.phone ? { telephone: centre.phone } : {}),
          url: url,
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://sarkarisewaindia.com/index.html" },
            { "@type": "ListItem", position: 2, name: "CSC Centres", item: "https://sarkarisewaindia.com/csc/index.html" },
            { "@type": "ListItem", position: 3, name: centre.name, item: url },
          ],
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "csc-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  function render(centre) {
    allowIndexing();
    document.getElementById("csc-page-title").textContent = `${centre.name} — CSC Centre — SarkariSewa India`;
    const metaDesc = document.getElementById("csc-meta-description");
    if (metaDesc) metaDesc.setAttribute("content", `${centre.name}, ${centre.address}, ${centre.state}. Common Service Centre details, location and contact.`);
    breadcrumbEl.textContent = centre.name;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const url = `https://sarkarisewaindia.com/csc/profile.html?id=${centre.id}`;
    canonical.setAttribute("href", url);

    const verified = centre.status === "verified";
    const wa = verified ? waLink(centre.whatsapp) : null;
    const hasCoords = verified && centre.lat && centre.lng;

    let html = `
      <section class="page-hero">
        <h1 class="page-hero__title">${escapeHtml(centre.name)}</h1>
        ${verified ? `<span class="csc-badge">${tk("csc_verified_badge", "Verified ✅")}</span>` : ""}
      </section>

      <div class="csc-profile-card">
        <p class="csc-profile-address">${escapeHtml(centre.address)}</p>
        <p class="csc-profile-location">${escapeHtml(centre.district ? centre.district + ", " : "")}${escapeHtml(centre.state)}${centre.pincode ? " — " + escapeHtml(centre.pincode) : ""}</p>
    `;

    if (verified) {
      if (centre.description) {
        html += `<p class="csc-profile-description">${escapeHtml(centre.description)}</p>`;
      }
      if (centre.service_mode) {
        const modeLabel = { online: tk("csc_form_mode_online", "Online only"), offline: tk("csc_form_mode_offline", "Offline (in-person) only"), both: tk("csc_form_mode_both", "Both online and offline") }[centre.service_mode] || centre.service_mode;
        html += `<p class="csc-profile-mode"><strong>${tk("csc_mode_label", "Mode")}:</strong> ${escapeHtml(modeLabel)}</p>`;
      }
      if (centre.services_offered && centre.services_offered.length) {
        html += `
          <div class="csc-profile-services">
            <strong>${tk("csc_services_label", "Services offered")}:</strong>
            <div class="csc-services-tags">
              ${centre.services_offered.map((s) => `<span class="csc-service-tag">${escapeHtml(s)}</span>`).join("")}
            </div>
          </div>`;
      }
      html += `<div class="csc-profile-actions">`;
      if (centre.phone) {
        html += `<a class="btn btn-ghost" href="tel:${escapeHtml(centre.phone)}">${tk("csc_call_now", "Call Now")}</a>`;
      }
      if (wa) {
        html += `<a class="btn btn-primary" href="${wa}" target="_blank" rel="noopener">${tk("csc_whatsapp", "WhatsApp")}</a>`;
      }
      html += `</div>`;

      if (hasCoords) {
        html += `
          <div class="csc-map">
            <iframe
              title="${escapeHtml(centre.name)} location"
              src="https://maps.google.com/maps?q=${centre.lat},${centre.lng}&z=15&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>`;
      } else {
        const mapQuery = encodeURIComponent(`${centre.name}, ${centre.address}, ${centre.state}`);
        html += `<p><a href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener">${tk("csc_view_on_map", "View on Google Maps")}</a></p>`;
      }
    } else {
      html += `
        <div class="csc-claim-prompt">
          <p>${tk("csc_claim_prompt", "Is this your CSC centre? Claim it to add your phone, WhatsApp, location and description.")}</p>
          <a class="btn btn-primary" href="claim.html?id=${centre.id}">${tk("csc_claim_cta", "Claim this CSC centre")}</a>
        </div>`;
    }

    html += `</div>`;
    contentEl.innerHTML = html;

    renderSchema(centre, url);
  }

  async function load() {
    if (!centreId) {
      contentEl.innerHTML = `<p class="csc-empty">${tk("csc_not_found", "This CSC centre could not be found.")}</p>`;
      return;
    }
    const client = await getSupabaseClient();
    if (!client) {
      contentEl.innerHTML = `<p class="csc-empty">${tk("csc_not_configured", "The CSC directory is not available right now.")}</p>`;
      return;
    }
    try {
      const { data, error } = await client
        .from("csc_centers")
        .select("id, name, address, state, district, pincode, lat, lng, whatsapp, phone, description, services_offered, service_mode, status")
        .eq("id", centreId)
        .in("status", ["unclaimed", "verified"])
        .single();
      if (error || !data) throw error || new Error("Not found");
      render(data);
    } catch (err) {
      console.error("Failed to load CSC centre:", err);
      contentEl.innerHTML = `<p class="csc-empty">${tk("csc_not_found", "This CSC centre could not be found.")}</p>`;
    }
  }

  load();
})();
