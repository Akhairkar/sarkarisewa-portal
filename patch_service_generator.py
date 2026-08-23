import sys

def patch():
    with open('tools/generate-service-pages.py', 'r', encoding='utf-8') as f:
        content = f.read()
        
    supabase_fetch_code = """
    import urllib.request
    SUPABASE_URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co"
    SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"
    
    url = f"{SUPABASE_URL}/rest/v1/services?status=eq.published"
    req = urllib.request.Request(url, headers={'apikey': SUPABASE_ANON_KEY, 'Authorization': f'Bearer {SUPABASE_ANON_KEY}'})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            db_services = json.loads(resp.read().decode("utf-8"))
            for r in db_services:
                services.append({
                    "id": r.get("slug"),
                    "slug": r.get("slug"),
                    "name": {"en": r.get("name_en") or r.get("name_hi"), "hi": r.get("name_hi") or r.get("name_en")},
                    "shortDescription": {"en": r.get("short_description_en") or r.get("short_description_hi"), "hi": r.get("short_description_hi") or r.get("short_description_en")},
                    "overview": {"en": r.get("overview_en") or r.get("overview_hi"), "hi": r.get("overview_hi") or r.get("overview_en")},
                    "benefits": {"en": r.get("benefits_en") or r.get("benefits_hi"), "hi": r.get("benefits_hi") or r.get("benefits_en")},
                    "eligibility": {"en": r.get("eligibility_en") or r.get("eligibility_hi"), "hi": r.get("eligibility_hi") or r.get("eligibility_en")},
                    "documentsRequired": {"en": r.get("documents_en") or r.get("documents_hi"), "hi": r.get("documents_hi") or r.get("documents_en")},
                    "howToApply": {"en": r.get("how_to_apply_en") or r.get("how_to_apply_hi"), "hi": r.get("how_to_apply_hi") or r.get("how_to_apply_en")},
                    "fees": {"en": r.get("fees_en") or r.get("fees_hi"), "hi": r.get("fees_hi") or r.get("fees_en")},
                    "statusCheck": {"en": r.get("status_check_en") or r.get("status_check_hi"), "hi": r.get("status_check_hi") or r.get("status_check_en")},
                    "faqs": r.get("faqs", []),
                    "categories": r.get("categories", []),
                    "state": r.get("state"),
                    "links": r.get("links", {})
                })
    except Exception as e:
        print(f"Warning: could not fetch Supabase services: {e}")
"""

    if "SUPABASE_URL" not in content:
        content = content.replace("services = json.loads(SERVICES_JSON.read_text(encoding=\"utf-8\")).get(\"services\", [])", "services = json.loads(SERVICES_JSON.read_text(encoding=\"utf-8\")).get(\"services\", [])" + supabase_fetch_code)
        
        with open('tools/generate-service-pages.py', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Patched tools/generate-service-pages.py successfully!")
    else:
        print("Already patched.")

if __name__ == '__main__':
    patch()
