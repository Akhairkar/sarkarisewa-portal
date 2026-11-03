// Browser-notification sender (Cloudflare cron). Same job as
// web/scripts/push-send.mjs, written with WebCrypto only (no packages):
// VAPID (RFC 8292) + aes128gcm payload encryption (RFC 8291).
const SITE = "https://sarkarisewaindia.com";
const SUPABASE_URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co";
const ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I";
const SUBJECT = "mailto:support@sarkarisewaindia.com";
const enc = new TextEncoder();

export const b64u = {
  dec(s) {
    s = s.replace(/-/g, "+").replace(/_/g, "/");
    s += "=".repeat((4 - (s.length % 4)) % 4);
    return Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  },
  enc(buf) {
    let s = "";
    for (const b of new Uint8Array(buf)) s += String.fromCharCode(b);
    return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  },
};
const cat = (...parts) => {
  const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
  let o = 0;
  for (const p of parts) { out.set(p, o); o += p.length; }
  return out;
};
const hkdf = async (salt, ikm, info, bytes) => {
  const key = await crypto.subtle.importKey("raw", ikm, "HKDF", false, ["deriveBits"]);
  return new Uint8Array(await crypto.subtle.deriveBits({ name: "HKDF", hash: "SHA-256", salt, info }, key, bytes * 8));
};

// RFC 8291: one aes128gcm record.
export async function encryptPayload(p256dh, auth, plaintext) {
  const uaPublic = b64u.dec(p256dh);
  const authSecret = b64u.dec(auth);
  const uaKey = await crypto.subtle.importKey("raw", uaPublic, { name: "ECDH", namedCurve: "P-256" }, false, []);
  const as = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"]);
  const asPublic = new Uint8Array(await crypto.subtle.exportKey("raw", as.publicKey));
  const ecdh = new Uint8Array(await crypto.subtle.deriveBits({ name: "ECDH", public: uaKey }, as.privateKey, 256));
  const ikm = await hkdf(authSecret, ecdh, cat(enc.encode("WebPush: info\0"), uaPublic, asPublic), 32);
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const cek = await hkdf(salt, ikm, enc.encode("Content-Encoding: aes128gcm\0"), 16);
  const nonce = await hkdf(salt, ikm, enc.encode("Content-Encoding: nonce\0"), 12);
  const key = await crypto.subtle.importKey("raw", cek, "AES-GCM", false, ["encrypt"]);
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: nonce }, key, cat(plaintext, new Uint8Array([2]))));
  const rs = new Uint8Array([0, 0, 16, 0]); // 4096
  return cat(salt, rs, new Uint8Array([asPublic.length]), asPublic, ct);
}

// RFC 8292: VAPID JWT (ES256).
export async function vapidHeader(endpoint, publicKey, privateKey) {
  const pub = b64u.dec(publicKey);
  const jwk = { kty: "EC", crv: "P-256", x: b64u.enc(pub.slice(1, 33)), y: b64u.enc(pub.slice(33, 65)), d: privateKey, ext: true };
  const key = await crypto.subtle.importKey("jwk", jwk, { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
  const head = b64u.enc(enc.encode(JSON.stringify({ typ: "JWT", alg: "ES256" })));
  const body = b64u.enc(enc.encode(JSON.stringify({ aud: new URL(endpoint).origin, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: SUBJECT })));
  const sig = await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, key, enc.encode(`${head}.${body}`));
  return `vapid t=${head}.${body}.${b64u.enc(sig)}, k=${publicKey}`;
}

async function rpc(env, name, args) {
  const r = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`, {
    method: "POST",
    headers: { apikey: ANON, Authorization: `Bearer ${ANON}`, "Content-Type": "application/json" },
    body: JSON.stringify({ p_key: env.PUSH_SEND_KEY, ...args }),
  });
  const t = await r.text();
  if (!r.ok) throw new Error(`${name}: ${r.status} ${t.slice(0, 200)}`);
  return JSON.parse(t);
}

async function sendOne(sub, payload, pub, priv) {
  const body = await encryptPayload(sub.p256dh, sub.auth, enc.encode(payload));
  const r = await fetch(sub.endpoint, {
    method: "POST",
    headers: {
      Authorization: await vapidHeader(sub.endpoint, pub, priv),
      TTL: String(12 * 3600),
      Urgency: "high",
      "Content-Encoding": "aes128gcm",
      "Content-Type": "application/octet-stream",
    },
    body,
  });
  return r.status;
}

export async function run(env) {
  if (!env.PUSH_SEND_KEY) return "no key";
  const p = await rpc(env, "push_pending", {});
  if (!(p.queued > 0)) return "nothing queued";
  const q = await rpc(env, "push_queue", {});
  if (!q.vapid_public) return "no VAPID keys";
  const log = [];
  for (const c of q.campaigns) {
    const sep = c.url.includes("?") ? "&" : "?";
    const payload = JSON.stringify({
      title: c.title, body: c.body, topic: c.topic, tag: `ss-${c.topic}-${c.id}`,
      url: `${SITE}${c.url}${sep}utm_source=push&utm_medium=notification&utm_campaign=${c.topic}`,
    });
    let sent = 0, failed = 0;
    const dead = [];
    const subs = c.subs || [];
    for (let i = 0; i < subs.length; i += 20) {
      await Promise.all(subs.slice(i, i + 20).map(async (s) => {
        try {
          const st = await sendOne(s, payload, q.vapid_public, q.vapid_private);
          if (st >= 200 && st < 300) sent++;
          else { failed++; if (st === 404 || st === 410) dead.push(s.endpoint); }
        } catch { failed++; }
      }));
    }
    await rpc(env, "push_report", { p_campaign: c.id, p_sent: sent, p_failed: failed, p_dead: dead });
    log.push(`#${c.id} ${c.topic}: sent ${sent}, failed ${failed}, stopped ${dead.length}`);
  }
  return log.join("; ") || "no campaigns";
}

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(run(env).then((m) => console.log(m), (e) => console.error(String(e))));
  },
  async fetch() {
    return new Response("Not found", { status: 404 });
  },
};
