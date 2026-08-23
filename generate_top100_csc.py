import os
import random
import re
import xml.etree.ElementTree as ET

# Pool of Unique Titles
titles = [
    "Lakhs of CSC Centers Directory: Find Nearest e-Seva in {city}",
    "{city} CSC Locator: Aadhaar & Common Service Centers Near Me",
    "Maha e-Seva & CSC Kendra in {city}, {state} - Full Verified List",
    "सीएससी केंद्र {city}: Find Nearest Common Service Center",
    "{city} में अपना नजदीकी CSC / ग्राहक सेवा केंद्र खोजें"
]

# Pool of Intro Paragraphs (Spintax style)
intros = [
    "Welcome to the official directory for <strong>CSC Centers in {city}</strong>. Whether you need to update your Aadhaar card, apply for a new PAN card, or register for government schemes like PM Kisan, finding a verified Common Service Center (e-Seva Kendra) near you in {state} has never been easier. Use our map and list below to get contact details and WhatsApp numbers of authorized Village Level Entrepreneurs (VLEs).",
    
    "Looking for a <strong>Maha e-Seva Kendra or CSC in {city}</strong>? You are in the right place! Our comprehensive database lists hundreds of active government service centers in {city}, {state}. From birth certificates to Ayushman Bharat registrations, authorized VLEs are ready to assist you. Browse the verified listings below to find the closest center to your home.",
    
    "Save time by finding the nearest <strong>Common Service Center (CSC) in {city}, {state}</strong> online. Our directory provides exact locations, WhatsApp contact details, and directions to help you access essential digital India services. Whether it's banking, insurance, or e-Shram card printing, locate your local e-Seva Kendra instantly."
]

# Pool of FAQs
faqs_pool = [
    ("What services are available at a CSC center in {city}?", "Centers in {city} offer Aadhaar updates, PAN card applications, passport services, banking, e-Shram registration, and state-specific certificate (income/caste) applications."),
    ("How do I find the WhatsApp number of a CSC VLE in {city}?", "Simply click on the 'WhatsApp' button on the verified center cards below. If a center in {city} is claimed by the owner, their direct contact is unlocked."),
    ("Are Maha e-Seva Kendras and CSCs the same in {state}?", "Yes, in {state}, CSCs are often referred to as Maha e-Seva Kendras or Jan Seva Kendras, providing identical Digital India government services."),
    ("What are the standard timings for CSCs in {city}?", "Most centers in {city} operate from 9:00 AM to 6:00 PM, Monday to Saturday. However, some independent VLEs may have extended timings."),
    ("Can I update my Aadhaar mobile number at any {city} CSC?", "Not all centers have Aadhaar update machines. It is best to WhatsApp or call the specific {city} center from our list to confirm before visiting."),
    ("Is there any fee to check CSC locations in {city}?", "No, using our SarkariSewaIndia directory to find CSC centers in {city} is 100% free.")
]

# Related Services HTML Block
related_services = '''
<div style="margin-top: 50px; padding-top: 30px; border-top: 1px solid var(--color-border);">
    <h3 style="margin-bottom: 20px; font-size: 1.5rem; text-align: center;">Related Government Services & Tools</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; text-align: center;">
        <a href="../../tools/eligibility-checker.html" style="text-decoration: none; padding: 15px; border-radius: 12px; background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: block; transition: transform 0.2s;">
            <div style="font-size: 2rem; margin-bottom: 10px;">✅</div>
            <strong style="color: var(--color-text);">Eligibility Checker</strong>
        </a>
        <a href="../../tools/document-checklist.html" style="text-decoration: none; padding: 15px; border-radius: 12px; background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: block; transition: transform 0.2s;">
            <div style="font-size: 2rem; margin-bottom: 10px;">📄</div>
            <strong style="color: var(--color-text);">Document Checklist</strong>
        </a>
        <a href="../../income-tax-return-filing.html" style="text-decoration: none; padding: 15px; border-radius: 12px; background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: block; transition: transform 0.2s;">
            <div style="font-size: 2rem; margin-bottom: 10px;">💰</div>
            <strong style="color: var(--color-text);">ITR Filing</strong>
        </a>
        <a href="../../janani-suraksha-yojana.html" style="text-decoration: none; padding: 15px; border-radius: 12px; background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: block; transition: transform 0.2s;">
            <div style="font-size: 2rem; margin-bottom: 10px;">👶</div>
            <strong style="color: var(--color-text);">Maternity Schemes</strong>
        </a>
    </div>
</div>
'''

# The Top 100 Cities (State mapped)
top_cities = {
    "uttar-pradesh": ["agra", "aligarh", "allahabad", "bareilly", "firozabad", "ghaziabad", "gorakhpur", "jhansi", "kanpur", "lucknow", "meerut", "moradabad", "noida", "saharanpur", "varanasi"],
    "maharashtra": ["amravati", "aurangabad", "bhiwandi", "jalgaon", "kalyan", "kolhapur", "mumbai", "nagpur", "nanded", "nashik", "pune", "sangli", "solapur"],
    "gujarat": ["ahmedabad", "bhavnagar", "jamnagar", "rajkot", "surat", "vadodara"],
    "rajasthan": ["ajmer", "bikaner", "jaipur", "jodhpur", "kota"],
    "punjab": ["amritsar", "jalandhar", "ludhiana"],
    "west-bengal": ["asansol", "durgapur", "kolkata", "siliguri"],
    "karnataka": ["belagavi", "bengaluru", "gulbarga", "hubballi", "mangaluru", "mysuru"],
    "chhattisgarh": ["bhilai", "bilaspur", "raipur"],
    "madhya-pradesh": ["bhopal", "gwalior", "indore", "jabalpur", "ujjain"],
    "odisha": ["bhubaneswar", "cuttack", "rourkela"],
    "jharkhand": ["bokaro", "dhanbad", "jamshedpur", "ranchi"],
    "chandigarh": ["chandigarh"],
    "tamil-nadu": ["chennai", "coimbatore", "erode", "madurai", "salem", "tiruchirappalli", "tirunelveli"],
    "uttarakhand": ["dehradun"],
    "delhi": ["delhi"],
    "haryana": ["faridabad", "gurugram", "rohtak"],
    "andhra-pradesh": ["guntur", "kakinada", "kurnool", "nellore", "rajahmundry", "vijayawada", "visakhapatnam"],
    "assam": ["guwahati"],
    "telangana": ["hyderabad", "warangal"],
    "jammu-kashmir": ["jammu", "srinagar"],
    "kerala": ["kannur", "kochi", "kollam", "kozhikode", "malappuram", "thiruvananthapuram", "thrissur"],
    "bihar": ["patna"],
    "puducherry": ["puducherry"]
}

# Base UI
def get_base_html():
    with open("service/jan-aushadhi-store-locator.html", "r", encoding="utf-8") as f:
        base = f.read()
    match_main = re.search(r'(<main[^>]*>)', base)
    match_end = re.search(r'(</main>)', base)
    return base[:match_main.start()] + '<main class="container">', base[match_end.end():]

header_base, footer_base = get_base_html()

sitemap_urls = []

for state_slug, cities in top_cities.items():
    state_name = state_slug.replace("-", " ").title()
    
    # We will update the State page with links to these cities
    state_page_links = []
    
    for city_slug in cities:
        city_name = city_slug.replace("-", " ").title()
        
        # 1. Random Selections
        title_template = random.choice(titles)
        title = title_template.format(city=city_name, state=state_name)
        
        intro_template = random.choice(intros)
        intro = intro_template.format(city=city_name, state=state_name)
        
        selected_faqs = random.sample(faqs_pool, 3)
        faqs_html = '<div style="margin-top: 40px;"><h3 style="margin-bottom: 20px;">Frequently Asked Questions</h3>'
        for q, a in selected_faqs:
            faqs_html += f'<div style="margin-bottom: 15px; padding: 15px; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-border);"><strong>Q: {q.format(city=city_name, state=state_name)}</strong><p style="margin-top: 10px; color: var(--color-text-muted);">{a.format(city=city_name, state=state_name)}</p></div>'
        faqs_html += '</div>'
        
        # 2. Paths
        depth = "../../../"
        file_path = f"service/csc-locator/{state_slug}/{city_slug}.html"
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        
        cur_header = header_base.replace('href="../', f'href="{depth}').replace('src="../', f'src="{depth}')
        # Inject SEO Title & Description
        cur_header = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', cur_header)
        cur_header = re.sub(r'<meta name="description" content=".*?">', f'<meta name="description" content="Find the nearest CSC Center and Maha e-Seva Kendra in {city_name}, {state_name}. Get exact addresses and WhatsApp numbers.">', cur_header)
        
        cur_footer = footer_base.replace('href="../', f'href="{depth}').replace('src="../', f'src="{depth}')
        # Inject the javascript hook in footer
        if "csc-supabase-ui.js" not in cur_footer:
            cur_footer = cur_footer.replace("</body>", f'<script src="{depth}assets/js/csc-supabase-ui.js"></script>\\n</body>')
        
        # 3. Build Page Content
        content = f'''
        <div style="margin-bottom: 20px; font-size: 0.9rem; color: var(--color-text-muted);">
            <a href="../../../index.html" style="color: var(--color-primary); text-decoration: none;">Home</a> / 
            <a href="../../tools/csc-locator.html" style="color: var(--color-primary); text-decoration: none;">CSC Locator</a> / 
            <a href="../{state_slug}.html" style="color: var(--color-primary); text-decoration: none;">{state_name}</a> / 
            <strong>{city_name}</strong>
        </div>
        
        <h1 style="color: var(--color-text); margin-bottom: 15px; font-size: 2.2rem;">CSC Centers in {city_name}, {state_name}</h1>
        <p style="font-size: 1.1rem; line-height: 1.6; color: var(--color-text-muted); margin-bottom: 30px;">
            {intro}
        </p>
        
        <div id="csc-results-container" data-location="{city_name}">
            <p style="text-align: center; color: var(--color-text-muted); padding: 20px;">Fetching nearest centers securely...</p>
        </div>
        
        {faqs_html}
        {related_services}
        '''
        
        # 4. Save HTML
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(cur_header + content + cur_footer)
        
        # Track for State Page Link
        state_page_links.append(f'<a href="{state_slug}/{city_slug}.html" style="padding: 10px 20px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-primary); text-decoration: none; font-weight: 500;">{city_name}</a>')
        
        # Add to Sitemap
        sitemap_urls.append(f"https://sarkarisewaindia.com/service/csc-locator/{state_slug}/{city_slug}.html")

    # 5. Inject links into the State Page
    state_file = f"service/csc-locator/{state_slug}.html"
    if os.path.exists(state_file):
        with open(state_file, "r", encoding="utf-8") as f:
            state_html = f.read()
            
        links_grid = f'<div style="margin-top: 40px;"><h3>Top Cities in {state_name}</h3><div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px; margin-top: 15px;">' + "".join(state_page_links) + '</div></div>'
        
        # Inject before results container or at end of main
        if 'id="csc-results-container"' in state_html:
            state_html = state_html.replace('<div id="csc-results-container"', links_grid + '\\n<div id="csc-results-container"')
        
        with open(state_file, "w", encoding="utf-8") as f:
            f.write(state_html)

# 6. Update Sitemap
try:
    with open("sitemap.xml", "r", encoding="utf-8") as f:
        sitemap = f.read()
    
    new_xml = ""
    for url in sitemap_urls:
        if url not in sitemap:
            new_xml += f"\\n  <url>\\n    <loc>{url}</loc>\\n    <changefreq>weekly</changefreq>\\n    <priority>0.7</priority>\\n  </url>"
            
    if new_xml:
        sitemap = sitemap.replace("</urlset>", new_xml + "\\n</urlset>")
        with open("sitemap.xml", "w", encoding="utf-8") as f:
            f.write(sitemap)
except Exception as e:
    print(f"Sitemap error: {e}")

print("100 Unique City Pages generated safely with internal linking and SEO.")
