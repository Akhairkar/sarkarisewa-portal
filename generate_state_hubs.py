import os
import glob

states = {
    "uttar-pradesh": "Uttar Pradesh",
    "bihar": "Bihar",
    "madhya-pradesh": "Madhya Pradesh",
    "rajasthan": "Rajasthan",
    "jharkhand": "Jharkhand",
    "uttarakhand": "Uttarakhand"
}

def build_state_hub(state_slug, state_name):
    # Get all html files in that dir except index.html
    html_files = glob.glob(f"service/csc-locator/{state_slug}/*.html")
    html_files = [os.path.basename(f) for f in html_files if os.path.basename(f) != "index.html"]
    
    links = ""
    for f in html_files:
        city_name = f.replace(".html", "").replace("-", " ").title()
        links += f'<a href="{f}" style="text-decoration:none; padding:15px; border:1px solid var(--color-border); border-radius:8px; display:inline-block; margin:10px; background:var(--color-surface); font-weight:bold; color:var(--color-primary);">{city_name} CSC</a>\n'
    
    html = f"""<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <link href="../../../assets/img/favicon-32.png" rel="icon" sizes="32x32" type="image/png"/>
    <title>CSC Centers in {state_name} - All Districts</title>
    <meta name="description" content="List of all Common Service Centers (CSC) and Pragya/Jan Seva Kendras in {state_name} by district."/>
    <link href="../../../assets/css/style.css" rel="stylesheet"/>
</head>
<body>
<div id="site-header">
    <div class="tricolor-rule"></div>
    <header class="site-header">
        <div class="container header-inner">
            <a class="brand" href="../../../index.html">
                <span class="brand-mark">S</span>
                <span class="brand-text">
                    <span class="brand-title">SarkariSewa India</span>
                    <span class="brand-tagline">Every Indian government service, in one place</span>
                </span>
            </a>
        </div>
    </header>
</div>

<main class="container" style="padding-top: 40px; min-height: 60vh;">
    <div style="margin-bottom: 20px; font-size: 0.9rem; color: var(--color-text-muted);">
        <a href="../../../index.html" style="color: var(--color-primary); text-decoration: none;">Home</a> / 
        <a href="../../../tools/csc-locator.html" style="color: var(--color-primary); text-decoration: none;">CSC Locator</a> / 
        <strong>{state_name}</strong>
    </div>

    <h1 style="color: var(--color-text); margin-bottom: 20px;">All Districts in {state_name} (CSC Locator)</h1>
    <p style="color: var(--color-text-muted); margin-bottom: 30px;">Select your district below to find the nearest Common Service Center.</p>
    
    <div style="display: flex; flex-wrap: wrap;">
        {links}
    </div>
</main>

<div id="site-footer">
    <footer class="site-footer">
        <div class="footer-bottom">
            <span>© SarkariSewa India · All content is for informational purposes only.</span>
        </div>
    </footer>
</div>
</body>
</html>
"""
    return html

for slug, name in states.items():
    filepath = f"service/csc-locator/{slug}/index.html"
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(build_state_hub(slug, name))

print("State hubs generated.")
