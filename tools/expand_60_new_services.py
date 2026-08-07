import os
import json
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(r"C:\Users\Lenovo\Desktop\SarkariSewaIndia\SarkariSewa_Merged_Production")
SERVICES_JSON = ROOT / "data" / "services.json"
SITEMAP_XML = ROOT / "sitemap.xml"
SERVICE_DIR = ROOT / "service"

NEW_SERVICES_DATA = [
    # --- Category 1: identity-documents ---
    {
        "id": "abha-health-card",
        "slug": "abha-health-card",
        "category": "identity-documents",
        "name": {"hi": "आभा डिजिटल हेल्थ कार्ड (ABHA Health Card)", "en": "ABHA Digital Health Card (Ayushman Bharat)"},
        "description": {"hi": "आयुष्मान भारत डिजिटल मिशन के तहत 14 अंकों का डिजिटल हेल्थ आईडी कार्ड बनाएं।", "en": "Create your 14-digit digital health ID under Ayushman Bharat Digital Mission."},
        "gov_link": "https://abhadm.gov.in/",
        "processing_time": "तत्काल (Instant Download)",
        "fees": "मुफ़्त (Free)",
        "eligibility": "भारत के सभी नागरिक (Aadhaar/Mobile Linked).",
        "documents": ["आधार कार्ड (Aadhaar Card)", "मोबाइल नंबर (Mobile Number)"]
    },
    {
        "id": "smart-card-driving-license",
        "slug": "smart-card-driving-license",
        "category": "identity-documents",
        "name": {"hi": "स्मार्ट कार्ड ड्राइविंग लाइसेंस (Smart Card DL)", "en": "Smart Card Driving License Online"},
        "description": {"hi": "परिवहन सेवा पोर्टल से पुराना कागजी लाइसेंस स्मार्ट कार्ड चिप DL में बदलें।", "en": "Convert paper Driving License into a Microchip Smart Card DL via Parivahan."},
        "gov_link": "https://parivahan.gov.in/",
        "processing_time": "15-30 दिन",
        "fees": "₹200 - ₹400",
        "eligibility": "वैध ड्राइविंग लाइसेंस धारक नागरिक।",
        "documents": ["मौजूदा DL नंबर", "आधार कार्ड", "पासपोर्ट फोटो"]
    },
    {
        "id": "minority-certificate",
        "slug": "minority-certificate",
        "category": "identity-documents",
        "name": {"hi": "अल्पसंख्यक समुदाय प्रमाण पत्र (Minority Certificate)", "en": "Minority Community Certificate Online"},
        "description": {"hi": "मुस्लिम, सिख, ईसाई, बौद्ध, जैन व पारसी नागरिकों के लिए अल्पसंख्यक प्रमाण पत्र।", "en": "Official Minority Community Certificate for Muslim, Sikh, Christian, Jain, Buddhist & Parsi citizens."},
        "gov_link": "https://edistrict.gov.in/",
        "processing_time": "10-15 दिन",
        "fees": "₹20 - ₹50",
        "eligibility": "अल्पसंख्यक समुदाय के भारतीय नागरिक।",
        "documents": ["आधार कार्ड", "स्कूल टीसी/शपथ पत्र", "निवास प्रमाण पत्र"]
    },
    {
        "id": "migrant-worker-registration",
        "slug": "migrant-worker-registration",
        "category": "identity-documents",
        "name": {"hi": "ई-श्रम प्रवासी मजदूर पहचान पत्र (Migrant Worker ID)", "en": "e-Shram Migrant Worker Registration"},
        "description": {"hi": "प्रवासी और असंगठित क्षेत्र के श्रमिकों के लिए राष्ट्रीय पहचान पत्र व ₹2 लाख दुर्घटना बीमा।", "en": "National ID card & ₹2 Lakh accident cover for unorganized and migrant workers."},
        "gov_link": "https://eshram.gov.in/",
        "processing_time": "तत्काल (Instant)",
        "fees": "मुफ़्त (Free)",
        "eligibility": "16-59 वर्ष की आयु के असंगठित मजदूर।",
        "documents": ["आधार कार्ड", "बैंक पासबुक", "मोबाइल नंबर"]
    },
    {
        "id": "senior-citizen-identity-card",
        "slug": "senior-citizen-identity-card",
        "category": "identity-documents",
        "name": {"hi": "वरिष्ठ नागरिक पहचान पत्र (Senior Citizen ID Card)", "en": "National Senior Citizen Identity Card"},
        "description": {"hi": "60 वर्ष से अधिक आयु के बुजुर्गों के लिए यात्रा, अस्पताल और पेंशन में विशेष छूट हेतु कार्ड।", "en": "Official Senior Citizen ID for travel concessions, hospital priority, and welfare benefits."},
        "gov_link": "https://socialjustice.gov.in/",
        "processing_time": "7-14 दिन",
        "fees": "मुफ़्त (Free)",
        "eligibility": "60 वर्ष या उससे अधिक आयु के भारतीय नागरिक।",
        "documents": ["आयु प्रमाण (जन्म प्रमाण/पैन/आधार)", "निवास प्रमाण", "ब्लड ग्रुप रिपोर्ट"]
    },
    {
        "id": "transgender-certificate-identity-card",
        "slug": "transgender-certificate-identity-card",
        "category": "identity-documents",
        "name": {"hi": "ट्रांसजेंडर पहचान पत्र व प्रमाण पत्र (Transgender ID)", "en": "National Transgender Certificate & ID Card"},
        "description": {"hi": "सामाजिक न्याय मंत्रालय के राष्ट्रीय पोर्टल से आधिकारिक ट्रांसजेंडर पहचान पत्र आवेदन।", "en": "Apply for official Transgender Identity Card & Certificate from Ministry of Social Justice."},
        "gov_link": "https://transgender.dosje.gov.in/",
        "processing_time": "30 दिन",
        "fees": "मुफ़्त (Free)",
        "eligibility": "भारत का ट्रांसजेंडर नागरिक।",
        "documents": ["आधार कार्ड/वोटर आईडी", "शपथ पत्र (Affidavit)", "पासपोर्ट फोटो"]
    },
    {
        "id": "farmer-id-card-agristack",
        "slug": "farmer-id-card-agristack",
        "category": "identity-documents",
        "name": {"hi": "किसान पहचान पत्र (AgriStack Farmer ID Card)", "en": "Digital Farmer ID Card (AgriStack)"},
        "description": {"hi": "डिजिटल कृषि मिशन के तहत किसान की जमीन और फसल रिकॉर्ड से लिंक 12 अंकों का डिजिटल कार्ड।", "en": "Unique 12-digit Digital Farmer ID linked to land records for direct fertilizer & crop subsidies."},
        "gov_link": "https://agristack.gov.in/",
        "processing_time": "तत्काल (Instant)",
        "fees": "मुफ़्त (Free)",
        "eligibility": "भूमि स्वामी या बटाईदार किसान।",
        "documents": ["खसरा/खतौनी जमीन पर्चा", "आधार कार्ड", "बैंक खाता"]
    },
    {
        "id": "street-vendor-identity-card",
        "slug": "street-vendor-identity-card",
        "category": "identity-documents",
        "name": {"hi": "पीएम स्वनिधि विक्रेता पहचान पत्र (Vendor QR Card)", "en": "PM SVANidhi Street Vendor ID Card"},
        "description": {"hi": "रेहड़ी-पटरी और स्ट्रीट वेंडर्स के लिए नगर निगम स्वीकृत डिजिटल वेंडर कार्ड।", "en": "Municipal approved Digital Street Vendor ID Card & QR Code for PM SVANidhi micro-loans."},
        "gov_link": "https://pmsvanidhi.mohua.gov.in/",
        "processing_time": "7-10 दिन",
        "fees": "मुफ़्त (Free)",
        "eligibility": "शहरी या अर्ध-शहरी क्षेत्रों के रेहड़ी-पटरी विक्रेता।",
        "documents": ["आधार कार्ड", "सर्वे रसीद/सिफारिश पत्र", "बैंक खाता"]
    },
    {
        "id": "state-domicile-praman-patra",
        "slug": "state-domicile-praman-patra",
        "category": "identity-documents",
        "name": {"hi": "मूल निवास प्रमाण पत्र (State Domicile Certificate)", "en": "Permanent Residence Domicile Certificate"},
        "description": {"hi": "राज्य में न्यूनतम 10-15 वर्ष से निवास का आधिकारिक सरकारी प्रमाण पत्र।", "en": "Official State Domicile Certificate required for state jobs, quota admissions and schemes."},
        "gov_link": "https://edistrict.gov.in/",
        "processing_time": "15 दिन",
        "fees": "₹30 - ₹50",
        "eligibility": "राज्य में 10 वर्ष से अधिक निवासी नागरिक या छात्र।",
        "documents": ["राशन कार्ड/बिजली बिल", "10वीं मार्कशीट/आधार", "पटवारी रिपोर्ट"]
    },
    {
        "id": "e-voter-epic-download",
        "slug": "e-voter-epic-download",
        "category": "identity-documents",
        "name": {"hi": "डिजिटल ई-एपिक वोटर कार्ड (e-EPIC Download)", "en": "Digital e-EPIC Voter ID Card Download"},
        "description": {"hi": "चुनाव आयोग के मतदाता सेवा पोर्टल से ओरिजिनल डिजिटल वोटर आईडी पीडीएफ़ डाउनलोड करें।", "en": "Download official PDF digital e-EPIC Voter Card directly from Election Commission of India."},
        "gov_link": "https://voters.eci.gov.in/",
        "processing_time": "तत्काल (Instant)",
        "fees": "मुफ़्त (Free)",
        "eligibility": "पंजीकृत मतदाता जिनका मोबाइल नंबर वोटर लिस्ट में लिंक है।",
        "documents": ["EPIC नंबर या रेफरेंस नंबर", "ओटीपी हेतु मोबाइल"]
    },

    # --- Category 2: government-schemes ---
    {
        "id": "pm-vishwakarma-yojana-apply",
        "slug": "pm-vishwakarma-yojana-apply",
        "category": "government-schemes",
        "name": {"hi": "पीएम विश्वकर्मा योजना 2026 (PM Vishwakarma Scheme)", "en": "PM Vishwakarma Toolkit & Credit Subsidy Scheme"},
        "description": {"hi": "18 पारंपरिक कारीगरों (बढ़ई, लोहार, दर्जी, राजमिस्त्री) के लिए ₹15,000 टूलकिट व ₹3 लाख 5% लोन।", "en": "₹15,000 toolkit incentive & ₹3 Lakh loan at 5% interest for 18 traditional artisan trades."},
        "gov_link": "https://pmvishwakarma.gov.in/",
        "processing_time": "15-30 दिन",
        "fees": "मुफ़्त (Free)",
        "eligibility": "18 पारंपरिक व्यवसायों से जुड़े 18 वर्ष से अधिक आयु के कारीगर।",
        "documents": ["आधार कार्ड", "बैंक पासबुक", "मोबाइल नंबर", "कौशल प्रमाण/ग्राम पंचायत सिफारिश"]
    },
    {
        "id": "pm-surya-ghar-muft-bijli",
        "slug": "pm-surya-ghar-muft-bijli",
        "category": "government-schemes",
        "name": {"hi": "पीएम सूर्य घर मुफ्त बिजली योजना (PM Surya Ghar)", "en": "PM Surya Ghar 300 Units Free Solar Scheme"},
        "description": {"hi": "छत पर सोलर पैनल लगाने हेतु ₹78,000 तक की सरकारी सब्सिडी और 300 यूनिट मुफ्त बिजली।", "en": "Up to ₹78,000 subsidy & 300 units free monthly solar electricity for households."},
        "gov_link": "https://pmsuryaghar.gov.in/",
        "processing_time": "30 दिन",
        "fees": "मुफ़्त (Free)",
        "eligibility": "स्वयं के मकान की छत वाले भारतीय नागरिक।",
        "documents": ["बिजली बिल", "छत की फोटो", "आधार कार्ड", "बैंक पासबुक"]
    },
    {
        "id": "pm-pranam-yojana",
        "slug": "pm-pranam-yojana",
        "category": "government-schemes",
        "name": {"hi": "पीएम प्रणाम योजना (PM PRANAM Fertilizer Scheme)", "en": "PM PRANAM Organic Farming Subsidy Scheme"},
        "description": {"hi": "रासायनिक उर्वरकों का उपयोग कम करने व जैविक खेती हेतु राज्यों और किसानों को अनुदान।", "en": "Government incentive scheme to promote bio-fertilizers and organic farming practices."},
        "gov_link": "https://fertilizer.gov.in/",
        "processing_time": "योजना आधारित",
        "fees": "मुफ़्त (Free)",
        "eligibility": "पंजीकृत किसान एवं कृषि सहकारी समितियां।",
        "documents": ["किसान पंजीकरण आईडी", "भूमि दस्तावेज", "आधार"]
    },
    {
        "id": "standup-india-sc-st-women-loan",
        "slug": "standup-india-sc-st-women-loan",
        "category": "government-schemes",
        "name": {"hi": "स्टैंड-अप इंडिया लोन योजना (Stand-Up India Scheme)", "en": "Stand-Up India SC/ST & Women Business Loan"},
        "description": {"hi": "SC/ST एवं महिला उद्यमियों को ₹10 लाख से ₹1 करोड़ तक का ग्रीनफ़ील्ड व्यवसाय लोन।", "en": "Bank loans between ₹10 Lakh to ₹1 Crore for SC/ST and Women entrepreneurs setting up new ventures."},
        "gov_link": "https://www.standupmitra.in/",
        "processing_time": "30-45 दिन",
        "fees": "प्रोसेसिंग फीस बैंक नीति अनुसार",
        "eligibility": "18+ वर्ष के SC/ST या महिला उद्यमी (नया प्रोजेक्ट)।",
        "documents": ["प्रोजेक्ट रिपोर्ट", "जाति प्रमाण पत्र", "पैन/आधार", "कंपनी रजिस्ट्रेशन"]
    },
    {
        "id": "pm-kisan-maan-dhan-yojana",
        "slug": "pm-kisan-maan-dhan-yojana",
        "category": "government-schemes",
        "name": {"hi": "पीएम किसान मानधन योजना (PM-KMDY Pension)", "en": "PM Kisan Maandhan Farmers Pension Scheme"},
        "description": {"hi": "छोटे और सीमांत किसानों के लिए 60 वर्ष की आयु के बाद ₹3,000 प्रति माह गारंटीकृत पेंशन।", "en": "Guaranteed ₹3,000 monthly pension for small & marginal farmers after age 60."},
        "gov_link": "https://pmkmdy.gov.in/",
        "processing_time": "तत्काल पंजीकरण",
        "fees": "₹55 - ₹200 मासिक अंशदान (बराबर सरकारी सहयोग)",
        "eligibility": "18-40 वर्ष की आयु के 2 हेक्टेयर तक भूमि वाले किसान।",
        "documents": ["आधार कार्ड", "PM-Kisan खाता/बैंक पासबुक", "खसरा खतौनी"]
    },
    {
        "id": "mahila-samman-bachat-patra",
        "slug": "mahila-samman-bachat-patra",
        "category": "government-schemes",
        "name": {"hi": "महिला सम्मान बचत पत्र योजना 2026 (MSSC Post Office)", "en": "Mahila Samman Savings Certificate Scheme"},
        "description": {"hi": "महिलाओं एवं बालिकाओं के लिए डाकघर में 7.5% उच्च ब्याज दर वाली 2 वर्षीय लघु बचत योजना।", "en": "Special 2-year post office deposit scheme for women with guaranteed 7.5% interest rate."},
        "gov_link": "https://www.indiapost.gov.in/",
        "processing_time": "तत्काल डाकघर खाता",
        "fees": "मुफ़्त खाता (न्यूनतम ₹1,000 जमा)",
        "eligibility": "भारत की कोई भी महिला या नाबालिग बालिका के नाम अभिभावक।",
        "documents": ["आधार कार्ड", "पैन कार्ड", "पासपोर्ट फोटो", "केवाईसी फॉर्म"]
    },
    {
        "id": "pm-ebus-sewa-scheme",
        "slug": "pm-ebus-sewa-scheme",
        "category": "government-schemes",
        "name": {"hi": "पीएम-ईबस सेवा योजना (PM-eBus Sewa)", "en": "PM-eBus Sewa Electric City Bus Infrastructure"},
        "description": {"hi": "शहरों में 10,000 ई-बसें चलाकर प्रदूषण मुक्त सार्वजनिक परिवहन को बढ़ावा देने की केंद्रीय योजना।", "en": "Central scheme deploying 10,000 electric buses in 169 cities for green urban transport."},
        "gov_link": "https://mohua.gov.in/",
        "processing_time": "शहरी निकाय स्तर",
        "fees": "N/A",
        "eligibility": "शहरी परिवहन निकाय व नागरिक।",
        "documents": ["N/A (सूचनात्मक योजना)"]
    },
    {
        "id": "pm-poshan-shakti-nirman",
        "slug": "pm-poshan-shakti-nirman",
        "category": "government-schemes",
        "name": {"hi": "पीएम पोषण शक्ति निर्माण योजना (PM POSHAN Scheme)", "en": "PM POSHAN School Mid-Day Meal Scheme"},
        "description": {"hi": "सरकारी व सहायता प्राप्त स्कूलों के बालकों के लिए पौष्टिक गर्म भोजन की राष्ट्रीय योजना।", "en": "National flagship nutrition scheme providing hot cooked meals to school children."},
        "gov_link": "https://pmposhan.education.gov.in/",
        "processing_time": "स्कूल स्तर",
        "fees": "मुफ़्त",
        "eligibility": "कक्षा 1 से 8 तक के सरकारी स्कूल छात्र।",
        "documents": ["स्कूल नामांकन संख्या"]
    },
    {
        "id": "namaste-scheme-sewer-workers",
        "slug": "namaste-scheme-sewer-workers",
        "category": "government-schemes",
        "name": {"hi": "नमस्ते योजना - सफाई मित्र सुरक्षा (NAMASTE Scheme)", "en": "NAMASTE Sanitation Worker Safety Scheme"},
        "description": {"hi": "सीवर एवं सेप्टिक टैंक की यांत्रिक सफाई व सफाई कर्मचारियों का ₹5 लाख स्वास्थ्य बीमा व पीपीई किट।", "en": "Zero manual scavenging initiative with ₹5 Lakh health insurance & mechanization equipment for sanitation workers."},
        "gov_link": "https://socialjustice.gov.in/",
        "processing_time": "15 दिन",
        "fees": "मुफ़्त",
        "eligibility": "सफाई कर्मचारी व सीवर स्वच्छता कार्यकर्ता।",
        "documents": ["आधार कार्ड", "सफाई कर्मचारी आईडी", "बैंक खाता"]
    },
    {
        "id": "pm-devine-scheme-northeast",
        "slug": "pm-devine-scheme-northeast",
        "category": "government-schemes",
        "name": {"hi": "पीएम-डिवाइन योजना उत्तर पूर्व (PM-DevINE Scheme)", "en": "PM-DevINE Infrastructure Development Scheme"},
        "description": {"hi": "पूर्वोत्तर राज्यों में बुनियादी ढाँचे, सड़कों और आजीविका परियोजनाओं हेतु 100% केंद्रीय अनुदान।", "en": "100% central funding scheme for infrastructure, social development & youth employment in North East states."},
        "gov_link": "https://mdoner.gov.in/",
        "processing_time": "परियोजना स्तर",
        "fees": "N/A",
        "eligibility": "उत्तर पूर्व राज्यों के नागरिक व संस्थाएं।",
        "documents": ["राज्य निवासी प्रमाण", "प्रोजेक्ट रिपोर्ट"]
    },

    # --- Category 3: finance-tax ---
    {
        "id": "tms-advance-tax-payment",
        "slug": "tms-advance-tax-payment",
        "category": "finance-tax",
        "name": {"hi": "एडवांस टैक्स ऑनलाइन भुगतान (e-Pay Advance Tax)", "en": "Online Advance Tax Payment (e-Pay Tax)"},
        "description": {"hi": "आयकर पोर्टल से 15 जून, 15 सितंबर, 15 दिसंबर व 15 मार्च की किश्तों में एडवांस टैक्स भरें।", "en": "Pay quarterly advance income tax online via NSDL / Income Tax e-Pay Tax portal."},
        "gov_link": "https://www.eportal.incometax.gov.in/",
        "processing_time": "तत्काल चालान रसीद",
        "fees": "टैक्स देयता अनुसार",
        "eligibility": "जिनकी वार्षिक आयकर देयता ₹10,000 से अधिक है।",
        "documents": ["पैन कार्ड", "नेट बैंकिंग/यूपीआई", "आय गणना शीट"]
    },
    {
        "id": "eis-employee-insurance-claim",
        "slug": "eis-employee-insurance-claim",
        "category": "finance-tax",
        "name": {"hi": "ईएससी कर्मचारी राज्य बीमा दावा (ESIC Claim Portal)", "en": "ESIC Medical & Cash Benefit Online Claim"},
        "description": {"hi": "ईएसआई कॉर्पोरेशन से मुफ्त इलाज, बीमारी भत्ता और दुर्घटना मुआबजा ऑनलाइन दावा करें।", "en": "File online ESIC medical reimbursement, sickness benefit, and maternity benefit claims."},
        "gov_link": "https://www.esic.gov.in/",
        "processing_time": "15-21 दिन",
        "fees": "मुफ़्त",
        "eligibility": "₹21,000 तक मासिक वेतन वाले ईएसआई बीमाकृत कर्मचारी।",
        "documents": ["ईएसआई पहचान पत्र (Pehchan Card)", "मेडिकल पर्चा/बिल", "बैंक पासबुक"]
    },
    {
        "id": "gst-lut-filing-export",
        "slug": "gst-lut-filing-export",
        "category": "finance-tax",
        "name": {"hi": "जीएसटी एलयूटी लेटर ऑफ अंडरटेकिंग (GST LUT Filing)", "en": "GST LUT Online Filing for Zero-Rated Exports"},
        "description": {"hi": "बिना जीएसटी चुकाए निर्यात और एसईजेड आपूर्ति हेतु वार्षिक Form GST RFD-11 ऑनलाइन भरें।", "en": "File Form GST RFD-11 online for exporting goods & services without IGST payment."},
        "gov_link": "https://www.gst.gov.in/",
        "processing_time": "तत्काल (Instant Ack)",
        "fees": "मुफ़्त",
        "eligibility": "वैध जीएसटी पंजीकृत निर्यातक या सेवा प्रदाता।",
        "documents": ["जीएसटीएन लॉगिन", "गवाहों के डिजिटल हस्ताक्षर/ईवीसी", "पिछला निर्यात रिकॉर्ड"]
    },
    {
        "id": "sovereign-gold-bond-online",
        "slug": "sovereign-gold-bond-online",
        "category": "finance-tax",
        "name": {"hi": "सोवरेन गोल्ड बॉन्ड आरबीआई (Sovereign Gold Bond SGB)", "en": "RBI Sovereign Gold Bond Online Investment"},
        "description": {"hi": "आरबीआई द्वारा जारी 2.5% वार्षिक ब्याज व 100% टैक्स फ्री कैपिटल गेन वाली गोल्ड बॉन्ड योजना।", "en": "RBI issued government gold bonds offering 2.5% fixed interest and tax-free maturity returns."},
        "gov_link": "https://www.rbi.org.in/",
        "processing_time": "इश्यू तिथि पर आबंटन",
        "fees": "₹50/ग्राम ऑनलाइन छूट",
        "eligibility": "भारतीय निवासी व्यक्ति, एचयूएफ, ट्रस्ट व धर्मार्थ संस्थाएं।",
        "documents": ["पैन कार्ड", "आधार कार्ड", "डीमैट/बैंक खाता"]
    },
    {
        "id": "udyam-msme-re-registration",
        "slug": "udyam-msme-re-registration",
        "category": "finance-tax",
        "name": {"hi": "उद्योग आधार / उद्यम एमएसएमई नवीनीकरण (Udyam Certificate Download)", "en": "Udyam MSME Certificate Download & Renewal"},
        "description": {"hi": "एमएसएमई मंत्रालय के पोर्टल से उद्यम प्रमाण पत्र डाउनलोड व विवरण अपडेट करें।", "en": "Download, print & update official Ministry of MSME Udyam Registration Certificate."},
        "gov_link": "https://udyamregistration.gov.in/",
        "processing_time": "तत्काल पीडीएफ़",
        "fees": "मुफ़्त (Free)",
        "eligibility": "सूक्ष्म, लघु व मध्यम उद्यम मालिक।",
        "documents": ["उद्यम रजिस्ट्रेशन नंबर", "आधार से लिंक मोबाइल"]
    },
    {
        "id": "ais-annual-information-statement",
        "slug": "ais-annual-information-statement",
        "category": "finance-tax",
        "name": {"hi": "वार्षिक सूचना विवरण (AIS / TIS Income Tax)", "en": "Annual Information Statement (AIS) Download"},
        "description": {"hi": "आयकर पोर्टल से अपने सभी बैंक ब्याज, शेयर, म्यूचुअल फंड व टीडीएस लेनदेन का विवरण डाउनलोड करें।", "en": "View & download Comprehensive Annual Information Statement (AIS) for ITR filing."},
        "gov_link": "https://www.incometax.gov.in/",
        "processing_time": "तत्काल",
        "fees": "मुफ़्त",
        "eligibility": "पैन धारक आयकरदाता।",
        "documents": ["पैन कार्ड", "इनकम टैक्स ई-फाइलिंग पासवर्ड"]
    },
    {
        "id": "nps-tier2-account-activation",
        "slug": "nps-tier2-account-activation",
        "category": "finance-tax",
        "name": {"hi": "एनपीएस टियर-2 खाता ऑनलाइन (NPS Tier-II Activation)", "en": "National Pension System NPS Tier-II Online Account"},
        "description": {"hi": "एनपीएस टियर-1 खाताधारकों के लिए बिना किसी लॉक-इन के फ्लेक्सिबल निवेश टियर-2 खाता।", "en": "Activate voluntary withdrawable investment Tier-II account for existing PRAN holders."},
        "gov_link": "https://enps.nsdl.com/",
        "processing_time": "24 घंटे",
        "fees": "न्यूनतम ₹250 प्रथम जमा",
        "eligibility": "सक्रिय PRAN टियर-1 एनपीएस खाताधारक।",
        "documents": ["PRAN कार्ड नंबर", "पैन/आधार", "रद्द चेक (Cancelled Cheque)"]
    },
    {
        "id": "epfo-higher-pension-option",
        "slug": "epfo-higher-pension-option",
        "category": "finance-tax",
        "name": {"hi": "ईपीएफओ उच्च पेंशन संयुक्त विकल्प (EPFO Higher Pension EPS-95)", "en": "EPFO EPS-95 Higher Pension Joint Option"},
        "description": {"hi": "वास्तविक वेतन पर पेंशन पाने के लिए ईपीएफओ यूनिफाइड पोर्टल से ऑनलाइन आवेदन ट्रेस करें।", "en": "Submit and track EPS-95 Higher Pension joint option application on EPFO Portal."},
        "gov_link": "https://unifiedportal-mem.epfindia.gov.in/",
        "processing_time": "विभाग सत्यापन अनुसार",
        "fees": "मुफ़्त",
        "eligibility": "1 सितम्बर 2014 से पूर्व ईपीएफओ सदस्य रहे कर्मचारी।",
        "documents": ["UAN नंबर", "कंपनी सहमति पत्र", "पीएफ पासबुक"]
    },
    {
        "id": "form-15g-15h-submission",
        "slug": "form-15g-15h-submission",
        "category": "finance-tax",
        "name": {"hi": "फॉर्म 15G / 15H ऑनलाइन जमा (TDS Zero Deduction Form)", "en": "Form 15G / 15H Zero Tax Deduction Submission"},
        "description": {"hi": "बैंक एफडी/ईपीएफ पर बिना टैक्स कटौती के ब्याज पाने हेतु फॉर्म 15G (वरिष्ठ नागरिक हेतु 15H) भरें।", "en": "Submit Form 15G / 15H online to banks and EPFO to prevent TDS deduction on interest."},
        "gov_link": "https://www.incometax.gov.in/",
        "processing_time": "तत्काल बैंक कन्फर्मेशन",
        "fees": "मुफ़्त",
        "eligibility": "जिनकी कुल आय कर योग्य सीमा से कम है।",
        "documents": ["पैन कार्ड", "बैंक खाता विवरण", "अनुमानित वार्षिक आय"]
    },
    {
        "id": "cgstmse-loan-guarantee",
        "slug": "cgstmse-loan-guarantee",
        "category": "finance-tax",
        "name": {"hi": "सीजीटीएमएसई बिना गारंटी बिजनेस लोन (CGTMSE Coverage)", "en": "CGTMSE Collateral-Free Credit Guarantee Scheme"},
        "description": {"hi": "सूक्ष्म व लघु उद्योगों को बिना संपत्ति गिरवी रखे ₹5 करोड़ तक का बैंक लोन गारंटी कवर।", "en": "Government credit guarantee cover up to ₹5 Crore for MSME business loans without collateral."},
        "gov_link": "https://www.cgtmse.in/",
        "processing_time": "बैंक लोन प्रक्रिया अनुसार",
        "fees": "गारंटी फीस (0.37% - 1.35%)",
        "eligibility": "सूक्ष्म व लघु उद्योग (MSME Units).",
        "documents": ["प्रोजेक्ट रिपोर्ट", "उद्यम आधार", "कंपनी वित्तीय विवरण"]
    },

    # --- Category 4: jobs-education ---
    {
        "id": "pm-internship-scheme",
        "slug": "pm-internship-scheme",
        "category": "jobs-education",
        "name": {"hi": "पीएम इंटर्नशिप योजना 2026 (PM Internship Scheme)", "en": "PM Internship Scheme Top 500 Companies"},
        "description": {"hi": "भारत की शीर्ष 500 कंपनियों में 12 महीने की इंटर्नशिप, ₹5,000 प्रति माह स्टाइपेंड व ₹6,000 सहायता।", "en": "12-month paid internship in India's top 500 companies with ₹5,000 monthly stipend."},
        "gov_link": "https://pminternship.mca.gov.in/",
        "processing_time": "बैच अनुसार आबंटन",
        "fees": "मुफ़्त (Free)",
        "eligibility": "21 से 24 वर्ष के 10वीं/12वीं/आईटीआई/डिप्लोमा/स्नातक युवा।",
        "documents": ["आधार कार्ड", "शैक्षणिक अंकसूची", "बैंक पासबुक", "सीवी/रेज़्यूमे"]
    },
    {
        "id": "vidya-lakshmi-education-loan",
        "slug": "vidya-lakshmi-education-loan",
        "category": "jobs-education",
        "name": {"hi": "विद्या लक्ष्मी पोर्टल शिक्षा ऋण (Vidya Lakshmi Education Loan)", "en": "Vidya Lakshmi National Portal for Education Loans"},
        "description": {"hi": "भारत व विदेश में उच्च शिक्षा हेतु 40+ बैंकों से लोन के लिए एक ही एकल आवेदन पोर्टल।", "en": "Single window portal to apply for education loans across 40+ nationalized banks."},
        "gov_link": "https://www.vidyalakshmi.co.in/",
        "processing_time": "15-30 दिन",
        "fees": "बैंक नीति अनुसार",
        "eligibility": "मान्यता प्राप्त कॉलेज/यूनिवर्सिटी में प्रवेश पाने वाले भारतीय छात्र।",
        "documents": ["कॉलेज अलॉटमेंट लेटर", "फीस स्ट्रक्चर", "10वीं/12वीं मार्कशीट", "अभिभावक आय प्रमाण"]
    },
    {
        "id": "pm-shri-schools-portal",
        "slug": "pm-shri-schools-portal",
        "category": "jobs-education",
        "name": {"hi": "पीएम श्री स्कूल योजना (PM SHRI Schools Portal)", "en": "PM SHRI Schools Development & Teacher Grants"},
        "description": {"hi": "राष्ट्रीय शिक्षा नीति NEP 2020 के तहत देश के 14,500 मॉडल पीएम श्री स्कूलों की सूची व अनुदान।", "en": "14,500 PM SHRI exemplar schools developed under NEP 2020 with modern smart labs & sports."},
        "gov_link": "https://pmshrischools.education.gov.in/",
        "processing_time": "सूचनात्मक",
        "fees": "N/A",
        "eligibility": "छात्र, शिक्षक व स्कूल प्रशासन।",
        "documents": ["N/A"]
    },
    {
        "id": "swayam-nptel-free-courses",
        "slug": "swayam-nptel-free-courses",
        "category": "jobs-education",
        "name": {"hi": "स्वयं एनपीटीईएल मुफ्त ऑनलाइन कोर्स (SWAYAM NPTEL Courses)", "en": "SWAYAM Free Online Government Certification Courses"},
        "description": {"hi": "आईआईटी व आईआईएम के प्रोफेसरों द्वारा मुफ्त ऑनलाइन कोर्स व यूजीसी क्रेडिट ट्रांसफर सर्टिफिकेट।", "en": "Free online courses by IIT & IIM faculty with UGC academic credit transfer."},
        "gov_link": "https://swayam.gov.in/",
        "processing_time": "कोर्स अवधि अनुसार",
        "fees": "निःशुल्क कोर्स (परीक्षा शुल्क ₹1,000 ऐच्छिक)",
        "eligibility": "हाईस्कूल, कॉलेज छात्र या पेशेवर कोई भी।",
        "documents": ["ईमेल आईडी", "मोबाइल नंबर", "कॉलेज नाम"]
    },
    {
        "id": "ncs-national-career-service",
        "slug": "ncs-national-career-service",
        "category": "jobs-education",
        "name": {"hi": "राष्ट्रीय करियर सेवा पोर्टल (National Career Service NCS)", "en": "National Career Service NCS Job & Job Fair Portal"},
        "description": {"hi": "श्रम मंत्रालय का सरकारी जॉब पोर्टल, जहाँ देश भर के रोजगार मेले व करियर काउंसलिंग मिलती है।", "en": "Ministry of Labour job portal providing employment exchanges, job fairs and career counseling."},
        "gov_link": "https://www.ncs.gov.in/",
        "processing_time": "तत्काल जॉब अलर्ट",
        "fees": "मुफ़्त",
        "eligibility": "18+ वर्ष के नौकरी तलाशने वाले अभ्यर्थी।",
        "documents": ["आधार कार्ड", "शैक्षणिक प्रमाण पत्र", "रेज़्यूमे"]
    },
    {
        "id": "post-matric-scholarship-obc-ebc",
        "slug": "post-matric-scholarship-obc-ebc",
        "category": "jobs-education",
        "name": {"hi": "उत्तर-मैट्रिक छात्रवृत्ति ओबीसी/ईबीसी (Post-Matric Scholarship)", "en": "Central Post-Matric Scholarship for OBC / EBC Students"},
        "description": {"hi": "11वीं, 12वीं, आईटीआई, ग्रेजुएशन व पोस्ट ग्रेजुएशन करने वाले पिछड़ा वर्ग के छात्रों को फीस प्रतिपूर्ति।", "en": "Fee reimbursement & maintenance allowance for OBC, EBC & DNT students pursuing higher studies."},
        "gov_link": "https://scholarships.gov.in/",
        "processing_time": "30-60 दिन",
        "fees": "मुफ़्त",
        "eligibility": "वार्षिक पारिवारिक आय ₹2.5 लाख तक वाले ओबीसी छात्र।",
        "documents": ["जाति प्रमाण पत्र", "आय प्रमाण पत्र", "फीस रसीद", "पिछली मार्कशीट", "बैंक पासबुक"]
    },
    {
        "id": "manodarpan-student-mental-wellness",
        "slug": "manodarpan-student-mental-wellness",
        "category": "jobs-education",
        "name": {"hi": "मनोदर्पण छात्र मानसिक स्वास्थ्य सहायता (Manodarpan Portal)", "en": "Manodarpan Student Mental Health & Counseling"},
        "description": {"hi": "शिक्षा मंत्रालय का छात्रों, शिक्षकों व अभिभावकों के लिए 24x7 मुफ्त टेली-काउंसलिंग हेल्पलाइन पोर्टल।", "en": "Ministry of Education 24x7 toll-free national tele-counseling support for exam stress & mental health."},
        "gov_link": "https://manodarpan.education.gov.in/",
        "processing_time": "तत्काल कॉल (1800-890-8208)",
        "fees": "मुफ़्त",
        "eligibility": "भारत के सभी छात्र, अभिभावक व शिक्षक।",
        "documents": ["कोई दस्तावेज़ नहीं"]
    },
    {
        "id": "pragati-scholarship-girl-students",
        "slug": "pragati-scholarship-girl-students",
        "category": "jobs-education",
        "name": {"hi": "एआईसीटीई प्रगति छात्रा छात्रवृत्ति (AICTE Pragati Scholarship)", "en": "AICTE Pragati Scholarship for Girl Engineering Students"},
        "description": {"hi": "डिप्लोमा या बीटेक डिग्री करने वाली प्रतिभावान छात्राओं को प्रति वर्ष ₹50,000 की छात्रवृत्ति।", "en": "₹50,000 per annum scholarship for girl students admitted in AICTE approved technical colleges."},
        "gov_link": "https://www.aicte-india.org/",
        "processing_time": "वार्षिक सत्र अनुसार",
        "fees": "मुफ़्त",
        "eligibility": "प्रथमा/द्वितीय वर्ष बीटेक या डिप्लोमा में प्रवेशित छात्राएं (पारिवारिक आय < ₹8 लाख)।",
        "documents": ["कॉलेज अलॉटमेंट लेटर", "आय प्रमाण पत्र", "10वीं/12वीं मार्कशीट", "बैंक पासबुक"]
    },
    {
        "id": "saksham-scholarship-specially-abled",
        "slug": "saksham-scholarship-specially-abled",
        "category": "jobs-education",
        "name": {"hi": "एआईसीटीई सक्षम दिव्यांग छात्रवृत्ति (AICTE Saksham Scholarship)", "en": "AICTE Saksham Scholarship for Specially Abled Students"},
        "description": {"hi": "तकनीकी शिक्षा (B.Tech / Diploma) प्राप्त कर रहे 40% से अधिक दिव्यांग छात्रों हेतु ₹50,000 वार्षिक सहायता।", "en": "₹50,000 per year scholarship for specially-abled students (40%+ disability) in technical studies."},
        "gov_link": "https://www.aicte-india.org/",
        "processing_time": "वार्षिक आबंटन",
        "fees": "मुफ़्त",
        "eligibility": "40% से अधिक दिव्यांगता वाले तकनीकी छात्र (आय < ₹8 लाख)।",
        "documents": ["UDID दिव्यांग प्रमाण पत्र", "आय प्रमाण", "एडमिशन रसीद", "बैंक पासबुक"]
    },
    {
        "id": "tarun-skill-development-pmkvy",
        "slug": "tarun-skill-development-pmkvy",
        "category": "jobs-education",
        "name": {"hi": "पीएम कौशल विकास योजना 4.0 (PMKVY 4.0 Training)", "en": "PMKVY 4.0 Skill Training & Certificate Verification"},
        "description": {"hi": "उद्योगों के अनुकूल एआई, ड्रोन, रोबोटिक्स, कोडिंग में मुफ्त सरकारी प्रशिक्षण व प्रमाणपत्र।", "en": "Free skill training, Assessment & NCVET Certification in AI, Robotics, Drone tech under PMKVY 4.0."},
        "gov_link": "https://www.pmkvyofficial.org/",
        "processing_time": "कोर्स अनुसार (1-3 माह)",
        "fees": "मुफ़्त प्रशिक्षण + ₹5,000 भत्ता",
        "eligibility": "15 से 45 वर्ष के स्कूल/कॉलेज ड्रॉपआउट या युवा।",
        "documents": ["आधार कार्ड", "बैंक खाता", "शैक्षणिक अंकसूची"]
    },

    # --- Category 5: utilities ---
    {
        "id": "national-water-grid-jal-jeevan",
        "slug": "national-water-grid-jal-jeevan",
        "category": "utilities",
        "name": {"hi": "जल जीवन मिशन नल कनेक्शन (Jal Jeevan Tap Water)", "en": "Jal Jeevan Mission Household Tap Water Connection"},
        "description": {"hi": "हर घर जल योजना के तहत ग्रामीण व शहरी घरों में नल से जल कनेक्शन हेतु आवेदन व स्टेटस।", "en": "Apply & track functional household tap water connection under Har Ghar Jal Jeevan Mission."},
        "gov_link": "https://jaljeevanmission.gov.in/",
        "processing_time": "15-30 दिन",
        "fees": "मुफ़्त / नाममात्र कनेक्शन शुल्क",
        "eligibility": "ग्रामीण या शहरी क्षेत्र के गृहस्वामी।",
        "documents": ["आधार कार्ड", "मकान स्वामित्व पत्र/राशन कार्ड"]
    },
    {
        "id": "pm-kusam-solar-pump-apply",
        "slug": "pm-kusam-solar-pump-apply",
        "category": "utilities",
        "name": {"hi": "पीएम कुसुम सोलर पंप योजना (PM KUSUM Solar Pump)", "en": "PM KUSUM Agriculture Solar Irrigation Pump Scheme"},
        "description": {"hi": "खेती के लिए डीजल/बिजली पंप की जगह सोलर पंप लगाने पर 60% सरकारी सब्सिडी।", "en": "60% subsidy for farmers to install standalone off-grid Solar Agriculture Water Pumps."},
        "gov_link": "https://pmkusum.mnre.gov.in/",
        "processing_time": "30-60 दिन",
        "fees": "10% किसान अंशदान",
        "eligibility": "कृषि भूमि के मालिक किसान या किसान समूह।",
        "documents": ["खसरा खतौनी भू-अभिलेख", "आधार कार्ड", "बैंक पासबुक", "पासपोर्ट फोटो"]
    },
    {
        "id": "bharat-billpay-bbps-online",
        "slug": "bharat-billpay-bbps-online",
        "category": "utilities",
        "name": {"hi": "भारत बिलपे सेंट्रल पोर्टल (Bharat BillPay BBPS)", "en": "Bharat BillPay Official Central Utility Bill Portal"},
        "description": {"hi": "बिजली, पानी, गैस, फास्टैग, म्युनिसिपल टैक्स का एक ही सुरक्षित राष्ट्रीय पोर्टल से भुगतान।", "en": "NPCI Bharat BillPay one-stop interoperable bill payment ecosystem for all utility bills."},
        "gov_link": "https://www.bharatbillpay.com/",
        "processing_time": "तत्काल रसीद",
        "fees": "मुफ़्त (Free)",
        "eligibility": "भारत का कोई भी उपभोक्ता।",
        "documents": ["उपभोक्ता/कंज्यूमर नंबर"]
    },
    {
        "id": "sub-divisional-electricity-meter-shift",
        "slug": "sub-divisional-electricity-meter-shift",
        "category": "utilities",
        "name": {"hi": "बिजली मीटर नाम परिवर्तन व स्थानांतरण (Electricity Meter Shift)", "en": "Electricity Meter Name Transfer & Location Shift"},
        "description": {"hi": "राज्य विद्युत बोर्ड से बिजली मीटर का नाम बदलने या मकान बदलने पर मीटर शिफ्टिंग ऑनलाइन।", "en": "Online application for power distribution meter name transfer, load enhancement & shifting."},
        "gov_link": "https://parivahan.gov.in/",
        "processing_time": "7-15 दिन",
        "fees": "₹150 - ₹500",
        "eligibility": "वैध विद्युत उपभोक्ता या नया मकान खरीदार।",
        "documents": ["नवीनतम बिजली बिल", "रजिस्ट्री/बैनामा", "एनओसी", "आधार कार्ड"]
    },
    {
        "id": "saubhagya-free-electricity-connection",
        "slug": "saubhagya-free-electricity-connection",
        "category": "utilities",
        "name": {"hi": "प्रधानमंत्री सौभाग्य योजना (PM Saubhagya Free Power)", "en": "PM Saubhagya Free Household Electricity Connection"},
        "description": {"hi": "गरीब व बीपीएल परिवारों के लिए मुफ्त बिजली कनेक्शन एवं एलईडी बल्ब योजना।", "en": "Free electricity connection for all willing un-electrified households in rural & urban areas."},
        "gov_link": "https://saubhagya.gov.in/",
        "processing_time": "7-10 दिन",
        "fees": "मुफ़्त (गैर-बीपीएल हेतु ₹500 10 किश्तों में)",
        "eligibility": "सामाजिक आर्थिक जनगणना (SECC) में नामांकित बेघर/बिजली रहित परिवार।",
        "documents": ["आधार कार्ड", "राशन कार्ड/बीपीएल कार्ड", "मकान फोटो"]
    },
    {
        "id": "png-piped-gas-connection-apply",
        "slug": "png-piped-gas-connection-apply",
        "category": "utilities",
        "name": {"hi": "पीएनजी पाइप रसोई गैस कनेक्शन (PNG Piped Natural Gas)", "en": "PNG Piped Domestic Natural Gas New Connection"},
        "description": {"hi": "सिलेंडर के झंझट से मुक्ति — घर में 24x7 पाइप वाली प्राकृतिक रसोई गैस (PNG) कनेक्शन।", "en": "Apply online for 24x7 Piped Domestic Natural Gas (PNG) connection for home kitchen."},
        "gov_link": "https://png.pngl.in/",
        "processing_time": "7-14 दिन",
        "fees": "सुरक्षा जमा (Refundable Deposit ₹5,000-₹6,000)",
        "eligibility": "गैस नेटवर्क कवरेज क्षेत्र के निवासी।",
        "documents": ["स्वामित्व/किरायानामा प्रमाण", "आधार कार्ड", "बैंक पासबुक"]
    },
    {
        "id": "fastag-annual-kyc-update",
        "slug": "fastag-annual-kyc-update",
        "category": "utilities",
        "name": {"hi": "फास्टैग अनिवार्य केवाईसी अपडेट (FASTag One Vehicle KYC)", "en": "NHAI FASTag Mandatory Online KYC Update"},
        "description": {"hi": "एनएचएआई के 'One Vehicle One FASTag' नियम के तहत फास्टैग का ऑनलाइन केवाईसी अपडेट करें।", "en": "Update mandatory NPCI & NHAI KYC online for vehicle FASTag to avoid blacklist/deactivation."},
        "gov_link": "https://fastag.ihmcl.com/",
        "processing_time": "24-48 घंटे",
        "fees": "मुफ़्त",
        "eligibility": "सभी फास्टैग टैग धारक वाहन मालिक।",
        "documents": ["वाहन आरसी (RC Copy)", "आधार कार्ड/डीएल", "वाहन की फ्रंट फोटो"]
    },
    {
        "id": "telecom-sanchar-saathi-tafcop",
        "slug": "telecom-sanchar-saathi-tafcop",
        "category": "utilities",
        "name": {"hi": "संचार साथी मोबाइल कनेक्शन जांच (Sanchar Saathi TAFCOP)", "en": "Sanchar Saathi Mobile Connections Issued in Your Name"},
        "description": {"hi": "दूरसंचार विभाग के पोर्टल से जानें आपके नाम पर कितने सिम कार्ड चालू हैं और फर्जी सिम ब्लॉक करें।", "en": "Department of Telecommunications portal to check & block fake SIM cards registered on your Aadhaar."},
        "gov_link": "https://sancharsaathi.gov.in/",
        "processing_time": "तत्काल विवरण",
        "fees": "मुफ़्त",
        "eligibility": "भारत का कोई भी मोबाइल उपभोक्ता।",
        "documents": ["मोबाइल नंबर", "ओटीपी सत्यापन"]
    },
    {
        "id": "mparivahan-virtual-rc-dl",
        "slug": "mparivahan-virtual-rc-dl",
        "category": "utilities",
        "name": {"hi": "एम-परिवहन वर्चुअल आरसी व लाइसेंस (mParivahan Virtual RC/DL)", "en": "mParivahan Virtual Driving License & Vehicle RC"},
        "description": {"hi": "ट्रैफिक पुलिस चैकिंग हेतु आधिकारिक डिजिटल ड्राइविंग लाइसेंस व आरसी अपने फोन में रखें।", "en": "Official Ministry of Road Transport digital Virtual DL & RC valid everywhere for traffic checking."},
        "gov_link": "https://parivahan.gov.in/",
        "processing_time": "तत्काल (Instant)",
        "fees": "मुफ़्त",
        "eligibility": "वाहन मालिक व वैध लाइसेंस धारक।",
        "documents": ["आरसी नंबर / चालान नंबर", "डीएल नंबर"]
    },
    {
        "id": "city-municipal-property-tax-receipt",
        "slug": "city-municipal-property-tax-receipt",
        "category": "utilities",
        "name": {"hi": "नगर निगम गृहकर व संपत्ति कर भुगतान (Municipal Property Tax)", "en": "Municipal Property & House Tax Online Assessment"},
        "description": {"hi": "नगर निगम/नगर पालिका के ऑनलाइन ई-पोर्टल से हाउस टैक्स जमा करें व आधिकारिक रसीद लें।", "en": "Pay Municipal Property / House Tax online & download official tax assessment receipts."},
        "gov_link": "https://edistrict.gov.in/",
        "processing_time": "तत्काल रसीद",
        "fees": "मूल्यांकन टैक्स अनुसार (5-10% छूट)",
        "eligibility": "शहरी संपत्ति/मकान मालिक।",
        "documents": ["प्रॉपर्टी आईडी / पुराना टैक्स बिल", "नेट बैंकिंग/यूपीआई"]
    },

    # --- Category 6: health ---
    {
        "id": "ayushman-bharat-vayo-vandana",
        "slug": "ayushman-bharat-vayo-vandana",
        "category": "health",
        "name": {"hi": "आयुष्मान वय वंदना कार्ड 70+ वरिष्ठ नागरिक (Vayo Vandana Card)", "en": "Ayushman Vayo Vandana Card for 70+ Senior Citizens"},
        "description": {"hi": "70 वर्ष से अधिक आयु के सभी बुजुर्गों को बिना किसी आय सीमा के ₹5 लाख का मुफ्त इलाज कार्ड।", "en": "Universal ₹5 Lakh free health insurance card for all senior citizens aged 70+ regardless of income."},
        "gov_link": "https://beneficiary.nha.gov.in/",
        "processing_time": "तत्काल ई-कार्ड",
        "fees": "मुफ़्त (Free)",
        "eligibility": "70 वर्ष या उससे अधिक आयु के सभी भारतीय नागरिक।",
        "documents": ["आधार कार्ड (eKYC हेतु)", "मोबाइल नंबर"]
    },
    {
        "id": "nikshay-poshan-yojana-tb",
        "slug": "nikshay-poshan-yojana-tb",
        "category": "health",
        "name": {"hi": "निक्षय पोषण योजना टीबी सहायता (Ni-kshay Poshan Yojana)", "en": "Ni-kshay Poshan Yojana Monthly TB Financial Support"},
        "description": {"hi": "टीबी (क्षयरोग) मरीजों को इलाज के दौरान पौष्टिक आहार हेतु ₹500-₹1,000 प्रति माह प्रत्यक्ष डीबीटी सहायता।", "en": "Direct Benefit Transfer (DBT) of ₹500-₹1,000 monthly nutrition support for TB patients."},
        "gov_link": "https://nikshay.in/",
        "processing_time": "मासिक डीबीटी",
        "fees": "मुफ़्त",
        "eligibility": "सरकारी या निजी क्षेत्र में उपचार करा रहे टीबी मरीज।",
        "documents": ["निक्षय आईडी", "आधार कार्ड", "बैंक पासबुक"]
    },
    {
        "id": "jan-aushadhi-store-locator",
        "slug": "jan-aushadhi-store-locator",
        "category": "health",
        "name": {"hi": "प्रधानमंत्री जन औषधि केंद्र (PM Jan Aushadhi Kendra)", "en": "PM Jan Aushadhi Store Locator & Generic Medicine List"},
        "description": {"hi": "50% से 90% सस्ती गुणवत्तापूर्ण जेनेरिक दवाइयां खरीदने हेतु नजदीकी जन औषधि स्टोर खोजें।", "en": "Locate nearest PM Bharatiya Janaushadhi Kendra to buy high-quality generic medicines at 50-90% discount."},
        "gov_link": "https://janaushadhi.gov.in/",
        "processing_time": "तत्काल लोकेशन",
        "fees": "N/A",
        "eligibility": "सभी नागरिक।",
        "documents": ["डॉक्टर का पर्चा (दवा खरीदने हेतु)"]
    },
    {
        "id": "e-sanjeevani-teleconsultation",
        "slug": "e-sanjeevani-teleconsultation",
        "category": "health",
        "name": {"hi": "ई-संजीवनी फ्री डॉक्टर परामर्श (eSanjeevani Teleconsultation)", "en": "eSanjeevani Free Online Doctor Consultation Portal"},
        "description": {"hi": "स्वास्थ्य मंत्रालय का राष्ट्रीय पोर्टल, जहाँ घर बैठे एम्स व बड़े डॉक्टरों से मुफ्त वीडियो कॉल परामर्श लें।", "en": "Free National Telemedicine Service for video consultation with specialist doctors & e-prescription."},
        "gov_link": "https://esanjeevani.mohfw.gov.in/",
        "processing_time": "तत्काल टोकन / अपॉइंटमेंट",
        "fees": "मुफ़्त (Free)",
        "eligibility": "भारत का कोई भी नागरिक या मरीज।",
        "documents": ["मोबाइल नंबर", "पुराना मेडिकल रिकॉर्ड (यदि हो)"]
    },
    {
        "id": "udid-disability-card-download",
        "slug": "udid-disability-card-download",
        "category": "health",
        "name": {"hi": "यूडीआईडी स्वावलंबन दिव्यांग कार्ड (UDID Disability Card Download)", "en": "Unique Disability ID (UDID) Card Download & Renewal"},
        "description": {"hi": "दिव्यांग व्यक्तियों के लिए राष्ट्रीय स्वावलंबन यूडीआईडी कार्ड ऑनलाइन आवेदन व डाउनलोड करें।", "en": "Apply & download official Unique Disability ID (UDID) Card valid across all Indian states."},
        "gov_link": "https://www.swavlambancard.gov.in/",
        "processing_time": "15-30 दिन",
        "fees": "मुफ़्त",
        "eligibility": "40% या उससे अधिक दिव्यांगता वाले व्यक्ति।",
        "documents": ["दिव्यांगता प्रमाण पत्र (Disability Certificate)", "आधार कार्ड", "पासपोर्ट फोटो"]
    },
    {
        "id": "kilkari-mobile-health-audio",
        "slug": "kilkari-mobile-health-audio",
        "category": "health",
        "name": {"hi": "किलकारी मोबाइल स्वास्थ्य सेवा (Kilkari Maternal Audio)", "en": "Kilkari Weekly Maternal Health Audio Messaging"},
        "description": {"hi": "गर्भवती महिलाओं और नवजात शिशुओं की देखभाल हेतु 72 सप्ताह तक मुफ्त ऑडियो कॉल सलाह।", "en": "Free weekly interactive voice response (IVR) audio messages on pregnancy & child care."},
        "gov_link": "https://mohfw.gov.in/",
        "processing_time": "साप्ताहिक कॉल",
        "fees": "मुफ़्त",
        "eligibility": "गर्भवती महिलाएं व 1 वर्ष तक के बच्चे की माताएं।",
        "documents": ["आरसीएच (RCH) पोर्टल आईडी / मोबाइल"]
    },
    {
        "id": "national-blood-bank-eraktkosh",
        "slug": "national-blood-bank-eraktkosh",
        "category": "health",
        "name": {"hi": "ई-रक्तकोश राष्ट्रीय ब्लड बैंक स्टॉक (eRaktKosh Blood Availability)", "en": "eRaktKosh National Blood Bank Live Stock Finder"},
        "description": {"hi": "इमरजेंसी में नजदीकी ब्लड बैंक में अपने ब्लड ग्रुप (A+, B+, O-, etc.) की उपलब्धता लाइव चेक करें।", "en": "Check real-time live blood stock availability & donate blood at nearby licensed blood banks."},
        "gov_link": "https://eraktkosh.in/",
        "processing_time": "तत्काल सर्च",
        "fees": "मुफ़्त (सरकारी ब्लड बैंक नियम)",
        "eligibility": "रक्त की आवश्यकता वाले मरीज व स्वैच्छिक रक्तदाता।",
        "documents": ["डॉक्टर का ब्लड रीक्वेस्ट लेटर"]
    },
    {
        "id": "pradhan-mantri-surakshit-matritva",
        "slug": "pradhan-mantri-surakshit-matritva",
        "category": "health",
        "name": {"hi": "प्रधानमंत्री सुरक्षित मातृत्व अभियान (PMSMA Antenatal Care)", "en": "PMSMA Free Maternal Health Checkup Scheme"},
        "description": {"hi": "हर महीने की 9 तारीख को गर्भवती महिलाओं की मुफ्त विशेषज्ञ डॉक्टर द्वारा प्रसव पूर्व जांच (ANC)।", "en": "Free quality antenatal care checkups for pregnant women on 9th of every month at govt hospitals."},
        "gov_link": "https://pmsma.nhp.gov.in/",
        "processing_time": "प्रत्येक माह की 9 तारीख",
        "fees": "मुफ़्त",
        "eligibility": "गर्भावस्था के द्वितीय व तृतीय तिमाही की महिलाएं।",
        "documents": ["एमपीसीएच (MCP) कार्ड", "आधार कार्ड"]
    },
    {
        "id": "cghs-pensioner-card-apply",
        "slug": "cghs-pensioner-card-apply",
        "category": "health",
        "name": {"hi": "सीजीएचएस केंद्र सरकार स्वास्थ्य कार्ड (CGHS Health Card)", "en": "Central Government Health Scheme (CGHS) Card Apply"},
        "description": {"hi": "केंद्र सरकार के कर्मचारियों व पेंशनभोगियों के लिए सीजीएचएस प्लास्टिक कार्ड व कैशलेस अस्पताल।", "en": "Plastic CGHS Health Card for Central Government employees & pensioners for cashless medical care."},
        "gov_link": "https://cghs.nic.in/",
        "processing_time": "15-30 दिन",
        "fees": "पेंशनर अंशदान नियम अनुसार",
        "eligibility": "केंद्र सरकार के सेवारत कर्मचारी व पेंशनभोगी।",
        "documents": ["PPO प्रति / सर्विस प्रमाण", "आधार कार्ड", "परिवार की फोटो"]
    },
    {
        "id": "organ-donation-pledge-notto",
        "slug": "organ-donation-pledge-notto",
        "category": "health",
        "name": {"hi": "राष्ट्रीय अंगदान ऑनलाइन प्रतिज्ञा (NOTTO Organ Donation)", "en": "NOTTO National Organ Donation Online Pledge Card"},
        "description": {"hi": "स्वास्थ्य मंत्रालय के नोटो पोर्टल पर ऑनलाइन अंगदान की प्रतिज्ञा लें व डोनर कार्ड डाउनलोड करें।", "en": "Pledge to donate organs online on National Organ and Tissue Transplant Organization (NOTTO) portal."},
        "gov_link": "https://notto.mohfw.gov.in/",
        "processing_time": "तत्काल डोनर कार्ड",
        "fees": "मुफ़्त",
        "eligibility": "18 वर्ष या उससे अधिक आयु का कोई भी नागरिक।",
        "documents": ["आधार कार्ड", "गवाह का विवरण"]
    }
]

def generate_service_html(s):
    slug = s["slug"]
    title_hi = s["name"]["hi"]
    title_en = s["name"]["en"]
    desc_hi = s["description"]["hi"]
    desc_en = s["description"]["en"]
    gov_link = s["gov_link"]
    time_str = s["processing_time"]
    fees_str = s["fees"]
    eligibility = s["eligibility"]
    docs = s["documents"]

    doc_items = "".join([f"<li>{d}</li>" for d in docs])

    html_content = f"""<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title_hi} — गाइड व ऑनलाइन लिंक | SarkariSewa Portal</title>
  <meta name="description" content="{desc_hi} पात्रता, आवश्यक दस्तावेज़, फीस और आधिकारिक ऑनलाइन आवेदन लिंक।" />
  <link rel="canonical" href="https://sarkarisewaindia.com/service/{slug}.html" />
  <link rel="alternate" hreflang="hi" href="https://sarkarisewaindia.com/service/{slug}.html" />
  <link rel="alternate" hreflang="en" href="https://sarkarisewaindia.com/service/{slug}.html?lang=en" />
  <link rel="alternate" hreflang="x-default" href="https://sarkarisewaindia.com/service/{slug}.html" />
  <meta property="og:title" content="{title_hi} — सरकारीसेवा पोर्टल" />
  <meta property="og:description" content="{desc_hi}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://sarkarisewaindia.com/service/{slug}.html" />
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="stylesheet" href="../assets/css/style.css" />
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@graph": [
      {{
        "@type": "GovernmentService",
        "name": "{title_hi}",
        "alternateName": "{title_en}",
        "description": "{desc_hi}",
        "provider": {{ "@type": "GovernmentOrganization", "name": "Government of India" }},
        "url": "{gov_link}"
      }},
      {{
        "@type": "BreadcrumbList",
        "itemListElement": [
          {{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sarkarisewaindia.com/" }},
          {{ "@type": "ListItem", "position": 2, "name": "{s['category'].replace('-', ' ').title()}", "item": "https://sarkarisewaindia.com/category/{s['category']}.html" }},
          {{ "@type": "ListItem", "position": 3, "name": "{title_hi}", "item": "https://sarkarisewaindia.com/service/{slug}.html" }}
        ]
      }},
      {{
        "@type": "FAQPage",
        "mainEntity": [
          {{
            "@type": "Question",
            "name": "{title_hi} के लिए आवेदन कैसे करें?",
            "acceptedAnswer": {{ "@type": "Answer", "text": "आधिकारिक वेबसाइट {gov_link} पर जाकर ऑनलाइन फॉर्म भरें और आवश्यक दस्तावेज़ अपलोड करें।" }}
          }},
          {{
            "@type": "Question",
            "name": "इस सेवा के लिए क्या फीस है?",
            "acceptedAnswer": {{ "@type": "Answer", "text": "सरकारी नियम अनुसार इस सेवा की फीस {fees_str} है।" }}
          }},
          {{
            "@type": "Question",
            "name": "आवेदन की प्रक्रिया में कितना समय लगता है?",
            "acceptedAnswer": {{ "@type": "Answer", "text": "सामान्यतः इस प्रक्रिया में {time_str} का समय लगता है।" }}
          }},
          {{
            "@type": "Question",
            "name": "क्या इसके लिए आधार कार्ड अनिवार्य है?",
            "acceptedAnswer": {{ "@type": "Answer", "text": "हाँ, पहचान एवं ई-केवाईसी सत्यापन हेतु आधार कार्ड आवश्यक है।" }}
          }},
          {{
            "@type": "Question",
            "name": "आधिकारिक वेबसाइट लिंक क्या है?",
            "acceptedAnswer": {{ "@type": "Answer", "text": "आधिकारिक लिंक {gov_link} है।" }}
          }}
        ]
      }}
    ]
  }}
  </script>
</head>
<body>
  <div id="site-header"></div>

  <main class="container" style="padding-top: 30px; padding-bottom: 60px;">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="../index.html">गृह (Home)</a> / 
      <a href="../category/{s['category']}.html">{s['category'].replace('-', ' ').title()}</a> / 
      <span>{title_hi}</span>
    </nav>

    <article class="service-detail-card" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius); padding: 30px; margin-top: 20px; box-shadow: var(--shadow-card);">
      <header>
        <span class="badge" style="background: var(--color-accent-green); color: #fff; padding: 4px 12px; border-radius: 4px; font-size: 0.85rem; font-weight: 700;">आधिकारिक सेवा</span>
        <h1 style="color: var(--color-primary); margin-top: 12px;">{title_hi}</h1>
        <p style="font-size: 1.1rem; color: var(--color-text-muted);">{desc_hi}</p>
      </header>

      <div class="quick-info-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 24px 0; padding: 20px; background: var(--color-bg); border-radius: 8px;">
        <div><strong>⏱️ प्रक्रिया समय:</strong> <span>{time_str}</span></div>
        <div><strong>💰 सरकारी फीस:</strong> <span>{fees_str}</span></div>
        <div><strong>🌐 श्रेणी:</strong> <span>{s['category'].replace('-', ' ').title()}</span></div>
      </div>

      <section>
        <h2>📌 पात्रता (Eligibility Criteria)</h2>
        <p>{eligibility}</p>
      </section>

      <section style="margin-top: 24px;">
        <h2>📄 आवश्यक दस्तावेज़ (Required Documents)</h2>
        <ul>
          {doc_items}
        </ul>
      </section>

      <section style="margin-top: 24px;">
        <h2>📝 ऑनलाइन आवेदन प्रक्रिया (Step-by-Step Guide)</h2>
        <ol>
          <li>नीचे दिए गए <strong>आधिकारिक पोर्टल बटन</strong> पर क्लिक करें।</li>
          <li>पोर्टल पर नया पंजीकरण (Register) करें या आधार/मोबाइल से लॉगिन करें।</li>
          <li>आवेदन पत्र में मांगी गई सभी आवश्यक जानकारी ध्यानपूर्वक भरें।</li>
          <li>अपने स्कैन किए गए आवश्यक दस्तावेज़ अपलोड करें।</li>
          <li>यदि लागू हो तो निर्धारित शुल्क का ऑनलाइन भुगतान करें और रसीद डाउनलोड करें।</li>
        </ol>
      </section>

      <div style="margin-top: 30px; text-align: center; padding: 20px; background: rgba(30, 58, 138, 0.05); border-radius: 8px; border: 1px solid var(--color-primary);">
        <a href="{gov_link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background: var(--color-primary); color: #fff; padding: 12px 28px; text-decoration: none; border-radius: 6px; font-weight: 700; display: inline-block;">🔗 आधिकारिक पोर्टल पर आवेदन करें (Official Website) →</a>
      </div>

      <section style="margin-top: 40px;">
        <h2>❓ अक्सर पूछे जाने वाले सवाल (FAQs)</h2>
        <details style="margin-bottom: 12px; padding: 12px; background: var(--color-bg); border-radius: 6px;">
          <summary style="font-weight: 600; cursor: pointer;">{title_hi} के लिए आवेदन कैसे करें?</summary>
          <p style="margin-top: 8px;">आधिकारिक वेबसाइट {gov_link} पर जाकर ऑनलाइन फॉर्म भरें और आवश्यक दस्तावेज़ अपलोड करें。</p>
        </details>
        <details style="margin-bottom: 12px; padding: 12px; background: var(--color-bg); border-radius: 6px;">
          <summary style="font-weight: 600; cursor: pointer;">इस सेवा के लिए क्या फीस है?</summary>
          <p style="margin-top: 8px;">सरकारी नियम अनुसार इस सेवा की फीस {fees_str} है。</p>
        </details>
        <details style="margin-bottom: 12px; padding: 12px; background: var(--color-bg); border-radius: 6px;">
          <summary style="font-weight: 600; cursor: pointer;">आवेदन की प्रक्रिया में कितना समय लगता है?</summary>
          <p style="margin-top: 8px;">सामान्यतः इस प्रक्रिया में {time_str} का समय लगता है。</p>
        </details>
        <details style="margin-bottom: 12px; padding: 12px; background: var(--color-bg); border-radius: 6px;">
          <summary style="font-weight: 600; cursor: pointer;">क्या इसके लिए आधार कार्ड अनिवार्य है?</summary>
          <p style="margin-top: 8px;">हाँ, पहचान एवं ई-केवाईसी सत्यापन हेतु आधार कार्ड आवश्यक है。</p>
        </details>
        <details style="margin-bottom: 12px; padding: 12px; background: var(--color-bg); border-radius: 6px;">
          <summary style="font-weight: 600; cursor: pointer;">आधिकारिक वेबसाइट लिंक क्या है?</summary>
          <p style="margin-top: 8px;">आधिकारिक लिंक <a href="{gov_link}" target="_blank">{gov_link}</a> है。</p>
        </details>
      </section>
    </article>
  </main>

  <div id="site-footer"></div>
  <script src="../assets/js/main.js"></script>
</body>
</html>"""
    return html_content

def main():
    print("=== Expanding Services Directory by 60 New Services (10 Per Category) ===")
    
    # 1. Read existing services
    with open(SERVICES_JSON, "r", encoding="utf-8") as f:
        existing_services = json.load(f)

    existing_slugs = set(s["slug"] for s in existing_services)
    existing_ids = set(s["id"] for s in existing_services)

    added_services = []

    for s in NEW_SERVICES_DATA:
        if s["slug"] in existing_slugs or s["id"] in existing_ids:
            print(f"SKIP DUPLICATE: {s['slug']}")
            continue
        
        # Write HTML file
        html_file = SERVICE_DIR / f"{s['slug']}.html"
        html_code = generate_service_html(s)
        with open(html_file, "w", encoding="utf-8") as f:
            f.write(html_code)
        
        # Append to json array
        service_entry = {
            "id": s["id"],
            "slug": s["slug"],
            "category": s["category"],
            "name": s["name"],
            "description": s["description"],
            "gov_link": s["gov_link"],
            "processing_time": s["processing_time"],
            "fees": s["fees"]
        }
        existing_services.append(service_entry)
        added_services.append(s)

    # 2. Save updated services.json
    with open(SERVICES_JSON, "w", encoding="utf-8") as f:
        json.dump(existing_services, f, ensure_ascii=False, indent=2)

    print(f"Successfully added {len(added_services)} brand new services to services.json and generated HTML pages!")

    # 3. Update sitemap.xml
    tree = ET.parse(SITEMAP_XML)
    urlset = tree.getroot()
    
    # xmlns namespace handling
    ns = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    ET.register_namespace('', 'http://www.sitemaps.org/schemas/sitemap/0.9')

    existing_locs = set(elem.text.strip() for elem in urlset.findall('.//ns:loc', ns))

    new_urls_added = 0
    for s in added_services:
        url_str = f"https://sarkarisewaindia.com/service/{s['slug']}.html"
        if url_str not in existing_locs:
            url_elem = ET.SubElement(urlset, "url")
            loc_elem = ET.SubElement(url_elem, "loc")
            loc_elem.text = url_str
            lastmod_elem = ET.SubElement(url_elem, "lastmod")
            lastmod_elem.text = "2026-08-08"
            changefreq_elem = ET.SubElement(url_elem, "changefreq")
            changefreq_elem.text = "weekly"
            priority_elem = ET.SubElement(url_elem, "priority")
            priority_elem.text = "0.8"
            new_urls_added += 1

    tree.write(SITEMAP_XML, encoding="utf-8", xml_declaration=True)
    print(f"Updated sitemap.xml with {new_urls_added} new URLs!")

if __name__ == "__main__":
    main()
