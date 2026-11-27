// Internal lead-routing endpoint.
// Deploy only as a trusted server function. Never call it from browser code.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "null",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceKey) return json({ error: "Routing service is not configured" }, 503);

  // Require the exact server secret. A normal signed-in partner token is not sufficient.
  const authorization = req.headers.get("Authorization") || "";
  if (authorization !== `Bearer ${serviceKey}`) return json({ error: "Forbidden" }, 403);

  let body: { lead_id?: unknown };
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const leadId = typeof body.lead_id === "string" ? body.lead_id : "";
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(leadId)) {
    return json({ error: "A valid lead_id UUID is required" }, 400);
  }

  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data, error } = await supabase.rpc("partner_route_customer_lead", {
    p_lead_id: leadId,
  });

  if (error) {
    // Do not log or echo customer details or secret values.
    return json({ error: "Lead routing failed", detail: error.message }, 500);
  }
  return json(data ?? { assigned: false, reason: "empty_routing_result" });
});
