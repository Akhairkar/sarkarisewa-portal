import re

with open("blog/maharashtra-sir-voter-list-check-name-guide.html", "r", encoding="utf-8") as f:
    html = f.read()

# Replace the specific <ul> block in Section 7
old_ul = """      <ul>
        <li><a href="../project-report/index.html"><strong>Project Report Generator</strong></a> - 
 ? ? r ^ o? ? (PMEGP)  "   r? ݅?  _  < "       ?  ? ? 
 ? < o؅  ? Y    < ? Y   " _ ? , </li>
        <li><a href="../service/aadhaar-card.html"><strong> +   _     _ ?  
 ,؅  _ ? ,</strong></a> -  .  "  +   _     _ ?    <  .  ؅ Y  _ _    ,   
    "   ?  , ?  o _ "   _ ? </li>
        <li><a href="../service/pm-kisan.html"><strong> ? ? r     , _ "  _< o " _</strong></a> - 
    , _ "< ,       ?     ?  ? _  , 1 _ _   _  _< o " _    _   _   % 
 _ ? , </li>
        <li><a href="../service/pan-card.html"><strong> ^ "    _ ?  (PAN Card)</strong></a> - 
 ؅ "   r  Y^  ? ,  "      ?  ? _  ؅ "- ݅؅ "       ? 
 . "   _ ? _ </li>
      </ul>"""

new_grid = """
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 24px 0;">
        <a href="../project-report/index.html" style="text-decoration:none; background:var(--color-surface); border:1px solid var(--color-border); padding:16px; border-radius:8px; display:flex; align-items:flex-start; gap:12px; color:var(--color-text); box-shadow: 0 2px 4px rgba(0,0,0,0.05); transition: transform 0.2s;">
          <span style="font-size:32px; flex-shrink:0;">📊</span>
          <div>
            <strong style="display:block; color:var(--color-primary); font-size:1.1rem; margin-bottom:4px;">Project Report Generator</strong>
            <span style="font-size:0.9rem; color:var(--color-text-muted); line-height:1.4;">Create CMA data & project reports for PMEGP/Mudra loans.</span>
          </div>
        </a>
        <a href="../service/aadhaar-card.html" style="text-decoration:none; background:var(--color-surface); border:1px solid var(--color-border); padding:16px; border-radius:8px; display:flex; align-items:flex-start; gap:12px; color:var(--color-text); box-shadow: 0 2px 4px rgba(0,0,0,0.05); transition: transform 0.2s;">
          <span style="font-size:32px; flex-shrink:0;">🪪</span>
          <div>
            <strong style="display:block; color:var(--color-primary); font-size:1.1rem; margin-bottom:4px;">Aadhaar Card Updates</strong>
            <span style="font-size:0.9rem; color:var(--color-text-muted); line-height:1.4;">Update address, name, or photo in your Aadhaar card easily.</span>
          </div>
        </a>
        <a href="../service/pm-kisan.html" style="text-decoration:none; background:var(--color-surface); border:1px solid var(--color-border); padding:16px; border-radius:8px; display:flex; align-items:flex-start; gap:12px; color:var(--color-text); box-shadow: 0 2px 4px rgba(0,0,0,0.05); transition: transform 0.2s;">
          <span style="font-size:32px; flex-shrink:0;">🚜</span>
          <div>
            <strong style="display:block; color:var(--color-primary); font-size:1.1rem; margin-bottom:4px;">PM Kisan Yojana</strong>
            <span style="font-size:0.9rem; color:var(--color-text-muted); line-height:1.4;">Check beneficiary status and apply for ₹6,000 yearly aid.</span>
          </div>
        </a>
        <a href="../service/pan-card.html" style="text-decoration:none; background:var(--color-surface); border:1px solid var(--color-border); padding:16px; border-radius:8px; display:flex; align-items:flex-start; gap:12px; color:var(--color-text); box-shadow: 0 2px 4px rgba(0,0,0,0.05); transition: transform 0.2s;">
          <span style="font-size:32px; flex-shrink:0;">💳</span>
          <div>
            <strong style="display:block; color:var(--color-primary); font-size:1.1rem; margin-bottom:4px;">PAN Card Services</strong>
            <span style="font-size:0.9rem; color:var(--color-text-muted); line-height:1.4;">Apply for new PAN card or link it with your Aadhaar online.</span>
          </div>
        </a>
      </div>
"""

# Let's use regex to replace anything between <ul> and </ul> after "Calculators & Tools"
html = re.sub(r'<ul>\s*<li><a href="\.\./project-report/index\.html.*?</ul>', new_grid, html, flags=re.DOTALL)

with open("blog/maharashtra-sir-voter-list-check-name-guide.html", "w", encoding="utf-8") as f:
    f.write(html)
print("Replaced tools section with nice cards!")
