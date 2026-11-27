(() => {
  const config = window.PARTNER_SUPABASE_CONFIG || {};
  const validConfig = /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(config.url || "") &&
    !!config.publishableKey && !String(config.publishableKey).includes("YOUR_");
  const $ = (id) => document.getElementById(id);
  const title = $("accessTitle");
  const message = $("accessMessage");
  const status = $("accessStatus");
  const login = $("accessLogin");
  const signOut = $("accessSignOut");
  const setState = (heading, copy, badge, showLogin = false, showSignOut = false) => {
    title.textContent = heading;
    message.textContent = copy;
    status.textContent = badge;
    login.hidden = !showLogin;
    signOut.hidden = !showSignOut;
  };

  if (!validConfig || !window.supabase?.createClient) {
    setState("Partner portal setup is pending", "The secure Supabase connection has not been configured yet. The dashboard is locked and no sample lead or account data is being shown.", "Configuration required", true);
    return;
  }

  const client = window.supabase.createClient(config.url, config.publishableKey, {
    auth: { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true }
  });

  signOut.addEventListener("click", async () => {
    signOut.disabled = true;
    const { error } = await client.auth.signOut();
    if (error) {
      signOut.disabled = false;
      setState("Could not sign out", "Please retry. Your current session has not been cleared.", "Sign-out error", false, true);
      return;
    }
    window.location.replace("./auth.html");
  });

  async function verifyAccess() {
    setState("Checking your partner access…", "Please wait while we verify your signed-in account and approval status.", "Verifying session");
    const { data: sessionData, error: sessionError } = await client.auth.getSession();
    if (sessionError) {
      setState("Unable to verify your session", "Refresh this page or sign in again. The partner dashboard remains locked.", "Session check failed", true);
      return;
    }
    const session = sessionData?.session;
    if (!session) {
      setState("Sign in to continue", "This workspace is private. Please log in with your registered partner account. Dashboard previews are not exposed here.", "Authentication required", true);
      return;
    }

    signOut.hidden = false;
    login.hidden = true;
    const { data, error } = await client.rpc("partner_get_portal_access");
    if (error) {
      setState("Partner access could not be confirmed", "Your session is valid, but the access-check database function is not available yet. Ask the administrator to finish the approved setup; no dashboard data has been loaded.", "Access check unavailable", false, true);
      return;
    }
    if (!data || data.profile_exists !== true) {
      setState("Complete partner registration", "Your login is valid, but a partner profile was not found. Return to partner access and complete registration with your account details.", "Profile required", true, true);
      return;
    }
    if (data.account_status === "suspended" || data.verification_status === "rejected") {
      setState("Partner access is unavailable", "Your partner account is currently suspended or the verification was not approved. Contact the partner support team for the next steps.", "Access restricted", false, true);
      return;
    }
    if (data.account_status !== "active" || data.verification_status !== "verified") {
      setState("Your application is under review", "Your partner profile has been received. The admin team must verify and activate your account before leads or customer contact details can be accessed.", "Pending admin approval", false, true);
      return;
    }
    setState("Your partner account is approved", "Your account has passed the approval check. The live lead dashboard is still being connected, so this page will not show demo figures or placeholder customer records.", "Approved · Dashboard integration pending", false, true);
  }

  verifyAccess().catch(() => setState("Partner access check failed", "Please refresh or sign in again. Your dashboard remains locked until the account can be verified.", "Temporary error", true));
  client.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_OUT") window.location.replace("./auth.html");
  });
})();
