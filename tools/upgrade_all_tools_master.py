# -*- coding: utf-8 -*-
# Master tools and calculators upgrader
import os, sys, glob, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOOLS_DIR = os.path.join(ROOT, 'tools')

def get_tools_common_css():
    return '''
    .engine-card, .trouble-card, .tool-container-card, .calc-card, .clarifier-card, .resizer-card, .builder-card, .check-card, .pan-card-box, .tool-box {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 16px;
      padding: 28px;
      box-shadow: 0 8px 30px rgba(16, 36, 62, 0.08);
      margin-bottom: 36px;
    }
    .field-group, .select-group, .calc-input-group, .input-row, .form-group { margin-bottom: 18px; }
    .field-group label, .select-group label, .calc-input-group label, .input-row label, .form-group label {
      display: block;
      font-weight: 700;
      margin-bottom: 8px;
      color: var(--color-primary);
      font-size: 0.98rem;
    }
    .engine-input, .trouble-select, .calc-input, .tool-input, .tool-select, .decl-input, .pan-input, .form-control {
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
    .engine-input:focus, .trouble-select:focus, .calc-input:focus, .tool-input:focus, .tool-select:focus, .decl-input:focus, .pan-input:focus, .form-control:focus {
      outline: none;
      border-color: var(--color-primary);
    }
    .scheme-match-card, .solution-box, .calc-result-box, .preview-container, .preview-box, .diag-alert, .res-card {
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
    [data-theme="dark"] .diag-alert,
    [data-theme="dark"] .res-card,
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

def upgrade_eligibility_checker():
    fpath = os.path.join(TOOLS_DIR, 'eligibility-checker.html')
    with open(fpath, 'r', encoding='utf-8') as fp:
        c = fp.read()

    # Expand FAQs & Problem Solvers
    faqs_schema = '''      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "सरकारी योजना पात्रता चेकर (Scheme Eligibility Engine) कैसे काम करता है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "हमारा स्मार्ट एल्गोरिदम आपकी आयु, आय वर्ग, जाति श्रेणी, राज्य और लिंग का विश्लेषण करके 100+ केंद्रीय व राज्य सरकारी योजनाओं के पात्रता डेटाबेस से सटीक मिलान करता है और आपको तत्काल योग्य योजनाओं की सूची दिखाता है।"
            }
          },
          {
            "@type": "Question",
            "name": "क्या जनरल (General/Unreserved) श्रेणी के नागरिक भी सरकारी योजनाओं के पात्र हैं?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "हाँ, आयुष्मान भारत (₹5 लाख स्वास्थ्य बीमा), पीएम सूर्य घर मुफ़्त बिजली योजना, पीएम किसान सम्मान निधि, ईडब्ल्यूएस छात्रवृत्ति, अटल पेंशन योजना और पीएम मुद्रा लोन सभी जातियों और श्रेणियों के लिए समान रूप से उपलब्ध हैं।"
            }
          },
          {
            "@type": "Question",
            "name": "पारिवारिक आय ₹2.5 लाख से कम होने पर कौन-कौन सी प्रमुख योजनाएं मिलती हैं?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "₹2.5 लाख से कम आय वाले परिवारों को अंत्योदय व बीपीएल राशन कार्ड, आयुष्मान भारत गोल्डन कार्ड, लाडकी बहीण योजना (₹1,500/माह), पीएम आवास योजना (₹1.20 लाख से ₹2.50 लाख मकान अनुदान), और राष्ट्रीय छात्रवृत्तियां मिलती हैं।"
            }
          },
          {
            "@type": "Question",
            "name": "महिला सशक्तिकरण की शीर्ष केंद्रीय व राज्य योजनाएं कौन सी हैं?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "माझी लाडकी बहीण योजना, लखपति दीदी योजना (₹1 लाख से ₹5 लाख तक आजीविका सहायता), नमो ड्रोन दीदी, महतारी वंदन योजना, पीएम उज्ज्वला योजना (मुफ़्त गैस सिलेंडर) और महिला सम्मान बचत पत्र।"
            }
          },
          {
            "@type": "Question",
            "name": "युवाओं और छात्रों के लिए प्रमुख सरकारी योजनाएं कौन सी हैं?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP), पीएम विद्यालक्ष्मी योजना (सस्ता शिक्षा लोन), राष्ट्रीय शिक्षुता प्रोत्साहन योजना (NAPS ₹1500 स्टाइपेंड), पीएम इंटर्नशिप योजना (₹5000/माह) और पीएम कौशल विकास योजना (PMKVY)।"
            }
          },
          {
            "@type": "Question",
            "name": "वरिष्ठ नागरिकों (60+ एवं 70+ वर्ष) के लिए कौन से विशेष लाभ हैं?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "70 वर्ष से अधिक आयु के सभी बुजुर्गों हेतु आयुष्मान वय वंदना कार्ड (बिना किसी आय सीमा के ₹5 लाख फ्री इलाज), राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP वृद्धावस्था पेंशन), और वरिष्ठ नागरिक बचत योजना (SCSS 8.2% ब्याज)।"
            }
          },
          {
            "@type": "Question",
            "name": "किसानों और पशुपालकों के लिए शीर्ष 3 योजनाएं कौन सी हैं?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "पीएम किसान सम्मान निधि (₹6,000 वार्षिक DBT), किसान क्रेडिट कार्ड (KCC मात्र 4% ब्याज पर ₹3 लाख तक लोन), और पीएम फसल बीमा योजना (PMFBY)।"
            }
          },
          {
            "@type": "Question",
            "name": "छोटे दुकानदारों, कारीगरों व रेहड़ी-पटरी वालों के लिए कौन सी योजनाएं हैं?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "पीएम विश्वकर्मा योजना (₹15,000 फ्री टूलकिट व 5% लोन), पीएम स्वनिधि (स्ट्रीट वेंडर्स हेतु ₹50,000 तक ब्याज-मुक्त लोन), और पीएम मुद्रा योजना (शिशु लोन ₹50,000)।"
            }
          },
          {
            "@type": "Question",
            "name": "सरकारी योजना का लाभ लेने के लिए बैंक खाते में क्या होना अनिवार्य है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "बैंक खाते में आधार लिंकिंग (Aadhaar Seeding) और NPCI DBT मैंडेट सक्रिय होना अनिवार्य है ताकि सरकारी अनुदान सीधे खाते में आ सके।"
            }
          },
          {
            "@type": "Question",
            "name": "पात्र होने के बावजूद सरकारी योजना का लाभ न मिलने पर शिकायत कहां करें?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "केंद्र सरकार के CPGRAMS पोर्टल (pgportal.gov.in) पर या राज्य के CM हेल्पलाइन नंबर (जैसे UP 1076, MP 181, MH 1800-120-8040) पर ऑनलाइन शिकायत दर्ज करें।"
            }
          }
        ]
      }'''

    # Ensure styles and schema updated
    c = re.sub(r'\{\s*"@type":\s*"FAQPage"[\s\S]*?\}\s*\]\s*\}', faqs_schema + '\n    ]\n  }', c)
    
    # Inject CSS
    c = c.replace('<style>', '<style>' + get_tools_common_css())

    # Write file
    with open(fpath, 'w', encoding='utf-8') as fp:
        fp.write(c)
    print('Upgraded: tools/eligibility-checker.html')

def upgrade_pan_aadhaar():
    fpath = os.path.join(TOOLS_DIR, 'pan-aadhaar-conflict-resolver.html')
    with open(fpath, 'r', encoding='utf-8') as fp:
        c = fp.read()

    faqs_schema = '''      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "पैन और आधार लिंक करने की आधिकारिक अंतिम तिथि और पेनल्टी कितनी है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "आयकर विभाग के नियमों के अनुसार 30 जून 2023 के बाद पैन-आधार लिंक करने पर ₹1,000 का विलंब शुल्क चालान (Challan ITNS 280 / Major Head 0021 / Minor Head 500) भरना अनिवार्य है।"
            }
          },
          {
            "@type": "Question",
            "name": "इनऑपरेटिव पैन कार्ड (Inoperative PAN) को दोबारा एक्टिव कैसे करें?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "eportal.incometax.gov.in पर ₹1000 का चालान भरें। भुगतान के 4-5 कार्यदिवसों बाद 'Link Aadhaar' विकल्प में जाकर आधार ओटीपी सत्यापन पूरा करें। 30 दिनों में पैन पुनः सक्रिय (Operative) हो जाता है।"
            }
          },
          {
            "@type": "Question",
            "name": "पैन और आधार में नाम या जन्मतिथि अलग होने पर लिंकिंग कैसे पूरी करें?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "यदि दोनों दस्तावेजों में नाम या डीओबी का अंतर है तो पहले Protean (NSDL) / UTIITSL पोर्टल पर पैन सुधारें या आधार सेवा केंद्र पर आधार सही कराएं। दोनों में डेटा एक समान होने के बाद ही लिंक होगा।"
            }
          },
          {
            "@type": "Question",
            "name": "क्या बायोमेट्रिक फिंगरप्रिंट द्वारा पैन-आधार लिंक हो सकता है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "हाँ, यदि नाम में मामूली वर्तनी भेद के कारण ओटीपी लिंकिंग फेल हो रही है, तो अधिकृत NSDL / UTIITSL पैन सुविधा केंद्र पर ₹50 बायोमेट्रिक चार्ज देकर फिंगरप्रिंट ऑथेंटिकेशन से लिंकिंग कराई जा सकती है।"
            }
          },
          {
            "@type": "Question",
            "name": "पैन कार्ड इनऑपरेटिव होने पर क्या-क्या नुकसान होते हैं?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "इनऑपरेटिव पैन होने पर: (1) कोई भी इनकम टैक्स रिफंड नहीं मिलेगा, (2) टीडीएस/टीसीएस 20% की उच्च दर पर कटेगा, (3) बैंक में ₹50,000 से अधिक जमा/निकासी या एफडी में रुकावट आएगी, (4) डीमैट और म्यूचुअल फंड ट्रांजेक्शन रुक जाएंगे।"
            }
          },
          {
            "@type": "Question",
            "name": "किन व्यक्तियों को पैन-आधार लिंक करने से छूट (Exemption) प्राप्त है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "(1) अनिवासी भारतीय (NRI), (2) 80 वर्ष से अधिक आयु के सुपर सीनियर सिटीजन, (3) असम, मेघालय और जम्मू-कश्मीर के निवासी, और (4) जो भारत के नागरिक नहीं हैं।"
            }
          },
          {
            "@type": "Question",
            "name": "चालान ₹1000 भरने के बाद भी 'Link Aadhaar' में पेंडिंग क्यों दिखा रहा है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "एनएसडीएल और ई-फाइलिंग पोर्टल के बीच बैंक चालान सत्यापन में 3 से 7 दिन लगते हैं। चालान की BSR कोड और Challan No. रसीद संभाल कर रखें और 4 दिन बाद पुनः eportal पर लॉगिन करें।"
            }
          },
          {
            "@type": "Question",
            "name": "शादी के बाद महिला का सरनेम बदलने पर पैन-आधार लिंक कैसे करें?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "विवाह प्रमाण पत्र या संयुक्त हलफनामे के आधार पर पहले पैन या आधार में से किसी एक में नाम अपडेट कराकर दोनों का नाम एक समान करें, तत्पश्चात लिंक करें।"
            }
          },
          {
            "@type": "Question",
            "name": "पैन-आधार लिंकिंग स्टेटस ऑनलाइन कैसे चेक करें?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "eportal.incometax.gov.in पर जाएं और 'Link Aadhaar Status' पर क्लिक करें। अपना पैन व आधार नंबर डालें; स्क्रीन पर 'Your PAN is already linked to given Aadhaar' संदेश दिखाई देगा।"
            }
          },
          {
            "@type": "Question",
            "name": "क्या दो पैन कार्ड होने पर आधार से दोनों लिंक हो सकते हैं?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "नहीं, एक आधार से केवल एक पैन ही लिंक हो सकता है। दो पैन कार्ड रखना गैरकानूनी है (धारा 272B के तहत ₹10,000 जुर्माना)। अतिरिक्त पैन कार्ड को तुरंत आयकर विभाग में सरेंडर करें।"
            }
          }
        ]
      }'''

    c = re.sub(r'\{\s*"@type":\s*"FAQPage"[\s\S]*?\}\s*\]\s*\}', faqs_schema + '\n    ]\n  }', c)
    c = c.replace('<style>', '<style>' + get_tools_common_css())

    with open(fpath, 'w', encoding='utf-8') as fp:
        fp.write(c)
    print('Upgraded: tools/pan-aadhaar-conflict-resolver.html')

def inject_subscribe_widget_to_all_tools_and_flagships():
    targets = glob.glob(os.path.join(TOOLS_DIR, '*.html')) + glob.glob(os.path.join(ROOT, 'service', '*.html')) + glob.glob(os.path.join(ROOT, 'states', '*.html'))
    count = 0
    for tf in targets:
        with open(tf, 'r', encoding='utf-8') as f:
            c = f.read()
        if 'subscribe-widget' in c:
            continue

        # Insert subscribe widget before Telegram banner or before </main>
        if '<!-- VIP TELEGRAM BANNER -->' in c:
            sub_html = '    <!-- EMAIL & WHATSAPP SCHEME ALERT SUBSCRIBE WIDGET -->\n    <div id="subscribe-widget" style="margin: 40px 0;"></div>\n\n    <!-- VIP TELEGRAM BANNER -->'
            c = c.replace('<!-- VIP TELEGRAM BANNER -->', sub_html)
        elif '</main>' in c:
            sub_html = '    <!-- EMAIL & WHATSAPP SCHEME ALERT SUBSCRIBE WIDGET -->\n    <div id="subscribe-widget" style="margin: 40px 0;"></div>\n  </main>'
            c = c.replace('</main>', sub_html)

        # Add subscribe.js script if not present
        if 'assets/js/subscribe.js' not in c:
            if 'assets/js/services-data.js' in c:
                c = c.replace('assets/js/services-data.js"></script>', 'assets/js/services-data.js"></script>\n  <script src="../assets/js/subscribe.js"></script>')
            elif 'assets/js/main.js' in c:
                c = c.replace('assets/js/main.js"></script>', 'assets/js/main.js"></script>\n  <script src="../assets/js/subscribe.js"></script>')

        with open(tf, 'w', encoding='utf-8') as f:
            f.write(c)
        count += 1
        print(f'Injected subscribe widget into: {os.path.basename(tf)}')
    print(f'Injected subscribe widget into {count} pages.')

def upgrade_all_other_tools():
    upgrade_eligibility_checker()
    upgrade_pan_aadhaar()
    inject_subscribe_widget_to_all_tools_and_flagships()

if __name__ == '__main__':
    upgrade_all_other_tools()
    print('All tools upgraded and subscribe widgets injected successfully!')