import re

with open("blog/maharashtra-sir-voter-list-check-name-guide.html", "r", encoding="utf-8") as f:
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
html = html.replace('<div class="blog-content-body">', f'<div class="blog-content-body">\n{csc_banner}')

# 2. Add Official Link Button
official_btn = """
      <div style="margin: 32px 0; text-align: center;">
        <a href="https://ceo.maharashtra.gov.in" target="_blank" rel="noopener" style="background: #16a34a; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 1.1rem; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">🌐 Visit Official State CEO Portal</a>
      </div>
"""
# Insert before section 3 or at the end. Let's insert it right after section 2 or before h3 Useful Tools.
# Let's just put it before the closing of blog-content-body
# Actually, the user wants "niche tools bhi ekdum paraghraph jaise ache icons chahiye the"

html = re.sub(
    r'(<ul[^>]*>\s*<li><a href="\.\./tools/eligibility-checker\.html">.*?</ul>)',
    r'''
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 24px 0;">
      <a href="../tools/eligibility-checker.html" style="text-decoration:none; background:var(--color-surface); border:1px solid var(--color-border); padding:16px; border-radius:8px; display:flex; align-items:center; gap:12px; color:var(--color-text); box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <span style="font-size:24px;">✅</span><span style="font-weight:600;">Scheme Eligibility Engine</span>
      </a>
      <a href="../tools/document-checklist.html" style="text-decoration:none; background:var(--color-surface); border:1px solid var(--color-border); padding:16px; border-radius:8px; display:flex; align-items:center; gap:12px; color:var(--color-text); box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <span style="font-size:24px;">📄</span><span style="font-weight:600;">Document Checklist</span>
      </a>
      <a href="../tools/status-troubleshooter.html" style="text-decoration:none; background:var(--color-surface); border:1px solid var(--color-border); padding:16px; border-radius:8px; display:flex; align-items:center; gap:12px; color:var(--color-text); box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <span style="font-size:24px;">🔍</span><span style="font-weight:600;">Status Troubleshooter</span>
      </a>
    </div>
    ''',
    html,
    flags=re.DOTALL
)

# Insert the Official Button right before the tools section (which is indicated by <h3> in Hindi)
# Searching for the H3 that precedes the tools
html = html.replace('<h3> ', f'{official_btn}\n      <h3> ')
# Actually if the encoding is weird, we can just insert the button before the grid we just made
html = html.replace('<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 24px 0;">', f'{official_btn}\n    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 24px 0;">')


# 4. State Related Services (at the bottom)
state_cards = """
      <h2 style="margin-top: 40px; border-top: 1px solid var(--color-border); padding-top: 24px; font-size: 1.5rem;">Maharashtra State Services</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 20px 0;">
        <a href="../states/maharashtra-caste-certificate.html" style="text-decoration:none; background:var(--color-surface); border:1px solid var(--color-border); padding:16px; border-radius:8px; display:flex; align-items:center; gap:12px; color:var(--color-text); box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <span style="font-size:24px;">🏛️</span><span style="font-weight:600;">Maharashtra Caste Certificate</span>
        </a>
        <a href="../states/maharashtra-income-certificate.html" style="text-decoration:none; background:var(--color-surface); border:1px solid var(--color-border); padding:16px; border-radius:8px; display:flex; align-items:center; gap:12px; color:var(--color-text); box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <span style="font-size:24px;">💰</span><span style="font-weight:600;">Maharashtra Income Certificate</span>
        </a>
        <a href="../service/maharashtra-ration-card.html" style="text-decoration:none; background:var(--color-surface); border:1px solid var(--color-border); padding:16px; border-radius:8px; display:flex; align-items:center; gap:12px; color:var(--color-text); box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <span style="font-size:24px;">🌾</span><span style="font-weight:600;">Maharashtra Ration Card</span>
        </a>
      </div>
"""
html = html.replace('</div>\n  \n      </div>\n\n      <section class="blog-post-related"', f'{state_cards}\n</div>\n  \n      </div>\n\n      <section class="blog-post-related"')

with open("blog/maharashtra-sir-voter-list-check-name-guide.html", "w", encoding="utf-8") as f:
    f.write(html)
print("Updated blog HTML successfully")
