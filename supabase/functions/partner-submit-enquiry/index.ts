// Public enquiry gateway. Deploy as a Supabase Edge Function.
// Required server secrets: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY,
// TURNSTILE_SECRET_KEY, ALLOWED_ORIGINS (comma-separated exact origins).
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const allowedOrigins = (Deno.env.get("ALLOWED_ORIGINS") || "")
  .split(",").map((value) => value.trim()).filter(Boolean);

const json = (body: unknown, status = 200, origin = "") =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "Vary": "Origin",
      ...(origin ? { "Access-Control-Allow-Origin": origin } : {}),
      "Access-Control-Allow-Headers": "content-type, x-client-info, apikey, authorization",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    },
  });

Deno.serve(async (req: Request) => {
  const origin = req.headers.get("Origin") || "";
  const allowed = !!origin && allowedOrigins.includes(origin);
  if (req.method === "OPTIONS") {
    return allowed
      ? new Response("ok", { headers: {
          "Access-Control-Allow-Origin": origin,
          "Access-Control-Allow-Headers": "content-type, x-client-info, apikey, authorization",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Vary": "Origin",
        } })
      : json({ error: "Origin not allowed" }, 403);
  }
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405, allowed ? origin : "");
  if (!allowed) return json({ error: "Origin not allowed" }, 403);

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const turnstileSecret = Deno.env.get("TURNSTILE_SECRET_KEY");
  if (!supabaseUrl || !serviceKey || !turnstileSecret || allowedOrigins.length === 0) {
    return json({ error: "Enquiry gateway is not configured" }, 503, origin);
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400, origin);
  }

  const token = typeof body.turnstile_token === "string" ? body.turnstile_token : "";
  if (token.length < 10 || token.length > 2048) {
    return json({ error: "Bot verification is required" }, 400, origin);
  }

  const verifyBody = new URLSearchParams({
    secret: turnstileSecret,
    response: token,
  });
  const remoteIp = req.headers.get("cf-connecting-ip");
  if (remoteIp && /^[0-9a-fA-F:.]{3,64}$/.test(remoteIp)) verifyBody.set("remoteip", remoteIp);

  let verification: { success?: boolean; hostname?: string };
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: verifyBody,
    });
    if (!response.ok) return json({ error: "Bot verification unavailable" }, 503, origin);
    verification = await response.json();
  } catch {
    return json({ error: "Bot verification unavailable" }, 503, origin);
  }
  const expectedHost = new URL(origin).hostname;\n  if (!verification.success || verification.hostname !== expectedHost) {\n    return json({ error: "Bot verification failed" }, 403, origin);\n  }

  const fields = [
    "p_page_path", "p_service_code", "p_service_name", "p_state",
    "p_district", "p_customer_name", "p_customer_phone",
    "p_customer_details", "p_consent_share", "p_consent_version",
  ];
  const rpcArgs: Record<string, unknown> = {};
  for (const field of fields) rpcArgs[field] = body[field] ?? null;
  if (typeof rpcArgs.p_consent_share !== "boolean" || rpcArgs.p_consent_share !== true) {
    return json({ error: "Consent is required" }, 400, origin);
  }

  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data, error } = await supabase.rpc("partner_submit_customer_lead", rpcArgs);
  if (error) {
    // Do not return raw database errors or customer data to the caller.
    return json({ error: "Enquiry could not be accepted. Check the details and try again." }, 400, origin);
  }
  if (!data) return json({ accepted: false, reason: "duplicate_or_rate_limited" }, 429, origin);
  return json({ accepted: true, reference: data }, 200, origin);
});
