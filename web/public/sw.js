// Service worker only for browser notifications (registered when a visitor
// presses the "सूचना पाएं" button). It does not cache or change any page.
const SUPABASE_URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co";
const ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I";
const TOPIC_HI = { yojana: "योजना", naukri: "नौकरी" };

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("push", (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch { d = { body: e.data && e.data.text() }; }
  const title = d.title || "SarkariSewa India";
  e.waitUntil(self.registration.showNotification(title, {
    body: d.body || "",
    icon: "/assets/img/android-chrome-192.png",
    badge: "/assets/img/android-chrome-192.png",
    tag: d.tag || undefined,
    lang: "hi",
    data: { url: d.url || "https://sarkarisewaindia.com/", topic: d.topic || "" },
    actions: [
      { action: "open", title: "पूरी जानकारी" },
      { action: "stop", title: `${TOPIC_HI[d.topic] || ""} सूचना बंद करें`.trim() },
    ],
  }));
});

self.addEventListener("notificationclick", (e) => {
  const { url, topic } = e.notification.data || {};
  e.notification.close();
  if (e.action === "stop") {
    e.waitUntil(self.registration.pushManager.getSubscription().then((s) => {
      if (!s) return;
      return fetch(`${SUPABASE_URL}/rest/v1/rpc/push_unsubscribe`, {
        method: "POST",
        headers: { apikey: ANON, Authorization: `Bearer ${ANON}`, "Content-Type": "application/json" },
        body: JSON.stringify({ p_endpoint: s.endpoint, p_topic: topic || null }),
      }).then(() => self.registration.showNotification("सूचना बंद हो गई", {
        body: `अब आपको ${TOPIC_HI[topic] || "यह"} सूचना नहीं आएगी। दोबारा चालू करने के लिए वेबसाइट पर बटन दबाएं।`,
        icon: "/assets/img/android-chrome-192.png", tag: "ss-stopped",
      }));
    }));
    return;
  }
  e.waitUntil(self.clients.openWindow(url || "https://sarkarisewaindia.com/"));
});
