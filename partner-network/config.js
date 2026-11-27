/* Public browser configuration only.
 * Set the isolated test project's URL, publishable/anon key and Turnstile site key.
 * NEVER put a service_role key or Turnstile secret in this file.
 */
window.PARTNER_SUPABASE_CONFIG = {
  url: "YOUR_SUPABASE_PROJECT_URL",
  publishableKey: "YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY",
  turnstileSiteKey: "YOUR_TURNSTILE_SITE_KEY"
};
