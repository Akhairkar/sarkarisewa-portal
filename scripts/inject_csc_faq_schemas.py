import os
import glob
import re
import json
import sys

# Ensure UTF-8 output in logs
sys.stdout.reconfigure(encoding='utf-8')

def get_district_and_state_from_html(html_text, file_path):
    # Try title: "Siddharthnagar (Uttar Pradesh) CSC Center List 2026 | SarkariSewa India"
    title_match = re.search(r'<title>(.*?)</title>', html_text, re.IGNORECASE)
    district = ""
    state = ""
    if title_match:
        title = title_match.group(1)
        m = re.search(r'([A-Za-z\s\-\.]+)\s*\(([A-Za-z\s\-\.]+)\)\s*CSC', title)
        if m:
            district = m.group(1).strip()
            state = m.group(2).strip()
        else:
            m2 = re.search(r'([A-Za-z\s\-\.]+)\s*CSC', title)
            if m2:
                district = m2.group(1).strip()
                
    if not district or not state:
        parts = os.path.normpath(file_path).split(os.sep)
        # service/csc-locator/state-name/district-name.html
        if len(parts) >= 4:
            state_slug = parts[-2]
            dist_slug = parts[-1].replace('.html', '')
            state = state_slug.replace('-', ' ').title()
            district = dist_slug.replace('-', ' ').title()
        elif len(parts) == 3:
            state_slug = parts[-1].replace('.html', '')
            state = state_slug.replace('-', ' ').title()
            district = state
            
    return district, state

def extract_faqs_from_html(html_text, district, state):
    faqs = []
    
    # 1. Try parsing details.faq-item
    details_pattern = re.findall(r'<details[^>]*class=["\'][^"\']*faq-item[^"\']*["\'][^>]*>.*?<summary[^>]*>(?:<span[^>]*>)?(.*?)(?:</span>)?</summary>.*?<div[^>]*class=["\']faq-answer["\'][^>]*>(.*?)</div>.*?</details>', html_text, re.DOTALL | re.IGNORECASE)
    for q_raw, a_raw in details_pattern:
        q_clean = re.sub(r'<[^>]+>', '', q_raw).strip()
        q_clean = re.sub(r'^[❓\s\?]+', '', q_clean).strip()
        
        a_clean = re.sub(r'<[^>]+>', '', a_raw).strip()
        a_clean = re.sub(r'\s+', ' ', a_clean).strip()
        
        if q_clean and a_clean and len(q_clean) > 5 and len(a_clean) > 10:
            faqs.append({"question": q_clean, "answer": a_clean})
            
    # 2. If none, try div.faq-item
    if not faqs:
        div_pattern = re.findall(r'<div[^>]*class=["\'][^"\']*faq-item[^"\']*["\'][^>]*>.*?<h3[^>]*>(.*?)</h3>.*?<div[^>]*class=["\']faq-answer["\'][^>]*>(.*?)</div>.*?</div>', html_text, re.DOTALL | re.IGNORECASE)
        for q_raw, a_raw in div_pattern:
            q_clean = re.sub(r'<[^>]+>', '', q_raw).strip()
            q_clean = re.sub(r'^[❓\s\?]+', '', q_clean).strip()
            a_clean = re.sub(r'<[^>]+>', '', a_raw).strip()
            a_clean = re.sub(r'\s+', ' ', a_clean).strip()
            if q_clean and a_clean and len(q_clean) > 5 and len(a_clean) > 10:
                faqs.append({"question": q_clean, "answer": a_clean})
                
    # 3. Fallback standard high quality FAQs if page has no extracted FAQs
    if not faqs:
        faqs = [
            {
                "question": f"{district} ({state}) mein CSC / Jan Seva Kendra kaise khojein?",
                "answer": f"SarkariSewa India ke is page par {district} ke sabhi verified CSC kendron ki list pincode, gram panchayat aur phone number ke saath di gayi hai. Aap search box me apna pincode daalkar nearest center dhoondh sakte hain."
            },
            {
                "question": f"Kya {district} CSC center par Aadhaar update seva milti hai?",
                "answer": f"Haan, {district} ke pramukh CSC kendron par Aadhaar demographic update (naam, pata, mobile number link) aur biometric update uplabdh hai."
            },
            {
                "question": f"{district} CSC center par Ayushman Card banwane ka kya shulk hai?",
                "answer": f"Ayushman Bharat PM-JAY Golden Card banana CSC kendron par bilkul nishulk (FREE) hai. VLE dwara e-KYC karke card turant issue kiya jata hai."
            },
            {
                "question": f"{district} mein CSC VLE se sampark karne ka tarika kya hai?",
                "answer": f"Page par diye gaye center card me VLE ka address aur contact details uplabdh hain. Aap Get Directions par click karke seedha Google Maps par location dekh sakte hain."
            }
        ]
        
    return faqs

def clean_duplicate_footers(html_text):
    # If duplicate footer or telegram wrapper exists at bottom
    # Pattern: </footer> ... <footer
    if html_text.count('<footer class="site-footer">') > 1:
        # Keep only up to the first complete footer and main script
        parts = html_text.split('<footer class="site-footer">')
        # Reconstruct: part 0 + first footer + rest of close
        first_footer_part = parts[1]
        footer_end_idx = first_footer_part.find('</footer>')
        if footer_end_idx != -1:
            first_footer_full = '<footer class="site-footer">' + first_footer_part[:footer_end_idx+9]
            # check for script at very end
            script_part = '<script src="../../../assets/js/main.js" defer></script>\n</body>\n</html>'
            if '/service/csc-locator/' in html_text and html_text.count('../') < 3:
                script_part = '<script src="../../assets/js/main.js" defer></script>\n</body>\n</html>'
            
            # check if wa-wrapper is present before footer
            wa_wrapper = """<div class="ss-wa-wrapper" id="ss-wa-wrapper">
<button aria-label="Close" id="ss-wa-close" onclick="document.getElementById('ss-wa-wrapper').style.display='none'" style="position: absolute; top: -8px; right: -8px; background: #fff; color: #333; border: 1px solid #ddd; border-radius: 50%; width: 22px; height: 22px; font-size: 14px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10; box-shadow: 0 2px 4px rgba(0,0,0,0.1); line-height: 1;">×</button>
<a aria-label="Join our Telegram Channel" class="ss-wa-floating-bar" href="https://t.me/sarkarisewaindia" rel="noopener noreferrer" target="_blank">
<span style="font-size: 18px; margin-right: 4px;">✈️</span>
<span data-i18n="wa_join" style="font-weight: 600;">Join Telegram VIP</span>
</a>
</div>"""
            html_text = parts[0] + first_footer_full + "\n" + wa_wrapper + "\n</div>\n" + script_part
            
    return html_text

def build_faq_schema(faqs):
    main_entity = []
    for f in faqs:
        main_entity.append({
            "@type": "Question",
            "name": f["question"],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f["answer"]
            }
        })
    return {
        "@type": "FAQPage",
        "mainEntity": main_entity
    }

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()

    # Step 1: Clean duplicate footers if any
    html = clean_duplicate_footers(html)

    # Check if FAQPage schema already present
    if '"@type": "FAQPage"' in html or '"@type":"FAQPage"' in html or "'@type': 'FAQPage'" in html:
        # Already has FAQPage schema, write cleaned footer if modified
        with open(file_path, 'w', encoding='utf-8') as fp:
            fp.write(html)
        return False, "Already has FAQPage schema"

    district, state = get_district_and_state_from_html(html, file_path)
    faqs = extract_faqs_from_html(html, district, state)
    faq_schema = build_faq_schema(faqs)

    # Get canonical URL
    canon_match = re.search(r'<link[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"\']+)["\']', html, re.IGNORECASE)
    canon_url = canon_match.group(1) if canon_match else f"https://sarkarisewaindia.com/{file_path.replace(os.sep, '/')}"

    # Check if there is an existing ld+json script
    json_match = re.search(r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', html, re.DOTALL | re.IGNORECASE)
    
    if json_match:
        try:
            raw_json = json_match.group(1).strip()
            data = json.loads(raw_json)
            if "@graph" in data and isinstance(data["@graph"], list):
                # Add FAQPage to @graph
                data["@graph"].append(faq_schema)
            elif isinstance(data, list):
                data.append(faq_schema)
            elif isinstance(data, dict):
                # Turn into @graph
                data = {
                    "@context": "https://schema.org",
                    "@graph": [data, faq_schema]
                }
            new_json_str = json.dumps(data, ensure_ascii=False, indent=2)
            new_script = f'<script type="application/ld+json">\n{new_json_str}\n</script>'
            html = html[:json_match.start()] + new_script + html[json_match.end():]
        except Exception as e:
            # If JSON parsing failed, inject separate FAQPage script
            new_json_str = json.dumps({
                "@context": "https://schema.org",
                **faq_schema
            }, ensure_ascii=False, indent=2)
            faq_script = f'\n  <script type="application/ld+json">\n{new_json_str}\n  </script>'
            head_idx = html.find('</head>')
            if head_idx != -1:
                html = html[:head_idx] + faq_script + "\n" + html[head_idx:]
    else:
        # Build complete schema graph
        graph = [
            {
                "@type": "GovernmentService",
                "name": f"CSC / Jan Seva Kendra in {district}, {state}",
                "description": f"{district}, {state} mein Common Service Centre (CSC) / Jan Seva Kendra ki verified list - Aadhaar, PAN, Passport aur anya sarkari sevaon ke liye.",
                "url": canon_url,
                "serviceType": "Common Service Centre (CSC) Locator",
                "areaServed": {
                    "@type": "City",
                    "name": district,
                    "containedInPlace": {
                        "@type": "State",
                        "name": state
                    }
                },
                "provider": {
                    "@type": "GovernmentOrganization",
                    "name": "Common Services Centre (CSC), Ministry of Electronics & IT, Government of India"
                },
                "sameAs": [
                    "https://csc.gov.in",
                    "https://india.gov.in"
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://sarkarisewaindia.com/index.html"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "CSC Locator",
                        "item": "https://sarkarisewaindia.com/tools/csc-locator.html"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": state,
                        "item": f"https://sarkarisewaindia.com/service/csc-locator/{state.lower().replace(' ', '-')}.html"
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": district,
                        "item": canon_url
                    }
                ]
            },
            faq_schema
        ]
        
        full_json = {
            "@context": "https://schema.org",
            "@graph": graph
        }
        new_json_str = json.dumps(full_json, ensure_ascii=False, indent=2)
        new_script = f'  <script type="application/ld+json">\n{new_json_str}\n  </script>\n'
        head_idx = html.find('</head>')
        if head_idx != -1:
            html = html[:head_idx] + new_script + html[head_idx:]

    with open(file_path, 'w', encoding='utf-8') as fp:
        fp.write(html)
        
    return True, f"Injected {len(faqs)} FAQs schema"

def main():
    files = sorted(glob.glob('service/csc-locator/**/*.html', recursive=True) + glob.glob('service/csc-locator/*.html'))
    files = list(set(files))
    print(f"Total CSC locator files to process: {len(files)}")
    
    injected_count = 0
    skipped_count = 0
    
    for f in files:
        changed, msg = process_file(f)
        if changed:
            injected_count += 1
        else:
            skipped_count += 1
            
    print(f"==================================================")
    print(f"DONE: Injected FAQ Schema in {injected_count} files!")
    print(f"Skipped / already present: {skipped_count} files.")
    print(f"Total verified: {len(files)} files.")
    print(f"==================================================")

if __name__ == '__main__':
    main()
