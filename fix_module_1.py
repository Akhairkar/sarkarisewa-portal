import os
import re
import glob
import requests
import json
import concurrent.futures
from urllib.parse import quote

URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co/rest/v1"
ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"

headers = {
    "apikey": ANON_KEY,
    "Authorization": f"Bearer {ANON_KEY}",
    "Accept": "application/json"
}

def render_center_html(center):
    name = center.get('vle_name') or center.get('name') or "CSC Centre"
    is_verif = center.get('is_claimed') or center.get('status') == 'verified' or center.get('is_verified')
    is_verif_html = '<span style="background: #ecfdf5; color: #059669; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 700; margin-left: 8px; border: 1px solid #a7f3d0;">✅ Verified</span>' if is_verif else '<span style="background: #f3f4f6; color: #6b7280; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; margin-left: 8px;">Unclaimed</span>'
    
    address = center.get('address') or f"{name}, {center.get('pincode', '')}"
    services_html = ''.join([f'<span style="background: var(--color-bg); border: 1px solid var(--color-border); padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; color: var(--color-text); white-space: nowrap;">{s}</span>' for s in ["Aadhar Update", "PAN Card", "Income Certificate"]])
    
    contact = center.get('whatsapp_number') or center.get('phone_number') or center.get('owner_phone') or center.get('phone') or center.get('contact') or "N/A"
    contact_display = f'<a href="tel:{contact}" style="color: var(--color-primary); font-weight: bold; text-decoration: none;">📞 {contact}</a>' if (is_verif and contact != "N/A") else '<span style="color: var(--color-text-muted);">📞 +91 9** *** **22 🔒</span>'
    
    addressString = f"{address}, {center.get('district','')}, {center.get('state','')} - {center.get('pincode','')}"
    mapUrl = f"https://www.google.com/maps/dir/?api=1&destination={quote(addressString)}"
    
    claim_btn = f'<a href="../../claim-your-csc.html?id={center.get("id")}" style="background: var(--color-surface); color: var(--color-primary); padding: 8px 12px; border-radius: 8px; border: 1px solid var(--color-primary); text-decoration: none; font-size: 0.9rem; font-weight: 600;">Claim</a>' if not is_verif else ''
    
    return f'''
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
            <h3 style="margin: 0; font-size: 1.25rem; color: var(--color-primary); line-height: 1.4;">{name} {is_verif_html}</h3>
          </div>
          <div style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 16px; display: flex; align-items: flex-start; gap: 8px;">
            <span style="font-size: 1.1rem; line-height: 1.2;">📍</span><span>{address}</span>
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px;">{services_html}</div>
          <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--color-border); gap: 8px;">
            {contact_display}
            <div style="display: flex; gap: 8px;">
              {claim_btn}
              <a href="{mapUrl}" target="_blank" style="background: var(--color-brand); color: white; padding: 8px 12px; border-radius: 8px; text-decoration: none; font-size: 0.9rem; font-weight: 600;">Map</a>
            </div>
          </div>
        </div>
    '''

def process_file(filepath):
    # Extract state and district
    parts = filepath.replace('\\', '/').split('/')
    if len(parts) == 3: # service/csc-locator/maharashtra.html
        state = parts[2].replace('.html', '').replace('-', ' ')
        district = ""
    elif len(parts) == 4: # service/csc-locator/maharashtra/nagpur.html
        state = parts[2].replace('-', ' ')
        district = parts[3].replace('.html', '').replace('-', ' ')
    else:
        return
        
    # Query Supabase
    query_url = f"{URL}/csc_centers?state=ilike.*{quote(state)}*"
    if district:
        query_url += f"&district=ilike.*{quote(district)}*"
    query_url += "&select=*&limit=12"
    
    try:
        resp = requests.get(query_url, headers=headers, timeout=5)
        if resp.status_code == 200:
            data = resp.json()
        else:
            data = []
    except Exception as e:
        data = []

    # Count for real number
    count = len(data)
    # Just an approximation if it hits limit (we use a different endpoint for precise count, but limit=12 gives at least >10).
    # Since we can't easily get exactly 500k counts per district without heavy queries, we'll fetch exact count.
    
    try:
        count_url = f"{URL}/csc_centers?state=ilike.*{quote(state)}*"
        if district:
            count_url += f"&district=ilike.*{quote(district)}*"
        count_url += "&select=id"
        count_headers = headers.copy()
        count_headers['Prefer'] = 'count=exact'
        count_resp = requests.head(count_url, headers=count_headers, timeout=5)
        total_count = int(count_resp.headers.get('Content-Range', '0-0/0').split('/')[-1])
    except:
        total_count = count
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. NOINDEX if empty
    if total_count == 0 and '<meta name="robots"' not in content:
        content = re.sub(r'(<head.*?>)', r'\1\n    <meta name="robots" content="noindex">', content, flags=re.IGNORECASE)

    # 2. Inject Meta Description if missing
    if '<meta name="description"' not in content:
        loc_name = district.title() if district else state.title()
        desc = f"Find the nearest CSC Center (Jan Seva Kendra) in {loc_name}, {state.title()}. Address, contact number, and map location available. Verified {total_count} centers."
        content = re.sub(r'(<title>.*?</title>)', r'\1\n    <meta name="description" content="' + desc + '" />', content, count=1)

    # 3. Replace "300+ Centers" or similar in hero desc
    # Find something like: >Over 300+ Verified CSC...< or just >300+ CSC Centers<
    content = re.sub(r'\b\d+\+\s*(Verified\s*)?(CSC Centers|Centers)\b', f"{total_count} CSC Centers", content, flags=re.IGNORECASE)
    
    # 4. Inject real HTML into the container
    container_pattern = r'(<div id="csc-results-container"[^>]*>).*?(</div>)'
    
    if total_count > 0 and data:
        html_cards = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">'
        for center in data[:10]: # Top 10
            html_cards += render_center_html(center)
        html_cards += '</div>'
        
        content = re.sub(container_pattern, r'\1\n' + html_cards + r'\n\2', content, flags=re.DOTALL)
    elif total_count == 0:
        empty_html = f'''
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 24px; background: var(--color-surface); border: 1px dashed var(--color-border); border-radius: 12px;">
          <div style="font-size: 3rem; margin-bottom: 16px;">🔍</div>
          <h3 style="margin-top:0; font-size: 1.5rem; color: var(--color-text);">No verified CSC found in {district.title() if district else state.title()}.</h3>
          <p style="color: var(--color-text-muted);">We are currently updating our database for this location.</p>
        </div>
        '''
        content = re.sub(container_pattern, r'\1\n' + empty_html + r'\n\2', content, flags=re.DOTALL)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    return filepath

files = glob.glob('service/csc-locator/**/*.html', recursive=True)
files = [f for f in files if os.path.isfile(f)]

print(f"Starting processing of {len(files)} CSC files...")
with concurrent.futures.ThreadPoolExecutor(max_workers=20) as executor:
    results = list(executor.map(process_file, files))
    
print("Module 1 processing complete!")
