import os

checklist_banner = """
  <div class="state-hub-banner" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 4px solid var(--color-accent); border-radius: 8px; padding: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px;">
    <div style="display: flex; align-items: center; gap: 12px;">
      <span style="font-size: 2rem;">📋</span>
      <div>
        <h3 style="margin: 0; font-size: 1.1rem; color: var(--color-primary);">सरकारी दफ़्तर जाने से पहले चेकलिस्ट बनाएँ!</h3>
        <p style="margin: 4px 0 0 0; font-size: 0.9rem; color: var(--color-text-muted);">क्या आप जानते हैं कि 40% आवेदन सिर्फ गलत दस्तावेज़ों के कारण रिजेक्ट हो जाते हैं? हमारी फ्री चेकलिस्ट जेनरेटर का इस्तेमाल करें।</p>
      </div>
    </div>
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <a href="../tools/document-checklist.html" class="btn btn--primary" style="font-size: 0.85rem; padding: 6px 12px;">चेकलिस्ट जेनरेट करें →</a>
    </div>
  </div>
"""

builder_banner = """
  <div class="state-hub-banner" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 4px solid var(--color-accent); border-radius: 8px; padding: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px;">
    <div style="display: flex; align-items: center; gap: 12px;">
      <span style="font-size: 2rem;">📝</span>
      <div>
        <h3 style="margin: 0; font-size: 1.1rem; color: var(--color-primary);">फ्री स्व-घोषणा पत्र (Affidavit) बनाएँ</h3>
        <p style="margin: 4px 0 0 0; font-size: 0.9rem; color: var(--color-text-muted);">टाइपिस्ट को ₹100 देने की ज़रूरत नहीं। 1 मिनट में अपना Self-Declaration (जैसे Income, Name Change, Gap Year) बनाएँ और प्रिंट करें।</p>
      </div>
    </div>
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <a href="../tools/self-declaration-builder.html" class="btn btn--primary" style="font-size: 0.85rem; padding: 6px 12px;">फ्री PDF बनाएँ →</a>
    </div>
  </div>
"""

def inject_banner(filepath, banner_html, marker='<div class="service-grid"'):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if banner_html[:50] in content: 
        return False
        
    if marker in content:
        new_content = content.replace(marker, banner_html + '\n  ' + marker)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    
    return False

def inject_banner_service(filepath, banner_html):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if banner_html[:50] in content:
        return False
        
    marker = '<div id="service-sections">'
    if marker in content:
        new_content = content.replace(marker, banner_html + '\n    ' + marker)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
        
    return False

# 1. Inject Checklist Banner
checklist_targets = [
    'category/identity-documents.html'
]
checklist_service_targets = [
    'service/caste-certificate.html',
    'service/income-certificate.html',
    'service/domicile-certificate.html',
    'service/passport.html',
    'service/driving-licence.html',
    'service/ration-card.html'
]

for t in checklist_targets:
    if os.path.exists(t):
        inject_banner(t, checklist_banner)

for t in checklist_service_targets:
    if os.path.exists(t):
        inject_banner_service(t, checklist_banner)

# 2. Inject Builder Banner
builder_targets = [
    'category/jobs-education.html'
]
builder_service_targets = [
    'service/national-scholarship-portal.html',
    'service/pm-usp-college-scholarship.html',
    'service/vidya-lakshmi-education-loan.html'
]

for t in builder_targets:
    if os.path.exists(t):
        inject_banner(t, builder_banner)

for t in builder_service_targets:
    if os.path.exists(t):
        inject_banner_service(t, builder_banner)

print("Session 8 Banners injected successfully.")
