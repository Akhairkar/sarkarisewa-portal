#!/usr/bin/env python3
"""
Google Web Stories Generator for SarkariSewaIndia.com
Generates AMP-based visual stories that appear in Google Discover.
Usage: python generate_web_story.py
"""
import os
import json
from datetime import datetime

SITE_URL = "https://sarkarisewaindia.com"
STORIES_DIR = "web-stories"
LOGO_URL = f"{SITE_URL}/assets/img/favicon-32.png"

# --- STORY DATA ---
# Each story has: slug, title, description, pages (list of slides)
# Each slide: heading, text, bg_color, emoji
STORIES = [
    {
        "slug": "pm-kisan-status-check-2026",
        "title": "PM Kisan Status Check 2026 — 5 Easy Steps",
        "titleHi": "PM किसान स्टेटस चेक 2026 — 5 आसान स्टेप्स",
        "description": "Check your PM Kisan 18th Installment status in just 5 simple steps. Direct link inside!",
        "descHi": "PM किसान 18वीं किस्त का स्टेटस सिर्फ 5 आसान स्टेप्स में चेक करें। डायरेक्ट लिंक अंदर!",
        "category": "Government Schemes",
        "cta_url": f"{SITE_URL}/service/pm-kisan.html",
        "cta_text": "Check Status Now →",
        "pages": [
            {"heading": "PM Kisan Status", "text": "18वीं किस्त आ गई? ऐसे चेक करें अपना स्टेटस", "bg": "#10243E", "emoji": "🌾"},
            {"heading": "Step 1", "text": "pmkisan.gov.in पर जाएं और 'Beneficiary Status' पर क्लिक करें", "bg": "#1C3A5E", "emoji": "🌐"},
            {"heading": "Step 2", "text": "अपना आधार नंबर या मोबाइल नंबर दर्ज करें", "bg": "#146B3A", "emoji": "📱"},
            {"heading": "Step 3", "text": "'Get Data' बटन पर क्लिक करें", "bg": "#D97F2B", "emoji": "🔍"},
            {"heading": "Step 4", "text": "आपकी सभी किस्तों की जानकारी स्क्रीन पर दिखेगी", "bg": "#10243E", "emoji": "✅"},
            {"heading": "Step 5", "text": "₹2000 नहीं आया? e-KYC करवाएं — ये सबसे बड़ी वजह है!", "bg": "#8B0000", "emoji": "⚠️"},
            {"heading": "पूरी जानकारी यहां", "text": "SarkariSewa India पर सभी सरकारी सेवाओं की जानकारी पाएं", "bg": "#10243E", "emoji": "🏛️"},
        ]
    },
    {
        "slug": "ration-card-ekyc-kaise-kare-2026",
        "title": "Ration Card e-KYC Kaise Kare 2026 — Step by Step",
        "titleHi": "राशन कार्ड e-KYC कैसे करें 2026 — स्टेप बाय स्टेप",
        "description": "Ration Card e-KYC is now mandatory! Learn how to complete it online in 5 minutes before your card gets suspended.",
        "descHi": "राशन कार्ड e-KYC अब अनिवार्य है! 5 मिनट में ऑनलाइन कैसे करें — वरना कार्ड सस्पेंड हो जाएगा।",
        "category": "Identity Documents",
        "cta_url": f"{SITE_URL}/service/ration-card.html",
        "cta_text": "Full Guide →",
        "pages": [
            {"heading": "⚠️ राशन कार्ड e-KYC", "text": "2026 में e-KYC अनिवार्य! नहीं किया तो राशन बंद हो जाएगा", "bg": "#8B0000", "emoji": "⚠️"},
            {"heading": "e-KYC क्या है?", "text": "आधार से राशन कार्ड को लिंक करना — ताकि फर्जी कार्ड बंद हों", "bg": "#10243E", "emoji": "🔗"},
            {"heading": "Online कैसे करें", "text": "Mera Ration ऐप डाउनलोड करें या नजदीकी CSC सेंटर जाएं", "bg": "#146B3A", "emoji": "📲"},
            {"heading": "ज़रूरी दस्तावेज़", "text": "आधार कार्ड + राशन कार्ड + मोबाइल नंबर (आधार से लिंक्ड)", "bg": "#D97F2B", "emoji": "📋"},
            {"heading": "कितना समय लगता है?", "text": "सिर्फ 5 मिनट! OTP आएगा, वेरिफाई करें, हो गया ✅", "bg": "#1C3A5E", "emoji": "⏱️"},
            {"heading": "Last Date", "text": "जल्दी करें — सरकार ने डेडलाइन बढ़ाई है पर कभी भी बंद हो सकती है", "bg": "#8B0000", "emoji": "📅"},
            {"heading": "पूरी जानकारी", "text": "SarkariSewa India पर स्टेप-बाय-स्टेप गाइड पढ़ें", "bg": "#10243E", "emoji": "🏛️"},
        ]
    },
    {
        "slug": "ayushman-card-download-2026",
        "title": "Ayushman Card Download 2026 — Free ₹5 Lakh Health Cover",
        "titleHi": "आयुष्मान कार्ड डाउनलोड 2026 — ₹5 लाख मुफ्त इलाज",
        "description": "Download your Ayushman Bharat Health Card online. Get free treatment up to ₹5 Lakh per year at any empanelled hospital.",
        "descHi": "आयुष्मान भारत हेल्थ कार्ड ऑनलाइन डाउनलोड करें। किसी भी सूचीबद्ध अस्पताल में ₹5 लाख तक मुफ्त इलाज पाएं।",
        "category": "Health",
        "cta_url": f"{SITE_URL}/service/ayushman-bharat-card.html",
        "cta_text": "Download Card →",
        "pages": [
            {"heading": "आयुष्मान भारत कार्ड", "text": "₹5 लाख तक मुफ्त इलाज — क्या आपके पास ये कार्ड है?", "bg": "#10243E", "emoji": "🏥"},
            {"heading": "कौन बनवा सकता है?", "text": "BPL परिवार, श्रमिक, किसान — SECC 2011 लिस्ट में नाम होना चाहिए", "bg": "#146B3A", "emoji": "👨‍👩‍👧‍👦"},
            {"heading": "ऐसे चेक करें पात्रता", "text": "pmjay.gov.in पर जाएं → 'Am I Eligible' पर क्लिक करें → मोबाइल नंबर डालें", "bg": "#1C3A5E", "emoji": "✅"},
            {"heading": "कार्ड कैसे बनवाएं?", "text": "नजदीकी CSC सेंटर जाएं या Ayushman App से ऑनलाइन अप्लाई करें", "bg": "#D97F2B", "emoji": "📲"},
            {"heading": "फायदे देखिए", "text": "1500+ बीमारियों का इलाज मुफ्त — सर्जरी, दवाई, भर्ती सब कुछ!", "bg": "#146B3A", "emoji": "💊"},
            {"heading": "डाउनलोड कैसे करें?", "text": "beneficiary.nha.gov.in से OTP वेरिफाई करके PDF डाउनलोड करें", "bg": "#10243E", "emoji": "📥"},
            {"heading": "पूरी गाइड पढ़ें", "text": "SarkariSewa India पर स्टेप-बाय-स्टेप प्रोसेस देखें", "bg": "#10243E", "emoji": "🏛️"},
        ]
    }
]


def generate_story_html(story):
    """Generate a valid AMP Web Story HTML file."""
    
    now = datetime.now().strftime("%Y-%m-%dT%H:%M:%S+05:30")
    
    # Build amp-story-page elements
    pages_html = ""
    for i, page in enumerate(story["pages"]):
        is_last = i == len(story["pages"]) - 1
        cta_html = ""
        if is_last:
            cta_html = f'''
            <amp-story-cta-layer>
              <a href="{story['cta_url']}" class="cta-btn">{story['cta_text']}</a>
            </amp-story-cta-layer>'''
        
        pages_html += f'''
    <amp-story-page id="page-{i+1}" auto-advance-after="7s">
      <amp-story-grid-layer template="fill">
        <div class="bg-fill" style="background: {page['bg']};"></div>
      </amp-story-grid-layer>
      <amp-story-grid-layer template="vertical" class="center-content">
        <div class="emoji-icon">{page['emoji']}</div>
        <h2 class="slide-heading">{page['heading']}</h2>
        <p class="slide-text">{page['text']}</p>
      </amp-story-grid-layer>{cta_html}
    </amp-story-page>
'''

    html = f'''<!DOCTYPE html>
<html ⚡>
<head>
  <meta charset="utf-8">
  <title>{story['title']}</title>
  <meta name="description" content="{story['description']}">
  <link rel="canonical" href="{SITE_URL}/web-stories/{story['slug']}.html">
  <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
  <meta name="robots" content="max-image-preview:large">

  <!-- Open Graph -->
  <meta property="og:title" content="{story['title']}">
  <meta property="og:description" content="{story['description']}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="{SITE_URL}/web-stories/{story['slug']}.html">

  <!-- AMP Boilerplate (REQUIRED) -->
  <style amp-boilerplate>body{{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}}@-webkit-keyframes -amp-start{{from{{visibility:hidden}}to{{visibility:visible}}}}@-moz-keyframes -amp-start{{from{{visibility:hidden}}to{{visibility:visible}}}}@keyframes -amp-start{{from{{visibility:hidden}}to{{visibility:visible}}}}</style><noscript><style amp-boilerplate>body{{-webkit-animation:none;-moz-animation:none;animation:none}}</style></noscript>

  <!-- AMP Runtime -->
  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "{story['title']}",
    "description": "{story['description']}",
    "url": "{SITE_URL}/web-stories/{story['slug']}.html",
    "datePublished": "{now}",
    "dateModified": "{now}",
    "publisher": {{
      "@type": "Organization",
      "name": "SarkariSewa India",
      "logo": {{
        "@type": "ImageObject",
        "url": "{LOGO_URL}"
      }}
    }}
  }}
  </script>

  <style amp-custom>
    * {{ margin: 0; padding: 0; box-sizing: border-box; }}
    .bg-fill {{ width: 100%; height: 100%; }}
    .center-content {{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
      text-align: center;
    }}
    .emoji-icon {{
      font-size: 4rem;
      margin-bottom: 16px;
      filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
    }}
    .slide-heading {{
      color: #fff;
      font-family: 'Noto Sans Devanagari', 'Noto Sans', sans-serif;
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 12px;
      text-shadow: 0 2px 8px rgba(0,0,0,0.5);
    }}
    .slide-text {{
      color: rgba(255,255,255,0.92);
      font-family: 'Noto Sans Devanagari', 'Noto Sans', sans-serif;
      font-size: 1.15rem;
      line-height: 1.6;
      max-width: 90%;
      text-shadow: 0 1px 4px rgba(0,0,0,0.4);
    }}
    .cta-btn {{
      display: inline-block;
      background: #D97F2B;
      color: #fff;
      padding: 14px 28px;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 700;
      font-size: 1.1rem;
      font-family: 'Noto Sans', sans-serif;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }}
  </style>
</head>
<body>
  <amp-story
    standalone
    title="{story['titleHi']}"
    publisher="SarkariSewa India"
    publisher-logo-src="{LOGO_URL}"
    poster-portrait-src="{SITE_URL}/assets/img/og-image.png"
  >
{pages_html}
  </amp-story>
</body>
</html>'''
    
    return html


def generate_stories_sitemap(stories):
    """Generate a sitemap specifically for web stories."""
    now = datetime.now().strftime("%Y-%m-%dT%H:%M:%S+05:30")
    urls = ""
    for s in stories:
        urls += f"""  <url>
    <loc>{SITE_URL}/web-stories/{s['slug']}.html</loc>
    <lastmod>{now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
"""
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{urls}</urlset>'''


def generate_stories_index(stories):
    """Generate an index page listing all web stories."""
    cards = ""
    for s in stories:
        cards += f'''
      <a href="{s['slug']}.html" class="story-card" style="background: linear-gradient(135deg, {s['pages'][0]['bg']}, {s['pages'][1]['bg']}); text-decoration: none; color: #fff; padding: 24px; border-radius: 16px; display: flex; flex-direction: column; justify-content: flex-end; min-height: 280px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: transform 0.2s;">
        <span style="font-size: 2.5rem; margin-bottom: 8px;">{s['pages'][0]['emoji']}</span>
        <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 4px;">{s['titleHi']}</h3>
        <p style="font-size: 0.85rem; opacity: 0.85;">{s['descHi'][:80]}...</p>
      </a>'''

    return f'''<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Stories — SarkariSewa India</title>
  <meta name="description" content="सरकारी सेवाओं की विजुअल स्टोरीज — PM Kisan, Ration Card, Ayushman Bharat और बहुत कुछ।">
  <link rel="canonical" href="{SITE_URL}/web-stories/">
  <meta name="robots" content="max-image-preview:large">
  <link rel="stylesheet" href="../assets/css/style.css">
  <style>
    .stories-grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; padding: 20px 0; }}
    .story-card:hover {{ transform: translateY(-4px); }}
    .stories-hero {{ text-align: center; padding: 40px 16px 20px; }}
    .stories-hero h1 {{ font-size: 2rem; margin-bottom: 8px; color: var(--color-text); }}
    .stories-hero p {{ color: var(--color-text-muted); font-size: 1.05rem; }}
  </style>
</head>
<body>
  <script>window.SS_ROOT = "../";</script>
  <div id="site-header"></div>
  <main class="container">
    <div class="stories-hero">
      <h1>📱 Web Stories</h1>
      <p>सरकारी सेवाओं की विजुअल स्टोरीज — स्वाइप करके पढ़ें</p>
    </div>
    <div class="stories-grid">
{cards}
    </div>
  </main>
  <div id="site-footer"></div>
  <script src="../assets/js/main.js?v=2.4" defer></script>
  <script src="../assets/js/i18n-helper.js" defer></script>
</body>
</html>'''


# --- MAIN ---
if __name__ == "__main__":
    os.makedirs(STORIES_DIR, exist_ok=True)
    
    # Generate each story
    for story in STORIES:
        html = generate_story_html(story)
        filepath = os.path.join(STORIES_DIR, f"{story['slug']}.html")
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"✅ Created: {filepath}")
    
    # Generate stories sitemap
    sitemap = generate_stories_sitemap(STORIES)
    sitemap_path = os.path.join(STORIES_DIR, "sitemap-stories.xml")
    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(sitemap)
    print(f"✅ Created: {sitemap_path}")
    
    # Generate stories index
    index_html = generate_stories_index(STORIES)
    index_path = os.path.join(STORIES_DIR, "index.html")
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(index_html)
    print(f"✅ Created: {index_path}")
    
    # Add stories sitemap reference to main sitemap
    with open("sitemap.xml", "r", encoding="utf-8") as f:
        main_sitemap = f.read()
    
    story_urls = ""
    for s in STORIES:
        url = f"{SITE_URL}/web-stories/{s['slug']}.html"
        if url not in main_sitemap:
            story_urls += f'''  <url>
    <loc>{url}</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
'''
    
    # Also add index
    idx_url = f"{SITE_URL}/web-stories/"
    if idx_url not in main_sitemap:
        story_urls += f'''  <url>
    <loc>{idx_url}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
'''
    
    if story_urls:
        main_sitemap = main_sitemap.replace("</urlset>", story_urls + "</urlset>")
        with open("sitemap.xml", "w", encoding="utf-8") as f:
            f.write(main_sitemap)
        print("✅ Updated main sitemap.xml with web stories URLs")
    
    print(f"\n🎉 Successfully generated {len(STORIES)} Web Stories!")
    print("Next: git add, commit, push, then submit sitemap in Google Search Console")
