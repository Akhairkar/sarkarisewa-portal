import os
import random

states = [
    {"slug": "andhra-pradesh", "name": "Andhra Pradesh", "labour_portal": "AP BOCW Board", "emp_portal": "AP Employment Exchange"},
    {"slug": "arunachal-pradesh", "name": "Arunachal Pradesh", "labour_portal": "Arunachal BOCW", "emp_portal": "Arunachal Employment"},
    {"slug": "assam", "name": "Assam", "labour_portal": "Assam BOCW Board", "emp_portal": "Assam Employment Exchange"},
    {"slug": "bihar", "name": "Bihar", "labour_portal": "Bihar BOCW (Labour Resource Dept)", "emp_portal": "NCS Bihar (Rojgar Mela)"},
    {"slug": "chhattisgarh", "name": "Chhattisgarh", "labour_portal": "CG Labour Department", "emp_portal": "CG Rojgar Panjiyan (e-Rozgar)"},
    {"slug": "goa", "name": "Goa", "labour_portal": "Goa Labour Board", "emp_portal": "Goa Employment Exchange"},
    {"slug": "gujarat", "name": "Gujarat", "labour_portal": "Sanman Portal (Gujarat BOCW)", "emp_portal": "Anubandham Gujarat"},
    {"slug": "haryana", "name": "Haryana", "labour_portal": "Haryana Labour Dept", "emp_portal": "HREX (Haryana Employment)"},
    {"slug": "himachal-pradesh", "name": "Himachal Pradesh", "labour_portal": "HP BOCW Board", "emp_portal": "e-Rozgar HP"},
    {"slug": "jharkhand", "name": "Jharkhand", "labour_portal": "Jharkhand Shramadhan", "emp_portal": "Jharkhand Rojgar Portal"},
    {"slug": "karnataka", "name": "Karnataka", "labour_portal": "Karnataka BOCW / Seva Sindhu", "emp_portal": "Karnataka Employment Exchange"},
    {"slug": "kerala", "name": "Kerala", "labour_portal": "Kerala Labour Board", "emp_portal": "Kerala Employment Exchange"},
    {"slug": "madhya-pradesh", "name": "Madhya Pradesh", "labour_portal": "MP Sambal Yojana / Labour Dept", "emp_portal": "MP Rojgar Panjiyan Portal"},
    {"slug": "maharashtra", "name": "Maharashtra", "labour_portal": "Mahabocw (Maharashtra)", "emp_portal": "Mahaswayam Portal"},
    {"slug": "manipur", "name": "Manipur", "labour_portal": "Manipur Labour Dept", "emp_portal": "Manipur Employment Exchange"},
    {"slug": "meghalaya", "name": "Meghalaya", "labour_portal": "Meghalaya BOCW", "emp_portal": "Meghalaya Employment Exchange"},
    {"slug": "mizoram", "name": "Mizoram", "labour_portal": "Mizoram Labour Board", "emp_portal": "Mizoram Employment"},
    {"slug": "nagaland", "name": "Nagaland", "labour_portal": "Nagaland BOCW", "emp_portal": "Nagaland Employment Exchange"},
    {"slug": "odisha", "name": "Odisha", "labour_portal": "Odisha BOCW Board", "emp_portal": "State Employment Exchange Odisha"},
    {"slug": "punjab", "name": "Punjab", "labour_portal": "Punjab BOCW", "emp_portal": "PGRKAM Punjab"},
    {"slug": "rajasthan", "name": "Rajasthan", "labour_portal": "Rajasthan Shramik Card", "emp_portal": "Rajasthan Employment (SSO)"},
    {"slug": "sikkim", "name": "Sikkim", "labour_portal": "Sikkim Labour Dept", "emp_portal": "Sikkim Employment"},
    {"slug": "tamil-nadu", "name": "Tamil Nadu", "labour_portal": "TNBOCW Board", "emp_portal": "TN Velaivaaippu"},
    {"slug": "telangana", "name": "Telangana", "labour_portal": "Telangana BOCW", "emp_portal": "TS Employment Exchange"},
    {"slug": "tripura", "name": "Tripura", "labour_portal": "Tripura Labour Dept", "emp_portal": "Tripura Employment"},
    {"slug": "uttar-pradesh", "name": "Uttar Pradesh", "labour_portal": "UPBOCW (Shramik Card)", "emp_portal": "Sewayojan UP"},
    {"slug": "uttarakhand", "name": "Uttarakhand", "labour_portal": "UKBOCW", "emp_portal": "Uttarakhand Rojgar"},
    {"slug": "west-bengal", "name": "West Bengal", "labour_portal": "WB BOCW (Samajik Suraksha)", "emp_portal": "Employment Bank WB"},
    {"slug": "delhi", "name": "Delhi", "labour_portal": "Delhi e-District (Labour)", "emp_portal": "Delhi Employment Exchange"},
    {"slug": "jammu-kashmir", "name": "Jammu & Kashmir", "labour_portal": "J&K BOCW Board", "emp_portal": "J&K Employment Portal"},
    {"slug": "ladakh", "name": "Ladakh", "labour_portal": "Ladakh Labour Dept", "emp_portal": "Ladakh Employment Exchange"},
    {"slug": "chandigarh", "name": "Chandigarh", "labour_portal": "Chandigarh Labour Dept", "emp_portal": "Chandigarh Employment"},
    {"slug": "puducherry", "name": "Puducherry", "labour_portal": "Puducherry Labour Dept", "emp_portal": "Puducherry Employment"},
    {"slug": "andaman-nicobar", "name": "Andaman & Nicobar", "labour_portal": "A&N Labour Dept", "emp_portal": "A&N Employment Exchange"},
    {"slug": "lakshadweep", "name": "Lakshadweep", "labour_portal": "Lakshadweep Labour", "emp_portal": "Lakshadweep Employment"},
    {"slug": "dadra-nagar-haveli-daman-diu", "name": "Dadra & Nagar Haveli", "labour_portal": "DNH Labour Dept", "emp_portal": "DNH Employment Exchange"}
]

# High CTR Clickbait Titles
labour_titles = [
    "🚨 {name} Labour Card 2026: ₹3000 पेंशन के लिए अभी फॉर्म भरें (100% Free)",
    "[Urgent] Apply for {name} Shramik Card Online (Direct Link) - Get Free Benefits",
    "🚨 {name} Shramik Card List & Registration 2026: 90% छूट और सरकारी योजनाएं",
    "(Free Form) {name} BOCW Labour Card 2026: घर बैठे मोबाइल से बनाएं"
]

emp_titles = [
    "🚨 {name} Rojgar Panjiyan 2026: 100% Free Online Registration & Job Alerts",
    "(Urgent) {name} Employment Exchange Registration [Direct Link] - Apply Now!",
    "🚨 {name} बेरोजगार भत्ता 2026: रोजगार कार्यालय (Employment Exchange) में फ्री रजिस्ट्रेशन",
    "[Free Jobs] {name} Employment Exchange Apply Online (Step-by-Step Guide)"
]

labour_descs = [
    "🚨 100% Free! {name} में श्रमिक कार्ड (Labour Card) बनाकर पाएं बच्चों की पढ़ाई के लिए पैसे, आवास योजना और फ्री बीमा। घर बैठे ऑनलाइन आवेदन करने का सीधा लिंक।",
    "🔥 Urgent: {name} BOCW बोर्ड से तुरंत Shramik Card अप्लाई करें! ₹3000 मासिक पेंशन, साइकिल योजना और ढेरों सरकारी लाभ मुफ्त में पाएं। डायरेक्ट लिंक यहाँ है।",
    "✅ (Free PDF) {name} श्रमिक कार्ड की नई लिस्ट चेक करें और ऑनलाइन अप्लाई करें। जानें दस्तावेज़, फीस और 90% डिस्काउंट वाली सरकारी योजनाओं का फायदा कैसे लें।"
]

emp_descs = [
    "🚨 नौकरी चाहिए? {name} में रोजगार पंजीयन (Employment Registration) 100% Free में करें! ऑनलाइन फॉर्म भरें, डायरेक्ट लिंक पाएं और बेरोजगार भत्ते के लिए अप्लाई करें।",
    "🔥 Urgent: {name} रोजगार कार्यालय में अपना नाम तुरंत दर्ज करें! सरकारी और प्राइवेट नौकरियों के फ्री अलर्ट्स (Free Job Alerts) पाएं। यहाँ देखें Step-by-Step गाइड।",
    "✅ (100% Free) {name} Employment Exchange Registration 2026. Get direct NCS portal links, required documents list, and steps to claim unemployment allowance."
]

# Thick Spintax Content
labour_intros_hi = [
    "{name} राज्य सरकार ने असंगठित क्षेत्र के मजदूरों और कामगारों के लिए एक शानदार पहल की है, जिसे श्रमिक कार्ड (Labour Card) कहा जाता है। इस कार्ड के माध्यम से मजदूरों को सीधे तौर पर आर्थिक सहायता, बीमा और स्वास्थ्य योजनाएं दी जाती हैं।",
    "मजदूरों की भलाई के लिए, {name} का {portal} अब ऑनलाइन श्रमिक कार्ड (Shramik Card) बनाने की सुविधा दे रहा है। अगर आप निर्माण कार्य, पेंटिंग, या प्लंबिंग का काम करते हैं, तो यह कार्ड आपके और आपके परिवार के भविष्य को सुरक्षित कर सकता है।",
    "{name} में श्रम विभाग (Labour Department) ने मजदूरों को सरकारी योजनाओं का सीधा लाभ पहुंचाने के लिए लेबर कार्ड योजना शुरू की है। यह कार्ड 100% मुफ्त बनता है और इसके जरिये आपको घर बनाने, बेटी की शादी, और पेंशन जैसी ढेरों सुविधाएं मिलती हैं।"
]

emp_intros_hi = [
    "{name} में नौकरी की तलाश कर रहे युवाओं के लिए रोजगार पंजीयन (Employment Exchange Registration) एक बहुत ही महत्वपूर्ण कदम है। इसके माध्यम से सरकार पढ़े-लिखे बेरोजगारों को सीधे नौकरियों की सूचना (Job Alerts) और रोजगार मेले में भाग लेने का मौका देती है।",
    "अगर आप {name} के निवासी हैं और एक अच्छी सरकारी या प्राइवेट नौकरी चाहते हैं, तो आपको {portal} पर अपना नाम ज़रूर दर्ज कराना चाहिए। रोजगार कार्यालय में पंजीकरण अब पूरी तरह से ऑनलाइन और 100% Free हो गया है।",
    "{name} सरकार की बेरोजगारी भत्ता योजना और रोजगार मेलों (Rojgar Mela) का लाभ उठाने के लिए एम्प्लॉयमेंट एक्सचेंज में रजिस्ट्रेशन (Rojgar Panjiyan) होना अनिवार्य है। यह आपकी शैक्षणिक योग्यता के आधार पर सही नौकरी ढूंढने में मदद करता है।"
]


def get_internal_links(slug, name):
    return f"""
                        <h4 style="margin-top:20px; border-top:1px solid var(--color-border); padding-top:10px;"><span data-lang-show="en">Other Services in {name}</span><span data-lang-show="hi">{name} की अन्य सेवाएँ</span></h4>
                        <li><a href="{slug}-income-certificate.html">📄 {name} Income Certificate</a></li>
                        <li><a href="{slug}-ration-card.html">🍚 {name} Ration Card</a></li>
                        <li><a href="{slug}-driving-licence.html">🚗 {name} Driving Licence</a></li>
                        <li><a href="{slug}-caste-certificate.html">📜 {name} Caste Certificate</a></li>
                        <li><a href="{slug}-employment-exchange.html">💼 {name} Employment Registration</a></li>
"""

def get_internal_links_emp(slug, name):
    return f"""
                        <h4 style="margin-top:20px; border-top:1px solid var(--color-border); padding-top:10px;"><span data-lang-show="en">Other Services in {name}</span><span data-lang-show="hi">{name} की अन्य सेवाएँ</span></h4>
                        <li><a href="{slug}-domicile-certificate.html">🏠 {name} Domicile Certificate</a></li>
                        <li><a href="{slug}-caste-certificate.html">📜 {name} Caste Certificate</a></li>
                        <li><a href="{slug}-voter-id-card.html">🗳️ {name} Voter ID Card</a></li>
                        <li><a href="{slug}-labour-card.html">👷 {name} Labour Card</a></li>
"""

def build_labour(state, idx):
    name = state['name']
    slug = state['slug']
    portal = state['labour_portal']
    
    title_en = labour_titles[idx % 4].format(name=name)
    desc_hi = labour_descs[idx % 3].format(name=name)
    intro_hi = labour_intros_hi[idx % 3].format(name=name, portal=portal)
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
    <meta content="{title_en}" property="og:title"/>
    <meta content="{desc_hi}" property="og:description"/>
    <meta content="article" property="og:type"/>
    <meta content="https://sarkarisewaindia.com/states/{slug}-labour-card.html" property="og:url"/>
    <meta content="summary_large_image" name="twitter:card"/>
    <meta content="{title_en}" name="twitter:title"/>
    <meta content="{desc_hi}" name="twitter:description"/>
    <title>{title_en}</title>
    <link href="https://sarkarisewaindia.com/states/{slug}-labour-card.html" rel="canonical"/>
    <link href="../assets/css/style.css" rel="stylesheet"/>
    <link href="../assets/css/module2.css" rel="stylesheet"/>
    <link href="../assets/css/module15.css" rel="stylesheet"/>
    <link href="../assets/css/share-widget.css" rel="stylesheet"/>
</head>
<body data-slug="state-labour-{slug}">
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
                <li aria-current="page"><span data-lang-show="en">Labour Card</span><span data-lang-show="hi">श्रमिक कार्ड</span></li>
            </ol>
        </nav>

        <header class="service-hero">
            <div class="service-hero__icon">👷</div>
            <h1 class="service-hero__title">
                {title_en}
            </h1>
            <p class="service-hero__desc">
                {desc_hi}
            </p>
        </header>

        <div class="service-layout">
            <div class="service-main">
                
                <section class="mb-4">
                    <p><span data-lang-show="en">The {name} government has introduced the Shramik Card (Labour Card) to provide immense social security benefits to unorganized sector workers. By registering on the {portal}, workers can avail insurance, housing schemes, and monthly pensions.</span><span data-lang-show="hi">{intro_hi}</span></p>
                </section>

                <section class="card mb-4" id="overview">
                    <h2><span data-lang-show="en">Quick Overview</span><span data-lang-show="hi">संक्षिप्त विवरण</span></h2>
                    <div class="quick-facts">
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">State Authority</span><span data-lang-show="hi">राज्य प्राधिकरण</span></span>
                            <span class="fact-value">{portal}</span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Application Fee</span><span data-lang-show="hi">आवेदन फीस</span></span>
                            <span class="fact-value"><span data-lang-show="en">₹20 - ₹50 (Varies)</span><span data-lang-show="hi">₹20 - ₹50 (लगभग)</span></span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Benefits</span><span data-lang-show="hi">मुख्य लाभ</span></span>
                            <span class="fact-value"><span data-lang-show="en">Pension, Insurance, Education</span><span data-lang-show="hi">पेंशन, बीमा, बच्चों की पढ़ाई</span></span>
                        </div>
                    </div>
                </section>

                <section class="mb-4" id="documents">
                    <h2><span data-lang-show="en">Documents Required</span><span data-lang-show="hi">ज़रूरी दस्तावेज़ (Documents Required)</span></h2>
                    <div class="prose">
                        <ul class="checklist">
                            <li><span data-lang-show="en"><strong>Aadhaar Card:</strong> Mandatory for KYC.</span><span data-lang-show="hi"><strong>आधार कार्ड:</strong> ई-केवाईसी (KYC) के लिए अनिवार्य।</span></li>
                            <li><span data-lang-show="en"><strong>Bank Account:</strong> Passbook copy for DBT transfer.</span><span data-lang-show="hi"><strong>बैंक पासबुक:</strong> सरकारी पैसा सीधे खाते में आने के लिए।</span></li>
                            <li><span data-lang-show="en"><strong>Work Certificate:</strong> Proof of working as a laborer for 90 days.</span><span data-lang-show="hi"><strong>कार्य प्रमाण पत्र:</strong> 90 दिन तक मजदूरी करने का प्रमाण (ठेकेदार या ग्राम प्रधान द्वारा)।</span></li>
                            <li><span data-lang-show="en"><strong>Passport Size Photo</strong></span><span data-lang-show="hi"><strong>पासपोर्ट साइज़ फोटो</strong></span></li>
                        </ul>
                    </div>
                </section>

                <section class="mb-4" id="apply">
                    <h2><span data-lang-show="en">How to Apply Online (100% Free Info)</span><span data-lang-show="hi">ऑनलाइन आवेदन कैसे करें? (Step-by-Step)</span></h2>
                    <div class="prose">
                        <div class="alert alert-warning">
                            <strong><span data-lang-show="en">Important Alert</span><span data-lang-show="hi">ज़रूरी सूचना</span></strong>
                            <p><span data-lang-show="en">Registration on the {portal} allows unorganized sector workers (painters, plumbers, construction workers) to avail massive govt benefits. Do not pay hefty fees to touts.</span><span data-lang-show="hi">श्रमिक कार्ड (Labour Card) असंगठित क्षेत्र के मजदूरों (मकान बनाने वाले, पेंटर, प्लंबर आदि) के लिए बनता है। इससे सरकार सीधे आपके खाते में पैसे भेजती है। दलालों को पैसे न दें।</span></p>
                        </div>
                        <ol>
                            <li><span data-lang-show="en">Visit the official {portal} website of {name}.</span><span data-lang-show="hi">{name} के आधिकारिक {portal} (BOCW Board) वेबसाइट पर जाएँ।</span></li>
                            <li><span data-lang-show="en">Click on "Worker Registration" or "Shramik Panjiyan".</span><span data-lang-show="hi">"श्रमिक पंजीयन" (Worker Registration / New Registration) विकल्प पर क्लिक करें।</span></li>
                            <li><span data-lang-show="en">Verify your Aadhaar via OTP.</span><span data-lang-show="hi">अपना आधार नंबर दर्ज करें और मोबाइल OTP डालकर वेरिफाई (Verify) करें।</span></li>
                            <li><span data-lang-show="en">Fill out the detailed application form and upload the 90-day work certificate.</span><span data-lang-show="hi">आवेदन फॉर्म में अपनी जानकारी भरें, परिवार के सदस्यों का नाम जोड़ें और ठेकेदार का 90-दिन का कार्य प्रमाण पत्र अपलोड करें।</span></li>
                            <li><span data-lang-show="en">Submit and pay the nominal registration fee online (if applicable).</span><span data-lang-show="hi">फॉर्म सबमिट करें और मामूली रजिस्ट्रेशन फीस ऑनलाइन जमा करें। पावती (Receipt) डाउनलोड कर लें।</span></li>
                        </ol>
                    </div>
                </section>
                
                <section class="mb-4" id="faqs">
                    <h2><span data-lang-show="en">Frequently Asked Questions</span><span data-lang-show="hi">अक्सर पूछे जाने वाले सवाल (FAQs)</span></h2>
                    <div class="accordion">
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">What is the benefit of a Labour Card in {name}?</span><span data-lang-show="hi">{name} में लेबर कार्ड (श्रमिक कार्ड) बनवाने के क्या फायदे हैं?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">Benefits include accidental insurance, pension schemes, maternity benefits, and financial assistance for children's education and daughters' marriage.</span>
                                <span data-lang-show="hi">इसके ढेरों फायदे हैं जैसे: दुर्घटना बीमा, 60 वर्ष की आयु के बाद पेंशन, बच्चों की पढ़ाई के लिए छात्रवृत्ति (Scholarship), बेटी की शादी के लिए अनुदान और चिकित्सा सहायता।</span>
                            </div>
                        </details>
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">Can farmers apply for the BOCW Shramik card?</span><span data-lang-show="hi">क्या किसान या दुकानदार श्रमिक कार्ड बनवा सकते हैं?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">No, this card is strictly for unorganized sector manual laborers, especially construction workers.</span>
                                <span data-lang-show="hi">नहीं, यह कार्ड केवल असंगठित क्षेत्र के मजदूरों (जैसे- निर्माण कार्य, पेंटर, प्लंबर, इलेक्ट्रीशियन, राजमिस्त्री) के लिए है। किसानों के लिए किसान क्रेडिट कार्ड योजना है।</span>
                            </div>
                        </details>
                    </div>
                </section>
            </div>
            <aside class="service-sidebar">
                <div class="widget">
                    <h3 class="widget-title"><span data-lang-show="en">Important Links</span><span data-lang-show="hi">महत्वपूर्ण लिंक्स</span></h3>
                    <ul class="widget-links">
                        <li><a href="../tools/status-troubleshooter.html">🔍 <span data-lang-show="en">Track Application Status</span><span data-lang-show="hi">स्टेटस चेक करें</span></a></li>
{links}
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
<script src="../assets/js/main.js"></script>
<script src="../assets/js/consent.js"></script>
<script src="../assets/js/i18n-helper.js"></script>
</body>
</html>"""
    return html

def build_employment(state, idx):
    name = state['name']
    slug = state['slug']
    portal = state['emp_portal']
    
    title_en = emp_titles[idx % 4].format(name=name)
    desc_hi = emp_descs[idx % 3].format(name=name)
    intro_hi = emp_intros_hi[idx % 3].format(name=name, portal=portal)
    links = get_internal_links_emp(slug, name)
    
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
    <meta content="{title_en}" property="og:title"/>
    <meta content="{desc_hi}" property="og:description"/>
    <meta content="article" property="og:type"/>
    <meta content="https://sarkarisewaindia.com/states/{slug}-employment-exchange.html" property="og:url"/>
    <meta content="summary_large_image" name="twitter:card"/>
    <meta content="{title_en}" name="twitter:title"/>
    <meta content="{desc_hi}" name="twitter:description"/>
    <title>{title_en}</title>
    <link href="https://sarkarisewaindia.com/states/{slug}-employment-exchange.html" rel="canonical"/>
    <link href="../assets/css/style.css" rel="stylesheet"/>
    <link href="../assets/css/module2.css" rel="stylesheet"/>
    <link href="../assets/css/module15.css" rel="stylesheet"/>
    <link href="../assets/css/share-widget.css" rel="stylesheet"/>
</head>
<body data-slug="state-emp-{slug}">
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
                <li aria-current="page"><span data-lang-show="en">Employment Exchange</span><span data-lang-show="hi">रोजगार पंजीयन</span></li>
            </ol>
        </nav>

        <header class="service-hero">
            <div class="service-hero__icon">💼</div>
            <h1 class="service-hero__title">
                {title_en}
            </h1>
            <p class="service-hero__desc">
                {desc_hi}
            </p>
        </header>

        <div class="service-layout">
            <div class="service-main">
                <section class="mb-4">
                    <p><span data-lang-show="en">In {name}, Employment Exchange Registration is a crucial step for job seekers. It ensures that educated unemployed youths receive direct job alerts, can participate in government Job Fairs (Rojgar Melas), and become eligible for unemployment allowances via {portal} or the NCS portal.</span><span data-lang-show="hi">{intro_hi}</span></p>
                </section>

                <section class="card mb-4" id="overview">
                    <h2><span data-lang-show="en">Quick Overview</span><span data-lang-show="hi">संक्षिप्त विवरण</span></h2>
                    <div class="quick-facts">
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Official Portal</span><span data-lang-show="hi">पोर्टल</span></span>
                            <span class="fact-value">{portal} & NCS</span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Registration Fee</span><span data-lang-show="hi">पंजीयन फीस</span></span>
                            <span class="fact-value"><span data-lang-show="en">100% Free</span><span data-lang-show="hi">100% मुफ्त (Free)</span></span>
                        </div>
                        <div class="fact-item">
                            <span class="fact-label"><span data-lang-show="en">Validity</span><span data-lang-show="hi">वैधता</span></span>
                            <span class="fact-value"><span data-lang-show="en">Usually 3 Years</span><span data-lang-show="hi">आमतौर पर 3 वर्ष (नवीनीकरण आवश्यक)</span></span>
                        </div>
                    </div>
                </section>

                <section class="mb-4" id="documents">
                    <h2><span data-lang-show="en">Documents Required</span><span data-lang-show="hi">ज़रूरी दस्तावेज़ (Documents Required)</span></h2>
                    <div class="prose">
                        <ul class="checklist">
                            <li><span data-lang-show="en"><strong>Aadhaar Card:</strong> Mandatory for e-KYC.</span><span data-lang-show="hi"><strong>आधार कार्ड:</strong> ई-केवाईसी (KYC) के लिए।</span></li>
                            <li><span data-lang-show="en"><strong>Education Marksheets:</strong> 10th, 12th, Graduation degrees.</span><span data-lang-show="hi"><strong>शैक्षणिक मार्कशीट:</strong> 10वीं, 12वीं, ग्रेजुएशन या ITI की मार्कशीट/डिग्री।</span></li>
                            <li><span data-lang-show="en"><strong>Domicile Certificate:</strong> Proof of residence in {name}.</span><span data-lang-show="hi"><strong>मूल निवास प्रमाण पत्र:</strong> {name} का स्थायी निवासी होने का सबूत।</span></li>
                            <li><span data-lang-show="en"><strong>Caste Certificate:</strong> If applying for reserved categories.</span><span data-lang-show="hi"><strong>जाति प्रमाण पत्र (Caste Certificate):</strong> यदि आप SC/ST/OBC वर्ग से हैं।</span></li>
                        </ul>
                    </div>
                </section>

                <section class="mb-4" id="apply">
                    <h2><span data-lang-show="en">How to Register Online</span><span data-lang-show="hi">ऑनलाइन रजिस्ट्रेशन कैसे करें? (रोजगार पंजीयन)</span></h2>
                    <div class="prose">
                        <div class="alert alert-info">
                            <strong><span data-lang-show="en">Unemployment Allowance</span><span data-lang-show="hi">बेरोजगारी भत्ता (Unemployment Allowance)</span></strong>
                            <p><span data-lang-show="en">Registering on {portal} makes you eligible for government job alerts and unemployment allowance (Berojgari Bhatta) offered by the {name} government.</span><span data-lang-show="hi">{portal} पर रजिस्ट्रेशन करने से आप न सिर्फ सरकारी नौकरी के अलर्ट पाते हैं, बल्कि {name} सरकार द्वारा दिए जाने वाले बेरोजगारी भत्ते के लिए भी पात्र बन जाते हैं (यदि योजना लागू हो)।</span></p>
                        </div>
                        <ol>
                            <li><span data-lang-show="en">Go to the {portal} or the National Career Service (NCS) portal.</span><span data-lang-show="hi">{name} के आधिकारिक {portal} या National Career Service (NCS) पोर्टल पर जाएँ।</span></li>
                            <li><span data-lang-show="en">Click on "Job Seeker Registration".</span><span data-lang-show="hi">"Job Seeker" (नौकरी चाहने वाले) या "नया पंजीयन (New Registration)" पर क्लिक करें।</span></li>
                            <li><span data-lang-show="en">Create an account using your mobile number and Aadhaar.</span><span data-lang-show="hi">अपने मोबाइल नंबर और आधार कार्ड का उपयोग करके अपना अकाउंट बनाएँ।</span></li>
                            <li><span data-lang-show="en">Fill in your personal, educational, and experience details.</span><span data-lang-show="hi">अपनी व्यक्तिगत जानकारी, पढ़ाई (Education details) और पिछला अनुभव (Experience) दर्ज करें।</span></li>
                            <li><span data-lang-show="en">Submit the form and download your Employment Exchange ID Card.</span><span data-lang-show="hi">फॉर्म सबमिट करें और अपना रोजगार पंजीयन कार्ड (Registration Number / ID Card) डाउनलोड करके प्रिंट कर लें।</span></li>
                        </ol>
                    </div>
                </section>
                
                <section class="mb-4" id="faqs">
                    <h2><span data-lang-show="en">Frequently Asked Questions</span><span data-lang-show="hi">अक्सर पूछे जाने वाले सवाल (FAQs)</span></h2>
                    <div class="accordion">
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">Do I have to pay to register on {portal}?</span><span data-lang-show="hi">क्या रोजगार पंजीयन के लिए कोई फीस देनी पड़ती है?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">No, registration on the Employment Exchange portal is 100% Free of cost.</span>
                                <span data-lang-show="hi">बिल्कुल नहीं। रोजगार कार्यालय (Employment Exchange) में ऑनलाइन या ऑफलाइन पंजीयन 100% मुफ्त (Free) है।</span>
                            </div>
                        </details>
                        <details class="accordion-item">
                            <summary class="accordion-header"><span data-lang-show="en">What is the validity of the registration in {name}?</span><span data-lang-show="hi">{name} में पंजीयन कितने साल के लिए मान्य होता है?</span></summary>
                            <div class="accordion-body">
                                <span data-lang-show="en">Typically, the registration is valid for 3 years. You must renew it online before the expiry date to stay on the active job seekers list.</span>
                                <span data-lang-show="hi">आमतौर पर रोजगार पंजीयन 3 साल के लिए मान्य होता है। वैधता समाप्त होने से पहले आपको इसे ऑनलाइन रिन्यू (Renew) करना होता है, अन्यथा आपका नाम लिस्ट से हटा दिया जाता है।</span>
                            </div>
                        </details>
                    </div>
                </section>
            </div>
            <aside class="service-sidebar">
                <div class="widget">
                    <h3 class="widget-title"><span data-lang-show="en">Important Links</span><span data-lang-show="hi">महत्वपूर्ण लिंक्स</span></h3>
                    <ul class="widget-links">
                        <li><a href="https://www.ncs.gov.in/" target="_blank" rel="nofollow noopener">🌐 National Career Service (NCS)</a></li>
                        <li><a href="../tools/status-troubleshooter.html">🔍 <span data-lang-show="en">Track Registration Status</span><span data-lang-show="hi">पंजीयन स्टेटस चेक करें</span></a></li>
{links}
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
        with open(os.path.join(out_dir, f"{state['slug']}-labour-card.html"), "w", encoding="utf-8") as f:
            f.write(build_labour(state, idx))
            
        with open(os.path.join(out_dir, f"{state['slug']}-employment-exchange.html"), "w", encoding="utf-8") as f:
            f.write(build_employment(state, idx))
            
    print("Generated 72 highly-clickbaity, thick pages (36 Labour, 36 Employment)")

if __name__ == "__main__":
    main()
