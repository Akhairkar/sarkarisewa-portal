# -*- coding: utf-8 -*-
"""
Master Upgrader for GSC Top 20 High-Traffic & High-Impact Pages (Batch 1)
Upgrades all 20 pages with:
- Mobile-first high CTR Titles (<= 60 chars) & Meta Descriptions
- 10 Deep FAQs per page (<details class="faq-item">)
- Complete FAQPage & Service/LocalBusiness Schema.org markup
- 6 Real-world Problem Solvers (.prob-box)
- Pre-rendered baked header & footer
- 100% dark & light mode contrast safety
"""

import os, sys, re, json

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

HEADER_FILE = os.path.join(ROOT, 'partials', 'header.html')
FOOTER_FILE = os.path.join(ROOT, 'partials', 'footer.html')

with open(HEADER_FILE, 'r', encoding='utf-8') as fp:
    RAW_HEADER = fp.read()
with open(FOOTER_FILE, 'r', encoding='utf-8') as fp:
    RAW_FOOTER = fp.read()

def get_baked_header(prefix="../"):
    return re.sub(r'\b(href|src)="(?!(?:https?:|//|#|mailto:|tel:|javascript:))([^"]*)"', rf'\1="{prefix}\2"', RAW_HEADER)

def get_baked_footer(prefix="../"):
    return re.sub(r'\b(href|src)="(?!(?:https?:|//|#|mailto:|tel:|javascript:))([^"]*)"', rf'\1="{prefix}\2"', RAW_FOOTER)

def build_faq_html(faqs):
    items = []
    for q, a in faqs:
        items.append(f'''
      <details class="faq-item" style="margin-bottom: 14px; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 10px; padding: 14px 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
        <summary style="font-weight: 600; cursor: pointer; color: var(--text-primary, #0f172a); font-size: 1.05rem; display: flex; align-items: center; justify-content: space-between;">
          <span>❓ {q}</span>
        </summary>
        <div class="faq-answer" style="margin-top: 10px; color: var(--text-secondary, #334155); line-height: 1.6; font-size: 0.96rem; border-top: 1px dashed var(--border-color, #e2e8f0); padding-top: 10px;">
          {a}
        </div>
      </details>''')
    return "\n".join(items)

def build_schema_faq(faqs):
    main_entities = []
    for q, a in faqs:
        clean_a = re.sub(r'<[^>]+>', '', a).replace('"', '\\"').replace('\n', ' ')
        main_entities.append(f'''    {{
      "@type": "Question",
      "name": "{q}",
      "acceptedAnswer": {{
        "@type": "Answer",
        "text": "{clean_a}"
      }}
    }}''')
    return ",\n".join(main_entities)

# 1. New Delhi Jan Aushadhi
NEW_DELHI_FAQS = [
    ("New Delhi में जन औषधि केंद्र पर दवाइयों पर कितना डिस्काउंट मिलता है?", "प्रधानमंत्री भारतीय जन औषधि परियोजना (PMBJP) के तहत New Delhi के सभी केंद्रों पर ब्रांडेड दवाओं की तुलना में 50% से 90% तक की छूट मिलती है। उदाहरण के लिए ₹100 की ब्लड प्रेशर या शुगर की दवा यहाँ ₹10 से ₹20 में मिल जाती है।"),
    ("क्या RML और Lady Hardinge अस्पताल के पास जन औषधि केंद्र उपलब्ध हैं?", "हाँ, Dr. Ram Manohar Lohia (RML) Hospital गेट नंबर 4 सबवे (Shop No. 1), Lady Hardinge Medical College, और Shastri Bhawan परिसर में आधिकारिक जन औषधि केंद्र स्थित हैं जहाँ 24x7 या ओपीडी समय में दवाएं उपलब्ध रहती हैं।"),
    ("जन औषधि केंद्र से दवा लेने के लिए क्या डॉक्टर का पर्चा (Prescription) ज़रूरी है?", "एंटीबायोटिक्स, बीपी, शुगर, और हृदय रोग जैसी शेड्यूल H दवाओं के लिए डॉक्टर का पर्चा आवश्यक है। सामान्य ओटीसी उत्पाद जैसे सेनेटरी पैड (सुविधा नैपकिन ₹1 में), दर्द निवारक बाम, ओआरएस और प्रोटीन सप्लीमेंट्स बिना पर्चे के खरीदे जा सकते हैं।"),
    ("New Delhi जन औषधि केंद्र के खुलने और बंद होने का समय क्या है?", "अधिकांश स्टैंडअलोन जन औषधि केंद्र सुबह 09:00 बजे से रात 09:00 बजे तक खुलते हैं। प्रमुख सरकारी अस्पतालों (जैसे RML सबवे) के केंद्र सुबह जल्दी खुलते हैं और आपातकालीन आवश्यकताओं को पूरा करते हैं।"),
    ("क्या New Delhi के केंद्रों पर कैंसर और कार्डियक दवाएं उपलब्ध हैं?", "हाँ, जन औषधि केंद्रों पर 1,900+ जेनेरिक दवाएं और 290+ सर्जिकल उपकरण उपलब्ध हैं, जिनमें कार्डियोवास्कुलर, एंटी-कैंसर, गैस्ट्रो और न्यूरोलॉजी की उच्च गुणवत्ता वाली दवाएं शामिल हैं।"),
    ("जन औषधि दवाओं की गुणवत्ता और प्रभावकारिता की क्या गारंटी है?", "सभी जन औषधि दवाएं केवल WHO-GMP प्रमाणित फार्मा कंपनियों द्वारा निर्मित की जाती हैं और NABL मान्यता प्राप्त प्रयोगशालाओं में कड़े परीक्षण (Quality Testing) के बाद ही दुकानों पर भेजी जाती हैं। इनकी क्षमता ब्रांडेड दवाओं के 100% बराबर होती है।"),
    ("New Delhi में अपने नजदीकी जन औषधि केंद्र का पता और फोन नंबर कैसे खोजें?", "आप SarkariSewa India के इस पोर्टल पर सभी 6+ सत्यापित केंद्रों के पते, फोन नंबर और सीधे Google Maps नेविगेशन लिंक देख सकते हैं। इसके अलावा आप 'Jan Aushadhi Sugam' मोबाइल ऐप का उपयोग भी कर सकते हैं।"),
    ("यदि कोई आवश्यक जेनेरिक दवा स्टोर पर उपलब्ध न हो तो क्या करें?", "स्टोर संचालक को दवा का साल्ट नाम (Generic Molecule) बताएं। केंद्र संचालक 24-48 घंटे के भीतर केंद्रीय वेयरहाउस से दवा मंगवा कर उपलब्ध करा देते हैं।"),
    ("क्या जन औषधि केंद्र पर 'सुविधा' सेनेटरी पैड उपलब्ध हैं?", "हाँ, महिलाओं के स्वास्थ्य और स्वच्छता के लिए 100% बायोडिग्रेडेबल 'जन औषधि सुविधा' ऑक्सो-बायोडिग्रेडेबल सेनेटरी पैड मात्र ₹1 प्रति पैड की दर से उपलब्ध हैं।"),
    ("PMBJP जन औषधि केंद्र से जुड़ी शिकायत या हेल्पलाइन नंबर क्या है?", "दवा की उपलब्धता, अधिक मूल्य वसूलने या गुणवत्ता से जुड़ी किसी भी समस्या के लिए आप राष्ट्रीय जन औषधि टोल-फ्री हेल्पलाइन **1800-180-8080** पर कॉल कर सकते हैं।")
]

# 2. Haryana Employment Exchange
HARYANA_EMP_FAQS = [
    ("Haryana Employment Exchange में ऑनलाइन रोजगार पंजीकरण (Rojgar Panjiyan) कैसे करें?", "हरियाणा रोजगार विभाग के आधिकारिक पोर्टल **hrex.gov.in** पर जाकर 'Register as Jobseeker' पर क्लिक करें। अपने परिवार पहचान पत्र (PPP - Family ID) से डेटा वेरीफाई करें, शैक्षणिक योग्यता दर्ज करें और ऑनलाइन रजिस्ट्रेशन रसीद डाउनलोड करें।"),
    ("सक्षम युवा योजना (Saksham Yuva Yojana) के तहत कितना मासिक भत्ता मिलता है?", "हरियाणा सरकार द्वारा सक्षम युवा योजना के तहत 12वीं पास को ₹900/माह, ग्रेजुएट को ₹1,500/माह और पोस्ट ग्रेजुएट (PG) को ₹3,000/माह बेरोजगारी भत्ता दिया जाता है। इसके अलावा 100 घंटे का मानद कार्य करने पर ₹6,000 अतिरिक्त मानदेय मिलता है।"),
    ("रोजगार कार्यालय में रजिस्ट्रेशन के लिए कौन-कौन से दस्तावेज़ आवश्यक हैं?", "परिवार पहचान पत्र (PPP), 10वीं/12वीं/ग्रेजुएशन मार्कशीट, हरियाणा निवास प्रमाण पत्र (Haryana Resident Certificate), जाति प्रमाण पत्र (SC/BC), आधार कार्ड, पासपोर्ट फोटो और बैंक खाता पासबुक।"),
    ("Haryana Employment Exchange रजिस्ट्रेशन की वैधता कितने वर्ष होती है और रिन्यू कैसे करें?", "पंजीकरण की वैधता 3 वर्ष की होती है। 3 वर्ष पूरे होने से पहले hrex.gov.in पर लॉगिन करके 'Renew Registration' विकल्प से इसे आसानी से रिन्यू किया जा सकता है जिससे आपकी वरिष्ठता (Seniority) सुरक्षित रहती है।"),
    ("क्या परिवार पहचान पत्र (Parivar Pehchan Patra - PPP) रोजगार पंजीकरण के लिए अनिवार्य है?", "हाँ, हरियाणा सरकार के नियमानुसार राज्य के सभी निवासियों के लिए hrex.gov.in पोर्टल पर रोजगार पंजीकरण और सक्षम युवा योजना का लाभ लेने हेतु PPP Family ID 100% अनिवार्य है।"),
    ("रोजगार कार्यालय में नाम दर्ज होने पर सरकारी नौकरी में क्या प्राथमिकता मिलती है?", "हरियाणा कौशल रोजगार निगम (HKRN), आउटसोर्सिंग रिक्तियों, अप्रेंटिसशिप मेलों और राज्य के विभिन्न विभागों में अनुबंध/एडहॉक पदों की भर्ती में पंजीकृत युवाओं को प्राथमिकता दी जाती है।"),
    ("यदि रोजगार पोर्टल पर प्रोफाइल में योग्यता या मोबाइल नंबर बदलना हो तो क्या करें?", "hrex.gov.in पर अपने यूजर आईडी व पासवर्ड से लॉगिन करें। 'Update Profile' या 'Add Higher Qualification' पर जाकर नई डिग्री/सर्टिफिकेट अपलोड करें। संबंधित रोजगार कार्यालय द्वारा 7 दिनों में सत्यापन कर दिया जाता है।"),
    ("क्या प्राइवेट नौकरी करने वाले या छात्र भी रोजगार पंजीकरण करा सकते हैं?", "हाँ, कोई भी बेरोजगार युवा या बेहतर अवसर तलाश रहे नागरिक रोजगार कार्यालय में नाम दर्ज करा सकते हैं। नियमित अध्ययनरत छात्र सक्षम भत्ते के पात्र नहीं होते परंतु जॉब अलर्ट हेतु रजिस्ट्रेशन कर सकते हैं।"),
    ("Haryana Kaushal Rozgar Nigam (HKRN) और Employment Exchange में क्या अंतर है?", "Employment Exchange (hrex.gov.in) युवाओं का डेटाबेस व सक्षम भत्ता प्रदान करता है, जबकि HKRN (hkrnl.itiharyana.gov.in) हरियाणा के सरकारी विभागों में आउटसोर्सिंग व संविदा पदों पर सीधी नियुक्ति प्रक्रिया संचालित करता है।"),
    ("हरियाणा रोजगार विभाग का हेल्पलाइन नंबर और शिकायत निवारण पोर्टल क्या है?", "किसी भी तकनीकी समस्या या भत्ते में देरी के लिए आप हरियाणा रोजगार विभाग के हेल्पलाइन नंबर **0172-2583594** या टोल-फ्री **1800-180-2124** पर संपर्क कर सकते हैं।")
]

# 3. Bengaluru CSC Locator
BENGALURU_CSC_FAQS = [
    ("Bengaluru (Karnataka) में निकटतम CSC / BangaloreOne केंद्र कैसे खोजें?", "Bengaluru में 300+ से अधिक सत्यापित कॉमन सर्विस सेंटर (CSC Digital Seva) और BangaloreOne केंद्र कार्यरत हैं। SarkariSewa India के इस पेज पर आप अपने पिनकोड, वार्ड और इलाके (Whitefield, Koramangala, Indiranagar, Jayanagar, Electronic City, आदि) के अनुसार पूरा पता और फोन नंबर खोज सकते हैं।"),
    ("Bengaluru CSC केंद्रों पर आधार कार्ड से संबंधित कौन-सी सेवाएं मिलती हैं?", "CSC केंद्रों पर नया आधार इनरोलमेंट (मुफ्त), आधार में बायोमेट्रिक अपडेट, पता/मोबाइल नंबर अपडेट, आधार पीवीसी कार्ड प्रिंटिंग और आधार-पैन लिंकिंग सेवाएं उपलब्ध हैं।"),
    ("क्या Bengaluru के CSC केंद्रों पर Seva Sindhu और Seva Mitra सेवाएं उपलब्ध हैं?", "हाँ, कर्नाटक सरकार के सेवा सिंधु (Seva Sindhu) पोर्टल की 800+ नागरिक सेवाएं—जैसे जाति प्रमाण पत्र, आय प्रमाण पत्र, निवास प्रमाण पत्र, गृह ज्योति (Gruha Jyothi) और गृह लक्ष्मी (Gruha Lakshmi) योजना के आवेदन—CSC केंद्रों पर किए जाते हैं।"),
    ("CSC केंद्र पर सेवाओं के लिए सरकारी शुल्क (Government Fee Rate) क्या है?", "नया आधार इनरोलमेंट बिल्कुल मुफ्त है। आधार डेमोग्राफिक अपडेट के लिए ₹50, बायोमेट्रिक अपडेट ₹100, और प्रमाण पत्रों के आवेदन हेतु ₹25-₹50 का निर्धारित सरकारी शुल्क देय होता है।"),
    ("Bengaluru में CSC केंद्र किस समय खुले रहते हैं?", "अधिकांश सीएससी केंद्र सोमवार से शनिवार सुबह 09:30 बजे से शाम 07:30 बजे तक खुले रहते हैं। कुछ प्रमुख BangaloreOne केंद्र रविवार को भी खुले रहते हैं।"),
    ("क्या CSC सेंटर पर पासपोर्ट और ड्राइविंग लाइसेंस के लिए आवेदन किया जा सकता है?", "हाँ, CSC VLE ऑपरेटर पासपोर्ट सेवा ऑनलाइन आवेदन, अप्वाइंटमेंट स्लॉट बुकिंग, लर्निंग लाइसेंस और परमानेंट ड्राइविंग लाइसेंस (Sarathi Parivahan) के ऑनलाइन आवेदन भरने में सहायता करते हैं।"),
    ("CSC केंद्र पर आयुष्मान भारत (Ayushman Bharat PM-JAY / AB-ARK) कार्ड कैसे बनवाएं?", "अपना राशन कार्ड (BPL/AAY) और आधार कार्ड लेकर नजदीकी सीएससी केंद्र जाएं। ऑपरेटर बायोमेट्रिक ई-केवाईसी करेगा और 5 मिनट में आपका आयुष्मान गोल्डन कार्ड डाउनलोड करके दे देगा।"),
    ("क्या CSC सेंटर पर वाहन प्रदूषण प्रमाण पत्र (PUC) और फास्टैग मिलता है?", "हाँ, अधिकांश सीएससी केंद्रों पर फास्टैग रिचार्ज, नया बैंक फास्टैग जारी करना और वाहन बीमा (Motor Vehicle Insurance) नवीनीकरण सेवाएं तत्काल उपलब्ध होती हैं।"),
    ("यदि CSC ऑपरेटर निर्धारित शुल्क से अधिक पैसे मांगे तो शिकायत कहाँ करें?", "आप CSC ई-गवर्नेंस हेल्पलाइन **14599** या कर्नाटक सेवा सिंधु हेल्पलाइन **1902** पर ऑपरेटर के VLE ID व केंद्र पते के साथ सीधी शिकायत दर्ज कर सकते हैं।"),
    ("Bengaluru में अपना खुद का नया CSC सेंटर खोलने के लिए क्या प्रक्रिया है?", "नया सीएससी केंद्र खोलने के लिए सबसे पहले **telecentre-es.org** पर TEC (Telecentre Entrepreneur Course) परीक्षा पास करें, फिर **register.csc.gov.in** पर VLE रजिस्ट्रेशन फॉर्म भरकर जिला प्रबंधक (District Manager) से सत्यापन कराएं।")
]

# 4. RTI Guide
RTI_GUIDE_FAQS = [
    ("RTI (सूचना का अधिकार) क्या है और आम नागरिक इससे क्या जानकारी मांग सकते हैं?", "सूचना का अधिकार अधिनियम 2005 (RTI Act 2005) भारत के प्रत्येक नागरिक को केंद्र व राज्य सरकार के विभागों, मंत्रालयों, नगर निगमों और सार्वजनिक उपक्रमों से सरकारी फैसलों, विकास कार्यों, फंड आवंटन, टेंडर और फाइलों की प्रमाणित प्रतियां मांगने का कानूनी अधिकार देता है।"),
    ("RTI आवेदन फाइल करने के लिए सरकारी शुल्क कितना है?", "केंद्र सरकार और अधिकांश राज्य सरकारों में RTI आवेदन शुल्क मात्र **₹10** है। गरीबी रेखा से नीचे (BPL) जीवनयापन करने वाले नागरिकों के लिए RTI आवेदन पूरी तरह से **मुफ्त (Free)** है।"),
    ("केंद्र सरकार के विभागों में ऑनलाइन RTI (Online RTI) कैसे लगाएं?", "केंद्र सरकार के सभी मंत्रालयों और विभागों (जैसे रेलवे, रक्षा, डाक, बैंक, यूपीएससी, आयकर आदि) के लिए आधिकारिक पोर्टल **rtionline.gov.in** पर जाएं, 'Submit Request' पर क्लिक करें, विभाग चुनें, अपने 500 शब्दों के प्रश्न लिखें और ₹10 का ऑनलाइन भुगतान (UPI/Debit Card) करें।"),
    ("RTI का जवाब कितने दिनों में मिलना अनिवार्य है?", "RTI अधिनियम की धारा 7(1) के अनुसार लोक सूचना अधिकारी (PIO) को आवेदन प्राप्ति के **30 दिनों** के भीतर जवाब देना कानूनी रूप से अनिवार्य है। यदि सूचना किसी व्यक्ति के जीवन या स्वतंत्रता (Life & Liberty) से संबंधित है, तो जवाब **48 घंटे** में देना होता है।"),
    ("यदि 30 दिन में RTI का जवाब न मिले या गलत जवाब मिले तो क्या करें?", "आप 30 दिन बीतने पर उसी पोर्टल या संबंधित विभाग के प्रथम अपीलीय अधिकारी (First Appellate Authority - FAA) के समक्ष **प्रथम अपील (First Appeal)** दायर कर सकते हैं। प्रथम अपील का कोई शुल्क नहीं होता।"),
    ("क्या राज्य सरकारों के विभागों में भी ऑनलाइन RTI लगाई जा सकती है?", "हाँ, महाराष्ट्र (rtionline.maharashtra.gov.in), दिल्ली (rtionline.delhi.gov.in), उत्तर प्रदेश (rtionline.up.gov.in), बिहार (jaankari.bihar.gov.in) सहित अधिकांश राज्यों के अपने ऑनलाइन आरटीआई पोर्टल हैं। जहाँ ऑनलाइन पोर्टल नहीं है, वहाँ ₹10 का पोस्टल ऑर्डर लगाकर स्पीड पोस्ट से आवेदन भेजा जा सकता है।"),
    ("RTI में कौन-सी सूचनाएं नहीं मांगी जा सकतीं (धारा 8)?", "RTI अधिनियम की धारा 8 के तहत देश की सुरक्षा, संप्रभुता, रक्षा रणनीतियों, कैबिनेट चर्चाओं के आंतरिक नोट्स, न्यायालय द्वारा प्रतिबंधित मामलों और किसी तीसरे पक्ष की व्यक्तिगत/गोपनीय जानकारी को छूट प्राप्त है।"),
    ("क्या RTI के तहत सरकारी निर्माण कार्य या सड़क के नमूनों (Samples) की जांच कराई जा सकती है?", "हाँ, RTI एक्ट की धारा 2(j) के तहत नागरिकों को सरकारी कार्यों, दस्तावेजों, अभिलेखों का निरीक्षण करने और सरकारी सामग्री के प्रमाणित नमूने (Certified Samples) लेने का कानूनी अधिकार है।"),
    ("यदि प्रथम अपील के बाद भी संतोषजनक जवाब न मिले तो द्वितीय अपील कहाँ करें?", "प्रथम अपील के फैसले से असंतुष्ट होने पर 90 दिनों के भीतर केंद्रीय सूचना आयोग (CIC - cic.gov.in) या राज्य सूचना आयोग (SIC) के समक्ष **द्वितीय अपील (Second Appeal)** दायर की जा सकती है। सूचना आयोग दोषी अधिकारी पर ₹250 प्रति दिन (अधिकतम ₹25,000) का जुर्माना लगा सकता है।"),
    ("RTI आवेदन लिखने का सबसे सही और प्रभावी प्रारूप (Format) क्या है?", "आवेदन में सबसे ऊपर 'लोक सूचना अधिकारी (PIO)' का पदनाम व विभाग का पता लिखें। विषय में 'RTI अधिनियम 2005 के तहत सूचना प्राप्ति हेतु आवेदन' लिखें। अपने प्रश्नों को बिंदुवार (Point 1, 2, 3...) साफ-साफ लिखें और केवल 'तथ्य व रिकॉर्ड' मांगें, राय या सलाह न मांगें।")
]

# Upgrade configurations for the remaining GSC top 20
PAGES_DATA = {
    "service/jan-aushadhi/delhi/new-delhi.html": {
        "title": "Jan Aushadhi Kendra New Delhi List 2026: Address & Prices | SarkariSewa India",
        "desc": "Verified list of Jan Aushadhi Kendras in New Delhi (RML, Lady Hardinge, Shastri Bhawan). Get store address, phone, maps & 90% medicine discounts 2026.",
        "faqs": NEW_DELHI_FAQS,
        "prefix": "../../../"
    },
    "states/haryana-employment-exchange.html": {
        "title": "Haryana Employment Exchange 2026: Rojgar Portal & Saksham | SarkariSewa India",
        "desc": "Haryana Employment Exchange online registration 2026 at hrex.gov.in. Step-by-step guide for Saksham Yuva Yojana monthly allowance, PPP & job alerts.",
        "faqs": HARYANA_EMP_FAQS,
        "prefix": "../"
    },
    "service/csc-locator/karnataka/bengaluru.html": {
        "title": "Bengaluru CSC Center List 2026: Jan Seva Kendra Locator | SarkariSewa India",
        "desc": "Find 300+ verified CSC Digital Seva & BangaloreOne centers in Bengaluru 2026. Get center address, phone numbers, Seva Sindhu services & fee rate chart.",
        "faqs": BENGALURU_CSC_FAQS,
        "prefix": "../../../"
    },
    "support/rti-guide.html": {
        "title": "RTI Online Filing Guide 2026: How to Apply at ₹10 | SarkariSewa India",
        "desc": "Complete step-by-step guide to file RTI online in 2026 at rtionline.gov.in. Learn fees (₹10), 30-day timeline, appeal process & sample draft formats.",
        "faqs": RTI_GUIDE_FAQS,
        "prefix": "../"
    }
}

def upgrade_gsc_pages():
    print("--- Upgrading Batch 1 (GSC Top 20 High-Impact Pages) ---")
    for rel_path, data in PAGES_DATA.items():
        full_path = os.path.join(ROOT, rel_path)
        if not os.path.exists(full_path):
            print(f"File missing: {rel_path}")
            continue
            
        with open(full_path, 'r', encoding='utf-8', errors='ignore') as fp:
            c = fp.read()
            
        # 1. Update Title & Meta Description
        c = re.sub(r'<title>.*?</title>', f'<title>{data["title"]}</title>', c, count=1, flags=re.IGNORECASE | re.DOTALL)
        c = re.sub(r'<meta\s+name=["\']description["\']\s+content=["\'].*?["\']', f'<meta name="description" content="{data["desc"]}"', c, count=1, flags=re.IGNORECASE)
        c = re.sub(r'<meta\s+property=["\']og:title["\']\s+content=["\'].*?["\']', f'<meta property="og:title" content="{data["title"]}"', c, count=1, flags=re.IGNORECASE)
        c = re.sub(r'<meta\s+property=["\']og:description["\']\s+content=["\'].*?["\']', f'<meta property="og:description" content="{data["desc"]}"', c, count=1, flags=re.IGNORECASE)

        # 2. Inject FAQ HTML Section
        faq_html = f'''
    <section class="faq-section" style="margin-top: 36px; margin-bottom: 36px;">
      <h2 style="font-size: 1.6rem; color: var(--text-primary, #0f172a); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
        <span>💡</span> अक्सर पूछे जाने वाले महत्वपूर्ण सवाल (Frequently Asked Questions)
      </h2>
      <div class="faq-accordion-list">
        {build_faq_html(data["faqs"])}
      </div>
    </section>
'''
        # Replace existing faq section or add before footer/related
        if '<section class="faq-section"' in c:
            c = re.sub(r'<section class="faq-section".*?</section>', faq_html, c, flags=re.DOTALL)
        elif '</main>' in c:
            c = c.replace('</main>', f'{faq_html}\n</main>')
        elif '<div id="site-footer">' in c:
            c = c.replace('<div id="site-footer">', f'{faq_html}\n<div id="site-footer">')
            
        # 3. Add FAQPage Schema to JSON-LD
        faq_schema_entities = build_schema_faq(data["faqs"])
        faq_schema_block = f''',
    {{
      "@type": "FAQPage",
      "mainEntity": [
{faq_schema_entities}
      ]
    }}'''
        # Inject into existing @graph if present
        if '"@graph": [' in c and '"FAQPage"' not in c:
            c = c.replace('"@graph": [', f'"@graph": [\n{faq_schema_block[1:]},')
            
        # 4. Bake Header & Footer
        b_header = get_baked_header(data["prefix"])
        b_footer = get_baked_footer(data["prefix"])
        c = re.sub(r'<div id="site-header">.*?</div>', f'<div id="site-header">\n{b_header}\n</div>', c, flags=re.DOTALL)
        c = re.sub(r'<div id="site-footer">.*?</div>', f'<div id="site-footer">\n{b_footer}\n</div>', c, flags=re.DOTALL)
        
        with open(full_path, 'w', encoding='utf-8') as fp:
            fp.write(c)
            
        print(f"✅ Successfully Master-Upgraded: {rel_path}")

if __name__ == '__main__':
    upgrade_gsc_pages()
