import os
import re

# We will read the header and footer from our standard locator page
base_file = "service/jan-aushadhi-store-locator.html"
with open(base_file, "r", encoding="utf-8") as f:
    base_html = f.read()

match_main = re.search(r'(<main[^>]*>)', base_html)
match_end_main = re.search(r'(</main>)', base_html)

header_base = base_html[:match_main.start()] + '<main class="container">'
footer_base = base_html[match_end_main.end():]

# Function to generate page
def generate_csc_page(level, state_slug, state_name_en, state_name_hi, city_slug=None, city_name_en=None, city_name_hi=None):
    
    # Path logic
    if level == "state":
        depth = "../../"
        file_path = f"service/csc-locator/{state_slug}.html"
        location_en = state_name_en
        location_hi = state_name_hi
        breadcrumb = f'''
        <a href="../../index.html">Home</a> <span class="sep">/</span>
        <a href="../csc-locator.html">CSC Locator</a> <span class="sep">/</span>
        <span class="current">{state_name_en}</span>
        '''
    else:
        depth = "../../../"
        file_path = f"service/csc-locator/{state_slug}/{city_slug}.html"
        location_en = f"{city_name_en}, {state_name_en}"
        location_hi = f"{city_name_hi}, {state_name_hi}"
        breadcrumb = f'''
        <a href="../../../index.html">Home</a> <span class="sep">/</span>
        <a href="../../csc-locator.html">CSC Locator</a> <span class="sep">/</span>
        <a href="../{state_slug}.html">{state_name_en}</a> <span class="sep">/</span>
        <span class="current">{city_name_en}</span>
        '''

    os.makedirs(os.path.dirname(file_path), exist_ok=True)

    # Adjust paths in header/footer
    # The base header has paths relative to `service/`, so it uses `../`
    # We replace `../` with `depth`
    cur_header = header_base.replace('href="../', f'href="{depth}')
    cur_header = cur_header.replace('src="../', f'src="{depth}')
    cur_footer = footer_base.replace('href="../', f'href="{depth}')
    cur_footer = cur_footer.replace('src="../', f'src="{depth}')

    # Update SEO tags
    title = f"CSC Maha e-Seva Kendra in {location_en} - VLE Contact & Services"
    desc = f"Find the nearest CSC (Common Service Centre) in {location_en}. Apply for Aadhar, PAN, Ayushman Card. Get VLE contact details and location."
    
    cur_header = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', cur_header, flags=re.DOTALL)
    cur_header = re.sub(r'<meta name="description" content=".*?"', f'<meta name="description" content="{desc}"', cur_header)
    cur_header = re.sub(r'<link rel="canonical" href=".*?"', f'<link rel="canonical" href="https://sarkarisewaindia.com/{file_path}"', cur_header)
    
    # Inject Supabase JS into header
    if '@supabase/supabase-js' not in cur_header:
        cur_header = cur_header.replace('</head>', '  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>\n</head>')

    # MAIN CONTENT - ANTI THIN CONTENT STRATEGY
    main_content = f'''
    <nav class="breadcrumb" id="breadcrumb" aria-label="Breadcrumb">
      {breadcrumb}
    </nav>

    <div class="content-wrapper" style="margin-top:20px; background: var(--color-surface); padding: 30px; border-radius: 8px; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
      
      <h1 style="color: var(--color-primary); margin-bottom: 15px; font-size: 2.2rem; line-height: 1.3;">
        <span data-lang-show="en">CSC (Maha e-Seva) Kendra in {location_en}</span>
        <span data-lang-show="hi">{location_hi} में जन सेवा केंद्र (CSC)</span>
      </h1>

      <p style="font-size: 1.1rem; line-height: 1.6; color: var(--color-text-muted); margin-bottom: 25px;">
        <span data-lang-show="en">Welcome to the digital portal for finding verified Common Service Centres (VLE) in {location_en}. Our goal is to connect citizens directly with local operators for essential government services like Aadhar updates, PAN card generation, Ayushman Bharat, and income certificates. Use the search tool below to find your nearest center, view verified contact details, or claim your own listing if you are a VLE.</span>
        <span data-lang-show="hi">{location_hi} में सत्यापित जन सेवा केंद्र (VLE) खोजने के लिए आपका स्वागत है। यहां आप आधार अपडेट, पैन कार्ड, आयुष्मान भारत जैसी सेवाओं के लिए अपने नजदीकी केंद्र को खोज सकते हैं।</span>
      </p>

      <!-- Supabase Search & Results UI -->
      <h2 style="border-bottom: 2px solid var(--color-primary); padding-bottom: 5px; margin-bottom: 20px;">
        <span data-lang-show="en">🔍 Find Nearest CSC Center</span>
        <span data-lang-show="hi">🔍 नज़दीकी जन सेवा केंद्र खोजें</span>
      </h2>
      
      <div style="background: var(--color-bg); padding: 20px; border-radius: 8px; border: 1px solid var(--color-border); margin-bottom: 30px;">
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <input type="text" id="csc-search-input" placeholder="Enter Pincode, Village, or Ward..." style="flex: 1; min-width: 250px; padding: 12px; border: 1px solid var(--color-border); border-radius: 4px; background: var(--color-surface); color: var(--color-text); font-size: 1rem;" />
          <button class="btn btn-primary" id="csc-search-btn" style="padding: 12px 24px;">Search</button>
          <button class="btn btn-outline" id="csc-gps-btn" style="padding: 12px 24px; border: 1px solid var(--color-border); background: var(--color-surface); color: var(--color-text);">📍 Near Me</button>
        </div>
      </div>

      <div id="csc-results-container" data-location="{city_slug or state_slug}">
        <!-- Dynamic Supabase Cards will load here -->
        <p style="text-align: center; color: var(--color-text-muted); padding: 20px;">Connecting to secure database...</p>
      </div>

      <!-- Services List (SEO Value) -->
      <h2 style="margin-top: 40px; border-bottom: 2px solid var(--color-primary); padding-bottom: 5px;">
        <span data-lang-show="en">📄 Top Services Available at CSC {location_en}</span>
        <span data-lang-show="hi">📄 उपलब्ध प्रमुख सेवाएं</span>
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;">
        <div style="padding: 15px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text);">
          <div style="font-size: 24px; margin-bottom: 10px;">💳</div>
          <strong style="color: var(--color-primary);">Aadhar Services</strong>
          <p style="font-size: 0.85rem; margin-top: 5px; color: var(--color-text-muted);">Mobile update, biometric update, prints.</p>
        </div>
        <div style="padding: 15px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text);">
          <div style="font-size: 24px; margin-bottom: 10px;">🏦</div>
          <strong style="color: var(--color-primary);">Banking & PAN</strong>
          <p style="font-size: 0.85rem; margin-top: 5px; color: var(--color-text-muted);">New PAN card, corrections, AePS withdrawals.</p>
        </div>
        <div style="padding: 15px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text);">
          <div style="font-size: 24px; margin-bottom: 10px;">🏥</div>
          <strong style="color: var(--color-primary);">Ayushman Bharat</strong>
          <p style="font-size: 0.85rem; margin-top: 5px; color: var(--color-text-muted);">Health card generation and eKYC.</p>
        </div>
        <div style="padding: 15px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text);">
          <div style="font-size: 24px; margin-bottom: 10px;">📜</div>
          <strong style="color: var(--color-primary);">State Certificates</strong>
          <p style="font-size: 0.85rem; margin-top: 5px; color: var(--color-text-muted);">Income, Caste, and Domicile certificates.</p>
        </div>
      </div>

      <!-- FAQ Section -->
      <h2 style="margin-top: 40px; border-bottom: 2px solid var(--color-primary); padding-bottom: 5px;">
        <span data-lang-show="en">❓ Frequently Asked Questions ({location_en})</span>
        <span data-lang-show="hi">❓ अक्सर पूछे जाने वाले प्रश्न</span>
      </h2>
      <div style="margin-top: 20px; color: var(--color-text);">
        <details style="margin-bottom: 15px; padding: 15px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 8px;">
          <summary style="font-weight: bold; cursor: pointer; color: var(--color-primary);">What are the working hours of CSCs in {location_en}?</summary>
          <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.5; color: var(--color-text-muted);">Most Common Service Centres operate between 9:00 AM to 6:00 PM from Monday to Saturday. However, independent VLEs may have custom timings. Please call the center before visiting.</p>
        </details>
        <details style="margin-bottom: 15px; padding: 15px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 8px;">
          <summary style="font-weight: bold; cursor: pointer; color: var(--color-primary);">How can a VLE claim their listing?</summary>
          <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.5; color: var(--color-text-muted);">If you own a center in {location_en}, click the "Claim Listing" button on your profile card. After brief verification, your full contact number will be visible to public users to increase your customer footfall.</p>
        </details>
      </div>

      <!-- Related Tools Badges -->
      <h2 style="margin-top: 40px; border-bottom: 2px solid var(--color-primary); padding-bottom: 5px;">
        <span data-lang-show="en">🌐 Explore Government Schemes</span>
        <span data-lang-show="hi">🌐 अन्य सरकारी योजनाएं</span>
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin-top: 20px;">
        <a href="{depth}tools/eligibility-checker.html" style="display: flex; align-items: center; gap: 15px; padding: 16px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 10px; text-decoration: none; color: var(--color-text);">
          <div style="font-size: 28px; background: var(--color-surface); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid var(--color-border);">✅</div>
          <div>
            <div style="font-weight: 600; color: var(--color-primary);">Eligibility Checker</div>
            <div style="font-size: 0.85rem; color: var(--color-text-muted);">Check scheme eligibility</div>
          </div>
        </a>
        <a href="{depth}tools/document-checklist.html" style="display: flex; align-items: center; gap: 15px; padding: 16px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 10px; text-decoration: none; color: var(--color-text);">
          <div style="font-size: 28px; background: var(--color-surface); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid var(--color-border);">📂</div>
          <div>
            <div style="font-weight: 600; color: var(--color-primary);">Document Checklist</div>
            <div style="font-size: 0.85rem; color: var(--color-text-muted);">Know required documents</div>
          </div>
        </a>
      </div>

    </div>
    <!-- CSC Supabase Script -->
    <script src="{depth}assets/js/csc-supabase-ui.js"></script>
    '''

    full_html = cur_header + "\n" + main_content + "\n" + cur_footer
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(full_html)
    print(f"Generated: {file_path}")

# Generate Demo Pages
generate_csc_page("state", "maharashtra", "Maharashtra", "महाराष्ट्र")
generate_csc_page("city", "maharashtra", "Maharashtra", "महाराष्ट्र", "nagpur", "Nagpur", "नागपुर")
generate_csc_page("city", "maharashtra", "Maharashtra", "महाराष्ट्र", "pune", "Pune", "पुणे")

