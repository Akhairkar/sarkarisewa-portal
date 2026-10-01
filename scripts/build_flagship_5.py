# -*- coding: utf-8 -*-
import os
import sys
import json
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SERVICE_DIR = os.path.join(ROOT, 'service')

FLAGSHIP_SCHEMES = {
    'ayushman-bharat': {
        'slug': 'ayushman-bharat',
        'title_hi': 'आयुष्मान भारत कार्ड ऑनलाइन आवेदन 2026: PM-JAY ₹5 लाख मुफ्त इलाज, वय वंदना 70+ व हॉस्पिटल लिस्ट',
        'title_en': 'Ayushman Bharat Card Apply Online 2026: PM-JAY ₹5 Lakh Free Treatment, Vayo Vandana & Hospital List',
        'desc_hi': 'आयुष्मान भारत (PM-JAY) योजना 2026 के तहत प्रति परिवार प्रति वर्ष ₹5 लाख का मुफ़्त इलाज पाएं। 70+ वरिष्ठ नागरिकों के लिए वय वंदना कार्ड, पात्रता, e-KYC व PVC कार्ड डाउनलोड गाइड।',
        'desc_en': 'Apply for Ayushman Bharat Card (PM-JAY) 2026. Get ₹5 Lakh cashless treatment per family per year, new Vayo Vandana card for seniors 70+, eligibility check, hospital list & PVC download.',
        'category': 'health',
        'category_name_hi': 'स्वास्थ्य एवं चिकित्सा सेवाएं',
        'gov_link': 'https://beneficiary.nha.gov.in/',
        'gov_link_label': 'NHA Beneficiary Portal (beneficiary.nha.gov.in)',
        'portal_name': 'National Health Authority (NHA) Beneficiary Portal',
        'helpline': '14555 / 1800-111-565',
        'badge': '🏥 NATIONAL HEALTH MISSION (PM-JAY)',
        'official_actions': [
            {'label': '🌐 NHA Beneficiary Official Portal', 'url': 'https://beneficiary.nha.gov.in/', 'bg': '#2563eb', 'border': '#3b82f6'},
            {'label': '🔍 Check Beneficiary Status & e-KYC', 'url': 'https://beneficiary.nha.gov.in/', 'bg': '#059669', 'border': '#10b981'},
            {'label': '🏥 Empanelled Hospital List 2026', 'url': 'https://hospitals.pmjay.gov.in/', 'bg': '#d97706', 'border': '#f59e0b'},
            {'label': '📱 Download Ayushman Mobile App', 'url': 'https://play.google.com/store/apps/details?id=com.beneficiaryapp', 'bg': '#7c3aed', 'border': '#8b5cf6'}
        ],
        'key_stats': [
            {'val': '₹5,00,000', 'lbl': 'वार्षिक मुफ़्त इलाज (Cashless Cover)'},
            {'val': '29,000+', 'lbl': 'संबद्ध अस्पताल (Empanelled Hospitals)'},
            {'val': '70+ वर्ष', 'lbl': 'वय वंदना कार्ड (Universal Cover for 70+)'},
            {'val': '100% Cashless', 'lbl': 'कैशलेस व पेपरलेस सुविधा'}
        ],
        'overview_hi': '''आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना (AB-PMJAY) विश्व की सबसे बड़ी सरकारी स्वास्थ्य आश्वासन योजना है। भारत सरकार द्वारा संचालित इस योजना का उद्देश्य देश के 12 करोड़ से अधिक गरीब, वंचित और आर्थिक रूप से कमजोर परिवारों (लगभग 55 करोड़ नागरिकों) को गंभीर बीमारियों के समय वित्तीय सुरक्षा प्रदान करना है। वर्ष 2026 के नवीनतम केंद्रीय दिशा-निर्देशों के अनुसार, योजना के तहत प्रत्येक पात्र परिवार को प्रति वर्ष <strong>₹5,00,000 (पाँच लाख रुपये)</strong> तक का द्वितीयक (Secondary) और तृतीयक (Tertiary) स्वास्थ्य देखभाल हेतु पूरी तरह कैशलेस व पेपरलेस इलाज की सुविधा देश के 29,000+ पैनलबद्ध सरकारी व निजी अस्पतालों में उपलब्ध कराई जाती है।

इसके अतिरिक्त, भारत सरकार द्वारा <strong>70 वर्ष और उससे अधिक आयु के सभी वरिष्ठ नागरिकों</strong> के लिए 'आयुष्मान वय वंदना योजना' का ऐतिहासिक विस्तार किया गया है। अब 70+ आयु वर्ग के वरिष्ठ नागरिकों को अपनी सामाजिक या आर्थिक स्थिति की परवाह किए बिना स्वतंत्र रूप से ₹5 लाख का टॉप-अप वार्षिक स्वास्थ्य कवर दिया जा रहा है। योजना में 1,949 से अधिक चिकित्सीय प्रक्रियाएं, सर्जिकल पैकेज, डायलिसिस, कैंसर थेरेपी और अंग प्रत्यारोपण पूरी तरह कैशलेस शामिल हैं।''',
        'overview_en': '''Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) is the flagship national public health insurance initiative of the Government of India. The scheme provides a comprehensive cashless health cover of up to <strong>₹5,00,000 per family per year</strong> for secondary and tertiary care hospitalization across a nationwide network of 29,000+ empanelled public and private healthcare providers.

Under the expanded 2026 mandate, the Government has introduced the <strong>Ayushman Vayo Vandana Card</strong>, extending universal ₹5 Lakh annual health coverage to ALL senior citizens aged 70 years and above, irrespective of their socio-economic status, income ceiling, or ration card availability. The entire process from beneficiary identification to e-KYC verification and PVC card generation operates digitally through the NHA Beneficiary BIS 2.0 Portal.''',
        'eligibility_points': [
            '<strong>SECC 2011 सूचीबद्ध परिवार:</strong> ग्रामीण क्षेत्रों में D1 से D7 वंचन श्रेणियों और शहरी क्षेत्रों में 11 व्यावसायिक श्रेणियों के अंतर्गत आने वाले परिवार।',
            '<strong>NFSA राशन कार्ड धारक:</strong> विभिन्न राज्यों के अंत्योदय अन्न योजना (AAY) और प्राथमिकता गृहस्थी (PHH) राशन कार्ड धारक परिवार (6 या अधिक सदस्य)।',
            '<strong>70 वर्ष+ वरिष्ठ नागरिक (वय वंदना):</strong> 70 वर्ष या उससे अधिक आयु के भारत के सभी नागरिक (आय सीमा या जातिगत प्रतिबंध के बिना)।',
            '<strong>असंगठित क्षेत्र के पंजीकृत श्रमिक:</strong> भवन निर्माण श्रमिक (BOCW) एवं विभिन्न राज्य स्वास्थ्य योजनाओं के तहत पात्र परिवार।',
            '<strong>परिवार आकार में कोई सीमा नहीं:</strong> परिवार के सदस्यों की संख्या, आयु या लिंग की कोई बाध्यता नहीं है (No cap on family size).'
        ],
        'documents_points': [
            '<strong>आधार कार्ड (Aadhaar Card):</strong> सभी सदस्यों का आधार कार्ड (बायोमेट्रिक या ओटीपी सत्यापन हेतु अनिवार्य)।',
            '<strong>राशन कार्ड / परिवार पहचान पत्र:</strong> राज्य सरकार द्वारा जारी डिजिटल राशन कार्ड (Family ID / Ration Card)।',
            '<strong>सक्रिय मोबाइल नंबर:</strong> आधार से लिंक मोबाइल नंबर जिस पर तत्काल OTP प्राप्त हो सके।',
            '<strong>जन्म प्रमाण पत्र (शिशुओं के लिए):</strong> 5 वर्ष से कम आयु के बच्चों को जोड़ने हेतु जन्म प्रमाण पत्र।',
            '<strong>वरिष्ठ नागरिक आयु प्रमाण (70+ हेतु):</strong> आधार कार्ड में जन्म तिथि 70 वर्ष या अधिक प्रमाणित होनी चाहिए।'
        ],
        'steps_online': [
            '<strong>पोर्टल लॉगिन:</strong> आधिकारिक NHA पोर्टल <code>beneficiary.nha.gov.in</code> पर जाएं और \'Beneficiary\' टैब चुनकर मोबाइल नंबर व OTP से लॉगिन करें।',
            '<strong>पात्रता खोज (Search Beneficiary):</strong> अपना State, Scheme (PMJAY), District और Search By (Aadhaar Number / Family ID / PMJAY ID) चुनें।',
            '<strong>e-KYC प्रक्रिया:</strong> परिवार के सदस्यों की सूची में जिस सदस्य का कार्ड बनाना है, उसके आगे \'e-KYC\' बटन पर क्लिक करें। Aadhaar OTP, IRIS या Face Auth चुनें।',
            '<strong>फोटो कैप्चर व विवरण मिलान:</strong> लाइव वेबकैम या मोबाइल कैमरे से पासपोर्ट फोटो कैप्चर करें और आवश्यक विवरण दर्ज करें।',
            '<strong>अप्रूवल व डाउनलोड:</strong> 80%+ मिलान होने पर कार्ड तुरंत \'Approved\' हो जाता है। \'Download Card\' पर क्लिक करके कलर पीडीएफ e-Card प्राप्त करें।'
        ],
        'steps_offline': [
            '<strong>नज़दीकी अस्पताल या CSC केंद्र जाएं:</strong> अपने ज़िले के किसी भी सरकारी अस्पताल, सूचीबद्ध प्राइवेट हॉस्पिटल या जन सेवा केंद्र (CSC / e-Seva Kendra) पर जाएं।',
            '<strong>दस्तावेज़ प्रस्तुत करें:</strong> हेल्पडेस्क पर मौजूद <strong>आयुष्मान मित्र (Ayushman Mitra)</strong> को अपना आधार कार्ड व राशन कार्ड दिखाएं।',
            '<strong>बायोमेट्रिक सत्यापन:</strong> फिंगरप्रिंट स्कैनर या आईरिस स्कैनर के माध्यम से अपना बायोमेट्रिक ऑथेंटिकेशन पूरा कराएं।',
            '<strong>कार्ड प्रिंट:</strong> सत्यापन सफल होते ही आयुष्मान मित्र आपको सुरक्षित प्लास्टिक PVC आयुष्मान कार्ड प्रिंट करके सौंप देगा।'
        ],
        'problems': [
            {
                'title': '1. SECC 2011 लिस्ट में नाम नहीं है — नया आयुष्मान कार्ड कैसे बनवाएं?',
                'desc': 'यदि आपका नाम 2011 सामाजिक-आर्थिक जनगणना में नहीं था, तो भी आप राज्य राशन कार्ड या नई श्रेणियों के तहत आयुष्मान कार्ड बना सकते हैं।',
                'points': [
                    '<strong>समाधान:</strong> अपने राज्य के खाद्य सुरक्षा राशन कार्ड (NFSA / BPL / Antyodaya Ration Card) में परिवार के 6 या उससे अधिक सदस्य होने पर नया आयुष्मान कार्ड जारी होता है।',
                    'पोर्टल <code>beneficiary.nha.gov.in</code> पर \'Ration Card\' विकल्प चुनकर अपना 12 अंकों का राशन कार्ड नंबर दर्ज करें और परिवार के सभी सदस्यों का e-KYC करें।'
                ]
            },
            {
                'title': '2. e-KYC स्टेटस "Red / Pending" या Face Auth फेल होने का समाधान',
                'desc': 'फोटोग्राफ मिलान न होने या आधार डेटा मिसमैच के कारण e-KYC रिजेक्ट या पेंडिंग हो जाता है।',
                'points': [
                    '<strong>समाधान:</strong> Google Play Store से <strong>Ayushman App</strong> और <strong>Aadhaar FaceRD App</strong> डाउनलोड करें।',
                    'दिन के उजाले में साफ बैकग्राउंड के साथ फेस ऑथेंटिकेशन करें। 80% से अधिक मैच होने पर कार्ड 5 मिनट में \'Green / Approved\' हो जाता है।'
                ]
            },
            {
                'title': '3. 70 वर्ष या अधिक आयु के बुजुर्गों के लिए "आयुष्मान वय वंदना कार्ड" कैसे बनाएं?',
                'desc': 'केंद्रीय कैबिनेट के नए फैसले के अनुसार 70+ वर्ष के सभी वरिष्ठ नागरिकों को आय/जाति सीमा के बिना अतिरिक्त ₹5 लाख का टॉप-अप कवर मिलता है।',
                'points': [
                    '<strong>समाधान:</strong> <code>beneficiary.nha.gov.in</code> पर जाएं या आयुष्मान ऐप खोलें और \'Senior Citizen (70+)\' विकल्प चुनें।',
                    'वरिष्ठ नागरिक का आधार नंबर दर्ज करें, OTP या Face Auth से सत्यापन करें। कोई राशन कार्ड या आय प्रमाण पत्र की आवश्यकता नहीं है।'
                ]
            },
            {
                'title': '4. अस्पताल में भर्ती के समय कैशलेस इलाज का अप्रूवल कैसे प्राप्त करें?',
                'desc': 'इमरजेंसी या प्लान्ड सर्जरी के समय अस्पताल द्वारा पैसे मांगने या देरी होने की स्थिति का समाधान।',
                'points': [
                    '<strong>समाधान:</strong> अस्पताल के हेल्पडेस्क पर मौजूद <strong>आयुष्मान मित्र (Ayushman Mitra)</strong> से संपर्क करें और अपना डिजिटल या PVC आयुष्मान कार्ड + आधार कार्ड दिखाएं।',
                    'आयुष्मान मित्र पोर्टल पर प्री-ऑथराइजेशन (Pre-Auth) रिक्वेस्ट डालेगा। किसी भी अवैध वसूली या देरी पर सीधे टोल-फ्री <strong>14555</strong> पर शिकायत दर्ज कराएं।'
                ]
            },
            {
                'title': '5. परिवार के नए सदस्य (नवजात शिशु / नवविवाहिता) का नाम आयुष्मान कार्ड में कैसे जोड़ें?',
                'desc': 'शादी के बाद बहू का नाम या बच्चे के जन्म के बाद उसका नाम कार्ड में जोड़ने की ऑनलाइन प्रक्रिया।',
                'points': [
                    '<strong>समाधान:</strong> NHA Beneficiary पोर्टल पर परिवार के मुख्य सदस्य के आधार से लॉगिन करें और <strong>\'Add Member\'</strong> पर क्लिक करें।',
                    'बच्चे के लिए जन्म प्रमाण पत्र (Birth Certificate) तथा बहू के लिए मैरिज सर्टिफिकेट व आधार कार्ड अपलोड करें। 72 घंटे में नया कार्ड जुड़ जाएगा।'
                ]
            },
            {
                'title': '6. ओरिजिनल प्लास्टिक PVC आयुष्मान कार्ड घर पर कैसे प्राप्त करें?',
                'desc': 'डिजिटल पीडीएफ के अलावा सुरक्षित प्लास्टिक पीवीसी कार्ड प्राप्त करने का नियम।',
                'points': [
                    '<strong>समाधान:</strong> NHA पोर्टल से अप्रूव्ड कार्ड का ई-कार्ड पीडीएफ डाउनलोड करके किसी भी नज़दीकी जन सेवा केंद्र (CSC) से प्रिंट करा सकते हैं।',
                    'स्वास्थ्य विभाग के विशेष आयुष्मान भवः (Ayushman Bhav) अभियानों में आशा वर्कर व एएनएम द्वारा घर-घर फ्री पीवीसी कार्ड बांटे जाते हैं।'
                ]
            }
        ],
        'faqs': [
            {'q': 'आयुष्मान भारत (PM-JAY) योजना के तहत प्रति वर्ष कितना मुफ़्त इलाज मिलता है?', 'a': 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना (AB-PMJAY) के तहत प्रत्येक पात्र परिवार को प्रति वर्ष ₹5,00,000 (पाँच लाख रुपये) तक का द्वितीयक और तृतीयक देखभाल हेतु कैशलेस और पेपरलेस स्वास्थ्य बीमा कवर मिलता है।'},
            {'q': 'क्या 70 वर्ष से अधिक उम्र के सभी नागरिकों को आयुष्मान कार्ड मिल सकता है?', 'a': 'हाँ! भारत सरकार ने 70 वर्ष और उससे अधिक आयु के देश के सभी वरिष्ठ नागरिकों के लिए \'आयुष्मान वय वंदना कार्ड\' शुरू किया है। इसके लिए कोई आय सीमा (No Income Ceiling) या जातिगत बाध्यता नहीं है।'},
            {'q': 'आयुष्मान कार्ड ऑनलाइन अपने मोबाइल से कैसे डाउनलोड करें?', 'a': 'आधिकारिक पोर्टल <code>beneficiary.nha.gov.in</code> या Ayushman App पर जाएं, अपना आधार नंबर दर्ज करें, आधार रजिस्टर्ड मोबाइल पर आया OTP डालें और वेरिफाई होते ही \'Download Card\' पर क्लिक करके PDF प्राप्त करें।'},
            {'q': 'क्या आयुष्मान कार्ड से प्राइवेट (निजी) अस्पतालों में भी इलाज कराया जा सकता है?', 'a': 'हाँ, आयुष्मान भारत योजना से जुड़े (Empanelled) देश के 29,000 से अधिक सरकारी और प्राइवेट अस्पतालों में सूचीबद्ध 1,949 से अधिक बीमारियों व सर्जरियों का पूरा इलाज मुफ़्त किया जाता है।'},
            {'q': 'आयुष्मान कार्ड की वैधता (Validity) कितने समय तक होती है?', 'a': 'आयुष्मान कार्ड आजीवन (Lifetime) वैध होता है। आपको इसे हर साल रिन्यू कराने की आवश्यकता नहीं होती, बल्कि हर साल परिवार के लिए ₹5 लाख का इलाज कोटा स्वतः रीसेट हो जाता है।'},
            {'q': 'यदि अस्पताल इलाज के लिए पैसे की मांग करे तो कहां शिकायत करें?', 'a': 'यदि कोई पैनलबद्ध अस्पताल आयुष्मान कार्ड धारक से नकद राशि मांगता है, तो तुरंत राष्ट्रीय हेल्पलाइन <strong>14555</strong> या <strong>1800-111-565</strong> पर कॉल करें या अस्पताल के आयुष्मान मित्र / जिला नोडल अधिकारी से संपर्क करें।'},
            {'q': 'क्या पुरानी बीमारियां (Pre-existing Diseases) भी इस योजना में कवर होती हैं?', 'a': 'हाँ, योजना के पहले ही दिन से सभी पहले से मौजूद बीमारियां जैसे दिल की बीमारी, कैंसर, किडनी डायलिसिस, मोतियाबिंद, घुटना प्रत्यारोपण आदि पूरी तरह से कवर होती हैं।'},
            {'q': 'आयुष्मान कार्ड और आभा आईडी (ABHA Card) में क्या अंतर है?', 'a': 'आयुष्मान कार्ड (PM-JAY) ₹5 लाख का मुफ्त बीमा इलाज प्रदान करता है, जबकि आभा आईडी (ABHA - Ayushman Bharat Health Account) 14 अंकों का डिजिटल हेल्थ रिकॉर्ड खाता है जो मेडिकल रिपोर्ट सुरक्षित रखता है।'},
            {'q': 'अपने शहर के सूचीबद्ध आयुष्मान अस्पतालों की सूची कैसे देखें?', 'a': '<code>hospitals.pmjay.gov.in</code> पर जाकर अपना राज्य, जिला और स्पेशलिटी (जैसे कार्डियोलॉजी, ऑर्थोपेडिक्स) चुनकर अपने नज़दीकी सभी सरकारी व प्राइवेट अस्पतालों की सूची देख सकते हैं।'},
            {'q': 'आयुष्मान कार्ड बनवाने के लिए क्या कोई शुल्क देना पड़ता है?', 'a': 'नहीं, आयुष्मान भारत कार्ड बनवाना 100% मुफ़्त (₹0 Fee) है। सरकारी पोर्टल या स्वास्थ्य शिविरों में किसी भी प्रकार का कोई शुल्क नहीं लिया जाता।'}
        ],
        'related_services': [
            {'icon': '🪪', 'title': 'ABHA Health ID Card', 'url': '../service/abha-health-card.html', 'desc': '14 अंकों का डिजिटल हेल्थ अकाउंट और मेडिकल रिकॉर्ड लॉकर।'},
            {'icon': '💊', 'title': 'Pradhan Mantri Jan Aushadhi', 'url': '../service/jan-aushadhi-kendra.html', 'desc': '50% से 90% सस्ती जेनेरिक दवाइयों के लिए नज़दीकी केंद्र खोजें।'},
            {'icon': '👵', 'title': 'Senior Citizen National Card', 'url': '../service/national-senior-citizen-card.html', 'desc': 'वरिष्ठ नागरिकों के लिए सरकारी रियायतें व पहचान पत्र।'},
            {'icon': '🩸', 'title': 'e-RaktKosh Blood Bank Portal', 'url': '../service/e-raktkosh-blood-donation.html', 'desc': 'नज़दीकी ब्लड बैंक में रक्त की उपलब्धता व ऑनलाइन डोनर रजिस्ट्रेशन।'}
        ]
    },

    'pm-kisan': {
        'slug': 'pm-kisan',
        'title_hi': 'पीएम किसान 19वीं व 20वीं किस्त 2026: लाभार्थी स्टेटस, आधार e-KYC, ₹6000 DBT व लैंड सीडिंग सुधार',
        'title_en': 'PM Kisan 19th & 20th Installment 2026: Beneficiary Status, e-KYC, ₹6000 DBT & Land Seeding Guide',
        'desc_hi': 'पीएम किसान सम्मान निधि योजना 2026 की 19वीं व 20वीं किस्त का ₹2000 स्टेटस चेक करें। मोबाइल से आधार e-KYC, लैंड सीडिंग \'NO\' का समाधान, नया किसान रजिस्ट्रेशन व DBT बैंक सीडिंग।',
        'desc_en': 'Check PM Kisan Samman Nidhi 19th & 20th installment ₹2000 status online. Complete Aadhaar e-KYC via Face Auth, fix Land Seeding NO status, new farmer apply & Aadhaar DBT bank seeding.',
        'category': 'government-schemes',
        'category_name_hi': 'सरकारी कृषि एवं किसान कल्याण योजनाएं',
        'gov_link': 'https://pmkisan.gov.in/',
        'gov_link_label': 'PM Kisan Portal (pmkisan.gov.in)',
        'portal_name': 'PM Kisan Samman Nidhi Portal (Ministry of Agriculture)',
        'helpline': '155261 / 011-24300606 / 1800-115-526',
        'badge': '🌾 PRADHAN MANTRI KISAN SAMMAN NIDHI',
        'official_actions': [
            {'label': '🌐 PM Kisan Official Portal', 'url': 'https://pmkisan.gov.in/', 'bg': '#2563eb', 'border': '#3b82f6'},
            {'label': '🔍 Check Beneficiary Installment Status', 'url': 'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx', 'bg': '#059669', 'border': '#10b981'},
            {'label': '📱 Complete OTP / Face e-KYC Online', 'url': 'https://exlink.pmkisan.gov.in/aadharekyc.aspx', 'bg': '#d97706', 'border': '#f59e0b'},
            {'label': '📋 New Farmer Self Registration', 'url': 'https://pmkisan.gov.in/RegistrationFormNew.aspx', 'bg': '#7c3aed', 'border': '#8b5cf6'}
        ],
        'key_stats': [
            {'val': '₹6,000 / वर्ष', 'lbl': 'वार्षिक वित्तीय सहायता (3 किस्तों में ₹2000)'},
            {'val': '11+ करोड़', 'lbl': 'लाभार्थी किसान (Direct Beneficiaries)'},
            {'val': '100% DBT', 'lbl': 'सीधे बैंक खाते में आधार ट्रांसफर'},
            {'val': '19वीं व 20वीं', 'lbl': 'सक्रिय किस्त चक्र 2026 (Active Installment)'}
        ],
        'overview_hi': '''प्रधानमंत्री किसान सम्मान निधि (PM-KISAN) भारत सरकार की शत-प्रतिशत वित्त पोषित केंद्रीय क्षेत्र की सबसे महत्वपूर्ण प्रत्यक्ष लाभ अंतरण (DBT) योजना है। इस योजना का उद्देश्य देश के सभी भूमिधारक किसान परिवारों को उनकी कृषि आवश्यकताओं, बीजों, खादों और घरेलू खर्चों की पूर्ति के लिए आय सहायता प्रदान करना है। योजना के तहत पात्र किसान परिवारों को प्रति वर्ष <strong>₹6,00,000 (छह हजार रुपये)</strong> की वित्तीय सहायता ₹2,000-₹2,000 की तीन समान किस्तों में हर चार महीने के अंतराल पर सीधे उनके आधार-सीडेड बैंक खातों में स्थानांतरित की जाती है।

वर्ष 2026 में किस्तों के सुरक्षित और पारदर्शी अंतरण हेतु कृषि एवं किसान कल्याण मंत्रालय द्वारा **3 अनिवार्य शर्तें** लागू की गई हैं:
1. **Aadhaar e-KYC (ओटीपी या फेस ऑथेंटिकेशन द्वारा पूर्ण होना)**
2. **Land Seeding (राजस्व भूलेख में खतौनी का डिजिटल सत्यापन)**
3. **Aadhaar-Bank Account DBT Seeding (NPCI मैपर में सक्रिय बैंक खाता)**''',
        'overview_en': '''Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a 100% centrally sponsored flagship scheme launched by the Government of India to provide income support to all landholding farmer families across the country. Under PM-KISAN, eligible farmers receive a direct financial benefit of <strong>₹6,000 per year</strong>, disbursed in three equal 4-monthly installments of ₹2,000 directly into their Aadhaar-linked bank accounts via Direct Benefit Transfer (DBT).

Under the 2026 regulatory framework, the Ministry of Agriculture and Farmers Welfare strictly mandates three operational compliances for uninterrupted release of the 19th, 20th, and upcoming installments:
1. **Aadhaar e-KYC Verification:** Completed digitally via OTP, Biometric, or Face Authentication on the PM-KISAN App.
2. **Land Seeding Verification:** Validation of land ownership records (Khasra/Khatauni) on the State Revenue Portal.
3. **NPCI Aadhaar-Bank Account Seeding:** Active bank account mapped for direct DBT credit without mandate failure.''',
        'eligibility_points': [
            '<strong>भूमिधारक किसान परिवार:</strong> ऐसे सभी किसान परिवार जिनके नाम पर खेती योग्य भूमि का वैध भूलेख (Khatauni / Patta) दर्ज है।',
            '<strong>छोटे व सीमांत किसान:</strong> 1 हेक्टेयर या 2 हेक्टेयर से कम या अधिक जोत वाले सभी वास्तविक किसान परिवार।',
            '<strong>सक्रिय बैंक खाता:</strong> किसान का एकल/संयुक्त बैंक खाता जो आधार और NPCI से डीबीटी के लिए लिंक हो।',
            '<strong>अपात्र श्रेणियां:</strong> संस्थागत भूमिधारक, संवैधानिक पदधारक, सेवारत या सेवानिवृत्त सरकारी कर्मचारी, ₹10,000+ पेंशनभोगी, आयकर दाता (Income Tax Payers) और पेशेवर (डॉक्टर, इंजीनियर, सीए)।'
        ],
        'documents_points': [
            '<strong>आधार कार्ड (Aadhaar Card):</strong> आवेदक किसान का सक्रिय आधार कार्ड।',
            '<strong>भूलेख खतौनी की नकल:</strong> नवीनतम डिजिटल भूलेख रिकॉर्ड जिसमें खाता/खसरा संख्या व किसान का नाम अंकित हो।',
            '<strong>बैंक पासबुक (Aadhaar Seeded):</strong> बैंक खाता संख्या व IFSC कोड (DBT इनेबल्ड)।',
            '<strong>आधार लिंक्ड मोबाइल नंबर:</strong> e-KYC ओटीपी व स्टेटस अलर्ट्स प्राप्त करने हेतु।',
            '<strong>स्व-घोषणा पत्र (Self Declaration):</strong> आयकर न भरने व अपात्र न होने का डिजिटल डिक्लेरेशन।'
        ],
        'steps_online': [
            '<strong>पोर्टल विजिट:</strong> <code>pmkisan.gov.in</code> पर जाएं और \'Farmers Corner\' सेक्शन में जाएं।',
            '<strong>नया किसान पंजीकरण (New Farmer Registration):</strong> \'Rural Farmer Registration\' या \'Urban Farmer Registration\' चुनें, आधार नंबर व मोबाइल दर्ज करें।',
            '<strong>व्यक्तिगत व भूमि विवरण:</strong> राज्य, जिला, ब्लॉक, गांव का चयन करें। अपनी खतौनी से खसरा नंबर, खाता संख्या व भूमि रकबा (Area) दर्ज करें।',
            '<strong>दस्तावेज़ अपलोड:</strong> खतौनी की डिजिटल पीडीएफ फाइल अपलोड करें और \'Submit\' पर क्लिक करें। आपको 12 अंकों का रजिस्ट्रेशन नंबर प्राप्त होगा।',
            '<strong>e-KYC पूरा करें:</strong> रजिस्ट्रेशन के बाद Farmers Corner में \'e-KYC\' विकल्प पर जाकर आधार OTP या Face Auth से सत्यापन पूरा करें।'
        ],
        'steps_offline': [
            '<strong>सीएससी (CSC) केंद्र या लेखपाल/पटवारी से संपर्क:</strong> अपने दस्तावेज़ लेकर नज़दीकी कॉमन सर्विस सेंटर या ब्लॉक कृषि अधिकारी के पास जाएं।',
            '<strong>बायोमेट्रिक e-KYC:</strong> सीएससी वीएलई (CSC VLE) के माध्यम से फिंगरप्रिंट स्कैनर द्वारा e-KYC कराएं।',
            '<strong>भूलेख सत्यापन:</strong> अपने क्षेत्र के पटवारी / लेखपाल से मिलकर अपने खतौनी रिकॉर्ड का फिजिकल वेरिफिकेशन पोर्टल पर अपडेट कराएं।'
        ],
        'problems': [
            {
                'title': '1. स्टेटस में "Land Seeding: NO" दिख रहा है — इसे "YES" कैसे करवाएं?',
                'desc': 'लैंड सीडिंग नो होने के कारण लाखों किसानों की ₹2000 की किस्त रुक जाती है।',
                'points': [
                    '<strong>समाधान:</strong> अपने ज़िले की नवीनतम <strong>डिजिटल भूलेख खतौनी</strong> की फोटोकॉपी, आधार कार्ड और बैंक पासबुक लेकर अपने क्षेत्र के <strong>तहसील / पटवारी (लेखपाल)</strong> या उप कृषि निदेशक (DAO) कार्यालय जाएं।',
                    'अधिकारी PM-Kisan स्टेट पोर्टल पर आपकी खतौनी अपलोड करके लैंड सीडिंग को 7 से 15 दिनों में \'YES\' कर देते हैं।'
                ]
            },
            {
                'title': '2. e-KYC स्टेटस पेंडिंग है — मोबाइल से 1 मिनट में Face Auth e-KYC कैसे करें?',
                'desc': 'ओटीपी न आने या बायोमेट्रिक सेंटर न जा पाने वाले किसानों के लिए सबसे तेज़ समाधान।',
                'points': [
                    '<strong>समाधान:</strong> Google Play Store से <strong>PM Kisan GOI App</strong> और <strong>Aadhaar FaceRD App</strong> इंस्टॉल करें।',
                    'ऐप में आधार नंबर से लॉगिन करें और \'Face Authentication e-KYC\' पर क्लिक करके अपना चेहरा स्कैन करें। किसी ओटीपी या फिंगरप्रिंट मशीन की आवश्यकता नहीं है।'
                ]
            },
            {
                'title': '3. "Aadhaar Bank Account Not Seeded (DBT Failure)" का त्वरित समाधान',
                'desc': 'बैंक खाता आधार से जुड़ा होने के बाद भी NPCI मैपर में डीबीटी एक्टिव न होने से पैसा वापस चला जाता है।',
                'points': [
                    '<strong>समाधान:</strong> अपने नज़दीकी <strong>इंडिया पोस्ट पेमेंट्स बैंक (IPPB - Post Office)</strong> जाएं और मात्र ₹100 में नया DBT-इनेबल्ड खाता खुलवाएं।',
                    'IPPB खाता खुलते ही 48 घंटे में स्वतः NPCI मैपर पर सीड हो जाता है और अगली किस्त का पैसा सीधे इसी में आ जाता है।'
                ]
            },
            {
                'title': '4. किस्त रुकने के बाद क्या पिछली सभी बकाया किस्तों (Backlog) का पैसा मिलेगा?',
                'desc': 'समस्या ठीक होने के बाद पुरानी किस्तों के भुगतान का सरकारी नियम।',
                'points': [
                    '<strong>समाधान:</strong> हाँ! जैसे ही आपकी लैंड सीडिंग, e-KYC और DBT सीडिंग पूर्ण हो जाती है, अगली किस्त जारी होते समय सरकार द्वारा रुकी हुई सभी पिछली किस्तें (Backlog Dues) एक साथ आपके खाते में भेजी जाती हैं।'
                ]
            },
            {
                'title': '5. नया किसान आवेदन "Rejected by State/District" हो गया — री-अप्लाई कैसे करें?',
                'desc': 'खतौनी विवरण गलत होने या नाम मिसमैच के कारण आवेदन रिजेक्ट होने पर सुधार।',
                'points': [
                    '<strong>समाधान:</strong> Farmers Corner में <strong>\'Updation of Self Registered Farmer\'</strong> पर जाएं, आधार नंबर दर्ज करके खतौनी व नाम की त्रुटि सुधारें और फ्रेश खतौनी अपलोड करके री-सबमिट करें।'
                ]
            },
            {
                'title': '6. पिता/पति की मृत्यु के बाद वारिस (Virasat) के आधार पर पीएम किसान ट्रांसफर कैसे करें?',
                'desc': 'परिवार के मुखिया के निधन के बाद नए उत्तराधिकारी के नाम पर सम्मान निधि चालू कराने की प्रक्रिया।',
                'points': [
                    '<strong>समाधान:</strong> तहसील से वरासत दर्ज कराकर नई खतौनी में अपना नाम दर्ज कराएं। फिर मृतक का नाम हटाने हेतु फॉर्म भरकर नए नाम से PM-Kisan पोर्टल पर न्यू रजिस्ट्रेशन करें।'
                ]
            }
        ],
        'faqs': [
            {'q': 'पीएम किसान सम्मान निधि योजना के तहत प्रति वर्ष कितना पैसा मिलता है?', 'a': 'पीएम किसान योजना के तहत पात्र किसान परिवारों को प्रति वर्ष ₹6,000 (छह हजार रुपये) की आर्थिक सहायता मिलती है, जो ₹2,000-₹2,000 की तीन समान किस्तों में 4-4 महीने पर सीधे बैंक खाते में भेजी जाती है।'},
            {'q': 'पीएम किसान 19वीं और 20वीं किस्त का स्टेटस ऑनलाइन कैसे चेक करें?', 'a': '<code>pmkisan.gov.in</code> पर जाएं, \'Know Your Status\' पर क्लिक करें, अपना रजिस्ट्रेशन नंबर या मोबाइल नंबर और कैप्चा दर्ज करें। स्क्रीन पर किस्त की स्थिति, FTO प्रोसेस्ड और बैंक ट्रांसफर स्टेटस दिख जाएगा।'},
            {'q': 'पीएम किसान का रजिस्ट्रेशन नंबर भूल जाने पर कैसे पता करें?', 'a': '\'Know Your Status\' पेज पर दिए गए \'Know Your Registration Number\' लिंक पर क्लिक करें। अपना आधार नंबर या मोबाइल नंबर दर्ज करके OTP से तुरंत अपना 11 अंकों का रजिस्ट्रेशन नंबर प्राप्त करें।'},
            {'q': 'क्या पति और पत्नी दोनों एक साथ पीएम किसान का लाभ ले सकते हैं?', 'a': 'नहीं, पीएम किसान योजना के नियमानुसार एक किसान परिवार (पति, पत्नी और नाबालिग बच्चे) में से केवल एक ही व्यक्ति को योजना का लाभ मिल सकता है।'},
            {'q': 'पीएम किसान e-KYC करने की अंतिम तिथि क्या है?', 'a': 'e-KYC एक निरंतर अनिवार्य प्रक्रिया है। अगली किस्त का लाभ पाने के लिए प्रत्येक किसान को किस्त जारी होने से पहले e-KYC पूर्ण करना आवश्यक है।'},
            {'q': 'यदि बैंक खाता बदल गया हो तो नया खाता कैसे अपडेट करें?', 'a': 'पीएम किसान में बैंक खाता नंबर बदलने की आवश्यकता नहीं होती, क्योंकि भुगतान सीधे आधार नंबर पर (Aadhaar Based DBT) होता है। अपने जिस भी बैंक खाते में NPCI डीबीटी लिंक कराएंगे, पैसा स्वतः उसी में आएगा।'},
            {'q': 'किस्त का पैसा कब-कब आता है (Installment Months)?', 'a': 'प्रथम किस्त: अप्रैल से जुलाई, द्वितीय किस्त: अगस्त से नवंबर, और तृतीय किस्त: दिसंबर से मार्च के मध्य केंद्र सरकार द्वारा जारी की जाती है।'},
            {'q': 'FTO का मतलब क्या होता है (What is FTO Generated)?', 'a': 'FTO का अर्थ \'Fund Transfer Order\' है। यदि स्टेटस में \'FTO is Generated and Payment confirmation is pending\' दिख रहा है, तो इसका अर्थ है कि सरकार ने भुगतान का आदेश जारी कर दिया है और 24-48 घंटे में पैसा खाते में आ जाएगा।'},
            {'q': 'पीएम किसान टोल-फ्री हेल्पलाइन नंबर क्या है?', 'a': 'पीएम किसान का राष्ट्रीय हेल्पलाइन नंबर <strong>155261</strong> और <strong>011-24300606</strong> / <strong>1800-115-526</strong> है।'},
            {'q': 'किराए पर खेती करने वाले (Batai/Tenant) किसानों को लाभ मिलता है या नहीं?', 'a': 'नहीं, योजना के नियमानुसार लाभ केवल उन्हीं किसानों को मिलता है जिनके नाम पर राजस्व रिकॉर्ड में खेती की भूमि का मालिकाना हक दर्ज है।'}
        ],
        'related_services': [
            {'icon': '💳', 'title': 'Kisan Credit Card (KCC)', 'url': '../service/kisan-credit-card.html', 'desc': '4% रियायती ब्याज दर पर ₹3 लाख तक का कृषि व पशुपालन ऋण।'},
            {'icon': '🌾', 'title': 'PM Fasal Bima Yojana', 'url': '../service/pm-fasal-bima-yojana.html', 'desc': 'बाढ़, सूखा व प्राकृतिक आपदाओं से फसल नुकसान पर 100% क्लेम।'},
            {'icon': '☀️', 'title': 'PM Kusum Solar Pump Yojana', 'url': '../service/pm-kusam-solar-pump-apply.html', 'desc': 'खेतों में सोलर पंप लगाने पर 90% तक की भारी सरकारी सब्सिडी।'},
            {'icon': '🆔', 'title': 'Farmer ID Card (AgriStack)', 'url': '../service/farmer-id-card-agristack.html', 'desc': 'किसानों के लिए 12 अंकों का डिजिटल फार्मर आईडी व ई-गिरदावरी कार्ड।'}
        ]
    },

    'pm-surya-ghar-muft-bijli': {
        'slug': 'pm-surya-ghar-muft-bijli',
        'title_hi': 'पीएम सूर्य घर मुफ्त बिजली योजना 2026: 300 यूनिट फ्री बिजली, ऑनलाइन आवेदन व ₹78,000 सोलर सब्सिडी',
        'title_en': 'PM Surya Ghar Muft Bijli Yojana 2026: Apply Online, 300 Units Free Electricity & ₹78000 Solar Subsidy',
        'desc_hi': 'पीएम सूर्य घर मुफ्त बिजली योजना 2026 में ऑनलाइन आवेदन करें। छत पर सोलर पैनल लगाने पर ₹78,000 तक की सीधी DBT सब्सिडी, 300 यूनिट मुफ़्त बिजली, डिस्कॉम नेट मीटरिंग व सोलर लोन।',
        'desc_en': 'Apply online for PM Surya Ghar Muft Bijli Yojana 2026. Get up to ₹78,000 direct DBT rooftop solar subsidy, 300 units free solar electricity every month, DISCOM net meter & low-interest loan.',
        'category': 'utilities',
        'category_name_hi': 'ऊर्जा, सौर एवं सार्वजनिक उपयोगिताएं',
        'gov_link': 'https://pmsuryaghar.gov.in/',
        'gov_link_label': 'PM Surya Ghar National Portal (pmsuryaghar.gov.in)',
        'portal_name': 'PM Surya Ghar National Rooftop Solar Portal',
        'helpline': '15555 / 1800-180-3333',
        'badge': '☀️ PM SURYA GHAR ROOFTOP SOLAR MISSION',
        'official_actions': [
            {'label': '🌐 PM Surya Ghar National Portal', 'url': 'https://pmsuryaghar.gov.in/', 'bg': '#2563eb', 'border': '#3b82f6'},
            {'label': '🧮 Solar Rooftop Subsidy Calculator', 'url': 'https://pmsuryaghar.gov.in/calculator', 'bg': '#059669', 'border': '#10b981'},
            {'label': '📝 Consumer Online Registration & Apply', 'url': 'https://pmsuryaghar.gov.in/consumerRegistration', 'bg': '#d97706', 'border': '#f59e0b'},
            {'label': '🏢 Empanelled Solar Vendors List', 'url': 'https://pmsuryaghar.gov.in/vendorList', 'bg': '#7c3aed', 'border': '#8b5cf6'}
        ],
        'key_stats': [
            {'val': '₹78,000', 'lbl': 'अधिकतम सीधी सरकारी सब्सिडी (Direct DBT Subsidy)'},
            {'val': '300 यूनिट', 'lbl': 'प्रति माह मुफ़्त सौर बिजली (Free Monthly Power)'},
            {'val': '1 करोड़', 'lbl': 'आवासीय छत लक्ष्य (1 Crore Households Target)'},
            {'val': '~7% ब्याज़', 'lbl': 'बिना गारंटी सोलर लोन (Collateral-Free Solar Loan)'}
        ],
        'overview_hi': '''पीएम सूर्य घर: मुफ्त बिजली योजना (PM Surya Ghar Muft Bijli Yojana) प्रधानमंत्री नरेंद्र मोदी द्वारा शुरू की गई एक क्रांतिकारी राष्ट्रीय सौर ऊर्जा पहल है। इस योजना का मुख्य उद्देश्य देश के 1 करोड़ मध्यमवर्गीय और गरीब परिवारों के घरों की छतों (Rooftops) पर सोलर पैनल स्थापित करके उन्हें हर महीने <strong>300 यूनिट तक मुफ्त बिजली</strong> उपलब्ध कराना और अतिरिक्त उत्पादित बिजली को ग्रिड को बेचकर हर साल ₹15,000 से ₹25,000 तक की अतिरिक्त आय का साधन बनाना है।

योजना के तहत भारत सरकार द्वारा रूफटॉप सोलर लगाने पर भारी प्रत्यक्ष सब्सिडी (DBT) दी जाती है:
* **1 किलोवाट (1 kW) सिस्टम पर:** ₹30,000 की सीधी सब्सिडी
* **2 किलोवाट (2 kW) सिस्टम पर:** ₹60,000 की सीधी सब्सिडी
* **3 किलोवाट (3 kW) या उससे अधिक पर:** ₹78,000 की अधिकतम फिक्स सब्सिडी

नेट मीटरिंग कमीशनिंग के मात्र 30 दिनों के भीतर यह सब्सिडी सीधे उपभोक्ता के बैंक खाते में DBT के माध्यम से ट्रांसफर कर दी जाती है।''',
        'overview_en': '''PM Surya Ghar: Muft Bijli Yojana is a landmark national green energy mission launched by the Government of India with an outlay of ₹75,021 crore. The initiative aims to solarize 1 Crore residential rooftops across India, providing up to <strong>300 units of free clean solar electricity per month</strong> to households while allowing them to earn supplemental income by exporting surplus power back to the grid via bi-directional Net Metering.

The Ministry of New and Renewable Energy (MNRE) provides generous upfront Direct Benefit Transfer (DBT) subsidies:
* **1 kW Rooftop Solar:** Flat ₹30,000 subsidy
* **2 kW Rooftop Solar:** Flat ₹60,000 subsidy
* **3 kW & Above Rooftop Solar:** Flat ₹78,000 maximum subsidy

Nationalized banks including SBI, PNB, and Canara Bank provide collateral-free low-interest solar rooftop loans at ~7% interest with tenures up to 10 years, making solar installation accessible with near-zero out-of-pocket investment.''',
        'eligibility_points': [
            '<strong>भारतीय आवासीय उपभोक्ता:</strong> आवेदक भारत का नागरिक होना चाहिए और उसके पास अपना स्वतंत्र आवासीय मकान या पक्की छत होनी चाहिए।',
            '<strong>वैध बिजली कनेक्शन:</strong> आवेदक के नाम पर स्थानीय डिस्कॉम (DISCOM / Electricity Board) का वैध घरेलू बिजली कनेक्शन व उपभोक्ता संख्या (CA/Consumer Number) होनी चाहिए।',
            '<strong>छत पर पर्याप्त छाया-मुक्त स्थान:</strong> 1 किलोवाट सोलर पैनल के लिए कम से कम 100 वर्ग फुट (sq. ft.) धूप वाली खुली छत आवश्यक है।',
            '<strong>पूर्व में सोलर सब्सिडी न ली हो:</strong> आवेदक ने उसी बिजली कनेक्शन पर पहले किसी केंद्रीय सोलर सब्सिडी का लाभ न लिया हो।'
        ],
        'documents_points': [
            '<strong>नवीनतम बिजली बिल (Electricity Bill):</strong> पिछले 6 महीनों का कोई भी एक पेड बिजली बिल।',
            '<strong>आधार कार्ड (Aadhaar Card):</strong> बिजली कनेक्शन धारक का आधार कार्ड।',
            '<strong>बैंक पासबुक / कैंसिल्ड चेक:</strong> आवेदक का आधार-सीडेड बैंक खाता (सब्सिडी क्रेडिट हेतु)।',
            '<strong>छत की तस्वीर (Rooftop Photo):</strong> मकान की खुली छत की स्पष्ट तस्वीर।',
            '<strong>मोबाइल नंबर:</strong> आधार व बिजली बिल से जुड़ा सक्रिय मोबाइल नंबर।'
        ],
        'steps_online': [
            '<strong>रजिस्ट्रेशन:</strong> <code>pmsuryaghar.gov.in</code> पर जाएं, अपना State, Electricity Distribution Company (DISCOM), Consumer Account Number और मोबाइल दर्ज करें।',
            '<strong>रूफटॉप सोलर आवेदन:</strong> लॉगिन करके \'Apply for Rooftop Solar\' फॉर्म भरें, अपने लोड (Sanctioned Load) के अनुसार सोलर क्षमता (जैसे 3 kW) चुनें और बिजली बिल अपलोड करें।',
            '<strong>डिस्कॉम तकनीकी स्वीकृति (Feasibility Approval):</strong> डिस्कॉम 15 दिनों के भीतर ऑनलाइन फीजिबिलिटी अप्रूवल जारी करता है।',
            '<strong>अनुमोदित वेंडर से इंस्टॉलेशन:</strong> पोर्टल पर सूचीबद्ध डिस्कॉम-रजिस्टर्ड वेंडर में से किसी एक को चुनें और सोलर प्लांट स्थापित कराएं।',
            '<strong>नेट मीटर व सब्सिडी ट्रांसफर:</strong> वेंडर वर्क कम्पलीशन रिपोर्ट डालेगा। डिस्कॉम नेट मीटर लगाकर इंस्पेक्शन करेगा और 30 दिनों में ₹78,000 की सब्सिडी आपके खाते में आ जाएगी।'
        ],
        'steps_offline': [
            '<strong>नज़दीकी डिस्कॉम सब-स्टेशन या CSC जाएं:</strong> अपने बिजली बिल और आधार के साथ स्थानीय विद्युत उपकेंद्र या जन सेवा केंद्र जाएं।',
            '<strong>वेंडर से कोटेशन लें:</strong> अपने क्षेत्र के अधिकृत सोलर वेंडर्स से संपर्क करके ऑन-साइट रूफटॉप सर्वे और कोटेशन प्राप्त करें।',
            '<strong>सोलर लोन आवेदन:</strong> यदि लोन लेना चाहते हैं, तो SBI या PNB की नज़दीकी शाखा में पीएम सूर्य घर लोन हेतु संपर्क करें।'
        ],
        'problems': [
            {
                'title': '1. डिस्कॉम द्वारा टेक्निकल फीजिबिलिटी (Feasibility Approval) में देरी होने पर क्या करें?',
                'desc': 'डिस्कॉम स्तर पर 15 दिन से अधिक समय तक आवेदन पेंडिंग रहने का समाधान।',
                'points': [
                    '<strong>समाधान:</strong> पोर्टल पर अपने डिस्कॉम नोडल ऑफिसर (DISCOM Nodal Officer) का ईमेल व मोबाइल नंबर देखें।',
                    'पोर्टल के ग्रिवांस सेल <code>pmsuryaghar.gov.in/grievance</code> पर शिकायत दर्ज करें या अपने सब-डिवीजन के SDO (बिजली विभाग) से संपर्क करें।'
                ]
            },
            {
                'title': '2. ₹78,000 की DBT सब्सिडी बैंक खाते में कब और कैसे क्रेडिट होती है?',
                'desc': 'नेट मीटर लगने के बाद सब्सिडी आने का समय और बैंक विवरण मिसमैच सुधार।',
                'points': [
                    '<strong>समाधान:</strong> नेट मीटरिंग इंस्पेक्शन और कमिशनिंग रिपोर्ट (Commissioning Certificate) जारी होने के ठीक 30 दिनों के भीतर MNRE द्वारा पीएफएमएस (PFMS) के माध्यम से सब्सिडी भेजी जाती है।',
                    'सुनिश्चित करें कि पोर्टल पर दिया गया बैंक खाता आवेदक के आधार से सीडेड (Aadhaar Seeded Active) हो।'
                ]
            },
            {
                'title': '3. क्या किराएदार (Tenants) या अपार्टमेंट फ्लैट्स में रहने वाले सोलर लगवा सकते हैं?',
                'desc': 'अपार्टमेंट आरडब्ल्यूए (RWA) और किराएदारों के लिए सोलर नियम।',
                'points': [
                    '<strong>समाधान:</strong> किराएदार मकान मालिक की लिखित एनओसी (NOC) और बिजली कनेक्शन मालिक के नाम से आवेदन कर सकते हैं।',
                    'ग्रुप हाउसिंग सोसायटियों (GHS/RWA) के लिए कॉमन एरिया लाइटिंग व लिफ्ट हेतु 500 kW तक ₹18,000 प्रति kW की विशेष सब्सिडी उपलब्ध है।'
                ]
            },
            {
                'title': '4. अधिकृत वेंडर चुनते समय सोलर पैनल और इन्वर्टर वारंटी कैसे चेक करें?',
                'desc': 'घटिया क्वालिटी के उपकरण और फर्जी वेंडरों से बचने के नियम।',
                'points': [
                    '<strong>समाधान:</strong> हमेशा केवल <strong>ALMM (Approved List of Models and Manufacturers)</strong> प्रमाणित DCR (Domestic Content Requirement) मेड इन इंडिया सोलर पैनल्स ही लगवाएं।',
                    'वेंडर से 5 वर्ष का कॉम्प्रिहेंसिव मेंटेनेंस एग्रीमेंट (CMC), 25 वर्ष की पैनल परफॉरमेंस वारंटी और 5-8 वर्ष की इन्वर्टर वारंटी कार्ड अवश्य लें।'
                ]
            },
            {
                'title': '5. बिना ITR के 7% ब्याज पर सोलर लोन (SBI / PNB Surya Ghar Loan) कैसे प्राप्त करें?',
                'desc': 'कम आय वाले परिवारों के लिए आसान बैंक फाइनेंसिंग की प्रक्रिया।',
                'points': [
                    '<strong>समाधान:</strong> जनसमर्थ पोर्टल (<code>jansamarth.in</code>) या SBI Yono App पर जाएं। ₹3 लाख तक के सोलर लोन के लिए किसी कॉलेटरल (गिरवी संपत्ति) या आईटीआर की आवश्यकता नहीं होती।',
                    'बिजली बिल और आधार से 7% रियायती ब्याज दर पर 10 वर्ष के लिए मासिक ₹1000-₹1500 की आसान ईएमआई पर लोन स्वीकृत हो जाता है।'
                ]
            },
            {
                'title': '6. बारिश और सर्दियों के मौसम में सोलर उत्पादन कम होने पर बिजली बिल कैसे बनता है?',
                'desc': 'नेट मीटरिंग ग्रिड बिलिंग का वास्तविक गणित और यूनिट एडजस्टमेंट।',
                'points': [
                    '<strong>समाधान:</strong> नेट मीटरिंग के तहत गर्मियों में पैदा हुई अतिरिक्त बिजली डिस्कॉम ग्रिड के खाते में बैंक (Banked Units) हो जाती है।',
                    'सर्दियों या बरसात में जब उत्पादन कम होता है, तो पहले से बैंक की गई यूनिट्स से बिल स्वतः एडजस्ट हो जाता है और बिल शून्य (₹0) रहता है।'
                ]
            }
        ],
        'faqs': [
            {'q': 'पीएम सूर्य घर मुफ्त बिजली योजना के तहत कितनी सब्सिडी मिलती है?', 'a': '1 किलोवाट सिस्टम पर ₹30,000, 2 किलोवाट सिस्टम पर ₹60,000 और 3 किलोवाट या उससे अधिक क्षमता के रूफटॉप सोलर पर अधिकतम ₹78,000 की फिक्स डायरेक्ट DBT सब्सिडी मिलती है।'},
            {'q': '3 किलोवाट सोलर लगाने में कुल कितना खर्च आता है और सब्सिडी के बाद कितना लगेगा?', 'a': '3 kW सोलर सिस्टम की कुल लागत लगभग ₹1,45,000 से ₹1,55,000 आती है। इसमें सरकार द्वारा ₹78,000 की सब्सिडी मिलने के बाद उपभोक्ता को मात्र ₹65,000 से ₹75,000 का शुद्ध भुगतान करना होता है।'},
            {'q': '3 किलोवाट का सोलर पैनल प्रतिदिन कितनी बिजली बनाता है?', 'a': '3 kW का सोलर पैनल औसतन 12 से 15 यूनिट बिजली प्रतिदिन (प्रति माह लगभग 360 से 450 यूनिट) उत्पन्न करता है, जिससे 300 यूनिट की घरेलू खपत पूरी तरह मुफ़्त हो जाती है।'},
            {'q': 'पीएम सूर्य घर योजना में आवेदन करने की अंतिम तिथि क्या है?', 'a': 'पीएम सूर्य घर 1 करोड़ घरों को कवर करने वाला राष्ट्रीय मिशन है। 2026-2027 तक यह योजना निरंतर चालू है और पहले आओ-पहले पाओ के आधार पर सब्सिडी जारी की जा रही है।'},
            {'q': 'सोलर लगाने के लिए छत पर कितनी जगह (Roof Area) चाहिए?', 'a': 'प्रति 1 किलोवाट सोलर पैनल के लिए लगभग 100 वर्ग फुट (100 sq. ft.) छाया-मुक्त छत की आवश्यकता होती है। 3 किलोवाट के लिए लगभग 300 वर्ग फुट खुली छत पर्याप्त है।'},
            {'q': 'सब्सिडी का पैसा कितने दिनों में खाते में आता है?', 'a': 'डिस्कॉम द्वारा नेट मीटर लगाने और कमिशनिंग सर्टिफिकेट जारी करने के 30 दिनों के भीतर प्रत्यक्ष लाभ अंतरण (DBT) के माध्यम से सब्सिडी सीधे बैंक खाते में आ जाती है।'},
            {'q': 'क्या सोलर पैनल लगाने के बाद बैटरी लगवाना अनिवार्य है?', 'a': 'नहीं, पीएम सूर्य घर योजना ग्रिड-कनेक्टेड (On-Grid) रूफटॉप सोलर सिस्टम पर आधारित है। इसमें महंगी बैटरियों की कोई आवश्यकता नहीं होती, ग्रिड ही बैटरी की तरह कार्य करता है।'},
            {'q': 'क्या पुरानी छतों या एस्बेस्टस शेड पर सोलर लग सकता है?', 'a': 'हाँ, आरसीसी पक्की छत, टीन शेड या मजबूत एस्बेस्टस स्ट्रक्चर पर माउंटिंग स्ट्रक्चर के साथ सोलर पैनल सुरक्षित रूप से लगाए जा सकते हैं।'},
            {'q': 'सोलर पैनल की लाइफ और मेंटेनेंस कितना होता है?', 'a': 'सोलर पैनल्स की लाइफ 25 वर्ष से अधिक होती है। इनमें कोई मूविंग पार्ट न होने के कारण मेंटेनेंस नगण्य होता है, बस 10-15 दिनों में एक बार पानी से धूल साफ करनी होती है।'},
            {'q': 'पीएम सूर्य घर योजना का आधिकारिक हेल्पलाइन नंबर क्या है?', 'a': 'योजना का राष्ट्रीय टोल-फ्री हेल्पलाइन नंबर <strong>15555</strong> और <strong>1800-180-3333</strong> है।' }
        ],
        'related_services': [
            {'icon': '⚡', 'title': 'Electricity Bill Payment & New Connection', 'url': '../service/electricity-connection-bill.html', 'desc': 'नया घरेलू बिजली कनेक्शन आवेदन व ऑनलाइन बिल भुगतान पोर्टल।'},
            {'icon': '🚜', 'title': 'PM Kusum Solar Pump Scheme', 'url': '../service/pm-kusam-solar-pump-apply.html', 'desc': 'किसानों के लिए 90% सब्सिडी पर सोलर सिंचाई पंप योजना।'},
            {'icon': '🏠', 'title': 'PM Awas Yojana (PMAY Urban/Gramin)', 'url': '../service/pm-awas-yojana.html', 'desc': 'पक्के मकान निर्माण के लिए ₹2.5 लाख तक की सीधी सरकारी सहायता।'},
            {'icon': '🔥', 'title': 'PM Ujjwala Yojana Free Gas', 'url': '../service/pm-ujjwala-yojana.html', 'desc': 'मुफ्त गैस कनेक्शन और रिफिल सब्सिडी योजना।'}
        ]
    },

    'pm-vishwakarma-yojana': {
        'slug': 'pm-vishwakarma-yojana',
        'title_hi': 'पीएम विश्वकर्मा योजना 2026: ₹15,000 फ्री टूलकिट, 5% ब्याज पर ₹3 लाख लोन, 18 ट्रेड व ऑनलाइन आवेदन',
        'title_en': 'PM Vishwakarma Yojana 2026: Free ₹15,000 Toolkit, 5% Collateral-Free Loan, 18 Trades & Apply Online',
        'desc_hi': 'पीएम विश्वकर्मा योजना 2026 के तहत पारंपरिक कारीगरों व शिल्पकारों को ₹15,000 का मुफ़्त आधुनिक टूलकिट ई-वाउचर, ₹3 लाख तक का 5% ब्याज ऋण, फ्री स्किल ट्रेनिंग व आईडी कार्ड।',
        'desc_en': 'PM Vishwakarma Scheme 2026 apply online. Get free ₹15,000 toolkit e-voucher, ₹3 Lakh collateral-free loan at 5% interest, daily stipend skill training & PM Vishwakarma ID card across 18 trades.',
        'category': 'government-schemes',
        'category_name_hi': 'कौशल विकास, एमएसएमई एवं स्वरोजगार योजनाएं',
        'gov_link': 'https://pmvishwakarma.gov.in/',
        'gov_link_label': 'PM Vishwakarma Official Portal (pmvishwakarma.gov.in)',
        'portal_name': 'PM Vishwakarma Portal (Ministry of MSME)',
        'helpline': '1800-267-7777 / 011-23061500',
        'badge': '🔨 PRADHAN MANTRI VISHWAKARMA SCHEME',
        'official_actions': [
            {'label': '🌐 PM Vishwakarma Official Portal', 'url': 'https://pmvishwakarma.gov.in/', 'bg': '#2563eb', 'border': '#3b82f6'},
            {'label': '📝 How to Register (CSC VLE Login)', 'url': 'https://pmvishwakarma.gov.in/Home/HowToRegister', 'bg': '#059669', 'border': '#10b981'},
            {'label': '🔍 Track Vishwakarma Application Status', 'url': 'https://pmvishwakarma.gov.in/Home/BeneficiaryLogin', 'bg': '#d97706', 'border': '#f59e0b'},
            {'label': '📜 List of 18 Eligible Traditional Trades', 'url': 'https://pmvishwakarma.gov.in/Home/Trades', 'bg': '#7c3aed', 'border': '#8b5cf6'}
        ],
        'key_stats': [
            {'val': '₹15,000', 'lbl': 'मुफ़्त आधुनिक टूलकिट ग्रांट (Toolkit E-Voucher)'},
            {'val': '₹3,00,000', 'lbl': '5% रियायती ब्याज पर लोन (Collateral-Free Loan)'},
            {'val': '18 ट्रेड्स', 'lbl': 'पारंपरिक कारीगर श्रेणियां (Traditional Artisan Trades)'},
            {'val': '₹500 / दिन', 'lbl': 'प्रशिक्षण वजीफा (Daily Skill Stipend)'}
        ],
        'overview_hi': '''पीएम विश्वकर्मा योजना (PM Vishwakarma Yojana) भारत के पारंपरिक कारीगरों, शिल्पकारों और दस्तकारों को आर्थिक रूप से सशक्त बनाने और उनके पारंपरिक कौशल को आधुनिक बाजार से जोड़ने के लिए प्रधानमंत्री नरेंद्र मोदी द्वारा शुरू की गई ₹13,000 करोड़ की ऐतिहासिक केंद्रीय योजना है। यह योजना हाथों और औजारों से काम करने वाले 18 पारंपरिक व्यवसायों में लगे विश्वकर्मा भाई-बहनों को समग्र सहायता (End-to-End Support) प्रदान करती है।

योजना के प्रमुख लाभ:
1. **पहचान व प्रमाणन:** पीएम विश्वकर्मा डिजिटल सर्टिफिकेट और पहचान पत्र।
2. **कौशल संवर्धन (Skill Upgradation):** 5-7 दिन का बेसिक प्रशिक्षण और 15 दिन का एडवांस प्रशिक्षण (₹500 प्रति दिन वजीफा के साथ)।
3. **टूलकिट प्रोत्साहन:** आधुनिक डिजिटल टूल्स खरीदने के लिए **₹15,000 का निःशुल्क ई-वाउचर (e-RUPI)**।
4. **सस्ता ऋण (Enterprise Credit):** बिना किसी गारंटी (Collateral-Free) के 5% ब्याज दर पर ₹3,00,000 तक का लोन (प्रथम चरण में ₹1 लाख, द्वितीय चरण में ₹2 लाख)।''',
        'overview_en': '''PM Vishwakarma Scheme is a holistic central initiative designed to preserve, develop, and empower traditional artisans and craftspeople across India. With a total financial allocation of ₹13,000 crore, the scheme covers 18 traditional trades spanning carpentry, blacksmithing, pottery, masonry, sculpture, weaving, tailoring, and leathercraft.

Key pillars of PM Vishwakarma support include:
1. **Recognition:** Official PM Vishwakarma Certificate and National Artisan ID Card.
2. **Skill Development:** 5-7 days of basic skill training with a daily stipend of ₹500.
3. **Toolkit Incentive:** A non-refundable financial grant of **₹15,000 via e-RUPI voucher** for purchasing modern professional toolkits.
4. **Credit Support:** Collateral-free enterprise loans up to ₹3,00,000 at a highly subsidized 5% interest rate (₹1 Lakh in Tranche 1 and ₹2 Lakh in Tranche 2).''',
        'eligibility_points': [
            '<strong>18 पारंपरिक शिल्पों में संलग्न कारीगर:</strong> बढ़ई (Suthar), नाव बनाने वाले, अस्त्रकार, लोहार (Lohar), हथौड़ा व टूलकिट निर्माता, ताला बनाने वाले, सुनार (Sonar), कुम्हार (Kumhar), मूर्तिकार, मोची (Charmakar), राजमिस्त्री (Rajmistri), टोकरी/चटाई बुनकर, गुड़िया व खिलौना निर्माता, नाई (Barber), मालाकार (Garland Maker), धोबी (Dhobi), दर्जी (Darzi), और मछली का जाल बुनने वाले।',
            '<strong>आयु सीमा:</strong> आवेदन के दिन कारीगर की न्यूनतम आयु 18 वर्ष होनी चाहिए।',
            '<strong>परिवार में एक लाभार्थी:</strong> परिवार के किसी एक ही सदस्य को योजना का लाभ मिल सकता है।',
            '<strong>सरकारी सेवा में न हों:</strong> सरकारी कर्मचारी या उनके परिजन इस योजना के पात्र नहीं हैं।',
            '<strong>पूर्व में मुद्रा/PMEGP का डिफॉल्टर न हो:</strong> पिछले 5 वर्षों में समान केंद्रीय स्वरोजगार योजनाओं में सक्रिय बकाया न हो।'
        ],
        'documents_points': [
            '<strong>आधार कार्ड (Aadhaar Card):</strong> बायोमेट्रिक प्रमाणीकरण हेतु अनिवार्य।',
            '<strong>राशन कार्ड / परिवार पहचान पत्र:</strong> पारिवारिक विवरण सत्यापन हेतु।',
            '<strong>बैंक पासबुक (Aadhaar Seeded):</strong> ₹500 दैनिक वजीफा और लोन राशि प्राप्त करने हेतु।',
            '<strong>सक्रिय मोबाइल नंबर:</strong> आधार लिंक्ड मोबाइल (e-RUPI टूलकिट वाउचर हेतु)।',
            '<strong>ट्रेड से संबंधित कार्य का अनुभव प्रमाण / स्व-घोषणा:</strong> संबंधित पारंपरिक कार्य का विवरण।'
        ],
        'steps_online': [
            '<strong>सीएससी केंद्र विजिट:</strong> पीएम विश्वकर्मा में बायोमेट्रिक सत्यापन आवश्यक होने के कारण अपने नज़दीकी जन सेवा केंद्र (CSC Kendra) पर जाएं।',
            '<strong>बायोमेट्रिक प्रमाणीकरण:</strong> सीएससी वीएलई द्वारा आवेदक के आधार और मोबाइल का फिंगरप्रिंट/आईरिस बायोमेट्रिक ऑथेंटिकेशन किया जाएगा।',
            '<strong>ट्रेड चयन व व्यक्तिगत विवरण:</strong> अपनी 18 ट्रेडों में से सही पारंपरिक व्यवसाय चुनें, बैंक खाता और पारिवारिक विवरण भरें।',
            '<strong>3-स्तरीय सत्यापन (3-Stage Verification):</strong> ग्राम पंचायत प्रधान/नगर निकाय (Stage 1) -> जिला कार्यान्वयन समिति (Stage 2) -> राज्य स्क्रीनिंग समिति (Stage 3) से आवेदन स्वीकृत होता है।',
            '<strong>डिजिटल सर्टिफिकेट व टूलकिट वाउचर:</strong> स्वीकृति के बाद पोर्टल से पीएम विश्वकर्मा डिजिटल सर्टिफिकेट डाउनलोड करें और ट्रेनिंग सेंटर पर उपस्थित हों।'
        ],
        'steps_offline': [
            '<strong>ग्राम पंचायत प्रधान / नगर पालिका से संपर्क:</strong> अपने व्यवसाय की पुष्टि के लिए अपने ग्राम प्रधान, पार्षद या वार्ड सदस्य से मिलें।',
            '<strong>स्किल ट्रेनिंग सेंटर पर उपस्थिति:</strong> कॉल/एसएमएस आने पर आवंटित MSME/PMKK स्किल सेंटर पर 5-7 दिनों का बेसिक प्रशिक्षण पूरा करें।',
            '<strong>बैंक से लोन डिस्बर्सल:</strong> ट्रेनिंग पूरी होने पर बैंक शाखा से 5% ब्याज पर ₹1 लाख का प्रथम चरण का लोन प्राप्त करें।'
        ],
        'problems': [
            {
                'title': '1. ग्राम पंचायत / नगर निकाय (Stage 1) पर आवेदन पेंडिंग है — अप्रूवल कैसे कराएं?',
                'desc': 'आवेदन सबमिट करने के बाद लंबे समय तक ग्राम प्रधान या यूएलबी स्तर पर वेरिफिकेशन न होने का समाधान।',
                'points': [
                    '<strong>समाधान:</strong> अपने ग्राम पंचायत सचिव, ग्राम विकास अधिकारी (VDO) या नगर पालिका के अधिशासी अधिकारी (EO) से संपर्क करें।',
                    'उन्हें अपने पारंपरिक व्यवसाय के औजार दिखाकर पोर्टल पर लंबित वेरिफिकेशन सूची से अप्रूव करने का अनुरोध करें।'
                ]
            },
            {
                'title': '2. ₹15,000 का टूलकिट ई-वाउचर (e-RUPI Voucher) मोबाइल पर प्राप्त न होने पर क्या करें?',
                'desc': 'बेसिक ट्रेनिंग पूरी होने के बाद टूलकिट वाउचर एसएमएस न आने की स्थिति।',
                'points': [
                    '<strong>समाधान:</strong> बेसिक ट्रेनिंग पूर्ण होने के 7 दिनों के भीतर NPCI e-RUPI द्वारा आपके आधार लिंक्ड मोबाइल नंबर पर 16 अंकों का ई-वाउचर कोड और क्यूआर कोड भेजा जाता है।',
                    'यदि एसएमएस न मिले, तो <code>pmvishwakarma.gov.in</code> पर Beneficiary Login करके डिजिटल वाउचर पुनः प्राप्त कर सकते हैं और अधिकृत टूल स्टोर पर रिडीम कर सकते हैं।'
                ]
            },
            {
                'title': '3. प्रथम चरण का ₹1,00,000 का 5% लोन बैंक से कैसे स्वीकृत कराएं?',
                'desc': 'बैंक द्वारा अनावश्यक कागजात मांगने या लोन में देरी होने का समाधान।',
                'points': [
                    '<strong>समाधान:</strong> पीएम विश्वकर्मा का लोन 100% क्रेडिट गारंटी फंड ट्रस्ट फॉर माइक्रो एंड स्मॉल एंटरप्राइजेज (CGTMSE) द्वारा कवर होता है। बैंक आपसे कोई गारंटी या बंधक (Collateral) नहीं मांग सकता।',
                    'अपने बेसिक ट्रेनिंग सर्टिफिकेट के साथ संबंधित बैंक शाखा जाएं। किसी भी समस्या पर लीड बैंक मैनेजर (LDM) या जिला उद्योग केंद्र (DIC) से संपर्क करें।'
                ]
            },
            {
                'title': '4. 18 ट्रेडों में से गलत ट्रेड सिलेक्ट हो गया — सुधार (Correction) कैसे करें?',
                'desc': 'सीएससी ऑपरेटर द्वारा गलत व्यवसाय चुन दिए जाने पर सुधार की विधि।',
                'points': [
                    '<strong>समाधान:</strong> जब तक आवेदन Stage 1 (Gram Panchayat) पर है, तब तक ग्राम प्रधान/सचिव से आवेदन रिजेक्ट (Sent for Modification) कराकर सीएससी से पुनः सही ट्रेड चुना जा सकता है।'
                ]
            },
            {
                'title': '5. बेसिक ट्रेनिंग के दौरान प्रतिदिन ₹500 का स्टाइपेंड बैंक में कब आता है?',
                'desc': 'प्रशिक्षण भत्ता खाते में जमा होने की समय सीमा।',
                'points': [
                    '<strong>समाधान:</strong> 5 से 7 दिनों का प्रशिक्षण सफलतापूर्वक पूरा करने और बायोमेट्रिक उपस्थिति 80%+ होने पर कुल ₹2,500 से ₹3,500 का वजीफा 15 दिनों के भीतर सीधे आपके आधार लिंक्ड बैंक खाते में डीबीटी द्वारा भेजा जाता है।'
                ]
            },
            {
                'title': '6. परिवार में कितने सदस्य पीएम विश्वकर्मा योजना का लाभ ले सकते हैं?',
                'desc': 'पारिवारिक पात्रता संबंधी सरकारी नियम।',
                'points': [
                    '<strong>समाधान:</strong> पीएम विश्वकर्मा योजना के नियमों के अनुसार "एक परिवार, एक लाभ" (One Family, One Benefit) का नियम लागू है। परिवार (पति, पत्नी और अविवाहित बच्चे) में से केवल एक ही सदस्य टूलकिट और लोन का लाभ ले सकता है।'
                ]
            }
        ],
        'faqs': [
            {'q': 'पीएम विश्वकर्मा योजना के तहत टूलकिट के लिए कितने रुपये मिलते हैं?', 'a': 'पीएम विश्वकर्मा योजना के तहत बेसिक स्किल ट्रेनिंग पूरी करने वाले सभी पात्र कारीगरों को आधुनिक औजार खरीदने के लिए ₹15,000 (पंद्रह हजार रुपये) का निःशुल्क ई-वाउचर (e-RUPI) दिया जाता है। यह अनुदान पूरी तरह मुफ़्त है और इसे वापस नहीं लौटाना होता।'},
            {'q': 'पीएम विश्वकर्मा योजना में लोन की ब्याज दर कितनी है और कितना लोन मिलता है?', 'a': 'योजना में बिना किसी गारंटी (Collateral-Free) के कुल ₹3,00,000 तक का लोन मात्र 5% की रियायती ब्याज दर पर मिलता है। प्रथम चरण (Tranche 1) में ₹1,00,000 (18 महीने की अवधि) और इसके सफल भुगतान पर द्वितीय चरण (Tranche 2) में ₹2,00,000 (30 महीने की अवधि) का लोन मिलता है।'},
            {'q': 'पीएम विश्वकर्मा योजना में कौन-कौन सी 18 ट्रेड शामिल हैं?', 'a': 'बढ़ई, नाव निर्माता, अस्त्रकार, लोहार, हथौड़ा/टूलकिट निर्माता, ताला बनाने वाले, सुनार, कुम्हार, मूर्तिकार (पत्थर तराशने वाले), मोची (जूता कारीगर), राजमिस्त्री, टोकरी/झाड़ू/चटाई बुनकर, गुड़िया व खिलौना निर्माता, नाई, मालाकार, धोबी, दर्जी, और मछली का जाल बुनने वाले कारीगर शामिल हैं।'},
            {'q': 'क्या पीएम विश्वकर्मा योजना का ऑनलाइन फॉर्म खुद घर बैठे भर सकते हैं?', 'a': 'नहीं, पीएम विश्वकर्मा पोर्टल पर बायोमेट्रिक फिंगरप्रिंट सत्यापन अनिवार्य होने के कारण इसका पंजीकरण केवल अधिकृत जन सेवा केंद्रों (CSC Kendras) के माध्यम से ही किया जा सकता है।'},
            {'q': 'बेसिक स्किल ट्रेनिंग कितने दिनों की होती है और कहां होती है?', 'a': 'बेसिक ट्रेनिंग 5 से 7 दिनों (40 घंटे) की होती है जो आपके ज़िले के मान्यता प्राप्त कौशल विकास केंद्रों (PMKK / ITI / MSME सेंटर्स) पर आयोजित की जाती है।'},
            {'q': 'टूलकिट का ₹15,000 कैश में मिलता है या बैंक में?', 'a': 'टूलकिट प्रोत्साहन राशि कैश या सामान्य बैंक ट्रांसफर में नहीं मिलती, बल्कि यह आपके रजिस्टर्ड मोबाइल नंबर पर e-RUPI डिजिटल ई-वाउचर के रूप में आती है जिसे अधिकृत टूल डीलरों से आधुनिक औजार खरीदते समय स्कैन करके रिडीम किया जाता है।'},
            {'q': 'पीएम विश्वकर्मा प्रमाण पत्र और आईडी कार्ड कैसे डाउनलोड करें?', 'a': 'आवेदन के तीनों स्तरों पर स्वीकृत होने के बाद <code>pmvishwakarma.gov.in</code> पर Beneficiary Login करें और अपना फोटोयुक्त डिजिटल सर्टिफिकेट व आईडी कार्ड पीडीएफ में डाउनलोड करें।'},
            {'q': 'क्या दर्जी (Tailor) और नाई (Barber) भी ₹15,000 टूलकिट के पात्र हैं?', 'a': 'हाँ! दर्जी और नाई दोनों 18 अधिसूचित ट्रेडों में शामिल हैं। दर्जी आधुनिक सिलाई मशीन व कटिंग टूल्स हेतु और नाई आधुनिक हेयरड्रेसिंग व सैलून किट हेतु ₹15,000 का वाउचर प्राप्त कर सकते हैं।'},
            {'q': 'लोन न चुका पाने पर क्या सरकार सब्सिडी वापस ले लेगी?', 'a': 'टूलकिट का ₹15,000 और ट्रेनिंग का ₹500/दिन वजीफा पूरी तरह सरकारी अनुदान है जो कभी वापस नहीं लिया जाता। हालांकि, बैंक लोन का समय पर पुनर्भुगतान करने से आपका सिबिल स्कोर सुधरता है और दूसरे चरण में ₹2 लाख का बड़ा लोन मिलता है।'},
            {'q': 'पीएम विश्वकर्मा योजना का राष्ट्रीय हेल्पलाइन नंबर क्या है?', 'a': 'एमएसएमई मंत्रालय का राष्ट्रीय टोल-फ्री हेल्पलाइन नंबर <strong>1800-267-7777</strong> और <strong>011-23061500</strong> है।' }
        ],
        'related_services': [
            {'icon': '📝', 'title': 'Udyam MSME Registration Free', 'url': '../service/udyam-msme-registration.html', 'desc': 'छोटे उद्योगों व व्यापार के लिए मुफ्त सरकारी उद्यम प्रमाण पत्र।'},
            {'icon': '💰', 'title': 'PM Mudra Yojana Loan (PMMY)', 'url': '../service/pm-mudra-yojana.html', 'desc': 'शिशु, किशोर व तरुण श्रेणी में ₹10 लाख से ₹20 लाख तक का बिजनेस लोन।'},
            {'icon': '🛠️', 'title': 'PM Kaushal Vikas Yojana (PMKVY)', 'url': '../service/pm-kaushal-vikas-yojana.html', 'desc': 'युवाओं के लिए मुफ्त तकनीकी व वोकेशनल कौशल प्रशिक्षण।'},
            {'icon': '🛵', 'title': 'PM SVANidhi Street Vendor Loan', 'url': '../service/pm-svanidhi.html', 'desc': 'स्ट्रीट वेंडरों और रेहड़ी-पटरी वालों के लिए ₹50,000 तक का ब्याज मुक्त लोन।'}
        ]
    },

    'e-shram-card': {
        'slug': 'e-shram-card',
        'title_hi': 'ई-श्रम कार्ड ऑनलाइन रजिस्ट्रेशन 2026: UAN कार्ड डाउनलोड, ₹2 लाख दुर्घटना बीमा व सरकारी योजनाएं',
        'title_en': 'e-Shram Card 2026: Online Registration, Download UAN Card, ₹2 Lakh PMSBY Insurance & Benefits',
        'desc_hi': 'ई-श्रम कार्ड 2026 के लिए ऑनलाइन रजिस्ट्रेशन करें। 12 अंकों का UAN कार्ड तुरंत डाउनलोड करें, ₹2 लाख मुफ्त दुर्घटना बीमा, असंगठित कामगारों के लिए पेंशन, छात्रवृत्ति व सरकारी योजना लाभ।',
        'desc_en': 'Register for e-Shram Card online 2026. Download 12-digit UAN Card PDF instantly, get ₹2 Lakh accidental insurance cover under PMSBY, pension linkage and social security benefits for unorganized workers.',
        'category': 'government-schemes',
        'category_name_hi': 'श्रम एवं रोजगार कल्याण सेवाएं',
        'gov_link': 'https://eshram.gov.in/',
        'gov_link_label': 'e-Shram Portal (eshram.gov.in)',
        'portal_name': 'e-Shram National Database of Unorganised Workers (NDUW)',
        'helpline': '14434 / 1800-137-4111',
        'badge': '👷 NATIONAL DATABASE OF UNORGANISED WORKERS (e-SHRAM)',
        'official_actions': [
            {'label': '🌐 e-Shram Official National Portal', 'url': 'https://eshram.gov.in/', 'bg': '#2563eb', 'border': '#3b82f6'},
            {'label': '📝 Self Registration with Aadhaar & OTP', 'url': 'https://register.eshram.gov.in/#/user/self', 'bg': '#059669', 'border': '#10b981'},
            {'label': '🪪 Download / Update UAN Card Profile', 'url': 'https://register.eshram.gov.in/#/user/uan-login', 'bg': '#d97706', 'border': '#f59e0b'},
            {'label': '📋 Check Unorganised Worker Scheme Benefits', 'url': 'https://eshram.gov.in/scheme-benefits', 'bg': '#7c3aed', 'border': '#8b5cf6'}
        ],
        'key_stats': [
            {'val': '₹2,00,000', 'lbl': 'मुफ़्त दुर्घटना बीमा (Accidental Death Cover)'},
            {'val': '30+ करोड़', 'lbl': 'पंजीकृत श्रमिक (Registered Workers)'},
            {'val': '12-अंक UAN', 'lbl': 'यूनिवर्सल अकाउंट नंबर (Universal Account Card)'},
            {'val': '₹0 शुल्क', 'lbl': '100% मुफ़्त ऑनलाइन रजिस्ट्रेशन (Free Application)'}
        ],
        'overview_hi': '''ई-श्रम पोर्टल (e-Shram Portal) श्रम एवं रोजगार मंत्रालय, भारत सरकार द्वारा देश के लगभग 38 करोड़ असंगठित क्षेत्र के कामगारों (Unorganised Workers) का एक एकीकृत राष्ट्रीय डेटाबेस (NDUW) तैयार करने के लिए शुरू किया गया एक महा-अभियान है। इस पोर्टल पर पंजीकृत होने वाले प्रत्येक श्रमिक को 12 अंकों का एक अद्वितीय **यूनिवर्सल अकाउंट नंबर (Universal Account Number - UAN) कार्ड** जारी किया जाता है, जो पूरे भारत में आजीवन मान्य है।

ई-श्रम कार्ड धारक श्रमिकों को मिलने वाले प्रमुख लाभ:
1. **मुफ़्त दुर्घटना बीमा:** प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY) के तहत दुर्घटना में मृत्यु या पूर्ण विकलांगता पर ₹2,00,000 और आंशिक विकलांगता पर ₹1,00,000 का वित्तीय कवर।
2. **राष्ट्रीय आपदा एवं महामारी सहायता:** किसी भी राष्ट्रीय संकट या महामारी की स्थिति में केंद्र व राज्य सरकारों द्वारा सीधे डीबीटी सहायता।
3. **सामाजिक सुरक्षा योजनाओं का सीधा लाभ:** पीएम श्रम योगी मानधन पेंशन योजना (₹3000 मासिक पेंशन), आवास योजना, राशन कार्ड पोर्टेबिलिटी और मातृत्व लाभ का सीधा एकीकरण।''',
        'overview_en': '''The e-Shram Portal is a landmark initiative developed by the Ministry of Labour & Employment, Government of India, to construct the National Database of Unorganised Workers (NDUW). Over 30 Crore unorganised sector workers—including agricultural labourers, domestic workers, gig and platform workers, street vendors, building construction workers, and transport operators—are onboarded onto a single digital platform.

Upon registration, workers are issued an official 12-digit **Universal Account Number (UAN) e-Shram Card** which remains valid for a lifetime across all Indian States and Union Territories.

Key entitlements include:
1. **Accidental Insurance Cover:** Cashless protection under Pradhan Mantri Suraksha Bima Yojana (PMSBY) offering ₹2,00,000 for accidental death/permanent disability and ₹1,00,000 for partial disability.
2. **Direct Benefit Transfer (DBT):** Priority inclusion for cash assistance and emergency relief during national contingencies.
3. **Integrated Social Security:** Seamless digital access to central pension schemes (PM-SYM ₹3,000 monthly pension), health assurance, skill certification, and cross-state migration mapping.''',
        'eligibility_points': [
            '<strong>आयु सीमा:</strong> आवेदक की आयु 16 से 59 वर्ष के मध्य होनी चाहिए।',
            '<strong>असंगठित क्षेत्र का कामगार:</strong> गृह आधारित श्रमिक, स्वनियोजित कामगार, दैनिक वेतनभोगी, निर्माण मजदूर, रेहड़ी-पटरी विक्रेता, कृषि मजदूर, डिलीवरी बॉय, कैब ड्राइवर, घरेलू नौकरानी, दर्जी आदि।',
            '<strong>ईपीएफओ/ईएसआईसी सदस्य न हों:</strong> आवेदक EPFO (भविष्य निधि) या ESIC (कर्मचारी राज्य बीमा) का सक्रिय सदस्य नहीं होना चाहिए।',
            '<strong>आयकर दाता न हों:</strong> आवेदक आयकर (Income Tax) का भुगतान करने वाला नहीं होना चाहिए।'
        ],
        'documents_points': [
            '<strong>आधार कार्ड (Aadhaar Card):</strong> अनिवार्य पहचान पत्र।',
            '<strong>आधार लिंक्ड मोबाइल नंबर:</strong> ओटीपी प्रमाणीकरण हेतु सक्रिय सिम कार्ड।',
            '<strong>सक्रिय बैंक खाता विवरण:</strong> बैंक खाता संख्या और IFSC कोड (डीबीटी हेतु)।',
            '<strong>शैक्षणिक योग्यता व व्यवसाय प्रमाण (वैकल्पिक):</strong> कौशल या कार्य अनुभव विवरण।'
        ],
        'steps_online': [
            '<strong>पोर्टल विजिट:</strong> <code>eshram.gov.in</code> पर जाएं और \'Register on e-Shram\' पर क्लिक करें।',
            '<strong>आधार ओटीपी सत्यापन:</strong> अपना आधार नंबर दर्ज करें, कैप्चा भरें और रजिस्टर्ड मोबाइल पर आया 6 अंकों का OTP दर्ज करें।',
            '<strong>व्यक्तिगत व पता विवरण:</strong> वैवाहिक स्थिति, सामाजिक श्रेणी (General/OBC/SC/ST) और वर्तमान निवास पता दर्ज करें।',
            '<strong>व्यवसाय एवं कौशल (NCO Code):</strong> अपनी प्राथमिक कार्य श्रेणी (Primary Occupation) चुनें, जैसे राजमिस्त्री, कृषि मजदूर, प्लम्बर, ड्राइवर आदि।',
            '<strong>बैंक विवरण व UAN कार्ड डाउनलोड:</strong> अपना बैंक खाता नंबर व IFSC कोड भरें। पूर्वावलोकन (Preview) जांचें और सबमिट करके 12 अंकों का कलर UAN कार्ड तुरंत पीडीएफ में डाउनलोड करें।'
        ],
        'steps_offline': [
            '<strong>नज़दीकी सीएससी या राज्य सेवा केंद्र जाएं:</strong> यदि मोबाइल आधार से लिंक नहीं है, तो अपने नज़दीकी जन सेवा केंद्र (CSC Kendra) जाएं।',
            '<strong>बायोमेट्रिक फिंगरप्रिंट स्कैन:</strong> सीएससी वीएलई फिंगरप्रिंट स्कैनर द्वारा आपका बायोमेट्रिक e-KYC करेगा।',
            '<strong>कार्ड प्रिंट:</strong> रजिस्ट्रेशन पूरा होते ही सीएससी केंद्र से अपना लैमिनेटेड पीवीसी ई-श्रम कार्ड प्राप्त करें।'
        ],
        'problems': [
            {
                'title': '1. आधार से मोबाइल नंबर लिंक नहीं है या सिम खो गया है — ई-श्रम कार्ड कैसे बनाएं?',
                'desc': 'ओटीपी न आने की स्थिति में रजिस्ट्रेशन की वैकल्पिक विधि।',
                'points': [
                    '<strong>समाधान:</strong> अपने नज़दीकी कॉमन सर्विस सेंटर (CSC) या राज्य सेवा केंद्र जाएं।',
                    'वहां फिंगरप्रिंट (बायोमेट्रिक) या आईरिस स्कैनर के माध्यम से बिना किसी ओटीपी के ई-श्रम कार्ड 2 मिनट में बन जाता है।'
                ]
            },
            {
                'title': '2. ई-श्रम कार्ड पीडीएफ डाउनलोड करते समय फोटो या UAN नंबर न दिखने का समाधान',
                'desc': 'मोबाइल ब्राउज़र में ब्लैक कार्ड या मिसिंग फोटो एरर का त्वरित समाधान।',
                'points': [
                    '<strong>समाधान:</strong> <code>register.eshram.gov.in</code> पर जाएं, \'Already Registered -> Update Profile / Download UAN Card\' चुनें।',
                    'ओटीपी डालकर लॉगिन करें और Google Chrome के Desktop Mode में \'Download UAN Card\' पर क्लिक करें। फोटो व क्यूआर कोड सहित पूरा कार्ड डाउनलोड हो जाएगा।'
                ]
            },
            {
                'title': '3. बैंक खाता या व्यवसाय (Primary Occupation) ऑनलाइन कैसे अपडेट / चेंज करें?',
                'desc': 'गलत बैंक खाता या काम की श्रेणी बदल जाने पर सुधार की प्रक्रिया।',
                'points': [
                    '<strong>समाधान:</strong> ई-श्रम पोर्टल पर \'Update Profile\' में जाएं, आधार OTP से लॉगिन करें।',
                    '\'Bank Account Details\' या \'Occupation & Skills\' सेक्शन में जाकर नया खाता नंबर या नया व्यवसाय चुनकर \'Update\' पर क्लिक करें।'
                ]
            },
            {
                'title': '4. क्या प्राइवेट कंपनी में काम करने वाले या EPF कटने वाले ई-श्रम कार्ड बना सकते हैं?',
                'desc': 'अपात्रता (Ineligibility) और कानूनी नियमों की स्पष्टता।',
                'points': [
                    '<strong>समाधान:</strong> नहीं, जिन कामगारों का ईपीएफ (EPFO) या ईएसआईसी (ESIC) कटता है या जो आयकर भरते हैं, वे संगठित क्षेत्र (Organised Sector) के अंतर्गत आते हैं और ई-श्रम कार्ड के लिए पात्र नहीं हैं।',
                    'यदि गलती से कार्ड बन गया है, तो पोर्टल पर \'Cancel Registration / Revoke Consent\' का विकल्प चुनकर कार्ड निरस्त किया जा सकता है।'
                ]
            },
            {
                'title': '5. ई-श्रम UAN को पीएम श्रम योगी मानधन (PM-SYM) ₹3000 पेंशन से कैसे जोड़ें?',
                'desc': '60 वर्ष की आयु के बाद हर महीने ₹3000 की निश्चित पेंशन पाने का तरीका।',
                'points': [
                    '<strong>समाधान:</strong> 18 से 40 वर्ष के ई-श्रम कार्ड धारक <code>maandhan.in</code> पर जाकर प्रति माह ₹55 से ₹200 का अंशदान देकर PM-SYM पेंशन खाता खोल सकते हैं। सरकार भी बराबर का अंशदान आपके खाते में जमा करती है।'
                ]
            },
            {
                'title': '6. दुर्घटना होने पर ₹2,00,000 का बीमा क्लेम कैसे और कहां से प्राप्त करें?',
                'desc': 'दुर्घटना में मृत्यु या अपंगता होने पर नॉमिनी द्वारा बीमा दावा प्रस्तुत करने की प्रक्रिया।',
                'points': [
                    '<strong>समाधान:</strong> ई-श्रम कार्ड धारक के नॉमिनी (वारिस) को अपने नज़दीकी जिला श्रम अधिकारी (District Labour Officer) या PMSBY बीमा कंपनी शाखा में संपर्क करना होगा।',
                    'मृत्यु प्रमाण पत्र, पोस्टमॉर्टम/एफआईआर रिपोर्ट, ई-श्रम UAN कार्ड और नॉमिनी के आधार व बैंक पासबुक के साथ फॉर्म जमा करने पर क्लेम राशि सीधे बैंक में ट्रांसफर होती है।'
                ]
            }
        ],
        'faqs': [
            {'q': 'ई-श्रम कार्ड बनवाने के क्या-क्या बड़े फायदे हैं?', 'a': 'ई-श्रम कार्ड धारक को 12 अंकों का आजीवन वैध UAN नंबर मिलता है, ₹2,00,000 का मुफ़्त दुर्घटना बीमा कवर मिलता है, राष्ट्रीय आपदाओं में सीधी डीबीटी नकद सहायता मिलती है और सभी केंद्रीय व राज्य मजदूर कल्याण योजनाओं की सीधी पात्रता मिलती है।'},
            {'q': 'ई-श्रम कार्ड बनाने की न्यूनतम और अधिकतम उम्र सीमा क्या है?', 'a': 'ई-श्रम कार्ड के लिए न्यूनतम आयु 16 वर्ष और अधिकतम आयु 59 वर्ष (16-59 वर्ष) निर्धारित की गई है।'},
            {'q': 'ई-श्रम कार्ड ऑनलाइन अपने मोबाइल से कैसे डाउनलोड करें?', 'a': '<code>eshram.gov.in</code> पर जाएं, \'Already Registered\' मेनू में \'Download UAN Card\' चुनें, अपना आधार नंबर और OTP दर्ज करें। स्क्रीन पर आपका डिजिटल UAN कार्ड दिख जाएगा, \'Download PDF\' पर क्लिक करें।'},
            {'q': 'क्या ई-श्रम कार्ड को हर साल रिन्यू कराना पड़ता है?', 'a': 'नहीं, ई-श्रम कार्ड आजीवन (Lifetime) के लिए वैध होता है। इसे रिन्यू कराने की कोई आवश्यकता नहीं होती, केवल यदि आपका मोबाइल, पता या व्यवसाय बदलता है तो आप विवरण अपडेट कर सकते हैं।'},
            {'q': 'ई-श्रम कार्ड बनवाने का कितना सरकारी शुल्क लगता है?', 'a': 'ई-श्रम पोर्टल पर सेल्फ रजिस्ट्रेशन (Self Registration) पूरी तरह मुफ़्त (₹0 Fee) है। जन सेवा केंद्र (CSC) पर भी रजिस्ट्रेशन मुफ़्त है।' },
            {'q': 'क्या कॉलेज या स्कूल में पढ़ने वाले छात्र ई-श्रम कार्ड बना सकते हैं?', 'a': 'यदि छात्र की आयु 16 वर्ष से अधिक है और वह पढ़ाई के साथ-साथ किसी अंशकालिक (Part-time), गिग वर्क, ट्यूशन या असंगठित काम में लगा है, तो वह ई-श्रम कार्ड बना सकता है। पूर्णकालिक गैर-कामकाजी छात्र इसके पात्र नहीं हैं।'},
            {'q': 'ई-श्रम कार्ड में पैसे कब आते हैं?', 'a': 'ई-श्रम कोई नियमित वेतन योजना नहीं है, बल्कि एक राष्ट्रीय सामाजिक सुरक्षा डेटाबेस है। जब भी केंद्र या राज्य सरकारें श्रमिकों हेतु कोई विशेष राहत पैकेज (जैसे भरण-पोषण भत्ता या आपदा सहायता) जारी करती हैं, तो पैसा सीधे ई-श्रम लिंक्ड बैंक खाते में आता है।'},
            {'q': 'क्या किसान भी ई-श्रम कार्ड बना सकते हैं?', 'a': 'खेतिहर मजदूर और बटाईदार (Agricultural Labourers and Tenant Farmers) ई-श्रम कार्ड बना सकते हैं। जो बड़े किसान स्वयं की भूमि के मालिक हैं, वे पीएम-किसान योजना के पात्र हैं।'},
            {'q': 'ई-श्रम कार्ड और लेबर कार्ड (BOCW Shramik Card) में क्या अंतर है?', 'a': 'ई-श्रम कार्ड केंद्र सरकार का पूरे भारत के सभी 38 करोड़ असंगठित कामगारों का राष्ट्रीय कार्ड है, जबकि लेबर कार्ड (BOCW Card) राज्य श्रम विभाग द्वारा केवल भवन एवं सन्निर्माण श्रमिकों को दिया जाता है।'},
            {'q': 'ई-श्रम का आधिकारिक टोल-फ्री हेल्पलाइन नंबर क्या है?', 'a': 'ई-श्रम पोर्टल का राष्ट्रीय टोल-फ्री हेल्पलाइन नंबर <strong>14434</strong> और <strong>1800-137-4111</strong> है।' }
        ],
        'related_services': [
            {'icon': '👷', 'title': 'Labour Card (BOCW Shramik Card)', 'url': '../service/labour-card-construction-workers.html', 'desc': 'भवन निर्माण श्रमिकों के लिए छात्रवृत्ति, औजार व मातृत्व सहायता।'},
            {'icon': '💰', 'title': 'PM Shram Yogi Maandhan (PM-SYM)', 'url': '../service/pm-shram-yogi-maandhan.html', 'desc': 'असंगठित श्रमिकों के लिए 60 वर्ष बाद ₹3,000 मासिक पेंशन।'},
            {'icon': '💳', 'title': 'Ayushman Bharat Card PM-JAY', 'url': '../service/ayushman-bharat.html', 'desc': 'प्रति परिवार प्रति वर्ष ₹5 लाख का मुफ़्त कैशलेस स्वास्थ्य बीमा।'},
            {'icon': '🌾', 'title': 'PM Kisan Samman Nidhi', 'url': '../service/pm-kisan.html', 'desc': 'किसानों के लिए ₹6,000 वार्षिक प्रत्यक्ष आय सहायता।'}
        ]
    }
}

def render_useful_tools_html():
    return '''    <!-- USEFUL TOOLS SECTION -->
    <section class="service-section" style="margin-top: 36px;">
      <h3 style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 8px;">
        🛠️ <span data-lang-show="en">Useful Citizen Tools &amp; Utilities</span>
        <span data-lang-show="hi">उपयोगी नागरिक टूल्स एवं सुविधाएं</span>
      </h3>
      <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 20px;">
        <span data-lang-show="en">Free, verified utilities to check eligibility, prepare voter/scheme document checklists, troubleshoot application errors, or find local CSCs.</span>
        <span data-lang-show="hi">पात्रता जांचने, दस्तावेज़ चेकलिस्ट बनाने, स्टेटस समस्या सुलझाने और जन सेवा केंद्र खोजने के लिए हमारे मुफ़्त टूल्स का उपयोग करें।</span>
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
        <a href="../tools/eligibility-checker.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">🎯</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Scheme Eligibility Checker</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">अपनी उम्र, आय और श्रेणी के अनुसार सभी सरकारी योजनाओं की पात्रता ऑनलाइन जांचें।</p>
          </div>
          <div style="font-weight: 700; color: #2563eb; font-size: 0.85rem; margin-top: 12px;">Check Eligibility ↗</div>
        </a>

        <a href="../tools/document-checklist.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">📋</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Document Checklist Tool</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">सरकारी योजनाओं व प्रमाण पत्रों के लिए आवश्यक दस्तावेज़ों की सूची तैयार करें।</p>
          </div>
          <div style="font-weight: 700; color: #146B3A; font-size: 0.85rem; margin-top: 12px;">Generate Checklist ↗</div>
        </a>

        <a href="../tools/status-troubleshooter.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">🔍</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Application Troubleshooter</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">पेंडिंग, रिजेक्ट या डीबीटी फेल्योर का त्वरित समाधान और शिकायत निवारण।</p>
          </div>
          <div style="font-weight: 700; color: #D97F2B; font-size: 0.85rem; margin-top: 12px;">Fix Status ↗</div>
        </a>

        <a href="../tools/csc-locator.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">📍</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">CSC / e-Seva Kendra Locator</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">अपने पिनकोड या ज़िले में निकटतम अधिकृत जन सेवा केंद्र / सीएससी खोजें।</p>
          </div>
          <div style="font-weight: 700; color: #7c3aed; font-size: 0.85rem; margin-top: 12px;">Find Nearest Center ↗</div>
        </a>
      </div>
    </section>'''

def render_scheme_page(data):
    slug = data['slug']
    title_hi = data['title_hi']
    title_en = data['title_en']
    desc_hi = data['desc_hi']
    desc_en = data['desc_en']
    canonical = f"https://sarkarisewaindia.com/service/{slug}.html"
    
    # Render official action buttons
    actions_html = []
    for act in data['official_actions']:
        actions_html.append(f'''        <a href="{act['url']}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: space-between; background: {act['bg']}; color: #ffffff; padding: 14px 20px; border-radius: 10px; font-weight: 700; text-decoration: none; font-size: 1rem; border: 1px solid {act['border']}; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
          <span>{act['label']}</span>
          <span style="font-size: 1.1rem;">↗</span>
        </a>''')
    actions_str = "\n".join(actions_html)

    # Render key stats
    stats_html = []
    for st in data['key_stats']:
        stats_html.append(f'''      <div class="stat-badge-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 18px; text-align: center; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
        <div style="font-size: 1.7rem; font-weight: 800; color: var(--color-primary); margin-bottom: 4px;">{st['val']}</div>
        <div style="font-size: 0.88rem; color: var(--color-text-muted); font-weight: 600;">{st['lbl']}</div>
      </div>''')
    stats_str = "\n".join(stats_html)

    # Render eligibility
    elig_html = []
    for el in data['eligibility_points']:
        elig_html.append(f'        <li style="margin-bottom: 10px; color: var(--color-text); line-height: 1.7;">{el}</li>')
    elig_str = "\n".join(elig_html)

    # Render documents
    doc_html = []
    for doc in data['documents_points']:
        doc_html.append(f'        <li style="margin-bottom: 10px; color: var(--color-text); line-height: 1.7;">{doc}</li>')
    doc_str = "\n".join(doc_html)

    # Render online steps
    online_html = []
    for step in data['steps_online']:
        online_html.append(f'        <li style="margin-bottom: 12px; color: var(--color-text); line-height: 1.7;">{step}</li>')
    online_str = "\n".join(online_html)

    # Render offline steps
    offline_html = []
    for step in data['steps_offline']:
        offline_html.append(f'        <li style="margin-bottom: 12px; color: var(--color-text); line-height: 1.7;">{step}</li>')
    offline_str = "\n".join(offline_html)

    # Render 6 problem solvers
    prob_html = []
    for i, p in enumerate(data['problems']):
        pts = "\n".join([f'          <li style="margin-bottom: 8px; color: var(--color-text); line-height: 1.7;">{pt}</li>' for pt in p['points']])
        border_colors = ['#2563eb', '#059669', '#d97706', '#7c3aed', '#dc2626', '#db2777']
        bcol = border_colors[i % len(border_colors)]
        prob_html.append(f'''      <!-- Problem {i+1} -->
      <div class="prob-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 6px solid {bcol}; border-radius: 12px; padding: 22px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
        <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.25rem;">{p['title']}</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 12px;">{p['desc']}</p>
        <ul style="padding-left: 20px; margin: 8px 0;">
{pts}
        </ul>
      </div>''')
    prob_str = "\n".join(prob_html)

    # Render FAQs
    faq_html = []
    faq_schema = []
    for i, f in enumerate(data['faqs']):
        open_attr = "open" if i == 0 else ""
        faq_html.append(f'''      <details class="faq-item" {open_attr} style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>{i+1}. {f['q']}</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          {f['a']}
        </div>
      </details>''')
        faq_schema.append({
            "@type": "Question",
            "name": f['q'],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f['a']
            }
        })
    faq_str = "\n".join(faq_html)

    # Render related services
    rel_html = []
    for r in data['related_services']:
        rel_html.append(f'''        <a href="{r['url']}" style="background: var(--color-surface); border: 1px solid var(--color-border); border-top: 4px solid var(--color-primary); border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.6rem; margin-bottom: 6px;">{r['icon']}</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.05rem; color: var(--color-primary);">{r['title']}</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">{r['desc']}</p>
          </div>
          <div style="font-weight: 700; color: var(--color-primary); font-size: 0.82rem; margin-top: 10px;">विवरण देखें &rarr;</div>
        </a>''')
    rel_str = "\n".join(rel_html)

    tools_html = render_useful_tools_html()

    schema_json = json.dumps({
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "GovernmentService",
                "name": title_en,
                "alternateName": title_hi,
                "description": desc_en,
                "url": canonical,
                "serviceType": data['category_name_hi'],
                "provider": {
                    "@type": "GovernmentOrganization",
                    "name": data['portal_name'],
                    "sameAs": [data['gov_link']]
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": faq_schema
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://sarkarisewaindia.com/"},
                    {"@type": "ListItem", "position": 2, "name": data['category_name_hi'], "item": f"https://sarkarisewaindia.com/category/{data['category']}.html"},
                    {"@type": "ListItem", "position": 3, "name": title_hi, "item": canonical}
                ]
            }
        ]
    }, ensure_ascii=False, indent=2)

    return f'''<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/apple-touch-icon.png">
  <link rel="icon" href="../favicon.ico">
  <link rel="manifest" href="../manifest.json">
  <link rel="canonical" href="{canonical}"/>
  <meta name="description" content="{desc_hi}"/>
  <meta property="og:title" content="{title_hi}"/>
  <meta property="og:description" content="{desc_hi}"/>
  <meta property="og:type" content="article" />
  <meta property="og:url" content="{canonical}"/>
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{title_hi}" />
  <meta name="twitter:description" content="{desc_hi}" />
  <title>{title_hi}</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css" />
  <link rel="stylesheet" href="../assets/css/module2.css" />
  <link rel="stylesheet" href="../assets/css/module7.css" />
  <link rel="stylesheet" href="../assets/css/module15.css" />
  <link rel="stylesheet" href="../assets/css/module16.css" />
  <link rel="stylesheet" href="../assets/css/share-widget.css" />

  <script type="application/ld+json" id="service-schema">
{schema_json}
  </script>
</head>
<body data-slug="{slug}" class="v2-template">
  <script>window.SS_ROOT = "../";</script>
  
  <div id="site-header"></div>

  <main class="service-detail container" id="main-content" style="max-width: 1040px; margin: 0 auto; padding: 24px 16px;">
    
    <!-- BREADCRUMB NAVIGATION -->
    <nav class="breadcrumb" aria-label="Breadcrumb" style="font-size: 0.9rem; margin-bottom: 20px; color: var(--color-text-muted);">
      <a href="../index.html" style="color: var(--color-primary); text-decoration: none;">होम</a> &gt;
      <a href="../category/{data['category']}.html" style="color: var(--color-primary); text-decoration: none;">{data['category_name_hi']}</a> &gt;
      <span style="color: var(--color-text);">{title_hi[:45]}...</span>
    </nav>

    <!-- HERO HEADER -->
    <section class="service-hero" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 16px; padding: 32px 24px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
      <div class="service-hero__badge" style="display: inline-block; background: var(--color-brand); color: #ffffff; padding: 6px 14px; border-radius: 20px; font-weight: 700; font-size: 0.85rem; margin-bottom: 12px;">
        {data['badge']}
      </div>
      <h1 class="service-hero__title" style="font-size: 2.1rem; line-height: 1.25; margin: 8px 0 16px 0; color: var(--color-primary);">
        <span data-lang-show="hi">{title_hi}</span>
        <span data-lang-show="en">{title_en}</span>
      </h1>
      <p class="service-hero__desc" style="font-size: 1.05rem; line-height: 1.7; color: var(--color-text); margin-bottom: 24px;">
        <span data-lang-show="hi">{desc_hi}</span>
        <span data-lang-show="en">{desc_en}</span>
      </p>

      <!-- OFFICIAL ACTIONS BUTTONS GRID -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; margin-top: 20px;">
{actions_str}
      </div>
    </section>

    <!-- KEY STATS GRID -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; margin-bottom: 32px;">
{stats_str}
    </div>

    <!-- QUICK OVERVIEW SECTION -->
    <section class="service-section" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 28px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
      <h2 class="service-section__title" style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        📖 <span data-lang-show="en">Complete Scheme Overview &amp; 2026 Guidelines</span>
        <span data-lang-show="hi">योजना का संपूर्ण विवरण एवं 2026 नवीनतम दिशानिर्देश</span>
      </h2>
      <div style="color: var(--color-text); font-size: 1.02rem; line-height: 1.8;">
        <div data-lang-show="hi">{data['overview_hi']}</div>
        <div data-lang-show="en">{data['overview_en']}</div>
      </div>
    </section>

    <!-- ELIGIBILITY & DOCUMENTS GRID -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-bottom: 28px;">
      
      <!-- Eligibility Criteria -->
      <section class="service-section" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
        <h2 style="color: var(--color-primary); font-size: 1.35rem; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 10px;">
          ✅ <span data-lang-show="en">Eligibility Criteria</span>
          <span data-lang-show="hi">पात्रता एवं अनिवार्य शर्तें</span>
        </h2>
        <ul style="padding-left: 20px; margin: 0;">
{elig_str}
        </ul>
      </section>

      <!-- Required Documents -->
      <section class="service-section" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
        <h2 style="color: var(--color-primary); font-size: 1.35rem; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 10px;">
          📋 <span data-lang-show="en">Required Documents Checklist</span>
          <span data-lang-show="hi">आवश्यक दस्तावेज़ चेकलिस्ट</span>
        </h2>
        <ul style="padding-left: 20px; margin: 0;">
{doc_str}
        </ul>
      </section>
    </div>

    <!-- APPLICATION PROCESS (ONLINE & OFFLINE) -->
    <section class="service-section" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 28px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
      <h2 class="service-section__title" style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        🚀 <span data-lang-show="en">Step-by-Step Registration &amp; Application Guide</span>
        <span data-lang-show="hi">ऑनलाइन व ऑफलाइन आवेदन की क्रमवार संपूर्ण विधि</span>
      </h2>

      <!-- Online Steps -->
      <div style="background: var(--color-bg); border-radius: 12px; padding: 20px; margin-bottom: 20px; border: 1px solid var(--color-border);">
        <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.2rem;">💻 1. आधिकारिक वेब पोर्टल द्वारा 100% ऑनलाइन आवेदन</h3>
        <ol style="padding-left: 22px; margin: 12px 0 0 0;">
{online_str}
        </ol>
      </div>

      <!-- Offline / CSC Steps -->
      <div style="background: var(--color-bg); border-radius: 12px; padding: 20px; border: 1px solid var(--color-border);">
        <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.2rem;">🏛️ 2. सीएससी (CSC) केंद्र या अधिकृत कार्यालय द्वारा ऑफलाइन प्रक्रिया</h3>
        <ol style="padding-left: 22px; margin: 12px 0 0 0;">
{offline_str}
        </ol>
      </div>
    </section>

    <!-- 6 REAL-WORLD PROBLEM SOLVERS SECTION -->
    <section class="service-section" style="margin-top: 36px;">
      <h2 class="service-section__title" style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 18px;">
        ⚠️ <span data-lang-show="en">Common Problems, Pending Status &amp; Expert Solutions</span>
        <span data-lang-show="hi">6 प्रमुख समस्याएं, पेंडिंग स्टेटस व उनके सटीक समाधान</span>
      </h2>
{prob_str}
    </section>

    <!-- 10 VISIBLE FAQS ACCORDIONS SECTION -->
    <section class="service-section" style="margin-top: 36px;">
      <h2 class="service-section__title" style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 18px;">
        ❓ <span data-lang-show="en">Frequently Asked Questions (FAQs)</span>
        <span data-lang-show="hi">अक्सर पूछे जाने वाले सवाल (FAQs)</span>
      </h2>
{faq_str}
    </section>

{tools_html}

    <!-- RELATED SERVICES GRID -->
    <section class="service-section" style="margin-top: 36px;">
      <h3 style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 18px;">
        🔗 <span data-lang-show="en">Related Government Schemes &amp; Services</span>
        <span data-lang-show="hi">संबंधित सरकारी योजनाएं एवं नागरिक सेवाएं</span>
      </h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
{rel_str}
      </div>
    </section>

    <!-- VIP TELEGRAM BANNER -->
    <div style="background: linear-gradient(135deg, #0088cc 0%, #005f8f 100%); border-radius: 12px; padding: 24px; color: #fff; margin: 36px 0; text-align: center; box-shadow: 0 4px 12px rgba(0,136,204,0.25);">
      <h3 style="margin: 0 0 8px 0; color: #fff; font-size: 1.4rem;">✈️ SarkariSewa VIP Telegram Community</h3>
      <p style="margin: 0 0 16px 0; color: #e0f2fe; font-size: 0.95rem;">नवीनतम सरकारी योजनाओं, किस्त अलर्ट्स, छात्रवृत्ति व जॉब नोटिफिकेशन की सबसे तेज़ जानकारी पाएं।</p>
      <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" class="btn" style="background: #fff; color: #0088cc; font-weight: 700; padding: 10px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">Join Telegram Channel ↗</a>
    </div>

    <!-- COMMENTS SECTION -->
    <section class="service-section" id="comments-section">
      <h2 class="service-section__title"><span class="icon">💬</span> Questions &amp; Comments</h2>
      <p class="comments-note">यह {title_hi[:30]} से जुड़ी सार्वजनिक चर्चा है। आधिकारिक सहायता के लिए हेल्पलाइन {data['helpline']} पर संपर्क करें।</p>
      <form id="comment-form" class="comment-form">
        <div class="comment-form__row">
          <input type="text" id="comment-name" maxlength="80" placeholder="आपका नाम (Your Name)" required />
        </div>
        <div class="comment-form__row">
          <textarea id="comment-message" maxlength="2000" rows="3" placeholder="{title_hi[:25]} से जुड़ा अपना सवाल पूछें..." required></textarea>
        </div>
        <div class="comment-form__actions">
          <span class="comment-form__status" id="comment-form-status"></span>
          <button type="submit" class="btn-primary" id="comment-submit">Post Question</button>
        </div>
      </form>
      <div id="comments-list" class="comments-list">
        <p class="loading">Loading comments…</p>
      </div>
    </section>
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

def build_all_flagship_schemes():
    print('======================================================================')
    print('BUILDING 5 FLAGSHIP NATIONAL SCHEME PAGES')
    print('======================================================================')
    
    for slug, data in FLAGSHIP_SCHEMES.items():
        file_path = os.path.join(SERVICE_DIR, f"{slug}.html")
        html_content = render_scheme_page(data)
        with open(file_path, 'w', encoding='utf-8') as fp:
            fp.write(html_content)
        size_kb = len(html_content.encode('utf-8')) / 1024
        words = len(re.findall(r'\w+', html_content))
        print(f'Generated: service/{slug}.html ({size_kb:.1f} KB, {words} words)')
    
    print('======================================================================')
    print('ALL 5 FLAGSHIP NATIONAL SCHEME PAGES GENERATED SUCCESSFULLY!')
    print('======================================================================')

if __name__ == '__main__':
    build_all_flagship_schemes()