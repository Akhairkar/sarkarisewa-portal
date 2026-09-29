
(function () {
  const ROOT = window.SS_ROOT || "";
  const params = new URLSearchParams(window.location.search);

  const inputEl = document.getElementById("search-page-input");
  const filtersEl = document.getElementById("search-page-filters");
  const statusEl = document.getElementById("search-page-status");
  const resultsEl = document.getElementById("search-page-results");
  const formEl = document.getElementById("search-page-form");

  let ALL_SERVICES = [];
  let ALL_CATEGORIES = [];
  let activeCategory = "";

  function normalizeServices(data) {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.services)) return data.services;
    return [];
  }
  function normalizeCategories(data) {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.categories)) return data.categories;
    return [];
  }

  Promise.all([
    fetchAllServices(),
    fetch(ROOT + "data/categories.json").then((r) => r.json()),
  ])
    .then(([services, categoriesRaw]) => {
      ALL_SERVICES = services;
      ALL_CATEGORIES = normalizeCategories(categoriesRaw);

      const initialQ = params.get("q") || "";
      if (inputEl) inputEl.value = initialQ;

      renderFilters();
      render();
      onLangChange(() => {
        renderFilters();
        render();
      });

      if (inputEl) {
        inputEl.addEventListener("input", () => {
          const newQ = inputEl.value.trim();
          const url = new URL(window.location);
          if (newQ) url.searchParams.set("q", newQ);
          else url.searchParams.delete("q");
          window.history.replaceState({}, "", url);
          render();
        });
      }

      if (formEl) {
        formEl.addEventListener("submit", (e) => {
          e.preventDefault();
          render();
        });
      }
    });

  function renderFilters() {
    if (!filtersEl) return;
    const chips = ['<button type="button" class="chip' + (activeCategory === "" ? " chip--active" : "") + '" data-cat="">' + (getLang() === "hi" ? "सभी" : "All") + '</button>']
      .concat(
        ALL_CATEGORIES.map(
          (c) =>
            '<button type="button" class="chip' + (activeCategory === c.slug ? " chip--active" : "") + '" data-cat="' + c.slug + '">' + t(c.name) + '</button>'
        )
      )
      .join("");
    filtersEl.innerHTML = chips;
    filtersEl.querySelectorAll(".chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.getAttribute("data-cat") || "";
        renderFilters();
        render();
      });
    });
  }

  function getPopularSearchesHTML() {
    return `
      <div class="search-initial-view">
        <h3 class="si-title" style="margin-top: 10px; color: var(--color-text);">${t({en: "Popular Searches", hi: "लोकप्रिय खोजें"})}</h3>
        <div class="si-chips" style="display:flex; flex-wrap:wrap; gap:10px; margin-top:12px;">
          <a href="${ROOT}service/pm-kisan.html" class="btn btn--outline" style="padding:6px 14px; font-size:0.9rem;">PM Kisan</a>
          <a href="${ROOT}service/ayushman-bharat-card.html" class="btn btn--outline" style="padding:6px 14px; font-size:0.9rem;">Ayushman Card</a>
          <a href="${ROOT}service/ration-card.html" class="btn btn--outline" style="padding:6px 14px; font-size:0.9rem;">Ration Card</a>
          <a href="${ROOT}service/birth-certificate.html" class="btn btn--outline" style="padding:6px 14px; font-size:0.9rem;">Birth Certificate</a>
          <a href="${ROOT}service/income-certificate.html" class="btn btn--outline" style="padding:6px 14px; font-size:0.9rem;">Income Certificate</a>
          <a href="${ROOT}states/index.html" class="btn btn--outline" style="padding:6px 14px; font-size:0.9rem;">State Services</a>
          <a href="${ROOT}service/pan-card.html" class="btn btn--outline" style="padding:6px 14px; font-size:0.9rem;">PAN Card</a>
          <a href="${ROOT}jobs/index.html" class="btn btn--outline" style="padding:6px 14px; font-size:0.9rem;">Govt Jobs</a>
        </div>
        
        <h3 class="si-title" style="margin-top: 32px; margin-bottom: 15px; color: var(--color-text);">${t({en: "Trending Government Services", hi: "ट्रेंडिंग सरकारी सेवाएं"})}</h3>
        <div class="service-grid">
          <a class="service-card" href="${ROOT}service/pm-kisan.html">
            <div class="service-card__name">PM Kisan Samman Nidhi</div>
            <div class="service-card__desc">${t({en: "Check eligibility, documents, application and status for PM Kisan Rs. 6000 scheme.", hi: "पीएम किसान योजना की पात्रता, दस्तावेज और आवेदन की पूरी जानकारी।"})}</div>
            <div class="service-card__tags" style="display:flex; gap:6px; margin: 10px 0; flex-wrap:wrap;">
              <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Eligibility", hi:"पात्रता"})}</span>
              <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Documents", hi:"दस्तावेज़"})}</span>
              <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Apply", hi:"आवेदन"})}</span>
              <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Status", hi:"स्थिति"})}</span>
            </div>
            <div class="service-card__arrow">${t({ en: "View Complete Guide &rarr;", hi: "पूरी गाइड देखें &rarr;" })}</div>
          </a>
          <a class="service-card" href="${ROOT}service/ayushman-bharat-card.html">
            <div class="service-card__name">Ayushman Bharat Card (PMJAY)</div>
            <div class="service-card__desc">${t({en: "Get free medical coverage up to 5 Lakhs. Apply and download online.", hi: "5 लाख तक का मुफ्त इलाज। आयुष्मान कार्ड के लिए ऑनलाइन आवेदन करें।"})}</div>
            <div class="service-card__tags" style="display:flex; gap:6px; margin: 10px 0; flex-wrap:wrap;">
              <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Eligibility", hi:"पात्रता"})}</span>
              <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Documents", hi:"दस्तावेज़"})}</span>
              <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Apply", hi:"आवेदन"})}</span>
            </div>
            <div class="service-card__arrow">${t({ en: "View Complete Guide &rarr;", hi: "पूरी गाइड देखें &rarr;" })}</div>
          </a>
          <a class="service-card" href="${ROOT}tools/eligibility-checker.html">
            <div class="service-card__name">${t({en: "Govt Scheme Eligibility Checker", hi: "सरकारी योजना पात्रता इंजन"})}</div>
            <div class="service-card__desc">${t({en: "Answer 4 simple questions to find 35+ govt schemes you are eligible for.", hi: "4 सवालों के जवाब देकर जानें कि आप किन-किन सरकारी योजनाओं के लिए पात्र हैं।"})}</div>
            <div class="service-card__tags" style="display:flex; gap:6px; margin: 10px 0; flex-wrap:wrap;">
              <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Free Tool", hi:"फ्री टूल"})}</span>
            </div>
            <div class="service-card__arrow">${t({ en: "Use Tool &rarr;", hi: "टूल का उपयोग करें &rarr;" })}</div>
          </a>
        </div>
      </div>
    `;
  }

  // Official fallback resources for popular homepage topics that may not yet
  // have a dedicated SarkariSewa India service record. This prevents a blank
  // search result and sends users to the relevant government portal.
  const OFFICIAL_FALLBACKS = [
    { keys:["soil health card","soilhealthcard"], name:{en:"Soil Health Card",hi:"मृदा स्वास्थ्य कार्ड"}, desc:{en:"Check the official Soil Health Card portal for soil testing, card generation and farmer guidance.",hi:"मृदा जांच, Soil Health Card और किसान मार्गदर्शन के लिए आधिकारिक पोर्टल देखें।"}, url:"https://soilhealth.dac.gov.in/" },
    { keys:["pm kisan","kisan samman nidhi"], name:{en:"PM-KISAN Samman Nidhi",hi:"पीएम-किसान सम्मान निधि"}, desc:{en:"Official PM-KISAN portal for registration, beneficiary status and scheme information.",hi:"पंजीकरण, लाभार्थी स्थिति और योजना की जानकारी के लिए आधिकारिक PM-KISAN पोर्टल।"}, url:"https://pmkisan.gov.in/" },
    { keys:["kisan credit card","kcc"], name:{en:"Kisan Credit Card",hi:"किसान क्रेडिट कार्ड"}, desc:{en:"Government scheme information and eligibility through the National Government scheme portal.",hi:"सरकारी योजना पोर्टल पर किसान क्रेडिट कार्ड की पात्रता और जानकारी देखें।"}, url:"https://www.myscheme.gov.in/schemes/kcc" },
    { keys:["pm fasal bima","fasal bima"], name:{en:"PM Fasal Bima Yojana",hi:"प्रधानमंत्री फसल बीमा योजना"}, desc:{en:"Official crop insurance portal for farmer applications, premium and policy status.",hi:"फसल बीमा आवेदन, प्रीमियम और पॉलिसी स्थिति के लिए आधिकारिक पोर्टल।"}, url:"https://pmfby.gov.in/" },
    { keys:["pm kusum subsidy","pm kusum"], name:{en:"PM-KUSUM",hi:"पीएम-कुसुम"}, desc:{en:"Official MNRE PM-KUSUM portal for solar pumps, components and scheme information.",hi:"सोलर पंप और PM-KUSUM योजना की आधिकारिक जानकारी के लिए पोर्टल।"}, url:"https://pmkusum.mnre.gov.in/" },
    { keys:["solar subsidy","home solar subsidy"], name:{en:"PM Surya Ghar / Rooftop Solar",hi:"पीएम सूर्य घर / रूफटॉप सोलर"}, desc:{en:"Official government rooftop-solar portal for PM Surya Ghar information and applications.",hi:"PM Surya Ghar और रूफटॉप सोलर की आधिकारिक जानकारी व आवेदन पोर्टल।"}, url:"https://pmsuryaghar.gov.in/" },
    { keys:["pm ujjwala","ujjwala"], name:{en:"Pradhan Mantri Ujjwala Yojana",hi:"प्रधानमंत्री उज्ज्वला योजना"}, desc:{en:"Official PMUY portal for eligibility, documents and new LPG connection information.",hi:"पात्रता, दस्तावेज और नए LPG कनेक्शन की आधिकारिक जानकारी।"}, url:"https://www.pmuy.gov.in/" },
    { keys:["pm awas","home loan","housing subsidy"], name:{en:"Pradhan Mantri Awas Yojana",hi:"प्रधानमंत्री आवास योजना"}, desc:{en:"Official government housing-scheme information and relevant application portals.",hi:"आवास योजना की सरकारी जानकारी और संबंधित आवेदन पोर्टल।"}, url:"https://pmayuclap.gov.in/" },
    { keys:["pm jan dhan","jan dhan"], name:{en:"Pradhan Mantri Jan-Dhan Yojana",hi:"प्रधानमंत्री जन-धन योजना"}, desc:{en:"Official government information about PMJDY financial inclusion services.",hi:"PMJDY और वित्तीय समावेशन सेवाओं की सरकारी जानकारी।"}, url:"https://pmjdy.gov.in/" },
    { keys:["mudra loan","business loan","education loan","personal loan","msme loan"], name:{en:"Government-backed Loan Options",hi:"सरकारी समर्थित ऋण विकल्प"}, desc:{en:"For eligible government-supported credit schemes, check the official JanSamarth portal. Commercial loans do not have one universal government application portal.",hi:"सरकार समर्थित ऋण योजनाओं के लिए आधिकारिक JanSamarth पोर्टल देखें। सामान्य commercial loan के लिए कोई एक सार्वभौमिक सरकारी आवेदन पोर्टल नहीं है।"}, url:"https://www.jansamarth.in/" },
    { keys:["farm machinery subsidy"], name:{en:"Farm Mechanization / Machinery",hi:"कृषि मशीनरी / यंत्रीकरण"}, desc:{en:"Official agriculture mechanization portal for machinery and related government support information.",hi:"कृषि मशीनरी और सरकारी सहायता की आधिकारिक जानकारी के लिए पोर्टल।"}, url:"https://agrimachinery.nic.in/" },
    { keys:["food processing subsidy"], name:{en:"Food Processing Government Support",hi:"फूड प्रोसेसिंग सरकारी सहायता"}, desc:{en:"Official Ministry of Food Processing Industries portal for schemes and assistance information.",hi:"फूड प्रोसेसिंग मंत्रालय की योजनाओं और सहायता की आधिकारिक जानकारी।"}, url:"https://mofpi.gov.in/" },
    { keys:["msme subsidy"], name:{en:"MSME Schemes & Support",hi:"MSME योजनाएं और सहायता"}, desc:{en:"Official MSME Ministry portal for government schemes, credit support and assistance.",hi:"सरकारी MSME योजनाओं, क्रेडिट सहायता और सपोर्ट की आधिकारिक जानकारी।"}, url:"https://msme.gov.in/" },
    { keys:["kisan pension"], name:{en:"PM-Kisan Maandhan Yojana",hi:"पीएम-किसान मानधन योजना"}, desc:{en:"Official pension scheme information for eligible small and marginal farmers.",hi:"पात्र छोटे और सीमांत किसानों के लिए पेंशन योजना की आधिकारिक जानकारी।"}, url:"https://maandhan.in/" },
    { keys:["kisan registration"], name:{en:"Farmer Registration / State Agriculture Services",hi:"किसान पंजीकरण / राज्य कृषि सेवाएं"}, desc:{en:"Farmer registration is generally handled through the relevant State Agriculture Department; use the official state agriculture portal.",hi:"किसान पंजीकरण आमतौर पर संबंधित राज्य कृषि विभाग के पोर्टल पर होता है।"}, url:"https://agricoop.nic.in/" },
    { keys:["ayushman bharat","pm ayushman"], name:{en:"Ayushman Bharat / PM-JAY",hi:"आयुष्मान भारत / PM-JAY"}, desc:{en:"Official National Health Authority information and beneficiary services for PM-JAY.",hi:"PM-JAY की आधिकारिक जानकारी और लाभार्थी सेवाएं।"}, url:"https://pmjay.gov.in/" }
  ];

  function getOfficialFallback(query) {
    const n = query.toLowerCase().replace(/[^a-z0-9\u0900-\u097f]/g, "").replace(/yojana|scheme|subsidy|loan/g, "");
    return OFFICIAL_FALLBACKS.find(item => item.keys.some(k => n.includes(k.replace(/[^a-z0-9\u0900-\u097f]/g, "")) || k.replace(/[^a-z0-9\u0900-\u097f]/g, "").includes(n)));
  }

  function getOfficialFallbackHTML(item) {
    if (!item) return "";
    return '<div class="service-card" style="border:1px solid var(--color-border);">' +
      '<div class="service-card__name">' + t(item.name) + ' <span style="font-size:.72rem; padding:3px 7px; border-radius:999px; background:var(--color-surface-alt); color:var(--color-primary);">Official Portal</span></div>' +
      '<div class="service-card__desc">' + t(item.desc) + '</div>' +
      '<div class="service-card__arrow"><a href="' + item.url + '" target="_blank" rel="noopener noreferrer">' + t({en:"Open Official Website &rarr;",hi:"आधिकारिक वेबसाइट खोलें &rarr;"}) + '</a></div>' +
      '</div>';
  }

  // Dedicated Job Notifications mode for /search.html?q=job. This is isolated from normal service search.
  const JOB_NOTIFICATIONS = [
    {id:"upsc-ad-11-2026",status:"live",category:"UPSC",title:{en:"UPSC Advertisement No. 11/2026 — 212 Various Posts",hi:"UPSC विज्ञापन संख्या 11/2026 — 212 विभिन्न पद"},org:"Union Public Service Commission (UPSC)",vacancies:"212",qualification:{en:"Post-wise qualification & experience",hi:"पद के अनुसार योग्यता व अनुभव"},start:"2026-09-12",last:"2026-10-02",url:"https://www.upsc.gov.in/whats-new/11%20-%202026",details:"https://sarkarisewaindia.com/jobs/index.html"},
    {id:"upsc-cse-2027",status:"upcoming",category:"UPSC",title:{en:"UPSC Civil Services Examination 2027",hi:"UPSC सिविल सेवा परीक्षा 2027"},org:"Union Public Service Commission (UPSC)",vacancies:"Tentative / notification to be issued",qualification:{en:"Graduation in any discipline",hi:"किसी भी विषय में स्नातक"},start:"",last:"",url:"https://www.upsc.gov.in/",details:"https://sarkarisewaindia.com/jobs/index.html"},
    {id:"ssc-cgl-2026",status:"expired",category:"SSC",title:{en:"SSC Combined Graduate Level Examination 2026",hi:"SSC कंबाइंड ग्रेजुएट लेवल परीक्षा 2026"},org:"Staff Selection Commission (SSC)",vacancies:"15,000+ (tentative)",qualification:{en:"Graduation degree",hi:"स्नातक डिग्री"},start:"2026-05-21",last:"2026-06-22",url:"https://ssc.gov.in/",details:"https://sarkarisewaindia.com/jobs/index.html"},
    {id:"india-post-gds-2026",status:"expired",category:"Postal",title:{en:"India Post GDS Recruitment 2026",hi:"इंडिया पोस्ट GDS भर्ती 2026"},org:"Department of Posts",vacancies:"44,228",qualification:{en:"10th pass",hi:"10वीं पास"},start:"2026-07-01",last:"2026-08-20",url:"https://indiapostgdsonline.gov.in/",details:"https://sarkarisewaindia.com/jobs/india-post-gds-recruitment-2026.html"},
    {id:"navy-agniveer-2026",status:"expired",category:"Defence",title:{en:"Indian Navy Agniveer SSR / MR Recruitment 2026",hi:"भारतीय नौसेना अग्निवीर SSR / MR भर्ती 2026"},org:"Indian Navy",vacancies:"2,500+",qualification:{en:"10+2 for SSR; 10th for MR",hi:"SSR के लिए 12वीं; MR के लिए 10वीं"},start:"2026-03-14",last:"2026-04-06",url:"https://www.joinindiannavy.gov.in/",details:"https://sarkarisewaindia.com/jobs/indian-navy-agniveer-ssr-recruitment-2026.html"}
  ];

  function isJobQuery(q){
    return /^(job|jobs|job notification|job notifications|vacancy|vacancies|recruitment|sarkari job|sarkari jobs|सरकारी नौकरी|नौकरी|भर्ती)$/i.test(q.trim());
  }

  function jobDate(value){
    if(!value) return "—";
    return new Date(value+"T00:00:00").toLocaleDateString(getLang()==="hi"?"hi-IN":"en-IN",{day:"2-digit",month:"short",year:"numeric"});
  }

  function renderJobMode(){
    const q=(inputEl?.value||"").trim();
    if(filtersEl) filtersEl.innerHTML="";
    if(statusEl) statusEl.innerHTML="";
    if(!resultsEl) return;

    const groups=[
      {key:"live",icon:"🟢",en:"Live Jobs",hi:"लाइव नौकरियां"},
      {key:"upcoming",icon:"🔵",en:"Upcoming Jobs",hi:"आने वाली नौकरियां"},
      {key:"expired",icon:"⚫",en:"Expired Jobs",hi:"समाप्त नौकरियां"}
    ];
    const html=groups.map(g=>{
      const jobs=JOB_NOTIFICATIONS.filter(j=>j.status===g.key);
      return '<section class="ss-job-section ss-job-section--'+g.key+'">'+
        '<div class="ss-job-section-head"><div><span class="ss-job-kicker">'+g.icon+' '+t({en:g.en,hi:g.hi})+'</span><h2>'+t({en:g.en,hi:g.hi})+'</h2></div><span class="ss-job-count">'+jobs.length+'</span></div>'+
        '<div class="ss-job-grid">'+jobs.map(j=>'<article class="ss-job-card ss-job-card--'+j.status+'">'+
          '<div class="ss-job-card-top"><span class="ss-job-org">'+j.org+'</span><span class="ss-job-status">'+t({en:g.en,hi:g.hi})+'</span></div>'+
          '<h3>'+t(j.title)+'</h3>'+
          '<div class="ss-job-meta"><span>👥 <b>'+t({en:"Posts",hi:"पद"})+'</b> '+j.vacancies+'</span><span>🎓 <b>'+t({en:"Eligibility",hi:"योग्यता"})+'</b> '+t(j.qualification)+'</span></div>'+
          '<div class="ss-job-dates"><span><small>'+t({en:"Start",hi:"शुरू"})+'</small>'+jobDate(j.start)+'</span><span><small>'+t({en:"Last Date",hi:"अंतिम तिथि"})+'</small>'+jobDate(j.last)+'</span></div>'+
          '<div class="ss-job-actions"><a class="ss-job-details" href="'+j.details+'">'+t({en:"View Details",hi:"विवरण देखें"})+'</a><a class="ss-job-apply" href="'+j.url+'" target="_blank" rel="noopener noreferrer">'+t({en:"Official Site ↗",hi:"आधिकारिक साइट ↗"})+'</a></div>'+
        '</article>').join('')+'</div></section>';
    }).join("");
    resultsEl.classList.remove("service-grid");
    resultsEl.innerHTML='<div class="ss-job-hub-intro"><span>🔔 '+t({en:"Government Job Notifications",hi:"सरकारी नौकरी नोटिफिकेशन"})+'</span><h1>'+t({en:"Latest Government Jobs",hi:"लेटेस्ट सरकारी नौकरियां"})+'</h1><p>'+t({en:"Verified recruitment updates grouped into Live, Upcoming and Expired so you can quickly find the right notification.",hi:"सत्यापित भर्ती अपडेट को Live, Upcoming और Expired में अलग किया गया है ताकि सही नोटिफिकेशन जल्दी मिले।"})+'</p></div>'+html;
  }

  function render() {
    const q = ((inputEl && inputEl.value) || params.get("q") || "").trim().toLowerCase();

    if (isJobQuery(q)) { renderJobMode(); return; }

    let filtered = ALL_SERVICES;
    if (activeCategory) {
      filtered = filtered.filter((s) => s.category === activeCategory);
    }
    
    // Typo-tolerant basic matching
    const normalize = (str) => str.replace(/[^a-z0-9ऀ-ॿ]/gi, '');
    const qNorm = normalize(q);

    if (q) {
      filtered = filtered.filter((s) => {
        const name = t(s.name).toLowerCase();
        const nameOther = ((s.name && (s.name.en + " " + s.name.hi)) || "").toLowerCase();
        const desc = t(s.shortDescription || "").toLowerCase();
        
        if (name.includes(q) || nameOther.includes(q) || desc.includes(q)) return true;
        if (qNorm.length > 3 && (normalize(name).includes(qNorm) || normalize(nameOther).includes(qNorm))) return true;
        
        return false;
      });
      
      // Sort by relevance
      filtered.sort((a, b) => {
        const aName = t(a.name).toLowerCase();
        const bName = t(b.name).toLowerCase();
        if (aName.startsWith(q) && !bName.startsWith(q)) return -1;
        if (!aName.startsWith(q) && bName.startsWith(q)) return 1;
        return 0;
      });
    }

    if (!q && !activeCategory) {
      statusEl.innerHTML = '';
      resultsEl.innerHTML = getPopularSearchesHTML();
      resultsEl.classList.remove("service-grid"); // we handle grid inside
      return;
    } else {
      resultsEl.classList.add("service-grid");
    }

    statusEl.innerHTML = `<strong>${filtered.length}</strong> ${t({ en: "results found", hi: "परिणाम मिले" })}`;

    if (!filtered.length) {
      const official = getOfficialFallback(q);
      resultsEl.classList.remove("service-grid");
      resultsEl.innerHTML = `
        <div class="no-results-box" style="background: var(--color-surface); border:1px solid var(--color-border); border-radius:8px; padding:24px; text-align:center; margin-bottom:24px; box-shadow: var(--shadow-card);">
          <h2 style="margin-top:0; color: var(--color-text);">${official ? t({en:"No matching guide is published on SarkariSewa India yet",hi:"SarkariSewa India पर इसकी गाइड अभी प्रकाशित नहीं है"}) : t({en: "No results found for", hi: "इसके लिए कोई परिणाम नहीं मिला:"})} ${official ? "" : `<span style="color: var(--color-accent-saffron);">"${q}"</span>`}</h2>
          <p style="color: var(--color-text-muted);">${official ? t({en:"We found the relevant official government portal below.",hi:"नीचे संबंधित आधिकारिक सरकारी पोर्टल दिया गया है।"}) : t({en: "Don't worry, try one of these instead:", hi: "चिंता न करें, इसके बजाय इनमें से कोई एक आज़माएं:"})}</p>
        </div>
        ${official ? getOfficialFallbackHTML(official) : ""}
        ${official ? getPopularSearchesHTML() : `<div style="display:flex; justify-content:center; gap:15px; margin-top:20px; flex-wrap:wrap;"><a href="${ROOT}index.html" class="btn btn--primary">${t({en: "Browse All Schemes", hi: "सभी योजनाएं देखें"})}</a><a href="${ROOT}tools/eligibility-checker.html" class="btn btn--outline">${t({en: "Use Eligibility Checker", hi: "पात्रता इंजन का उपयोग करें"})}</a></div>${getPopularSearchesHTML()}`}
      `;
      return;
    }

    resultsEl.innerHTML = filtered
      .map(
        (service) => `
      <a class="service-card" href="${ssServiceHref(ROOT, service)}">
        <div class="service-card__name">${t(service.name)}</div>
        <div class="service-card__desc">${t(service.shortDescription || "")}</div>
        <div class="service-card__tags" style="display:flex; gap:6px; margin: 10px 0; flex-wrap:wrap;">
          <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Eligibility", hi:"पात्रता"})}</span>
          <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Documents", hi:"दस्तावेज़"})}</span>
          <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Apply", hi:"आवेदन"})}</span>
          <span class="sc-tag" style="background: var(--color-surface-alt); color: var(--color-primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${t({en:"Status", hi:"स्थिति"})}</span>
        </div>
        <div class="service-card__arrow">${t({ en: "View Complete Guide &rarr;", hi: "पूरी गाइड देखें &rarr;" })}</div>
      </a>
    `
      )
      .join("");
  }
})();
