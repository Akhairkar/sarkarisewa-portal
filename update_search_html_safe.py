import os
import re

file_path = "search.html"
with open(file_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Fix Meta tags
meta_pattern = r'<title>.*?</title>\s*<meta name="description".*?>'
new_meta = """<title>Government Schemes & Services Search | Sarkari Sewa India</title>
  <meta name="description" content="Search government schemes, certificates, सरकारी सेवाएं, eligibility, documents and application guides in Hindi & English. Find the right Sarkari Sewa quickly." />"""
html = re.sub(meta_pattern, new_meta, html, flags=re.DOTALL)

# Add schema just before </head>
schema_code = """
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
</head>"""
if 'application/ld+json' not in html:
    html = html.replace('</head>', schema_code)

# Replace everything between <main...> and </main>
new_main = """<main id="main-content" class="page-container">
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="index.html">Home</a><span class="sep">/</span><span class="current"><span data-lang-show="en">Search Services</span><span data-lang-show="hi">सरकारी सेवाएं खोजें</span></span>
      </nav>
  
      <section class="page-hero" style="text-align: center; padding: 40px 10px;">
        <h1 class="page-hero__title" style="font-size: 2.2rem; font-weight: 700; margin-bottom: 12px; color: var(--color-text);">
          <span data-lang-show="en">Search Government Schemes & Services</span>
          <span data-lang-show="hi">सरकारी योजना और सेवाएं खोजें</span>
        </h1>
        <p class="page-hero__desc" style="font-size: 1.1rem; color: var(--color-text-muted); max-width: 600px; margin: 0 auto;">
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
          style="width: 100%; padding: 18px 24px; font-size: 1.1rem; border-radius: 50px; border: 2px solid var(--color-border); background: var(--color-surface); color: var(--color-text); box-shadow: 0 4px 6px rgba(0,0,0,0.05); outline: none;"
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
  
      <p class="search-page-status" id="search-page-status" style="text-align: center; color: var(--color-text-muted); font-size: 1rem; margin-bottom: 24px;"></p>
  
      <div id="search-page-results">
        <!-- Javascript renders results here -->
      </div>
    </div>
  </main>"""

html = re.sub(r'<main.*?</main>', new_main, html, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(html)
