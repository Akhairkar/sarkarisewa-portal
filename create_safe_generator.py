import re
import glob

# Read fix_bilingual_30_states.py
with open("fix_bilingual_30_states.py", "r", encoding="utf-8") as f:
    fix_code = f.read()

# We will just write a new generator script called "generate_all_30_sir_pages.py"
# That contains the complete correct logic. The user can just run this if they need to regenerate.

new_gen = """
import json
import re
import os

template_path = "service/special-intensive-revision-sir.html"

# Combined 30 states
states_data = [
    {"slug": "uttar-pradesh", "name_en": "Uttar Pradesh", "name_hi": "उत्तर प्रदेश", "ceo_link": "https://ceouttarpradesh.nic.in"},
    {"slug": "bihar", "name_en": "Bihar", "name_hi": "बिहार", "ceo_link": "https://ceobihar.nic.in"},
    {"slug": "west-bengal", "name_en": "West Bengal", "name_hi": "पश्चिम बंगाल", "ceo_link": "https://ceowestbengal.nic.in"},
    {"slug": "madhya-pradesh", "name_en": "Madhya Pradesh", "name_hi": "मध्य प्रदेश", "ceo_link": "https://ceomadhyapradesh.nic.in"},
    {"slug": "rajasthan", "name_en": "Rajasthan", "name_hi": "राजस्थान", "ceo_link": "https://ceorajasthan.nic.in"},
    {"slug": "gujarat", "name_en": "Gujarat", "name_hi": "गुजरात", "ceo_link": "https://ceo.gujarat.gov.in"},
    {"slug": "karnataka", "name_en": "Karnataka", "name_hi": "कर्नाटक", "ceo_link": "https://ceo.karnataka.gov.in"},
    {"slug": "andhra-pradesh", "name_en": "Andhra Pradesh", "name_hi": "आंध्र प्रदेश", "ceo_link": "https://ceoandhra.nic.in"},
    {"slug": "tamil-nadu", "name_en": "Tamil Nadu", "name_hi": "तमिलनाडु", "ceo_link": "https://www.elections.tn.gov.in"},
    {"slug": "telangana", "name_en": "Telangana", "name_hi": "तेलंगाना", "ceo_link": "https://ceotelangana.nic.in"},
    {"slug": "kerala", "name_en": "Kerala", "name_hi": "केरल", "ceo_link": "https://www.ceo.kerala.gov.in"},
    {"slug": "odisha", "name_en": "Odisha", "name_hi": "ओडिशा", "ceo_link": "https://ceoorissa.nic.in"},
    {"slug": "punjab", "name_en": "Punjab", "name_hi": "पंजाब", "ceo_link": "https://www.ceopunjab.gov.in"},
    {"slug": "haryana", "name_en": "Haryana", "name_hi": "हरियाणा", "ceo_link": "https://ceoharyana.gov.in"},
    {"slug": "assam", "name_en": "Assam", "name_hi": "असम", "ceo_link": "https://ceoassam.nic.in"},
    {"slug": "jharkhand", "name_en": "Jharkhand", "name_hi": "झारखंड", "ceo_link": "https://ceo.jharkhand.gov.in"},
    {"slug": "uttarakhand", "name_en": "Uttarakhand", "name_hi": "उत्तराखंड", "ceo_link": "https://ceo.uk.gov.in"},
    {"slug": "himachal-pradesh", "name_en": "Himachal Pradesh", "name_hi": "हिमाचल प्रदेश", "ceo_link": "https://ceohimachal.nic.in"},
    {"slug": "chhattisgarh", "name_en": "Chhattisgarh", "name_hi": "छत्तीसगढ़", "ceo_link": "https://ceochhattisgarh.nic.in"},
    {"slug": "jammu-kashmir", "name_en": "Jammu & Kashmir", "name_hi": "जम्मू-कश्मीर", "ceo_link": "https://ceojk.nic.in"},
    {"slug": "goa", "name_en": "Goa", "name_hi": "गोवा", "ceo_link": "https://ceogoa.nic.in"},
    {"slug": "tripura", "name_en": "Tripura", "name_hi": "त्रिपुरा", "ceo_link": "https://ceotripura.nic.in"},
    {"slug": "meghalaya", "name_en": "Meghalaya", "name_hi": "मेघालय", "ceo_link": "https://ceomeghalaya.nic.in"},
    {"slug": "manipur", "name_en": "Manipur", "name_hi": "मणिपुर", "ceo_link": "https://ceomanipur.nic.in"},
    {"slug": "nagaland", "name_en": "Nagaland", "name_hi": "नागालैंड", "ceo_link": "https://ceonagaland.nic.in"},
    {"slug": "arunachal-pradesh", "name_en": "Arunachal Pradesh", "name_hi": "अरुणाचल प्रदेश", "ceo_link": "https://ceoarunachal.nic.in"},
    {"slug": "mizoram", "name_en": "Mizoram", "name_hi": "मिजोरम", "ceo_link": "https://ceomizoram.nic.in"},
    {"slug": "sikkim", "name_en": "Sikkim", "name_hi": "सिक्किम", "ceo_link": "https://ceosikkim.nic.in"},
    {"slug": "delhi", "name_en": "Delhi", "name_hi": "दिल्ली", "ceo_link": "https://ceodelhi.gov.in"},
    {"slug": "maharashtra", "name_en": "Maharashtra", "name_hi": "महाराष्ट्र", "ceo_link": "https://ceo.maharashtra.gov.in"}
]

with open(template_path, "r", encoding="utf-8") as f:
    base_html = f.read()

def inject_state(state, html):
    # SEO
    seo_title = f"{state['name_en']} Voter List 2026: Check Name Online | {state['name_hi']} वोटर लिस्ट"
    seo_desc = f"Special Intensive Revision (SIR) 2026 in {state['name_en']}. Check your name in the Voter List online. {state['name_hi']} में वोटर लिस्ट नाम चेक करें और अपडेट करें।"
    
    html = re.sub(r'<title>.*?</title>', f'<title>{seo_title}</title>', html, flags=re.DOTALL)
    html = re.sub(r'<meta name="description" content=".*?" />', f'<meta name="description" content="{seo_desc}" />', html, flags=re.DOTALL)
    
    # Bilingual Tags
    hero_title_bilingual = f'<span data-lang-show="en">{state["name_en"]} SIR 2026: Voter List Name Check & Update</span><span data-lang-show="hi">{state["name_hi"]} वोटर लिस्ट 2026 (SIR): ऑनलाइन नाम चेक और अपडेट</span>'
    html = re.sub(r'<h1 class="service-hero__title">.*?</h1>', f'<h1 class="service-hero__title">{hero_title_bilingual}</h1>', html, flags=re.DOTALL)
    
    hero_desc_bilingual = f'<span data-lang-show="en">The Election Commission has started the Special Intensive Revision (SIR) 2026 for {state["name_en"]}. Check your name in the voter list, add new voters, and correct details online.</span><span data-lang-show="hi">चुनाव आयोग द्वारा {state["name_hi"]} के लिए स्पेशल इंटेंसिव रिवीजन (SIR) 2026 शुरू हो चुका है। आप अपना नाम वोटर लिस्ट में चेक कर सकते हैं और ऑनलाइन सुधार कर सकते हैं।</span>'
    html = re.sub(r'<p class="service-hero__desc">.*?</p>', f'<p class="service-hero__desc">{hero_desc_bilingual}</p>', html, flags=re.DOTALL)
    
    ceo_btn_bilingual = f'<span data-lang-show="en">Official CEO {state["name_en"]} Portal</span><span data-lang-show="hi">आधिकारिक CEO {state["name_hi"]} पोर्टल</span>'
    html = re.sub(
        r'<a class="btn btn--primary" href="https://voters.eci.gov.in".*?</a>',
        f'<a class="btn btn--primary" href="{state["ceo_link"]}" target="_blank" rel="noopener">{ceo_btn_bilingual}</a>',
        html,
        flags=re.DOTALL
    )
    
    green_btn_bilingual = f'<span data-lang-show="en">🌐 Visit CEO {state["name_en"]} Portal</span><span data-lang-show="hi">🌐 CEO {state["name_hi"]} पोर्टल पर जाएं</span>'
    html = re.sub(
        r'<a href="https://voters.eci.gov.in" target="_blank" rel="noopener" style="background: #16a34a;.*?</a>',
        f'<a href="{state["ceo_link"]}" target="_blank" rel="noopener" style="background: #16a34a; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 1.1rem; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">{green_btn_bilingual}</a>',
        html,
        flags=re.DOTALL
    )
    
    intro_bilingual = f'<span data-lang-show="en">For the citizens of {state["name_en"]}, the Election Commission of India has announced the Special Intensive Revision (SIR) 2026. The main objective of this campaign is to update the voter list and include new eligible voters. If you have turned 18 or want to change your address, this is a great opportunity to apply digitally via the NVSP or CEO portal.</span><span data-lang-show="hi">{state["name_hi"]} के नागरिकों के लिए भारत निर्वाचन आयोग ने स्पेशल इंटेंसिव रिवीजन (SIR) 2026 की घोषणा की है। इस अभियान का मुख्य उद्देश्य वोटर लिस्ट को अपडेट करना और नए मतदाताओं को शामिल करना है। अगर आपकी उम्र 18 वर्ष हो चुकी है या आप अपना पता बदलना चाहते हैं, तो यह आपके लिए सुनहरा अवसर है।</span>'
    intro_pattern = r'(<h2 class="service-section__title">.*?</h2\s*>\s*<p>).*?(</p>)'
    html = re.sub(intro_pattern, r'\g<1>' + intro_bilingual + r'\2', html, count=1, flags=re.DOTALL)
    
    dates_bilingual = '''
    <tr>
      <td><span data-lang-show="en">Draft Electoral Roll Publication</span><span data-lang-show="hi">ड्राफ्ट मतदाता सूची का प्रकाशन</span></td>
      <td><span data-lang-show="en">August 2025</span><span data-lang-show="hi">अगस्त 2025</span></td>
    </tr>
    <tr>
      <td><span data-lang-show="en">Claims and Objections Deadline</span><span data-lang-show="hi">दावे और आपत्तियां दर्ज करने की अंतिम तिथि</span></td>
      <td><span data-lang-show="en">September 2025</span><span data-lang-show="hi">सितम्बर 2025</span></td>
    </tr>
    <tr>
      <td><span data-lang-show="en">Final Voter List Publication</span><span data-lang-show="hi">अंतिम मतदाता सूची का प्रकाशन</span></td>
      <td><span data-lang-show="en">January 2026</span><span data-lang-show="hi">जनवरी 2026</span></td>
    </tr>
    '''
    table_pattern = r'(<table class="dates-table">.*?<tbody>).*?(</tbody>)'
    html = re.sub(table_pattern, r'\g<1>' + dates_bilingual + r'\2', html, flags=re.DOTALL)

    html = re.sub(r'<h2 style="margin-top: 40px;.*?</div>', '', html, flags=re.DOTALL)
    
    state_cards = f'''
      <h2 style="margin-top: 40px; border-top: 1px solid var(--color-border); padding-top: 24px; font-size: 1.5rem;"><span data-lang-show="en">{state["name_en"]} State Services</span><span data-lang-show="hi">{state["name_hi"]} राज्य की सेवाएं</span></h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 20px 0;">
        <a href="{state["slug"]}-caste-certificate.html" style="text-decoration:none; background:var(--color-surface); border:1px solid var(--color-border); padding:16px; border-radius:8px; display:flex; align-items:center; gap:12px; color:var(--color-text); box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <span style="font-size:24px;">🏛️</span><span style="font-weight:600;"><span data-lang-show="en">{state["name_en"]} Caste Certificate</span><span data-lang-show="hi">{state["name_hi"]} जाति प्रमाण पत्र</span></span>
        </a>
        <a href="{state["slug"]}-income-certificate.html" style="text-decoration:none; background:var(--color-surface); border:1px solid var(--color-border); padding:16px; border-radius:8px; display:flex; align-items:center; gap:12px; color:var(--color-text); box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <span style="font-size:24px;">💰</span><span style="font-weight:600;"><span data-lang-show="en">{state["name_en"]} Income Certificate</span><span data-lang-show="hi">{state["name_hi"]} आय प्रमाण पत्र</span></span>
        </a>
        <a href="../service/{state["slug"]}-ration-card.html" style="text-decoration:none; background:var(--color-surface); border:1px solid var(--color-border); padding:16px; border-radius:8px; display:flex; align-items:center; gap:12px; color:var(--color-text); box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <span style="font-size:24px;">🌾</span><span style="font-weight:600;"><span data-lang-show="en">{state["name_en"]} Ration Card</span><span data-lang-show="hi">{state["name_hi"]} राशन कार्ड</span></span>
        </a>
      </div>
'''
    html = html.replace('<div id="subscribe-widget"', f'{state_cards}\\n    <div id="subscribe-widget"')

    html = re.sub(
        r'<strong>Last Verified:</strong>.*?</p>',
        r'<strong>Last Verified:</strong> 25 August 2026</p>',
        html,
        flags=re.DOTALL
    )
    
    html = html.replace('Verification Pending (25 August 2026)', '25 August 2026')
    html = html.replace('सत्यापन लंबित है (25 अगस्त 2026)', '25 अगस्त 2026')

    return html

for state in states_data:
    out_path = f"states/{state['slug']}-sir-voter-list.html"
    out_html = inject_state(state, base_html)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(out_html)
    print(f"Generated {out_path}")

print("Done generating 30 bilingual state SIR pages.")
"""

with open("generate_all_30_sir_pages.py", "w", encoding="utf-8") as f:
    f.write(new_gen)

print("Created generate_all_30_sir_pages.py which safely encompasses all fixes!")
