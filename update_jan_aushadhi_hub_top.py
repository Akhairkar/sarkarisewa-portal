import os

hub_path = "service/jan-aushadhi-store-locator.html"

with open(hub_path, "r", encoding="utf-8") as f:
    html = f.read()

states = [
    {"slug": "andaman-nicobar", "name": "Andaman and Nicobar Islands"},
    {"slug": "andhra-pradesh", "name": "Andhra Pradesh"},
    {"slug": "arunachal-pradesh", "name": "Arunachal Pradesh"},
    {"slug": "assam", "name": "Assam"},
    {"slug": "bihar", "name": "Bihar"},
    {"slug": "chandigarh", "name": "Chandigarh"},
    {"slug": "chhattisgarh", "name": "Chhattisgarh"},
    {"slug": "dadra-nagar-haveli-daman-diu", "name": "Dadra & Nagar Haveli and Daman & Diu"},
    {"slug": "delhi", "name": "Delhi"},
    {"slug": "goa", "name": "Goa"},
    {"slug": "gujarat", "name": "Gujarat"},
    {"slug": "haryana", "name": "Haryana"},
    {"slug": "himachal-pradesh", "name": "Himachal Pradesh"},
    {"slug": "jammu-kashmir", "name": "Jammu and Kashmir"},
    {"slug": "jharkhand", "name": "Jharkhand"},
    {"slug": "karnataka", "name": "Karnataka"},
    {"slug": "kerala", "name": "Kerala"},
    {"slug": "ladakh", "name": "Ladakh"},
    {"slug": "lakshadweep", "name": "Lakshadweep"},
    {"slug": "madhya-pradesh", "name": "Madhya Pradesh"},
    {"slug": "maharashtra", "name": "Maharashtra"},
    {"slug": "manipur", "name": "Manipur"},
    {"slug": "meghalaya", "name": "Meghalaya"},
    {"slug": "mizoram", "name": "Mizoram"},
    {"slug": "nagaland", "name": "Nagaland"},
    {"slug": "odisha", "name": "Odisha"},
    {"slug": "puducherry", "name": "Puducherry"},
    {"slug": "punjab", "name": "Punjab"},
    {"slug": "rajasthan", "name": "Rajasthan"},
    {"slug": "sikkim", "name": "Sikkim"},
    {"slug": "tamil-nadu", "name": "Tamil Nadu"},
    {"slug": "telangana", "name": "Telangana"},
    {"slug": "tripura", "name": "Tripura"},
    {"slug": "uttar-pradesh", "name": "Uttar Pradesh"},
    {"slug": "uttarakhand", "name": "Uttarakhand"},
    {"slug": "west-bengal", "name": "West Bengal"}
]

grid_html = '''
    <!-- JAN AUSHADHI STATE HUB GRID -->
    <section class="service-section" id="state-wise-stores" style="margin-bottom: 40px; padding-top: 20px;">
      <h2 class="service-section__title" style="margin-bottom: 20px; font-size: 1.6rem; color: var(--color-primary);">
        <span data-lang-show="en">dY"? Find Jan Aushadhi Stores by State</span>
        <span data-lang-show="hi">dY"?   _ o? _  . "? , _   o "  "       ؅ , ݅?   -< o؅ ,</span>
      </h2>
      <p style="margin-bottom: 20px; color: var(--color-text-muted);">
        <span data-lang-show="en">Select your state below to find store locations, generic medicine prices, and senior citizen benefits in your area.</span>
        <span data-lang-show="hi"> .  "   ? ؅  ?   r؅ ,  ,? Y<   <  ؅   ",  o؅ "؅      ݅  _ " ,     ݅ _ r  "      ?   " _ -      _< o " _ " ,   ?  o _ "   _ ?       ?  .  " _   _ o? _  s? "؅ , </span>
      </p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px;">
'''

for state in states:
    grid_html += f'        <a href="jan-aushadhi/{state["slug"]}.html" style="display: block; padding: 12px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 6px; text-decoration: none; color: var(--color-primary); font-weight: 500; transition: all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">{state["name"]} &rarr;</a>\n'

grid_html += '''      </div>
    </section>
    <!-- /JAN AUSHADHI STATE HUB GRID -->
'''

if "JAN AUSHADHI STATE HUB GRID" in html:
    print("Grid already exists.")
else:
    target_str = '<div id="service-sections">'
    if target_str in html:
        html = html.replace(target_str, target_str + '\n' + grid_html)
        with open(hub_path, "w", encoding="utf-8") as f:
            f.write(html)
        print("Inserted grid at top.")
    else:
        print("Could not find target_str")

