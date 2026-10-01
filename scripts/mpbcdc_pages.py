# -*- coding: utf-8 -*-
import os
from build_mpbcdc_master import render_district_directory_html, render_useful_tools_html, render_faq_html

def render_subsidy_page():
    faqs = [
        {"q": "MPBCDC 50% विशेष अनुदान (Subsidy) योजना क्या है?", "a": "यह योजना महाराष्ट्र शासन द्वारा अनुसूचित जाति (SC) व नव-बौद्ध समुदाय के अत्यंत निर्धन और लघु व्यवसायियों के लिए चलाई जाती है। इसमें ₹50,000 तक की लागत वाले छोटे धंधों (जैसे किराना, फल-सब्जी, सिलाई, प्लंबिंग, ऑटो रिपेयर) के लिए <strong>50% (अधिकतम ₹25,000) मुफ़्त सरकारी अनुदान (Grant)</strong> दिया जाता है जिसे वापस नहीं करना होता।"},
        {"q": "इस योजना में क्या आवेदक को कोई अपनी जेब से पैसा (Margin Money) लगाना पड़ता है?", "a": "नहीं! 50% विशेष अनुदान योजना में लाभार्थी का अंशदान <strong>0% (शून्य)</strong> होता है। ₹50,000 के प्रोजेक्ट में ₹25,000 सरकार मुफ़्त सब्सिडी देती है और शेष ₹25,000 बैंक द्वारा आसान किश्तों पर सावधि ऋण (Term Loan) के रूप में मिलता है।"},
        {"q": "50% विशेष अनुदान योजना और डायरेक्ट लोन योजना में क्या मुख्य अंतर है?", "a": "डायरेक्ट लोन योजना में ₹1,00,000 तक की सीमा होती है और सारा लोन व सब्सिडी महामंडळ सीधे देता है (बैंक की ज़रूरत नहीं होती)। जबकि 50% विशेष अनुदान योजना ₹50,000 तक सीमित है और इसमें 50% बैंक लोन शामिल होता है।"},
        {"q": "इस योजना के लिए वार्षिक आय सीमा (Income Limit) कितनी है?", "a": "तहसीलदार द्वारा जारी वार्षिक पारिवारिक आय प्रमाण पत्र में ग्रामीण क्षेत्र के लिए अधिकतम ₹1,00,000 और शहरी क्षेत्र के लिए अधिकतम ₹1,20,000 (या शासन द्वारा संशोधित ₹2,50,000 तक) होनी चाहिए।"},
        {"q": "₹25,000 की सब्सिडी बैंक में कब और कैसे जमा होती है?", "a": "जब बैंक आपके ₹50,000 के प्रोजेक्ट को मंजूरी (Sanction) दे देता है, तब महामंडळ ₹25,000 की सब्सिडी राशि सीधे आपके बैंक ऋण खाते में 'बैक-एंडेड सब्सिडी' (Back-Ended Subsidy) के रूप में ट्रांसफर करता है। इससे आपका मूलधन तुरंत घटकर ₹25,000 रह जाता है और ब्याज केवल ₹25,000 पर ही लगता है।"},
        {"q": "कौन-कौन से व्यवसाय इस योजना के तहत पात्र हैं?", "a": "चाय-नाश्ता दुकान, सिलाई व टेलरिंग, सैलून/ब्यूटी पार्लर, लॉन्ड्री, साइकिल/बाइक रिपेयरिंग, मोबाइल रिचार्ज व एक्सेसरीज, कारपेंटर टूल्स, वेल्डिंग, फल-सब्जी विक्रेता आदि सभी सूक्ष्म व्यवसाय पात्र हैं।"},
        {"q": "क्या बैंक लोन रिजेक्ट कर सकता है? रिजेक्ट होने पर क्या करें?", "a": "यदि बैंक आपका सिबिल या पता सत्यापन के नाम पर लोन रिजेक्ट करता है, तो आप तुरंत महामंडळ की <strong>थेट कर्ज योजना (Direct Loan Scheme)</strong> में आवेदन कर सकते हैं जिसमें बैंक की कोई भूमिका नहीं होती।"},
        {"q": "आवेदन के लिए कौन-कौन से दस्तावेज़ अनिवार्य हैं?", "a": "आधार कार्ड, पैन कार्ड, सक्षम प्राधिकारी द्वारा जारी जाति प्रमाण पत्र, तहसीलदार का आय प्रमाण पत्र, डोमिसाइल सर्टिफिकेट, 2 पासपोर्ट फोटो, दुकान/जगह का प्रमाण और कोटेशन।"},
        {"q": "MahOnline पोर्टल पर ऑनलाइन आवेदन कैसे करें?", "a": "<code>mpbcdc.maharashtra.gov.in</code> पर 'Applicant Login' करें, '50% Special Subsidy Scheme (विशेष अनुदान योजना)' चुनें, दस्तावेज़ अपलोड करें और प्रिंटआउट ज़िला कार्यालय में जमा करें।"},
        {"q": "आवेदन की स्थिति (Live Status) कैसे ट्रैक करें?", "a": "आप अपने एप्लिकेशन नंबर से <code>mpbcdc.maharashtra.gov.in</code> पर लॉगिन करके स्टेटस देख सकते हैं या हमारे <a href='../tools/status-troubleshooter.html' style='font-weight:700; color:var(--color-primary);'>Status Troubleshooter Tool</a> का उपयोग कर सकते हैं।"}
    ]
    faq_html = render_faq_html(faqs)
    district_html = render_district_directory_html()
    tools_html = render_useful_tools_html()

    return f'''<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/apple-touch-icon.png">
  <link rel="icon" href="../favicon.ico">
  <link rel="manifest" href="../manifest.json">
  <link rel="canonical" href="https://sarkarisewaindia.com/service/mpbcdc-subsidy-yojana.html" />
  <meta name="description" content="MPBCDC 50% Subsidy Yojana 2026: SC/नव-बौद्ध समुदाय के लिए ₹50,000 तक 50% मुफ़्त सरकारी अनुदान (₹25,000 Subsidy) + 50% बैंक लोन। 0% Margin Money, Eligibility & Apply Guide." />
  <meta property="og:title" content="MPBCDC 50% Subsidy Yojana 2026: ₹25,000 मुफ़्त अनुदान | SarkariSewa" />
  <meta property="og:description" content="MPBCDC 50% Subsidy Scheme: ₹50,000 tak project par 50% free govt grant (₹25,000) aur 50% bank loan. 0% beneficiary margin. Full application guide." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://sarkarisewaindia.com/service/mpbcdc-subsidy-yojana.html" />
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="MPBCDC 50% Subsidy Scheme 2026: ₹25,000 Free Grant" />
  <meta name="twitter:description" content="MPBCDC 50% Vishesh Anudan Yojana me ₹25,000 free govt subsidy grant milta hai. 0% margin money required." />
  <title>MPBCDC 50% Subsidy Scheme 2026: ₹25,000 Free Grant & Apply Online</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css" />
  <link rel="stylesheet" href="../assets/css/module2.css" />
  <link rel="stylesheet" href="../assets/css/module7.css" />
  <link rel="stylesheet" href="../assets/css/module15.css" />
  <link rel="stylesheet" href="../assets/css/module16.css" />
  <link rel="stylesheet" href="../assets/css/share-widget.css" />

  <script type="application/ld+json" id="service-schema">
  {{
    "@context": "https://schema.org",
    "@graph": [
      {{
        "@type": "GovernmentService",
        "name": "MPBCDC 50% Special Subsidy Scheme (विशेष अनुदान योजना)",
        "alternateName": "महात्मा फुले महामंडळ 50% विशेष अनुदान योजना",
        "description": "50% government non-refundable capital subsidy grant up to ₹25,000 for micro-enterprise project costs up to ₹50,000 with 0% margin money for SC and Neo-Buddhist beneficiaries in Maharashtra.",
        "url": "https://sarkarisewaindia.com/service/mpbcdc-subsidy-yojana.html",
        "serviceType": "Government Subsidized Micro-Enterprise Financing",
        "provider": {{
          "@type": "GovernmentOrganization",
          "name": "Mahatma Phule Backward Class Development Corporation (MPBCDC), Maharashtra",
          "sameAs": ["https://mpbcdc.maharashtra.gov.in"]
        }},
        "areaServed": {{
          "@type": "AdministrativeArea",
          "name": "Maharashtra, India"
        }}
      }},
      {{
        "@type": "BreadcrumbList",
        "itemListElement": [
          {{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sarkarisewaindia.com/index.html"
          }},
          {{
            "@type": "ListItem",
            "position": 2,
            "name": "MPBCDC Schemes",
            "item": "https://sarkarisewaindia.com/category/mpbcdc-schemes.html"
          }},
          {{
            "@type": "ListItem",
            "position": 3,
            "name": "MPBCDC 50% Subsidy Yojana",
            "item": "https://sarkarisewaindia.com/service/mpbcdc-subsidy-yojana.html"
          }}
        ]
      }},
      {{
        "@type": "FAQPage",
        "mainEntity": [
          {{
            "@type": "Question",
            "name": "MPBCDC 50% विशेष अनुदान योजना क्या है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "इस योजना में ₹50,000 तक की लागत वाले छोटे धंधों के लिए 50% (अधिकतम ₹25,000) मुफ़्त सरकारी अनुदान (Grant) मिलता है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "क्या लाभार्थी को अपनी जेब से अंशदान लगाना पड़ता है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "नहीं, इसमें लाभार्थी का अंशदान 0% (शून्य) होता है।"
            }}
          }}
        ]
      }}
    ]
  }}
  </script>

  <style>
    .mpbcdc-calc-card {{
      background: var(--color-surface);
      border: 2px solid #146B3A;
      border-radius: 16px;
      padding: 26px;
      margin: 32px 0;
      box-shadow: 0 6px 20px rgba(0,0,0,0.06);
    }}
    .stat-badge-box {{
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
      transition: transform 0.2s;
    }}
    .stat-badge-box:hover {{
      transform: translateY(-2px);
    }}
    .prob-box {{
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 22px;
      margin-bottom: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.02);
    }}
  </style>
</head>
<body data-slug="mpbcdc-subsidy-yojana">
  <script>window.SS_ROOT = "../";</script>
  <div id="site-header"></div>

  <main class="container" style="padding-top: 20px; padding-bottom: 60px;">
    <!-- Breadcrumb -->
    <nav class="breadcrumb" id="breadcrumb" aria-label="Breadcrumb">
      <a href="../index.html">Home</a>
      <span class="sep">/</span>
      <a href="../category/mpbcdc-schemes.html">💸 MPBCDC योजनाएं</a>
      <span class="sep">/</span>
      <span class="current">50% Subsidy Scheme</span>
    </nav>

    <!-- HERO HEADER -->
    <header class="service-hero" id="service-hero" style="text-align: left; padding: 24px 0 10px 0;">
      <span class="service-hero__badge" style="background: #146B3A; color: #fff; padding: 4px 14px; border-radius: 6px; font-weight: 700; font-size: 0.85rem;">
        🎁 MPBCDC 50% SPECIAL SUBSIDY (विशेष अनुदान योजना 2026)
      </span>
      <h1 style="font-size: 2.2rem; line-height: 1.3; color: var(--color-primary); margin: 14px 0 12px 0; font-weight: 800;">
        <span data-lang-show="en">MPBCDC 50% Subsidy Scheme 2026: ₹25,000 Free Grant & Online Apply</span>
        <span data-lang-show="hi">MPBCDC 50% विशेष अनुदान योजना 2026: ₹25,000 मुफ़्त सब्सिडी व ऑनलाइन आवेदन</span>
      </h1>
      <p style="font-size: 1.08rem; line-height: 1.7; color: var(--color-text-muted); max-width: 950px; margin: 0 0 20px 0;">
        <span data-lang-show="en">Government of Maharashtra 50% Capital Subsidy Scheme by MPBCDC. Get up to <strong>₹25,000 100% Non-Refundable Free Government Grant</strong> for micro-businesses up to ₹50,000 project cost with 50% bank loan and <strong>0% own contribution (Zero margin money)</strong> for SC and Neo-Buddhist individuals.</span>
        <span data-lang-show="hi">महाराष्ट्र शासन के महात्मा फुले मागासवर्गीय विकास महामंडळ (MPBCDC) की विशेष अनुदान योजना। ₹50,000 तक की लागत वाले छोटे धंधों पर <strong>50% सरकारी अनुदान (मुफ़्त ₹25,000 सब्सिडी)</strong> और 50% आसान बैंक लोन। लाभार्थी को अपनी जेब से <strong>0% (शून्य रुपया)</strong> लगाना होता है।</span>
      </p>

      <!-- 1-CLICK ACTION BUTTONS -->
      <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 24px;">
        <a href="https://mpbcdc.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="font-weight: 700; padding: 12px 20px; font-size: 0.95rem;">
          📝 <span data-lang-show="en">Apply on MahOnline Portal ↗</span><span data-lang-show="hi">MahOnline पोर्टल पर ऑनलाइन आवेदन करें ↗</span>
        </a>
        <a href="../project-report/index.html" class="btn" style="background: #146B3A; color: #fff; font-weight: 700; padding: 12px 20px; font-size: 0.95rem; text-decoration: none;">
          📄 <span data-lang-show="en">Generate Free Project Report ↗</span><span data-lang-show="hi">फ्री प्रोजेक्ट रिपोर्ट जनरेट करें ↗</span>
        </a>
        <a href="../service/mpbcdc-direct-loan-yojana.html" class="btn" style="background: #2563eb; color: #fff; font-weight: 700; padding: 12px 20px; font-size: 0.95rem; text-decoration: none;">
          💰 <span data-lang-show="en">Switch to Direct Loan (₹1 Lakh @ 4%) ↗</span><span data-lang-show="hi">डायरेक्ट लोन (₹1 लाख @ 4%) देखें ↗</span>
        </a>
        <a href="../tools/csc-locator.html" class="btn" style="background: #D97F2B; color: #fff; font-weight: 700; padding: 12px 20px; font-size: 0.95rem; text-decoration: none;">
          📍 <span data-lang-show="en">Nearest CSC Kendra</span><span data-lang-show="hi">नजदीकी सीएससी केंद्र</span>
        </a>
      </div>
      <div id="svc-share-row"></div>
    </header>

    <div class="tricolor-rule" aria-hidden="true"></div>

    <!-- KEY STATS 4-GRID -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin: 30px 0;">
      <div class="stat-badge-box" style="border-left: 5px solid #146B3A;">
        <div style="font-size: 1.8rem;">🎁</div>
        <div style="color: var(--color-text-muted); font-size: 0.85rem; font-weight: 700;">FREE GOVT GRANT (50%)</div>
        <div style="font-size: 1.6rem; font-weight: 800; color: #146B3A;">₹25,000 Free Grant</div>
        <div style="font-size: 0.82rem; color: var(--color-text-muted);">वापस नहीं करना होता (Non-Refundable)</div>
      </div>

      <div class="stat-badge-box" style="border-left: 5px solid #2563eb;">
        <div style="font-size: 1.8rem;">🏦</div>
        <div style="color: var(--color-text-muted); font-size: 0.85rem; font-weight: 700;">BANK TERM LOAN (50%)</div>
        <div style="font-size: 1.6rem; font-weight: 800; color: #2563eb;">₹25,000 Bank Loan</div>
        <div style="font-size: 0.82rem; color: var(--color-text-muted);">आसान मासिक किश्तों पर बैंक ऋण</div>
      </div>

      <div class="stat-badge-box" style="border-left: 5px solid #146B3A;">
        <div style="font-size: 1.8rem;">🪙</div>
        <div style="color: var(--color-text-muted); font-size: 0.85rem; font-weight: 700;">OWN CONTRIBUTION</div>
        <div style="font-size: 1.6rem; font-weight: 800; color: #146B3A;">0% (Zero Margin)</div>
        <div style="font-size: 0.82rem; color: var(--color-text-muted);">अपनी जेब से ₹0 लगाना होता है</div>
      </div>

      <div class="stat-badge-box" style="border-left: 5px solid #7c3aed;">
        <div style="font-size: 1.8rem;">📊</div>
        <div style="color: var(--color-text-muted); font-size: 0.85rem; font-weight: 700;">PROJECT LIMIT</div>
        <div style="font-size: 1.6rem; font-weight: 800; color: #7c3aed;">Up to ₹50,000</div>
        <div style="font-size: 0.82rem; color: var(--color-text-muted);">छोटे दुकानदारों व कारीगरों के लिए</div>
      </div>
    </div>

    <!-- ELIGIBILITY & DOCUMENT CHECKLIST -->
    <section style="margin: 36px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-bottom: 18px;">
        📋 <span data-lang-show="en">Eligibility Criteria & Mandatory Documents Checklist</span>
        <span data-lang-show="hi">पात्रता शर्तें एवं अनिवार्य दस्तावेज़ चेकलिस्ट</span>
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
        <!-- Eligibility Card -->
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 22px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.25rem;">✅ पात्रता शर्तें (Eligibility Norms)</h3>
          <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-text); font-size: 0.98rem;">
            <li><strong>स्थान:</strong> आवेदक महाराष्ट्र राज्य का स्थायी निवासी होना चाहिए।</li>
            <li><strong>जाति:</strong> आवेदक अनुसूचित जाति (SC) या नव-बौद्ध (Neo-Buddhist) समाज से होना अनिवार्य है।</li>
            <li><strong>आयु सीमा:</strong> आवेदन तिथि को उम्र 18 से 50 वर्ष के मध्य होनी चाहिए।</li>
            <li><strong>वार्षिक पारिवारिक आय:</strong> ग्रामीण क्षेत्र के लिए ₹1,00,000 व शहरी क्षेत्र के लिए ₹1,20,000 (या शासन नियमानुसार ₹2.5 लाख) से अधिक न हो।</li>
            <li><strong>अंशदान:</strong> लाभार्थी का अंशदान 0% (शून्य) होता है।</li>
          </ul>
        </div>

        <!-- Documents Card -->
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 22px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.25rem;">📑 ज़रूरी दस्तावेज़ (Required Documents)</h3>
          <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-text); font-size: 0.98rem;">
            <li>आधार कार्ड व पैन कार्ड</li>
            <li>सक्षम प्राधिकारी (SDO/Tahasildar) द्वारा जारी जाति प्रमाण पत्र</li>
            <li>तहसीलदार द्वारा जारी आय प्रमाण पत्र</li>
            <li>महाराष्ट्र डोमिसाइल प्रमाण पत्र / 15 वर्ष का निवास प्रमाण</li>
            <li>दुकान/व्यवसाय स्थल का किरायानामा या लाइट बिल</li>
            <li>मशीनरी या सामग्री का ₹50,000 तक का GST कोटेशन</li>
            <li>राष्ट्रीयकृत/सहकारी बैंक बचत खाता पासबुक</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6 REAL-WORLD PROBLEMS & DEEP PROBLEM SOLVERS -->
    <section class="blog-content" style="line-height: 1.85; font-size: 1.05rem; color: var(--color-text); margin: 40px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.75rem; margin-bottom: 24px;">
        💡 <span data-lang-show="en">Top 6 MPBCDC 50% Subsidy Issues & 100% Solutions</span>
        <span data-lang-show="hi">50% विशेष अनुदान योजना से जुड़ी 6 मुख्य समस्याएं व उनका पक्का समाधान</span>
      </h2>

      <div class="prob-box" style="border-left: 6px solid #146B3A;">
        <h3 style="margin-top: 0; color: var(--color-primary);">1. बैंक द्वारा लोन रिजेक्ट होने पर क्या करें?</h3>
        <p>कई बार राष्ट्रीयकृत बैंक छोटे ₹25,000 के लोन में रुचि नहीं दिखाते या सिबिल स्कोर कम होने का हवाला देते हैं।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> यदि बैंक आपका लोन रिजेक्ट कर दे, तो बिना समय गंवाए महामंडळ की <strong>थेट कर्ज योजना (Direct Loan Scheme - ₹1 Lakh @ 4%)</strong> में स्विच करें। डायरेक्ट लोन में बैंक की कोई भूमिका नहीं होती और 100% पैसा सीधे महामंडळ देता है।</li>
        </ul>
      </div>

      <div class="prob-box" style="border-left: 6px solid #D97F2B;">
        <h3 style="margin-top: 0; color: var(--color-primary);">2. ₹25,000 की सब्सिडी कब और कैसे क्रेडिट होती है (Back-Ended Subsidy Rule)?</h3>
        <p>सब्सिडी मिलने की प्रक्रिया को लेकर अक्सर आवेदकों में भ्रम रहता है।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> बैंक लोन स्वीकृत (Sanction) होने के बाद महामंडळ ₹25,000 की सरकारी सब्सिडी सीधे बैंक में आपके लोन खाते में जमा करता है। इससे आपका मूलधन आधा होकर ₹25,000 हो जाता है और किश्तें केवल ₹25,000 पर ही बनती हैं।</li>
        </ul>
      </div>

      <div class="prob-box" style="border-left: 6px solid #2563eb;">
        <h3 style="margin-top: 0; color: var(--color-primary);">3. बिना पक्की दुकान के छोटे व्यवसायी (सब्जी, सिलाई, प्लंबर) कैसे अप्लाई करें?</h3>
        <p>ठेले वाले, फेरीवाले या घरेलू कारीगरों के पास व्यावसायिक लीज एग्रीमेंट नहीं होता।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> अपने स्थानीय ग्राम सेवक, नगरसेवक या पुलिस पाटिल से व्यवसाय करने का 'व्यवसाय स्वयं-घोषणा पत्र' (Self-Declaration) बनवाएं। घर के बिजली बिल के साथ इसे अपलोड करने पर फॉर्म 100% मान्य होता है।</li>
        </ul>
      </div>

      <div class="prob-box" style="border-left: 6px solid #7c3aed;">
        <h3 style="margin-top: 0; color: var(--color-primary);">4. क्या 0% अंशदान होने पर बैंक कोई प्रोसेसिंग फ़ीस या सिक्योरिटी मांग सकता है?</h3>
        <p>आरबीआई और शासकीय नियमों के अनुसार ₹50,000 तक के ऋण पर कोई कोलैटरल सिक्योरिटी नहीं ली जा सकती।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> भारतीय रिज़र्व बैंक के प्राथमिकता क्षेत्र उधारी (Priority Sector Lending) नियमों के तहत ₹1,60,000 तक के ऋण बिना किसी बंधक (No Collateral) के दिए जाते हैं। बैंक द्वारा आपत्ति करने पर MPBCDC ज़िला प्रबंधक से संपर्क करें।</li>
        </ul>
      </div>

      <div class="prob-box" style="border-left: 6px solid #059669;">
        <h3 style="margin-top: 0; color: var(--color-primary);">5. एक परिवार से क्या दो सदस्य अलग-अलग 50% सब्सिडी ले सकते हैं?</h3>
        <p>पारिवारिक पात्रता के संबंध में स्पष्ट नियम मौजूद हैं।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> एक राशन कार्ड (Family Unit) पर एक समय में केवल एक ही व्यक्ति लाभ ले सकता है। जब पहला बैंक ऋण पूरी तरह चुकता (NOC) हो जाए, तब परिवार का दूसरा सदस्य आवेदन कर सकता है।</li>
        </ul>
      </div>

      <div class="prob-box" style="border-left: 6px solid #db2777;">
        <h3 style="margin-top: 0; color: var(--color-primary);">6. MahOnline पर फॉर्म भरने के बाद बैंक शाखा (Branch) का चयन कैसे करें?</h3>
        <p>ऑनलाइन फॉर्म में जिस बैंक शाखा में आपका बचत खाता है, उसी का IFSC कोड दर्ज करना चाहिए।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> अपने निवास क्षेत्र के निकटतम राष्ट्रीयकृत बैंक (जैसे Bank of Maharashtra, SBI, Union Bank) या ज़िला मध्यवर्ती सहकारी बैंक का चयन करें।</li>
        </ul>
      </div>
    </section>

    <!-- STEP BY STEP APPLICATION ROADMAP -->
    <section style="background: var(--color-bg-alt); border: 1px solid var(--color-border); border-radius: 16px; padding: 26px; margin: 36px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.55rem; margin-top: 0;">
        🚀 MPBCDC 50% Subsidy: Step-by-Step Online Apply Roadmap
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 18px;">
        <div style="background: var(--color-surface); padding: 18px; border-radius: 10px; border: 1px solid var(--color-border);">
          <div style="background: #146B3A; color: #fff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; margin-bottom: 10px;">1</div>
          <strong style="color: var(--color-primary);">पंजीकरण (Registration):</strong> <code>mpbcdc.maharashtra.gov.in</code> पर आधार OTP से नया खाता बनाएं।
        </div>

        <div style="background: var(--color-surface); padding: 18px; border-radius: 10px; border: 1px solid var(--color-border);">
          <div style="background: #146B3A; color: #fff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; margin-bottom: 10px;">2</div>
          <strong style="color: var(--color-primary);">योजना का चयन:</strong> डैशबोर्ड पर <strong>'50% Special Subsidy Scheme (विशेष अनुदान योजना - ₹50,000)'</strong> चुनें।
        </div>

        <div style="background: var(--color-surface); padding: 18px; border-radius: 10px; border: 1px solid var(--color-border);">
          <div style="background: #146B3A; color: #fff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; margin-bottom: 10px;">3</div>
          <strong style="color: var(--color-primary);">दस्तावेज़ व कोटेशन:</strong> जाति, आय प्रमाण पत्र व सामग्री का ₹50,000 का GST कोटेशन अपलोड करें।
        </div>

        <div style="background: var(--color-surface); padding: 18px; border-radius: 10px; border: 1px solid var(--color-border);">
          <div style="background: #146B3A; color: #fff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; margin-bottom: 10px;">4</div>
          <strong style="color: var(--color-primary);">ज़िला कार्यालय व बैंक स्वीकृति:</strong> फॉर्म का प्रिंटआउट ज़िला कार्यालय में जमा करें। वहां से बैंक को सिफ़ारिश भेजी जाती है और ₹25,000 सब्सिडी क्रेडिट होती है।
        </div>
      </div>
    </section>

{district_html}

    <!-- FREQUENTLY ASKED QUESTIONS SECTION -->
    <section class="service-section" style="margin-top: 36px;">
      <h3 style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 18px;">
        ❓ <span data-lang-show="en">Frequently Asked Questions (FAQs)</span>
        <span data-lang-show="hi">अक्सर पूछे जाने वाले सवाल (FAQs)</span>
      </h3>
{faq_html}
    </section>

{tools_html}

    <!-- OFFICIAL VERIFIED PORTAL LINKS -->
    <section class="service-section" style="background: linear-gradient(135deg, #1e1e38, #2a2a52); color: #ffffff; border-radius: 16px; padding: 28px 24px; margin: 36px 0; box-shadow: 0 8px 24px rgba(0,0,0,0.12);">
      <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 14px;">
        <span style="font-size: 2.2rem;">🏛️</span>
        <div>
          <h2 style="margin: 0; font-size: 1.35rem; color: #ffffff; font-weight: 700;">MPBCDC आधिकारिक पोर्टल लिंक (Official Links)</h2>
          <p style="margin: 4px 0 0 0; color: #cbd5e1; font-size: 0.92rem;">महात्मा फुले मागासवर्गीय विकास महामंडळ (MPBCDC) महाराष्ट्र शासन</p>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 20px;">
        <a href="https://mpbcdc.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; background: #2563eb; color: #ffffff; padding: 14px 20px; border-radius: 10px; font-weight: 600; text-decoration: none; font-size: 1rem; border: 1px solid #3b82f6;">
          <span>🌐 MPBCDC Official Portal</span>
          <span style="font-size: 1.1rem;">↗</span>
        </a>
        <a href="https://mpbcdc.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; background: #059669; color: #ffffff; padding: 14px 20px; border-radius: 10px; font-weight: 600; text-decoration: none; font-size: 1rem; border: 1px solid #10b981;">
          <span>📝 MahOnline Apply & Login</span>
          <span style="font-size: 1.1rem;">↗</span>
        </a>
        <a href="https://www.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.1); color: #ffffff; padding: 14px 20px; border-radius: 10px; font-weight: 600; text-decoration: none; font-size: 1rem; border: 1px solid rgba(255,255,255,0.2);">
          <span>🏢 Maharashtra Govt Portal</span>
          <span style="font-size: 1.1rem;">↗</span>
        </a>
      </div>
    </section>

    <!-- RELATED MPBCDC SCHEMES -->
    <section class="service-section">
      <h2 class="service-section__title"><span class="icon">🔗</span> अन्य MPBCDC योजनाएं व संबंधित सेवाएं</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
        <a href="../service/mpbcdc-direct-loan-yojana.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-top: 4px solid var(--color-primary); border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text);">
          <div style="font-size: 1.5rem; margin-bottom: 6px;">💸</div>
          <h3 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">MPBCDC Direct Loan Yojana</h3>
          <p style="font-size: 0.88rem; color: var(--color-text-muted); margin: 0;">₹1 लाख तक 50% मुफ़्त सब्सिडी + 4% ब्याज पर डायरेक्ट लोन।</p>
        </a>

        <a href="../service/mpbcdc-seed-capital-yojana.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-top: 4px solid #2563eb; border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text);">
          <div style="font-size: 1.5rem; margin-bottom: 6px;">🏦</div>
          <h3 style="margin: 0 0 6px 0; font-size: 1.1rem; color: #2563eb;">Seed Capital Yojana</h3>
          <p style="font-size: 0.88rem; color: var(--color-text-muted); margin: 0;">₹5 लाख तक Bank 75% + 20% Seed Capital Calculator।</p>
        </a>

        <a href="../service/mpbcdc-yojana.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-top: 4px solid #146B3A; border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text);">
          <div style="font-size: 1.5rem; margin-bottom: 6px;">🏛️</div>
          <h3 style="margin: 0 0 6px 0; font-size: 1.1rem; color: #146B3A;">MPBCDC Master Hub</h3>
          <p style="font-size: 0.88rem; color: var(--color-text-muted); margin: 0;">तीनों योजनाओं की विस्तृत तुलना व 36 ज़िला कार्यालय।</p>
        </a>

        <a href="../service/mh-caste-certificate.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-top: 4px solid #D97F2B; border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text);">
          <div style="font-size: 1.5rem; margin-bottom: 6px;">📜</div>
          <h3 style="margin: 0 0 6px 0; font-size: 1.1rem; color: #D97F2B;">Maharashtra Caste Certificate</h3>
          <p style="font-size: 0.88rem; color: var(--color-text-muted); margin: 0;">Aaple Sarkar पोर्टल से जाति प्रमाण पत्र ऑनलाइन बनाएं।</p>
        </a>
      </div>
    </section>

    <!-- VIP TELEGRAM BANNER -->
    <div style="background: linear-gradient(135deg, #0088cc 0%, #005f8f 100%); border-radius: 12px; padding: 24px; color: #fff; margin: 36px 0; text-align: center; box-shadow: 0 4px 12px rgba(0,136,204,0.25);">
      <h3 style="margin: 0 0 8px 0; color: #fff; font-size: 1.4rem;">✈️ SarkariSewa VIP Telegram Community</h3>
      <p style="margin: 0 0 16px 0; color: #e0f2fe; font-size: 0.95rem;">महाराष्ट्र की सभी सब्सिडी योजनाओं, मुद्रा लोन, PMEGP व सरकारी जॉब अलर्ट्स की सबसे तेज़ जानकारी पाएं।</p>
      <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" class="btn" style="background: #fff; color: #0088cc; font-weight: 700; padding: 10px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">Join Telegram Channel ↗</a>
    </div>

    <!-- COMMENTS SECTION -->
    <section class="service-section" id="comments-section">
      <h2 class="service-section__title"><span class="icon">💬</span> Questions &amp; Comments</h2>
      <p class="comments-note">यह MPBCDC 50% विशेष अनुदान योजना से जुड़ी सार्वजनिक चर्चा है। आधिकारिक सहायता के लिए अपने ज़िला कार्यालय से संपर्क करें।</p>
      <form id="comment-form" class="comment-form">
        <div class="comment-form__row">
          <input type="text" id="comment-name" maxlength="80" placeholder="आपका नाम (Your Name)" required />
        </div>
        <div class="comment-form__row">
          <textarea id="comment-message" maxlength="2000" rows="3" placeholder="MPBCDC सब्सिडी योजना से जुड़ा अपना सवाल पूछें..." required></textarea>
        </div>
        <div class="comment-form__actions">
          <span class="comment-form__status" id="comment-form-status"></span>
          <button type="submit" class="btn-primary" id="comment-submit">Post Question</button>
        </div>
      </form>
      <div id="comments-list" class="comments-list">
        <p class="loading">Loading comments…</p>
      </div>
    </section>
  </main>

  <div id="site-footer"></div>
  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/consent.js"></script>
  <script src="../assets/js/i18n-helper.js"></script>
  <script src="../assets/js/mpbcdc-calculator.js"></script>
  <script src="../assets/js/supabase-client.js"></script>
  <script src="../assets/js/services-data.js"></script>
  <script src="../assets/js/share-widget.js"></script>
  <script src="../assets/js/service-template.js"></script>
</body>
</html>'''

def render_seed_capital_page():
    faqs = [
        {"q": "MPBCDC Seed Capital (बीज भांडवल) योजना क्या है?", "a": "यह योजना ₹1 लाख से ₹5 लाख तक के मध्यम व्यवसायों के लिए है। इसमें कुल प्रोजेक्ट लागत का <strong>20% हिस्सा (अधिकतम ₹1,00,000)</strong> महामंडळ मात्र <strong>4% वार्षिक सरल ब्याज</strong> पर 'बीज भांडवल' के रूप में प्रदान करता है। शेष 75% हिस्सा राष्ट्रीयकृत बैंक द्वारा ऋण के रूप में दिया जाता है और 5% लाभार्थी का अंशदान होता है।"},
        {"q": "20% सीड कैपिटल पर 4% ब्याज की किश्त (EMI) कब से शुरू होती है?", "a": "सीड कैपिटल में लाभार्थी को <strong>मोराटोरियम पीरियड (छूट अवधि)</strong> मिलता है। जब तक बैंक लोन का मुख्य हिस्सा चुकता नहीं हो जाता या व्यवसाय स्थिर नहीं होता, तब तक सीड कैपिटल पर भारी किश्त नहीं देनी होती। बाद में 4% सरल ब्याज के साथ इसे महामंडळ को लौटाना होता है।"},
        {"q": "₹5,00,000 तक के प्रोजेक्ट में वित्तीय ढांचा (Financial Breakdown) क्या रहता है?", "a": "₹5 लाख के प्रोजेक्ट में: <strong>₹3,75,000 (75%) बैंक लोन</strong>, <strong>₹1,00,000 (20%) MPBCDC सीड कैपिटल @ 4%</strong>, और <strong>₹25,000 (5%) लाभार्थी अंशदान</strong> होता है।"},
        {"q": "क्या इस योजना के लिए Project Report (DPR) ज़रूरी है?", "a": "हाँ! ₹1 लाख से ऊपर के बैंक लोन के लिए विस्तृत प्रोजेक्ट रिपोर्ट (Detailed Project Report) अनिवार्य है। हमारे SarkariSewa <a href='../project-report/index.html' style='font-weight:700; color:var(--color-primary);'>Project Report Generator Tool</a> से आप 2 मिनट में बैंक मानकों के अनुरूप प्रोजेक्ट रिपोर्ट तैयार कर सकते हैं।"},
        {"q": "सीड कैपिटल योजना के लिए कौन-कौन से व्यवसाय मान्य हैं?", "a": "मिनी राइस मिल, आटा चक्की, मसाला उद्योग, प्रिंटिंग प्रेस, ऑटोमोबाइल गैरेज, किराना सुपरमार्केट, कंप्यूटर सेंटर, वेल्डिंग फैब्रिकेशन, डेयरी फार्मिंग, पोल्ट्री, टैक्सी/कमर्शियल वाहन आदि सभी उत्पादक व्यवसाय पात्र हैं।"},
        {"q": "क्या बैंक बिना गारंटी (No Collateral) के 75% लोन दे सकता है?", "a": "हाँ, भारत सरकार की <strong>CGTMSE स्कीम</strong> के तहत ₹5 लाख तक के एमएसएमई और बिज़नेस लोन बिना किसी मॉर्गेज या अतिरिक्त अचल संपत्ति गारंटी के दिए जाते हैं।"},
        {"q": "पात्रता के लिए वार्षिक आय सीमा (Income Limit) क्या है?", "a": "तहसीलदार द्वारा जारी आय प्रमाण पत्र में वार्षिक पारिवारिक आय ₹2,50,000 (ढाई लाख रुपये) से अधिक नहीं होनी चाहिए।"},
        {"q": "MahOnline पोर्टल पर ऑनलाइन अप्लाई कैसे करें?", "a": "<code>mpbcdc.maharashtra.gov.in</code> पर जाएं, रजिस्ट्रेशन करें और 'Seed Capital Scheme (बीज भांडवल योजना - ₹5 Lakh)' का चयन करके प्रोजेक्ट रिपोर्ट व दस्तावेज़ अपलोड करें।"},
        {"q": "आवेदन के बाद ज़िला कार्यालय में क्या प्रक्रिया होती है?", "a": "ज़िला प्रबंधक कार्यालय में टास्क फ़ोर्स कमेटी द्वारा इंटरव्यू लिया जाता है। चयन के बाद महामंडळ द्वारा संबंधित बैंक शाखा को 'Sanction-cum-Recommendation Letter' जारी किया जाता है।"},
        {"q": "सीड कैपिटल योजना का स्टेटस कैसे चेक करें?", "a": "आप <code>mpbcdc.maharashtra.gov.in</code> पर लॉगिन करके या हमारे <a href='../tools/status-troubleshooter.html' style='font-weight:700; color:var(--color-primary);'>Status Troubleshooter Tool</a> से स्टेटस चेक कर सकते हैं।"}
    ]
    faq_html = render_faq_html(faqs)
    district_html = render_district_directory_html()
    tools_html = render_useful_tools_html()

    return f'''<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/apple-touch-icon.png">
  <link rel="icon" href="../favicon.ico">
  <link rel="manifest" href="../manifest.json">
  <link rel="canonical" href="https://sarkarisewaindia.com/service/mpbcdc-seed-capital-yojana.html" />
  <meta name="description" content="MPBCDC Seed Capital Yojana 2026: SC/नव-बौद्ध उद्यमियों के लिए ₹5 लाख तक 20% बीज भांडवल (Seed Capital) मात्र 4% ब्याज पर + 75% बैंक लोन। Project Report, Eligibility & Apply Online." />
  <meta property="og:title" content="MPBCDC Seed Capital Yojana 2026: 20% Seed Capital @ 4% | SarkariSewa" />
  <meta property="og:description" content="MPBCDC Seed Capital Scheme: ₹5 Lakh tak ke project par 20% seed capital at 4% interest + 75% Bank Loan. Complete application guide." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://sarkarisewaindia.com/service/mpbcdc-seed-capital-yojana.html" />
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="MPBCDC Seed Capital Scheme 2026: 20% Seed Capital @ 4%" />
  <meta name="twitter:description" content="MPBCDC Beej Bhandwal Yojana me ₹5 lakh tak business project par 20% soft loan 4% interest par milta hai." />
  <title>MPBCDC Seed Capital Scheme 2026: 20% Seed Capital @ 4% & Apply Online</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css" />
  <link rel="stylesheet" href="../assets/css/module2.css" />
  <link rel="stylesheet" href="../assets/css/module7.css" />
  <link rel="stylesheet" href="../assets/css/module15.css" />
  <link rel="stylesheet" href="../assets/css/module16.css" />
  <link rel="stylesheet" href="../assets/css/share-widget.css" />

  <script type="application/ld+json" id="service-schema">
  {{
    "@context": "https://schema.org",
    "@graph": [
      {{
        "@type": "GovernmentService",
        "name": "MPBCDC Seed Capital Scheme (बीज भांडवल योजना)",
        "alternateName": "महात्मा फुले महामंडळ 20% बीज भांडवल योजना",
        "description": "20% soft seed capital loan at 4% concessional interest rate up to ₹1,00,000 and 75% bank term loan for business project costs up to ₹5,00,000 for SC and Neo-Buddhist entrepreneurs in Maharashtra.",
        "url": "https://sarkarisewaindia.com/service/mpbcdc-seed-capital-yojana.html",
        "serviceType": "Government Subsidized Business Seed Financing",
        "provider": {{
          "@type": "GovernmentOrganization",
          "name": "Mahatma Phule Backward Class Development Corporation (MPBCDC), Maharashtra",
          "sameAs": ["https://mpbcdc.maharashtra.gov.in"]
        }},
        "areaServed": {{
          "@type": "AdministrativeArea",
          "name": "Maharashtra, India"
        }}
      }},
      {{
        "@type": "BreadcrumbList",
        "itemListElement": [
          {{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sarkarisewaindia.com/index.html"
          }},
          {{
            "@type": "ListItem",
            "position": 2,
            "name": "MPBCDC Schemes",
            "item": "https://sarkarisewaindia.com/category/mpbcdc-schemes.html"
          }},
          {{
            "@type": "ListItem",
            "position": 3,
            "name": "MPBCDC Seed Capital Yojana",
            "item": "https://sarkarisewaindia.com/service/mpbcdc-seed-capital-yojana.html"
          }}
        ]
      }},
      {{
        "@type": "FAQPage",
        "mainEntity": [
          {{
            "@type": "Question",
            "name": "MPBCDC Seed Capital योजना क्या है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "इसमें ₹1 लाख से ₹5 लाख तक के प्रोजेक्ट के लिए 20% (अधिकतम ₹1,00,000) बीज भांडवल मात्र 4% वार्षिक सरल ब्याज पर और 75% बैंक लोन मिलता है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "सीड कैपिटल में लाभार्थी अंशदान कितना होता है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "लाभार्थी का अंशदान कुल प्रोजेक्ट लागत का मात्र 5% होता है।"
            }}
          }}
        ]
      }}
    ]
  }}
  </script>

  <style>
    .mpbcdc-calc-card {{
      background: var(--color-surface);
      border: 2px solid #2563eb;
      border-radius: 16px;
      padding: 26px;
      margin: 32px 0;
      box-shadow: 0 6px 20px rgba(0,0,0,0.06);
    }}
    .stat-badge-box {{
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
      transition: transform 0.2s;
    }}
    .stat-badge-box:hover {{
      transform: translateY(-2px);
    }}
    .prob-box {{
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 22px;
      margin-bottom: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.02);
    }}
  </style>
</head>
<body data-slug="mpbcdc-seed-capital-yojana">
  <script>window.SS_ROOT = "../";</script>
  <div id="site-header"></div>

  <main class="container" style="padding-top: 20px; padding-bottom: 60px;">
    <!-- Breadcrumb -->
    <nav class="breadcrumb" id="breadcrumb" aria-label="Breadcrumb">
      <a href="../index.html">Home</a>
      <span class="sep">/</span>
      <a href="../category/mpbcdc-schemes.html">💸 MPBCDC योजनाएं</a>
      <span class="sep">/</span>
      <span class="current">Seed Capital Scheme</span>
    </nav>

    <!-- HERO HEADER -->
    <header class="service-hero" id="service-hero" style="text-align: left; padding: 24px 0 10px 0;">
      <span class="service-hero__badge" style="background: #2563eb; color: #fff; padding: 4px 14px; border-radius: 6px; font-weight: 700; font-size: 0.85rem;">
        🏦 MPBCDC SEED CAPITAL SCHEME (बीज भांडवल योजना 2026)
      </span>
      <h1 style="font-size: 2.2rem; line-height: 1.3; color: var(--color-primary); margin: 14px 0 12px 0; font-weight: 800;">
        <span data-lang-show="en">MPBCDC Seed Capital Scheme 2026: 20% Seed Capital @ 4% & Apply Online</span>
        <span data-lang-show="hi">MPBCDC बीज भांडवल योजना 2026: 20% सीड कैपिटल @ 4% ब्याज व ऑनलाइन आवेदन</span>
      </h1>
      <p style="font-size: 1.08rem; line-height: 1.7; color: var(--color-text-muted); max-width: 950px; margin: 0 0 20px 0;">
        <span data-lang-show="en">Scale your business up to <strong>₹5,00,000 project funding</strong> under Maharashtra MPBCDC Seed Capital Scheme. Get <strong>20% Seed Capital by Corporation at just 4% soft interest</strong>, <strong>75% Bank Term Loan</strong>, and only 5% own contribution for SC and Neo-Buddhist entrepreneurs.</span>
        <span data-lang-show="hi">महाराष्ट्र शासन के महात्मा फुले महामंडळ की उच्च-स्तरीय स्वरोजगार योजना। ₹5,00,000 तक के बड़े प्रोजेक्ट पर <strong>20% बीज भांडवल (सीड कैपिटल) मात्र 4% वार्षिक ब्याज पर</strong>, <strong>75% राष्ट्रीयकृत बैंक लोन</strong>, और सिर्फ 5% अपना अंशदान। व्यवसाय विस्तार और नई यूनिट लगाने के लिए सबसे बेहतरीन योजना।</span>
      </p>

      <!-- 1-CLICK ACTION BUTTONS -->
      <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 24px;">
        <a href="https://mpbcdc.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="font-weight: 700; padding: 12px 20px; font-size: 0.95rem;">
          📝 <span data-lang-show="en">Apply on MahOnline Portal ↗</span><span data-lang-show="hi">MahOnline पोर्टल पर ऑनलाइन आवेदन करें ↗</span>
        </a>
        <a href="../project-report/index.html" class="btn" style="background: #146B3A; color: #fff; font-weight: 700; padding: 12px 20px; font-size: 0.95rem; text-decoration: none;">
          📄 <span data-lang-show="en">Generate Bank Project Report (DPR) ↗</span><span data-lang-show="hi">बैंक प्रोजेक्ट रिपोर्ट (DPR) बनाएं ↗</span>
        </a>
        <a href="../service/mpbcdc-direct-loan-yojana.html" class="btn" style="background: #2563eb; color: #fff; font-weight: 700; padding: 12px 20px; font-size: 0.95rem; text-decoration: none;">
          💰 <span data-lang-show="en">Switch to Direct Loan (₹1 Lakh @ 4%) ↗</span><span data-lang-show="hi">डायरेक्ट लोन (₹1 लाख @ 4%) देखें ↗</span>
        </a>
        <a href="../tools/csc-locator.html" class="btn" style="background: #D97F2B; color: #fff; font-weight: 700; padding: 12px 20px; font-size: 0.95rem; text-decoration: none;">
          📍 <span data-lang-show="en">Nearest CSC Kendra</span><span data-lang-show="hi">नजदीकी सीएससी केंद्र</span>
        </a>
      </div>
      <div id="svc-share-row"></div>
    </header>

    <div class="tricolor-rule" aria-hidden="true"></div>

    <!-- KEY STATS 4-GRID -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin: 30px 0;">
      <div class="stat-badge-box" style="border-left: 5px solid #2563eb;">
        <div style="font-size: 1.8rem;">🏦</div>
        <div style="color: var(--color-text-muted); font-size: 0.85rem; font-weight: 700;">MPBCDC SEED CAPITAL (20%)</div>
        <div style="font-size: 1.6rem; font-weight: 800; color: #2563eb;">₹1,00,000 @ 4% Byaj</div>
        <div style="font-size: 0.82rem; color: var(--color-text-muted);">रियायती दर पर महामंडळ बीज भांडवल</div>
      </div>

      <div class="stat-badge-box" style="border-left: 5px solid #146B3A;">
        <div style="font-size: 1.8rem;">🏛️</div>
        <div style="color: var(--color-text-muted); font-size: 0.85rem; font-weight: 700;">BANK TERM LOAN (75%)</div>
        <div style="font-size: 1.6rem; font-weight: 800; color: #146B3A;">₹3,75,000 Bank Loan</div>
        <div style="font-size: 0.82rem; color: var(--color-text-muted);">राष्ट्रीयकृत बैंक द्वारा सावधि ऋण</div>
      </div>

      <div class="stat-badge-box" style="border-left: 5px solid #D97F2B;">
        <div style="font-size: 1.8rem;">🪙</div>
        <div style="color: var(--color-text-muted); font-size: 0.85rem; font-weight: 700;">OWN MARGIN (5%)</div>
        <div style="font-size: 1.6rem; font-weight: 800; color: #D97F2B;">Only ₹25,000</div>
        <div style="font-size: 0.82rem; color: var(--color-text-muted);">सिर्फ 5% लाभार्थी का अपना हिस्सा</div>
      </div>

      <div class="stat-badge-box" style="border-left: 5px solid #7c3aed;">
        <div style="font-size: 1.8rem;">⚡</div>
        <div style="color: var(--color-text-muted); font-size: 0.85rem; font-weight: 700;">PROJECT LIMIT</div>
        <div style="font-size: 1.6rem; font-weight: 800; color: #7c3aed;">Up to ₹5,00,000</div>
        <div style="font-size: 0.82rem; color: var(--color-text-muted);">मध्यम विनिर्माण व सेवा इकाइयों के लिए</div>
      </div>
    </div>

    <!-- ELIGIBILITY & DOCUMENT CHECKLIST -->
    <section style="margin: 36px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-bottom: 18px;">
        📋 <span data-lang-show="en">Eligibility Criteria & Mandatory Documents Checklist</span>
        <span data-lang-show="hi">पात्रता शर्तें एवं अनिवार्य दस्तावेज़ चेकलिस्ट</span>
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
        <!-- Eligibility Card -->
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 22px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.25rem;">✅ पात्रता शर्तें (Eligibility Norms)</h3>
          <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-text); font-size: 0.98rem;">
            <li><strong>स्थान:</strong> आवेदक महाराष्ट्र राज्य का स्थायी निवासी होना चाहिए।</li>
            <li><strong>जाति:</strong> आवेदक अनुसूचित जाति (SC) या नव-बौद्ध (Neo-Buddhist) समाज से होना अनिवार्य है।</li>
            <li><strong>आयु सीमा:</strong> 18 से 50 वर्ष के मध्य।</li>
            <li><strong>वार्षिक पारिवारिक आय:</strong> तहसीलदार आय प्रमाण पत्र में ₹2,50,000 से अधिक न हो।</li>
            <li><strong>अनुभव व कौशल:</strong> तकनीकी या विनिर्माण व्यवसाय के लिए संबंधित ट्रेड में आईटीआई/डिप्लोमा या कार्य अनुभव प्रमाण पत्र को प्राथमिकता।</li>
          </ul>
        </div>

        <!-- Documents Card -->
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 22px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.25rem;">📑 ज़रूरी दस्तावेज़ (Required Documents)</h3>
          <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-text); font-size: 0.98rem;">
            <li>आधार कार्ड, पैन कार्ड व 2 पासपोर्ट फोटो</li>
            <li>सक्षम प्राधिकारी (SDO) द्वारा जारी जाति प्रमाण पत्र</li>
            <li>तहसीलदार द्वारा जारी आय प्रमाण पत्र</li>
            <li>डोमिसाइल सर्टिफिकेट / निवास प्रमाण</li>
            <li>व्यावसायिक <strong>विस्तृत प्रोजेक्ट रिपोर्ट (Detailed Project Report - DPR)</strong></li>
            <li>मशीनरी व उपकरणों का GSTIN कोटेशन</li>
            <li>दुकान/कारखाने की जगह का किरायानामा/7/12 उतारा व Udyam Registration</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6 REAL-WORLD PROBLEMS & DEEP PROBLEM SOLVERS -->
    <section class="blog-content" style="line-height: 1.85; font-size: 1.05rem; color: var(--color-text); margin: 40px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.75rem; margin-bottom: 24px;">
        💡 <span data-lang-show="en">Top 6 MPBCDC Seed Capital Issues & 100% Practical Solutions</span>
        <span data-lang-show="hi">बीज भांडवल योजना से जुड़ी 6 मुख्य समस्याएं व उनका पक्का समाधान</span>
      </h2>

      <div class="prob-box" style="border-left: 6px solid #2563eb;">
        <h3 style="margin-top: 0; color: var(--color-primary);">1. 75% Bank Loan के लिए किस बैंक में जाना चाहिए और Lead Bank Scheme क्या है?</h3>
        <p>अक्सर आवेदकों को बैंक शाखाओं में भटकना पड़ता है।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> अपने ज़िले के लीड बैंक (Lead Bank) या Bank of Maharashtra, SBI, Union Bank, Central Bank of India की स्थानीय शाखा में जाएं। महामंडळ का स्पॉन्सरशिप लेटर होने पर बैंक प्राथमिकता क्षेत्र उधारी (PSL) के तहत ऋण स्वीकृत करते हैं।</li>
        </ul>
      </div>

      <div class="prob-box" style="border-left: 6px solid #146B3A;">
        <h3 style="margin-top: 0; color: var(--color-primary);">2. 20% Seed Capital पर 4% ब्याज की गणना कैसे होती है?</h3>
        <p>सीड कैपिटल का ब्याज बहुत कम (मात्र 4% वार्षिक सरल दर) होता है।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> महामंडळ द्वारा दिए जाने वाले ₹1,00,000 पर सालाना केवल ₹4,000 का ब्याज बनता है। इसकी वसूली महामंडळ द्वारा बैंक लोन के स्थिरीकरण के बाद आसान मासिक किश्तों में की जाती है।</li>
        </ul>
      </div>

      <div class="prob-box" style="border-left: 6px solid #D97F2B;">
        <h3 style="margin-top: 0; color: var(--color-primary);">3. ₹5 लाख के प्रोजेक्ट के लिए विस्तृत Project Report (DPR) कैसे बनाएं?</h3>
        <p>चार्टर्ड अकाउंटेंट (CA) से DPR बनवाने में 5,000 से 15,000 रुपये का खर्च आता है।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> हमारे SarkariSewa <a href="../project-report/index.html" style="font-weight:700; color:var(--color-primary);">Project Report Generator Tool</a> से मात्र 2 मिनट में मशीनरी लागत, कार्यशील पूंजी (Working Capital), मासिक लाभ-हानि व Break-even Point की पूरी रिपोर्ट तैयार करें।</li>
        </ul>
      </div>

      <div class="prob-box" style="border-left: 6px solid #7c3aed;">
        <h3 style="margin-top: 0; color: var(--color-primary);">4. बैंक द्वारा कोलैटरल सिक्योरिटी या मॉर्गेज मांगने पर क्या नियम हैं?</h3>
        <p>कई बार बैंक शाखा प्रबंधक अचल संपत्ति के कागजात मांगते हैं।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> बैंक को स्पष्ट रूप से <strong>CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises)</strong> के तहत ऋण कवर करने का अनुरोध करें। इसके तहत सरकार बैंक को 85% तक की गारंटी देती है और किसी संपत्ति बंधक की आवश्यकता नहीं होती।</li>
        </ul>
      </div>

      <div class="prob-box" style="border-left: 6px solid #059669;">
        <h3 style="margin-top: 0; color: var(--color-primary);">5. यदि बैंक 75% लोन पास कर दे लेकिन MPBCDC से 20% सीड कैपिटल पेंडिंग हो जाए?</h3>
        <p>बजट आवंटन के कारण कई बार महामंडळ स्तर पर विलंब हो सकता है।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> बैंक द्वारा जारी 'Sanction Letter' की कॉपी के साथ अपने ज़िले के MPBCDC ज़िला प्रबंधक से मिलें। बैंक संस्वीकृति पत्र जमा होते ही महामंडळ अपने हेड ऑफिस से सीड कैपिटल फंड तुरंत रिलीज करवाता है।</li>
        </ul>
      </div>

      <div class="prob-box" style="border-left: 6px solid #db2777;">
        <h3 style="margin-top: 0; color: var(--color-primary);">6. क्या मौजूदा व्यवसाय के विस्तार (Machinery Upgrade/Expansion) के लिए सीड कैपिटल मिल सकता है?</h3>
        <p>जी हाँ, नई दुकान/फैक्ट्री के अलावा पुराने धंधे को बड़ा करने के लिए भी यह योजना लागू है।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> अपने पुराने व्यवसाय का उद्योग आधार/उद्यम रजिस्ट्रेशन, पिछले 1 वर्ष का बैंक स्टेटमेंट और नई खरीदी जाने वाली मशीनरी का कोटेशन जोड़कर आवेदन करें।</li>
        </ul>
      </div>
    </section>

    <!-- STEP BY STEP APPLICATION ROADMAP -->
    <section style="background: var(--color-bg-alt); border: 1px solid var(--color-border); border-radius: 16px; padding: 26px; margin: 36px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.55rem; margin-top: 0;">
        🚀 MPBCDC Seed Capital: Step-by-Step Online Apply Roadmap
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 18px;">
        <div style="background: var(--color-surface); padding: 18px; border-radius: 10px; border: 1px solid var(--color-border);">
          <div style="background: #2563eb; color: #fff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; margin-bottom: 10px;">1</div>
          <strong style="color: var(--color-primary);">पंजीकरण (Registration):</strong> <code>mpbcdc.maharashtra.gov.in</code> पर आधार OTP से साइन-अप करें।
        </div>

        <div style="background: var(--color-surface); padding: 18px; border-radius: 10px; border: 1px solid var(--color-border);">
          <div style="background: #2563eb; color: #fff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; margin-bottom: 10px;">2</div>
          <strong style="color: var(--color-primary);">योजना चयन:</strong> <strong>'Seed Capital Scheme (बीज भांडवल योजना - ₹5.00 Lakh)'</strong> का चयन करें।
        </div>

        <div style="background: var(--color-surface); padding: 18px; border-radius: 10px; border: 1px solid var(--color-border);">
          <div style="background: #2563eb; color: #fff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; margin-bottom: 10px;">3</div>
          <strong style="color: var(--color-primary);">प्रोजेक्ट रिपोर्ट व कोटेशन:</strong> जाति, आय प्रमाण पत्र व व्यवसाय की <strong>DPR</strong> अपलोड करें।
        </div>

        <div style="background: var(--color-surface); padding: 18px; border-radius: 10px; border: 1px solid var(--color-border);">
          <div style="background: #2563eb; color: #fff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; margin-bottom: 10px;">4</div>
          <strong style="color: var(--color-primary);">इंटरव्यू व बैंक संस्वीकृति:</strong> ज़िला कार्यालय में टास्क फ़ोर्स इंटरव्यू के बाद बैंक संस्वीकृति और 20% सीड कैपिटल डिस्बर्स होता है।
        </div>
      </div>
    </section>

{district_html}

    <!-- FREQUENTLY ASKED QUESTIONS SECTION -->
    <section class="service-section" style="margin-top: 36px;">
      <h3 style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 18px;">
        ❓ <span data-lang-show="en">Frequently Asked Questions (FAQs)</span>
        <span data-lang-show="hi">अक्सर पूछे जाने वाले सवाल (FAQs)</span>
      </h3>
{faq_html}
    </section>

{tools_html}

    <!-- OFFICIAL VERIFIED PORTAL LINKS -->
    <section class="service-section" style="background: linear-gradient(135deg, #1e1e38, #2a2a52); color: #ffffff; border-radius: 16px; padding: 28px 24px; margin: 36px 0; box-shadow: 0 8px 24px rgba(0,0,0,0.12);">
      <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 14px;">
        <span style="font-size: 2.2rem;">🏛️</span>
        <div>
          <h2 style="margin: 0; font-size: 1.35rem; color: #ffffff; font-weight: 700;">MPBCDC आधिकारिक पोर्टल लिंक (Official Links)</h2>
          <p style="margin: 4px 0 0 0; color: #cbd5e1; font-size: 0.92rem;">महात्मा फुले मागासवर्गीय विकास महामंडळ (MPBCDC) महाराष्ट्र शासन</p>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 20px;">
        <a href="https://mpbcdc.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; background: #2563eb; color: #ffffff; padding: 14px 20px; border-radius: 10px; font-weight: 600; text-decoration: none; font-size: 1rem; border: 1px solid #3b82f6;">
          <span>🌐 MPBCDC Official Portal</span>
          <span style="font-size: 1.1rem;">↗</span>
        </a>
        <a href="https://mpbcdc.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; background: #059669; color: #ffffff; padding: 14px 20px; border-radius: 10px; font-weight: 600; text-decoration: none; font-size: 1rem; border: 1px solid #10b981;">
          <span>📝 MahOnline Apply & Login</span>
          <span style="font-size: 1.1rem;">↗</span>
        </a>
        <a href="https://www.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.1); color: #ffffff; padding: 14px 20px; border-radius: 10px; font-weight: 600; text-decoration: none; font-size: 1rem; border: 1px solid rgba(255,255,255,0.2);">
          <span>🏢 Maharashtra Govt Portal</span>
          <span style="font-size: 1.1rem;">↗</span>
        </a>
      </div>
    </section>

    <!-- RELATED MPBCDC SCHEMES -->
    <section class="service-section">
      <h2 class="service-section__title"><span class="icon">🔗</span> अन्य MPBCDC योजनाएं व संबंधित सेवाएं</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
        <a href="../service/mpbcdc-direct-loan-yojana.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-top: 4px solid var(--color-primary); border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text);">
          <div style="font-size: 1.5rem; margin-bottom: 6px;">💸</div>
          <h3 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">MPBCDC Direct Loan Yojana</h3>
          <p style="font-size: 0.88rem; color: var(--color-text-muted); margin: 0;">₹1 लाख तक 50% मुफ़्त सब्सिडी + 4% ब्याज पर डायरेक्ट लोन।</p>
        </a>

        <a href="../service/mpbcdc-subsidy-yojana.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-top: 4px solid #146B3A; border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text);">
          <div style="font-size: 1.5rem; margin-bottom: 6px;">🎁</div>
          <h3 style="margin: 0 0 6px 0; font-size: 1.1rem; color: #146B3A;">50% Subsidy Yojana</h3>
          <p style="font-size: 0.88rem; color: var(--color-text-muted); margin: 0;">₹50,000 तक के छोटे प्रोजेक्ट पर 50% मुफ़्त सरकारी अनुदान।</p>
        </a>

        <a href="../service/mpbcdc-yojana.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-top: 4px solid #D97F2B; border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text);">
          <div style="font-size: 1.5rem; margin-bottom: 6px;">🏛️</div>
          <h3 style="margin: 0 0 6px 0; font-size: 1.1rem; color: #D97F2B;">MPBCDC Master Hub</h3>
          <p style="font-size: 0.88rem; color: var(--color-text-muted); margin: 0;">तीनों योजनाओं की विस्तृत तुलना व 36 ज़िला कार्यालय।</p>
        </a>

        <a href="../service/mh-caste-certificate.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-top: 4px solid #7c3aed; border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text);">
          <div style="font-size: 1.5rem; margin-bottom: 6px;">📜</div>
          <h3 style="margin: 0 0 6px 0; font-size: 1.1rem; color: #7c3aed;">Maharashtra Caste Certificate</h3>
          <p style="font-size: 0.88rem; color: var(--color-text-muted); margin: 0;">Aaple Sarkar पोर्टल से जाति प्रमाण पत्र ऑनलाइन बनाएं।</p>
        </a>
      </div>
    </section>

    <!-- VIP TELEGRAM BANNER -->
    <div style="background: linear-gradient(135deg, #0088cc 0%, #005f8f 100%); border-radius: 12px; padding: 24px; color: #fff; margin: 36px 0; text-align: center; box-shadow: 0 4px 12px rgba(0,136,204,0.25);">
      <h3 style="margin: 0 0 8px 0; color: #fff; font-size: 1.4rem;">✈️ SarkariSewa VIP Telegram Community</h3>
      <p style="margin: 0 0 16px 0; color: #e0f2fe; font-size: 0.95rem;">महाराष्ट्र की सभी सब्सिडी योजनाओं, मुद्रा लोन, PMEGP व सरकारी जॉब अलर्ट्स की सबसे तेज़ जानकारी पाएं।</p>
      <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" class="btn" style="background: #fff; color: #0088cc; font-weight: 700; padding: 10px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">Join Telegram Channel ↗</a>
    </div>

    <!-- COMMENTS SECTION -->
    <section class="service-section" id="comments-section">
      <h2 class="service-section__title"><span class="icon">💬</span> Questions &amp; Comments</h2>
      <p class="comments-note">यह MPBCDC 20% बीज भांडवल योजना से जुड़ी सार्वजनिक चर्चा है। आधिकारिक सहायता के लिए अपने ज़िला कार्यालय से संपर्क करें।</p>
      <form id="comment-form" class="comment-form">
        <div class="comment-form__row">
          <input type="text" id="comment-name" maxlength="80" placeholder="आपका नाम (Your Name)" required />
        </div>
        <div class="comment-form__row">
          <textarea id="comment-message" maxlength="2000" rows="3" placeholder="MPBCDC बीज भांडवल योजना से जुड़ा अपना सवाल पूछें..." required></textarea>
        </div>
        <div class="comment-form__actions">
          <span class="comment-form__status" id="comment-form-status"></span>
          <button type="submit" class="btn-primary" id="comment-submit">Post Question</button>
        </div>
      </form>
      <div id="comments-list" class="comments-list">
        <p class="loading">Loading comments…</p>
      </div>
    </section>
  </main>

  <div id="site-footer"></div>
  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/consent.js"></script>
  <script src="../assets/js/i18n-helper.js"></script>
  <script src="../assets/js/mpbcdc-calculator.js"></script>
  <script src="../assets/js/supabase-client.js"></script>
  <script src="../assets/js/services-data.js"></script>
  <script src="../assets/js/share-widget.js"></script>
  <script src="../assets/js/service-template.js"></script>
</body>
</html>'''

def render_hub_page():
    faqs = [
        {"q": "MPBCDC की तीनों योजनाओं में से मेरे व्यवसाय के लिए कौन सी सबसे बेहतर है?", "a": "यदि आपको ₹1,00,000 तक का छोटा व्यवसाय शुरू करना है और बिना किसी बैंक झंझट के 50% मुफ़्त सरकारी अनुदान (₹50,000) चाहिए, तो <strong>Direct Loan Scheme (थेट कर्ज)</strong> सबसे उत्तम है। यदि आपके पास अपनी जेब से लगाने के लिए ₹0 हैं तो <strong>50% Subsidy Scheme (₹50,000 तक)</strong> चुनें। और यदि आप ₹1 लाख से ₹5 लाख तक का बड़ा उद्योग या दुकान लगाना चाहते हैं, तो <strong>Seed Capital Scheme (20% बीज भांडवल @ 4%)</strong> चुनें।"},
        {"q": "MPBCDC योजना के लिए कौन-कौन पात्र हैं?", "a": "महाराष्ट्र के स्थायी निवासी (Domicile), जो अनुसूचित जाति (SC) या नव-बौद्ध (Neo-Buddhist) समाज से हैं और जिनकी पारिवारिक वार्षिक आय ₹2,50,000 से कम है, वे सभी पात्र हैं।"},
        {"q": "MahOnline पोर्टल पर ऑनलाइन आवेदन कैसे किया जाता है?", "a": "<code>mpbcdc.maharashtra.gov.in</code> पर जाकर आधार OTP से 'New Registration' करें। अपनी पसंदीदा योजना का चयन करें, आवश्यक प्रमाण पत्र व सामान का GST कोटेशन अपलोड करें। इसके बाद फॉर्म का प्रिंट ज़िला कार्यालय में जमा करें।"},
        {"q": "क्या एक परिवार से दो लोग एक साथ अलग-अलग योजना में आवेदन कर सकते हैं?", "a": "नहीं, एक राशन कार्ड (Family Unit) पर एक समय में केवल एक ही सदस्य लाभ ले सकता है। पिछला ऋण पूर्ण चुकता (NOC) होने के बाद दूसरा सदस्य आवेदन कर सकता है।"},
        {"q": "जाति व आय प्रमाण पत्र कहाँ से बनवाएं?", "a": "महाराष्ट्र शासन के 'Aaple Sarkar' पोर्टल से या अपने नजदीकी आपले सरकार सेवा केंद्र / CSC केंद्र से SDO द्वारा जारी जाति प्रमाण पत्र और तहसीलदार द्वारा जारी आय प्रमाण पत्र बनवाएं।"},
        {"q": "टास्क फ़ोर्स कमेटी (TFC) इंटरव्यू में क्या पूछा जाता है?", "a": "इंटरव्यू में आपसे आपके व्यवसाय का अनुभव, सामान कहाँ से खरीदेंगे, अनुमानित दैनिक/मासिक कमाई, और ऋण किश्त कैसे चुकाएंगे—यह सामान्य जानकारी पूछी जाती है।"},
        {"q": "महाराष्ट्र के 36 ज़िलों के MPBCDC कार्यालयों का संपर्क कैसे प्राप्त करें?", "a": "हमारे इस पेज पर नीचे दिए गए 'Maharashtra 36 Districts Directory' में अपने ज़िले पर क्लिक करके तुरंत ज़िला प्रबंधक कार्यालय का आधिकारिक पता, फोन नंबर और ईमेल देख सकते हैं।"},
        {"q": "आवेदन स्वीकृत होने के बाद पैसा मिलने में कितना समय लगता है?", "a": "दस्तावेज़ जमा करने और इंटरव्यू के बाद औसतन 30 से 45 दिनों के भीतर ऋण व सब्सिडी स्वीकृत होकर सीधे अधिकृत डीलर या बैंक खाते में ट्रांसफर हो जाती है।"},
        {"q": "CIBIL स्कोर कम या खराब होने पर क्या लोन मिलेगा?", "a": "हाँ! MPBCDC की <strong>थेट कर्ज योजना (Direct Loan Scheme)</strong> में सिबिल स्कोर की कोई बाध्यता नहीं है क्योंकि इसमें लोन सीधे महामंडळ द्वारा दिया जाता है, बैंक द्वारा नहीं।"},
        {"q": "SarkariSewa पोर्टल से प्रोजेक्ट रिपोर्ट और ईएमआई कैलकुलेटर का उपयोग कैसे करें?", "a": "आप हमारे <a href='../project-report/index.html' style='font-weight:700; color:var(--color-primary);'>Project Report Tool</a> और <a href='../tools/eligibility-checker.html' style='font-weight:700; color:var(--color-primary);'>Eligibility Checker Tool</a> का उपयोग 100% मुफ़्त में कर सकते हैं।"}
    ]
    faq_html = render_faq_html(faqs)
    district_html = render_district_directory_html()
    tools_html = render_useful_tools_html()

    return f'''<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/apple-touch-icon.png">
  <link rel="icon" href="../favicon.ico">
  <link rel="manifest" href="../manifest.json">
  <link rel="canonical" href="https://sarkarisewaindia.com/service/mpbcdc-yojana.html" />
  <meta name="description" content="MPBCDC Yojana 2026: महात्मा फुले मागासवर्गीय विकास महामंडळ की सभी योजनाओं (Direct Loan ₹1L @ 4%, 50% Subsidy, Seed Capital ₹5L) की तुलना, पात्रता, 36 ज़िला कार्यालय व ऑनलाइन आवेदन।" />
  <meta property="og:title" content="MPBCDC Yojana 2026: महात्मा फुले महामंडळ संपूर्ण योजना गाइड" />
  <meta property="og:description" content="MPBCDC Schemes Master Hub: Compare Direct Loan, 50% Subsidy & Seed Capital. 36 District Offices directory & online apply guide." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://sarkarisewaindia.com/service/mpbcdc-yojana.html" />
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="MPBCDC Yojana 2026: महात्मा फुले महामंडळ योजना गाइड" />
  <meta name="twitter:description" content="MPBCDC Direct Loan, 50% Subsidy aur Seed Capital schemes comparison & complete 36 districts guide." />
  <title>MPBCDC Yojana 2026: महात्मा फुले महामंडळ योजना गाइड व Schemes Comparison</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css" />
  <link rel="stylesheet" href="../assets/css/module2.css" />
  <link rel="stylesheet" href="../assets/css/module7.css" />
  <link rel="stylesheet" href="../assets/css/module15.css" />
  <link rel="stylesheet" href="../assets/css/module16.css" />
  <link rel="stylesheet" href="../assets/css/share-widget.css" />

  <script type="application/ld+json" id="service-schema">
  {{
    "@context": "https://schema.org",
    "@graph": [
      {{
        "@type": "GovernmentService",
        "name": "MPBCDC Schemes Master Hub (महात्मा फुले महामंडळ योजना)",
        "alternateName": "Mahatma Phule Backward Class Development Corporation Schemes Maharashtra",
        "description": "Comprehensive comparison and application directory for all MPBCDC schemes including Direct Loan, 50% Subsidy Grant, and 20% Seed Capital for SC and Neo-Buddhist entrepreneurs across 36 Maharashtra districts.",
        "url": "https://sarkarisewaindia.com/service/mpbcdc-yojana.html",
        "serviceType": "Government Social Welfare & Business Finance",
        "provider": {{
          "@type": "GovernmentOrganization",
          "name": "Mahatma Phule Backward Class Development Corporation (MPBCDC), Maharashtra",
          "sameAs": ["https://mpbcdc.maharashtra.gov.in"]
        }},
        "areaServed": {{
          "@type": "AdministrativeArea",
          "name": "Maharashtra, India"
        }}
      }},
      {{
        "@type": "BreadcrumbList",
        "itemListElement": [
          {{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sarkarisewaindia.com/index.html"
          }},
          {{
            "@type": "ListItem",
            "position": 2,
            "name": "MPBCDC Schemes",
            "item": "https://sarkarisewaindia.com/category/mpbcdc-schemes.html"
          }},
          {{
            "@type": "ListItem",
            "position": 3,
            "name": "MPBCDC Yojana Hub",
            "item": "https://sarkarisewaindia.com/service/mpbcdc-yojana.html"
          }}
        ]
      }},
      {{
        "@type": "FAQPage",
        "mainEntity": [
          {{
            "@type": "Question",
            "name": "MPBCDC की तीनों योजनाओं में से सबसे बेहतर कौन सी है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "छोटे प्रोजेक्ट के लिए 50% मुफ़्त सब्सिडी वाला Direct Loan (थेट कर्ज) सबसे लोकप्रिय है, जबकि ₹5 लाख तक के प्रोजेक्ट के लिए Seed Capital योजना श्रेष्ठ है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "MPBCDC योजना के लिए कौन पात्र हैं?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "महाराष्ट्र के अनुसूचित जाति (SC) व नव-बौद्ध (Neo-Buddhist) समुदाय के नागरिक जिनकी पारिवारिक आय ₹2.5 लाख से कम है।"
            }}
          }}
        ]
      }}
    ]
  }}
  </script>

  <style>
    .stat-badge-box {{
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
      transition: transform 0.2s;
    }}
    .stat-badge-box:hover {{
      transform: translateY(-2px);
    }}
    .prob-box {{
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 22px;
      margin-bottom: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.02);
    }}
  </style>
</head>
<body data-slug="mpbcdc-yojana">
  <script>window.SS_ROOT = "../";</script>
  <div id="site-header"></div>

  <main class="container" style="padding-top: 20px; padding-bottom: 60px;">
    <!-- Breadcrumb -->
    <nav class="breadcrumb" id="breadcrumb" aria-label="Breadcrumb">
      <a href="../index.html">Home</a>
      <span class="sep">/</span>
      <a href="../category/mpbcdc-schemes.html">💸 MPBCDC योजनाएं</a>
      <span class="sep">/</span>
      <span class="current">MPBCDC Hub</span>
    </nav>

    <!-- HERO HEADER -->
    <header class="service-hero" id="service-hero" style="text-align: left; padding: 24px 0 10px 0;">
      <span class="service-hero__badge" style="background: var(--color-brand); color: #fff; padding: 4px 14px; border-radius: 6px; font-weight: 700; font-size: 0.85rem;">
        🏛️ MAHATMA PHULE CORPORATION MASTER HUB 2026
      </span>
      <h1 style="font-size: 2.2rem; line-height: 1.3; color: var(--color-primary); margin: 14px 0 12px 0; font-weight: 800;">
        <span data-lang-show="en">MPBCDC Yojana 2026: Complete Scheme Guide, Comparison & Apply Online</span>
        <span data-lang-show="hi">महात्मा फुले मागासवर्गीय विकास महामंडळ (MPBCDC) योजना गाइड 2026</span>
      </h1>
      <p style="font-size: 1.08rem; line-height: 1.7; color: var(--color-text-muted); max-width: 950px; margin: 0 0 20px 0;">
        <span data-lang-show="en">Official guide to all self-employment schemes by MPBCDC Maharashtra: Direct Loan Scheme (₹1 Lakh @ 4% + 50% Subsidy), 50% Special Subsidy Scheme (₹50k Grant), and Seed Capital Scheme (₹5 Lakh @ 20% Seed Capital). Compare eligibility, interest rates, and apply online.</span>
        <span data-lang-show="hi">महाराष्ट्र शासन के महात्मा फुले मागासवर्गीय विकास महामंडळ (MPBCDC) की सभी स्वरोजगार योजनाओं की संपूर्ण मार्गदर्शिका। जानें कौन सी योजना आपके व्यवसाय के लिए सबसे उपयुक्त है, तुलना देखें, 36 ज़िला कार्यालय खोजें और MahOnline पोर्टल पर ऑनलाइन आवेदन करें।</span>
      </p>

      <!-- 1-CLICK ACTION BUTTONS -->
      <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 24px;">
        <a href="../service/mpbcdc-direct-loan-yojana.html" class="btn btn--primary" style="font-weight: 700; padding: 12px 20px; font-size: 0.95rem;">
          💰 <span data-lang-show="en">Direct Loan Scheme (₹1L @ 4%) ↗</span><span data-lang-show="hi">डायरेक्ट लोन योजना (₹1 लाख @ 4%) ↗</span>
        </a>
        <a href="../service/mpbcdc-subsidy-yojana.html" class="btn" style="background: #146B3A; color: #fff; font-weight: 700; padding: 12px 20px; font-size: 0.95rem; text-decoration: none;">
          🎁 <span data-lang-show="en">50% Subsidy Scheme ↗</span><span data-lang-show="hi">50% विशेष अनुदान योजना ↗</span>
        </a>
        <a href="../service/mpbcdc-seed-capital-yojana.html" class="btn" style="background: #2563eb; color: #fff; font-weight: 700; padding: 12px 20px; font-size: 0.95rem; text-decoration: none;">
          🏦 <span data-lang-show="en">Seed Capital Scheme (₹5L) ↗</span><span data-lang-show="hi">सीड कैपिटल योजना (₹5 लाख) ↗</span>
        </a>
      </div>
      <div id="svc-share-row"></div>
    </header>

    <div class="tricolor-rule" aria-hidden="true"></div>

    <!-- KEY STATS 4-GRID -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin: 30px 0;">
      <div class="stat-badge-box" style="border-left: 5px solid #146B3A;">
        <div style="font-size: 1.8rem;">🎁</div>
        <div style="color: var(--color-text-muted); font-size: 0.85rem; font-weight: 700;">MAX GOVT SUBSIDY</div>
        <div style="font-size: 1.6rem; font-weight: 800; color: #146B3A;">₹50,000 Free Grant</div>
        <div style="font-size: 0.82rem; color: var(--color-text-muted);">मुफ़्त सरकारी अनुदान</div>
      </div>

      <div class="stat-badge-box" style="border-left: 5px solid #2563eb;">
        <div style="font-size: 1.8rem;">📉</div>
        <div style="color: var(--color-text-muted); font-size: 0.85rem; font-weight: 700;">LOWEST INTEREST RATE</div>
        <div style="font-size: 1.6rem; font-weight: 800; color: #2563eb;">Only 4% Simple Interest</div>
        <div style="font-size: 0.82rem; color: var(--color-text-muted);">महामंडळ रियायती ब्याज दर</div>
      </div>

      <div class="stat-badge-box" style="border-left: 5px solid #D97F2B;">
        <div style="font-size: 1.8rem;">🏢</div>
        <div style="color: var(--color-text-muted); font-size: 0.85rem; font-weight: 700;">DISTRICT OFFICES</div>
        <div style="font-size: 1.6rem; font-weight: 800; color: #D97F2B;">All 36 Districts</div>
        <div style="font-size: 0.82rem; color: var(--color-text-muted);">महाराष्ट्र के सभी ज़िले कवर्ड</div>
      </div>

      <div class="stat-badge-box" style="border-left: 5px solid #7c3aed;">
        <div style="font-size: 1.8rem;">⚡</div>
        <div style="color: var(--color-text-muted); font-size: 0.85rem; font-weight: 700;">ONLINE APPLICATION</div>
        <div style="font-size: 1.6rem; font-weight: 800; color: #7c3aed;">100% Digital Process</div>
        <div style="font-size: 0.82rem; color: var(--color-text-muted);">MahOnline पोर्टल द्वारा आवेदन</div>
      </div>
    </div>

    <!-- SCHEMES COMPARISON MATRIX -->
    <section style="margin: 36px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-bottom: 18px;">
        📊 MPBCDC तीनों योजनाओं की विस्तृत तुलना (Comparison Matrix)
      </h2>
      <div style="overflow-x: auto; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; box-shadow: 0 4px 14px rgba(0,0,0,0.03);">
        <table class="fees-table" style="width: 100%; border-collapse: collapse; min-width: 650px;">
          <thead>
            <tr style="background: var(--color-brand); color: #ffffff;">
              <th style="padding: 16px; text-align: left;">योजना का नाम (Scheme)</th>
              <th style="padding: 16px; text-align: left;">अधिकतम प्रोजेक्ट लागत</th>
              <th style="padding: 16px; text-align: left;">सरकारी सब्सिडी (Grant)</th>
              <th style="padding: 16px; text-align: left;">लोन हिस्सा व ब्याज</th>
              <th style="padding: 16px; text-align: left;">लाभार्थी अंशदान</th>
              <th style="padding: 16px; text-align: left;">बैंक निर्भरता</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--color-border);">
              <td style="padding: 16px;">
                <a href="../service/mpbcdc-direct-loan-yojana.html" style="font-weight: 800; color: var(--color-primary); text-decoration: none;">
                  1. Direct Loan (थेट कर्ज योजना) ↗
                </a>
              </td>
              <td style="padding: 16px; font-weight: 700;">₹1,00,000</td>
              <td style="padding: 16px; color: #146B3A; font-weight: 800;">50% (₹50,000)</td>
              <td style="padding: 16px; color: #2563eb; font-weight: 800;">45% (₹45,000) @ 4%</td>
              <td style="padding: 16px;">5% (₹5,000)</td>
              <td style="padding: 16px; color: #146B3A; font-weight: 800;">❌ बैंक की ज़रूरत नहीं</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border);">
              <td style="padding: 16px;">
                <a href="../service/mpbcdc-subsidy-yojana.html" style="font-weight: 800; color: #146B3A; text-decoration: none;">
                  2. 50% Subsidy (विशेष अनुदान) ↗
                </a>
              </td>
              <td style="padding: 16px; font-weight: 700;">₹50,000</td>
              <td style="padding: 16px; color: #146B3A; font-weight: 800;">50% (₹25,000)</td>
              <td style="padding: 16px;">50% Bank Loan</td>
              <td style="padding: 16px; color: #146B3A; font-weight: 800;">0% (Zero)</td>
              <td style="padding: 16px;">✔️ बैंक लोन शामिल</td>
            </tr>
            <tr>
              <td style="padding: 16px;">
                <a href="../service/mpbcdc-seed-capital-yojana.html" style="font-weight: 800; color: #2563eb; text-decoration: none;">
                  3. Seed Capital (बीज भांडवल) ↗
                </a>
              </td>
              <td style="padding: 16px; font-weight: 700;">₹1L से ₹5,00,000</td>
              <td style="padding: 16px;">20% Seed Capital @ 4%</td>
              <td style="padding: 16px; color: #146B3A; font-weight: 800;">75% Bank Loan</td>
              <td style="padding: 16px;">5% (₹5k - ₹25k)</td>
              <td style="padding: 16px;">✔️ बैंक लोन शामिल</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 6 REAL-WORLD PROBLEMS & DEEP PROBLEM SOLVERS -->
    <section class="blog-content" style="line-height: 1.85; font-size: 1.05rem; color: var(--color-text); margin: 40px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.75rem; margin-bottom: 24px;">
        💡 <span data-lang-show="en">Top 6 MPBCDC Schemes Issues & 100% Practical Solutions</span>
        <span data-lang-show="hi">MPBCDC योजनाओं से जुड़ी 6 मुख्य समस्याएं व उनका पक्का समाधान</span>
      </h2>

      <div class="prob-box" style="border-left: 6px solid #146B3A;">
        <h3 style="margin-top: 0; color: var(--color-primary);">1. बिना किसी बैंक गारंटी के कौन सी योजना सबसे जल्दी स्वीकृत होती है?</h3>
        <p>बैंकों में चक्कर काटने से बचने के लिए सीधा समाधान मौजूद है।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> <strong>थेट कर्ज योजना (Direct Loan Scheme)</strong> में किसी बैंक की आवश्यकता नहीं होती। सारा लोन व 50% मुफ़्त सब्सिडी सीधे महामंडळ के ज़िला कार्यालय द्वारा स्वीकृत होती है।</li>
        </ul>
      </div>

      <div class="prob-box" style="border-left: 6px solid #D97F2B;">
        <h3 style="margin-top: 0; color: var(--color-primary);">2. क्या ग्रामीण और शहरी दोनों क्षेत्रों के आवेदक पात्र हैं?</h3>
        <p>जी हाँ, पूरे महाराष्ट्र के सभी 36 ज़िलों के ग्रामीण व शहरी क्षेत्रों के लिए योजनाएं खुली हैं।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> ग्रामीण क्षेत्र के लिए ग्राम पंचायत प्रमाण पत्र और शहरी क्षेत्र के लिए नगर पालिका/महानगर पालिका वार्ड प्रमाण पत्र मान्य होता है।</li>
        </ul>
      </div>

      <div class="prob-box" style="border-left: 6px solid #2563eb;">
        <h3 style="margin-top: 0; color: var(--color-primary);">3. प्रोजेक्ट रिपोर्ट (DPR) और कोटेशन कैसे बनाएं?</h3>
        <p>दुकानदार से GSTIN कोटेशन लें और हमारे फ्री टूल से 2 मिनट में प्रोजेक्ट रिपोर्ट डाउनलोड करें।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> हमारे <a href="../project-report/index.html" style="font-weight:700; color:var(--color-primary);">Project Report Generator Tool</a> का उपयोग करें।</li>
        </ul>
      </div>

      <div class="prob-box" style="border-left: 6px solid #7c3aed;">
        <h3 style="margin-top: 0; color: var(--color-primary);">4. जाति प्रमाण पत्र (Caste Certificate) में त्रुटि होने पर क्या करें?</h3>
        <p>जाति प्रमाण पत्र सक्षम प्राधिकारी (उप-विभागीय अधिकारी SDO) द्वारा हस्ताक्षरित होना अनिवार्य है।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> यदि डिजिटल प्रमाण पत्र नहीं है, तो तुरंत Aaple Sarkar पोर्टल से डिजिटल बारकोड वाला प्रमाण पत्र बनवाएं।</li>
        </ul>
      </div>

      <div class="prob-box" style="border-left: 6px solid #059669;">
        <h3 style="margin-top: 0; color: var(--color-primary);">5. क्या महिला उद्यमियों को चयन में कोई विशेष लाभ मिलता है?</h3>
        <p>हाँ! चयन समिति (TFC) में महिला आवेदकों के लिए 30% आरक्षण निर्धारित है।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> महिला स्वयं सहायता समूह (SHG) की सदस्य व्यक्तिगत रूप से आवेदन करके 30% आरक्षण का लाभ उठा सकती हैं।</li>
        </ul>
      </div>

      <div class="prob-box" style="border-left: 6px solid #db2777;">
        <h3 style="margin-top: 0; color: var(--color-primary);">6. आवेदन रिजेक्ट होने या पेंडिंग रहने पर किससे शिकायत करें?</h3>
        <p>प्रत्येक ज़िले में ज़िला प्रबंधक (District Manager) जन-शिकायत निवारण अधिकारी होते हैं।</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><strong>समाधान:</strong> नीचे दी गई 36 ज़िला निर्देशिका से अपने ज़िला कार्यालय का फोन नंबर निकालें या सीधे महामंडळ के हेल्पलाइन नंबर 1800-22-1950 पर संपर्क करें।</li>
        </ul>
      </div>
    </section>

{district_html}

    <!-- FREQUENTLY ASKED QUESTIONS SECTION -->
    <section class="service-section" style="margin-top: 36px;">
      <h3 style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 18px;">
        ❓ <span data-lang-show="en">Frequently Asked Questions (FAQs)</span>
        <span data-lang-show="hi">अक्सर पूछे जाने वाले सवाल (FAQs)</span>
      </h3>
{faq_html}
    </section>

{tools_html}

    <!-- OFFICIAL VERIFIED PORTAL LINKS -->
    <section class="service-section" style="background: linear-gradient(135deg, #1e1e38, #2a2a52); color: #ffffff; border-radius: 16px; padding: 28px 24px; margin: 36px 0; box-shadow: 0 8px 24px rgba(0,0,0,0.12);">
      <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 14px;">
        <span style="font-size: 2.2rem;">🏛️</span>
        <div>
          <h2 style="margin: 0; font-size: 1.35rem; color: #ffffff; font-weight: 700;">MPBCDC आधिकारिक पोर्टल लिंक (Official Links)</h2>
          <p style="margin: 4px 0 0 0; color: #cbd5e1; font-size: 0.92rem;">महात्मा फुले मागासवर्गीय विकास महामंडळ (MPBCDC) महाराष्ट्र शासन</p>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 20px;">
        <a href="https://mpbcdc.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; background: #2563eb; color: #ffffff; padding: 14px 20px; border-radius: 10px; font-weight: 600; text-decoration: none; font-size: 1rem; border: 1px solid #3b82f6;">
          <span>🌐 MPBCDC Official Portal</span>
          <span style="font-size: 1.1rem;">↗</span>
        </a>
        <a href="https://mpbcdc.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; background: #059669; color: #ffffff; padding: 14px 20px; border-radius: 10px; font-weight: 600; text-decoration: none; font-size: 1rem; border: 1px solid #10b981;">
          <span>📝 MahOnline Apply & Login</span>
          <span style="font-size: 1.1rem;">↗</span>
        </a>
        <a href="https://www.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.1); color: #ffffff; padding: 14px 20px; border-radius: 10px; font-weight: 600; text-decoration: none; font-size: 1rem; border: 1px solid rgba(255,255,255,0.2);">
          <span>🏢 Maharashtra Govt Portal</span>
          <span style="font-size: 1.1rem;">↗</span>
        </a>
      </div>
    </section>

    <!-- VIP TELEGRAM BANNER -->
    <div style="background: linear-gradient(135deg, #0088cc 0%, #005f8f 100%); border-radius: 12px; padding: 24px; color: #fff; margin: 36px 0; text-align: center; box-shadow: 0 4px 12px rgba(0,136,204,0.25);">
      <h3 style="margin: 0 0 8px 0; color: #fff; font-size: 1.4rem;">✈️ SarkariSewa VIP Telegram Community</h3>
      <p style="margin: 0 0 16px 0; color: #e0f2fe; font-size: 0.95rem;">महाराष्ट्र की सभी सब्सिडी योजनाओं, मुद्रा लोन, PMEGP व सरकारी जॉब अलर्ट्स की सबसे तेज़ जानकारी पाएं।</p>
      <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" class="btn" style="background: #fff; color: #0088cc; font-weight: 700; padding: 10px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">Join Telegram Channel ↗</a>
    </div>

    <!-- COMMENTS SECTION -->
    <section class="service-section" id="comments-section">
      <h2 class="service-section__title"><span class="icon">💬</span> Questions &amp; Comments</h2>
      <p class="comments-note">यह MPBCDC योजनाओं से जुड़ी सार्वजनिक चर्चा है। आधिकारिक सहायता के लिए अपने ज़िला कार्यालय से संपर्क करें।</p>
      <form id="comment-form" class="comment-form">
        <div class="comment-form__row">
          <input type="text" id="comment-name" maxlength="80" placeholder="आपका नाम (Your Name)" required />
        </div>
        <div class="comment-form__row">
          <textarea id="comment-message" maxlength="2000" rows="3" placeholder="MPBCDC योजनाओं से जुड़ा अपना सवाल पूछें..." required></textarea>
        </div>
        <div class="comment-form__actions">
          <span class="comment-form__status" id="comment-form-status"></span>
          <button type="submit" class="btn-primary" id="comment-submit">Post Question</button>
        </div>
      </form>
      <div id="comments-list" class="comments-list">
        <p class="loading">Loading comments…</p>
      </div>
    </section>
  </main>

  <div id="site-footer"></div>
  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/consent.js"></script>
  <script src="../assets/js/i18n-helper.js"></script>
  <script src="../assets/js/mpbcdc-calculator.js"></script>
  <script src="../assets/js/supabase-client.js"></script>
  <script src="../assets/js/services-data.js"></script>
  <script src="../assets/js/share-widget.js"></script>
  <script src="../assets/js/service-template.js"></script>
</body>
</html>'''

print('MPBCDC Pages module completely loaded.')

