/* ==========================================================================
   job-post.js — SarkariSewa India
   Master Renderer for /jobs/post.html or dynamic job pages
   Includes: Full Highlights, Important Dates, Fees, Salary, Official Links,
   6 Problem Solvers, 10 Bilingual FAQs, Citizen Tools Grid, Schemas
   ========================================================================== */

(function () {
  const ROOT = window.SS_ROOT || "../";
  const params = new URLSearchParams(window.location.search);
  const slug = document.body ? (document.body.dataset.slug || params.get("slug")) : params.get("slug");

  const breadcrumbEl = document.getElementById("breadcrumb");
  const loadingEl = document.getElementById("job-post-loading");
  const heroEl = document.getElementById("job-post-hero");
  const bodyEl = document.getElementById("job-post-body");
  const relatedEl = document.getElementById("job-post-related");

  const JOB_TYPES = {
    central: { en: "Central Govt", hi: "केंद्र सरकार" },
    state: { en: "State Govt", hi: "राज्य सरकार" },
    psu: { en: "PSU", hi: "PSU" },
    railway: { en: "Railway", hi: "रेलवे" },
    banking: { en: "Banking", hi: "बैंकिंग" },
    defence: { en: "Defence", hi: "रक्षा" },
    teaching: { en: "Teaching", hi: "शिक्षण" },
    other: { en: "Other", hi: "अन्य" },
  };

  function safeGetLang() {
    if (typeof window.getLang === "function") return window.getLang();
    if (typeof getLang === "function") return getLang();
    return document.documentElement.getAttribute("lang") || "hi";
  }

  function safeT(obj) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    const lang = safeGetLang();
    if (typeof window.t === "function") return window.t(obj);
    if (typeof t === "function") return t(obj);
    return obj[lang] || obj.hi || obj.en || "";
  }

  function safeOnLangChange(fn) {
    if (typeof window.onLangChange === "function") window.onLangChange(fn);
    else if (typeof onLangChange === "function") onLangChange(fn);
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str || "";
    return div.innerHTML;
  }

  function nl2br(str) {
    return escapeHtml(str).replace(/\n/g, "<br>");
  }

  function formatDate(iso) {
    if (!iso) return "शीघ्र उपलब्ध (Available Soon)";
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    const locale = safeGetLang() === "hi" ? "hi-IN" : "en-IN";
    return d.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
  }

  function isClosed(lastDate) {
    if (!lastDate) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(lastDate + "T00:00:00") < today;
  }

  async function fetchJob(theSlug) {
    // Try fetching from local jobs data first
    try {
      const res = await fetch(`${ROOT}data/local-jobs.json`);
      if (res.ok) {
        const localList = await res.json();
        const found = localList.find(j => j.slug === theSlug);
        if (found) return found;
      }
    } catch (e) {}

    // Fallback to Supabase
    if (typeof getSupabaseClient !== "function") return null;
    try {
      const client = await getSupabaseClient();
      if (!client) return null;
      const published = await client
        .from("job_alerts")
        .select("*")
        .eq("status", "published")
        .eq("slug", theSlug)
        .maybeSingle();
      if (published.error) throw published.error;
      if (published.data) return published.data;

      const draft = await client.from("job_alerts").select("*").eq("slug", theSlug).maybeSingle();
      if (draft.error) return null;
      if (draft.data) draft.data.__isDraftPreview = true;
      return draft.data;
    } catch (err) {
      console.warn("Supabase fetchJob error:", err);
      return null;
    }
  }

  async function fetchRelatedJobs(jobType, excludeSlug) {
    if (typeof getSupabaseClient !== "function") return [];
    try {
      const client = await getSupabaseClient();
      if (!client || !jobType) return [];
      const { data, error } = await client
        .from("job_alerts")
        .select("slug, title_en, title_hi, last_date")
        .eq("status", "published")
        .eq("job_type", jobType)
        .neq("slug", excludeSlug)
        .order("last_date", { ascending: true })
        .limit(4);
      if (error) return [];
      return data || [];
    } catch (err) {
      return [];
    }
  }

  if (!slug) {
    renderMissing();
  } else {
    fetchJob(slug)
      .then(async (job) => {
        if (loadingEl) loadingEl.hidden = true;
        if (!job) {
          renderMissing();
          return;
        }
        const relatedJobs = await fetchRelatedJobs(job.job_type, job.slug);
        renderMasterPage(job, relatedJobs);
        if (job.__isDraftPreview) renderDraftBanner();
        safeOnLangChange(() => renderMasterPage(job, relatedJobs));
      })
      .catch((err) => {
        console.error("Failed to load job alert:", err);
        if (loadingEl) {
          loadingEl.hidden = false;
          loadingEl.textContent = safeT({
            en: "Could not load this job alert. Please try again later.",
            hi: "यह नौकरी अलर्ट लोड नहीं हो सका। कृपया बाद में पुनः प्रयास करें।",
          });
        }
      });
  }

  function pick(job, baseKey) {
    const lang = safeGetLang();
    return (lang === "hi" && job[baseKey + "_hi"]) ? job[baseKey + "_hi"] : job[baseKey + "_en"];
  }

  const DEFAULT_PROBLEMS = [
    {
      title: "1. OTR व लाइव फोटो रिजेक्शन से बचाव (Photo & Sign Fix)",
      desc: "आवेदन करते समय सफेद बैकग्राउंड, पर्याप्त रोशनी और सीधे कैमरे में देखें। चश्मा या टोपी न पहनें। हमारे Photo Resizer (20-50 KB) और Signature Resizer (10-20 KB) टूल्स का उपयोग करें।"
    },
    {
      title: "2. अंतिम तिथि पर सर्वर क्रैश व भुगतान पेंडिंग (Payment Fix)",
      desc: "यदि बैंक खाते से फीस कट गई है और फॉर्म पर 'Pending' आ रहा है, तो दोबारा पेमेंट न करें। 24 से 48 घंटे में 'Double Verification' से चालान स्वतः सत्यापित हो जाता है।"
    },
    {
      title: "3. ईडब्ल्यूएस (EWS) व ओबीसी-एनसीएल क्रूशियल डेट नियम",
      desc: "जाति व आय प्रमाण पत्र हमेशा फॉर्म की अंतिम तिथि (Crucial Cut-off Date) से पूर्व के वैध वित्तीय वर्ष का होना अनिवार्य है। डीवी में पुराना या गलत प्रमाण पत्र स्वीकार नहीं होता।"
    },
    {
      title: "4. परीक्षा केंद्र (Exam Center) वरीयता आवंटन नियम",
      desc: "अधिकांश आयोग 'First-Apply-First-Allot' नियम का पालन करते हैं। मनपसंद शहर का परीक्षा केंद्र पाने के लिए आवेदन विंडो खुलते ही शुरुआती दिनों में फॉर्म जमा करें।"
    },
    {
      title: "5. टाइपिंग टेस्ट (DEST) व कंप्यूटर प्रोफिशिएंसी मानक",
      desc: "क्लर्क व सहायक पदों के लिए 35 WPM (English) या 30 WPM (Hindi) टाइपिंग अनिवार्य होती है। हमारे Typing Speed Test टूल पर प्रतिदिन 15 मिनट अभ्यास करें।"
    },
    {
      title: "6. फॉर्म में त्रुटि सुधार विंडो (Application Correction Window)",
      desc: "यदि नाम, पिता का नाम या श्रेणी में कोई गलती हो जाए तो घबराएं नहीं। आयोग अंतिम तिथि के बाद 2-3 दिन की करेक्शन विंडो खोलता है जहां संशोधित शुल्क देकर सुधार किया जा सकता है।"
    }
  ];

  const DEFAULT_FAQS = [
    {
      q: "इस भर्ती के लिए ऑनलाइन आवेदन कैसे करें?",
      a: "आधिकारिक भर्ती पोर्टल पर जाएं, अपना वन-टाइम रजिस्ट्रेशन (OTR) पूरा करें, शैक्षणिक योग्यता व श्रेणी विवरण दर्ज करें, निर्धारित साइज में लाइव फोटो व सिग्नेचर अपलोड करें और ऑनलाइन फीस भुगतान कर रसीद डाउनलोड करें।"
    },
    {
      q: "क्या अंतिम वर्ष (Final Year) के अभ्यर्थी इस भर्ती के लिए पात्र हैं?",
      a: "हाँ, बशर्ते वे अधिसूचना में दी गई अंतिम कट-ऑफ तिथि तक अपनी डिग्री अथवा योग्यता का अंतिम परीक्षा परिणाम प्राप्त कर लें।"
    },
    {
      q: "आयु सीमा में क्या छूट (Age Relaxation) मिलती है?",
      a: "सरकारी नियमानुसार OBC (Non-Creamy Layer) को 3 वर्ष, SC/ST को 5 वर्ष, PwD को 10-15 वर्ष तथा भूतपूर्व सैनिकों को सेवा अवधि घटाकर 3 वर्ष की अधिकतम छूट दी जाती है।"
    },
    {
      q: "आवेदन शुल्क कितना है और इसका भुगतान कैसे किया जा सकता है?",
      a: "सामान्य/ओबीसी/ईडब्ल्यूएस पुरुष अभ्यर्थियों हेतु निर्धारित शुल्क होता है, जबकि महिला, एससी, एसटी और दिव्यांगजन पूर्णतः निःशुल्क (Exempted) होते हैं। भुगतान नेट बैंकिंग, UPI या डेबिट कार्ड से संभव है।"
    },
    {
      q: "परीक्षा का माध्यम और निगेटिव मार्किंग (Negative Marking) नियम क्या है?",
      a: "परीक्षा ऑनलाइन कंप्यूटर आधारित (CBT) होती है जिसमें हिंदी व अंग्रेजी दोनों माध्यम उपलब्ध होते हैं। गलत उत्तर पर निर्धारित 1/3 या 1/4 अंक की निगेटिव मार्किंग काटी जाती है।"
    },
    {
      q: "एडमिट कार्ड (Hall Ticket) कब और कैसे डाउनलोड होगा?",
      a: "परीक्षा तिथि से 4 से 7 दिन पूर्व आधिकारिक पोर्टल पर रोल नंबर व जन्म तिथि दर्ज करके ई-एडमिट कार्ड डाउनलोड किया जा सकता है।"
    },
    {
      q: "मल्टी-शिफ्ट परीक्षाओं में नॉर्मलाइजेशन (Score Normalization) कैसे लागू होता है?",
      a: "कठिन व आसान पालियों के बीच संतुलन बनाने हेतु DoPT व आयोग द्वारा Equi-Percentile / Standard Normalization फॉर्मूला लागू किया जाता है।"
    },
    {
      q: "क्या फॉर्म भरने के बाद प्रिंटआउट डाक से भेजना जरूरी है?",
      a: "नहीं, ऑनलाइन आवेदन पूरी तरह डिजिटल है। प्रिंटआउट केवल भविष्य में डीवी (Document Verification) और संदर्भ के लिए अपने पास सुरक्षित रखें।"
    },
    {
      q: "फोटो और सिग्नेचर का साइज कैसे ठीक करें?",
      a: "हमारे पोर्टल पर दिए गए मुफ्त Photo Resizer और Signature Resizer टूल्स का उपयोग करके आप बिना क्वालिटी खोए तुरंत आवश्यक KB में फाइल रीसाइज कर सकते हैं।"
    },
    {
      q: "आधिकारिक अधिसूचना (PDF) और नवीनतम अपडेट्स कहाँ से प्राप्त करें?",
      a: "ऊपर दिए गए 'Official Notification PDF' बटन से पूरी विज्ञप्ति डाउनलोड करें और रियल-टाइम अलर्ट्स हेतु हमारे VIP टेलीग्राम चैनल से जुड़ें।"
    }
  ];

  function renderMasterPage(job, relatedJobs) {
    const title = pick(job, "title") || "Sarkari Job Alert 2026";
    const dept = pick(job, "department") || "Government Department";
    const qual = pick(job, "qualification") || "10th / 12th / Graduate Degree";
    const vacancies = job.vacancies ? `${job.vacancies} Posts` : "विज्ञप्ति देखें (See Notification)";
    const salary = pick(job, "salary") || "7th CPC Pay Scale (वेतनमान स्तर अनुसार)";
    const ageLimit = pick(job, "age_limit") || "18 to 35 Years (As on prescribed date)";
    const location = pick(job, "location") || "All India (भारत भर में)";
    const lastDate = formatDate(job.last_date);
    const applyLink = job.apply_link || "#";
    const notifLink = job.notification_link || job.apply_link || "#";

    document.title = `${title} — SarkariSewa India`;

    if (heroEl) heroEl.hidden = false;
    if (bodyEl) bodyEl.hidden = false;

    // Render Master Highlights & Hero
    if (heroEl) {
      heroEl.innerHTML = `
        <div class="job-hero-card" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 16px; padding: 32px 28px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
          <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 12px;">
            <span style="background: #2563eb; color: #ffffff; padding: 4px 12px; border-radius: 16px; font-weight: 700; font-size: 0.82rem;">🏛️ ${escapeHtml(dept)}</span>
            <span style="background: rgba(5,150,105,0.12); color: #059669; padding: 4px 12px; border-radius: 16px; font-weight: 800; font-size: 0.82rem;">👥 ${escapeHtml(vacancies)}</span>
            ${isClosed(job.last_date) ? '<span style="background: #ef4444; color: #ffffff; padding: 4px 12px; border-radius: 16px; font-weight: 700; font-size: 0.82rem;">Closed</span>' : '<span style="background: #10b981; color: #ffffff; padding: 4px 12px; border-radius: 16px; font-weight: 700; font-size: 0.82rem;">Active Recruitment</span>'}
          </div>
          
          <h1 style="font-size: 2.1rem; line-height: 1.35; color: var(--color-primary); margin: 0 0 16px 0;">${escapeHtml(title)}</h1>
          <p style="font-size: 1.05rem; color: var(--color-text); line-height: 1.7; margin-bottom: 24px;">
            ${escapeHtml(dept)} द्वारा <strong>${escapeHtml(vacancies)}</strong> पर आधिकारिक भर्ती अधिसूचना जारी कर दी गई है। पात्र एवं इच्छुक अभ्यर्थी नीचे दिए गए स्टेप-बाय-स्टेप गाइड का पालन करके ऑनलाइन आवेदन कर सकते हैं।
          </p>

          <!-- 6-Point Highlight Matrix -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin: 20px 0;">
            <div style="background: rgba(37,99,235,0.05); border: 1px solid var(--color-border); border-radius: 10px; padding: 14px;">
              <div style="font-size: 0.8rem; color: var(--color-text-muted); font-weight: 700;">🏛️ भर्ती संस्था / विभाग</div>
              <div style="font-size: 0.95rem; font-weight: 700; color: var(--color-primary); margin-top: 4px;">${escapeHtml(dept)}</div>
            </div>
            <div style="background: rgba(37,99,235,0.05); border: 1px solid var(--color-border); border-radius: 10px; padding: 14px;">
              <div style="font-size: 0.8rem; color: var(--color-text-muted); font-weight: 700;">👥 कुल पद / रिक्तियां</div>
              <div style="font-size: 0.95rem; font-weight: 700; color: #059669; margin-top: 4px;">${escapeHtml(vacancies)}</div>
            </div>
            <div style="background: rgba(37,99,235,0.05); border: 1px solid var(--color-border); border-radius: 10px; padding: 14px;">
              <div style="font-size: 0.8rem; color: var(--color-text-muted); font-weight: 700;">🎓 न्यूनतम योग्यता</div>
              <div style="font-size: 0.95rem; font-weight: 700; color: var(--color-text); margin-top: 4px;">${escapeHtml(qual)}</div>
            </div>
            <div style="background: rgba(37,99,235,0.05); border: 1px solid var(--color-border); border-radius: 10px; padding: 14px;">
              <div style="font-size: 0.8rem; color: var(--color-text-muted); font-weight: 700;">⏳ आयु सीमा (Age Limit)</div>
              <div style="font-size: 0.95rem; font-weight: 700; color: var(--color-text); margin-top: 4px;">${escapeHtml(ageLimit)}</div>
            </div>
            <div style="background: rgba(37,99,235,0.05); border: 1px solid var(--color-border); border-radius: 10px; padding: 14px;">
              <div style="font-size: 0.8rem; color: var(--color-text-muted); font-weight: 700;">💰 वेतनमान (Pay Scale)</div>
              <div style="font-size: 0.95rem; font-weight: 700; color: #059669; margin-top: 4px;">${escapeHtml(salary)}</div>
            </div>
            <div style="background: rgba(37,99,235,0.05); border: 1px solid var(--color-border); border-radius: 10px; padding: 14px;">
              <div style="font-size: 0.8rem; color: var(--color-text-muted); font-weight: 700;">📅 आवेदन की अंतिम तिथि</div>
              <div style="font-size: 0.95rem; font-weight: 700; color: #dc2626; margin-top: 4px;">${escapeHtml(lastDate)}</div>
            </div>
          </div>

          <!-- Direct Official Action Buttons -->
          <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px;">
            <a href="${applyLink}" target="_blank" rel="noopener noreferrer" style="background: #059669; color: #ffffff !important; font-weight: 700; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; font-size: 1rem; box-shadow: 0 4px 14px rgba(5,150,105,0.25);">
              🚀 आधिकारिक पोर्टल पर ऑनलाइन आवेदन करें ↗
            </a>
            ${notifLink ? `<a href="${notifLink}" target="_blank" rel="noopener noreferrer" style="background: #2563eb; color: #ffffff !important; font-weight: 700; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; font-size: 1rem;">📄 आधिकारिक अधिसूचना (PDF) ↗</a>` : ''}
            <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" style="background: #0088cc; color: #ffffff !important; font-weight: 700; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; font-size: 1rem;">✈️ VIP Telegram Alert</a>
          </div>
        </div>
      `;
    }

    // Render Master Body with Tables, Problem Solvers, FAQs & Tools Grid
    if (bodyEl) {
      bodyEl.innerHTML = `
        <!-- Section 1: Important Dates & Schedule -->
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 24px; margin-bottom: 24px;">
          <h2 style="color: var(--color-primary); font-size: 1.45rem; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 8px;">
            📅 महत्वपूर्ण तिथियां (Important Dates & Schedule)
          </h2>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
              <tbody>
                <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px; font-weight: 600;">अधिसूचना जारी होने की तिथि (Notification Date)</td><td style="padding: 12px; font-weight: 700; color: var(--color-primary);">${formatDate(job.notification_date || job.created_at)}</td></tr>
                <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px; font-weight: 600;">ऑनलाइन आवेदन शुरू तिथि (Apply Online Start)</td><td style="padding: 12px; font-weight: 700; color: #059669;">अधिसूचना तिथि से प्रारंभ (Active)</td></tr>
                <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px; font-weight: 600;">आवेदन की अंतिम तिथि (Last Date to Apply)</td><td style="padding: 12px; font-weight: 700; color: #dc2626;">${escapeHtml(lastDate)}</td></tr>
                <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px; font-weight: 600;">फॉर्म सुधार विंडो (Correction Window)</td><td style="padding: 12px; font-weight: 600;">अंतिम तिथि के 2-3 दिन बाद</td></tr>
                <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px; font-weight: 600;">सीबीटी परीक्षा तिथि (CBT Exam Date)</td><td style="padding: 12px; font-weight: 700; color: var(--color-primary);">आयोग द्वारा शीघ्र घोषित (As Per Calendar)</td></tr>
                <tr><td style="padding: 12px; font-weight: 600;">एडमिट कार्ड जारी (Admit Card Release)</td><td style="padding: 12px; font-weight: 600;">परीक्षा से 4 से 7 दिन पूर्व</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Section 2: Step-by-Step Online Application Guide -->
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 24px; margin-bottom: 24px;">
          <h2 style="color: var(--color-primary); font-size: 1.45rem; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 8px;">
            🚀 ऑनलाइन आवेदन करने की संपूर्ण चरणबद्ध प्रक्रिया (Step-by-Step Guide)
          </h2>
          <div style="color: var(--color-text); line-height: 1.8; font-size: 1rem;">
            <ol style="padding-left: 20px; margin: 0;">
              <li style="margin-bottom: 12px;"><strong>आधिकारिक वेबसाइट पर जाएं:</strong> सबसे पहले ऊपर दिए गए <em>'आधिकारिक पोर्टल पर ऑनलाइन आवेदन करें'</em> लिंक पर क्लिक करके आयोग के आधिकारिक पोर्टल पर जाएं।</li>
              <li style="margin-bottom: 12px;"><strong>वन-टाइम रजिस्ट्रेशन (OTR):</strong> यदि आप नए उपयोगकर्ता हैं तो 'New Registration / OTR' पर क्लिक करें, आधार कार्ड व 10वीं की मार्कशीट अनुसार विवरण भरकर पासवर्ड बनाएं।</li>
              <li style="margin-bottom: 12px;"><strong>आवेदन फॉर्म भरें:</strong> अपनी लॉग-इन आईडी से लॉगिन करें, सक्रिय भर्ती लिंक का चयन करें, शैक्षणिक योग्यता, आरक्षण श्रेणी व पते का विवरण दर्ज करें।</li>
              <li style="margin-bottom: 12px;"><strong>फोटो व हस्ताक्षर अपलोड:</strong> निर्धारित आयाम में नवीनतम पासपोर्ट फोटो और हस्ताक्षर अपलोड करें। हमारे मुफ्त <a href="${ROOT}tools/photo-resizer.html" style="color: #2563eb; font-weight: 700;">Photo Resizer (20-50 KB)</a> और <a href="${ROOT}tools/signature-resizer.html" style="color: #2563eb; font-weight: 700;">Signature Resizer (10-20 KB)</a> टूल्स का उपयोग करें।</li>
              <li style="margin-bottom: 12px;"><strong>परीक्षा केंद्र का चयन:</strong> अपनी प्राथमिकता के अनुसार 3 परीक्षा शहरों का चयन करें।</li>
              <li style="margin-bottom: 12px;"><strong>शुल्क भुगतान व प्रिंटआउट:</strong> नेट बैंकिंग, UPI अथवा कार्ड से निर्धारित आवेदन शुल्क का भुगतान करें और भविष्य के संदर्भ हेतु फाइनल सबमिशन फॉर्म का प्रिंटआउट सुरक्षित रख लें।</li>
            </ol>
          </div>
        </div>

        <!-- Section 3: Official Direct Important Links -->
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 24px; margin-bottom: 24px;">
          <h2 style="color: var(--color-primary); font-size: 1.45rem; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 8px;">
            🔗 आधिकारिक महत्वपूर्ण लिंक्स (Official Direct Important Links)
          </h2>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
              <tbody>
                <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 14px; font-weight: 700; color: var(--color-primary);">ऑनलाइन आवेदन लिंक (Apply Online Portal)</td><td style="padding: 14px; text-align: right;"><a href="${applyLink}" target="_blank" rel="noopener noreferrer" style="background: #059669; color: #fff; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 0.9rem;">Click Here ↗</a></td></tr>
                <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 14px; font-weight: 700; color: var(--color-primary);">आधिकारिक विस्तृत अधिसूचना (Official Notification PDF)</td><td style="padding: 14px; text-align: right;"><a href="${notifLink}" target="_blank" rel="noopener noreferrer" style="background: #2563eb; color: #fff; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 0.9rem;">Download PDF ↗</a></td></tr>
                <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 14px; font-weight: 700; color: var(--color-primary);">आयोग की आधिकारिक वेबसाइट (Official Website)</td><td style="padding: 14px; text-align: right;"><a href="${applyLink}" target="_blank" rel="noopener noreferrer" style="background: rgba(37,99,235,0.1); color: #2563eb; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 0.9rem;">Visit Portal ↗</a></td></tr>
                <tr><td style="padding: 14px; font-weight: 700; color: var(--color-primary);">SarkariSewa VIP Telegram चैनल (Live Alerts)</td><td style="padding: 14px; text-align: right;"><a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" style="background: #0088cc; color: #fff; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 0.9rem;">Join Telegram ↗</a></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Section 4: 6 Real-World Problem Solvers -->
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 24px; margin-bottom: 24px;">
          <h2 style="color: var(--color-primary); font-size: 1.45rem; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 8px;">
            🛠️ परीक्षार्थी सहायता केंद्र: 6 प्रमुख समस्याएं व समाधान (Problem Solvers)
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 16px;">
            ${DEFAULT_PROBLEMS.map(p => `
              <div style="padding: 16px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
                <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1rem;">${p.title}</h4>
                <p style="margin: 0; font-size: 0.9rem; color: var(--color-text); line-height: 1.6;">${p.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Section 5: 10 Bilingual FAQs -->
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 24px; margin-bottom: 24px;">
          <h2 style="color: var(--color-primary); font-size: 1.45rem; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 8px;">
            ❓ अक्सर पूछे जाने वाले प्रश्न (Frequently Asked Questions)
          </h2>
          <div style="margin-top: 16px;">
            ${DEFAULT_FAQS.map((f, idx) => `
              <details class="faq-item" ${idx === 0 ? 'open' : ''} style="margin-bottom: 12px; border: 1px solid var(--color-border); border-radius: 10px; background: var(--color-surface); overflow: hidden;">
                <summary style="padding: 16px 20px; font-weight: 700; color: var(--color-text); cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none; font-size: 1rem;">
                  <span>❓ ${f.q}</span>
                  <span style="font-size: 1.2rem; color: var(--color-primary);">▾</span>
                </summary>
                <div style="padding: 0 20px 16px 20px; color: var(--color-text); font-size: 0.95rem; line-height: 1.7; border-top: 1px solid var(--color-border); padding-top: 12px;">
                  ${f.a}
                </div>
              </details>
            `).join('')}
          </div>
        </div>

        <!-- Section 6: Useful Citizen & Exam Tools Grid -->
        <div style="margin-top: 32px; margin-bottom: 24px;">
          <h2 style="color: var(--color-primary); font-size: 1.45rem; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 8px;">
            🧮 परीक्षार्थियों के लिए उपयोगी मुफ्त टूल्स व कैलकुलेटर
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px;">
            <a href="${ROOT}tools/photo-resizer.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
              <div style="font-size: 1.6rem;">🖼️ Photo Resizer</div>
              <div style="font-weight: 700; color: var(--color-primary); margin-top: 4px;">Govt Exam Photo</div>
              <p style="font-size: 0.82rem; color: var(--color-text-muted); margin: 4px 0 0 0;">20-50 KB में तुरंत फोटो तैयार करें</p>
            </a>
            <a href="${ROOT}tools/signature-resizer.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
              <div style="font-size: 1.6rem;">✍️ Signature Resizer</div>
              <div style="font-weight: 700; color: var(--color-primary); margin-top: 4px;">Signature Crop Tool</div>
              <p style="font-size: 0.82rem; color: var(--color-text-muted); margin: 4px 0 0 0;">10-20 KB में हस्ताक्षर सेट करें</p>
            </a>
            <a href="${ROOT}tools/document-compressor.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
              <div style="font-size: 1.6rem;">📄 Doc Compressor</div>
              <div style="font-weight: 700; color: var(--color-primary); margin-top: 4px;">PDF / Marksheet</div>
              <p style="font-size: 0.82rem; color: var(--color-text-muted); margin: 4px 0 0 0;">100-300 KB में डॉक्यूमेंट कंप्रेस करें</p>
            </a>
            <a href="${ROOT}tools/typing-speed-test.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
              <div style="font-size: 1.6rem;">⌨️ Typing Test</div>
              <div style="font-weight: 700; color: var(--color-primary); margin-top: 4px;">35 WPM Speed Test</div>
              <p style="font-size: 0.82rem; color: var(--color-text-muted); margin: 4px 0 0 0;">सरकारी टाइपिंग परीक्षा का अभ्यास करें</p>
            </a>
          </div>
        </div>

        <!-- Section 7: Subscribe Widget -->
        <div style="margin: 24px 0;">
          <div id="subscribe-widget" data-service-id="${job.slug}"></div>
        </div>

        <!-- Section 8: VIP Telegram Banner -->
        <div style="background: linear-gradient(135deg, #0088cc 0%, #005f8f 100%); border-radius: 14px; padding: 24px 28px; color: #ffffff; margin: 24px 0; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
          <div>
            <h3 style="margin: 0 0 6px 0; font-size: 1.3rem; color: #ffffff;">✈️ SarkariSewa VIP Telegram चैनल से जुड़ें</h3>
            <p style="margin: 0; font-size: 0.95rem; opacity: 0.95;">सभी सरकारी भर्तियों के एडमिट कार्ड, आंसर-की, रिजल्ट और फ्री स्टडी मटेरियल की तुरंत अपडेट्स पाएं।</p>
          </div>
          <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" style="background: #ffffff; color: #0088cc; font-weight: 800; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">
            अभी जॉइन करें (निःशुल्क) ↗
          </a>
        </div>
      `;
    }

    if (breadcrumbEl) {
      breadcrumbEl.innerHTML = `
        <a href="${ROOT}index.html">Home</a>
        <span class="sep">/</span>
        <a href="${ROOT}jobs/index.html">Job Alerts</a>
        <span class="sep">/</span>
        <span class="current">${escapeHtml(title)}</span>
      `;
    }

    renderRelated(relatedJobs);
    renderSchema(job, title);
  }

  function renderSchema(job, title) {
    const existing = document.getElementById("job-post-schema");
    if (existing) existing.remove();

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "JobPosting",
          title: title,
          description: pick(job, "description") || title,
          datePosted: job.created_at ? job.created_at.slice(0, 10) : "2026-01-01",
          validThrough: job.last_date,
          employmentType: "FULL_TIME",
          hiringOrganization: {
            "@type": "Organization",
            name: job.department_en || "Government of India",
          },
          jobLocation: {
            "@type": "Place",
            address: job.location_en || "India",
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://sarkarisewaindia.com/index.html" },
            { "@type": "ListItem", position: 2, name: "Job Alerts", item: "https://sarkarisewaindia.com/jobs/index.html" },
            { "@type": "ListItem", position: 3, name: title, item: `https://sarkarisewaindia.com/jobs/${job.slug}.html` },
          ],
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "job-post-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  function renderRelated(relatedJobs) {
    if (!relatedEl) return;
    if (!relatedJobs || !relatedJobs.length) {
      relatedEl.hidden = true;
      return;
    }
    relatedEl.hidden = false;
    const lang = safeGetLang();
    relatedEl.innerHTML = `
      <p class="job-post-related__label" style="font-weight: 700; color: var(--color-primary); margin-bottom: 10px;">${safeT({ en: "Other similar job alerts", hi: "अन्य समान सरकारी नौकरी अलर्ट" })}</p>
      <div class="job-post-related__list" style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${relatedJobs
          .map((j) => {
            const title = lang === "hi" && j.title_hi ? j.title_hi : j.title_en;
            return `<a class="job-post-related__item" href="${ROOT}jobs/${j.slug}.html" style="background: var(--color-surface); border: 1px solid var(--color-border); padding: 8px 14px; border-radius: 8px; text-decoration: none; color: var(--color-text); font-size: 0.9rem;">${escapeHtml(title)} <span>· ${formatDate(j.last_date)}</span></a>`;
          })
          .join("")}
      </div>
    `;
  }

  function renderDraftBanner() {
    if (!heroEl || !heroEl.parentNode) return;
    const banner = document.createElement("div");
    banner.className = "job-post-draft-banner";
    banner.textContent = safeT({
      en: "⚠ Draft preview — this job alert is not published yet. Only you (logged in) can see this page.",
      hi: "⚠ ड्राफ्ट प्रीव्यू — यह नौकरी अलर्ट अभी प्रकाशित नहीं हुआ है। केवल आप (लॉग-इन) ही यह पेज देख सकते हैं।",
    });
    heroEl.parentNode.insertBefore(banner, heroEl);
  }

  function renderMissing() {
    if (heroEl) {
      heroEl.hidden = false;
      heroEl.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 16px; margin: 30px 0;">
          <h1 style="color: var(--color-primary); margin-bottom: 12px;">${safeT({ en: "Job alert not found", hi: "नौकरी अलर्ट नहीं मिला" })}</h1>
          <p style="color: var(--color-text-muted); font-size: 1.05rem; margin-bottom: 24px;">${safeT({
            en: "This job alert doesn't exist, has been archived, or the link may be broken.",
            hi: "यह नौकरी अलर्ट मौजूद नहीं है, हटा दिया गया है, या लिंक टूटा हो सकता है।",
          })}</p>
          <a href="${ROOT}jobs/index.html" style="background: #2563eb; color: #ffffff; font-weight: 700; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
            📋 सभी सक्रिय सरकारी नौकरियां देखें ↗
          </a>
        </div>
      `;
    }
    if (bodyEl) {
      bodyEl.hidden = false;
      bodyEl.innerHTML = "";
    }
    if (relatedEl) relatedEl.hidden = true;
    if (breadcrumbEl) breadcrumbEl.innerHTML = `<a href="${ROOT}index.html">Home</a><span class="sep">/</span><a href="${ROOT}jobs/index.html">Job Alerts</a>`;
  }
})();

