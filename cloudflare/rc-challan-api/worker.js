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
      { key: "status", label: "क्या हुआ", type: "select", options: [
        "आवेदन के 30 दिन में कोई जवाब नहीं मिला",
        "जवाब मिला, पर जानकारी अधूरी या गलत है",
        "जानकारी देने से मना कर दिया गया",
      ] },
      { key: "replydate", label: "जवाब की तारीख (मिला हो तो)" },
      { key: "grounds", label: "अपील का कारण (संक्षेप में)", type: "textarea", required: true, hint: "जैसे: मांगे गए बिंदु 2 और 3 का जवाब नहीं दिया गया" },
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

5. अपील का आधार: {{grounds}}

प्रार्थना: कृपया अभिलेखों और तथ्यों की जांच कर, मांगी गई सूचना अधिनियम के अनुसार उपलब्ध कराने तथा आवश्यक कारणयुक्त आदेश पारित करने की कृपा करें।

संलग्न: (1) RTI आवेदन की कॉपी (2) डाक रसीद/ट्रैकिंग (3) फीस की रसीद या पोस्टल ऑर्डर की कॉपी (4) PIO का जवाब, यदि मिला हो।

स्थान: {{place}}
दिनांक: {{date}}

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
      "आवेदन में कारण बताना ज़रूरी नहीं है; सिर्फ अपना संपर्क पता लिखें और हर बिंदु अलग लाइन में पूछें।",
    ],
  },
};

function normalizeKitApplication(application) {
  const keys = ["name", "address", "phone", "office", "subject", "info", "period", "fee", "place", "date"];
  const out = {};
  for (const key of keys) out[key] = String(application?.[key] || "").trim().slice(0, 5000);
  return out;
}
function validKitApplication(application) {
  const app = normalizeKitApplication(application);
  return ["name", "address", "office", "subject", "info"].every((key) => app[key].length > 0);
}
async function kitApplicationHash(application) {
  const app = normalizeKitApplication(application);
  const bytes = new TextEncoder().encode(JSON.stringify(app));
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

async function createKitOrder(env, kit, application) {
  if (!KITS[kit]) throw new Error("Invalid kit");
  if (!validKitApplication(application)) throw new Error("Complete the free RTI application first");
  const applicationHash = await kitApplicationHash(application);
  const receipt = `KIT_${Date.now()}_${crypto.randomUUID().slice(0, 8)}`;
  const result = await razorpayRequest("/orders", env, {
    method: "POST",
    body: JSON.stringify({
      amount: kitPrice(env),
      currency: getCurrency(env),
      receipt,
      notes: { service: KITS[kit].name, website: "SarkariSewaIndia", kit, application_hash: applicationHash }
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
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, kit, application } = body || {};
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !KITS[kit] || !validKitApplication(application)) {
    return { success: false, status: 400, error: "Required payment details are missing" };
  }
  const expected = await generateRazorpaySignature(razorpay_order_id, razorpay_payment_id, keySecret(env));
  if (!timingSafeEqual(expected, String(razorpay_signature))) {
    return { success: false, status: 400, error: "Invalid payment signature" };
  }
  const orderResult = await razorpayRequest(`/orders/${encodeURIComponent(razorpay_order_id)}`, env, { method: "GET" });
  if (!orderResult.response.ok) return { success: false, status: 400, error: "Unable to verify Razorpay order" };
  const order = orderResult.data;
  const applicationHash = await kitApplicationHash(application);
  // New orders are bound to the exact free RTI application. Older paid
  // orders did not store an application hash, so retain their re-open access
  // after the same signed payment and captured-payment checks below.
  const savedApplicationHash = order.notes?.application_hash;
  if (order.amount !== kitPrice(env) || order.currency !== getCurrency(env) || order.notes?.kit !== kit || (savedApplicationHash && savedApplicationHash !== applicationHash)) {
    return { success: false, status: 400, error: "Order does not match this kit or RTI application" };
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
  return { success: true, status: 200, data: { kit, appealFields: k.appealFields, templates: k.templates, checklist: k.checklist } };
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
        const order = await createKitOrder(env, body.kit, body.application);
        return json({ success: true, key_id: keyId(env), order_id: order.id, amount: kitPrice(env), currency: getCurrency(env) }, 200, headers);
      } catch (error) {
        const bad = error.message === "Invalid kit" || error.message === "Complete the free RTI application first";
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

    if (request.method === "GET" && url.pathname === "/price") {
      return json({ success: true, amount: getPrice(env), currency: getCurrency(env) }, 200, headers);
    }

    return json({ success: false, error: "Route not found" }, 404, headers);
  }
};
