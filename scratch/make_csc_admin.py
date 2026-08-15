import re

with open("admin/csc.html", "r", encoding="utf-8") as f:
    html = f.read()

# Fix active menu class
html = html.replace('class="admin-nav-item active">⚙️ Services', 'class="admin-nav-item">⚙️ Services')
html = html.replace('class="admin-nav-item">🏬 CSC Listings', 'class="admin-nav-item active">🏬 CSC Listings')

# Replace <main> content
main_content = """  <main class="admin-main">
    <div class="admin-topbar">
      <div class="admin-page-title">
        <h1>CSC / VLE Approvals</h1>
        <p style="margin:4px 0 0; font-size:0.86rem; color:var(--admin-text-muted);">Manage and verify incoming CSC centre listings submitted by operators.</p>
      </div>
    </div>

    <div class="dash-card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <h3 style="margin:0;">Pending Verifications</h3>
        <button id="csc-refresh-btn" class="theme-toggle-btn">↻ Refresh</button>
      </div>
      <div style="overflow-x:auto;">
        <table class="admin-table" style="width:100%;">
          <thead>
            <tr>
              <th>Submitted</th>
              <th>Center Name</th>
              <th>CSC ID</th>
              <th>Pincode</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="csc-pending-list">
            <tr><td colspan="6" style="text-align:center; color:var(--admin-text-muted);">Loading pending requests...</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="dash-card">
      <h3 style="margin-top:0;">Approved Centres</h3>
      <div style="overflow-x:auto;">
        <table class="admin-table" style="width:100%;">
          <thead>
            <tr>
              <th>Approved On</th>
              <th>Center Name</th>
              <th>CSC ID</th>
              <th>Pincode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="csc-approved-list">
            <tr><td colspan="5" style="text-align:center; color:var(--admin-text-muted);">Loading approved centres...</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</div>

<!-- Dependencies -->
<script src="../assets/js/supabase-client.js"></script>
<script src="../assets/js/admin-auth.js"></script>
<script src="../assets/js/admin-csc.js"></script>
</body>
</html>"""

html = re.sub(r'<main class="admin-main">.*</body>\s*</html>', main_content, html, flags=re.DOTALL)

# Update title
html = html.replace('<title>Services &amp; Schemes — SarkariSewa Admin</title>', '<title>CSC Approvals — SarkariSewa Admin</title>')

with open("admin/csc.html", "w", encoding="utf-8") as f:
    f.write(html)
