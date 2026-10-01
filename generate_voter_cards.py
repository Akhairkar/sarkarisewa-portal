import os
import json

states = [
    {"slug": "andhra-pradesh", "name": "Andhra Pradesh", "ceo": "CEO Andhra Pradesh", "ceo_url": "https://ceoandhra.nic.in/"},
    {"slug": "arunachal-pradesh", "name": "Arunachal Pradesh", "ceo": "CEO Arunachal Pradesh", "ceo_url": "https://ceoarunachal.nic.in/"},
    {"slug": "assam", "name": "Assam", "ceo": "CEO Assam", "ceo_url": "https://ceoassam.nic.in/"},
    {"slug": "bihar", "name": "Bihar", "ceo": "CEO Bihar", "ceo_url": "https://ceobihar.nic.in/"},
    {"slug": "chhattisgarh", "name": "Chhattisgarh", "ceo": "CEO Chhattisgarh", "ceo_url": "https://ceochhattisgarh.nic.in/"},
    {"slug": "goa", "name": "Goa", "ceo": "CEO Goa", "ceo_url": "https://ceogoa.nic.in/"},
    {"slug": "gujarat", "name": "Gujarat", "ceo": "CEO Gujarat", "ceo_url": "https://ceo.gujarat.gov.in/"},
    {"slug": "haryana", "name": "Haryana", "ceo": "CEO Haryana", "ceo_url": "https://ceoharyana.gov.in/"},
    {"slug": "himachal-pradesh", "name": "Himachal Pradesh", "ceo": "CEO Himachal Pradesh", "ceo_url": "https://ceohimachal.nic.in/"},
    {"slug": "jharkhand", "name": "Jharkhand", "ceo": "CEO Jharkhand", "ceo_url": "https://ceo.jharkhand.gov.in/"},
    {"slug": "karnataka", "name": "Karnataka", "ceo": "CEO Karnataka", "ceo_url": "https://ceo.karnataka.gov.in/"},
    {"slug": "kerala", "name": "Kerala", "ceo": "CEO Kerala", "ceo_url": "https://ceo.kerala.gov.in/"},
    {"slug": "madhya-pradesh", "name": "Madhya Pradesh", "ceo": "CEO Madhya Pradesh", "ceo_url": "https://ceomadhyapradesh.nic.in/"},
    {"slug": "maharashtra", "name": "Maharashtra", "ceo": "CEO Maharashtra", "ceo_url": "https://ceo.maharashtra.gov.in/"},
    {"slug": "manipur", "name": "Manipur", "ceo": "CEO Manipur", "ceo_url": "https://ceomanipur.nic.in/"},
    {"slug": "meghalaya", "name": "Meghalaya", "ceo": "CEO Meghalaya", "ceo_url": "https://ceomeghalaya.nic.in/"},
    {"slug": "mizoram", "name": "Mizoram", "ceo": "CEO Mizoram", "ceo_url": "https://ceo.mizoram.gov.in/"},
    {"slug": "nagaland", "name": "Nagaland", "ceo": "CEO Nagaland", "ceo_url": "https://ceonagaland.nic.in/"},
    {"slug": "odisha", "name": "Odisha", "ceo": "CEO Odisha", "ceo_url": "https://ceoorissa.nic.in/"},
    {"slug": "punjab", "name": "Punjab", "ceo": "CEO Punjab", "ceo_url": "https://ceopunjab.gov.in/"},
    {"slug": "rajasthan", "name": "Rajasthan", "ceo": "CEO Rajasthan", "ceo_url": "https://ceorajasthan.nic.in/"},
    {"slug": "sikkim", "name": "Sikkim", "ceo": "CEO Sikkim", "ceo_url": "https://ceosikkim.nic.in/"},
    {"slug": "tamil-nadu", "name": "Tamil Nadu", "ceo": "CEO Tamil Nadu", "ceo_url": "https://www.elections.tn.gov.in/"},
    {"slug": "telangana", "name": "Telangana", "ceo": "CEO Telangana", "ceo_url": "https://ceotelangana.nic.in/"},
    {"slug": "tripura", "name": "Tripura", "ceo": "CEO Tripura", "ceo_url": "https://ceotripura.nic.in/"},
    {"slug": "uttar-pradesh", "name": "Uttar Pradesh", "ceo": "CEO Uttar Pradesh", "ceo_url": "https://ceouttarpradesh.nic.in/"},
    {"slug": "uttarakhand", "name": "Uttarakhand", "ceo": "CEO Uttarakhand", "ceo_url": "https://ceo.uk.gov.in/"},
    {"slug": "west-bengal", "name": "West Bengal", "ceo": "CEO West Bengal", "ceo_url": "https://ceowestbengal.nic.in/"},
    {"slug": "delhi", "name": "Delhi", "ceo": "CEO Delhi", "ceo_url": "https://ceodelhi.gov.in/"},
    {"slug": "jammu-kashmir", "name": "Jammu & Kashmir", "ceo": "CEO J&K", "ceo_url": "https://ceojk.nic.in/"},
    {"slug": "ladakh", "name": "Ladakh", "ceo": "CEO Ladakh", "ceo_url": "https://ceoladakh.nic.in/"},
    {"slug": "chandigarh", "name": "Chandigarh", "ceo": "CEO Chandigarh", "ceo_url": "https://ceochandigarh.gov.in/"},
    {"slug": "puducherry", "name": "Puducherry", "ceo": "CEO Puducherry", "ceo_url": "https://ceopuducherry.py.gov.in/"},
    {"slug": "andaman-nicobar", "name": "Andaman & Nicobar", "ceo": "CEO A&N Islands", "ceo_url": "https://ceoandaman.nic.in/"},
    {"slug": "lakshadweep", "name": "Lakshadweep", "ceo": "CEO Lakshadweep", "ceo_url": "https://ceolakshadweep.gov.in/"},
    {"slug": "dadra-nagar-haveli-daman-diu", "name": "Dadra & Nagar Haveli", "ceo": "CEO DNH & DD", "ceo_url": "https://ceodaman.nic.in/"}
]

intros_en = [
    "A Voter ID Card, also known as the Electors Photo Identity Card (EPIC), is a primary identity document issued by the Election Commission of India.",
    "The Voter ID is a crucial democratic document that not only serves as proof of citizenship and age but also empowers you to cast your vote.",
    "Issued by the ECI, the Electoral Photo ID Card ensures your participation in the democratic process and serves as an officially recognized ID proof nationwide."
]

intros_hi = [
    "वोटर आईडी कार्ड (मतदाता पहचान पत्र) भारत निर्वाचन आयोग द्वारा जारी एक बहुत ही महत्वपूर्ण पहचान दस्तावेज़ है जो आपको वोट देने का अधिकार देता है।",
    "यह एक ऐसा सरकारी दस्तावेज़ है जो न केवल आपकी नागरिकता और आयु का प्रमाण है, बल्कि लोकतंत्र में आपकी भागीदारी को भी सुनिश्चित करता है।",
    "ईपीआईसी (EPIC) या वोटर कार्ड, चुनाव आयोग द्वारा जारी किया जाता है और इसका उपयोग पूरे देश में एक वैध पहचान प्रमाण के रूप में किया जाता है।"
]

def build_html(s, idx):
    name = s["name"]
    slug = s["slug"]
    ceo = s["ceo"]
    ceo_url = s["ceo_url"]
    
    intro_en = intros_en[idx % 3]
    intro_hi = intros_hi[idx % 3]
    
    title_en = f"{name} Voter ID Card & Voter List (2026): Apply Online & Status"
    title_hi = f"{name} वोटर आईडी कार्ड (Voter ID) 2026: ऑनलाइन आवेदन और वोटर लिस्ट"
    
    desc_hi = f"{name} में नया वोटर आईडी कार्ड कैसे बनाएं? ऑनलाइन आवेदन (Form 6), आधार लिंक, वोटर लिस्ट (Electoral Roll) डाउनलोड और स्टेटस चेक करने की पूरी जानकारी।"
    desc_en = f"Apply for a new Voter ID Card in {name}. Track application status, download PDF voter list from {ceo}, and find polling booths easily."
    
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
    <meta content="https://sarkarisewaindia.com/states/{slug}-voter-id-card.html" property="og:url"/>
    <meta content="https://sarkarisewaindia.com/assets/img/og-image.png" property="og:image"/>
    <meta content="summary_large_image" name="twitter:card"/>
    <meta content="{title_en}" name="twitter:title"/>
    <meta content="{desc_en}" name="twitter:description"/>
    <title>{name} Voter ID Card &amp; List (2026): Apply Online &amp; Status</title>
    <link href="https://sarkarisewaindia.com/states/{slug}-voter-id-card.html" rel="canonical"/>
    <link href="../assets/css/style.css" rel="stylesheet"/>
    <link href="../assets/css/module2.css" rel="stylesheet"/>
    <link href="../assets/css/module15.css" rel="stylesheet"/>
    <link href="../assets/css/share-widget.css" rel="stylesheet"/>
    <script id="service-schema" type="application/ld+json">{{
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "{name} Voter ID & Electoral Roll",
      "description": "{desc_en}",
      "url": "https://sarkarisewaindia.com/states/{slug}-voter-id-card.html",
      "provider": {{ "@type": "GovernmentOrganization", "name": "Election Commission of India / {ceo}" }},
      "serviceType": "Identity Document"
    }}</script>
</head>
<body data-slug="state-voter-id-{slug}">
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
                <li aria-current="page"><span data-lang-show="en">Voter ID Card</span><span data-lang-show="hi">वोटर आईडी कार्ड</span></li>
            </ol>
        </nav>

        <header class="service-hero">
            <div class="service-hero__icon">🗳️</div>
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
                    <p><span data-lang-show="en">{intro_en}</span><span data-lang-show="hi">{intro_hi}</span></p>
                </section>

                <section class="card mb-4" id="overview">
                    <h2><span data-lang-show="en">Quick Overview</span><span data-lang-show="hi">संक्षिप्त विवरण</span></h2>
                    <div class="quick-facts">
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Central Portal</span><span data-lang-show="hi">केंद्रीय पोर्टल</span></span>
                            <span class="fact-value">Voters Service Portal (ECI)</span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">State Portal</span><span data-lang-show="hi">राज्य पोर्टल</span></span>
                            <span class="fact-value">{ceo}</span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Application Fee</span><span data-lang-show="hi">आवेदन शुल्क</span></span>
                            <span class="fact-value"><span data-lang-show="en">₹0 (Free)</span><span data-lang-show="hi">निःशुल्क (₹0)</span></span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Important Forms</span><span data-lang-show="hi">ज़रूरी फॉर्म</span></span>
                            <span class="fact-value"><span data-lang-show="en">Form 6 (New), Form 8 (Correction)</span><span data-lang-show="hi">फॉर्म 6 (नया), फॉर्म 8 (सुधार)</span></span>
                        </div>
                    </div>
                </section>

                <section class="mb-4" id="forms">
                    <h2><span data-lang-show="en">Important Voter Forms</span><span data-lang-show="hi">वोटर आईडी के महत्वपूर्ण फॉर्म</span></h2>
                    <div class="prose">
                        <table style="width:100%; border-collapse: collapse; margin-top: 15px;">
                            <tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);">
                                <th style="padding: 10px; text-align: left;">Form Number</th>
                                <th style="padding: 10px; text-align: left;">Purpose (उद्देश्य)</th>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--color-border);">
                                <td style="padding: 10px;"><strong>Form 6</strong></td>
                                <td style="padding: 10px;"><span data-lang-show="en">Apply for a New Voter ID Card (For 18+ citizens)</span><span data-lang-show="hi">नया वोटर आईडी कार्ड बनवाने के लिए।</span></td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--color-border);">
                                <td style="padding: 10px;"><strong>Form 6B</strong></td>
                                <td style="padding: 10px;"><span data-lang-show="en">Link Aadhaar with Voter ID</span><span data-lang-show="hi">वोटर आईडी को आधार कार्ड से लिंक करने के लिए।</span></td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--color-border);">
                                <td style="padding: 10px;"><strong>Form 7</strong></td>
                                <td style="padding: 10px;"><span data-lang-show="en">Deletion of Name from Voter List (Death/Shifted)</span><span data-lang-show="hi">वोटर लिस्ट से नाम हटवाने के लिए।</span></td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--color-border);">
                                <td style="padding: 10px;"><strong>Form 8</strong></td>
                                <td style="padding: 10px;"><span data-lang-show="en">Correction of Entries, Shifting Residence, Replacement EPIC</span><span data-lang-show="hi">नाम, पता सुधारने या नया पीवीसी कार्ड (PVC) मंगवाने के लिए।</span></td>
                            </tr>
                        </table>
                    </div>
                </section>

                <section class="mb-4" id="eligibility">
                    <h2><span data-lang-show="en">Eligibility &amp; Documents</span><span data-lang-show="hi">पात्रता और दस्तावेज़ (Eligibility &amp; Documents)</span></h2>
                    <div class="prose">
                        <ul>
                            <li><span data-lang-show="en"><strong>Age:</strong> Must be 18 years of age or older as of Jan 1st/April 1st/July 1st/Oct 1st of the qualifying year.</span><span data-lang-show="hi"><strong>आयु:</strong> आवेदक की आयु कम से कम 18 वर्ष होनी चाहिए।</span></li>
                            <li><span data-lang-show="en"><strong>Nationality:</strong> Must be an Indian Citizen.</span><span data-lang-show="hi"><strong>नागरिकता:</strong> भारतीय नागरिक होना अनिवार्य है।</span></li>
                        </ul>
                        <p><strong><span data-lang-show="en">Required Documents (Upload Scanned Copies):</span><span data-lang-show="hi">ज़रूरी दस्तावेज़ (स्कैन कॉपी):</span></strong></p>
                        <ul class="checklist">
                            <li><span data-lang-show="en"><strong>Age Proof:</strong> Birth Certificate, 10th Marksheet, PAN Card, or Aadhaar.</span><span data-lang-show="hi"><strong>आयु प्रमाण:</strong> जन्म प्रमाण पत्र, 10वीं की मार्कशीट, पैन कार्ड, या आधार कार्ड।</span></li>
                            <li><span data-lang-show="en"><strong>Address Proof:</strong> Aadhaar Card, Passport, Ration Card, Bank Passbook, or recent Utility Bills.</span><span data-lang-show="hi"><strong>पता प्रमाण:</strong> आधार, पासपोर्ट, राशन कार्ड, बैंक पासबुक या बिजली का बिल।</span></li>
                            <li><span data-lang-show="en"><strong>Photograph:</strong> Recent passport-size photograph with white background.</span><span data-lang-show="hi"><strong>फोटो:</strong> हाल ही की पासपोर्ट साइज़ रंगीन फोटो।</span></li>
                        </ul>
                    </div>
                </section>

                <section class="mb-4" id="apply">
                    <h2><span data-lang-show="en">How to Apply for New Voter ID Online</span><span data-lang-show="hi">नया वोटर आईडी कार्ड ऑनलाइन कैसे बनाएं?</span></h2>
                    <div class="prose">
                        <ol>
                            <li>
                                <span data-lang-show="en"><strong>Visit ECI Portal:</strong> Go to the official Voters' Service Portal (<a href="https://voters.eci.gov.in/" target="_blank" rel="nofollow noopener">voters.eci.gov.in</a>) or download the <strong>Voter Helpline App</strong>.</span>
                                <span data-lang-show="hi"><strong>वेबसाइट पर जाएं:</strong> चुनाव आयोग के आधिकारिक पोर्टल (<a href="https://voters.eci.gov.in/" target="_blank" rel="nofollow noopener">voters.eci.gov.in</a>) पर जाएं या <strong>Voter Helpline App</strong> डाउनलोड करें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Sign Up / Login:</strong> Create an account using your mobile number and OTP.</span>
                                <span data-lang-show="hi"><strong>लॉगिन करें:</strong> अपने मोबाइल नंबर और OTP की मदद से अकाउंट बनाएं या लॉगिन करें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Select Form 6:</strong> Click on "New registration for general electors" (Form 6).</span>
                                <span data-lang-show="hi"><strong>फॉर्म 6 चुनें:</strong> नए वोटर रजिस्ट्रेशन के लिए "Form 6" पर क्लिक करें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Fill Details:</strong> Select your State ({name}), District, and Assembly Constituency. Enter your personal details, relatives' details, and contact info.</span>
                                <span data-lang-show="hi"><strong>जानकारी भरें:</strong> अपना राज्य ({name}), जिला और विधानसभा क्षेत्र चुनें। अपना नाम, जन्मतिथि और पते की जानकारी भरें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Upload Documents:</strong> Upload your photograph, age proof, and address proof.</span>
                                <span data-lang-show="hi"><strong>दस्तावेज़ अपलोड करें:</strong> अपनी फोटो, आयु प्रमाण पत्र और पते का प्रमाण अपलोड करें।</span>
                            </li>
                            <li>
                                <span data-lang-show="en"><strong>Submit:</strong> Review the form and submit. Note down the <strong>Reference Number</strong> generated.</span>
                                <span data-lang-show="hi"><strong>सबमिट करें:</strong> फॉर्म को चेक करके सबमिट करें। स्क्रीन पर दिखने वाला <strong>रेफरेंस नंबर (Reference ID)</strong> लिखकर रख लें।</span>
                            </li>
                        </ol>
                    </div>
                </section>
                
                <section class="mb-4" id="voterlist">
                    <h2><span data-lang-show="en">How to Download {name} Voter List PDF</span><span data-lang-show="hi">{name} की वोटर लिस्ट (Electoral Roll) कैसे डाउनलोड करें?</span></h2>
                    <div class="prose">
                        <p><span data-lang-show="en">To download the full PDF voter list for your polling booth in {name}, follow these steps:</span><span data-lang-show="hi">{name} के अपने मतदान केंद्र की पूरी वोटर लिस्ट PDF में डाउनलोड करने के लिए:</span></p>
                        <ol>
                            <li><span data-lang-show="en">Visit the {ceo} website at <a href="{ceo_url}" target="_blank" rel="nofollow noopener">{ceo_url}</a>.</span><span data-lang-show="hi">{ceo} की वेबसाइट <a href="{ceo_url}" target="_blank" rel="nofollow noopener">{ceo_url}</a> पर जाएं।</span></li>
                            <li><span data-lang-show="en">Look for the link named <strong>"Electoral Roll"</strong> or <strong>"E-Roll PDF"</strong>.</span><span data-lang-show="hi">वेबसाइट पर <strong>"Electoral Roll PDF"</strong> या <strong>"मतदाता सूची"</strong> लिंक पर क्लिक करें।</span></li>
                            <li><span data-lang-show="en">Select your District and Assembly Constituency.</span><span data-lang-show="hi">अपना जिला और विधानसभा क्षेत्र (Constituency) चुनें।</span></li>
                            <li><span data-lang-show="en">Select your specific Polling Station/Part Number.</span><span data-lang-show="hi">अपने पोलिंग बूथ (मतदान केंद्र) का नाम चुनें।</span></li>
                            <li><span data-lang-show="en">Enter the captcha code and click Download to save the PDF.</span><span data-lang-show="hi">कैप्चा कोड डालें और PDF डाउनलोड बटन पर क्लिक करें। आप अपने पूरे मोहल्ले की वोटर लिस्ट देख पाएंगे।</span></li>
                        </ol>
                    </div>
                </section>
                
                <section class="mb-4" id="faqs">
                    <h2><span data-lang-show="en">Frequently Asked Questions (FAQs)</span><span data-lang-show="hi">अक्सर पूछे जाने वाले सवाल (FAQs)</span></h2>
                    <div class="accordion">
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">How can I check my Voter ID status in {name}?</span><span data-lang-show="hi">{name} में वोटर आईडी का स्टेटस कैसे चेक करें?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">Visit <code>voters.eci.gov.in</code> and click on "Track Application Status". Enter the Reference ID you received during registration to view the real-time status.</span>
                                <span data-lang-show="hi"><code>voters.eci.gov.in</code> पर जाएं और "Track Application Status" पर क्लिक करें। आवेदन के समय मिला रेफरेंस नंबर (Reference ID) डालकर अपना स्टेटस चेक करें।</span>
                            </div>
                        </details>
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">How to correct my name or address on my Voter ID?</span><span data-lang-show="hi">वोटर आईडी में नाम या पता कैसे बदलें?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">To make any corrections (Name, DOB, Address, Photo), you need to fill out <strong>Form 8</strong> on the Voters' portal.</span>
                                <span data-lang-show="hi">किसी भी सुधार (नाम, जन्मतिथि, पता या फोटो) के लिए आपको वोटर पोर्टल पर लॉगिन करके <strong>फॉर्म 8 (Form 8)</strong> भरना होगा।</span>
                            </div>
                        </details>
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">Is there any fee to get a new PVC Voter ID card?</span><span data-lang-show="hi">क्या नया PVC वोटर आईडी कार्ड घर मंगाने की कोई फीस है?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">No, the Election Commission of India delivers the new Epic (PVC card) directly to your registered address via Speed Post absolutely free of cost.</span>
                                <span data-lang-show="hi">नहीं, चुनाव आयोग नया स्मार्ट पीवीसी (PVC) कार्ड बिल्कुल मुफ्त में आपके पते पर स्पीड पोस्ट के ज़रिए भेजता है।</span>
                            </div>
                        </details>
                    </div>
                </section>
            </div>

            <aside class="service-sidebar">
                <div class="widget">
                    <h3 class="widget-title"><span data-lang-show="en">Important Links</span><span data-lang-show="hi">महत्वपूर्ण लिंक्स</span></h3>
                    <ul class="widget-links">
                        <li><a href="https://voters.eci.gov.in/" target="_blank" rel="nofollow noopener">🌐 NVSP Portal (Apply)</a></li>
                        <li><a href="{ceo_url}" target="_blank" rel="nofollow noopener">📄 {ceo} (Voter List)</a></li>
                        <li><a href="https://electoralsearch.eci.gov.in/" target="_blank" rel="nofollow noopener">🔍 Search Name in Voter List</a></li>
                        <li><a href="../tools/eligibility-checker.html">✅ <span data-lang-show="en">Check Your Eligibility</span><span data-lang-show="hi">अपनी पात्रता जांचें</span></a></li>
                        <li><a href="../tools/status-troubleshooter.html">🛠️ <span data-lang-show="en">Status Troubleshooter</span><span data-lang-show="hi">स्टेटस गाइड</span></a></li>
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
        
    count = 0
    for idx, state in enumerate(states):
        filepath = os.path.join(out_dir, f"{state['slug']}-voter-id-card.html")
        content = build_html(state, idx)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        count += 1
        print(f"Generated {filepath}")
        
    print(f"Total voter ID pages generated: {count}")

if __name__ == "__main__":
    main()
