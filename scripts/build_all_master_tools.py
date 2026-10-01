# -*- coding: utf-8 -*-
"""
Master Upgrader for All 23 Tools & Calculators
Replaces all hardcoded headers/footers with dynamic main.js v2-template,
eliminates all boilerplate paragraphs, and builds 6 styled problem solvers,
in-depth statutory guides (2,000+ words), 10 FAQ accordions, and tools grids.
"""
import os, sys, json, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOOLS_DIR = os.path.join(ROOT, 'tools')
EXTRA_TOOL_FAQS = {
    "document-checklist.html": [
        ("सरकारी नौकरी डॉक्यूमेंट वेरिफिकेशन (DV) में कौन-कौन से मूल दस्तावेज़ अनिवार्य होते हैं?", "10वीं व 12वीं की मूल अंकतालिका व प्रमाण पत्र, स्नातक डिग्री व सभी सेमेस्टर्स की मार्कशीट, आरक्षित वर्ग का जाति प्रमाण पत्र (सेंट्रल/स्टेट फॉर्मेट), आय प्रमाण पत्र (EWS हेतु), मूल निवास प्रमाण पत्र, पहचान पत्र (आधार/पैन), 6 पासपोर्ट फोटो और अनापत्ति प्रमाण पत्र (NOC - यदि पूर्व में कार्यरत हैं)।"),
        ("कास्ट सर्टिफिकेट (Caste Certificate) केंद्र बनाम राज्य फॉर्मेट में क्या अंतर है?", "केंद्रीय सरकारी भर्तियों (SSC, UPSC, Railway, IBPS) में कार्मिक मंत्रालय (DoPT) द्वारा निर्धारित प्रारूप में 'Government of India' लिखा प्रमाण पत्र मान्य होता है, जबकि राज्य आयोगों में संबंधित राज्य सरकार का जाति प्रमाण पत्र स्वीकार किया जाता है।"),
        ("ओबीसी नॉन-क्रीमी लेयर (OBC-NCL) सर्टिफिकेट की वैधता अवधि कितनी होती है?", "ओबीसी नॉन-क्रीमी लेयर प्रमाण पत्र जारी होने के वित्तीय वर्ष (1 अप्रैल से 31 मार्च) के लिए वैध माना जाता है। भर्ती आवेदन की अंतिम तिथि (Crucial Date) पर यह वैध होना आवश्यक है।"),
        ("ईडब्ल्यूएस (EWS) प्रमाण पत्र की वित्तीय वर्ष और वित्तीय वर्ष वैधता का क्या नियम है?", "ईडब्ल्यूएस प्रमाण पत्र उस वित्तीय वर्ष में वैध होता है जिसके लिए वह जारी किया गया है, और इसका आधार उससे ठीक पिछले वित्तीय वर्ष की कुल पारिवारिक सकल आय (Gross Annual Income < ₹8 Lakh) होती है।"),
        ("10वीं मार्कशीट और आधार कार्ड में माता/पिता के नाम में स्पेलिंग अंतर होने पर क्या करें?", "डॉक्यूमेंट वेरिफिकेशन के समय प्रथम श्रेणी न्यायिक मजिस्ट्रेट या नोटरी पब्लिक द्वारा जारी शपथ पत्र (Affidavit / Annexure) प्रस्तुत करें जिसमें स्पष्ट हो कि दोनों नाम एक ही व्यक्ति के हैं।"),
        ("पासपोर्ट आवेदन हेतु आवश्यक दस्तावेज़ों की चेकलिस्ट क्या है?", "(1) जन्म तिथि प्रमाण (10वीं मार्कशीट/जन्म प्रमाण पत्र), (2) पते का प्रमाण (आधार कार्ड/बिजली बिल/बैंक पासबुक), (3) फोटो पहचान पत्र (पैन कार्ड/वोटर आईडी), और (4) ईसीआर/ईसीएनआर स्थिति प्रमाण।"),
        ("विवाह प्रमाण पत्र (Marriage Certificate) बनवाने के लिए कौन से दस्तावेज़ चाहिए?", "पति-पत्नी का आयु व पता प्रमाण, शादी का निमंत्रण कार्ड (Invitation Card), संयुक्त शादी की तस्वीर, और विवाह के समय उपस्थित 2 गवाहों के आधार कार्ड।"),
        ("सरकारी नौकरियों में सेवारत कर्मचारियों के लिए अनापत्ति प्रमाण पत्र (NOC) कब आवश्यक है?", "किसी भी सरकारी या सार्वजनिक उपक्रम (PSU) में कार्यरत कर्मचारी को नए पद हेतु आवेदन करते समय या डीवी के समय अपने वर्तमान नियोक्ता से 'No Objection Certificate' प्रस्तुत करना अनिवार्य है।"),
        ("दिव्यांगता प्रमाण पत्र (UDID Card) का ऑनलाइन सत्यापन कैसे होता है?", "स्वावलंबन पोर्टल (swavlambancard.gov.in) पर जारी 18-अंकीय विशिष्ट पहचान पत्र (UDID) डीवी में सीधे क्यूआर कोड स्कैन करके सत्यापित किया जाता है।"),
        ("दस्तावेज़ खो जाने पर डुप्लीकेट मार्कशीट या सर्टिफिकेट के साथ डीवी में कैसे शामिल हों?", "संबंधित शिक्षा बोर्ड/विश्वविद्यालय द्वारा जारी मूल डुप्लीकेट मार्कशीट के साथ पुलिस एफआईआर (FIR / Lost Report) की प्रति संलग्न करके डीवी में प्रस्तुत करें।")
    ],
    "self-declaration-builder.html": [
        ("स्व-घोषणा पत्र (Self-Declaration / Undertaking) क्या होता है?", "यह आवेदक द्वारा हस्ताक्षरित एक औपचारिक कानूनी दस्तावेज है जिसमें वह प्रमाणित करता है कि दी गई सभी जानकारियां, शैक्षणिक योग्यताएं और जाति/आय विवरण पूर्णतः सत्य हैं और गलत पाए जाने पर उसकी उम्मीदवारी रद्द की जा सकती है।"),
        ("आईबीपीएस (IBPS) बैंक भर्ती परीक्षा में हैंडराइटिंग डिक्लेरेशन कैसे लिखें?", "सफेद कागज पर काली स्याही से अपनी स्वयं की लिखावट में लिखना होता है: 'I, [Name of Candidate], hereby declare that all the information submitted by me in the application form is correct, true and valid...'।"),
        ("माझी लाडकी बहीण योजना में हमीपत्र (Hamipatra Self-Declaration) का प्रारूप क्या है?", "आवेदक महिला प्रमाणित करती है कि उसके परिवार की कुल वार्षिक आय ₹2.5 लाख से कम है, परिवार में कोई आयकर दाता या चार पहिया वाहन मालिक नहीं है और वह किसी अन्य समान सरकारी योजना से लाभान्वित नहीं है।"),
        ("क्या स्व-घोषणा पत्र पर नोटरी या राजपत्रित अधिकारी (Gazetted Officer) के हस्ताक्षर आवश्यक हैं?", "सामान्यतः स्व-घोषणा पत्र केवल आवेदक के स्वयं के हस्ताक्षर से मान्य होता है। यदि न्यायालयीन शपथ पत्र (Affidavit) मांगा गया हो, तभी नोटरी या शपथ आयुक्त के हस्ताक्षर आवश्यक होते हैं।"),
        ("सरकारी नौकरी आवेदन में गलत स्व-घोषणा पत्र देने पर क्या कानूनी कार्रवाई होती है?", "भारतीय न्याय संहिता (BNS) और सेवा नियमों के तहत पद से बर्खास्तगी, भर्ती से आजीवन डिबार (Debarment) और विधिक अभियोजन की कार्रवाई की जा सकती है।"),
        ("बेरोजगारी भत्ता व कौशल प्रशिक्षण योजनाओं हेतु आय स्व-घोषणा पत्र कैसे बनाएं?", "हमारे टूल में अपनी पारिवारिक मासिक आय, परिवार के सदस्यों की संख्या और वर्तमान रोजगार स्थिति दर्ज करके 1-क्लिक में मानक पीडीएफ डाउनलोड करें।"),
        ("ई-डिस्ट्रिक्ट सेवाओं हेतु पते का स्व-घोषणा पत्र कब काम आता है?", "यदि किसी किराएदार के पास स्थानीय पते का स्थायी सरकारी दस्तावेज़ नहीं है, तो मकान मालिक के सहमति पत्र के साथ यह स्व-घोषणा पत्र संलग्न किया जाता है।"),
        ("क्या मोबाइल से भरा गया डिजिटल स्व-घोषणा पत्र सरकारी फॉर्म में अपलोड किया जा सकता है?", "हाँ, हमारे बिल्डर टूल से तैयार पीडीएफ को डाउनलोड कर, प्रिंट निकालकर हस्ताक्षर करें और पुनः फोटो/पीडीएफ स्कैन करके पोर्टल पर अपलोड करें।"),
        ("माता-पिता या अभिभावक द्वारा अवयस्क (Minor) हेतु घोषणा पत्र कैसे दिया जाता है?", "18 वर्ष से कम आयु के बच्चों के पासपोर्ट, छात्रवृत्ति या खेल प्रतियोगिताओं में माता-पिता/कानूनी अभिभावक द्वारा Annexure D/C के प्रारूप में अंडरटेकिंग दी जाती है।"),
        ("स्व-घोषणा पत्र बिल्डर टूल से फॉर्म तैयार करने की विधि क्या है?", "आवश्यक टेम्प्लेट चुनें (IBPS / लाडकी बहीण / सामान्य आय घोषणा), अपना नाम व विवरण भरें और तुरंत प्रिंट-रेडी प्रारूप प्राप्त करें।")
    ]
}

ALL_TOOLS_DATA = {
    "itr-penalty-calculator.html": {
        "title": "ITR Late Filing Penalty Calculator 2026: Section 234F, 234A, 234B & 234C Interest",
        "title_hi": "आईटीआर लेट फीस पेनल्टी कैलकुलेटर 2026: धारा 234F, 234A, 234B व 234C ब्याज",
        "desc": "Calculate late filing fees under Section 234F and interest under Section 234A/B/C for delayed ITR filing. Check penalties for income below and above ₹5 Lakhs.",
        "desc_hi": "आईटीआर देर से भरने पर धारा 234F के तहत लेट फीस और 234A, 234B व 234C ब्याज की सटीक गणना करें। ₹5 लाख से कम व अधिक आय पर पेनल्टी नियम।",
        "canonical": "https://sarkarisewaindia.com/tools/itr-penalty-calculator.html",
        "problems": [
            ("1. ₹5 लाख से कम कुल आय होने पर धारा 234F लेट फीस ₹1,000 की सीमा", "यदि वित्तीय वर्ष में आपकी कुल कर योग्य आय ₹5,00,000 से कम या बराबर है, तो 31 जुलाई के बाद बिलेटेड रिटर्न दाखिल करने पर अधिकतम लेट फीस **₹1,000** ही लगेगी। ₹5 लाख से अधिक आय होने पर यह ₹5,000 होती है।"),
            ("2. कर देयता शून्य (Zero Tax) होने पर क्या लेट फीस लगेगी?", "यदि आपकी कुल आय मूल छूट सीमा (₹2.5 लाख ओल्ड / ₹3 लाख न्यू) से कम है, तो कोई लेट फीस नहीं लगेगी। किंतु यदि आय छूट सीमा से अधिक है और धारा 87A रिबेट के कारण टैक्स शून्य हुआ है, तो 234F लेट फीस देय होगी।"),
            ("3. धारा 234A के तहत बकाया टैक्स पर 1% प्रति माह ब्याज का नियम", "यदि नियत तारीख (31 जुलाई) तक कोई स्व-मूल्यांकन कर (Self-Assessment Tax) बकाया रह जाता है, तो देय तारीख से वास्तविक फाइलिंग की तारीख तक प्रति माह **1% साधारण ब्याज** (Simple Interest) देय होता है।"),
            ("4. अग्रिम कर (Advance Tax) चूक पर धारा 234B व 234C ब्याज से बचाव", "यदि कुल वित्तीय वर्ष में देय टैक्स ₹10,000 से अधिक है और आपने 31 मार्च तक 90% एडवांस टैक्स जमा नहीं किया, तो धारा 234B (1% प्रति माह) और 234C (त्रैमासिक किस्त में कमी पर 1%) का ब्याज लगता है।"),
            ("5. गंभीर बीमारी या प्राकृतिक आपदा में धारा 119(2)(b) के तहत माफी (Condonation)", "यदि किसी वास्तविक मजबूरी या चिकित्सा आपातकाल के कारण रिटर्न दाखिल नहीं हो सका, तो आयकर आयुक्त (CIT/Pr.CIT) के पास धारा 119(2)(b) में लेट फीस व ब्याज माफी हेतु अपील की जा सकती है।"),
            ("6. 31 दिसंबर की समय-सीमा छूट जाने पर अपडेटेड रिटर्न (ITR-U) का विकल्प", "यदि 31 दिसंबर तक बिलेटेड रिटर्न भी नहीं भरा गया, तो धारा 139(8A) के तहत संबंधित असेसमेंट वर्ष के अंत से 24 महीनों के भीतर **25% से 50% अतिरिक्त कर** के साथ ITR-U दाखिल किया जा सकता है।")
        ],
        "statutory_title_en": "Statutory Provisions: Section 234F Fees & Sections 234A/B/C Interest Slabs",
        "statutory_title_hi": "आयकर धारा 234F लेट फीस एवं धारा 234A, 234B व 234C ब्याज के कानूनी प्रावधान",
        "statutory_content": """
        <p>भारत में आयकर रिटर्न (ITR) दाखिल करने की अंतिम तिथि सामान्य करदाताओं के लिए <strong>31 जुलाई</strong> होती है। नियत तिथि के बाद रिटर्न भरने पर आयकर अधिनियम, 1961 के तहत लेट फाइलिंग फीस और ब्याज के सख्त प्रावधान लागू होते हैं।</p>
        
        <h3 style="color: var(--color-primary); margin-top: 24px;">1. धारा 234F लेट फीस की संरचना (Fee Matrix under Section 234F)</h3>
        <div style="overflow-x: auto; margin: 16px 0;">
          <table style="width: 100%; border-collapse: collapse; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; font-size: 0.95rem;">
            <thead>
              <tr style="background: var(--color-surface); border-bottom: 2px solid var(--color-border); text-align: left;">
                <th style="padding: 12px 16px; color: var(--color-primary);">कुल आय (Total Income)</th>
                <th style="padding: 12px 16px; color: var(--color-primary);">31 जुलाई तक</th>
                <th style="padding: 12px 16px; color: var(--color-primary);">1 अगस्त से 31 दिसंबर (Belated)</th>
                <th style="padding: 12px 16px; color: var(--color-primary);">31 दिसंबर के बाद (ITR-U)</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 16px;">मूल छूट सीमा तक (≤ ₹3 Lakh)</td><td style="padding: 10px 16px; color: #059669; font-weight: 700;">₹0</td><td style="padding: 10px 16px; color: #059669; font-weight: 700;">₹0</td><td style="padding: 10px 16px;">ITR-U Not Allowed for Nil</td></tr>
              <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 16px;">₹3,00,001 से ₹5,00,000</td><td style="padding: 10px 16px; color: #059669; font-weight: 700;">₹0</td><td style="padding: 10px 16px; font-weight: 700; color: #d97706;">₹1,000</td><td style="padding: 10px 16px;">25% से 50% अतिरिक्त टैक्स</td></tr>
              <tr><td style="padding: 10px 16px;">₹5,00,000 से अधिक</td><td style="padding: 10px 16px; color: #059669; font-weight: 700;">₹0</td><td style="padding: 10px 16px; font-weight: 700; color: #dc2626;">₹5,000</td><td style="padding: 10px 16px;">25% से 50% अतिरिक्त टैक्स</td></tr>
            </tbody>
          </table>
        </div>
        """
    },
    "hidden-tax-calculator.html": {
        "title": "Hidden Tax & Indirect Tax Calculator 2026: GST, Fuel VAT & True Tax Burden",
        "title_hi": "हिडन टैक्स एवं अप्रत्यक्ष कर कैलकुलेटर 2026: पेट्रोल-डीजल वैट व जीएसटी गणना",
        "desc": "Calculate your true tax burden in India including GST, Fuel VAT, Excise Duty, Stamp Duty and indirect taxes across daily expenses and monthly household budget.",
        "desc_hi": "अपने मासिक खर्चों पर लगने वाले असली अप्रत्यक्ष कर (GST, पेट्रोल-डीजल सेस व वैट) की सटीक गणना करें। मध्यम वर्ग पर कुल टैक्स बोझ का विश्लेषण।",
        "canonical": "https://sarkarisewaindia.com/tools/hidden-tax-calculator.html",
        "problems": [
            ("1. पेट्रोल और डीजल पर छिपा हुआ टैक्स: एक्साइज ड्यूटी व राज्य वैट का भारी बोझ", "₹100 प्रति लीटर पेट्रोल में लगभग **₹35 से ₹45 तक केवल केंद्र व राज्य सरकार का टैक्स** होता है। बेस प्राइस मात्र ₹55-57 होती है, जिस पर केंद्रीय उत्पाद शुल्क, डीलर कमीशन और राज्य वैट जुड़ता है।"),
            ("2. रेस्टोरेंट बिल में 5% जीएसटी और इनपुट टैक्स क्रेडिट (ITC) की सच्चाई", "गैर-एसी और एसी रेस्टोरेंट पर 5% जीएसटी लगता है और रेस्टोरेंट को आईटीसी का लाभ नहीं मिलता। यदि रेस्टोरेंट 18% जीएसटी लगा रहा है, तो बिल में होटल रूम टैरिफ (₹7,500+) की जांच करें।"),
            ("3. होटल कमरों पर जीएसटी स्लैब (₹1,000 से ₹7,500 तक 12% व ऊपर 18%)", "₹7,500 प्रति रात तक के होटल रूम पर 12% जीएसटी और ₹7,500 से अधिक के लक्जरी कमरों पर 18% जीएसटी लागू होता है। ऑनलाइन एग्रीगेटर बिलिंग में सही स्लैब देखना जरूरी है।"),
            ("4. नया मकान खरीदने पर जीएसटी बनाम स्टांप ड्यूटी का दोहरा टैक्स", "अंडर-कंस्ट्रक्शन फ्लैट पर 5% (अफोर्डेबल हाउसिंग पर 1%) जीएसटी लगता है, जबकि रेडी-टू-मूव (OC प्राप्त) फ्लैट पर 0% जीएसटी होता है। इसके अलावा 5% से 7% राज्य स्टांप ड्यूटी अलग से लगती है।"),
            ("5. पैक्ड दैनिक खाद्य सामग्री पर 5% जीएसटी का नियम", "प्री-पैकेज्ड और लेबल्ड आटा, दाल, चावल और दही पर 5% जीएसटी लगता है, जबकि खुले में बिना ब्रांडिंग के बिकने वाले खाद्यान्न पर 0% (शून्य) जीएसटी होता है।"),
            ("6. इलेक्ट्रॉनिक्स व ऑनलाइन गेमिंग पर 28% का उच्चतम जीएसटी स्लैब", "स्मार्टफोन (18%), टीवी व एसी (28%), ऑटोमोबाइल (28% + 1% से 22% कंपनसेशन सेस) और ऑनलाइन गेमिंग (28% फेस वैल्यू) पर भारी टैक्स बोझ पड़ता है।")
        ],
        "statutory_title_en": "Direct vs Indirect Tax Anatomy & GST Slab Structure in India",
        "statutory_title_hi": "प्रत्यक्ष बनाम अप्रत्यक्ष कर संरचना, जीएसटी स्लैब व नागरिक पर वास्तविक टैक्स भार",
        "statutory_content": """
        <p>भारत में प्रत्येक नागरिक प्रत्यक्ष रूप से आयकर (Income Tax) देने के साथ-साथ अपनी प्रत्येक दैनिक खरीद पर अप्रत्यक्ष कर (GST, Excise Duty, VAT, Stamp Duty, Road Tax) के रूप में भारी राजस्व सरकार को देता है।</p>
        
        <h3 style="color: var(--color-primary); margin-top: 24px;">1. जीएसटी के 4 मुख्य टैक्स स्लैब (GST 4-Tier Structure)</h3>
        <ul style="line-height: 1.8; font-size: 0.98rem; padding-left: 20px;">
          <li><strong>0% (कर मुक्त):</strong> खुला अनाज, ताजी सब्जियां, फल, बिना ब्रांड का दूध, नमक व स्वास्थ्य/शिक्षा सेवाएं।</li>
          <li><strong>5% (आवश्यक वस्तुएं):</strong> पैकेज्ड खाद्य सामग्री, घरेलू एलपीजी, जीवन रक्षक दवाएं, चाय, कॉफी, कोयला व सामान्य परिधान (<₹1,000)।</li>
          <li><strong>12% (मानक दर 1):</strong> घी, मक्खन, प्रोसेस्ड फूड, कंप्यूटर हार्डवेयर व ₹1,000 से ₹7,500 तक होटल रूम।</li>
          <li><strong>18% (मानक दर 2):</strong> टेलीकॉम/मोबाइल बिल, बैंकिंग सेवाएं, रेस्टोरेंट, आईटी सेवाएं, साबुन, शैम्पू व टूथपेस्ट।</li>
          <li><strong>28% (विलासिता व अवगुण वस्तुएं):</strong> ऑटोमोबाइल, एसी, रेफ्रिजरेटर, सिगरेट/तंबाकू, कोल्ड ड्रिंक्स व ऑनलाइन गेमिंग।</li>
        </ul>
        """
    },
    "age-calculator.html": {
        "title": "Govt Exam Age & Retirement Calculator 2026: Crucial Cut-off Date & Eligibility",
        "title_hi": "आयु कैलकुलेटर 2026: सरकारी नौकरी क्रूशियल कट-ऑफ डेट, आयु छूट व रिटायरमेंट",
        "desc": "Calculate your exact age in years, months and days for SSC, UPSC, Banking, Defence and State PSC exams based on crucial cut-off dates. Check age relaxations.",
        "desc_hi": "सरकारी भर्ती परीक्षाओं (SSC/UPSC/IBPS/Railway) के लिए कट-ऑफ तारीख के अनुसार अपनी सटीक उम्र (वर्ष, माह, दिन) निकालें। SC/ST/OBC/Ex-S आयु छूट गाइड।",
        "canonical": "https://sarkarisewaindia.com/tools/age-calculator.html",
        "problems": [
            ("1. SSC / UPSC क्रूशियल कट-ऑफ डेट (01-01 vs 01-08) पात्रता गणना", "कार्मिक एवं प्रशिक्षण विभाग (DoPT) के नियमों के अनुसार, यदि परीक्षा वर्ष के पहले छह महीनों में आयोजित होती है तो कट-ऑफ तारीख 1 जनवरी होती है; दूसरे छह महीनों में होने पर 1 अगस्त मानी जाती है।"),
            ("2. आरक्षित श्रेणियों (SC/ST 5 वर्ष, OBC 3 वर्ष, PwD 10-15 वर्ष) की छूट का नियम", "ओबीसी नॉन-क्रीमी लेयर को 3 वर्ष, एससी/एसटी को 5 वर्ष तथा दिव्यांगजनों को 10 से 15 वर्ष की ऊपरी आयु सीमा में छूट मिलती है। छूट का दावा करने हेतु वैध जाति/दिव्यांगता प्रमाण पत्र होना अनिवार्य है।"),
            ("3. भूतपूर्व सैनिकों (Ex-Servicemen - ESM) के लिए सैन्य सेवा कटौती नियम", "भूतपूर्व सैनिकों की वास्तविक आयु में से उनकी कुल सैन्य सेवा अवधि घटाने के बाद बची हुई आयु में 3 वर्ष की अतिरिक्त छूट दी जाती है। यदि परिणामी आयु अधिकतम सीमा से कम है तो वे पात्र माने जाते हैं।"),
            ("4. केंद्रीय सरकारी कर्मचारियों को ग्रुप C पदों हेतु 40-45 वर्ष तक की छूट", "कम से कम 3 वर्ष की निरंतर सेवा पूरी करने वाले केंद्रीय कर्मचारियों को ग्रुप C पदों के लिए 40 वर्ष (सामान्य) और 45 वर्ष (SC/ST) तक आवेदन की छूट मिलती है।"),
            ("5. सरकारी कर्मचारियों की सेवानिवृत्ति (Retirement) तिथि की सही गणना", "नियम के अनुसार, यदि किसी का जन्म महीने की पहली तारीख (1st of month) को हुआ है, तो वह पिछले महीने के अंतिम दिन रिटायर होता है। अन्य तारीखों पर जन्म लेने वाले उसी महीने के अंतिम दिन रिटायर होते हैं।"),
            ("6. 10वीं मार्कशीट और आधार कार्ड में जन्मतिथि मिसमैच का समाधान", "सरकारी भर्ती में केवल **10वीं की मूल मार्कशीट (Matriculation Certificate)** में दर्ज जन्मतिथि को ही विधिक प्रमाण माना जाता है। आधार में अंतर होने पर उसे तुरंत 10वीं के अनुसार अपडेट कराएं।")
        ],
        "statutory_title_en": "DoPT Statutory Guidelines for Crucial Age Determination in Govt Recruitment",
        "statutory_title_hi": "DoPT सरकारी भर्ती आयु निर्धारण नियम, लीप वर्ष गणना व सुपरएनुएशन प्रावधान",
        "statutory_content": """
        <p>भारत सरकार के कार्मिक, लोक शिकायत तथा पेंशन मंत्रालय (DoPT) द्वारा विभिन्न केंद्रीय सेवाओं (UPSC Civil Services, SSC CGL/CHSL, Railway RRB, Defence CDS/NDA) में आयु निर्धारण के लिए वैधानिक मानक तय किए गए हैं।</p>
        
        <h3 style="color: var(--color-primary); margin-top: 24px;">1. आयु गणना की वैज्ञानिक विधि (Exact Leap Year & Days Counting)</h3>
        <p>हमारा कैलकुलेटर लीप वर्ष के 366 दिनों और फरवरी के 29 दिनों को सटीक रूप से समाहित करते हुए दिन-प्रतिदिन (Day-to-day) गणना करता है, जिससे 1 दिन के अंतर से भी फॉर्म रिजेक्ट होने का कोई जोखिम नहीं रहता।</p>
        """
    },
    "savings-comparator.html": {
        "title": "Savings Scheme Comparator 2026: PPF vs NSC vs SCSS vs Sukanya vs Bank FD",
        "title_hi": "बचत योजना तुलना कैलकुलेटर 2026: PPF, NSC, SCSS, सुकन्या समृद्धि बनाम बैंक FD",
        "desc": "Compare small savings schemes in India: Public Provident Fund (PPF 7.1%), Sukanya Samriddhi (SSY 8.2%), Senior Citizen Scheme (SCSS 8.2%), NSC (7.7%) & Bank FDs.",
        "desc_hi": "डाकघर बचत योजनाओं (PPF 7.1%, SSY 8.2%, SCSS 8.2%, NSC 7.7%, MIS 7.4%) और बैंक एफडी के ब्याज, मैच्योरिटी और टैक्स छूट (EEE vs EET) की लाइव तुलना।",
        "canonical": "https://sarkarisewaindia.com/tools/savings-comparator.html",
        "problems": [
            ("1. पीपीएफ (PPF 7.1%) बनाम बैंक एफडी (7.5%): EEE टैक्स छूट का जादुई लाभ", "बैंक एफडी का ब्याज आपकी टैक्स स्लैब के अनुसार कर-योग्य होता है (30% स्लैब पर वास्तविक रिटर्न मात्र 5.25% बचता है), जबकि PPF का मूलधन, ब्याज और मैच्योरिटी तीनों **EEE (100% Tax Free)** होते हैं।"),
            ("2. सीनियर सिटीजन सेविंग्स स्कीम (SCSS 8.2%): ₹30 लाख की अधिकतम सीमा", "60 वर्ष से अधिक आयु के वरिष्ठ नागरिकों के लिए 8.2% की दर से त्रैमासिक ब्याज सीधे बैंक खाते में आता है। धारा 80TTB के तहत ₹50,000 तक का वार्षिक ब्याज पूरी तरह टैक्स-फ्री है।"),
            ("3. सुकन्या समृद्धि योजना (SSY 8.2%): 10 वर्ष से कम उम्र की बेटियों के लिए", "प्रति वर्ष अधिकतम ₹1.5 लाख जमा करने पर धारा 80C में छूट मिलती है और 21 वर्ष बाद मिलने वाली संपूर्ण मैच्योरिटी राशि पूर्णतः कर-मुक्त (Tax-Free) होती है।"),
            ("4. राष्ट्रीय बचत पत्र (NSC 7.7%): 5 साल का लॉक-इन और 80C री-इन्वेस्टमेंट", "NSC में अर्जित वार्षिक ब्याज स्वतः री-इन्वेस्ट मानकर पहले 4 वर्षों तक धारा 80C के तहत कटौती का पात्र होता है।"),
            ("5. पोस्ट ऑफिस मंथली इनकम स्कीम (POMIS 7.4%): सिंगल ₹9 लाख / जॉइंट ₹15 लाख", "मासिक आय चाहने वाले निवेशकों के लिए सुरक्षित सरकारी गारंटी के साथ मासिक ब्याज पे-आउट मिलता है।"),
            ("6. बैंक एफडी पर धारा 194A टीडीएस (TDS) से बचाव हेतु Form 15G / 15H", "सालाना एफडी ब्याज ₹40,000 (वरिष्ठ नागरिकों हेतु ₹50,000) से अधिक होने पर बैंक 10% टीडीएस काटता है। कुल कर-योग्य आय शून्य होने पर वित्तीय वर्ष के शुरू में फॉर्म 15G/15H जमा करें।")
        ],
        "statutory_title_en": "Ministry of Finance Small Savings Interest Rates & Tax Classification Matrix",
        "statutory_title_hi": "वित्त मंत्रालय डाकघर लघु बचत योजनाएं, ब्याज दरें व कर वर्गीकरण तालिका (2026)",
        "statutory_content": """
        <p>भारत सरकार के वित्त मंत्रालय के आर्थिक मामलों के विभाग (DEA) द्वारा प्रत्येक तिमाही में लघु बचत योजनाओं (Small Savings Schemes) की ब्याज दरों की समीक्षा की जाती है।</p>
        """
    },
    "photo-resizer.html": {
        "title": "Govt Exam Photo Resizer 2026: Resize Photo to 20-50 KB for SSC, UPSC, IBPS",
        "title_hi": "सरकारी परीक्षा फोटो रिसाइज़र 2026: 20-50 KB फोटो 3.5x4.5 cm में बनाएं",
        "desc": "Resize and compress passport photo online to exact 20-50 KB, 3.5x4.5 cm (200x230 px) with 200 DPI for SSC, UPSC, IBPS, Railway, Police and State PSC exams.",
        "desc_hi": "सरकारी भर्ती परीक्षाओं (SSC/UPSC/IBPS/NTA) हेतु पासपोर्ट फोटो को 20 से 50 KB, 3.5x4.5 सेमी व 200 DPI में 1-क्लिक में रिसाइज व कंप्रेस करें। 100% सुरक्षित।",
        "canonical": "https://sarkarisewaindia.com/tools/photo-resizer.html",
        "problems": [
            ("1. SSC / UPSC लाइव वेबकैम फोटो ब्लर या डार्क होने से फॉर्म रिजेक्ट होना", "लाइव वेबकैम फोटो खींचते समय चेहरे पर पर्याप्त रोशनी रखें, कैमरा आंखों के समानांतर रखें और पीछे सादी सफेद दीवार या पर्दा रखें।"),
            ("2. बैकग्राउंड नियम: केवल सादा सफेद या हल्का बैकग्राउंड मान्य", "नीले, लाल, काले या टेक्सचर्ड बैकग्राउंड वाले फोटो सरकारी भर्ती बोर्डों द्वारा तुरंत खारिज कर दिए जाते हैं।"),
            ("3. दोनों कान स्पष्ट दिखने चाहिए — चश्मा, कैप, मास्क पूरी तरह प्रतिबंधित", "नजर का चश्मा भी फोटो में उतारना अनिवार्य है। चश्मे के शीशे पर फ्लैश की चमक (Glare) आने से फॉर्म रिजेक्ट हो जाता है।"),
            ("4. फोटो पर नाम और तारीख (Date of Photo - DOP) प्रिंट करने के नियम", "कुछ परीक्षाओं (जैसे व्यापम, पुलिस भर्ती) में फोटो पर 3 महीने के भीतर की तारीख और उम्मीदवार का नाम मुद्रित होना अनिवार्य होता है।"),
            ("5. फाइल साइज एरर: 'File Size must be between 20 KB and 50 KB'", "हमारा ब्राउज़र-बेस्ड टूल आपकी फोटो के पिक्सल रेजोल्यूशन को 200 DPI पर लॉक करते हुए साइज को 35-40 KB की सुरक्षित सीमा में सेट करता है।"),
            ("6. डेटा प्राइवेसी: फोटो किसी भी सर्वर पर अपलोड नहीं होती", "यह टूल 100% क्लाइंट-साइड HTML5 Canvas तकनीक पर कार्य करता है। आपकी निजी फोटो कभी किसी थर्ड-पार्टी सर्वर पर नहीं जाती।")
        ],
        "statutory_title_en": "Official Digital Photograph Specifications for Central & State Recruitment",
        "statutory_title_hi": "केंद्रीय व राज्य भर्ती बोर्डों के आधिकारिक डिजिटल फोटो मानक व नियम",
        "statutory_content": """
        <p>कर्मचारी चयन आयोग (SSC), संघ लोक सेवा आयोग (UPSC) और नेशनल टेस्टिंग एजेंसी (NTA) द्वारा ऑनलाइन आवेदन में अपलोड की जाने वाली फोटो के लिए सख्त मानक निर्धारित हैं।</p>
        """
    },
    "signature-resizer.html": {
        "title": "Govt Exam Signature Resizer 2026: Resize Signature to 10-20 KB (140x60 px)",
        "title_hi": "सरकारी परीक्षा हस्ताक्षर रिसाइज़र 2026: 10-20 KB सिग्नेचर 140x60 px में बनाएं",
        "desc": "Resize signature online to 10-20 KB, 140x60 pixels, 200 DPI for SSC, IBPS, UPSC, Police, State PSC & Scholarship application forms.",
        "desc_hi": "एसएससी, बैंक, यूपीएससी व सरकारी फॉर्म हेतु हस्ताक्षर को 10-20 KB और 140x60 पिक्सल में बदलें। काली स्याही कंट्रास्ट बूस्ट व व्हाइट बैकग्राउंड क्लीनर।",
        "canonical": "https://sarkarisewaindia.com/tools/signature-resizer.html",
        "problems": [
            ("1. IBPS / SBI बैंक परीक्षा में केवल काली स्याही (Black Ink Pen) अनिवार्य", "बैंक व बीमा भर्ती बोर्ड केवल काली स्याही से सफेद कागज पर किए गए हस्ताक्षर स्वीकार करते हैं। नीली स्याही से किया हस्ताक्षर रिजेक्ट हो जाता है।"),
            ("2. कैपिटल लेटर्स (ALL CAPS) में हस्ताक्षर पूर्णतः अमान्य", "हस्ताक्षर हमेशा रनिंग हैंडराइटिंग (Sentence case) में होना चाहिए। ब्लॉक लेटर्स (बड़े अक्षरों) में लिखे नाम को सिग्नेचर नहीं माना जाता।"),
            ("3. ग्रे/धुंधला बैकग्राउंड हटाकर प्योर व्हाइट बैकग्राउंड बनाना", "मोबाइल से खींची गई फोटो में छाया (Shadows) आ जाती है। हमारा टूल कंट्रास्ट बढ़ाकर बैकग्राउंड को एकदम सफेद और अक्षरों को डार्क ब्लैक कर देता है।"),
            ("4. फाइल साइज 10 KB से 20 KB की सटीक सीमा में सेट करना", "अधिकांश भर्ती पोर्टलों पर 10 KB से कम या 20 KB से अधिक साइज होने पर 'Upload Error' आता है। हमारा टूल इसे 14-16 KB पर ऑप्टिमाइज़ करता है।"),
            ("5. बाएं व दाएं हाथ का अंगूठा निशान (Thumb Impression) स्कैनिंग मानक", "पुरुषों के लिए बायां अंगूठा (LTI) और महिलाओं के लिए दायां अंगूठा (RTI) स्पष्ट रेखाओं (Ridge details) के साथ 20-50 KB में अपलोड किया जाता है।"),
            ("6. मोबाइल कैमरे से साफ डिजिटल सिग्नेचर तैयार करने की तकनीक", "सादे सफेद A4 पेपर पर हस्ताक्षर करें, ऊपर से 90 डिग्री के कोण पर पर्याप्त रोशनी में फोटो खींचें और हमारे टूल से 1-क्लिक में क्रॉप व रिसाइज करें।")
        ],
        "statutory_title_en": "Standard Digital Signature Guidelines for Competitive Examinations",
        "statutory_title_hi": "प्रतियोगी परीक्षाओं हेतु डिजिटल सिग्नेचर के आधिकारिक दिशा-निर्देश",
        "statutory_content": """
        <p>हस्ताक्षर उम्मीदवार की विधिक पहचान का अनिवार्य हिस्सा है। परीक्षा हॉल में अटेंडेंस शीट पर किए गए हस्ताक्षर को ऑनलाइन फॉर्म में अपलोड किए गए हस्ताक्षर से हूबहू मिलाया जाता है।</p>
        """
    },
    "document-compressor.html": {
        "title": "Govt PDF & Document Compressor 2026: Compress to 100 KB, 200 KB & 500 KB",
        "title_hi": "सरकारी दस्तावेज़ कंप्रेसर 2026: 100 KB, 200 KB व 500 KB में PDF व JPG बनाएं",
        "desc": "Compress PDF, marksheets, caste certificates and Aadhaar scans to 100 KB, 200 KB, 500 KB without losing text sharpness for government application portals.",
        "desc_hi": "ई-डिस्ट्रिक्ट व सरकारी भर्ती फॉर्म हेतु मार्कशीट, जाति, आय व आधार कार्ड पीडीएफ को बिना धुंधला किए 100 KB, 200 KB व 500 KB में तुरंत कंप्रेस करें।",
        "canonical": "https://sarkarisewaindia.com/tools/document-compressor.html",
        "problems": [
            ("1. राज्य ई-डिस्ट्रिक्ट पोर्टलों पर 100 KB फाइल साइज लिमिट की समस्या", "अधिकांश राज्य पोर्टल (जैसे UP e-District, MP e-District, RTPS Bihar) 100 KB से बड़ी फाइल स्वीकार नहीं करते। हमारा टूल टेक्स्ट की स्पष्टता बनाए रखते हुए फाइल को 80-95 KB में कंप्रेस करता है।"),
            ("2. कंप्रेस करने के बाद मार्कशीट के रोल नंबर और नाम धुंधले होने से बचाना", "हमारा एल्गोरिद्म टेक्स्ट आधारित पीडीएफ को 200 DPI रेजोल्यूशन पर सुरक्षित रखता है ताकि अधिकारी सत्यापन के समय दस्तावेज़ आसानी से पढ़ सकें।"),
            ("3. कई पेजों की मार्कशीट या आईडी प्रूफ को एक सिंगल PDF (500 KB) में जोड़ना", "10वीं, 12वीं और ग्रेजुएशन के सभी सेमेस्टर्स की मार्कशीट को एक साथ क्रमबद्ध करके 500 KB से कम की पीडीएफ फाइल बनाएं।"),
            ("4. पासवर्ड प्रोटेक्टेड आधार कार्ड (e-Aadhaar PDF) अपलोड एरर का समाधान", "यूआईडीएआई से डाउनलोड की गई ई-आधार पीडीएफ पासवर्ड प्रोटेक्टेड होती है। सरकारी पोर्टल पर अपलोड करने से पहले पासवर्ड हटाना (Remove PDF Password) अनिवार्य है।"),
            ("5. PDF बनाम JPG / PNG फॉर्मेट कम्पैटिबिलिटी", "अधिकांश पोर्टलों पर मल्टी-पेज दस्तावेज़ों हेतु PDF और सिंगल आईडी हेतु JPG/PNG फॉर्मेट मांगा जाता है।"),
            ("6. डेटा सुरक्षा: गोपनीय दस्तावेज़ कभी किसी सर्वर पर अपलोड नहीं होते", "संपूर्ण कंप्रेशन आपके अपने कंप्यूटर/मोबाइल के ब्राउज़र में लोकली प्रोसेस होता है, जिससे आधार, पैन और मार्कशीट का डेटा 100% सुरक्षित रहता है।")
        ],
        "statutory_title_en": "NIC & DoPT Document Scanning and Compression Guidelines",
        "statutory_title_hi": "एनआईसी एवं कार्मिक विभाग के दस्तावेज़ स्कैनिंग व अपलोड नियम",
        "statutory_content": """
        <p>राष्ट्रीय सूचना विज्ञान केंद्र (NIC) द्वारा प्रबंधित सरकारी पोर्टलों पर सर्वर लोड और स्टोरेज प्रबंधन हेतु दस्तावेज़ों के लिए अधिकतम फाइल साइज सीमाएं तय की गई हैं।</p>
        """
    },
    "medicine-price-checker.html": {
        "title": "Jan Aushadhi Generic Medicine Price Checker 2026: Compare NPPA DPCO Ceiling Rates",
        "title_hi": "जन औषधि जेनेरिक दवा मूल्य चेकर 2026: ब्रांडेड बनाम जेनेरिक दवा मूल्य तुलना",
        "desc": "Check government ceiling prices (NPPA DPCO) and find low-cost Jan Aushadhi generic equivalents for expensive branded medicines in India. Save up to 80% on bills.",
        "desc_hi": "एनपीपीए (NPPA) द्वारा निर्धारित आवश्यक दवाओं के अधिकतम मूल्य (Ceiling Price) जांचें और ब्रांडेड दवाओं का 80% सस्ता प्रधानमंत्री जन औषधि विकल्प खोजें।",
        "canonical": "https://sarkarisewaindia.com/tools/medicine-price-checker.html",
        "problems": [
            ("1. प्रधानमंत्री जन औषधि केंद्र (PMBJP) से 80% तक सस्ती दवाएं कैसे पाएं?", "जन औषधि केंद्रों पर मिलने वाली जेनेरिक दवाएं ब्रांडेड दवाओं की तुलना में 50% से 90% तक सस्ती होती हैं। उनके सॉल्ट नेम (Molecule Name) से जेनेरिक विकल्प खोजें।"),
            ("2. दवा दुकानदारों द्वारा एमआरपी से अधिक वसूलने पर NPPA में शिकायत", "यदि कोई केमिस्ट एनपीपीए द्वारा तय सीलिंग मूल्य से अधिक वसूलता है, तो 'Pharma Sahi Daam' ऐप या टोल-फ्री नंबर 1800-111-255 पर शिकायत दर्ज करें।"),
            ("3. जेनेरिक बनाम ब्रांडेड दवा की गुणवत्ता (CDSCO बायोइक्विवेलेंस मानक)", "भारतीय औषधि महानियंत्रक (CDSCO) के अनुसार जेनेरिक दवाओं में वही एक्टिव फार्मास्युटिकल इंग्रीडिएंट (API) होता है और वे ब्रांडेड दवाओं की तरह ही 100% प्रभावी होती हैं।"),
            ("4. कैंसर, हृदय रोग और डायबिटीज की जीवन रक्षक दवाओं पर मूल्य नियंत्रण", "राष्ट्रीय आवश्यक दवा सूची (NLEM) के तहत 384+ आवश्यक दवाओं और मेडिकल डिवाइसेज (जैसे कार्डियक स्टेंट, नी इंप्लांट) के मूल्य सरकार द्वारा तय हैं।"),
            ("5. डॉक्टर द्वारा ब्रांडेड नाम लिखने पर जेनेरिक विकल्प मांगने का अधिकार", "नागरिक अपने नजदीकी जन औषधि केंद्र या अधिकृत केमिस्ट से डॉक्टर के पर्चे में लिखे सॉल्ट का जेनेरिक विकल्प मांग सकते हैं।"),
            ("6. आयुष्मान भारत और राज्य स्वास्थ्य योजनाओं में मुफ्त दवाओं का लाभ", "आयुष्मान कार्डधारक पैनलबद्ध अस्पतालों में भर्ती के दौरान सभी आवश्यक दवाएं और सर्जिकल सामग्री पूरी तरह कैशलेस व मुफ्त पाने के हकदार हैं।")
        ],
        "statutory_title_en": "NPPA Legal Framework & Drug Price Control Order (DPCO) in India",
        "statutory_title_hi": "दवा मूल्य नियंत्रण आदेश (DPCO) एवं राष्ट्रीय औषधि मूल्य निर्धारण प्राधिकरण नियम",
        "statutory_content": """
        <p>भारत सरकार के रसायन एवं उर्वरक मंत्रालय के अधीन <strong>National Pharmaceutical Pricing Authority (NPPA)</strong> आवश्यक दवाओं के मूल्यों को नियंत्रित करता है ताकि आम नागरिकों को सस्ती दरों पर गुणवत्तापूर्ण दवाएं उपलब्ध हो सकें।</p>
        """
    },
    "typing-speed-test.html": {
        "title": "Govt Exam Typing Speed Test 2026: SSC, High Court, Police Hindi & English Test",
        "title_hi": "सरकारी परीक्षा टाइपिंग स्पीड टेस्ट 2026: SSC, कोर्ट, पुलिस हिंदी व इंग्लिश टाइपिंग",
        "desc": "Free online typing test for SSC CGL, CHSL, High Court, Railway NTPC & Police exams. Practice Hindi (Mangal Inscript / KrutiDev) & English with live WPM & error calculation.",
        "desc_hi": "एसएससी CGL/CHSL, हाईकोर्ट व क्लर्क भर्ती हेतु मुफ्त ऑनलाइन टाइपिंग टेस्ट। हिंदी (मंगल इनस्क्रिप्ट/कृतिदेव) व अंग्रेजी 35 WPM / 27 WPM परीक्षा पैटर्न अभ्यास।",
        "canonical": "https://sarkarisewaindia.com/tools/typing-speed-test.html",
        "problems": [
            ("1. SSC CGL / CHSL में 35 WPM (इंग्लिश) व 27 WPM (हिंदी) कट-ऑफ मानक", "एसएससी में 15 मिनट में 2000 की-डिप्रेशन्स (लगभग 27 WPM) हिंदी हेतु और 15 मिनट में 2000 की-डिप्रेशन्स (35 WPM) अंग्रेजी हेतु 5% से 7% त्रुटि सीमा के साथ अनिवार्य होते हैं।"),
            ("2. हाईकोर्ट व राज्य परीक्षाओं में मंगल इनस्क्रिप्ट (Mangal) बनाम कृतिदेव (Kruti Dev 010)", "केंद्रीय भर्तियों (SSC/NTPC) में मंगल इनस्क्रिप्ट व रेमिंगटन गेल चलता है, जबकि यूपी/बिहार/एमपी हाईकोर्ट व कोर्ट क्लर्क परीक्षाओं में कृतिदेव 010 फॉन्ट मांगा जाता है।"),
            ("3. हाफ मिस्टेक (Half Mistake) बनाम फुल मिस्टेक (Full Mistake) गणना नियम", "स्पेलिंग गलत होना, शब्द छोड़ देना या अतिरिक्त शब्द जोड़ना फुल मिस्टेक है; जबकि कैपिटलाइजेशन या पंक्चुएशन की गलती हाफ मिस्टेक मानी जाती है।"),
            ("4. की-डिप्रेशन्स प्रति घंटा (KDPH) को WPM में बदलने का आधिकारिक फॉर्मूला", "5 की-स्ट्रोक को 1 शब्द माना जाता है। (कुल की-स्ट्रोक ÷ 5) ÷ कुल मिनट = ग्रॉस WPM।"),
            ("5. परीक्षा में बैकस्पेस (Backspace) डिसेबल होने पर अभ्यास रणनीति", "कई राज्य परीक्षाओं में बैकस्पेस की अनुमति नहीं होती। टाइपिंग करते समय स्क्रीन देखने के बजाय मैटर देखकर टाइप करने की आदत डालें।"),
            ("6. परीक्षा हॉल में घबराहट और कीबोर्ड की अलग की-ट्रेवल का मुकाबला", "शुरुआती 1 मिनट धीमी गति से सही-सही टाइप करें। जैसे ही लय (rhythm) बने, अपनी सामान्य गति पर आएं।")
        ],
        "statutory_title_en": "Official SSC DEST & State Public Service Commission Typing Standards",
        "statutory_title_hi": "कर्मचारी चयन आयोग (DEST) एवं राज्य लोक सेवा आयोग टाइपिंग परीक्षा नियम",
        "statutory_content": """
        <p>सरकारी सेवाओं में लिपिकीय एवं सहायक पदों (Data Entry Operator, LDC, Assistant, Steno) पर भर्ती के लिए टाइपिंग गति परीक्षा (Skill Test / DEST) अनिवार्य पात्रता है।</p>
        """
    }
}

# Generic Master Tool Builder that reads existing widget and wraps it inside the elite layout
def upgrade_tool_file(slug):
    fpath = os.path.join(TOOLS_DIR, slug)
    if not os.path.exists(fpath):
        print(f"File not found: {slug}")
        return
    
    with open(fpath, 'r', encoding='utf-8') as fp:
        content = fp.read()
    
    # Check if custom config exists
    if slug in ALL_TOOLS_DATA:
        config = ALL_TOOLS_DATA[slug]
    else:
        # Generate clean config for any remaining tool
        name_clean = slug.replace('.html', '').replace('-', ' ').title()
        config = {
            "title": f"{name_clean} 2026: Official Online Tool & Guidelines",
            "title_hi": f"{name_clean} 2026: आधिकारिक ऑनलाइन नागरिक टूल व सम्पूर्ण गाइड",
            "desc": f"Free online {name_clean} for Indian citizens. Instant calculation, step-by-step guidelines, official government rules and problem solvers.",
            "desc_hi": f"भारतीय नागरिकों के लिए मुफ्त {name_clean}। त्वरित ऑनलाइन उपयोग, सरकारी नियम, आवश्यक दस्तावेज़ व 6 प्रमुख समस्याओं का समाधान।",
            "canonical": f"https://sarkarisewaindia.com/tools/{slug}",
            "problems": [
                (f"1. {name_clean} में तकनीकी त्रुटि या इनपुट मिसमैच का समाधान", "ऑनलाइन टूल का उपयोग करते समय अपने आधिकारिक सरकारी दस्तावेज़ों (आधार, पैन या मार्कशीट) के अनुसार ही सटीक आंकड़े दर्ज करें।"),
                ("2. सरकारी सर्वर डाउन या पोर्टल स्लो होने पर क्या करें?", "पीक ऑवर्स (सुबह 10 से दोपहर 2 बजे) के बजाय सुबह जल्दी या रात 8 बजे के बाद आवेदन करें।"),
                ("3. रिजेक्शन से बचने के लिए दस्तावेज़ सत्यापन चेकलिस्ट", "आवेदन जमा करने से पहले नाम की स्पेलिंग, जन्मतिथि और पिता के नाम का मिलान अनिवार्य रूप से करें।"),
                ("4. शुल्क भुगतान कटने के बाद रसीद न मिलने पर समाधान", "दोबारा तुरंत भुगतान न करें। 24 घंटे प्रतीक्षा करें और बैंक स्टेटमेंट या 'Verify Payment' विकल्प से स्टेटस जांचें।"),
                ("5. मोबाइल फ्रेंडली एक्सेस और प्रिंट फ्रेंडली रिपोर्ट डाउनलोड", "हमारा टूल सभी मोबाइल, टैबलेट और डेस्कटॉप ब्राउज़रों पर पूरी तरह रिस्पॉन्सिव और प्रिंट-फ्रेंडली आउटपुट देता है।"),
                ("6. शिकायत निवारण एवं आधिकारिक सीएम हेल्पलाइन संपर्क", "किसी भी सरकारी सेवा में अनावश्यक देरी होने पर संबंधित विभाग के नोडल अधिकारी या राज्य सीएम हेल्पलाइन पर अपील दर्ज करें।")
            ],
            "statutory_title_en": f"Statutory Framework & Guidelines for {name_clean}",
            "statutory_title_hi": f"{name_clean} के कानूनी नियम, सरकारी दिशा-निर्देश एवं मानक प्रक्रिया",
            "statutory_content": f"<p>{name_clean} भारतीय नागरिकों को सरकारी सेवाओं और वित्तीय नियमों को आसानी से समझने और सटीक जानकारी प्राप्त करने में सक्षम बनाता है।</p>"
        }

    # Extract the core interactive tool widget from content
    # Look for the main tool container (between breadcrumb and .seo-upgrade or footer)
    widget_html = ""
    js_code = ""

    # Extract JS
    script_matches = re.findall(r'<script>(.*?)</script>', content, re.DOTALL)
    for sm in script_matches:
        if 'function' in sm or 'addEventListener' in sm or 'calculate' in sm or 'render' in sm:
            if 'window.SS_ROOT' not in sm:
                js_code += sm + "\n"
    
    # If no script in <script>, look for scripts before </body>
    if not js_code:
        m_scripts = re.findall(r'<script\b[^>]*>(.*?)</script>', content, re.DOTALL)
        for ms in m_scripts:
            if 'function' in ms and 'window.SS_ROOT' not in ms:
                js_code += ms + "\n"

    # Extract interactive container
    m_calc = re.search(r'(<div class="(?:calc-container|engine-card|tool-container-card|container)"[\s\S]*?)(?:<section class="seo-upgrade"|<section class="service-section"|<div id="site-footer"|<footer)', content)
    if m_calc:
        widget_html = m_calc.group(1).strip()
        # Clean up any unclosed tags
        if widget_html.count('<div') > widget_html.count('</div>'):
            widget_html += '</div>' * (widget_html.count('<div') - widget_html.count('</div>'))
    else:
        # Fallback to main content
        m_main = re.search(r'<main[^>]*>([\s\S]*?)</main>', content)
        if m_main:
            widget_html = m_main.group(1).strip()
            # remove seo-upgrade if inside
            widget_html = re.sub(r'<section class="seo-upgrade"[\s\S]*?</section>', '', widget_html)

    # Clean widget html from any embedded old headers/footers/seo sections
    widget_html = re.sub(r'<div id="site-header"[\s\S]*?</div>\s*</div>', '', widget_html)
    widget_html = re.sub(r'<nav class="breadcrumb"[\s\S]*?</nav>', '', widget_html)
    widget_html = re.sub(r'<section[^>]*class="[^"]*(?:seo-upgrade|tool-seo-section)[^"]*"[\s\S]*?</section>', '', widget_html)
    widget_html = re.sub(r'<section class="service-section"[\s\S]*?</section>', '', widget_html)
    widget_html = re.sub(r'<!-- TOOL SEO ENHANCEMENT -->[\s\S]*?<!-- /TOOL SEO ENHANCEMENT -->', '', widget_html)

    # Import generator from upgrade_all_calculators_master
    from upgrade_all_calculators_master import generate_full_master_tool
    
    new_html = generate_full_master_tool(slug, config, widget_html, js_code)
    
    with open(fpath, 'w', encoding='utf-8') as fp:
        fp.write(new_html)
    
    size_kb = len(new_html.encode('utf-8')) / 1024
    print(f"Master Upgraded: {slug:<35} | {size_kb:.1f} KB")

def sync_root_mpbcdc():
    mp_files = ['mpbcdc-direct-loan-yojana.html', 'mpbcdc-seed-capital-yojana.html', 'mpbcdc-subsidy-yojana.html', 'mpbcdc-yojana.html']
    for mf in mp_files:
        src = os.path.join(ROOT, 'service', mf)
        dst = os.path.join(ROOT, mf)
        if os.path.exists(src):
            with open(src, 'r', encoding='utf-8') as fp:
                c = fp.read()
            c = c.replace('href="../assets/', 'href="assets/')
            c = c.replace('src="../assets/', 'src="assets/')
            c = c.replace('href="../favicon', 'href="favicon')
            c = c.replace('href="../manifest', 'href="manifest')
            c = c.replace('href="../index.html"', 'href="index.html"')
            c = c.replace('href="../tools/', 'href="tools/')
            c = c.replace('href="../states/', 'href="states/')
            c = c.replace('href="../category/', 'href="category/')
            c = c.replace('href="../support/', 'href="support/')
            c = c.replace('href="../jobs/', 'href="jobs/')
            c = c.replace('href="../exams/', 'href="exams/')
            c = c.replace('href="../blog/', 'href="blog/')
            c = c.replace('window.SS_ROOT = "../";', 'window.SS_ROOT = "./";')
            
            with open(dst, 'w', encoding='utf-8') as fp:
                fp.write(c)
            print(f"Synchronized root {mf} ({len(c)/1024:.1f} KB)")

def run_all():
    tool_files = [
        'itr-penalty-calculator.html',
        'hidden-tax-calculator.html',
        'age-calculator.html',
        'savings-comparator.html',
        'photo-resizer.html',
        'signature-resizer.html',
        'document-compressor.html',
        'medicine-price-checker.html',
        'typing-speed-test.html',
        'csc-locator.html',
        'deadline-calendar.html',
        'deadline-detail.html',
        'document-checklist.html',
        'eligibility-checker.html',
        'govt-card-clarifier.html',
        'pan-aadhaar-conflict-resolver.html',
        'self-declaration-builder.html',
        'status-troubleshooter.html',
        'index.html'
    ]
    
    for tf in tool_files:
        upgrade_tool_file(tf)
        
    sync_root_mpbcdc()

if __name__ == '__main__':
    run_all()
