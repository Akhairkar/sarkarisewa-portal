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
  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    const key = el.getAttribute("data-i18n-content");
    if (dict[key] !== undefined) el.setAttribute("content", dict[key]);
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
  const dropToggles = document.querySelectorAll('.nav-dropdown-toggle');
  dropToggles.forEach(t => {
    t.addEventListener('click', (e) => {
      if (window.innerWidth < 1024 || 'ontouchstart' in window || navigator.maxTouchPoints > 0) {
        const parent = t.closest('.nav-dropdown');
        if (parent && !parent.classList.contains('active')) {
          e.preventDefault();
          document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('active'));
          parent.classList.add('active');
        }
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('active'));
    }
  });

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
  initTelegramBanner();
}

function initTelegramBanner() {
  const JOINED_KEY = "tg_user_joined_channel";
  const DISMISS_SESSION_KEY = "tg_dismissed_session";

  try {
    // 1. If user already joined, NEVER show again (Lifetime)
    if (localStorage.getItem(JOINED_KEY) === "true") {
      return;
    }
    // 2. If user clicked cancel in this browsing session, don't show on immediate page jumps
    if (sessionStorage.getItem(DISMISS_SESSION_KEY) === "true") {
      return;
    }
  } catch (e) {}

  // Remove any stale duplicate banners first
  const existing = document.getElementById("tg-join-banner");
  if (existing) {
    existing.remove();
  }

  const banner = document.createElement("div");
  banner.id = "tg-join-banner";
  banner.setAttribute("role", "complementary");
  banner.setAttribute("aria-label", "Telegram Channel Join Banner");
  banner.innerHTML = `
    <div class="tg-banner-top">
      <div class="tg-icon-wrap">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      </div>
      <div class="tg-text-wrap">
        <div class="tg-channel-name">SarkariSewa India 🇮🇳</div>
        <div class="tg-tagline">📢 रोज़ाना FREE सरकारी अपडेट्स पायें!</div>
      </div>
      <button class="tg-close-btn" id="tg-close-trigger" onclick="closeTgBanner()" aria-label="Close">✕</button>
    </div>
    <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" class="tg-join-btn" id="tg-join-trigger" onclick="closeTgBanner(true)">
      <span class="tg-bell">🔔</span>
      Free Join करें — अभी!
      <span class="tg-arrow">→</span>
    </a>
    <div class="tg-stats">
      <span class="tg-dot"></span>
      Naukri Alerts &nbsp;•&nbsp; Sarkari Yojana &nbsp;•&nbsp; Exam Updates &nbsp;•&nbsp; 100% Free
    </div>
  `;

  document.body.appendChild(banner);

  window.closeTgBanner = function(isJoined) {
    const el = document.getElementById("tg-join-banner");
    if (el) {
      el.style.transform = "translateX(-50%) translateY(140px)";
      el.style.opacity = "0";
      setTimeout(() => {
        el.style.display = "none";
        el.remove();
      }, 300);
    }
    try {
      if (isJoined) {
        localStorage.setItem(JOINED_KEY, "true");
      } else {
        sessionStorage.setItem(DISMISS_SESSION_KEY, "true");
      }
    } catch (e) {}
  };

  const closeBtn = document.getElementById("tg-close-trigger");
  if (closeBtn) {
    closeBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      window.closeTgBanner(false);
    });
  }

  setTimeout(() => {
    if (document.getElementById("tg-join-banner")) {
      document.getElementById("tg-join-banner").classList.add("tg-visible");
    }
  }, 2000);
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

