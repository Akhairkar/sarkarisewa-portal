/* ==========================================================================
   i18n-helper.js  (FIXED — now matches core.js, the site's real language system)
   Module 2 scripts (category.js, service.js) and home.js all use this to
   know the current language ("en" | "hi") and pick the right string out of
   bilingual JSON objects like { en: "...", hi: "..." }.

   PREVIOUS BUG: this file used its own invented localStorage key ("ss-lang")
   and its own invented event ("ss:langchange"), which core.js never wrote to
   or fired. That meant getLang()/onLangChange() were silently disconnected
   from the site's real language toggle. Fixed below to match core.js exactly:
     - real key:   "ss_lang"   (underscore, set by core.js applyLanguage())
     - real event: "ss:language-changed", fired with e.detail.lang
     - default:    "hi"        (core.js defaults to Hindi, not English)
   ========================================================================== */

const LANG_KEY = "ss_lang";

function getLang() {
  // Prefer the live in-memory value core.js maintains (most up to date,
  // available the instant applyLanguage() runs, even before the event fires).
  if (window.SITE && SITE.lang) return SITE.lang;
  const stored = localStorage.getItem(LANG_KEY);
  return stored === "en" ? "en" : "hi";
}

/**
 * Pick the right string/value out of a { en, hi } object.
 * Falls back to en, then hi, then an empty string, so missing
 * translations never render as "undefined".
 */
function t(bilingualObj) {
  if (!bilingualObj) return "";
  if (typeof bilingualObj === "string") return bilingualObj;
  const lang = getLang();
  return bilingualObj[lang] || bilingualObj.en || bilingualObj.hi || "";
}

/**
 * Re-render callback registration for when the user flips the language
 * toggle without a page reload. core.js's applyLanguage() already fires
 * window's "ss:language-changed" CustomEvent with { detail: { lang, dict } }
 * on the `document` — this just listens for the real thing.
 */
function onLangChange(callback) {
  document.addEventListener("ss:language-changed", (e) => callback(e.detail.lang));
}
