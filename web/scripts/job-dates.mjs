// Application last date of a job page (jobs/*.html): the latest date written
// next to "last date" / "अंतिम तिथि" (or JobPosting validThrough). Used by
// assemble.mjs to mark closed vacancies and by the Telegram post.
const MONTHS = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
  जनवरी: 0, फरवरी: 1, मार्च: 2, अप्रैल: 3, मई: 4, जून: 5, जुलाई: 6, अगस्त: 7, सितंबर: 8, सितम्बर: 8, अक्टूबर: 9, नवंबर: 10, नवम्बर: 10, दिसंबर: 11, दिसम्बर: 11 };
const DATE = /(\d{1,2})(?:st|nd|rd|th)?[\s.,-]+([A-Za-zऀ-ॿ]{3,9})[\s.,-]+(20\d\d)|(\d{1,2})[./-](\d{1,2})[./-](20\d\d)/;

function toDate(m) {
  if (m[4]) return new Date(Date.UTC(+m[6], +m[5] - 1, +m[4]));
  const key = Object.keys(MONTHS).find((k) => m[2].toLowerCase().startsWith(k));
  return key === undefined ? null : new Date(Date.UTC(+m[3], MONTHS[key], +m[1]));
}

export function jobLastDate(html) {
  const dates = [];
  const vt = html.match(/"validThrough"\s*:\s*"(20\d\d)-(\d\d)-(\d\d)/);
  if (vt) dates.push(new Date(Date.UTC(+vt[1], +vt[2] - 1, +vt[3])));
  const t = html.replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const re = new RegExp(`(last date|closing date|registration clos\\w*|अंतिम तिथि|अंतिम तारीख|आखिरी तारीख)[^0-9]{0,80}?(${DATE.source})`, "gi");
  for (const m of t.matchAll(re)) {
    const d = toDate(m.slice(2));
    if (d && d.getUTCFullYear() >= 2020) dates.push(d);
  }
  return dates.length ? new Date(Math.max(...dates)) : null;
}

export const isClosedPage = (html) => /job-expired-banner|आवेदन बंद \/ Application Closed/.test(html);
