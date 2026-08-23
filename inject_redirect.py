import json
import re

# 1. Read services.json to build the mapping
try:
    with open("data/services.json", "r", encoding="utf-8") as f:
        services = json.load(f)
except Exception as e:
    print(f"Error reading services.json: {e}")
    services = []

redirect_map = {}
for s in services:
    s_id = s.get("id")
    slug = s.get("slug", s_id)
    if s_id and slug:
        redirect_map[s_id] = slug

# Also add the specific exception the user mentioned, just in case it's not in services.json anymore
redirect_map["pradhan-mantri-jan-aushadhi-yojana"] = "jan-aushadhi-store-locator"

# 2. Build the JS snippet
js_snippet = f"""<script>
    // SEO Redirect Script
    (function() {{
        var urlParams = new URLSearchParams(window.location.search);
        var id = urlParams.get('id');
        if (id) {{
            var redirectMap = {json.dumps(redirect_map)};
            var targetSlug = redirectMap[id] || id;
            var newUrl = window.location.origin + '/service/' + targetSlug + '.html';
            window.location.replace(newUrl);
        }}
    }})();
    </script>"""

# 3. Inject it into service/service.html right after <head>
filepath = "service/service.html"
try:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Remove old redirect script if it exists
    content = re.sub(r'<script>\s*// SEO Redirect Script.*?<\/script>', '', content, flags=re.DOTALL)
        
    content = content.replace("<head>", f"<head>\n    {js_snippet}")
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
        
    print("Injected JS redirect into service/service.html successfully.")
except Exception as e:
    print(f"Error injecting into service.html: {e}")

