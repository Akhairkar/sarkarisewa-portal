import os
import re

file_path = "service/csc-locator/maharashtra.html"
with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# We want to replace the basic search box with a Premium Dropdown Directory UI
old_search_ui_start = html.find('<!-- Supabase Search & Results UI -->')
old_search_ui_end = html.find('<!-- Services List (SEO Value) -->')

premium_ui = '''<!-- Premium Directory Search UI -->
      <div style="background: linear-gradient(135deg, var(--color-primary) 0%, #1e3a8a 100%); padding: 40px 20px; border-radius: 12px; margin-bottom: 30px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); color: white; text-align: center;">
        <h2 style="color: white; margin-bottom: 10px; font-size: 2rem;">Find Verified VLEs Near You</h2>
        <p style="color: #e2e8f0; margin-bottom: 25px; font-size: 1.1rem;">Select your district or use GPS to find authorized CSC centers instantly.</p>
        
        <div style="display: flex; gap: 15px; flex-wrap: wrap; justify-content: center; max-width: 800px; margin: 0 auto; background: white; padding: 15px; border-radius: 8px;">
          
          <select id="csc-state-select" style="flex: 1; min-width: 200px; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; background: #f8fafc; color: #334155; font-size: 1rem; font-weight: 500;">
            <option value="maharashtra" selected>📍 Maharashtra</option>
          </select>

          <select id="csc-district-select" style="flex: 1; min-width: 200px; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; background: #f8fafc; color: #334155; font-size: 1rem; font-weight: 500;">
            <option value="">-- Select District --</option>
            <option value="nagpur">Nagpur</option>
            <option value="pune">Pune</option>
            <option value="mumbai">Mumbai</option>
            <option value="nashik">Nashik</option>
            <option value="thane">Thane</option>
            <option value="aurangabad">Aurangabad</option>
          </select>
          
          <button class="btn btn-primary" id="csc-search-btn" style="padding: 12px 30px; font-weight: bold; background: #10b981; border: none; font-size: 1.05rem;">Search</button>
          
          <button class="btn btn-outline" id="csc-gps-btn" style="padding: 12px 20px; border: 1px solid #cbd5e1; background: #f1f5f9; color: #0f172a; font-weight: bold; display: flex; align-items: center; gap: 5px;">
            <span style="font-size: 1.2rem;">🎯</span> Near Me
          </button>
        </div>
      </div>

      <!-- Quick City Links (SEO & UX) -->
      <div style="margin-bottom: 30px;">
        <h3 style="font-size: 1.2rem; margin-bottom: 15px; color: var(--color-text);">Top Searched Cities in Maharashtra:</h3>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <a href="maharashtra/nagpur.html" style="padding: 8px 16px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 20px; color: var(--color-primary); text-decoration: none; font-weight: 500; font-size: 0.9rem; transition: all 0.2s;">Nagpur (240+ Centers)</a>
          <a href="maharashtra/pune.html" style="padding: 8px 16px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 20px; color: var(--color-primary); text-decoration: none; font-weight: 500; font-size: 0.9rem; transition: all 0.2s;">Pune (500+ Centers)</a>
          <a href="#" style="padding: 8px 16px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 20px; color: var(--color-primary); text-decoration: none; font-weight: 500; font-size: 0.9rem; transition: all 0.2s;">Mumbai</a>
          <a href="#" style="padding: 8px 16px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 20px; color: var(--color-primary); text-decoration: none; font-weight: 500; font-size: 0.9rem; transition: all 0.2s;">Nashik</a>
        </div>
      </div>

      <div id="csc-results-container" data-location="maharashtra">
        <!-- Dynamic Supabase Cards will load here -->
      </div>
      
      '''

html = html[:old_search_ui_start] + premium_ui + html[old_search_ui_end:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)
print("Updated Maharashtra template with Premium UI.")
