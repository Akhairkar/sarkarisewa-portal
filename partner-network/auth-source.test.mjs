import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const auth = read("./auth-client.js");
const guard = read("./portal-guard.js");
const config = read("./config.js");
const demo = read("./demo-enquiry.html");
const gateway = read("../supabase/functions/partner-submit-enquiry/index.ts");

test("browser configuration contains public placeholders only", () => {
  assert.match(config, /publishableKey/);
  assert.match(config, /turnstileSiteKey/);
  assert.doesNotMatch(config, /(?:service_role|SUPABASE_SERVICE_ROLE_KEY)\s*:/i);
});

test("signup uses Supabase Auth and records required partner metadata", () => {
  for (const key of ["full_name", "business_name", "phone", "partner_type", "state", "district", "primary_service_code", "signup_source"]) {
    assert.match(auth, new RegExp(key));
  }
  assert.match(auth, /auth\.signUp\(/);
  assert.match(auth, /emailRedirectTo:/);
});

test("profile completion is performed through the guarded registration RPC", () => {
  assert.match(auth, /rpc\(["']partner_complete_registration["']/);
  assert.match(auth, /if \(error\) throw error/);
  assert.match(auth, /partner profile is saved and awaiting admin verification/);
});

test("login and password recovery use Supabase Auth APIs", () => {
  assert.match(auth, /auth\.signInWithPassword\(/);
  assert.match(auth, /auth\.resetPasswordForEmail\(/);
  assert.match(auth, /password-reset=1/);
});

test("portal requires a session and a real partner profile", () => {
  assert.match(guard, /auth\.getSession\(/);
  assert.match(guard, /rpc\(["']partner_get_portal_access["']/);
  assert.match(guard, /profile_exists !== true/);
});

test("portal gates pending, rejected and suspended accounts", () => {
  assert.match(guard, /account_status === "suspended"/);
  assert.match(guard, /verification_status === "rejected"/);
  assert.match(guard, /account_status !== "active" \|\| data\.verification_status !== "verified"/);
  assert.match(guard, /loadPartnerDashboard\(client\)/);
});

test("public enquiry page does not call the database intake RPC directly", () => {
  assert.match(demo, /partner-submit-enquiry/);
  assert.doesNotMatch(demo, /rpc\(["']partner_submit_customer_lead["']/);
});


test("public gateway enforces exact Origin allowlist and POST-only intake", () => {
  assert.match(gateway, /allowedOrigins\.includes\(origin\)/);
  assert.match(gateway, /req\.method !== "POST"/);
  assert.match(gateway, /Origin not allowed/);
});

test("public gateway bounds request size and rejects invalid JSON shapes", () => {
  assert.match(gateway, /16_384/);
  assert.match(gateway, /Array\.isArray\(parsed\)/);
  assert.match(gateway, /Invalid JSON body/);
});

test("public gateway verifies Turnstile token and origin hostname", () => {
  assert.match(gateway, /TURNSTILE_SECRET_KEY/);
  assert.match(gateway, /challenges\.cloudflare\.com\/turnstile\/v0\/siteverify/);
  assert.match(gateway, /verification\.hostname !== expectedHost/);
});

test("public gateway requires explicit consent before intake", () => {
  assert.match(gateway, /p_consent_share !== true/);
  assert.match(gateway, /Consent is required/);
});

test("service-role key is read only inside the server gateway", () => {
  assert.match(gateway, /Deno\.env\.get\("SUPABASE_SERVICE_ROLE_KEY"\)/);
  assert.match(gateway, /createClient\(supabaseUrl, serviceKey/);
  assert.doesNotMatch(demo, /SUPABASE_SERVICE_ROLE_KEY|service_role/i);
});

test("gateway hides raw database errors and calls the restricted intake RPC", () => {
  assert.match(gateway, /rpc\("partner_submit_customer_lead", rpcArgs\)/);
  assert.match(gateway, /Do not return raw database errors/);
  assert.doesNotMatch(gateway, /return json\(\{[^}]*error: error\.message/);
});

test("gateway source contains no escaped newline syntax defect", () => {
  assert.doesNotMatch(gateway, /\\\\n\s*\}/);
});
