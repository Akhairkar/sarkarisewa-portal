// Owner photo for a verified CSC listing. The browser sends application id +
// owner mobile + password (same check as csc_owner_get) and one resized JPEG
// (base64). The service role key lives only here, inside Supabase.
import { createClient } from "jsr:@supabase/supabase-js@2";

const BUCKET = "csc-photos";
const MAX = 600_000;
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "method" }, 405);
  let b: { app?: string; mobile?: string; code?: string; image?: string; remove?: boolean };
  try { b = await req.json(); } catch { return json({ error: "bad_json" }, 400); }
  const app = String(b.app ?? "").slice(0, 50), mobile = String(b.mobile ?? "").slice(0, 20), code = String(b.code ?? "").slice(0, 20);
  if (!/^[A-Za-z0-9-]{4,50}$/.test(app) || code.length < 4) return json({ error: "bad_input" }, 400);

  const url = Deno.env.get("SUPABASE_URL")!;
  const sb = createClient(url, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
  const { data: rec, error } = await sb.rpc("csc_owner_get", { p_app: app, p_mobile: mobile, p_code: code });
  if (error) return json({ error: "check_failed" }, 500);
  if (!rec) return json({ error: "denied" }, 403);

  const prefix = `${url}/storage/v1/object/public/${BUCKET}/`;
  const old = typeof rec.photo_url === "string" && rec.photo_url.startsWith(prefix) ? rec.photo_url.slice(prefix.length) : null;
  let photo_url: string | null = null;

  if (!b.remove) {
    let bytes: Uint8Array;
    try { bytes = Uint8Array.from(atob(String(b.image ?? "").replace(/^data:image\/\w+;base64,/, "")), (c) => c.charCodeAt(0)); }
    catch { return json({ error: "bad_image" }, 400); }
    const jpeg = bytes.length > 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
    if (!jpeg || bytes.length < 2000 || bytes.length > MAX) return json({ error: "bad_image" }, 400);
    const name = `${app}-${Date.now()}.jpg`;
    const up = await sb.storage.from(BUCKET).upload(name, bytes, { contentType: "image/jpeg", cacheControl: "31536000", upsert: false });
    if (up.error) return json({ error: "upload_failed" }, 500);
    photo_url = prefix + name;
  }

  const { error: e2 } = await sb.from("csc_claims").update({ photo_url, updated_at: new Date().toISOString() }).eq("application_id", app).eq("status", "approved");
  if (e2) return json({ error: "save_failed" }, 500);
  if (old) await sb.storage.from(BUCKET).remove([old]);
  return json({ photo_url });
});
