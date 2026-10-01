# -*- coding: utf-8 -*-
import os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX_PATH = os.path.join(ROOT, 'states', 'index.html')

STATES_DATA = [
    ("Andhra Pradesh", "आंध्र प्रदेश", "andhra-pradesh.html", "andhra-pradesh-sir-voter-list.html", "अमरावती", "🏛️", "Meebhoomi, Navasakam, YSR Seva", "10+"),
    ("Arunachal Pradesh", "अरुणाचल प्रदेश", "arunachal-pradesh.html", "arunachal-pradesh-sir-voter-list.html", "ईटानगर", "🏔️", "e-Service Arunachal, Domicile, ILP", "8+"),
    ("Assam", "असम", "assam.html", "assam-sir-voter-list.html", "दिसपुर", "🦏", "Sewa Setu, Dharitree, Orunodoi", "10+"),
    ("Bihar", "बिहार", "bihar.html", "bihar-sir-voter-list.html", "पटना", "🌾", "RTPS Bihar, ServiceOnline, Bhulekh", "12+"),
    ("Chhattisgarh", "छत्तीसगढ़", "chhattisgarh.html", "chhattisgarh-sir-voter-list.html", "रायपुर", "🌳", "e-District CG, Bhuiyan, Mahtari Vandan", "10+"),
    ("Goa", "गोवा", "goa.html", "goa-sir-voter-list.html", "पणजी", "🏖️", "Goa Online Services, Dharani, Griha Aadhaar", "8+"),
    ("Gujarat", "गुजरात", "gujarat.html", "gujarat-sir-voter-list.html", "गांधीनगर", "🦁", "Digital Gujarat, AnyRoR, Vhali Dikri", "12+"),
    ("Haryana", "हरियाणा", "haryana.html", "haryana-sir-voter-list.html", "चंडीगढ़", "🚜", "Saral Haryana, Parivar Pehchan Patra (PPP), Jamabandi", "12+"),
    ("Himachal Pradesh", "हिमाचल प्रदेश", "himachal-pradesh.html", "himachal-pradesh-sir-voter-list.html", "शिमला", "⛰️", "e-District HP, e-Himsamadhan, HimBhoomi", "8+"),
    ("Jharkhand", "झारखंड", "jharkhand.html", "jharkhand-sir-voter-list.html", "रांची", "⛏️", "JharSewa, Jharbhoomi, Mukhyamantri Maiyan Samman", "10+"),
    ("Karnataka", "कर्नाटक", "karnataka.html", "karnataka-sir-voter-list.html", "बेंगलुरु", "🐘", "Seva Sindhu, Bhoomi, Gruha Lakshmi", "12+"),
    ("Kerala", "केरल", "kerala.html", "kerala-sir-voter-list.html", "तिरुवनंतपुरम", "🌴", "e-District Kerala, Sevana, Karunya Health", "10+"),
    ("Madhya Pradesh", "मध्य प्रदेश", "madhya-pradesh.html", "madhya-pradesh-sir-voter-list.html", "भोपाल", "🐅", "MP e-District, Samagra, Ladli Behna, Sambal", "12+"),
    ("Maharashtra", "महाराष्ट्र", "maharashtra.html", "maharashtra-sir-voter-list.html", "मुंबई", "🛡️", "Aaple Sarkar, Mahadbt, Majhi Ladki Bahin, Mahabhulekh", "15+"),
    ("Manipur", "मणिपुर", "manipur.html", "manipur-sir-voter-list.html", "इम्फाल", "🌺", "e-District Manipur, CMHT Scheme, Lairik Yengminnasi", "8+"),
    ("Meghalaya", "मेघालय", "meghalaya.html", "meghalaya-sir-voter-list.html", "शिलांग", "☁️", "e-District Meghalaya, FOCUS Scheme, MHIS", "8+"),
    ("Mizoram", "मिजोरम", "mizoram.html", "mizoram-sir-voter-list.html", "आइजोल", "🌄", "Mizoram e-Services, SEDP Policy, BPL Housing", "8+"),
    ("Nagaland", "नागालैंड", "nagaland.html", "nagaland-sir-voter-list.html", "कोहिमा", "🦅", "Nagaland Services Portal, CMHIS Health, CMMFI", "8+"),
    ("Odisha", "ओडिशा", "odisha.html", "odisha-sir-voter-list.html", "भुवनेश्वर", "🛕", "Odisha e-District, Subhadra Yojana, Bhulekh Odisha", "12+"),
    ("Punjab", "पंजाब", "punjab.html", "punjab-sir-voter-list.html", "चंडीगढ़", "🌾", "e-Sewa Punjab, PLRS Jamabandi, Ashirwad Scheme", "10+"),
    ("Rajasthan", "राजस्थान", "rajasthan.html", "rajasthan-sir-voter-list.html", "जयपुर", "🏰", "SSO Rajasthan, Jan Aadhaar, Apna Khata, Chiranjeevi", "14+"),
    ("Sikkim", "सिक्किम", "sikkim.html", "sikkim-sir-voter-list.html", "गंगटोक", "🏔️", "Sikkim Services Portal, Certificate & Land Records", "8+"),
    ("Tamil Nadu", "तमिलनाडु", "tamil-nadu.html", "tamil-nadu-sir-voter-list.html", "चेन्नई", "🛕", "TNeGA e-Sevai, Patta Chitta, Kalaignar Magalir Urimai", "12+"),
    ("Telangana", "तेलंगाना", "telangana.html", "telangana-sir-voter-list.html", "हैदराबाद", "🏢", "MeeSeva Telangana, Dharani Portal, Rythu Bandhu", "12+"),
    ("Tripura", "त्रिपुरा", "tripura.html", "tripura-sir-voter-list.html", "अगरतला", "🎋", "e-District Tripura, Jatan Scheme, Land Records", "8+"),
    ("Uttar Pradesh", "उत्तर प्रदेश", "uttar-pradesh.html", "uttar-pradesh-sir-voter-list.html", "लखनऊ", "🏹", "e-District UP, Jansunwai, Bhulekh UP, Kanya Sumangala", "15+"),
    ("Uttarakhand", "उत्तराखंड", "uttarakhand.html", "uttarakhand-sir-voter-list.html", "देहरादून", "🏔️", "e-District UK, Bhulekh Devbhoomi, Apuni Sarkar", "10+"),
    ("West Bengal", "पश्चिम बंगाल", "west-bengal.html", "west-bengal-sir-voter-list.html", "कोलकाता", "🌊", "WB e-District, Banglarbhumi, Lakshmir Bhandar", "12+")
]

UTS_DATA = [
    ("Andaman and Nicobar Islands", "अंडमान और निकोबार द्वीप समूह", "andaman-nicobar.html", "पोर्ट ब्लेयर", "🏝️", "e-District Andaman, Island Services", "6+"),
    ("Chandigarh", "चंडीगढ़", "chandigarh.html", "चंडीगढ़", "🌹", "e-District Chandigarh, e-JanSampark", "8+"),
    ("Dadra and Nagar Haveli and Daman and Diu", "दादरा और नगर हवेली एवं दमन और दीव", "dadra-nagar-haveli-daman-diu.html", "दमन", "🏖️", "Daman Diu e-Services, Domicile & Certificates", "6+"),
    ("Delhi", "दिल्ली (NCT)", "delhi.html", "नई दिल्ली", "🏛️", "e-District Delhi, Doorstep Delivery, Ration e-PDS", "12+"),
    ("Jammu and Kashmir", "जम्मू और कश्मीर", "jammu-kashmir.html", "श्रीनगर / जम्मू", "❄️", "e-UNNAT J&K, Janbhaagidari, Domicile Certificate", "10+"),
    ("Ladakh", "लद्दाख", "ladakh.html", "लेह", "🏔️", "Ladakh e-Services, Resident Certificate, Revenue", "6+"),
    ("Lakshadweep", "लक्षद्वीप", "lakshadweep.html", "कवरत्ती", "🌊", "Lakshadweep e-Services, Domicile & Permit", "6+"),
    ("Puducherry", "पुदुचेरी", "puducherry.html", "पुदुचेरी", "🏖️", "e-District Puducherry, Revenue & Welfare Schemes", "8+")
]

def build_states_index():
    states_cards_html = []
    for en_name, hi_name, url, sir_url, capital, icon, popular, s_count in STATES_DATA:
        states_cards_html.append(f'''        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 22px; box-shadow: 0 4px 14px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s, box-shadow 0.2s;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <span style="font-size: 2.2rem;">{icon}</span>
              <span style="background: var(--color-surface); border: 1px solid var(--color-border); padding: 4px 10px; border-radius: 20px; font-size: 0.78rem; font-weight: 700; color: #2563eb;">{s_count} Services</span>
            </div>
            <h3 style="margin: 0 0 4px 0; font-size: 1.25rem; color: var(--color-primary);">{hi_name}</h3>
            <h4 style="margin: 0 0 10px 0; font-size: 0.95rem; font-weight: 600; color: var(--color-text-muted);">{en_name}</h4>
            <div style="font-size: 0.85rem; color: var(--color-text); margin-bottom: 8px;"><strong>राजधानी:</strong> {capital}</div>
            <div style="font-size: 0.82rem; color: var(--color-text-muted); line-height: 1.5; background: var(--color-surface); padding: 8px 10px; border-radius: 8px; border: 1px solid var(--color-border);">
              <strong>प्रमुख सेवाएं:</strong> {popular}
            </div>
          </div>
          <div style="margin-top: 18px; display: flex; flex-direction: column; gap: 8px;">
            <a href="{url}" style="background: #2563eb; color: #ffffff !important; font-weight: 700; padding: 10px 14px; border-radius: 8px; text-decoration: none; text-align: center; font-size: 0.9rem; display: block;">
              🏛️ राज्य सेवाएं पोर्टल ↗
            </a>
            <a href="{sir_url}" style="background: var(--color-surface); color: var(--color-text) !important; font-weight: 600; padding: 8px 12px; border-radius: 8px; text-decoration: none; text-align: center; font-size: 0.85rem; border: 1px solid var(--color-border); display: block;">
              🗳️ SIR Voter List 2026 ↗
            </a>
          </div>
        </div>''')

    uts_cards_html = []
    for en_name, hi_name, url, capital, icon, popular, s_count in UTS_DATA:
        sir_url = f"{url.replace('.html', '')}-sir-voter-list.html" if os.path.isfile(os.path.join(ROOT, 'states', f"{url.replace('.html', '')}-sir-voter-list.html")) else f"../states/{url}"
        uts_cards_html.append(f'''        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 22px; box-shadow: 0 4px 14px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s, box-shadow 0.2s;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <span style="font-size: 2.2rem;">{icon}</span>
              <span style="background: var(--color-surface); border: 1px solid var(--color-border); padding: 4px 10px; border-radius: 20px; font-size: 0.78rem; font-weight: 700; color: #059669;">{s_count} Services</span>
            </div>
            <h3 style="margin: 0 0 4px 0; font-size: 1.25rem; color: var(--color-primary);">{hi_name}</h3>
            <h4 style="margin: 0 0 10px 0; font-size: 0.95rem; font-weight: 600; color: var(--color-text-muted);">{en_name}</h4>
            <div style="font-size: 0.85rem; color: var(--color-text); margin-bottom: 8px;"><strong>मुख्यालय / राजधानी:</strong> {capital}</div>
            <div style="font-size: 0.82rem; color: var(--color-text-muted); line-height: 1.5; background: var(--color-surface); padding: 8px 10px; border-radius: 8px; border: 1px solid var(--color-border);">
              <strong>प्रमुख सेवाएं:</strong> {popular}
            </div>
          </div>
          <div style="margin-top: 18px; display: flex; flex-direction: column; gap: 8px;">
            <a href="{url}" style="background: #059669; color: #ffffff !important; font-weight: 700; padding: 10px 14px; border-radius: 8px; text-decoration: none; text-align: center; font-size: 0.9rem; display: block;">
              🏛️ UT सेवाएं पोर्टल ↗
            </a>
          </div>
        </div>''')

    html_content = f'''<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="max-image-preview:large, index, follow">
  <title>सभी 36 राज्य एवं केंद्र शासित प्रदेश सरकारी सेवाएं 2026 | SarkariSewa India</title>
  <meta name="description" content="भारत के सभी 28 राज्यों एवं 8 केंद्र शासित प्रदेशों के आधिकारिक e-District पोर्टल, आय, जाति, निवास प्रमाण पत्र, राशन कार्ड, भूलेख व सरकारी योजनाओं की संपूर्ण डायरेक्टरी।">
  <link rel="canonical" href="https://sarkarisewaindia.com/states/index.html">
  
  <meta property="og:title" content="सभी 36 राज्य एवं केंद्र शासित प्रदेश सरकारी सेवाएं 2026 | SarkariSewa India">
  <meta property="og:description" content="भारत के सभी 28 राज्यों एवं 8 केंद्र शासित प्रदेशों के आधिकारिक e-District पोर्टल, प्रमाण पत्र, राशन कार्ड, भूलेख व सरकारी योजनाएं।">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://sarkarisewaindia.com/states/index.html">
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="All 36 States & UTs Citizen Services Portal 2026 | SarkariSewa India">
  <meta name="twitter:description" content="Complete directory of state e-District portals, certificates, land records, ration cards & state welfare schemes.">
  
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/apple-touch-icon.png">
  <link rel="icon" href="../favicon.ico">
  <link rel="manifest" href="../manifest.json">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/module2.css">
  <link rel="stylesheet" href="../assets/css/module7.css">
  <link rel="stylesheet" href="../assets/css/module18.css">
  <link rel="stylesheet" href="../assets/css/share-widget.css">
  
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@graph": [
      {{
        "@type": "CollectionPage",
        "name": "All 36 States & Union Territories Citizen Services Hub 2026",
        "description": "Comprehensive directory of all 28 States and 8 Union Territories of India with official e-District portals, certificates, ration cards, land records, and welfare schemes.",
        "url": "https://sarkarisewaindia.com/states/index.html"
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
            "name": "All States Hub",
            "item": "https://sarkarisewaindia.com/states/index.html"
          }}
        ]
      }},
      {{
        "@type": "FAQPage",
        "mainEntity": [
          {{
            "@type": "Question",
            "name": "राज्य सरकारी सेवाओं (State Government Services) के लिए कौन से पोर्टल होते हैं?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "प्रत्येक राज्य का अपना आधिकारिक e-District या सेवा पोर्टल होता है, जैसे उत्तर प्रदेश का e-District UP (edistrict.up.gov.in), बिहार का RTPS ServiceOnline (serviceonline.bihar.gov.in), महाराष्ट्र का Aaple Sarkar (aaplesarkar.mahaonline.gov.in), और राजस्थान का SSO Rajasthan (sso.rajasthan.gov.in)।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "आय, जाति व मूल निवास प्रमाण पत्र किस पोर्टल से बनते हैं?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "संबंधित राज्य के e-District / RTPS पोर्टल अथवा अपने नजदीकी जन सेवा केंद्र (CSC / e-Seva Kendra) के माध्यम से ऑनलाइन आवेदन किया जाता है और 7 से 15 कार्यदिवसों में डिजिटल हस्ताक्षरित प्रमाण पत्र जारी होता है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "क्या किसी एक राज्य का जाति प्रमाण पत्र दूसरे राज्य में मान्य होता है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "केंद्रीय सरकारी नौकरियों (UPSC, SSC, Railway, Banking) हेतु केंद्र सरकार के प्रारूप (Central Govt Format) पर जारी OBC/SC/ST/EWS प्रमाण पत्र पूरे भारत में मान्य होता है। राज्य स्तरीय भर्तियों हेतु उसी संबंधित राज्य का प्रमाण पत्र अनिवार्य होता है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "जमीन के रिकॉर्ड (खसरा, खतौनी, 7/12, जमाबंदी) ऑनलाइन कैसे देखें?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "राज्यों के डिजिटल भूलेख पोर्टलों पर खसरा नंबर या खाता नंबर दर्ज करके मुफ्त खतौनी नकल व भू-नक्शा देखा जा सकता है (उदा. Bhulekh UP, Mahabhulekh, Apna Khata Rajasthan, Bhuiyan CG)।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "एक राज्य से दूसरे राज्य में जाने पर राशन कार्ड ट्रांसफर कैसे करें?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "One Nation One Ration Card (ONORC) योजना के तहत देश के किसी भी राज्य में बायोमेट्रिक ई-केवाईसी द्वारा राशन लिया जा सकता है। स्थायी स्थानांतरण के लिए पुराने राज्य से Deletion Certificate लेकर नए राज्य में आवेदन करें।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "राज्य महिला कल्याण योजनाओं (लाडकी बहीण, लाडली बहना, महतारी वंदन) का लाभ कैसे लें?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "संबंधित राज्य के विशेष महिला पोर्टल या आंगनवाड़ी केंद्र/सीएससी के माध्यम से परिवार पहचान पत्र, आधार सीडेड बैंक खाता और आय घोषणा पत्र संलग्न करके आवेदन किया जाता है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "राज्य सरकारी योजना का स्टेटस ऑनलाइन कैसे चेक करें?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "आवेदन के समय प्राप्त एक्नॉलेजमेंट / एप्लीकेशन नंबर (Application Ref No) लेकर राज्य पोर्टल के Track Status / आवेदन की स्थिति विकल्प में जाएं।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "सीएससी केंद्र (CSC / VLE) से राज्य सेवाएं कैसे प्राप्त करें?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "हमारे CSC Locator टूल के माध्यम से अपने पिनकोड पर निकटतम जन सेवा केंद्र खोजें और न्यूनतम सरकारी शुल्क देकर सभी प्रमाणपत्र और ई-केवाईसी सेवाएं प्राप्त करें।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "राज्य स्तर पर जन शिकायत (CM Helpline) कैसे दर्ज करें?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "प्रत्येक राज्य का अपना ऑनलाइन समाधान पोर्टल व हेल्पलाइन होती है (जैसे UP Jansunwai 1076, MP CM Helpline 181, Bihar Lok Shikayat, Rajasthan Sampark 181) जहां ऑनलाइन शिकायत दर्ज कर समाधान पाया जा सकता है।"
            }}
          }},
          {{
            "@type": "Question",
            "name": "मतदाता सूची में नाम जुड़वाने या संशोधन के लिए राज्य अनुसार प्रक्रिया क्या है?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "भारत निर्वाचन आयोग के राष्ट्रीय पोर्टल voters.eci.gov.in पर अथवा हमारे State SIR Voter List 2026 पेज से अपने राज्य के जिले व विधानसभा की संपूर्ण ड्राफ्ट मतदाता सूची पीडीएफ डाउनलोड कर सकते हैं।"
            }}
          }}
        ]
      }}
    ]
  }}
  </script>
</head>
<body class="v2-template" data-slug="states-index">
  <script>window.SS_ROOT = "../";</script>
  
  <div id="site-header"></div>

  <main class="container" style="max-width: 1140px; margin: 32px auto; padding: 0 16px;">
    
    <!-- BREADCRUMB -->
    <nav class="breadcrumb" aria-label="Breadcrumb" style="font-size: 0.9rem; margin-bottom: 20px; color: var(--color-text-muted);">
      <a href="../index.html" style="color: var(--color-primary); text-decoration: none;">होम (Home)</a> &gt;
      <span style="color: var(--color-text);">सभी 36 राज्य एवं केंद्र शासित प्रदेश सेवाएं (All States &amp; UTs Hub)</span>
    </nav>

    <!-- HERO HEADER -->
    <header style="background: linear-gradient(135deg, #10243E 0%, #173663 60%, #0c2650 100%); color: #ffffff; border-radius: 18px; padding: 36px 28px; margin-bottom: 36px; box-shadow: 0 10px 35px rgba(16, 36, 62, 0.25); border: 1px solid rgba(255,255,255,0.15);">
      <span style="background: rgba(255,255,255,0.15); padding: 5px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 700; letter-spacing: 0.5px;">🇮🇳 सम्पूर्ण भारत डिजिटल सेवा डायरेक्टरी</span>
      <h1 style="font-size: 2.3rem; line-height: 1.3; color: #ffffff; margin: 16px 0 10px 0;">
        सभी 36 राज्य एवं केंद्र शासित प्रदेश सरकारी सेवाएं 2026
      </h1>
      <p style="font-size: 1.05rem; line-height: 1.75; color: rgba(255,255,255,0.9); max-width: 900px; margin: 0 0 20px 0;">
        भारत के प्रत्येक राज्य और केंद्र शासित प्रदेश के आधिकारिक e-District पोर्टल्स, आय, जाति, निवास व ईडब्ल्यूएस प्रमाण पत्र, डिजिटल भूलेख (खसरा-खतौनी/7-12), राशन कार्ड e-PDS, मुख्यमंत्री योजनाएं एवं स्पेशल इंटेंसिव रिवीजन (SIR) वोटर लिस्ट की 100% सटीक और सीधी जानकारी।
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 12px; font-size: 0.9rem;">
        <span style="background: rgba(255,255,255,0.12); padding: 6px 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2);">🏛️ 28 राज्य उपलब्ध</span>
        <span style="background: rgba(255,255,255,0.12); padding: 6px 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2);">🏝️ 8 केंद्र शासित प्रदेश</span>
        <span style="background: rgba(255,255,255,0.12); padding: 6px 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2);">📜 400+ ई-गवर्नेंस सेवाएं</span>
      </div>
    </header>

    <!-- SECTION 1: 28 STATES GRID -->
    <section style="margin-bottom: 50px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        <div>
          <h2 style="font-size: 1.65rem; color: var(--color-primary); margin: 0 0 6px 0;">🏛️ 28 भारतीय राज्य (28 Indian States)</h2>
          <p style="font-size: 0.95rem; color: var(--color-text-muted); margin: 0;">अपने राज्य का चयन करें और स्थानीय e-District सेवाओं, प्रमाणपत्रों व योजनाओं का लाभ लें</p>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px;">
{"\n".join(states_cards_html)}
      </div>
    </section>

    <!-- SECTION 2: 8 UNION TERRITORIES GRID -->
    <section style="margin-bottom: 50px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        <div>
          <h2 style="font-size: 1.65rem; color: var(--color-primary); margin: 0 0 6px 0;">🏝️ 8 केंद्र शासित प्रदेश (8 Union Territories)</h2>
          <p style="font-size: 0.95rem; color: var(--color-text-muted); margin: 0;">केंद्र शासित प्रदेशों के आधिकारिक नागरिक सेवा पोर्टल एवं ऑनलाइन प्रमाण पत्र</p>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px;">
{"\n".join(uts_cards_html)}
      </div>
    </section>

    <!-- 6 REAL WORLD PROBLEM SOLVERS FOR STATE SERVICES -->
    <section class="service-section" style="margin-top: 40px;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-bottom: 18px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        ⚙️ <span data-lang-show="en">Common State Services Issues &amp; Practical Solutions</span>
        <span data-lang-show="hi">राज्य सेवाओं में आम समस्याएं एवं समाधान (6 Real-World Problem Solvers)</span>
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 18px;">
        
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 5px solid #ef4444; border-radius: 12px; padding: 20px;">
          <strong style="color: var(--color-primary); font-size: 1.1rem; display: block; margin-bottom: 8px;">1. e-District / RTPS पर आवेदन रिजेक्ट होने पर क्या करें?</strong>
          <p style="font-size: 0.92rem; color: var(--color-text); margin-0; line-height: 1.6;">
            पोर्टल पर रिजेक्शन का कारण (जैसे पुराना शपथ पत्र, अस्पष्ट खतौनी, या आय सीमा असंगतता) देखें। 'Re-apply / Modify' विकल्प से सही दस्तावेज़ अपलोड करें या सेवा का अधिकार (Right to Public Services RTPS) के तहत प्रथम अपीलीय प्राधिकारी (SDO) को अपील दर्ज करें।
          </p>
        </div>

        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 5px solid #f59e0b; border-radius: 12px; padding: 20px;">
          <strong style="color: var(--color-primary); font-size: 1.1rem; display: block; margin-bottom: 8px;">2. डिजिटल भूलेख (Land Records) में नाम या रकबा गलत होना</strong>
          <p style="font-size: 0.92rem; color: var(--color-text); margin-0; line-height: 1.6;">
            यदि खसरा-खतौनी या 7/12 में वर्तनी त्रुटि या रकबा कम दिख रहा है, तो राज्य के राजस्व पोर्टल (जैसे UP Bhulekh / Mahabhulekh) पर 'दुरुस्ती / खतौनी सुधार आवेदन' दाखिल करें और अपनी रजिस्ट्री की प्रमाणित प्रति संलग्न करें।
          </p>
        </div>

        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 5px solid #10b981; border-radius: 12px; padding: 20px;">
          <strong style="color: var(--color-primary); font-size: 1.1rem; display: block; margin-bottom: 8px;">3. राशन कार्ड e-KYC या फिंगरप्रिंट मिसमैच का समाधान</strong>
          <p style="font-size: 0.92rem; color: var(--color-text); margin-0; line-height: 1.6;">
            उचित मूल्य दुकान (Ration Dealer) के e-PoS मशीन पर बायोमेट्रिक फेल होने पर 'IRIS Scanner' (आंख की पुतली) से सत्यापन कराएं या खाद्य आपूर्ति विभाग के पोर्टल पर परिवार के अन्य सदस्य का आधार सीडिंग अपडेट करें।
          </p>
        </div>

        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 5px solid #3b82f6; border-radius: 12px; padding: 20px;">
          <strong style="color: var(--color-primary); font-size: 1.1rem; display: block; margin-bottom: 8px;">4. पेंशन (वृद्धावस्था, विधवा, दिव्यांग) पेंडिंग रहना</strong>
          <p style="font-size: 0.92rem; color: var(--color-text); margin-0; line-height: 1.6;">
            यदि समाज कल्याण विभाग के पोर्टल पर फॉर्म ब्लॉक (BDO) या तहसीलदार स्तर पर 30 दिन से अधिक अटका है, तो बैंक खाते में NPCI DBT एक्टिवेशन जांचें और खंड विकास अधिकारी कार्यालय में आवेदन रसीद दिखाकर भौतिक सत्यापन पूरा कराएं।
          </p>
        </div>

        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 5px solid #8b5cf6; border-radius: 12px; padding: 20px;">
          <strong style="color: var(--color-primary); font-size: 1.1rem; display: block; margin-bottom: 8px;">5. जाति प्रमाण पत्र में सेंट्रल फॉर्मेट कैसे प्राप्त करें?</strong>
          <p style="font-size: 0.92rem; color: var(--color-text); margin-0; line-height: 1.6;">
            केंद्रीय भर्तियों (SSC, UPSC, Railway) हेतु पहले राज्य स्तरीय जाति प्रमाण पत्र बनवाएं, फिर उसी सर्टिफिकेट नंबर के आधार पर तहसीलदार कार्यालय से 'Prescribed Central Format' पर प्रतिहस्ताक्षरित (Countersigned) प्रमाण पत्र प्राप्त करें।
          </p>
        </div>

        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 5px solid #ec4899; border-radius: 12px; padding: 20px;">
          <strong style="color: var(--color-primary); font-size: 1.1rem; display: block; margin-bottom: 8px;">6. CM हेल्पलाइन और जनसुनवाई पर त्वरित कार्रवाई कैसे लें?</strong>
          <p style="font-size: 0.92rem; color: var(--color-text); margin-0; line-height: 1.6;">
            राज्य के मुख्यमंत्री पोर्टल (जैसे 1076, 181) पर शिकायत दर्ज करते समय स्पष्ट रूप से विभाग, संबंधित अधिकारी का पद और पूर्व आवेदन संख्या का उल्लेख करें। 7 कार्यदिवसों में नोडल अधिकारी द्वारा कार्रवाई अनिवार्य होती है।
          </p>
        </div>

      </div>
    </section>

    <!-- 10 VISIBLE FAQS ACCORDIONS -->
    <section class="service-section" style="margin-top: 40px;">
      <h2 style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        ❓ <span data-lang-show="en">Frequently Asked Questions (FAQs)</span>
        <span data-lang-show="hi">अक्सर पूछे जाने वाले सवाल (FAQs)</span>
      </h2>

      <details class="faq-item" open style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>1. राज्य सरकारी सेवाओं (State Government Services) के लिए कौन से पोर्टल होते हैं?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          प्रत्येक राज्य का अपना आधिकारिक e-District या सेवा पोर्टल होता है, जैसे उत्तर प्रदेश का e-District UP (edistrict.up.gov.in), बिहार का RTPS ServiceOnline (serviceonline.bihar.gov.in), महाराष्ट्र का Aaple Sarkar (aaplesarkar.mahaonline.gov.in), और राजस्थान का SSO Rajasthan (sso.rajasthan.gov.in)।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>2. आय, जाति व मूल निवास प्रमाण पत्र किस पोर्टल से बनते हैं?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          संबंधित राज्य के e-District / RTPS पोर्टल अथवा अपने नजदीकी जन सेवा केंद्र (CSC / e-Seva Kendra) के माध्यम से ऑनलाइन आवेदन किया जाता है और 7 से 15 कार्यदिवसों में डिजिटल हस्ताक्षरित प्रमाण पत्र जारी होता है।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>3. क्या किसी एक राज्य का जाति प्रमाण पत्र दूसरे राज्य में मान्य होता है?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          केंद्रीय सरकारी नौकरियों (UPSC, SSC, Railway, Banking) हेतु केंद्र सरकार के प्रारूप (Central Govt Format) पर जारी OBC/SC/ST/EWS प्रमाण पत्र पूरे भारत में मान्य होता है। राज्य स्तरीय भर्तियों हेतु उसी संबंधित राज्य का प्रमाण पत्र अनिवार्य होता है।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>4. जमीन के रिकॉर्ड (खसरा, खतौनी, 7/12, जमाबंदी) ऑनलाइन कैसे देखें?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          राज्यों के डिजिटल भूलेख पोर्टलों पर खसरा नंबर या खाता नंबर दर्ज करके मुफ्त खतौनी नकल व भू-नक्शा देखा जा सकता है (उदा. Bhulekh UP, Mahabhulekh, Apna Khata Rajasthan, Bhuiyan CG)।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>5. एक राज्य से दूसरे राज्य में जाने पर राशन कार्ड ट्रांसफर कैसे करें?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          One Nation One Ration Card (ONORC) योजना के तहत देश के किसी भी राज्य में बायोमेट्रिक ई-केवाईसी द्वारा राशन लिया जा सकता है। स्थायी स्थानांतरण के लिए पुराने राज्य से Deletion Certificate लेकर नए राज्य में आवेदन करें।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>6. राज्य महिला कल्याण योजनाओं (लाडकी बहीण, लाडली बहना, महतारी वंदन) का लाभ कैसे लें?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          संबंधित राज्य के विशेष महिला पोर्टल या आंगनवाड़ी केंद्र/सीएससी के माध्यम से परिवार पहचान पत्र, आधार सीडेड बैंक खाता और आय घोषणा पत्र संलग्न करके आवेदन किया जाता है।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>7. राज्य सरकारी योजना का स्टेटस ऑनलाइन कैसे चेक करें?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          आवेदन के समय प्राप्त एक्नॉलेजमेंट / एप्लीकेशन नंबर (Application Ref No) लेकर राज्य पोर्टल के Track Status / आवेदन की स्थिति विकल्प में जाएं।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>8. सीएससी केंद्र (CSC / VLE) से राज्य सेवाएं कैसे प्राप्त करें?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          हमारे CSC Locator टूल के माध्यम से अपने पिनकोड पर निकटतम जन सेवा केंद्र खोजें और न्यूनतम सरकारी शुल्क देकर सभी प्रमाणपत्र और ई-केवाईसी सेवाएं प्राप्त करें।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>9. राज्य स्तर पर जन शिकायत (CM Helpline) कैसे दर्ज करें?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          प्रत्येक राज्य का अपना ऑनलाइन समाधान पोर्टल व हेल्पलाइन होती है (जैसे UP Jansunwai 1076, MP CM Helpline 181, Bihar Lok Shikayat, Rajasthan Sampark 181) जहां ऑनलाइन शिकायत दर्ज कर समाधान पाया जा सकता है।
        </div>
      </details>

      <details class="faq-item" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>10. मतदाता सूची में नाम जुड़वाने या संशोधन के लिए राज्य अनुसार प्रक्रिया क्या है?</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          भारत निर्वाचन आयोग के राष्ट्रीय पोर्टल voters.eci.gov.in पर अथवा हमारे State SIR Voter List 2026 पेज से अपने राज्य के जिले व विधानसभा की संपूर्ण ड्राफ्ट मतदाता सूची पीडीएफ डाउनलोड कर सकते हैं।
        </div>
      </details>
    </section>

    <!-- CITIZEN TOOLS GRID -->
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
    </section>

    <!-- VIP TELEGRAM BANNER -->
    <div style="background: linear-gradient(135deg, #0088cc 0%, #005f8f 100%); border-radius: 14px; padding: 26px; color: #fff; margin: 40px 0; text-align: center; box-shadow: 0 6px 20px rgba(0,136,204,0.25);">
      <h3 style="margin: 0 0 8px 0; color: #fff; font-size: 1.45rem;">✈️ SarkariSewa VIP Telegram Community</h3>
      <p style="margin: 0 0 18px 0; color: #e0f2fe; font-size: 0.95rem; line-height: 1.6;">
        भारत के सभी 28 राज्यों व 8 केंद्र शासित प्रदेशों की नवीनतम सरकारी योजनाओं, प्रमाण पत्रों, नौकरियों और राशन कार्ड की सबसे तेज़ जानकारी सीधे अपने मोबाइल पर पाएं।
      </p>
      <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" class="btn" style="background: #fff; color: #0088cc; font-weight: 700; padding: 12px 28px; text-decoration: none; border-radius: 8px; display: inline-block; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
        Join Official Telegram Channel ↗
      </a>
    </div>

  </main>

  <div id="site-footer"></div>

  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/consent.js"></script>
  <script src="../assets/js/i18n-helper.js"></script>
  <script src="../assets/js/supabase-client.js"></script>
  <script src="../assets/js/services-data.js"></script>
  <script src="../assets/js/share-widget.js"></script>
  <script src="../assets/js/service-template.js"></script>
</body>
</html>'''

    with open(INDEX_PATH, 'w', encoding='utf-8') as fp:
        fp.write(html_content)
    print(f'Upgraded {INDEX_PATH} ({len(html_content.encode("utf-8"))/1024:.1f} KB)')

if __name__ == '__main__':
    build_states_index()