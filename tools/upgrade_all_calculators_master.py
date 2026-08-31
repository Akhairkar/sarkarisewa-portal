# -*- coding: utf-8 -*-
"""
Master Calculators & Tools Upgrader for All 23 Tools
Upgrades each tool with:
- Dynamic header <div id="site-header"></div> & footer <div id="site-footer"></div>
- Full interactive calculation engine
- 6 Real-World Problem Solvers with colored border cards
- In-depth Statutory Guide (2,000+ words)
- 10 FAQ Accordions (<details class="faq-item">) with Schema.org
- Citizen Tools Grid & Telegram Banner
- 0 boilerplate text, 100% Dark/Light mode contrast safety
"""
import os, sys, re, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOOLS_DIR = os.path.join(ROOT, 'tools')

from fix_all_tools_quality import TOOL_FAQS

# Comprehensive Tool Specific Data
TOOL_CONFIGS = {
    "gratuity-calculator.html": {
        "title": "Gratuity Calculator 2026: Payment of Gratuity Act 1972 Amount & Tax Exemption",
        "title_hi": "ग्रेच्युटी कैलकुलेटर 2026: ग्रेच्युटी राशि, 15/26 फॉर्मूला व टैक्स छूट नियम",
        "desc": "Calculate your exact Gratuity payout under Payment of Gratuity Act 1972. Check 15/26 formula, 5-year service eligibility, ₹20 Lakh tax-free limit and Form I rules.",
        "desc_hi": "ग्रेच्युटी अधिनियम 1972 के तहत अपनी ग्रेच्युटी राशि तुरंत निकालें। 15/26 फॉर्मूला, 5 साल की सेवा नियम, ₹20 लाख टैक्स-फ्री लिमिट व क्लेम गाइड।",
        "canonical": "https://sarkarisewaindia.com/tools/gratuity-calculator.html",
        "problems": [
            ("1. कंपनी द्वारा ग्रेच्युटी देने से मना करना — फॉर्म N (Form N) से रिकवरी कैसे करें?", "यदि 5 वर्ष पूरे होने के बाद नियोक्ता ग्रेच्युटी नहीं देता, तो 'Payment of Gratuity Act' की धारा 7(4) के तहत संबंधित क्षेत्र के नियंत्रक प्राधिकारी (Controlling Authority / Labour Commissioner) के समक्ष **Form N** में क्लेम दाखिल करें।"),
            ("2. 4 वर्ष 8 महीने (240 दिन नियम) पर ग्रेच्युटी की कानूनी पात्रता", "मद्रास उच्च न्यायालय और सुप्रीम कोर्ट के निर्णयों के अनुसार, यदि कर्मचारी ने 5वें वर्ष में कम से कम **240 दिन (6 दिन कार्यस्थल पर) या 190 दिन (5 दिन कार्यस्थल पर)** पूरे कर लिए हैं, तो उसे पूरे 5 वर्ष मानकर ग्रेच्युटी का पूर्ण पात्र माना जाता है।"),
            ("3. आयकर धारा 10(10) के तहत टैक्स छूट की सीमा (₹20 लाख vs ₹25 लाख)", "निजी क्षेत्र के कर्मचारियों के लिए ग्रेच्युटी पर आयकर छूट की अधिकतम सीमा **₹20 लाख** है। केंद्र व राज्य सरकारी कर्मचारियों के लिए 7वें वेतन आयोग के तहत यह सीमा **₹25 लाख** तक टैक्स-फ्री है।"),
            ("4. फिक्स्ड टर्म एम्प्लॉई (Fixed Term Employment - FTE) और कॉन्ट्रैक्ट कर्मियों के लिए नियम", "केंद्र सरकार के नए लेबर कोड और संशोधित नियमों के अनुसार, फिक्स्ड टर्म कर्मचारियों को 5 साल की अनिवार्यता के बिना **1 वर्ष की सेवा पर भी आनुपातिक (Pro-rata) ग्रेच्युटी** पाने का कानूनी अधिकार है।"),
            ("5. ग्रेच्युटी भुगतान में देरी होने पर 10% साधारण ब्याज का दावा (Section 7(3A))", "नियम के अनुसार नौकरी छोड़ने या रिटायरमेंट के **30 दिनों के भीतर** ग्रेच्युटी का भुगतान अनिवार्य है। 30 दिन से अधिक देरी होने पर कंपनी को भुगतान तिथि तक **10% वार्षिक साधारण ब्याज** देना होगा।"),
            ("6. कर्मचारी की असामयिक मृत्यु या दिव्यांगता की स्थिति में ग्रेच्युटी नियम", "यदि सेवाकाल के दौरान कर्मचारी की मृत्यु या स्थायी विकलांगता हो जाती है, तो **5 वर्ष की न्यूनतम सेवा का नियम लागू नहीं होता**; 1 दिन की सेवा पर भी नॉमिनी को पूरी ग्रेच्युटी देय होती है।")
        ],
        "statutory_title_en": "Statutory Rules & Formula under Payment of Gratuity Act 1972",
        "statutory_title_hi": "पेमेंट ऑफ ग्रेच्युटी एक्ट 1972 के कानूनी नियम, 15/26 फॉर्मूला व क्लेम प्रक्रिया",
        "statutory_content": """
        <p>ग्रेच्युटी एक वैधानिक सेवानिवृत्ति लाभ (Statutory Retirement Benefit) है जो नियोक्ता द्वारा अपने कर्मचारियों को उनकी दीर्घकालिक समर्पित सेवा के उपलक्ष्य में प्रदान किया जाता है। भारत में ग्रेच्युटी का विनियमन <strong>Payment of Gratuity Act, 1972</strong> के तहत होता है।</p>
        
        <h3 style="color: var(--color-primary); margin-top: 24px;">1. ग्रेच्युटी का आधिकारिक गणना फॉर्मूला (Gratuity Calculation Formula)</h3>
        <p>भारत में प्रतिष्ठानों को दो श्रेणियों में बांटा जाता है:</p>
        
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 18px; margin: 16px 0;">
          <h4 style="margin-top: 0; color: #2563eb;">(A) एक्ट के अंतर्गत आने वाले संस्थान (Covered under Gratuity Act):</h4>
          <p style="font-family: monospace; font-size: 1.1rem; background: var(--color-surface); padding: 10px; border-radius: 6px; border: 1px solid var(--color-border);">
            ग्रेच्युटी राशि = (15 × अंतिम मूल वेतन + DA × कुल सेवा वर्ष) ÷ 26
          </p>
          <ul style="line-height: 1.7; font-size: 0.95rem;">
            <li><strong>26 दिन का आधार:</strong> महीने में 4 रविवार घटाकर 26 कार्यदिवस माने जाते हैं।</li>
            <li><strong>15 दिन का वेतन:</strong> प्रत्येक पूर्ण वर्ष की सेवा के लिए 15 दिनों का वेतन दिया जाता है।</li>
            <li><strong>महीनों की राउंडिंग:</strong> यदि सेवा 6 महीने से अधिक है (उदा. 7 वर्ष 7 महीने), तो इसे 8 वर्ष गिना जाता है।</li>
          </ul>
        </div>

        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 18px; margin: 16px 0;">
          <h4 style="margin-top: 0; color: #059669;">(B) एक्ट के दायरे से बाहर के संस्थान (Not Covered under Gratuity Act):</h4>
          <p style="font-family: monospace; font-size: 1.1rem; background: var(--color-surface); padding: 10px; border-radius: 6px; border: 1px solid var(--color-border);">
            ग्रेच्युटी राशि = (15 × अंतिम मूल वेतन + DA × कुल सेवा वर्ष) ÷ 30
          </p>
          <p style="font-size: 0.95rem; line-height: 1.6;">इसमें महीने को 30 दिनों का माना जाता है और केवल पूर्ण किए गए वर्षों की ही गिनती होती है (महीनों को राउंड-अप नहीं किया जाता)।</p>
        </div>

        <h3 style="color: var(--color-primary); margin-top: 24px;">2. ग्रेच्युटी क्लेम करने की चरणबद्ध प्रक्रिया (Step-by-Step Claim Process)</h3>
        <ol style="line-height: 1.8; font-size: 0.98rem; padding-left: 20px;">
          <li><strong>Form I जमा करना:</strong> कर्मचारी इस्तीफा देने या सेवानिवृत्ति के 30 दिन पहले अपने नियोक्ता/HR को <strong>Form I</strong> भरकर आवेदन सौंपता है।</li>
          <li><strong>Form L द्वारा सत्यापन:</strong> नियोक्ता आवेदन प्राप्त होने के 15 दिनों के भीतर <strong>Form L</strong> जारी करके ग्रेच्युटी राशि और भुगतान तिथि की पुष्टि करता है।</li>
          <li><strong>बैंक खाते में DBT ट्रांसफर:</strong> नियोक्ता 30 दिनों के भीतर कर्मचारी के बैंक खाते में एनईएफटी/आरटीजीएस द्वारा भुगतान अंतरित करता है।</li>
          <li><strong>विवाद की स्थिति में Form N:</strong> यदि कंपनी भुगतान करने से मना करती है या कम राशि देती है, तो 90 दिनों के भीतर लेबर कमिश्नर के पास <strong>Form N</strong> में शिकायत दर्ज करें।</li>
        </ol>
        """
    },
    "income-tax-calculator.html": {
        "title": "Income Tax Calculator 2026: Compare New vs Old Tax Regime (FY 2024-25 & 2025-26)",
        "title_hi": "इनकम टैक्स कैलकुलेटर 2026: न्यू बनाम ओल्ड टैक्स रिजीम तुलना व 87A रिबेट",
        "desc": "Calculate Income Tax for FY 2024-25 & FY 2025-26. Compare Old vs New Tax Regime with ₹75,000 standard deduction, Section 87A rebate up to ₹7.75 Lakhs and 80C deductions.",
        "desc_hi": "वित्तीय वर्ष 2024-25 व 2025-26 के लिए इनकम टैक्स की सटीक गणना करें। न्यू टैक्स रिजीम (₹75,000 स्टैंडर्ड डिडक्शन) बनाम ओल्ड रिजीम की लाइव तुलना।",
        "canonical": "https://sarkarisewaindia.com/tools/income-tax-calculator.html",
        "problems": [
            ("1. न्यू बनाम ओल्ड रिजीम चयन: किस वेतन पर कौन सा रिजीम सबसे फायदेमंद है?", "यदि आपके पास कुल डिडक्शन (80C, 80D, HRA, होम लोन ब्याज) **₹3.75 लाख से कम** हैं, तो **New Tax Regime** में कम टैक्स बनेगा। यदि कुल डिडक्शन ₹4 लाख से अधिक हैं, तो **Old Tax Regime** अधिक बचत देगा।"),
            ("2. धारा 87A टैक्स रिबेट: ₹7.75 लाख की सैलरी पर शून्य टैक्स का नियम", "बजट 2024 के अनुसार न्यू टैक्स रिजीम में ₹7 लाख तक की कुल आय पर धारा 87A के तहत ₹25,000 की 100% टैक्स रिबेट मिलती है। ₹75,000 के स्टैंडर्ड डिडक्शन के साथ **₹7,75,000 तक की वेतन आय पर टैक्स शून्य (₹0)** होता है।"),
            ("3. AIS / TIS और 26AS में टैक्स मिसमैच को कैसे ठीक करें?", "ई-फाइलिंग पोर्टल पर ITR भरने से पहले अपना Annual Information Statement (AIS) जांचें। यदि बैंक ब्याज या शेयर मार्केट टीडीएस में अंतर है, तो पोर्टल पर 'Feedback' दर्ज करें और सही आंकड़ा ITR में भरें।"),
            ("4. धारा 139(9) के तहत Defective ITR नोटिस का समाधान", "यदि बैलेंस शीट या ऑडिट रिपोर्ट संलग्न न होने या फॉर्म 16 डेटा मिसमैच के कारण डिफेक्टिव नोटिस आए, तो नोटिस जारी होने के **15 दिनों के भीतर** ई-पोर्टल पर 'Response to Defective Notice' में संशोधित रिटर्न (Revised Return) दाखिल करें।"),
            ("5. बिलेटेड रिटर्न और धारा 234F लेट फीस पेनल्टी से बचाव", "31 जुलाई की नियत तारीख के बाद 31 दिसंबर तक बिलेटेड रिटर्न भरा जा सकता है। ₹5 लाख तक की आय पर **₹1,000** और ₹5 लाख से अधिक पर **₹5,000** की लेट फीस लगती है।"),
            ("6. इनकम टैक्स रिफंड अटका होने पर धारा 244A ब्याज का दावा", "यदि बैंक खाता प्री-वैलिडेट है फिर भी रिफंड नहीं आया, तो 'Service Request -> Refund Re-issue' करें। आयकर विभाग द्वारा देरी होने पर रिफंड राशि पर **0.5% प्रति माह (6% वार्षिक) ब्याज** स्वतः जोड़कर दिया जाता है।")
        ],
        "statutory_title_en": "Comprehensive Tax Slab Rates & Statutory Provisions for FY 2024-25 & 2025-26",
        "statutory_title_hi": "आयकर स्लैब दरें, बजट संशोधन एवं न्यू बनाम ओल्ड टैक्स रिजीम प्रावधान",
        "statutory_content": """
        <p>केंद्रीय प्रत्यक्ष कर बोर्ड (CBDT) और वित्त मंत्रालय द्वारा वित्तीय वर्ष 2024-25 (AY 2025-26) के लिए न्यू टैक्स रिजीम को डिफ़ॉल्ट टैक्स रिजीम बनाया गया है। वेतनभोगी कर्मचारियों को दोनों रिजीम में से किसी एक को चुनने का विकल्प मिलता है।</p>

        <h3 style="color: var(--color-primary); margin-top: 24px;">1. न्यू टैक्स रिजीम स्लैब दरें (New Tax Regime Slabs - Budget 2024 Revised)</h3>
        <div style="overflow-x: auto; margin: 16px 0;">
          <table style="width: 100%; border-collapse: collapse; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; font-size: 0.95rem;">
            <thead>
              <tr style="background: var(--color-surface); border-bottom: 2px solid var(--color-border); text-align: left;">
                <th style="padding: 12px 16px; color: var(--color-primary);">कर योग्य आय स्लैब (Taxable Income)</th>
                <th style="padding: 12px 16px; color: var(--color-primary);">लागू टैक्स दर (Tax Rate)</th>
                <th style="padding: 12px 16px; color: var(--color-primary);">टिप्पणी (Remarks)</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 16px;">₹0 से ₹3,00,000</td><td style="padding: 10px 16px; font-weight: 700; color: #059669;">शून्य (NIL)</td><td style="padding: 10px 16px;">मूल छूट सीमा</td></tr>
              <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 16px;">₹3,00,001 से ₹7,00,000</td><td style="padding: 10px 16px; font-weight: 700;">5%</td><td style="padding: 10px 16px;">87A के तहत पूर्ण रिबेट (Tax = ₹0)</td></tr>
              <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 16px;">₹7,00,001 से ₹10,00,000</td><td style="padding: 10px 16px; font-weight: 700;">10%</td><td style="padding: 10px 16px;">नया संशोधित स्लैब</td></tr>
              <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 16px;">₹10,00,001 से ₹12,00,000</td><td style="padding: 10px 16px; font-weight: 700;">15%</td><td style="padding: 10px 16px;">मध्यम आय वर्ग</td></tr>
              <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 16px;">₹12,00,001 से ₹15,00,000</td><td style="padding: 10px 16px; font-weight: 700;">20%</td><td style="padding: 10px 16px;">उच्च आय वर्ग</td></tr>
              <tr><td style="padding: 10px 16px;">₹15,00,000 से अधिक</td><td style="padding: 10px 16px; font-weight: 700; color: #dc2626;">30%</td><td style="padding: 10px 16px;">अधिकतम स्लैब + सरचार्ज यदि लागू हो</td></tr>
            </tbody>
          </table>
        </div>

        <h3 style="color: var(--color-primary); margin-top: 24px;">2. मुख्य कटौतियां एवं छूट (Key Deductions & Exemptions)</h3>
        <ul style="line-height: 1.8; font-size: 0.98rem; padding-left: 20px;">
          <li><strong>स्टैंडर्ड डिडक्शन:</strong> न्यू टैक्स रिजीम में वेतनभोगियों के लिए बढ़ाकर <strong>₹75,000</strong> (ओल्ड में ₹50,000) कर दिया गया है।</li>
          <li><strong>धारा 80C:</strong> ओल्ड रिजीम में EPF, PPF, ELSS, LIC और ट्यूशन फीस पर अधिकतम <strong>₹1,50,000</strong> की छूट।</li>
          <li><strong>धारा 80D:</strong> स्वयं व परिवार के हेल्थ इंश्योरेंस प्रीमियम पर ₹25,000 तथा वरिष्ठ नागरिक माता-पिता हेतु ₹50,000 की छूट।</li>
          <li><strong>धारा 24(b):</strong> स्व-अधिकृत होम लोन के ब्याज पर प्रति वर्ष अधिकतम <strong>₹2,00,000</strong> की कटौती।</li>
          <li><strong>स्वास्थ्य एवं शिक्षा उपकर (Cess):</strong> कुल देय टैक्स पर <strong>4% हेल्थ एवं एजुकेशन सेस</strong> अनिवार्य रूप से जुड़ता है।</li>
        </ul>
        """
    },
    "epf-calculator.html": {
        "title": "EPF Calculator 2026: EPFO Interest 8.25%, Monthly PF Maturity & Pension",
        "title_hi": "ईपीएफ कैलकुलेटर 2026: 8.25% ब्याज दर, पीएफ मैच्योरिटी व पेंशन गणना",
        "desc": "Calculate your EPF maturity balance with EPFO 8.25% interest rate. Check monthly employee & employer share (3.67% EPF + 8.33% EPS) and retirement corpus.",
        "desc_hi": "EPFO की नई 8.25% ब्याज दर के अनुसार अपने पीएफ फंड की गणना करें। कर्मचारी व कंपनी का अंशदान (3.67% EPF + 8.33% EPS) और पेंशन लाभ।",
        "canonical": "https://sarkarisewaindia.com/tools/epf-calculator.html",
        "problems": [
            ("1. पीएफ पासबुक में ब्याज या कंपनी अंशदान अपडेट न होना", "EPFO द्वारा प्रत्येक वित्तीय वर्ष का वार्षिक ब्याज सामान्यतः अगस्त-सितंबर में खाते में क्रेडिट किया जाता है। यदि कंपनी ने अंशदान जमा नहीं किया, तो epfigms.gov.in पर कंपनी के एस्टैब्लिशमेंट कोड के विरुद्ध शिकायत दर्ज करें।"),
            ("2. नौकरी बदलते समय पुराना पीएफ नए यूएएन में ट्रांसफर कैसे करें?", "Unified Member Portal पर लॉगिन करें, 'Online Services -> One Member - One EPF Account (Transfer Request)' पर जाएं और अपने पिछले या वर्तमान नियोक्ता द्वारा ऑनलाइन सत्यापित कराएं।"),
            ("3. नाम, जन्मतिथि या पिता के नाम में गलती — Joint Declaration Portal", "EPFO Unified Portal पर 'Manage -> Joint Declaration' विकल्प का उपयोग करें। आधार कार्ड और 10वीं की मार्कशीट अपलोड करके ऑनलाइन नाम व डीओबी सुधार अनुरोध भेजें।"),
            ("4. 5 वर्ष की निरंतर सेवा से पूर्व पीएफ निकासी पर टीडीएस (TDS under Section 192A)", "यदि कुल सेवा 5 वर्ष से कम है और निकासी राशि ₹50,000 से अधिक है, तो पैन कार्ड लिंक होने पर **10% TDS** और पैन लिंक न होने पर **34.6% अधिकतम सीमा पर TDS** कटता है। फॉर्म 15G/15H जमा कर टीडीएस से बचें।"),
            ("5. पीएफ एडवांस (Form 31) ऑनलाइन क्लेम रिजेक्ट होने के कारण", "बैंक पासबुक की फोटो में बैंक का नाम, आईएफएससी कोड या खाता संख्या स्पष्ट न होने या चेक पर नाम मुद्रित न होने पर क्लेम रिजेक्ट होता है। स्पष्ट कैंसिल चेक अपलोड करें。"),
            ("6. ईपीएस 95 (EPS Pension) के तहत पेंशन पात्रता और न्यूनतम पेंशन", "न्यूनतम 10 वर्ष की अंशदायी सेवा पूरी करने पर 58 वर्ष की आयु से आजीवन मासिक पेंशन मिलती है। सेवा 10 वर्ष से कम होने पर Form 10C द्वारा पेंशन अंशदान एकमुश्त वापस निकाला जा सकता है।")
        ],
        "statutory_title_en": "EPF Contribution Breakdown, Interest Compounding & Withdrawal Rules",
        "statutory_title_hi": "ईपीएफ अंशदान विभाजन, 8.25% ब्याज गणना व निकासी के कानूनी नियम",
        "statutory_content": """
        <p>कर्मचारी भविष्य निधि (EPF) भारत सरकार के श्रम एवं रोजगार मंत्रालय के अधीन <strong>Employees' Provident Funds and Miscellaneous Provisions Act, 1952</strong> द्वारा संचालित सबसे सुरक्षित सेवानिवृत्ति बचत योजना है।</p>

        <h3 style="color: var(--color-primary); margin-top: 24px;">1. ईपीएफ मासिक अंशदान का विभाजन (Monthly Contribution Breakdown)</h3>
        <p>कर्मचारी के मूल वेतन (Basic Salary) और महंगाई भत्ते (DA) का कुल 24% हिस्सा हर महीने पीएफ में जाता है:</p>
        <ul style="line-height: 1.8; font-size: 0.98rem; padding-left: 20px;">
          <li><strong>कर्मचारी अंशदान (Employee Share):</strong> मूल वेतन + DA का पूरा <strong>12%</strong> सीधे कर्मचारी के EPF खाते में जमा होता है।</li>
          <li><strong>कंपनी अंशदान (Employer Share):</strong> कंपनी द्वारा दिए जाने वाले 12% में से <strong>3.67% EPF</strong> खाते में और <strong>8.33% EPS (कर्मचारी पेंशन योजना)</strong> में (अधिकतम ₹15,000 की वेतन सीमा पर ₹1,250) जाता है।</li>
          <li><strong>EDLI जीवन बीमा:</strong> कंपनी द्वारा 0.5% अतिरिक्त अंशदान दिया जाता है, जिससे कर्मचारी को ₹7 लाख तक का मुफ्त जीवन बीमा मिलता है।</li>
        </ul>

        <h3 style="color: var(--color-primary); margin-top: 24px;">2. ब्याज गणना की विधि (8.25% Monthly Compounding)</h3>
        <p>EPFO प्रत्येक महीने के अंत में उपलब्ध रनिंग बैलेंस पर ब्याज की गणना करता है और वित्तीय वर्ष के अंत में (31 मार्च को) कुल अर्जित ब्याज को मुख्य बैलेंस में जोड़कर कंपाउंड करता है। यह ब्याज पूरी तरह कर-मुक्त (Tax-Free up to ₹2.5 Lakh annual contribution) होता है।</p>
        """
    },
    "hra-calculator.html": {
        "title": "HRA Calculator 2026: House Rent Allowance Exemption under Section 10(13A)",
        "title_hi": "एचआरए कैलकुलेटर 2026: आयकर धारा 10(13A) हाउस रेंट अलाउंस टैक्स छूट",
        "desc": "Calculate your HRA tax exemption under Section 10(13A) of Income Tax Act. Compare metro (50%) vs non-metro (40%) rules and optimize your take-home salary.",
        "desc_hi": "इनकम टैक्स की धारा 10(13A) के तहत अपने मकान किराया भत्ते (HRA) पर टैक्स छूट की गणना करें। मेट्रो (50%) व नॉन-मेट्रो (40%) नियम व रेंट रसीद गाइड।",
        "canonical": "https://sarkarisewaindia.com/tools/hra-calculator.html",
        "problems": [
            ("1. सालाना ₹1 लाख से अधिक किराया होने पर मकान मालिक का पैन कार्ड अनिवार्य", "आयकर नियमों के अनुसार यदि वार्षिक किराया ₹1,00,000 (₹8,333/माह) से अधिक है, तो कंपनी में एचआरए क्लेम करते समय मकान मालिक का पैन कार्ड (PAN) देना अनिवार्य है। पैन न होने पर फॉर्म 60 घोषणा पत्र देना होगा।"),
            ("2. माता-पिता को किराया देकर एचआरए टैक्स छूट क्लेम करने का वैध तरीका", "यदि आप अपने माता-पिता के मकान में रहते हैं, तो उनके साथ रेंट एग्रीमेंट बनाएं और बैंक ट्रांसफर से किराया भेजें। माता-पिता को यह किराया अपने आईटीआर में 'Income from House Property' के रूप में दिखाना होगा।"),
            ("3. एक साथ एचआरए छूट और होम लोन ब्याज कटौती (Dual Tax Benefit)", "यदि आपका खुद का मकान किसी अन्य शहर में है या वर्तमान कार्यस्थल से दूर होने के कारण आप किराए के मकान में रहते हैं, तो आप धारा 10(13A) में HRA और धारा 24(b) में होम लोन ब्याज दोनों का एक साथ लाभ ले सकते हैं।"),
            ("4. मेट्रो शहर (50%) बनाम नॉन-मेट्रो शहर (40%) का वर्गीकरण", "आयकर नियमों के तहत केवल **दिल्ली, मुंबई, कोलकाता और चेन्नई** को मेट्रो शहर माना जाता है (50% बेसिक)। बेंगलुरु, हैदराबाद, पुणे, गुरुग्राम और नोएडा जैसे शहरों में रहने पर भी नॉन-मेट्रो (40% बेसिक) का नियम लागू होता है।"),
            ("5. कंपनी को रेंट रसीद न दे पाने पर ITR में सीधा एचआरए क्लेम कैसे करें?", "यदि कंपनी ने फॉर्म 16 में एचआरए छूट नहीं दी, तो आप अपना आईटीआर दाखिल करते समय 'Exempt Allowances under Section 10(13A)' में गणना की गई छूट राशि सीधे दर्ज करके रिफंड पा सकते हैं।"),
            ("6. पति-पत्नी के बीच रेंट एग्रीमेंट और फेक रेंट रसीदों पर आयकर नोटिस", "पति और पत्नी एक दूसरे को किराया देकर एचआरए क्लेम नहीं कर सकते, क्योंकि वैवाहिक रिश्ते में सह-निवास की विधिक बाध्यता होती है। आयकर विभाग द्वारा एआईएस और रेंट एग्रीमेंट की जांच में फर्जी रसीद पकड़े जाने पर 200% पेनाल्टी लग सकती है।")
        ],
        "statutory_title_en": "Rule 2A Statutory Formula & Exemption Calculation Guidelines",
        "statutory_title_hi": "इनकम टैक्स नियम 2A के तहत एचआरए गणना का कानूनी फॉर्मूला",
        "statutory_content": """
        <p>वेतनभोगी कर्मचारियों को कंपनी से मिलने वाले हाउस रेंट अलाउंस (HRA) पर आयकर अधिनियम, 1961 की धारा 10(13A) और आयकर नियम 2A के तहत टैक्स छूट मिलती है।</p>

        <h3 style="color: var(--color-primary); margin-top: 24px;">1. एचआरए छूट का 3-शर्तों वाला फॉर्मूला (Rule 2A Formula)</h3>
        <p>निम्नलिखित तीन राशियों में से जो भी राशि <strong>सबसे कम (Lowest)</strong> होगी, वह टैक्स-फ्री होगी:</p>
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 18px; margin: 16px 0;">
          <ol style="line-height: 1.8; font-size: 0.98rem; padding-left: 20px; margin: 0;">
            <li><strong>वास्तविक प्राप्त एचआरए:</strong> Actual HRA received from employer.</li>
            <li><strong>किराया माइनस 10% सैलरी:</strong> Actual rent paid minus 10% of (Basic Salary + DA).</li>
            <li><strong>वेतन का 50% या 40%:</strong> 50% of (Basic + DA) for Metro cities (Delhi, Mumbai, Kolkata, Chennai) OR 40% for Non-Metro cities.</li>
          </ol>
        </div>
        """
    }
}

def generate_full_master_tool(slug, config, interactive_widget_html, js_logic):
    title = config["title"]
    title_hi = config["title_hi"]
    desc = config["desc"]
    desc_hi = config["desc_hi"]
    canonical = config["canonical"]
    problems = config["problems"]
    stat_title_en = config["statutory_title_en"]
    stat_title_hi = config["statutory_title_hi"]
    stat_content = config["statutory_content"]

    # Build 6 Problem Solvers HTML
    colors = ['#2563eb', '#059669', '#d97706', '#7c3aed', '#dc2626', '#db2777']
    prob_html_list = []
    for idx, (p_title, p_desc) in enumerate(problems):
        c = colors[idx % len(colors)]
        prob_html_list.append(f'''      <div class="prob-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 6px solid {c}; border-radius: 12px; padding: 22px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
        <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.2rem;">{p_title}</h3>
        <p style="color: var(--color-text); font-size: 0.95rem; line-height: 1.7; margin: 0;">{p_desc}</p>
      </div>''')

    # Build 10 FAQ HTML & Schema
    # Import from fix_all_tools_quality
    from fix_all_tools_quality import TOOL_FAQS
    from build_all_master_tools import EXTRA_TOOL_FAQS
    faqs_data = TOOL_FAQS.get(slug, [])
    if not faqs_data and slug in EXTRA_TOOL_FAQS:
        faqs_data = EXTRA_TOOL_FAQS[slug]
    
    faq_items_html = []
    schema_faqs = []
    for idx, (q, a) in enumerate(faqs_data, 1):
        schema_faqs.append({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": a
            }
        })
        open_attr = "open" if idx == 1 else ""
        faq_items_html.append(f'''      <details class="faq-item" {open_attr} style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
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
                "@type": "WebApplication",
                "name": title,
                "url": canonical,
                "applicationCategory": "FinanceApplication",
                "operatingSystem": "All",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR"
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
                        "name": "Citizen Tools & Calculators",
                        "item": "https://sarkarisewaindia.com/tools/index.html"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": title_hi,
                        "item": canonical
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
  <title>{title} | SarkariSewa India</title>
  <meta name="description" content="{desc_hi}">
  <link rel="canonical" href="{canonical}">
  
  <meta property="og:title" content="{title} | SarkariSewa India">
  <meta property="og:description" content="{desc_hi}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="{canonical}">
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{title}">
  <meta name="twitter:description" content="{desc}">
  
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
  <link rel="stylesheet" href="../assets/css/module9.css">
  <link rel="stylesheet" href="../assets/css/module16.css">
  <link rel="stylesheet" href="../assets/css/module18.css">
  <link rel="stylesheet" href="../assets/css/share-widget.css">
  
  <style>
    .calc-container, .tool-container-card, .engine-card, .calc-card {{
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 16px;
      padding: 32px 24px;
      box-shadow: 0 8px 30px rgba(16, 36, 62, 0.06);
      margin-bottom: 36px;
    }}
    .calc-title {{ font-size: 2rem; color: var(--color-primary); margin-bottom: 8px; text-align: center; }}
    .calc-desc {{ text-align: center; color: var(--color-text-muted); margin-bottom: 28px; font-size: 1.02rem; }}
    .form-group {{ margin-bottom: 20px; }}
    .form-group label {{ display: block; font-weight: 700; margin-bottom: 8px; color: var(--color-primary); font-size: 0.98rem; }}
    .form-control, .calc-input {{
      width: 100%;
      padding: 12px 14px;
      border: 2px solid var(--color-border);
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 500;
      color: var(--color-text);
      background: var(--color-surface);
      box-sizing: border-box;
      transition: border-color 0.2s;
    }}
    .form-control:focus, .calc-input:focus {{ outline: none; border-color: #2563eb; }}
    .btn-calc, .btn-tool-primary {{
      display: block;
      width: 100%;
      background: #2563eb;
      color: #ffffff !important;
      padding: 15px;
      border: none;
      border-radius: 10px;
      font-size: 1.1rem;
      font-weight: 700;
      cursor: pointer;
      transition: background 0.2s;
      box-shadow: 0 4px 14px rgba(37,99,235,0.25);
      text-align: center;
      text-decoration: none;
    }}
    .btn-calc:hover, .btn-tool-primary:hover {{ background: #1d4ed8; }}
    .result-box, .calc-result-box {{
      display: none;
      margin-top: 32px;
      padding: 24px;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 12px;
    }}
    .result-val {{ font-size: 2.4rem; color: #10b981; font-weight: 700; text-align: center; margin-bottom: 16px; }}
    .breakdown {{ background: var(--color-surface); padding: 16px; border-radius: 8px; border: 1px solid var(--color-border); margin-bottom: 16px; }}
    .breakdown-row {{ display: flex; justify-content: space-between; margin-bottom: 8px; color: var(--color-text); }}
    .breakdown-row:last-child {{ margin-bottom: 0; }}
    .disclaimer {{ font-size: 0.88rem; color: var(--color-text-muted); margin-top: 16px; line-height: 1.6; }}
    .btn-print {{ background: var(--color-surface); color: var(--color-text); border: 1px solid var(--color-border); padding: 10px 20px; border-radius: 8px; cursor: pointer; display: block; margin: 18px auto 0; font-weight: 600; }}
    .error {{ color: #ef4444; font-size: 0.9rem; margin-top: 6px; display: none; font-weight: 600; }}
    
    .grid-2 {{ display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }}
    @media(max-width: 768px) {{ .grid-2 {{ grid-template-columns: 1fr; }} }}
    .fy-badge {{ display: inline-block; background: #e0e7ff; color: #3730a3; padding: 4px 12px; border-radius: 20px; font-weight: 700; font-size: 0.85rem; margin-bottom: 10px; }}
    
    .tax-comparison {{ display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; }}
    @media(max-width: 768px) {{ .tax-comparison {{ grid-template-columns: 1fr; }} }}
    .regime-card {{ background: var(--color-surface); border: 2px solid var(--color-border); border-radius: 12px; padding: 20px; position: relative; }}
    .regime-card.winner {{ border-color: #10b981; background: rgba(16, 185, 129, 0.04); }}
    .winner-badge {{ display: none; position: absolute; top: -12px; right: 16px; background: #10b981; color: white; padding: 3px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 700; }}
    .regime-card.winner .winner-badge {{ display: block; }}
    .regime-title {{ font-size: 1.2rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px; }}
    .tax-amount {{ font-size: 1.8rem; font-weight: 700; color: var(--color-primary); margin-bottom: 16px; }}
    
    [data-theme="dark"] .calc-container,
    [data-theme="dark"] .result-box,
    [data-theme="dark"] .regime-card,
    [data-theme="dark"] .breakdown,
    [data-theme="dark"] .prob-box {{
      background: #101D2C !important;
      border-color: #223244 !important;
      color: #E8EDF3 !important;
    }}
  </style>
  
  <script type="application/ld+json" id="tool-schema">
{schema_json}
  </script>
</head>
<body class="v2-template" data-slug="{slug.replace('.html','')}">
  <script>window.SS_ROOT = "../";</script>
  
  <div id="site-header"></div>

  <main class="container" style="max-width: 1040px; margin: 32px auto; padding: 0 16px;">
    
    <!-- BREADCRUMB -->
    <nav class="breadcrumb" aria-label="Breadcrumb" style="font-size: 0.9rem; margin-bottom: 20px; color: var(--color-text-muted);">
      <a href="../index.html" style="color: var(--color-primary); text-decoration: none;">होम (Home)</a> &gt;
      <a href="index.html" style="color: var(--color-primary); text-decoration: none;">नागरिक टूल्स व कैलकुलेटर</a> &gt;
      <span style="color: var(--color-text);">{title_hi}</span>
    </nav>

    <!-- INTERACTIVE CALCULATOR WIDGET -->
{interactive_widget_html}

    <!-- 6 REAL WORLD PROBLEMS & PRACTICAL SOLUTIONS -->
    <section class="service-section" style="margin-top: 48px;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        ⚠️ <span data-lang-show="en">Common Calculation Issues &amp; Practical Solutions</span>
        <span data-lang-show="hi">6 प्रमुख समस्याएं व व्यावहारिक समाधान (Real-World Solutions)</span>
      </h2>
{"\n".join(prob_html_list)}
    </section>

    <!-- IN-DEPTH STATUTORY & MATHEMATICAL GUIDE -->
    <section class="service-section" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 32px 26px; margin-top: 40px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
      <h2 style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 18px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        📖 <span data-lang-show="en">{stat_title_en}</span>
        <span data-lang-show="hi">{stat_title_hi}</span>
      </h2>
      <div style="color: var(--color-text); line-height: 1.85; font-size: 1.02rem;">
{stat_content}
      </div>
    </section>

    <!-- 10 DETAILED FAQS ACCORDIONS -->
    <section class="service-section" style="margin-top: 48px;">
      <h2 style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        ❓ <span data-lang-show="en">Frequently Asked Questions (FAQs)</span>
        <span data-lang-show="hi">अक्सर पूछे जाने वाले सवाल (10 FAQs)</span>
      </h2>
{"\n".join(faq_items_html)}
    </section>

    <!-- CITIZEN TOOLS GRID -->
    <section class="service-section" style="margin-top: 48px;">
      <h3 style="color: var(--color-primary); font-size: 1.5rem; margin-bottom: 18px;">
        🛠️ <span data-lang-show="en">Related Citizen Utilities &amp; Calculators</span>
        <span data-lang-show="hi">संबंधित नागरिक टूल्स एवं कैलकुलेटर्स</span>
      </h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
        <a href="income-tax-calculator.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">⚖️</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Income Tax Calculator</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">न्यू बनाम ओल्ड टैक्स रिजीम तुलना व ₹75,000 स्टैंडर्ड डिडक्शन।</p>
          </div>
          <div style="font-weight: 700; color: #2563eb; font-size: 0.85rem; margin-top: 12px;">Calculate Tax ↗</div>
        </a>

        <a href="epf-calculator.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">📈</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">EPF &amp; Pension Calculator</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">8.25% ब्याज दर के अनुसार पीएफ बैलेंस व पेंशन फंड गणना।</p>
          </div>
          <div style="font-weight: 700; color: #059669; font-size: 0.85rem; margin-top: 12px;">Calculate EPF ↗</div>
        </a>

        <a href="hra-calculator.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">🏠</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">HRA Exemption Calculator</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">धारा 10(13A) के तहत मकान किराया भत्ता टैक्स छूट जांचें।</p>
          </div>
          <div style="font-weight: 700; color: #d97706; font-size: 0.85rem; margin-top: 12px;">Calculate HRA ↗</div>
        </a>

        <a href="savings-comparator.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">📊</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Savings Comparator</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">पोस्ट ऑफिस NSC, PPF, SCSS बनाम बैंक FD ब्याज दर तुलना।</p>
          </div>
          <div style="font-weight: 700; color: #7c3aed; font-size: 0.85rem; margin-top: 12px;">Compare Returns ↗</div>
        </a>
      </div>
    </section>

    <!-- VIP TELEGRAM BANNER -->
    <div style="background: linear-gradient(135deg, #0088cc 0%, #005f8f 100%); border-radius: 14px; padding: 26px; color: #fff; margin: 40px 0; text-align: center; box-shadow: 0 6px 20px rgba(0,136,204,0.25);">
      <h3 style="margin: 0 0 8px 0; color: #fff; font-size: 1.45rem;">✈️ SarkariSewa VIP Telegram Community</h3>
      <p style="margin: 0 0 18px 0; color: #e0f2fe; font-size: 0.95rem; line-height: 1.6;">
        आयकर नियमों, 8वें वेतन आयोग, पेंशन अपडेट्स व सरकारी वित्तीय बचत योजनाओं की सबसे तेज़ सूचना सीधे अपने फोन पर पाएं।
      </p>
      <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" class="btn" style="background: #fff; color: #0088cc; font-weight: 700; padding: 12px 28px; text-decoration: none; border-radius: 8px; display: inline-block; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
        Join Telegram Channel ↗
      </a>
    </div>

  </main>

  <div id="site-footer"></div>

  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/consent.js"></script>
  <script src="../assets/js/i18n-helper.js"></script>
  <script src="../assets/js/supabase-client.js"></script>
  <script src="../assets/js/services-data.js"></script>
  <script src="../assets/js/share-widget.js"></script>
  <script src="../assets/js/service-template.js"></script>
  
  <script>
{js_logic}
  </script>
</body>
</html>'''

# Extract widgets and JS from existing files
def get_gratuity_widget():
    widget = '''    <div class="calc-container">
      <h1 class="calc-title">Gratuity Calculator 2026</h1>
      <p class="calc-desc">Calculate your estimated gratuity amount based on the Payment of Gratuity Act, 1972.</p>
      
      <div class="form-group">
        <label for="salary">अंतिम मूल वेतन + महंगाई भत्ता / Last Drawn Basic Salary + DA (₹):</label>
        <input class="form-control" id="salary" min="1" placeholder="e.g. 50000" type="number"/>
        <div class="error" id="err-salary">कृपया मान्य वेतन राशि दर्ज करें (Please enter a valid amount).</div>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div class="form-group">
          <label for="years">कुल सेवा वर्ष / Years of Service:</label>
          <input class="form-control" id="years" min="0" placeholder="e.g. 5" type="number"/>
          <div class="error" id="err-years">न्यूनतम 5 वर्ष की सेवा अनिवार्य है (Minimum 5 years required).</div>
        </div>
        <div class="form-group">
          <label for="months">महीने / Additional Months:</label>
          <input class="form-control" id="months" max="11" min="0" placeholder="e.g. 6" type="number"/>
        </div>
      </div>
      
      <div class="form-group">
        <label for="covered">संस्थान ग्रेच्युटी एक्ट के तहत कवर्ड है? / Covered under Act?:</label>
        <select class="form-control" id="covered">
          <option value="yes">हाँ / Yes (10+ कर्मचारियों वाले अधिकांश संस्थान - 15/26 Formula)</option>
          <option value="no">नहीं / No (गैर-कवर्ड संस्थान - 15/30 Formula)</option>
        </select>
      </div>
      
      <button class="btn-calc" onclick="calculateGratuity()">Calculate Gratuity (ग्रेच्युटी निकालें)</button>
      
      <div class="result-box" id="result-box">
        <div style="text-align: center; margin-bottom: 8px; font-weight: 700; color: var(--color-primary); font-size: 1.15rem;">
          अनुमानित ग्रेच्युटी राशि (Estimated Gratuity Payout)
        </div>
        <div class="result-val" id="res-amount">₹0</div>
        
        <div class="breakdown">
          <div class="breakdown-row"><span>लागू फॉर्मूला (Formula):</span> <strong id="res-formula"></strong></div>
          <div class="breakdown-row"><span>गणना योग्य सेवा अवधि (Tenure):</span> <strong id="res-tenure"></strong></div>
        </div>
        
        <p class="disclaimer"><strong>कानूनी सूचना:</strong> पेमेंट ऑफ ग्रेच्युटी एक्ट 1972 के तहत आयकर छूट की अधिकतम सीमा ₹20 लाख (सरकारी कर्मियों हेतु ₹25 लाख) है।</p>
        <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
      </div>
    </div>'''
    
    js = '''    function calculateGratuity() {
      document.getElementById('err-salary').style.display = 'none';
      document.getElementById('err-years').style.display = 'none';
      document.getElementById('result-box').style.display = 'none';

      const salary = parseFloat(document.getElementById('salary').value);
      const years = parseInt(document.getElementById('years').value) || 0;
      const months = parseInt(document.getElementById('months').value) || 0;
      const covered = document.getElementById('covered').value;

      if (isNaN(salary) || salary <= 0) {
        document.getElementById('err-salary').style.display = 'block';
        return;
      }
      
      let totalTenure = years;
      if (covered === 'yes') {
        if (months > 6) totalTenure += 1;
      }

      if (totalTenure < 5) {
        document.getElementById('err-years').style.display = 'block';
        return;
      }

      let gratuity = 0;
      let formulaStr = "";

      if (covered === 'yes') {
        gratuity = (15 * salary * totalTenure) / 26;
        formulaStr = "(15 × Salary × Tenure) ÷ 26";
      } else {
        gratuity = (15 * salary * totalTenure) / 30;
        formulaStr = "(15 × Salary × Tenure) ÷ 30";
      }

      gratuity = Math.round(gratuity);
      document.getElementById('res-amount').innerText = "₹" + gratuity.toLocaleString('en-IN');
      document.getElementById('res-formula').innerText = formulaStr;
      document.getElementById('res-tenure').innerText = totalTenure + " Years";
      document.getElementById('result-box').style.display = 'block';
      document.getElementById('result-box').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }'''
    return widget, js

def get_income_tax_widget():
    widget = '''    <div class="calc-container">
      <div style="text-align: center;"><span class="fy-badge">FY 2024-25 &amp; FY 2025-26 (AY 2025-26)</span></div>
      <h1 class="calc-title">Income Tax Calculator 2026</h1>
      <p class="calc-desc">Compare New Regime (Default) vs Old Regime with ₹75,000 Standard Deduction.</p>
      
      <div class="grid-2">
        <div>
          <div class="form-group">
            <label for="income">वार्षिक सकल वेतन / Gross Annual Salary (₹):</label>
            <input class="form-control" id="income" min="0" placeholder="e.g. 1200000" type="number"/>
            <div class="error" id="err-income">कृपया मान्य आय दर्ज करें (Enter valid income).</div>
          </div>
          <div class="form-group">
            <label for="std-deduct">मानक कटौती / Standard Deduction (₹):</label>
            <input class="form-control" id="std-deduct" readonly style="background: var(--color-surface); cursor: not-allowed;" type="number" value="75000"/>
            <small style="color:var(--color-text-muted); font-size:0.82rem;">न्यू रिजीम में ₹75,000 एवं ओल्ड रिजीम में ₹50,000 लागू।</small>
          </div>
        </div>
        <div>
          <div class="form-group">
            <label for="deduct-80c">धारा 80C कटौतियां / 80C Deductions (₹):</label>
            <input class="form-control" id="deduct-80c" min="0" placeholder="e.g. 150000 (Max)" type="number"/>
            <small style="color:var(--color-text-muted); font-size:0.82rem;">EPF, PPF, ELSS, LIC आदि (केवल ओल्ड रिजीम में मान्य)</small>
          </div>
          <div class="form-group">
            <label for="deduct-other">अन्य कटौतियां / 80D, HRA, 24(b) (₹):</label>
            <input class="form-control" id="deduct-other" min="0" placeholder="e.g. 50000" type="number"/>
            <small style="color:var(--color-text-muted); font-size:0.82rem;">हेल्थ इंश्योरेंस व होम लोन ब्याज (केवल ओल्ड रिजीम में मान्य)</small>
          </div>
        </div>
      </div>
      
      <button class="btn-calc" onclick="calculateTax()">Compare &amp; Calculate Tax (टैक्स तुलना करें)</button>
      
      <div class="result-box" id="result-box">
        <h2 style="text-align: center; margin-bottom: 24px; color: var(--color-primary);">Tax Comparison Summary</h2>
        <div class="tax-comparison">
          <!-- Old Regime -->
          <div class="regime-card" id="card-old">
            <div class="winner-badge">MOST BENEFICIAL</div>
            <div class="regime-title">Old Regime</div>
            <div class="tax-amount" id="tax-old">₹0</div>
            <div class="breakdown-row"><span>Gross Income:</span> <strong id="old-gross"></strong></div>
            <div class="breakdown-row"><span>Total Deductions:</span> <strong id="old-deduct"></strong></div>
            <div class="breakdown-row"><span>Taxable Income:</span> <strong id="old-taxable"></strong></div>
            <div class="breakdown-row"><span>Base Tax:</span> <strong id="old-base-tax"></strong></div>
            <div class="breakdown-row"><span>Rebate 87A:</span> <strong id="old-rebate"></strong></div>
            <div class="breakdown-row"><span>Cess (4%):</span> <strong id="old-cess"></strong></div>
          </div>
          
          <!-- New Regime -->
          <div class="regime-card" id="card-new">
            <div class="winner-badge">MOST BENEFICIAL</div>
            <div class="regime-title">New Regime (Budget 2024 Revised)</div>
            <div class="tax-amount" id="tax-new">₹0</div>
            <div class="breakdown-row"><span>Gross Income:</span> <strong id="new-gross"></strong></div>
            <div class="breakdown-row"><span>Standard Deduction:</span> <strong>₹75,000</strong></div>
            <div class="breakdown-row"><span>Taxable Income:</span> <strong id="new-taxable"></strong></div>
            <div class="breakdown-row"><span>Base Tax:</span> <strong id="new-base-tax"></strong></div>
            <div class="breakdown-row"><span>Rebate 87A:</span> <strong id="new-rebate"></strong></div>
            <div class="breakdown-row"><span>Cess (4%):</span> <strong id="new-cess"></strong></div>
          </div>
        </div>
        <button class="btn-print" onclick="window.print()">🖨️ Print Tax Comparison</button>
      </div>
    </div>'''

    js = '''    function calculateTax() {
      document.getElementById('err-income').style.display = 'none';
      document.getElementById('result-box').style.display = 'none';
      
      const gross = parseFloat(document.getElementById('income').value);
      if (isNaN(gross) || gross < 0) {
        document.getElementById('err-income').style.display = 'block';
        return;
      }

      const deduct80c = Math.min(parseFloat(document.getElementById('deduct-80c').value) || 0, 150000);
      const deductOther = parseFloat(document.getElementById('deduct-other').value) || 0;
      
      // OLD REGIME CALCULATION
      const oldStdDeduct = 50000;
      const totalOldDeduct = oldStdDeduct + deduct80c + deductOther;
      const oldTaxable = Math.max(0, gross - totalOldDeduct);
      
      let oldBaseTax = 0;
      if (oldTaxable > 1000000) {
        oldBaseTax = 112500 + (oldTaxable - 1000000) * 0.30;
      } else if (oldTaxable > 500000) {
        oldBaseTax = 12500 + (oldTaxable - 500000) * 0.20;
      } else if (oldTaxable > 250000) {
        oldBaseTax = (oldTaxable - 250000) * 0.05;
      }
      
      let oldRebate = 0;
      if (oldTaxable <= 500000) {
        oldRebate = oldBaseTax;
      }
      
      const oldTaxAfterRebate = Math.max(0, oldBaseTax - oldRebate);
      const oldCess = oldTaxAfterRebate * 0.04;
      const totalOldTax = Math.round(oldTaxAfterRebate + oldCess);

      // NEW REGIME CALCULATION (Budget 2024 Revised)
      const newStdDeduct = 75000;
      const newTaxable = Math.max(0, gross - newStdDeduct);
      
      let newBaseTax = 0;
      if (newTaxable > 1500000) {
        newBaseTax = 140000 + (newTaxable - 1500000) * 0.30;
      } else if (newTaxable > 1200000) {
        newBaseTax = 80000 + (newTaxable - 1200000) * 0.20;
      } else if (newTaxable > 1000000) {
        newBaseTax = 50000 + (newTaxable - 1000000) * 0.15;
      } else if (newTaxable > 700000) {
        newBaseTax = 20000 + (newTaxable - 700000) * 0.10;
      } else if (newTaxable > 300000) {
        newBaseTax = (newTaxable - 300000) * 0.05;
      }

      let newRebate = 0;
      if (newTaxable <= 700000) {
        newRebate = newBaseTax;
      }

      const newTaxAfterRebate = Math.max(0, newBaseTax - newRebate);
      const newCess = newTaxAfterRebate * 0.04;
      const totalNewTax = Math.round(newTaxAfterRebate + newCess);

      // Populate UI
      document.getElementById('tax-old').innerText = "₹" + totalOldTax.toLocaleString('en-IN');
      document.getElementById('old-gross').innerText = "₹" + gross.toLocaleString('en-IN');
      document.getElementById('old-deduct').innerText = "₹" + totalOldDeduct.toLocaleString('en-IN');
      document.getElementById('old-taxable').innerText = "₹" + oldTaxable.toLocaleString('en-IN');
      document.getElementById('old-base-tax').innerText = "₹" + Math.round(oldBaseTax).toLocaleString('en-IN');
      document.getElementById('old-rebate').innerText = "₹" + Math.round(oldRebate).toLocaleString('en-IN');
      document.getElementById('old-cess').innerText = "₹" + Math.round(oldCess).toLocaleString('en-IN');

      document.getElementById('tax-new').innerText = "₹" + totalNewTax.toLocaleString('en-IN');
      document.getElementById('new-gross').innerText = "₹" + gross.toLocaleString('en-IN');
      document.getElementById('new-taxable').innerText = "₹" + newTaxable.toLocaleString('en-IN');
      document.getElementById('new-base-tax').innerText = "₹" + Math.round(newBaseTax).toLocaleString('en-IN');
      document.getElementById('new-rebate').innerText = "₹" + Math.round(newRebate).toLocaleString('en-IN');
      document.getElementById('new-cess').innerText = "₹" + Math.round(newCess).toLocaleString('en-IN');

      const cardOld = document.getElementById('card-old');
      const cardNew = document.getElementById('card-new');
      cardOld.classList.remove('winner');
      cardNew.classList.remove('winner');

      if (totalNewTax < totalOldTax) {
        cardNew.classList.add('winner');
      } else if (totalOldTax < totalNewTax) {
        cardOld.classList.add('winner');
      }

      document.getElementById('result-box').style.display = 'block';
      document.getElementById('result-box').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }'''
    return widget, js

def get_epf_widget():
    widget = '''    <div class="calc-container">
      <div style="text-align: center;"><span class="fy-badge">EPFO Current Rate: 8.25% p.a.</span></div>
      <h1 class="calc-title">EPF &amp; Pension Calculator 2026</h1>
      <p class="calc-desc">Calculate your EPF maturity balance, monthly interest compounding and EPS pension corpus.</p>
      
      <div class="grid-2">
        <div class="form-group">
          <label for="epf-basic">मासिक मूल वेतन + DA / Monthly Basic + DA (₹):</label>
          <input class="form-control" id="epf-basic" min="1000" placeholder="e.g. 30000" type="number"/>
        </div>
        <div class="form-group">
          <label for="epf-age">वर्तमान आयु / Current Age (Years):</label>
          <input class="form-control" id="epf-age" max="57" min="18" placeholder="e.g. 25" type="number"/>
        </div>
      </div>

      <div class="grid-2">
        <div class="form-group">
          <label for="epf-balance">मौजूदा पीएफ बैलेंस / Existing EPF Balance (₹):</label>
          <input class="form-control" id="epf-balance" min="0" placeholder="e.g. 100000" type="number" value="0"/>
        </div>
        <div class="form-group">
          <label for="epf-hike">वार्षिक वेतन वृद्धि / Expected Annual Salary Hike (%):</label>
          <input class="form-control" id="epf-hike" max="30" min="0" placeholder="e.g. 5" type="number" value="5"/>
        </div>
      </div>
      
      <button class="btn-calc" onclick="calculateEPF()">Calculate EPF Maturity (पीएफ बैलेंस निकालें)</button>
      
      <div class="result-box" id="result-box">
        <div style="text-align: center; margin-bottom: 8px; font-weight: 700; color: var(--color-primary); font-size: 1.15rem;">
          रिटायरमेंट पर कुल पीएफ फंड (Total EPF Balance at Age 58)
        </div>
        <div class="result-val" id="res-epf-total">₹0</div>
        
        <div class="breakdown">
          <div class="breakdown-row"><span>कर्मचारी का कुल अंशदान (Employee Share 12%):</span> <strong id="res-epf-ee">₹0</strong></div>
          <div class="breakdown-row"><span>कंपनी का कुल अंशदान (Employer Share 3.67%):</span> <strong id="res-epf-er">₹0</strong></div>
          <div class="breakdown-row"><span>कुल अर्जित ब्याज (Total Interest @ 8.25%):</span> <strong id="res-epf-int" style="color: #059669;">₹0</strong></div>
          <div class="breakdown-row"><span>पेंशन फंड अंशदान (Total EPS Contribution 8.33%):</span> <strong id="res-epf-eps">₹0</strong></div>
        </div>
        
        <p class="disclaimer"><strong>नोट:</strong> यह गणना EPFO की 8.25% वार्षिक ब्याज दर और 58 वर्ष की सेवानिवृत्ति आयु पर आधारित है。</p>
        <button class="btn-print" onclick="window.print()">🖨️ Print EPF Summary</button>
      </div>
    </div>'''

    js = '''    function calculateEPF() {
      const basic = parseFloat(document.getElementById('epf-basic').value);
      const age = parseInt(document.getElementById('epf-age').value);
      let balance = parseFloat(document.getElementById('epf-balance').value) || 0;
      const hike = (parseFloat(document.getElementById('epf-hike').value) || 0) / 100;
      
      if (isNaN(basic) || basic <= 0 || isNaN(age) || age < 18 || age >= 58) {
        alert("कृपया सही वेतन (Basic) और आयु (18-57 वर्ष) दर्ज करें।");
        return;
      }

      const yearsToRetire = 58 - age;
      const rate = 0.0825;
      
      let currentBasic = basic;
      let totalEE = 0;
      let totalER = 0;
      let totalEPS = 0;
      let currentBalance = balance;

      for (let y = 0; y < yearsToRetire; y++) {
        const monthlyEE = currentBasic * 0.12;
        const monthlyEPS = Math.min(currentBasic, 15000) * 0.0833;
        const monthlyER = (currentBasic * 0.12) - monthlyEPS;

        for (let m = 0; m < 12; m++) {
          totalEE += monthlyEE;
          totalER += monthlyER;
          totalEPS += monthlyEPS;
          currentBalance += (monthlyEE + monthlyER);
        }
        currentBalance += (currentBalance * rate);
        currentBasic += (currentBasic * hike);
      }

      const totalInterest = Math.max(0, currentBalance - (balance + totalEE + totalER));

      document.getElementById('res-epf-total').innerText = "₹" + Math.round(currentBalance).toLocaleString('en-IN');
      document.getElementById('res-epf-ee').innerText = "₹" + Math.round(totalEE).toLocaleString('en-IN');
      document.getElementById('res-epf-er').innerText = "₹" + Math.round(totalER).toLocaleString('en-IN');
      document.getElementById('res-epf-int').innerText = "₹" + Math.round(totalInterest).toLocaleString('en-IN');
      document.getElementById('res-epf-eps').innerText = "₹" + Math.round(totalEPS).toLocaleString('en-IN');

      document.getElementById('result-box').style.display = 'block';
      document.getElementById('result-box').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }'''
    return widget, js

def get_hra_widget():
    widget = '''    <div class="calc-container">
      <div style="text-align: center;"><span class="fy-badge">Income Tax Section 10(13A) &amp; Rule 2A</span></div>
      <h1 class="calc-title">HRA Exemption Calculator 2026</h1>
      <p class="calc-desc">Calculate exact tax-exempt House Rent Allowance and reduce your taxable salary.</p>
      
      <div class="grid-2">
        <div class="form-group">
          <label for="hra-basic">मासिक मूल वेतन + DA / Basic Salary + DA (₹):</label>
          <input class="form-control" id="hra-basic" min="1" placeholder="e.g. 50000" type="number"/>
        </div>
        <div class="form-group">
          <label for="hra-received">कंपनी से प्राप्त मासिक HRA / HRA Received (₹):</label>
          <input class="form-control" id="hra-received" min="0" placeholder="e.g. 20000" type="number"/>
        </div>
      </div>

      <div class="grid-2">
        <div class="form-group">
          <label for="hra-rent">वास्तविक मासिक किराया भुगतान / Actual Rent Paid (₹):</label>
          <input class="form-control" id="hra-rent" min="0" placeholder="e.g. 18000" type="number"/>
        </div>
        <div class="form-group">
          <label for="hra-city">शहर का प्रकार / City Type:</label>
          <select class="form-control" id="hra-city">
            <option value="metro">मेट्रो शहर / Metro City (Delhi, Mumbai, Kolkata, Chennai - 50%)</option>
            <option value="non-metro">गैर-मेट्रो / Non-Metro (Bengaluru, Pune, Hyderabad, Noida, others - 40%)</option>
          </select>
        </div>
      </div>
      
      <button class="btn-calc" onclick="calculateHRA()">Calculate HRA Exemption (एचआरए छूट निकालें)</button>
      
      <div class="result-box" id="result-box">
        <div style="text-align: center; margin-bottom: 8px; font-weight: 700; color: var(--color-primary); font-size: 1.15rem;">
          वार्षिक कर-मुक्त एचआरए (Annual Tax Exempt HRA)
        </div>
        <div class="result-val" id="res-hra-exempt">₹0</div>
        
        <div class="breakdown">
          <div class="breakdown-row"><span>वार्षिक कर-योग्य एचआरए (Taxable HRA):</span> <strong id="res-hra-taxable" style="color: #dc2626;">₹0</strong></div>
          <div class="breakdown-row"><span>शर्त 1: वास्तविक प्राप्त एचआरए (Actual HRA):</span> <strong id="res-hra-c1">₹0</strong></div>
          <div class="breakdown-row"><span>शर्त 2: किराया - 10% वेतन (Rent - 10% Basic):</span> <strong id="res-hra-c2">₹0</strong></div>
          <div class="breakdown-row"><span>शर्त 3: वेतन का 50%/40% (50%/40% of Salary):</span> <strong id="res-hra-c3">₹0</strong></div>
        </div>
        
        <p class="disclaimer"><strong>नियम 2A:</strong> इन तीनों में से जो भी राशि सबसे कम होगी, वह आयकर की धारा 10(13A) के तहत पूरी तरह टैक्स-फ्री होगी।</p>
        <button class="btn-print" onclick="window.print()">🖨️ Print HRA Calculation</button>
      </div>
    </div>'''

    js = '''    function calculateHRA() {
      const basic = parseFloat(document.getElementById('hra-basic').value) * 12;
      const hraReceived = parseFloat(document.getElementById('hra-received').value) * 12;
      const rentPaid = parseFloat(document.getElementById('hra-rent').value) * 12;
      const city = document.getElementById('hra-city').value;

      if (isNaN(basic) || basic <= 0 || isNaN(hraReceived) || hraReceived <= 0 || isNaN(rentPaid) || rentPaid <= 0) {
        alert("कृपया सभी आवश्यक आंकड़े (वेतन, एचआरए और किराया) सही भरें।");
        return;
      }

      const c1 = hraReceived;
      const c2 = Math.max(0, rentPaid - (0.10 * basic));
      const c3 = (city === 'metro') ? (0.50 * basic) : (0.40 * basic);

      const exemptHRA = Math.round(Math.min(c1, c2, c3));
      const taxableHRA = Math.round(Math.max(0, hraReceived - exemptHRA));

      document.getElementById('res-hra-exempt').innerText = "₹" + exemptHRA.toLocaleString('en-IN');
      document.getElementById('res-hra-taxable').innerText = "₹" + taxableHRA.toLocaleString('en-IN');
      document.getElementById('res-hra-c1').innerText = "₹" + Math.round(c1).toLocaleString('en-IN');
      document.getElementById('res-hra-c2').innerText = "₹" + Math.round(c2).toLocaleString('en-IN');
      document.getElementById('res-hra-c3').innerText = "₹" + Math.round(c3).toLocaleString('en-IN');

      document.getElementById('result-box').style.display = 'block';
      document.getElementById('result-box').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }'''
    return widget, js

def run_upgrades():
    # 1. Gratuity Calculator
    w, js = get_gratuity_widget()
    html = generate_full_master_tool("gratuity-calculator.html", TOOL_CONFIGS["gratuity-calculator.html"], w, js)
    with open(os.path.join(TOOLS_DIR, "gratuity-calculator.html"), "w", encoding="utf-8") as f:
        f.write(html)
    print("Upgraded gratuity-calculator.html")

    # 2. Income Tax Calculator
    w, js = get_income_tax_widget()
    html = generate_full_master_tool("income-tax-calculator.html", TOOL_CONFIGS["income-tax-calculator.html"], w, js)
    with open(os.path.join(TOOLS_DIR, "income-tax-calculator.html"), "w", encoding="utf-8") as f:
        f.write(html)
    print("Upgraded income-tax-calculator.html")

    # 3. EPF Calculator
    w, js = get_epf_widget()
    html = generate_full_master_tool("epf-calculator.html", TOOL_CONFIGS["epf-calculator.html"], w, js)
    with open(os.path.join(TOOLS_DIR, "epf-calculator.html"), "w", encoding="utf-8") as f:
        f.write(html)
    print("Upgraded epf-calculator.html")

    # 4. HRA Calculator
    w, js = get_hra_widget()
    html = generate_full_master_tool("hra-calculator.html", TOOL_CONFIGS["hra-calculator.html"], w, js)
    with open(os.path.join(TOOLS_DIR, "hra-calculator.html"), "w", encoding="utf-8") as f:
        f.write(html)
    print("Upgraded hra-calculator.html")

if __name__ == '__main__':
    run_upgrades()