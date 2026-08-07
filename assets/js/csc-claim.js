/* ==========================================================================
   csc-claim.js — Module 17: Claim flow for an EXISTING (unclaimed) CSC
   centre. Loads the centre's name for confirmation, then inserts the
   submitted form into the "claims" table (see supabase/csc-schema.sql).
   The centre itself is not modified here — you (admin) manually copy the
   claim's details onto the csc_centres row and set it to 'verified' after
   reviewing it in the Supabase Table Editor.
   ========================================================================== */

(function () {
  const params = new URLSearchParams(window.location.search);
  const centreId = params.get("id");

  const COMMON_CSC_SERVICES = [
    "Aadhaar Enrolment / Update",
    "PAN Card",
    "Birth Certificate",
    "Death Certificate",
    "Income Certificate",
    "Caste Certificate",
    "Domicile Certificate",
    "Voter ID / Electoral Services",
    "Ration Card",
    "Passport Assistance",
    "Bank Account Opening",
    "Insurance (PMSBY / PMJJBY)",
    "Pension Schemes",
    "Utility Bill Payment",
    "Printing / Scanning / Photocopy",
    "Railway / Bus Ticket Booking",
    "Employment Registration",
    "Educational Certificates / Result Printouts",
  ];

  const nameEl = document.getElementById("csc-claim-centre-name");
  const formEl = document.getElementById("csc-claim-form");
  const statusEl = document.getElementById("csc-claim-status");
  const submitBtn = document.getElementById("csc-claim-submit");
  const servicesGridEl = document.getElementById("claim-services-grid");

  if (!formEl) return;

  function renderServicesChecklist() {
    servicesGridEl.innerHTML = COMMON_CSC_SERVICES.map((s, i) => `
      <label class="csc-service-check">
        <input type="checkbox" name="claim-service" value="${s}" id="claim-service-${i}" />
        ${s}
      </label>`).join("");
  }

  function getSelectedServices() {
    return Array.from(servicesGridEl.querySelectorAll('input[name="claim-service"]:checked')).map((cb) => cb.value);
  }

  function tk(key, fallback) {
    const lang = typeof getLang === "function" ? getLang() : "hi";
    if (window.SITE && SITE.langData && SITE.langData[lang] && SITE.langData[lang][key]) {
      return SITE.langData[lang][key];
    }
    return fallback || key;
  }

  async function loadCentreName() {
    if (!centreId) {
      nameEl.textContent = tk("csc_not_found", "This CSC centre could not be found.");
      formEl.hidden = true;
      return;
    }
    const client = await getSupabaseClient();
    if (!client) {
      nameEl.textContent = tk("csc_not_configured", "The CSC directory is not available right now.");
      formEl.hidden = true;
      return;
    }
    try {
      const { data, error } = await client
        .from("csc_centres")
        .select("name, status")
        .eq("id", centreId)
        .single();
      if (error || !data) throw error || new Error("Not found");
      if (data.status === "verified") {
        nameEl.textContent = tk("csc_already_verified", "This centre is already verified.");
        formEl.hidden = true;
        return;
      }
      nameEl.textContent = data.name;
    } catch (err) {
      console.error("Failed to load centre:", err);
      nameEl.textContent = tk("csc_not_found", "This CSC centre could not be found.");
      formEl.hidden = true;
    }
  }

  formEl.addEventListener("submit", async (e) => {
    e.preventDefault();

    const ownerName = document.getElementById("claim-owner-name").value.trim();
    const ownerPhone = document.getElementById("claim-owner-phone").value.trim();
    const ownerEmail = document.getElementById("claim-owner-email").value.trim();
    const whatsapp = document.getElementById("claim-whatsapp").value.trim();
    const description = document.getElementById("claim-description").value.trim();
    const lat = document.getElementById("claim-lat").value.trim();
    const lng = document.getElementById("claim-lng").value.trim();
    const services = getSelectedServices();
    const mode = document.getElementById("claim-mode").value;

    if (!ownerName || !ownerPhone) {
      statusEl.textContent = tk("csc_form_required", "Please fill in your name and phone number.");
      statusEl.className = "comment-form__status comment-form__status--error";
      return;
    }
    if (!mode) {
      statusEl.textContent = tk("csc_form_mode_required", "Please select whether you work online, offline, or both.");
      statusEl.className = "comment-form__status comment-form__status--error";
      return;
    }

    const client = await getSupabaseClient();
    if (!client) {
      statusEl.textContent = tk("csc_not_configured", "The CSC directory is not available right now.");
      statusEl.className = "comment-form__status comment-form__status--error";
      return;
    }

    submitBtn.disabled = true;
    statusEl.textContent = "";

    try {
      const { error } = await client.from("claims").insert({
        csc_centre_id: centreId,
        owner_name: ownerName.slice(0, 80),
        owner_phone: ownerPhone.slice(0, 15),
        owner_email: ownerEmail ? ownerEmail.slice(0, 120) : null,
        whatsapp: whatsapp ? whatsapp.slice(0, 15) : null,
        description: description ? description.slice(0, 500) : null,
        lat: lat ? parseFloat(lat) : null,
        lng: lng ? parseFloat(lng) : null,
        services_offered: services.length ? services : null,
        service_mode: mode,
        status: "pending",
      });
      if (error) throw error;

      statusEl.textContent = tk("csc_claim_success", "Claim submitted! We'll review it and get your listing verified soon.");
      statusEl.className = "comment-form__status comment-form__status--success";
      formEl.reset();
      formEl.hidden = true;
    } catch (err) {
      console.error("Failed to submit claim:", err);
      statusEl.textContent = tk("csc_claim_error", "Could not submit your claim. Please try again.");
      statusEl.className = "comment-form__status comment-form__status--error";
    } finally {
      submitBtn.disabled = false;
    }
  });

  renderServicesChecklist();
  loadCentreName();
})();
