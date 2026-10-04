// RC e-Challan check (paid): Razorpay order -> payment verified on the
// server -> API Sathi rc-challan call. Same safety checks as the GSTIN worker:
// signature, order amount and RC bound to the order, captured payment, and a
// lock in the payment notes so one payment gives one report.
//
// Secrets (set with `wrangler secret put`, never in code or the website):
//   RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, APISATHI_API_KEY
// Vars (wrangler.toml): RC_CHALLAN_PRICE (paise), CURRENCY, APISATHI_URL
const ALLOWED_ORIGINS = [
  "https://sarkarisewaindia.com",
  "https://www.sarkarisewaindia.com"
];

const DEFAULT_PRICE = 4900; // paise (₹49)
const DEFAULT_CURRENCY = "INR";

function getPrice(env) {
  const value = Number(env.RC_CHALLAN_PRICE || DEFAULT_PRICE);
  return Number.isInteger(value) && value > 0 ? value : DEFAULT_PRICE;
}

function getCurrency(env) {
  return env.CURRENCY || DEFAULT_CURRENCY;
}

function getCorsHeaders(origin) {
  const corsOrigin = ALLOWED_ORIGINS.includes(origin)
    ? origin
    : "https://sarkarisewaindia.com";

  return {
    "Access-Control-Allow-Origin": corsOrigin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
    "Vary": "Origin"
  };
}

function json(data, status, headers) {
  return new Response(JSON.stringify(data), { status, headers });
}

// Indian registration numbers: state code, RTO number, series, number
// (e.g. MH01AB1234, DL3CAB1234) and BH series (e.g. 22BH1234AB).
function normalizeRC(rc) {
  return String(rc || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
}
function isValidRC(rc) {
  return /^[A-Z]{2}[0-9]{1,2}[A-Z]{0,3}[0-9]{4}$/.test(rc) || /^[0-9]{2}BH[0-9]{4}[A-Z]{1,2}$/.test(rc);
}

function bytesToHex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map(byte => byte.toString(16).padStart(2, "0"))
    .join("");
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

async function generateRazorpaySignature(orderId, paymentId, secret) {
  const message = `${orderId}|${paymentId}`;
  const encoder = new TextEncoder();

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(message)
  );

  return bytesToHex(signature);
}

async function razorpayRequest(path, env, options = {}) {
  if (!env.RAZORPAY_KEY_ID || !env.RAZORPAY_KEY_SECRET) {
    throw new Error("Razorpay credentials are not configured");
  }

  const credentials = btoa(
    `${env.RAZORPAY_KEY_ID}:${env.RAZORPAY_KEY_SECRET}`
  );

  const response = await fetch(
    `https://api.razorpay.com/v1${path}`,
    {
      ...options,
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(options.headers || {})
      }
    }
  );

  const text = await response.text();
  let data;

  try {
    data = JSON.parse(text);
  } catch {
    data = { error: { description: "Invalid response from Razorpay" } };
  }

  return { response, data };
}


async function createOrder(env, rcNumber) {
  const rc = normalizeRC(rcNumber);
  if (!isValidRC(rc)) throw new Error("Invalid RC number");

  const receipt = `RC_${Date.now()}_${crypto.randomUUID().slice(0, 8)}`;
  const result = await razorpayRequest("/orders", env, {
    method: "POST",
    body: JSON.stringify({
      amount: getPrice(env),
      currency: getCurrency(env),
      receipt,
      notes: { service: "RC e-Challan Check", website: "SarkariSewaIndia", rc_number: rc }
    })
  });

  if (!result.response.ok || !result.data.id) {
    const error = new Error(result.data?.error?.description || "Unable to create Razorpay order");
    error.razorpay_status = result.response.status;
    throw error;
  }
  return result.data;
}

async function updatePaymentNotes(paymentId, notes, env) {
  const result = await razorpayRequest(
    `/payments/${encodeURIComponent(paymentId)}`,
    env,
    {
      method: "PATCH",
      body: JSON.stringify({ notes })
    }
  );

  return result;
}

function verificationIsFresh(timestamp) {
  const value = Number(timestamp || 0);
  if (!Number.isFinite(value) || value <= 0) return false;
  return Date.now() - value < 2 * 60 * 1000;
}

// API Sathi rc-challan. The request and response field names below follow
// the API Sathi docs for the rc-challan API (check them before going live).
function pick(obj, keys) {
  for (const k of keys) if (obj && obj[k] !== undefined && obj[k] !== null && obj[k] !== "") return obj[k];
  return "";
}

function mapChallans(payload) {
  const root = payload?.data ?? payload?.result ?? payload ?? {};
  const list = Array.isArray(root) ? root : (root.challans ?? root.challan_details ?? root.challan ?? []);
  return (Array.isArray(list) ? list : []).map((c) => ({
    challan_no: String(pick(c, ["challan_no", "challan_number", "challanNo", "challanNumber"])),
    amount: pick(c, ["amount", "fine_amount", "challan_amount", "amount_payable"]),
    status: String(pick(c, ["status", "challan_status", "payment_status"])),
    date: String(pick(c, ["challan_date", "date", "offence_date", "challan_date_time"])),
    offence: String(pick(c, ["offence", "offense", "offence_details", "violation"])),
    place: String(pick(c, ["place", "location", "challan_place"])),
    state: String(pick(c, ["state", "state_code"]))
  }));
}

async function callChallanApi(rc, env) {
  if (!env.APISATHI_API_KEY || !env.APISATHI_URL) {
    return { success: false, status: 503, error: "Challan service is not configured" };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const response = await fetch(env.APISATHI_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.APISATHI_API_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ rc_number: rc }),
      signal: controller.signal
    });

    const text = await response.text();
    let payload;
    try { payload = JSON.parse(text); } catch { payload = {}; }

    if (!response.ok || payload?.success === false) {
      return { success: false, status: response.status || 502, error: "Challan check failed. Please retry." };
    }

    const challans = mapChallans(payload);
    return {
      success: true,
      status: 200,
      data: {
        rc_number: rc,
        total: challans.length,
        pending: challans.filter((c) => /pend|unpaid|due/i.test(c.status)).length,
        challans,
        call_id: String(pick(payload, ["call_id", "request_id", "id"])),
        checked_at: new Date().toISOString()
      }
    };
  } catch (error) {
    return {
      success: false,
      status: 504,
      error: error?.name === "AbortError" ? "Challan service timed out. Please retry." : "Challan service unavailable. Please retry."
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function verifyPaymentAndGetChallans(body, env) {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    rc_number
  } = body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !rc_number) {
    return {
      success: false,
      status: 400,
      error: "Required payment details are missing"
    };
  }

  const normalizedRC = normalizeRC(rc_number);

  if (!isValidRC(normalizedRC)) {
    return {
      success: false,
      status: 400,
      error: "Invalid RC number"
    };
  }

  const expectedSignature = await generateRazorpaySignature(
    razorpay_order_id,
    razorpay_payment_id,
    env.RAZORPAY_KEY_SECRET
  );

  if (!timingSafeEqual(expectedSignature, razorpay_signature)) {
    return {
      success: false,
      status: 400,
      error: "Payment verification failed"
    };
  }

  const orderResult = await razorpayRequest(
    `/orders/${encodeURIComponent(razorpay_order_id)}`,
    env,
    { method: "GET" }
  );

  if (!orderResult.response.ok) {
    return {
      success: false,
      status: 400,
      error: "Unable to verify Razorpay order"
    };
  }

  const order = orderResult.data;

  if (order.amount !== getPrice(env) || order.currency !== getCurrency(env)) {
    return {
      success: false,
      status: 400,
      error: "Invalid payment amount"
    };
  }

  const orderRC = normalizeRC(order.notes?.rc_number);

  if (!orderRC || orderRC !== normalizedRC) {
    return {
      success: false,
      status: 400,
      error: "RC number does not match the paid order"
    };
  }

  const paymentResult = await razorpayRequest(
    `/payments/${encodeURIComponent(razorpay_payment_id)}`,
    env,
    { method: "GET" }
  );

  if (!paymentResult.response.ok) {
    return {
      success: false,
      status: 400,
      error: "Unable to verify payment"
    };
  }

  const payment = paymentResult.data;

  if (payment.order_id !== razorpay_order_id) {
    return {
      success: false,
      status: 400,
      error: "Payment does not match the order"
    };
  }

  if (payment.amount !== getPrice(env) || payment.currency !== getCurrency(env)) {
    return {
      success: false,
      status: 400,
      error: "Invalid payment amount"
    };
  }

  if (payment.status !== "captured") {
    return {
      success: false,
      status: 400,
      error: "Payment is not captured"
    };
  }

  const existingNotes = payment.notes && typeof payment.notes === "object"
    ? { ...payment.notes }
    : {};

  const existingState = String(existingNotes.verification_state || "");
  const existingRC = normalizeRC(existingNotes.verification_rc);
  const existingUpdatedAt = existingNotes.verification_updated_at;

  if (existingRC && existingRC !== normalizedRC) {
    return {
      success: false,
      status: 409,
      error: "Payment is already bound to a different RC number"
    };
  }

  // Each API call is billed, so one payment gives one report.
  if (existingState === "completed") {
    return {
      success: false,
      status: 409,
      error: "This payment has already been used for a report"
    };
  }

  if (existingState === "processing" && verificationIsFresh(existingUpdatedAt)) {
    return {
      success: false,
      status: 409,
      error: "This payment is already being processed. Please retry shortly."
    };
  }

  const claimToken = crypto.randomUUID();

  const processingNotes = {
    ...existingNotes,
    verification_state: "processing",
    verification_rc: normalizedRC,
    verification_token: claimToken,
    verification_updated_at: String(Date.now())
  };

  const claimResult = await updatePaymentNotes(
    razorpay_payment_id,
    processingNotes,
    env
  );

  if (!claimResult.response.ok) {
    return {
      success: false,
      status: 503,
      error: "Unable to lock payment verification. Please retry."
    };
  }

  const claimedPaymentResult = await razorpayRequest(
    `/payments/${encodeURIComponent(razorpay_payment_id)}`,
    env,
    { method: "GET" }
  );

  if (!claimedPaymentResult.response.ok) {
    return {
      success: false,
      status: 503,
      error: "Unable to confirm payment verification lock. Please retry."
    };
  }

  const claimedNotes = claimedPaymentResult.data.notes || {};

  if (
    claimedNotes.verification_state === "processing" &&
    claimedNotes.verification_token !== claimToken
  ) {
    return {
      success: false,
      status: 409,
      error: "This payment is already being processed. Please retry shortly."
    };
  }

  const apiResult = await callChallanApi(normalizedRC, env);

  const finalNotes = {
    ...processingNotes,
    verification_state: apiResult.success ? "completed" : "failed",
    verification_token: "",
    verification_updated_at: String(Date.now())
  };

  await updatePaymentNotes(razorpay_payment_id, finalNotes, env);

  if (!apiResult.success) {
    return apiResult;
  }

  return apiResult;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const headers = getCorsHeaders(origin);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });
    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/create-order") {
      try {
        const body = await request.json();
        const order = await createOrder(env, body.rc_number);
        return json({ success: true, key_id: env.RAZORPAY_KEY_ID, order_id: order.id, amount: getPrice(env), currency: getCurrency(env) }, 200, headers);
      } catch (error) {
        const bad = error.message === "Invalid RC number";
        return json({
          success: false,
          error: bad ? error.message
            : error.message === "Razorpay credentials are not configured" ? "Payment service credentials are not configured"
            : "Unable to create payment order"
        }, bad ? 400 : 502, headers);
      }
    }

    if (request.method === "POST" && url.pathname === "/verify-payment") {
      try {
        const body = await request.json();
        const result = await verifyPaymentAndGetChallans(body, env);
        return json({ success: result.success, ...(result.success ? { data: result.data } : { error: result.error }) }, result.status, headers);
      } catch {
        return json({ success: false, error: "Payment verification service unavailable" }, 502, headers);
      }
    }

    if (request.method === "GET" && url.pathname === "/price") {
      return json({ success: true, amount: getPrice(env), currency: getCurrency(env) }, 200, headers);
    }

    return json({ success: false, error: "Route not found" }, 404, headers);
  }
};
