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
  try {
    const res = await fetch(url);
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
    const res = await fetch(ROOT + "data/lang.json");
    SITE.langData = await res.json();
  } catch (err) {
    console.error("Could not load language data:", err);
    SITE.langData = { en: {}, hi: {} };
  }
}

function wireHeaderControls() {
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
}

document.addEventListener("DOMContentLoaded", initSite);
