import os
import glob
import re

savings_banner = """
  <div class="state-hub-banner" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 4px solid var(--color-accent); border-radius: 8px; padding: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px;">
    <div style="display: flex; align-items: center; gap: 12px;">
      <span style="font-size: 2rem;">📊</span>
      <div>
        <h3 style="margin: 0; font-size: 1.1rem; color: var(--color-primary);">सरकारी बचत योजना तुलनित्र (Savings Comparator)</h3>
        <p style="margin: 4px 0 0 0; font-size: 0.9rem; color: var(--color-text-muted);">PPF, Sukanya Samriddhi (SSY), NPS, SCSS और NSC की तुलना करें और 80C के तहत टैक्स बचाने के लिए बेस्ट योजना चुनें।</p>
      </div>
    </div>
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <a href="../tools/savings-comparator.html" class="btn btn--primary" style="font-size: 0.85rem; padding: 6px 12px;">सभी योजनाओं की तुलना करें →</a>
    </div>
  </div>
"""

card_banner = """
  <div class="state-hub-banner" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 4px solid var(--color-accent); border-radius: 8px; padding: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px;">
    <div style="display: flex; align-items: center; gap: 12px;">
      <span style="font-size: 2rem;">💳</span>
      <div>
        <h3 style="margin: 0; font-size: 1.1rem; color: var(--color-primary);">सरकारी कार्ड्स में क्या अंतर है?</h3>
        <p style="margin: 4px 0 0 0; font-size: 0.9rem; color: var(--color-text-muted);">e-Shram, ABHA Health ID, Ayushman Bharat और Voter ID में कन्फ्यूज़न है? हमारे Find My Card विज़ार्ड से 10 सेकंड में जानें।</p>
      </div>
    </div>
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <a href="../tools/govt-card-clarifier.html" class="btn btn--primary" style="font-size: 0.85rem; padding: 6px 12px;">Find My Card विज़ार्ड →</a>
    </div>
  </div>
"""

def inject_banner(filepath, banner_html, marker='<div class="service-grid"'):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if banner_html[:50] in content: # simple check to avoid double injection
        return False
        
    if marker in content:
        new_content = content.replace(marker, banner_html + '\n  ' + marker)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    
    return False

def inject_banner_service(filepath, banner_html):
    # for service pages, inject before <div id="service-sections">
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

# 1. Inject Savings Banner
savings_targets = [
    'category/finance-tax.html',
    'tools/income-tax-calculator.html'
]
savings_service_targets = [
    'service/sukanya-samriddhi-yojana.html',
    'service/public-provident-fund.html',
    'service/national-pension-system.html',
    'service/mahila-samman-bachat-patra.html'
]

for t in savings_targets:
    if os.path.exists(t):
        # different marker for tools
        marker = '<div class="calculator-container' if 'tools/' in t else '<div class="service-grid"'
        inject_banner(t, savings_banner, marker)

for t in savings_service_targets:
    if os.path.exists(t):
        inject_banner_service(t, savings_banner)

# 2. Inject Card Clarifier Banner
card_targets = [
    'category/identity-documents.html',
    'category/health.html'
]
card_service_targets = [
    'service/e-shram-card.html',
    'service/abha-health-card.html',
    'service/abha-health-id.html',
    'service/ayushman-bharat.html'
]

for t in card_targets:
    if os.path.exists(t):
        inject_banner(t, card_banner)

for t in card_service_targets:
    if os.path.exists(t):
        inject_banner_service(t, card_banner)

print("Banners injected successfully.")
