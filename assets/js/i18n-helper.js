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

/**
 * Shared "Share: WhatsApp / Telegram / Copy link" row.
 * Used on service detail pages, blog post pages, and job alert detail
 * pages so every page type gets the same sharing experience for free.
 *
 * @param {string} containerId - id of an empty element to render into
 * @param {string} shareUrl    - absolute URL to share
 * @param {string} shareTitle  - plain-text title to prefix WhatsApp shares with
 * @param {string} idPrefix    - unique id prefix so multiple rows can exist on one page without id clashes (default "share")
 */
function renderShareRow(containerId, shareUrl, shareTitle, idPrefix) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const prefix = idPrefix || "share";

  container.innerHTML = `
    <div class="job-post-share-row" aria-label="${t({ en: "Share this page", hi: "यह पेज शेयर करें" })}">
      <span class="job-post-share-row__label">${t({ en: "Share:", hi: "शेयर करें:" })}</span>
      <a class="job-post-share-icon job-post-share-icon--whatsapp" id="${prefix}-whatsapp" target="_blank" rel="noopener noreferrer" title="WhatsApp" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10 9 9.4 7.6 9.2 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
      </a>
      <a class="job-post-share-icon job-post-share-icon--telegram" id="${prefix}-telegram" target="_blank" rel="noopener noreferrer" title="Telegram" aria-label="Telegram">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M21.9 4.6c.2-1-.7-1.7-1.6-1.3L2.7 10.4c-1 .4-1 1.9.1 2.2l4.4 1.4 1.7 5.3c.2.7 1.1.9 1.6.3l2.4-2.6 4.5 3.3c.8.6 1.9.1 2.1-.8L21.9 4.6zM8 13.5l8.5-6.3c.2-.1.4.1.2.3l-7 6.9-.3 3.1-1.4-4z"/></svg>
      </a>
      <button type="button" class="job-post-share-icon job-post-share-icon--copy" id="${prefix}-copy" title="${t({ en: "Copy link", hi: "लिंक कॉपी करें" })}" aria-label="${t({ en: "Copy link", hi: "लिंक कॉपी करें" })}">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
      </button>
      <span class="job-post-share-copied" id="${prefix}-copied" hidden>${t({ en: "Link copied!", hi: "लिंक कॉपी हो गया!" })}</span>
    </div>
  `;

  const waLink = document.getElementById(`${prefix}-whatsapp`);
  if (waLink) waLink.href = `https://wa.me/?text=${encodeURIComponent(shareTitle + " — " + shareUrl)}`;
  const tgLink = document.getElementById(`${prefix}-telegram`);
  if (tgLink) tgLink.href = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
  const copyBtn = document.getElementById(`${prefix}-copy`);
  const copiedLabel = document.getElementById(`${prefix}-copied`);
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(shareUrl);
      } catch (e) {
        const tmp = document.createElement("input");
        tmp.value = shareUrl;
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand("copy");
        document.body.removeChild(tmp);
      }
      if (copiedLabel) {
        copiedLabel.hidden = false;
        setTimeout(() => { copiedLabel.hidden = true; }, 2000);
      }
    });
  }
}
