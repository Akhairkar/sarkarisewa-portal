import os
import glob
import re

banner_html = """
  <div class="state-hub-banner" style="background: linear-gradient(135deg, #eef2f6 0%, #e0e7ff 100%); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px;">
    <div style="display: flex; align-items: center; gap: 12px;">
      <span style="font-size: 2rem;">📸</span>
      <div>
        <h3 style="margin: 0; font-size: 1.1rem; color: var(--color-primary);">सरकारी परीक्षा और योजना के लिए फोटो टूल्स (100% Free)</h3>
        <p style="margin: 4px 0 0 0; font-size: 0.9rem; color: var(--color-text-muted);">UPSC, SSC या राज्य पुलिस फॉर्म भर रहे हैं? बिना प्राइवेसी खोये फोटो, सिग्नेचर और डॉक्यूमेंट्स को सही KB में रिसाइज़ करें।</p>
      </div>
    </div>
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <a href="../tools/photo-resizer.html" class="btn btn--outline" style="background: white; font-size: 0.85rem; padding: 6px 12px;">🖼️ Photo Resizer</a>
      <a href="../tools/signature-resizer.html" class="btn btn--outline" style="background: white; font-size: 0.85rem; padding: 6px 12px;">✍️ Signature Resizer</a>
      <a href="../tools/document-compressor.html" class="btn btn--outline" style="background: white; font-size: 0.85rem; padding: 6px 12px;">📄 Document Compressor</a>
    </div>
  </div>
"""

states_dir = 'states'
files_to_update = glob.glob(os.path.join(states_dir, '*.html'))

count = 0
for filepath in files_to_update:
    if os.path.basename(filepath) in ['index.html', 'state.html']:
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'state-hub-banner' in content:
        continue
        
    new_content = content.replace(
        '<div class="state-services-list" id="state-services-list">',
        banner_html + '\n  <div class="state-services-list" id="state-services-list">'
    )
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count += 1

print(f"Successfully injected banner into {count} state hub files.")
