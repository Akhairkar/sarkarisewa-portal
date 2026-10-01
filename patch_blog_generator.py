import sys

def patch():
    with open('tools/generate-blog-pages.py', 'r', encoding='utf-8') as f:
        content = f.read()
        
    supabase_fetch_code = """
    import urllib.request
    SUPABASE_URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co"
    SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"
    
    url = f"{SUPABASE_URL}/rest/v1/blog_posts?status=eq.published"
    req = urllib.request.Request(url, headers={'apikey': SUPABASE_ANON_KEY, 'Authorization': f'Bearer {SUPABASE_ANON_KEY}'})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            db_posts = json.loads(resp.read().decode("utf-8"))
            for r in db_posts:
                posts.append({
                    "slug": r.get("slug"),
                    "title": {"en": r.get("title_en") or r.get("title_hi"), "hi": r.get("title_hi") or r.get("title_en")},
                    "excerpt": {"en": r.get("excerpt_en") or r.get("excerpt_hi"), "hi": r.get("excerpt_hi") or r.get("excerpt_en")},
                    "body": {"en": r.get("body_en") or r.get("body_hi"), "hi": r.get("body_hi") or r.get("body_en")},
                    "datePublished": r.get("date_published"),
                    "category": r.get("category"),
                    "relatedServiceId": r.get("related_service_id")
                })
    except Exception as e:
        print(f"Warning: could not fetch Supabase posts: {e}")
"""

    if "SUPABASE_URL" not in content:
        content = content.replace("posts = json.loads(POSTS_JSON.read_text(encoding=\"utf-8\"))", "posts = json.loads(POSTS_JSON.read_text(encoding=\"utf-8\"))" + supabase_fetch_code)
        
        with open('tools/generate-blog-pages.py', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Patched tools/generate-blog-pages.py successfully!")
    else:
        print("Already patched.")

if __name__ == '__main__':
    patch()
