/* ==========================================================================
   consent.js — Module 10.5
   DPDP-compliant cookie consent: GA4 does NOT load until the visitor
   explicitly opts in. No pre-checked boxes, Reject is equally visible.

   ⚠️ SETUP REQUIRED: replace GA4_MEASUREMENT_ID below with your real
   GA4 property ID (looks like "G-XXXXXXXXXX") from analytics.google.com
   before this does anything useful. Until then this file just shows the
   banner and stores the choice — no data is sent anywhere.
   ========================================================================== */

(function () {
  const GA4_MEASUREMENT_ID = "G-XXXXXXXXXX"; // <-- replace with your real ID
  const CONSENT_KEY = "ss_cookie_consent"; // "accepted" | "rejected"

  function loadGA4() {
    if (!GA4_MEASUREMENT_ID || GA4_MEASUREMENT_ID.includes("XXXXXXXXXX")) {
      console.warn("GA4_MEASUREMENT_ID not set in assets/js/consent.js — analytics not loaded.");
      return;
    }
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(s1);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag("js", new Date());
    gtag("config", GA4_MEASUREMENT_ID, { anonymize_ip: true });
  }

  function hideBanner() {
    const el = document.getElementById("cookie-consent-banner");
    if (el) el.remove();
  }

  function renderBanner() {
    const lang = (typeof getLang === "function" ? getLang() : localStorage.getItem("ss_lang")) || "hi";
    const copy = {
      en: {
        text: "We use cookies for basic analytics to understand site usage. No data is collected until you accept.",
        accept: "Accept",
        reject: "Reject",
        policy: "Privacy Policy",
      },
      hi: {
        text: "साइट के उपयोग को समझने के लिए हम बुनियादी एनालिटिक्स कुकीज़ का उपयोग करते हैं। आपकी स्वीकृति से पहले कोई डेटा एकत्र नहीं किया जाता।",
        accept: "स्वीकार करें",
        reject: "अस्वीकार करें",
        policy: "गोपनीयता नीति",
      },
    }[lang === "en" ? "en" : "hi"];

    const root = document.createElement("div");
    root.id = "cookie-consent-banner";
    root.className = "cookie-consent-banner";
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-label", "Cookie consent");
    root.innerHTML = `
      <p class="cookie-consent-banner__text">
        ${copy.text}
        <a href="${(window.SS_ROOT || "") + "privacy-policy.html"}">${copy.policy}</a>
      </p>
      <div class="cookie-consent-banner__actions">
        <button type="button" class="cookie-consent-banner__reject">${copy.reject}</button>
        <button type="button" class="cookie-consent-banner__accept">${copy.accept}</button>
      </div>
    `;
    document.body.appendChild(root);

    root.querySelector(".cookie-consent-banner__accept").addEventListener("click", () => {
      localStorage.setItem(CONSENT_KEY, "accepted");
      hideBanner();
      loadGA4();
    });
    root.querySelector(".cookie-consent-banner__reject").addEventListener("click", () => {
      localStorage.setItem(CONSENT_KEY, "rejected");
      hideBanner();
    });
  }

  function init() {
    const existing = localStorage.getItem(CONSENT_KEY);
    if (existing === "accepted") {
      loadGA4();
      return;
    }
    if (existing === "rejected") {
      return; // respect prior choice, don't ask again, don't load anything
    }
    renderBanner();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
