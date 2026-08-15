// admin-csc.js
// Admin logic for fetching and managing CSC center verifications

document.addEventListener("DOMContentLoaded", async () => {
  const pendingList = document.getElementById("csc-pending-list");
  const approvedList = document.getElementById("csc-approved-list");
  const refreshBtn = document.getElementById("csc-refresh-btn");

  if (!pendingList || !approvedList) return;

  async function loadCSCData() {
    pendingList.innerHTML = '<tr><td colspan="6" style="text-align:center;">Loading...</td></tr>';
    approvedList.innerHTML = '<tr><td colspan="5" style="text-align:center;">Loading...</td></tr>';

    try {
      if (typeof getSupabaseClient !== "function") throw new Error("Supabase client not available.");
      const client = await getSupabaseClient();
      if (!client) throw new Error("Could not initialize Supabase.");

      const { data, error } = await client
        .from("csc_centres")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      const pending = data.filter(c => !c.is_verified);
      const approved = data.filter(c => c.is_verified);

      renderPending(pending);
      renderApproved(approved);

    } catch (err) {
      console.error("Error loading CSC data:", err);
      pendingList.innerHTML = `<tr><td colspan="6" style="text-align:center; color:red;">Failed to load: ${err.message}</td></tr>`;
      approvedList.innerHTML = `<tr><td colspan="5" style="text-align:center; color:red;">Failed to load</td></tr>`;
    }
  }

  function renderPending(centers) {
    if (centers.length === 0) {
      pendingList.innerHTML = '<tr><td colspan="6" style="text-align:center; color:var(--admin-text-muted);">No pending requests.</td></tr>';
      return;
    }

    pendingList.innerHTML = centers.map(c => `
      <tr>
        <td>${new Date(c.created_at).toLocaleDateString()}</td>
        <td style="font-weight:600;">${c.center_name}</td>
        <td><code>${c.csc_id}</code></td>
        <td>${c.pincode}</td>
        <td>${c.contact}</td>
        <td>
          <button class="theme-toggle-btn" style="background:#10b981; color:#fff; border:none;" onclick="approveCSC('${c.id}')">Approve</button>
          <button class="logout-btn" style="margin-left:8px;" onclick="rejectCSC('${c.id}')">Reject</button>
        </td>
      </tr>
    `).join('');
  }

  function renderApproved(centers) {
    if (centers.length === 0) {
      approvedList.innerHTML = '<tr><td colspan="5" style="text-align:center; color:var(--admin-text-muted);">No approved centres yet.</td></tr>';
      return;
    }

    approvedList.innerHTML = centers.map(c => `
      <tr>
        <td>${new Date(c.created_at).toLocaleDateString()}</td>
        <td style="font-weight:600;">${c.center_name}</td>
        <td><code>${c.csc_id}</code></td>
        <td>${c.pincode}</td>
        <td>
          <button class="logout-btn" onclick="rejectCSC('${c.id}')">Revoke</button>
        </td>
      </tr>
    `).join('');
  }

  window.approveCSC = async (id) => {
    if (!confirm("Approve this CSC Centre to be listed publicly?")) return;
    try {
      const client = await getSupabaseClient();
      const { error } = await client
        .from("csc_centres")
        .update({ is_verified: true })
        .eq("id", id);
      
      if (error) throw error;
      loadCSCData();
    } catch (err) {
      alert("Error approving: " + err.message);
    }
  };

  window.rejectCSC = async (id) => {
    if (!confirm("Are you sure you want to delete this listing?")) return;
    try {
      const client = await getSupabaseClient();
      const { error } = await client
        .from("csc_centres")
        .delete()
        .eq("id", id);
      
      if (error) throw error;
      loadCSCData();
    } catch (err) {
      alert("Error deleting: " + err.message);
    }
  };

  refreshBtn.addEventListener("click", loadCSCData);

  // Initial load
  loadCSCData();
});
