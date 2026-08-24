import os
import random

states = [
    {"slug": "andhra-pradesh", "name": "Andhra Pradesh", "portal": "Meeseva", "portal_url": "https://meeseva.ap.gov.in/", "csc": "Meeseva Center", "auth": "Tahsildar", "time": "15 Days"},
    {"slug": "arunachal-pradesh", "name": "Arunachal Pradesh", "portal": "Service Plus", "portal_url": "https://serviceonline.gov.in/", "csc": "CSC Center", "auth": "EAC / CO", "time": "14 Days"},
    {"slug": "assam", "name": "Assam", "portal": "e-Pramaan / Sewa Setu", "portal_url": "https://sewasetu.assam.gov.in/", "csc": "PFC / CSC", "auth": "Circle Officer", "time": "15 Days"},
    {"slug": "bihar", "name": "Bihar", "portal": "RTPS Bihar (ServicePlus)", "portal_url": "https://serviceonline.bihar.gov.in/", "csc": "Vasudha Kendra", "auth": "Circle Officer (CO) / SDO / DM", "time": "21 Working Days"},
    {"slug": "chhattisgarh", "name": "Chhattisgarh", "portal": "e-District Chhattisgarh", "portal_url": "https://edistrict.cgstate.gov.in/", "csc": "Lok Seva Kendra", "auth": "Tehsildar", "time": "15 Days"},
    {"slug": "goa", "name": "Goa", "portal": "Goa Online", "portal_url": "https://goaonline.gov.in/", "csc": "CSC Center", "auth": "Mamlatdar", "time": "10 Days"},
    {"slug": "gujarat", "name": "Gujarat", "portal": "Digital Gujarat", "portal_url": "https://www.digitalgujarat.gov.in/", "csc": "Jan Seva Kendra", "auth": "Mamlatdar / TDO", "time": "14 Days"},
    {"slug": "haryana", "name": "Haryana", "portal": "Saral Haryana", "portal_url": "https://saralharyana.gov.in/", "csc": "Antyodaya Kendra / CSC", "auth": "Tehsildar", "time": "15 Days"},
    {"slug": "himachal-pradesh", "name": "Himachal Pradesh", "portal": "e-District HP", "portal_url": "https://edistrict.hp.gov.in/", "csc": "Lok Mitra Kendra", "auth": "Tehsildar", "time": "15 Days"},
    {"slug": "jharkhand", "name": "Jharkhand", "portal": "JharSewa", "portal_url": "https://jharsewa.jharkhand.gov.in/", "csc": "Pragya Kendra", "auth": "Circle Officer (CO)", "time": "30 Days"},
    {"slug": "karnataka", "name": "Karnataka", "portal": "Seva Sindhu", "portal_url": "https://sevasindhu.karnataka.gov.in/", "csc": "Bangalore One / CSC", "auth": "Tahsildar", "time": "21 Days"},
    {"slug": "kerala", "name": "Kerala", "portal": "e-District Kerala", "portal_url": "https://edistrict.kerala.gov.in/", "csc": "Akshaya Centre", "auth": "Village Officer", "time": "7 Days"},
    {"slug": "madhya-pradesh", "name": "Madhya Pradesh", "portal": "MP e-District", "portal_url": "https://mpedistrict.gov.in/", "csc": "Lok Seva Kendra", "auth": "Tehsildar", "time": "15 Days"},
    {"slug": "maharashtra", "name": "Maharashtra", "portal": "Aaple Sarkar", "portal_url": "https://aaplesarkar.mahaonline.gov.in/", "csc": "Maha e-Seva Kendra", "auth": "Tehsildar", "time": "15 Days"},
    {"slug": "manipur", "name": "Manipur", "portal": "e-Pramaan", "portal_url": "https://manipur.gov.in/", "csc": "CSC Center", "auth": "SDO / SDC", "time": "14 Days"},
    {"slug": "meghalaya", "name": "Meghalaya", "portal": "e-District Meghalaya", "portal_url": "https://megedistrict.gov.in/", "csc": "CSC Center", "auth": "Deputy Commissioner", "time": "15 Days"},
    {"slug": "mizoram", "name": "Mizoram", "portal": "e-District Mizoram", "portal_url": "https://edistrict.mizoram.gov.in/", "csc": "CSC Center", "auth": "Deputy Commissioner", "time": "15 Days"},
    {"slug": "nagaland", "name": "Nagaland", "portal": "e-District Nagaland", "portal_url": "https://edistrict.nagaland.gov.in/", "csc": "CSC Center", "auth": "Deputy Commissioner", "time": "15 Days"},
    {"slug": "odisha", "name": "Odisha", "portal": "Odisha e-District", "portal_url": "https://edistrict.odisha.gov.in/", "csc": "Mo Seva Kendra", "auth": "Tahasildar", "time": "15 Days"},
    {"slug": "punjab", "name": "Punjab", "portal": "Connect Punjab", "portal_url": "https://connect.punjab.gov.in/", "csc": "Sewa Kendra", "auth": "Tehsildar / SDM", "time": "15 Days"},
    {"slug": "rajasthan", "name": "Rajasthan", "portal": "e-Mitra Rajasthan", "portal_url": "https://emitra.rajasthan.gov.in/", "csc": "e-Mitra Kendra", "auth": "Tehsildar", "time": "15 Days"},
    {"slug": "sikkim", "name": "Sikkim", "portal": "e-District Sikkim", "portal_url": "https://sikkim.gov.in/", "csc": "CSC Center", "auth": "SDM", "time": "15 Days"},
    {"slug": "tamil-nadu", "name": "Tamil Nadu", "portal": "TNeGA", "portal_url": "https://tnega.tn.gov.in/", "csc": "e-Sevai Maiyam", "auth": "Tahsildar", "time": "15 Days"},
    {"slug": "telangana", "name": "Telangana", "portal": "Meeseva Telangana", "portal_url": "https://ts.meeseva.telangana.gov.in/", "csc": "Meeseva Center", "auth": "Tahsildar", "time": "15 Days"},
    {"slug": "tripura", "name": "Tripura", "portal": "e-District Tripura", "portal_url": "https://edistrict.tripura.gov.in/", "csc": "CSC Center", "auth": "SDM", "time": "15 Days"},
    {"slug": "uttar-pradesh", "name": "Uttar Pradesh", "portal": "e-Sathi UP", "portal_url": "https://edistrict.up.gov.in/", "csc": "Jan Seva Kendra", "auth": "Tehsildar", "time": "15 Working Days"},
    {"slug": "uttarakhand", "name": "Uttarakhand", "portal": "e-District Uttarakhand", "portal_url": "https://edistrict.uk.gov.in/", "csc": "Devbhoomi Jan Seva Kendra", "auth": "Tehsildar", "time": "15 Days"},
    {"slug": "west-bengal", "name": "West Bengal", "portal": "e-District Bengal", "portal_url": "https://edistrict.wb.gov.in/", "csc": "Tathya Mitra Kendra", "auth": "BDO / SDO", "time": "15 Days"},
    {"slug": "delhi", "name": "Delhi", "portal": "e-District Delhi", "portal_url": "https://edistrict.delhigovt.nic.in/", "csc": "CSC Center", "auth": "SDM", "time": "14 Days"},
    {"slug": "jammu-kashmir", "name": "Jammu & Kashmir", "portal": "Jan Sugam", "portal_url": "https://jansugam.jk.gov.in/", "csc": "CSC Center", "auth": "Tehsildar", "time": "15 Days"},
    {"slug": "ladakh", "name": "Ladakh", "portal": "e-District Ladakh", "portal_url": "https://ladakh.gov.in/", "csc": "CSC Center", "auth": "Tehsildar", "time": "15 Days"},
    {"slug": "chandigarh", "name": "Chandigarh", "portal": "e-District Chandigarh", "portal_url": "https://chdservices.gov.in/", "csc": "Sampark Center", "auth": "Tehsildar", "time": "15 Days"},
    {"slug": "puducherry", "name": "Puducherry", "portal": "e-District Puducherry", "portal_url": "https://edistrict.py.gov.in/", "csc": "CSC Center", "auth": "Deputy Tahsildar", "time": "15 Days"},
    {"slug": "andaman-nicobar", "name": "Andaman & Nicobar", "portal": "e-District A&N", "portal_url": "https://edistrict.andaman.gov.in/", "csc": "CSC Center", "auth": "Tehsildar", "time": "15 Days"},
    {"slug": "lakshadweep", "name": "Lakshadweep", "portal": "e-District Lakshadweep", "portal_url": "https://lakshadweep.gov.in/", "csc": "CSC Center", "auth": "SDO", "time": "15 Days"},
    {"slug": "dadra-nagar-haveli-daman-diu", "name": "Dadra & Nagar Haveli", "portal": "e-District DNH & DD", "portal_url": "https://dnh.gov.in/", "csc": "CSC Center", "auth": "Mamlatdar", "time": "15 Days"}
]

# Variations to avoid duplicate content flags
intros_en = [
    "An Income Certificate is a crucial official document that acts as legal proof of a person's or a family's annual income.",
    "The Income Certificate serves as an essential government-issued document to verify your family's annual financial earnings.",
    "Issued by the State Government, the Income Certificate is a vital credential reflecting the total annual income of an individual or household from all sources."
]
intros_hi = [
    "आय प्रमाण पत्र एक बहुत ही महत्वपूर्ण सरकारी दस्तावेज़ है जो किसी व्यक्ति या परिवार की वार्षिक आय (Annual Income) का कानूनी प्रमाण होता है।",
    "आय प्रमाण पत्र (Income Certificate) राज्य सरकार द्वारा जारी किया जाने वाला एक ज़रूरी दस्तावेज़ है जो यह साबित करता है कि आपके परिवार की सालाना कमाई कितनी है।",
    "यह एक आधिकारिक प्रमाणपत्र है जिसका उपयोग विभिन्न सरकारी योजनाओं, छात्रवृत्ति (Scholarship) और ईडब्ल्यूएस (EWS) आरक्षण का लाभ उठाने के लिए आय सत्यापन के रूप में किया जाता है।"
]

def generate_income_page(state, idx):
    name = state['name']
    slug = state['slug']
    portal = state['portal']
    portal_url = state['portal_url']
    csc = state['csc']
    auth = state['auth']
    time = state['time']
    
    intro_en = intros_en[idx % 3]
    intro_hi = intros_hi[idx % 3]
    
    title_en = f"{name} Income Certificate Apply Online (2026): Status & Validity"
    title_hi = f"{name} आय प्रमाण पत्र 2026: ऑनलाइन आवेदन (Income Certificate)"
    desc_hi = f"{name} में आय प्रमाण पत्र (Income Certificate) कैसे बनाएं? {portal} पोर्टल से ऑनलाइन आवेदन, ज़रूरी दस्तावेज़, फीस और स्टेटस चेक करने की पूरी प्रक्रिया हिंदी में।"
    desc_en = f"Complete guide to apply for an Income Certificate in {name} online via {portal}. Check eligibility, required documents, fees, and track your application status easily."
    
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
    <meta content="https://sarkarisewaindia.com/states/{slug}-income-certificate.html" property="og:url"/>
    <meta content="https://sarkarisewaindia.com/assets/img/og-image.png" property="og:image"/>
    <meta content="summary_large_image" name="twitter:card"/>
    <meta content="{title_en}" name="twitter:title"/>
    <meta content="{desc_en}" name="twitter:description"/>
    <title>{name} Income Certificate Apply Online 2026 (आय प्रमाण पत्र)</title>
    <link href="https://sarkarisewaindia.com/states/{slug}-income-certificate.html" rel="canonical"/>
    <link href="../assets/css/style.css" rel="stylesheet"/>
    <link href="../assets/css/module2.css" rel="stylesheet"/>
    <link href="../assets/css/module15.css" rel="stylesheet"/>
    <link href="../assets/css/share-widget.css" rel="stylesheet"/>
    <script id="service-schema" type="application/ld+json">{{
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "{name} Income Certificate",
      "description": "{desc_en}",
      "url": "https://sarkarisewaindia.com/states/{slug}-income-certificate.html",
      "provider": {{ "@type": "GovernmentOrganization", "name": "{portal}" }},
      "serviceType": "Certificate"
    }}</script>
</head>
<body data-slug="state-income-cert-{slug}">
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
                <li aria-current="page"><span data-lang-show="en">Income Certificate</span><span data-lang-show="hi">आय प्रमाण पत्र</span></li>
            </ol>
        </nav>

        <header class="service-hero">
            <div class="service-hero__icon">📄</div>
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
                    <p><span data-lang-show="en">{intro_en}</span><span data-lang-show="hi">{intro_hi}</span> <span data-lang-show="en">In {name}, this certificate is primarily issued by the <strong>{auth}</strong> through the official <strong>{portal}</strong> portal. It is mandatory for students to claim scholarships, citizens to apply for EWS quota, or beneficiaries to receive state welfare pensions.</span><span data-lang-show="hi">{name} में, यह प्रमाण पत्र मुख्य रूप से <strong>{auth}</strong> द्वारा आधिकारिक <strong>{portal}</strong> पोर्टल के माध्यम से जारी किया जाता है। छात्रों को छात्रवृत्ति का दावा करने, नागरिकों को EWS कोटे के लिए आवेदन करने या राज्य कल्याण पेंशन प्राप्त करने के लिए यह अनिवार्य है।</span></p>
                </section>

                <section class="card mb-4" id="overview">
                    <h2><span data-lang-show="en">Quick Overview</span><span data-lang-show="hi">संक्षिप्त विवरण</span></h2>
                    <div class="quick-facts">
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Application Portal</span><span data-lang-show="hi">आवेदन पोर्टल</span></span>
                            <span class="fact-value">{portal}</span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Issuing Authority</span><span data-lang-show="hi">जारीकर्ता अधिकारी</span></span>
                            <span class="fact-value">{auth}</span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Application Fee</span><span data-lang-show="hi">आवेदन शुल्क</span></span>
                            <span class="fact-value"><span data-lang-show="en">₹15 - ₹30 (Online)</span><span data-lang-show="hi">₹15 - ₹30 (ऑनलाइन)</span></span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Processing Time</span><span data-lang-show="hi">समय सीमा</span></span>
                            <span class="fact-value"><span data-lang-show="en">{time}</span><span data-lang-show="hi">{time}</span></span>
                        </div>
                    </div>
                </section>

                <section class="mb-4" id="documents">
                    <h2><span data-lang-show="en">Required Documents</span><span data-lang-show="hi">ज़रूरी दस्तावेज़ (Documents Required)</span></h2>
                    <div class="prose">
                        <p><span data-lang-show="en">To apply for an Income Certificate in {name}, you must scan and upload the following documents (usually under 200KB in JPG/PDF format):</span><span data-lang-show="hi">{name} में आय प्रमाण पत्र के लिए आवेदन करते समय, आपको निम्नलिखित दस्तावेज़ स्कैन करके अपलोड करने होंगे (आमतौर पर JPG/PDF प्रारूप में 200KB से कम):</span></p>
                        <ul class="checklist">
                            <li><span data-lang-show="en"><strong>Identity Proof:</strong> Aadhaar Card, Voter ID, or PAN Card.</span><span data-lang-show="hi"><strong>पहचान प्रमाण:</strong> आधार कार्ड, वोटर आईडी, या पैन कार्ड।</span></li>
                            <li><span data-lang-show="en"><strong>Income Proof:</strong> Salary Slip, IT Return (ITR), Form 16, or a Self-Declaration / Affidavit (स्व-प्रमाणित घोषणा पत्र) clearly stating annual income.</span><span data-lang-show="hi"><strong>आय का प्रमाण:</strong> सैलरी स्लिप, आईटी रिटर्न (ITR), फॉर्म 16, या वार्षिक आय बताने वाला स्व-प्रमाणित घोषणा पत्र (Self-Declaration/Affidavit)।</span></li>
                            <li><span data-lang-show="en"><strong>Address Proof:</strong> Ration Card, Electricity Bill, or Aadhaar.</span><span data-lang-show="hi"><strong>पते का प्रमाण:</strong> राशन कार्ड, बिजली बिल या आधार कार्ड।</span></li>
                            <li><span data-lang-show="en"><strong>Photograph:</strong> A recent passport-size color photograph of the applicant.</span><span data-lang-show="hi"><strong>फोटो:</strong> आवेदक की हाल ही की पासपोर्ट साइज़ रंगीन फोटो।</span></li>
                        </ul>
                    </div>
                </section>

                <section class="mb-4" id="apply-online">
                    <h2><span data-lang-show="en">How to Apply Online via {portal}</span><span data-lang-show="hi">{portal} से ऑनलाइन आवेदन कैसे करें?</span></h2>
                    <div class="prose">
                        <ol>
                            <li>
                                <span data-lang-show="en"><strong>Visit the Portal:</strong> Open the official {portal} website (<a href="{portal_url}" target="_blank" rel="nofollow noopener">{portal_url}</a>).</span>
                                <span data-lang-show="hi"><strong>पोर्टल पर जाएं:</strong> आधिकारिक {portal} वेबसाइट (<a href="{portal_url}" target="_blank" rel="nofollow noopener">{portal_url}</a>) खोलें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Register / Login:</strong> Click on "Citizen Registration". Register using your mobile number and OTP. If you already have an account, log in.</span>
                                <span data-lang-show="hi"><strong>रजिस्टर / लॉगिन करें:</strong> "Citizen Registration" पर क्लिक करें। अपने मोबाइल नंबर और OTP से रजिस्टर करें। अगर अकाउंट है, तो लॉगिन करें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Select Service:</strong> Under the "Revenue" or "Certificates" department, select <strong>"Income Certificate" (आय प्रमाण पत्र)</strong>.</span>
                                <span data-lang-show="hi"><strong>सेवा चुनें:</strong> सेवाओं (Services) की सूची में Revenue (राजस्व) विभाग के तहत <strong>"Income Certificate" (आय प्रमाण पत्र)</strong> चुनें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Fill Details:</strong> Carefully fill out the application form. Enter your name, father's name, address, and your total annual family income in Rupees.</span>
                                <span data-lang-show="hi"><strong>फॉर्म भरें:</strong> अपना नाम, पिता/पति का नाम, पता और परिवार की कुल वार्षिक आय (रुपये में) ध्यान से भरें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Upload Documents:</strong> Upload your photo, self-declaration form, and ID proofs.</span>
                                <span data-lang-show="hi"><strong>दस्तावेज़ अपलोड करें:</strong> अपनी फोटो, स्व-प्रमाणित घोषणा पत्र (Self-Declaration) और आईडी प्रूफ अपलोड करें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Pay Fee &amp; Submit:</strong> Pay the nominal online processing fee via UPI/Netbanking. After submission, a <strong>Reference / Application Number</strong> will be generated. Save it.</span>
                                <span data-lang-show="hi"><strong>फीस भरें और सबमिट करें:</strong> UPI/Netbanking से ऑनलाइन फीस (लगभग ₹15-₹30) का भुगतान करें। फॉर्म सबमिट होने पर <strong>आवेदन संख्या (Reference Number)</strong> मिलेगी, इसे सुरक्षित रखें।</span>
                            </li>
                        </ol>
                        <div class="alert alert-info">
                            <strong><span data-lang-show="en">Offline Application (Via {csc})</span><span data-lang-show="hi">ऑफ़लाइन आवेदन ({csc} के माध्यम से)</span></strong>
                            <p><span data-lang-show="en">If you face issues applying online, simply take a physical copy of your Aadhaar, Passport photo, and a self-declaration affidavit to your nearest <strong>{csc}</strong>. The operator will apply on your behalf for a minor service fee.</span><span data-lang-show="hi">यदि आप खुद ऑनलाइन फॉर्म नहीं भर पा रहे हैं, तो अपने आधार कार्ड, फोटो और आय के घोषणा पत्र के साथ नज़दीकी <strong>{csc}</strong> पर जाएं। ऑपरेटर मामूली सेवा शुल्क लेकर आपका आवेदन कर देगा।</span></p>
                        </div>
                    </div>
                </section>
                
                <section class="mb-4" id="faqs">
                    <h2><span data-lang-show="en">Frequently Asked Questions (FAQs)</span><span data-lang-show="hi">अक्सर पूछे जाने वाले सवाल (FAQs)</span></h2>
                    <div class="accordion">
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">What is the validity of the Income Certificate in {name}?</span><span data-lang-show="hi">{name} में आय प्रमाण पत्र की वैधता (Validity) कितनी होती है?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">In {name}, an Income Certificate is typically valid for <strong>1 financial year</strong> (or up to 3 years depending on the latest government notification). You should ideally renew it every financial year for schemes like EWS.</span>
                                <span data-lang-show="hi">{name} में, आय प्रमाण पत्र आमतौर पर <strong>1 वित्तीय वर्ष</strong> (या नवीनतम सरकारी अधिसूचना के आधार पर 3 वर्ष तक) के लिए मान्य होता है। EWS या छात्रवृत्ति के लिए इसे हर वित्तीय वर्ष में नया बनवाना बेहतर होता है।</span>
                            </div>
                        </details>
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">How can I check my Income Certificate status online?</span><span data-lang-show="hi">मैं अपने आय प्रमाण पत्र का स्टेटस कैसे चेक कर सकता हूँ?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">You can visit the {portal} portal and click on "Track Application Status". Enter your Application Reference Number to see if it is pending, approved, or rejected by the {auth}.</span>
                                <span data-lang-show="hi">आप {portal} पोर्टल पर जाकर "Track Application Status" (आवेदन की स्थिति) पर क्लिक कर सकते हैं। अपना आवेदन क्रमांक (Reference Number) डालकर आप देख सकते हैं कि फॉर्म स्वीकृत हुआ है या नहीं।</span>
                            </div>
                        </details>
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">Can I download the Income Certificate online after approval?</span><span data-lang-show="hi">क्या फॉर्म पास होने के बाद मैं आय प्रमाण पत्र ऑनलाइन डाउनलोड कर सकता हूँ?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">Yes! Once approved by the {auth}, you can log back into {portal} and download the digitally signed e-Certificate in PDF format. You don't need a physical stamp or signature.</span>
                                <span data-lang-show="hi">हाँ! {auth} द्वारा स्वीकृत होने के बाद, आप {portal} पर वापस लॉगिन करके डिजिटल रूप से हस्ताक्षरित ई-सर्टिफिकेट PDF में डाउनलोड कर सकते हैं। इसमें किसी भौतिक मोहर या हस्ताक्षर की आवश्यकता नहीं होती है।</span>
                            </div>
                        </details>
                    </div>
                </section>
            </div>

            <aside class="service-sidebar">
                <div class="widget">
                    <h3 class="widget-title"><span data-lang-show="en">Important Links</span><span data-lang-show="hi">महत्वपूर्ण लिंक्स</span></h3>
                    <ul class="widget-links">
                        <li><a href="{portal_url}" target="_blank" rel="nofollow noopener">🌐 {portal} Portal</a></li>
                        <li><a href="../tools/status-troubleshooter.html">🔍 <span data-lang-show="en">Track Application</span><span data-lang-show="hi">आवेदन ट्रैक करें</span></a></li>
                        <li><a href="../tools/document-checklist.html">📄 <span data-lang-show="en">Required Documents</span><span data-lang-show="hi">ज़रूरी दस्तावेज़</span></a></li>
                        <li><a href="../tools/csc-locator.html">📍 <span data-lang-show="en">Find {csc}</span><span data-lang-show="hi">नज़दीकी {csc} खोजें</span></a></li>
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

def generate_domicile_page(state, idx):
    name = state['name']
    slug = state['slug']
    portal = state['portal']
    portal_url = state['portal_url']
    csc = state['csc']
    auth = state['auth']
    time = state['time']
    
    title_en = f"{name} Domicile / Residence Certificate (2026): Apply Online & Status"
    title_hi = f"{name} मूल निवास प्रमाण पत्र 2026: ऑनलाइन आवेदन (Domicile Certificate)"
    desc_hi = f"{name} में मूल निवास / स्थानीय निवासी प्रमाण पत्र (Domicile / Residence Certificate) कैसे बनाएं? {portal} से ऑनलाइन आवेदन, दस्तावेज़ और स्टेटस चेक की जानकारी।"
    desc_en = f"Apply for a Domicile or Resident Certificate in {name} online via {portal}. Find out the required documents, eligibility criteria, and track your status."
    
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
    <meta content="https://sarkarisewaindia.com/states/{slug}-domicile-certificate.html" property="og:url"/>
    <meta content="https://sarkarisewaindia.com/assets/img/og-image.png" property="og:image"/>
    <meta content="summary_large_image" name="twitter:card"/>
    <meta content="{title_en}" name="twitter:title"/>
    <meta content="{desc_en}" name="twitter:description"/>
    <title>{name} Domicile &amp; Residence Certificate Apply Online 2026</title>
    <link href="https://sarkarisewaindia.com/states/{slug}-domicile-certificate.html" rel="canonical"/>
    <link href="../assets/css/style.css" rel="stylesheet"/>
    <link href="../assets/css/module2.css" rel="stylesheet"/>
    <link href="../assets/css/module15.css" rel="stylesheet"/>
    <link href="../assets/css/share-widget.css" rel="stylesheet"/>
    <script id="service-schema" type="application/ld+json">{{
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "{name} Domicile / Residence Certificate",
      "description": "{desc_en}",
      "url": "https://sarkarisewaindia.com/states/{slug}-domicile-certificate.html",
      "provider": {{ "@type": "GovernmentOrganization", "name": "{portal}" }},
      "serviceType": "Certificate"
    }}</script>
</head>
<body data-slug="state-domicile-cert-{slug}">
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
                <li aria-current="page"><span data-lang-show="en">Domicile Certificate</span><span data-lang-show="hi">मूल निवास प्रमाण पत्र</span></li>
            </ol>
        </nav>

        <header class="service-hero">
            <div class="service-hero__icon">🏠</div>
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
                    <p><span data-lang-show="en">A Domicile Certificate or Residence Certificate (मूल निवास / स्थानीय निवासी प्रमाण पत्र) is an essential legal document issued by the {name} government. It proves that a person is a permanent resident of {name}. This certificate is highly crucial for getting admissions into state-quota educational institutions, applying for local government jobs, and claiming state-sponsored scholarships.</span><span data-lang-show="hi">मूल निवास या स्थानीय निवासी प्रमाण पत्र (Domicile/Residence Certificate) {name} सरकार द्वारा जारी किया जाने वाला एक कानूनी दस्तावेज़ है। यह साबित करता है कि कोई व्यक्ति {name} का स्थायी निवासी है। राज्य-कोटे के तहत स्कूलों/कॉलेजों में प्रवेश पाने, सरकारी नौकरियों के लिए आवेदन करने और छात्रवृत्ति (Scholarship) का दावा करने के लिए यह प्रमाण पत्र अनिवार्य है।</span></p>
                </section>

                <section class="card mb-4" id="overview">
                    <h2><span data-lang-show="en">Quick Overview</span><span data-lang-show="hi">संक्षिप्त विवरण</span></h2>
                    <div class="quick-facts">
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Application Portal</span><span data-lang-show="hi">आवेदन पोर्टल</span></span>
                            <span class="fact-value">{portal}</span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Issuing Authority</span><span data-lang-show="hi">जारीकर्ता अधिकारी</span></span>
                            <span class="fact-value">{auth}</span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Application Fee</span><span data-lang-show="hi">आवेदन शुल्क</span></span>
                            <span class="fact-value"><span data-lang-show="en">₹15 - ₹30 (Online)</span><span data-lang-show="hi">₹15 - ₹30 (ऑनलाइन)</span></span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Processing Time</span><span data-lang-show="hi">समय सीमा</span></span>
                            <span class="fact-value"><span data-lang-show="en">{time}</span><span data-lang-show="hi">{time}</span></span>
                        </div>
                    </div>
                </section>

                <section class="mb-4" id="documents">
                    <h2><span data-lang-show="en">Required Documents</span><span data-lang-show="hi">ज़रूरी दस्तावेज़ (Documents Required)</span></h2>
                    <div class="prose">
                        <p><span data-lang-show="en">To apply for a Domicile Certificate in {name}, ensure you have scanned copies of the following:</span><span data-lang-show="hi">{name} में निवास प्रमाण पत्र के लिए आवेदन करते समय निम्नलिखित दस्तावेज़ तैयार रखें:</span></p>
                        <ul class="checklist">
                            <li><span data-lang-show="en"><strong>Residence Proof (Old):</strong> Ration Card, Electricity Bill, Water Bill, or House Tax Receipt in the name of the applicant or parents.</span><span data-lang-show="hi"><strong>निवास का प्रमाण:</strong> राशन कार्ड, बिजली बिल, पानी का बिल या हाउस टैक्स रसीद (आवेदक या माता-पिता के नाम पर)।</span></li>
                            <li><span data-lang-show="en"><strong>Identity Proof:</strong> Aadhaar Card, Voter ID, PAN Card, or Passport.</span><span data-lang-show="hi"><strong>पहचान प्रमाण:</strong> आधार कार्ड, वोटर आईडी, पैन कार्ड, या पासपोर्ट।</span></li>
                            <li><span data-lang-show="en"><strong>Educational Proof:</strong> 10th or 12th marksheet/certificate from a recognized board in {name} (if applicable).</span><span data-lang-show="hi"><strong>शैक्षिक प्रमाण:</strong> {name} के किसी स्कूल/बोर्ड से 10वीं या 12वीं की मार्कशीट।</span></li>
                            <li><span data-lang-show="en"><strong>Self Declaration Form:</strong> A signed affidavit or self-declaration stating your period of continuous stay in the state.</span><span data-lang-show="hi"><strong>स्व-प्रमाणित घोषणा पत्र:</strong> एक हलफनामा (Affidavit) जिसमें यह लिखा हो कि आप राज्य में कितने वर्षों से रह रहे हैं।</span></li>
                            <li><span data-lang-show="en"><strong>Photograph:</strong> Passport size color photo.</span><span data-lang-show="hi"><strong>फोटो:</strong> पासपोर्ट साइज़ रंगीन फोटो।</span></li>
                        </ul>
                    </div>
                </section>

                <section class="mb-4" id="apply-online">
                    <h2><span data-lang-show="en">How to Apply Online via {portal}</span><span data-lang-show="hi">{portal} से ऑनलाइन आवेदन कैसे करें?</span></h2>
                    <div class="prose">
                        <ol>
                            <li>
                                <span data-lang-show="en"><strong>Visit the Portal:</strong> Go to the official {portal} portal (<a href="{portal_url}" target="_blank" rel="nofollow noopener">{portal_url}</a>).</span>
                                <span data-lang-show="hi"><strong>पोर्टल पर जाएं:</strong> आधिकारिक {portal} वेबसाइट (<a href="{portal_url}" target="_blank" rel="nofollow noopener">{portal_url}</a>) खोलें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Create Account:</strong> Sign up using your mobile number and email. Log in if you are an existing user.</span>
                                <span data-lang-show="hi"><strong>अकाउंट बनाएं:</strong> अपने मोबाइल नंबर से रजिस्टर करें और पोर्टल में लॉगिन करें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Select Service:</strong> Find the "Revenue" department and click on <strong>"Domicile Certificate"</strong> or <strong>"Residence Certificate"</strong> (निवास प्रमाण पत्र).</span>
                                <span data-lang-show="hi"><strong>सेवा चुनें:</strong> राजस्व (Revenue) विभाग के अनुभाग में जाकर <strong>"Domicile / Residence Certificate" (मूल निवास प्रमाण पत्र)</strong> चुनें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Fill Application Form:</strong> Enter your full name, father's/husband's name, complete address, duration of stay at the current address, and purpose of obtaining the certificate.</span>
                                <span data-lang-show="hi"><strong>फॉर्म भरें:</strong> अपना नाम, पिता/पति का नाम, पूरा पता, और आप इस पते पर कितने वर्षों से रह रहे हैं, यह जानकारी ध्यान से भरें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Upload Documents:</strong> Upload your photograph and the scanned copies of required documents in the prescribed size (usually &lt;200KB).</span>
                                <span data-lang-show="hi"><strong>दस्तावेज़ अपलोड करें:</strong> अपनी फोटो, स्व-प्रमाणित घोषणा पत्र (Self-Declaration) और पते के प्रमाण अपलोड करें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Submit &amp; Track:</strong> Pay the online processing fee. Note down the <strong>Application Reference Number</strong> to track the status.</span>
                                <span data-lang-show="hi"><strong>सबमिट करें:</strong> ऑनलाइन फीस (लगभग ₹15-₹30) का भुगतान करें। फॉर्म सबमिट होने पर <strong>Application Number</strong> मिलेगा, इसे स्टेटस ट्रैक करने के लिए संभाल कर रखें।</span>
                            </li>
                        </ol>
                        <div class="alert alert-info">
                            <strong><span data-lang-show="en">Offline Application (Via {csc})</span><span data-lang-show="hi">ऑफ़लाइन आवेदन ({csc} के माध्यम से)</span></strong>
                            <p><span data-lang-show="en">If you prefer offline processing, you can visit the nearest <strong>{csc}</strong>. Take original copies of your Aadhaar, Ration Card, and photos. The operator will fill the digital form for you and provide an acknowledgment receipt.</span><span data-lang-show="hi">यदि आप ऑनलाइन फॉर्म नहीं भर पा रहे हैं, तो अपने आधार कार्ड, राशन कार्ड, फोटो और स्व-घोषणा पत्र के साथ नज़दीकी <strong>{csc}</strong> पर जाएं। ऑपरेटर आपका आवेदन कर देगा।</span></p>
                        </div>
                    </div>
                </section>
                
                <section class="mb-4" id="faqs">
                    <h2><span data-lang-show="en">Frequently Asked Questions (FAQs)</span><span data-lang-show="hi">अक्सर पूछे जाने वाले सवाल (FAQs)</span></h2>
                    <div class="accordion">
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">What is the validity of a Domicile Certificate in {name}?</span><span data-lang-show="hi">{name} में मूल निवास प्रमाण पत्र की वैधता (Validity) कितनी होती है?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">A Domicile Certificate generally has <strong>lifetime validity</strong> as long as the person does not permanently migrate to another state. However, some specific government jobs might require a recently issued certificate (within the last 3-6 months).</span>
                                <span data-lang-show="hi">मूल निवास प्रमाण पत्र आमतौर पर <strong>आजीवन (Lifetime) मान्य</strong> होता है, जब तक कि व्यक्ति स्थायी रूप से किसी अन्य राज्य में नहीं चला जाता। हालाँकि, कुछ विशेष सरकारी भर्तियों में 6 महीने के भीतर जारी किया गया नया प्रमाण पत्र माँगा जा सकता है।</span>
                            </div>
                        </details>
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">How long do I need to live in {name} to get a Domicile Certificate?</span><span data-lang-show="hi">{name} का मूल निवास प्रमाण पत्र बनवाने के लिए राज्य में कितने साल रहना ज़रूरी है?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">Typically, a person must have continuously resided in {name} for at least <strong>10 to 15 years</strong> (varies slightly by state rule) to be eligible, unless they were born in the state.</span>
                                <span data-lang-show="hi">आमतौर पर, आवेदक का जन्म राज्य में हुआ हो या वह कम से कम <strong>10 से 15 वर्षों</strong> से {name} में लगातार निवास कर रहा हो (विशिष्ट नियम राज्य पर निर्भर करता है)।</span>
                            </div>
                        </details>
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">Can I download the approved certificate online?</span><span data-lang-show="hi">क्या मैं अपना निवास प्रमाण पत्र ऑनलाइन डाउनलोड कर सकता हूँ?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">Yes, once the application is verified and approved by the {auth}, a digitally signed PDF certificate will be generated on the {portal} portal which you can download and print.</span>
                                <span data-lang-show="hi">हाँ, {auth} द्वारा सत्यापन और अनुमोदन के बाद, {portal} पोर्टल पर एक डिजिटल रूप से हस्ताक्षरित PDF प्रमाणपत्र जनरेट होता है जिसे आप डाउनलोड करके प्रिंट कर सकते हैं।</span>
                            </div>
                        </details>
                    </div>
                </section>
            </div>

            <aside class="service-sidebar">
                <div class="widget">
                    <h3 class="widget-title"><span data-lang-show="en">Important Links</span><span data-lang-show="hi">महत्वपूर्ण लिंक्स</span></h3>
                    <ul class="widget-links">
                        <li><a href="{portal_url}" target="_blank" rel="nofollow noopener">🌐 {portal} Portal</a></li>
                        <li><a href="../tools/status-troubleshooter.html">🔍 <span data-lang-show="en">Track Application Status</span><span data-lang-show="hi">आवेदन स्टेटस चेक करें</span></a></li>
                        <li><a href="../tools/document-checklist.html">📄 <span data-lang-show="en">Required Documents Checklist</span><span data-lang-show="hi">ज़रूरी दस्तावेज़ सूची</span></a></li>
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
        
    count_income = 0
    count_domicile = 0
    
    for idx, state in enumerate(states):
        # Income
        inc_filepath = os.path.join(out_dir, f"{state['slug']}-income-certificate.html")
        inc_content = generate_income_page(state, idx)
        with open(inc_filepath, "w", encoding="utf-8") as f:
            f.write(inc_content)
        count_income += 1
        
        # Domicile
        dom_filepath = os.path.join(out_dir, f"{state['slug']}-domicile-certificate.html")
        dom_content = generate_domicile_page(state, idx)
        with open(dom_filepath, "w", encoding="utf-8") as f:
            f.write(dom_content)
        count_domicile += 1
        
    print(f"Generated {count_income} Income pages and {count_domicile} Domicile pages.")

if __name__ == "__main__":
    main()
