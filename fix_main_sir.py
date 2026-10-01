import re

with open("service/special-intensive-revision-sir.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Add CSC Banner at the top of the body
csc_banner = """
      <!-- CSC Locator Banner -->
      <div style="background: linear-gradient(135deg, #eff6ff, #dbeafe); border: 1px solid #bfdbfe; border-radius: 12px; padding: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="background: #3b82f6; color: white; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0;">🏢</div>
          <div>
            <h3 style="margin: 0; color: #1e3a8a; font-size: 1.15rem;">Voter ID Update/Print CSC Center</h3>
            <p style="margin: 4px 0 0 0; color: #1d4ed8; font-size: 0.95rem;">Find your nearest CSC (Jan Seva Kendra) to easily update your Voter ID, correct name/photo, or print PVC card.</p>
          </div>
        </div>
        <a href="../tools/csc-locator.html" style="background: #2563eb; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">📍 Find Nearest CSC Center</a>
      </div>
"""
if "Voter ID Update/Print CSC Center" not in html:
    html = html.replace('<div class="service-content-body">', f'<div class="service-content-body">\n{csc_banner}')

# 2. Add Official Link Button (NVSP / ECI)
official_btn = """
      <div style="margin: 32px 0; text-align: center;">
        <a href="https://voters.eci.gov.in" target="_blank" rel="noopener" style="background: #16a34a; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 1.1rem; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">🌐 Visit Official Voter Portal (ECI)</a>
      </div>
"""
if "Visit Official Voter Portal" not in html:
    # Insert right before the tools section
    html = html.replace('<h3>', f'{official_btn}\n      <h3>', 1) # Only first match if possible, let's just do it broadly
    
with open("service/special-intensive-revision-sir.html", "w", encoding="utf-8") as f:
    f.write(html)
print("Updated main page!")
