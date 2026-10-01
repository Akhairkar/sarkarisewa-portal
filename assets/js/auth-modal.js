/**
 * auth-modal.js
 * ------------------------------------------------------------------
 * Site-wide login/signup — one account (magic-link email, no
 * password) that works across every tool on the site, e.g. the
 * Project Report Generator's auto-save/resume. Lazily loaded by
 * main.js, right after supabase-client.js, on every page (so the
 * account button/modal in the header works everywhere without
 * needing to edit every page's script tags).
 * ------------------------------------------------------------------
 */

(function () {
  "use strict";

  const accountBtn = document.getElementById("account-btn");
  const accountLabel = document.getElementById("account-label");
  const mobileAccountBtn = document.getElementById("mobile-account-btn");
  const modal = document.getElementById("ss-auth-modal");
  const backdrop = document.getElementById("ss-auth-backdrop");
  const closeBtn = document.getElementById("ss-auth-close");
  const form = document.getElementById("ss-auth-form");
  const emailInput = document.getElementById("ss-auth-email");
  const submitBtn = document.getElementById("ss-auth-submit");
  const statusEl = document.getElementById("ss-auth-status");
  const logoutBtn = document.getElementById("ss-auth-logout");

  if (!modal) return; // header markup not present on this page — nothing to wire

  function openModal() {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    if (emailInput) emailInput.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  if (accountBtn) accountBtn.addEventListener("click", openModal);
  if (mobileAccountBtn) mobileAccountBtn.addEventListener("click", openModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  function updateAuthUI(user) {
    if (accountLabel) accountLabel.textContent = user ? user.email : "Login";
    if (accountBtn) accountBtn.setAttribute("aria-label", user ? `Account: ${user.email}` : "Login");
    if (mobileAccountBtn) mobileAccountBtn.textContent = user ? user.email : "Login";
    if (logoutBtn) logoutBtn.hidden = !user;
    if (form) form.hidden = !!user;
    if (statusEl) {
      if (user) {
        statusEl.hidden = false;
        statusEl.textContent = `Logged in as ${user.email}`;
      } else {
        statusEl.hidden = true;
        statusEl.textContent = "";
      }
    }
  }

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (!email) return;

      submitBtn.disabled = true;
      statusEl.hidden = false;
      statusEl.textContent = "Link bheja ja raha hai...";

      try {
        const client = await getSupabaseClient();
        if (!client) {
          statusEl.textContent = "Login abhi available nahi hai. Kripya baad mein try karein.";
          return;
        }
        const { error } = await client.auth.signInWithOtp({
          email,
          options: { emailRedirectTo: window.location.href },
        });
        if (error) throw error;
        statusEl.textContent = "Link bhej diya! Apna email check karein aur usme diye gaye link par click karein.";
      } catch (err) {
        console.error("Login failed:", err);
        statusEl.textContent = "Kuch galat ho gaya. Kripya dobara try karein.";
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      try {
        const client = await getSupabaseClient();
        if (client) await client.auth.signOut();
      } catch (err) {
        console.warn("Logout failed:", err);
      }
      updateAuthUI(null);
      closeModal();
    });
  }

  // Reflect whatever session already exists (e.g. after clicking the
  // magic link) and keep the header in sync if it changes in another
  // tab, or right after this tab's own sign-in/sign-out.
  (async () => {
    const client = await getSupabaseClient();
    if (!client) return;

    const {
      data: { user },
    } = await client.auth.getUser();
    updateAuthUI(user);

    client.auth.onAuthStateChange((_event, session) => {
      updateAuthUI(session ? session.user : null);
    });
  })();

  // Lets other scripts (e.g. report-form-ui.js) open the same modal
  // instead of building their own.
  window.ssAuth = { openLoginModal: openModal };
})();
