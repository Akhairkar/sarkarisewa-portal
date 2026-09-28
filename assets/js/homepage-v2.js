/* Homepage V2: data-driven featured navigation. Never replaces the master service data. */
(function(){
  const ROOT = window.SS_ROOT || "";
  const TELEGRAM = "https://t.me/sarkarisewaindia";

  const featured = [
    ["🆔","Aadhaar Card","UIDAI Services","service/aadhaar-card.html"],
    ["💳","PAN Card","Income Tax Department","service/pan-card.html"],
    ["🗳️","Voter ID","Election Commission","service/voter-id-card.html"],
    ["🚗","Driving Licence","Transport Department","service/driving-licence.html"],
    ["🌐","Passport","MEA Services","service/passport.html"],
    ["☁️","DigiLocker","Digital Documents","service/digilocker.html"],
    ["❤️","Ayushman Bharat","Health Insurance","service/ayushman-bharat.html"],
    ["⚙️","EPFO","Provident Fund","service/epfo.html"],
    ["🧮","Income Tax","e-Filing Portal","service/income-tax-return-filing.html"],
    ["🍚","Ration Card","Food & Civil Supplies","service/ration-card.html"],
    ["📜","Birth Certificate","Municipal Services","service/birth-certificate.html"],
    ["📍","CSC Locator","Common Service Centres","tools/csc-locator.html"]
  ];

  function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",""":"&quot;","'":"&#39;"}[c]));}
  function href(p){return ROOT+p;}

  function addSocial(){
    const trust=document.querySelector(".trust-stats");
    if(!trust || document.querySelector(".ss-home-social")) return;
    const wrap=document.createElement("div");
    wrap.className="ss-home-social";
    wrap.innerHTML=
      '<div class="ss-social-card ss-social-telegram">'+
      '<div><strong>📢 SarkariSewa India Telegram</strong><span>Jobs, schemes, government updates & useful alerts</span></div>'+
      '<a class="ss-social-btn" href="'+TELEGRAM+'" target="_blank" rel="noopener noreferrer">✈️ Join Channel</a></div>'+
      '<div class="ss-social-card ss-social-whatsapp">'+
      '<div><strong>💬 Share on WhatsApp</strong><span>Share useful government guides with family & friends</span></div>'+
      '<a class="ss-social-btn" href="https://wa.me/?text='+encodeURIComponent("SarkariSewa India – Government services, schemes, jobs & free tools: https://sarkarisewaindia.com/")+'" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></div>';
    trust.insertAdjacentElement("afterend",wrap);
  }

  function addFeatured(){
    const firstSection=[...document.querySelectorAll("main > .section")].find(s=>s.querySelector("#category-grid"));
    if(!firstSection || document.querySelector(".ss-featured")) return;
    const sec=document.createElement("section");
    sec.className="ss-featured";
    sec.setAttribute("aria-labelledby","ss-featured-title");
    sec.innerHTML='<div class="ss-featured-head"><h2 id="ss-featured-title">⚡ Important Services</h2><a href="'+href("services/index.html")+'">View All Services →</a></div><div class="ss-featured-grid">'+
      featured.map(x=>'<a class="ss-feature-card" href="'+href(x[3])+'"><span class="ss-feature-icon">'+x[0]+'</span><span><strong>'+esc(x[1])+'</strong><small>'+esc(x[2])+'</small></span><b>›</b></a>').join("")+
      '</div>';
    firstSection.insertAdjacentElement("beforebegin",sec);
  }

  async function addLatestSplit(){
    if(document.querySelector(".ss-split") || typeof fetchAllServices!=="function") return;
    try{
      const services=await fetchAllServices();
      const jobs=services.filter(s=>s.category==="jobs-education").slice(0,4);
      const schemes=services.filter(s=>s.category==="government-schemes").slice(0,4);
      const section=document.createElement("section");
      section.className="ss-split";
      const make=(title,icon,list,allHref)=>'<div class="ss-split-card"><div class="ss-split-head"><h2>'+icon+' '+title+'</h2><a href="'+href(allHref)+'">View All →</a></div><div class="ss-list">'+list.map((s,i)=>'<a class="ss-list-item" href="'+href((typeof ssServiceHref==="function"?ssServiceHref(ROOT,s):"service/"+s.slug+".html"))+'"><span class="ss-list-icon">'+(i%2?"📄":"🆕")+'</span><span><strong>'+esc((s.name&&s.name.en)||s.slug)+'</strong><small>'+esc((s.shortDescription&&s.shortDescription.en)||"Government service guide")+'</small></span><b>›</b></a>').join("")+'</div></div>';
      section.innerHTML=make("Latest Jobs","💼",jobs,"jobs/index.html")+make("Latest Schemes","📜",schemes,"category/government-schemes.html");
      const feat=document.querySelector(".ss-featured");
      if(feat) feat.insertAdjacentElement("afterend",section);
    }catch(e){console.warn("Homepage V2 split sections unavailable",e);}
  }

  function init(){
    document.body.classList.add("homepage-v2");
    addSocial();
    addFeatured();
    addLatestSplit();
    const all=document.querySelector('.hero-cta a[href="sitemap.html"]');
    if(all) all.href=href("services/index.html");
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init); else init();
})();
