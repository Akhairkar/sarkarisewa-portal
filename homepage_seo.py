import os
import json
import re

# 1. Update lang.json
lang_file = "data/lang.json"
with open(lang_file, "r", encoding="utf-8") as f:
    lang_data = json.load(f)

# Update English keys
lang_data["en"]["hero_title"] = "Search Government Schemes & Services. Understand them in minutes."
lang_data["en"]["hero_sub"] = "Get step-by-step guides, eligibility criteria, required documents, and official application links for 160+ Indian government schemes and certificates – in Hindi and English."

# Update Hindi keys
lang_data["hi"]["hero_title"] = "कोई भी सरकारी योजना या सेवा खोजें। मिनटों में समझें।"
lang_data["hi"]["hero_sub"] = "160+ भारतीय सरकारी योजनाओं, सेवाओं, और प्रमाणपत्रों के लिए स्टेप-बाय-स्टेप गाइड, पात्रता, आवश्यक दस्तावेज़ और आधिकारिक लिंक खोजें – हिंदी और अंग्रेजी में।"

with open(lang_file, "w", encoding="utf-8") as f:
    json.dump(lang_data, f, ensure_ascii=False, indent=2)


# 2. Update home.js to dynamically calculate stats
home_js_path = "assets/js/home.js"
with open(home_js_path, "r", encoding="utf-8") as f:
    home_js = f.read()

dynamic_script = """  SERVICES_DATA = services;
  CATEGORIES_DATA = Array.isArray(categoriesRaw) ? categoriesRaw : (categoriesRaw.categories || []);
  BLOG_DATA = Array.isArray(blogRaw) ? blogRaw : (blogRaw.posts || []);

  const statEl = document.getElementById("trust-stat-services");
  if (statEl && SERVICES_DATA && SERVICES_DATA.length > 0) {
    const roundedCount = Math.floor(SERVICES_DATA.length / 10) * 10;
    statEl.textContent = roundedCount + "+";
  }"""
  
home_js = home_js.replace("""  SERVICES_DATA = services;
  CATEGORIES_DATA = Array.isArray(categoriesRaw) ? categoriesRaw : (categoriesRaw.categories || []);
  BLOG_DATA = Array.isArray(blogRaw) ? blogRaw : (blogRaw.posts || []);""", dynamic_script)

with open(home_js_path, "w", encoding="utf-8") as f:
    f.write(home_js)


# 3. Update index.html SEO tags
index_html_path = "index.html"
with open(index_html_path, "r", encoding="utf-8") as f:
    html = f.read()

# Replace <title>
html = re.sub(r'<title>.*?</title>', '<title>Sarkari Sewa India – Government Schemes, Services & Online Guides</title>', html, flags=re.DOTALL)
# Replace <meta name="description">
html = re.sub(r'<meta name="description".*?>', '<meta name="description" content="Find government schemes, online services, certificates, eligibility, documents and useful calculators in Hindi & English. Get simple step-by-step Sarkari Sewa guides in one place.">', html, flags=re.DOTALL)
# Replace og:title
html = re.sub(r'<meta property="og:title".*?>', '<meta property="og:title" content="Sarkari Sewa India – Government Schemes, Services & Online Guides">', html, flags=re.DOTALL)
# Replace og:description
html = re.sub(r'<meta property="og:description".*?>', '<meta property="og:description" content="Find government schemes, online services, certificates, eligibility, documents and useful calculators in Hindi & English. Get simple Sarkari Sewa guides in one place.">', html, flags=re.DOTALL)

# Fix hardcoded "92+"
html = html.replace('id="trust-stat-services">92+', 'id="trust-stat-services">160+')
html = html.replace('>92+<', '>160+<')

# Internal links anchor text optimizations in index.html (as requested)
# Example: updating generic "View all services" to "View All Government Services" (only if found)
html = html.replace('data-i18n="hero_cta">Browse all services', 'data-i18n="hero_cta">Browse Government Schemes & Services')
# We'll rely mostly on existing structure.

with open(index_html_path, "w", encoding="utf-8") as f:
    f.write(html)

print("SEO update complete.")
