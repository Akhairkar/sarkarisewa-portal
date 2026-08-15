// csc-submit.js
// Handles the "Get Verified" form submission to Supabase

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("operator-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerText;

    const centerName = document.getElementById("op-name");
    const cscId = document.getElementById("op-cscid");
    const pincode = document.getElementById("op-pincode");
    const contact = document.getElementById("op-contact");

    if (!centerName || !cscId || !pincode || !contact) {
      alert("Form inputs are not correctly mapped.");
      return;
    }

    try {
      submitBtn.disabled = true;
      submitBtn.innerText = "Submitting...";

      if (typeof getSupabaseClient !== "function") {
        throw new Error("Supabase client is not loaded yet.");
      }

      const client = await getSupabaseClient();
      if (!client) throw new Error("Could not initialize Supabase.");

      const { data, error } = await client
        .from("csc_centres")
        .insert([
          {
            center_name: centerName.value.trim(),
            csc_id: cscId.value.trim(),
            pincode: pincode.value.trim(),
            contact: contact.value.trim()
          }
        ]);

      if (error) throw error;

      form.innerHTML = `
        <div style="text-align: center; padding: 20px 0;">
          <h3 style="color: #10b981; margin-top:0;">✅ Request Submitted!</h3>
          <p style="color: var(--color-text-muted);">Thank you. Our admin team will verify your CSC ID and approve your listing shortly.</p>
        </div>
      `;

    } catch (error) {
      console.error("Submission Error:", error);
      alert("There was a problem submitting your request. Please try again later.");
      submitBtn.disabled = false;
      submitBtn.innerText = originalText;
    }
  });
});
