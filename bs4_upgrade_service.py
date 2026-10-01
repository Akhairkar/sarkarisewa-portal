import os
import glob
import json
import sys
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

# State names mapping
state_names_hi = {
    "ap": "आंध्र प्रदेश", "as": "असम", "br": "बिहार", "cg": "छत्तीसगढ़",
    "dl": "दिल्ली", "gj": "गुजरात", "hr": "हरियाणा", "hp": "हिमाचल प्रदेश",
    "jh": "झारखंड", "ka": "कर्नाटक", "kl": "केरल", "mp": "मध्य प्रदेश",
    "mh": "महाराष्ट्र", "od": "ओडिशा", "pb": "पंजाब", "rj": "राजस्थान",
    "tg": "तेलंगाना", "tn": "तमिलनाडु", "up": "उत्तर प्रदेश", "uk": "उत्तराखंड",
    "wb": "पश्चिम बंगाल", "goa": "गोवा", "manipur": "मणिपुर", "meghalaya": "मेघालय",
    "mizoram": "मिजोरम", "nagaland": "नागालैंड", "sikkim": "सिक्किम", "tripura": "त्रिपुरा",
    "arunachal": "अरुणाचल प्रदेश"
}

state_names_en = {
    "ap": "Andhra Pradesh", "as": "Assam", "br": "Bihar", "cg": "Chhattisgarh",
    "dl": "Delhi", "gj": "Gujarat", "hr": "Haryana", "hp": "Himachal Pradesh",
    "jh": "Jharkhand", "ka": "Karnataka", "kl": "Kerala", "mp": "Madhya Pradesh",
    "mh": "Maharashtra", "od": "Odisha", "pb": "Punjab", "rj": "Rajasthan",
    "tg": "Telangana", "tn": "Tamil Nadu", "up": "Uttar Pradesh", "uk": "Uttarakhand",
    "wb": "West Bengal", "goa": "Goa", "manipur": "Manipur", "meghalaya": "Meghalaya",
    "mizoram": "Mizoram", "nagaland": "Nagaland", "sikkim": "Sikkim", "tripura": "Tripura",
    "arunachal": "Arunachal Pradesh"
}

# Official portal URLs mapping
official_links_map = {
    "pan-card.html": [
        {"name": "Protean (NSDL) PAN Portal", "url": "https://www.protean-tinpan.com/services/pan/pan-index.html"},
        {"name": "UTIITSL PAN Portal", "url": "https://www.utiitsl.com/PAN/pan.html"},
        {"name": "Income Tax e-Filing Portal", "url": "https://www.incometax.gov.in"}
    ],
    "passport.html": [
        {"name": "Passport Seva Official Portal", "url": "https://www.passportindia.gov.in/"}
    ],
    "voter-id-card.html": [
        {"name": "ECI Voters' Services Portal (NVSP)", "url": "https://voters.eci.gov.in/"}
    ],
    "ration-card.html": [
        {"name": "National Food Security Portal (NFSA)", "url": "https://nfsa.gov.in/"}
    ],
    "pm-kisan.html": [
        {"name": "PM Kisan Samman Nidhi Portal", "url": "https://pmkisan.gov.in/"}
    ],
    "pm-awas-yojana.html": [
        {"name": "PMAY Urban Portal", "url": "https://pmaymis.gov.in/"},
        {"name": "PMAY Gramin Portal", "url": "https://pmayg.nic.in/"}
    ],
    "ayushman-bharat.html": [
        {"name": "Ayushman Bharat PM-JAY Beneficiary Portal", "url": "https://beneficiary.nha.gov.in/"}
    ],
    "digilocker.html": [
        {"name": "DigiLocker Official Portal", "url": "https://www.digilocker.gov.in/"}
    ],
    "epfo.html": [
        {"name": "EPFO Member Passbook & UAN Portal", "url": "https://unifiedportal-mem.epfindia.gov.in/memberinterface/"}
    ],
    "smart-card-driving-license.html": [
        {"name": "Sarathi Parivahan Official Portal", "url": "https://sarathi.parivahan.gov.in/"}
    ],
    "arunachal-cmaay-scheme.html": [{"name": "CMAAY Portal", "url": "https://cmaay.arunachal.gov.in/"}],
    "arunachal-deen-dayal-upadhyaya-bunkar-yojana.html": [{"name": "Arunachal Govt Portal", "url": "https://arunachalpradesh.gov.in/"}],
    "arunachal-dulari-kanya-scheme.html": [{"name": "Arunachal Health & Family Welfare", "url": "https://arunachalpradesh.gov.in/"}],
    "goa-dayanand-social-security-scheme--dsss-.html": [{"name": "Goa Online Services", "url": "https://goaonline.gov.in/"}],
    "goa-deen-dayal-swasthya-seva-yojana--ddssy-.html": [{"name": "DDSSY Portal Goa", "url": "https://goaonline.gov.in/"}],
    "goa-griha-aadhar-scheme.html": [{"name": "Goa Online Portal", "url": "https://goaonline.gov.in/"}],
    "hp-himcare-scheme.html": [{"name": "HIMCARE Health Portal", "url": "https://www.hpsbys.in/"}],
    "hp-mukhya-mantri-swawalamban-yojana.html": [{"name": "MMSY HP Portal", "url": "https://mmsy.hp.gov.in/"}],
    "hp-sahara-yojana.html": [{"name": "HP Sahara Portal", "url": "https://hpsahara.hp.gov.in/"}],
    "india-post-gds-recruitment-2026.html": [{"name": "India Post GDS Online Portal", "url": "https://indiapostgdsonline.gov.in/"}],
    "indian-navy-agniveer-ssr-recruitment-2026.html": [{"name": "Join Indian Navy Official", "url": "https://www.joinindiannavy.gov.in/"}],
    "manipur-chief-minister-widow-pension-scheme.html": [{"name": "Manipur Social Welfare", "url": "https://manipur.gov.in/"}],
    "manipur-cmht-scheme.html": [{"name": "CMHT Manipur Health Portal", "url": "https://cmhtmanipur.gov.in/"}],
    "manipur-lairik-yengminnasi-scheme.html": [{"name": "Manipur Education Portal", "url": "https://manipur.gov.in/"}],
    "meghalaya-focus-scheme.html": [{"name": "Meghalaya FOCUS Portal", "url": "https://focus.meghalaya.gov.in/"}],
    "meghalaya-mhis-scheme.html": [{"name": "Meghalaya MHIS Portal", "url": "https://mhis.org.in/"}],
    "meghalaya-yess-meghalaya.html": [{"name": "YESS Meghalaya Portal", "url": "https://yessmeghalaya.in/"}],
    "mizoram-bpl-housing-scheme.html": [{"name": "Mizoram UD&PA Portal", "url": "https://mizoram.gov.in/"}],
    "mizoram-chief-minister-rural-housing-scheme.html": [{"name": "Mizoram Rural Development", "url": "https://mizoram.gov.in/"}],
    "mizoram-sedp-policy.html": [{"name": "Mizoram SEDP Portal", "url": "https://sedp.mizoram.gov.in/"}],
    "nagaland-chief-minister-micro-finance-initiative.html": [{"name": "Nagaland CMMFI Portal", "url": "https://cmmfi.nagaland.gov.in/"}],
    "nagaland-cmhis-scheme.html": [{"name": "Nagaland CMHIS Health Portal", "url": "https://cmhis.nagaland.gov.in/"}],
    "nagaland-nagaland-health-project.html": [{"name": "Nagaland Health Project (NHP)", "url": "https://nhp.nagaland.gov.in/"}],
    "rbi-grade-b-officer-recruitment-2026.html": [{"name": "RBI Official Opportunities Portal", "url": "https://www.rbi.org.in/"}],
    "sikkim-aama-yojana.html": [{"name": "Sikkim Social Welfare", "url": "https://sikkim.gov.in/"}],
    "sikkim-sgay-yojana.html": [{"name": "Sikkim Garib Awas Yojana", "url": "https://sikkim.gov.in/"}],
    "sikkim-vatsalya-yojana.html": [{"name": "Sikkim Health & Family Welfare", "url": "https://sikkim.gov.in/"}],
    "ssc-cgl-recruitment-2026.html": [{"name": "Staff Selection Commission (SSC)", "url": "https://ssc.gov.in/"}],
    "tripura-mukhyamantri-matru-pushti-uphaar.html": [{"name": "Tripura Social Welfare", "url": "https://tripura.gov.in/"}],
    "tripura-vande-tripura.html": [{"name": "Vande Tripura Education Channel", "url": "https://tripura.gov.in/"}],
    "tripura-yuba-yogayog-yojana.html": [{"name": "BMS Tripura Portal", "url": "https://bms.tripura.gov.in/"}],
    "upsc-cse-recruitment-2027.html": [{"name": "UPSC Official Portal", "url": "https://upsc.gov.in/"}],
    "itr-penalty-calculator.html": [{"name": "Income Tax e-Filing Late Filing Portal", "url": "https://www.incometax.gov.in/"}],
    "mpbcdc-direct-loan-yojana.html": [{"name": "MPBCDC Official Portal", "url": "https://mpbcdc.maharashtra.gov.in/"}],
    "mpbcdc-seed-capital-yojana.html": [{"name": "MPBCDC Official Portal", "url": "https://mpbcdc.maharashtra.gov.in/"}],
    "mpbcdc-subsidy-yojana.html": [{"name": "MPBCDC Official Portal", "url": "https://mpbcdc.maharashtra.gov.in/"}],
    "mpbcdc-yojana.html": [{"name": "MPBCDC Official Portal", "url": "https://mpbcdc.maharashtra.gov.in/"}],
    "pan-aadhaar-conflict-resolver.html": [{"name": "Income Tax e-Filing Link Aadhaar Portal", "url": "https://www.incometax.gov.in/iec/foportal/"}]
}

# Collect all service files
all_service_files = glob.glob('service/*.html')
service_basenames = [os.path.basename(f) for f in all_service_files if os.path.basename(f) != 'service.html']

def get_service_card_info(fname):
    name = fname.replace('.html', '').replace('-', ' ').title()
    icon = "📄"
    if "income" in fname: icon = "💰"
    elif "caste" in fname or "community" in fname: icon = "📜"
    elif "residence" in fname or "domicile" in fname or "nativity" in fname: icon = "🏠"
    elif "ration" in fname: icon = "🍚"
    elif "pension" in fname or "vridha" in fname or "vayo" in fname: icon = "👴"
    elif "kanya" in fname or "ladli" in fname or "lakshmir" in fname or "subhadra" in fname or "mahila" in fname: icon = "🌸"
    elif "health" in fname or "ayushman" in fname or "swasthya" in fname or "mhis" in fname or "himcare" in fname: icon = "🏥"
    elif "awas" in fname or "housing" in fname or "bpl" in fname: icon = "🏡"
    elif "driving" in fname or "rc" in fname or "parivahan" in fname: icon = "🚗"
    elif "pan" in fname or "aadhaar" in fname or "voter" in fname or "card" in fname: icon = "💳"
    elif "kisan" in fname or "fasal" in fname or "krishi" in fname: icon = "🌾"
    elif "job" in fname or "recruitment" in fname or "ssc" in fname or "upsc" in fname or "rrb" in fname or "ibps" in fname: icon = "💼"
    return icon, name

# Group services by state or national
state_groups = {}
national_groups = []

for fname in service_basenames:
    prefix = fname.split('-')[0]
    matched_st = None
    for st_k in state_names_hi:
        if fname.startswith(f"{st_k}-"):
            matched_st = st_k
            break
    if matched_st:
        state_groups.setdefault(matched_st, []).append(fname)
    else:
        national_groups.append(fname)

for fpath in all_service_files:
    fname = os.path.basename(fpath)
    if fname == 'service.html':
        continue

    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()

    soup = BeautifulSoup(content, 'html.parser')

    # 1. FIX OFFICIAL LINKS
    if fname in official_links_map:
        links_data = official_links_map[fname]
        
        # Check if official link section already exists in DOM
        existing_official = None
        for sec in soup.find_all('section', class_='service-section'):
            h2 = sec.find('h2')
            if h2 and 'आधिकारिक लिंक' in h2.get_text():
                existing_official = sec
                break
                
        new_official_html = '<section class="service-section" id="official-links-section">\n'
        new_official_html += '  <h2 class="service-section__title"><span class="icon">🔗</span> आधिकारिक लिंक (Official Links)</h2>\n'
        new_official_html += '  <ul class="link-list">\n'
        for l in links_data:
            new_official_html += f'    <li class="link-list__item">\n      <span class="link-list__label">{l["name"]}</span>\n      <a class="link-list__go" href="{l["url"]}" target="_blank" rel="noopener">Visit Portal &rarr;</a>\n    </li>\n'
        new_official_html += '  </ul>\n</section>'
        new_official_soup = BeautifulSoup(new_official_html, 'html.parser').section

        if existing_official:
            existing_official.replace_with(new_official_soup)
        else:
            svc_sections = soup.find('div', id='service-sections')
            if svc_sections:
                svc_sections.insert(0, new_official_soup)
            else:
                main_tag = soup.find('main')
                if main_tag:
                    main_tag.insert(0, new_official_soup)

    # 2. EXPAND THIN CONTENT & ADD FAQs IF MISSING
    body_text = soup.get_text(separator=' ', strip=True)
    word_count = len(body_text.split())
    has_faqs = bool(soup.find('details') or soup.find(class_='faq-list'))

    if word_count < 140 or not has_faqs:
        st_prefix = fname.split('-')[0]
        st_name_hi = state_names_hi.get(st_prefix, "राज्य / केंद्र सरकार")
        
        h1 = soup.find('h1')
        svc_name_hi = h1.get_text(strip=True) if h1 else fname.replace('.html', '').replace('-', ' ').title()

        depth_html = f'''
      <section class="service-section" id="apply-process-section">
        <h2 class="service-section__title"><span class="icon">📝</span> ऑनलाइन आवेदन प्रक्रिया (Step-by-Step Online Process)</h2>
        <ol class="steps-list" style="margin-left: 20px; line-height: 1.8;">
          <li><strong>आधिकारिक पोर्टल पर जाएं:</strong> राज्य सरकार के आधिकारिक ई-डिस्ट्रिक्ट / सेवा पोर्टल पर विजिट करें।</li>
          <li><strong>नागरिक पंजीकरण (Citizen Registration):</strong> पोर्टल पर मोबाइल नंबर और आधार OTP के माध्यम से लॉगिन आईडी बनाएं।</li>
          <li><strong>सेवा का चयन करें:</strong> होमपेज पर प्रमाण पत्र / कल्याणकारी योजना श्रेणी के अंतर्गत "{svc_name_hi}" चुनें।</li>
          <li><strong>आवेदन फॉर्म भरें:</strong> व्यक्तिगत विवरण, पता, आय/जाति विवरण व परिवार की जानकारी सही-सही दर्ज करें।</li>
          <li><strong>दस्तावेज़ अपलोड व शुल्क भुगतान:</strong> मांगे गए आवश्यक दस्तावेज़ (PDF/JPG) अपलोड करें और नाममात्र सरकारी शुल्क ऑनलाइन जमा करके पावती रसीद (Acknowledgement Receipt) डाउनलोड करें।</li>
        </ol>
      </section>

      <section class="service-section" id="validity-rules-section">
        <h2 class="service-section__title"><span class="icon">📅</span> वैधता एवं नवीनीकरण (Validity & Rules)</h2>
        <ul class="check-list" style="line-height: 1.7;">
          <li><strong>प्रमाणपत्र वैधता:</strong> डिजिटल रूप से जारी प्रमाण पत्र नियमानुसार 1 से 3 वर्ष अथवा जीवनपर्यंत मान्य होते हैं।</li>
          <li><strong>डिजिटल हस्ताक्षर:</strong> यह प्रमाण पत्र QR कोड और डिजिटल हस्ताक्षर युक्त होता है, अतः किसी भौतिक हस्ताक्षर या मोहर की आवश्यकता नहीं होती।</li>
          <li><strong>ट्रैकिंग सुविधा:</strong> आवेदन क्रमांक (Application Reference Number) द्वारा ऑनलाइन स्थिति कभी भी ट्रैक की जा सकती है।</li>
        </ul>
      </section>

      <section class="service-section" id="rejection-remedies-section">
        <h2 class="service-section__title"><span class="icon">⚠️</span> आवेदन अस्वीकृत होने के कारण व समाधान</h2>
        <ul class="check-list" style="line-height: 1.7;">
          <li><strong>अस्पष्ट दस्तावेज़:</strong> धुंधले या कटे हुए दस्तावेज़ अपलोड करने से फॉर्म निरस्त हो सकता है। हमेशा 100-200 KB में साफ़ स्कैन कॉपी लगाएं।</li>
          <li><strong>नाम या जन्मतिथि मिसमैच:</strong> आधार कार्ड और अन्य रिकॉर्ड में नाम की स्पेलिंग एक समान होनी चाहिए।</li>
          <li><strong>अपील का अधिकार:</strong> यदि आवेदन गलत कारण से खारिज हो, तो 30 दिनों के भीतर पोर्टल पर प्रथम अपीलीय अधिकारी को ऑनलाइन अपील दर्ज की जा सकती है।</li>
        </ul>
      </section>

      <section class="service-section" id="faqs-section">
        <h2 class="service-section__title"><span class="icon">❓</span> अक्सर पूछे जाने वाले सवाल (FAQs)</h2>
        <div class="faq-list">
          <details class="faq-item" style="margin-bottom: 12px; background: var(--color-bg-alt, #f8fafc); border: 1px solid var(--color-border, #e2e8f0); border-radius: 8px; padding: 12px 16px;">
            <summary style="font-weight: 600; cursor: pointer;">{svc_name_hi} बनने में कितना समय लगता है?</summary>
            <div style="margin-top: 8px; color: var(--color-text-muted); line-height: 1.6;">सामान्यतः आवेदन जमा करने के 7 से 15 कार्य दिवसों (Working Days) के भीतर सक्षम अधिकारी द्वारा प्रमाण पत्र जारी कर दिया जाता है।</div>
          </details>
          <details class="faq-item" style="margin-bottom: 12px; background: var(--color-bg-alt, #f8fafc); border: 1px solid var(--color-border, #e2e8f0); border-radius: 8px; padding: 12px 16px;">
            <summary style="font-weight: 600; cursor: pointer;">क्या इसके लिए जन सेवा केंद्र (CSC) जाना ज़रूरी है?</summary>
            <div style="margin-top: 8px; color: var(--color-text-muted); line-height: 1.6;">नहीं, आप घर बैठे आधिकारिक नागरिक पोर्टल से ऑनलाइन आवेदन कर सकते हैं। यदि ऑनलाइन आवेदन में कोई तकनीकी समस्या आए, तो नजदीकी CSC / लोक सेवा केंद्र की सहायता ले सकते हैं।</div>
          </details>
          <details class="faq-item" style="margin-bottom: 12px; background: var(--color-bg-alt, #f8fafc); border: 1px solid var(--color-border, #e2e8f0); border-radius: 8px; padding: 12px 16px;">
            <summary style="font-weight: 600; cursor: pointer;">प्रमाणपत्र बनने के बाद डाउनलोड कैसे करें?</summary>
            <div style="margin-top: 8px; color: var(--color-text-muted); line-height: 1.6;">आवेदन स्वीकृत होने पर आपके पंजीकृत मोबाइल पर SMS लिंक आता है। इसके अलावा आप पोर्टल पर अपना एप्लीकेशन नंबर डालकर सीधे PDF डाउनलोड कर सकते हैं।</div>
          </details>
        </div>
      </section>
'''
        depth_soup = BeautifulSoup(depth_html, 'html.parser')
        svc_sections = soup.find('div', id='service-sections')
        if svc_sections:
            for sec_node in depth_soup.find_all('section'):
                svc_sections.append(sec_node)
        else:
            main_tag = soup.find('main')
            if main_tag:
                for sec_node in depth_soup.find_all('section'):
                    main_tag.append(sec_node)

    # 3. BUILD AND REPLACE RELATED SERVICES GRID
    st_prefix = fname.split('-')[0]
    matched_st = None
    for st_k in state_names_hi:
        if fname.startswith(f"{st_k}-"):
            matched_st = st_k
            break

    if matched_st and matched_st in state_groups:
        candidates = [f for f in state_groups[matched_st] if f != fname]
    else:
        candidates = [f for f in national_groups if f != fname]

    selected = candidates[:4]
    if len(selected) < 4:
        for fb in ["pm-kisan.html", "ayushman-bharat.html", "pan-card.html", "e-shram-card.html", "pm-awas-yojana.html"]:
            if fb != fname and fb not in selected:
                selected.append(fb)
            if len(selected) >= 4:
                break

    state_label = state_names_hi.get(matched_st, "संबंधित")
    hub_link = f"../states/{state_names_en.get(matched_st, '').lower().replace(' ', '-')}.html" if matched_st in state_names_en else "../services.html"

    rel_grid_html = f'''
    <section class="service-section" id="related-services-grid-section" style="margin-top: 32px;">
      <h2 class="service-section__title"><span class="icon">📍</span> {state_label} की अन्य महत्वपूर्ण सेवाएं (Related Services)</h2>
      <div class="related-services-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; margin: 16px 0;">
'''
    for rel_f in selected:
        r_icon, r_name = get_service_card_info(rel_f)
        rel_grid_html += f'''        <a href="{rel_f}" class="related-card" style="display: flex; align-items: center; gap: 12px; padding: 14px; background: var(--color-bg-alt, #f8fafc); border: 1px solid var(--color-border, #e2e8f0); border-radius: 8px; text-decoration: none; color: inherit; font-weight: 500;">
          <span class="icon" style="font-size: 1.5rem;">{r_icon}</span>
          <span class="title" style="color: var(--color-primary, #1e40af);">{r_name} &rarr;</span>
        </a>\n'''

    rel_grid_html += f'''      </div>
      <p style="margin-top: 12px;"><a href="{hub_link}" style="color: var(--color-primary); font-weight: 600;">← {state_label} की सभी सेवाएं देखें</a></p>
    </section>'''

    rel_grid_soup = BeautifulSoup(rel_grid_html, 'html.parser').section

    # Find old related section to replace
    old_rel = None
    for sec in soup.find_all('section', class_='service-section'):
        h2 = sec.find('h2')
        if h2 and ('लोकप्रिय सेवाएं' in h2.get_text() or 'संबंधित सेवाएं' in h2.get_text() or 'Related Services' in h2.get_text()):
            old_rel = sec
            break
            
    if old_rel:
        old_rel.replace_with(rel_grid_soup)
    else:
        main_tag = soup.find('main')
        if main_tag:
            main_tag.append(rel_grid_soup)

    # 4. INJECT FAQPage SCHEMA
    faq_elements = soup.find_all('details')
    faq_items = []
    for det in faq_elements:
        summ = det.find('summary')
        if summ:
            q_text = summ.get_text(strip=True).replace('⌄', '').replace('^', '').strip()
            ans_div = det.find('div')
            ans_text = ans_div.get_text(strip=True) if ans_div else det.get_text(strip=True).replace(q_text, '').strip()
            if q_text and ans_text:
                faq_items.append({
                    "@type": "Question",
                    "name": q_text,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": ans_text
                    }
                })

    if faq_items:
        schema_tag = soup.find('script', attrs={'type': 'application/ld+json'})
        if schema_tag and schema_tag.string:
            try:
                s_json = json.loads(schema_tag.string)
                if "@graph" in s_json:
                    # remove old FAQPage if any to prevent duplicate
                    s_json['@graph'] = [item for item in s_json['@graph'] if item.get('@type') != 'FAQPage']
                    s_json['@graph'].append({
                        "@type": "FAQPage",
                        "mainEntity": faq_items
                    })
                    schema_tag.string = json.dumps(s_json, indent=2, ensure_ascii=False)
            except:
                pass

    # Save cleanly
    with open(fpath, 'w', encoding='utf-8') as fp:
        fp.write(str(soup))

print("✅ BeautifulSoup-based Service Module Upgrade Complete!")
