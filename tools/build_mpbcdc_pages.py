# build_mpbcdc_pages.py
import os

ROOT = r"C:\Users\Lenovo\Desktop\SarkariSewaIndia\SarkariSewa_Merged_Production"

# 1. DIRECT LOAN YOJANA HTML
dl_html = """<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MPBCDC Direct Loan Yojana — ₹1 लाख तक 50% सब्सिडी + 4% लोन Calculator | SarkariSewa</title>
    <meta name="description" content="MPBCDC Direct Loan Yojana me ₹1,00,000 tak ke project par 50% subsidy aur 45% loan sirf 4% interest par milta hai. Free calculator, documents, eligibility aur step-by-step apply guide.">
    <link rel="canonical" href="https://sarkarisewaindia.com/mpbcdc-direct-loan-yojana.html">
    
    <!-- Favicons -->
    <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon-16.png">
    <link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png">
    <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico">
    <link rel="manifest" href="manifest.json">
    
    <!-- OG Tags -->
    <meta property="og:title" content="MPBCDC Direct Loan Yojana — ₹1 लाख तक 50% सब्सिडी + 4% लोन">
    <meta property="og:description" content="MPBCDC Direct Loan Yojana me ₹1,00,000 tak ke project par 50% subsidy aur 45% loan sirf 4% interest par milta hai. Free calculator & guide.">
    <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-mpbcdc.jpg">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://sarkarisewaindia.com/mpbcdc-direct-loan-yojana.html">
    <meta name="twitter:card" content="summary_large_image">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;600&family=JetBrains+Mono:wght@400;700&family=Noto+Sans+Devanagari:wght@400;600;700&family=Noto+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/hidden-tax-theme.css">

    <!-- JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "GovernmentService",
          "name": "MPBCDC Direct Loan Yojana",
          "serviceType": "Government Subsidized Business Loan",
          "provider": {
            "@type": "Organization",
            "name": "MPBCDC, Maharashtra"
          },
          "areaServed": "Maharashtra, India",
          "description": "Direct Loan scheme for small business projects up to ₹1,00,000. Offers 50% subsidy, 45% direct loan at 4% annual interest, and 5% promoter contribution for SC and Neo-Buddhist communities in Maharashtra."
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://sarkarisewaindia.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "MPBCDC Yojana",
              "item": "https://sarkarisewaindia.com/mpbcdc-yojana.html"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Direct Loan Yojana",
              "item": "https://sarkarisewaindia.com/mpbcdc-direct-loan-yojana.html"
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Direct Loan Yojana me maximum loan kitna milta hai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Direct Loan scheme me maximum project cost ₹1,00,000 (एक लाख रुपये) tak ho sakti hai. Isme 50% (₹50,000) subsidy milti hai, 45% (₹45,000) direct loan Corporation dwara 4% interest par milta hai, aur 5% (₹5,000) khud ka contribution hota hai."
              }
            },
            {
              "@type": "Question",
              "name": "Kya 4% interest rate fixed hota hai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Haan, Corporation ka direct loan component 4% per annum fixed simple interest rate par milta hai. Ye bank market loan se bahut sasta aur affordable hai."
              }
            },
            {
              "@type": "Question",
              "name": "Kya ye loan bank ke through milta hai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nahi, Direct Loan Scheme me loan amount seedha Mahatma Phule Corporation (MPBCDC) dwara sanction aur disburse kiya jata hai. Isme bank intermediary nahi hota."
              }
            },
            {
              "@type": "Question",
              "name": "Direct Loan chukane ki samay-seema (tenure) kitni hoti hai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Direct loan repayment ki avadhi aamtaur par 3 saal se 5 saal (36 se 60 mahine) hoti hai, jiska bhugtan masik kist (EMI) ke roop me karna hota hai."
              }
            }
          ]
        }
      ]
    }
    </script>
</head>
<body class="htc-scope">
    <script>window.SS_ROOT = "";</script>
    <div id="site-header"></div>

    <main id="main-content" class="htc-scope">
        <div class="htc-wrap">
            <!-- Breadcrumbs -->
            <nav class="breadcrumb" aria-label="Breadcrumb">
                <a href="index.html" data-i18n="nav_home">Home</a>
                <span class="sep">/</span>
                <a href="mpbcdc-yojana.html">MPBCDC योजना</a>
                <span class="sep">/</span>
                <span class="current">Direct Loan Yojana</span>
            </nav>

            <!-- Hero Section -->
            <section class="htc-hero">
                <div>
                    <span class="htc-hero__eyebrow">MPBCDC · Direct Loan · 4% Interest</span>
                    <h1 data-i18n="dl_hero_title">MPBCDC Direct Loan Yojana — ₹1 लाख तक 50% सब्सिडी + 4% लोन</h1>
                    <p data-i18n="dl_hero_desc">
                        महात्मा फुले मागासवर्गीय विकास महामंडळ (MPBCDC) की सबसे लोकप्रिय डायरेक्ट लोन योजना। ₹1,00,000 तक के छोटे व्यवसाय प्रोजेक्ट पर 50% सरकारी अनुदान (सब्सिडी), 45% डायरेक्ट लोन मात्र 4% वार्षिक ब्याज पर, और सिर्फ 5% अपना अंशदान। महाराष्ट्र के अनुसूचित जाति (SC) और नव-बौद्ध समुदाय के लिए विशेष।
                    </p>
                    <a href="#mpbcdc-dl-form" class="htc-hero__cta">Calculator Try Karein →</a>
                </div>
                <div class="htc-hero__art" aria-hidden="true">
                    <span>💰</span>
                    <span>📊</span>
                    <span>✅</span>
                </div>
            </section>

            <!-- Overview Section -->
            <section class="htc-section">
                <h2 data-i18n="dl_overview_heading">Direct Loan Yojana Kya Hai? (योजना का विवरण)</h2>
                <p>
                    <strong>Direct Loan Scheme (प्रत्यक्ष कर्ज योजना)</strong> महात्मा फुले मागासवर्गीय विकास महामंडळ (MPBCDC) की एक प्रमुख स्वरोजगार प्रोत्साहन योजना है। यह योजना विशेष रूप से उन व्यक्तियों के लिए बनाई गई है जो अपना छोटा व्यवसाय (Small Business/Self-Employment) शुरू करना चाहते हैं, लेकिन जिनके पास भारी बैंक गारंटी या अधिक पूंजी नहीं है।
                </p>
                <p>
                    इस योजना की सबसे बड़ी खासियत यह है कि इसमें ऋण और अनुदान (Subsidy) सीधा निगम (Corporation) द्वारा प्रदान किया जाता है, किसी व्यावसायिक बैंक के माध्यम से नहीं। इसलिए इसमें बैंक के चक्कर काटने या भारी ब्याज दर देने की आवश्यकता नहीं होती। योजना के तहत प्रोजेक्ट लागत का कुल वित्तीय ढांचा निम्न प्रकार बांटा जाता है:
                </p>
                <ul>
                    <li><strong>50% शासकीय अनुदान (Grant/Subsidy):</strong> अधिकतम ₹50,000 तक सरकार द्वारा मुफ़्त अनुदान दिया जाता है जिसे वापस नहीं करना होता।</li>
                    <li><strong>45% निगम का सीधा लोन (Direct Loan):</strong> अधिकतम ₹45,000 तक निगम 4% वार्षिक रियायती ब्याज दर पर ऋण देता है।</li>
                    <li><strong>5% लाभार्थी अंशदान (Promoter Contribution):</strong> केवल 5% (अधिकतम ₹5,000) आवेदक को स्वयं अपनी जेब से लगाना होता है।</li>
                </ul>
            </section>

            <!-- Funding Split Grid -->
            <section class="htc-section">
                <h2>Funding Split Breakdown (₹1,00,000 प्रोजेक्ट पर उदाहरण)</h2>
                <div class="htc-stat-grid">
                    <div class="htc-stat">
                        <div class="htc-stat__label">कुल प्रोजेक्ट लागत</div>
                        <div class="htc-stat__value">₹1,00,000</div>
                    </div>
                    <div class="htc-stat htc-stat--highlight">
                        <div class="htc-stat__label">सरकारी सब्सिडी (50%)</div>
                        <div class="htc-stat__value">₹50,000</div>
                    </div>
                    <div class="htc-stat">
                        <div class="htc-stat__label">डायरेक्ट लोन (45% @ 4%)</div>
                        <div class="htc-stat__value">₹45,000</div>
                    </div>
                    <div class="htc-stat">
                        <div class="htc-stat__label">स्वयं का अंशदान (5%)</div>
                        <div class="htc-stat__value">₹5,00,000</div>
                    </div>
                </div>
            </section>

            <!-- Calculator Form -->
            <form class="htc-card" id="mpbcdc-dl-form">
                <h2>Direct Loan Calculator (सब्सिडी व ईएमआई कैलकुलेटर)</h2>
                <p style="color:var(--htc-text-muted); font-size:0.9rem; margin-bottom:16px;">
                    अपनी प्रोजेक्ट लागत दर्ज करें और जानें कि आपको कितनी सब्सिडी मिलेगी, कितना लोन मिलेगा और 4% ब्याज पर मासिक किश्त (EMI) कितनी बनेगी।
                </p>
                <div class="htc-topfields">
                    <div class="htc-field">
                        <label for="mpbcdc-dl-cost">Project Cost (₹) — Max ₹1,00,000</label>
                        <input type="number" id="mpbcdc-dl-cost" min="10000" max="100000" step="1000" placeholder="e.g. 80000" value="100000" required>
                    </div>
                    <div class="htc-field">
                        <label for="mpbcdc-dl-tenure">Loan Tenure (Months)</label>
                        <input type="number" id="mpbcdc-dl-tenure" min="12" max="84" value="36" required>
                    </div>
                </div>
                <button type="submit" class="htc-submit">Calculate Subsidy & EMI</button>
            </form>

            <!-- Calculator Results -->
            <section class="htc-results" id="mpbcdc-dl-results">
                <h2>📊 आपकी योजना गणना (Direct Loan Calculation Breakdown)</h2>
                <div class="htc-stat-grid">
                    <div class="htc-stat">
                        <div class="htc-stat__label">प्रोजेक्ट लागत</div>
                        <div class="htc-stat__value" id="mpbcdc-dl-r-cost">₹0</div>
                    </div>
                    <div class="htc-stat htc-stat--highlight">
                        <div class="htc-stat__label">सरकारी सब्सिडी (Grant)</div>
                        <div class="htc-stat__value" id="mpbcdc-dl-r-subsidy">₹0</div>
                    </div>
                    <div class="htc-stat">
                        <div class="htc-stat__label">निगम लोन हिस्सा</div>
                        <div class="htc-stat__value" id="mpbcdc-dl-r-loan">₹0</div>
                    </div>
                    <div class="htc-stat">
                        <div class="htc-stat__label">स्वयं का योगदान (5%)</div>
                        <div class="htc-stat__value" id="mpbcdc-dl-r-own">₹0</div>
                    </div>
                    <div class="htc-stat">
                        <div class="htc-stat__label">ब्याज दर</div>
                        <div class="htc-stat__value" id="mpbcdc-dl-r-rate">4% p.a.</div>
                    </div>
                </div>
                <div class="htc-stat-grid" style="margin-top:12px;">
                    <div class="htc-stat htc-stat--highlight">
                        <div class="htc-stat__label">मासिक किश्त (Monthly EMI)</div>
                        <div class="htc-stat__value" id="mpbcdc-dl-r-emi">₹0</div>
                    </div>
                    <div class="htc-stat">
                        <div class="htc-stat__label">कुल ब्याज (Total Interest)</div>
                        <div class="htc-stat__value" id="mpbcdc-dl-r-interest">₹0</div>
                    </div>
                    <div class="htc-stat">
                        <div class="htc-stat__label">कुल लोन पुनर्भुगतान</div>
                        <div class="htc-stat__value" id="mpbcdc-dl-r-total">₹0</div>
                    </div>
                </div>
            </section>

            <!-- Suitable Businesses -->
            <section class="htc-section">
                <h2>Direct Loan Scheme के लिए उपयुक्त व्यवसाय (Eligible Businesses)</h2>
                <p>इस योजना के तहत निम्नलिखित छोटे व मध्यम व्यवसाय शुरू करने के लिए आर्थिक सहायता ली जा सकती है:</p>
                <ul>
                    <li>किराना दुकान, सिलाई सेंटर, जनरल स्टोर, ब्यूटी पार्लर</li>
                    <li>मोबाइल रिपेयरिंग व एक्सेसरीज शॉप, फोटोकॉपी/लैमिनेशन सेंटर</li>
                    <li>चाय-नाश्ता स्टॉल, फ़ूड कार्ट, सब्जी व फल विक्रेता</li>
                    <li>ऑटो-रिक्शा, टू-व्हीलर रिपेयरिंग वर्कशॉप</li>
                    <li>छोटे कुटीर उद्योग, अगरबत्ती निर्माण, मोमबत्ती निर्माण</li>
                </ul>
            </section>

            <!-- Eligibility & Documents -->
            <section class="htc-section">
                <h2>पात्रता और आवश्यक दस्तावेज़ (Eligibility & Required Documents)</h2>
                <h3>पात्रता शर्तें:</h3>
                <ul>
                    <li>महाराष्ट्र का स्थाई निवासी होना अनिवार्य है।</li>
                    <li>अनुसूचित जाति (SC) या नव-बौद्ध (Neo-Buddhist) समुदाय से होना चाहिए।</li>
                    <li>आयु 18 से 50 वर्ष के बीच होनी चाहिए।</li>
                    <li>परिवार की वार्षिक आय ₹2,50,000 (ढाई लाख रुपये) से कम होनी चाहिए।</li>
                    <li>आवेदक किसी भी अन्य सरकारी योजना या बैंक लोन में डिफॉल्टर नहीं होना चाहिए।</li>
                </ul>

                <h3>आवश्यक दस्तावेज़:</h3>
                <ul>
                    <li>आधार कार्ड व पैन कार्ड</li>
                    <li>जाति प्रमाण पत्र (Caste Certificate — SC/Neo-Buddhist)</li>
                    <li>उत्पन्न प्रमाण पत्र (Income Certificate — सक्षम प्राधिकारी द्वारा जारी)</li>
                    <li>डोमिसाइल प्रमाण पत्र (Residence/Domicile Certificate)</li>
                    <li>आयु का प्रमाण (स्कूल छोड़ने का प्रमाण पत्र / जन्म प्रमाण पत्र)</li>
                    <li>बैंक पासबुक (राष्ट्रीयकृत बैंक खाते का विवरण)</li>
                    <li>2 पासपोर्ट साइज फोटो</li>
                    <li>व्यवसाय स्थल का प्रमाण (किरायानामा / मालिकाना दस्तावेज़)</li>
                </ul>
            </section>

            <!-- Project Report Callout Box -->
            <a class="htc-cta" href="project-report/index.html">
                <span class="htc-cta__icon">📄</span>
                <div class="htc-cta__text">
                    <strong>बैंक या निगम के लिए Project Report चाहिए?</strong>
                    <span>MPBCDC योजना में लोन आवेदन के लिए प्रोजेक्ट रिपोर्ट अनिवार्य है — हमारे फ्री Project Report Generator से 2 मिनट में तैयार करें!</span>
                </div>
                <span class="htc-cta__arrow">→</span>
            </a>

            <!-- Step by Step Apply Guide -->
            <section class="htc-section">
                <h2>ऑनलाइन आवेदन कैसे करें? (Step-by-Step Online Apply)</h2>
                <ol>
                    <li>आधिकारिक पोर्टल <strong>mahadisha.in</strong> या <strong>mpbcdc.maharashtra.gov.in</strong> पर जाएं।</li>
                    <li>'New Registration' पर क्लिक करके आधार नंबर और मोबाइल नंबर दर्ज करें।</li>
                    <li>ओटीपी सत्यापन के बाद अपना व्यक्तिगत विवरण, पता और जाति की जानकारी भरें।</li>
                    <li>'Direct Loan Scheme (प्रत्यक्ष कर्ज योजना)' का चयन करें।</li>
                    <li>अपने प्रस्तावित व्यवसाय की जानकारी और लागत दर्ज करें।</li>
                    <li>सभी आवश्यक दस्तावेज़ (जाति, आय, आधार आदि) स्कैन करके अपलोड करें।</li>
                    <li>आवेदन सबमिट करें और प्राप्त एप्लीकेशन नंबर (Application ID) का प्रिंटआउट संभाल कर रखें।</li>
                    <li>ज़िला कार्यालय (District Office) द्वारा सत्यापन और साक्षात्कार के बाद लोन स्वीकृत होता है।</li>
                </ol>
            </section>

            <!-- Related Tools Section -->
            <section class="htc-section htc-related">
                <h2>अन्य MPBCDC योजनाएं व उपयोगी टूल</h2>
                <div class="htc-related-grid">
                    <a class="htc-related-card" href="mpbcdc-yojana.html">
                        <span class="htc-related-card__icon">🏛️</span>
                        <div><strong>MPBCDC योजना गाइड (Hub)</strong><span>सभी 3 योजनाओं की तुलना और मुख्य जानकारी देखें</span></div>
                    </a>
                    <a class="htc-related-card" href="mpbcdc-seed-capital-yojana.html">
                        <span class="htc-related-card__icon">🏦</span>
                        <div><strong>Seed Capital Yojana</strong><span>₹5 लाख तक Bank + Corporation Loan Calculator</span></div>
                    </a>
                    <a class="htc-related-card" href="mpbcdc-subsidy-yojana.html">
                        <span class="htc-related-card__icon">📋</span>
                        <div><strong>50% Subsidy Yojana</strong><span>₹50,000 तक 50% सरकारी अनुदान कैलकुलेटर</span></div>
                    </a>
                    <a class="htc-related-card" href="project-report/index.html">
                        <span class="htc-related-card__icon">📄</span>
                        <div><strong>Project Report Generator</strong><span>PMEGP व Mudra लोन के लिए फ्री प्रोजेक्ट रिपोर्ट बनाएं</span></div>
                    </a>
                </div>
            </section>

            <!-- MPBCDC Dedicated Official Links Section -->
            <section class="htc-section" style="background: linear-gradient(135deg, #1e1e38, #2a2a52); color: #ffffff; border-radius: 16px; padding: 28px 24px; margin-top: 32px; box-shadow: 0 8px 24px rgba(0,0,0,0.12);">
                <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 14px;">
                    <span style="font-size: 2.2rem;">🏛️</span>
                    <div>
                        <h2 style="margin: 0; font-size: 1.35rem; color: #ffffff; font-weight: 700;">MPBCDC आधिकारिक पोर्टल लिंक (Dedicated Official Links)</h2>
                        <p style="margin: 4px 0 0 0; color: #cbd5e1; font-size: 0.92rem;">महात्मा फुले मागासवर्गीय विकास महामंडळ (MPBCDC) महाराष्ट्र सरकार के आधिकारिक पोर्टल लिंक</p>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 20px;">
                    <a href="https://mpbcdc.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; background: #2563eb; color: #ffffff; padding: 14px 20px; border-radius: 10px; font-weight: 600; text-decoration: none; font-size: 1rem; border: 1px solid #3b82f6; transition: all 0.2s ease;">
                        <span>🌐 MPBCDC Official Portal</span>
                        <span style="font-size: 1.1rem;">↗</span>
                    </a>
                    <a href="https://mpbcdc.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; background: #059669; color: #ffffff; padding: 14px 20px; border-radius: 10px; font-weight: 600; text-decoration: none; font-size: 1rem; border: 1px solid #10b981; transition: all 0.2s ease;">
                        <span>📝 Online Application & Login</span>
                        <span style="font-size: 1.1rem;">↗</span>
                    </a>
                    <a href="https://www.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.1); color: #ffffff; padding: 14px 20px; border-radius: 10px; font-weight: 600; text-decoration: none; font-size: 1rem; border: 1px solid rgba(255,255,255,0.2); transition: all 0.2s ease;">
                        <span>🏢 Maharashtra Govt Portal</span>
                        <span style="font-size: 1.1rem;">↗</span>
                    </a>
                </div>
                <div style="margin-top: 18px; padding-top: 14px; border-top: 1px dashed rgba(255,255,255,0.15); font-size: 0.88rem; color: #94a3b8; display: flex; align-items: center; gap: 8px;">
                    <span>ℹ️</span>
                    <span>आधिकारिक वेबसाइट: <strong>mpbcdc.maharashtra.gov.in</strong> — आवेदन एवं स्थिति की जांच के लिए हमेशा आधिकारिक पोर्टल का ही प्रयोग करें।</span>
                </div>
            </section>

            <!-- FAQ Section -->
            <section class="htc-section htc-faq">
                <h2>सामान्य प्रश्न (Frequently Asked Questions)</h2>
                <details>
                    <summary>Direct Loan Yojana me maximum kitna milta hai?</summary>
                    <p>Direct Loan scheme me maximum project cost ₹1,00,000 (एक लाख रुपये) tak ho sakti hai. Isme 50% (₹50,000) subsidy milti hai, 45% (₹45,000) direct loan Corporation dwara 4% interest par milta hai, aur 5% (₹5,00,000) khud ka contribution hota hai.</p>
                </details>
                <details>
                    <summary>Kya 4% interest rate fixed hota hai?</summary>
                    <p>Haan, Corporation ka direct loan component 4% per annum fixed simple interest rate par milta hai. Ye bank market loan se bahut sasta aur affordable hai.</p>
                </details>
                <details>
                    <summary>Kya ye loan bank ke through milta hai?</summary>
                    <p>Nahi, Direct Loan Scheme me loan amount seedha Mahatma Phule Corporation (MPBCDC) dwara sanction aur disburse kiya jata hai. Isme bank intermediary nahi hota.</p>
                </details>
                <details>
                    <summary>Direct Loan chukane ki samay-seema (tenure) kitni hoti hai?</summary>
                    <p>Direct loan repayment ki avadhi aamtaur par 3 saal se 5 saal (36 se 60 mahine) hoti hai, jiska bhugtan masik kist (EMI) ke roop me karna hota hai.</p>
                </details>
            </section>

            <!-- Disclaimer -->
            <div class="htc-disclaimer">
                <strong>अस्वीकरण (Disclaimer)</strong>
                यह पेज केवल सूचनात्मक और शैक्षणिक मार्गदर्शन के लिए है। योजना की सटीक सीमाएं, ब्याज दरें और सब्सिडी राशि समय-समय पर महाराष्ट्र सरकार द्वारा संशोधित की जा सकती हैं। ऑनलाइन आवेदन करने से पहले आधिकारिक वेबसाइट mpbcdc.maharashtra.gov.in या ज़िला कार्यालय से नवीनतम दिशानिर्देशों की पुष्टि अवश्य करें। SarkariSewa Portal एक स्वतंत्र गाइड है — यह कोई सरकारी वेबसाइट नहीं है।
            </div>
        </div>
    </main>

    <div id="site-footer"></div>

    <script src="assets/js/main.js"></script>
    <script src="assets/js/consent.js"></script>
    <script src="assets/js/i18n-helper.js"></script>
    <script src="assets/js/mpbcdc-calculator.js"></script>
</body>
</html>
"""

# 2. SEED CAPITAL YOJANA HTML
sc_html = """<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MPBCDC Seed Capital Yojana — ₹5 लाख तक Bank + Corporation Loan Calculator | SarkariSewa</title>
    <meta name="description" content="MPBCDC Seed Capital Yojana me ₹5,00,000 tak ke project par Bank 75% loan + Corporation 20% seed capital (max ₹1 lakh) milta hai. Free EMI calculator, eligibility, documents aur apply process.">
    <link rel="canonical" href="https://sarkarisewaindia.com/mpbcdc-seed-capital-yojana.html">
    
    <!-- Favicons -->
    <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon-16.png">
    <link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png">
    <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico">
    <link rel="manifest" href="manifest.json">
    
    <!-- OG Tags -->
    <meta property="og:title" content="MPBCDC Seed Capital Yojana — ₹5 लाख तक Bank + Corporation Loan">
    <meta property="og:description" content="MPBCDC Seed Capital Yojana me ₹5,00,000 tak ke project par Bank 75% loan + Corporation 20% seed capital (max ₹1 lakh) milta hai. Free calculator & guide.">
    <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-mpbcdc.jpg">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://sarkarisewaindia.com/mpbcdc-seed-capital-yojana.html">
    <meta name="twitter:card" content="summary_large_image">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;600&family=JetBrains+Mono:wght@400;700&family=Noto+Sans+Devanagari:wght@400;600;700&family=Noto+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/hidden-tax-theme.css">

    <!-- JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "GovernmentService",
          "name": "MPBCDC Seed Capital Yojana",
          "serviceType": "Government Backed Seed Capital Loan",
          "provider": {
            "@type": "Organization",
            "name": "MPBCDC, Maharashtra"
          },
          "areaServed": "Maharashtra, India",
          "description": "Seed Capital scheme for medium business projects up to ₹5,00,000. Features 75% bank loan, 20% Corporation seed capital/subsidy (max ₹1,00,000), and 5% promoter contribution for SC and Neo-Buddhist entrepreneurs."
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://sarkarisewaindia.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "MPBCDC Yojana",
              "item": "https://sarkarisewaindia.com/mpbcdc-yojana.html"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Seed Capital Yojana",
              "item": "https://sarkarisewaindia.com/mpbcdc-seed-capital-yojana.html"
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Seed Capital scheme me Corporation se kitni sahayata milti hai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Corporation project cost ka 20% hissa seed capital/subsidy ke roop me deta hai, jiski maximum cap ₹1,00,000 (एक लाख रुपये) hai."
              }
            },
            {
              "@type": "Question",
              "name": "Bank loan par kitna interest lagta hai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bank ka 75% loan hissa rashi bank ki prachalit bajar byaj dar (Market Interest Rate — aamtaur par 9% se 12%) par milta hai."
              }
            },
            {
              "@type": "Question",
              "name": "Kya isme Bank ko Project Report Dena zaroori hai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Haan, Seed Capital Scheme ke liye bank ko ek vishveshniya Business Plan / Detailed Project Report (DPR) Dena aavashyak hai, jisme DSCR, P&L aur Cash Flow ka vivaran ho."
              }
            },
            {
              "@type": "Question",
              "name": "Maximum project cost limit kitni hai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Seed Capital Scheme ke tahat maximum project cost ₹5,00,000 (पांच लाख रुपये) tak ho sakti hai."
              }
            }
          ]
        }
      ]
    }
    </script>
</head>
<body class="htc-scope">
    <script>window.SS_ROOT = "";</script>
    <div id="site-header"></div>

    <main id="main-content" class="htc-scope">
        <div class="htc-wrap">
            <!-- Breadcrumbs -->
            <nav class="breadcrumb" aria-label="Breadcrumb">
                <a href="index.html" data-i18n="nav_home">Home</a>
                <span class="sep">/</span>
                <a href="mpbcdc-yojana.html">MPBCDC योजना</a>
                <span class="sep">/</span>
                <span class="current">Seed Capital Yojana</span>
            </nav>

            <!-- Hero Section -->
            <section class="htc-hero">
                <div>
                    <span class="htc-hero__eyebrow">MPBCDC · Seed Capital · ₹5 Lakh Max</span>
                    <h1 data-i18n="sc_hero_title">MPBCDC Seed Capital Yojana — ₹5 लाख तक Bank + Corporation Loan</h1>
                    <p data-i18n="sc_hero_desc">
                        महात्मा फुले मागासवर्गीय विकास महामंडळ (MPBCDC) की बीज पूंजी योजना (Seed Capital Scheme)। ₹5,00,000 तक के मध्यम व्यावसायिक प्रोजेक्ट के लिए राष्ट्रीयकृत बैंक 75% ऋण देता है, निगम 20% (अधिकतम ₹1,00,000) बीज पूंजी/अनुदान देता है, और मात्र 5% स्वयं का अंशदान होता है। अनुसूचित जाति और नव-बौद्ध उद्यमियों के लिए।
                    </p>
                    <a href="#mpbcdc-sc-form" class="htc-hero__cta">Calculator Try Karein →</a>
                </div>
                <div class="htc-hero__art" aria-hidden="true">
                    <span>🏦</span>
                    <span>💼</span>
                    <span>📊</span>
                </div>
            </section>

            <!-- Overview Section -->
            <section class="htc-section">
                <h2 data-i18n="sc_overview_heading">Seed Capital Yojana Kya Hai? (बीज पूंजी योजना का विवरण)</h2>
                <p>
                    <strong>Seed Capital Scheme (बीज पूंजी योजना)</strong> MPBCDC की उन उद्यमियों के लिए प्रमुख योजना है जो थोड़े बड़े स्तर पर व्यापार या उद्योग स्थापित करना चाहते हैं, जिसके लिए ₹1 लाख से ₹5 लाख तक की पूंजी की आवश्यकता होती है।
                </p>
                <p>
                    इस योजना में बैंक और निगम (Corporation) का संयुक्त वित्तीय ढांचा (Tie-up) होता है:
                </p>
                <ul>
                    <li><strong>75% बैंक लोन:</strong> कुल प्रोजेक्ट लागत का 75% हिस्सा राष्ट्रीयकृत बैंक द्वारा ऋण के रूप में मंजूर किया जाता है (बाजार ब्याज दर पर)।</li>
                    <li><strong>20% निगम बीज पूंजी (Seed Capital / Subsidy):</strong> निगम 20% हिस्सा (अधिकतम ₹1,00,000) बीज पूंजी व सब्सिडी के रूप में प्रदान करता है।</li>
                    <li><strong>5% लाभार्थी अंशदान:</strong> केवल 5% राशि उद्यमी को अपनी तरफ से लगानी होती है।</li>
                </ul>
            </section>

            <!-- Funding Split Grid -->
            <section class="htc-section">
                <h2>Funding Split Breakdown (₹5,00,000 प्रोजेक्ट पर उदाहरण)</h2>
                <div class="htc-stat-grid">
                    <div class="htc-stat">
                        <div class="htc-stat__label">कुल प्रोजेक्ट लागत</div>
                        <div class="htc-stat__value">₹5,00,000</div>
                    </div>
                    <div class="htc-stat">
                        <div class="htc-stat__label">बैंक लोन हिस्सा (75%)</div>
                        <div class="htc-stat__value">₹3,75,000</div>
                    </div>
                    <div class="htc-stat htc-stat--highlight">
                        <div class="htc-stat__label">निगम बीज पूंजी (20% Max ₹1L)</div>
                        <div class="htc-stat__value">₹1,00,000</div>
                    </div>
                    <div class="htc-stat">
                        <div class="htc-stat__label">स्वयं का अंशदान (5%)</div>
                        <div class="htc-stat__value">₹25,000</div>
                    </div>
                </div>
            </section>

            <!-- Calculator Form -->
            <form class="htc-card" id="mpbcdc-sc-form">
                <h2>Seed Capital Calculator (बैंक ईएमआई व वित्तीय विभाजन)</h2>
                <p style="color:var(--htc-text-muted); font-size:0.9rem; margin-bottom:16px;">
                    अपनी प्रोजेक्ट लागत, बैंक ब्याज दर और ऋण अवधि दर्ज करें और तुरंत जानें कि बैंक लोन, निगम बीज पूंजी और मासिक बैंक ईएमआई (EMI) कितनी बनेगी।
                </p>
                <div class="htc-topfields">
                    <div class="htc-field">
                        <label for="mpbcdc-sc-cost">Project Cost (₹) — Max ₹5,00,000</label>
                        <input type="number" id="mpbcdc-sc-cost" min="50000" max="500000" step="5000" placeholder="e.g. 300000" value="500000" required>
                    </div>
                    <div class="htc-field">
                        <label for="mpbcdc-sc-rate">Bank Interest Rate (%)</label>
                        <input type="number" id="mpbcdc-sc-rate" min="6" max="18" step="0.5" value="10" required>
                    </div>
                    <div class="htc-field">
                        <label for="mpbcdc-sc-tenure">Loan Tenure (Months)</label>
                        <input type="number" id="mpbcdc-sc-tenure" min="12" max="120" value="60" required>
                    </div>
                </div>
                <button type="submit" class="htc-submit">Calculate Bank EMI & Split</button>
            </form>

            <!-- Calculator Results -->
            <section class="htc-results" id="mpbcdc-sc-results">
                <h2>📊 आपकी योजना गणना (Seed Capital Calculation Breakdown)</h2>
                <div class="htc-stat-grid">
                    <div class="htc-stat">
                        <div class="htc-stat__label">प्रोजेक्ट लागत</div>
                        <div class="htc-stat__value" id="mpbcdc-sc-r-cost">₹0</div>
                    </div>
                    <div class="htc-stat">
                        <div class="htc-stat__label">बैंक लोन (75%)</div>
                        <div class="htc-stat__value" id="mpbcdc-sc-r-bank">₹0</div>
                    </div>
                    <div class="htc-stat htc-stat--highlight">
                        <div class="htc-stat__label">निगम बीज पूंजी (20%)</div>
                        <div class="htc-stat__value" id="mpbcdc-sc-r-corp">₹0</div>
                    </div>
                    <div class="htc-stat">
                        <div class="htc-stat__label">स्वयं का योगदान (5%)</div>
                        <div class="htc-stat__value" id="mpbcdc-sc-r-own">₹0</div>
                    </div>
                    <div class="htc-stat">
                        <div class="htc-stat__label">बैंक ब्याज दर</div>
                        <div class="htc-stat__value" id="mpbcdc-sc-r-rate">10% p.a.</div>
                    </div>
                </div>
                <div class="htc-stat-grid" style="margin-top:12px;">
                    <div class="htc-stat htc-stat--highlight">
                        <div class="htc-stat__label">मासिक बैंक किश्त (Monthly EMI)</div>
                        <div class="htc-stat__value" id="mpbcdc-sc-r-emi">₹0</div>
                    </div>
                    <div class="htc-stat">
                        <div class="htc-stat__label">कुल बैंक ब्याज</div>
                        <div class="htc-stat__value" id="mpbcdc-sc-r-interest">₹0</div>
                    </div>
                    <div class="htc-stat">
                        <div class="htc-stat__label">कुल बैंक पुनर्भुगतान</div>
                        <div class="htc-stat__value" id="mpbcdc-sc-r-total">₹0</div>
                    </div>
                </div>
            </section>

            <!-- Suitable Businesses -->
            <section class="htc-section">
                <h2>Seed Capital Scheme के लिए उपयुक्त व्यवसाय (Eligible Businesses)</h2>
                <ul>
                    <li>लघु निर्माण इकाई (Small Manufacturing Units / Garment Factory)</li>
                    <li>ऑटोमोबाइल सर्विस सेंटर, कार वॉशिंग व गैरेज वर्कशॉप</li>
                    <li>डेयरी फार्मिंग, पोल्ट्री फार्म, एग्रो-प्रोसेसिंग प्लांट</li>
                    <li>हार्डवेयर स्टोर, इलेक्ट्रॉनिक शोरूम, बिल्डिंग मटेरियल शॉप</li>
                    <li>डीटीपी, कंप्यूटर ट्रेनिंग सेंटर, आईटी/डिजिटल सर्विस सेंटर</li>
                </ul>
            </section>

            <!-- Eligibility & Documents -->
            <section class="htc-section">
                <h2>पात्रता और आवश्यक दस्तावेज़ (Eligibility & Required Documents)</h2>
                <h3>पात्रता शर्तें:</h3>
                <ul>
                    <li>महाराष्ट्र राज्य का डोमिसाइल प्रमाण पत्र धारक।</li>
                    <li>अनुसूचित जाति (SC) या नव-बौद्ध (Neo-Buddhist) श्रेणी से संबंधित।</li>
                    <li>आयु 18 से 50 वर्ष के मध्य होनी चाहिए।</li>
                    <li>वार्षिक पारिवारिक आय ₹2.5 लाख से कम होना प्राथमिकता मानदंड है।</li>
                    <li>आवेदक का सिविल स्कोर (CIBIL Score) अच्छा होना चाहिए और बैंक डिफॉल्टर नहीं होना चाहिए।</li>
                </ul>

                <h3>आवश्यक दस्तावेज़:</h3>
                <ul>
                    <li>आधार कार्ड व पैन कार्ड</li>
                    <li>जाति प्रमाण पत्र (Caste Certificate)</li>
                    <li>आय प्रमाण पत्र (Income Certificate)</li>
                    <li>डोमिसाइल प्रमाण पत्र (Residence Certificate)</li>
                    <li>विस्तृत प्रोजेक्ट रिपोर्ट (Detailed Project Report / Business Plan — DSCR व P&L विवरण के साथ)</li>
                    <li>बैंक पासबुक एवं CIBIL रिपोर्ट</li>
                    <li>दुकान/इकाई का रेंट एग्रीमेंट या एनओसी</li>
                </ul>
            </section>

            <!-- Project Report Callout Box -->
            <a class="htc-cta" href="project-report/index.html">
                <span class="htc-cta__icon">📄</span>
                <div class="htc-cta__text">
                    <strong>Seed Capital Bank Loan के लिए Project Report चाहिए?</strong>
                    <span>बैंक ₹5 लाख तक के लोन के लिए विस्तृत प्रोजेक्ट रिपोर्ट और DSCR मांगता है — हमारे मुफ़्त Project Report Generator से 2 मिनट में बनाएं!</span>
                </div>
                <span class="htc-cta__arrow">→</span>
            </a>

            <!-- Step by Step Apply Guide -->
            <section class="htc-section">
                <h2>ऑनलाइन आवेदन कैसे करें? (Step-by-Step Online Apply)</h2>
                <ol>
                    <li>पोर्टल <strong>mahadisha.in</strong> या <strong>mpbcdc.maharashtra.gov.in</strong> पर जाकर रजिस्टर करें।</li>
                    <li>'Seed Capital Scheme (बीज पूंजी योजना)' का चयन करें।</li>
                    <li>व्यक्तिगत विवरण, जाति, आय व प्रस्तावित व्यवसाय का पूरा विवरण भरें।</li>
                    <li>अपनी तैयार प्रोजेक्ट रिपोर्ट (PDF) और सभी आवश्यक दस्तावेज़ अपलोड करें।</li>
                    <li>फॉर्म सबमिट करके ऑनलाइन रसीद प्राप्त करें।</li>
                    <li>MPBCDC ज़िला कार्यालय द्वारा दस्तावेज़ों का भौतिक सत्यापन और इंटरव्यू होगा।</li>
                    <li>निगम की अनुशंसा (Recommendation Letter) के बाद फाइल संबंधित बैंक शाखा को भेजी जाती है।</li>
                    <li>बैंक द्वारा लोन स्वीकृत और निगम द्वारा 20% बीज पूंजी जारी की जाती है।</li>
                </ol>
            </section>

            <!-- Related Tools Section -->
            <section class="htc-section htc-related">
                <h2>अन्य MPBCDC योजनाएं व उपयोगी टूल</h2>
                <div class="htc-related-grid">
                    <a class="htc-related-card" href="mpbcdc-yojana.html">
                        <span class="htc-related-card__icon">🏛️</span>
                        <div><strong>MPBCDC योजना गाइड (Hub)</strong><span>सभी 3 योजनाओं की तुलना और मुख्य जानकारी देखें</span></div>
                    </a>
                    <a class="htc-related-card" href="mpbcdc-direct-loan-yojana.html">
                        <span class="htc-related-card__icon">💰</span>
                        <div><strong>Direct Loan Yojana</strong><span>₹1 लाख तक 50% सब्सिडी + 4% लोन कैलकुलेटर</span></div>
                    </a>
                    <a class="htc-related-card" href="mpbcdc-subsidy-yojana.html">
                        <span class="htc-related-card__icon">📋</span>
                        <div><strong>50% Subsidy Yojana</strong><span>₹50,000 तक 50% सरकारी अनुदान कैलकुलेटर</span></div>
                    </a>
                    <a class="htc-related-card" href="project-report/index.html">
                        <span class="htc-related-card__icon">📄</span>
                        <div><strong>Project Report Generator</strong><span>PMEGP व Mudra लोन के लिए फ्री प्रोजेक्ट रिपोर्ट बनाएं</span></div>
                    </a>
                </div>
            </section>

            <!-- MPBCDC Dedicated Official Links Section -->
            <section class="htc-section" style="background: linear-gradient(135deg, #1e1e38, #2a2a52); color: #ffffff; border-radius: 16px; padding: 28px 24px; margin-top: 32px; box-shadow: 0 8px 24px rgba(0,0,0,0.12);">
                <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 14px;">
                    <span style="font-size: 2.2rem;">🏛️</span>
                    <div>
                        <h2 style="margin: 0; font-size: 1.35rem; color: #ffffff; font-weight: 700;">MPBCDC आधिकारिक पोर्टल लिंक (Dedicated Official Links)</h2>
                        <p style="margin: 4px 0 0 0; color: #cbd5e1; font-size: 0.92rem;">महात्मा फुले मागासवर्गीय विकास महामंडळ (MPBCDC) महाराष्ट्र सरकार के आधिकारिक पोर्टल लिंक</p>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 20px;">
                    <a href="https://mpbcdc.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; background: #2563eb; color: #ffffff; padding: 14px 20px; border-radius: 10px; font-weight: 600; text-decoration: none; font-size: 1rem; border: 1px solid #3b82f6; transition: all 0.2s ease;">
                        <span>🌐 MPBCDC Official Portal</span>
                        <span style="font-size: 1.1rem;">↗</span>
                    </a>
                    <a href="https://mpbcdc.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; background: #059669; color: #ffffff; padding: 14px 20px; border-radius: 10px; font-weight: 600; text-decoration: none; font-size: 1rem; border: 1px solid #10b981; transition: all 0.2s ease;">
                        <span>📝 Online Application & Login</span>
                        <span style="font-size: 1.1rem;">↗</span>
                    </a>
                    <a href="https://www.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.1); color: #ffffff; padding: 14px 20px; border-radius: 10px; font-weight: 600; text-decoration: none; font-size: 1rem; border: 1px solid rgba(255,255,255,0.2); transition: all 0.2s ease;">
                        <span>🏢 Maharashtra Govt Portal</span>
                        <span style="font-size: 1.1rem;">↗</span>
                    </a>
                </div>
                <div style="margin-top: 18px; padding-top: 14px; border-top: 1px dashed rgba(255,255,255,0.15); font-size: 0.88rem; color: #94a3b8; display: flex; align-items: center; gap: 8px;">
                    <span>ℹ️</span>
                    <span>आधिकारिक वेबसाइट: <strong>mpbcdc.maharashtra.gov.in</strong> — आवेदन एवं स्थिति की जांच के लिए हमेशा आधिकारिक पोर्टल का ही प्रयोग करें।</span>
                </div>
            </section>

            <!-- FAQ Section -->
            <section class="htc-section htc-faq">
                <h2>सामान्य प्रश्न (Frequently Asked Questions)</h2>
                <details>
                    <summary>Seed Capital scheme me Corporation se kitni sahayata milti hai?</summary>
                    <p>Corporation project cost ka 20% hissa seed capital/subsidy ke roop me deta hai, jiski maximum cap ₹1,00,000 (एक लाख रुपये) hai.</p>
                </details>
                <details>
                    <summary>Bank loan par kitna interest lagta hai?</summary>
                    <p>Bank ka 75% loan hissa rashi bank ki prachalit bajar byaj dar (Market Interest Rate — aamtaur par 9% se 12%) par milta hai.</p>
                </details>
                <details>
                    <summary>Kya isme Bank ko Project Report Dena zaroori hai?</summary>
                    <p>Haan, Seed Capital Scheme ke liye bank ko ek vishveshniya Business Plan / Detailed Project Report (DPR) Dena aavashyak hai, jisme DSCR, P&L aur Cash Flow ka vivaran ho.</p>
                </details>
                <details>
                    <summary>Maximum project cost limit kitni hai?</summary>
                    <p>Seed Capital Scheme ke tahat maximum project cost ₹5,00,000 (पांच लाख रुपये) tak ho sakti hai.</p>
                </details>
            </section>

            <!-- Disclaimer -->
            <div class="htc-disclaimer">
                <strong>अस्वीकरण (Disclaimer)</strong>
                यह पेज केवल सूचनात्मक और शैक्षणिक मार्गदर्शन के लिए है। योजना की सटीक सीमाएं, ब्याज दरें और सब्सिडी राशि समय-समय पर महाराष्ट्र सरकार द्वारा संशोधित की जा सकती हैं। ऑनलाइन आवेदन करने से पहले आधिकारिक वेबसाइट mpbcdc.maharashtra.gov.in या ज़िला कार्यालय से नवीनतम दिशानिर्देशों की पुष्टि अवश्य करें। SarkariSewa Portal एक स्वतंत्र गाइड है — यह कोई सरकारी वेबसाइट नहीं है।
            </div>
        </div>
    </main>

    <div id="site-footer"></div>

    <script src="assets/js/main.js"></script>
    <script src="assets/js/consent.js"></script>
    <script src="assets/js/i18n-helper.js"></script>
    <script src="assets/js/mpbcdc-calculator.js"></script>
</body>
</html>
"""

# Write files
with open(os.path.join(ROOT, "mpbcdc-direct-loan-yojana.html"), "w", encoding="utf-8") as f:
    f.write(dl_html)
print("Created mpbcdc-direct-loan-yojana.html")

with open(os.path.join(ROOT, "mpbcdc-seed-capital-yojana.html"), "w", encoding="utf-8") as f:
    f.write(sc_html)
print("Created mpbcdc-seed-capital-yojana.html")
