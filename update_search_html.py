import os

html_code = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/img/apple-touch-icon.png">
  <link rel="icon" href="favicon.ico">
  <link rel="manifest" href="manifest.json">
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  
  <meta name="robots" content="index, follow" />
  
  <title>Government Schemes & Services Search | Sarkari Sewa India</title>
  <meta name="description" content="Search government schemes, certificates, सरकारी सेवाएं, eligibility, documents and application guides in Hindi & English. Find the right Sarkari Sewa quickly." />
  <link rel="canonical" href="https://sarkarisewaindia.com/search.html">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&display=swap&family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css" />
  <link rel="stylesheet" href="assets/css/module2.css" />
  <link rel="stylesheet" href="assets/css/module7.css" />
  <link rel="stylesheet" href="assets/css/module8.css" />

  <link rel="alternate" hreflang="hi" href="https://sarkarisewaindia.com/search.html" />
  <link rel="alternate" hreflang="en" href="https://sarkarisewaindia.com/search.html?lang=en" />
  <link rel="alternate" hreflang="x-default" href="https://sarkarisewaindia.com/search.html" />
  
  <meta property="og:title" content="Search Government Schemes & Services | Sarkari Sewa India" />
  <meta property="og:description" content="Find eligibility, documents, and application guides for any Indian government service." />
  <meta property="og:url" content="https://sarkarisewaindia.com/search.html" />
  <meta property="og:type" content="website" />
  
  <meta name="twitter:title" content="Search Government Schemes & Services | Sarkari Sewa India" />
  <meta name="twitter:description" content="Find eligibility, documents, and application guides for any Indian government service." />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://sarkarisewaindia.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://sarkarisewaindia.com/search.html?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }
  </script>
</head>
<body>
  <script>window.SS_ROOT = "";</script>

  <div id="site-header">
<div class="tricolor-rule"></div>
<a class="skip-link" href="#main-content" data-i18n="skip_to_content">Skip to main content</a>
<header class="site-header">
  <div class="container header-inner">
    <a href="index.html" class="brand">
      <span class="brand-mark">S</span>
      <span class="brand-text">
        <span class="brand-title" data-i18n="site_name">SarkariSewa India</span>
        <span class="brand-tagline" data-i18n="site_tagline">Every Indian government service, in one place</span>
      </span>
    </a>

    <nav class="main-nav" aria-label="Primary">
      <ul>
        <li><a href="index.html" data-i18n="nav_home">Home</a></li>
        <li><a href="states/index.html" data-i18n="nav_states">States</a></li>
        <li><a href="jobs/index.html" data-i18n="nav_jobs">Job Alerts</a></li>
        <li><a href="tools/eligibility-checker.html" data-i18n="nav_eligibility">Eligibility</a></li>
      </ul>
    </nav>
    <div class="header-actions">
      <button class="btn-theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
        <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </button>
      <div class="lang-switch">
        <button id="lang-hi" class="lang-btn" aria-label="Switch to Hindi">हि</button>
        <button id="lang-en" class="lang-btn" aria-label="Switch to English">A</button>
      </div>
    </div>
  </div>
</header></div>

  <main id="main-content" class="page-container">
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="index.html">Home</a><span class="sep">/</span><span class="current"><span data-lang-show="en">Search Services</span><span data-lang-show="hi">सरकारी सेवाएं खोजें</span></span>
      </nav>
  
      <section class="page-hero" style="text-align: center; padding: 40px 10px;">
        <h1 class="page-hero__title" style="font-size: 2.2rem; font-weight: 700; margin-bottom: 12px; color: #1e293b;">
          <span data-lang-show="en">Search Government Schemes & Services</span>
          <span data-lang-show="hi">सरकारी योजना और सेवाएं खोजें</span>
        </h1>
        <p class="page-hero__desc" style="font-size: 1.1rem; color: #64748b; max-width: 600px; margin: 0 auto;">
          <span data-lang-show="en">Instantly find eligibility criteria, required documents, and application guides for any Sarkari Sewa.</span>
          <span data-lang-show="hi">किसी भी सरकारी सेवा की पात्रता, ज़रूरी दस्तावेज़, और आवेदन प्रक्रिया की जानकारी सेकंडों में पाएं।</span>
        </p>
      </section>
  
      <form class="search-page-form" role="search" id="search-page-form" style="max-width: 700px; margin: 0 auto 30px auto; display: flex; gap: 10px; position: relative;">
        <label for="search-page-input" class="visually-hidden">Search Services</label>
        <input
          type="search"
          id="search-page-input"
          class="search-page-input"
          placeholder="Search PM Kisan, Aadhaar, Ration Card..."
          style="width: 100%; padding: 18px 24px; font-size: 1.1rem; border-radius: 50px; border: 2px solid #cbd5e1; box-shadow: 0 4px 6px rgba(0,0,0,0.05); outline: none;"
          autocomplete="off"
        />
        <button type="submit" class="btn btn--primary" style="position: absolute; right: 6px; top: 6px; bottom: 6px; padding: 0 24px; border-radius: 40px;">
          <span data-lang-show="en">Search</span>
          <span data-lang-show="hi">खोजें</span>
        </button>
      </form>
      
      <script>
        document.addEventListener('DOMContentLoaded', () => {
          const input = document.getElementById('search-page-input');
          if(window.getLang && window.getLang() === 'hi') {
            input.placeholder = "PM Kisan, आधार, राशन कार्ड, प्रमाण पत्र खोजें...";
          } else {
            input.placeholder = "Search PM Kisan, Aadhaar, Ration Card...";
          }
          window.addEventListener('langChanged', () => {
             if(window.getLang && window.getLang() === 'hi') {
                input.placeholder = "PM Kisan, आधार, राशन कार्ड, प्रमाण पत्र खोजें...";
             } else {
                input.placeholder = "Search PM Kisan, Aadhaar, Ration Card...";
             }
          });
        });
      </script>
  
      <div class="search-page-filters" id="search-page-filters" role="group" aria-label="Filter by category" style="display:flex; justify-content:center; flex-wrap:wrap; gap:10px; margin-bottom:20px;"></div>
  
      <p class="search-page-status" id="search-page-status" style="text-align: center; color: #64748b; font-size: 1rem; margin-bottom: 24px;"></p>
  
      <div id="search-page-results">
        <!-- Javascript renders results here -->
      </div>

    </div>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-top">
        <div>
          <h4>SarkariSewa India</h4>
          <p data-i18n="footer_desc">Your trusted portal for all Indian government services, schemes, and certificates. Information simplified for every citizen.</p>
        </div>
        <div>
          <h4 data-i18n="footer_resources_title">Resources</h4>
          <ul>
            <li><a href="project-report/index.html" data-i18n="nav_project_report">Project Report Generator</a></li>
            <li><a href="states/index.html" data-i18n="states_hub_title">State-wise Popular Services</a></li>
            <li><a href="about.html" data-i18n="footer_about_link">About</a></li>
            <li><a href="sitemap.html" data-i18n="footer_sitemap_link">Sitemap</a></li>
            <li><a href="faq.html" data-i18n="footer_faq_link">FAQ</a></li>
            <li><a href="contact.html" data-i18n="footer_contact_link">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 data-i18n="footer_support_title">Support</h4>
          <ul>
            <li><a href="support/index.html" data-i18n="footer_support_home_link">Support Home</a></li>
            <li><a href="support/state-wise-services.html" data-i18n="footer_state_link">State-wise Services</a></li>
            <li><a href="support/helpline-directory.html" data-i18n="footer_helpline_link">Helpline Directory</a></li>
            <li><a href="support/rti-guide.html" data-i18n="footer_rti_link">RTI Guide</a></li>
          </ul>
        </div>
        <div>
          <h4 data-i18n="footer_legal_title">Legal</h4>
          <ul>
            <li><a href="privacy-policy.html" data-i18n="privacy_title">Privacy Policy</a></li>
            <li><a href="disclaimer.html" data-i18n="disclaimer_title">Disclaimer</a></li>
            <li><a href="terms.html" data-i18n="terms_title">Terms &amp; Conditions</a></li>
            <li><a href="admin/login.html" data-i18n="admin_link">Staff Login</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; <span id="footer-year"></span> SarkariSewa India &bull; <span data-i18n="footer_rights">All content is for informational purposes only.</span></span>
      </div>
    </div>
  </footer>

  <script src="assets/js/main.js?v=2.4"></script>
  <script src="assets/js/search.js"></script>
  <script src="assets/js/consent.js"></script>
  <script src="assets/js/i18n-helper.js"></script>
  <script src="assets/js/supabase-client.js"></script>
  
</body>
</html>
"""

with open("search.html", "w", encoding="utf-8") as f:
    f.write(html_code)

print("Updated search.html")
