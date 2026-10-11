// Posts to the SarkariSewa India Facebook Page through the Graph API.
// Facebook no longer lets apps post into Groups, so automation goes to the
// Page and the admin shares from there into the group.
//
// Env (GitHub secrets): FB_PAGE_ID, FB_PAGE_TOKEN (a Page access token with
// pages_manage_posts). Without them every call is skipped. FB_GRAPH_VERSION
// overrides the API version. A failure is logged and never stops the
// Telegram post that runs alongside.
const ID = (process.env.FB_PAGE_ID || "").trim();
const TOKEN = (process.env.FB_PAGE_TOKEN || "").trim();
const VER = (process.env.FB_GRAPH_VERSION || "v23.0").trim();

export const fbEnabled = () => !!(ID && TOKEN);

// Telegram captions use a little HTML; Facebook takes plain text.
export function plain(html) {
  return String(html)
    .replace(/<a\s[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (m, href, text) => (text.includes(href.replace(/^https?:\/\//, "").split("/")[0]) ? href : `${text}: ${href}`))
    .replace(/<[^>]+>/g, "")
    .replace(/utm_source=telegram/g, "utm_source=facebook")
    .replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}

async function call(url, body) {
  if (!fbEnabled()) return null;
  try {
    body.append("access_token", TOKEN);
    const r = await fetch(url, { method: "POST", body });
    const j = await r.json().catch(() => ({}));
    if (!r.ok || j.error) throw new Error(j.error?.message || `HTTP ${r.status}`);
    console.log(`Facebook Page: posted (${j.post_id || j.id})`);
    return j;
  } catch (e) {
    console.log(`Facebook Page: not posted: ${e.message}`);
    return null;
  }
}

// Text post; a link adds Facebook's preview card.
export function fbText(message, link) {
  const f = new FormData();
  f.append("message", message);
  if (link) f.append("link", link);
  return call(`https://graph.facebook.com/${VER}/${ID}/feed`, f);
}

export function fbPhoto(buffer, caption, type = "image/png") {
  const f = new FormData();
  f.append("caption", caption);
  f.append("source", new Blob([buffer], { type }), "post.png");
  return call(`https://graph.facebook.com/${VER}/${ID}/photos`, f);
}

export function fbVideo(buffer, description, title) {
  const f = new FormData();
  f.append("description", description);
  if (title) f.append("title", title);
  f.append("source", new Blob([buffer], { type: "video/mp4" }), "video.mp4");
  return call(`https://graph-video.facebook.com/${VER}/${ID}/videos`, f);
}
