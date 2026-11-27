(() => {
  const config = window.PARTNER_SUPABASE_CONFIG || {};
  const validConfig = /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(config.url || "") &&
    !!config.publishableKey && !String(config.publishableKey).includes("YOUR_");
  const $ = (id) => document.getElementById(id);
  const reg = $("registerForm");
  const login = $("loginForm");
  const toastNode = $("toast");
  let supabaseClient = null;
  let toastTimer;

  function toast(message, error = false) {
    toastNode.textContent = message;
    toastNode.style.background = error ? "#8b2f45" : "#202238";
    toastNode.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastNode.classList.remove("show"), 6000);
  }

  function setBusy(form, busy) {
    const button = form.querySelector('button[type="submit"]');
    button.disabled = busy;
    button.style.opacity = busy ? ".65" : "1";
    button.textContent = busy ? "Please wait…" : (form === reg ? "Create partner account →" : "Log in to partner studio →");
  }

  function partnerType(value) {
    return ({
      "CSC / VLE operator": "csc_vle",
      "Cyber cafe / Digital centre": "cyber_cafe",
      "Existing business": "existing_business",
      "Independent consultant": "consultant",
      "New service provider": "new_business",
      "Other": "other"
    })[value] || "other";
  }

  function serviceCode(value) {
    return ({
      "Government form assistance": "govt_form_assistance",
      "PAN / Tax / GST services": "pan_tax_gst",
      "Business registration": "business_registration",
      "Insurance / Vehicle services": "insurance_vehicle",
      "Digital documentation": "digital_documentation",
      "Multiple services": "multiple_services"
    })[value] || "multiple_services";
  }

  async function savePartnerProfile(user) {
    const meta = user?.user_metadata || {};
    const required = ["business_name", "full_name", "phone", "state", "district", "partner_type", "primary_service_code"];
    const missing = required.filter((key) => !String(meta[key] || "").trim());
    if (missing.length) {
      throw new Error("Your account is signed in, but partner details are incomplete. Please contact support to complete onboarding.");
    }

    const { data, error } = await supabaseClient.rpc("partner_complete_registration", {
      p_partner_type: meta.partner_type,
      p_business_name: meta.business_name,
      p_owner_name: meta.full_name,
      p_phone: meta.phone,
      p_state: meta.state,
      p_district: meta.district,
      p_service_code: meta.primary_service_code
    });
    if (error) throw error;
    return data;
  }

  if (validConfig && window.supabase?.createClient) {
    supabaseClient = window.supabase.createClient(config.url, config.publishableKey, {
      auth: { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true }
    });
  }

  function show(mode) {
    const isRegister = mode === "register";
    reg.classList.toggle("hidden", !isRegister);
    login.classList.toggle("hidden", isRegister);
    $("registerTab").classList.toggle("active", isRegister);
    $("loginTab").classList.toggle("active", !isRegister);
    $("heading").textContent = isRegister ? "Create your partner account" : "Welcome back";
    $("subheading").textContent = isRegister
      ? "A few details to get your business started."
      : "Log in to manage your leads and grow your business.";
  }
  $("registerTab").addEventListener("click", () => show("register"));
  $("loginTab").addEventListener("click", () => show("login"));

  document.querySelectorAll(".show-pass").forEach((button) => {
    button.addEventListener("click", () => {
      const field = $(button.dataset.target);
      field.type = field.type === "password" ? "text" : "password";
      button.textContent = field.type === "password" ? "Show" : "Hide";
    });
  });

  $("confirmPassword").addEventListener("input", () => $("confirmPassword").setCustomValidity(""));

  reg.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!reg.reportValidity()) return;
    if ($("password").value !== $("confirmPassword").value) {
      $("confirmPassword").setCustomValidity("Passwords do not match.");
      $("confirmPassword").reportValidity();
      return;
    }
    if (!supabaseClient) {
      toast("Supabase is not configured yet. Add the project URL and publishable key in config.js.", true);
      return;
    }

    setBusy(reg, true);
    const values = Object.fromEntries(new FormData(reg).entries());
    const metadata = {
      full_name: values.fullName.trim(),
      business_name: values.businessName.trim(),
      phone: values.phone.trim(),
      partner_type: partnerType(values.partnerType),
      state: values.state,
      district: values.district.trim(),
      primary_service: values.service,
      primary_service_code: serviceCode(values.service),
      signup_source: "partner_network"
    };

    try {
      const { data, error } = await supabaseClient.auth.signUp({
        email: values.email.trim().toLowerCase(),
        password: values.password,
        options: {
          data: metadata,
          emailRedirectTo: new URL("./auth.html", window.location.href).href
        }
      });
      if (error) throw error;

      if (data.session && data.user) {
        const status = await savePartnerProfile(data.user);
        toast(status === "active"
          ? "Partner profile saved. Your account is active."
          : "Account created. Your partner profile is saved and awaiting admin verification/activation.");
        window.location.assign("./index.html");
      } else {
        toast("Registration received. Confirm your email, then log in to finish saving your partner profile.");
      }
      reg.reset();
      show("login");
      $("loginEmail").value = values.email.trim().toLowerCase();
    } catch (error) {
      toast(error.message || "Registration could not be completed.", true);
    } finally {
      setBusy(reg, false);
    }
  });

  login.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!login.reportValidity()) return;
    if (!supabaseClient) {
      toast("Supabase is not configured yet. Add the project URL and publishable key in config.js.", true);
      return;
    }
    setBusy(login, true);
    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: $("loginEmail").value.trim().toLowerCase(),
        password: $("loginPassword").value
      });
      if (error) throw error;
      const status = await savePartnerProfile(data.user);
      toast(status === "active"
        ? "Login successful. Your partner account is active."
        : "Login successful. Partner profile saved; your account is awaiting admin verification/activation.");
      window.location.assign("./index.html");
    } catch (error) {
      toast(error.message || "Login failed or partner profile could not be saved.", true);
    } finally {
      setBusy(login, false);
    }
  });

  $("forgotLink").addEventListener("click", async (event) => {
    event.preventDefault();
    const email = $("loginEmail").value.trim().toLowerCase();
    if (!email) {
      toast("Enter your email address first, then choose Forgot password.", true);
      $("loginEmail").focus();
      return;
    }
    if (!supabaseClient) {
      toast("Supabase is not configured yet. Add the project URL and publishable key in config.js.", true);
      return;
    }
    try {
      const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
        redirectTo: new URL("./auth.html?password-reset=1", window.location.href).href
      });
      if (error) throw error;
      toast("If the account is eligible, a password recovery email will be sent.");
    } catch (error) {
      toast(error.message || "Password recovery could not be started.", true);
    }
  });

  if (!validConfig) {
    toast("Setup required: add your Supabase Project URL and publishable key to config.js.", true);
  }
})();
