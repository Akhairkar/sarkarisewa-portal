# -*- coding: utf-8 -*-
import os, sys, glob, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOOLS_DIR = os.path.join(ROOT, 'tools')

def get_tools_common_css():
    return '''
    .engine-card, .trouble-card, .tool-container-card, .calc-card, .clarifier-card, .resizer-card, .builder-card, .check-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 16px;
      padding: 28px;
      box-shadow: 0 8px 30px rgba(16, 36, 62, 0.08);
      margin-bottom: 36px;
    }
    .field-group, .select-group, .calc-input-group, .input-row { margin-bottom: 18px; }
    .field-group label, .select-group label, .calc-input-group label, .input-row label {
      display: block;
      font-weight: 700;
      margin-bottom: 8px;
      color: var(--color-primary);
      font-size: 0.98rem;
    }
    .engine-input, .trouble-select, .calc-input, .tool-input, .tool-select, .decl-input {
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
    }
    .engine-input:focus, .trouble-select:focus, .calc-input:focus, .tool-input:focus, .tool-select:focus, .decl-input:focus {
      outline: none;
      border-color: var(--color-primary);
    }
    .scheme-match-card, .solution-box, .calc-result-box, .preview-container, .preview-box {
      padding: 22px;
      border-radius: 12px;
      margin-bottom: 16px;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    }
    [data-theme="dark"] .scheme-match-card,
    [data-theme="dark"] .solution-box,
    [data-theme="dark"] .calc-result-box,
    [data-theme="dark"] .preview-container,
    [data-theme="dark"] .preview-box,
    [data-theme="dark"] .doc-item-row {
      background: #101D2C !important;
      border-color: #223244 !important;
      color: #E8EDF3 !important;
    }
    .btn-tool-primary {
      background: #2563eb;
      color: #ffffff !important;
      font-weight: 700;
      padding: 12px 24px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      box-shadow: 0 4px 14px rgba(37,99,235,0.25);
    }
    .btn-tool-secondary {
      background: var(--color-surface);
      color: var(--color-text) !important;
      font-weight: 700;
      padding: 12px 20px;
      border-radius: 10px;
      border: 1px solid var(--color-border);
      cursor: pointer;
      font-size: 0.95rem;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
    }
'''

def get_tools_grid():
    return '''    <!-- CITIZEN TOOLS GRID -->
    <section class="service-section" style="margin-top: 40px;">
      <h3 style="color: var(--color-primary); font-size: 1.5rem; margin-bottom: 18px;">
        🛠️ <span data-lang-show="en">Popular Citizen Utilities &amp; Calculators</span>
        <span data-lang-show="hi">लोकप्रिय नागरिक टूल्स एवं कैलकुलेटर्स</span>
      </h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
        <a href="../tools/self-declaration-builder.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">📝</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Self-Declaration Builder</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">IBPS, लाडकी बहीण व सरकारी नौकरियों के लिए स्व-घोषणा पत्र व हमीपत्र बनाएं।</p>
          </div>
          <div style="font-weight: 700; color: #2563eb; font-size: 0.85rem; margin-top: 12px;">Generate Form ↗</div>
        </a>

        <a href="../tools/document-checklist.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">📋</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Document Checklist Tool</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">सरकारी नौकरी DV, पासपोर्ट, जाति व आय प्रमाण पत्र के आवश्यक दस्तावेज़ जांचें।</p>
          </div>
          <div style="font-weight: 700; color: #059669; font-size: 0.85rem; margin-top: 12px;">Check Documents ↗</div>
        </a>

        <a href="../tools/eligibility-checker.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">🎯</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Scheme Eligibility Engine</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">अपनी उम्र, आय और श्रेणी के आधार पर सभी सरकारी योजनाओं की पात्रता जांचें।</p>
          </div>
          <div style="font-weight: 700; color: #d97706; font-size: 0.85rem; margin-top: 12px;">Check Eligibility ↗</div>
        </a>

        <a href="../tools/status-troubleshooter.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">🔍</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Status Troubleshooter</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">पेंडिंग या रिजेक्ट हुए सरकारी आवेदनों का तुरंत समाधान और शिकायत निवारण।</p>
          </div>
          <div style="font-weight: 700; color: #7c3aed; font-size: 0.85rem; margin-top: 12px;">Fix Status ↗</div>
        </a>
      </div>
    </section>'''

def get_featured_banner():
    return '''      <!-- SPECIAL FEATURED SECTION: LOW-INTEREST LOANS & SCHEMES -->
      <div style="margin: 44px 0; padding: 30px; background: linear-gradient(135deg, #10243E 0%, #173663 60%, #0c2650 100%); color: #ffffff; border-radius: 18px; box-shadow: 0 10px 35px rgba(16, 36, 62, 0.3); border: 1px solid rgba(255,255,255,0.15);">
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 14px;">
          <span style="font-size: 2.2rem;">💡</span>
          <div>
            <h3 style="margin: 0; font-size: 1.45rem; color: #ffffff;">
              <span data-lang-show="en">Explore 50% Subsidized Govt Loans &amp; Grants</span>
              <span data-lang-show="hi">स्वरोजगार व व्यवसाय के लिए 50% सब्सिडी पर सरकारी ऋण योजनाएं</span>
            </h3>
            <span style="color: #F8D348; font-size: 0.92rem; font-weight: 600;">
              <span data-lang-show="en">MPBCDC Self-Employment, KCC &amp; PM Vishwakarma</span>
              <span data-lang-show="hi">महात्मा फुले महामंडल (MPBCDC), किसान क्रेडिट कार्ड व पीएम विश्वकर्मा</span>
            </span>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 20px 0;">
          <div style="background: rgba(255,255,255,0.08); padding: 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.15);">
            <strong style="color: #F8D348; font-size: 1.15rem; display: block; margin-bottom: 6px;">🏦 MPBCDC थेट कर्ज योजना</strong>
            <p style="font-size: 0.92rem; margin: 0; color: rgba(255,255,255,0.85);">
              ₹1 लाख तक के प्रोजेक्ट पर <strong>50% सीधी सब्सिडी (₹50,000 फ्री)</strong> और 45% लोन मात्र 4% ब्याज पर।
            </p>
          </div>
          <div style="background: rgba(255,255,255,0.08); padding: 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.15);">
            <strong style="color: #4CAF50; font-size: 1.15rem; display: block; margin-bottom: 6px;">🔨 PM Vishwakarma Yojana</strong>
            <p style="font-size: 0.92rem; margin: 0; color: rgba(255,255,255,0.85);">
              पारंपरिक कारीगरों को <strong>₹15,000 फ्री टूलकिट</strong> व 5% ब्याज पर ₹3 लाख तक का लोन।
            </p>
          </div>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <a href="../service/mpbcdc-direct-loan-yojana.html" class="btn" style="background: #F8D348; color: #10243E; font-weight: 800; padding: 12px 22px; border-radius: 8px; text-decoration: none;">
            🏛️ MPBCDC योजना विवरण ↗
          </a>
          <a href="../service/pm-vishwakarma-yojana.html" class="btn" style="background: rgba(255,255,255,0.18); color: #fff; border: 1px solid rgba(255,255,255,0.3); font-weight: 700; padding: 12px 22px; border-radius: 8px; text-decoration: none;">
            🔨 PM विश्वकर्मा योजना ↗
          </a>
        </div>
      </div>'''

def upgrade_status_troubleshooter():
    fpath = os.path.join(TOOLS_DIR, 'status-troubleshooter.html')
    with open(fpath, 'r', encoding='utf-8') as fp:
        c = fp.read()
    
    # Check if 10 FAQs and 6 Problem Solvers already present or need enrichment
    # We will enrich schema and content
    faqs_schema = '''      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "पीएम किसान में Land Seeding NO आ रहा है तो क्या करें?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "अपनी तहसील या उप-विभागीय कृषि अधिकारी कार्यालय में जाएं और अपने खसरा/खतौनी की प्रति, आधार कार्ड और बैंक पासबुक जमा करके पटवारी से लैंड वेरिफिकेशन अपडेट कराएं। ऑनलाइन e-Kisan पोर्टल पर भी भूलेख सीडिंग रिक्वेस्ट दर्ज कर सकते हैं।"
            }
          },
          {
            "@type": "Question",
            "name": "Aadhaar Bank Account Not Seeded / NPCI Inactive समस्या का समाधान क्या है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "अपनी बैंक शाखा जाएं और 'NPCI Aadhaar Mandate & DBT Seeding Form' जमा करें। अथवा इंडिया पोस्ट पेमेंट्स बैंक (IPPB) में नया आधार-लिंक्ड खाता खुलवाएं, जिसमें 24 घंटे के अंदर NPCI DBT स्वतः सक्रिय हो जाता है।"
            }
          },
          {
            "@type": "Question",
            "name": "लाडकी बहीण योजना में 'Approval Pending at Ward / Taluka' का क्या अर्थ है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "इसका अर्थ है कि आपका आवेदन नगर निगम वार्ड या तहसील स्तर की स्क्रूटनी समिति के पास जांच हेतु लंबित है। आमतौर पर 7 से 15 कार्यदिवसों में दस्तावेज़ मिलान पूरा होकर स्टेटस Approved हो जाता है।"
            }
          },
          {
            "@type": "Question",
            "name": "राशन कार्ड में 'Member Deletion Pending' क्यों दिखाता है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "विवाह या स्थानांतरण के बाद पुराने कार्ड से नाम काटने का आवेदन फूड सप्लाई इंस्पेक्टर के डिजिटल हस्ताक्षर हेतु लंबित होता है। इसे खाद्य आपूर्ति कार्यालय में रसीद दिखाकर 3 दिन में स्वीकृत कराया जा सकता है।"
            }
          },
          {
            "@type": "Question",
            "name": "आयुष्मान कार्ड में 'e-KYC Rejected / Name Mismatch' का समाधान क्या है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "राशन कार्ड डेटाबेस और आधार कार्ड में नाम या जन्मतिथि की स्पेलिंग में अंतर होने पर ऐसा होता है। beneficiary.nha.gov.in पर Redo e-KYC विकल्प चुनें या नजदीकी सरकारी अस्पताल में आयुष्मान मित्र से संपर्क करें।"
            }
          },
          {
            "@type": "Question",
            "name": "सरकारी नौकरी परीक्षा फॉर्म में फीस कट गई किंतु फॉर्म अधूरा (Incomplete) दिख रहा है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "बैंक और परीक्षा बोर्ड के गेटवे के बीच पेमेंट सेटलमेंट में 24 से 48 घंटे लगते हैं। 'Double Verification of Fee' लिंक पर क्लिक करें। दोबारा पेमेंट न करें जब तक बैंक से रिफंड या कन्फर्मेशन न आ जाए।"
            }
          },
          {
            "@type": "Question",
            "name": "छात्रवृत्ति पोर्टल (NSP) पर 'Defective Application' का क्या मतलब है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "स्कूल/कॉलेज या नोडल अधिकारी द्वारा फॉर्म में किसी दस्तावेज़ में कमी पाई गई है। छात्र अपनी लॉगिन आईडी से त्रुटिपूर्ण दस्तावेज़ को पुनः अपलोड कर 'Resubmit' कर सकते हैं।"
            }
          },
          {
            "@type": "Question",
            "name": "ई-श्रम कार्ड में UAN जनरेट नहीं हो रहा या ओटीपी नहीं आ रहा?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "आधार से लिंक मोबाइल नंबर सक्रिय न होने पर ऐसा होता है। नजदीकी सीएससी केंद्र पर जाकर बायोमेट्रिक फिंगरप्रिंट ऑथेंटिकेशन द्वारा बिना ओटीपी के तुरंत कार्ड बनवाया जा सकता है।"
            }
          },
          {
            "@type": "Question",
            "name": "CPGRAMS पर सरकारी शिकायत (Public Grievance) कैसे दर्ज करें?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "pgportal.gov.in पर जाएं, नागरिक लॉगिन बनाएं और संबंधित मंत्रालय/विभाग का चयन कर अपनी शिकायत और आवेदन पावती संलग्न करें। नियमानुसार 30 दिनों में कार्रवाई अनिवार्य है।"
            }
          },
          {
            "@type": "Question",
            "name": "क्या किसी सरकारी योजना में रिजेक्ट होने के बाद दोबारा आवेदन किया जा सकता है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "हाँ, अधिकांश योजनाओं में रिजेक्शन का कारण सुधारने (जैसे नया जाति/आय प्रमाण पत्र, सही बैंक खाता) के बाद फ्रेश एप्लिकेशन या री-अप्लाई करने की पूर्ण अनुमति होती है।"
            }
          }
        ]
      }'''
    
    # Replace FAQ schema in status troubleshooter if thin
    c = re.sub(r'\{\s*"@type":\s*"FAQPage"[\s\S]*?\}\s*\]\s*\}', faqs_schema + '\n    ]\n  }', c)
    
    with open(fpath, 'w', encoding='utf-8') as fp:
        fp.write(c)
    print('Updated status-troubleshooter.html schema')

upgrade_status_troubleshooter()
print('All tools upgraded!')

