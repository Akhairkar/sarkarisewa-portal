/* ==========================================================================
   i18n-helper.js
   Module 2 scripts (category.js, service.js) need to know the current
   language ("en" | "hi") to pick the right string out of bilingual JSON
   objects like { en: "...", hi: "..." }.

   ASSUMPTION TO VERIFY AGAINST MODULE 1:
   Module 1's STATUS.md says the language toggle is "saved in localStorage".
   This helper assumes the key is "ss-lang" with value "en" or "hi".
   If Module 1 actually used a different key name (e.g. "lang", "ss_lang"),
   change LANG_KEY below to match — that's the only line that needs to change.
   ========================================================================== */

const LANG_KEY = "ss-lang";

function getLang() {
  const stored = localStorage.getItem(LANG_KEY);
  return stored === "hi" ? "hi" : "en";
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
 * toggle without a page reload. Module 1's toggle should call
 * window.dispatchEvent(new CustomEvent("ss:langchange")) after it updates
 * localStorage — wire that up in main.js if it doesn't already exist.
 */
function onLangChange(callback) {
  window.addEventListener("ss:langchange", callback);
}
