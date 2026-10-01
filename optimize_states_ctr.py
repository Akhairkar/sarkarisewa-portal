import sys
import os
import glob
import re
import json
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

# Load state-certificates data
with open('data/state-certificates.json', 'r', encoding='utf-8') as f:
    state_cert_data = json.load(f)

states_dict = state_cert_data.get('states', {})
certs_dict = state_cert_data.get('certificates', {})

# State slug aliases
state_aliases = {
    "up": "uttar-pradesh",
    "mh": "maharashtra",
    "br": "bihar",
    "rj": "rajasthan",
    "mp": "madhya-pradesh",
    "wb": "west-bengal",
    "gj": "gujarat",
    "ka": "karnataka",
    "tn": "tamil-nadu",
    "ts": "telangana",
    "ap": "andhra-pradesh",
    "kl": "kerala",
    "pb": "punjab",
    "hr": "haryana",
    "od": "odisha",
    "jh": "jharkhand",
    "ct": "chhattisgarh",
    "as": "assam",
    "uk": "uttarakhand",
    "hp": "himachal-pradesh",
    "dl": "delhi",
    "jk": "jammu-and-kashmir",
    "ga": "goa",
    "tr": "tripura",
    "mn": "manipur",
    "ml": "meghalaya",
    "mz": "mizoram",
    "nl": "nagaland",
    "sk": "sikkim",
    "ar": "arunachal-pradesh",
    "ch": "chandigarh",
    "py": "puducherry",
    "la": "ladakh",
    "an": "andaman-and-nicobar",
    "dn": "dadra-and-nagar-haveli"
}

def clean_name(slug):
    return slug.replace('-', ' ').title()

files = glob.glob('states/*.html')
print(f"Total state files found: {len(files)}")

updated_count = 0

for filepath in files:
    filename = os.path.basename(filepath)
    name_no_ext = filename.replace('.html', '')
    
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    # Determine state and service type
    state_slug = None
    cert_type = None
    
    for prefix, full_slug in state_aliases.items():
        if name_no_ext.startswith(f"{prefix}-"):
            state_slug = full_slug
            cert_type = name_no_ext[len(prefix)+1:]
            break
        elif name_no_ext.startswith(f"{full_slug}-"):
            state_slug = full_slug
            cert_type = name_no_ext[len(full_slug)+1:]
            break
            
    if not state_slug:
        # Check if it's a state hub page (e.g. west-bengal.html)
        if name_no_ext in state_aliases.values() or name_no_ext in state_aliases:
            state_slug = state_aliases.get(name_no_ext, name_no_ext)
            cert_type = "hub"
            
    state_info = states_dict.get(state_slug, {})
    state_name = state_info.get('name_en', clean_name(state_slug or name_no_ext))
    state_name_hi = state_info.get('name_hi', state_name)
    portal_name = state_info.get('portal_name', 'Official Portal')
    
    cert_data = state_info.get('certificates', {}).get(cert_type, {})
    fee = cert_data.get('fee', 'Govt Fee')
    proc_time = cert_data.get('processing_time', '15 Days')
    
    # Construct High-CTR Title & Description
    title = None
    desc = None
    schema_type = "GovernmentService"
    
    if cert_type == "income-certificate":
        title = f"{state_name} Income Certificate 2026: {portal_name} Apply, Fee {fee} & Status"
        desc = f"{state_name} mein आय प्रमाण पत्र (Income Certificate) online kaise banwayein? {portal_name} apply link, zaroori documents, {fee} fee aur {proc_time} me status check."
    elif cert_type == "caste-certificate":
        title = f"{state_name} Caste Certificate 2026: {portal_name} Apply, Fee {fee} & List"
        desc = f"{state_name} mein जाति प्रमाण पत्र (Caste Certificate) online kaise apply karein? {portal_name} direct portal link, required documents, {fee} fee aur track status."
    elif cert_type in ["domicile-certificate", "residence-certificate", "niwas-praman-patra"]:
        title = f"{state_name} Domicile Certificate 2026: {portal_name} Apply & Fee {fee}"
        desc = f"{state_name} मूल निवास प्रमाण पत्र (Domicile/Residence) online apply process. {portal_name} link, eligibility criteria, zaroori documents aur {fee} official fee."
    elif cert_type == "ration-card":
        title = f"{state_name} Ration Card List 2026: New Apply, NFSA Name Check & Status"
        desc = f"{state_name} ration card new list 2026 check karein. BPL, APL, Antyodaya ration card online apply, e-KYC status aur official food portal download link."
    elif cert_type == "driving-licence":
        title = f"{state_name} Driving Licence Online 2026: Sarathi Parivahan Apply & Test"
        desc = f"{state_name} mein Learner's & Permanent Driving Licence online apply karein. Sarathi Parivahan link, RTO test booking, fees aur slot availability."
    elif cert_type == "employment-exchange":
        title = f"{state_name} Employment Exchange Registration 2026: Rojgar Portal Apply"
        desc = f"{state_name} rojgar panjiyan (Employment Exchange) online registration 2026. Step-by-step apply guide, required qualification documents aur job alerts."
    elif cert_type in ["voter-id", "voter-list"]:
        title = f"{state_name} Voter ID Card & List 2026: Form 6 Apply Online & Name Check"
        desc = f"{state_name} voter list 2026 mein apna naam check karein. New voter ID Form 6 online apply, correction aur voter slip download NVSP / ECINET direct link."
    elif cert_type == "hub":
        title = f"{state_name} Govt Schemes & Certificate Services 2026 | SarkariSewa"
        desc = f"{state_name} ki sabhi sarkari yojanaen, e-District portal services, ration card, caste/income certificates aur helpline numbers ek jagah. Free guide."
    else:
        title = f"{clean_name(name_no_ext)} 2026: Online Apply, Eligibility & Documents | SarkariSewa"
        desc = f"{clean_name(name_no_ext)} 2026 online apply process, eligibility criteria, required documents, fee details aur direct official portal link."

    # Keep title under 65 chars if possible
    if len(title) > 65:
        title = title.replace(" | SarkariSewa", "").replace(" & List", "").replace(" & Status", "")
        
    canonical_url = f"https://sarkarisewaindia.com/states/{filename}"
    
    # Structured Data Schema
    schema_json = {
        "@context": "https://schema.org",
        "@type": "GovernmentService",
        "name": f"{state_name} {clean_name(cert_type or name_no_ext)}",
        "serviceType": clean_name(cert_type or name_no_ext),
        "provider": {
            "@type": "GovernmentOrganization",
            "name": f"Government of {state_name}"
        },
        "url": canonical_url,
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": state_name
        }
    }
    
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

    # Clean old JSON-LD Schema & Inject New
    html = re.sub(r'<script\s+type=["\']application/ld\+json["\']>.*?</script>', '', html, flags=re.IGNORECASE | re.DOTALL)
    schema_html = f'<script type="application/ld+json">\n{json.dumps(schema_json, indent=2, ensure_ascii=False)}\n</script>'
    html = re.sub(r'(</head>)', f'{schema_html}\n\\1', html, count=1, flags=re.IGNORECASE)

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

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
        
    updated_count += 1

print(f"🎉 Successfully upgraded {updated_count} state certificate & service pages with 5%+ CTR Metadata & GovernmentService Schema!")
