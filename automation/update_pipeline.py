import os
import sys
import json
import hashlib
import time
import re
from datetime import datetime, timezone
from pathlib import Path

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

import feedparser
import requests
from bs4 import BeautifulSoup

try:
    import google.generativeai as genai
    HAS_GENAI = True
except ImportError:
    HAS_GENAI = False

# ── Paths ──────────────────────────────────────────────────────────────────
ROOT_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT_DIR / "data"
SOURCES_FILE = ROOT_DIR / "automation" / "sources.json"
LATEST_UPDATES_FILE = DATA_DIR / "latest-updates.json"
PENDING_UPDATES_FILE = DATA_DIR / "pending-updates.json"
UPDATES_DIR = ROOT_DIR / "updates"
HEADER_PARTIAL = ROOT_DIR / "partials" / "header.html"
FOOTER_PARTIAL = ROOT_DIR / "partials" / "footer.html"

BASE_URL = "https://sarkarisewaindia.com"
MAX_ITEMS_PER_SOURCE = 8
MAX_TOTAL_UPDATES = 150

# ── Keyword & Service Mapping Database ─────────────────────────────────────
SERVICE_MAPPINGS = [
    {
        "keywords": ["pm kisan", "kisan", "farmer", "agriculture", "krishi", "crop", "fasal", "fertilizer", "soil"],
        "services": [
            {"title": "PM Kisan Samman Nidhi", "url": "../service/pm-kisan.html", "icon": "🌾"},
            {"title": "Kisan Credit Card (KCC)", "url": "../service/kisan-credit-card.html", "icon": "💳"},
            {"title": "PM Fasal Bima Yojana", "url": "../service/pm-fasal-bima.html", "icon": "🛡️"},
            {"title": "PM Kusum Solar Scheme", "url": "../service/pm-kusum-solar-yojana.html", "icon": "☀️"}
        ]
    },
    {
        "keywords": ["pension", "epfo", "pf", "provident fund", "nps", "retirement", "senior citizen", "vridha", "atal pension"],
        "services": [
            {"title": "National Pension System (NPS)", "url": "../service/national-pension-system.html", "icon": "💰"},
            {"title": "Atal Pension Yojana (APY)", "url": "../service/atal-pension-yojana.html", "icon": "👵"},
            {"title": "EPFO Member Passbook & Claim", "url": "../service/epfo-services.html", "icon": "📈"},
            {"title": "Indira Gandhi Pension Scheme", "url": "../service/national-social-assistance-programme.html", "icon": "🏛️"}
        ]
    },
    {
        "keywords": ["health", "hospital", "ayushman", "swasthya", "medical", "treatment", "bima", "doctor", "medicine"],
        "services": [
            {"title": "Ayushman Bharat Card (ABHA)", "url": "../service/ayushman-bharat-card.html", "icon": "🏥"},
            {"title": "Jan Aushadhi Kendra Directory", "url": "../service/jan-aushadhi.html", "icon": "💊"},
            {"title": "ABHA Digital Health ID", "url": "../service/abha-health-card.html", "icon": "🪪"},
            {"title": "PM Matru Vandana Yojana", "url": "../service/pm-matru-vandana-yojana.html", "icon": "👶"}
        ]
    },
    {
        "keywords": ["ration", "food", "khadya", "anna", "rashan", "dealer", "quota", "bpl", "aayush"],
        "services": [
            {"title": "Ration Card Apply / Transfer", "url": "../service/ration-card.html", "icon": "🍚"},
            {"title": "One Nation One Ration Card", "url": "../service/ration-card.html", "icon": "🌐"},
            {"title": "CSC / Jan Seva Kendra Locator", "url": "../tools/csc-locator.html", "icon": "📍"},
            {"title": "Antyodaya Anna Yojana", "url": "../service/ration-card.html", "icon": "🌾"}
        ]
    },
    {
        "keywords": ["job", "naukri", "recruitment", "vacancy", "exam", "upsc", "ssc", "admit card", "result", "railway"],
        "services": [
            {"title": "Latest Sarkari Job Alerts", "url": "../jobs/index.html", "icon": "💼"},
            {"title": "Govt Exam Calendar 2026", "url": "../exams/index.html", "icon": "📅"},
            {"title": "Govt Exam Photo Resizer", "url": "../tools/photo-resizer.html", "icon": "🖼️"},
            {"title": "Exam Age Eligibility Calculator", "url": "../exam-age-calculator.html", "icon": "⏳"}
        ]
    },
    {
        "keywords": ["aadhaar", "pan", "passport", "identity", "voter", "driving license", "parivahan", "rc"],
        "services": [
            {"title": "Aadhaar Card Update Guide", "url": "../service/aadhaar-card.html", "icon": "🆔"},
            {"title": "PAN Card Instant Apply & Link", "url": "../service/pan-card.html", "icon": "💳"},
            {"title": "Voter ID Card Online Portal", "url": "../service/voter-id-card.html", "icon": "🗳️"},
            {"title": "Driving License & Parivahan", "url": "../service/driving-license.html", "icon": "🚗"}
        ]
    }
]

DEFAULT_SERVICES = [
    {"title": "Aadhaar Card Services", "url": "../service/aadhaar-card.html", "icon": "💳"},
    {"title": "PM Kisan Samman Nidhi", "url": "../service/pm-kisan.html", "icon": "🌾"},
    {"title": "Ayushman Bharat Golden Card", "url": "../service/ayushman-bharat-card.html", "icon": "🏥"},
    {"title": "CSC / Jan Seva Kendra Locator", "url": "../tools/csc-locator.html", "icon": "📍"}
]

# ── Helpers ────────────────────────────────────────────────────────────────

def load_json(filepath, default):
    try:
        return json.loads(Path(filepath).read_text(encoding="utf-8"))
    except Exception:
        return default

def save_json(filepath, data):
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)
    Path(filepath).write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")

def generate_id(url, title):
    return hashlib.md5(f"{url}-{title}".encode("utf-8")).hexdigest()[:12]

def slugify(text):
    s = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return s[:75] if len(s) > 75 else s

def get_related_services(text):
    text_lower = text.lower()
    for mapping in SERVICE_MAPPINGS:
        if any(kw in text_lower for kw in mapping["keywords"]):
            return mapping["services"]
    return DEFAULT_SERVICES

RELEVANT_KEYWORDS = [
    "scheme", "yojana", "portal", "subsidy", "pension", "kisan", "farmer",
    "ration", "aadhaar", "pan", "ayushman", "epfo", "pf", "jobs", "recruitment",
    "exam", "scholarship", "housing", "pmay", "loan", "mudra", "women", "welfare",
    "education", "health", "tax", "budget", "certificate", "nps", "guidelines",
    "notification", "application", "deadline", "last date", "eligibility",
    "योजना", "छात्रवृत्ति", "किसान", "पेंशन", "राशन", "आधार", "आयुष्मान", "भर्ती"
]

def is_relevant_notification(title, summary):
    combined = f"{title} {summary}".lower()
    return any(kw in combined for kw in RELEVANT_KEYWORDS)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "Accept": "application/rss+xml, application/xml, text/xml, */*",
}

def fetch_rss(source):
    items = []
    try:
        resp = requests.get(source["url"], headers=HEADERS, timeout=12)
        resp.raise_for_status()
        feed = feedparser.parse(resp.content)
    except Exception as e:
        print(f"Error fetching {source['name']}: {e}")
        return items

    for entry in feed.entries[:MAX_ITEMS_PER_SOURCE]:
        title = entry.get("title", "").strip()
        raw_summary = entry.get("summary", "")
        clean_summary = BeautifulSoup(raw_summary, "html.parser").get_text(separator=" ").strip()
        link = entry.get("link", "").strip()
        
        if not is_relevant_notification(title, clean_summary):
            continue
            
        items.append({
            "title": title,
            "url": link,
            "published": entry.get("published", "") or entry.get("updated", ""),
            "summary": clean_summary[:600],
            "source_name": source["name"],
            "official": source.get("official", True),
            "category": source.get("category", "Government Schemes"),
            "language": source.get("language", "en"),
        })
    return items

def synthesize_content(item):
    title = item["title"]
    summary = item["summary"] if item["summary"] else title
    category = item["category"]
    
    clean_t = re.sub(r'[^\w\s\-\–]', '', title).strip()
    words = clean_t.split()
    short_title = " ".join(words[:6]) if len(words) > 6 else clean_t
    
    title_en = f"{short_title} 2026: Details & Guide"
    title_hi = f"{short_title} 2026: पूरी जानकारी व नियम"
    
    desc_en = f"{clean_t[:75]}. Check eligibility criteria, step-by-step application process, required documents and direct official portal link on SarkariSewa."[:152]
    if not desc_en.endswith('.'):
        desc_en = desc_en.rsplit(' ', 1)[0] + "."
        
    desc_hi = f"{clean_t[:75]}। पात्रता नियम, आवश्यक दस्तावेज़, ऑनलाइन आवेदन प्रक्रिया और आधिकारिक लिंक यहाँ देखें।"[:152]
    if not desc_hi.endswith('।'):
        desc_hi = desc_hi.rsplit(' ', 1)[0] + "।"

    overview_en = f"""The Government of India and respective state departments have issued a critical notification regarding <strong>{title}</strong>. This measure aims to streamline citizen access, ensure transparent benefit delivery, and enhance public welfare services across the country.

Eligible citizens are advised to review the updated guidelines, application timelines, and required documentation before submitting their claims on the authorized government portal."""

    overview_hi = f"""भारत सरकार एवं संबंधित राज्य विभागों द्वारा <strong>{title}</strong> के संदर्भ में महत्वपूर्ण आधिकारिक अधिसूचना जारी की गई है। इस पहल का मुख्य उद्देश्य नागरिकों को योजनाओं का पारदर्शी एवं त्वरित लाभ पहुंचाना है।

सभी पात्र नागरिकों से अनुरोध है कि वे आधिकारिक पोर्टल पर आवेदन करने से पूर्व पात्रता नियमों, समयसीमा और आवश्यक दस्तावेज़ों की भली-भांति जांच कर लें।"""

    highlights_en = [
        f"Official notification published under {category} category for public welfare.",
        "Aadhaar authentication and e-KYC integration for direct benefit transfer (DBT).",
        "Transparent online monitoring and dedicated citizen grievance redressal mechanism.",
        "Free verification and processing via authorized government digital service portals."
    ]

    highlights_hi = [
        f"{category} श्रेणी के अंतर्गत आधिकारिक लोक कल्याणकारी अधिसूचना जारी।",
        "प्रत्यक्ष लाभ अंतरण (DBT) हेतु आधार प्रमाणीकरण एवं ई-केवाईसी अनिवार्य।",
        "पारदर्शी ऑनलाइन निगरानी और समर्पित नागरिक सहायता प्रणाली उपलब्ध।",
        "अधिकृत सरकारी डिजिटल सेवा पोर्टलों के माध्यम से निःशुल्क सत्यापन।"
    ]

    steps_en = [
        "Visit the official government web portal linked below.",
        "Register or log in using your Aadhaar-linked Mobile OTP.",
        "Complete the application form with accurate personal and bank details.",
        "Upload scanned self-attested documents (Aadhaar, photo, income/residence proof).",
        "Submit the form and save the unique Application Acknowledgment Number for status tracking."
    ]

    steps_hi = [
        "नीचे दिए गए आधिकारिक सरकारी पोर्टल लिंक पर जाएं।",
        "अपने आधार से लिंक मोबाइल नंबर और OTP के माध्यम से लॉगिन करें।",
        "आवेदन पत्र में अपना व्यक्तिगत विवरण और बैंक खाता संख्या ध्यानपूर्वक दर्ज करें।",
        "मांगे गए आवश्यक दस्तावेज़ (आधार कार्ड, फोटो, निवास/आय प्रमाण) अपलोड करें।",
        "फॉर्म सबमिट करें और स्थिति ट्रैक करने हेतु पावती संख्या (Acknowledgment Number) सुरक्षित रखें।"
    ]

    faqs = [
        {
            "q_en": f"What is the main objective of {short_title}?",
            "a_en": "The initiative aims to provide financial assistance, social security, and streamlined digital public services to eligible citizens.",
            "q_hi": f"{short_title} का मुख्य उद्देश्य क्या है?",
            "a_hi": "इस पहल का मुख्य उद्देश्य पात्र नागरिकों को सामाजिक सुरक्षा, वित्तीय सहायता और पारदर्शी डिजिटल सेवाएं प्रदान करना है।"
        },
        {
            "q_en": "What documents are required to apply?",
            "a_en": "Essential documents include Aadhaar Card, Active Mobile Number, Bank Account Passbook (DBT enabled), and relevant eligibility certificates.",
            "q_hi": "आवेदन के लिए कौन से दस्तावेज़ आवश्यक हैं?",
            "a_hi": "आवश्यक दस्तावेज़ों में आधार कार्ड, सक्रिय मोबाइल नंबर, बैंक पासबुक (डीबीटी सक्षम) और पात्रता प्रमाण पत्र शामिल हैं।"
        },
        {
            "q_en": "How can I check the live status of my application?",
            "a_en": "You can check your status online on the official department portal by entering your Application Reference Number or Aadhaar Number.",
            "q_hi": "आवेदन की ताज़ा स्थिति कैसे जांचें?",
            "a_hi": "आप आधिकारिक पोर्टल पर जाकर अपनी आवेदन संदर्भ संख्या (Application ID) या आधार नंबर दर्ज करके ऑनलाइन स्टेटस चेक कर सकते हैं।"
        },
        {
            "q_en": "Is there any fee charged for online application?",
            "a_en": "No, registering on the official government portal is 100% free of cost.",
            "q_hi": "क्या ऑनलाइन आवेदन के लिए कोई शुल्क देना होता है?",
            "a_hi": "नहीं, आधिकारिक सरकारी पोर्टल पर ऑनलाइन आवेदन और पंजीकरण पूरी तरह से निःशुल्क (Free) है।"
        }
    ]

    return {
        "title_en": title_en,
        "title_hi": title_hi,
        "desc_en": desc_en,
        "desc_hi": desc_hi,
        "overview_en": overview_en,
        "overview_hi": overview_hi,
        "highlights_en": highlights_en,
        "highlights_hi": highlights_hi,
        "steps_en": steps_en,
        "steps_hi": steps_hi,
        "faqs": faqs
    }

def generate_static_page(update, content_data):
    slug = update["slug"]
    title_en = content_data["title_en"]
    title_hi = content_data["title_hi"]
    desc_en = content_data["desc_en"]
    desc_hi = content_data["desc_hi"]
    source_name = update["source_name"]
    source_url = update["source_url"]
    category = update["category"]
    published_date = update["published_date"][:10] if update.get("published_date") else "2026-08-29"
    canonical_url = f"{BASE_URL}/updates/{slug}.html"

    related_services = get_related_services(f"{title_en} {category}")
    related_cards_html = ""
    for s in related_services:
        related_cards_html += f"""
        <a href="{s['url']}" style="display:flex; align-items:center; gap:12px; padding:16px; background:var(--color-surface,#fff); border:1px solid var(--color-border,#E2DFD3); border-radius:10px; text-decoration:none; color:var(--color-text); box-shadow:0 2px 4px rgba(0,0,0,0.02); transition:transform 0.2s;">
          <span style="font-size:1.8rem;">{s['icon']}</span>
          <span style="font-weight:600; color:var(--color-primary,#10243E);">{s['title']} →</span>
        </a>"""

    hl_en = "".join(f"<li style='margin-bottom:8px;'>{h}</li>" for h in content_data["highlights_en"])
    hl_hi = "".join(f"<li style='margin-bottom:8px;'>{h}</li>" for h in content_data["highlights_hi"])

    st_en = "".join(f"<li style='margin-bottom:10px;'>{s}</li>" for s in content_data["steps_en"])
    st_hi = "".join(f"<li style='margin-bottom:10px;'>{s}</li>" for s in content_data["steps_hi"])

    faq_items_html = ""
    faq_schema_items = []
    for f in content_data["faqs"]:
        faq_schema_items.append({
            "@type": "Question",
            "name": f["q_en"],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f["a_en"]
            }
        })
        faq_items_html += f"""
        <details style="margin-bottom:14px; padding:16px; background:var(--color-surface,#fff); border:1px solid var(--color-border,#E2DFD3); border-radius:10px;">
          <summary style="font-weight:600; font-size:1.05rem; cursor:pointer; color:var(--color-text);">
            {f['q_en']} / <span style="color:var(--color-primary);">{f['q_hi']}</span>
          </summary>
          <div style="margin-top:12px; font-size:0.95rem; line-height:1.7; color:var(--color-text-muted);">
            <p style="margin-bottom:8px;"><strong>English:</strong> {f['a_en']}</p>
            <p style="margin:0;"><strong>हिन्दी:</strong> {f['a_hi']}</p>
          </div>
        </details>"""

    header_html = ""
    footer_html = ""
    if HEADER_PARTIAL.exists():
        header_html = HEADER_PARTIAL.read_text(encoding="utf-8").replace('href="', 'href="../').replace('src="', 'src="../').replace('href="../http', 'href="http').replace('src="../http', 'src="http').replace('href="../#', 'href="#')
    if FOOTER_PARTIAL.exists():
        footer_html = FOOTER_PARTIAL.read_text(encoding="utf-8").replace('href="', 'href="../').replace('src="', 'src="../').replace('href="../http', 'href="http').replace('src="../http', 'src="http').replace('href="../#', 'href="#')

    json_ld_schema = json.dumps({
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "NewsArticle",
                "headline": title_en,
                "description": desc_en,
                "datePublished": f"{published_date}T00:00:00+05:30",
                "dateModified": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
                "mainEntityOfPage": canonical_url,
                "author": {
                    "@type": "Organization",
                    "name": "SarkariSewa Editorial Team",
                    "url": "https://sarkarisewaindia.com"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "SarkariSewa India",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://sarkarisewaindia.com/assets/img/favicon-32.png"
                    }
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": faq_schema_items
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://sarkarisewaindia.com/index.html"},
                    {"@type": "ListItem", "position": 2, "name": "Latest Updates", "item": "https://sarkarisewaindia.com/latest-updates.html"},
                    {"@type": "ListItem", "position": 3, "name": title_en, "item": canonical_url}
                ]
            }
        ]
    }, ensure_ascii=False, indent=2)

    return f"""<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="max-image-preview:large, index, follow">
  <title>{title_en} | SarkariSewa India</title>
  <meta name="description" content="{desc_en}">
  <link rel="canonical" href="{canonical_url}">
  
  <meta property="og:title" content="{title_en} | SarkariSewa India">
  <meta property="og:description" content="{desc_en}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="{canonical_url}">
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/apple-touch-icon.png">
  <link rel="icon" href="../favicon.ico">
  
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/module2.css">
  
  <script type="application/ld+json">
{json_ld_schema}
  </script>
</head>
<body>
  <div id="site-header">{header_html}</div>

  <main class="container" style="max-width:880px; margin:32px auto; padding:0 20px;">
    <nav aria-label="Breadcrumb" style="font-size:0.9rem; color:var(--color-text-muted); margin-bottom:20px;">
      <a href="../index.html" style="color:var(--color-primary); text-decoration:none;">Home</a> / 
      <a href="../latest-updates.html" style="color:var(--color-primary); text-decoration:none;">Latest Updates</a> / 
      <span style="color:var(--color-text);">{title_en[:35]}</span>
    </nav>

    <div class="tricolor-rule" aria-hidden="true"></div>

    <header style="background:var(--color-surface,#fff); border:1px solid var(--color-border,#E2DFD3); border-radius:12px; padding:28px; margin:24px 0; border-left:6px solid var(--color-primary,#10243E);">
      <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap; margin-bottom:12px;">
        <span style="background:var(--color-primary,#10243E); color:#fff; padding:4px 12px; border-radius:20px; font-size:0.8rem; font-weight:600;">📢 {category}</span>
        <span style="font-size:0.85rem; color:var(--color-text-muted);">🏛️ {source_name}</span>
        <span style="font-size:0.85rem; color:var(--color-text-muted);">📅 {published_date}</span>
      </div>
      <h1 style="font-size:1.7rem; line-height:1.4; color:var(--color-text); margin:0 0 8px 0;">{title_en}</h1>
      <h2 style="font-size:1.25rem; font-weight:500; color:var(--color-primary,#10243E); margin:0;">{title_hi}</h2>
    </header>

    <section style="background:var(--color-bg-alt,#f8fafc); border:1px solid var(--color-border,#E2DFD3); border-radius:12px; padding:24px; margin-bottom:32px;">
      <h3 style="margin-top:0; font-size:1.25rem; color:var(--color-text);">📝 Summary &amp; Overview (मुख्य सारांश)</h3>
      <div style="font-size:1rem; line-height:1.8; color:var(--color-text);">
        {content_data['overview_en']}
      </div>
      <div style="margin-top:16px; padding-top:16px; border-top:1px dashed var(--color-border,#E2DFD3); font-size:1rem; line-height:1.8; color:var(--color-text);">
        {content_data['overview_hi']}
      </div>
    </section>

    <section style="margin-bottom:32px;">
      <h3 style="font-size:1.3rem; color:var(--color-text); margin-bottom:16px;">⭐ Key Highlights &amp; Benefits (मुख्य बिंदु)</h3>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:20px;">
        <div style="background:var(--color-surface,#fff); border:1px solid var(--color-border,#E2DFD3); border-radius:10px; padding:20px;">
          <h4 style="margin-top:0; color:var(--color-primary);">English Summary:</h4>
          <ul style="padding-left:20px; line-height:1.8;">
            {hl_en}
          </ul>
        </div>
        <div style="background:var(--color-surface,#fff); border:1px solid var(--color-border,#E2DFD3); border-radius:10px; padding:20px;">
          <h4 style="margin-top:0; color:var(--color-primary);">हिंदी सारांश:</h4>
          <ul style="padding-left:20px; line-height:1.8;">
            {hl_hi}
          </ul>
        </div>
      </div>
    </section>

    <section style="background:var(--color-surface,#fff); border:1px solid var(--color-border,#E2DFD3); border-radius:12px; padding:24px; margin-bottom:32px;">
      <h3 style="margin-top:0; font-size:1.3rem; color:var(--color-text);">📋 How to Apply / Claim Benefits (आवेदन प्रक्रिया)</h3>
      <ol style="padding-left:20px; line-height:1.8; font-size:1rem;">
        {st_en}
      </ol>
      <div style="margin-top:20px; text-align:center;">
        <a href="{source_url}" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="display:inline-block; padding:14px 28px; font-size:1.05rem; font-weight:600; text-decoration:none; border-radius:8px;">
          🔗 Open Official Government Portal ↗
        </a>
      </div>
    </section>

    <section style="margin-bottom:40px;">
      <h3 style="font-size:1.3rem; color:var(--color-text); margin-bottom:16px;">❓ Frequently Asked Questions (अक्सर पूछे जाने वाले प्रश्न)</h3>
      {faq_items_html}
    </section>

    <section style="margin-bottom:40px;">
      <h3 style="font-size:1.3rem; color:var(--color-text); margin-bottom:16px;">📍 Related Government Services (संबंधित सरकारी सेवाएं)</h3>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px;">
        {related_cards_html}
      </div>
    </section>

    <section style="margin-bottom:40px; background:var(--color-bg-alt,#f8fafc); border:1px solid var(--color-border,#E2DFD3); border-radius:12px; padding:24px;">
      <h3 style="margin-top:0; font-size:1.3rem; color:var(--color-text); margin-bottom:16px;">🛠️ Helpful Citizen Utilities &amp; Calculators</h3>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px;">
        <a href="../tools/eligibility-checker.html" style="padding:16px; background:var(--color-surface,#fff); border-radius:10px; border:1px solid var(--color-border,#E2DFD3); text-align:center; text-decoration:none; color:var(--color-text);">
          <div style="font-size:2rem; margin-bottom:8px;">🎯</div>
          <strong style="color:var(--color-primary);">Eligibility Checker</strong>
          <div style="font-size:0.85rem; color:var(--color-text-muted); margin-top:4px;">पात्रता जांचें</div>
        </a>
        <a href="../tools/document-checklist.html" style="padding:16px; background:var(--color-surface,#fff); border-radius:10px; border:1px solid var(--color-border,#E2DFD3); text-align:center; text-decoration:none; color:var(--color-text);">
          <div style="font-size:2rem; margin-bottom:8px;">📋</div>
          <strong style="color:var(--color-primary);">Document Checklist</strong>
          <div style="font-size:0.85rem; color:var(--color-text-muted); margin-top:4px;">दस्तावेज़ सूची</div>
        </a>
        <a href="../tools/status-troubleshooter.html" style="padding:16px; background:var(--color-surface,#fff); border-radius:10px; border:1px solid var(--color-border,#E2DFD3); text-align:center; text-decoration:none; color:var(--color-text);">
          <div style="font-size:2rem; margin-bottom:8px;">🔍</div>
          <strong style="color:var(--color-primary);">Status Troubleshooter</strong>
          <div style="font-size:0.85rem; color:var(--color-text-muted); margin-top:4px;">स्टेटस ट्रबलशूटर</div>
        </a>
      </div>
    </section>

    <div style="text-align:center; margin:32px 0;">
      <a href="../latest-updates.html" style="display:inline-block; padding:12px 24px; background:var(--color-surface,#fff); border:1px solid var(--color-border,#E2DFD3); border-radius:8px; text-decoration:none; color:var(--color-primary); font-weight:600;">
        ← Back to All Latest Updates (सभी सरकारी सूचनाएं)
      </a>
    </div>
  </main>

  <div id="site-footer">{footer_html}</div>
</body>
</html>"""

def main():
    print("=" * 70)
    print("RUNNING LATEST UPDATES AUTOMATION PIPELINE")
    print("=" * 70)
    
    sources = load_json(SOURCES_FILE, [])
    latest_updates = load_json(LATEST_UPDATES_FILE, [])
    pending_updates = load_json(PENDING_UPDATES_FILE, [])

    existing_ids = {u["id"] for u in latest_updates + pending_updates}
    existing_urls = {u.get("source_url", "") for u in latest_updates + pending_updates}

    new_items_count = 0
    generated_pages_count = 0

    UPDATES_DIR.mkdir(exist_ok=True)

    for source in sources:
        if not source.get("enabled", True):
            continue
            
        print(f"\nFetching source: {source['name']} ({source['url']})...")
        items = fetch_rss(source)
        print(f"   -> Found {len(items)} relevant candidate items.")

        for item in items:
            item_id = generate_id(item["url"], item["title"])
            if item_id in existing_ids or item["url"] in existing_urls:
                continue

            slug = slugify(item["title"])
            if not slug:
                continue

            print(f"\nProcessing new update: {item['title'][:60]}...")
            content_data = synthesize_content(item)

            update_obj = {
                "id": item_id,
                "slug": slug,
                "title_en": content_data["title_en"],
                "title_hi": content_data["title_hi"],
                "summary_en": content_data["desc_en"],
                "summary_hi": content_data["desc_hi"],
                "category": item["category"],
                "published_date": item["published"] if item.get("published") else datetime.now(timezone.utc).strftime("%Y-%m-%d"),
                "updated_date": datetime.now(timezone.utc).isoformat(),
                "source_name": item["source_name"],
                "source_url": item["url"],
                "official_source": item["official"],
                "status": "published",
                "featured": False,
            }

            page_html = generate_static_page(update_obj, content_data)
            out_file = UPDATES_DIR / f"{slug}.html"
            out_file.write_text(page_html, encoding="utf-8")
            generated_pages_count += 1
            print(f"   Generated static page: updates/{slug}.html")

            latest_updates.insert(0, update_obj)
            existing_ids.add(item_id)
            existing_urls.add(item["url"])
            new_items_count += 1

    latest_updates = latest_updates[:MAX_TOTAL_UPDATES]

    save_json(LATEST_UPDATES_FILE, latest_updates)
    print(f"\nSaved {len(latest_updates)} total updates to data/latest-updates.json")

    try:
        import subprocess
        subprocess.run([sys.executable, str(ROOT_DIR / "generate_clean_sitemap.py")], check=True)
        print("Automatically updated sitemap.xml with new update pages.")
    except Exception as e:
        print(f"Sitemap update notice: {e}")

    print("\n" + "=" * 70)
    print(f"PIPELINE RUN COMPLETED: {new_items_count} new updates added, {generated_pages_count} static pages created.")
    print("=" * 70)

if __name__ == "__main__":
    main()
