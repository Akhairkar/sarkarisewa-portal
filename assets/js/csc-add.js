/* ==========================================================================
   csc-add.js — Module 17: "Add your CSC centre" flow, for centres that
   aren't listed at all yet. Inserts a new row directly into csc_centres
   with status = 'pending' (RLS only allows inserting as 'pending' — see
   supabase/csc-schema.sql). You approve it later via the Table Editor.
   ========================================================================== */

(function () {
  const INDIAN_STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry",
    "Chandigarh"
  ];

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

  const formEl = document.getElementById("csc-add-form");
  const stateEl = document.getElementById("add-state");
  const statusEl = document.getElementById("csc-add-status");
  const submitBtn = document.getElementById("csc-add-submit");
  const servicesGridEl = document.getElementById("add-services-grid");

  if (!formEl) return;

  function renderServicesChecklist() {
    servicesGridEl.innerHTML = COMMON_CSC_SERVICES.map((s, i) => `
      <label class="csc-service-check">
        <input type="checkbox" name="add-service" value="${s}" id="add-service-${i}" />
        ${s}
      </label>`).join("");
  }

  function getSelectedServices() {
    return Array.from(servicesGridEl.querySelectorAll('input[name="add-service"]:checked')).map((cb) => cb.value);
  }

  function tk(key, fallback) {
    const lang = typeof getLang === "function" ? getLang() : "hi";
    if (window.SITE && SITE.langData && SITE.langData[lang] && SITE.langData[lang][key]) {
      return SITE.langData[lang][key];
    }
    return fallback || key;
  }

  function populateStates() {
    INDIAN_STATES.forEach((s) => {
      const opt = document.createElement("option");
      opt.value = s;
      opt.textContent = s;
      stateEl.appendChild(opt);
    });
  }

  formEl.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("add-name").value.trim();
    const address = document.getElementById("add-address").value.trim();
    const state = stateEl.value;
    const district = document.getElementById("add-district").value.trim();
    const pincode = document.getElementById("add-pincode").value.trim();
    const ownerName = document.getElementById("add-owner-name").value.trim();
    const ownerPhone = document.getElementById("add-owner-phone").value.trim();
    const ownerEmail = document.getElementById("add-owner-email").value.trim();
    const whatsapp = document.getElementById("add-whatsapp").value.trim();
    const phone = document.getElementById("add-phone").value.trim();
    const description = document.getElementById("add-description").value.trim();
    const lat = document.getElementById("add-lat").value.trim();
    const lng = document.getElementById("add-lng").value.trim();
    const services = getSelectedServices();
    const mode = document.getElementById("add-mode").value;

    if (!name || !address || !state || !ownerName || !ownerPhone) {
      statusEl.textContent = tk("csc_form_required", "Please fill in all required fields.");
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
      const { error } = await client.from("csc_centres").insert({
        name: name.slice(0, 120),
        address: address.slice(0, 300),
        state,
        district: district ? district.slice(0, 80) : null,
        pincode: pincode ? pincode.slice(0, 6) : null,
        owner_name: ownerName.slice(0, 80),
        owner_phone: ownerPhone.slice(0, 15),
        owner_email: ownerEmail ? ownerEmail.slice(0, 120) : null,
        whatsapp: whatsapp ? whatsapp.slice(0, 15) : null,
        phone: phone ? phone.slice(0, 15) : null,
        description: description ? description.slice(0, 500) : null,
        lat: lat ? parseFloat(lat) : null,
        lng: lng ? parseFloat(lng) : null,
        services_offered: services.length ? services : null,
        service_mode: mode,
        status: "pending",
      });
      if (error) throw error;

      statusEl.textContent = tk("csc_add_success", "Listing submitted! We'll review it and get it verified soon.");
      statusEl.className = "comment-form__status comment-form__status--success";
      formEl.reset();
      formEl.hidden = true;
    } catch (err) {
      console.error("Failed to submit new centre:", err);
      statusEl.textContent = tk("csc_add_error", "Could not submit your listing. Please try again.");
      statusEl.className = "comment-form__status comment-form__status--error";
    } finally {
      submitBtn.disabled = false;
    }
  });

  populateStates();
  renderServicesChecklist();
})();
