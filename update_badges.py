import os
import re

states = [
    {"slug": "andhra-pradesh", "name_en": "Andhra Pradesh", "name_hi": "आंध्र प्रदेश"},
    {"slug": "arunachal-pradesh", "name_en": "Arunachal Pradesh", "name_hi": "अरुणाचल प्रदेश"},
    {"slug": "assam", "name_en": "Assam", "name_hi": "असम"},
    {"slug": "bihar", "name_en": "Bihar", "name_hi": "बिहार"},
    {"slug": "chhattisgarh", "name_en": "Chhattisgarh", "name_hi": "छत्तीसगढ़"},
    {"slug": "goa", "name_en": "Goa", "name_hi": "गोवा"},
    {"slug": "gujarat", "name_en": "Gujarat", "name_hi": "गुजरात"},
    {"slug": "haryana", "name_en": "Haryana", "name_hi": "हरियाणा"},
    {"slug": "himachal-pradesh", "name_en": "Himachal Pradesh", "name_hi": "हिमाचल प्रदेश"},
    {"slug": "jharkhand", "name_en": "Jharkhand", "name_hi": "झारखंड"},
    {"slug": "karnataka", "name_en": "Karnataka", "name_hi": "कर्नाटक"},
    {"slug": "kerala", "name_en": "Kerala", "name_hi": "केरल"},
    {"slug": "madhya-pradesh", "name_en": "Madhya Pradesh", "name_hi": "मध्य प्रदेश"},
    {"slug": "maharashtra", "name_en": "Maharashtra", "name_hi": "महाराष्ट्र"},
    {"slug": "manipur", "name_en": "Manipur", "name_hi": "मणिपुर"},
    {"slug": "meghalaya", "name_en": "Meghalaya", "name_hi": "मेघालय"},
    {"slug": "mizoram", "name_en": "Mizoram", "name_hi": "मिजोरम"},
    {"slug": "nagaland", "name_en": "Nagaland", "name_hi": "नागालैंड"},
    {"slug": "odisha", "name_en": "Odisha", "name_hi": "ओडिशा"},
    {"slug": "punjab", "name_en": "Punjab", "name_hi": "पंजाब"},
    {"slug": "rajasthan", "name_en": "Rajasthan", "name_hi": "राजस्थान"},
    {"slug": "sikkim", "name_en": "Sikkim", "name_hi": "सिक्किम"},
    {"slug": "tamil-nadu", "name_en": "Tamil Nadu", "name_hi": "तमिलनाडु"},
    {"slug": "telangana", "name_en": "Telangana", "name_hi": "तेलंगाना"},
    {"slug": "tripura", "name_en": "Tripura", "name_hi": "त्रिपुरा"},
    {"slug": "uttar-pradesh", "name_en": "Uttar Pradesh", "name_hi": "उत्तर प्रदेश"},
    {"slug": "uttarakhand", "name_en": "Uttarakhand", "name_hi": "उत्तराखंड"},
    {"slug": "west-bengal", "name_en": "West Bengal", "name_hi": "पश्चिम बंगाल"},
    {"slug": "andaman-nicobar", "name_en": "Andaman and Nicobar Islands", "name_hi": "अंडमान और निकोबार द्वीप समूह"},
    {"slug": "chandigarh", "name_en": "Chandigarh", "name_hi": "चंडीगढ़"},
    {"slug": "dadra-nagar-haveli-daman-diu", "name_en": "Dadra & Nagar Haveli and Daman & Diu", "name_hi": "दादरा एवं नगर हवेली तथा दमन एवं दीव"},
    {"slug": "delhi", "name_en": "Delhi", "name_hi": "दिल्ली"},
    {"slug": "jammu-kashmir", "name_en": "Jammu and Kashmir", "name_hi": "जम्मू और कश्मीर"},
    {"slug": "ladakh", "name_en": "Ladakh", "name_hi": "लद्दाख"},
    {"slug": "lakshadweep", "name_en": "Lakshadweep", "name_hi": "लक्षद्वीप"},
    {"slug": "puducherry", "name_en": "Puducherry", "name_hi": "पुडुचेरी"}
]

for state in states:
    slug = state["slug"]
    name_en = state["name_en"]
    name_hi = state["name_hi"]
    
    filepath = f"service/jan-aushadhi/{slug}.html"
    if not os.path.exists(filepath):
        continue
        
    with open(filepath, "r", encoding="utf-8") as f:
        html = f.read()

    # The block we want to replace
    # We find the start of the <ul> right after <h2 id="senior-schemes"...>
    start_h2 = html.find('<h2 id="senior-schemes"')
    if start_h2 != -1:
        start_ul = html.find('<ul', start_h2)
        end_ul = html.find('</ul>', start_ul) + 5
        
        # We only want to replace if we found the list correctly and it hasn't been replaced yet
        if start_ul != -1 and "margin-top: 15px;" in html[start_ul:end_ul]:
            
            new_grid = f'''<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin-top: 20px; margin-bottom: 30px;">
        <a href="../../states/{slug}.html" style="display: flex; align-items: center; gap: 15px; padding: 16px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 10px; text-decoration: none; color: var(--color-text); transition: all 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.03);">
          <div style="font-size: 28px; background: var(--color-surface); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid var(--color-border);">🏛️</div>
          <div>
            <div style="font-weight: 600; color: var(--color-primary); font-size: 1.05rem;"><span data-lang-show="en">State Schemes</span><span data-lang-show="hi">राज्य की योजनाएं</span></div>
            <div style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 2px;"><span data-lang-show="en">Explore all benefits in {name_en}</span><span data-lang-show="hi">{name_hi} के सभी लाभ</span></div>
          </div>
        </a>

        <a href="../../category/health.html" style="display: flex; align-items: center; gap: 15px; padding: 16px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 10px; text-decoration: none; color: var(--color-text); transition: all 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.03);">
          <div style="font-size: 28px; background: var(--color-surface); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid var(--color-border);">🏥</div>
          <div>
            <div style="font-weight: 600; color: var(--color-primary); font-size: 1.05rem;"><span data-lang-show="en">Ayushman Card</span><span data-lang-show="hi">आयुष्मान कार्ड</span></div>
            <div style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 2px;"><span data-lang-show="en">Apply for free health insurance</span><span data-lang-show="hi">मुफ्त स्वास्थ्य बीमा आवेदन</span></div>
          </div>
        </a>

        <a href="../../tools/eligibility-checker.html" style="display: flex; align-items: center; gap: 15px; padding: 16px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 10px; text-decoration: none; color: var(--color-text); transition: all 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.03);">
          <div style="font-size: 28px; background: var(--color-surface); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid var(--color-border);">🧓</div>
          <div>
            <div style="font-weight: 600; color: var(--color-primary); font-size: 1.05rem;"><span data-lang-show="en">Pension Checker</span><span data-lang-show="hi">पेंशन चेक करें</span></div>
            <div style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 2px;"><span data-lang-show="en">Old age & widow pension eligibility</span><span data-lang-show="hi">वृद्धावस्था और विधवा पेंशन पात्रता</span></div>
          </div>
        </a>
      </div>'''

            html = html[:start_ul] + new_grid + html[end_ul:]
            
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(html)

print("Icons and badges updated for all 36 pages.")
