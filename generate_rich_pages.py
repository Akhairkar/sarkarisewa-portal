import os
import json
import glob
import re

# Shared Base UI
def get_base_html():
    with open("service/jan-aushadhi-store-locator.html", "r", encoding="utf-8") as f:
        base = f.read()
    match_main = re.search(r'(<main[^>]*>)', base)
    match_end = re.search(r'(
    <!-- Cross-Linking Banner: CSC & Jan Aushadhi -->
    <section class="service-section" style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #86efac; border-radius: 12px; padding: 24px; margin-top: 30px; margin-bottom: 20px;">
      <h2 style="color: #166534; font-size: 1.5rem; margin-top: 0; margin-bottom: 12px;">Need Help or Cheap Medicines? 🏥</h2>
      <p style="color: #15803d; font-size: 1.05rem; margin-bottom: 16px; line-height: 1.5;">
        Save time and money by using our officially integrated location tools:
      </p>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <a href="../../tools/csc-locator.html" style="flex: 1; min-width: 200px; background: white; border: 2px solid #22c55e; color: #166534; padding: 12px 16px; border-radius: 8px; text-decoration: none; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <span>📍 Find Nearest CSC Center</span>
        </a>
        <a href="../../service/jan-aushadhi-store-locator.html" style="flex: 1; min-width: 200px; background: white; border: 2px solid #22c55e; color: #166534; padding: 12px 16px; border-radius: 8px; text-decoration: none; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <span>💊 Jan Aushadhi Store Locator</span>
        </a>
      </div>
    </section>

</main>)', base)
    return base[:match_main.start()] + '<main class="container">', base[match_end.end():]

header_base, footer_base = get_base_html()

tools_widget = '''
<div style="margin-top: 50px; padding-top: 30px; border-top: 1px solid var(--color-border);">
    <h3 style="margin-bottom: 20px; font-size: 1.5rem; text-align: center;"><span data-lang-show="en">Related Services & Important Tools</span><span data-lang-show="hi">संबंधित सेवाएँ और महत्वपूर्ण टूल्स</span></h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 20px; text-align: center;">
        <a href="../tools/eligibility-checker.html" style="text-decoration: none; padding: 20px; border-radius: 12px; background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: block;">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">✅</div>
            <strong style="color: var(--color-text);"><span data-lang-show="en">Check Eligibility</span><span data-lang-show="hi">पात्रता जांचें</span></strong>
        </a>
        <a href="../tools/document-checklist.html" style="text-decoration: none; padding: 20px; border-radius: 12px; background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: block;">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">📑</div>
            <strong style="color: var(--color-text);"><span data-lang-show="en">Document List</span><span data-lang-show="hi">दस्तावेज लिस्ट</span></strong>
        </a>
        <a href="../tools/csc-locator.html" style="text-decoration: none; padding: 20px; border-radius: 12px; background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: block;">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">📍</div>
            <strong style="color: var(--color-text);"><span data-lang-show="en">Nearest CSC</span><span data-lang-show="hi">नजदीकी CSC</span></strong>
        </a>
        <a href="../tools/status-troubleshooter.html" style="text-decoration: none; padding: 20px; border-radius: 12px; background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: block;">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">🔍</div>
            <strong style="color: var(--color-text);"><span data-lang-show="en">Check Status</span><span data-lang-show="hi">स्टेटस चेक करें</span></strong>
        </a>
    </div>
</div>
'''

os.makedirs("states", exist_ok=True)
sitemap_urls = []
count = 0

batch_files = glob.glob('batch*.json')
for batch_file in batch_files:
    with open(batch_file, "r", encoding="utf-8") as f:
        try:
            data = json.load(f)
        except Exception as e:
            print(f"Error loading {batch_file}: {e}")
            continue
            
    for filename, content in data.items():
        if not filename.endswith(".html"):
            continue
            
        file_path = f"states/{filename}"
        if "/" in filename:
            file_path = filename # in case some filenames have tools/ in them
            
        os.makedirs(os.path.dirname(file_path) if os.path.dirname(file_path) else ".", exist_ok=True)
            
        title_en = content.get('titleEn', '')
        title_hi = content.get('titleHi', '')
        desc_en = content.get('descEn', '')
        content_en = content.get('contentEn', '')
        content_hi = content.get('contentHi', '')
        
        # Depth logic
        depth = "../" if file_path.startswith("states/") or file_path.startswith("tools/") else ""
        
        cur_header = header_base.replace('href="../', f'href="{depth}').replace('src="../', f'src="{depth}')
        cur_header = re.sub(r'<title>.*?</title>', f'<title>{title_en}</title>', cur_header)
        cur_header = re.sub(r'<meta name="description" content=".*?">', f'<meta name="description" content="{desc_en}">', cur_header)
        
        cur_footer = footer_base.replace('href="../', f'href="{depth}').replace('src="../', f'src="{depth}')
        
        # Determine breadcrumbs
        parts = filename.replace('.html', '').split('-')
        state_name = " ".join(parts[:2]).title() if len(parts) > 2 else "State"
        service_name = " ".join(parts[2:]).title() if len(parts) > 2 else title_en
        
        final_content = f'''
        <div style="margin-bottom: 20px; font-size: 0.9rem; color: var(--color-text-muted);">
            <a href="{depth}index.html" style="color: var(--color-primary); text-decoration: none;">Home</a> / 
            <a href="{depth}states/index.html" style="color: var(--color-primary); text-decoration: none;">State Services</a> / 
            <strong>{title_en}</strong>
        </div>
        
        <h1 style="color: var(--color-text); margin-bottom: 15px; font-size: 2.2rem;">
            <span data-lang-show="en">{title_en}</span>
            <span data-lang-show="hi">{title_hi}</span>
        </h1>
        
        <div class="service-content" style="background: var(--color-surface); padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); line-height: 1.8;">
            <div data-lang-show="en" class="content-en">
                {content_en}
            </div>
            
            <div data-lang-show="hi" class="content-hi">
                {content_hi}
            </div>
        </div>
        
        {tools_widget}
        '''
        
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(cur_header + final_content + cur_footer)
            
        sitemap_urls.append(f"https://sarkarisewaindia.com/{file_path}")
        count += 1

print(f"Successfully generated {count} rich HTML pages from batch JSONs!")
