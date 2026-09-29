const API_BASE = "https://www.gstinapi.in/v1/gstin/";

const ALLOWED_ORIGINS = [
  "https://sarkarisewaindia.com",
  "https://www.sarkarisewaindia.com"
];

const DEFAULT_GSTIN_PRICE = 100;
const DEFAULT_CURRENCY = "INR";

function getPrice(env) {
  const value = Number(env.GSTIN_PRICE || DEFAULT_GSTIN_PRICE);
  return Number.isInteger(value) && value > 0 ? value : DEFAULT_GSTIN_PRICE;
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

function isValidGSTIN(gstin) {
  return /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/.test(gstin);
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

async function createOrder(env, gstin) {
  const normalizedGSTIN = String(gstin || "").trim().toUpperCase();

  if (!isValidGSTIN(normalizedGSTIN)) {
    throw new Error("Invalid GSTIN format");
  }

  const receipt = `GSTIN_${Date.now()}_${crypto.randomUUID().slice(0, 8)}`;

  const result = await razorpayRequest("/orders", env, {
    method: "POST",
    body: JSON.stringify({
      amount: getPrice(env),
      currency: getCurrency(env),
      receipt,
      notes: {
        service: "GSTIN Verification",
        website: "SarkariSewaIndia",
        gstin: normalizedGSTIN
      }
    })
  });

  if (!result.response.ok || !result.data.id) {
    const error = new Error(
      result.data?.error?.description || "Unable to create Razorpay order"
    );
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

async function callGSTINApi(normalizedGSTIN, env) {
  if (!env.GSTIN_API_KEY) {
    return {
      success: false,
      status: 503,
      error: "GSTIN API key is not configured"
    };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const gstinResponse = await fetch(API_BASE + normalizedGSTIN, {
      method: "GET",
      headers: {
        "x-api-key": env.GSTIN_API_KEY,
        Accept: "application/json"
      },
      signal: controller.signal
    });

    const text = await gstinResponse.text();
    let result;

    try {
      result = JSON.parse(text);
    } catch {
      result = {};
    }

    if (!gstinResponse.ok || result.success !== true) {
      return {
        success: false,
        status: gstinResponse.status || 502,
        error: result.error || "GSTIN verification failed"
      };
    }

    const data = result.data || {};

    return {
      success: true,
      status: 200,
      data: {
        gstin: data.gstin || normalizedGSTIN,
        legal_name: data.legal_name || "",
        trade_name: data.trade_name || "",
        status: data.status || "",
        taxpayer_type: data.taxpayer_type || "",
        business_constitution: data.business_constitution || "",
        registration_date: data.registration_date || "",
        cancellation_date: data.cancellation_date || "",
        state_code: data.state_code || "",
        address: data.address || "",
        city: data.city || "",
        address_details: data.address_details || {},
        verified_at: new Date().toISOString()
      }
    };
  } catch (error) {
    return {
      success: false,
      status: 504,
      error: error?.name === "AbortError"
        ? "GSTIN verification service timed out. Please retry."
        : "GSTIN verification service unavailable. Please retry."
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function verifyPaymentAndGetGSTIN(body, env) {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    gstin
  } = body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !gstin) {
    return {
      success: false,
      status: 400,
      error: "Required payment details are missing"
    };
  }

  const normalizedGSTIN = String(gstin).trim().toUpperCase();

  if (!isValidGSTIN(normalizedGSTIN)) {
    return {
      success: false,
      status: 400,
      error: "Invalid GSTIN format"
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

  const orderGSTIN = String(order.notes?.gstin || "").trim().toUpperCase();

  if (!orderGSTIN || orderGSTIN !== normalizedGSTIN) {
    return {
      success: false,
      status: 400,
      error: "GSTIN does not match the paid order"
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
  const existingGSTIN = String(existingNotes.verification_gstin || "")
    .trim()
    .toUpperCase();
  const existingUpdatedAt = existingNotes.verification_updated_at;

  if (existingGSTIN && existingGSTIN !== normalizedGSTIN) {
    return {
      success: false,
      status: 409,
      error: "Payment is already bound to a different GSTIN"
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
    verification_gstin: normalizedGSTIN,
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

  const apiResult = await callGSTINApi(normalizedGSTIN, env);

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

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/debug-config") {
      return json(
        {
          success: true,
          razorpay_key_id_present: Boolean(env.RAZORPAY_KEY_ID),
          razorpay_key_secret_present: Boolean(env.RAZORPAY_KEY_SECRET),
          gstin_api_key_present: Boolean(env.GSTIN_API_KEY),
          price: getPrice(env),
          currency: getCurrency(env)
        },
        200,
        headers
      );
    }

    if (request.method === "POST" && url.pathname === "/create-order") {
      try {
        const body = await request.json();
        const order = await createOrder(env, body.gstin);

        return json(
          {
            success: true,
            key_id: env.RAZORPAY_KEY_ID,
            order_id: order.id,
            amount: getPrice(env),
            currency: getCurrency(env)
          },
          200,
          headers
        );
      } catch (error) {
        return json(
          {
            success: false,
            error: error.message === "Invalid GSTIN format"
              ? error.message
              : error.message === "Razorpay credentials are not configured"
                ? "Payment service credentials are not configured"
                : "Unable to create payment order",
            ...(error.razorpay_status ? { provider_status: error.razorpay_status } : {})
          },
          error.message === "Invalid GSTIN format" ? 400 : 502,
          headers
        );
      }
    }

    if (request.method === "POST" && url.pathname === "/verify-payment") {
      try {
        const body = await request.json();
        const result = await verifyPaymentAndGetGSTIN(body, env);

        return json(
          {
            success: result.success,
            ...(result.success ? { data: result.data } : { error: result.error })
          },
          result.status,
          headers
        );
      } catch (error) {
        return json(
          {
            success: false,
            error: "Payment verification service unavailable"
          },
          502,
          headers
        );
      }
    }

    if (url.pathname.startsWith("/gstin/")) {
      return json(
        {
          success: false,
          error:
            "Direct GSTIN verification is disabled. Please use the paid verification flow."
        },
        402,
        headers
      );
    }

    return json(
      {
        success: false,
        error: "Route not found"
      },
      404,
      headers
    );
  }
};
