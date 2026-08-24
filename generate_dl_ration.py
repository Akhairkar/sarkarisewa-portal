import os

states = [
    {"slug": "andhra-pradesh", "name": "Andhra Pradesh", "rto": "AP Transport Department", "fcs": "AP Civil Supplies", "csc": "Meeseva Center"},
    {"slug": "arunachal-pradesh", "name": "Arunachal Pradesh", "rto": "Arunachal Transport", "fcs": "Food & Civil Supplies Arunachal", "csc": "CSC Center"},
    {"slug": "assam", "name": "Assam", "rto": "Assam Transport", "fcs": "FCS & CA Assam", "csc": "PFC / CSC"},
    {"slug": "bihar", "name": "Bihar", "rto": "Transport Department Bihar", "fcs": "EPDS Bihar", "csc": "Vasudha Kendra"},
    {"slug": "chhattisgarh", "name": "Chhattisgarh", "rto": "CG Transport", "fcs": "Khadya CG", "csc": "Lok Seva Kendra"},
    {"slug": "goa", "name": "Goa", "rto": "Goa Transport", "fcs": "Civil Supplies Goa", "csc": "CSC Center"},
    {"slug": "gujarat", "name": "Gujarat", "rto": "Gujarat RTO", "fcs": "IPDS Gujarat", "csc": "Jan Seva Kendra"},
    {"slug": "haryana", "name": "Haryana", "rto": "Haryana Transport", "fcs": "EPDS Haryana", "csc": "Antyodaya Kendra"},
    {"slug": "himachal-pradesh", "name": "Himachal Pradesh", "rto": "HP Transport", "fcs": "EPDS HP", "csc": "Lok Mitra Kendra"},
    {"slug": "jharkhand", "name": "Jharkhand", "rto": "Jharkhand Transport", "fcs": "Aahar Jharkhand", "csc": "Pragya Kendra"},
    {"slug": "karnataka", "name": "Karnataka", "rto": "Karnataka Transport", "fcs": "Ahara Karnataka", "csc": "Bangalore One"},
    {"slug": "kerala", "name": "Kerala", "rto": "MVD Kerala", "fcs": "Civil Supplies Kerala", "csc": "Akshaya Centre"},
    {"slug": "madhya-pradesh", "name": "Madhya Pradesh", "rto": "MP Transport", "fcs": "MP Ration Mitra", "csc": "Lok Seva Kendra"},
    {"slug": "maharashtra", "name": "Maharashtra", "rto": "Maharashtra RTO", "fcs": "MahaFood", "csc": "Maha e-Seva Kendra"},
    {"slug": "manipur", "name": "Manipur", "rto": "Manipur Transport", "fcs": "FCS Manipur", "csc": "CSC Center"},
    {"slug": "meghalaya", "name": "Meghalaya", "rto": "Meghalaya Transport", "fcs": "MegFCS", "csc": "CSC Center"},
    {"slug": "mizoram", "name": "Mizoram", "rto": "Mizoram Transport", "fcs": "FCS & CA Mizoram", "csc": "CSC Center"},
    {"slug": "nagaland", "name": "Nagaland", "rto": "Nagaland Transport", "fcs": "FCS Nagaland", "csc": "CSC Center"},
    {"slug": "odisha", "name": "Odisha", "rto": "Odisha STA", "fcs": "Food Odisha", "csc": "Mo Seva Kendra"},
    {"slug": "punjab", "name": "Punjab", "rto": "Punjab Transport", "fcs": "EPDS Punjab", "csc": "Sewa Kendra"},
    {"slug": "rajasthan", "name": "Rajasthan", "rto": "Rajasthan Transport", "fcs": "Food Rajasthan", "csc": "e-Mitra Kendra"},
    {"slug": "sikkim", "name": "Sikkim", "rto": "Sikkim SNT", "fcs": "FCS Sikkim", "csc": "CSC Center"},
    {"slug": "tamil-nadu", "name": "Tamil Nadu", "rto": "TNSTA", "fcs": "TNPDS", "csc": "e-Sevai Maiyam"},
    {"slug": "telangana", "name": "Telangana", "rto": "Telangana Transport", "fcs": "EPDS Telangana", "csc": "Meeseva Center"},
    {"slug": "tripura", "name": "Tripura", "rto": "Tripura Transport", "fcs": "FCS Tripura", "csc": "CSC Center"},
    {"slug": "uttar-pradesh", "name": "Uttar Pradesh", "rto": "UP Transport (UPSRTC)", "fcs": "FCS UP", "csc": "Jan Seva Kendra"},
    {"slug": "uttarakhand", "name": "Uttarakhand", "rto": "UK Transport", "fcs": "FCS Uttarakhand", "csc": "Devbhoomi Jan Seva Kendra"},
    {"slug": "west-bengal", "name": "West Bengal", "rto": "WB Transport", "fcs": "WBPDS", "csc": "Tathya Mitra Kendra"},
    {"slug": "delhi", "name": "Delhi", "rto": "Delhi Transport", "fcs": "Delhi NFS", "csc": "CSC Center"},
    {"slug": "jammu-kashmir", "name": "Jammu & Kashmir", "rto": "J&K Transport", "fcs": "FCSCA J&K", "csc": "CSC Center"},
    {"slug": "ladakh", "name": "Ladakh", "rto": "Ladakh Transport", "fcs": "FCS Ladakh", "csc": "CSC Center"},
    {"slug": "chandigarh", "name": "Chandigarh", "rto": "Chandigarh Transport", "fcs": "FCS Chandigarh", "csc": "Sampark Center"},
    {"slug": "puducherry", "name": "Puducherry", "rto": "Puducherry Transport", "fcs": "Civil Supplies Puducherry", "csc": "CSC Center"},
    {"slug": "andaman-nicobar", "name": "Andaman & Nicobar", "rto": "A&N Transport", "fcs": "Civil Supplies A&N", "csc": "CSC Center"},
    {"slug": "lakshadweep", "name": "Lakshadweep", "rto": "Lakshadweep Transport", "fcs": "FCS Lakshadweep", "csc": "CSC Center"},
    {"slug": "dadra-nagar-haveli-daman-diu", "name": "Dadra & Nagar Haveli", "rto": "DNH Transport", "fcs": "FCS DNH", "csc": "CSC Center"}
]

# DRIVING LICENCE SPINTAX
dl_en = [
    "A Driving Licence (DL) is a highly crucial official document that authorizes its holder to operate various types of motor vehicles on public roads.",
    "Obtaining a valid Driving Licence is mandatory under the Motor Vehicles Act for anyone who wishes to drive a two-wheeler, car, or commercial vehicle.",
    "The Driving Licence acts as both a legal permit to drive and a universally accepted identity proof across India."
]
dl_hi = [
    "ड्राइविंग लाइसेंस (Driving Licence) एक बहुत ही महत्वपूर्ण आधिकारिक दस्तावेज़ है जो धारक को सार्वजनिक सड़कों पर मोटर वाहन चलाने की कानूनी अनुमति देता है।",
    "मोटर वाहन अधिनियम के तहत, दोपहिया, कार या किसी भी व्यावसायिक वाहन को चलाने के लिए एक वैध ड्राइविंग लाइसेंस प्राप्त करना अनिवार्य है।",
    "ड्राइविंग लाइसेंस (DL) न केवल आपको गाड़ी चलाने का कानूनी अधिकार देता है, बल्कि यह पूरे भारत में एक वैध पहचान प्रमाण के रूप में भी कार्य करता है।"
]

# RATION CARD SPINTAX
ration_en = [
    "A Ration Card is an essential state-issued document that enables eligible households to purchase subsidized food grains through the Public Distribution System (PDS).",
    "The Ration Card is a critical welfare document provided by the government, ensuring food security for families while also serving as a primary address proof.",
    "Issued by the Department of Food and Civil Supplies, the Ration Card is a vital document for availing subsidized rations and identifying one's economic status."
]
ration_hi = [
    "राशन कार्ड (Ration Card) राज्य सरकार द्वारा जारी एक आवश्यक दस्तावेज़ है जो पात्र परिवारों को सार्वजनिक वितरण प्रणाली (PDS) के माध्यम से रियायती दर पर राशन खरीदने में सक्षम बनाता है।",
    "राशन कार्ड सरकार द्वारा प्रदान किया गया एक महत्वपूर्ण कल्याणकारी दस्तावेज़ है, जो परिवारों के लिए खाद्य सुरक्षा सुनिश्चित करता है और पते के प्रमाण के रूप में भी काम आता है।",
    "खाद्य एवं नागरिक आपूर्ति विभाग द्वारा जारी किया गया राशन कार्ड, रियायती राशन प्राप्त करने और आर्थिक स्थिति (APL/BPL/AAY) को पहचानने के लिए एक महत्वपूर्ण दस्तावेज़ है।"
]

def get_internal_links(slug, name):
    return f"""
                        <h4 style="margin-top:20px; border-top:1px solid var(--color-border); padding-top:10px;"><span data-lang-show="en">Other Services in {name}</span><span data-lang-show="hi">{name} की अन्य सेवाएँ</span></h4>
                        <li><a href="{slug}-income-certificate.html">📄 {name} Income Certificate</a></li>
                        <li><a href="{slug}-domicile-certificate.html">🏠 {name} Domicile Certificate</a></li>
                        <li><a href="{slug}-caste-certificate.html">📜 {name} Caste Certificate</a></li>
                        <li><a href="{slug}-voter-id-card.html">🗳️ {name} Voter ID Card</a></li>
"""

def build_dl(state, idx):
    name = state['name']
    slug = state['slug']
    rto = state['rto']
    csc = state['csc']
    
    intro_en = dl_en[idx % 3]
    intro_hi = dl_hi[idx % 3]
    
    title_en = f"{name} Driving Licence Apply Online 2026: Fees, RTO & Status"
    title_hi = f"{name} ड्राइविंग लाइसेंस 2026: ऑनलाइन आवेदन (Driving Licence)"
    desc_hi = f"{name} में Driving Licence (DL) या Learning Licence के लिए ऑनलाइन आवेदन कैसे करें? Parivahan Sewa से {rto} फीस, ज़रूरी दस्तावेज़ और स्टेटस चेक की पूरी जानकारी।"
    desc_en = f"Apply for a new Driving Licence or Learner's Licence in {name}. Check RTO fees, required documents, Parivahan Sewa portal process, and track DL status."
    
    links = get_internal_links(slug, name)
    
    html = f"""<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <link href="../assets/img/favicon-32.png" rel="icon" sizes="32x32" type="image/png"/>
    <link href="../assets/img/favicon-16.png" rel="icon" sizes="16x16" type="image/png"/>
    <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180"/>
    <link href="../favicon.ico" rel="icon"/>
    <link href="../manifest.json" rel="manifest"/>
    <meta content="{desc_hi}" name="description"/>
    <meta content="{title_hi}" property="og:title"/>
    <meta content="{desc_hi}" property="og:description"/>
    <meta content="article" property="og:type"/>
    <meta content="https://sarkarisewaindia.com/states/{slug}-driving-licence.html" property="og:url"/>
    <meta content="https://sarkarisewaindia.com/assets/img/og-image.png" property="og:image"/>
    <meta content="summary_large_image" name="twitter:card"/>
    <meta content="{title_en}" name="twitter:title"/>
    <meta content="{desc_en}" name="twitter:description"/>
    <title>{title_en}</title>
    <link href="https://sarkarisewaindia.com/states/{slug}-driving-licence.html" rel="canonical"/>
    <link href="../assets/css/style.css" rel="stylesheet"/>
    <link href="../assets/css/module2.css" rel="stylesheet"/>
    <link href="../assets/css/module15.css" rel="stylesheet"/>
    <link href="../assets/css/share-widget.css" rel="stylesheet"/>
    <script id="service-schema" type="application/ld+json">{{
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "{name} Driving Licence (DL)",
      "description": "{desc_en}",
      "url": "https://sarkarisewaindia.com/states/{slug}-driving-licence.html",
      "provider": {{ "@type": "GovernmentOrganization", "name": "Ministry of Road Transport (Parivahan) / {rto}" }},
      "serviceType": "Driving License"
    }}</script>
</head>
<body data-slug="state-dl-{slug}">
<div id="site-header">
    <div class="tricolor-rule"></div>
    <header class="site-header">
        <div class="container header-inner">
            <a class="brand" href="../index.html">
                <span class="brand-mark">S</span>
                <span class="brand-text">
                    <span class="brand-title">SarkariSewa India</span>
                    <span class="brand-tagline">Every Indian government service, in one place</span>
                </span>
            </a>
            <div class="header-actions">
                <button aria-label="Toggle theme" class="icon-btn" id="theme-toggle" type="button">
                    <span aria-hidden="true" id="theme-icon">🌙</span>
                </button>
                <button class="icon-btn" id="lang-toggle" type="button"><span data-i18n="lang_toggle">हिंदी</span></button>
            </div>
        </div>
    </header>
</div>

<main class="container">
    <article class="service-post">
        <nav aria-label="Breadcrumbs" class="breadcrumbs">
            <ol>
                <li><a href="../index.html"><span data-lang-show="en">Home</span><span data-lang-show="hi">होम</span></a></li>
                <li><a href="index.html"><span data-lang-show="en">State Services</span><span data-lang-show="hi">राज्य सेवाएं</span></a></li>
                <li><a href="{slug}.html"><span data-lang-show="en">{name}</span><span data-lang-show="hi">{name}</span></a></li>
                <li aria-current="page"><span data-lang-show="en">Driving Licence</span><span data-lang-show="hi">ड्राइविंग लाइसेंस</span></li>
            </ol>
        </nav>

        <header class="service-hero">
            <div class="service-hero__icon">🚗</div>
            <h1 class="service-hero__title">
                <span data-lang-show="en">{title_en}</span>
                <span data-lang-show="hi">{title_hi}</span>
            </h1>
            <p class="service-hero__desc">
                <span data-lang-show="en">{desc_en}</span>
                <span data-lang-show="hi">{desc_hi}</span>
            </p>
        </header>

        <div class="service-layout">
            <div class="service-main">
                
                <section class="mb-4">
                    <p><span data-lang-show="en">{intro_en} In {name}, the process to obtain a Learner's Licence (LL) and a permanent Driving Licence (DL) is managed by the <strong>{rto}</strong> and entirely digitized through the central Parivahan Sewa (Sarathi) portal.</span><span data-lang-show="hi">{intro_hi} {name} में, लर्नर लाइसेंस (LL) और स्थायी ड्राइविंग लाइसेंस (DL) प्राप्त करने की प्रक्रिया का प्रबंधन <strong>{rto}</strong> द्वारा किया जाता है और यह पूरी तरह से केंद्रीय परिवहन सेवा (सारथी) पोर्टल के माध्यम से डिजिटल है।</span></p>
                </section>

                <section class="card mb-4" id="overview">
                    <h2><span data-lang-show="en">Quick Overview</span><span data-lang-show="hi">संक्षिप्त विवरण</span></h2>
                    <div class="quick-facts">
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Official Portal</span><span data-lang-show="hi">आधिकारिक पोर्टल</span></span>
                            <span class="fact-value">Parivahan Sewa (Sarathi)</span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">State Authority</span><span data-lang-show="hi">राज्य प्राधिकरण</span></span>
                            <span class="fact-value">{rto}</span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Learner's Validity</span><span data-lang-show="hi">लर्नर की वैधता</span></span>
                            <span class="fact-value"><span data-lang-show="en">6 Months</span><span data-lang-show="hi">6 महीने</span></span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">DL Validity</span><span data-lang-show="hi">DL की वैधता</span></span>
                            <span class="fact-value"><span data-lang-show="en">20 Years (or till age 40)</span><span data-lang-show="hi">20 वर्ष (या 40 वर्ष की आयु तक)</span></span>
                        </div>
                    </div>
                </section>

                <section class="mb-4" id="documents">
                    <h2><span data-lang-show="en">Required Documents</span><span data-lang-show="hi">ज़रूरी दस्तावेज़ (Documents Required)</span></h2>
                    <div class="prose">
                        <p><span data-lang-show="en">To apply for a DL in {name}, you will need to scan and upload the following documents:</span><span data-lang-show="hi">{name} में DL के लिए आवेदन करते समय आपको निम्नलिखित दस्तावेज़ों की आवश्यकता होगी:</span></p>
                        <ul class="checklist">
                            <li><span data-lang-show="en"><strong>Age Proof:</strong> Birth Certificate, 10th Marksheet, PAN Card, or Passport.</span><span data-lang-show="hi"><strong>आयु प्रमाण:</strong> जन्म प्रमाण पत्र, 10वीं की मार्कशीट, पैन कार्ड या पासपोर्ट।</span></li>
                            <li><span data-lang-show="en"><strong>Address Proof:</strong> Aadhaar Card, Voter ID, Ration Card, or recent electricity bill.</span><span data-lang-show="hi"><strong>पते का प्रमाण:</strong> आधार कार्ड, वोटर आईडी, राशन कार्ड या बिजली का बिल।</span></li>
                            <li><span data-lang-show="en"><strong>Medical Certificate (Form 1A):</strong> Required if you are above 40 years of age or applying for a Commercial transport vehicle.</span><span data-lang-show="hi"><strong>मेडिकल सर्टिफिकेट (फॉर्म 1A):</strong> यदि आपकी आयु 40 वर्ष से अधिक है या आप कमर्शियल (Commercial) वाहन के लिए आवेदन कर रहे हैं तो यह अनिवार्य है।</span></li>
                            <li><span data-lang-show="en"><strong>Photograph &amp; Signature:</strong> Scanned passport size photo and digital signature.</span><span data-lang-show="hi"><strong>फोटो और हस्ताक्षर:</strong> स्कैन की गई पासपोर्ट साइज़ फोटो और डिजिटल हस्ताक्षर।</span></li>
                        </ul>
                    </div>
                </section>

                <section class="mb-4" id="apply-online">
                    <h2><span data-lang-show="en">Step-by-Step Online Application Process</span><span data-lang-show="hi">ऑनलाइन आवेदन की स्टेप-बाय-स्टेप प्रक्रिया</span></h2>
                    <div class="prose">
                        <div class="alert alert-warning">
                            <strong><span data-lang-show="en">Important Note</span><span data-lang-show="hi">महत्वपूर्ण जानकारी</span></strong>
                            <p><span data-lang-show="en">You must first apply for a <strong>Learner's Licence (LL)</strong>. After holding the LL for 30 days, you become eligible to apply for a permanent Driving Licence (DL).</span><span data-lang-show="hi">आपको सबसे पहले <strong>लर्नर लाइसेंस (LL)</strong> के लिए आवेदन करना होगा। 30 दिनों तक LL रखने के बाद ही आप स्थायी ड्राइविंग लाइसेंस (DL) के लिए आवेदन कर सकते हैं।</span></p>
                        </div>
                        <ol>
                            <li>
                                <span data-lang-show="en"><strong>Visit Sarathi Parivahan:</strong> Open the official portal (<a href="https://sarathi.parivahan.gov.in/" target="_blank" rel="nofollow noopener">sarathi.parivahan.gov.in</a>).</span>
                                <span data-lang-show="hi"><strong>सारथी परिवहन पर जाएं:</strong> आधिकारिक पोर्टल (<a href="https://sarathi.parivahan.gov.in/" target="_blank" rel="nofollow noopener">sarathi.parivahan.gov.in</a>) खोलें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Select State:</strong> Choose <strong>"{name}"</strong> from the dropdown menu.</span>
                                <span data-lang-show="hi"><strong>राज्य चुनें:</strong> ड्रॉपडाउन मेनू से <strong>"{name}"</strong> चुनें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Apply for Learner Licence:</strong> Click on "Apply for Learner Licence". Select whether you hold an Aadhaar card. Authenticating via Aadhaar allows you to take the LL test from home online (Faceless Service).</span>
                                <span data-lang-show="hi"><strong>लर्नर लाइसेंस के लिए अप्लाई:</strong> "Apply for Learner Licence" पर क्लिक करें। यदि आप आधार से प्रमाणीकरण (Aadhaar Authentication) करते हैं, तो आप घर बैठे ऑनलाइन LL टेस्ट (Faceless Service) दे सकते हैं।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Fill Details:</strong> Fill in personal details, blood group, emergency contact, and select the class of vehicles (e.g., MCWG - Motorcycle with gear, LMV - Car).</span>
                                <span data-lang-show="hi"><strong>विवरण भरें:</strong> व्यक्तिगत जानकारी, ब्लड ग्रुप भरें और वाहन की श्रेणी चुनें (जैसे, MCWG - गियर वाली मोटरसाइकिल, LMV - कार)।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Pay Fees &amp; Test:</strong> Upload documents, pay the RTO fees online, and book a slot (or give the online test immediately if Aadhaar-authenticated).</span>
                                <span data-lang-show="hi"><strong>फीस भरें और टेस्ट दें:</strong> दस्तावेज़ अपलोड करें, RTO फीस भरें। आधार प्रमाणीकरण होने पर तुरंत ऑनलाइन टेस्ट दें, अन्यथा RTO का स्लॉट बुक करें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Permanent DL:</strong> After 30 days, revisit the portal, click "Apply for Driving Licence", enter your LL number, book an RTO driving test slot, and pass the physical driving test.</span>
                                <span data-lang-show="hi"><strong>स्थायी DL:</strong> 30 दिनों के बाद पोर्टल पर वापस आएं, "Apply for Driving Licence" पर क्लिक करें, RTO ड्राइविंग टेस्ट स्लॉट बुक करें और ट्रैक पर गाड़ी चलाकर टेस्ट पास करें।</span>
                            </li>
                        </ol>
                    </div>
                </section>
                
                <section class="mb-4" id="faqs">
                    <h2><span data-lang-show="en">Frequently Asked Questions (FAQs)</span><span data-lang-show="hi">अक्सर पूछे जाने वाले सवाल (FAQs)</span></h2>
                    <div class="accordion">
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">How much is the fee for a Driving Licence in {name}?</span><span data-lang-show="hi">{name} में ड्राइविंग लाइसेंस की फीस कितनी है?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">The standard fee structure via Parivahan is approx ₹150 for Learner's Licence per vehicle class, plus ₹50 for the test. For a permanent DL, the fee is ₹200 for the license, ₹300 for the driving test, and ₹200 for the smart card.</span>
                                <span data-lang-show="hi">लर्नर लाइसेंस (LL) के लिए प्रति वाहन श्रेणी ₹150 फीस है और ₹50 टेस्ट के लिए। स्थायी DL के लिए फीस ₹200 (लाइसेंस) + ₹300 (ड्राइविंग टेस्ट) + ₹200 (स्मार्ट कार्ड) होती है।</span>
                            </div>
                        </details>
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">How can I check the DL dispatch status?</span><span data-lang-show="hi">मैं अपना DL डिस्पैच स्टेटस कैसे चेक कर सकता हूँ?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">Go to the Sarathi Parivahan portal, select {name}, and click on "Application Status". Enter your application number and DOB. If the DL is printed and dispatched, a Speed Post tracking number will be shown.</span>
                                <span data-lang-show="hi">सारथी पोर्टल पर जाकर "Application Status" पर क्लिक करें। अपना एप्लिकेशन नंबर और जन्मतिथि डालें। अगर DL प्रिंट होकर भेज दिया गया है, तो आपको स्पीड पोस्ट ट्रैकिंग नंबर दिखाई देगा।</span>
                            </div>
                        </details>
                    </div>
                </section>
            </div>

            <aside class="service-sidebar">
                <div class="widget">
                    <h3 class="widget-title"><span data-lang-show="en">Important Links</span><span data-lang-show="hi">महत्वपूर्ण लिंक्स</span></h3>
                    <ul class="widget-links">
                        <li><a href="https://sarathi.parivahan.gov.in/" target="_blank" rel="nofollow noopener">🌐 Parivahan (Sarathi) Portal</a></li>
                        <li><a href="../tools/status-troubleshooter.html">🔍 <span data-lang-show="en">Track Application Status</span><span data-lang-show="hi">स्टेटस चेक करें</span></a></li>
                        <li><a href="../tools/document-checklist.html">📄 <span data-lang-show="en">Document Checklist</span><span data-lang-show="hi">दस्तावेज़ सूची</span></a></li>
{links}
                    </ul>
                </div>
            </aside>
        </div>
    </article>
</main>

<div id="site-footer">
    <footer class="site-footer">
        <div class="footer-bottom">
            <span>© <span id="footer-year"></span> SarkariSewa India · All content is for informational purposes only.</span>
        </div>
    </footer>
</div>

<script src="../assets/js/main.js"></script>
<script src="../assets/js/consent.js"></script>
<script src="../assets/js/i18n-helper.js"></script>
</body>
</html>"""
    return html

def build_ration(state, idx):
    name = state['name']
    slug = state['slug']
    fcs = state['fcs']
    csc = state['csc']
    
    intro_en = ration_en[idx % 3]
    intro_hi = ration_hi[idx % 3]
    
    title_en = f"{name} Ration Card List 2026: New Apply Online & Download"
    title_hi = f"{name} राशन कार्ड 2026: नई लिस्ट, ऑनलाइन आवेदन और स्टेटस (Ration Card)"
    desc_hi = f"{name} की नई राशन कार्ड सूची (Ration Card List) में अपना नाम कैसे देखें? NFSA या {fcs} विभाग से नया राशन कार्ड ऑनलाइन अप्लाई और डाउनलोड करने का तरीका।"
    desc_en = f"Check your name in the {name} Ration Card List 2026. Apply for a new Ration card online via {fcs} portal, check application status, and download e-Ration card."
    
    links = get_internal_links(slug, name)
    
    html = f"""<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <link href="../assets/img/favicon-32.png" rel="icon" sizes="32x32" type="image/png"/>
    <link href="../assets/img/favicon-16.png" rel="icon" sizes="16x16" type="image/png"/>
    <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180"/>
    <link href="../favicon.ico" rel="icon"/>
    <link href="../manifest.json" rel="manifest"/>
    <meta content="{desc_hi}" name="description"/>
    <meta content="{title_hi}" property="og:title"/>
    <meta content="{desc_hi}" property="og:description"/>
    <meta content="article" property="og:type"/>
    <meta content="https://sarkarisewaindia.com/states/{slug}-ration-card.html" property="og:url"/>
    <meta content="https://sarkarisewaindia.com/assets/img/og-image.png" property="og:image"/>
    <meta content="summary_large_image" name="twitter:card"/>
    <meta content="{title_en}" name="twitter:title"/>
    <meta content="{desc_en}" name="twitter:description"/>
    <title>{title_en}</title>
    <link href="https://sarkarisewaindia.com/states/{slug}-ration-card.html" rel="canonical"/>
    <link href="../assets/css/style.css" rel="stylesheet"/>
    <link href="../assets/css/module2.css" rel="stylesheet"/>
    <link href="../assets/css/module15.css" rel="stylesheet"/>
    <link href="../assets/css/share-widget.css" rel="stylesheet"/>
    <script id="service-schema" type="application/ld+json">{{
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "{name} Ration Card & EPDS",
      "description": "{desc_en}",
      "url": "https://sarkarisewaindia.com/states/{slug}-ration-card.html",
      "provider": {{ "@type": "GovernmentOrganization", "name": "Department of Food & Civil Supplies / {fcs}" }},
      "serviceType": "Social Welfare"
    }}</script>
</head>
<body data-slug="state-ration-{slug}">
<div id="site-header">
    <div class="tricolor-rule"></div>
    <header class="site-header">
        <div class="container header-inner">
            <a class="brand" href="../index.html">
                <span class="brand-mark">S</span>
                <span class="brand-text">
                    <span class="brand-title">SarkariSewa India</span>
                    <span class="brand-tagline">Every Indian government service, in one place</span>
                </span>
            </a>
            <div class="header-actions">
                <button aria-label="Toggle theme" class="icon-btn" id="theme-toggle" type="button">
                    <span aria-hidden="true" id="theme-icon">🌙</span>
                </button>
                <button class="icon-btn" id="lang-toggle" type="button"><span data-i18n="lang_toggle">हिंदी</span></button>
            </div>
        </div>
    </header>
</div>

<main class="container">
    <article class="service-post">
        <nav aria-label="Breadcrumbs" class="breadcrumbs">
            <ol>
                <li><a href="../index.html"><span data-lang-show="en">Home</span><span data-lang-show="hi">होम</span></a></li>
                <li><a href="index.html"><span data-lang-show="en">State Services</span><span data-lang-show="hi">राज्य सेवाएं</span></a></li>
                <li><a href="{slug}.html"><span data-lang-show="en">{name}</span><span data-lang-show="hi">{name}</span></a></li>
                <li aria-current="page"><span data-lang-show="en">Ration Card</span><span data-lang-show="hi">राशन कार्ड</span></li>
            </ol>
        </nav>

        <header class="service-hero">
            <div class="service-hero__icon">🍚</div>
            <h1 class="service-hero__title">
                <span data-lang-show="en">{title_en}</span>
                <span data-lang-show="hi">{title_hi}</span>
            </h1>
            <p class="service-hero__desc">
                <span data-lang-show="en">{desc_en}</span>
                <span data-lang-show="hi">{desc_hi}</span>
            </p>
        </header>

        <div class="service-layout">
            <div class="service-main">
                
                <section class="mb-4">
                    <p><span data-lang-show="en">{intro_en} In {name}, the Public Distribution System is managed by the <strong>{fcs}</strong> in coordination with the central National Food Security Act (NFSA) portal. Through these portals, you can apply for a new card, check the village-wise ration list, or link your Aadhaar card for KYC.</span><span data-lang-show="hi">{intro_hi} {name} में, सार्वजनिक वितरण प्रणाली (PDS) का प्रबंधन <strong>{fcs}</strong> द्वारा केंद्रीय NFSA पोर्टल के समन्वय में किया जाता है। इन पोर्टलों के माध्यम से, आप नए कार्ड के लिए आवेदन कर सकते हैं, गांव-वार राशन सूची देख सकते हैं, या KYC के लिए अपना आधार लिंक कर सकते हैं।</span></p>
                </section>

                <section class="card mb-4" id="overview">
                    <h2><span data-lang-show="en">Quick Overview</span><span data-lang-show="hi">संक्षिप्त विवरण</span></h2>
                    <div class="quick-facts">
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">National Portal</span><span data-lang-show="hi">राष्ट्रीय पोर्टल</span></span>
                            <span class="fact-value">NFSA (nfsa.gov.in)</span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">State Authority</span><span data-lang-show="hi">राज्य प्राधिकरण</span></span>
                            <span class="fact-value">{fcs}</span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Beneficiaries</span><span data-lang-show="hi">लाभार्थी श्रेणी</span></span>
                            <span class="fact-value"><span data-lang-show="en">APL, BPL, AAY, PHH</span><span data-lang-show="hi">APL, BPL, AAY, PHH</span></span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Aadhaar Link (KYC)</span><span data-lang-show="hi">आधार लिंक (KYC)</span></span>
                            <span class="fact-value"><span data-lang-show="en">Mandatory</span><span data-lang-show="hi">अनिवार्य है</span></span>
                        </div>
                    </div>
                </section>
                
                <section class="mb-4" id="check-list">
                    <h2><span data-lang-show="en">How to Check Name in {name} Ration Card List</span><span data-lang-show="hi">{name} राशन कार्ड सूची (Ration Card List) में अपना नाम कैसे देखें?</span></h2>
                    <div class="prose">
                        <ol>
                            <li>
                                <span data-lang-show="en"><strong>Visit NFSA Portal:</strong> Go to the official NFSA Portal (<a href="https://nfsa.gov.in/" target="_blank" rel="nofollow noopener">nfsa.gov.in</a>).</span>
                                <span data-lang-show="hi"><strong>NFSA पोर्टल पर जाएं:</strong> आधिकारिक राष्ट्रीय खाद्य सुरक्षा पोर्टल (<a href="https://nfsa.gov.in/" target="_blank" rel="nofollow noopener">nfsa.gov.in</a>) खोलें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Ration Card Details:</strong> From the top menu, click on <strong>"Ration Cards"</strong> and then select <strong>"Ration Card Details On State Portals"</strong>.</span>
                                <span data-lang-show="hi"><strong>राशन कार्ड विवरण:</strong> शीर्ष मेनू से, <strong>"Ration Cards"</strong> पर क्लिक करें और फिर <strong>"Ration Card Details On State Portals"</strong> चुनें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Select State:</strong> Click on <strong>{name}</strong> from the map or list of states. This will redirect you to the {fcs} portal.</span>
                                <span data-lang-show="hi"><strong>राज्य चुनें:</strong> राज्यों की सूची में से <strong>{name}</strong> पर क्लिक करें। यह आपको सीधे {fcs} पोर्टल पर ले जाएगा।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Drill Down:</strong> Select your District, then your Block/Tehsil, and finally your Gram Panchayat/Ward.</span>
                                <span data-lang-show="hi"><strong>विवरण चुनें:</strong> अपना जिला चुनें, फिर अपना ब्लॉक/तहसील, और अंत में अपनी ग्राम पंचायत/वार्ड चुनें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>View List:</strong> Select your local FPS (Fair Price Shop) dealer's name. The complete list of ration card holders (with names and card numbers) in your area will be displayed.</span>
                                <span data-lang-show="hi"><strong>सूची देखें:</strong> अपने स्थानीय राशन डीलर (कोटेदार) का नाम चुनें। आपके क्षेत्र के राशन कार्ड धारकों की पूरी सूची (नाम और कार्ड नंबर के साथ) स्क्रीन पर खुल जाएगी।</span>
                            </li>
                        </ol>
                    </div>
                </section>

                <section class="mb-4" id="documents">
                    <h2><span data-lang-show="en">Documents Required for New Ration Card</span><span data-lang-show="hi">नए राशन कार्ड के लिए ज़रूरी दस्तावेज़</span></h2>
                    <div class="prose">
                        <ul class="checklist">
                            <li><span data-lang-show="en"><strong>Aadhaar Cards:</strong> Aadhaar of the head of the family (usually the eldest female) and all family members to be added.</span><span data-lang-show="hi"><strong>आधार कार्ड:</strong> परिवार के मुखिया (आमतौर पर सबसे बुजुर्ग महिला) और जोड़े जाने वाले सभी सदस्यों के आधार कार्ड।</span></li>
                            <li><span data-lang-show="en"><strong>Income Certificate:</strong> Very crucial to determine if you fall under APL, BPL, or AAY categories.</span><span data-lang-show="hi"><strong>आय प्रमाण पत्र:</strong> यह तय करने के लिए बहुत ज़रूरी है कि आप APL, BPL या AAY (अंत्योदय) श्रेणी में आते हैं या नहीं।</span></li>
                            <li><span data-lang-show="en"><strong>Bank Passbook:</strong> First page copy of the head of the family's bank account.</span><span data-lang-show="hi"><strong>बैंक पासबुक:</strong> परिवार के मुखिया के बैंक खाते के पहले पन्ने की फोटोकॉपी।</span></li>
                            <li><span data-lang-show="en"><strong>Address Proof:</strong> Electricity bill, water bill, or house tax receipt.</span><span data-lang-show="hi"><strong>पते का प्रमाण:</strong> बिजली बिल, पानी का बिल या गैस कनेक्शन पासबुक।</span></li>
                            <li><span data-lang-show="en"><strong>Group Photo:</strong> A passport-size joint photograph of the entire family.</span><span data-lang-show="hi"><strong>ग्रुप फोटो:</strong> पूरे परिवार की एक पासपोर्ट साइज की संयुक्त (Joint) फोटो।</span></li>
                        </ul>
                    </div>
                </section>

                <section class="mb-4" id="apply-online">
                    <h2><span data-lang-show="en">How to Apply for a New Ration Card</span><span data-lang-show="hi">नया राशन कार्ड कैसे बनवाएं?</span></h2>
                    <div class="prose">
                        <div class="alert alert-info">
                            <strong><span data-lang-show="en">Apply via {csc}</span><span data-lang-show="hi">{csc} के माध्यम से आवेदन (Recommended)</span></strong>
                            <p><span data-lang-show="en">While some state portals allow direct online application, the most reliable and fastest method in {name} is to take all your family's documents to the nearest <strong>{csc}</strong>. They have direct operator access to the {fcs} portal to upload documents, add family members, and complete the biometric E-KYC.</span><span data-lang-show="hi">हालाँकि कुछ पोर्टल सीधे ऑनलाइन आवेदन की अनुमति देते हैं, लेकिन {name} में सबसे विश्वसनीय और तेज़ तरीका यह है कि आप अपने परिवार के सभी दस्तावेज़ लेकर नज़दीकी <strong>{csc}</strong> पर जाएँ। ऑपरेटर दस्तावेज़ अपलोड करेगा और आपके परिवार का बायोमेट्रिक E-KYC (ई-केवाईसी) पूरा कर देगा।</span></p>
                        </div>
                    </div>
                </section>
                
                <section class="mb-4" id="faqs">
                    <h2><span data-lang-show="en">Frequently Asked Questions (FAQs)</span><span data-lang-show="hi">अक्सर पूछे जाने वाले सवाल (FAQs)</span></h2>
                    <div class="accordion">
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">How can I add a new member's name to my existing Ration Card?</span><span data-lang-show="hi">मैं अपने पुराने राशन कार्ड में नए सदस्य (बच्चे या पत्नी) का नाम कैसे जोड़ूँ?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">To add a new member (e.g., newborn child or new wife), you need the child's Birth Certificate or the wife's Aadhaar (updated with new address) and Marriage Certificate. Visit the {csc} or your local Food Inspector office to fill out the Name Addition Form.</span>
                                <span data-lang-show="hi">नए सदस्य (जैसे, नवजात बच्चे या पत्नी) को जोड़ने के लिए, आपको बच्चे का जन्म प्रमाण पत्र (Birth Certificate) या पत्नी का आधार (नए पते के साथ) चाहिए होगा। नाम जोड़ने का फॉर्म भरने के लिए नज़दीकी {csc} या अपने स्थानीय खाद्य आपूर्ति (Supply Office) कार्यालय जाएँ।</span>
                            </div>
                        </details>
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">Is Aadhaar E-KYC mandatory for ration cards in {name}?</span><span data-lang-show="hi">क्या {name} में राशन कार्ड के लिए आधार ई-केवाईसी (E-KYC) अनिवार्य है?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">Yes, the central government has mandated E-KYC for all ration card members. If a member's Aadhaar is not seeded and KYC is not completed via the dealer's POS machine, their unit of ration may be stopped.</span>
                                <span data-lang-show="hi">हाँ, केंद्र सरकार ने राशन कार्ड के सभी सदस्यों के लिए ई-केवाईसी (E-KYC) अनिवार्य कर दिया है। यदि किसी सदस्य का आधार लिंक नहीं है और डीलर की ई-पोस (e-PoS) मशीन के माध्यम से केवाईसी पूरा नहीं हुआ है, तो उनके हिस्से का राशन काटा जा सकता है।</span>
                            </div>
                        </details>
                    </div>
                </section>
            </div>

            <aside class="service-sidebar">
                <div class="widget">
                    <h3 class="widget-title"><span data-lang-show="en">Important Links</span><span data-lang-show="hi">महत्वपूर्ण लिंक्स</span></h3>
                    <ul class="widget-links">
                        <li><a href="https://nfsa.gov.in/portal/State_Portals" target="_blank" rel="nofollow noopener">🌐 State FCS Portals (NFSA)</a></li>
                        <li><a href="https://mera.ration.nic.in/" target="_blank" rel="nofollow noopener">📱 Mera Ration App</a></li>
                        <li><a href="../tools/csc-locator.html">📍 <span data-lang-show="en">Locate {csc}</span><span data-lang-show="hi">नज़दीकी {csc} खोजें</span></a></li>
{links}
                    </ul>
                </div>
            </aside>
        </div>
    </article>
</main>

<div id="site-footer">
    <footer class="site-footer">
        <div class="footer-bottom">
            <span>© <span id="footer-year"></span> SarkariSewa India · All content is for informational purposes only.</span>
        </div>
    </footer>
</div>

<script src="../assets/js/main.js"></script>
<script src="../assets/js/consent.js"></script>
<script src="../assets/js/i18n-helper.js"></script>
</body>
</html>"""
    return html

def main():
    out_dir = "states"
    if not os.path.exists(out_dir):
        os.makedirs(out_dir)
        
    for idx, state in enumerate(states):
        with open(os.path.join(out_dir, f"{state['slug']}-driving-licence.html"), "w", encoding="utf-8") as f:
            f.write(build_dl(state, idx))
            
        with open(os.path.join(out_dir, f"{state['slug']}-ration-card.html"), "w", encoding="utf-8") as f:
            f.write(build_ration(state, idx))
            
    print("Generated 72 thick pages (36 DL, 36 Ration) with Internal Links")

if __name__ == "__main__":
    main()
