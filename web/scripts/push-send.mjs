// Sends the browser notifications written in the admin panel (push_campaigns).
// Run by .github/workflows/push-send.yml. Two steps so most runs install
// nothing:
//   node push-send.mjs check  -> prints "send=1" when there is work
//   node push-send.mjs send   -> needs the web-push package
// The first "send" also makes the VAPID keys and stores them in Supabase
// (push_config); they never leave Supabase and this runner.
//
// Env: PUSH_SEND_KEY (GitHub secret; its sha256 is registered in Supabase).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SITE = "https://sarkarisewaindia.com";
const SUPABASE_URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co";
const ANON = fs.readFileSync(path.join(HERE, "..", "src", "lib", "supabase-public.ts"), "utf8").match(/SUPABASE_ANON_KEY = "([^"]+)"/)[1];
const KEY = (process.env.PUSH_SEND_KEY || "").trim();
if (!KEY) { console.log("PUSH_SEND_KEY not set: nothing to do."); process.exit(0); }

async function rpc(name, args) {
  const r = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`, {
    method: "POST",
    headers: { apikey: ANON, Authorization: `Bearer ${ANON}`, "Content-Type": "application/json" },
    body: JSON.stringify({ p_key: KEY, ...args }),
  });
  const t = await r.text();
  if (!r.ok) throw new Error(`${name}: ${r.status} ${t.slice(0, 200)}`);
  return JSON.parse(t);
}

if (process.argv[2] === "check") {
  const p = await rpc("push_pending", {});
  console.log(`queued=${p.queued} need_vapid=${p.need_vapid}`);
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `send=${p.queued > 0 || p.need_vapid ? 1 : 0}\n`);
  process.exit(0);
}

const webpush = (await import("web-push")).default;
const q = await rpc("push_queue", {});
let pub = q.vapid_public, priv = q.vapid_private;
if (!pub) {
  ({ publicKey: pub, privateKey: priv } = webpush.generateVAPIDKeys());
  await rpc("push_save_vapid", { p_public: pub, p_private: priv });
  console.log("VAPID keys made and saved in Supabase.");
}
webpush.setVapidDetails("mailto:support@sarkarisewaindia.com", pub, priv);

for (const c of q.campaigns) {
  const sep = c.url.includes("?") ? "&" : "?";
  const payload = JSON.stringify({
    title: c.title, body: c.body, topic: c.topic, tag: `ss-${c.topic}-${c.id}`,
    url: `${SITE}${c.url}${sep}utm_source=push&utm_medium=notification&utm_campaign=${c.topic}`,
  });
  let sent = 0, failed = 0;
  const dead = [];
  const subs = c.subs || [];
  for (let i = 0; i < subs.length; i += 50) {
    await Promise.all(subs.slice(i, i + 50).map(async (s) => {
      try {
        await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, payload, { TTL: 12 * 3600, urgency: "normal" });
        sent++;
      } catch (e) {
        failed++;
        // 404/410: the visitor removed the permission or the browser data
        if (e.statusCode === 404 || e.statusCode === 410) dead.push(s.endpoint);
        else console.log(`  error ${e.statusCode || ""} ${String(e.body || e.message).slice(0, 120)}`);
      }
    }));
  }
  await rpc("push_report", { p_campaign: c.id, p_sent: sent, p_failed: failed, p_dead: dead });
  console.log(`#${c.id} [${c.topic}] ${c.title}: sent ${sent}, failed ${failed}, stopped ${dead.length}`);
}
if (!q.campaigns.length) console.log("No queued notifications.");
