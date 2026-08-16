/* =========================================================
   SarkariSewa India — core.js
   Runs on every page. Responsibilities:
   1. Inject header/footer partials
   2. Apply saved theme (dark/light)
   3. Apply saved language (en/hi) using data-i18n attributes
   4. Wire up toggle buttons + mobile nav
   ========================================================= */

/* SS_ROOT: every page sets `window.SS_ROOT` right before loading this
   script — "" for pages at the site root (index.html), "../" for
   pages one folder deep (admin/, category/, service/), "../../" for
   two folders deep, etc. This lets the same code work whether the
   site lives at a domain root or under a GitHub Pages sub-path like
   /sarkarisewa-portal/ — every fetch and internal link below is built
   from SS_ROOT instead of assuming "/" is the site root. */
// Infer root path automatically by looking at where this script is loaded from
  let rootVal = "";
  if (typeof window !== "undefined" && window.SS_ROOT !== undefined) {
    rootVal = window.SS_ROOT;
  } else {
    const scriptTag = document.currentScript || document.querySelector('script[src*="main.js"]');
    if (scriptTag) {
      rootVal = scriptTag.getAttribute("src").split("assets/js/main.js")[0];
    }
  }
  const ROOT = rootVal;
  window.SS_ROOT = ROOT;

  const getStorage = (key, def) => {
    try { return localStorage.getItem(key) || def; } catch (e) { return def; }
  };
  const setStorage = (key, val) => {
    try { localStorage.setItem(key, val); } catch (e) {}
  };

  const SITE = {
    langData: null,
    lang: getStorage("ss_lang", "hi"),
    theme: getStorage("ss_theme", "light"),
  };
// `const` doesn't attach to `window` automatically — expose it explicitly so
// page-specific scripts (e.g. hidden-tax-calculator.js) can read the current
// language/dictionary without duplicating the i18n loading logic.
window.SITE = SITE;

// Rewrites plain relative hrefs inside an injected partial (e.g. "index.html",
// "category/x.html") to be correct from the current page's location, by
// prefixing ROOT. Leaves external links (http/https), anchors (#) and
// mailto/tel links untouched.
function rewriteInternalLinks(host) {
  host.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (/^(https?:)?\/\//.test(href) || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return;
    }
    a.setAttribute("href", ROOT + href);
  });
}

async function includePartial(selector, url) {
  const host = document.querySelector(selector);
  if (!host) return;
  
  // If the partial was already inlined by the build script, don't overwrite it
  // (prevents stale cache bugs and saves network requests).
  if (host.innerHTML.trim() !== "") {
    // The build script already rewrote links, but just in case, we can ensure events bind
    return;
  }

  try {
    // Cache bust during development/updates
    const cacheBusterUrl = url + "?v=" + new Date().getTime();
    const res = await fetch(cacheBusterUrl);
    host.innerHTML = await res.text();
    rewriteInternalLinks(host);
  } catch (err) {
    console.error("Could not load partial:", url, err);
    host.innerHTML = "<!-- partial failed to load -->";
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const icon = document.getElementById("theme-icon");
  if (icon) icon.textContent = theme === "dark" ? "☀️" : "🌙";
  SITE.theme = theme;
  setStorage("ss_theme", theme);
}

function applyLanguage(lang) {
  SITE.lang = lang;
  setStorage("ss_lang", lang);
  document.documentElement.setAttribute("lang", lang === "hi" ? "hi" : "en");
  if (!SITE.langData) return;
  const dict = SITE.langData[lang] || {};
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });
  document.dispatchEvent(new CustomEvent("ss:language-changed", { detail: { lang, dict } }));
}

async function loadLangData() {
  try {
    const cacheBusterUrl = ROOT + "data/lang.json?v=" + new Date().getTime();
    const res = await fetch(cacheBusterUrl);
    SITE.langData = await res.json();
  } catch (err) {
    console.error("Could not load language data:", err);
    SITE.langData = { en: {}, hi: {} };
  }
}

function wireHeaderControls() {
  // CSC directory temporarily hidden while the feature is still being
  // finished — hides the nav link (desktop + mobile) on every page without
  // needing to edit each page's own baked-in header markup. Also see
  // robots.txt (Disallow: /csc/) which stops Google indexing those pages
  // in the meantime, and csc/index.html (shows a "coming soon" message
  // instead of the live directory). To bring this back: delete this
  // block, remove the robots.txt line, and restore csc/index.html.
  document
    .querySelectorAll('a[href$="csc/index.html"], a[href="csc/index.html"]')
    .forEach((el) => {
      const li = el.closest("li");
      if (li) li.style.display = "none";
      else el.style.display = "none";
    });

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      applyTheme(SITE.theme === "dark" ? "light" : "dark");
    });
  }
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      applyLanguage(SITE.lang === "hi" ? "en" : "hi");
    });
  }
  const navToggle = document.getElementById("nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function ensureMainId() {
  const main = document.querySelector("main");
  if (main && !main.id) main.id = "main-content";
}

async function initSite() {
  // Apply theme immediately (before paint-ish) to avoid flash
  applyTheme(SITE.theme);
  ensureMainId();

  await Promise.all([
    includePartial("#site-header", ROOT + "partials/header.html"),
    includePartial("#site-footer", ROOT + "partials/footer.html"),
    loadLangData(),
  ]);

  wireHeaderControls();
  applyLanguage(SITE.lang);

  document.dispatchEvent(new CustomEvent("ss:ready"));
  loadAnalyticsTracking();
  // loadAuthUI(); — TEMPORARILY DISABLED. Was causing a site-wide blocking
  // bug (see assets/css/style.css and partials/header.html comments near
  // .ss-auth-modal for the full explanation). Re-enable by uncommenting
  // this line once the login feature is revisited.
}

// Module 18: Visitor Analytics — self-contained script, loaded once per
// page, that logs the page view to Supabase (skips silently if an admin
// is logged in, or if the backend isn't configured yet). See
// assets/js/analytics-track.js for the full logic.
function loadAnalyticsTracking() {
  if (document.querySelector('script[src$="assets/js/analytics-track.js"]')) return; // already on this page
  const s = document.createElement("script");
  s.src = ROOT + "assets/js/analytics-track.js";
  document.body.appendChild(s);
}

// Site-wide login/signup (auth-modal.js) — the account button/modal
// baked into every page's header needs supabase-client.js loaded
// first, then auth-modal.js to wire it up. Both guard against being
// added twice (some pages already include supabase-client.js
// statically for their own features, e.g. job-post.js).
function loadAuthUI() {
  function loadScriptOnce(src, callback) {
    if (document.querySelector(`script[src$="${src}"]`)) {
      callback();
      return;
    }
    const s = document.createElement("script");
    s.src = ROOT + src;
    s.onload = callback;
    s.onerror = () => console.warn(`Failed to load ${src}`);
    document.body.appendChild(s);
  }
  loadScriptOnce("assets/js/supabase-client.js", () => {
    loadScriptOnce("assets/js/auth-modal.js", () => {});
  });
}

document.addEventListener("DOMContentLoaded", initSite);
