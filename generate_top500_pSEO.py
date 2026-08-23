import os
import re
import json

# Define the 14 Most Searched Services
# 14 Services * 36 States = 504 Pages exactly!
services = [
    {
        "slug": "ration-card", "name": "Ration Card",
        "docs": "Aadhaar Card, Income Certificate, Passport Size Photo, Residential Proof, Bank Passbook",
        "hi_name": "राशन कार्ड",
        "hi_docs": "आधार कार्ड, आय प्रमाण पत्र, पासपोर्ट साइज फोटो, निवास प्रमाण, बैंक पासबुक"
    },
    {
        "slug": "birth-certificate", "name": "Birth Certificate",
        "docs": "Parents' Aadhaar Card, Hospital Discharge Summary, Marriage Certificate (if applicable)",
        "hi_name": "जन्म प्रमाण पत्र",
        "hi_docs": "माता-पिता का आधार कार्ड, अस्पताल से डिस्चार्ज समरी, विवाह प्रमाण पत्र (यदि लागू हो)"
    },
    {
        "slug": "income-certificate", "name": "Income Certificate",
        "docs": "Salary Slip / ITR, Aadhaar Card, Ration Card, Self Declaration Form",
        "hi_name": "आय प्रमाण पत्र",
        "hi_docs": "सैलरी स्लिप / ITR, आधार कार्ड, राशन कार्ड, स्व-घोषणा पत्र"
    },
    {
        "slug": "caste-certificate", "name": "Caste Certificate",
        "docs": "Aadhaar Card, Family Tree (Vanshavali), Old Caste Certificate of Relative, Domicile Proof",
        "hi_name": "जाति प्रमाण पत्र",
        "hi_docs": "आधार कार्ड, वंशावली, रिश्तेदार का पुराना जाति प्रमाण पत्र, मूल निवास प्रमाण"
    },
    {
        "slug": "domicile-certificate", "name": "Domicile Certificate",
        "docs": "Aadhaar Card, Utility Bills (Electricity/Water), Rent Agreement / Property Papers, Birth Certificate",
        "hi_name": "मूल निवास प्रमाण पत्र",
        "hi_docs": "आधार कार्ड, बिजली/पानी का बिल, रेंट एग्रीमेंट / संपत्ति के कागज, जन्म प्रमाण पत्र"
    },
    {
        "slug": "driving-licence", "name": "Driving Licence",
        "docs": "Learner's Licence, Aadhaar Card, Medical Certificate (Form 1A), Passport Photo",
        "hi_name": "ड्राइविंग लाइसेंस",
        "hi_docs": "लर्निंग लाइसेंस, आधार कार्ड, मेडिकल प्रमाण पत्र (फॉर्म 1A), पासपोर्ट फोटो"
    },
    {
        "slug": "voter-id-card", "name": "Voter ID Card",
        "docs": "Aadhaar Card / PAN Card, Address Proof, Age Proof (18+), Passport Size Photo",
        "hi_name": "वोटर आईडी कार्ड",
        "hi_docs": "आधार कार्ड / पैन कार्ड, पता प्रमाण, आयु प्रमाण (18+), पासपोर्ट साइज फोटो"
    },
    {
        "slug": "pan-card-apply", "name": "PAN Card Application",
        "docs": "Aadhaar Card (Linked with Mobile Number), Passport Size Photograph, Signature",
        "hi_name": "पैन कार्ड आवेदन",
        "hi_docs": "आधार कार्ड (मोबाइल नंबर से लिंक), पासपोर्ट साइज फोटो, हस्ताक्षर"
    },
    {
        "slug": "ayushman-card", "name": "Ayushman Bharat Card",
        "docs": "Ration Card, Aadhaar Card, Active Mobile Number, Family ID",
        "hi_name": "आयुष्मान भारत कार्ड",
        "hi_docs": "राशन कार्ड, आधार कार्ड, एक्टिव मोबाइल नंबर, फैमिली आईडी"
    },
    {
        "slug": "e-shram-card", "name": "e-Shram Card",
        "docs": "Aadhaar Card, Bank Account Details (IFSC Code), Mobile Number linked with Aadhaar",
        "hi_name": "ई-श्रम कार्ड",
        "hi_docs": "आधार कार्ड, बैंक खाता विवरण (IFSC कोड), आधार से लिंक मोबाइल नंबर"
    },
    {
        "slug": "marriage-certificate", "name": "Marriage Certificate",
        "docs": "Wedding Invitation Card, Joint Photo, Age Proof of Bride & Groom, Address Proof, Affidavits",
        "hi_name": "विवाह प्रमाण पत्र",
        "hi_docs": "शादी का कार्ड, संयुक्त फोटो, वर-वधू का आयु प्रमाण, पता प्रमाण, शपथ पत्र"
    },
    {
        "slug": "pm-kisan-samman-nidhi", "name": "PM Kisan Samman Nidhi",
        "docs": "Land Record (Khasra/Khatauni), Aadhaar Card, Bank Account Details, Active Mobile Number",
        "hi_name": "पीएम किसान सम्मान निधि",
        "hi_docs": "भूमि रिकॉर्ड (खसरा/खतौनी), आधार कार्ड, बैंक खाता विवरण, एक्टिव मोबाइल नंबर"
    },
    {
        "slug": "old-age-pension", "name": "Old Age Pension Scheme",
        "docs": "Age Proof (60+), Aadhaar Card, Income Certificate, Bank Passbook",
        "hi_name": "वृद्धावस्था पेंशन योजना",
        "hi_docs": "आयु प्रमाण (60+), आधार कार्ड, आय प्रमाण पत्र, बैंक पासबुक"
    },
    {
        "slug": "disability-certificate", "name": "Disability Certificate",
        "docs": "Medical Report from Govt Hospital, Aadhaar Card, Blood Group Report, Passport Photos",
        "hi_name": "विकलांगता प्रमाण पत्र",
        "hi_docs": "सरकारी अस्पताल से मेडिकल रिपोर्ट, आधार कार्ड, ब्लड ग्रुप रिपोर्ट, पासपोर्ट फोटो"
    }
]

states = [
    ("andhra-pradesh", "Andhra Pradesh", "आंध्र प्रदेश"), ("arunachal-pradesh", "Arunachal Pradesh", "अरुणाचल प्रदेश"),
    ("assam", "Assam", "असम"), ("bihar", "Bihar", "बिहार"), ("chandigarh", "Chandigarh", "चंडीगढ़"),
    ("chhattisgarh", "Chhattisgarh", "छत्तीसगढ़"), ("dadra-nagar-haveli-daman-diu", "Dadra Nagar Haveli Daman Diu", "दादरा नगर हवेली दमन दीव"),
    ("delhi", "Delhi", "दिल्ली"), ("goa", "Goa", "गोवा"), ("gujarat", "Gujarat", "गुजरात"),
    ("haryana", "Haryana", "हरियाणा"), ("himachal-pradesh", "Himachal Pradesh", "हिमाचल प्रदेश"),
    ("jammu-kashmir", "Jammu Kashmir", "जम्मू कश्मीर"), ("jharkhand", "Jharkhand", "झारखंड"),
    ("karnataka", "Karnataka", "कर्नाटक"), ("kerala", "Kerala", "केरल"), ("ladakh", "Ladakh", "लद्दाख"),
    ("lakshadweep", "Lakshadweep", "लक्षद्वीप"), ("madhya-pradesh", "Madhya Pradesh", "मध्य प्रदेश"),
    ("maharashtra", "Maharashtra", "महाराष्ट्र"), ("manipur", "Manipur", "मणिपुर"),
    ("meghalaya", "Meghalaya", "मेघालय"), ("mizoram", "Mizoram", "मिजोरम"), ("nagaland", "Nagaland", "नागालैंड"),
    ("odisha", "Odisha", "ओडिशा"), ("puducherry", "Puducherry", "पुडुचेरी"), ("punjab", "Punjab", "पंजाब"),
    ("rajasthan", "Rajasthan", "राजस्थान"), ("sikkim", "Sikkim", "सिक्किम"), ("tamil-nadu", "Tamil Nadu", "तमिलनाडु"),
    ("telangana", "Telangana", "तेलंगाना"), ("tripura", "Tripura", "त्रिपुरा"), ("uttar-pradesh", "Uttar Pradesh", "उत्तर प्रदेश"),
    ("uttarakhand", "Uttarakhand", "उत्तराखंड"), ("west-bengal", "West Bengal", "पश्चिम बंगाल"), ("andaman-nicobar", "Andaman Nicobar", "अंडमान निकोबार")
]

# Shared Base UI
def get_base_html():
    with open("service/jan-aushadhi-store-locator.html", "r", encoding="utf-8") as f:
        base = f.read()
    match_main = re.search(r'(<main[^>]*>)', base)
    match_end = re.search(r'(</main>)', base)
    return base[:match_main.start()] + '<main class="container">', base[match_end.end():]

header_base, footer_base = get_base_html()

# Related Tools Widget (Thickens content and avoids orphan pages)
tools_widget = '''
<div style="margin-top: 50px; padding-top: 30px; border-top: 1px solid var(--color-border);">
    <h3 style="margin-bottom: 20px; font-size: 1.5rem; text-align: center;">Related Services & Important Tools</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 20px; text-align: center;">
        <a href="../tools/eligibility-checker.html" style="text-decoration: none; padding: 20px; border-radius: 12px; background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: block;">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">✅</div>
            <strong style="color: var(--color-text);">Check Eligibility</strong>
        </a>
        <a href="../tools/document-checklist.html" style="text-decoration: none; padding: 20px; border-radius: 12px; background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: block;">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">📑</div>
            <strong style="color: var(--color-text);">Document List</strong>
        </a>
        <a href="../tools/csc-locator.html" style="text-decoration: none; padding: 20px; border-radius: 12px; background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: block;">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">📍</div>
            <strong style="color: var(--color-text);">Find Nearest CSC</strong>
        </a>
        <a href="../tools/status-troubleshooter.html" style="text-decoration: none; padding: 20px; border-radius: 12px; background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: block;">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">🔍</div>
            <strong style="color: var(--color-text);">Check Status</strong>
        </a>
    </div>
</div>
'''

sitemap_urls = []
os.makedirs("states", exist_ok=True)

# Generate 504 Pages
for state_slug, state_name, state_hi in states:
    for svc in services:
        file_name = f"{state_slug}-{svc['slug']}.html"
        file_path = f"states/{file_name}"
        
        title_en = f"Apply {state_name} {svc['name']} Online 2026: Status & Required Documents"
        desc_en = f"Complete guide to apply for {svc['name']} in {state_name}. Check eligibility, direct portal links, fees, and required documents ({svc['docs']}). Read in Hindi & English."
        
        cur_header = header_base.replace('href="../', 'href="../').replace('src="../', 'src="../')
        cur_header = re.sub(r'<title>.*?</title>', f'<title>{title_en}</title>', cur_header)
        cur_header = re.sub(r'<meta name="description" content=".*?">', f'<meta name="description" content="{desc_en}">', cur_header)
        
        # Build Thick Content Body
        content = f'''
        <div style="margin-bottom: 20px; font-size: 0.9rem; color: var(--color-text-muted);">
            <a href="../index.html" style="color: var(--color-primary); text-decoration: none;">Home</a> / 
            <a href="index.html" style="color: var(--color-primary); text-decoration: none;">State Services</a> / 
            <a href="{state_slug}.html" style="color: var(--color-primary); text-decoration: none;">{state_name}</a> / 
            <strong>{svc['name']}</strong>
        </div>
        
        <div class="nav-badge" style="margin-bottom: 12px; display: inline-block; background: var(--color-primary-light); color: var(--color-primary); padding: 5px 12px; border-radius: 20px; font-weight: bold;">{state_name} Government Services</div>
        
        <h1 style="color: var(--color-text); margin-bottom: 15px; font-size: 2.2rem;">{state_name} {svc['name']}: Apply Online, Fees & Status (2026)</h1>
        
        <div style="display: flex; gap: 20px; margin-bottom: 30px;">
            <div style="flex: 1; background: var(--color-surface); padding: 25px; border-radius: 12px; border-top: 4px solid var(--color-primary); box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <h2 style="font-size: 1.5rem; margin-bottom: 15px;">Overview (English)</h2>
                <p style="font-size: 1.1rem; line-height: 1.6; color: var(--color-text-muted); margin-bottom: 15px;">
                    The <strong>{svc['name']}</strong> is an essential government document for the residents of <strong>{state_name}</strong>. This document helps citizens access various state and central government welfare schemes, scholarships, and official services. You can apply for it online via the official {state_name} e-District portal or by visiting your nearest Common Service Center (CSC).
                </p>
                <h3 style="font-size: 1.2rem; margin-bottom: 10px;">Required Documents Checklist:</h3>
                <ul style="line-height: 1.8; color: var(--color-text-muted); margin-left: 20px;">
                    { "".join([f"<li>{doc.strip()}</li>" for doc in svc['docs'].split(",")]) }
                </ul>
            </div>
            
            <div style="flex: 1; background: var(--color-surface); padding: 25px; border-radius: 12px; border-top: 4px solid #27ae60; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <h2 style="font-size: 1.5rem; margin-bottom: 15px;">पूरी जानकारी (Hindi)</h2>
                <p style="font-size: 1.1rem; line-height: 1.6; color: var(--color-text-muted); margin-bottom: 15px;">
                    <strong>{state_hi}</strong> के नागरिकों के लिए <strong>{svc['hi_name']}</strong> एक अत्यंत महत्वपूर्ण सरकारी दस्तावेज है। इस कार्ड / प्रमाण पत्र की मदद से आप राज्य और केंद्र सरकार की विभिन्न लाभकारी योजनाओं और स्कॉलरशिप का लाभ उठा सकते हैं। आप {state_hi} ई-डिस्ट्रिक्ट (e-District) पोर्टल से ऑनलाइन आवेदन कर सकते हैं या अपने नजदीकी सीएससी (CSC) केंद्र जा सकते हैं।
                </p>
                <h3 style="font-size: 1.2rem; margin-bottom: 10px;">आवश्यक दस्तावेज (Documents):</h3>
                <ul style="line-height: 1.8; color: var(--color-text-muted); margin-left: 20px;">
                    { "".join([f"<li>{doc.strip()}</li>" for doc in svc['hi_docs'].split(",")]) }
                </ul>
            </div>
        </div>
        
        <div style="margin-top: 40px;">
            <h2 style="font-size: 1.8rem; margin-bottom: 20px;">Frequently Asked Questions (FAQs)</h2>
            <div style="margin-bottom: 15px; padding: 20px; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-border);">
                <strong style="font-size: 1.1rem;">1. What is the application fee for {svc['name']} in {state_name}?</strong>
                <p style="margin-top: 10px; color: var(--color-text-muted);">The official government fee usually ranges from ₹20 to ₹50 depending on the {state_name} portal guidelines. However, CSC centers may charge an additional nominal service fee (around ₹30-₹50) for filling out the form online.</p>
            </div>
            <div style="margin-bottom: 15px; padding: 20px; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-border);">
                <strong style="font-size: 1.1rem;">2. {state_hi} में {svc['hi_name']} बनने में कितना समय लगता है? (Processing Time)</strong>
                <p style="margin-top: 10px; color: var(--color-text-muted);">आमतौर पर {state_hi} सरकार के नियमों के अनुसार, आवेदन जमा करने के बाद इसे बनने में 15 से 30 कार्य दिवस (Working Days) का समय लगता है। आप ऑनलाइन पोर्टल से अपना स्टेटस ट्रैक कर सकते हैं।</p>
            </div>
            <div style="margin-bottom: 15px; padding: 20px; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-border);">
                <strong style="font-size: 1.1rem;">3. How can I check the status of my {svc['name']}?</strong>
                <p style="margin-top: 10px; color: var(--color-text-muted);">You can track your application status directly through the {state_name} e-District or official department website using the Application Number/Reference ID you received via SMS during registration.</p>
            </div>
        </div>
        
        {tools_widget}
        '''
        
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(cur_header + content + footer_base)
            
        sitemap_urls.append(f"https://sarkarisewaindia.com/states/{file_name}")

# Update Sitemap
try:
    with open("sitemap.xml", "r", encoding="utf-8") as f:
        sitemap = f.read()
    
    # Clean up old states urls
    sitemap = re.sub(r'<url>\s*<loc>https://sarkarisewaindia\.com/states/.*?</loc>.*?</url>', '', sitemap, flags=re.DOTALL)
    
    new_xml = ""
    for url in sitemap_urls:
        new_xml += f"\\n  <url>\\n    <loc>{url}</loc>\\n    <changefreq>weekly</changefreq>\\n    <priority>0.8</priority>\\n  </url>"
            
    if new_xml:
        sitemap = sitemap.replace("</urlset>", new_xml + "\\n</urlset>")
        # Clean up empty lines
        sitemap = re.sub(r'\\n\\s*\\n', '\\n', sitemap)
        with open("sitemap.xml", "w", encoding="utf-8") as f:
            f.write(sitemap)
except Exception as e:
    print(f"Sitemap error: {e}")

print(f"Successfully generated 504 highly optimized pages for 14 services across 36 states with UTF-8 encoding!")
