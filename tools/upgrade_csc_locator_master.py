# -*- coding: utf-8 -*-
"""
Master Generator for tools/csc-locator.html
- Eliminates multi-layer duplication
- Bakes pre-rendered header & footer
- 36 States & UTs Directory Hub with direct internal linking
- 12 In-depth Citizen Services Guide
- Official Govt Fee Transparency Rate Matrix
- 6 Real-World Problem Solvers
- 10 Bilingual FAQs with Schema
- Interactive Supabase Live Search Integration
- Full Dark & Light Mode Contrast Safety
"""

import os, re, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOOLS_DIR = os.path.join(ROOT, 'tools')
TARGET_FILE = os.path.join(TOOLS_DIR, 'csc-locator.html')

HEADER_PARTIAL = os.path.join(ROOT, 'partials', 'header.html')
FOOTER_PARTIAL = os.path.join(ROOT, 'partials', 'footer.html')

with open(HEADER_PARTIAL, 'r', encoding='utf-8') as f:
    RAW_HEADER = f.read()

with open(FOOTER_PARTIAL, 'r', encoding='utf-8') as f:
    RAW_FOOTER = f.read()

def get_baked_header(prefix="../"):
    return re.sub(r'\b(href|src)="(?!(?:https?:|//|#|mailto:|tel:|javascript:))([^"]*)"', rf'\1="{prefix}\2"', RAW_HEADER)

def get_baked_footer(prefix="../"):
    return re.sub(r'\b(href|src)="(?!(?:https?:|//|#|mailto:|tel:|javascript:))([^"]*)"', rf'\1="{prefix}\2"', RAW_FOOTER)

STATES_DATA = [
    ("Andaman and Nicobar Islands", "अंडमान और निकोबार द्वीप समूह", "andaman-nicobar.html", "3 Districts", "#0284c7"),
    ("Andhra Pradesh", "आंध्र प्रदेश", "andhra-pradesh.html", "26 Districts", "#2563eb"),
    ("Arunachal Pradesh", "अरुणाचल प्रदेश", "arunachal-pradesh.html", "25 Districts", "#059669"),
    ("Assam", "असम", "assam.html", "31 Districts", "#d97706"),
    ("Bihar", "बिहार", "bihar.html", "38 Districts", "#dc2626"),
    ("Chandigarh", "चंडीगढ़", "chandigarh.html", "1 District", "#7c3aed"),
    ("Chhattisgarh", "छत्तीसगढ़", "chhattisgarh.html", "33 Districts", "#059669"),
    ("Dadra & Nagar Haveli and Daman & Diu", "दादरा एवं नगर हवेली व दमन दीव", "dadra-nagar-haveli-daman-diu.html", "3 Districts", "#0284c7"),
    ("Delhi", "दिल्ली (NCT)", "delhi.html", "11 Districts", "#2563eb"),
    ("Goa", "गोवा", "goa.html", "2 Districts", "#059669"),
    ("Gujarat", "गुजरात", "gujarat.html", "33 Districts", "#d97706"),
    ("Haryana", "हरियाणा", "haryana.html", "22 Districts", "#2563eb"),
    ("Himachal Pradesh", "हिमाचल प्रदेश", "himachal-pradesh.html", "12 Districts", "#059669"),
    ("Jammu and Kashmir", "जम्मू और कश्मीर", "jammu-kashmir.html", "20 Districts", "#0284c7"),
    ("Jharkhand", "झारखंड", "jharkhand.html", "24 Districts", "#059669"),
    ("Karnataka", "कर्नाटक", "karnataka.html", "31 Districts", "#d97706"),
    ("Kerala", "केरल", "kerala.html", "14 Districts", "#059669"),
    ("Ladakh", "लद्दाख", "ladakh.html", "2 Districts", "#0284c7"),
    ("Lakshadweep", "लक्षद्वीप", "lakshadweep.html", "1 District", "#0284c7"),
    ("Madhya Pradesh", "मध्य प्रदेश", "madhya-pradesh.html", "55 Districts", "#2563eb"),
    ("Maharashtra", "महाराष्ट्र", "maharashtra.html", "36 Districts", "#d97706"),
    ("Manipur", "मणिपुर", "manipur.html", "16 Districts", "#059669"),
    ("Meghalaya", "मेघालय", "meghalaya.html", "12 Districts", "#059669"),
    ("Mizoram", "मिज़ोरम", "mizoram.html", "11 Districts", "#059669"),
    ("Nagaland", "नागालैंड", "nagaland.html", "16 Districts", "#059669"),
    ("Odisha", "ओडिशा", "odisha.html", "30 Districts", "#2563eb"),
    ("Puducherry", "पुदुचेरी", "puducherry.html", "4 Districts", "#0284c7"),
    ("Punjab", "पंजाब", "punjab.html", "23 Districts", "#2563eb"),
    ("Rajasthan", "राजस्थान", "rajasthan.html", "50 Districts", "#d97706"),
    ("Sikkim", "सिक्किम", "sikkim.html", "6 Districts", "#059669"),
    ("Tamil Nadu", "तमिलनाडु", "tamil-nadu.html", "38 Districts", "#2563eb"),
    ("Telangana", "तेलंगाना", "telangana.html", "33 Districts", "#d97706"),
    ("Tripura", "त्रिपुरा", "tripura.html", "8 Districts", "#059669"),
    ("Uttar Pradesh", "उत्तर प्रदेश", "uttar-pradesh.html", "75 Districts", "#2563eb"),
    ("Uttarakhand", "उत्तराखंड", "uttarakhand.html", "13 Districts", "#059669"),
    ("West Bengal", "पश्चिम बंगाल", "west-bengal.html", "23 Districts", "#0284c7")
]

FAQS_DATA = [
    ("सीएससी (CSC) और जन सेवा केंद्र क्या होता है?", "कॉमन सर्विस सेंटर (CSC) या जन सेवा केंद्र भारत सरकार के इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय (MeitY) के डिजिटल इंडिया मिशन के तहत स्थापित अधिकृत केंद्र हैं। ये ग्रामीण व शहरी नागरिकों को 400 से अधिक सरकारी (G2C) और व्यावसायिक (B2C) सेवाएं एक ही छत के नीचे डिजिटल रूप से उपलब्ध कराते हैं।"),
    ("अपने पिनकोड या गांव/वार्ड का नजदीकी सीएससी केंद्र कैसे खोजें?", "इस पेज पर दिए गए सर्च इंजन में अपना राज्य व ज़िला चुनें या अपना 6 अंकों का पिनकोड दर्ज करके 'Search CSC' पर क्लिक करें। आप 'Use My Location' बटन दबाकर जीपीएस की मदद से सीधे अपने निकटतम सक्रिय केंद्रों का नाम, पता व मैप दिशा-निर्देश प्राप्त कर सकते हैं।"),
    ("सीएससी केंद्र पर जाने से पहले कौन-से जरूरी दस्तावेज़ साथ ले जाने चाहिए?", "मुख्य सेवाओं के लिए मूल आधार कार्ड, आधार लिंक मोबाइल नंबर (OTP हेतु), पैन कार्ड, पासपोर्ट साइज फोटो, बैंक पासबुक और राशन कार्ड या पुराना प्रमाण पत्र साथ रखें। बायोमेट्रिक सत्यापन हेतु व्यक्ति का स्वयं उपस्थित होना अनिवार्य होता है।"),
    ("क्या सीएससी केंद्र पर नया आधार कार्ड और संशोधन (Update) हो सकता है?", "हाँ, जिन सीएससी केंद्रों के पास UIDAI का अधिकृत UCL (Update Client Lite) या आधार सेवा केंद्र क्रेडेंशियल है, वहां नया बाल आधार नामांकन, नाम, जन्मतिथि, पता, मोबाइल नंबर व बायोमेट्रिक फिंगरप्रिंट/आयरिस अपडेट किया जाता है।"),
    ("सीएससी पर आयुष्मान भारत (PM-JAY) गोल्डन कार्ड बनवाने का क्या शुल्क है?", "आयुष्मान भारत योजना के तहत परिवार पात्रता जांच और डिजिटल ई-केवाईसी कार्ड बनाना पूरी तरह निःशुल्क (₹0) है। यदि आप उच्च गुणवत्ता वाला वाटरप्रूफ पीवीसी (PVC) प्लास्टिक कार्ड प्रिंट करवाते हैं, तो उसका सरकारी निर्धारित सेवा शुल्क मात्र ₹30 है।"),
    ("पीएम किसान (PM Kisan) बायोमेट्रिक ई-केवाईसी सीएससी पर कैसे होती है?", "जिन किसानों के आधार से मोबाइल नंबर लिंक नहीं है या ओटीपी नहीं आ रहा, वे सीएससी केंद्र पर बायोमेट्रिक फिंगरप्रिंट स्कैनर द्वारा 1 मिनट में अपनी अनिवार्य ई-केवाईसी करवा सकते हैं।"),
    ("क्या बिना बैंक शाखा जाए सीएससी से पैसे निकाले और जमा किए जा सकते हैं?", "हाँ, सीएससी के डीजीपे (DigiPay) और AePS (आधार इनेबल्ड पेमेंट सिस्टम) के जरिए नागरिक किसी भी बैंक खाते से आधार व अंगूठा लगाकर नकद निकासी, बैलेंस इन्क्वायरी, मिनी स्टेटमेंट और डीबीटी सरकारी सब्सिडी निकाल सकते हैं।"),
    ("यदि कोई सीएससी वीएलई सरकारी रेट से ज्यादा पैसे मांगे तो शिकायत कहाँ करें?", "अति-शुल्क (Overcharging) की स्थिति में सीएससी के राष्ट्रीय टोल-फ्री हेल्पलाइन नंबर 14599 पर कॉल करें या support.csc.gov.in पर VLE ID दर्ज करके शिकायत करें। आप ज़िला सीएससी प्रबंधक (District Manager) से भी संपर्क कर सकते हैं।"),
    ("क्या जाति, आय और निवास प्रमाण पत्र सीएससी से बनकर घर बैठे मिल जाते हैं?", "हाँ, ई-डिस्ट्रिक्ट पोर्टल के माध्यम से आवेदन होने के बाद संबंधित तहसीलदार/एसडीएम द्वारा डिजिटल हस्ताक्षर से प्रमाण पत्र जारी होता है जिसे सीएससी संचालक मूल शासकीय होलोग्राम व क्यूआर कोड सहित प्रिंट करके प्रदान करता है।"),
    ("क्या SarkariSewa India का सीएससी लोकेटर टूल उपयोग करने के लिए कोई चार्ज है?", "नहीं, SarkariSewa India पर पूरे भारत के 5,00,000+ सीएससी केंद्रों की लोकेशन, संपर्क डायरेक्टरी, रूट नेविगेशन और सरकारी गाइड सभी नागरिकों के लिए 100% निःशुल्क है।")
]

PROBLEMS_DATA = [
    ("1. वीएलई द्वारा निर्धारित शुल्क से अधिक पैसे मांगने पर समाधान (Overcharging Fix)", "हमेशा केंद्र पर लगा आधिकारिक शासकीय रेट चार्ट देखें। यदि संचालक अधिक राशि की मांग करे तो डिजिटल रसीद मांगें और सीएससी टोल-फ्री 14599 पर अथवा helpdesk@csc.gov.in पर VLE ID सहित शिकायत दर्ज करें।"),
    ("2. आधार बायोमेट्रिक फिंगरप्रिंट मैच न होने पर क्या करें? (Biometric Mismatch)", "मेहनतकश श्रमिकों या वृद्ध नागरिकों के फिंगरप्रिंट घिस जाने पर सीएससी संचालक से आइरिस (Iris - आंख) स्कैनर का उपयोग करने को कहें या आधार लिंक मोबाइल ओटीपी विकल्प चुनें।"),
    ("3. आधार-एटीएम (AePS) से पैसे कटे लेकिन नकद नहीं मिला (Transaction Failed)", "सर्वर टाइमआउट के कारण खाते से पैसे कटने पर घबराएं नहीं। NPCI नियमों के अनुसार 24 से 48 घंटे में राशि स्वतः खाते में रिवर्स हो जाती है। 72 घंटे में समाधान न होने पर बैंक में TRN नंबर सहित चार्ज-बैक फॉर्म जमा करें।"),
    ("4. प्रमाण पत्र आवेदन का स्टेटस 'Under Objection' या पेंडिंग (Application Delay)", "ई-डिस्ट्रिक्ट पोर्टल पर आवेदन संख्या से स्टेटस जांचें। यदि राजस्व लेखपाल/तहसीलदार द्वारा किसी दस्तावेज की कमी बताई गई है, तो सीएससी केंद्र पर जाकर संशोधित हलफनामा या दस्तावेज पुनः अपलोड कराएं।"),
    ("5. मैप पर दिया गया सीएससी केंद्र बंद या स्थान परिवर्तित मिलना (Inactive Center)", "यदि कोई पंजीकृत केंद्र पते पर न मिले, तो हमारे लोकेटर पर उसी पिनकोड के अन्य 2-3 सक्रिय VLE केंद्रों की सूची देखें और पोर्टल पर इनएक्टिव केंद्र की रिपोर्ट करें ताकि डेटा अपडेट हो सके।"),
    ("6. नया सीएससी केंद्र खोलने की ऑनलाइन प्रक्रिया (How to Start New CSC)", "नया VLE बनने हेतु न्यूनतम 10वीं पास और 18 वर्ष आयु होनी चाहिए। पहले tec.cscacademy.in पर Telecentre Entrepreneur Course (TEC) उत्तीर्ण करें, फिर register.csc.gov.in पर बैंकिंग मित्र व आधार विवरण सहित आवेदन करें।")
]

def build_csc_locator_html():
    canonical_url = "https://sarkarisewaindia.com/tools/csc-locator.html"
    
    # Build 36 State Cards
    state_cards_html = ""
    for s_name_en, s_name_hi, s_file, s_dist, s_col in STATES_DATA:
        state_cards_html += f"""
        <a href="../service/csc-locator/{s_file}" class="csc-state-card" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 18px 16px; text-decoration: none; color: var(--color-text); display: flex; flex-direction: column; justify-content: space-between; transition: all 0.2s ease; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 1.5rem;">🏛️</span>
              <span style="background: rgba(37,99,235,0.08); color: {s_col}; padding: 3px 8px; border-radius: 10px; font-size: 0.75rem; font-weight: 700;">{s_dist}</span>
            </div>
            <h4 style="margin: 0 0 4px 0; font-size: 1.05rem; color: var(--color-primary); font-weight: 700;">{s_name_hi}</h4>
            <p style="margin: 0; color: var(--color-muted); font-size: 0.85rem;">{s_name_en}</p>
          </div>
          <div style="margin-top: 14px; padding-top: 10px; border-top: 1px solid var(--color-border); font-size: 0.85rem; font-weight: 700; color: {s_col}; display: flex; align-items: center; justify-content: space-between;">
            <span>जिलेवार केंद्र देखें</span> <span>→</span>
          </div>
        </a>
        """

    # Build 10 FAQs & Schema
    faq_items_html = ""
    faq_schema_items = []
    for idx, (fq, fa) in enumerate(FAQS_DATA):
        is_open = 'open' if idx == 0 else ''
        faq_items_html += f"""
        <details class="faq-item" {is_open} style="margin-bottom: 12px; border: 1px solid var(--color-border); border-radius: 10px; background: var(--color-surface); overflow: hidden;">
          <summary style="padding: 16px 20px; font-weight: 700; color: var(--color-text); cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none; font-size: 1rem;">
            <span>❓ {fq}</span>
            <span style="font-size: 1.2rem; color: var(--color-primary);">▾</span>
          </summary>
          <div style="padding: 0 20px 16px 20px; color: var(--color-text); font-size: 0.95rem; line-height: 1.7; border-top: 1px solid var(--color-border); padding-top: 12px;">
            {fa}
          </div>
        </details>
        """
        faq_schema_items.append({
            "@type": "Question",
            "name": fq,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": fa
            }
        })

    # Build 6 Problems
    problems_html = ""
    colors = ["#2563eb", "#059669", "#d97706", "#7c3aed", "#dc2626", "#0284c7"]
    for idx, (p_title, p_desc) in enumerate(PROBLEMS_DATA):
        c = colors[idx % len(colors)]
        problems_html += f"""
        <div style="padding: 18px; border: 1px solid var(--color-border); border-left: 5px solid {c}; border-radius: 10px; background: rgba(37,99,235,0.02);">
          <h4 style="margin: 0 0 8px 0; color: var(--color-primary); font-size: 1.02rem;">{p_title}</h4>
          <p style="margin: 0; font-size: 0.92rem; color: var(--color-text); line-height: 1.65;">{p_desc}</p>
        </div>
        """

    schema_graph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebApplication",
                "name": "CSC Center Near Me Locator 2026: जन सेवा केंद्र डायरेक्टरी",
                "url": canonical_url,
                "applicationCategory": "GovernmentApplication",
                "operatingSystem": "All",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR"
                },
                "description": "भारत के सभी 36 राज्यों व केंद्र शासित प्रदेशों में 5,00,000+ सत्यापित सीएससी व जन सेवा केंद्रों का आधिकारिक लोकेटर व संपर्क गाइड।"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sarkarisewaindia.com/index.html" },
                    { "@type": "ListItem", "position": 2, "name": "Citizen Tools", "item": "https://sarkarisewaindia.com/tools/index.html" },
                    { "@type": "ListItem", "position": 3, "name": "CSC Locator 2026", "item": canonical_url }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": faq_schema_items
            }
        ]
    }

    schema_json = json.dumps(schema_graph, ensure_ascii=False, indent=2)

    return f"""<!DOCTYPE html>
<html lang="hi" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="max-image-preview:large, index, follow">
  <title>सीएससी केंद्र लोकेटर 2026: CSC Center Near Me, जन सेवा केंद्र खोजें व सरकारी रेट लिस्ट</title>
  <meta name="description" content="अपने गांव, शहर या पिनकोड का नजदीकी CSC / जन सेवा केंद्र खोजें। आधार e-KYC, पैन कार्ड, आयुष्मान भारत, पीएम किसान, जाति/आय प्रमाण पत्र, आधिकारिक सरकारी रेट लिस्ट व VLE संपर्क विवरण।">
  <link rel="canonical" href="{canonical_url}">
  
  <meta property="og:title" content="सीएससी केंद्र लोकेटर 2026: Nearest CSC & Jan Seva Kendra Finder">
  <meta property="og:description" content="भारत के सभी 36 राज्यों के 5,00,000+ अधिकृत सीएससी केंद्रों की लाइव लोकेशन, उपलब्ध 400+ सेवाएं, सरकारी शुल्क व VLE डायरेक्टरी।">
  <meta property="og:type" content="website">
  <meta property="og:url" content="{canonical_url}">
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/banner.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="CSC Locator 2026: Find Nearest Jan Seva Kendra in India">
  <meta name="twitter:description" content="Locate verified CSC Jan Seva Kendras by State, District or PIN code. Official government rates, services list and VLE support.">
  <meta name="twitter:image" content="https://sarkarisewaindia.com/assets/img/banner.png">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/module9.css">
  <link rel="stylesheet" href="../assets/css/module16.css">
  <link rel="stylesheet" href="../assets/css/module18.css">
  <link rel="stylesheet" href="../assets/css/share-widget.css">

  <style>
    /* Clean Bilingual Language Isolation */
    html[lang="hi"] [data-lang-show="en"] {{ display: none !important; }}
    html[lang="en"] [data-lang-show="hi"] {{ display: none !important; }}
    html[lang="hi"] span[data-lang-show="hi"] {{ display: inline !important; }}
    html[lang="en"] span[data-lang-show="en"] {{ display: inline !important; }}
    html[lang="hi"] div[data-lang-show="hi"], html[lang="hi"] p[data-lang-show="hi"], html[lang="hi"] h1[data-lang-show="hi"], html[lang="hi"] h2[data-lang-show="hi"], html[lang="hi"] h3[data-lang-show="hi"] {{ display: block !important; }}
    html[lang="en"] div[data-lang-show="en"], html[lang="en"] p[data-lang-show="en"], html[lang="en"] h1[data-lang-show="en"], html[lang="en"] h2[data-lang-show="en"], html[lang="en"] h3[data-lang-show="en"] {{ display: block !important; }}

    .csc-hero-banner {{
      background: linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(5,150,105,0.08) 100%);
      border: 1px solid var(--color-border);
      border-radius: 16px;
      padding: 36px 24px;
      text-align: center;
      margin: 24px 0;
    }}
    .csc-search-panel {{
      background: var(--color-surface);
      border: 2px solid var(--color-primary);
      border-radius: 14px;
      padding: 24px;
      margin: 24px auto 0 auto;
      max-width: 860px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.06);
      text-align: left;
    }}
    .csc-input-field {{
      width: 100%;
      padding: 12px 14px;
      border: 1px solid var(--color-border);
      border-radius: 8px;
      background: var(--color-surface);
      color: var(--color-text);
      font-size: 0.98rem;
      font-weight: 500;
      box-sizing: border-box;
      outline: none;
      transition: border-color 0.2s ease;
    }}
    .csc-input-field:focus {{
      border-color: var(--color-primary);
    }}
    .csc-btn-primary {{
      background: var(--color-primary);
      color: #ffffff !important;
      font-weight: 700;
      padding: 12px 20px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-shadow: 0 4px 12px rgba(37,99,235,0.25);
      transition: all 0.2s ease;
    }}
    .csc-btn-primary:hover {{
      opacity: 0.95;
      transform: translateY(-1px);
    }}
    .csc-btn-outline {{
      background: var(--color-surface);
      color: var(--color-primary) !important;
      border: 2px solid var(--color-primary);
      font-weight: 700;
      padding: 12px 20px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: all 0.2s ease;
    }}
    .csc-btn-outline:hover {{
      background: rgba(37,99,235,0.06);
    }}
    .csc-state-card:hover {{
      border-color: var(--color-primary) !important;
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.06) !important;
    }}

    /* Dark Mode Contrast Safety */
    [data-theme="dark"] .csc-search-panel,
    [data-theme="dark"] .csc-state-card,
    [data-theme="dark"] .faq-item,
    [data-theme="dark"] .service-box {{
      background: #101D2C !important;
      border-color: #223244 !important;
      color: #E8EDF3 !important;
    }}
  </style>

  <script type="application/ld+json">
  {schema_json}
  </script>
</head>
<body class="v2-template" data-slug="csc-locator">
  <script>window.SS_ROOT = "../";</script>
  
  <div id="site-header">
{get_baked_header("../")}
  </div>

  <main class="container" style="max-width: 1100px; margin: 0 auto; padding: 16px;">
    
    <!-- Breadcrumb -->
    <nav class="breadcrumb" aria-label="Breadcrumb" style="margin-top: 14px; font-size: 0.9rem; color: var(--color-muted);">
      <a href="../index.html" style="color: var(--color-primary); text-decoration: none;">Home</a>
      <span class="sep">/</span>
      <a href="index.html" style="color: var(--color-primary); text-decoration: none;">Citizen Tools</a>
      <span class="sep">/</span>
      <span class="current" style="color: var(--color-text);">CSC & Jan Seva Kendra Locator</span>
    </nav>

    <!-- Master Hero & Live Search Box -->
    <div class="csc-hero-banner">
      <span style="background: var(--color-primary); color: #ffffff; padding: 4px 14px; border-radius: 20px; font-weight: 700; font-size: 0.85rem;">
        ⚡ डिजिटल इंडिया: 5,00,000+ सत्यापित सीएससी केंद्र डायरेक्टरी
      </span>
      <h1 style="color: var(--color-text); font-size: 2.2rem; margin: 14px 0 10px 0; line-height: 1.3;">
        सीएससी केंद्र लोकेटर 2026: CSC Center Near Me & Jan Seva Kendra
      </h1>
      <p style="color: var(--color-muted); font-size: 1.05rem; max-width: 780px; margin: 0 auto 20px auto; line-height: 1.6;">
        अपने राज्य, ज़िले अथवा 6-अंकों के पिनकोड से निकटतम अधिकृत कॉमन सर्विस सेंटर (CSC) व जन सेवा केंद्र खोजें। आधार, पैन कार्ड, आयुष्मान भारत, पीएम किसान व 400+ सरकारी योजनाओं की प्रमाणित सेवाएं।
      </p>

      <!-- 4 Quick Stats Badges -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; max-width: 860px; margin: 0 auto 24px auto;">
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 12px; text-align: center;">
          <div style="font-size: 1.3rem; font-weight: 800; color: var(--color-primary);">5,00,000+</div>
          <div style="font-size: 0.82rem; color: var(--color-muted);">सत्यापित CSC केंद्र</div>
        </div>
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 12px; text-align: center;">
          <div style="font-size: 1.3rem; font-weight: 800; color: #059669;">400+</div>
          <div style="font-size: 0.82rem; color: var(--color-muted);">सरकारी (G2C) सेवाएं</div>
        </div>
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 12px; text-align: center;">
          <div style="font-size: 1.3rem; font-weight: 800; color: #d97706;">36 State/UT</div>
          <div style="font-size: 0.82rem; color: var(--color-muted);">अखिल भारतीय कवरेज</div>
        </div>
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 12px; text-align: center;">
          <div style="font-size: 1.3rem; font-weight: 800; color: #7c3aed;">100% Free</div>
          <div style="font-size: 0.82rem; color: var(--color-muted);">लाइव नेविगेशन टूल</div>
        </div>
      </div>

      <!-- Live Search Engine Panel -->
      <div class="csc-search-panel">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
          <div>
            <label for="state-select" style="display: block; font-weight: 700; margin-bottom: 6px; font-size: 0.92rem; color: var(--color-text);">
              🏛️ राज्य चुनें (Select State)
            </label>
            <select id="state-select" class="csc-input-field" onchange="updateDistricts()">
              <option value="">-- सभी राज्य (All States) --</option>
              <option value="ANDAMAN AND NICOBAR ISLANDS">Andaman And Nicobar Islands</option>
              <option value="ANDHRA PRADESH">Andhra Pradesh</option>
              <option value="ARUNACHAL PRADESH">Arunachal Pradesh</option>
              <option value="ASSAM">Assam</option>
              <option value="BIHAR">Bihar</option>
              <option value="CHANDIGARH">Chandigarh</option>
              <option value="CHHATTISGARH">Chhattisgarh</option>
              <option value="DADRA AND NAGAR HAVELI AND DAMAN AND DIU">Dadra & Nagar Haveli</option>
              <option value="DELHI">Delhi (NCT)</option>
              <option value="GOA">Goa</option>
              <option value="GUJARAT">Gujarat</option>
              <option value="HARYANA">Haryana</option>
              <option value="HIMACHAL PRADESH">Himachal Pradesh</option>
              <option value="JAMMU AND KASHMIR">Jammu And Kashmir</option>
              <option value="JHARKHAND">Jharkhand</option>
              <option value="KARNATAKA">Karnataka</option>
              <option value="KERALA">Kerala</option>
              <option value="LADAKH">Ladakh</option>
              <option value="LAKSHADWEEP">Lakshadweep</option>
              <option value="MADHYA PRADESH">Madhya Pradesh</option>
              <option value="MAHARASHTRA">Maharashtra</option>
              <option value="MANIPUR">Manipur</option>
              <option value="MEGHALAYA">Meghalaya</option>
              <option value="MIZORAM">Mizoram</option>
              <option value="NAGALAND">Nagaland</option>
              <option value="ODISHA">Odisha</option>
              <option value="PUDUCHERRY">Puducherry</option>
              <option value="PUNJAB">Punjab</option>
              <option value="RAJASTHAN">Rajasthan</option>
              <option value="SIKKIM">Sikkim</option>
              <option value="TAMIL NADU">Tamil Nadu</option>
              <option value="TELANGANA">Telangana</option>
              <option value="TRIPURA">Tripura</option>
              <option value="UTTAR PRADESH">Uttar Pradesh</option>
              <option value="UTTARAKHAND">Uttarakhand</option>
              <option value="WEST BENGAL">West Bengal</option>
            </select>
          </div>

          <div>
            <label for="district-select" style="display: block; font-weight: 700; margin-bottom: 6px; font-size: 0.92rem; color: var(--color-text);">
              📍 ज़िला चुनें (Select District)
            </label>
            <select id="district-select" class="csc-input-field">
              <option value="">-- पहले राज्य चुनें --</option>
            </select>
          </div>

          <div>
            <label for="pincode-input" style="display: block; font-weight: 700; margin-bottom: 6px; font-size: 0.92rem; color: var(--color-text);">
              📮 पिनकोड (6-Digit PIN Code)
            </label>
            <input type="text" id="pincode-input" class="csc-input-field" placeholder="उदा. 400001, 110001, 226001" maxlength="6">
          </div>
        </div>

        <div style="margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
          <button id="btn-search-csc" class="csc-btn-primary" style="flex: 1; min-width: 200px;">
            🔍 CSC केंद्र खोजें (Search Live)
          </button>
          <button id="btn-use-location" class="csc-btn-outline" style="flex: 1; min-width: 200px;">
            📍 मेरी लाइव लोकेशन इस्तेमाल करें (GPS)
          </button>
        </div>
      </div>
    </div>

    <!-- Live Search Results Container -->
    <section id="csc-results-section" style="margin: 32px 0;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--color-border); padding-bottom: 8px; margin-bottom: 20px;">
        <h2 style="font-size: 1.5rem; color: var(--color-primary); margin: 0;">
          🔍 सीएससी केंद्र खोज परिणाम (<span id="results-count">50</span>)
        </h2>
        <span style="font-size: 0.85rem; color: var(--color-muted);">लाइव डेटाबेस से सत्यापित</span>
      </div>
      <div id="results-container" class="results-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px;">
        <div style="text-align:center; padding: 40px; color: var(--color-muted); grid-column: 1 / -1;">
          नजदीकी सीएससी केंद्र लोड हो रहे हैं...
        </div>
      </div>
    </section>

    <!-- Master Section: 36 States & UTs Directory Grid -->
    <section style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 28px; margin: 36px 0;">
      <div style="margin-bottom: 20px;">
        <span style="background: rgba(37,99,235,0.08); color: var(--color-primary); padding: 3px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">अखिल भारतीय डायरेक्टरी</span>
        <h2 style="color: var(--color-primary); font-size: 1.6rem; margin: 8px 0 6px 0;">
          🗺️ सभी 36 राज्यों व केंद्र शासित प्रदेशों के सीएससी केंद्र (Browse by State)
        </h2>
        <p style="margin: 0; color: var(--color-muted); font-size: 0.95rem;">
          अपने राज्य पर क्लिक करें और ज़िला, तहसील, ब्लॉक व ग्राम पंचायत स्तर के अधिकृत VLE केंद्रों की सूची व संपर्क नंबर देखें:
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px;">
        {state_cards_html}
      </div>
    </section>

    <!-- Master Section: 12 Essential Services Available at CSC -->
    <section style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 28px; margin: 36px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-top: 0; margin-bottom: 8px;">
        🏛️ सीएससी / जन सेवा केंद्र पर मिलने वाली 12 प्रमुख नागरिक सेवाएं
      </h2>
      <p style="color: var(--color-muted); font-size: 0.95rem; margin-top: 0; margin-bottom: 24px;">
        कॉमन सर्विस सेंटर (CSC 2.0) डिजिटल इंडिया का आधिकारिक डिलीवरी पॉइंट है जहां निम्नलिखित सेवाएं न्यूनतम समय में मिलती हैं:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px;">
        <div class="service-box" style="padding: 18px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">1. 🆔 आधार सेवाएं (Aadhaar Seva Kendra)</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text); line-height: 1.6;">नया बाल आधार नामांकन (0-5 वर्ष निःशुल्क), डेमोग्राफिक नाम/पता/जन्मतिथि सुधार, बायोमेट्रिक अपडेट और पीवीसी (PVC) आधार कार्ड प्रिंटिंग।</p>
        </div>

        <div class="service-box" style="padding: 18px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">2. 💳 पैन कार्ड सेवाएं (PAN Card Online)</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text); line-height: 1.6;">NSDL व UTIITSL के माध्यम से नया पैन कार्ड (Form 49A), पैन-आधार लिंकिंग, खोए हुए पैन का रिप्रिंट और नाम व पिता के नाम में संशोधन।</p>
        </div>

        <div class="service-box" style="padding: 18px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">3. 🏥 आयुष्मान भारत कार्ड (PM-JAY Golden Card)</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text); line-height: 1.6;">प्रति परिवार प्रति वर्ष ₹5 लाख का मुफ़्त स्वास्थ्य बीमा कार्ड, परिवार के नए सदस्यों का नाम जोड़ना, बायोमेट्रिक ई-केवाईसी और कार्ड डाउनलोड।</p>
        </div>

        <div class="service-box" style="padding: 18px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">4. 🌾 पीएम किसान सम्मान निधि (PM Kisan Samman)</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text); line-height: 1.6;">सालाना ₹6,000 किस्त हेतु अनिवार्य फिंगरप्रिंट e-KYC, नए किसान पंजीकरण, लैंड सीडिंग स्टेटस सुधार और बैंक डीबीटी खाता लिंकिंग।</p>
        </div>

        <div class="service-box" style="padding: 18px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">5. 👷 ई-श्रम कार्ड (e-Shram Card Registration)</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text); line-height: 1.6;">असंगठित क्षेत्र के कामगारों, निर्माण मजदूरों, रेहड़ी-पटरी वालों का राष्ट्रीय डेटाबेस पंजीकरण और ₹2 लाख का मुफ़्त दुर्घटना बीमा कार्ड।</p>
        </div>

        <div class="service-box" style="padding: 18px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">6. 📜 आय, जाति व निवास प्रमाण पत्र (e-District)</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text); line-height: 1.6;">राज्य ई-डिस्ट्रिक्ट पोर्टल द्वारा आय प्रमाण पत्र, जाति प्रमाण पत्र (SC/ST/OBC), मूल निवास (Domicile) और आर्थिक रूप से कमजोर वर्ग (EWS) प्रमाण पत्र।</p>
        </div>

        <div class="service-box" style="padding: 18px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">7. 🌾 भूलेख व भूमि अभिलेख (Land Records / 7/12)</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text); line-height: 1.6;">महाराष्ट्र 7/12 Satbara उतारा, यूपी खसरा-खतौनी नकल, बिहार जमाबंदी, राजस्थान अपना खाता व डिजिटल हस्ताक्षरित भू-नक्शा प्रिंट।</p>
        </div>

        <div class="service-box" style="padding: 18px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">8. 🍚 राशन कार्ड सेवाएं (NFSA Ration Card)</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text); line-height: 1.6;">नए राशन कार्ड हेतु आवेदन, परिवार के नए सदस्य का नाम जोड़ना, राशन कार्ड सरेंडर या ट्रांसफर और डिजिटल राशन कार्ड डाउनलोड।</p>
        </div>

        <div class="service-box" style="padding: 18px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">9. 🏧 बैंकिंग, डीजीपे व डीबीटी निकासी (AePS Banking)</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text); line-height: 1.6;">आधार इनेबल्ड पेमेंट सिस्टम (AePS) से किसी भी बैंक खाते से फिंगरप्रिंट लगाकर नकद निकासी, बैलेंस चेक व वृद्धावस्था पेंशन का भुगतान।</p>
        </div>

        <div class="service-box" style="padding: 18px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">10. 💡 बिजली बिल, पानी व गैस बुकिंग (BBPS Utility)</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text); line-height: 1.6;">भारत बिल पे सिस्टम (BBPS) के तहत सभी राज्यों के विद्युत बिलों का तुरंत ऑनलाइन भुगतान, रसीद प्रिंटिंग और एलपीजी सिलेंडर रिफिल बुकिंग।</p>
        </div>

        <div class="service-box" style="padding: 18px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">11. 🚗 वाहन व सारथी सेवाएं (Parivahan Sarathi/Vahan)</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text); line-height: 1.6;">लर्नर ड्राइविंग लाइसेंस (LLR) आवेदन, आरटीओ टेस्ट स्लॉट बुकिंग, ड्राइविंग लाइसेंस नवीनीकरण, वाहन आरसी ट्रांसफर व रोड टैक्स भुगतान।</p>
        </div>

        <div class="service-box" style="padding: 18px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">12. ✈️ पासपोर्ट व वोटर आईडी सेवाएं (Passport & Election)</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text); line-height: 1.6;">पासपोर्ट सेवा केंद्र (PSK) अपॉइंटमेंट, नया वोटर आईडी कार्ड (Form 6), वोटर कार्ड सुधार (Form 8) और रंगीन पीवीसी वोटर कार्ड प्रिंट।</p>
        </div>
      </div>
    </section>

    <!-- Master Section: Official Government Fee Chart Table -->
    <section style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 28px; margin: 36px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-top: 0; margin-bottom: 8px;">
        💳 आधिकारिक सरकारी रेट लिस्ट (CSC Official Government Rate Chart)
      </h2>
      <p style="color: var(--color-muted); font-size: 0.95rem; margin-top: 0; margin-bottom: 20px;">
        नागरिकों की सुविधा व पारदर्शिता हेतु भारत सरकार एवं राज्य सरकारों द्वारा निर्धारित आधिकारिक सेवा शुल्क तालिका:
      </p>

      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; text-align: left;">
          <thead>
            <tr style="background: rgba(37,99,235,0.08); border-bottom: 2px solid var(--color-border);">
              <th style="padding: 12px 14px; color: var(--color-primary);">सेवा का नाम (Service Name)</th>
              <th style="padding: 12px 14px; color: var(--color-primary);">सरकारी शुल्क (Govt Fee)</th>
              <th style="padding: 12px 14px; color: var(--color-primary);">अधिकतम मान्य शुल्क (Max Fee)</th>
              <th style="padding: 12px 14px; color: var(--color-primary);">स्थिति (Status)</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 14px; font-weight: 600;">नया आधार नामांकन (New Aadhaar 0-5 Years)</td><td style="padding: 10px 14px; color: #059669; font-weight: 700;">₹0/- (निःशुल्क)</td><td style="padding: 10px 14px; font-weight: 700; color: #059669;">₹0/-</td><td style="padding: 10px 14px;"><span style="background: rgba(5,150,105,0.1); color: #059669; padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 0.8rem;">100% FREE</span></td></tr>
            <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 14px; font-weight: 600;">आधार डेमोग्राफिक अपडेट (Aadhaar Demographic)</td><td style="padding: 10px 14px;">₹50/-</td><td style="padding: 10px 14px; font-weight: 700; color: var(--color-primary);">₹50/-</td><td style="padding: 10px 14px;"><span style="background: rgba(37,99,235,0.1); color: #2563eb; padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 0.8rem;">FIXED RATE</span></td></tr>
            <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 14px; font-weight: 600;">आधार बायोमेट्रिक अपडेट (Aadhaar Biometric)</td><td style="padding: 10px 14px;">₹100/-</td><td style="padding: 10px 14px; font-weight: 700; color: var(--color-primary);">₹100/-</td><td style="padding: 10px 14px;"><span style="background: rgba(37,99,235,0.1); color: #2563eb; padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 0.8rem;">FIXED RATE</span></td></tr>
            <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 14px; font-weight: 600;">आयुष्मान भारत गोल्डन कार्ड (PM-JAY Registration)</td><td style="padding: 10px 14px; color: #059669; font-weight: 700;">₹0/- (निःशुल्क)</td><td style="padding: 10px 14px; font-weight: 700; color: #059669;">₹0/- (PVC: ₹30)</td><td style="padding: 10px 14px;"><span style="background: rgba(5,150,105,0.1); color: #059669; padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 0.8rem;">100% FREE</span></td></tr>
            <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 14px; font-weight: 600;">पीएम किसान बायोमेट्रिक ई-केवाईसी (PM Kisan eKYC)</td><td style="padding: 10px 14px;">₹15/-</td><td style="padding: 10px 14px; font-weight: 700; color: var(--color-primary);">₹15/-</td><td style="padding: 10px 14px;"><span style="background: rgba(37,99,235,0.1); color: #2563eb; padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 0.8rem;">FIXED RATE</span></td></tr>
            <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 14px; font-weight: 600;">ई-श्रम कार्ड पंजीकरण (e-Shram Registration)</td><td style="padding: 10px 14px; color: #059669; font-weight: 700;">₹0/- (निःशुल्क)</td><td style="padding: 10px 14px; font-weight: 700; color: #059669;">₹0/-</td><td style="padding: 10px 14px;"><span style="background: rgba(5,150,105,0.1); color: #059669; padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 0.8rem;">100% FREE</span></td></tr>
            <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 14px; font-weight: 600;">नया पैन कार्ड आवेदन (New PAN Form 49A)</td><td style="padding: 10px 14px;">₹107/-</td><td style="padding: 10px 14px; font-weight: 700; color: var(--color-primary);">₹107 + ₹30 Service</td><td style="padding: 10px 14px;"><span style="background: rgba(37,99,235,0.1); color: #2563eb; padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 0.8rem;">GOVT STANDARD</span></td></tr>
            <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 14px; font-weight: 600;">आय/जाति/निवास प्रमाण पत्र (e-District Service)</td><td style="padding: 10px 14px;">₹15 – ₹30/-</td><td style="padding: 10px 14px; font-weight: 700; color: var(--color-primary);">₹30 – ₹50/-</td><td style="padding: 10px 14px;"><span style="background: rgba(37,99,235,0.1); color: #2563eb; padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 0.8rem;">STATE TARIFF</span></td></tr>
            <tr><td style="padding: 10px 14px; font-weight: 600;">बिजली/पानी बिल भुगतान (Electricity BBPS)</td><td style="padding: 10px 14px; color: #059669; font-weight: 700;">₹0/- (बिल राशि)</td><td style="padding: 10px 14px; font-weight: 700; color: #059669;">₹0 Extra</td><td style="padding: 10px 14px;"><span style="background: rgba(5,150,105,0.1); color: #059669; padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 0.8rem;">100% FREE</span></td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Master Section: 6 Real-World Problem Solvers -->
    <section style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 28px; margin: 36px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-top: 0; margin-bottom: 8px;">
        🛠️ सीएससी नागरिक सहायता केंद्र: 6 प्रमुख समस्याएं व व्यावहारिक समाधान
      </h2>
      <p style="color: var(--color-muted); font-size: 0.95rem; margin-top: 0; margin-bottom: 20px;">
        सीएससी केंद्र पर जाने वाले नागरिकों और संचालकों के लिए व्यावहारिक कानूनी व तकनीकी समाधान:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        {problems_html}
      </div>
    </section>

    <!-- Master Section: 10 Bilingual FAQs -->
    <section style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 28px; margin: 36px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-top: 0; margin-bottom: 8px;">
        ❓ अक्सर पूछे जाने वाले प्रश्न (CSC Locator FAQs)
      </h2>
      <p style="color: var(--color-muted); font-size: 0.95rem; margin-top: 0; margin-bottom: 20px;">
        कॉमन सर्विस सेंटर, जन सेवा केंद्र और डिजिटल सेवाओं से जुड़े मुख्य प्रश्नों के उत्तर:
      </p>

      <div>
        {faq_items_html}
      </div>
    </section>

    <!-- Master Section: Useful Citizen Tools Grid -->
    <section style="margin: 36px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 8px;">
        🧮 नागरिकों के लिए अन्य उपयोगी मुफ्त टूल्स व गाइड
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
        <a href="eligibility-checker.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
          <div style="font-size: 1.6rem;">🎯 Scheme Engine</div>
          <div style="font-weight: 700; color: var(--color-primary); margin-top: 4px;">पात्रता जांच कैलकुलेटर</div>
          <p style="font-size: 0.82rem; color: var(--color-muted); margin: 4px 0 0 0;">अपनी उम्र व आय से योग्य योजनाएं खोजें</p>
        </a>
        <a href="document-checklist.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
          <div style="font-size: 1.6rem;">📋 Doc Checklist</div>
          <div style="font-weight: 700; color: var(--color-primary); margin-top: 4px;">दस्तावेज चेकलिस्ट टूल</div>
          <p style="font-size: 0.82rem; color: var(--color-muted); margin: 4px 0 0 0;">फॉर्म भरने से पहले जरूरी कागजात देखें</p>
        </a>
        <a href="status-troubleshooter.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
          <div style="font-size: 1.6rem;">🔍 Status Troubleshooter</div>
          <div style="font-weight: 700; color: var(--color-primary); margin-top: 4px;">आवेदन स्टेटस समाधान</div>
          <p style="font-size: 0.82rem; color: var(--color-muted); margin: 4px 0 0 0;">अटका हुआ फॉर्म व पेंडिंग स्टेटस ठीक करें</p>
        </a>
        <a href="photo-resizer.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
          <div style="font-size: 1.6rem;">🖼️ Photo Resizer</div>
          <div style="font-weight: 700; color: var(--color-primary); margin-top: 4px;">फोटो व साइन रीसाइजर</div>
          <p style="font-size: 0.82rem; color: var(--color-muted); margin: 4px 0 0 0;">20-50 KB में सरकारी फॉर्म फोटो तैयार करें</p>
        </a>
      </div>
    </section>

    <!-- Master Section: Subscribe Widget -->
    <div style="margin: 32px 0;">
      <div id="subscribe-widget" data-service-id="csc-locator"></div>
    </div>

    <!-- Master Section: VIP Telegram Banner -->
    <div style="background: linear-gradient(135deg, #0088cc 0%, #005f8f 100%); border-radius: 14px; padding: 24px 28px; color: #ffffff; margin: 32px 0; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
      <div>
        <h3 style="margin: 0 0 6px 0; font-size: 1.3rem; color: #ffffff;">✈️ SarkariSewa VIP Telegram चैनल से जुड़ें</h3>
        <p style="margin: 0; font-size: 0.95rem; opacity: 0.95;">सभी नई सरकारी योजनाओं, सीएससी अपडेट्स और सरकारी फॉर्मों की त्वरित सूचना सीधे अपने फोन पर पाएं।</p>
      </div>
      <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener" style="background: #ffffff; color: #0088cc; font-weight: 800; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">
        अभी जॉइन करें (निःशुल्क) ↗
      </a>
    </div>

  </main>

  <div id="site-footer">
{get_baked_footer("../")}
  </div>

  <!-- Universal Scripts -->
  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/consent.js"></script>
  <script src="../assets/js/i18n-helper.js"></script>
  <script src="../assets/js/supabase-client.js"></script>
  <script src="../assets/js/csc-locator.js"></script>
  <script src="../assets/js/subscribe.js"></script>

  <!-- State & District Dynamic Auto-Populator -->
  <script>
    const stateDistricts = {{
      "ANDAMAN AND NICOBAR ISLANDS": ["Nicobars", "North and Middle Andaman", "South Andaman"],
      "ANDHRA PRADESH": ["Alluri Sitharama Raju", "Anakapalli", "Ananthapuramu", "Annamayya", "Bapatla", "Chittoor", "Dr. B.R. Ambedkar Konaseema", "East Godavari", "Eluru", "Guntur", "Kakinada", "Krishna", "Kurnool", "Nandyal", "NTR", "Palnadu", "Parvathipuram Manyam", "Prakasam", "Sri Potti Sriramulu Nellore", "Sri Sathya Sai", "Srikakulam", "Tirupati", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"],
      "ARUNACHAL PRADESH": ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kamle", "Kra Daadi", "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai", "Pakke Kessang", "Papum Pare", "Shi Yomi", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang", "Itanagar"],
      "ASSAM": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"],
      "BIHAR": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
      "CHANDIGARH": ["Chandigarh"],
      "CHHATTISGARH": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurela Pendra Marwahi", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Khairagarh", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Manendragarh", "Mohla Manpur", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sarangarh Bilaigarh", "Shakti", "Sukma", "Surajpur", "Surguja"],
      "DADRA AND NAGAR HAVELI AND DAMAN AND DIU": ["Daman", "Diu", "Dadra and Nagar Haveli"],
      "DELHI": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"],
      "GOA": ["North Goa", "South Goa"],
      "GUJARAT": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"],
      "HARYANA": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
      "HIMACHAL PRADESH": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
      "JAMMU AND KASHMIR": ["Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"],
      "JHARKHAND": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"],
      "KARNATAKA": ["Bagalkote", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagara", "Chikkaballapura", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayanagara", "Vijayapura", "Yadgir"],
      "KERALA": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
      "LADAKH": ["Kargil", "Leh"],
      "LAKSHADWEEP": ["Lakshadweep"],
      "MADHYA PRADESH": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Maihar", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Niwari", "Pandhurna", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
      "MAHARASHTRA": ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
      "MANIPUR": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
      "MEGHALAYA": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "Eastern West Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
      "MIZORAM": ["Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saitual", "Serchhip", "Siaha"],
      "NAGALAND": ["Chumoukedima", "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Niuland", "Noklak", "Peren", "Phek", "Shamator", "Tseminyu", "Tuensang", "Wokha", "Zunheboto"],
      "ODISHA": ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"],
      "PUDUCHERRY": ["Karaikal", "Mahe", "Puducherry", "Yanam"],
      "PUNJAB": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Malerkotla", "Mansa", "Moga", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Tarn Taran"],
      "RAJASTHAN": ["Ajmer", "Alwar", "Anupgarh", "Balotra", "Banswara", "Baran", "Barmer", "Beawar", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Deeg", "Didwana-Kuchaman", "Dholpur", "Dudu", "Dungarpur", "Ganganagar", "Gangapurcity", "Hanumangarh", "Jaipur", "Jaipur Rural", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Jodhpur Rural", "Karauli", "Kekri", "Khairthal-Tijara", "Kota", "Kotputli-Behror", "Nagaur", "Neem Ka Thana", "Pali", "Phalodi", "Pratapgarh", "Rajsamand", "Salumbar", "Sanchore", "Sawai Madhopur", "Shahpura", "Sikar", "Sirohi", "Tonk", "Udaipur"],
      "SIKKIM": ["Gangtok", "Gyalshing", "Pakyong", "Namchi", "Mangan", "Soreng"],
      "TAMIL NADU": ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
      "TELANGANA": ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Kumuram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal", "Hanamkonda", "Yadadri Bhuvanagiri"],
      "TRIPURA": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
      "UTTAR PRADESH": ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shrawasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
      "UTTARAKHAND": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
      "WEST BENGAL": ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"]
    }};

    function updateDistricts() {{
      const stateSelect = document.getElementById("state-select");
      const districtSelect = document.getElementById("district-select");
      const state = stateSelect.value;
      
      districtSelect.innerHTML = '<option value="">-- सभी ज़िले (All Districts) --</option>';
      if (state && stateDistricts[state]) {{
        stateDistricts[state].forEach(d => {{
          districtSelect.innerHTML += `<option value="${{d}}">${{d}}</option>`;
        }});
      }}
    }}
  </script>
</body>
</html>
"""

def main():
    print(f"Generating master upgrade for tools/csc-locator.html...")
    html_content = build_csc_locator_html()
    with open(TARGET_FILE, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print(f"SUCCESS: Successfully upgraded {TARGET_FILE} ({len(html_content)} bytes)")

if __name__ == '__main__':
    main()
