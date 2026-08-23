// admin-csc.js
// Admin logic for fetching and managing CSC center verifications (Claims System)

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
        .from("csc_claims")
        .select("*")
        .order("submitted_at", { ascending: false });

      if (error) throw error;

      const pending = data.filter(c => c.status === 'pending' || c.status === 'changes_requested');
      const approved = data.filter(c => c.status === 'approved');

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
      pendingList.innerHTML = '<tr><td colspan="6" style="text-align:center; color:var(--admin-text-muted);">No pending claims.</td></tr>';
      return;
    }

    pendingList.innerHTML = centers.map(c => `
      <tr>
        <td>${new Date(c.submitted_at).toLocaleDateString()}</td>
        <td style="font-weight:600;">${c.centre_name}</td>
        <td><code>${c.application_id}</code></td>
        <td>${c.city}, ${c.district}</td>
        <td>${c.owner_name} (${c.owner_mobile})</td>
        <td>
          <button class="theme-toggle-btn" style="background:#10b981; color:#fff; border:none;" onclick="approveCSC('${c.id}')">Approve</button>
          <button class="logout-btn" style="margin-left:8px;" onclick="rejectCSC('${c.id}')">Reject</button>
        </td>
      </tr>
    `).join('');
  }

  function renderApproved(centers) {
    if (centers.length === 0) {
      approvedList.innerHTML = '<tr><td colspan="5" style="text-align:center; color:var(--admin-text-muted);">No approved profiles yet.</td></tr>';
      return;
    }

    approvedList.innerHTML = centers.map(c => `
      <tr>
        <td>${new Date(c.approved_at || c.submitted_at).toLocaleDateString()}</td>
        <td style="font-weight:600;">${c.centre_name}</td>
        <td><code>${c.application_id}</code></td>
        <td>${c.city}, ${c.district}</td>
        <td>
          <button class="logout-btn" onclick="rejectCSC('${c.id}')">Revoke</button>
        </td>
      </tr>
    `).join('');
  }

  window.approveCSC = async (id) => {
    if (!confirm("Approve this CSC Centre? This will queue it for Profile Generation.")) return;
    try {
      const client = await getSupabaseClient();
      const { error } = await client
        .from("csc_claims")
        .update({ status: 'approved', approved_at: new Date().toISOString() })
        .eq("id", id);
      
      if (error) throw error;
      loadCSCData();
    } catch (err) {
      alert("Error approving: " + err.message);
    }
  };

  window.rejectCSC = async (id) => {
    const reason = prompt("Enter rejection/revocation reason:");
    if (reason === null) return;
    
    try {
      const client = await getSupabaseClient();
      const { error } = await client
        .from("csc_claims")
        .update({ status: 'rejected', rejection_reason: reason })
        .eq("id", id);
      
      if (error) throw error;
      loadCSCData();
    } catch (err) {
      alert("Error rejecting: " + err.message);
    }
  };

  refreshBtn.addEventListener("click", loadCSCData);

  // Initial load
  loadCSCData();
});
