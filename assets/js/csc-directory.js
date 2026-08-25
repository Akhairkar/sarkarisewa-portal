/* ==========================================================================
   csc-directory.js — Module 17: CSC Public Directory (browse/list page)
   Reads the "csc_centers" Supabase table (see supabase/csc-schema.sql) via
   the shared getSupabaseClient() helper from supabase-client.js.
   Shows unclaimed centres (basic info only) and verified centres (full
   card with a "Verified" badge). Pending/rejected rows are never fetched
   here — the table's RLS policy already hides them from anon reads.
   ========================================================================== */

(function () {
  const listEl = document.getElementById("csc-list");
  const stateFilterEl = document.getElementById("csc-state-filter");
  const searchEl = document.getElementById("csc-search");
  const hintEl = document.getElementById("csc-search-hint");
  if (!listEl) return;

  const INDIAN_STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry",
    "Chandigarh"
  ];

  let allCentres = [];

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

  function slugify(text) {
    return (text || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60);
  }

  // Matches tools/generate-csc-pages.py's build_slug() exactly — must stay
  // in sync with that file if either one's slug scheme ever changes.
  function cscStaticUrl(centre) {
    const base = slugify(`${centre.name || ""}-${centre.district || ""}`);
    const shortId = (centre.id || "").slice(0, 8);
    const slug = base ? `${base}-${shortId}` : `csc-${shortId}`;
    return `${slug}.html`;
  }

  function populateStateFilter() {
    INDIAN_STATES.forEach((s) => {
      const opt = document.createElement("option");
      opt.value = s;
      opt.textContent = s;
      stateFilterEl.appendChild(opt);
    });
  }

  function renderList(centres) {
    if (!centres.length) {
      listEl.innerHTML = `<p class="csc-empty">${tk("csc_empty", "No CSC centres listed yet for this state. Be the first to add one.")}</p>`;
      return;
    }
    listEl.innerHTML = centres
      .map((c) => {
        const verified = c.is_claimed === true || c.status === "verified";
        return `
      <a class="csc-card ${verified ? "csc-card--verified" : ""}" href="${cscStaticUrl(c)}">
        <div class="csc-card__head">
          <h3 class="csc-card__name">${escapeHtml(c.vle_name || c.name || "CSC Centre")}</h3>
          ${verified ? `<span class="csc-badge">${tk("csc_verified_badge", "Verified ✅")}</span>` : ""}
        </div>
        <p class="csc-card__address">${escapeHtml(c.address)}</p>
        <p class="csc-card__location">${escapeHtml(c.district ? c.district + ", " : "")}${escapeHtml(c.state)}</p>
      </a>`;
      })
      .join("");
  }

  function normalize(str) {
    return (str || "").toString().toLowerCase();
  }

  function matchesSearch(centre, query) {
    if (!query) return true;
    const haystack = [centre.vle_name, centre.name, centre.address, centre.district, centre.pincode]
      .map(normalize)
      .join(" | ");
    // Split on spaces so "Nitin Dombivli" matches even if the words are
    // apart in the record (e.g. name has "Nitin Mothe", district "Dombivli").
    return query
      .split(/\s+/)
      .filter(Boolean)
      .every((word) => haystack.includes(word));
  }

  function applyFilter() {
    const state = stateFilterEl.value;
    const query = normalize(searchEl ? searchEl.value.trim() : "");
    let filtered = state ? allCentres.filter((c) => c.state === state) : allCentres;
    if (query) {
      filtered = filtered.filter((c) => matchesSearch(c, query));
    }
    renderList(filtered);
    if (hintEl) {
      if (query) {
        hintEl.hidden = false;
        hintEl.textContent =
          filtered.length > 0
            ? `${filtered.length} केंद्र मिले — अपना केंद्र दिखे तो उस पर टैप करके "Claim" करें।`
            : `कोई मेल नहीं मिला। कोशिश करें: सिर्फ अपना पहला नाम, या अपना गांव/शहर, या पिनकोड डालें।`;
      } else {
        hintEl.hidden = true;
      }
    }
  }

  async function loadCentres() {
    const client = await getSupabaseClient();
    if (!client) {
      listEl.innerHTML = `<p class="csc-empty">${tk("csc_not_configured", "The CSC directory is not available right now.")}</p>`;
      return;
    }
    try {
      const { data, error } = await client
        .from("csc_centers")
        .select("id, vle_name, address, state, district, pincode, is_claimed")
        /* no status filter needed, fetch all */
        .order("is_claimed", { ascending: false }) // verified first
        .order("vle_name", { ascending: true });
      if (error) throw error;
      allCentres = data || [];
      applyFilter();
    } catch (err) {
      console.error("Failed to load CSC centres:", err);
      listEl.innerHTML = `<p class="csc-empty">${tk("csc_error", "Could not load CSC centres right now. Please try again later.")}</p>`;
    }
  }

  function applyStateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const state = params.get("state");
    if (state && INDIAN_STATES.includes(state)) {
      stateFilterEl.value = state;
    }
    const q = params.get("q");
    if (q && searchEl) {
      searchEl.value = q;
    }
  }

  stateFilterEl.addEventListener("change", () => {
    const params = new URLSearchParams(window.location.search);
    if (stateFilterEl.value) {
      params.set("state", stateFilterEl.value);
    } else {
      params.delete("state");
    }
    const qs = params.toString();
    history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
    applyFilter();
  });

  if (searchEl) {
    let debounceTimer = null;
    searchEl.addEventListener("input", () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(applyFilter, 150);
    });
  }

  populateStateFilter();
  applyStateFromUrl();
  loadCentres();
})();
