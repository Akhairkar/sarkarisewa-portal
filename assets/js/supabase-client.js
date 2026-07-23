/* ==========================================================================
   supabase-client.js — Module 14: Backend Foundation
   Single shared connection point to Supabase, used by Module 15 (comments)
   and Module 16 (subscribe) so those modules don't each reinvent the setup.

   ⚠️ SETUP REQUIRED — fill in your real values below:
     SUPABASE_URL:      Supabase Dashboard → Settings → API → Project URL
     SUPABASE_ANON_KEY: Supabase Dashboard → Settings → API → anon public key

   The anon key is safe to expose in client-side code — Supabase's Row-Level
   Security policies (defined in supabase/schema.sql) control what it can
   actually read/write, not the key itself.
   ========================================================================== */

const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL"; // e.g. "https://xxxxx.supabase.co"
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY"; // long string starting with "eyJ..."

let _client = null;

/**
 * Lazily creates (once) and returns the Supabase client, loading the
 * official SDK from a CDN on first use so pages that never need the
 * backend (most of the site) don't pay for it.
 * Returns null (and logs a warning) if SUPABASE_URL/KEY haven't been set
 * yet, so calling code can fail gracefully instead of throwing.
 */
async function getSupabaseClient() {
  if (SUPABASE_URL.includes("YOUR_SUPABASE") || SUPABASE_ANON_KEY.includes("YOUR_SUPABASE")) {
    console.warn("Supabase not configured yet — edit assets/js/supabase-client.js with your real Project URL and anon key.");
    return null;
  }
  if (_client) return _client;

  await new Promise((resolve, reject) => {
    if (window.supabase) return resolve(); // already loaded
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js";
    script.onload = resolve;
    script.onerror = () => reject(new Error("Failed to load Supabase SDK"));
    document.head.appendChild(script);
  });

  _client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return _client;
}
