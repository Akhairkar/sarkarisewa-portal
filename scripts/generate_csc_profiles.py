import os
import json
import re
from datetime import datetime
import xml.etree.ElementTree as ET

# This script would normally fetch from Supabase.
# Since we can't reliably run Supabase client in CI without the service key in github secrets,
# we will write the structure assuming the secret SUPABASE_SERVICE_KEY and SUPABASE_URL are in env vars.

try:
    from supabase import create_client, Client
except ImportError:
    print("supabase library not found. Run pip install supabase")

def generate_slug(state, district, name):
    base = f"{state}-{district}-{name}".lower()
    base = re.sub(r'[^a-z0-9]+', '-', base)
    return base.strip('-')

def build_profile_html(claim):
    # Constructing the HTML exactly as requested
    
    services_html = ""
    for s in (claim.get("online_services") or []):
        services_html += f"<li>✅ {s}</li>"
    for s in (claim.get("offline_services") or []):
        services_html += f"<li>✅ {s}</li>"
        
    contact_html = ""
    if claim.get("public_phone"):
        contact_html += f"<p><strong>Phone:</strong> <a href='tel:{claim['public_phone']}'>{claim['public_phone']}</a></p>"
    if claim.get("public_whatsapp"):
        contact_html += f"<p><strong>WhatsApp:</strong> <a href='https://wa.me/91{claim['public_whatsapp']}'>Chat on WhatsApp</a></p>"
    if claim.get("public_email"):
        contact_html += f"<p><strong>Email:</strong> <a href='mailto:{claim['public_email']}'>{claim['public_email']}</a></p>"
        
    html = f"""<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{claim['centre_name']} - CSC Centre in {claim['locality']}, {claim['city']}, {claim['state']} | SarkariSewa India</title>
    <meta name="description" content="Verified CSC / Jan Seva Kendra details for {claim['centre_name']} in {claim['city']}, {claim['district']}. Available online/offline services, address, and timings.">
    <link rel="stylesheet" href="../../../../assets/css/style.css">
    <!-- Canonical URL and Schema would be injected here -->
</head>
<body>
    <!-- HEADER STUB -->
    <header class="site-header">
        <div class="container header-container">
            <a href="../../../../index.html" class="brand">SarkariSewa India</a>
        </div>
    </header>

    <main class="container" style="padding-top: 32px; padding-bottom: 64px;">
        <nav class="breadcrumb">
            <a href="../../../../index.html">Home</a> <span class="sep">/</span>
            <a href="../../../../tools/csc-locator.html">CSC Locator</a> <span class="sep">/</span>
            <span>{claim['state']}</span> <span class="sep">/</span>
            <span>{claim['district']}</span> <span class="sep">/</span>
            <span class="current">{claim['centre_name']}</span>
        </nav>

        <section style="background: var(--color-surface); padding: 32px; border-radius: 12px; border: 1px solid var(--color-border); margin-bottom: 32px; margin-top: 24px;">
            <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 16px;">
                <h1 style="margin: 0; font-size: 2rem; color: var(--color-primary);">{claim['centre_name']}</h1>
                <span style="background: #ecfdf5; color: #059669; padding: 4px 12px; border-radius: 20px; font-weight: 700; font-size: 0.85rem; border: 1px solid #a7f3d0;">✓ Verified CSC</span>
            </div>
            
            <p style="font-size: 1.1rem; color: var(--color-text-muted);">CSC / Jan Seva Kendra in {claim['city']}, {claim['district']}</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-top: 32px;">
                <div>
                    <h3 style="margin-top: 0;">📍 Location & Address</h3>
                    <p style="margin: 0; line-height: 1.6;">
                        <strong>{claim['building_shop'] or ''}</strong><br>
                        {claim['full_address']}<br>
                        {claim['locality']}, {claim['city']}<br>
                        {claim['district']}, {claim['state']} - {claim['pincode']}
                    </p>
                    <a href="https://www.google.com/maps/dir/?api=1&destination={claim['latitude']},{claim['longitude']}" target="_blank" class="btn btn--primary" style="margin-top: 16px;">Get Directions</a>
                </div>
                
                <div>
                    <h3 style="margin-top: 0;">📞 Contact Info</h3>
                    {contact_html or '<p>No public contact info provided.</p>'}
                </div>
            </div>
        </section>

        <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 32px;">
            <div style="background: var(--color-bg-alt); padding: 24px; border-radius: 12px; border: 1px solid var(--color-border);">
                <h3>Available Services</h3>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">
                    {services_html}
                </ul>
            </div>
            <div style="background: var(--color-bg-alt); padding: 24px; border-radius: 12px; border: 1px solid var(--color-border);">
                <h3>Operating Information</h3>
                <p><strong>Home Visit:</strong> {'Yes' if claim.get('home_visit') else 'No'}</p>
                <p><strong>Appointment Required:</strong> {'Yes' if claim.get('appointment_required') else 'No'}</p>
                <!-- Hours logic would go here -->
            </div>
        </section>

        <section style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 24px; border-radius: 12px; text-align: center;">
            <h3 style="margin-top:0; color: #1e3a8a;">Are you the owner of this CSC?</h3>
            <p style="color: #1e3a8a; margin-bottom: 16px;">Keep your profile up to date to attract more local citizens.</p>
            <a href="../../../../claim-your-csc.html" class="btn" style="background: white; color: #1e3a8a; border: 1px solid #bfdbfe;">Update Listing</a>
        </section>
    </main>

    <script src="../../../../assets/js/main.js"></script>
</body>
</html>"""
    return html

def update_sitemap(url):
    sitemap_path = "sitemap.xml"
    if not os.path.exists(sitemap_path):
        return
        
    tree = ET.parse(sitemap_path)
    root = tree.getroot()
    namespace = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    ET.register_namespace('', 'http://www.sitemaps.org/schemas/sitemap/0.9')
    
    full_url = f"https://sarkarisewaindia.com/{url}"
    
    # Check if exists
    for url_tag in root.findall('ns:url', namespace):
        loc = url_tag.find('ns:loc', namespace)
        if loc is not None and loc.text == full_url:
            return # Already exists
            
    url_element = ET.SubElement(root, 'url')
    loc_element = ET.SubElement(url_element, 'loc')
    loc_element.text = full_url
    lastmod = ET.SubElement(url_element, 'lastmod')
    lastmod.text = datetime.now().strftime("%Y-%m-%d")
    
    tree.write(sitemap_path, encoding='utf-8', xml_declaration=True)

def main():
    url = os.environ.get("SUPABASE_URL")
    key = os.environ.get("SUPABASE_SERVICE_KEY")
    
    if not url or not key:
        print("Missing Supabase credentials. Skipping generation.")
        return
        
    supabase: Client = create_client(url, key)
    
    response = supabase.table("csc_claims").select("*").eq("status", "approved").is_("profile_generated_at", "null").execute()
    
    claims = response.data
    if not claims:
        print("No new approved claims to generate.")
        return
        
    print(f"Found {len(claims)} new approved claims.")
    
    for claim in claims:
        slug = generate_slug(claim['state'], claim['district'], claim['centre_name'])
        state_dir = claim['state'].lower().replace(' ', '-')
        dist_dir = claim['district'].lower().replace(' ', '-')
        
        dir_path = os.path.join("csc", state_dir, dist_dir)
        os.makedirs(dir_path, exist_ok=True)
        
        file_path = os.path.join(dir_path, f"{slug}.html")
        relative_url = f"csc/{state_dir}/{dist_dir}/{slug}.html"
        
        html_content = build_profile_html(claim)
        
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(html_content)
            
        update_sitemap(relative_url)
        
        # Update supabase record
        supabase.table("csc_claims").update({
            "profile_generated_at": datetime.now().isoformat(),
            "profile_slug": slug,
            "profile_url": relative_url
        }).eq("id", claim["id"]).execute()
        
        print(f"Generated: {relative_url}")

if __name__ == "__main__":
    main()
