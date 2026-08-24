import os
import random

states = [
    {"slug": "andhra-pradesh", "name": "Andhra Pradesh", "portal": "Meeseva", "portal_url": "https://meeseva.ap.gov.in/", "csc": "Meeseva Center", "auth": "Tahsildar", "time": "15 Days"},
    {"slug": "arunachal-pradesh", "name": "Arunachal Pradesh", "portal": "Service Plus", "portal_url": "https://serviceonline.gov.in/", "csc": "CSC Center", "auth": "EAC / CO", "time": "14 Days"},
    {"slug": "assam", "name": "Assam", "portal": "e-Pramaan / Sewa Setu", "portal_url": "https://sewasetu.assam.gov.in/", "csc": "PFC / CSC", "auth": "Circle Officer", "time": "15 Days"},
    {"slug": "bihar", "name": "Bihar", "portal": "RTPS Bihar", "portal_url": "https://serviceonline.bihar.gov.in/", "csc": "Vasudha Kendra", "auth": "Circle Officer (CO) / SDO", "time": "21 Days"},
    {"slug": "chhattisgarh", "name": "Chhattisgarh", "portal": "e-District CG", "portal_url": "https://edistrict.cgstate.gov.in/", "csc": "Lok Seva Kendra", "auth": "Tehsildar", "time": "15 Days"},
    {"slug": "goa", "name": "Goa", "portal": "Goa Online", "portal_url": "https://goaonline.gov.in/", "csc": "CSC Center", "auth": "Mamlatdar", "time": "10 Days"},
    {"slug": "gujarat", "name": "Gujarat", "portal": "Digital Gujarat", "portal_url": "https://www.digitalgujarat.gov.in/", "csc": "Jan Seva Kendra", "auth": "Mamlatdar / TDO", "time": "14 Days"},
    {"slug": "haryana", "name": "Haryana", "portal": "Saral Haryana", "portal_url": "https://saralharyana.gov.in/", "csc": "Antyodaya Kendra", "auth": "Tehsildar", "time": "15 Days"},
    {"slug": "himachal-pradesh", "name": "Himachal Pradesh", "portal": "e-District HP", "portal_url": "https://edistrict.hp.gov.in/", "csc": "Lok Mitra Kendra", "auth": "Tehsildar", "time": "15 Days"},
    {"slug": "jharkhand", "name": "Jharkhand", "portal": "JharSewa", "portal_url": "https://jharsewa.jharkhand.gov.in/", "csc": "Pragya Kendra", "auth": "Circle Officer (CO)", "time": "30 Days"},
    {"slug": "karnataka", "name": "Karnataka", "portal": "Seva Sindhu", "portal_url": "https://sevasindhu.karnataka.gov.in/", "csc": "Bangalore One", "auth": "Tahsildar", "time": "21 Days"},
    {"slug": "kerala", "name": "Kerala", "portal": "e-District Kerala", "portal_url": "https://edistrict.kerala.gov.in/", "csc": "Akshaya Centre", "auth": "Village Officer / Tahsildar", "time": "7 Days"},
    {"slug": "madhya-pradesh", "name": "Madhya Pradesh", "portal": "MP e-District", "portal_url": "https://mpedistrict.gov.in/", "csc": "Lok Seva Kendra", "auth": "Tehsildar / SDO", "time": "15 Days"},
    {"slug": "maharashtra", "name": "Maharashtra", "portal": "Aaple Sarkar", "portal_url": "https://aaplesarkar.mahaonline.gov.in/", "csc": "Maha e-Seva Kendra", "auth": "Tehsildar / SDO", "time": "15 Days"},
    {"slug": "manipur", "name": "Manipur", "portal": "e-Pramaan", "portal_url": "https://manipur.gov.in/", "csc": "CSC Center", "auth": "SDO", "time": "14 Days"},
    {"slug": "meghalaya", "name": "Meghalaya", "portal": "e-District Meghalaya", "portal_url": "https://megedistrict.gov.in/", "csc": "CSC Center", "auth": "Deputy Commissioner", "time": "15 Days"},
    {"slug": "mizoram", "name": "Mizoram", "portal": "e-District Mizoram", "portal_url": "https://edistrict.mizoram.gov.in/", "csc": "CSC Center", "auth": "Deputy Commissioner", "time": "15 Days"},
    {"slug": "nagaland", "name": "Nagaland", "portal": "e-District Nagaland", "portal_url": "https://edistrict.nagaland.gov.in/", "csc": "CSC Center", "auth": "Deputy Commissioner", "time": "15 Days"},
    {"slug": "odisha", "name": "Odisha", "portal": "Odisha e-District", "portal_url": "https://edistrict.odisha.gov.in/", "csc": "Mo Seva Kendra", "auth": "Tahasildar", "time": "15 Days"},
    {"slug": "punjab", "name": "Punjab", "portal": "Connect Punjab", "portal_url": "https://connect.punjab.gov.in/", "csc": "Sewa Kendra", "auth": "Tehsildar / SDM", "time": "15 Days"},
    {"slug": "rajasthan", "name": "Rajasthan", "portal": "e-Mitra Rajasthan", "portal_url": "https://emitra.rajasthan.gov.in/", "csc": "e-Mitra Kendra", "auth": "Tehsildar / SDO", "time": "15 Days"},
    {"slug": "sikkim", "name": "Sikkim", "portal": "e-District Sikkim", "portal_url": "https://sikkim.gov.in/", "csc": "CSC Center", "auth": "SDM", "time": "15 Days"},
    {"slug": "tamil-nadu", "name": "Tamil Nadu", "portal": "TNeGA", "portal_url": "https://tnega.tn.gov.in/", "csc": "e-Sevai Maiyam", "auth": "Tahsildar / Zonal Deputy Tahsildar", "time": "15 Days"},
    {"slug": "telangana", "name": "Telangana", "portal": "Meeseva Telangana", "portal_url": "https://ts.meeseva.telangana.gov.in/", "csc": "Meeseva Center", "auth": "Tahsildar", "time": "15 Days"},
    {"slug": "tripura", "name": "Tripura", "portal": "e-District Tripura", "portal_url": "https://edistrict.tripura.gov.in/", "csc": "CSC Center", "auth": "SDM", "time": "15 Days"},
    {"slug": "uttar-pradesh", "name": "Uttar Pradesh", "portal": "e-Sathi UP", "portal_url": "https://edistrict.up.gov.in/", "csc": "Jan Seva Kendra", "auth": "Tehsildar / SDM", "time": "15 Days"},
    {"slug": "uttarakhand", "name": "Uttarakhand", "portal": "e-District UK", "portal_url": "https://edistrict.uk.gov.in/", "csc": "Devbhoomi Jan Seva Kendra", "auth": "Tehsildar / SDM", "time": "15 Days"},
    {"slug": "west-bengal", "name": "West Bengal", "portal": "e-District Bengal", "portal_url": "https://edistrict.wb.gov.in/", "csc": "Tathya Mitra Kendra", "auth": "BDO / SDO", "time": "15 Days"},
    {"slug": "delhi", "name": "Delhi", "portal": "e-District Delhi", "portal_url": "https://edistrict.delhigovt.nic.in/", "csc": "CSC Center", "auth": "SDM / Tehsildar", "time": "14 Days"},
    {"slug": "jammu-kashmir", "name": "Jammu & Kashmir", "portal": "Jan Sugam", "portal_url": "https://jansugam.jk.gov.in/", "csc": "CSC Center", "auth": "Tehsildar", "time": "15 Days"},
    {"slug": "ladakh", "name": "Ladakh", "portal": "e-District Ladakh", "portal_url": "https://ladakh.gov.in/", "csc": "CSC Center", "auth": "Tehsildar", "time": "15 Days"},
    {"slug": "chandigarh", "name": "Chandigarh", "portal": "e-District Chandigarh", "portal_url": "https://chdservices.gov.in/", "csc": "Sampark Center", "auth": "Tehsildar / SDM", "time": "15 Days"},
    {"slug": "puducherry", "name": "Puducherry", "portal": "e-District Puducherry", "portal_url": "https://edistrict.py.gov.in/", "csc": "CSC Center", "auth": "Deputy Tahsildar", "time": "15 Days"},
    {"slug": "andaman-nicobar", "name": "Andaman & Nicobar", "portal": "e-District A&N", "portal_url": "https://edistrict.andaman.gov.in/", "csc": "CSC Center", "auth": "Tehsildar", "time": "15 Days"},
    {"slug": "lakshadweep", "name": "Lakshadweep", "portal": "e-District Lakshadweep", "portal_url": "https://lakshadweep.gov.in/", "csc": "CSC Center", "auth": "SDO / Tehsildar", "time": "15 Days"},
    {"slug": "dadra-nagar-haveli-daman-diu", "name": "Dadra & Nagar Haveli", "portal": "e-District DNH & DD", "portal_url": "https://dnh.gov.in/", "csc": "CSC Center", "auth": "Mamlatdar", "time": "15 Days"}
]

caste_en = [
    "A Caste Certificate is an essential documentary proof issued by the state government, certifying that an individual belongs to a particular community (SC, ST, or OBC).",
    "Obtaining a Caste Certificate is a crucial step for individuals belonging to reserved categories (SC/ST/OBC) to avail constitutional privileges and government welfare schemes.",
    "The Caste Certificate acts as a vital identity document, legally recognizing an individual's caste status and enabling them to claim educational and employment reservations."
]
caste_hi = [
    "जाति प्रमाण पत्र (Caste Certificate) राज्य सरकार द्वारा जारी किया जाने वाला एक बहुत ही महत्वपूर्ण दस्तावेज़ है, जो प्रमाणित करता है कि व्यक्ति किसी विशेष समुदाय (SC, ST, या OBC) से है।",
    "आरक्षित श्रेणियों (SC/ST/OBC) से संबंधित व्यक्तियों के लिए सरकारी योजनाओं और आरक्षण का लाभ उठाने के लिए जाति प्रमाण पत्र बनवाना एक आवश्यक कदम है।",
    "जाति प्रमाण पत्र एक महत्वपूर्ण पहचान दस्तावेज़ के रूप में कार्य करता है, जो स्कूल/कॉलेज में एडमिशन और सरकारी नौकरी में आरक्षण प्राप्त करने के लिए अनिवार्य है।"
]

birth_en = [
    "A Birth Certificate is the first and most fundamental legal identity document for a citizen, officially recording their date, place, and time of birth.",
    "Issued by the municipal corporation or Gram Panchayat, the Birth Certificate is an essential document required for school admissions, passports, and age proof.",
    "The Birth Certificate serves as the ultimate proof of a person's existence and age, legally required for enrolling in schools and claiming citizenship rights."
]
birth_hi = [
    "जन्म प्रमाण पत्र (Birth Certificate) किसी भी नागरिक का पहला और सबसे मौलिक कानूनी पहचान दस्तावेज़ है, जो उसके जन्म की तारीख, स्थान और समय को दर्ज करता है।",
    "नगर निगम या ग्राम पंचायत द्वारा जारी, जन्म प्रमाण पत्र स्कूल में प्रवेश, पासपोर्ट बनवाने और आयु प्रमाण के लिए आवश्यक एक बहुत ही ज़रूरी दस्तावेज़ है।",
    "जन्म प्रमाण पत्र किसी व्यक्ति के अस्तित्व और आयु का अंतिम प्रमाण है, जो स्कूल में दाखिला लेने और सरकारी अधिकार प्राप्त करने के लिए कानूनी रूप से आवश्यक है।"
]

death_en = [
    "A Death Certificate is an official document issued by the government, certifying the date, time, and cause of a person's death.",
    "Obtaining a Death Certificate is a mandatory legal process required to settle property inheritance, claim life insurance, and close bank accounts.",
    "The Death Certificate is a vital legal record issued by the local registrar, necessary for relieving the deceased from social and legal obligations and for family inheritance."
]
death_hi = [
    "मृत्यु प्रमाण पत्र (Death Certificate) सरकार द्वारा जारी एक आधिकारिक दस्तावेज़ है, जो किसी व्यक्ति की मृत्यु की तारीख, समय और कारण को प्रमाणित करता है।",
    "संपत्ति के उत्तराधिकार (Inheritance) को निपटाने, जीवन बीमा (Life Insurance) का दावा करने और बैंक खाते बंद करने के लिए मृत्यु प्रमाण पत्र बनवाना एक अनिवार्य कानूनी प्रक्रिया है।",
    "मृत्यु प्रमाण पत्र स्थानीय रजिस्ट्रार द्वारा जारी किया गया एक महत्वपूर्ण कानूनी रिकॉर्ड है, जो मृतक के परिवार को बीमा और पेंशन का लाभ लेने के लिए आवश्यक होता है।"
]


def build_caste(state, idx):
    name = state['name']
    slug = state['slug']
    portal = state['portal']
    url = state['portal_url']
    csc = state['csc']
    auth = state['auth']
    time = state['time']
    
    intro_en = caste_en[idx % 3]
    intro_hi = caste_hi[idx % 3]
    
    title_en = f"{name} Caste Certificate Apply Online 2026 (SC/ST/OBC)"
    title_hi = f"{name} जाति प्रमाण पत्र 2026: ऑनलाइन आवेदन (Caste Certificate)"
    desc_hi = f"{name} में SC, ST, और OBC जाति प्रमाण पत्र कैसे बनाएं? {portal} पोर्टल से ऑनलाइन आवेदन, दस्तावेज़ और स्टेटस चेक करने की पूरी जानकारी।"
    desc_en = f"Apply for SC, ST, or OBC Caste Certificate in {name} online via {portal}. Check required documents, eligibility, and track application status easily."
    
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
    <meta content="https://sarkarisewaindia.com/states/{slug}-caste-certificate.html" property="og:url"/>
    <meta content="https://sarkarisewaindia.com/assets/img/og-image.png" property="og:image"/>
    <meta content="summary_large_image" name="twitter:card"/>
    <meta content="{title_en}" name="twitter:title"/>
    <meta content="{desc_en}" name="twitter:description"/>
    <title>{title_en}</title>
    <link href="https://sarkarisewaindia.com/states/{slug}-caste-certificate.html" rel="canonical"/>
    <link href="../assets/css/style.css" rel="stylesheet"/>
    <link href="../assets/css/module2.css" rel="stylesheet"/>
    <link href="../assets/css/module15.css" rel="stylesheet"/>
    <link href="../assets/css/share-widget.css" rel="stylesheet"/>
    <script id="service-schema" type="application/ld+json">{{
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "{name} Caste Certificate",
      "description": "{desc_en}",
      "url": "https://sarkarisewaindia.com/states/{slug}-caste-certificate.html",
      "provider": {{ "@type": "GovernmentOrganization", "name": "{portal}" }},
      "serviceType": "Identity Document"
    }}</script>
</head>
<body data-slug="state-caste-cert-{slug}">
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
                <li aria-current="page"><span data-lang-show="en">Caste Certificate</span><span data-lang-show="hi">जाति प्रमाण पत्र</span></li>
            </ol>
        </nav>

        <header class="service-hero">
            <div class="service-hero__icon">📜</div>
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
                    <p><span data-lang-show="en">{intro_en} In {name}, you can easily apply for this via the <strong>{portal}</strong> portal. The certificate is generally authorized and issued by the <strong>{auth}</strong> level officer.</span><span data-lang-show="hi">{intro_hi} {name} में, आप <strong>{portal}</strong> पोर्टल के माध्यम से इसके लिए आसानी से ऑनलाइन आवेदन कर सकते हैं। यह प्रमाण पत्र सामान्यतः <strong>{auth}</strong> स्तर के अधिकारी द्वारा जारी किया जाता है।</span></p>
                </section>

                <section class="card mb-4" id="overview">
                    <h2><span data-lang-show="en">Quick Overview</span><span data-lang-show="hi">संक्षिप्त विवरण</span></h2>
                    <div class="quick-facts">
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Portal Name</span><span data-lang-show="hi">पोर्टल का नाम</span></span>
                            <span class="fact-value">{portal}</span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Approving Authority</span><span data-lang-show="hi">स्वीकृति अधिकारी</span></span>
                            <span class="fact-value">{auth}</span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Processing Fee</span><span data-lang-show="hi">आवेदन शुल्क</span></span>
                            <span class="fact-value"><span data-lang-show="en">₹15 - ₹30</span><span data-lang-show="hi">₹15 - ₹30</span></span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Estimated Time</span><span data-lang-show="hi">अनुमानित समय</span></span>
                            <span class="fact-value"><span data-lang-show="en">{time}</span><span data-lang-show="hi">{time}</span></span>
                        </div>
                    </div>
                </section>

                <section class="mb-4" id="documents">
                    <h2><span data-lang-show="en">Required Documents</span><span data-lang-show="hi">ज़रूरी दस्तावेज़ (Documents Required)</span></h2>
                    <div class="prose">
                        <p><span data-lang-show="en">To apply for an SC, ST, or OBC certificate in {name}, prepare scanned copies of the following:</span><span data-lang-show="hi">{name} में SC, ST या OBC जाति प्रमाण पत्र के लिए आवेदन करते समय निम्नलिखित दस्तावेज़ों की स्कैन कॉपी तैयार रखें:</span></p>
                        <ul class="checklist">
                            <li><span data-lang-show="en"><strong>Identity Proof:</strong> Aadhaar Card, Voter ID, or PAN Card.</span><span data-lang-show="hi"><strong>पहचान प्रमाण:</strong> आधार कार्ड, वोटर आईडी, या पैन कार्ड।</span></li>
                            <li><span data-lang-show="en"><strong>Address Proof:</strong> Ration Card, Electricity Bill, or Aadhaar.</span><span data-lang-show="hi"><strong>पते का प्रमाण:</strong> राशन कार्ड, बिजली बिल या आधार कार्ड।</span></li>
                            <li><span data-lang-show="en"><strong>Caste Proof:</strong> Father's or close blood relative's caste certificate. Alternatively, land records (Khatauni/Khatian) showing the caste.</span><span data-lang-show="hi"><strong>जाति का प्रमाण:</strong> पिता या किसी करीबी रिश्तेदार का जाति प्रमाण पत्र। विकल्प के रूप में, भूमि रिकॉर्ड (खतौनी/खतियान) जिसमें जाति का उल्लेख हो।</span></li>
                            <li><span data-lang-show="en"><strong>Income Certificate:</strong> Only required if you are applying for an OBC (Non-Creamy Layer) certificate.</span><span data-lang-show="hi"><strong>आय प्रमाण पत्र:</strong> यह केवल तभी आवश्यक है जब आप OBC (नॉन-क्रीमी लेयर) प्रमाण पत्र के लिए आवेदन कर रहे हों।</span></li>
                            <li><span data-lang-show="en"><strong>Self Declaration / Affidavit:</strong> A signed declaration format.</span><span data-lang-show="hi"><strong>स्व-प्रमाणित घोषणा पत्र:</strong> एक हस्ताक्षरित घोषणा पत्र या एफिडेविट।</span></li>
                        </ul>
                    </div>
                </section>

                <section class="mb-4" id="apply-online">
                    <h2><span data-lang-show="en">How to Apply Online via {portal}</span><span data-lang-show="hi">{portal} से ऑनलाइन आवेदन कैसे करें?</span></h2>
                    <div class="prose">
                        <ol>
                            <li>
                                <span data-lang-show="en"><strong>Visit Official Website:</strong> Open the {portal} portal at <a href="{url}" target="_blank" rel="nofollow noopener">{url}</a>.</span>
                                <span data-lang-show="hi"><strong>वेबसाइट पर जाएं:</strong> {portal} पोर्टल (<a href="{url}" target="_blank" rel="nofollow noopener">{url}</a>) खोलें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Register / Login:</strong> Complete the citizen registration process using your Mobile Number and Email ID. Login to the dashboard.</span>
                                <span data-lang-show="hi"><strong>रजिस्टर / लॉगिन करें:</strong> अपने मोबाइल नंबर और ईमेल आईडी का उपयोग करके सिटिज़न रजिस्ट्रेशन (Citizen Registration) पूरा करें और लॉगिन करें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Select Service:</strong> Under the Revenue department services, click on <strong>"Issuance of Caste Certificate"</strong> (जाति प्रमाण पत्र).</span>
                                <span data-lang-show="hi"><strong>सेवा चुनें:</strong> राजस्व विभाग की सेवाओं के तहत, <strong>"जाति प्रमाण पत्र जारी करना" (Caste Certificate)</strong> पर क्लिक करें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Fill Application Form:</strong> Choose your category (SC/ST/OBC), select your specific sub-caste from the dropdown, and enter personal details.</span>
                                <span data-lang-show="hi"><strong>आवेदन फॉर्म भरें:</strong> अपनी श्रेणी (SC/ST/OBC) चुनें, सूची से अपनी विशिष्ट उप-जाति चुनें और व्यक्तिगत विवरण भरें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Upload Documents:</strong> Upload your passport photo and all required PDFs (below 200KB usually).</span>
                                <span data-lang-show="hi"><strong>दस्तावेज़ अपलोड करें:</strong> अपना पासपोर्ट फोटो और सभी आवश्यक पीडीएफ दस्तावेज़ अपलोड करें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Make Payment &amp; Submit:</strong> Pay the online fee and submit. Keep the Application Reference Number safe for tracking.</span>
                                <span data-lang-show="hi"><strong>भुगतान और सबमिट:</strong> ऑनलाइन फीस का भुगतान करें और सबमिट करें। ट्रैकिंग के लिए आवेदन संदर्भ संख्या (Application Number) सुरक्षित रखें।</span>
                            </li>
                        </ol>
                        <div class="alert alert-info">
                            <strong><span data-lang-show="en">Apply via {csc}</span><span data-lang-show="hi">{csc} के माध्यम से आवेदन</span></strong>
                            <p><span data-lang-show="en">If you face any issues online, take your physical documents to the nearest <strong>{csc}</strong>. The operator will apply on your behalf for a minor service fee.</span><span data-lang-show="hi">यदि आपको ऑनलाइन फॉर्म भरने में परेशानी हो रही है, तो अपने दस्तावेज़ लेकर नज़दीकी <strong>{csc}</strong> पर जाएँ। ऑपरेटर मामूली सेवा शुल्क लेकर आपका फॉर्म भर देगा।</span></p>
                        </div>
                    </div>
                </section>
                
                <section class="mb-4" id="faqs">
                    <h2><span data-lang-show="en">Frequently Asked Questions (FAQs)</span><span data-lang-show="hi">अक्सर पूछे जाने वाले सवाल (FAQs)</span></h2>
                    <div class="accordion">
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">What is the validity of the Caste Certificate in {name}?</span><span data-lang-show="hi">{name} में जाति प्रमाण पत्र की वैधता (Validity) कितनी होती है?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">For SC and ST categories, the caste certificate is generally valid for a <strong>lifetime</strong>. However, for the OBC (Non-Creamy Layer) category, the certificate is usually valid for 1 to 3 years because it depends on the family's annual income.</span>
                                <span data-lang-show="hi">SC और ST श्रेणियों के लिए, जाति प्रमाण पत्र आम तौर पर <strong>आजीवन (Lifetime)</strong> मान्य होता है। हालाँकि, OBC (नॉन-क्रीमी लेयर) श्रेणी के लिए, यह प्रमाण पत्र आमतौर पर 1 से 3 साल तक ही मान्य होता है क्योंकि यह परिवार की वार्षिक आय पर निर्भर करता है।</span>
                            </div>
                        </details>
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">Can I track my Caste Certificate status online?</span><span data-lang-show="hi">क्या मैं अपना जाति प्रमाण पत्र का स्टेटस ऑनलाइन ट्रैक कर सकता हूँ?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">Yes, you can track it by visiting the {portal} portal and entering your Application Reference Number.</span>
                                <span data-lang-show="hi">हाँ, आप {portal} पोर्टल पर जाकर और अपना आवेदन संदर्भ संख्या (Application Number) दर्ज करके इसे ट्रैक कर सकते हैं।</span>
                            </div>
                        </details>
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">How to download the digitally signed certificate?</span><span data-lang-show="hi">डिजिटल हस्ताक्षरित प्रमाण पत्र कैसे डाउनलोड करें?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">Once your application is approved by the {auth}, you will receive an SMS. You can log into {portal} and download the PDF. No manual signature is required.</span>
                                <span data-lang-show="hi">एक बार {auth} द्वारा आपका आवेदन स्वीकृत हो जाने पर, आपको SMS मिलेगा। आप {portal} में लॉगिन करके पीडीएफ डाउनलोड कर सकते हैं। इसमें मैन्युअल हस्ताक्षर की आवश्यकता नहीं होती है।</span>
                            </div>
                        </details>
                    </div>
                </section>
            </div>

            <aside class="service-sidebar">
                <div class="widget">
                    <h3 class="widget-title"><span data-lang-show="en">Important Links</span><span data-lang-show="hi">महत्वपूर्ण लिंक्स</span></h3>
                    <ul class="widget-links">
                        <li><a href="{url}" target="_blank" rel="nofollow noopener">🌐 {portal} Portal</a></li>
                        <li><a href="../tools/status-troubleshooter.html">🔍 <span data-lang-show="en">Track Application Status</span><span data-lang-show="hi">आवेदन स्टेटस चेक करें</span></a></li>
                        <li><a href="../tools/document-checklist.html">📄 <span data-lang-show="en">Document Checklist</span><span data-lang-show="hi">दस्तावेज़ सूची</span></a></li>
                        <li><a href="../tools/csc-locator.html">📍 <span data-lang-show="en">Locate {csc}</span><span data-lang-show="hi">नज़दीकी {csc} खोजें</span></a></li>
                    </ul>
                </div>
            </aside>
        </div>
    
    <!-- Cross-Linking Banner: CSC & Jan Aushadhi -->
    <section class="service-section" style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #86efac; border-radius: 12px; padding: 24px; margin-top: 30px; margin-bottom: 20px;">
      <h2 style="color: #166534; font-size: 1.5rem; margin-top: 0; margin-bottom: 12px;">Need Help or Cheap Medicines? 🏥</h2>
      <p style="color: #15803d; font-size: 1.05rem; margin-bottom: 16px; line-height: 1.5;">
        Save time and money by using our officially integrated location tools:
      </p>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <a href="../../tools/csc-locator.html" style="flex: 1; min-width: 200px; background: white; border: 2px solid #22c55e; color: #166534; padding: 12px 16px; border-radius: 8px; text-decoration: none; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <span>📍 Find Nearest CSC Center</span>
        </a>
        <a href="../../service/jan-aushadhi-store-locator.html" style="flex: 1; min-width: 200px; background: white; border: 2px solid #22c55e; color: #166534; padding: 12px 16px; border-radius: 8px; text-decoration: none; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <span>💊 Jan Aushadhi Store Locator</span>
        </a>
      </div>
    </section>

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

def build_birth(state, idx):
    name = state['name']
    slug = state['slug']
    portal = state['portal']
    url = state['portal_url']
    csc = state['csc']
    auth = state['auth']
    time = state['time']
    
    intro_en = birth_en[idx % 3]
    intro_hi = birth_hi[idx % 3]
    
    title_en = f"{name} Birth Certificate Apply Online 2026: Form & Status"
    title_hi = f"{name} जन्म प्रमाण पत्र 2026: ऑनलाइन आवेदन (Birth Certificate)"
    desc_hi = f"{name} में जन्म प्रमाण पत्र (Birth Certificate) कैसे बनाएं? CRS पोर्टल या {portal} से ऑनलाइन आवेदन, दस्तावेज़ और फॉर्म की जानकारी।"
    desc_en = f"Apply for a Birth Certificate in {name} online via {portal} or CRS portal. Check required documents, fees, and application status easily."
    
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
    <meta content="https://sarkarisewaindia.com/states/{slug}-birth-certificate.html" property="og:url"/>
    <meta content="https://sarkarisewaindia.com/assets/img/og-image.png" property="og:image"/>
    <meta content="summary_large_image" name="twitter:card"/>
    <meta content="{title_en}" name="twitter:title"/>
    <meta content="{desc_en}" name="twitter:description"/>
    <title>{title_en}</title>
    <link href="https://sarkarisewaindia.com/states/{slug}-birth-certificate.html" rel="canonical"/>
    <link href="../assets/css/style.css" rel="stylesheet"/>
    <link href="../assets/css/module2.css" rel="stylesheet"/>
    <link href="../assets/css/module15.css" rel="stylesheet"/>
    <link href="../assets/css/share-widget.css" rel="stylesheet"/>
    <script id="service-schema" type="application/ld+json">{{
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "{name} Birth Certificate Registration",
      "description": "{desc_en}",
      "url": "https://sarkarisewaindia.com/states/{slug}-birth-certificate.html",
      "provider": {{ "@type": "GovernmentOrganization", "name": "Civil Registration System (CRS) / {portal}" }},
      "serviceType": "Certificate"
    }}</script>
</head>
<body data-slug="state-birth-cert-{slug}">
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
                <li aria-current="page"><span data-lang-show="en">Birth Certificate</span><span data-lang-show="hi">जन्म प्रमाण पत्र</span></li>
            </ol>
        </nav>

        <header class="service-hero">
            <div class="service-hero__icon">👶</div>
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
                    <p><span data-lang-show="en">{intro_en} Under the Registration of Births and Deaths Act (RBD), every birth in {name} must be officially registered within 21 days either through the central CRS portal or the state <strong>{portal}</strong> portal.</span><span data-lang-show="hi">{intro_hi} जन्म और मृत्यु पंजीकरण अधिनियम (RBD) के तहत, {name} में प्रत्येक जन्म को 21 दिनों के भीतर केंद्रीय CRS पोर्टल या राज्य के <strong>{portal}</strong> पोर्टल के माध्यम से आधिकारिक तौर पर पंजीकृत करना अनिवार्य है।</span></p>
                </section>

                <section class="card mb-4" id="overview">
                    <h2><span data-lang-show="en">Quick Overview</span><span data-lang-show="hi">संक्षिप्त विवरण</span></h2>
                    <div class="quick-facts">
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Registration Portal</span><span data-lang-show="hi">रजिस्ट्रेशन पोर्टल</span></span>
                            <span class="fact-value">CRS (Central) / {portal}</span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Mandatory Period</span><span data-lang-show="hi">अनिवार्य अवधि</span></span>
                            <span class="fact-value"><span data-lang-show="en">Within 21 Days of birth</span><span data-lang-show="hi">जन्म के 21 दिन के भीतर</span></span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Fees (Within 21 Days)</span><span data-lang-show="hi">फीस (21 दिन के भीतर)</span></span>
                            <span class="fact-value"><span data-lang-show="en">Free (₹0)</span><span data-lang-show="hi">निःशुल्क (₹0)</span></span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Delayed Registration</span><span data-lang-show="hi">देरी से पंजीकरण</span></span>
                            <span class="fact-value"><span data-lang-show="en">Requires Magistrate/SDM Affidavit</span><span data-lang-show="hi">मजिस्ट्रेट/SDM का एफिडेविट लगेगा</span></span>
                        </div>
                    </div>
                </section>

                <section class="mb-4" id="documents">
                    <h2><span data-lang-show="en">Required Documents</span><span data-lang-show="hi">ज़रूरी दस्तावेज़ (Documents Required)</span></h2>
                    <div class="prose">
                        <ul class="checklist">
                            <li><span data-lang-show="en"><strong>Proof of Birth:</strong> Discharge slip or certificate issued by the Hospital/Nursing Home.</span><span data-lang-show="hi"><strong>जन्म का प्रमाण:</strong> अस्पताल/नर्सिंग होम द्वारा जारी डिस्चार्ज स्लिप या प्रमाण पत्र।</span></li>
                            <li><span data-lang-show="en"><strong>Identity Proof of Parents:</strong> Aadhaar Card, Voter ID, or PAN Card of both parents.</span><span data-lang-show="hi"><strong>माता-पिता का पहचान प्रमाण:</strong> माता और पिता दोनों का आधार कार्ड, वोटर आईडी या पैन कार्ड।</span></li>
                            <li><span data-lang-show="en"><strong>Marriage Certificate:</strong> Marriage certificate of parents (if available).</span><span data-lang-show="hi"><strong>विवाह प्रमाण पत्र:</strong> माता-पिता का विवाह प्रमाण पत्र (यदि उपलब्ध हो)।</span></li>
                            <li><span data-lang-show="en"><strong>Address Proof:</strong> Ration Card, Electricity Bill, or Water Bill.</span><span data-lang-show="hi"><strong>पते का प्रमाण:</strong> राशन कार्ड, बिजली बिल या पानी का बिल।</span></li>
                            <li><span data-lang-show="en"><strong>Delayed Registration:</strong> If applying after 21 days, an affidavit from SDM / Notary is strictly required.</span><span data-lang-show="hi"><strong>विलंबित पंजीकरण (Delayed):</strong> यदि जन्म के 21 दिनों के बाद आवेदन कर रहे हैं, तो SDM / नोटरी से एफिडेविट (शपथ पत्र) अनिवार्य है।</span></li>
                        </ul>
                    </div>
                </section>

                <section class="mb-4" id="apply-online">
                    <h2><span data-lang-show="en">How to Apply / Download Online</span><span data-lang-show="hi">ऑनलाइन आवेदन और डाउनलोड कैसे करें?</span></h2>
                    <div class="prose">
                        <div class="alert alert-info">
                            <strong><span data-lang-show="en">Institutional Births (Hospitals)</span><span data-lang-show="hi">अस्पताल में हुए जन्म के लिए</span></strong>
                            <p><span data-lang-show="en">If the child was born in a recognized hospital in {name}, the hospital administration is responsible for registering the birth on the CRS portal automatically. You simply need to take the registration number from the hospital and download the certificate online later.</span><span data-lang-show="hi">यदि बच्चे का जन्म {name} के किसी मान्यता प्राप्त अस्पताल में हुआ है, तो अस्पताल प्रशासन ही CRS पोर्टल पर जन्म दर्ज करने के लिए ज़िम्मेदार है। आपको बस अस्पताल से रजिस्ट्रेशन नंबर लेना है और बाद में ऑनलाइन सर्टिफिकेट डाउनलोड कर लेना है।</span></p>
                        </div>
                        <p><strong><span data-lang-show="en">For Home Births (Registration within 21 Days):</span><span data-lang-show="hi">घर पर हुए जन्म के लिए (21 दिन के भीतर):</span></strong></p>
                        <ol>
                            <li><span data-lang-show="en">Visit the central CRS portal (<a href="https://crsorgi.gov.in/" target="_blank" rel="nofollow noopener">crsorgi.gov.in</a>) or the {portal} portal at <a href="{url}" target="_blank" rel="nofollow noopener">{url}</a>.</span><span data-lang-show="hi">केंद्रीय CRS पोर्टल (<a href="https://crsorgi.gov.in/" target="_blank" rel="nofollow noopener">crsorgi.gov.in</a>) या {portal} पोर्टल (<a href="{url}" target="_blank" rel="nofollow noopener">{url}</a>) पर जाएँ।</span></li>
                            <li><span data-lang-show="en">Click on "General Public Signup" and create an account using your details.</span><span data-lang-show="hi">"General Public Signup" पर क्लिक करें और अपनी जानकारी डालकर अकाउंट बनाएँ।</span></li>
                            <li><span data-lang-show="en">Log in, click on "Add Birth Registration", and fill in the exact details of the child and parents.</span><span data-lang-show="hi">लॉगिन करें, "Add Birth Registration" पर क्लिक करें, और बच्चे व माता-पिता का सटीक विवरण भरें।</span></li>
                            <li><span data-lang-show="en">Take a printout of the generated form and submit it physically to your local Registrar / Gram Panchayat / Municipal office within 7 days.</span><span data-lang-show="hi">जनरेट किए गए फॉर्म का प्रिंटआउट लें और इसे 7 दिनों के भीतर अपने स्थानीय रजिस्ट्रार / ग्राम पंचायत / नगर निगम कार्यालय में भौतिक रूप से जमा करें।</span></li>
                        </ol>
                        <p><strong><span data-lang-show="en">If you need help:</span><span data-lang-show="hi">यदि आपको मदद चाहिए:</span></strong> <span data-lang-show="en">You can visit the nearest <strong>{csc}</strong> to get the delayed birth registration done smoothly.</span><span data-lang-show="hi">यदि जन्म हुए 21 दिन से अधिक समय हो गया है (Delayed Registration), तो आप नज़दीकी <strong>{csc}</strong> पर जाकर एफिडेविट के साथ फॉर्म भरवा सकते हैं।</span></p>
                    </div>
                </section>
                
                <section class="mb-4" id="faqs">
                    <h2><span data-lang-show="en">Frequently Asked Questions (FAQs)</span><span data-lang-show="hi">अक्सर पूछे जाने वाले सवाल (FAQs)</span></h2>
                    <div class="accordion">
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">What happens if I don't register the birth within 21 days in {name}?</span><span data-lang-show="hi">यदि मैं {name} में 21 दिनों के भीतर जन्म पंजीकृत नहीं करता तो क्या होगा?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">Registration is free within 21 days. Between 21-30 days, a late fee applies. After 30 days but within 1 year, written permission from a medical officer is needed. After 1 year, you must get a judicial order from the SDM/Magistrate.</span>
                                <span data-lang-show="hi">21 दिनों के भीतर पंजीकरण निःशुल्क है। 21-30 दिनों के बीच विलंब शुल्क (late fee) लगता है। 30 दिन से 1 वर्ष के बीच चिकित्सा अधिकारी की अनुमति लगती है। 1 वर्ष के बाद, आपको अनिवार्य रूप से SDM/मजिस्ट्रेट से आदेश (एफिडेविट) लेना होगा।</span>
                            </div>
                        </details>
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">Can I download the Birth Certificate online without a name?</span><span data-lang-show="hi">क्या मैं बिना नाम के जन्म प्रमाण पत्र डाउनलोड कर सकता हूँ?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">Yes, a birth can be registered without the child's name initially. The name can be added later (within 1 year free of cost, or up to 15 years with a fee) via the CRS portal.</span>
                                <span data-lang-show="hi">हाँ, बच्चे के नाम के बिना भी जन्म पंजीकृत किया जा सकता है। नाम बाद में CRS पोर्टल के माध्यम से (1 वर्ष के भीतर मुफ्त, या 15 वर्ष तक शुल्क के साथ) जोड़ा जा सकता है।</span>
                            </div>
                        </details>
                    </div>
                </section>
            </div>

            <aside class="service-sidebar">
                <div class="widget">
                    <h3 class="widget-title"><span data-lang-show="en">Important Links</span><span data-lang-show="hi">महत्वपूर्ण लिंक्स</span></h3>
                    <ul class="widget-links">
                        <li><a href="https://crsorgi.gov.in/" target="_blank" rel="nofollow noopener">🌐 CRS Portal</a></li>
                        <li><a href="{url}" target="_blank" rel="nofollow noopener">📄 {portal} Portal</a></li>
                        <li><a href="../tools/status-troubleshooter.html">🔍 <span data-lang-show="en">Track Status</span><span data-lang-show="hi">स्टेटस चेक करें</span></a></li>
                        <li><a href="../tools/csc-locator.html">📍 <span data-lang-show="en">Locate {csc}</span><span data-lang-show="hi">नज़दीकी {csc} खोजें</span></a></li>
                    </ul>
                </div>
            </aside>
        </div>
    
    <!-- Cross-Linking Banner: CSC & Jan Aushadhi -->
    <section class="service-section" style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #86efac; border-radius: 12px; padding: 24px; margin-top: 30px; margin-bottom: 20px;">
      <h2 style="color: #166534; font-size: 1.5rem; margin-top: 0; margin-bottom: 12px;">Need Help or Cheap Medicines? 🏥</h2>
      <p style="color: #15803d; font-size: 1.05rem; margin-bottom: 16px; line-height: 1.5;">
        Save time and money by using our officially integrated location tools:
      </p>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <a href="../../tools/csc-locator.html" style="flex: 1; min-width: 200px; background: white; border: 2px solid #22c55e; color: #166534; padding: 12px 16px; border-radius: 8px; text-decoration: none; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <span>📍 Find Nearest CSC Center</span>
        </a>
        <a href="../../service/jan-aushadhi-store-locator.html" style="flex: 1; min-width: 200px; background: white; border: 2px solid #22c55e; color: #166534; padding: 12px 16px; border-radius: 8px; text-decoration: none; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <span>💊 Jan Aushadhi Store Locator</span>
        </a>
      </div>
    </section>

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

def build_death(state, idx):
    name = state['name']
    slug = state['slug']
    portal = state['portal']
    url = state['portal_url']
    csc = state['csc']
    auth = state['auth']
    time = state['time']
    
    intro_en = death_en[idx % 3]
    intro_hi = death_hi[idx % 3]
    
    title_en = f"{name} Death Certificate Apply Online 2026: Process & Status"
    title_hi = f"{name} मृत्यु प्रमाण पत्र 2026: ऑनलाइन आवेदन (Death Certificate)"
    desc_hi = f"{name} में मृत्यु प्रमाण पत्र (Death Certificate) कैसे बनवाएं? CRS पोर्टल या {portal} से ऑनलाइन आवेदन, ज़रूरी दस्तावेज़ और फीस की जानकारी।"
    desc_en = f"Apply for a Death Certificate in {name} online via {portal} or CRS portal. Check required documents, process, and application status easily."
    
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
    <meta content="https://sarkarisewaindia.com/states/{slug}-death-certificate.html" property="og:url"/>
    <meta content="https://sarkarisewaindia.com/assets/img/og-image.png" property="og:image"/>
    <meta content="summary_large_image" name="twitter:card"/>
    <meta content="{title_en}" name="twitter:title"/>
    <meta content="{desc_en}" name="twitter:description"/>
    <title>{title_en}</title>
    <link href="https://sarkarisewaindia.com/states/{slug}-death-certificate.html" rel="canonical"/>
    <link href="../assets/css/style.css" rel="stylesheet"/>
    <link href="../assets/css/module2.css" rel="stylesheet"/>
    <link href="../assets/css/module15.css" rel="stylesheet"/>
    <link href="../assets/css/share-widget.css" rel="stylesheet"/>
    <script id="service-schema" type="application/ld+json">{{
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "{name} Death Certificate Registration",
      "description": "{desc_en}",
      "url": "https://sarkarisewaindia.com/states/{slug}-death-certificate.html",
      "provider": {{ "@type": "GovernmentOrganization", "name": "Civil Registration System (CRS) / {portal}" }},
      "serviceType": "Certificate"
    }}</script>
</head>
<body data-slug="state-death-cert-{slug}">
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
                <li aria-current="page"><span data-lang-show="en">Death Certificate</span><span data-lang-show="hi">मृत्यु प्रमाण पत्र</span></li>
            </ol>
        </nav>

        <header class="service-hero">
            <div class="service-hero__icon">🕊️</div>
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
                    <p><span data-lang-show="en">{intro_en} As per the RBD Act, every death occurring in {name} must be registered within 21 days with the local registrar via the CRS portal or {portal}.</span><span data-lang-show="hi">{intro_hi} RBD अधिनियम के अनुसार, {name} में होने वाली प्रत्येक मृत्यु को 21 दिनों के भीतर CRS पोर्टल या {portal} के माध्यम से स्थानीय रजिस्ट्रार के पास पंजीकृत किया जाना चाहिए।</span></p>
                </section>

                <section class="card mb-4" id="overview">
                    <h2><span data-lang-show="en">Quick Overview</span><span data-lang-show="hi">संक्षिप्त विवरण</span></h2>
                    <div class="quick-facts">
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Registration Portal</span><span data-lang-show="hi">रजिस्ट्रेशन पोर्टल</span></span>
                            <span class="fact-value">CRS (Central) / {portal}</span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Mandatory Period</span><span data-lang-show="hi">अनिवार्य अवधि</span></span>
                            <span class="fact-value"><span data-lang-show="en">Within 21 Days of death</span><span data-lang-show="hi">मृत्यु के 21 दिन के भीतर</span></span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Fees (Within 21 Days)</span><span data-lang-show="hi">फीस (21 दिन के भीतर)</span></span>
                            <span class="fact-value"><span data-lang-show="en">Free (₹0)</span><span data-lang-show="hi">निःशुल्क (₹0)</span></span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Delayed Registration</span><span data-lang-show="hi">देरी से पंजीकरण</span></span>
                            <span class="fact-value"><span data-lang-show="en">Requires Magistrate/SDM Affidavit</span><span data-lang-show="hi">मजिस्ट्रेट/SDM का एफिडेविट लगेगा</span></span>
                        </div>
                    </div>
                </section>

                <section class="mb-4" id="documents">
                    <h2><span data-lang-show="en">Required Documents</span><span data-lang-show="hi">ज़रूरी दस्तावेज़ (Documents Required)</span></h2>
                    <div class="prose">
                        <ul class="checklist">
                            <li><span data-lang-show="en"><strong>Proof of Death:</strong> Hospital death summary / Medical certificate of cause of death. For home deaths, a letter from the village head/sarpanch or local doctor.</span><span data-lang-show="hi"><strong>मृत्यु का प्रमाण:</strong> अस्पताल की मृत्यु रिपोर्ट। घर पर मृत्यु होने पर ग्राम प्रधान/सरपंच या स्थानीय डॉक्टर का पत्र।</span></li>
                            <li><span data-lang-show="en"><strong>Identity of Deceased:</strong> Aadhaar Card, Voter ID, or Ration Card of the deceased person.</span><span data-lang-show="hi"><strong>मृतक की पहचान:</strong> मृतक का आधार कार्ड, वोटर आईडी या राशन कार्ड।</span></li>
                            <li><span data-lang-show="en"><strong>Applicant's ID:</strong> Aadhaar Card or Voter ID of the person applying (relative).</span><span data-lang-show="hi"><strong>आवेदक का प्रमाण:</strong> आवेदन करने वाले रिश्तेदार का आधार कार्ड या पहचान पत्र।</span></li>
                            <li><span data-lang-show="en"><strong>Cremation/Burial Receipt:</strong> Slip from the cremation ground or graveyard.</span><span data-lang-show="hi"><strong>श्मशान/कब्रिस्तान की रसीद:</strong> श्मशान घाट या कब्रिस्तान से मिली रसीद।</span></li>
                            <li><span data-lang-show="en"><strong>Delayed Registration:</strong> If applying after 21 days, an affidavit from SDM / Magistrate is mandatory.</span><span data-lang-show="hi"><strong>विलंबित पंजीकरण:</strong> 21 दिन के बाद आवेदन करने पर SDM/मजिस्ट्रेट का एफिडेविट अनिवार्य है।</span></li>
                        </ul>
                    </div>
                </section>

                <section class="mb-4" id="apply-online">
                    <h2><span data-lang-show="en">How to Apply / Download Online</span><span data-lang-show="hi">ऑनलाइन आवेदन और डाउनलोड कैसे करें?</span></h2>
                    <div class="prose">
                        <div class="alert alert-info">
                            <strong><span data-lang-show="en">Institutional Deaths (Hospitals)</span><span data-lang-show="hi">अस्पताल में हुई मृत्यु के लिए</span></strong>
                            <p><span data-lang-show="en">If the death occurred in a recognized hospital in {name}, the hospital administration registers the event on the CRS portal automatically. You just need to collect the registration slip and download the final certificate online.</span><span data-lang-show="hi">यदि मृत्यु {name} के अस्पताल में हुई है, तो अस्पताल प्रशासन स्वयं CRS पोर्टल पर मृत्यु दर्ज करता है। आपको बस स्लिप लेकर बाद में सर्टिफिकेट ऑनलाइन डाउनलोड करना होता है।</span></p>
                        </div>
                        <p><strong><span data-lang-show="en">For Home Deaths (Registration within 21 Days):</span><span data-lang-show="hi">घर पर हुई मृत्यु के लिए (21 दिन के भीतर):</span></strong></p>
                        <ol>
                            <li><span data-lang-show="en">Go to the CRS portal (<a href="https://crsorgi.gov.in/" target="_blank" rel="nofollow noopener">crsorgi.gov.in</a>) or {name}'s {portal} portal at <a href="{url}" target="_blank" rel="nofollow noopener">{url}</a>.</span><span data-lang-show="hi">CRS पोर्टल (<a href="https://crsorgi.gov.in/" target="_blank" rel="nofollow noopener">crsorgi.gov.in</a>) या {name} के {portal} पोर्टल (<a href="{url}" target="_blank" rel="nofollow noopener">{url}</a>) पर जाएँ।</span></li>
                            <li><span data-lang-show="en">Create a "General Public" account.</span><span data-lang-show="hi">"General Public Signup" के ज़रिए अकाउंट बनाएँ।</span></li>
                            <li><span data-lang-show="en">Click on "Add Death Registration" and fill in the details of the deceased and the time of death.</span><span data-lang-show="hi">लॉगिन करके "Add Death Registration" चुनें और मृतक का पूरा विवरण भरें।</span></li>
                            <li><span data-lang-show="en">Print the form and submit it to your local registrar / municipal corporation within 7 days for verification.</span><span data-lang-show="hi">फॉर्म का प्रिंटआउट लें और इसे 7 दिनों के भीतर सत्यापन के लिए अपने स्थानीय रजिस्ट्रार/नगर निगम में जमा करें।</span></li>
                        </ol>
                        <p><strong><span data-lang-show="en">If you need help:</span><span data-lang-show="hi">यदि आपको मदद चाहिए:</span></strong> <span data-lang-show="en">You can visit the nearest <strong>{csc}</strong> to get the death registration done, especially if it requires a delayed affidavit.</span><span data-lang-show="hi">यदि 21 दिन से अधिक समय हो गया है, तो आप नज़दीकी <strong>{csc}</strong> पर जाकर एफिडेविट के साथ फॉर्म आसानी से भरवा सकते हैं।</span></p>
                    </div>
                </section>
                
                <section class="mb-4" id="faqs">
                    <h2><span data-lang-show="en">Frequently Asked Questions (FAQs)</span><span data-lang-show="hi">अक्सर पूछे जाने वाले सवाल (FAQs)</span></h2>
                    <div class="accordion">
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">Is there any fee for Death Certificate in {name}?</span><span data-lang-show="hi">क्या {name} में मृत्यु प्रमाण पत्र के लिए कोई शुल्क (Fee) है?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">If registered within 21 days, it is completely free. After 21 days, a nominal late fee is charged, and you may have to bear affidavit costs if delayed beyond 1 year.</span>
                                <span data-lang-show="hi">यदि मृत्यु के 21 दिनों के भीतर पंजीकरण किया जाता है, तो यह पूरी तरह से मुफ्त है। 21 दिनों के बाद, मामूली विलंब शुल्क लिया जाता है। 1 वर्ष से अधिक की देरी पर आपको एफिडेविट/मजिस्ट्रेट आदेश का खर्च उठाना होगा।</span>
                            </div>
                        </details>
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">How can I download the Death Certificate online?</span><span data-lang-show="hi">मैं मृत्यु प्रमाण पत्र ऑनलाइन कैसे डाउनलोड कर सकता हूँ?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">Once approved by the registrar, you can log into the CRS portal or {portal} using your application reference number and download the digitally signed PDF copy.</span>
                                <span data-lang-show="hi">रजिस्ट्रार द्वारा स्वीकृत होने के बाद, आप अपने आवेदन संदर्भ संख्या (Application Number) का उपयोग करके CRS पोर्टल या {portal} में लॉग इन कर सकते हैं और डिजिटल रूप से हस्ताक्षरित PDF कॉपी डाउनलोड कर सकते हैं।</span>
                            </div>
                        </details>
                    </div>
                </section>
            </div>

            <aside class="service-sidebar">
                <div class="widget">
                    <h3 class="widget-title"><span data-lang-show="en">Important Links</span><span data-lang-show="hi">महत्वपूर्ण लिंक्स</span></h3>
                    <ul class="widget-links">
                        <li><a href="https://crsorgi.gov.in/" target="_blank" rel="nofollow noopener">🌐 CRS Portal</a></li>
                        <li><a href="{url}" target="_blank" rel="nofollow noopener">📄 {portal} Portal</a></li>
                        <li><a href="../tools/status-troubleshooter.html">🔍 <span data-lang-show="en">Track Status</span><span data-lang-show="hi">स्टेटस चेक करें</span></a></li>
                        <li><a href="../tools/csc-locator.html">📍 <span data-lang-show="en">Locate {csc}</span><span data-lang-show="hi">नज़दीकी {csc} खोजें</span></a></li>
                    </ul>
                </div>
            </aside>
        </div>
    
    <!-- Cross-Linking Banner: CSC & Jan Aushadhi -->
    <section class="service-section" style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #86efac; border-radius: 12px; padding: 24px; margin-top: 30px; margin-bottom: 20px;">
      <h2 style="color: #166534; font-size: 1.5rem; margin-top: 0; margin-bottom: 12px;">Need Help or Cheap Medicines? 🏥</h2>
      <p style="color: #15803d; font-size: 1.05rem; margin-bottom: 16px; line-height: 1.5;">
        Save time and money by using our officially integrated location tools:
      </p>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <a href="../../tools/csc-locator.html" style="flex: 1; min-width: 200px; background: white; border: 2px solid #22c55e; color: #166534; padding: 12px 16px; border-radius: 8px; text-decoration: none; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <span>📍 Find Nearest CSC Center</span>
        </a>
        <a href="../../service/jan-aushadhi-store-locator.html" style="flex: 1; min-width: 200px; background: white; border: 2px solid #22c55e; color: #166534; padding: 12px 16px; border-radius: 8px; text-decoration: none; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <span>💊 Jan Aushadhi Store Locator</span>
        </a>
      </div>
    </section>

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
        with open(os.path.join(out_dir, f"{state['slug']}-caste-certificate.html"), "w", encoding="utf-8") as f:
            f.write(build_caste(state, idx))
            
        with open(os.path.join(out_dir, f"{state['slug']}-birth-certificate.html"), "w", encoding="utf-8") as f:
            f.write(build_birth(state, idx))
            
        with open(os.path.join(out_dir, f"{state['slug']}-death-certificate.html"), "w", encoding="utf-8") as f:
            f.write(build_death(state, idx))
            
    print("Generated 108 thick pages (36 Caste, 36 Birth, 36 Death)")

if __name__ == "__main__":
    main()
