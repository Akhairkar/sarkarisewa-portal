import os
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')
from test_state_metadata import STATE_METADATA

with open('partials/header.html', 'r', encoding='utf-8', errors='ignore') as fp:
    raw_header = fp.read()
with open('partials/footer.html', 'r', encoding='utf-8', errors='ignore') as fp:
    raw_footer = fp.read()

root_rel = "../"
page_header = raw_header.replace('href="', f'href="{root_rel}').replace('href="../index.html"', f'href="{root_rel}index.html"').replace('src="', f'src="{root_rel}')
page_header = page_header.replace(f'{root_rel}https://', 'https://').replace(f'{root_rel}http://', 'http://').replace(f'{root_rel}#', '#')

page_footer = raw_footer.replace('href="', f'href="{root_rel}').replace('href="../index.html"', f'href="{root_rel}index.html"').replace('src="', f'src="{root_rel}')
page_footer = page_footer.replace(f'{root_rel}https://', 'https://').replace(f'{root_rel}http://', 'http://').replace(f'{root_rel}#', '#')

# Build state selector cards
state_cards_html = ""
for state_key, meta in sorted(STATE_METADATA.items(), key=lambda x: x[1]['nameEn']):
    code = meta["code"]
    state_en = meta["nameEn"]
    state_hi = meta["nameHi"]
    portal_name = meta["portalName"]
    fee = meta["fee"]
    target_link = f"{code}-income-certificate.html"
    if not os.path.exists(f"service/{target_link}"):
        target_link = f"{state_key}-income-certificate.html"
        
    state_cards_html += f"""
    <a href="{target_link}" class="service-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 18px; border: 1px solid var(--color-border); border-radius: 12px; text-decoration: none; color: inherit; background: var(--color-surface); box-shadow: 0 2px 6px rgba(0,0,0,0.03); transition: transform 0.2s ease, border-color 0.2s ease;">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span style="font-size: 1.3rem;">📍</span>
          <span style="font-size: 0.78rem; background: var(--color-bg-alt); padding: 2px 8px; border-radius: 12px; font-weight: 600; color: var(--color-primary);">{fee}</span>
        </div>
        <strong style="color: var(--color-primary); font-size: 1.05rem; display: block; margin-bottom: 4px;">{state_en}</strong>
        <span style="color: var(--color-text-muted); font-size: 0.85rem; display: block; margin-bottom: 8px;">{state_hi} ({portal_name.split()[0]})</span>
      </div>
      <span style="color: var(--color-accent-saffron, #D97F2B); font-weight: 700; font-size: 0.88rem; display: inline-flex; align-items: center; gap: 4px;">
        ऑनलाइन गाइड देखें &rarr;
      </span>
    </a>"""

# 6 National Grievances / Problems
national_faqs = [
    {
        "q": "आय प्रमाण पत्र (Income Certificate) क्या है और यह क्यों जरूरी है?",
        "a": "आय प्रमाण पत्र राज्य सरकार के राजस्व विभाग (Revenue Department) द्वारा जारी किया जाने वाला आधिकारिक दस्तावेज है जो नागरिक या उसके परिवार की सभी स्रोतों से वार्षिक आय को प्रमाणित करता है। इसका उपयोग छात्रवृत्ति, EWS आरक्षण, राशन कार्ड और सरकारी योजनाओं के लाभ के लिए होता है।"
    },
    {
        "q": "आय प्रमाण पत्र बनवाने में कितना सरकारी शुल्क और समय लगता है?",
        "a": "सरकारी शुल्क विभिन्न राज्यों में ₹0 (बिहार, दिल्ली) से लेकर ₹15-₹30 (उत्तर प्रदेश, म.प्र., महाराष्ट्र, राजस्थान) तक है। आवेदन करने के 7 से 15 कार्य दिवसों में डिजिटल हस्ताक्षरित प्रमाण पत्र ऑनलाइन डाउनलोड हेतु उपलब्ध हो जाता है।"
    },
    {
        "q": "वेतनभोगी (Salaried) और गैर-वेतनभोगी (Non-Salaried) के लिए आय गणना कैसे होती है?",
        "a": "वेतनभोगी व्यक्तियों के लिए Form 16 / नवीनतम 3 महीने की सैलरी स्लिप के आधार पर सकल आय गिनी जाती है। कृषकों, छोटे व्यापारियों और दैनिक वेतनभोगियों के लिए शपथ पत्र (Affidavit) एवं क्षेत्रीय पटवारी/लेखपाल की स्थलीय जांच रिपोर्ट के आधार पर वार्षिक आय दर्ज होती है।"
    },
    {
        "q": "आय प्रमाण पत्र रिजेक्ट (Reject) होने के मुख्य कारण क्या हैं और समाधान क्या है?",
        "a": "मुख्य कारणों में धुंधले दस्तावेज़ (Blurry Scans), शपथ पत्र पर हस्ताक्षर न होना, आधार व राशन कार्ड में नाम का अंतर, या परिवार की आय का गलत विवरण शामिल है। हमेशा 50KB-100KB की स्पष्ट स्व-हस्ताक्षरित प्रति अपलोड करें और नाम में अंतर होने पर नोटरी शपथ पत्र लगाएं।"
    },
    {
        "q": "प्रमाण पत्र की वैधता (Validity) कितने समय की होती है?",
        "a": "अधिकांश राज्यों (जैसे उत्तर प्रदेश, मध्य प्रदेश, गुजरात, कर्नाटक) में आय प्रमाण पत्र जारी होने की तिथि से 3 वर्ष तक वैध रहता है, जबकि कुछ राज्यों और केंद्रीय वित्तीय छात्रवृत्ति/EWS उद्देश्यों हेतु यह 1 वित्तीय वर्ष (Financial Year) के लिए मान्य होता है।"
    },
    {
        "q": "ऑनलाइन डिजिटल आय प्रमाण पत्र का सत्यापन (Verification) कैसे करें?",
        "a": "प्रत्येक डिजिटल प्रमाण पत्र पर एक 12-16 अंकों का Application Number और Certificate Number तथा QR Code होता है। संबंधित राज्य के e-District / RTPS पोर्टल पर 'Verify Certificate' में जाकर नंबर दर्ज करके कोई भी संस्थान तुरंत ऑनलाइन सत्यापन कर सकता है।"
    }
]

schema_data = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "GovernmentService",
            "name": "Income Certificate India (आय प्रमाण पत्र 2026)",
            "serviceType": "Citizen Revenue & Identity Services",
            "url": "https://sarkarisewaindia.com/service/income-certificate.html",
            "areaServed": {
                "@type": "Country",
                "name": "India"
            },
            "provider": {
                "@type": "GovernmentOrganization",
                "name": "National Services Portal / Ministry of Electronics & IT",
                "sameAs": [
                    "https://services.india.gov.in",
                    "https://serviceonline.gov.in"
                ]
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": item["q"],
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item["a"]
                    }
                } for item in national_faqs
            ]
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://sarkarisewaindia.com/index.html"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://sarkarisewaindia.com/service/income-certificate.html"
                }
            ]
        }
    ]
}

full_national_html = f"""<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="max-image-preview:large, index, follow">
  <title>Income Certificate Online Apply 2026 | SarkariSewa India</title>
  <meta name="description" content="भारत के सभी राज्यों में आय प्रमाण पत्र (Income Certificate) 2026 ऑनलाइन आवेदन करें। राज्यवार ई-डिस्ट्रिक्ट पोर्टल लिंक, शुल्क ₹0-₹30, आवश्यक दस्तावेज़ व स्टेटस चेक।">
  <link rel="canonical" href="https://sarkarisewaindia.com/service/income-certificate.html">
  
  <meta property="og:title" content="Income Certificate Online Apply 2026 | SarkariSewa India">
  <meta property="og:description" content="State-wise complete online guide to apply for Income Certificate across all 36 Indian States & UTs. Check eligibility, fees, documents & track status.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sarkarisewaindia.com/service/income-certificate.html">
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Income Certificate Online Apply 2026 | SarkariSewa India">
  <meta name="twitter:description" content="State-wise complete online guide to apply for Income Certificate across all 36 Indian States & UTs.">
  
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/apple-touch-icon.png">
  <link rel="icon" href="../favicon.ico">
  <link rel="manifest" href="../manifest.json">
  
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/module2.css">
  <link rel="stylesheet" href="../assets/css/module7.css">
  <link rel="stylesheet" href="../assets/css/share-widget.css">

  <script type="application/ld+json">
{json.dumps(schema_data, ensure_ascii=False, indent=2)}
  </script>
</head>
<body>
  {page_header}

  <main class="container" style="max-width: 980px; margin: 32px auto; padding: 0 16px;">
    
    <!-- Breadcrumbs -->
    <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 20px;">
      <a href="../index.html" style="color: var(--color-primary); text-decoration: none;">Home</a> / 
      <a href="../category/identity-documents.html" style="color: var(--color-primary); text-decoration: none;">Identity Documents</a> / 
      <span style="color: var(--color-text);">Income Certificate All-India</span>
    </nav>

    <div class="tricolor-rule" aria-hidden="true"></div>

    <!-- Hero Card -->
    <header style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 16px; padding: 32px 24px; margin: 24px 0; border-left: 6px solid var(--color-primary); box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
      <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin-bottom: 14px;">
        <span style="background: var(--color-primary); color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 0.82rem; font-weight: 700;">🇮🇳 All-India Portal</span>
        <span style="background: var(--color-accent-green, #15803d); color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 0.82rem; font-weight: 700;">✓ 36 States &amp; UTs</span>
        <span style="font-size: 0.88rem; color: var(--color-text-muted);">🏛️ State Revenue Departments</span>
      </div>
      <h1 style="font-size: 1.9rem; line-height: 1.35; color: var(--color-text); margin: 0 0 10px 0;">आय प्रमाण पत्र (Income Certificate) ऑनलाइन आवेदन गाइड 2026</h1>
      <p style="font-size: 1.05rem; color: var(--color-text-muted); margin: 0; line-height: 1.6;">
        भारत के सभी राज्यों में घर बैठे आय प्रमाण पत्र ऑनलाइन बनवाने की आधिकारिक प्रक्रिया, ई-डिस्ट्रिक्ट पोर्टल लिंक, आवश्यक दस्तावेज़, सरकारी शुल्क एवं सत्यापन नियम।
      </p>
      <div style="margin-top: 18px;">
        <a href="https://services.india.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: 600;">
          🌐 Official National Services Portal (services.india.gov.in) ↗
        </a>
      </div>
    </header>

    <!-- State Selection Grid -->
    <section style="margin-bottom: 40px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 20px;">
        <div>
          <h2 style="font-size: 1.5rem; color: var(--color-primary); margin: 0;">🗺️ अपने राज्य का चयन करें (Select Your State)</h2>
          <p style="margin: 4px 0 0 0; font-size: 0.92rem; color: var(--color-text-muted);">Direct State-Wise Income Certificate Online Application Portals</p>
        </div>
        <span style="background: var(--color-bg-alt); padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; color: var(--color-primary);">36 राज्य व केंद्र शासित प्रदेश</span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
        {state_cards_html}
      </div>
    </section>

    <!-- General Guide Section -->
    <section style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 28px; margin-bottom: 36px; line-height: 1.8;">
      <h2 style="font-size: 1.4rem; color: var(--color-primary); margin-top: 0; display: flex; align-items: center; gap: 8px;">
        <span>📋</span> आय प्रमाण पत्र के लिए आवश्यक सामान्य दस्तावेज़ (Common Checklist)
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 16px;">
        <div style="background: var(--color-bg-alt); padding: 18px; border-radius: 10px;">
          <strong style="color: var(--color-primary); display: block; margin-bottom: 8px;">1. पहचान व निवास प्रमाण:</strong>
          <ul style="margin: 0; padding-left: 18px; font-size: 0.95rem; color: var(--color-text);">
            <li>आधार कार्ड (अनिवार्य)</li>
            <li>राशन कार्ड / वोटर आईडी कार्ड</li>
            <li>बिजली बिल / पानी बिल / निवास प्रमाण पत्र</li>
          </ul>
        </div>
        <div style="background: var(--color-bg-alt); padding: 18px; border-radius: 10px;">
          <strong style="color: var(--color-primary); display: block; margin-bottom: 8px;">2. आय व स्वप्रमाणन दस्तावेज:</strong>
          <ul style="margin: 0; padding-left: 18px; font-size: 0.95rem; color: var(--color-text);">
            <li>स्वप्रमाणित घोषणा पत्र (Self Declaration)</li>
            <li>वेतनभोगी हेतु Form 16 / Salary Slip</li>
            <li>कृषक हेतु खतौनी / पटवारी रिपोर्ट</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Real Life Practical Problems & Solutions -->
    <section style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 28px; margin-bottom: 36px;">
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
        <span style="font-size: 1.8rem;">🛠️</span>
        <div>
          <h2 style="font-size: 1.45rem; color: var(--color-primary); margin: 0;">आय प्रमाण पत्र: अक्सर आने वाली समस्याएं एवं उनके त्वरित समाधान</h2>
          <p style="margin: 4px 0 0 0; font-size: 0.9rem; color: var(--color-text-muted);">Practical Guidelines, Grievance Escalation &amp; Verification FAQs</p>
        </div>
      </div>

      <div class="faq-list">"""

for i, item in enumerate(national_faqs, 1):
    full_national_html += f"""
        <details class="faq-item" style="margin-bottom: 16px; background: var(--color-bg-alt, #f8fafc); border: 1px solid var(--color-border); border-radius: 10px; padding: 16px;" {"open" if i <= 2 else ""}>
          <summary style="font-weight: 700; font-size: 1.05rem; cursor: pointer; color: var(--color-text); line-height: 1.5;">
            {i}. {item["q"]}
          </summary>
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--color-border); line-height: 1.8; font-size: 0.98rem; color: var(--color-text);">
            <p style="margin: 0;">{item["a"]}</p>
          </div>
        </details>"""

full_national_html += f"""
      </div>
    </section>

    <!-- Free Citizen Tools -->
    <section style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 28px; margin-bottom: 36px;">
      <h3 style="font-size: 1.3rem; color: var(--color-primary); margin-top: 0; display: flex; align-items: center; gap: 8px;">
        <span>🧰</span> उपयोगी सरकारी नागरिक टूल्स (Free Online Utilities)
      </h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px;">
        <a href="../tools/document-compressor.html" style="padding: 14px; border: 1px solid var(--color-border); border-radius: 10px; text-decoration: none; color: inherit; background: var(--color-bg-alt); display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.5rem;">📄</span>
          <div>
            <strong style="color: var(--color-primary); display: block; font-size: 0.95rem;">दस्तावेज़ कंप्रेसर (PDF/Img)</strong>
            <span style="font-size: 0.8rem; color: var(--color-text-muted);">100KB साइज में कन्वर्ट करें</span>
          </div>
        </a>
        <a href="../tools/photo-resizer.html" style="padding: 14px; border: 1px solid var(--color-border); border-radius: 10px; text-decoration: none; color: inherit; background: var(--color-bg-alt); display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.5rem;">🖼️</span>
          <div>
            <strong style="color: var(--color-primary); display: block; font-size: 0.95rem;">पासपोर्ट फोटो रिसाइज़र</strong>
            <span style="font-size: 0.8rem; color: var(--color-text-muted);">सरकारी फॉर्म हेतु तैयार</span>
          </div>
        </a>
        <a href="../tools/self-declaration-builder.html" style="padding: 14px; border: 1px solid var(--color-border); border-radius: 10px; text-decoration: none; color: inherit; background: var(--color-bg-alt); display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.5rem;">✍️</span>
          <div>
            <strong style="color: var(--color-primary); display: block; font-size: 0.95rem;">स्वप्रमाणित घोषणा पत्र</strong>
            <span style="font-size: 0.8rem; color: var(--color-text-muted);">1-क्लिक में शपथ पत्र जनरेटर</span>
          </div>
        </a>
        <a href="../tools/csc-locator.html" style="padding: 14px; border: 1px solid var(--color-border); border-radius: 10px; text-decoration: none; color: inherit; background: var(--color-bg-alt); display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.5rem;">📍</span>
          <div>
            <strong style="color: var(--color-primary); display: block; font-size: 0.95rem;">नजदीकी CSC केंद्र खोजें</strong>
            <span style="font-size: 0.8rem; color: var(--color-text-muted);">पिनकोड व जिलेवार सूची</span>
          </div>
        </a>
      </div>
    </section>

    <!-- REAL RELATED SERVICES GRID -->
    <section class="service-section" style="margin: 36px 0;">
      <h2 class="service-section__title" style="font-size: 1.45rem; margin-bottom: 18px; color: var(--color-primary); display: flex; align-items: center; gap: 8px;">
        <span class="icon">📍</span> संबंधित प्रमुख सेवाएं (Related All-India Services)
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
        <a href="caste-certificate.html" class="service-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 18px; border: 1px solid var(--color-border); border-radius: 12px; text-decoration: none; color: inherit; background: var(--color-surface); box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div>
            <div style="font-size: 1.5rem; margin-bottom: 8px;">📜</div>
            <strong style="color: var(--color-primary); font-size: 1.05rem; display: block; margin-bottom: 6px;">Caste Certificate Guide</strong>
            <span style="color: var(--color-text-muted); font-size: 0.85rem; line-height: 1.5; display: block;">जाति प्रमाण पत्र (SC/ST/OBC) राज्यवार आवेदन गाइड।</span>
          </div>
          <span style="color: var(--color-accent-saffron, #D97F2B); font-weight: 700; font-size: 0.88rem; margin-top: 14px;">आवेदन करें &rarr;</span>
        </a>

        <a href="domicile-certificate.html" class="service-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 18px; border: 1px solid var(--color-border); border-radius: 12px; text-decoration: none; color: inherit; background: var(--color-surface); box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div>
            <div style="font-size: 1.5rem; margin-bottom: 8px;">🏠</div>
            <strong style="color: var(--color-primary); font-size: 1.05rem; display: block; margin-bottom: 6px;">Domicile Certificate Guide</strong>
            <span style="color: var(--color-text-muted); font-size: 0.85rem; line-height: 1.5; display: block;">मूल निवास प्रमाण पत्र ऑनलाइन प्रक्रिया एवं नियम।</span>
          </div>
          <span style="color: var(--color-accent-saffron, #D97F2B); font-weight: 700; font-size: 0.88rem; margin-top: 14px;">आवेदन करें &rarr;</span>
        </a>

        <a href="ration-card.html" class="service-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 18px; border: 1px solid var(--color-border); border-radius: 12px; text-decoration: none; color: inherit; background: var(--color-surface); box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div>
            <div style="font-size: 1.5rem; margin-bottom: 8px;">🌾</div>
            <strong style="color: var(--color-primary); font-size: 1.05rem; display: block; margin-bottom: 6px;">Ration Card Online</strong>
            <span style="color: var(--color-text-muted); font-size: 0.85rem; line-height: 1.5; display: block;">राशन कार्ड ऑनलाइन आवेदन, नाम जोड़ना व स्टेटस।</span>
          </div>
          <span style="color: var(--color-accent-saffron, #D97F2B); font-weight: 700; font-size: 0.88rem; margin-top: 14px;">आवेदन करें &rarr;</span>
        </a>

        <a href="../tools/csc-locator.html" class="service-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 18px; border: 1px solid var(--color-border); border-radius: 12px; text-decoration: none; color: inherit; background: var(--color-surface); box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div>
            <div style="font-size: 1.5rem; margin-bottom: 8px;">📍</div>
            <strong style="color: var(--color-primary); font-size: 1.05rem; display: block; margin-bottom: 6px;">All-India CSC Locator</strong>
            <span style="color: var(--color-text-muted); font-size: 0.85rem; line-height: 1.5; display: block;">भारत के सभी जिलों में नजदीकी जन सेवा केंद्र खोजें।</span>
          </div>
          <span style="color: var(--color-accent-saffron, #D97F2B); font-weight: 700; font-size: 0.88rem; margin-top: 14px;">केंद्र खोजें &rarr;</span>
        </a>
      </div>
    </section>

    <!-- Disclaimer -->
    <section style="background: var(--color-bg-alt); border: 1px solid var(--color-border); border-radius: 10px; padding: 16px; margin: 32px 0;">
      <p style="margin: 0 0 6px 0; font-size: 0.9rem; color: var(--color-text);">
        <strong>🛡️ आधिकारिक स्रोत व डिस्क्लेमर:</strong> आधिकारिक पोर्टल <a href="https://services.india.gov.in" target="_blank" rel="noopener noreferrer" style="color: var(--color-primary); font-weight: 600;">National Services Portal (services.india.gov.in)</a> है। SarkariSewa India एक स्वतंत्र नागरिक सूचना पोर्टल है।
      </p>
    </section>

  </main>

  {page_footer}
  
  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/share-widget.js"></script>
</body>
</html>
"""

with open('service/income-certificate.html', 'w', encoding='utf-8') as fp:
    fp.write(full_national_html)

print("🎉 Successfully upgraded national master hub: service/income-certificate.html with verified gov links!")
