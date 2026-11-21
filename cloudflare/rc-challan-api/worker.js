// RC e-Challan check (paid): Razorpay order -> payment verified on the
// server -> API Sathi rc-challan call. Same safety checks as the GSTIN worker:
// signature, order amount and RC bound to the order, captured payment, and a
// lock in the payment notes so one payment gives one report.
//
// Secrets (set with `wrangler secret put`, never in code or the website):
//   RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, APISATHI_API_KEY
// Vars (wrangler.toml): RC_CHALLAN_PRICE (paise), CURRENCY
const ALLOWED_ORIGINS = [
  "https://sarkarisewaindia.com",
  "https://www.sarkarisewaindia.com"
];

const DEFAULT_PRICE = 2000; // paise (Rs 20)
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

// Registration numbers the API accepts: state code, RTO number, series,
// 4-digit number (e.g. MH01AB1234, DL3CAB1234). BH series is not supported.
function normalizeRC(rc) {
  return String(rc || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
}
function isValidRC(rc) {
  return /^[A-Z]{2}[0-9]{1,2}[A-Z]{0,3}[0-9]{4}$/.test(rc);
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

// Secrets pasted in the dashboard often carry a stray space or newline.
const keyId = (env) => String(env.RAZORPAY_KEY_ID || "").trim();
const keySecret = (env) => String(env.RAZORPAY_KEY_SECRET || "").trim();

async function razorpayRequest(path, env, options = {}) {
  if (!keyId(env) || !keySecret(env)) {
    throw new Error("Razorpay credentials are not configured");
  }

  const credentials = btoa(
    `${keyId(env)}:${keySecret(env)}`
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

// API Sathi rc-challan (https://apisathi.in/docs/products/rc-challan/):
// POST https://apisathi.in/gw/v1/rc-challan/ (trailing slash required),
// header X-API-Key, body { rc_number } only. result_code 101 = challans
// found, 103 = no pending challans; 102/106 are charged "not found" answers.
// 502/503/504 are upstream failures: not charged, safe to retry.
const APISATHI_URL = "https://apisathi.in/gw/v1/rc-challan/";

// Field names per the docs, plus the alternatives the sandbox uses.
function first(c, keys) {
  for (const k of keys) if (c && c[k] !== undefined && c[k] !== null && c[k] !== "") return String(c[k]);
  return "";
}

function mapChallans(list) {
  return (Array.isArray(list) ? list : []).map((c) => ({
    challan_no: first(c, ["challan_no", "challan_number", "challanNo"]),
    date: first(c, ["challan_date", "date", "challan_date_time", "offence_date"]),
    amount: first(c, ["amount", "fine_amount", "challan_amount"]),
    // This API returns pending challans only, so an empty status means pending.
    status: first(c, ["challan_status", "status", "payment_status"]) || "Pending",
    offence: first(c, ["offence", "offense", "offence_details", "violation"]),
    state: first(c, ["state", "state_name"])
  }));
}

async function callChallanApi(rc, idempotencyKey, env) {
  if (!env.APISATHI_API_KEY) {
    return { success: false, status: 503, error: "Challan service is not configured" };
  }

  // Retry only upstream failures (not charged); the idempotency key stops a
  // retry from being billed twice.
  for (let attempt = 0; attempt < 3; attempt++) {
    if (attempt) await new Promise((r) => setTimeout(r, 1500 * attempt));
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch(env.APISATHI_URL || APISATHI_URL, {
        method: "POST",
        headers: {
          "X-API-Key": env.APISATHI_API_KEY,
          "Content-Type": "application/json",
          Accept: "application/json",
          "Idempotency-Key": idempotencyKey
        },
        body: JSON.stringify({ rc_number: rc }),
        signal: controller.signal
      });
      let payload;
      try { payload = JSON.parse(await response.text()); } catch { payload = {}; }

      if ([502, 503, 504].includes(response.status)) continue;
      if (!response.ok) {
        return { success: false, status: response.status === 422 ? 400 : 502, error: response.status === 422 ? "Invalid RC number" : "Challan check failed" };
      }

      // Docs: fields at the top level. Also accept a { data } / { result }
      // wrapper and sandbox replies without result_code but with challans.
      const body = payload?.data && typeof payload.data === "object" && !Array.isArray(payload.data) ? payload.data
        : payload?.result && typeof payload.result === "object" && !Array.isArray(payload.result) ? payload.result
        : payload;
      const code = Number(body.result_code ?? payload.result_code);
      const hasList = Array.isArray(body.challans) || body.echallan_count !== undefined;
      const found = code === 101 || code === 103 || (!Number.isFinite(code) && hasList);
      if (!found) {
        const why = [Number.isFinite(code) ? `code ${code}` : "", String(body.message ?? payload.message ?? "")].filter(Boolean).join(", ");
        return { success: false, status: 404, error: `No vehicle record found for this RC number${why ? ` (${why.slice(0, 80)})` : ""}` };
      }
      const challans = code === 103 ? [] : mapChallans(body.challans);
      const count = Number(body.echallan_count);
      return {
        success: true,
        status: 200,
        data: {
          rc_number: String(body.rc_number || rc),
          result_code: Number.isFinite(code) ? code : null,
          total: Number.isFinite(count) ? count : challans.length,
          pending: Number.isFinite(count) ? count : challans.length,
          challans,
          checked_at: new Date().toISOString()
        }
      };
    } catch (error) {
      if (error?.name !== "AbortError") return { success: false, status: 503, error: "Challan service unavailable" };
    } finally {
      clearTimeout(timeout);
    }
  }
  return { success: false, status: 504, error: "Challan service is busy" };
}

// Every paid report is logged to Supabase (public.rc_reports, via the
// rc_report_log function; the anon key is public and can only call that
// function), so the admin panel shows what each customer received.
const SUPABASE_URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I";
async function logReport(row) {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/rpc/rc_report_log`, {
      method: "POST",
      headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ p: row })
    });
  } catch {
    // Logging must never affect the customer's report.
  }
}
const toRupees = (v) => { const n = Number(String(v ?? "").replace(/[^0-9.]/g, "")); return Number.isFinite(n) ? n : 0; };

// Money back when the customer paid but got no report.
async function refundPayment(paymentId, env) {
  const result = await razorpayRequest(`/payments/${encodeURIComponent(paymentId)}/refund`, env, {
    method: "POST",
    body: JSON.stringify({ speed: "normal", notes: { reason: "RC challan report could not be generated" } })
  });
  return result.response.ok;
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
    keySecret(env)
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

  // Accounts without auto-capture (Razorpay test mode by default) leave the
  // payment "authorized"; capture it here for the exact order amount.
  if (payment.status === "authorized") {
    const capture = await razorpayRequest(
      `/payments/${encodeURIComponent(razorpay_payment_id)}/capture`,
      env,
      { method: "POST", body: JSON.stringify({ amount: getPrice(env), currency: getCurrency(env) }) }
    );
    if (!capture.response.ok || capture.data?.status !== "captured") {
      return {
        success: false,
        status: 400,
        error: "Payment could not be captured"
      };
    }
    payment.status = "captured";
    payment.notes = capture.data.notes ?? payment.notes;
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
  if (existingState === "completed" || existingState === "refunded") {
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

  const apiResult = await callChallanApi(normalizedRC, razorpay_payment_id, env);

  const finalNotes = {
    ...processingNotes,
    verification_state: apiResult.success ? "completed" : "failed",
    verification_token: "",
    verification_updated_at: String(Date.now())
  };

  if (!apiResult.success) {
    const refunded = await refundPayment(razorpay_payment_id, env).catch(() => false);
    finalNotes.verification_state = refunded ? "refunded" : "failed";
    await updatePaymentNotes(razorpay_payment_id, finalNotes, env);
    await logReport({
      payment_id: razorpay_payment_id, order_id: razorpay_order_id, rc_number: normalizedRC,
      outcome: refunded ? "refunded" : "failed", error: String(apiResult.error || "").slice(0, 300)
    });
    return {
      ...apiResult,
      error: `${apiResult.error}. ${refunded ? "Your payment has been refunded." : "Please contact us for a refund."}`,
      refunded
    };
  }

  await updatePaymentNotes(razorpay_payment_id, finalNotes, env);
  const ch = apiResult.data.challans || [];
  await logReport({
    payment_id: razorpay_payment_id, order_id: razorpay_order_id, rc_number: normalizedRC, outcome: "report",
    result_code: apiResult.data.result_code, challan_count: apiResult.data.total,
    pending_amount: Math.round(ch.reduce((n, c) => n + toRupees(c.amount), 0)),
    challans: ch.slice(0, 50).map((c) => ({ challan_no: c.challan_no, date: c.date, amount: c.amount, status: c.status, offence: c.offence, state: c.state }))
  });

  return apiResult;
}


// ---- Paid letter kits (Rs 20): "RTI पूरा किट" -------------------------------
// Separate from the RC report flow above. Order -> checkout -> verify; after a
// verified, captured payment the worker returns the kit text, so the paid
// content is not in the public page. Re-opening a kit with the same payment
// is allowed (nothing is billed per call).
const KIT_PRICE_DEFAULT = 2000; // paise
const kitPrice = (env) => { const v = Number(env.KIT_PRICE || KIT_PRICE_DEFAULT); return Number.isInteger(v) && v > 0 ? v : KIT_PRICE_DEFAULT; };

const KITS = {
  rti: {
    name: "RTI Complete Kit",
    // {{key}} placeholders are filled in the browser. Sources: RTI Act 2005
    // s.7(1) 30 days (48 hours for life or liberty), s.19(1) first appeal
    // within 30 days of the expiry of the period or of receiving the decision,
    // s.19(3) second appeal within 90 days, s.19(6) first appeal decided in 30
    // days, at most 45 in total with reasons recorded.
    appealFields: [
      { key: "appellate", label: "प्रथम अपीलीय अधिकारी (FAA) का पद और दफ्तर का पता", type: "textarea", required: true, hint: "PIO से वरिष्ठ अधिकारी; PIO को ही अपील न भेजें" },
      { key: "pio", label: "जन सूचना अधिकारी (PIO) का पद और दफ्तर", type: "textarea", required: true },
      { key: "appdate", label: "RTI आवेदन भेजने की तारीख", required: true, hint: "जैसे 05/10/2026" },
      { key: "receiveddate", label: "दफ्तर में आवेदन पहुंचने की तारीख (यदि पता हो)" },
      { key: "regno", label: "RTI Registration / आवेदन नंबर (यदि मिला हो)" },
      { key: "mode", label: "आवेदन भेजने का तरीका (ऑनलाइन/डाक/हाथ से)" },
      { key: "tracking", label: "डाक ट्रैकिंग नंबर / रसीद नंबर (यदि हो)" },
      { key: "appealdate", label: "प्रथम अपील दाखिल करने की तारीख", required: true, hint: "आज की तारीख या वास्तविक दाखिल तारीख" },
      { key: "status", label: "क्या हुआ", type: "select", required: true, options: [
        "आवेदन के 30 दिन में कोई जवाब नहीं मिला",
        "जवाब मिला, पर जानकारी अधूरी, गलत या भ्रामक है",
        "जानकारी देने से मना कर दिया गया",
      ] },
      { key: "replydate", label: "जवाब की तारीख (मिला हो तो)" },
      { key: "firstDelayReason", label: "प्रथम अपील में 30 दिन से अधिक देरी हुई हो तो कारण (अन्यथा खाली छोड़ें)", type: "textarea", hint: "देरी माफ करने का अनुरोध और वास्तविक कारण लिखें; पर्याप्त कारण स्वीकार करना FAA के विवेक पर है" },
      { key: "grounds", label: "अपील का कारण (संक्षेप में)", type: "textarea", required: true, hint: "जैसे: मांगे गए बिंदु 2 और 3 का जवाब नहीं दिया गया" },
    ],
    secondAppealFields: [
      { key: "commission", label: "किस आयोग में अपील करेंगे", type: "select", required: true, options: ["केंद्रीय सूचना आयोग (CIC) – केंद्रीय सरकारी प्राधिकरण", "राज्य सूचना आयोग (SIC) – राज्य सरकारी प्राधिकरण"] , hint: "केंद्र/राज्य का चुनाव संबंधित PIO वाले सरकारी प्राधिकरण के अनुसार करें" },
      { key: "commissionAddress", label: "सूचना आयोग का पता (यदि उपलब्ध हो)", type: "textarea" },
      { key: "faadate", label: "FAA के कार्यालय में प्रथम अपील प्राप्त होने की तारीख", type: "date", required: true, hint: "डाक डिलीवरी, ऑनलाइन रसीद या कार्यालय की प्राप्ति मुहर वाली तारीख लिखें; केवल भेजने की तारीख नहीं" },
      { key: "faaOutcome", label: "प्रथम अपील का परिणाम", type: "select", required: true, options: ["FAA का आदेश मिला, पर संतुष्टि नहीं है", "FAA ने सूचना देने से मना किया", "45 दिन तक FAA का कोई आदेश नहीं मिला"] },
      { key: "faaOrderDate", label: "FAA का आदेश आपको प्राप्त होने की तारीख", type: "date", hint: "आदेश मिलने वाले दोनों विकल्पों में यह तारीख जरूरी है; आदेश न मिला हो तो खाली छोड़ें" },
      { key: "secondAppealDate", label: "द्वितीय अपील दाखिल करने की तारीख", type: "date", required: true },
      { key: "secondGrounds", label: "द्वितीय अपील के मुख्य आधार", type: "textarea", required: true, hint: "कौन-सी सूचना नहीं मिली, आदेश में क्या त्रुटि है, या FAA ने निर्णय क्यों नहीं दिया" },
      { key: "secondRelief", label: "आयोग से क्या राहत चाहते हैं", type: "textarea", required: true, hint: "उदाहरण: पूरी सूचना, प्रमाणित प्रतियां, लागू होने पर क्षतिपूर्ति/दंड पर विचार" },
      { key: "delayReason", label: "90 दिन से देरी हुई हो तो कारण (अन्यथा खाली छोड़ें)", type: "textarea", hint: "देरी माफ करने का अनुरोध तभी जोड़ें जब वास्तव में देरी हुई हो" },
    ],
    templates: {
      appeal: `सेवा में,
प्रथम अपीलीय अधिकारी,
{{appellate}}

विषय: सूचना का अधिकार अधिनियम 2005 की धारा 19(1) के तहत प्रथम अपील

महोदय/महोदया,

1. अपीलकर्ता का नाम: {{name}}
   पता: {{address}}
   मोबाइल: {{phone}}

2. जिस जन सूचना अधिकारी के निर्णय या चुप्पी के विरुद्ध अपील है: {{pio}}

3. मैंने दिनांक {{appdate}} को धारा 6(1) के तहत विषय "{{subject}}" पर सूचना मांगी थी।
   आवेदन कार्यालय में प्राप्त होने की तारीख: {{receiveddate}}
   आवेदन / पंजीकरण संख्या: {{regno}}
   भेजने का माध्यम: {{mode}}
   डाक रसीद / ट्रैकिंग संख्या: {{tracking}}

4. स्थिति: {{status}}
   PIO के उत्तर की तारीख (यदि मिला हो): {{replydate}}
   प्रथम अपील में देरी का कारण (यदि लागू हो): {{firstDelayReason}}

5. अपील का आधार: {{grounds}}

प्रार्थना: कृपया अभिलेखों और तथ्यों की जांच कर, मांगी गई सूचना अधिनियम के अनुसार उपलब्ध कराने तथा आवश्यक कारणयुक्त आदेश पारित करने की कृपा करें।

संलग्न: (1) RTI आवेदन की कॉपी (2) डाक रसीद/ट्रैकिंग (3) फीस की रसीद या पोस्टल ऑर्डर की कॉपी (4) PIO का जवाब, यदि मिला हो।

स्थान: {{place}}
दिनांक: {{appealdate}}

भवदीय,
{{name}}`,
      secondAppeal: `सेवा में,
आयुक्त महोदय/महोदया,
{{commission}}
{{commissionAddress}}

विषय: सूचना का अधिकार अधिनियम, 2005 की धारा 19(3) के अंतर्गत द्वितीय अपील

अपीलकर्ता:
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

संबंधित लोक प्राधिकरण / PIO: {{pio}}
प्रथम अपीलीय अधिकारी (FAA): {{appellate}}
मूल RTI आवेदन दिनांक: {{appdate}}
FAA द्वारा प्रथम अपील प्राप्त दिनांक: {{faadate}}
प्रथम अपील का परिणाम: {{faaOutcome}}
FAA आदेश प्राप्त होने की तारीख (यदि आदेश मिला हो): {{faaOrderDate}}
FAA का आदेश न मिलने पर 45 दिन की अवधि समाप्त होने की तारीख: {{faaDueDate}}

द्वितीय अपील के तथ्य और आधार:
{{secondGrounds}}

मांगी गई राहत:
{{secondRelief}}

देरी माफी का अनुरोध / कारण (यदि लागू): {{delayReason}}

संलग्नक: (1) मूल RTI आवेदन (2) आवेदन भेजने/प्राप्ति का प्रमाण (3) PIO का उत्तर, यदि मिला हो (4) प्रथम अपील और उसकी प्राप्ति का प्रमाण (5) FAA का आदेश, यदि मिला हो (6) दस्तावेजों की सूची / इंडेक्स (7) द्वितीय अपील की प्रति लोक प्राधिकरण को भेजने का प्रमाण, जहाँ आयोग के नियमों में आवश्यक हो (8) अन्य संबंधित दस्तावेज।

स्थान: {{place}}
दिनांक: {{secondAppealDate}}

भवदीय,
{{name}}`,
      reminder: `सेवा में,
जन सूचना अधिकारी,
{{pio}}

विषय: RTI आवेदन दिनांक {{appdate}} पर सूचना हेतु स्मरण पत्र – {{subject}}

महोदय/महोदया,

मैंने दिनांक {{appdate}} को सूचना का अधिकार अधिनियम 2005 की धारा 6(1) के तहत उपरोक्त विषय पर आवेदन भेजा था। अधिनियम की धारा 7(1) के अनुसार सूचना 30 दिन के भीतर देनी होती है, पर मुझे अभी तक {{status}}।

कृपया मांगी गई सूचना शीघ्र उपलब्ध कराएं। अन्यथा मुझे धारा 19(1) के तहत प्रथम अपील करनी पड़ेगी।

भवदीय,
{{name}}
{{address}}
मोबाइल: {{phone}}
दिनांक: {{date}}`,
    },
    checklist: [
      "आवेदन <strong>स्पीड पोस्ट या रजिस्टर्ड डाक</strong> से भेजें; रसीद और ट्रैकिंग नंबर संभालकर रखें। यही आपका सबूत है।",
      "आवेदन की पूरी कॉपी और <strong>फीस का सबूत</strong> (पोस्टल ऑर्डर नंबर या रसीद) अपने पास रखें। फीस केंद्र के दफ्तरों में ₹10 है; राज्य के दफ्तरों में राज्य के नियम लागू होते हैं।",
      "जवाब की समय सीमा <strong>30 दिन</strong> है (जीवन या स्वतंत्रता का मामला हो तो 48 घंटे)। गिनती दफ्तर में आवेदन पहुंचने की तारीख से करें।",
      "30 दिन में जवाब न मिले या जवाब से संतुष्टि न हो, तो <strong>प्रथम अपील</strong> की जा सकती है। स्मरण पत्र देना वैकल्पिक है, कानूनी शर्त नहीं। अपील की समय सीमा: 30 दिन की अवधि खत्म होने से या जवाब मिलने से <strong>30 दिन</strong> के भीतर।",
      "प्रथम अपील आम तौर पर 30 दिन में तय होनी चाहिए; कारण लिखकर कुल 45 दिन तक बढ़ाई जा सकती है।",
      "प्रथम अपील से भी संतुष्टि न मिले तो <strong>द्वितीय अपील</strong> केंद्रीय या राज्य सूचना आयोग में, निर्णय की तारीख (या जब निर्णय होना था) से <strong>90 दिन</strong> के भीतर।",
      "द्वितीय अपील के लिए केंद्रीय सरकारी प्राधिकरण हो तो CIC और राज्य सरकारी प्राधिकरण हो तो संबंधित SIC चुनें।",
      "धारा 19(3) के तहत FAA का आदेश मिल जाए तो सामान्यतः उसकी प्राप्ति से 90 दिन में द्वितीय अपील करें। आदेश न मिले तो FAA द्वारा प्रथम अपील प्राप्त किए जाने की तारीख से अधिकतम 45 दिन पूरे होने के बाद अपील करें और 90 दिन की अवधि उस 45-दिन की अवधि समाप्त होने से गिनें; राज्य आयोग के लागू नियम भी जाँचें। पर्याप्त कारण होने पर आयोग विलंब स्वीकार कर सकता है।",
      "आवेदन में कारण बताना ज़रूरी नहीं है; सिर्फ अपना संपर्क पता लिखें और हर बिंदु अलग लाइन में पूछें।",
    ],
  },
  consumer: {
    name: "Consumer Complaint Kit",
    // Sources (checked 21 Nov 2026): Consumer Protection Act 2019 s.34 (District
    // Commission; value of goods/services paid up to Rs 50 lakh under the 2021
    // Jurisdiction Rules), s.35 (complaint), s.69 (two years from the cause of
    // action; delay can be condoned for sufficient cause), s.2(1) "consumer"
    // excludes goods bought for resale or commercial purpose; Consumer
    // Protection (E-Commerce) Rules 2020 r.4(4)-(5): grievance officer named on
    // the platform, acknowledges in 48 hours, redresses in one month; NCH 1915;
    // e-Jagriti for online filing; no fee up to Rs 5 lakh. A legal notice is not
    // a legal precondition for a consumer complaint (except special laws such as
    // the Carriers Act s.10), but it is good evidence of a demand.
    // appealFields = notice form, secondAppealFields = commission complaint form
    // (same response shape as the RTI kit so recovery stays generic).
    appealFields: [
      { key: "firstdate", label: "पहली लिखित शिकायत भेजने की तारीख", type: "date", required: true, hint: "जिस दिन दुकान/कंपनी को पत्र या ईमेल भेजा" },
      { key: "firstmode", label: "पहली शिकायत कैसे भेजी", type: "select", required: true, options: ["स्पीड पोस्ट / रजिस्टर्ड डाक", "ईमेल", "कंपनी का ऐप / वेबसाइट / चैट", "हाथ से (रिसीविंग पर)"] },
      { key: "tracking", label: "डाक ट्रैकिंग नंबर / ईमेल की तारीख / शिकायत नंबर (यदि हो)" },
      { key: "outcome", label: "अब तक क्या हुआ", type: "select", required: true, options: [
        "कोई जवाब नहीं मिला",
        "जवाब मिला, पर समाधान नहीं हुआ",
        "मरम्मत/बदलाव हुआ, पर समस्या फिर आई",
        "साफ़ मना कर दिया गया",
      ] },
      { key: "lastreply", label: "कंपनी/दुकान का आखिरी जवाब या कार्रवाई (तारीख के साथ)", type: "textarea", hint: "जैसे: 12/10 को इंजीनियर आया, ठीक नहीं किया; या कोई जवाब नहीं" },
      { key: "refund", label: "आप कितनी रकम वापस/मुआवजा मांग रहे हैं (₹)", hint: "सामान की कीमत और, यदि चाहें, मानसिक कष्ट व केस खर्च का मुआवजा अलग-अलग लिखें" },
      { key: "noticedays", label: "नोटिस मिलने के बाद कितने दिन का समय दें", type: "select", required: true, options: ["15", "7", "30"] },
      { key: "platform", label: "ऑनलाइन खरीद हो तो प्लेटफॉर्म/ऐप का नाम (अन्यथा खाली छोड़ें)", hint: "जैसे Amazon, Flipkart, किसी कंपनी की वेबसाइट; दुकान से खरीदा हो तो खाली छोड़ें" },
      { key: "grievance", label: "शिकायत अधिकारी का नाम/ईमेल (यदि प्लेटफॉर्म पर दिखता हो)", hint: "ई-कॉमर्स नियम 2020 के अनुसार प्लेटफॉर्म को शिकायत अधिकारी का नाम और संपर्क दिखाना होता है" },
      { key: "noticedate", label: "नोटिस भेजने की तारीख", type: "date", required: true },
    ],
    secondAppealFields: [
      { key: "commission", label: "जिला उपभोक्ता आयोग का नाम और शहर", type: "textarea", required: true, hint: "जैसे: जिला उपभोक्ता विवाद प्रतितोषण आयोग, आरा (भोजपुर)। जहां आप रहते हैं, जहां विपक्षी का दफ्तर है या जहां विवाद हुआ, वहां दायर हो सकता है" },
      { key: "opposite", label: "विपक्षी पक्षकारों के नाम और पते (दुकान, कंपनी, सेवा देने वाला)", type: "textarea", required: true },
      { key: "causedate", label: "शिकायत का कारण पैदा होने की तारीख", type: "date", required: true, hint: "जिस दिन खराबी सामने आई या सेवा में कमी हुई/मना किया गया" },
      { key: "valuepaid", label: "सामान/सेवा के लिए कुल चुकाई गई रकम (₹)", required: true, hint: "आयोग का चुनाव इसी रकम से होता है, मांगे गए मुआवजे से नहीं" },
      { key: "defect", label: "खराबी / सेवा में कमी का ब्योरा (तारीख और घटनाक्रम के साथ)", type: "textarea", required: true },
      { key: "claim", label: "आप आयोग से क्या राहत चाहते हैं", type: "textarea", required: true, hint: "जैसे: ₹__ वापस, ₹__ मानसिक कष्ट का मुआवजा, ₹__ केस खर्च, ब्याज" },
      { key: "docs", label: "संलग्न दस्तावेजों की सूची", type: "textarea", hint: "बिल, वारंटी, पहली शिकायत, नोटिस, डाक रसीद, फोटो आदि; हर एक का नाम लिखें" },
      { key: "complaintdate", label: "शिकायत दायर करने की तारीख", type: "date", required: true },
      { key: "delayReason", label: "कारण पैदा होने से 2 साल से देरी हुई हो तो कारण (अन्यथा खाली छोड़ें)", type: "textarea", hint: "धारा 69 में पर्याप्त कारण बताने पर आयोग देरी माफ कर सकता है; यह आयोग के विवेक पर है" },
    ],
    templates: {
      appeal: `सेवा में,
{{company}}

विषय: उपभोक्ता संरक्षण अधिनियम, 2019 के अंतर्गत नोटिस – {{product}} में दोष/सेवा में कमी

महोदय/महोदया,

मैं {{name}}, निवासी {{address}} (मोबाइल: {{phone}}), आपको यह नोटिस निम्नलिखित तथ्यों के आधार पर भेज रहा/रही हूं:

1. मैंने दिनांक {{buydate}} को {{product}} खरीदा/सेवा ली। बिल/इनवॉइस संख्या: {{bill}}। इसके लिए ₹{{amount}} का भुगतान किया।
   ऑनलाइन खरीद का प्लेटफॉर्म (यदि लागू): {{platform}}

2. समस्या का विवरण:
{{problem}}

3. मैंने दिनांक {{firstdate}} को {{firstmode}} से लिखित शिकायत की थी। डाक/शिकायत संदर्भ: {{tracking}}
   अब तक की स्थिति: {{outcome}}
   आपकी ओर से आखिरी जवाब/कार्रवाई: {{lastreply}}

4. यह सामान में दोष या सेवा में कमी का मामला है, जो उपभोक्ता संरक्षण अधिनियम, 2019 के अंतर्गत आता है। आपकी लापरवाही से मुझे आर्थिक नुकसान और मानसिक कष्ट हुआ है।

मांग: इस नोटिस के मिलने के {{noticedays}} दिन के भीतर मेरी मांग "{{demand}}" पूरी करें और मुझे लिखित में सूचित करें।
मांगी गई रकम (वापसी/मुआवजा): ₹{{refund}}

तय समय में समाधान न होने पर मुझे मजबूर होकर जिला उपभोक्ता विवाद प्रतितोषण आयोग में शिकायत दायर करनी पड़ेगी, जिसमें मैं सामान/सेवा की कीमत की वापसी, मुआवजा, ब्याज और केस का खर्च मांगूंगा/मांगूंगी। इसकी सारी जिम्मेदारी आपकी होगी।

संलग्न: (1) बिल/इनवॉइस की कॉपी (2) वारंटी कार्ड (यदि हो) (3) पहली शिकायत और उसकी डाक रसीद/ईमेल (4) अब तक का पत्राचार, फोटो आदि।

स्थान: {{place}}
दिनांक: {{noticedate}}

भवदीय,
{{name}}
{{address}}
मोबाइल: {{phone}}`,
      reminder: `सेवा में,
शिकायत अधिकारी / नोडल अधिकारी (Grievance Officer),
{{company}}
{{platform}}
{{grievance}}

विषय: शिकायत की अनुस्मारक सूचना – {{product}} (बिल संख्या {{bill}}) – शिकायत दिनांक {{firstdate}}

महोदय/महोदया,

मैंने दिनांक {{firstdate}} को आपको {{product}} के संबंध में लिखित शिकायत भेजी थी, पर अभी तक मेरा मामला हल नहीं हुआ है। अब तक की स्थिति: {{outcome}}।

समस्या का सार:
{{problem}}

उपभोक्ता संरक्षण (ई-कॉमर्स) नियम, 2020 के नियम 4(5) के अनुसार ई-कॉमर्स इकाई का शिकायत अधिकारी शिकायत की प्राप्ति 48 घंटे में स्वीकार करता है और एक महीने के भीतर निवारण करता है। यदि आप ई-कॉमर्स प्लेटफॉर्म/विक्रेता हैं, तो कृपया इसके अनुसार कार्रवाई करें।

मेरी मांग: {{demand}}।

कृपया शिकायत संख्या और की गई कार्रवाई की जानकारी मुझे लिखित में दें। समाधान न होने पर मैं राष्ट्रीय उपभोक्ता हेल्पलाइन (1915 / consumerhelpline.gov.in) और जिला उपभोक्ता आयोग का सहारा लूंगा/लूंगी।

भवदीय,
{{name}}
{{address}}
मोबाइल: {{phone}}
दिनांक: {{date}}`,
      secondAppeal: `माननीय जिला उपभोक्ता विवाद प्रतितोषण आयोग,
{{commission}}

उपभोक्ता शिकायत संख्या ______ / 2026

(उपभोक्ता संरक्षण अधिनियम, 2019 की धारा 35 के अंतर्गत)

शिकायतकर्ता:
{{name}}, निवासी {{address}}, मोबाइल: {{phone}}

बनाम

विपक्षी पक्षकार:
{{opposite}}

शिकायत

माननीय महोदय/महोदया,

1. पक्षकार: शिकायतकर्ता ने विपक्षी से {{product}} खरीदा/सेवा ली और उसके लिए ₹{{valuepaid}} का भुगतान किया। शिकायतकर्ता उपभोक्ता संरक्षण अधिनियम, 2019 के अर्थ में "उपभोक्ता" है। सामान/सेवा व्यावसायिक प्रयोजन के लिए नहीं ली गई।

2. अधिकार क्षेत्र: चुकाई गई कीमत ₹{{valuepaid}} जिला आयोग के आर्थिक अधिकार क्षेत्र में है। इस आयोग को शिकायत सुनने का क्षेत्रीय अधिकार भी है, क्योंकि शिकायतकर्ता, विपक्षी का कार्यालय या वाद का कारण इसी क्षेत्र में है।

3. तथ्य: शिकायतकर्ता ने दिनांक {{buydate}} को बिल/इनवॉइस संख्या {{bill}} पर {{product}} प्राप्त किया।
{{defect}}

4. वाद का कारण: दिनांक {{causedate}} को पैदा हुआ।

5. परिसीमा: यह शिकायत धारा 69 के अंतर्गत निर्धारित दो वर्ष की अवधि के भीतर दायर की जा रही है।
देरी हो तो कारण (यदि लागू): {{delayReason}}

6. पूर्व पत्राचार: शिकायतकर्ता ने दिनांक {{firstdate}} को विपक्षी को लिखित शिकायत और दिनांक {{noticedate}} को नोटिस भेजा। स्थिति: {{outcome}}।

7. दोष/सेवा में कमी: उपरोक्त तथ्यों से स्पष्ट है कि सामान में दोष है / सेवा में कमी है। यह विपक्षी की कमी और अनुचित व्यापार व्यवहार के अंतर्गत आता है।

प्रार्थना:
{{claim}}

शिकायतकर्ता यह भी प्रार्थना करता/करती है कि आयोग उचित समझे अन्य राहत भी प्रदान करे।

संलग्न दस्तावेज:
{{docs}}

सत्यापन: मैं {{name}} सत्यापित करता/करती हूं कि उपरोक्त कथन मेरी जानकारी और विश्वास के अनुसार सत्य हैं।

स्थान: {{place}}
दिनांक: {{complaintdate}}

शिकायतकर्ता
{{name}}`,
    },
    checklist: [
      "<strong>पहले सबूत जमा करें:</strong> बिल/इनवॉइस, वारंटी कार्ड, भुगतान का सबूत (UPI/कार्ड/बैंक), खराबी की फोटो-वीडियो, कस्टमर केयर शिकायत नंबर, ईमेल/चैट के स्क्रीनशॉट। असली बिल अपने पास रखें।",
      "<strong>कदम 1:</strong> मुफ्त शिकायत पत्र दुकान और कंपनी को दें और रसीद लें। स्पीड पोस्ट या रजिस्टर्ड डाक से भेजें; ईमेल भी करें।",
      "<strong>कदम 2:</strong> समय सीमा (7, 15 या 30 दिन) में हल न हो तो ऊपर का <strong>नोटिस</strong> भेजें। कानूनन उपभोक्ता आयोग में जाने से पहले नोटिस देना जरूरी नहीं है, पर इससे आपकी मांग का लिखित सबूत बनता है। कुछ खास कानूनों (जैसे कैरियर एक्ट, 1865, की धारा 10 का मामला) में पहले नोटिस जरूरी हो सकता है।",
      "<strong>कदम 3 (ऑनलाइन खरीद):</strong> ई-कॉमर्स प्लेटफॉर्म को शिकायत अधिकारी का नाम और संपर्क दिखाना होता है; नियम 4(5) के अनुसार वह 48 घंटे में शिकायत स्वीकार और एक महीने में निवारण करता है। इसी के लिए दूसरा पत्र है।",
      "<strong>कदम 4:</strong> <strong>राष्ट्रीय उपभोक्ता हेल्पलाइन (NCH)</strong>: 1915 पर कॉल या WhatsApp 8800001915। यह कंपनी तक शिकायत पहुंचाकर हल कराने की कोशिश करती है; यह अदालत नहीं है।",
      "<strong>कदम 5:</strong> फिर भी हल न हो तो <strong>जिला उपभोक्ता आयोग</strong> में शिकायत। <a href=\"https://e-jagriti.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">e-Jagriti</a> पोर्टल से ऑनलाइन दायर हो सकती है; वकील जरूरी नहीं।",
      "<strong>समय सीमा:</strong> कारण पैदा होने से <strong>2 साल</strong> के भीतर (धारा 69)। पर्याप्त कारण हो तो आयोग देरी माफ कर सकता है, पर इसे पक्का न मानें।",
      "<strong>कौन सा आयोग:</strong> चुकाई गई कीमत ₹50 लाख तक → जिला; ₹50 लाख से ₹2 करोड़ → राज्य; ₹2 करोड़ से ऊपर → राष्ट्रीय। यह चुकाई गई कीमत से तय होता है, मांगे गए मुआवजे से नहीं।",
      "<strong>फीस:</strong> ₹5 लाख तक की कीमत पर आयोग में कोई फीस नहीं लगती। उससे ऊपर के लिए e-Jagriti पर मौजूदा फीस देख लें।",
      "<strong>किसे उपभोक्ता नहीं माना जाता:</strong> जो सामान दोबारा बेचने या व्यावसायिक प्रयोजन से खरीदा गया हो। अपने उपयोग के लिए खरीदे सामान/सेवा पर शिकायत की जा सकती है।",
      "शिकायत शांत, तथ्यों और तारीखों वाली रखें। असली दस्तावेज अपने पास रखें और कॉपी लगाएं। यह कानूनी सलाह नहीं, एक नमूना है; बड़ी रकम के मामले में वकील से सलाह लें।",
    ],
  },
};

// Each kit has its own free-form fields (the free letter above the kit box).
// RTI keeps its original keys and order, so existing payments still match.
const KIT_APP = {
  rti: { keys: ["name", "address", "phone", "office", "subject", "info", "period", "fee", "place", "date"], required: ["name", "address", "office", "subject", "info"], need: "Complete the free RTI application first" },
  consumer: { keys: ["company", "name", "address", "phone", "product", "bill", "buydate", "amount", "problem", "demand", "days", "place", "date"], required: ["company", "name", "address", "product", "buydate", "problem"], need: "Complete the free consumer complaint first" },
};
function normalizeKitApplication(application, kit = "rti") {
  const out = {};
  for (const key of (KIT_APP[kit] || KIT_APP.rti).keys) out[key] = String(application?.[key] || "").trim().slice(0, 5000);
  return out;
}
function validKitApplication(application, kit = "rti") {
  const app = normalizeKitApplication(application, kit);
  return (KIT_APP[kit] || KIT_APP.rti).required.every((key) => app[key].length > 0);
}
async function kitApplicationHash(application, kit = "rti") {
  const app = normalizeKitApplication(application, kit);
  const bytes = new TextEncoder().encode(JSON.stringify(app));
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}
async function kitSourceHash(source) {
  const value = String(source || "").trim().slice(0, 200);
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

async function createKitOrder(env, kit, application, source) {
  if (!KITS[kit]) throw new Error("Invalid kit");
  if (!validKitApplication(application, kit)) throw new Error(KIT_APP[kit].need);
  const pageSource = String(source || "").trim().slice(0, 200);
  if (!pageSource) throw new Error("Missing page source");
  const applicationHash = await kitApplicationHash(application, kit);
  const sourceHash = await kitSourceHash(pageSource);
  const receipt = `KIT_${Date.now()}_${crypto.randomUUID().slice(0, 8)}`;
  const result = await razorpayRequest("/orders", env, {
    method: "POST",
    body: JSON.stringify({
      amount: kitPrice(env),
      currency: getCurrency(env),
      receipt,
      notes: { service: KITS[kit].name, website: "SarkariSewaIndia", kit, application_hash: applicationHash, source_hash: sourceHash }
    })
  });
  if (!result.response.ok || !result.data.id) {
    const error = new Error(result.data?.error?.description || "Unable to create Razorpay order");
    error.razorpay_status = result.response.status;
    throw error;
  }
  return result.data;
}

async function verifyKitPayment(body, env) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, kit, application, source, recovery_payload } = body || {};
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !KITS[kit] || !validKitApplication(application, kit)) {
    return { success: false, status: 400, error: "Required payment details are missing" };
  }
  const expected = await generateRazorpaySignature(razorpay_order_id, razorpay_payment_id, keySecret(env));
  if (!timingSafeEqual(expected, String(razorpay_signature))) {
    return { success: false, status: 400, error: "Invalid payment signature" };
  }
  const orderResult = await razorpayRequest(`/orders/${encodeURIComponent(razorpay_order_id)}`, env, { method: "GET" });
  if (!orderResult.response.ok) return { success: false, status: 400, error: "Unable to verify Razorpay order" };
  const order = orderResult.data;
  const applicationHash = await kitApplicationHash(application, kit);
  const pageSource = String(source || "").trim().slice(0, 200);
  // New orders are bound to both the exact free RTI application and its page. Older paid
  // orders did not store an application hash, so retain their re-open access
  // after the same signed payment and captured-payment checks below.
  const savedApplicationHash = order.notes?.application_hash;
  const savedSourceHash = order.notes?.source_hash;
  const sourceHash = pageSource ? await kitSourceHash(pageSource) : "";
  if (order.amount !== kitPrice(env) || order.currency !== getCurrency(env) || order.notes?.kit !== kit || (savedApplicationHash && savedApplicationHash !== applicationHash) || (savedSourceHash && savedSourceHash !== sourceHash)) {
    return { success: false, status: 400, error: "Order does not match this kit or application" };
  }
  const paymentResult = await razorpayRequest(`/payments/${encodeURIComponent(razorpay_payment_id)}`, env, { method: "GET" });
  if (!paymentResult.response.ok) return { success: false, status: 400, error: "Unable to verify payment" };
  const payment = paymentResult.data;
  if (payment.order_id !== razorpay_order_id || payment.amount !== kitPrice(env) || payment.currency !== getCurrency(env)) {
    return { success: false, status: 400, error: "Payment does not match the order" };
  }
  if (payment.status === "authorized") {
    const capture = await razorpayRequest(`/payments/${encodeURIComponent(razorpay_payment_id)}/capture`, env, {
      method: "POST", body: JSON.stringify({ amount: kitPrice(env), currency: getCurrency(env) })
    });
    if (!capture.response.ok || capture.data?.status !== "captured") return { success: false, status: 400, error: "Payment could not be captured" };
    payment.status = "captured";
  }
  if (payment.status !== "captured") return { success: false, status: 400, error: "Payment is not captured" };
  const k = KITS[kit];
  let recovery = null;
  if (env.SUPABASE_SERVICE_ROLE_KEY && env.RTI_RECOVERY_ENCRYPTION_KEY) {
    try {
      recovery = await createRecoveryRecord({
        paymentId: razorpay_payment_id, kit, source: pageSource,
        payload: { application: normalizeKitApplication(application, kit), drafts: recovery_payload && typeof recovery_payload === "object" ? recovery_payload : {} }
      }, env);
    } catch {}
  }
  return { success: true, status: 200, data: { kit, recovery_code: recovery, recovery_available: Boolean(recovery), appealFields: k.appealFields, secondAppealFields: k.secondAppealFields, templates: k.templates, checklist: k.checklist } };
}


// RTI recovery payloads are encrypted in the Worker before reaching Supabase.
function recoveryCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = crypto.getRandomValues(new Uint8Array(20));
  let raw = "";
  for (const b of bytes) raw += alphabet[b % alphabet.length];
  return raw.match(/.{1,5}/g).join("-");
}
async function recoveryDigest(value) {
  const bytes = new TextEncoder().encode(String(value || "").replace(/-/g, "").toUpperCase());
  return bytesToHex(await crypto.subtle.digest("SHA-256", bytes));
}
async function recoveryCryptoKey(env) {
  const secret = String(env.RTI_RECOVERY_ENCRYPTION_KEY || "").trim();
  if (secret.length < 32) throw new Error("RTI recovery encryption key is not configured");
  const raw = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(secret));
  return crypto.subtle.importKey("raw", raw, { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
}
async function encryptRecovery(payload, env) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, await recoveryCryptoKey(env), new TextEncoder().encode(JSON.stringify(payload)));
  const b64 = (bytes) => btoa(String.fromCharCode(...new Uint8Array(bytes))).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/g, "");
  return { payload_ciphertext: b64(encrypted), payload_iv: b64(iv) };
}
async function supabaseRecoveryRequest(path, env, options = {}) {
  const serviceKey = String(env.SUPABASE_SERVICE_ROLE_KEY || "").trim();
  if (!serviceKey) throw new Error("Supabase recovery service key is not configured");
  return fetch(SUPABASE_URL + "/rest/v1/" + path, {
    ...options,
    headers: {
      apikey: serviceKey, Authorization: "Bearer " + serviceKey,
      "Content-Type": "application/json",
      Prefer: options.method === "POST" ? "return=minimal" : "return=representation",
      ...(options.headers || {})
    }
  });
}
async function createRecoveryRecord({ paymentId, kit, source, payload }, env) {
  // Keep recovery data only for its short life: delete expired rows first.
  try { await supabaseRecoveryRequest("rti_kit_recovery?expires_at=lt." + encodeURIComponent(new Date().toISOString()), env, { method: "DELETE" }); } catch {}
  const code = recoveryCode();
  const hash = await recoveryDigest(code);
  const encrypted = await encryptRecovery(payload, env);
  const response = await supabaseRecoveryRequest("rti_kit_recovery", env, {
    method: "POST",
    body: JSON.stringify({
      recovery_code_hash: hash, payment_id: paymentId, kit,
      source_hash: await kitSourceHash(source),
      payload_ciphertext: encrypted.payload_ciphertext, payload_iv: encrypted.payload_iv
    })
  });
  if (!response.ok) throw new Error("Unable to save RTI recovery record");
  return code;
}
async function saveRecoveryKit(body, env) {
  const code = String(body?.recovery_code || "").trim().toUpperCase();
  const application = body?.application;
  const kit = body?.kit && KITS[body.kit] ? body.kit : "rti";
  const drafts = body?.drafts && typeof body.drafts === "object" ? body.drafts : {};
  if (!/^[A-HJ-NP-Z2-9]{5}(?:-[A-HJ-NP-Z2-9]{5}){3}$/.test(code) || !validKitApplication(application, kit)) {
    return { success: false, status: 400, error: "Invalid recovery details" };
  }
  const payload = { application: normalizeKitApplication(application, kit), drafts };
  const serialized = JSON.stringify(payload);
  if (serialized.length > 30000) return { success: false, status: 413, error: "Recovery data is too large" };
  const encrypted = await encryptRecovery(payload, env);
  const hash = await recoveryDigest(code);
  const response = await supabaseRecoveryRequest(
    "rti_kit_recovery?recovery_code_hash=eq." + hash + "&kit=eq." + kit + "&revoked_at=is.null&expires_at=gt." + encodeURIComponent(new Date().toISOString()),
    env,
    { method: "PATCH", body: JSON.stringify({ payload_ciphertext: encrypted.payload_ciphertext, payload_iv: encrypted.payload_iv, updated_at: new Date().toISOString() }) }
  );
  if (!response.ok) return { success: false, status: 503, error: "Unable to save recovery data" };
  const updated = await response.json();
  if (!Array.isArray(updated) || updated.length !== 1) return { success: false, status: 404, error: "Recovery code not found or expired" };
  return { success: true, status: 200 };
}

async function recoverKit(body, env) {
  const code = String(body?.recovery_code || "").trim().toUpperCase();
  if (!/^[A-HJ-NP-Z2-9]{5}(?:-[A-HJ-NP-Z2-9]{5}){3}$/.test(code)) return { success: false, status: 400, error: "Invalid recovery code" };
  const hash = await recoveryDigest(code);
  const response = await supabaseRecoveryRequest("rti_kit_recovery?select=payload_ciphertext,payload_iv,kit,expires_at,revoked_at&recovery_code_hash=eq." + hash + "&limit=1", env);
  if (!response.ok) return { success: false, status: 503, error: "Recovery service unavailable" };
  const row = (await response.json())[0];
  if (!row || row.revoked_at || Date.parse(row.expires_at) <= Date.now()) return { success: false, status: 404, error: "Recovery code not found or expired" };
  try {
    const decode = (s) => {
      let v = String(s).replaceAll("-", "+").replaceAll("_", "/");
      while (v.length % 4) v += "=";
      return Uint8Array.from(atob(v), ch => ch.charCodeAt(0));
    };
    const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: decode(row.payload_iv) }, await recoveryCryptoKey(env), decode(row.payload_ciphertext));
    const k = KITS[row.kit];
    return { success: true, status: 200, data: { kit: row.kit, payload: JSON.parse(new TextDecoder().decode(plain)), appealFields: k.appealFields, secondAppealFields: k.secondAppealFields, templates: k.templates, checklist: k.checklist } };
  } catch {
    return { success: false, status: 500, error: "Unable to decrypt recovery data" };
  }
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
        return json({ success: true, key_id: keyId(env), order_id: order.id, amount: getPrice(env), currency: getCurrency(env) }, 200, headers);
      } catch (error) {
        const bad = error.message === "Invalid RC number";
        return json({
          success: false,
          error: bad ? error.message
            : error.message === "Razorpay credentials are not configured" ? "Payment service credentials are not configured"
            : "Unable to create payment order",
          ...(error.razorpay_status ? { provider_status: error.razorpay_status, provider_error: error.message } : {})
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

    if (request.method === "POST" && url.pathname === "/kit/create-order") {
      try {
        const body = await request.json();
        const order = await createKitOrder(env, body.kit, body.application, body.source);
        return json({ success: true, key_id: keyId(env), order_id: order.id, amount: kitPrice(env), currency: getCurrency(env) }, 200, headers);
      } catch (error) {
        const bad = error.message === "Invalid kit" || Object.values(KIT_APP).some((k) => k.need === error.message);
        return json({ success: false, error: bad ? error.message : "Unable to create payment order" }, bad ? 400 : 502, headers);
      }
    }

    if (request.method === "POST" && url.pathname === "/kit/verify") {
      try {
        const result = await verifyKitPayment(await request.json(), env);
        return json({ success: result.success, ...(result.success ? { data: result.data } : { error: result.error }) }, result.status, headers);
      } catch {
        return json({ success: false, error: "Payment verification service unavailable" }, 502, headers);
      }
    }

    if (request.method === "POST" && url.pathname === "/kit/recover") {
      try {
        const result = await recoverKit(await request.json(), env);
        return json({ success: result.success, ...(result.success ? { data: result.data } : { error: result.error }) }, result.status, headers);
      } catch {
        return json({ success: false, error: "Recovery service unavailable" }, 503, headers);
      }
    }

    if (request.method === "POST" && url.pathname === "/kit/save") {
      try {
        const result = await saveRecoveryKit(await request.json(), env);
        return json({ success: result.success, ...(result.success ? {} : { error: result.error }) }, result.status, headers);
      } catch {
        return json({ success: false, error: "Recovery save unavailable" }, 503, headers);
      }
    }

    if (request.method === "GET" && url.pathname === "/price") {
      return json({ success: true, amount: getPrice(env), currency: getCurrency(env) }, 200, headers);
    }

    return json({ success: false, error: "Route not found" }, 404, headers);
  }
};
