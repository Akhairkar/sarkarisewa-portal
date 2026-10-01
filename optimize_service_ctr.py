import os
import glob
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

# High CTR patterns for national schemes and services
ctr_mappings = {
    "pm-kisan.html": {
        "title": "PM Kisan 2026: 19th Kist Beneficiary Status Check & e-KYC Online",
        "desc": "PM Kisan Samman Nidhi 2026: ₹2,000 agali kist ka status check karein, e-KYC complete karein aur naye aavedan ka official direct link pmkisan.gov.in yahan dekhein."
    },
    "ayushman-bharat.html": {
        "title": "Ayushman Card Apply Online 2026: ₹5 Lakh Free Hospital List & e-KYC",
        "desc": "PM Jan Arogya Yojana (PMJAY) Ayushman Card kaise banwayein? ₹5 Lakh free ilaj, eligible beneficiary list, hospital search aur card download direct link."
    },
    "e-shram-card.html": {
        "title": "E-Shram Card Registration 2026: Online Apply, ₹2 Lakh Bima & Download",
        "desc": "E-Shram card online registration 2026: eligibility, monthly pension & ₹2 lakh accidental bima benefit. Form apply karein aur UAN card turant download karein."
    },
    "pan-card.html": {
        "title": "PAN Card Apply Online 2026: NSDL/UTIITSL New Form 49A & e-PAN",
        "desc": "Naya PAN Card online kaise banayein? NSDL aur UTIITSL direct link, documents required, ₹107 fee aur 10-minute me Instant e-PAN download karne ka tarika."
    },
    "passport.html": {
        "title": "Passport Apply Online 2026: Passport Seva Appointment & Fee Check",
        "desc": "Fresh Passport online application process 2026: Tatkaal vs Normal, fee details, document verification checklist aur PSK appointment slot booking direct link."
    },
    "driving-licence.html": {
        "title": "Driving Licence Apply Online 2026: Parivahan LL Slot & Test Booking",
        "desc": "Learner's aur Permanent Driving Licence online apply karein. Sarathi Parivahan portal link, RTO exam mock test, fees aur slot booking details."
    },
    "sukanya-samriddhi-yojana.html": {
        "title": "Sukanya Samriddhi Yojana (SSY) 2026: 8.2% Interest & Maturity Calculator",
        "desc": "Sukanya Samriddhi Yojana 2026 rules: 8.2% tax-free interest, age limit, minimum deposit ₹250 aur ladki ke 21 saal par milne wala total maturity corpus."
    },
    "atal-pension-yojana.html": {
        "title": "Atal Pension Yojana (APY) 2026: Monthly ₹1000 - ₹5000 Pension Chart",
        "desc": "Atal Pension Yojana 2026 chart: monthly contribution table for ₹1,000 to ₹5,000 pension after 60 years age. Eligibility, tax benefits & bank apply link."
    },
    "pm-mudra-yojana.html": {
        "title": "PM Mudra Loan Apply Online 2026: Shishu, Kishor & Tarun Loan up to ₹20L",
        "desc": "PMMY Mudra Loan 2026: ₹50,000 se ₹20 Lakh tak collateral-free business loan. Bank eligibility, interest rates, documents checklist aur online apply form."
    },
    "pm-awas-yojana.html": {
        "title": "PM Awas Yojana (PMAY) 2026: Urban & Gramin New Beneficiary List",
        "desc": "Pradhan Mantri Awas Yojana 2026: ₹1.20 Lakh se ₹2.50 Lakh subsidy check karein. Gramin & Urban new list, eligibility criteria aur online aavedan process."
    },
    "pm-vishwakarma-yojana.html": {
        "title": "PM Vishwakarma Yojana 2026: ₹15,000 Toolkit & ₹3 Lakh Loan Apply",
        "desc": "PM Vishwakarma Scheme 2026: 18 trades ke artisans ke liye ₹15,000 free toolkit incentive, 5% interest loan aur free training stipend. Apply online link."
    },
    "pm-surya-ghar-muft-bijli.html": {
        "title": "PM Surya Ghar Muft Bijli 2026: ₹78,000 Solar Rooftop Subsidy Apply",
        "desc": "PM Surya Ghar Yojana 2026: 300 units free electricity aur ₹78,000 tak rooftop solar subsidy. Official portal registration, vendor list aur cost calculator."
    },
    "lakhpati-didi-yojana.html": {
        "title": "Lakhpati Didi Yojana 2026: Self Help Group Women Loan & Benefits",
        "desc": "Lakhpati Didi Scheme 2026: SHG mahilaon ke liye interest-free loan, business training aur ₹1 Lakh+ annual income guide. Eligibility aur apply process."
    },
    "mh-ladki-bahin-yojana.html": {
        "title": "Majhi Ladki Bahin Yojana 2026: ₹1,500 Monthly Beneficiary List Check",
        "desc": "Maharashtra Majhi Ladki Bahin Yojana 2026: ₹1,500 direct bank transfer status check, e-KYC process, documents required aur Nari Shakti Doot portal link."
    }
}

service_files = glob.glob('service/*.html')
print(f"Total central service files: {len(service_files)}")

updated_count = 0

for filepath in service_files:
    fname = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    # Get specific CTR mapping or build smart default
    if fname in ctr_mappings:
        opt = ctr_mappings[fname]
        title = opt['title']
        desc = opt['desc']
    else:
        # Extract existing title
        match_t = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE)
        cur_t = match_t.group(1).replace(' — SarkariSewa India', '').replace(' | SarkariSewa India', '').strip() if match_t else fname.replace('.html', '').replace('-', ' ').title()
        
        # Build CTR title
        if '2026' not in cur_t:
            title = f"{cur_t} 2026: Online Apply, Eligibility & Documents Guide"
        else:
            title = f"{cur_t} | Official Portal & Documents Guide"
            
        desc = f"{cur_t} 2026 online apply process, eligibility criteria, required documents, fee details aur direct official government portal link."

    # Keep title under 65 chars
    if len(title) > 65:
        title = title.replace(" & Documents Guide", "").replace(" Online", "")
        
    canonical_url = f"https://sarkarisewaindia.com/service/{fname}"
    
    # Inject Title
    title_tag = f"<title>{title}</title>"
    if re.search(r'<title>.*?</title>', html, re.IGNORECASE | re.DOTALL):
        html = re.sub(r'<title>.*?</title>', title_tag, html, count=1, flags=re.IGNORECASE | re.DOTALL)
    else:
        html = re.sub(r'(<head.*?>)', r'\1\n' + title_tag, html, count=1, flags=re.IGNORECASE)

    # Inject Meta Description
    desc_tag = f'<meta name="description" content="{desc}"/>'
    if re.search(r'<meta\s+name=["\']description["\'][^>]*>', html, re.IGNORECASE):
        html = re.sub(r'<meta\s+name=["\']description["\'][^>]*>', desc_tag, html, count=1, flags=re.IGNORECASE)
    elif re.search(r'<meta\s+content=[^>]*name=["\']description["\'][^>]*>', html, re.IGNORECASE):
        html = re.sub(r'<meta\s+content=[^>]*name=["\']description["\'][^>]*>', desc_tag, html, count=1, flags=re.IGNORECASE)
    else:
        html = re.sub(r'(<title>.*?</title>)', r'\1\n' + desc_tag, html, count=1, flags=re.IGNORECASE | re.DOTALL)

    # Inject Canonical
    can_tag = f'<link rel="canonical" href="{canonical_url}"/>'
    if re.search(r'<link\s+rel=["\']canonical["\'][^>]*>', html, re.IGNORECASE):
        html = re.sub(r'<link\s+rel=["\']canonical["\'][^>]*>', can_tag, html, count=1, flags=re.IGNORECASE)
    elif re.search(r'<link\s+href=[^>]*rel=["\']canonical["\'][^>]*>', html, re.IGNORECASE):
        html = re.sub(r'<link\s+href=[^>]*rel=["\']canonical["\'][^>]*>', can_tag, html, count=1, flags=re.IGNORECASE)
    else:
        html = re.sub(r'(<title>.*?</title>)', r'\1\n' + can_tag, html, count=1, flags=re.IGNORECASE | re.DOTALL)

    # OpenGraph Tags
    og_title = f'<meta property="og:title" content="{title}"/>'
    og_desc = f'<meta property="og:description" content="{desc}"/>'
    og_url = f'<meta property="og:url" content="{canonical_url}"/>'
    
    html = re.sub(r'<meta\s+property=["\']og:title["\'][^>]*>', og_title, html, count=1, flags=re.IGNORECASE)
    html = re.sub(r'<meta\s+content=[^>]*property=["\']og:title["\'][^>]*>', og_title, html, count=1, flags=re.IGNORECASE)
    
    html = re.sub(r'<meta\s+property=["\']og:description["\'][^>]*>', og_desc, html, count=1, flags=re.IGNORECASE)
    html = re.sub(r'<meta\s+content=[^>]*property=["\']og:description["\'][^>]*>', og_desc, html, count=1, flags=re.IGNORECASE)

    html = re.sub(r'<meta\s+property=["\']og:url["\'][^>]*>', og_url, html, count=1, flags=re.IGNORECASE)
    html = re.sub(r'<meta\s+content=[^>]*property=["\']og:url["\'][^>]*>', og_url, html, count=1, flags=re.IGNORECASE)

    # Fix broken relative links if any
    if '../../tools/' in html:
        html = html.replace('../../tools/', '../tools/')
    if '../../service/' in html:
        html = html.replace('../../service/', '../service/')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
        
    updated_count += 1

print(f"Upgraded {updated_count} central service guide pages with High-CTR snippets and canonicals.")
