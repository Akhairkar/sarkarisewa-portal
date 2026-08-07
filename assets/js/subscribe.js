/* ==========================================================================
   subscribe.js — Module 16: Email / WhatsApp Subscribe
   Renders into any element with id="subscribe-widget". Reads an optional
   data-service-id attribute to scope the subscription to one service;
   without it, the subscription is treated as general site updates.
   Uses the shared getSupabaseClient() and the "subscribers" table from
   Module 14 (supabase/schema.sql) — insert-only, no read-back needed.
   ========================================================================== */

(function () {
  const hosts = document.querySelectorAll("#subscribe-widget");
  if (!hosts.length) return;

  function tk(key, fallback) {
    const lang = typeof getLang === "function" ? getLang() : "hi";
    if (window.SITE && SITE.langData && SITE.langData[lang] && SITE.langData[lang][key]) {
      return SITE.langData[lang][key];
    }
    return fallback || key;
  }

  hosts.forEach((host) => {
    const serviceId = host.dataset.serviceId || null;
    const isGeneral = !serviceId;

    host.innerHTML = `
      <div class="subscribe-widget">
        <h3 class="subscribe-widget__title">${tk(isGeneral ? "subscribe_title_general" : "subscribe_title", isGeneral ? "Get updates from SarkariSewa Portal" : "Get updates about this service")}</h3>
        <p class="subscribe-widget__desc">${tk(isGeneral ? "subscribe_desc_general" : "subscribe_desc", "New info — sent occasionally, no spam.")}</p>
        <form class="subscribe-form">
          <input type="email" class="subscribe-email" data-i18n-placeholder="subscribe_email_placeholder" placeholder="${tk("subscribe_email_placeholder", "Your email address")}" />
          <input type="tel" class="subscribe-phone" data-i18n-placeholder="subscribe_phone_placeholder" placeholder="${tk("subscribe_phone_placeholder", "Phone number (optional)")}" />
          <label class="subscribe-whatsapp-label">
            <input type="checkbox" class="subscribe-whatsapp" />
            ${tk("subscribe_whatsapp_label", "Also notify me on WhatsApp")}
          </label>
          <div class="subscribe-form__actions">
            <span class="subscribe-form__status"></span>
            <button type="submit" class="btn-primary subscribe-submit">${tk("subscribe_submit", "Subscribe")}</button>
          </div>
        </form>
      </div>
    `;

    const form = host.querySelector(".subscribe-form");
    const emailInput = host.querySelector(".subscribe-email");
    const phoneInput = host.querySelector(".subscribe-phone");
    const whatsappInput = host.querySelector(".subscribe-whatsapp");
    const statusEl = host.querySelector(".subscribe-form__status");
    const submitBtn = host.querySelector(".subscribe-submit");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const phone = phoneInput.value.trim();

      if (!email && !phone) {
        statusEl.textContent = tk("subscribe_email_required", "Please enter your email or phone number.");
        statusEl.className = "subscribe-form__status subscribe-form__status--error";
        return;
      }

      const client = await getSupabaseClient();
      if (!client) {
        statusEl.textContent = tk("subscribe_not_configured", "Subscriptions are not available right now.");
        statusEl.className = "subscribe-form__status subscribe-form__status--error";
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = tk("subscribe_submitting", "Submitting…");
      statusEl.textContent = "";

      try {
        const { error } = await client.from("subscribers").insert({
          email: email || null,
          phone: phone || null,
          whatsapp_opted_in: !!whatsappInput.checked,
          service_id: serviceId,
        });
        if (error) throw error;

        statusEl.textContent = tk("subscribe_success", "Subscribed! You'll hear from us when there's an update.");
        statusEl.className = "subscribe-form__status subscribe-form__status--success";
        form.reset();
      } catch (err) {
        console.error("Failed to subscribe:", err);
        statusEl.textContent = tk("subscribe_error", "Could not subscribe right now. Please try again.");
        statusEl.className = "subscribe-form__status subscribe-form__status--error";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = tk("subscribe_submit", "Subscribe");
      }
    });
  });
})();
