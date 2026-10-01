/**
 * SarkariSewa India — GSTIN verification backend
 * Deploy as a Cloudflare Worker and route:
 *   https://sarkarisewaindia.com/api/gstin/*
 *
 * Required secret:
 *   GSTIN_API_KEY
 *
 * Provider: gstinapi.in
 * The API key must NEVER be exposed to browser code.
 */
const PROVIDER = "https://www.gstinapi.in/v1/gstin/";

const cors = {
  "Access-Control-Allow-Origin": "https://sarkarisewaindia.com",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...cors }
  });
}

function validGSTIN(value) {
  return /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value);
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method !== "GET") {
      return json({ success: false, error: "Method not allowed" }, 405);
    }

    const url = new URL(request.url);
    const match = url.pathname.match(/^\/api\/gstin\/([0-9A-Za-z]{15})\/?$/);

    if (!match) {
      return json({ success: false, error: "Invalid GSTIN endpoint" }, 400);
    }

    const gstin = match[1].toUpperCase();

    if (!validGSTIN(gstin)) {
      return json({ success: false, error: "Invalid GSTIN format" }, 400);
    }

    if (!env.GSTIN_API_KEY) {
      return json({ success: false, error: "Verification service is not configured" }, 503);
    }

    let upstream;
    try {
      upstream = await fetch(PROVIDER + encodeURIComponent(gstin), {
        method: "GET",
        headers: {
          "x-api-key": env.GSTIN_API_KEY,
          "Accept": "application/json"
        }
      });
    } catch (error) {
      return json({ success: false, error: "Verification provider unavailable" }, 502);
    }

    let body;
    try {
      body = await upstream.json();
    } catch {
      return json({ success: false, error: "Invalid provider response" }, 502);
    }

    if (!upstream.ok) {
      const messages = {
        401: "Verification service authentication failed",
        402: "Verification service credits exhausted",
        403: "Verification service access denied",
        404: "GSTIN not found",
        429: "Too many verification requests. Please try again shortly",
        502: "Verification provider temporarily unavailable"
      };
      return json({
        success: false,
        error: messages[upstream.status] || "Verification failed",
        provider_status: upstream.status
      }, upstream.status === 404 ? 404 : upstream.status === 429 ? 429 : 502);
    }

    if (!body || body.success !== true || !body.data) {
      return json({
        success: false,
        error: body?.error || "GSTIN verification failed"
      }, 404);
    }

    const d = body.data;

    // Return only fields the public report needs.
    return json({
      success: true,
      data: {
        gstin: d.gstin || gstin,
        legal_name: d.legal_name || null,
        trade_name: d.trade_name || null,
        status: d.status || null,
        taxpayer_type: d.taxpayer_type || null,
        business_constitution: d.business_constitution || null,
        registration_date: d.registration_date || null,
        cancellation_date: d.cancellation_date || null,
        state_code: d.state_code || null,
        address: d.address || null,
        city: d.city || null,
        address_details: d.address_details || null
      },
      verified_at: new Date().toISOString()
    });
  }
};
