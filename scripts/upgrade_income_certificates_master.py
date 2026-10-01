import os
import glob
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Import state metadata from test_state_metadata
from test_state_metadata import STATE_METADATA

print("Upgrading All State-wise Income Certificate Pages with robust theme-adaptive CSS classes...")

# Read base header and footer partials
with open('partials/header.html', 'r', encoding='utf-8', errors='ignore') as fp:
    raw_header = fp.read()
with open('partials/footer.html', 'r', encoding='utf-8', errors='ignore') as fp:
    raw_footer = fp.read()

def generate_income_page_content(state_key, meta, is_states_folder=False):
    root_rel = "../"
    code = meta["code"]
    state_en = meta["nameEn"]
    state_hi = meta["nameHi"]
    portal_name = meta["portalName"]
    portal_url = meta["portalUrl"]
    fee = meta["fee"]
    timeline = meta["timeline"]
    validity = meta["validity"]
    helpline = meta["helpline"]
    dept = meta["dept"]
    auth_officer = meta["authOfficer"]
    
    # Target canonical URL
    if is_states_folder:
        page_slug = f"states/{state_key}-income-certificate.html"
        service_rel_prefix = "../service/"
    else:
        page_slug = f"service/{code}-income-certificate.html"
        service_rel_prefix = ""
        
    canonical_url = f"https://sarkarisewaindia.com/{page_slug}"
    seo_title = f"{state_en} Income Certificate 2026: Apply Online | SarkariSewa India"
    seo_desc = f"{state_en} ({state_hi}) आय प्रमाण पत्र 2026: {portal_name} पर घर बैठे ऑनलाइन आवेदन करें। पात्रता, शुल्क {fee}, आवश्यक दस्तावेज़ और स्टेटस चेक।"

    # 6 Real Life Practical Problems and Solutions
    faqs_data = [
        {
            "q_en": f"Why is my {state_en} Income Certificate pending at Lekhpal / Revenue Inspector level?",
            "q_hi": f"{state_hi} आय प्रमाण पत्र लेखपाल / राजस्व निरीक्षक (Patwari/RI) स्तर पर लंबित क्यों रहता है और इसे कैसे ठीक करें?",
            "a_en": f"In {state_en}, revenue field inquiries are allocated to the local Patwari/Lekhpal. If your application exceeds {timeline}, log into {portal_name} to view the assigned officer's contact details, visit the Tehsil e-District facilitation desk with your Application Reference Number, or register a fast-track escalation on {state_en} CM Helpline ({helpline}).",
            "a_hi": f"{state_hi} में आवेदन जमा होने के बाद क्षेत्रीय लेखपाल/पटवारी द्वारा भौतिक या स्थलीय सत्यापन किया जाता है। यदि {timeline} से अधिक समय हो गया है, तो {portal_name} पर स्टेटस चेक करके संबंधित लेखपाल का विवरण प्राप्त करें, अथवा अपनी आवेदन रसीद लेकर तहसील के लोक सेवा केंद्र / समाधान दिवस में जाएं या {state_en} सीएम हेल्पलाइन ({helpline}) पर शिकायत दर्ज कराएं।"
        },
        {
            "q_en": "What should I do if my Salary Slip income does not match the Self-Declaration affidavit?",
            "q_hi": "वेतन पर्ची (Salary Slip) और स्वप्रमाणित घोषणा पत्र की आय में अंतर होने पर क्या करें?",
            "a_en": f"For salaried individuals, gross annual salary from Form 16 / Salary Slip must be declared. For farmers and non-salaried citizens in {state_en}, submit a standard notarized income self-declaration with accurate revenue land and occupational income breakdown to prevent rejection.",
            "a_hi": "वेतनभोगी कर्मचारी अपने Form 16 / नवीनतम 3 महीने की सैलरी स्लिप के अनुसार सकल (Gross) आय दर्ज करें। गैर-वेतनभोगी या कृषक नागरिक शपथ पत्र में कृषि, व्यवसाय और मजदूरी की सही-सही वार्षिक आय का अलग-अलग विवरण दें। सरकारी डेटाबेस से मिलान न होने पर आवेदन अस्वीकृत हो सकता है।"
        },
        {
            "q_en": "My application was rejected due to blurry / oversized scanned documents. How to re-apply?",
            "q_hi": "धुंधले या गलत दस्तावेज़ के कारण आवेदन निरस्त हो गया, तो सही तरीके से पुनः आवेदन कैसे करें?",
            "a_en": f"State portals in {state_en} require scanned PDFs or JPGs between 50KB and 100KB with 100% text legibility. Use the SarkariSewa Document Compressor tool to resize without losing sharpness, and ensure all uploaded copies are clearly self-attested before re-submitting on {portal_name}.",
            "a_hi": f"{portal_name} पर दस्तावेज़ 50KB से 100KB के बीच तथा स्पष्ट पठनीय होने चाहिए। हमारे सरकारी दस्तावेज़ कंप्रेसर टूल का उपयोग करके बिना धुंधले किए सही साइज बनाएं और स्व-हस्ताक्षरित (Self-Attested) मूल प्रतियों को ही दोबारा अपलोड करें।"
        },
        {
            "q_en": "How to resolve spelling discrepancies between Aadhaar Card and Marksheet / Ration Card?",
            "q_hi": "आधार कार्ड और राशन कार्ड / अंकतालिका में नाम की स्पेलिंग में अंतर हो तो समाधान क्या है?",
            "a_en": f"Attach a ₹10/₹20 Notarized Name Clarification Affidavit stating both names refer to the same individual. Ensure the mobile number linked to your Aadhaar is active for OTP e-KYC on {portal_name}.",
            "a_hi": "यदि नाम या पिता के नाम में मामूली स्पेलिंग अंतर है, तो नोटरी द्वारा सत्यापित ₹10/₹20 का शपथ पत्र साथ में अपलोड करें जिसमें यह प्रमाणित हो कि दोनों नाम एक ही व्यक्ति के हैं। साथ ही आधार से लिंक मोबाइल नंबर सक्रिय रखें।"
        },
        {
            "q_en": f"What is the validity period of the {state_en} Income Certificate and how to renew it for Scholarships / EWS?",
            "q_hi": f"{state_hi} आय प्रमाण पत्र की वैधता (Validity) कितने समय की होती है और छात्रवृत्ति / ईडब्ल्यूएस के लिए रिन्यू कैसे करें?",
            "a_en": f"In {state_en}, the official income certificate is valid for {validity}. For NSP scholarships, state fee waivers, and EWS certificates, renewal must be initiated 15-20 days prior to the beginning of the new academic or financial year using the existing application number.",
            "a_hi": f"{state_hi} में जारी आय प्रमाण पत्र की आधिकारिक मान्यता **{validity}** तक रहती है। छात्रवृत्ति, कॉलेज फीस छूट और EWS प्रमाण पत्र के लिए सत्र समाप्त होने से 15-20 दिन पूर्व पुराने सर्टिफिकेट नंबर का संदर्भ देकर नवीनीकरण (Renewal) आवेदन करें।"
        },
        {
            "q_en": "Application fee was debited from bank account but payment receipt / ARN is pending. What to do?",
            "q_hi": "बैंक खाते से फीस कट गई लेकिन पोर्टल पर पावती रसीद (Acknowledgement Receipt) नहीं मिली, क्या दोबारा भुगतान करें?",
            "a_en": f"Do NOT make an immediate duplicate payment. Wait 24 to 48 hours for bank reconciliation, navigate to 'Verify Payment / Re-query Transaction' on {portal_name}, enter your transaction reference / UTR, and your receipt will automatically generate.",
            "a_hi": f"तुरंत दोबारा भुगतान बिल्कुल न करें। 24 से 48 घंटे तक बैंक सेटलमेंट का इंतजार करें। इसके बाद {portal_name} पर 'Re-verify Payment / भुगतान सत्यापन' विकल्प में जाकर UTR नंबर या संदर्भ संख्या दर्ज करें, आपकी रसीद तुरंत जेनरेट हो जाएगी।"
        }
    ]

    # JSON-LD Schema
    schema_graph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "GovernmentService",
                "name": f"{state_en} Income Certificate (आय प्रमाण पत्र)",
                "serviceType": "Income Certificate Issuance",
                "serviceOperator": {
                    "@type": "GovernmentOrganization",
                    "name": dept
                },
                "areaServed": {
                    "@type": "State",
                    "name": state_en
                },
                "url": canonical_url,
                "provider": {
                    "@type": "GovernmentOrganization",
                    "name": f"Government of {state_en}"
                },
                "offers": {
                    "@type": "Offer",
                    "price": fee.split()[0].replace('₹', ''),
                    "priceCurrency": "INR"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": faq["q_hi"],
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq["a_hi"]
                        }
                    } for faq in faqs_data
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
                        "name": "States Hub",
                        "item": "https://sarkarisewaindia.com/states/index.html"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": f"{state_en} Income Certificate",
                        "item": canonical_url
                    }
                ]
            }
        ]
    }

    # Header adjustment for depth
    page_header = raw_header.replace('href="', f'href="{root_rel}').replace('href="../index.html"', f'href="{root_rel}index.html"').replace('src="', f'src="{root_rel}')
    page_header = page_header.replace(f'{root_rel}https://', 'https://').replace(f'{root_rel}http://', 'http://').replace(f'{root_rel}#', '#')
    
    # Footer adjustment for depth
    page_footer = raw_footer.replace('href="', f'href="{root_rel}').replace('href="../index.html"', f'href="{root_rel}index.html"').replace('src="', f'src="{root_rel}')
    page_footer = page_footer.replace(f'{root_rel}https://', 'https://').replace(f'{root_rel}http://', 'http://').replace(f'{root_rel}#', '#')

    # Related Services Links for that State
    related_caste = f"{service_rel_prefix}{code}-caste-certificate.html"
    related_domicile = f"{service_rel_prefix}{code}-domicile-certificate.html"
    related_ration = f"{service_rel_prefix}{code}-ration-card.html"
    related_csc = f"{root_rel}service/csc-locator/{state_key}.html"

    html_content = f"""<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="max-image-preview:large, index, follow">
  <title>{seo_title}</title>
  <meta name="description" content="{seo_desc}">
  <link rel="canonical" href="{canonical_url}">
  
  <meta property="og:title" content="{seo_title}">
  <meta property="og:description" content="{seo_desc}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="{canonical_url}">
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{seo_title}">
  <meta name="twitter:description" content="{seo_desc}">
  
  <link rel="icon" type="image/png" sizes="32x32" href="{root_rel}assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="{root_rel}assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="{root_rel}assets/img/apple-touch-icon.png">
  <link rel="icon" href="{root_rel}favicon.ico">
  <link rel="manifest" href="{root_rel}manifest.json">
  
  <link rel="stylesheet" href="{root_rel}assets/css/style.css">
  <link rel="stylesheet" href="{root_rel}assets/css/module2.css">
  <link rel="stylesheet" href="{root_rel}assets/css/module7.css">
  <link rel="stylesheet" href="{root_rel}assets/css/share-widget.css">

  <script type="application/ld+json">
{json.dumps(schema_graph, ensure_ascii=False, indent=2)}
  </script>
</head>
<body>
  {page_header}

  <main class="container" style="max-width: 960px; margin: 32px auto; padding: 0 16px;">
    
    <!-- Breadcrumbs -->
    <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 20px;">
      <a href="{root_rel}index.html" style="color: var(--color-primary); text-decoration: none;">Home</a> / 
      <a href="{root_rel}states/index.html" style="color: var(--color-primary); text-decoration: none;">States Hub</a> / 
      <span style="color: var(--color-text);">{state_en} Income Certificate</span>
    </nav>

    <div class="tricolor-rule" aria-hidden="true"></div>

    <!-- Hero Card -->
    <header class="service-hero-card">
      <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin-bottom: 14px;">
        <span style="background: var(--color-primary); color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 0.82rem; font-weight: 700;">📍 {state_en} ({state_hi})</span>
        <span style="background: var(--color-accent-green, #15803d); color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 0.82rem; font-weight: 700;">✓ 2026 Updated Guide</span>
        <span style="font-size: 0.88rem; color: var(--color-text-muted);">🏛️ {dept}</span>
      </div>
      <h1 style="font-size: 1.85rem; line-height: 1.35; color: var(--color-text); margin: 0 0 10px 0;">{state_en} Income Certificate (आय प्रमाण पत्र) 2026</h1>
      <p style="font-size: 1.05rem; color: var(--color-text-muted); margin: 0; line-height: 1.6;">
        {portal_name} के माध्यम से घर बैठे ऑनलाइन आय प्रमाण पत्र आवेदन, आवश्यक दस्तावेज़, सरकारी शुल्क ({fee}), सत्यापन प्रक्रिया और रियल-लाइफ समाधान।
      </p>
    </header>

    <!-- Quick Stats Grid -->
    <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 32px;">
      <div class="stat-card">
        <div style="font-size: 1.6rem; margin-bottom: 4px;">💰</div>
        <div style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 4px;">सरकारी शुल्क (Govt Fee)</div>
        <strong style="font-size: 1.15rem; color: var(--color-primary);">{fee}</strong>
      </div>
      <div class="stat-card">
        <div style="font-size: 1.6rem; margin-bottom: 4px;">⏱️</div>
        <div style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 4px;">जारी होने का समय (Timeline)</div>
        <strong style="font-size: 1.05rem; color: var(--color-primary);">{timeline}</strong>
      </div>
      <div class="stat-card">
        <div style="font-size: 1.6rem; margin-bottom: 4px;">📅</div>
        <div style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 4px;">आधिकारिक मान्यता (Validity)</div>
        <strong style="font-size: 1.05rem; color: var(--color-primary);">{validity}</strong>
      </div>
      <div class="stat-card">
        <div style="font-size: 1.6rem; margin-bottom: 4px;">📞</div>
        <div style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 4px;">हेल्पलाइन नंबर (Helpdesk)</div>
        <strong style="font-size: 0.95rem; color: var(--color-primary);">{helpline}</strong>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="content-box">
      <h2 style="font-size: 1.4rem; color: var(--color-primary); margin-top: 0; display: flex; align-items: center; gap: 8px;">
        <span>📝</span> {state_en} आय प्रमाण पत्र क्या है और इसकी आवश्यकता कहाँ होती है?
      </h2>
      <p style="color: var(--color-text); margin-bottom: 16px; line-height: 1.8;">
        <strong>{state_en} Income Certificate (आय प्रमाण पत्र)</strong> राज्य सरकार के {dept} द्वारा जारी किया जाने वाला एक अनिवार्य कानूनी दस्तावेज है। यह प्रमाण पत्र किसी व्यक्ति अथवा उसके पूरे परिवार की सभी स्रोतों (कृषि, व्यापार, वेतन, पेंशन, मजदूरी) से होने वाली वास्तविक वार्षिक आय को प्रमाणित करता है।
      </p>
      <div class="callout-box">
        <strong style="color: var(--color-text); display: block; margin-bottom: 6px;">🎯 प्रमुख उपयोग (Key Use Cases in {state_en}):</strong>
        <ul style="margin: 0; padding-left: 20px; color: var(--color-text); line-height: 1.8;">
          <li>केंद्र व राज्य सरकार की छात्रवृत्ति (NSP & State Scholarships) और फीस प्रतिपूर्ति।</li>
          <li>EWS (आर्थिक रूप से कमजोर वर्ग) आरक्षण प्रमाण पत्र बनवाने हेतु।</li>
          <li>राशन कार्ड (BPL / AAY) और खाद्य सुरक्षा योजना में पात्रता निर्धारण।</li>
          <li>आयुष्मान भारत (PM-JAY) एवं राज्य स्वास्थ्य बीमा योजना लाभ।</li>
          <li>सरकारी आवास योजनाएं (PM Awas Yojana) एवं वृद्धावस्था/विधवा पेंशन।</li>
        </ul>
      </div>
    </section>

    <!-- Step-by-Step Online Process -->
    <section class="content-box">
      <h2 style="font-size: 1.4rem; color: var(--color-primary); margin-top: 0; display: flex; align-items: center; gap: 8px;">
        <span>💻</span> {state_en} में घर बैठे ऑनलाइन आय प्रमाण पत्र कैसे बनाएं (Step-by-Step)?
      </h2>
      <ol style="padding-left: 24px; line-height: 1.9; color: var(--color-text); font-size: 1.02rem;">
        <li style="margin-bottom: 12px;"><strong>आधिकारिक पोर्टल खोलें:</strong> {state_en} के अधिकृत ई-सेवा पोर्टल <a href="{portal_url}" target="_blank" rel="noopener noreferrer" style="color: var(--color-primary); font-weight: 700;">{portal_name} ↗</a> पर जाएं।</li>
        <li style="margin-bottom: 12px;"><strong>नागरिक लॉगिन / पंजीकरण:</strong> 'Citizen Login' या 'New User Registration' पर क्लिक करके अपना मोबाइल नंबर व आधार OTP दर्ज करके अकाउंट बनाएं।</li>
        <li style="margin-bottom: 12px;"><strong>सेवा चयन:</strong> डैशबोर्ड पर Revenue Services (राजस्व सेवाएं) सेक्शन में जाकर <strong>'Income Certificate / आय प्रमाण पत्र'</strong> का चयन करें।</li>
        <li style="margin-bottom: 12px;"><strong>फॉर्म भरें:</strong> आवेदक का नाम, पिता/पति का नाम, वर्तमान व स्थायी पता, तहसील, ग्राम/वार्ड, व्यवसाय एवं परिवार के सदस्यों की कुल वार्षिक आय दर्ज करें।</li>
        <li style="margin-bottom: 12px;"><strong>दस्तावेज़ अपलोड करें:</strong> पासपोर्ट साइज फोटो, आधार कार्ड, राशन कार्ड/वेतन पर्ची और स्वप्रमाणित घोषणा पत्र (Self Declaration) स्कैन करके अपलोड करें (साइज 50KB-100KB)।</li>
        <li style="margin-bottom: 12px;"><strong>सरकारी फीस का भुगतान:</strong> नेट बैंकिंग, UPI या डेबिट कार्ड के माध्यम से निर्धारित सरकारी शुल्क (<strong>{fee}</strong>) जमा करें।</li>
        <li style="margin-bottom: 12px;"><strong>रसीद सुरक्षित रखें:</strong> भुगतान के पश्चात मिलने वाले <strong>Application Reference Number (ARN / आवेदन क्रमांक)</strong> को नोट कर लें और पावती रसीद डाउनलोड करें।</li>
      </ol>

      <div style="text-align: center; margin-top: 24px;">
        <a href="{portal_url}" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="display: inline-block; padding: 14px 28px; font-size: 1.05rem; font-weight: 700; text-decoration: none; border-radius: 8px; box-shadow: 0 4px 12px rgba(16, 36, 62, 0.2);">
          🔗 {state_en} Official Portal: {portal_name} ↗
        </a>
      </div>
    </section>

    <!-- Documents & Eligibility Checklist -->
    <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 32px;">
      <div class="content-box" style="margin-bottom: 0;">
        <h3 style="color: var(--color-primary); margin-top: 0; font-size: 1.2rem;">📋 आवश्यक दस्तावेज़ (Documents Required)</h3>
        <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-text);">
          <li>आवेदक का नवीनतम पासपोर्ट साइज रंगीन फोटो।</li>
          <li>पहचान प्रमाण: आधार कार्ड / वोटर आईडी / पैन कार्ड।</li>
          <li>निवास प्रमाण: बिजली बिल / राशन कार्ड / निवास प्रमाण पत्र।</li>
          <li>आय का प्रमाण: वेतन पर्ची (Form 16) / बैंक स्टेटमेंट / पटवारी रिपोर्ट।</li>
          <li>निर्धारित प्रारूप में स्वप्रमाणित घोषणा पत्र (Self-Declaration)।</li>
        </ul>
      </div>
      <div class="content-box" style="margin-bottom: 0;">
        <h3 style="color: var(--color-primary); margin-top: 0; font-size: 1.2rem;">✅ पात्रता मानदंड (Eligibility Criteria)</h3>
        <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-text);">
          <li>आवेदक {state_en} का स्थायी या मूल निवासी होना चाहिए।</li>
          <li>नागरिक किसी भी वर्ग (सामान्य, ओबीसी, एससी, एसटी) का हो सकता है।</li>
          <li>नाबालिग छात्रों के मामले में माता-पिता/अभिभावक के नाम से आय प्रमाणित होती है।</li>
          <li>आवेदक के पास वैध आधार कार्ड एवं चालू मोबाइल नंबर होना अनिवार्य है।</li>
        </ul>
      </div>
    </section>

    <!-- 6 Real Life Practical Problems & Solutions Section -->
    <section class="content-box" style="margin-bottom: 36px;">
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
        <span style="font-size: 1.8rem;">🛠️</span>
        <div>
          <h2 style="font-size: 1.45rem; color: var(--color-primary); margin: 0;">आय प्रमाण पत्र: 6 प्रमुख रियल-लाइफ समस्याएं एवं उनके 100% समाधान</h2>
          <p style="margin: 4px 0 0 0; font-size: 0.9rem; color: var(--color-text-muted);">Real-World Citizen Grievances &amp; Practical Step-by-Step Troubleshooting</p>
        </div>
      </div>

      <div class="faq-list">"""

    for i, item in enumerate(faqs_data, 1):
        html_content += f"""
        <details class="faq-box" {"open" if i <= 2 else ""}>
          <summary style="font-weight: 700; font-size: 1.05rem; cursor: pointer; color: var(--color-text); line-height: 1.5;">
            Problem #{i}: {item["q_hi"]}
          </summary>
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--color-border); line-height: 1.8; font-size: 0.98rem; color: var(--color-text);">
            <p style="margin-bottom: 10px;"><strong>💡 समाधान (Hindi Solution):</strong> {item["a_hi"]}</p>
            <p style="margin: 0; color: var(--color-text-muted); font-size: 0.9rem;"><strong>English Summary:</strong> {item["a_en"]}</p>
          </div>
        </details>"""

    html_content += f"""
      </div>
    </section>

    <!-- Useful Citizen Tools Integration -->
    <section class="content-box" style="margin-bottom: 36px;">
      <h3 style="font-size: 1.3rem; color: var(--color-primary); margin-top: 0; display: flex; align-items: center; gap: 8px;">
        <span>🧰</span> आवेदन के लिए उपयोगी सरकारी टूल्स (Free Citizen Tools)
      </h3>
      <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 16px;">
        आय प्रमाण पत्र आवेदन करते समय इन निःशुल्क टूल्स का उपयोग करके रिजेक्शन से बचें:
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px;">
        <a href="{root_rel}tools/document-compressor.html" class="tool-link-card">
          <span style="font-size: 1.5rem;">📄</span>
          <div>
            <strong style="color: var(--color-primary); display: block; font-size: 0.95rem;">दस्तावेज़ कंप्रेसर (PDF/Img)</strong>
            <span style="font-size: 0.8rem; color: var(--color-text-muted);">100KB साइज में कन्वर्ट करें</span>
          </div>
        </a>
        <a href="{root_rel}tools/photo-resizer.html" class="tool-link-card">
          <span style="font-size: 1.5rem;">🖼️</span>
          <div>
            <strong style="color: var(--color-primary); display: block; font-size: 0.95rem;">फोटो रिसाइज़र (Passport)</strong>
            <span style="font-size: 0.8rem; color: var(--color-text-muted);">20KB-50KB सटीक आयाम</span>
          </div>
        </a>
        <a href="{root_rel}tools/self-declaration-builder.html" class="tool-link-card">
          <span style="font-size: 1.5rem;">✍️</span>
          <div>
            <strong style="color: var(--color-primary); display: block; font-size: 0.95rem;">घोषणा पत्र जनरेटर</strong>
            <span style="font-size: 0.8rem; color: var(--color-text-muted);">1-क्लिक में शपथ पत्र बनाएं</span>
          </div>
        </a>
        <a href="{root_rel}tools/csc-locator.html" class="tool-link-card">
          <span style="font-size: 1.5rem;">📍</span>
          <div>
            <strong style="color: var(--color-primary); display: block; font-size: 0.95rem;">नजदीकी CSC केंद्र खोजें</strong>
            <span style="font-size: 0.8rem; color: var(--color-text-muted);">{state_en} पिनकोड सूची</span>
          </div>
        </a>
      </div>
    </section>

    <!-- REAL RELATED SERVICES GRID -->
    <section class="service-section" style="margin: 36px 0;">
      <h2 class="service-section__title" style="font-size: 1.45rem; margin-bottom: 18px; color: var(--color-primary); display: flex; align-items: center; gap: 8px;">
        <span class="icon">📍</span> {state_en} की अन्य महत्वपूर्ण सेवाएं (Related State Services)
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
        <a href="{related_caste}" class="service-card">
          <div>
            <div style="font-size: 1.5rem; margin-bottom: 8px;">📜</div>
            <strong style="color: var(--color-primary); font-size: 1.05rem; display: block; margin-bottom: 6px;">{state_en} Caste Certificate</strong>
            <span style="color: var(--color-text-muted); font-size: 0.85rem; line-height: 1.5; display: block;">जाति प्रमाण पत्र (SC/ST/OBC) ऑनलाइन आवेदन व सत्यापन।</span>
          </div>
          <span style="color: var(--color-accent-saffron, #D97F2B); font-weight: 700; font-size: 0.88rem; margin-top: 14px;">आवेदन करें &rarr;</span>
        </a>

        <a href="{related_domicile}" class="service-card">
          <div>
            <div style="font-size: 1.5rem; margin-bottom: 8px;">🏠</div>
            <strong style="color: var(--color-primary); font-size: 1.05rem; display: block; margin-bottom: 6px;">{state_en} Domicile Certificate</strong>
            <span style="color: var(--color-text-muted); font-size: 0.85rem; line-height: 1.5; display: block;">मूल निवास प्रमाण पत्र ऑनलाइन प्रक्रिया एवं नियम।</span>
          </div>
          <span style="color: var(--color-accent-saffron, #D97F2B); font-weight: 700; font-size: 0.88rem; margin-top: 14px;">आवेदन करें &rarr;</span>
        </a>

        <a href="{related_ration}" class="service-card">
          <div>
            <div style="font-size: 1.5rem; margin-bottom: 8px;">🌾</div>
            <strong style="color: var(--color-primary); font-size: 1.05rem; display: block; margin-bottom: 6px;">{state_en} Ration Card</strong>
            <span style="color: var(--color-text-muted); font-size: 0.85rem; line-height: 1.5; display: block;">नया राशन कार्ड आवेदन, नाम जोड़ना व राशन लिस्ट।</span>
          </div>
          <span style="color: var(--color-accent-saffron, #D97F2B); font-weight: 700; font-size: 0.88rem; margin-top: 14px;">आवेदन करें &rarr;</span>
        </a>

        <a href="{related_csc}" class="service-card">
          <div>
            <div style="font-size: 1.5rem; margin-bottom: 8px;">📍</div>
            <strong style="color: var(--color-primary); font-size: 1.05rem; display: block; margin-bottom: 6px;">{state_en} CSC Directory</strong>
            <span style="color: var(--color-text-muted); font-size: 0.85rem; line-height: 1.5; display: block;">जिलेवार जन सेवा केंद्र, VLE मोबाइल नंबर व पता।</span>
          </div>
          <span style="color: var(--color-accent-saffron, #D97F2B); font-weight: 700; font-size: 0.88rem; margin-top: 14px;">केंद्र खोजें &rarr;</span>
        </a>
      </div>
    </section>

    <!-- Disclaimer & Fact Check -->
    <section class="callout-box" style="margin: 32px 0;">
      <p style="margin: 0 0 6px 0; font-size: 0.9rem; color: var(--color-text);">
        <strong>🛡️ आधिकारिक स्रोत व डिस्क्लेमर:</strong> सूचना का मुख्य स्रोत <a href="{portal_url}" target="_blank" rel="noopener noreferrer" style="color: var(--color-primary); font-weight: 600;">{portal_name} ({portal_url})</a> है। SarkariSewa India एक स्वतंत्र नागरिक सहायता पोर्टल है और किसी भी सरकारी विभाग से संबद्ध नहीं है।
      </p>
      <p style="margin: 0; font-size: 0.82rem; color: var(--color-text-muted);">
        Last Verified: 2026 Guidelines | All official rights belong to {dept}.
      </p>
    </section>

  </main>

  {page_footer}
  
  <script src="{root_rel}assets/js/main.js"></script>
  <script src="{root_rel}assets/js/share-widget.js"></script>
</body>
</html>
"""
    return html_content

# Upgrade all 36 state income certificate pages in states/ and canonical files in service/
upgraded_count = 0

for state_key, meta in STATE_METADATA.items():
    code = meta["code"]
    
    # 1. Page in states/ folder
    state_file = f"states/{state_key}-income-certificate.html"
    content_states = generate_income_page_content(state_key, meta, is_states_folder=True)
    with open(state_file, 'w', encoding='utf-8') as fp:
        fp.write(content_states)
    upgraded_count += 1
    
    # 2. Canonical Pages in service/ folder
    cand_service_files = [
        f"service/{code}-income-certificate.html",
        f"service/{state_key}-income-certificate.html"
    ]
    for s_file in cand_service_files:
        if os.path.exists(s_file):
            with open(s_file, 'r', encoding='utf-8', errors='ignore') as fp:
                c_prev = fp.read()
            if 'window.location.replace' not in c_prev and 'http-equiv="refresh"' not in c_prev:
                content_service = generate_income_page_content(state_key, meta, is_states_folder=False)
                with open(s_file, 'w', encoding='utf-8') as fp:
                    fp.write(content_service)
                upgraded_count += 1

print(f"🎉 Successfully re-generated {upgraded_count} state-wise income certificate pages with crisp contrast classes!")
