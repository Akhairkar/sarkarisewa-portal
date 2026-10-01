import glob
import re

BANNER_HTML = """
    <!-- Cross-Linking Banner: CSC & Jan Aushadhi -->
    <section class="service-section" style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #86efac; border-radius: 12px; padding: 24px; margin-top: 30px; margin-bottom: 20px;">
      <h2 style="color: #166534; font-size: 1.5rem; margin-top: 0; margin-bottom: 12px;">Need Help or Cheap Medicines? 🏥</h2>
      <p style="color: #15803d; font-size: 1.05rem; margin-bottom: 16px; line-height: 1.5;">
        Save time and money by using our officially integrated location tools:
      </p>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <a href="../../tools/csc-locator.html" style="flex: 1; min-width: 200px; background: white; border: 2px solid #22c55e; color: #166534; padding: 12px 16px; border-radius: 8px; text-decoration: none; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <span>📍 Find Nearest CSC Center</span>
        </a>
        <a href="../../service/jan-aushadhi-store-locator.html" style="flex: 1; min-width: 200px; background: white; border: 2px solid #22c55e; color: #166534; padding: 12px 16px; border-radius: 8px; text-decoration: none; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <span>💊 Jan Aushadhi Store Locator</span>
        </a>
      </div>
    </section>
"""

def inject():
    files = glob.glob("service/*.html")
    modified_count = 0
    
    for file in files:
        if file.endswith("jan-aushadhi-store-locator.html"):
            continue
            
        with open(file, "r", encoding="utf-8") as f:
            content = f.read()
            
        if "Cross-Linking Banner: CSC & Jan Aushadhi" in content:
            continue
            
        if "</main>" in content:
            content = content.replace("</main>", f"{BANNER_HTML}\n</main>")
            with open(file, "w", encoding="utf-8") as f:
                f.write(content)
            modified_count += 1
            
    print(f"Successfully injected cross-linking banner into {modified_count} service pages.")

if __name__ == "__main__":
    inject()
