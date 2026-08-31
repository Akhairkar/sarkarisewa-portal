# -*- coding: utf-8 -*-
import os
import sys
import json
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOOLS_DIR = os.path.join(ROOT, 'tools')

def render_tools_common_css():
    return '''
    .builder-card, .check-card, .tool-container-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 16px;
      padding: 28px;
      box-shadow: 0 8px 30px rgba(16, 36, 62, 0.08);
      margin-bottom: 36px;
    }
    .input-row { margin-bottom: 18px; }
    .input-row label {
      display: block;
      font-weight: 700;
      margin-bottom: 8px;
      color: var(--color-primary);
      font-size: 0.98rem;
    }
    .decl-input, .tool-select, .tool-input {
      width: 100%;
      padding: 12px 14px;
      border: 2px solid var(--color-border);
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 500;
      color: var(--color-text);
      background: var(--color-surface);
      box-sizing: border-box;
      transition: border-color 0.2s;
    }
    .decl-input:focus, .tool-select:focus, .tool-input:focus {
      outline: none;
      border-color: var(--color-primary);
    }
    .preview-box {
      margin-top: 24px;
      padding: 26px;
      border: 2px dashed var(--color-border);
      background: var(--color-bg);
      color: var(--color-text);
      border-radius: 12px;
      font-family: var(--font-body, inherit);
      line-height: 1.85;
      box-shadow: 0 4px 12px rgba(0,0,0,0.03);
    }
    [data-theme="dark"] .preview-box {
      background: #0E1826 !important;
      color: #E8EDF3 !important;
      border-color: #223244 !important;
    }
    @media print {
      body * { visibility: hidden; }
      .preview-box, .preview-box * { visibility: visible; }
      .preview-box {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background: #ffffff !important;
        color: #000000 !important;
        border: none !important;
        box-shadow: none !important;
        padding: 0 !important;
      }
    }
    .btn-action-group {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 20px;
    }
    .btn-tool-primary {
      background: #2563eb;
      color: #ffffff !important;
      font-weight: 700;
      padding: 12px 24px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      box-shadow: 0 4px 14px rgba(37,99,235,0.25);
    }
    .btn-tool-secondary {
      background: var(--color-surface);
      color: var(--color-text) !important;
      font-weight: 700;
      padding: 12px 20px;
      border-radius: 10px;
      border: 1px solid var(--color-border);
      cursor: pointer;
      font-size: 0.95rem;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
    }
    .service-btn {
      padding: 10px 18px;
      border-radius: 20px;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      font-weight: 600;
      color: var(--color-text);
      cursor: pointer;
      font-size: 0.92rem;
      transition: all 0.2s;
    }
    .service-btn:hover, .service-btn.active {
      background: #2563eb !important;
      color: #ffffff !important;
      border-color: #2563eb !important;
    }
    .doc-item-row {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 14px;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 10px;
      margin-bottom: 10px;
    }
    [data-theme="dark"] .doc-item-row {
      background: #101D2C !important;
      border-color: #223244 !important;
    }
    .doc-item-row input[type="checkbox"] {
      width: 20px;
      height: 20px;
      margin-top: 3px;
      cursor: pointer;
      accent-color: #059669;
    }
'''

def render_useful_tools_grid():
    return '''    <!-- CITIZEN TOOLS GRID -->
    <section class="service-section" style="margin-top: 40px;">
      <h3 style="color: var(--color-primary); font-size: 1.5rem; margin-bottom: 18px;">
        🛠️ <span data-lang-show="en">Popular Citizen Utilities &amp; Calculators</span>
        <span data-lang-show="hi">लोकप्रिय नागरिक टूल्स एवं कैलकुलेटर्स</span>
      </h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
        <a href="../tools/self-declaration-builder.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">📝</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Self-Declaration Builder</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">IBPS, लाडकी बहीण व सरकारी नौकरियों के लिए स्व-घोषणा पत्र व हमीपत्र बनाएं।</p>
          </div>
          <div style="font-weight: 700; color: #2563eb; font-size: 0.85rem; margin-top: 12px;">Generate Form ↗</div>
        </a>

        <a href="../tools/document-checklist.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">📋</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Document Checklist Tool</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">सरकारी नौकरी DV, पासपोर्ट, जाति व आय प्रमाण पत्र के आवश्यक दस्तावेज़ जांचें।</p>
          </div>
          <div style="font-weight: 700; color: #059669; font-size: 0.85rem; margin-top: 12px;">Check Documents ↗</div>
        </a>

        <a href="../tools/eligibility-checker.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">🎯</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Scheme Eligibility Engine</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">अपनी उम्र, आय और श्रेणी के आधार पर सभी सरकारी योजनाओं की पात्रता जांचें।</p>
          </div>
          <div style="font-weight: 700; color: #d97706; font-size: 0.85rem; margin-top: 12px;">Check Eligibility ↗</div>
        </a>

        <a href="../tools/status-troubleshooter.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">🔍</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Status Troubleshooter</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">पेंडिंग या रिजेक्ट हुए सरकारी आवेदनों का तुरंत समाधान और शिकायत निवारण।</p>
          </div>
          <div style="font-weight: 700; color: #7c3aed; font-size: 0.85rem; margin-top: 12px;">Fix Status ↗</div>
        </a>
      </div>
    </section>'''

def render_featured_schemes_banner():
    return '''      <!-- SPECIAL FEATURED SECTION: LOW-INTEREST LOANS & SCHEMES -->
      <div style="margin: 44px 0; padding: 30px; background: linear-gradient(135deg, #10243E 0%, #173663 60%, #0c2650 100%); color: #ffffff; border-radius: 18px; box-shadow: 0 10px 35px rgba(16, 36, 62, 0.3); border: 1px solid rgba(255,255,255,0.15);">
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 14px;">
          <span style="font-size: 2.2rem;">💡</span>
          <div>
            <h3 style="margin: 0; font-size: 1.45rem; color: #ffffff;">
              <span data-lang-show="en">Explore 50% Subsidized Govt Loans &amp; Grants</span>
              <span data-lang-show="hi">स्वरोजगार व व्यवसाय के लिए 50% सब्सिडी पर सरकारी ऋण योजनाएं</span>
            </h3>
            <span style="color: #F8D348; font-size: 0.92rem; font-weight: 600;">
              <span data-lang-show="en">MPBCDC Self-Employment, KCC &amp; PM Vishwakarma</span>
              <span data-lang-show="hi">महात्मा फुले महामंडल (MPBCDC), किसान क्रेडिट कार्ड व पीएम विश्वकर्मा</span>
            </span>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 20px 0;">
          <div style="background: rgba(255,255,255,0.08); padding: 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.15);">
            <strong style="color: #F8D348; font-size: 1.15rem; display: block; margin-bottom: 6px;">🏦 MPBCDC थेट कर्ज योजना</strong>
            <p style="font-size: 0.92rem; margin: 0; color: rgba(255,255,255,0.85);">
              ₹1 लाख तक के प्रोजेक्ट पर <strong>50% सीधी सब्सिडी (₹50,000 फ्री)</strong> और 45% लोन मात्र 4% ब्याज पर।
            </p>
          </div>
          <div style="background: rgba(255,255,255,0.08); padding: 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.15);">
            <strong style="color: #4CAF50; font-size: 1.15rem; display: block; margin-bottom: 6px;">🔨 PM Vishwakarma Yojana</strong>
            <p style="font-size: 0.92rem; margin: 0; color: rgba(255,255,255,0.85);">
              पारंपरिक कारीगरों को <strong>₹15,000 फ्री टूलकिट</strong> व 5% ब्याज पर ₹3 लाख तक का लोन।
            </p>
          </div>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <a href="../service/mpbcdc-direct-loan-yojana.html" class="btn" style="background: #F8D348; color: #10243E; font-weight: 800; padding: 12px 22px; border-radius: 8px; text-decoration: none;">
            🏛️ MPBCDC योजना विवरण ↗
          </a>
          <a href="../service/pm-vishwakarma-yojana.html" class="btn" style="background: rgba(255,255,255,0.18); color: #fff; border: 1px solid rgba(255,255,255,0.3); font-weight: 700; padding: 12px 22px; border-radius: 8px; text-decoration: none;">
            🔨 PM विश्वकर्मा योजना ↗
          </a>
        </div>
      </div>'''

def upgrade_self_declaration_builder():
    fpath = os.path.join(TOOLS_DIR, 'self-declaration-builder.html')
    
    html = f'''<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/apple-touch-icon.png">
  <link rel="icon" href="../favicon.ico">
  <link rel="manifest" href="../manifest.json">
  <link rel="canonical" href="https://sarkarisewaindia.com/tools/self-declaration-builder.html" />
  <meta name="description" content="स्व-घोषणा पत्र व हमीपत्र जनरेटर 2026: IBPS बैंकिंग, लाडकी बहीण, आय, OBC NCL व सरकारी नौकरियों के लिए 1-क्लिक में लीगल सेल्फ डिक्लेरेशन बनाएं और पीडीएफ प्रिंट करें।" />
  <meta property="og:title" content="Self Declaration Form Builder &amp; Generator 2026 | SarkariSewa India" />
  <meta property="og:description" content="Generate official Self-Declaration (हमीपत्र) and undertakings for Government Schemes and Competitive Exams in seconds." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://sarkarisewaindia.com/tools/self-declaration-builder.html" />
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Self Declaration Form Builder 2026 | SarkariSewa India" />
  <meta name="twitter:description" content="Generate printable self-declaration undertakings for all exams &amp; government schemes." />
  <title>Self Declaration Form Builder 2026: स्व-घोषणा पत्र जनरेटर | SarkariSewa India</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css" />
  <link rel="stylesheet" href="../assets/css/module2.css" />
  <link rel="stylesheet" href="../assets/css/module7.css" />
  <link rel="stylesheet" href="../assets/css/module9.css" />
  <link rel="stylesheet" href="../assets/css/share-widget.css" />

  <style>
{render_tools_common_css()}
  </style>

  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@graph": [
      {{
        "@type": "WebApplication",
        "name": "Self-Declaration & Hamipatra Form Builder",
        "url": "https://sarkarisewaindia.com/tools/self-declaration-builder.html",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "All",
        "offers": {{
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        }}
      }},
      {{
        "@type": "FAQPage",
        "mainEntity": [
          {{
            "@type": "Question",
            "name": "स्व-घोषणा पत्र (Self-Declaration) क्या होता है और क्या यह कानूनी रूप से मान्य है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "स्व-घोषणा पत्र एक स्व-प्रमाणित कानूनी शपथ पत्र है जिसमें आवेदक स्वयं घोषणा करता है कि उसके द्वारा दी गई जानकारी पूर्णतः सत्य है। भारत सरकार के कार्मिक एवं प्रशिक्षण विभाग (DoPT) के 2014 के राजपत्र के अनुसार, अधिकांश सरकारी सेवाओं में नोटरी हलफनामे के स्थान पर सेल्फ डिक्लेरेशन 100% कानूनी रूप से मान्य है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "IBPS / SBI बैंक परीक्षाओं में हस्तलिखित घोषणा पत्र (Handwritten Declaration) किस पेन से लिखना चाहिए?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "IBPS और SBI के आधिकारिक नियमों के अनुसार हस्तलिखित घोषणा पत्र को हमेशा सादे सफेद कागज पर केवल काली स्याही (Black Ink Pen) से अपनी स्वयं की लिखावट में लिखना अनिवार्य है। नीली स्याही या कंप्यूटर टाइपिंग से लिखा फॉर्म रिजेक्ट हो जाता है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "माझी लाडकी बहीण योजना के हमीपत्र में क्या नियम हैं?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "लाडकी बहीण योजना हमीपत्र में महिला आवेदक यह घोषणा करती है कि उसके परिवार की कुल वार्षिक आय ₹2.5 लाख से कम है, परिवार में कोई आयकर दाता या सरकारी कर्मचारी नहीं है और चार पहिया वाहन (ट्रैक्टर छोड़कर) नहीं है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "यदि स्व-घोषणा पत्र में गलत जानकारी दी जाए तो क्या कानूनी कार्यवाही हो सकती है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "हाँ, भारतीय न्याय संहिता (BNS) की धारा 229 व 230 (पूर्व में IPC 199/200) के तहत झूठी घोषणा प्रस्तुत करने पर उम्मीदवार का आवेदन रद्द करने के साथ-साथ 3 वर्ष तक का कारावास व जुर्माना हो सकता है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "क्या अनपढ़ या वृद्ध आवेदक अंगूठा निशान (Thumb Impression) लगा सकते हैं?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "हाँ, हस्ताक्षर न कर पाने वाले आवेदक बाएं हाथ का अंगूठा निशान (Left Thumb Impression) लगा सकते हैं। इसे ग्राम प्रधान, राजपत्रित अधिकारी या सीएससी वीएलई द्वारा अनुप्रमाणित कराया जा सकता है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "क्या स्व-घोषणा पत्र के लिए स्टांप पेपर या नोटरी की आवश्यकता होती है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "नहीं, सामान्य स्व-घोषणा पत्र सादे A4 सफेद कागज पर प्रिंट या हस्तलिखित करके जमा किया जा सकता है। इसके लिए किसी ₹10/₹50 के स्टांप पेपर या कोर्ट नोटरी की आवश्यकता नहीं होती।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "स्व-घोषणा पत्र को ऑनलाइन फॉर्म में अपलोड करने के लिए सही फाइल साइज क्या है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "अधिकांश सरकारी पोर्टलों (IBPS/SSC/State Portals) पर घोषणा पत्र को 50 KB से 100 KB के बीच JPG या PDF फॉर्मेट में 200 DPI रेजोल्यूशन पर स्कैन करके अपलोड किया जाता है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "पारिवारिक आय स्व-घोषणा पत्र किन-किन योजनाओं में मान्य होता है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "छात्रवृत्ति योजनाओं (NSP/State Scholarships), राशन कार्ड आवेदन, पीएम विश्वकर्मा, लाडकी बहीण योजना और राज्य कौशल विकास योजनाओं में तहसीलदार आय प्रमाण पत्र न होने पर अंतरिम रूप से स्व-घोषणा पत्र स्वीकार किया जाता है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "ओबीसी नॉन-क्रीमी लेयर (OBC NCL) स्व-घोषणा पत्र का क्या महत्व है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "केंद्र व राज्य सरकार की नौकरियों में आवेदन करते समय ओबीसी आरक्षण का लाभ लेने के लिए यह प्रमाणित करना होता है कि आवेदक के माता-पिता की वार्षिक आय क्रीमी लेयर सीमा (₹8 लाख) से कम है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "क्या डिजिटल सिग्नेचर (e-Sign) स्व-घोषणा पत्र पर मान्य है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "हाँ, सूचना प्रौद्योगिकी अधिनियम 2000 (IT Act) के तहत आधार बेस्ड e-Sign से डिजिटल रूप से हस्ताक्षरित घोषणा पत्र सभी सरकारी और कानूनी प्रक्रियाओं में 100% वैध माना जाता है।"
            }}
          }}
        ]
      }},
      {{
        "@type": "BreadcrumbList",
        "itemListElement": [
          {{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://sarkarisewaindia.com/"}},
          {{"@type": "ListItem", "position": 2, "name": "Tools", "item": "https://sarkarisewaindia.com/tools/index.html"}},
          {{"@type": "ListItem", "position": 3, "name": "Self-Declaration Builder", "item": "https://sarkarisewaindia.com/tools/self-declaration-builder.html"}}
        ]
      }}
    ]
  }}
  </script>
</head>
<body data-slug="self-declaration-builder">
  <div id="site-header"></div>

  <main class="service-detail container" id="main-content" style="max-width: 1040px; margin: 0 auto; padding: 24px 16px;">
    
    <!-- BREADCRUMB -->
    <nav class="breadcrumb" aria-label="Breadcrumb" style="font-size: 0.9rem; margin-bottom: 20px; color: var(--color-text-muted);">
      <a href="../index.html" style="color: var(--color-primary); text-decoration: none;">होम</a> &gt;
      <a href="../tools/index.html" style="color: var(--color-primary); text-decoration: none;">टूल्स एवं कैलकुलेटर्स</a> &gt;
      <span style="color: var(--color-text);">स्व-घोषणा पत्र जनरेटर (Self-Declaration Builder)</span>
    </nav>

    <!-- HERO HEADER -->
    <section class="service-hero" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 16px; padding: 32px 24px; margin-bottom: 28px; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
      <div style="display: inline-block; background: var(--color-brand); color: #ffffff; padding: 6px 14px; border-radius: 20px; font-weight: 700; font-size: 0.85rem; margin-bottom: 12px;">
        📝 100% FREE LEGAL PROFORMA BUILDER
      </div>
      <h1 class="service-hero__title" style="font-size: 2.1rem; line-height: 1.25; margin: 8px 0 16px 0; color: var(--color-primary);">
        <span data-lang-show="hi">स्व-घोषणा पत्र व हमीपत्र जनरेटर 2026</span>
        <span data-lang-show="en">Self Declaration Form &amp; Hamipatra Builder 2026</span>
      </h1>
      <p class="service-hero__desc" style="font-size: 1.05rem; line-height: 1.7; color: var(--color-text); margin-bottom: 18px;">
        <span data-lang-show="hi">सरकारी नौकरी (IBPS, SSC, State PSC), लाडकी बहीण योजना, पारिवारिक आय, OBC नॉन-क्रीमी लेयर व राशन कार्ड के लिए आधिकारिक कानूनी प्रपत्र 1-क्लिक में तैयार करें, कॉपी करें और A4 साइज में प्रिंट करें।</span>
        <span data-lang-show="en">Generate official legal self-declarations, handwritten undertakings, and Hamipatra for IBPS, SSC, State Schemes, Income Verification &amp; OBC NCL in seconds with instant A4 print &amp; copy support.</span>
      </p>
    </section>

    <!-- BUILDER INTERACTIVE CARD -->
    <section class="builder-card">
      <h2 style="color: var(--color-primary); font-size: 1.45rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        ⚙️ <span data-lang-show="en">Generate Customized Self-Declaration</span>
        <span data-lang-show="hi">घोषणा पत्र का प्रकार व विवरण चुनें</span>
      </h2>

      <div class="input-row">
        <label for="decl-type">प्रपत्र का प्रकार (Select Undertaking Type):</label>
        <select id="decl-type" class="decl-input" onchange="renderDeclaration()">
          <option value="general">1. सामान्य सरकारी सेवा व परीक्षा स्व-घोषणा पत्र (General Govt Undertaking)</option>
          <option value="ibps">2. IBPS / SBI बैंक परीक्षा हस्तलिखित घोषणा पत्र (Handwritten Declaration)</option>
          <option value="ladki">3. मुख्यमंत्री - माझी लाडकी बहीण योजना (हमीपत्र / Hamipatra)</option>
          <option value="income">4. पारिवारिक आय स्व-प्रमाणित घोषणा पत्र (Self-Income Declaration)</option>
          <option value="obc">5. अन्य पिछड़ा वर्ग (OBC NCL) नॉन-क्रीमी लेयर स्व-घोषणा पत्र</option>
          <option value="ration">6. राशन कार्ड सदस्य पृथक्करण / नया राशन कार्ड घोषणा पत्र</option>
          <option value="character">7. चरित्र एवं पूर्ववृत्त स्व-घोषणा पत्र (No Criminal Case Undertaking)</option>
        </select>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
        <div class="input-row">
          <label for="decl-name">आवेदक का पूरा नाम (Full Name):</label>
          <input type="text" id="decl-name" class="decl-input" placeholder="उदा. राहुल शर्मा / Priya Patil" oninput="renderDeclaration()">
        </div>

        <div class="input-row">
          <label for="decl-father">पिता / पति का नाम (Father's / Husband's Name):</label>
          <input type="text" id="decl-father" class="decl-input" placeholder="उदा. श्री सुरेश शर्मा" oninput="renderDeclaration()">
        </div>
      </div>

      <div class="input-row">
        <label for="decl-address">स्थायी पता व ज़िला (Permanent Address &amp; District):</label>
        <input type="text" id="decl-address" class="decl-input" placeholder="उदा. ग्राम रामपुर, पोस्ट सदर, ज़िला नागपुर, महाराष्ट्र - 440001" oninput="renderDeclaration()">
      </div>

      <!-- LIVE PREVIEW BOX -->
      <div style="margin-top: 28px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <h3 style="margin: 0; color: var(--color-primary); font-size: 1.15rem;">📄 लाइव घोषणा पत्र पूर्वावलोकन (Print Preview):</h3>
          <span style="font-size: 0.85rem; color: var(--color-text-muted);">A4 Formatted Proforma</span>
        </div>
        
        <div id="decl-preview" class="preview-box">
          <!-- Dynamically populated by JS -->
        </div>
      </div>

      <!-- ACTION BUTTONS -->
      <div class="btn-action-group">
        <button class="btn-tool-primary" onclick="window.print()">
          🖨️ A4 साइज में प्रिंट करें (Print PDF)
        </button>
        <button class="btn-tool-secondary" onclick="copyDeclText()">
          📋 टेक्स्ट कॉपी करें (Copy Text)
        </button>
        <button class="btn-tool-secondary" onclick="downloadDeclText()">
          📥 .TXT फाइल डाउनलोड करें
        </button>
      </div>
    </section>

    <!-- 6 REAL-WORLD PROBLEMS & DETAILED LEGAL SOLUTIONS -->
    <section class="service-section" style="margin-top: 40px;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        ⚠️ <span data-lang-show="en">6 Real-World Problem Solvers for Self-Declarations</span>
        <span data-lang-show="hi">स्व-घोषणा पत्र की 6 प्रमुख समस्याएं व कानूनी समाधान</span>
      </h2>

      <!-- Problem 1 -->
      <div class="prob-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 6px solid #2563eb; border-radius: 12px; padding: 22px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
        <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.25rem;">1. IBPS / SBI बैंक परीक्षा में घोषणा पत्र रिजेक्ट होना — पेन और स्याही का सही नियम</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 12px;">लाखों उम्मीदवार नीली स्याही से लिखकर या कंप्यूटर टाइप करके अपलोड कर देते हैं, जिससे एडमिट कार्ड रुक जाता है।</p>
        <ul style="padding-left: 20px; margin: 8px 0; line-height: 1.75; color: var(--color-text);">
          <li><strong>नियम:</strong> IBPS/SBI की अधिसूचना के अनुसार हस्तलिखित घोषणा केवल <strong>काली स्याही (Black Ink Pen)</strong> से सादे सफेद A4 पेपर पर उम्मीदवार की खुद की लिखावट में होनी चाहिए।</li>
          <li>कैपिटल लेटर्स (ALL CAPS) में लिखा घोषणा पत्र अमान्य होता है। सामान्य रनिंग हैंडराइटिंग (Sentence case) में लिखें और 50-100 KB JPG में स्कैन करें।</li>
        </ul>
      </div>

      <!-- Problem 2 -->
      <div class="prob-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 6px solid #059669; border-radius: 12px; padding: 22px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
        <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.25rem;">2. माझी लाडकी बहीण योजना हमीपत्र अपलोड में त्रुटी (Hamipatra Correction)</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 12px;">नारी शक्ति दूत ऐप या पोर्टल पर हमीपत्र धुंधला होने या शर्तें टिक न होने से आवेदन पेंडिंग हो जाना।</p>
        <ul style="padding-left: 20px; margin: 8px 0; line-height: 1.75; color: var(--color-text);">
          <li><strong>समाधान:</strong> ऊपर दिए गए जनरेटर से मराठी हमीपत्र प्रिंट करें, चारों शर्तों को पढ़कर नीचे महिला आवेदक के हस्ताक्षर/अंगूठा लगाएं।</li>
          <li>मोबाइल कैमरे से सीधे ऊपर से (Flat angle) फोटो खींचकर 200 KB से कम साइज की स्पष्ट जेपीजी/पीडीएफ अपलोड करें।</li>
        </ul>
      </div>

      <!-- Problem 3 -->
      <div class="prob-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 6px solid #d97706; border-radius: 12px; padding: 22px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
        <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.25rem;">3. पारिवारिक आय घोषणा पत्र और AIS / ITR डेटा में अंतर का समाधान</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 12px;">घोषणा पत्र में आय ₹1 लाख दर्शाई गई किंतु पैन कार्ड पर शेयर मार्केट या ब्याज आय दर्ज होने पर फॉर्म रिजेक्ट होना।</p>
        <ul style="padding-left: 20px; margin: 8px 0; line-height: 1.75; color: var(--color-text);">
          <li><strong>समाधान:</strong> घोषणा पत्र भरते समय परिवार के सभी स्रोतों (कृषि, मजदूरी, पेंशन व बैंक ब्याज) की वास्तविक सकल आय दर्ज करें।</li>
          <li>यदि परिवार का कोई भी सदस्य आईटीआर भरता है, तो वही आय स्व-घोषणा पत्र में अंकित करें जो आईटीआर में घोषित है।</li>
        </ul>
      </div>

      <!-- Problem 4 -->
      <div class="prob-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 6px solid #7c3aed; border-radius: 12px; padding: 22px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
        <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.25rem;">4. क्या स्व-घोषणा पत्र के लिए नोटरी या ₹100 का स्टांप पेपर बनवाना जरूरी है?</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 12px;">कोर्ट कचहरी के अनावश्यक खर्च और एजेंटों द्वारा नोटरी के नाम पर अवैध वसूली से बचाव।</p>
        <ul style="padding-left: 20px; margin: 8px 0; line-height: 1.75; color: var(--color-text);">
          <li><strong>सरकारी नियम:</strong> कार्मिक एवं प्रशासनिक सुधार विभाग (DARPG) के स्पष्ट आदेशानुसार भारत में लगभग 95% सरकारी सेवाओं के लिए नोटरी एफिडेविट समाप्त कर दिया गया है।</li>
          <li>सादे सफेद कागज पर स्व-हस्ताक्षरित (Self-Attested) प्रपत्र कानूनी रूप से पूर्णतः मान्य है। केवल कोर्ट मुकदमों या जमीन रजिस्ट्री में ही स्टांप पेपर लगता है।</li>
        </ul>
      </div>

      <!-- Problem 5 -->
      <div class="prob-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 6px solid #dc2626; border-radius: 12px; padding: 22px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
        <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.25rem;">5. अनपढ़ या बुजुर्ग आवेदकों के लिए अंगूठा निशान (Thumb Impression) का वैधीकरण</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 12px;">अंगूठे के निशान वाले घोषणा पत्र को रिजेक्शन से बचाने के नियम।</p>
        <ul style="padding-left: 20px; margin: 8px 0; line-height: 1.75; color: var(--color-text);">
          <li>पुरुष आवेदक बाएं हाथ का अंगूठा (LTI) और महिला आवेदक दाएं हाथ का अंगूठा (RTI) लगाएं।</li>
          <li>अंगूठे के निशान के पास में परिवार के साक्षर सदस्य का नाम बतौर गवाह लिखें या स्थानीय ग्राम पंचायत सचिव / सीएससी वीएलई से तस्दीक कराएं।</li>
        </ul>
      </div>

      <!-- Problem 6 -->
      <div class="prob-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 6px solid #db2777; border-radius: 12px; padding: 22px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
        <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.25rem;">6. नाम में मामूली वर्तनी अंतर (Name Spelling Mismatch in 10th &amp; Aadhaar)</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 12px;">दस्तावेज़ सत्यापन (DV) के समय नाम में उपनाम या स्पेस छूट जाने पर उम्मीदवारी रद्द होने से बचाना।</p>
        <ul style="padding-left: 20px; margin: 8px 0; line-height: 1.75; color: var(--color-text);">
          <li><strong>समाधान:</strong> घोषणा पत्र में लिखें कि "मेरे 10वीं प्रमाण पत्र में दर्ज नाम 'राहुल कुमार' और आधार कार्ड में दर्ज नाम 'राहुल कुमार शर्मा' एक ही और अभिन्न व्यक्ति के हैं।"</li>
          <li>इस प्रकार का स्व-घोषणा पत्र भर्ती बोर्ड को जमा करने पर प्रोविजनल क्लीयरेंस मिल जाता है।</li>
        </ul>
      </div>
    </section>

    <!-- LEGAL FRAMEWORK IN INDIA (2,000+ Words Guide) -->
    <section class="service-section" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 28px; margin-top: 36px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
      <h2 style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        📖 <span data-lang-show="en">Legal Importance &amp; Statutory Guidelines for Self-Declarations</span>
        <span data-lang-show="hi">स्व-घोषणा पत्र के कानूनी नियम, दंड संहिता व भारत सरकार के दिशा-निर्देश</span>
      </h2>

      <div style="color: var(--color-text); line-height: 1.85; font-size: 1.02rem;">
        <h3 style="color: var(--color-primary); font-size: 1.25rem;">1. स्व-प्रमाणीकरण (Self-Attestation) का ऐतिहासिक सरकारी सुधार</h3>
        <p>भारत सरकार ने वर्ष 2014 में नागरिक-केंद्रित शासन को बढ़ावा देने के लिए एक ऐतिहासिक प्रशासनिक सुधार लागू किया, जिसके तहत नागरिकों को राजपत्रित अधिकारियों (Gazetted Officers) से दस्तावेजों के अनुप्रमाणन या कोर्ट नोटरी एफिडेविट की अनिवार्यता से मुक्त कर दिया गया। प्रशासनिक सुधार एवं लोक शिकायत विभाग (DARPG) द्वारा जारी आधिकारिक अधिसूचना के अनुसार, प्रत्येक नागरिक को अपने दस्तावेजों की स्व-सत्यापित प्रतियां (Self-Attested Copies) और स्व-घोषणा पत्र प्रस्तुत करने का कानूनी अधिकार प्राप्त है।</p>

        <h3 style="color: var(--color-primary); font-size: 1.25rem; margin-top: 24px;">2. भारतीय न्याय संहिता (BNS) के तहत दंडात्मक प्रावधान</h3>
        <p>यद्यपि स्व-घोषणा पत्र की प्रक्रिया अत्यंत सरल है, किंतु इसका कानूनी उत्तरदायित्व बहुत गंभीर है। भारतीय न्याय संहिता 2023 की धारा 229 (न्यायिक कार्यवाही में झूठा साक्ष्य देना) एवं धारा 230 के अनुसार, यदि कोई व्यक्ति किसी सरकारी नौकरी, छात्रवृत्ति या कल्याणकारी योजना का अनुचित लाभ लेने के लिए जानबूझकर झूठा स्व-घोषणा पत्र प्रस्तुत करता है:</p>
        <ul style="padding-left: 22px;">
          <li>उसका आवेदन और प्राप्त लाभ तत्काल प्रभाव से निरस्त (Cancel) कर दिया जाएगा।</li>
          <li>उम्मीदवार को भविष्य की सभी सरकारी भर्ती परीक्षाओं से आजीवन डिबार (Debar) किया जा सकता है।</li>
          <li>दोषी पाए जाने पर 3 वर्ष से लेकर 7 वर्ष तक के सश्रम कारावास और आर्थिक जुर्माने का कड़ा प्रावधान है।</li>
        </ul>

        <h3 style="color: var(--color-primary); font-size: 1.25rem; margin-top: 24px;">3. विभिन्न परीक्षाओं व योजनाओं में स्व-घोषणा के मानक प्रारूप</h3>
        <p>विभिन्न आयोगों और विभागों द्वारा अपने आवेदन प्रपत्रों में विशिष्ट भाषाओं में घोषणा पत्र अनिवार्य किया जाता है:</p>
        <ol style="padding-left: 22px;">
          <li><strong>बैंकिंग कार्मिक चयन संस्थान (IBPS):</strong> केवल अंग्रेजी में हस्तलिखित घोषणा पत्र मान्य करता है।</li>
          <li><strong>महाराष्ट्र शासन (लाडकी बहीण):</strong> मराठी भाषा में विहित 4-सूत्रीय हमीपत्र प्रपत्र।</li>
          <li><strong>कर्मचारी चयन आयोग (SSC) व संघ लोक सेवा आयोग (UPSC):</strong> ऑनलाइन फॉर्म सबमिशन पर डिजिटल डिक्लेरेशन चेकबॉक्स।</li>
          <li><strong>केंद्रीय छात्रवृत्ति पोर्टल (NSP):</strong> माता-पिता द्वारा हस्ताक्षरित पारिवारिक आय प्रमाण पत्र।</li>
        </ol>
      </div>
    </section>

    <!-- 10 VISIBLE FAQS ACCORDIONS -->
    <section class="service-section" style="margin-top: 40px;">
      <h2 style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        ❓ <span data-lang-show="en">Frequently Asked Questions (FAQs)</span>
        <span data-lang-show="hi">स्व-घोषणा पत्र से जुड़े अक्सर पूछे जाने वाले सवाल (FAQs)</span>
      </h2>

      <details class="faq-item" open style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>1. स्व-घोषणा पत्र (Self-Declaration) क्या होता है और क्या यह कानूनी रूप से मान्य है?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          स्व-घोषणा पत्र एक स्व-प्रमाणित कानूनी शपथ पत्र है जिसमें आवेदक स्वयं घोषणा करता है कि उसके द्वारा दी गई जानकारी पूर्णतः सत्य है। भारत सरकार के कार्मिक एवं प्रशिक्षण विभाग (DoPT) के 2014 के राजपत्र के अनुसार, अधिकांश सरकारी सेवाओं में नोटरी हलफनामे के स्थान पर सेल्फ डिक्लेरेशन 100% कानूनी रूप से मान्य है।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>2. IBPS / SBI बैंक परीक्षाओं में हस्तलिखित घोषणा पत्र (Handwritten Declaration) किस पेन से लिखना चाहिए?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          IBPS और SBI के आधिकारिक नियमों के अनुसार हस्तलिखित घोषणा पत्र को हमेशा सादे सफेद कागज पर केवल काली स्याही (Black Ink Pen) से अपनी स्वयं की लिखावट में लिखना अनिवार्य है। नीली स्याही या कंप्यूटर टाइपिंग से लिखा फॉर्म रिजेक्ट हो जाता है।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>3. माझी लाडकी बहीण योजना के हमीपत्र में क्या नियम हैं?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          लाडकी बहीण योजना हमीपत्र में महिला आवेदक यह घोषणा करती है कि उसके परिवार की कुल वार्षिक आय ₹2.5 लाख से कम है, परिवार में कोई आयकर दाता या सरकारी कर्मचारी नहीं है और चार पहिया वाहन (ट्रैक्टर छोड़कर) नहीं है।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>4. यदि स्व-घोषणा पत्र में गलत जानकारी दी जाए तो क्या कानूनी कार्यवाही हो सकती है?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          हाँ, भारतीय न्याय संहिता (BNS) की धारा 229 व 230 (पूर्व में IPC 199/200) के तहत झूठी घोषणा प्रस्तुत करने पर उम्मीदवार का आवेदन रद्द करने के साथ-साथ 3 वर्ष तक का कारावास व जुर्माना हो सकता है।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>5. क्या अनपढ़ या वृद्ध आवेदक अंगूठा निशान (Thumb Impression) लगा सकते हैं?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          हाँ, हस्ताक्षर न कर पाने वाले आवेदक बाएं हाथ का अंगूठा निशान (Left Thumb Impression) लगा सकते हैं। इसे ग्राम प्रधान, राजपत्रित अधिकारी या सीएससी वीएलई द्वारा अनुप्रमाणित कराया जा सकता है।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>6. क्या स्व-घोषणा पत्र के लिए स्टांप पेपर या नोटरी की आवश्यकता होती है?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          नहीं, सामान्य स्व-घोषणा पत्र सादे A4 सफेद कागज पर प्रिंट या हस्तलिखित करके जमा किया जा सकता है। इसके लिए किसी ₹10/₹50 के स्टांप पेपर या कोर्ट नोटरी की आवश्यकता नहीं होती।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>7. स्व-घोषणा पत्र को ऑनलाइन फॉर्म में अपलोड करने के लिए सही फाइल साइज क्या है?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          अधिकांश सरकारी पोर्टलों (IBPS/SSC/State Portals) पर घोषणा पत्र को 50 KB से 100 KB के बीच JPG या PDF फॉर्मेट में 200 DPI रेजोल्यूशन पर स्कैन करके अपलोड किया जाता है।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>8. पारिवारिक आय स्व-घोषणा पत्र किन-किन योजनाओं में मान्य होता है?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          छात्रवृत्ति योजनाओं (NSP/State Scholarships), राशन कार्ड आवेदन, पीएम विश्वकर्मा, लाडकी बहीण योजना और राज्य कौशल विकास योजनाओं में तहसीलदार आय प्रमाण पत्र न होने पर अंतरिम रूप से स्व-घोषणा पत्र स्वीकार किया जाता है।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>9. ओबीसी नॉन-क्रीमी लेयर (OBC NCL) स्व-घोषणा पत्र का क्या महत्व है?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          केंद्र व राज्य सरकार की नौकरियों में आवेदन करते समय ओबीसी आरक्षण का लाभ लेने के लिए यह प्रमाणित करना होता है कि आवेदक के माता-पिता की वार्षिक आय क्रीमी लेयर सीमा (₹8 लाख) से कम है।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>10. क्या डिजिटल सिग्नेचर (e-Sign) स्व-घोषणा पत्र पर मान्य है?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          हाँ, सूचना प्रौद्योगिकी अधिनियम 2000 (IT Act) के तहत आधार बेस्ड e-Sign से डिजिटल रूप से हस्ताक्षरित घोषणा पत्र सभी सरकारी और कानूनी प्रक्रियाओं में 100% वैध माना जाता है।
        </div>
      </details>
    </section>

{render_featured_schemes_banner()}

{render_useful_tools_grid()}

    <!-- TELEGRAM COMMUNITY BANNER -->
    <div style="background: linear-gradient(135deg, #0088cc 0%, #005f8f 100%); border-radius: 12px; padding: 24px; color: #fff; margin: 36px 0; text-align: center; box-shadow: 0 4px 12px rgba(0,136,204,0.25);">
      <h3 style="margin: 0 0 8px 0; color: #fff; font-size: 1.4rem;">✈️ SarkariSewa VIP Telegram Community</h3>
      <p style="margin: 0 0 16px 0; color: #e0f2fe; font-size: 0.95rem;">सभी सरकारी प्रपत्रों, नोटिफिकेशन, भर्ती सूचना व एफिडेविट फॉर्मेट्स की मुफ्त पीडीएफ प्राप्त करें।</p>
      <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" class="btn" style="background: #fff; color: #0088cc; font-weight: 700; padding: 10px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">Join Telegram Channel ↗</a>
    </div>

  </main>

  <div id="site-footer"></div>
  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/consent.js"></script>
  <script src="../assets/js/i18n-helper.js"></script>

  <script>
    function renderDeclaration() {{
      const type = document.getElementById('decl-type').value;
      const name = document.getElementById('decl-name').value || '________';
      const father = document.getElementById('decl-father').value || '________';
      const address = document.getElementById('decl-address').value || '________';
      const preview = document.getElementById('decl-preview');
      let html = '';
      const today = new Date().toLocaleDateString('en-IN');

      if (type === 'ibps') {{
        html = `
          <div style="text-align: center; font-weight: 700; font-size: 1.25rem; margin-bottom: 16px; color: var(--color-primary);">
            HANDWRITTEN DECLARATION (To be written in own handwriting with Black Ink)
          </div>
          <p style="font-size: 1.05rem; line-height: 1.8;">
            "I, <strong>${{name}}</strong>, hereby declare that all the information submitted by me in the application form is correct, true and valid. I will present the supporting documents as and when required."
          </p>
          <div style="margin-top: 36px; display: flex; justify-content: space-between; font-size: 0.95rem;">
            <div>Date: ${{today}}<br>Place: ${{address}}</div>
            <div style="text-align: right;">_______________________<br>Signature of Applicant</div>
          </div>
        `;
      }} else if (type === 'ladki') {{
        html = `
          <div style="text-align: center; font-weight: 700; font-size: 1.25rem; margin-bottom: 16px; color: var(--color-primary);">
            मुख्यमंत्री - माझी लाडकी बहीण योजना (हमीपत्र / Self-Declaration)
          </div>
          <p style="font-size: 1.02rem; line-height: 1.8;">
            मी, <strong>${{name}}</strong>, पती/वडिलांचे नाव: <strong>${{father}}</strong>, रा. <strong>${{address}}</strong>, याद्वारे घोषित करते की:
          </p>
          <ol style="padding-left: 20px; line-height: 1.75;">
            <li>माझ्या कुटुंबाचे सर्व मार्गांनी मिळणारे एकत्रित वार्षिक उत्पन्न ₹२,५०,०००/- पेक्षा जास्त नाही.</li>
            <li>मी किंवा माझ्या कुटुंबातील कोणताही सदस्य आयकर (Income Tax) भरणारा नाही.</li>
            <li>मी किंवा माझ्या कुटुंबातील कोणताही सदस्य सरकारी सेवेत किंवा निवृत्तीवेतनधारक नाही.</li>
            <li>माझ्या कुटुंबात चारचाकी वाहन (ट्रॅक्टर वगळून) नाही.</li>
          </ol>
          <p style="font-size: 0.95rem; line-height: 1.7;">वरील सर्व माहिती माझ्या माहितीनुसार खरी व अचूक आहे. कोणतीही माहिती खोटी आढळल्यास मला मिळणारा लाभ बंद करून कायदेशीर कारवाईस मी पात्र राहीन.</p>
          <div style="margin-top: 36px; display: flex; justify-content: space-between; font-size: 0.95rem;">
            <div>दिनांक: ${{today}}<br>स्थान: ${{address}}</div>
            <div style="text-align: right;">_______________________<br>अर्जदार महिलेची स्वाक्षरी / अंगठा</div>
          </div>
        `;
      }} else if (type === 'income') {{
        html = `
          <div style="text-align: center; font-weight: 700; font-size: 1.25rem; margin-bottom: 16px; color: var(--color-primary);">
            स्व-प्रमाणित पारिवारिक आय घोषणा पत्र (Self-Income Declaration)
          </div>
          <p style="font-size: 1.02rem; line-height: 1.8;">
            मैं, <strong>${{name}}</strong>, सुपुत्र/सुपुत्री/पत्नी श्री <strong>${{father}}</strong>, निवासी <strong>${{address}}</strong>, शपथपूर्वक यह घोषणा करता/करती हूँ कि:
          </p>
          <p style="font-size: 1.02rem; line-height: 1.8;">
            1. मेरे पूरे परिवार की सभी स्रोतों (कृषि, मजदूरी, व्यापार आदि) से कुल वार्षिक आय ₹2,50,000/- (दो लाख पचास हजार रुपये) से कम है।<br>
            2. मेरे परिवार का कोई भी सदस्य सरकारी नौकरी या आयकरदाता नहीं है।<br>
            3. यह घोषणा पत्र पूर्णतः सत्य एवं प्रामाणिक है। यदि कोई भी विवरण असत्य पाया जाता है तो मेरे विरुद्ध कानूनी कार्यवाही की जा सकती है।
          </p>
          <div style="margin-top: 36px; display: flex; justify-content: space-between; font-size: 0.95rem;">
            <div>दिनांक: ${{today}}<br>स्थान: ${{address}}</div>
            <div style="text-align: right;">_______________________<br>आवेदक के हस्ताक्षर / अंगूठा</div>
          </div>
        `;
      }} else if (type === 'obc') {{
        html = `
          <div style="text-align: center; font-weight: 700; font-size: 1.25rem; margin-bottom: 16px; color: var(--color-primary);">
            अन्य पिछड़ा वर्ग (OBC) नॉन-क्रीमी लेयर स्व-घोषणा पत्र
          </div>
          <p style="font-size: 1.02rem; line-height: 1.8;">
            मैं, <strong>${{name}}</strong>, आत्मज/आत्मजा श्री <strong>${{father}}</strong>, निवासी <strong>${{address}}</strong>, घोषित करता/करती हूँ कि मैं उस समुदाय से संबंधित हूँ जिसे भारत सरकार द्वारा अन्य पिछड़ा वर्ग (OBC) के रूप में मान्यता प्राप्त है।
          </p>
          <p style="font-size: 1.02rem; line-height: 1.8;">
            मैं यह भी प्रमाणित करता/करती हूँ कि मैं कार्मिक एवं प्रशिक्षण विभाग के कार्यालय ज्ञापन संख्या 36012/22/93-Estt.(SCT) दिनांक 08.09.1993 में उल्लिखित 'क्रीमी लेयर' (Creamy Layer) के दायरे में नहीं आता/आती हूँ।
          </p>
          <div style="margin-top: 36px; display: flex; justify-content: space-between; font-size: 0.95rem;">
            <div>दिनांक: ${{today}}<br>स्थान: ${{address}}</div>
            <div style="text-align: right;">_______________________<br>आवेदक के हस्ताक्षर</div>
          </div>
        `;
      }} else if (type === 'ration') {{
        html = `
          <div style="text-align: center; font-weight: 700; font-size: 1.25rem; margin-bottom: 16px; color: var(--color-primary);">
            राशन कार्ड सदस्य पृथक्करण / नया राशन कार्ड स्व-घोषणा पत्र
          </div>
          <p style="font-size: 1.02rem; line-height: 1.8;">
            मैं, <strong>${{name}}</strong>, पिता/पति श्री <strong>${{father}}</strong>, निवासी <strong>${{address}}</strong>, घोषित करता/करती हूँ कि मेरा विवाह होने / अलग निवास करने के कारण मेरा नाम पूर्व राशन कार्ड से हटाकर नए राशन कार्ड में दर्ज किया जाए। मेरा नाम भारत के किसी अन्य राशन कार्ड में दर्ज नहीं है।
          </p>
          <div style="margin-top: 36px; display: flex; justify-content: space-between; font-size: 0.95rem;">
            <div>दिनांक: ${{today}}<br>स्थान: ${{address}}</div>
            <div style="text-align: right;">_______________________<br>मुखिया / आवेदक के हस्ताक्षर</div>
          </div>
        `;
      }} else if (type === 'character') {{
        html = `
          <div style="text-align: center; font-weight: 700; font-size: 1.25rem; margin-bottom: 16px; color: var(--color-primary);">
            चरित्र एवं पूर्ववृत्त स्व-घोषणा पत्र (No Criminal Record Undertaking)
          </div>
          <p style="font-size: 1.02rem; line-height: 1.8;">
            मैं, <strong>${{name}}</strong>, पिता/पति श्री <strong>${{father}}</strong>, निवासी <strong>${{address}}</strong>, निष्ठापूर्वक यह घोषणा करता/करती हूँ कि मेरे विरुद्ध किसी भी पुलिस थाने में कोई प्राथमिकी (FIR) या किसी भी न्यायालय में कोई आपराधिक मामला (Criminal Case) लंबित या विचाराधीन नहीं है और न ही मुझे कभी किसी न्यायालय द्वारा दंडित किया गया है।
          </p>
          <div style="margin-top: 36px; display: flex; justify-content: space-between; font-size: 0.95rem;">
            <div>दिनांक: ${{today}}<br>स्थान: ${{address}}</div>
            <div style="text-align: right;">_______________________<br>आवेदक के हस्ताक्षर</div>
          </div>
        `;
      }} else {{
        html = `
          <div style="text-align: center; font-weight: 700; font-size: 1.25rem; margin-bottom: 16px; color: var(--color-primary);">
            स्व-घोषणा पत्र (SELF DECLARATION UNDERTAKING)
          </div>
          <p style="font-size: 1.02rem; line-height: 1.8;">
            मैं / I, <strong>${{name}}</strong>, पिता/पति / S/o, D/o, W/o <strong>${{father}}</strong>, निवासी / Resident of <strong>${{address}}</strong>, प्रमाणित करता/करती हूँ कि आवेदन पत्र में भरे गए समस्त विवरण मेरी व्यक्तिगत जानकारी व मूल अभिलेखों के अनुसार पूर्णतः सत्य, सही और प्रामाणिक हैं।
          </p>
          <p style="font-size: 1.02rem; line-height: 1.8;">
            यदि चयन के पूर्व अथवा उपरांत कोई भी सूचना असत्य अथवा कपटपूर्ण पाई जाती है तो मेरी उम्मीदवारी/सेवा तत्काल समाप्त की जा सकेगी।
          </p>
          <div style="margin-top: 36px; display: flex; justify-content: space-between; font-size: 0.95rem;">
            <div>दिनांक / Date: ${{today}}<br>स्थान / Place: ${{address}}</div>
            <div style="text-align: right;">_______________________<br>आवेदक के हस्ताक्षर / Signature</div>
          </div>
        `;
      }}

      preview.innerHTML = html;
    }}

    function copyDeclText() {{
      const text = document.getElementById('decl-preview').innerText;
      navigator.clipboard.writeText(text).then(() => {{
        alert('घोषणा पत्र का टेक्स्ट सफलतापूर्वक कॉपी हो गया है! (Copied to Clipboard)');
      }});
    }}

    function downloadDeclText() {{
      const text = document.getElementById('decl-preview').innerText;
      const blob = new Blob([text], {{ type: 'text/plain;charset=utf-8' }});
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'Self_Declaration_Format_2026.txt';
      link.click();
    }}

    document.addEventListener('DOMContentLoaded', renderDeclaration);
  </script>
</body>
</html>'''

    with open(fpath, 'w', encoding='utf-8') as fp:
        fp.write(html)
    size_kb = len(html.encode('utf-8')) / 1024
    words = len(re.findall(r'\w+', html))
    print(f'Upgraded: tools/self-declaration-builder.html ({size_kb:.1f} KB, {words} words)')

def upgrade_document_checklist():
    fpath = os.path.join(TOOLS_DIR, 'document-checklist.html')
    
    html = f'''<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/apple-touch-icon.png">
  <link rel="icon" href="../favicon.ico">
  <link rel="manifest" href="../manifest.json">
  <link rel="canonical" href="https://sarkarisewaindia.com/tools/document-checklist.html" />
  <meta name="description" content="सरकारी नौकरी व योजना दस्तावेज़ चेकलिस्ट 2026: SSC, UPSC, IBPS बैंक, जाति, आय, निवास, पासपोर्ट व सरकारी योजनाओं के लिए आवश्यक कागजातों की संपूर्ण सूची व सत्यापन गाइड।" />
  <meta property="og:title" content="Govt Job &amp; Scheme Document Checklist Tool 2026 | SarkariSewa India" />
  <meta property="og:description" content="Interactive Document Checklist Generator for Government Jobs, Welfare Schemes, Certificates &amp; Subsidized Loans." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://sarkarisewaindia.com/tools/document-checklist.html" />
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Document Checklist Tool 2026 | SarkariSewa India" />
  <meta name="twitter:description" content="Generate and print complete document verification checklists for all government services." />
  <title>Govt Job &amp; Scheme Document Checklist 2026: दस्तावेज़ चेकलिस्ट | SarkariSewa India</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css" />
  <link rel="stylesheet" href="../assets/css/module2.css" />
  <link rel="stylesheet" href="../assets/css/module7.css" />
  <link rel="stylesheet" href="../assets/css/module9.css" />
  <link rel="stylesheet" href="../assets/css/share-widget.css" />

  <style>
{render_tools_common_css()}
  </style>

  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@graph": [
      {{
        "@type": "WebApplication",
        "name": "Government Document Verification Checklist Generator",
        "url": "https://sarkarisewaindia.com/tools/document-checklist.html",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "All",
        "offers": {{
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        }}
      }},
      {{
        "@type": "FAQPage",
        "mainEntity": [
          {{
            "@type": "Question",
            "name": "सरकारी नौकरी के दस्तावेज़ सत्यापन (Document Verification - DV) में कौन-कौन से मूल दस्तावेज़ चाहिए?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "DV में मुख्य रूप से: (1) 10वीं की मूल अंकतालिका व सनद (जन्म तिथि प्रमाण), (2) 12वीं/ग्रेजुएशन/डिप्लोमा की सभी सेमेस्टर की मार्कशीट व डिग्री, (3) सक्षम प्राधिकारी द्वारा जारी मूल जाति/EWS/OBC NCL प्रमाण पत्र, (4) मूल निवास प्रमाण पत्र (Domicile), (5) फोटो पहचान पत्र (Aadhaar/PAN), और (6) नवीनतम पासपोर्ट फोटो व अनापत्ति प्रमाण पत्र (NOC यदि पहले से सेवारत हों)।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "यदि 10वीं की मार्कशीट और आधार कार्ड में नाम या उपनाम में अंतर हो तो क्या करें?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "यदि नाम की स्पेलिंग में अंतर है, तो प्रथम श्रेणी मजिस्ट्रेट या नोटरी द्वारा जारी ₹100 का 'एक ही व्यक्ति होने का शपथ पत्र' (One and the Same Affidavit) बनवाएं। DV के समय इसे प्रस्तुत करने पर उम्मीदवारी निरस्त नहीं होती।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "EWS और OBC नॉन-क्रीमी लेयर प्रमाण पत्र की क्रूशियल डेट (Crucial Date) क्या होती है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "क्रूशियल डेट भर्ती विज्ञापन की ऑनलाइन आवेदन की अंतिम तिथि होती है। EWS और OBC NCL प्रमाण पत्र उसी संबंधित वित्तीय वर्ष (Financial Year) के लिए वैध होना चाहिए जिस वर्ष भर्ती निकाली गई थी।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "क्या डिजीलॉकर (DigiLocker) के डिजिटल प्रमाण पत्र DV में मान्य होते हैं?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "हाँ, सूचना प्रौद्योगिकी अधिनियम 2000 के नियम 9A के तहत डिजीलॉकर द्वारा जारी डिजिटल हस्ताक्षरित प्रमाणपत्र मूल भौतिक दस्तावेजों के समतुल्य कानूनी मान्यता रखते हैं।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "शादी के बाद महिला उम्मीदवारों के उपनाम बदलने पर कौन सा दस्तावेज़ चाहिए?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "विवाह के बाद नाम बदलने पर (1) विवाह प्रमाण पत्र (Marriage Certificate) या (2) संयुक्त शपथ पत्र (Joint Affidavit with Spouse) या (3) राज्य का सरकारी राजपत्र (Gazette Notification) प्रस्तुत करना होता है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "आय प्रमाण पत्र (Income Certificate) कितने समय तक वैध होता है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "अधिकांश राज्यों में तहसीलदार द्वारा जारी आय प्रमाण पत्र जारी होने की तिथि से 3 वित्तीय वर्षों तक वैध होता है, जबकि कुछ राज्यों (जैसे बिहार, यूपी) में यह 1 वर्ष के लिए वैध माना जाता है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "जाति प्रमाण पत्र (Caste Certificate) की वैधता अवधि कितनी होती है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "अनुसूचित जाति (SC) और अनुसूचित जनजाति (ST) का प्रमाण पत्र आजीवन (Lifetime) वैध होता है। जबकि OBC Non-Creamy Layer (NCL) प्रमाण पत्र प्रति वर्ष आय निर्धारण के आधार पर 1 से 3 वर्ष के लिए मान्य होता है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "मूल निवास प्रमाण पत्र (Domicile / Residence Certificate) क्यों आवश्यक है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "राज्य सरकार की नौकरियों में स्थानीय आरक्षण, राज्य छात्रवृत्तियों, राशन कार्ड और लाडकी बहीण जैसी योजनाओं में राज्य का स्थायी निवासी सिद्ध करने हेतु निवास प्रमाण पत्र अनिवार्य होता है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "यदि मूल प्रमाण पत्र (Original Marksheet) खो गया हो तो DV कैसे कराएं?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "पुलिस में गुमशुदगी की रिपोर्ट (NCR/FIR) दर्ज कराएं, अपने संबंधित बोर्ड/यूनिवर्सिटी से डुप्लिकेट मार्कशीट (Duplicate Marksheet) हेतु आवेदन करें और उसकी रसीद व शपथ पत्र DV बोर्ड को दिखाएं।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "सेल्फ-अटेस्टेशन (Self-Attestation) कैसे किया जाता है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "फोटोकॉपी के निचले हिस्से पर 'Self Attested' लिखकर अपने पूर्ण हस्ताक्षर करें और जिस दिन फॉर्म जमा कर रहे हैं उस दिन की तारीख (Date) दर्ज करें।"
            }}
          }}
        ]
      }},
      {{
        "@type": "BreadcrumbList",
        "itemListElement": [
          {{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://sarkarisewaindia.com/"}},
          {{"@type": "ListItem", "position": 2, "name": "Tools", "item": "https://sarkarisewaindia.com/tools/index.html"}},
          {{"@type": "ListItem", "position": 3, "name": "Document Checklist Tool", "item": "https://sarkarisewaindia.com/tools/document-checklist.html"}}
        ]
      }}
    ]
  }}
  </script>
</head>
<body data-slug="document-checklist">
  <div id="site-header"></div>

  <main class="service-detail container" id="main-content" style="max-width: 1040px; margin: 0 auto; padding: 24px 16px;">
    
    <!-- BREADCRUMB -->
    <nav class="breadcrumb" aria-label="Breadcrumb" style="font-size: 0.9rem; margin-bottom: 20px; color: var(--color-text-muted);">
      <a href="../index.html" style="color: var(--color-primary); text-decoration: none;">होम</a> &gt;
      <a href="../tools/index.html" style="color: var(--color-primary); text-decoration: none;">टूल्स एवं कैलकुलेटर्स</a> &gt;
      <span style="color: var(--color-text);">दस्तावेज़ चेकलिस्ट जनरेटर (Document Checklist)</span>
    </nav>

    <!-- HERO HEADER -->
    <section class="service-hero" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 16px; padding: 32px 24px; margin-bottom: 28px; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
      <div style="display: inline-block; background: var(--color-brand); color: #ffffff; padding: 6px 14px; border-radius: 20px; font-weight: 700; font-size: 0.85rem; margin-bottom: 12px;">
        📋 100% FREE DOCUMENT VERIFICATION ENGINE
      </div>
      <h1 class="service-hero__title" style="font-size: 2.1rem; line-height: 1.25; margin: 8px 0 16px 0; color: var(--color-primary);">
        <span data-lang-show="hi">सरकारी नौकरी व योजना दस्तावेज़ चेकलिस्ट 2026</span>
        <span data-lang-show="en">Govt Job &amp; Scheme Document Checklist 2026</span>
      </h1>
      <p class="service-hero__desc" style="font-size: 1.05rem; line-height: 1.7; color: var(--color-text); margin-bottom: 18px;">
        <span data-lang-show="hi">SSC, UPSC, रेलवे, IBPS बैंक, जाति/आय प्रमाण पत्र, आयुष्मान भारत, लाडकी बहीण व पासपोर्ट हेतु आवश्यक मूल दस्तावेजों की कस्टमाइज़्ड चेकलिस्ट तैयार करें और DV में बिना किसी रिजेक्शन के सफल हों।</span>
        <span data-lang-show="en">Generate an instant printable document verification checklist for SSC, UPSC, IBPS Banking, Welfare Schemes, Caste/Income Certificates &amp; Passport. Ensure zero rejections in official DV.</span>
      </p>
    </section>

    <!-- INTERACTIVE CHECKLIST CARD -->
    <section class="check-card">
      <h2 style="color: var(--color-primary); font-size: 1.45rem; margin-bottom: 14px;">
        🎯 <span data-lang-show="en">Select Service / Scheme / Recruitment Category:</span>
        <span data-lang-show="hi">सेवा, भर्ती या योजना का चयन करें:</span>
      </h2>

      <!-- CATEGORY SELECTION BUTTONS -->
      <div class="service-btn-group" style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px;">
        <button class="service-btn active" onclick="loadChecklist('ssc')">🏛️ SSC / CGL / CHSL / MTS</button>
        <button class="service-btn" onclick="loadChecklist('banking')">🏦 IBPS / SBI PO &amp; Clerk</button>
        <button class="service-btn" onclick="loadChecklist('railway')">🚆 Railway RRB / ALP / Group D</button>
        <button class="service-btn" onclick="loadChecklist('certificates')">📜 जाति / आय / निवास प्रमाण पत्र</button>
        <button class="service-btn" onclick="loadChecklist('schemes')">🌟 आयुष्मान / पीएम किसान / लाडकी बहीण</button>
        <button class="service-btn" onclick="loadChecklist('passport')">🛂 नया पासपोर्ट / पुलिस सत्यापन</button>
      </div>

      <div style="background: var(--color-bg); padding: 18px; border-radius: 12px; margin-bottom: 20px; border: 1px solid var(--color-border);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h3 id="checklist-title" style="margin: 0; color: var(--color-primary); font-size: 1.2rem;">SSC भर्ती दस्तावेज़ सत्यापन चेकलिस्ट</h3>
          <span id="checked-counter" style="font-weight: 700; color: #059669; font-size: 0.95rem;">0 / 8 दस्तावेज़ तैयार</span>
        </div>
      </div>

      <!-- CHECKLIST ITEMS CONTAINER -->
      <div id="checklist-items-container">
        <!-- Injected via JS -->
      </div>

      <!-- ACTION BUTTONS -->
      <div class="btn-action-group">
        <button class="btn-tool-primary" onclick="window.print()">
          🖨️ चेकलिस्ट A4 प्रिंट करें (Print Checklist)
        </button>
        <button class="btn-tool-secondary" onclick="resetChecklist()">
          🔄 रीसेट करें (Reset All)
        </button>
      </div>
    </section>

    <!-- 6 REAL-WORLD DV PROBLEMS & SOLUTIONS -->
    <section class="service-section" style="margin-top: 40px;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        ⚠️ <span data-lang-show="en">6 Critical Document Verification (DV) Pitfalls &amp; Legal Fixes</span>
        <span data-lang-show="hi">दस्तावेज़ सत्यापन (DV) की 6 गंभीर गलतियां व उनके सटीक कानूनी उपाय</span>
      </h2>

      <div class="prob-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 6px solid #2563eb; border-radius: 12px; padding: 22px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.25rem;">1. 10वीं की मार्कशीट और आधार में माता/पिता के नाम में स्पेलिंग गलती (Name Mismatch)</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 12px;">एक अक्षर या स्पेस छूट जाने के कारण भर्ती बोर्ड द्वारा प्रोविजनल स्टेटस देना या रिजेक्ट करना।</p>
        <ul style="padding-left: 20px; margin: 8px 0; line-height: 1.75; color: var(--color-text);">
          <li><strong>उपाय:</strong> प्रथम श्रेणी मजिस्ट्रेट या नोटरी से ₹100 के गैर-न्यायिक स्टांप पर "One and the Same Person Affidavit" बनवाएं जिसमें दोनों नामों का स्पष्ट उल्लेख हो।</li>
          <li>DV बोर्ड को यह हलफनामा और स्कूल का टीसी/चरित्र प्रमाण पत्र प्रस्तुत करने पर 100% क्लीयरेंस मिलता है।</li>
        </ul>
      </div>

      <div class="prob-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 6px solid #059669; border-radius: 12px; padding: 22px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.25rem;">2. OBC Non-Creamy Layer / EWS प्रमाण पत्र की वित्तीय वर्ष (FY) त्रुटि</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 12px;">पुराना या गलत वित्तीय वर्ष का जाति/ईडब्ल्यूएस सर्टिफिकेट प्रस्तुत करने पर जनरल कैटेगरी में डाल दिया जाना।</p>
        <ul style="padding-left: 20px; margin: 8px 0; line-height: 1.75; color: var(--color-text);">
          <li><strong>उपाय:</strong> विज्ञापन वर्ष के आधार पर नवीनतम वित्तीय वर्ष का सर्टिफिकेट होना चाहिए। उदाहरणार्थ: 2025-26 की भर्ती के लिए 1 अप्रैल 2025 के बाद जारी वैध प्रमाण पत्र चाहिए।</li>
          <li>सर्टिफिकेट में स्पष्ट लिखा होना चाहिए कि परिवार 'क्रीमी लेयर' में नहीं आता।</li>
        </ul>
      </div>

      <div class="prob-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 6px solid #d97706; border-radius: 12px; padding: 22px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.25rem;">3. मूल डिग्री (Original Degree) न होने पर प्रोविजनल डिग्री की वैधता</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 12px;">यूनिवर्सिटी से कॉन्वोकेशन में मूल डिग्री न मिलने की स्थिति में क्या करें।</p>
        <ul style="padding-left: 20px; margin: 8px 0; line-height: 1.75; color: var(--color-text);">
          <li><strong>उपाय:</strong> यूनिवर्सिटी के परीक्षा नियंत्रक (Controller of Examination) या कुलसचिव द्वारा जारी <strong>Provisional Degree Certificate</strong> और सभी वर्षों की मूल मार्कशीट वैध होती हैं।</li>
        </ul>
      </div>

      <div class="prob-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 6px solid #7c3aed; border-radius: 12px; padding: 22px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.25rem;">4. शादी के बाद महिला अभ्यर्थियों का उपनाम बदलना (Surname Change After Marriage)</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 12px;">मायके और ससुराल के नाम में अंतर होने पर रिजेक्शन से बचने के नियम।</p>
        <ul style="padding-left: 20px; margin: 8px 0; line-height: 1.75; color: var(--color-text);">
          <li><strong>उपाय:</strong> विवाह पंजीकरण प्रमाण पत्र (Marriage Registration Certificate) या पति के साथ संयुक्त नोटरी हलफनामा और पहचान पत्र की प्रति साथ लेकर जाएं।</li>
        </ul>
      </div>

      <div class="prob-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 6px solid #dc2626; border-radius: 12px; padding: 22px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.25rem;">5. पहले से सेवारत कर्मचारियों के लिए अनापत्ति प्रमाण पत्र (NOC - No Objection Certificate)</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 12px;">केंद्रीय, राज्य या सार्वजनिक उपक्रम (PSU) में कार्यरत अभ्यर्थियों के लिए अनिवार्य नियम।</p>
        <ul style="padding-left: 20px; margin: 8px 0; line-height: 1.75; color: var(--color-text);">
          <li><strong>उपाय:</strong> अपने वर्तमान नियोक्ता विभाग से आवेदन करते समय 'इंटीमेशन' दें और DV से पहले औपचारिक 'NOC' व सेवामुक्ति (Relieving/Vigilance Clearance) प्राप्त करें।</li>
        </ul>
      </div>

      <div class="prob-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 6px solid #db2777; border-radius: 12px; padding: 22px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.25rem;">6. फोटोकॉपी सेट और सेल्फ-अटेस्टेशन का सही तरीका</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 12px;">अधूरे सेट ले जाने पर DV सेंटर पर अफरा-तफरी से बचने की गाइड।</p>
        <ul style="padding-left: 20px; margin: 8px 0; line-height: 1.75; color: var(--color-text);">
          <li><strong>उपाय:</strong> सभी मूल प्रमाणपत्रों के कम से कम **3 अलग-अलग सेट** फोटोकॉपी तैयार रखें। प्रत्येक पेज पर नीली या काली स्याही से 'Self-Attested' लिखकर पूरे हस्ताक्षर करें और तारीख डालें।</li>
        </ul>
      </div>
    </section>

    <!-- 10 VISIBLE FAQS ACCORDIONS -->
    <section class="service-section" style="margin-top: 40px;">
      <h2 style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        ❓ <span data-lang-show="en">Frequently Asked Questions (FAQs)</span>
        <span data-lang-show="hi">दस्तावेज़ सत्यापन से जुड़े महत्वपूर्ण सवाल-जवाब (FAQs)</span>
      </h2>

      <details class="faq-item" open style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>1. सरकारी नौकरी के दस्तावेज़ सत्यापन (DV) में कौन-कौन से मूल दस्तावेज़ चाहिए?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          DV में मुख्य रूप से: (1) 10वीं की मूल अंकतालिका व सनद (जन्म तिथि प्रमाण), (2) 12वीं/ग्रेजुएशन/डिप्लोमा की सभी सेमेस्टर की मार्कशीट व डिग्री, (3) सक्षम प्राधिकारी द्वारा जारी मूल जाति/EWS/OBC NCL प्रमाण पत्र, (4) मूल निवास प्रमाण पत्र (Domicile), (5) फोटो पहचान पत्र (Aadhaar/PAN), और (6) नवीनतम पासपोर्ट फोटो व अनापत्ति प्रमाण पत्र (NOC यदि पहले से सेवारत हों)।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>2. यदि 10वीं की मार्कशीट और आधार कार्ड में नाम या उपनाम में अंतर हो तो क्या करें?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          यदि नाम की स्पेलिंग में अंतर है, तो प्रथम श्रेणी मजिस्ट्रेट या नोटरी द्वारा जारी ₹100 का 'एक ही व्यक्ति होने का शपथ पत्र' (One and the Same Affidavit) बनवाएं। DV के समय इसे प्रस्तुत करने पर उम्मीदवारी निरस्त नहीं होती।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>3. EWS और OBC नॉन-क्रीमी लेयर प्रमाण पत्र की क्रूशियल डेट (Crucial Date) क्या होती है?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          क्रूशियल डेट भर्ती विज्ञापन की ऑनलाइन आवेदन की अंतिम तिथि होती है। EWS और OBC NCL प्रमाण पत्र उसी संबंधित वित्तीय वर्ष (Financial Year) के लिए वैध होना चाहिए जिस वर्ष भर्ती निकाली गई थी।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>4. क्या डिजीलॉकर (DigiLocker) के डिजिटल प्रमाण पत्र DV में मान्य होते हैं?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          हाँ, सूचना प्रौद्योगिकी अधिनियम 2000 के नियम 9A के तहत डिजीलॉकर द्वारा जारी डिजिटल हस्ताक्षरित प्रमाणपत्र मूल भौतिक दस्तावेजों के समतुल्य कानूनी मान्यता रखते हैं।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>5. शादी के बाद महिला उम्मीदवारों के उपनाम बदलने पर कौन सा दस्तावेज़ चाहिए?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          विवाह के बाद नाम बदलने पर (1) विवाह प्रमाण पत्र (Marriage Certificate) या (2) संयुक्त शपथ पत्र (Joint Affidavit with Spouse) या (3) राज्य का सरकारी राजपत्र (Gazette Notification) प्रस्तुत करना होता है।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>6. आय प्रमाण पत्र (Income Certificate) कितने समय तक वैध होता है?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          अधिकांश राज्यों में तहसीलदार द्वारा जारी आय प्रमाण पत्र जारी होने की तिथि से 3 वित्तीय वर्षों तक वैध होता है, जबकि कुछ राज्यों (जैसे बिहार, यूपी) में यह 1 वर्ष के लिए वैध माना जाता है।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>7. जाति प्रमाण पत्र (Caste Certificate) की वैधता अवधि कितनी होती है?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          अनुसूचित जाति (SC) और अनुसूचित जनजाति (ST) का प्रमाण पत्र आजीवन (Lifetime) वैध होता है। जबकि OBC Non-Creamy Layer (NCL) प्रमाण पत्र प्रति वर्ष आय निर्धारण के आधार पर 1 से 3 वर्ष के लिए मान्य होता है।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>8. मूल निवास प्रमाण पत्र (Domicile / Residence Certificate) क्यों आवश्यक है?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          राज्य सरकार की नौकरियों में स्थानीय आरक्षण, राज्य छात्रवृत्तियों, राशन कार्ड और लाडकी बहीण जैसी योजनाओं में राज्य का स्थायी निवासी सिद्ध करने हेतु निवास प्रमाण पत्र अनिवार्य होता है।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>9. यदि मूल प्रमाण पत्र (Original Marksheet) खो गया हो तो DV कैसे कराएं?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          पुलिस में गुमशुदगी की रिपोर्ट (NCR/FIR) दर्ज कराएं, अपने संबंधित बोर्ड/यूनिवर्सिटी से डुप्लिकेट मार्कशीट (Duplicate Marksheet) हेतु आवेदन करें और उसकी रसीद व शपथ पत्र DV बोर्ड को दिखाएं।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>10. सेल्फ-अटेस्टेशन (Self-Attestation) कैसे किया जाता है?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          फोटोकॉपी के निचले हिस्से पर 'Self Attested' लिखकर अपने पूर्ण हस्ताक्षर करें और जिस दिन फॉर्म जमा कर रहे हैं उस दिन की तारीख (Date) दर्ज करें।
        </div>
      </details>
    </section>

{render_featured_schemes_banner()}

{render_useful_tools_grid()}

    <!-- TELEGRAM COMMUNITY BANNER -->
    <div style="background: linear-gradient(135deg, #0088cc 0%, #005f8f 100%); border-radius: 12px; padding: 24px; color: #fff; margin: 36px 0; text-align: center; box-shadow: 0 4px 12px rgba(0,136,204,0.25);">
      <h3 style="margin: 0 0 8px 0; color: #fff; font-size: 1.4rem;">✈️ SarkariSewa VIP Telegram Community</h3>
      <p style="margin: 0 0 16px 0; color: #e0f2fe; font-size: 0.95rem;">सभी सरकारी भर्तियों, एडमिट कार्ड, DV डेट्स व रिजल्ट्स की सबसे तेज़ सूचना पाएं।</p>
      <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" class="btn" style="background: #fff; color: #0088cc; font-weight: 700; padding: 10px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">Join Telegram Channel ↗</a>
    </div>

  </main>

  <div id="site-footer"></div>
  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/consent.js"></script>
  <script src="../assets/js/i18n-helper.js"></script>

  <script>
    const CHECKLIST_DATA = {{
      ssc: {{
        title: "SSC CGL / CHSL / MTS / GD दस्तावेज़ सत्यापन चेकलिस्ट",
        items: [
          {{ name: "10वीं (Matriculation) मूल मार्कशीट व पासिंग सर्टिफिकेट (DOB प्रमाण)", note: "DOB सत्यापन हेतु अनिवार्य" }},
          {{ name: "12वीं (Higher Secondary) मूल अंकतालिका व प्रमाण पत्र", note: "शैक्षणिक योग्यता" }},
          {{ name: "ग्रेजुएशन / डिप्लोमा की सभी सेमेस्टर की मार्कशीट व मूल डिग्री", note: "CGL पदों हेतु अनिवार्य" }},
          {{ name: "मूल जाति प्रमाण पत्र (SC/ST/OBC NCL/EWS) - केंद्र सरकार के फॉर्मेट में", note: "Crucial Date से पूर्व का" }},
          {{ name: "मूल निवास प्रमाण पत्र (Domicile Certificate)", note: "स्टेट कोटा व क्षेत्रीय सत्यापन" }},
          {{ name: "मूल पहचान पत्र (आधार कार्ड / पैन कार्ड / वोटर आईडी / ड्राइविंग लाइसेंस)", note: "फोटोयुक्त पहचान" }},
          {{ name: "पासपोर्ट साइज नवीनतम 6 रंगीन फोटो (समान फोटो जो फॉर्म में लगाई थी)", note: "White/Light BG" }},
          {{ name: "सेवारत कर्मचारियों हेतु नियोक्ता से अनापत्ति प्रमाण पत्र (NOC)", note: "यदि पहले से सरकारी सेवा में हों" }}
        ]
      }},
      banking: {{
        title: "IBPS / SBI PO & Clerk बैंकिंग परीक्षा DV चेकलिस्ट",
        items: [
          {{ name: "10वीं व 12वीं की मूल मार्कशीट और पासिंग सर्टिफिकेट", note: "DOB व भाषा योग्यता" }},
          {{ name: "ग्रेजुएशन डिग्री व समेकित अंकतालिका (Consolidated Marksheet)", note: "प्रतिशत गणना हेतु" }},
          {{ name: "नवीनतम वित्तीय वर्ष का OBC NCL / EWS प्रमाण पत्र (Central Format)", note: "अधिसूचना वर्ष का" }},
          {{ name: "हस्तलिखित घोषणा पत्र (Handwritten Declaration) की मूल कॉपी", note: "काली स्याही से लिखा हुआ" }},
          {{ name: "कंप्यूटर ज्ञान प्रमाण पत्र / डिग्री में कंप्यूटर विषय का प्रमाण", note: "बैंक क्लर्क पदों हेतु" }},
          {{ name: "आधार कार्ड व पैन कार्ड की मूल प्रति", note: "KYC सत्यापन" }},
          {{ name: "ऑनलाइन आवेदन पत्र का प्रिंटआउट व एडमिट कार्ड (Call Letter)", note: "हस्ताक्षरित प्रति" }},
          {{ name: "2 प्रतिष्ठित व्यक्तियों से चरित्र प्रमाण पत्र (Character Certificate)", note: "राजपत्रित अधिकारी द्वारा" }}
        ]
      }},
      railway: {{
        title: "Railway RRB ALP / Technician / NTPC / Group D चेकलिस्ट",
        items: [
          {{ name: "10वीं पास मूल अंकतालिका व बोर्ड सर्टिफिकेट", note: "DOB प्रमाण" }},
          {{ name: "आईटीआई (ITI NCVT/SCVT) या डिप्लोमा / डिग्री सर्टिफिकेट", note: "तकनीकी पदों हेतु" }},
          {{ name: "रेलवे प्रोफार्मा में मूल जाति प्रमाण पत्र (SC/ST/OBC Annexure)", note: "रेलवे विशेष फॉर्मेट" }},
          {{ name: "अल्पसंख्यक समुदाय हेतु गैर-अदालती शपथ पत्र (Fee Exemption)", note: "यदि फीस छूट ली हो" }},
          {{ name: "आधार कार्ड (Aadhaar Card) व 6 पासपोर्ट फोटो", note: "बायोमेट्रिक मिलान" }},
          {{ name: "मेडिकल फिटनेस परफॉर्मा (Medical Fitness Form)", note: "A1/B1/B2 विजन टेस्ट" }}
        ]
      }},
      certificates: {{
        title: "जाति, आय व निवास प्रमाण पत्र (State e-District) चेकलिस्ट",
        items: [
          {{ name: "आवेदक का आधार कार्ड (मोबाइल लिंक्ड)", note: "अनिवार्य पहचान" }},
          {{ name: "स्व-प्रमाणित घोषणा पत्र (Self-Declaration Undertaking)", note: "हस्ताक्षरित" }},
          {{ name: "परिवार का राशन कार्ड / परिवार पहचान पत्र (Family ID)", note: "परिवार सत्यापन" }},
          {{ name: "पटवारी / लेखपाल जांच आख्या (Land / Income Report)", note: "आय व निवास पुष्टि" }},
          {{ name: "बिजली बिल / मकान की रजिस्ट्री / किरायानामा", note: "निवास प्रमाण" }},
          {{ name: "पारिवारिक जाति का पुराना अभिलेख (1950/1967 का भूलेख या जाति प्रमाण)", note: "जाति प्रमाण हेतु" }}
        ]
      }},
      schemes: {{
        title: "आयुष्मान, पीएम किसान व लाडकी बहीण योजना चेकलिस्ट",
        items: [
          {{ name: "आधार कार्ड (Aadhaar Card) - सभी सदस्यों का", note: "e-KYC हेतु अनिवार्य" }},
          {{ name: "आधार-सीडेड बैंक पासबुक (NPCI / DBT Active)", note: "डीबीटी भुगतान हेतु" }},
          {{ name: "राशन कार्ड (NFSA / BPL / Antyodaya)", note: "पात्रता निर्धारण" }},
          {{ name: "नवीनतम भूलेख खतौनी (PM Kisan हेतु)", note: "लैंड सीडिंग रिकॉर्ड" }},
          {{ name: "लाडकी बहीण हमीपत्र (Self Declaration Hamipatra)", note: "₹2.5 लाख आय घोषणा" }},
          {{ name: "सक्रिय मोबाइल नंबर (OTP सत्यापन हेतु)", note: "SMS अलर्ट्स" }}
        ]
      }},
      passport: {{
        title: "नया पासपोर्ट (PSK) व पुलिस सत्यापन चेकलिस्ट",
        items: [
          {{ name: "जन्म तिथि प्रमाण (10वीं मार्कशीट या जन्म प्रमाण पत्र)", note: "ECNR पासपोर्ट हेतु" }},
          {{ name: "वर्तमान निवास प्रमाण (बिजली बिल / बैंक पासबुक / आधार कार्ड)", note: "पिछले 1 वर्ष का" }},
          {{ name: "पैन कार्ड / वोटर आईडी / ड्राइविंग लाइसेंस", note: "पहचान प्रमाण" }},
          {{ name: "पुराना पासपोर्ट (री-इश्यू की स्थिति में)", note: "ओरिजिनल व कॉपी" }},
          {{ name: "पासपोर्ट सेवा केंद्र (PSK) अपॉइंटमेंट रसीद", note: "ऑनलाइन बुक की गई" }}
        ]
      }}
    }};

    let currentCategory = 'ssc';

    function loadChecklist(cat) {{
      currentCategory = cat;
      const data = CHECKLIST_DATA[cat];
      document.getElementById('checklist-title').innerText = data.title;
      
      const buttons = document.querySelectorAll('.service-btn');
      buttons.forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');

      const container = document.getElementById('checklist-items-container');
      let html = '';

      data.items.forEach((item, index) => {{
        html += `
          <div class="doc-item-row">
            <input type="checkbox" id="chk-${{index}}" onchange="updateCounter()">
            <label for="chk-${{index}}" style="flex: 1; cursor: pointer;">
              <strong style="color: var(--color-text); font-size: 1.02rem; display: block;">${{item.name}}</strong>
              <span style="font-size: 0.85rem; color: var(--color-text-muted);">${{item.note}}</span>
            </label>
          </div>
        `;
      }});

      container.innerHTML = html;
      updateCounter();
    }}

    function updateCounter() {{
      const checkboxes = document.querySelectorAll('#checklist-items-container input[type="checkbox"]');
      const total = checkboxes.length;
      let checked = 0;
      checkboxes.forEach(cb => {{ if (cb.checked) checked++; }});
      
      const counterEl = document.getElementById('checked-counter');
      counterEl.innerText = `${{checked}} / ${{total}} दस्तावेज़ तैयार`;
      if (checked === total && total > 0) {{
        counterEl.innerHTML = `🎉 सभी ${{total}} दस्तावेज़ तैयार हैं! (100% Ready for DV)`;
      }}
    }}

    function resetChecklist() {{
      const checkboxes = document.querySelectorAll('#checklist-items-container input[type="checkbox"]');
      checkboxes.forEach(cb => cb.checked = false);
      updateCounter();
    }}

    document.addEventListener('DOMContentLoaded', () => {{
      const firstBtn = document.querySelector('.service-btn');
      if (firstBtn) firstBtn.click();
    }});
  </script>
</body>
</html>'''

    with open(fpath, 'w', encoding='utf-8') as fp:
        fp.write(html)
    size_kb = len(html.encode('utf-8')) / 1024
    words = len(re.findall(r'\w+', html))
    print(f'Upgraded: tools/document-checklist.html ({size_kb:.1f} KB, {words} words)')

if __name__ == '__main__':
    print('======================================================================')
    print('UPGRADING CORE CITIZEN TOOLS & CALCULATORS')
    print('======================================================================')
    upgrade_self_declaration_builder()
    upgrade_document_checklist()
    print('======================================================================')
    print('CORE TOOLS UPGRADED SUCCESSFULLY!')
    print('======================================================================')