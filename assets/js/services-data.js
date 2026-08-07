/* ==========================================================================
   services-data.js
   Every page that lists or looks up services should call
   fetchAllServices() instead of fetching data/services.json directly.
   It returns the 106 JSON services PLUS any published services added
   later from the admin dashboard's Services tab (Session 2), already
   normalized to the same shape — callers don't need to know or care
   which source a given service came from.

   Load order requirement: this file must load AFTER supabase-client.js
   and BEFORE whichever page script calls fetchAllServices() (home.js,
   category.js, service.js, search.js, find-services.js, support.js,
   sitemap.js, blog-post.js).
   ========================================================================== */

function normalizeJsonServices(data) {
  const arr = Array.isArray(data) ? data : (data && Array.isArray(data.services) ? data.services : []);
  // Tag with source: "json" so link-building code knows this service has a
  // pre-generated static page at service/<slug>.html (see
  // tools/generate-service-pages.py). Services without this tag (Supabase
  // admin-added, or state-wise services from data/states.json) fall back to
  // the old dynamic service/service.html?id= route, which still works for them.
  return arr.map((s) => ({ ...s, source: "json" }));
}

/**
 * Builds the href for a service link. Services generated from
 * data/services.json (source: "json") have a real static page at
 * service/<slug>.html — link there directly so crawlers see unique,
 * pre-rendered content. Everything else (Supabase admin-added services,
 * state-wise services) has no static page yet, so it keeps using the
 * original single-page-app route.
 */
function ssServiceHref(root, svc) {
  const slug = svc.slug || svc.id;
  if (svc && svc.source === "json") return `${root}service/${slug}.html`;
  return `${root}service/service.html?id=${encodeURIComponent(slug)}`;
}

/** Same logic as ssServiceHref() but returns the absolute canonical URL. */
function ssServiceCanonicalUrl(svc) {
  const slug = svc.slug || svc.id;
  if (svc && svc.source === "json") return `https://sarkarisewaindia.com/service/${slug}.html`;
  return `https://sarkarisewaindia.com/service/service.html?id=${encodeURIComponent(slug)}`;
}

/**
 * Builds the href for a category link. All 6 categories now have a real
 * static page at category/<slug>.html (see tools/generate-category-pages.py)
 * instead of the old category/category.html?cat= query-string route.
 */
function ssCategoryHref(root, slug) {
  return `${root}category/${slug}.html`;
}

/** Same logic as ssCategoryHref() but returns the absolute canonical URL. */
function ssCategoryCanonicalUrl(slug) {
  return `https://sarkarisewaindia.com/category/${slug}.html`;
}

// Converts one Supabase "services" row into the exact same shape as a
// data/services.json entry, so downstream code never has to branch on
// where a service came from.
function fromSupabaseServiceRow(row) {
  return {
    source: "db",
    id: row.slug,
    slug: row.slug,
    category: row.category,
    name: { en: row.name_en, hi: row.name_hi || row.name_en },
    shortDescription: {
      en: row.short_description_en || "",
      hi: row.short_description_hi || row.short_description_en || "",
    },
    officialLinks: row.official_links || [],
    helpline: row.helpline || "",
    dateAdded: row.date_added || (row.created_at ? row.created_at.slice(0, 10) : ""),
    eligibility: row.eligibility || [],
    documentsRequired: row.documents_required || [],
    faqs: row.faqs || [],
    relatedServices: row.related_services || [],
  };
}

async function fetchDbServices() {
  try {
    if (typeof getSupabaseClient !== "function") return [];
    const client = await getSupabaseClient();
    if (!client) return [];
    const { data, error } = await client.from("services").select("*").eq("status", "published");
    if (error) throw error;
    return (data || []).map(fromSupabaseServiceRow);
  } catch (err) {
    console.error("Could not load services added from the admin dashboard:", err);
    return [];
  }
}

/**
 * Returns the merged list: every service from data/services.json plus
 * every published service from the Supabase "services" table. If a slug
 * exists in both (shouldn't normally happen), the JSON version wins so a
 * hand-edited JSON entry always takes precedence.
 */
async function fetchAllServices() {
  const ROOT = typeof window !== "undefined" && window.SS_ROOT ? window.SS_ROOT : "";
  const [rawJson, dbServices] = await Promise.all([
    fetch(`${ROOT}data/services.json`).then((r) => r.json()),
    fetchDbServices(),
  ]);
  const jsonServices = normalizeJsonServices(rawJson);
  const jsonSlugs = new Set(jsonServices.map((s) => s.slug));
  const newDbServices = dbServices.filter((s) => !jsonSlugs.has(s.slug));
  return jsonServices.concat(newDbServices);
}
