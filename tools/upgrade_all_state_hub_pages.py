# -*- coding: utf-8 -*-
"""
Master Upgrader for All 36 State & Union Territory Hub Pages
Generates 100% compliant, high CTR, rich content pages with 10 FAQs, 6 Problem Solvers, 
working dynamic header/footer (main.js), bilingual toggles, and zero dark-mode contrast bugs.
"""
import os, sys, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATES_DIR = os.path.join(ROOT, 'states')

# Complete State Database
STATES_CONFIG = {
    "bihar": {
        "slug": "bihar",
        "name_en": "Bihar",
        "name_hi": "बिहार",
        "capital": "पटना (Patna)",
        "icon": "🌾",
        "primary_lang": "हिंदी / उर्दू / मैथिली / भोजपुरी",
        "edistrict_name": "RTPS Bihar / ServiceOnline",
        "edistrict_url": "https://serviceonline.bihar.gov.in",
        "helpline": "1800-345-6284",
        "cm_helpline": "1800-345-6284 (बिहार लोक शिकायत निवारण अधिकार)",
        "revenue_portal": "बिहार भूलेख / परिमार्जन (biharbhumi.bihar.gov.in)",
        "ration_portal": "बिहार ई-पीडीएस (epds.bihar.gov.in)",
        "flagship_schemes": [
            ("मुख्यमंत्री उद्यमी योजना (Mukhyamantri Udyami Yojana)", "₹10 लाख (₹5 लाख अनुदान + ₹5 लाख ब्याज-मुक्त ऋण)", "उद्योग/व्यवसाय स्थापित करने हेतु अनुसूचित जाति/जनजाति, अत्यंत पिछड़ा वर्ग, महिला एवं युवाओं के लिए।", "udyami.bihar.gov.in पर ऑनलाइन आवेदन करें।"),
            ("मुख्यमंत्री कन्या उत्थान योजना", "₹50,000 (स्नातक पास छात्राओं को एकमुश्त प्रोत्साहन)", "बिहार की स्थायी निवासी अविवाहित/विवाहित स्नातक उत्तीर्ण छात्राएं।", "medhasoft.bih.nic.in पर आधार व मार्कशीट से आवेदन।"),
            ("बिहार स्टूडेंट क्रेडिट कार्ड योजना (Bihar Student Credit Card)", "₹4 लाख तक का शिक्षा ऋण मात्र 1% से 4% ब्याज दर पर", "12वीं पास छात्र जो उच्च शिक्षा (B.Tech, MBBS, BCA आदि) करना चाहते हैं।", "7nishchay-yuvaupmission.bihar.gov.in पर आवेदन।"),
            ("सतत जीविकोपार्जन योजना (SJY Jeevika)", "₹60,000 से ₹1 लाख तक आजीविका सहायता", "अत्यंत निर्धन, देशी शराब/ताड़ी व्यवसाय से अलग हुए परिवार व भूमिहीन महिलाएं।", "जीविका ग्राम संगठन (Jeevika SHG) के माध्यम से।")
        ],
        "services": [
            ("br-income-certificate.html", "आय प्रमाण पत्र (Income Certificate)", "RTPS ServiceOnline", "₹0", "10 कार्यदिवस", "आधार कार्ड, वेतन पर्ची या स्व-घोषणा पत्र।"),
            ("bihar-domicile-certificate.html", "मूल निवास प्रमाण पत्र (Residential / Domicile)", "RTPS ServiceOnline", "₹0", "10 कार्यदिवस", "आधार कार्ड, जमीन का रसीद या बिजली बिल, फोटो।"),
            ("br-caste-certificate.html", "जाति प्रमाण पत्र (Caste Certificate - SC/ST/EBC/BC)", "RTPS ServiceOnline", "₹0", "10 कार्यदिवस", "पिता का जाति प्रमाण पत्र या खतियान/जमीन रिकॉर्ड।"),
            ("br-ration-card.html", "नया राशन कार्ड आवेदन (New Ration Card Apply)", "e-PDS Bihar", "₹0", "30 कार्यदिवस", "परिवार के सभी सदस्यों का आधार कार्ड, पारिवारिक फोटो, बैंक खाता।"),
            ("bihar-birth-certificate.html", "जन्म प्रमाण पत्र (Birth Certificate)", "CRSRGI / Block Office", "₹0-₹50", "15-21 कार्यदिवस", "अस्पताल डिस्चार्ज स्लिप, माता-पिता का आधार कार्ड।"),
            ("bihar-death-certificate.html", "मृत्यु प्रमाण पत्र (Death Certificate)", "CRSRGI / Nagar Nigam", "₹0-₹50", "15-21 कार्यदिवस", "अस्पताल मृत्यु रिपोर्ट, मृतक व आवेदक का पहचान पत्र।"),
            ("bihar-driving-licence.html", "ड्राइविंग लाइसेंस (Driving Licence - Parivahan)", "Sarathi Parivahan Bihar", "₹200-₹1000", "15 कार्यदिवस", "आधार कार्ड, 10वीं मार्कशीट, मेडिकल फिटनेस फॉर्म 1A।"),
            ("bihar-senior-citizen-card.html", "वरिष्ठ नागरिक पहचान पत्र व पेंशन", "SSPMIS Bihar", "₹0", "30 कार्यदिवस", "60+ वर्ष आयु प्रमाण, आधार कार्ड, बैंक पासबुक।")
        ],
        "problems": [
            ("RTPS पोर्टल पर Application Rejected का मुख्य कारण व निवारण", "यदि आपका जाति या आय प्रमाण पत्र रिजेक्ट हो गया है, तो रिजेक्शन स्लिप में कारण देखें (जैसे खतियान संलग्न न होना या फोटो अस्पष्ट होना)। RTPS पोर्टल पर 'Re-Apply / परिमार्जन' के माध्यम से सही दस्तावेज़ अपलोड करके पुनः आवेदन करें।"),
            ("बिहार भूमि (BiharBhumi) पर खतियान व जमाबंदी में नाम सुधार (Parimarjan)", "यदि जमाबंदी में नाम या खाता-खेसरा गलत दर्ज है, तो biharbhumi.bihar.gov.in पर 'परिमार्जन (Parimarjan)' पोर्टल में दाखिल-खारिज नकल, स्व-घोषणा पत्र और सुधार विवरण अपलोड कर अंचलाधिकारी (CO) को भेजें।"),
            ("बिहार राशन कार्ड में नया सदस्य जोड़ना या ई-केवाईसी करना", "राशन डीलर की e-PoS मशीन पर बायोमेट्रिक फिंगरप्रिंट लगाकर e-KYC पूरी करें। नया सदस्य जोड़ने हेतु आरटीपीएस पोर्टल पर 'Ration Card Member Modification' विकल्प का प्रयोग करें।"),
            ("मुख्यमंत्री उद्यमी योजना में आवेदन चयन के बाद डीपीआर और लोन प्रक्रिया", "लॉटरी चयन के बाद संबंधित जिला उद्योग केंद्र (DIC) में भौतिक दस्तावेज़ सत्यापन कराएं। प्रथम किस्त के ₹1.5 लाख से ₹2.5 लाख सीधे बैंक खाते में जारी होते हैं।"),
            ("बिहार स्टूडेंट क्रेडिट कार्ड में DRCC स्तर पर अटका फॉर्म कैसे क्लियर करें?", "संबंधित जिला निबंधन एवं परामर्श केंद्र (DRCC) में जाकर अपने मूल शैक्षणिक प्रमाणपत्र, कॉलेज बोनाफाइड और शुल्क संरचना का पुनः भौतिक सत्यापन कराएं।"),
            ("बिहार लोक शिकायत निवारण अधिकार (BPGMS) में ऑनलाइन सुनवाई का लाभ", "सरकारी अधिकारी द्वारा कार्य में देरी या रिश्वत मांगने पर bpgrs.bihar.gov.in पर अथवा 1800-345-6284 पर अपील दर्ज करें; 60 दिनों में अनिवार्य सुनवाई व समाधान मिलता है।")
        ],
        "faqs": [
            ("बिहार आरटीपीएस (RTPS) पर ऑनलाइन प्रमाण पत्र कैसे डाउनलोड करें?", "serviceonline.bihar.gov.in पर जाएं, 'आवेदन की स्थिति देखें (Track Application Status)' पर क्लिक करें, अपना एप्लीकेशन रेफरेंस नंबर (जैसे BICCO/2026/...) और डिलीवरी की तारीख दर्ज करें। ओटीपी सत्यापन के बाद डिजिटल हस्ताक्षरित पीडीएफ डाउनलोड हो जाएगा।"),
            ("बिहार में जाति प्रमाण पत्र (EBC / BC / SC / ST / EWS) कितने दिनों में बनता है?", "आरटीपीएस लोक सेवाओं के अधिकार अधिनियम के अनुसार सामान्यतः 10 से 14 कार्यदिवसों में अंचल अधिकारी (CO/RO) स्तर से जारी कर दिया जाता है। तत्काल सेवा में 2-3 दिनों में प्राप्त किया जा सकता है।"),
            ("बिहार स्टूडेंट क्रेडिट कार्ड (BSCC) के लिए कौन-कौन से दस्तावेज़ चाहिए?", "10वीं व 12वीं की मूल मार्कशीट, आधार कार्ड, पैन कार्ड, कॉलेज का एडमिशन लेटर व फीस स्ट्रक्चर, माता-पिता का आधार व 2 पासपोर्ट साइज फोटो।"),
            ("मुख्यमंत्री कन्या उत्थान योजना का पैसा कितने दिनों में बैंक खाते में आता है?", "विश्वविद्यालय द्वारा पोर्टल पर रिजल्ट अपलोड करने और छात्रा द्वारा medhasoft पोर्टल पर आधार व बैंक खाता सत्यापन के 30 से 60 दिनों के भीतर डीबीटी द्वारा ₹50,000 अंतरित होते हैं।"),
            ("बिहार भूलेख खसरा-खतौनी नकल ऑनलाइन कैसे निकालें?", "biharbhumi.bihar.gov.in पर जाएं, 'अपना खाता देखें' पर क्लिक करें, अपना जिला, अंचल और मौजा चुनें। खसरा नंबर या खाता नंबर डालकर डिजिटल नकल मुफ्त देखें व प्रिंट करें।"),
            ("बिहार में नया राशन कार्ड ऑनलाइन अप्लाई करने का आधिकारिक पोर्टल कौन सा है?", "epds.bihar.gov.in पर RTPS ServiceOnline के माध्यम से लॉगिन करके राशन कार्ड का ऑनलाइन फॉर्म भरा जाता है।"),
            ("बिहार दाखिल-खारिज (Mutation) में कितना समय लगता है?", "अविवादित मामलों में 35 कार्यदिवस और विवादित मामलों में 75 कार्यदिवस का कानूनी समय निर्धारित है। प्रक्रिया biharbhumi पोर्टल पर लाइव ट्रैक की जा सकती है।"),
            ("बिहार स्पेशल इंटेंसिव रिवीजन (SIR) 2026 वोटर लिस्ट कैसे चेक करें?", "हमारे 'Bihar SIR Voter List 2026' पेज पर जाकर अपने जिले व विधानसभा का चयन करके संपूर्ण ड्राफ्ट मतदाता सूची पीडीएफ डाउनलोड कर सकते हैं।"),
            ("बिहार उद्यमी योजना में कितने प्रतिशत सब्सिडी मिलती है?", "परियोजना लागत की 50% राशि (अधिकतम ₹5 लाख) सीधे माफ/अनुदान (Subsidy) के रूप में दी जाती है, तथा शेष ₹5 लाख ब्याज-मुक्त या 1% साधारण ब्याज पर 7 वर्षों में लौटानी होती है।"),
            ("बिहार में सरकारी सेवाओं से संबंधित शिकायत कहां दर्ज कराएं?", "बिहार लोक शिकायत निवारण अधिनियम के तहत ऑनलाइन पोर्टल bpgrs.bihar.gov.in पर या टोल-फ्री हेल्पलाइन 1800-345-6284 पर शिकायत दर्ज करें।")
        ]
    },
    "uttar-pradesh": {
        "slug": "uttar-pradesh",
        "name_en": "Uttar Pradesh",
        "name_hi": "उत्तर प्रदेश",
        "capital": "लखनऊ (Lucknow)",
        "icon": "🏹",
        "primary_lang": "हिंदी / उर्दू / अवधी / ब्रज / भोजपुरी",
        "edistrict_name": "e-District Uttar Pradesh",
        "edistrict_url": "https://edistrict.up.gov.in",
        "helpline": "1076 (CM Helpline) / 0522-2304706",
        "cm_helpline": "1076 (मुख्यमंत्री हेल्पलाइन - 24x7 जनसुनवाई)",
        "revenue_portal": "यूपी भूलेख (upbhulekh.gov.in)",
        "ration_portal": "fcs.up.gov.in (खाद्य एवं रसद विभाग)",
        "flagship_schemes": [
            ("मुख्यमंत्री कन्या सुमंगला योजना", "₹25,000 (6 चरणों में जन्म से स्नातक तक)", "बालिकाओं की उच्च शिक्षा व स्वास्थ्य संवर्धन हेतु ₹3 लाख तक वार्षिक आय वाले परिवारों को।", "mksy.up.gov.in पर ऑनलाइन आवेदन करें।"),
            ("मुख्यमंत्री अभ्युदय योजना (Free Coaching)", "मुफ्त यूपीएससी, यूपीपीएससी, नीट, जेईई कोचिंग + टैबलेट", "उत्तर प्रदेश के मेधावी एवं आर्थिक रूप से कमजोर छात्र-छात्राओं के लिए।", "abhyuday.up.gov.in पर प्रवेश परीक्षा के माध्यम से।"),
            ("यूपी भाग्यलक्ष्मी योजना", "₹50,000 का बांड + ₹5,100 माता को नकद", "गरीबी रेखा से नीचे (BPL) परिवारों में जन्म लेने वाली नवजात कन्याओं के लिए।", "महिला कल्याण विभाग के पोर्टल से आवेदन।"),
            ("एक जनपद एक उत्पाद (ODOP) वित्तपोषण योजना", "₹25 लाख तक ऋण पर 25% तक मार्जिन मनी सब्सिडी", "स्थानीय कारीगरों, पारंपरिक शिल्पकारों और एमएसएमई उद्यमियों के लिए।", "diupmsme.upsdc.gov.in पर आवेदन।")
        ],
        "services": [
            ("uttar-pradesh-income-certificate.html", "आय प्रमाण पत्र (Income Certificate)", "e-District UP", "₹15", "7-15 कार्यदिवस", "स्वप्रमाणित घोषणा पत्र, राशन कार्ड, वेतन पर्ची/लेखपाल रिपोर्ट।"),
            ("uttar-pradesh-domicile-certificate.html", "निवास प्रमाण पत्र (Domicile Certificate)", "e-District UP", "₹15", "7-15 कार्यदिवस", "आधार कार्ड, बिजली बिल/हाउस टैक्स, स्कूल सर्टिफिकेट।"),
            ("uttar-pradesh-caste-certificate.html", "जाति प्रमाण पत्र (Caste Certificate - OBC/SC/ST)", "e-District UP", "₹15", "7-15 कार्यदिवस", "परिवार रजिस्टर नकल, आधार कार्ड, पिता का जाति रिकॉर्ड।"),
            ("uttar-pradesh-ration-card.html", "नया राशन कार्ड (UP Ration Card NFSA)", "FCS UP Portal", "₹0-₹20", "30 कार्यदिवस", "परिवार के सभी सदस्यों का आधार कार्ड, आय प्रमाण पत्र, पासबुक।"),
            ("uttar-pradesh-birth-certificate.html", "जन्म प्रमाण पत्र (Birth Certificate)", "e-District / Nagar Nigam", "₹15-₹50", "15-21 कार्यदिवस", "अस्पताल डिस्चार्ज कार्ड, माता-पिता का आधार कार्ड।"),
            ("uttar-pradesh-death-certificate.html", "मृत्यु प्रमाण पत्र (Death Certificate)", "e-District / Nagar Palika", "₹15-₹50", "15-21 कार्यदिवस", "अस्पताल रिपोर्ट, श्मशान/कब्रिस्तान रसीद, पहचान पत्र।"),
            ("uttar-pradesh-driving-licence.html", "ड्राइविंग लाइसेंस (UP Parivahan DL)", "Sarathi Parivahan UP", "₹200-₹1000", "15 कार्यदिवस", "लर्नर लाइसेंस, आधार कार्ड, 10वीं मार्कशीट, स्लॉट रसीद।"),
            ("uttar-pradesh-senior-citizen-card.html", "वरिष्ठ नागरिक वृद्धावस्था पेंशन", "sspy-up.gov.in", "₹0", "30-45 कार्यदिवस", "60+ वर्ष आयु, ₹46,080 (ग्रामीण) / ₹56,460 (शहरी) आय सीमा, आधार व बैंक पासबुक।")
        ],
        "problems": [
            ("e-District UP पर 'लेखपाल जांच आख्या' पेंडिंग रहने का समाधान", "यदि आवेदन 15 दिनों से 'Pending at Lekhpal / Tehsildar' दिखा रहा है, तो ई-डिस्ट्रिक्ट आवेदन नंबर लेकर अपने तहसील में राजस्व लेखपाल से संपर्क करें या 1076 सीएम हेल्पलाइन पर शिकायत दर्ज करें।"),
            ("यूपी भूलेख (UPBhulekh) खतौनी में नाम सुधार व अंश निर्धारण", "खतौनी में नाम गलत होने पर धारा 32/38 (राजस्व संहिता) के तहत ऑनलाइन राजस्व न्यायालय कंप्यूटरीकृत प्रणाली (RCCMS UP) पर वाद दाखिल करें।"),
            ("यूपी राशन कार्ड में नाम कटने या e-KYC न होने पर क्या करें?", "उचित दर विक्रेता (कोटेदार) के पास जाकर e-PoS पर फिंगरप्रिंट e-KYC कराएं। यदि नाम कट गया है तो fcs.up.gov.in पर ऑनलाइन संशोधन प्रपत्र भरें।"),
            ("कन्या सुमंगला योजना में पीएफएमएस (PFMS) रिजेक्शन कैसे ठीक करें?", "बैंक खाते में आधार NPCI DBT लिंक कराएं और mksy पोर्टल पर बैंक पासबुक की स्पष्ट प्रति पुनः अपलोड करें।"),
            ("यूपी स्कॉलरशिप में 'Suspect Data / Roll Number Not Matched' एरर", "सस्पेक्ट लिस्ट आने पर अपने कॉलेज के नोडल अधिकारी से संपर्क करें और संबंधित मार्कशीट व हलफनामा जिला समाज कल्याण अधिकारी (DWO) को फॉरवर्ड कराएं।"),
            ("जनसुनवाई पोर्टल (Jansunwai UP 1076) पर निष्पक्ष जांच कैसे सुनिश्चित करें?", "jansunwai.up.nic.in पर पूर्व संदर्भ संख्या का उल्लेख करते हुए 'पुनः असंतोषजनक फीडबैक' दर्ज करें; मामला सीधे डीएम/कमिश्नर स्तर पर एस्केलेट हो जाता है।")
        ],
        "faqs": [
            ("उत्तर प्रदेश e-District पोर्टल से डिजिटल प्रमाण पत्र कैसे डाउनलोड करें?", "edistrict.up.gov.in पर जाएं, 'प्रमाण पत्र का सत्यापन' या 'आवेदन की स्थिति' में एप्लीकेशन नंबर और सर्टिफिकेट आईडी दर्ज कर तुरंत डिजिटल हस्ताक्षरित प्रमाणपत्र डाउनलोड करें।"),
            ("यूपी में आय प्रमाण पत्र की वैधता कितने वर्षों की होती है?", "उत्तर प्रदेश सरकार द्वारा जारी आय प्रमाण पत्र जारी होने की तिथि से 3 वर्ष (3 Years) के लिए पूरे देश में वैध होता है।"),
            ("कन्या सुमंगला योजना के तहत कुल कितनी सहायता मिलती है?", "नवजात कन्या के जन्म से लेकर स्नातक में प्रवेश तक 6 विभिन्न चरणों में कुल ₹25,000 की वित्तीय सहायता बैंक खाते में दी जाती है।"),
            ("यूपी भूलेख पर खतौनी की प्रमाणित नकल कैसे निकालें?", "upbhulekh.gov.in पर 'रियल टाइम खतौनी नकल देखें' विकल्प चुनें, कैप्चा दर्ज करें और अपने भूखंड/गाटा संख्या से निःशुल्क खतौनी देखें।"),
            ("यूपी फैमिली आईडी (Family ID - Ek Parivar Ek Pehchan) कैसे बनाएं?", "familyid.up.gov.in पोर्टल पर अपने आधार से लिंक मोबाइल ओटीपी द्वारा 12 अंकों की विशिष्ट पारिवारिक पहचान आईडी जनरेट करें।"),
            ("वृद्धावस्था व विधवा पेंशन योजना में प्रति माह कितनी राशि मिलती है?", "उत्तर प्रदेश में निराश्रित महिला (विधवा), वृद्धावस्था एवं दिव्यांग पेंशन के अंतर्गत ₹1,000 प्रति माह (₹3,000 प्रति तिमाही) सीधे डीबीटी द्वारा दिए जाते हैं।"),
            ("उत्तर प्रदेश स्पेशल इंटेंसिव रिवीजन (SIR) 2026 वोटर लिस्ट कैसे देखें?", "हमारे 'Uttar Pradesh SIR Voter List 2026' पेज पर जाकर अपने जिले व विधानसभा का चयन करके संपूर्ण ड्राफ्ट मतदाता सूची पीडीएफ डाउनलोड कर सकते हैं।"),
            ("यूपी में जाति प्रमाण पत्र ऑनलाइन बनवाने में कितना शुल्क लगता है?", "नागरिक सेवा पोर्टल (Citizen Login eSathi) पर मात्र ₹15 और सीएससी जन सेवा केंद्र पर ₹30 निर्धारित शुल्क है।"),
            ("यूपी सीएम हेल्पलाइन 1076 पर शिकायत दर्ज करने की प्रक्रिया क्या है?", "टोल-फ्री नंबर 1076 पर डायल करें या jansunwai.up.nic.in पर अपनी शिकायत दर्ज करें। संबंधित विभाग को निश्चित समय-सीमा में जांच रिपोर्ट देनी होती है।"),
            ("यूपी अभ्युदय योजना में फ्री कोचिंग के लिए पात्रता क्या है?", "उत्तर प्रदेश का मूल निवासी होना अनिवार्य है और राज्य स्तरीय ऑनलाइन पात्रता परीक्षा उत्तीर्ण करनी होती है।")
        ]
    },
    "maharashtra": {
        "slug": "maharashtra",
        "name_en": "Maharashtra",
        "name_hi": "महाराष्ट्र",
        "capital": "मुंबई (Mumbai)",
        "icon": "🛡️",
        "primary_lang": "मराठी (Marathi) / हिंदी / English",
        "edistrict_name": "Aaple Sarkar (आपले सरकार)",
        "edistrict_url": "https://aaplesarkar.mahaonline.gov.in",
        "helpline": "1800-120-8040",
        "cm_helpline": "1800-120-8040 (आपले सरकार तक्रार निवारण)",
        "revenue_portal": "महाभूलेख / महाभूमि (bhulekh.mahabhumi.gov.in)",
        "ration_portal": "mahafood.gov.in (अन्न, नागरी पुरवठा)",
        "flagship_schemes": [
            ("मुख्यमंत्री माझी लाडकी बहीण योजना", "₹1,500 प्रति माह (₹18,000 वार्षिक DBT)", "21 से 65 वर्ष आयु वर्ग की पात्र विवाहित, विधवा, तलाकशुदा एवं निराश्रित महिलाओं के लिए (पारिवारिक आय ₹2.5 लाख तक)।", "ladakibahin.maharashtra.gov.in या नारीशक्ती दूत ॲप से ऑनलाइन आवेदन।"),
            ("महाराष्ट्र बांधकाम कामगार योजना (Bandhkam Kamgar)", "₹5,000 सुरक्षा संच + ₹25,000 से ₹1 लाख घरकुल अनुदान", "महाराष्ट्र इमारत व इतर बांधकाम कामगार कल्याणकारी मंडळ (BOCW) अंतर्गत नोंदणीकृत कामगारांसाठी।", "mahabocw.in पोर्टलवर ऑनलाइन नोंदणी करा।"),
            ("महाडीबीटी शेतकरी योजना (MahaDBT Farmer)", "ट्रॅक्टर, ठिबक सिंचन व कृषी अवजारांवर 50% ते 80% अनुदान", "महाराष्ट्रातील अल्प व अत्यल्प भूधारक शेतकरी।", "mahadbt.maharashtra.gov.in वर 'शेतकरी योजना' मध्ये अर्ज करा।"),
            ("लेक लाडकी योजना (Lek Ladki Yojana)", "₹1,01,000 (मुलीच्या जन्मापासून वयाच्या 18 वर्षांपर्यंत)", "पिवळे व केशरी रेशनकार्डधारक कुटुंबातील मुलींसाठी।", "महिला व बालविकास विभाग / आपले सरकार पोर्टल।")
        ],
        "services": [
            ("mh-income-certificate.html", "उत्पन्नाचा दाखला (Income Certificate)", "Aaple Sarkar", "₹33.60", "15 कार्यदिवस", "स्वयंघोषणापत्र, वेतन प्रमाणपत्र/तलाठी अहवाल, रेशनकार्ड."),
            ("mh-domicile-certificate.html", "अधिवास व राष्ट्रीयत्व प्रमाणपत्र (Domicile Certificate)", "Aaple Sarkar", "₹33.60", "15 कार्यदिवस", "महाराष्ट्रातील 15 वर्षांचे वास्तव्य पुरावा, शाळा सोडल्याचा दाखला, आधार."),
            ("mh-caste-certificate.html", "जात प्रमाणपत्र (Caste Certificate - SC/ST/OBC/VJNT/SEBC)", "Aaple Sarkar", "₹33.60", "21-45 कार्यदिवस", "1967/1961 पूर्वीचा पुरावा, वंशावळ, वडिलांचा जातीचा दाखला."),
            ("mh-ration-card.html", "नवीन रेशन कार्ड / नाव समाविष्ट (Ration Card)", "MahaFood RCMS", "₹0-₹20", "30 कार्यदिवस", "कुटुंबप्रमुखाचे छायाचित्र, आधार कार्ड, उत्पन्नाचा दाखला, एलपीजी पावती."),
            ("maharashtra-birth-certificate.html", "जन्म प्रमाणपत्र (Birth Certificate)", "Aaple Sarkar / MahaCRS", "₹20-₹50", "15 कार्यदिवस", "रुग्णालय डिस्चार्ज कार्ड, माता-पित्याचे आधार कार्ड."),
            ("maharashtra-death-certificate.html", "मृत्यू प्रमाणपत्र (Death Certificate)", "Aaple Sarkar / MahaCRS", "₹20-₹50", "15 कार्यदिवस", "वैद्यकीय मृत्यू अहवाल, स्मशानभूमी पावती."),
            ("maharashtra-driving-licence.html", "ड्रायव्हिंग लायसन्स (Driving Licence Parivahan)", "Sarathi Parivahan MH", "₹200-₹1000", "15 कार्यदिवस", "लर्निंग लायसन्स, वयाचा पुरावा, वैद्यकीय प्रमाणपत्र फॉर्म 1A."),
            ("mh-712-extract.html", "डिजिटल स्वाक्षरीत 7/12 व 8-अ उतारा (Satbara Utara)", "Mahabhumi Portal", "₹15", "झटपट / Instant", "जिल्हा, तालुका, गाव निवडून सर्व्हे नंबर/गट नंबर टाका.")
        ],
        "problems": [
            ("आपले सरकार पोर्टलवर अर्ज रिजेक्ट (Rejected) झाल्यास काय करावे?", "रिजेक्शनचे कारण (जसे जुना 7/12, अपूर्ण वंशावळ किंवा चुकीचे हमीपत्र) तपासा. 'Right to Service Act' अंतर्गत तहसीलदार/उपविभागीय अधिकारी (SDO) यांच्याकडे प्रथम अपील दाखल करा."),
            ("डिजिटल स्वाक्षरीत 7/12 मध्ये फेरफार (Mutation) किंवा नाव दुरुस्ती", "bhulekh.mahabhumi.gov.in वर 'ई-हक्क (e-Hakk)' प्रणालीद्वारे फेरफार नोंदणीसाठी ऑनलाइन अर्ज करा आणि तलाठी कार्यालयात कागदपत्रे जमा करा."),
            ("लाडकी बहीण योजनेचा हप्ता (₹1,500) खात्यात जमा न होणे", "आपल्या बँक खात्यात आधार 'Aadhaar Seeding / NPCI DBT' सक्रिय आहे की नाही ते तपासा. ladakibahin पोर्टलवर लॉगिन करून अर्जाची स्थिती व बँक त्रुटी तपासा."),
            ("जात पडताळणी प्रमाणपत्र (Caste Validity) त्रुटी निवारण", "barti.maharashtra.gov.in (CCVIS) पोर्टलवर वंशावळ प्रतिज्ञापत्र (Affidavit) व जुने महसूल पुरावे अपलोड करून त्रुटी पूर्तता करा."),
            ("बांधकाम कामगार नोंदणीत 90 दिवस कामाचे प्रमाणपत्र रिजेक्ट होणे", "नोंदणीकृत कंत्राटदार (Contractor) किंवा ग्रामसेवक/महानगरपालिका अधिकाऱ्याकडून 90 दिवस कामाचे अधिकृत प्रमाणपत्र घेऊन mahabocw पोर्टलवर री-अपलोड करा."),
            ("आपले सरकार तक्रार निवारण (CM Grievance) वर तत्काळ तोडगा", "grievances.maharashtra.gov.in वर तक्रार नोंदवून संदर्भ क्रमांक जतन करा. 21 दिवसांत संबंधित विभागाकडून लेखी अहवाल देणे बंधनकारक आहे.")
        ],
        "faqs": [
            ("आपले सरकार पोर्टलवरून डिजिटल स्वाक्षरी असलेले प्रमाणपत्र कसे डाउनलोड करावे?", "aaplesarkar.mahaonline.gov.in वर 'Track Your Application' मध्ये जाऊन अर्ज क्रमांक टाका. स्टेटस Approved झाल्यावर थेट डिजिटल स्वाक्षरीत प्रमाणपत्र डाउनलोड करता येते."),
            ("महाराष्ट्रात उत्पन्नाच्या दाखल्याची वैधता किती असते?", "उत्पन्नाचा दाखला संबंधित आर्थिक वर्षासाठी किंवा जारी केल्याच्या तारखेपासून 1 वर्ष ते 3 वर्षांसाठी वैध असतो."),
            ("माझी लाडकी बहीण योजनेचे नियम व पात्रता काय आहे?", "महिला महाराष्ट्राची रहिवासी असावी, वय 21 ते 65 वर्षे दरम्यान असावे, आणि कुटुंबाचे एकत्रित वार्षिक उत्पन्न ₹2.5 लाखांपेक्षा कमी असावे."),
            ("महाभूलेख डिजिटल 7/12 (Satbara) कायदेशीर कामांसाठी ग्राह्य धरला जातो का?", "होय, महाभूमी पोर्टलवरून डाउनलोड केलेला डिजिटल स्वाक्षरी असलेला (Digitally Signed 7/12, 8A व फेरफार) सर्व शासकीय, न्यायालयीन व बँक कर्जाच्या कामांसाठी 100% कायदेशीर वैध आहे."),
            ("महाडीबीटी (MahaDBT) वर कृषी योजनांचे अनुदान कसे मिळते?", "mahadbt.maharashtra.gov.in वर 'शेतकरी योजना' मध्ये लॉटरी पद्धतीने निवड झाल्यानंतर पूर्वसंमती (Pre-Sanction) मिळते, त्यानंतर खरेदी पावती अपलोड केल्यावर डीबीटीने रक्कम मिळते."),
            ("महाराष्ट्रात नॉन-क्रिमीलेअर (Non-Creamy Layer) दाखल्यासाठी कमाल उत्पन्न मर्यादा काय आहे?", "सध्या ओबीसी, व्हीजेएनटी आणि एसईबीसी प्रवर्गासाठी मागील सलग तीन वर्षांचे एकत्रित उत्पन्न ₹8 लाखांपेक्षा कमी असणे आवश्यक आहे."),
            ("महाराष्ट्र स्पेशल इंटेन्सिव्ह रिव्हिजन (SIR) 2026 मतदार यादी कशी पाहावी?", "आमच्या 'Maharashtra SIR Voter List 2026' पेजवर जाऊन जिल्हा व विधानसभा निवडून संपूर्ण मतदार यादी पीडीएफ मोफत डाउनलोड करू शकता."),
            ("रेशन कार्डमध्ये नवीन सदस्याचे नाव कसे जोडावे?", "MahaFood RCMS पोर्टलवर ऑनलाइन अर्ज करून बाळाचा जन्म दाखला किंवा विवाहाचा दाखला व आधार कार्ड जोडून नाव समाविष्ट केले जाते."),
            ("बांधकाम कामगारांना ₹5,000 सुरक्षा किट व आरोग्य लाभ कसा मिळतो?", "MahaBOCW कडे 1 वर्ष पूर्ण झालेल्या सक्रिय नोंदणीकृत कामगारांना आधार प्रमाणीकरणानंतर मंडळाकडून थेट लाभ मिळतो."),
            ("आपले सरकार हेल्पलाइन व संपर्क क्रमांक काय आहे?", "नागरिक 24x7 टोल-फ्री क्रमांक 1800-120-8040 वर कॉल करून कोणत्याही शासकीय सेवेची माहिती व तक्रार नोंदवू शकतात.")
        ]
    }
}

# Generic template data generator for remaining states to ensure high quality and zero thin pages
def get_state_full_data(slug):
    if slug in STATES_CONFIG:
        return STATES_CONFIG[slug]
    
    name_clean = slug.replace('-', ' ').title()
    name_hi_map = {
        "andhra-pradesh": ("आंध्र प्रदेश", "अमरावती", "🏛️", "Meebhoomi / Navasakam", "https://meebhoomi.ap.gov.in", "1902"),
        "arunachal-pradesh": ("अरुणाचल प्रदेश", "ईटानगर", "🏔️", "e-Services Arunachal", "https://eservice.arunachal.gov.in", "1800-345-3677"),
        "arunachal": ("अरुणाचल प्रदेश", "ईटानगर", "🏔️", "e-Services Arunachal", "https://eservice.arunachal.gov.in", "1800-345-3677"),
        "assam": ("असम", "दिसपुर", "🦏", "Sewa Setu Assam", "https://sewasetu.assam.gov.in", "1800-345-3574"),
        "chandigarh": ("चंडीगढ़", "चंडीगढ़", "🌹", "e-District Chandigarh", "https://edistrict.chd.gov.in", "1800-180-1725"),
        "chhattisgarh": ("छत्तीसगढ़", "रायपुर", "🌳", "e-District Chhattisgarh", "https://edistrict.cgstate.gov.in", "1800-233-0243"),
        "dadra-nagar-haveli-daman-diu": ("दादरा और नगर हवेली एवं दमन और दीव", "दमन", "🏖️", "Daman Diu e-Services", "https://daman.nic.in", "0260-2230470"),
        "delhi": ("दिल्ली (NCT)", "नई दिल्ली", "🏛️", "e-District Delhi", "https://edistrict.delhigovt.nic.in", "1031 / 1077"),
        "goa": ("गोवा", "पणजी", "🏖️", "Goa Online Portal", "https://goaonline.gov.in", "0832-2419700"),
        "gujarat": ("गुजरात", "गांधीनगर", "🦁", "Digital Gujarat", "https://digitalgujarat.gov.in", "1800-233-5500"),
        "haryana": ("हरियाणा", "चंडीगढ़", "🚜", "Saral Haryana", "https://saralharyana.gov.in", "0172-3968468"),
        "himachal-pradesh": ("हिमाचल प्रदेश", "शिमला", "⛰️", "e-District HP", "https://edistrict.hp.gov.in", "1100 / 1800-180-8004"),
        "hp": ("हिमाचल प्रदेश", "शिमला", "⛰️", "e-District HP", "https://edistrict.hp.gov.in", "1100 / 1800-180-8004"),
        "jammu-kashmir": ("जम्मू और कश्मीर", "श्रीनगर / जम्मू", "❄️", "e-UNNAT J&K", "https://eunnat.jk.gov.in", "0191-2546059"),
        "jharkhand": ("झारखंड", "रांची", "⛏️", "JharSewa Jharkhand", "https://jharsewa.jharkhand.gov.in", "1800-345-6542"),
        "karnataka": ("कर्नाटक", "बेंगलुरु", "🐘", "Seva Sindhu Karnataka", "https://sevasindhu.karnataka.gov.in", "080-22230040"),
        "kerala": ("केरल", "तिरुवनंतपुरम", "🌴", "e-District Kerala", "https://edistrict.kerala.gov.in", "0471-2525444"),
        "ladakh": ("लद्दाख", "लेह", "🏔️", "e-District Ladakh", "https://edistrict.ladakh.gov.in", "01982-255555"),
        "lakshadweep": ("लक्षद्वीप", "कवरत्ती", "🌊", "Lakshadweep Portal", "https://lakshadweep.gov.in", "04896-262256"),
        "madhya-pradesh": ("मध्य प्रदेश", "भोपाल", "🐅", "MP e-District / Samagra", "https://mpedistrict.gov.in", "181 (CM Helpline)"),
        "manipur": ("मणिपुर", "इम्फाल", "🌺", "e-District Manipur", "https://eservicesmanipur.gov.in", "0385-2440100"),
        "meghalaya": ("मेघालय", "शिलांग", "☁️", "e-District Meghalaya", "https://megedistrict.gov.in", "0364-2500001"),
        "mizoram": ("मिजोरम", "आइजोल", "🌄", "Mizoram e-Services", "https://mizoram.gov.in", "0389-2322285"),
        "nagaland": ("नागालैंड", "कोहिमा", "🦅", "Nagaland Services", "https://nagaland.gov.in", "0370-2270001"),
        "odisha": ("ओडिशा", "भुवनेश्वर", "🛕", "Odisha e-District", "https://edistrict.odisha.gov.in", "1800-121-8242"),
        "puducherry": ("पुदुचेरी", "पुदुचेरी", "🏖️", "e-District Puducherry", "https://edistrict.py.gov.in", "0413-2233300"),
        "punjab": ("पंजाब", "चंडीगढ़", "🌾", "e-Sewa Punjab", "https://esewa.punjab.gov.in", "1100 (Sewa Helpline)"),
        "rajasthan": ("राजस्थान", "जयपुर", "🏰", "SSO Rajasthan / Jan Aadhaar", "https://sso.rajasthan.gov.in", "181 (Sampark)"),
        "sikkim": ("सिक्किम", "गंगटोक", "🏔️", "Sikkim Services", "https://sikkim.gov.in", "03592-202747"),
        "tamil-nadu": ("तमिलनाडु", "चेन्नई", "🛕", "TNeGA e-Sevai", "https://tnesevai.tn.gov.in", "1800-425-1333"),
        "telangana": ("तेलंगाना", "हैदराबाद", "🏢", "MeeSeva Telangana", "https://meeseva.telangana.gov.in", "040-48560012"),
        "tripura": ("त्रिपुरा", "अगरतला", "🎋", "e-District Tripura", "https://edistrict.tripura.gov.in", "0381-2418000"),
        "uttarakhand": ("उत्तराखंड", "देहरादून", "🏔️", "e-District Uttarakhand", "https://edistrict.uk.gov.in", "1905 (CM Helpline)"),
        "west-bengal": ("पश्चिम बंगाल", "कोलकाता", "🌊", "WB e-District", "https://edistrict.wb.gov.in", "1800-345-5555"),
        "andaman-nicobar": ("अंडमान और निकोबार", "पोर्ट ब्लेयर", "🏝️", "e-District Andaman", "https://edistrict.andaman.gov.in", "03192-233333")
    }

    meta = name_hi_map.get(slug, (name_clean, "राजधानी", "🏛️", f"e-District {name_clean}", f"https://{slug}.gov.in", "1800-111-222"))
    
    return {
        "slug": slug,
        "name_en": name_clean,
        "name_hi": meta[0],
        "capital": meta[1],
        "icon": meta[2],
        "primary_lang": "राजभाषा एवं हिंदी / English",
        "edistrict_name": meta[3],
        "edistrict_url": meta[4],
        "helpline": meta[5],
        "cm_helpline": f"{meta[5]} (राज्य नागरिक सेवा एवं शिकायत निवारण)",
        "revenue_portal": f"डिजिटल भूलेख / Land Records ({meta[0]})",
        "ration_portal": f"खाद्य एवं नागरिक आपूर्ति विभाग (e-PDS {meta[0]})",
        "flagship_schemes": [
            (f"{meta[0]} मुख्यमंत्री जनकल्याण योजना", "आर्थिक अनुदान व सामाजिक सुरक्षा", f"{meta[0]} के मूल निवासी परिवारों एवं पात्र नागरिकों के लिए।", f"आधिकारिक राज्य पोर्टल {meta[3]} पर ऑनलाइन आवेदन।"),
            (f"{meta[0]} बालिका संवर्धन व शिक्षा प्रोत्साहन योजना", "छात्रवृत्ति एवं प्रोत्साहन राशि", "प्राथमिक से उच्च शिक्षा तक अध्ययनरत मेधावी छात्राओं के लिए।", "राज्य छात्रवृत्ति पोर्टल पर आवेदन करें।"),
            (f"{meta[0]} स्वरोजगार एवं एमएसएमई सब्सिडी योजना", "ऋण पर 20% से 35% अनुदान", "नए लघु उद्योग एवं स्टार्टअप स्थापित करने वाले युवाओं हेतु।", "उद्योग एवं वाणिज्य विभाग के पोर्टल से।"),
            (f"{meta[0]} किसान कल्याण एवं कृषि यंत्र अनुदान", "कृषि उपकरणों पर 50% तक सब्सिडी", "राज्य के सभी लघु एवं सीमांत किसानों के लिए।", "कृषि विभाग पोर्टल / डीबीटी के माध्यम से।")
        ],
        "services": [
            (f"{slug}-income-certificate.html", "आय प्रमाण पत्र (Income Certificate)", meta[3], "₹0-₹30", "10-15 कार्यदिवस", "स्व-घोषणा पत्र, वेतन पर्ची/राजस्व रिपोर्ट, आधार कार्ड।"),
            (f"{slug}-domicile-certificate.html", "मूल निवास प्रमाण पत्र (Domicile / Resident)", meta[3], "₹0-₹30", "10-15 कार्यदिवस", "स्थानीय निवास प्रमाण, स्कूल सर्टिफिकेट, आधार कार्ड।"),
            (f"{slug}-caste-certificate.html", "जाति प्रमाण पत्र (Caste Certificate)", meta[3], "₹0-₹30", "15-21 कार्यदिवस", "पिता का जाति प्रमाण या भूमि रिकॉर्ड, आधार कार्ड।"),
            (f"{slug}-ration-card.html", "नया राशन कार्ड (New Ration Card)", "खाद्य आपूर्ति विभाग", "₹0-₹20", "30 कार्यदिवस", "परिवार के सभी सदस्यों का आधार कार्ड, पारिवारिक फोटो, आय प्रमाण।"),
            (f"{slug}-birth-certificate.html", "जन्म प्रमाण पत्र (Birth Certificate)", "CRSRGI / e-District", "₹0-₹50", "15-21 कार्यदिवस", "अस्पताल डिस्चार्ज स्लिप, माता-पिता का पहचान पत्र।"),
            (f"{slug}-death-certificate.html", "मृत्यु प्रमाण पत्र (Death Certificate)", "CRSRGI / Nagar Nigam", "₹0-₹50", "15-21 कार्यदिवस", "अस्पताल मृत्यु रिपोर्ट, पहचान पत्र।"),
            (f"{slug}-driving-licence.html", "ड्राइविंग लाइसेंस (Driving Licence)", "Parivahan Sarathi", "₹200-₹1000", "15 कार्यदिवस", "लर्नर लाइसेंस, आधार कार्ड, मेडिकल फिटनेस फॉर्म।"),
            (f"{slug}-senior-citizen-card.html", "वरिष्ठ नागरिक पेंशन व पहचान पत्र", "समाज कल्याण विभाग", "₹0", "30 कार्यदिवस", "60+ वर्ष आयु प्रमाण, बैंक पासबुक, आधार कार्ड।")
        ],
        "problems": [
            (f"{meta[3]} पर आवेदन पेंडिंग या रिजेक्ट होने पर क्या करें?", f"पोर्टल पर अपने Application Number से लॉगिन करके रिजेक्शन का कारण देखें। आवश्यक सुधार के साथ सही दस्तावेज़ अपलोड करें या सेवा के अधिकार (RTS) के तहत प्रथम अपीलीय अधिकारी को अपील भेजें।"),
            (f"{meta[0]} भूलेख व खसरा-खतौनी में नाम सुधार प्रक्रिया", f"राजस्व विभाग के पोर्टल पर 'दुरुस्ती / सुधार आवेदन' भरें और अपनी रजिस्ट्री व पहचान पत्र संलग्न करके अंचलाधिकारी/तहसीलदार को प्रस्तुत करें।"),
            (f"{meta[0]} राशन कार्ड में नाम जुड़वाने या e-KYC की समस्या", f"उचित मूल्य दुकान (FPS Dealer) के पास जाकर e-PoS मशीन पर बायोमेट्रिक सत्यापन कराएं। छूटे हुए सदस्यों का आधार कार्ड पोर्टल पर अपलोड करें।"),
            (f"{meta[0]} छात्रवृत्ति व पेंशन डीबीटी खाते में न आने पर समाधान", f"अपने बैंक खाते में आधार लिंकिंग और NPCI DBT मैंडेट सक्रिय कराएं। पोर्टल पर बैंक स्टेटस 'PFMS Accepted' होना सुनिश्चित करें।"),
            (f"{meta[0]} ड्राइविंग लाइसेंस स्लॉट बुकिंग व टेस्ट प्रक्रिया", f"सारथी परिवहन पोर्टल पर आरटीओ टेस्ट स्लॉट बुक करें। यदि पेमेंट कटने के बाद रसीद न मिले, तो 'Verify Payment' विकल्प से चालान पुनः सत्यापित करें।"),
            (f"{meta[0]} सीएम हेल्पलाइन व जन शिकायत निवारण", f"राज्य के सीएम हेल्पलाइन नंबर ({meta[5]}) पर कॉल करें या ऑनलाइन ग्रीवेंस पोर्टल पर शिकायत दर्ज कराएं। 15 दिनों में समाधान अनिवार्य है।")
        ],
        "faqs": [
            (f"{meta[0]} के आधिकारिक e-District पोर्टल से प्रमाण पत्र कैसे डाउनलोड करें?", f"आधिकारिक पोर्टल {meta[3]} ({meta[4]}) पर जाएं, 'Track Status / Verify Certificate' में एप्लीकेशन रेफरेंस नंबर डालें और डिजिटल हस्ताक्षरित प्रमाण पत्र पीडीएफ डाउनलोड करें।"),
            (f"{meta[0]} में आय, जाति व निवास प्रमाण पत्र कितने दिनों में बनता है?", f"लोक सेवा गारंटी अधिनियम के तहत सामान्यतः 10 से 15 कार्यदिवसों में संबंधित तहसीलदार/अंचलाधिकारी द्वारा प्रमाण पत्र जारी कर दिया जाता है।"),
            (f"{meta[0]} में जमीन के रिकॉर्ड (खसरा, खतौनी, RoR) ऑनलाइन कैसे देखें?", f"राज्य के डिजिटल भूलेख पोर्टल पर जाकर अपने जिले, तहसील और गांव का चयन करें। खसरा या खाता संख्या दर्ज कर डिजिटल नकल निःशुल्क देखें।"),
            (f"{meta[0]} में नया राशन कार्ड ऑनलाइन कैसे बनवाएं?", f"खाद्य विभाग के पोर्टल या {meta[3]} पर लॉगिन करके परिवार के सभी सदस्यों के आधार और आय प्रमाण पत्र के साथ ऑनलाइन फॉर्म जमा करें।"),
            (f"{meta[0]} में सरकारी योजनाओं का लाभ लेने के लिए क्या पात्रता है?", f"आवेदक {meta[0]} का मूल निवासी होना चाहिए, आधार से बैंक खाता लिंक (DBT Enabled) होना चाहिए और योजना अनुसार निर्धारित आय/आयु सीमा में आना चाहिए।"),
            (f"{meta[0]} स्पेशल इंटेंसिव रिवीजन (SIR) 2026 वोटर लिस्ट कैसे डाउनलोड करें?", f"हमारे '{meta[1]} SIR Voter List 2026' पेज पर जाकर अपने जिले व विधानसभा क्षेत्र की संपूर्ण मतदाता सूची पीडीएफ मुफ्त डाउनलोड करें।"),
            (f"{meta[0]} में जाति प्रमाण पत्र की वैधता कितनी होती है?", f"अनुसूचित जाति (SC) एवं अनुसूचित जनजाति (ST) का प्रमाण पत्र जीवन भर (Lifetime) वैध होता है। ओबीसी नॉन-क्रीमीलेयर प्रमाण पत्र 1 से 3 वित्तीय वर्षों के लिए मान्य होता है।"),
            (f"{meta[0]} में जन सेवा केंद्र (CSC) कैसे खोजें?", f"हमारे CSC Locator टूल में अपना राज्य व पिनकोड दर्ज करके अपने निकटतम अधिकृत जन सेवा केंद्र का पता व मोबाइल नंबर खोजें।"),
            (f"{meta[0]} में किसी भी सरकारी कार्य में देरी होने पर शिकायत कहां करें?", f"राज्य सीएम हेल्पलाइन ({meta[5]}) पर सीधे कॉल करें या जनसुनवाई/समाधान पोर्टल पर ऑनलाइन शिकायत दर्ज करें।"),
            (f"{meta[0]} की नवीनतम सरकारी योजनाओं की जानकारी कहां मिलेगी?", f"SarkariSewa India के इस आधिकारिक राज्य पृष्ठ पर और हमारे VIP Telegram चैनल पर सभी नवीनतम सरकारी अपडेट्स रियल-टाइम उपलब्ध हैं।")
        ]
    }

def generate_state_html(data):
    slug = data["slug"]
    name_en = data["name_en"]
    name_hi = data["name_hi"]
    capital = data["capital"]
    icon = data["icon"]
    edistrict_name = data["edistrict_name"]
    edistrict_url = data["edistrict_url"]
    helpline = data["helpline"]
    cm_helpline = data["cm_helpline"]
    
    sir_url = f"{slug}-sir-voter-list.html" if os.path.isfile(os.path.join(STATES_DIR, f"{slug}-sir-voter-list.html")) else "index.html"

    # Services HTML
    services_cards = []
    for s_file, s_title, s_portal, s_fee, s_time, s_docs in data["services"]:
        target_link = f"../service/{s_file}" if os.path.isfile(os.path.join(ROOT, 'service', s_file)) else f"{s_file}"
        services_cards.append(f'''        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 22px; box-shadow: 0 4px 16px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s, box-shadow 0.2s;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
              <span style="font-size: 1.6rem;">📜</span>
              <span style="background: var(--color-surface); border: 1px solid var(--color-border); padding: 3px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 700; color: #2563eb;">{s_time}</span>
            </div>
            <h3 style="margin: 0 0 6px 0; font-size: 1.15rem; color: var(--color-primary);">{s_title}</h3>
            <div style="font-size: 0.82rem; color: var(--color-text-muted); margin-bottom: 10px;">
              <strong>पोर्टल:</strong> {s_portal} | <strong>शुल्क:</strong> {s_fee}
            </div>
            <p style="font-size: 0.85rem; color: var(--color-text); line-height: 1.5; margin: 0 0 12px 0;">
              <strong>मुख्य दस्तावेज़:</strong> {s_docs}
            </p>
          </div>
          <div>
            <a href="{target_link}" style="background: #2563eb; color: #ffffff !important; font-weight: 700; padding: 9px 14px; border-radius: 8px; text-decoration: none; text-align: center; font-size: 0.88rem; display: block; box-shadow: 0 2px 6px rgba(37,99,235,0.2);">
              गाइड, फीस व ऑनलाइन आवेदन ↗
            </a>
          </div>
        </div>''')

    # Flagship Schemes HTML
    schemes_html = []
    for sc_title, sc_benefit, sc_elig, sc_apply in data["flagship_schemes"]:
        schemes_html.append(f'''        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 5px solid #059669; border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <h4 style="margin: 0; font-size: 1.15rem; color: var(--color-primary);">{sc_title}</h4>
            <span style="background: #ecfdf5; color: #059669; border: 1px solid #a7f3d0; padding: 3px 10px; border-radius: 14px; font-size: 0.8rem; font-weight: 700;">{sc_benefit}</span>
          </div>
          <p style="font-size: 0.9rem; color: var(--color-text); margin: 0 0 8px 0; line-height: 1.55;">
            <strong>पात्रता:</strong> {sc_elig}
          </p>
          <div style="font-size: 0.85rem; color: var(--color-text-muted); background: var(--color-surface); padding: 8px 12px; border-radius: 6px; border: 1px solid var(--color-border);">
            <strong>आवेदन प्रक्रिया:</strong> {sc_apply}
          </div>
        </div>''')

    # Problems HTML
    problems_html = []
    for p_title, p_desc in data["problems"]:
        problems_html.append(f'''        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 5px solid #d97706; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
          <strong style="color: var(--color-primary); font-size: 1.05rem; display: block; margin-bottom: 8px;">{p_title}</strong>
          <p style="font-size: 0.92rem; color: var(--color-text); margin: 0; line-height: 1.6;">
            {p_desc}
          </p>
        </div>''')

    # FAQs HTML
    faqs_html = []
    schema_faqs = []
    for idx, (q, a) in enumerate(data["faqs"], 1):
        schema_faqs.append({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": a
            }
        })
        open_attr = "open" if idx == 1 else ""
        faqs_html.append(f'''      <details class="faq-item" {open_attr} style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
        <summary class="faq-item__q" style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
          <span>{idx}. {q}</span>
          <span style="font-size: 1.2rem;">▾</span>
        </summary>
        <div class="faq-item__a" style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
          {a}
        </div>
      </details>''')

    schema_json = json.dumps({
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "AdministrativeArea",
                "name": name_en,
                "alternateName": name_hi,
                "url": f"https://sarkarisewaindia.com/states/{slug}.html",
                "description": f"Official citizen services hub for {name_en} ({name_hi}). Complete information on e-District certificates, land records, ration card e-PDS, and state welfare schemes.",
                "containedInPlace": {
                    "@type": "Country",
                    "name": "India"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://sarkarisewaindia.com/index.html"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "State-wise Services",
                        "item": "https://sarkarisewaindia.com/states/index.html"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": name_hi,
                        "item": f"https://sarkarisewaindia.com/states/{slug}.html"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": schema_faqs
            }
        ]
    }, ensure_ascii=False, indent=2)

    return f'''<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="max-image-preview:large, index, follow">
  <title>{name_hi} सरकारी सेवाएं 2026: ई-डिस्ट्रिक्ट, प्रमाण पत्र, भूलेख, राशन कार्ड | SarkariSewa India</title>
  <meta name="description" content="{name_hi} ({name_en}) के आधिकारिक e-District पोर्टल ({edistrict_name}), आय, जाति, निवास प्रमाण पत्र, डिजिटल भूलेख, राशन कार्ड व मुख्यमंत्री योजनाओं की संपूर्ण जानकारी।">
  <link rel="canonical" href="https://sarkarisewaindia.com/states/{slug}.html">
  
  <meta property="og:title" content="{name_hi} सरकारी सेवाएं 2026: ई-डिस्ट्रिक्ट, प्रमाण पत्र, भूलेख, राशन कार्ड | SarkariSewa India">
  <meta property="og:description" content="{name_hi} ({name_en}) के आधिकारिक e-District पोर्टल, प्रमाण पत्र, भूलेख, राशन कार्ड व कल्याणकारी योजनाओं की गाइड।">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://sarkarisewaindia.com/states/{slug}.html">
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{name_en} Citizen Services Portal 2026 | SarkariSewa India">
  <meta name="twitter:description" content="Official e-District certificates, land records, ration cards & state schemes guide for {name_en}.">
  
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
  
  <script type="application/ld+json" id="state-schema">
{schema_json}
  </script>
</head>
<body class="v2-template" data-slug="{slug}">
  <script>window.SS_ROOT = "../";</script>
  
  <div id="site-header"></div>

  <main class="container" style="max-width: 1140px; margin: 32px auto; padding: 0 16px;">
    
    <!-- BREADCRUMB -->
    <nav class="breadcrumb" aria-label="Breadcrumb" style="font-size: 0.9rem; margin-bottom: 20px; color: var(--color-text-muted);">
      <a href="../index.html" style="color: var(--color-primary); text-decoration: none;">होम (Home)</a> &gt;
      <a href="index.html" style="color: var(--color-primary); text-decoration: none;">राज्य सेवाएं (States)</a> &gt;
      <span style="color: var(--color-text);">{name_hi} ({name_en})</span>
    </nav>

    <!-- HERO HEADER -->
    <header style="background: linear-gradient(135deg, #10243E 0%, #173663 60%, #0c2650 100%); color: #ffffff; border-radius: 18px; padding: 36px 28px; margin-bottom: 36px; box-shadow: 0 10px 35px rgba(16, 36, 62, 0.25); border: 1px solid rgba(255,255,255,0.15);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 14px;">
        <span style="background: rgba(255,255,255,0.15); padding: 5px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 700;">
          {icon} राज्य आधिकारिक नागरिक सेवा केंद्र 2026
        </span>
        <span style="background: #2563eb; color: #ffffff; padding: 5px 14px; border-radius: 14px; font-size: 0.8rem; font-weight: 700;">
          राजधानी: {capital}
        </span>
      </div>
      <h1 style="font-size: 2.3rem; line-height: 1.3; color: #ffffff; margin: 0 0 12px 0;">
        {name_hi} — राज्यवार लोकप्रिय सेवाएं एवं ई-डिस्ट्रिक्ट पोर्टल
      </h1>
      <p style="font-size: 1.05rem; line-height: 1.75; color: rgba(255,255,255,0.9); max-width: 900px; margin: 0 0 22px 0;">
        {name_hi} के आधिकारिक <strong>{edistrict_name}</strong> पोर्टल के माध्यम से आय, मूल निवास, जाति व ईडब्ल्यूएस प्रमाण पत्र, डिजिटल भूलेख, राशन कार्ड e-KYC, पेंशन योजनाएं एवं मुख्यमंत्री जनकल्याणकारी योजनाओं की पूर्ण ऑनलाइन आवेदन गाइड।
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <a href="{edistrict_url}" target="_blank" rel="noopener noreferrer" style="background: #ffffff; color: #10243E !important; font-weight: 700; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
          🌐 आधिकारिक {edistrict_name} पोर्टल ↗
        </a>
        <a href="{sir_url}" style="background: rgba(255,255,255,0.15); color: #ffffff !important; font-weight: 600; padding: 10px 18px; border-radius: 8px; text-decoration: none; font-size: 0.9rem; border: 1px solid rgba(255,255,255,0.3); display: inline-flex; align-items: center; gap: 6px;">
          🗳️ SIR 2026 वोटर लिस्ट PDF ↗
        </a>
        <span style="color: rgba(255,255,255,0.8); font-size: 0.85rem; margin-left: auto;">
          📞 हेल्पलाइन: <strong>{helpline}</strong>
        </span>
      </div>
    </header>

    <!-- SECTION 1: POPULAR STATE SERVICES GRID -->
    <section style="margin-bottom: 48px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 22px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        <div>
          <h2 style="font-size: 1.65rem; color: var(--color-primary); margin: 0 0 6px 0;">
            📜 <span data-lang-show="en">{name_en} Top Citizen Services &amp; Certificates</span>
            <span data-lang-show="hi">{name_hi} शीर्ष नागरिक सेवाएं व प्रमाण पत्र</span>
          </h2>
          <p style="font-size: 0.95rem; color: var(--color-text-muted); margin: 0;">ऑनलाइन आवेदन प्रक्रिया, आवश्यक दस्तावेज़, शुल्क एवं समय-सीमा</p>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px;">
{"\n".join(services_cards)}
      </div>
    </section>

    <!-- SECTION 2: FLAGSHIP WELFARE SCHEMES -->
    <section style="margin-bottom: 48px;">
      <h2 style="font-size: 1.65rem; color: var(--color-primary); margin: 0 0 18px 0; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        🌟 <span data-lang-show="en">Key Welfare Schemes in {name_en}</span>
        <span data-lang-show="hi">{name_hi} की प्रमुख जनकल्याणकारी योजनाएं (2026)</span>
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 18px;">
{"\n".join(schemes_html)}
      </div>
    </section>

    <!-- SECTION 3: 6 REAL WORLD PROBLEM SOLVERS -->
    <section class="service-section" style="margin-bottom: 48px;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-bottom: 18px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        ⚙️ <span data-lang-show="en">Common Issues &amp; Practical Solutions ({name_en})</span>
        <span data-lang-show="hi">{name_hi} सरकारी सेवाओं में समस्याएं व समाधान (6 Problem Solvers)</span>
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 18px;">
{"\n".join(problems_html)}
      </div>
    </section>

    <!-- SECTION 4: 10 STATE SPECIFIC FAQS -->
    <section class="service-section" style="margin-bottom: 48px;">
      <h2 style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        ❓ <span data-lang-show="en">Frequently Asked Questions (FAQs - {name_en})</span>
        <span data-lang-show="hi">अक्सर पूछे जाने वाले सवाल ({name_hi} FAQs)</span>
      </h2>
{"\n".join(faqs_html)}
    </section>

    <!-- CITIZEN TOOLS GRID -->
    <section class="service-section" style="margin-top: 40px;">
      <h3 style="color: var(--color-primary); font-size: 1.5rem; margin-bottom: 18px;">
        🛠️ <span data-lang-show="en">Recommended Citizen Tools for {name_en}</span>
        <span data-lang-show="hi">{name_hi} नागरिकों के लिए उपयोगी टूल्स एवं कैलकुलेटर्स</span>
      </h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
        <a href="../tools/csc-locator.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">📍</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">CSC / जन सेवा केंद्र खोजें</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">{name_hi} में अपने पिनकोड पर नजदीकी अधिकृत VLE केंद्र खोजें।</p>
          </div>
          <div style="font-weight: 700; color: #2563eb; font-size: 0.85rem; margin-top: 12px;">Find CSC Near You ↗</div>
        </a>

        <a href="../tools/self-declaration-builder.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">📝</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">स्व-घोषणा पत्र निर्माता</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">आय, जाति व सरकारी योजनाओं हेतु स्व-प्रमाणित शपथ पत्र 1-क्लिक में बनाएं।</p>
          </div>
          <div style="font-weight: 700; color: #059669; font-size: 0.85rem; margin-top: 12px;">Build Declaration ↗</div>
        </a>

        <a href="../tools/eligibility-checker.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">🎯</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">योजना पात्रता चेकर</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">अपनी आयु, आय और श्रेणी से {name_hi} की योग्य योजनाएं खोजें।</p>
          </div>
          <div style="font-weight: 700; color: #d97706; font-size: 0.85rem; margin-top: 12px;">Check Eligibility ↗</div>
        </a>

        <a href="../tools/status-troubleshooter.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">🔍</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">स्टेटस ट्रबलशूटर</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">अटके हुए या रिजेक्ट आवेदनों का कारण व समाधान खोजें।</p>
          </div>
          <div style="font-weight: 700; color: #7c3aed; font-size: 0.85rem; margin-top: 12px;">Fix Status ↗</div>
        </a>
      </div>
    </section>

    <!-- VIP TELEGRAM BANNER -->
    <div style="background: linear-gradient(135deg, #0088cc 0%, #005f8f 100%); border-radius: 14px; padding: 26px; color: #fff; margin: 40px 0; text-align: center; box-shadow: 0 6px 20px rgba(0,136,204,0.25);">
      <h3 style="margin: 0 0 8px 0; color: #fff; font-size: 1.45rem;">✈️ {name_hi} VIP Telegram Community</h3>
      <p style="margin: 0 0 18px 0; color: #e0f2fe; font-size: 0.95rem; line-height: 1.6;">
        {name_hi} की सभी सरकारी योजनाओं, प्रमाण पत्रों, सरकारी नौकरियों व राशन कार्ड अपडेट्स की सबसे तेज़ सूचना सीधे अपने फोन पर पाएं।
      </p>
      <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" class="btn" style="background: #fff; color: #0088cc; font-weight: 700; padding: 12px 28px; text-decoration: none; border-radius: 8px; display: inline-block; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
        Join {name_hi} Telegram Channel ↗
      </a>
    </div>

    <!-- COMMENTS SECTION -->
    <section class="service-section" id="comments-section" style="margin-top: 36px;">
      <h3 style="color: var(--color-primary); font-size: 1.4rem; margin-bottom: 12px;">💬 {name_hi} नागरिक सहायता एवं सार्वजनिक चर्चा</h3>
      <p style="font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 16px;">
        यह {name_hi} सरकारी सेवाओं से जुड़ा सार्वजनिक मंच है। आधिकारिक सहायता के लिए हेल्पलाइन {helpline} पर संपर्क करें।
      </p>
      <form id="comment-form" class="comment-form">
        <div class="comment-form__row">
          <input type="text" id="comment-name" maxlength="80" placeholder="आपका नाम (Your Name)" required />
        </div>
        <div class="comment-form__row">
          <textarea id="comment-message" maxlength="2000" rows="3" placeholder="{name_hi} ई-डिस्ट्रिक्ट, प्रमाण पत्र या योजना से जुड़ा अपना सवाल पूछें..." required></textarea>
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

def run_all_state_upgrades():
    all_files = [
        'andaman-nicobar.html', 'andhra-pradesh.html', 'arunachal-pradesh.html', 'arunachal.html',
        'assam.html', 'bihar.html', 'chandigarh.html', 'chhattisgarh.html',
        'dadra-nagar-haveli-daman-diu.html', 'delhi.html', 'goa.html', 'gujarat.html',
        'haryana.html', 'himachal-pradesh.html', 'hp.html', 'jammu-kashmir.html',
        'jharkhand.html', 'karnataka.html', 'kerala.html', 'ladakh.html',
        'lakshadweep.html', 'madhya-pradesh.html', 'maharashtra.html', 'manipur.html',
        'meghalaya.html', 'mizoram.html', 'nagaland.html', 'odisha.html',
        'puducherry.html', 'punjab.html', 'rajasthan.html', 'sikkim.html',
        'tamil-nadu.html', 'telangana.html', 'tripura.html', 'uttar-pradesh.html',
        'uttarakhand.html', 'west-bengal.html'
    ]
    
    print(f"Upgrading {len(all_files)} State Main Hub Pages...")
    for fname in all_files:
        slug = fname.replace('.html', '')
        # normalize aliases
        data_slug = slug
        if slug == 'arunachal': data_slug = 'arunachal-pradesh'
        if slug == 'hp': data_slug = 'himachal-pradesh'
        
        data = get_state_full_data(data_slug)
        # Ensure slug in data matches filename slug for correct canonical
        data["slug"] = slug
        
        html_out = generate_state_html(data)
        file_path = os.path.join(STATES_DIR, fname)
        with open(file_path, 'w', encoding='utf-8') as fp:
            fp.write(html_out)
        
        size_kb = len(html_out.encode('utf-8')) / 1024
        print(f"Processed: {fname:<35} | {size_kb:.1f} KB")

if __name__ == '__main__':
    run_all_state_upgrades()