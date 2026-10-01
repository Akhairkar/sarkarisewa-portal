import re

with open("service/special-intensive-revision-sir.html", "r", encoding="utf-8") as f:
    html = f.read()

# Update Title
html = re.sub(
    r'<title>.*?</title>',
    '<title>Special Intensive Revision (SIR) 2026: Voter List Check & Update Online</title>',
    html,
    flags=re.DOTALL
)

# Update meta description
html = re.sub(
    r'<meta name="description" content=".*?" />',
    '<meta name="description" content="Check your name in the Voter List through Special Intensive Revision (SIR) 2026. Learn how to apply for a new Voter ID, correct details, and download PVC online." />',
    html,
    flags=re.DOTALL
)

# Add CSC Banner right inside <div id="service-sections">
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
    html = html.replace('<div id="service-sections">', f'<div id="service-sections">\n{csc_banner}')

with open("service/special-intensive-revision-sir.html", "w", encoding="utf-8") as f:
    f.write(html)
print("Updated Main SIR page title, meta and CSC banner.")
