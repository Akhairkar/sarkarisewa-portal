import json
import os
import re

# Paths
base_dir = r"C:\Users\Lenovo\.gemini\antigravity\scratch\sarkarisewa-portal-repo"
json_path = os.path.join(base_dir, "data", "state-certificates.json")
template_path = r"C:\Users\Lenovo\.gemini\antigravity\brain\df3db70e-bcd2-4613-bcc1-39243501d2c8\scratch\state-certificate-template.html"
states_dir = os.path.join(base_dir, "states")
lang_path = os.path.join(base_dir, "data", "lang.json")

# Load data
with open(json_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

with open(template_path, 'r', encoding='utf-8') as f:
    template = f.read()

with open(lang_path, 'r', encoding='utf-8') as f:
    lang_data = json.load(f)

certs = data['certificates']
states = data['states']

new_en_keys = {}
new_hi_keys = {}

# Add general cert translations if not exist
for c_slug, c_info in certs.items():
    new_en_keys[f"sc_cert_{c_slug}"] = c_info['name_en']
    new_hi_keys[f"sc_cert_{c_slug}"] = c_info['name_hi']
    new_en_keys[f"sc_desc_{c_slug}"] = c_info['desc_en']
    new_hi_keys[f"sc_desc_{c_slug}"] = c_info['desc_hi']

# Generate pages
generated_count = 0
for s_slug, s_info in states.items():
    state_name_en = s_info['name_en']
    state_name_hi = s_info['name_hi']
    portal_name = s_info['portal_name']
    portal_url = s_info['portal_url']
    
    new_en_keys[f"sc_state_{s_slug}"] = state_name_en
    new_hi_keys[f"sc_state_{s_slug}"] = state_name_hi
    
    for c_slug, c_details in s_info.get('certificates', {}).items():
        cert_info = certs[c_slug]
        
        # Build document list HTML and translation keys
        docs_html = ""
        for idx, (doc_en, doc_hi) in enumerate(zip(c_details['documents_en'], c_details['documents_hi'])):
            key = f"sc_{s_slug}_{c_slug}_doc_{idx}"
            new_en_keys[key] = doc_en
            new_hi_keys[key] = doc_hi
            docs_html += f'          <li data-i18n="{key}">{doc_en}</li>\n'
            
        # Also translate fee, processing time, etc.
        key_fee = f"sc_{s_slug}_{c_slug}_fee"
        key_time = f"sc_{s_slug}_{c_slug}_time"
        key_auth = f"sc_{s_slug}_{c_slug}_auth"
        key_val = f"sc_{s_slug}_{c_slug}_val"
        
        new_en_keys[key_fee] = c_details['fee']
        new_hi_keys[key_fee] = c_details['fee'] # Usually numbers/same, but safe
        
        new_en_keys[key_time] = c_details['processing_time']
        new_hi_keys[key_time] = c_details['processing_time'].replace("Days", "दिन").replace("Working", "कार्य").replace("Year", "वर्ष")
        
        new_en_keys[key_auth] = c_details['issuing_authority']
        new_hi_keys[key_auth] = c_details['issuing_authority'].replace("Tehsildar", "तहसीलदार").replace("Revenue Officer", "राजस्व अधिकारी")
        
        new_en_keys[key_val] = c_details['validity']
        new_hi_keys[key_val] = c_details['validity'].replace("Lifetime", "आजीवन").replace("Years", "वर्ष").replace("Year", "वर्ष")
            
        # Replace placeholders in template
        html = template
        html = html.replace('{{state_name_en}}', state_name_en)
        html = html.replace('{{cert_name_en}}', cert_info['name_en'])
        html = html.replace('{{cert_desc_en}}', cert_info['desc_en'])
        html = html.replace('{{state_slug}}', s_slug)
        html = html.replace('{{cert_slug}}', c_slug)
        html = html.replace('{{portal_name}}', portal_name)
        html = html.replace('{{portal_url}}', portal_url)
        
        html = html.replace('{{fee}}', f'<span data-i18n="{key_fee}">{c_details["fee"]}</span>')
        html = html.replace('{{processing_time}}', f'<span data-i18n="{key_time}">{c_details["processing_time"]}</span>')
        html = html.replace('{{issuing_authority}}', f'<span data-i18n="{key_auth}">{c_details["issuing_authority"]}</span>')
        html = html.replace('{{validity}}', f'<span data-i18n="{key_val}">{c_details["validity"]}</span>')
        html = html.replace('{{documents_list}}', docs_html.strip())
        
        # Save page
        page_filename = f"{s_slug}-{c_slug}.html"
        page_path = os.path.join(states_dir, page_filename)
        
        with open(page_path, 'w', encoding='utf-8') as out_f:
            out_f.write(html)
            
        generated_count += 1

# Update lang.json
lang_data['en'].update(new_en_keys)
lang_data['hi'].update(new_hi_keys)

with open(lang_path, 'w', encoding='utf-8') as f:
    json.dump(lang_data, f, ensure_ascii=False, indent=2)

print(f"Successfully generated {generated_count} Programmatic SEO pages!")
print("Updated data/lang.json with new translation keys.")
