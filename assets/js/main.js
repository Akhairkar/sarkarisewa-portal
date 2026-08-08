/* =========================================================
   SarkariSewa Portal — core.js
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
const ROOT = typeof window.SS_ROOT === "string" ? window.SS_ROOT : "";

const SITE = {
  langData: null,
  lang: localStorage.getItem("ss_lang") || "hi",
  theme: localStorage.getItem("ss_theme") || "light",
};

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
  // If header/footer is already baked into static HTML, do not wipe it via fetch!
  if (host.children.length > 0 && host.innerHTML.trim().length > 50) return;
  try {
    const res = await fetch(url);
    if (!res.ok) return;
    const text = await res.text();
    if (text && text.trim().length > 10) {
      host.innerHTML = text;
      rewriteInternalLinks(host);
    }
  } catch (err) {
    console.error("Could not load partial:", url, err);
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const icon = document.getElementById("theme-icon");
  if (icon) icon.textContent = theme === "dark" ? "☀️" : "🌙";
  const mobileIcon = document.getElementById("mobile-theme-icon");
  if (mobileIcon) mobileIcon.textContent = theme === "dark" ? "☀️" : "🌙";
  SITE.theme = theme;
  localStorage.setItem("ss_theme", theme);
}

function applyLanguage(lang) {
  SITE.lang = lang;
  localStorage.setItem("ss_lang", lang);
  document.documentElement.setAttribute("lang", lang === "hi" ? "hi" : "en");
  if (!SITE.langData) return;
  const dict = SITE.langData[lang] || {};
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined && dict[key] !== null && dict[key] !== "") {
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined && dict[key] !== null && dict[key] !== "") {
      el.setAttribute("placeholder", dict[key]);
    }
  });
  document.dispatchEvent(new CustomEvent("ss:language-changed", { detail: { lang, dict } }));
}

async function loadLangData() {
  try {
    const res = await fetch(ROOT + "data/lang.json");
    SITE.langData = await res.json();
  } catch (err) {
    console.error("Could not load language data:", err);
    SITE.langData = { en: {}, hi: {} };
  }
}

function wireHeaderControls() {
  const toggleTheme = () => applyTheme(SITE.theme === "dark" ? "light" : "dark");
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
  const mobileThemeBtn = document.getElementById("mobile-theme-toggle");
  if (mobileThemeBtn) mobileThemeBtn.addEventListener("click", toggleTheme);

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
  initWhatsAppFloatingWidget();
}

function initWhatsAppFloatingWidget() {
  if (document.getElementById("ss-wa-widget") || localStorage.getItem("ss_wa_closed")) return;
  const link = "https://whatsapp.com/channel/0029VbDj7gCDp2Q8SYdFwj14";
  const isHindi = SITE.lang === "hi";
  const text = isHindi ? "👉 ताज़ा भर्ती व योजना अपडेट्स हेतु WhatsApp से जुड़ें" : "👉 Join WhatsApp Channel for instant job & scheme alerts";

  const bar = document.createElement("div");
  bar.id = "ss-wa-widget";
  bar.className = "ss-wa-wrapper";
  bar.innerHTML = `
    <a href="${link}" target="_blank" rel="noopener noreferrer" class="ss-wa-floating-bar" aria-label="Join WhatsApp Channel">
      <svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10 9 9.4 7.6 9.2 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
      <span>${text}</span>
    </a>
    <button type="button" class="ss-wa-close-btn" id="ss-wa-close" title="Close">✕</button>
  `;
  document.body.appendChild(bar);

  const closeBtn = document.getElementById("ss-wa-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      bar.remove();
      localStorage.setItem("ss_wa_closed", "1");
    });
  }
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
