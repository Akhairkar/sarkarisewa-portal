/* Homepage V2 showcase renderer */(function(){"use strict";const ROOT=window.SS_ROOT||"";const FEATURED=[["🪪","Aadhaar","UIDAI services & guidance","aadhaar"],["💳","PAN Card","PAN services & useful links","pan-card"],["🗳️","Voter ID","Election & voter services","voter-id"],["🍚","Ration Card","Food & ration services","ration-card"],["🏥","Ayushman Bharat","Health scheme information","ayushman-bharat"],["📄","DigiLocker","Digital documents & access","digilocker"],["🪪","Driving Licence","DL services & guidance","driving-licence"],["💼","Government Jobs","Job information & alerts","government-jobs"]];function esc(v){return String(v??"").replace(/[&<>'"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[m]))}function txt(v){return typeof v==="object"?(v.en||v.hi||""):String(v||"")}function href(s){return typeof ssServiceHref==="function"?ssServiceHref(ROOT,s):ROOT+"service/"+encodeURIComponent(s.slug)+".html"}function renderHomeSectors(data){
  const host=document.getElementById("homepage-sector-services"); if(!host)return;
  const categories=[
    {slug:"identity-documents",icon:"🆔",en:"Identity Documents",hi:"पहचान दस्तावेज़"},
    {slug:"government-schemes",icon:"📜",en:"Government Schemes",hi:"सरकारी योजनाएं"},
    {slug:"finance-tax",icon:"💰",en:"Finance & Tax",hi:"वित्त और कर"},
    {slug:"jobs-education",icon:"🎓",en:"Jobs & Education",hi:"नौकरी और शिक्षा"},
    {slug:"utilities",icon:"💡",en:"Utilities",hi:"उपयोगिताएं"},
    {slug:"health",icon:"🏥",en:"Health",hi:"स्वास्थ्य"},
    {slug:"mpbcdc-schemes",icon:"💸",en:"MPBCDC Schemes",hi:"MPBCDC योजनाएं"}
  ];
  const lang=(window.SITE&&SITE.lang)||"hi";
  const valid=data.filter(s=>{const n=txt(s.name).toLowerCase();return !n.includes("aadhaar")&&!n.includes("pan card")&&!n.includes("pancard")});
  host.innerHTML=categories.map(c=>{
    const items=valid.filter(s=>s.category===c.slug).slice(0,8); if(!items.length)return "";
    return '<section class="ss-home-sector"><a class="ss-home-sector-panel" href="'+ROOT+'category/'+c.slug+'.html"><span class="ss-home-sector-icon">'+c.icon+'</span><span class="ss-home-sector-copy"><strong>'+esc(lang==="en"?c.en:c.hi)+'</strong><small>'+items.length+' services</small></span><b>→</b></a><div class="ss-home-sector-right"><div class="ss-home-sector-head"><span>Popular services</span><a href="'+ROOT+'category/'+c.slug+'.html">View all →</a></div><div class="ss-home-sector-grid">'+items.map(s=>'<a class="ss-home-service" href="'+href(s)+'"><strong>'+esc(txt(s.name))+'</strong><small>'+esc(txt(s.shortDescription)||"Open service guide")+'</small></a>').join("")+'</div></div></section>';
  }).join("");
}
async function init(){if(!document.body.classList.contains("homepage-v2"))return;let data=[];try{data=await fetchAllServices()}catch(e){}renderHomeSectors(data);const stat=document.getElementById("trust-stat-services");if(stat)stat.textContent=data.length+"+";if(window.innerWidth<=640&&!document.querySelector(".ss-mobile-bottom-nav")){const n=document.createElement("nav");n.className="ss-mobile-bottom-nav";n.setAttribute("aria-label","Quick navigation");n.innerHTML='<a href="'+ROOT+'index.html">⌂<span>Home</span></a><a href="'+ROOT+'services/index.html">▦<span>Services</span></a><a href="'+ROOT+'jobs/index.html">💼<span>Jobs</span></a><a href="'+ROOT+'category/government-schemes.html">📜<span>Schemes</span></a><a href="'+ROOT+'tools/index.html">🛠️<span>Tools</span></a>';document.body.appendChild(n)}}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init()})();

/* Homepage V2 language layer — keeps the showcase UI bilingual even where
   the newer homepage markup is intentionally static rather than data-i18n. */
(function(){
  "use strict";
  const copy={
    en:{
      nav:["Home","Services","Jobs","Schemes","Tools","Blog"],
      heroEyebrow:"Independent Indian Services Portal",
      heroTitle:"Government Services, Jobs & Schemes — <em>Find It Fast</em>",
      heroSub:"Government services, schemes, job updates and useful tools — all in one place, in simple language.",
      searchPlaceholder:"Search Aadhaar, PAN, Ration Card, Jobs, Schemes...",searchButton:"Search",
      panelTitle:"Find what you need",panelSub:"Search → Understand → Open official portal",allServices:"All Services",freeTools:"Free Tools",
      featuredKicker:"POPULAR SERVICES",featuredTitle:"Services by Category",featuredSub:"Essential services from every category, with direct working links.",featuredAll:"View All Services →",
      browseKicker:"BROWSE",browseTitle:"Explore by Category",browseAll:"All Services →",
      toolsKicker:"FREE UTILITIES",toolsTitle:"Popular Tools",toolsSub:"Useful calculators and citizen utilities for everyday tasks.",toolsAll:"View All Tools →",
      latestKicker:"LATEST",latestTitle:"Latest Services & Opportunities",latestSub:"Recently added or updated information from across the portal.",
      stateKicker:"STATE SERVICES",stateTitle:"Find Services by State",stateSub:"Browse state-specific government services, certificates and useful portals.",stateButton:"Explore All States →",
      blogKicker:"FROM THE BLOG",blogTitle:"Guides & Explainers",blogAll:"Read All →",
      trustKicker:"WHY SARKARISEWA INDIA",trustTitle:"Simple information. Official links. No confusion.",trustSub:"We organise government-service information in a clean, searchable format so you can understand the process before opening the official portal.",
      trust:["Official links","Direct links to relevant government portals.","Hindi + English","Guides designed for easy understanding.","Free utilities","Calculators and citizen tools in one place.","Independent portal","Not affiliated with any government department."],
      faqKicker:"HELP",faqTitle:"Frequently Asked Questions",
      faqQ:["Is SarkariSewa India a government website?","Can I apply directly from here?","Are the tools free?","Can I use the website on mobile?"],
      faqA:["No. It is an independent information portal.","We provide guidance and direct links; applications are completed on the relevant official portal.","The listed citizen utilities are designed to be available without a service charge from this portal.","Yes. The homepage and service directory are responsive across mobile, tablet and desktop."],
      footerDisclaimer:"Independent information portal — SarkariSewa India is not affiliated with the Government of India or any State Government. We do not accept applications, process documents, or collect government fees. Use the official portal linked on each guide.",footerTools:["Tools & Calculators","Scheme Eligibility Engine"],
      footerResources:["Project Report Generator","State-wise Popular Services","About","Sitemap","FAQ","Contact"],
      footerSupport:["Support Home","State-wise Services","Helpline Directory","RTI Guide"],
      footerLegal:["Privacy Policy","Disclaimer","Terms & Conditions","Staff Login"]
    },
    hi:{
      nav:["होम","सेवाएं","नौकरियां","योजनाएं","टूल्स","ब्लॉग"],
      heroEyebrow:"स्वतंत्र भारतीय सेवा पोर्टल",
      heroTitle:"सरकारी सेवाएं, नौकरियां और योजनाएं — <em>जल्दी खोजें</em>",
      heroSub:"सरकारी सेवाएं, योजनाएं, नौकरी अपडेट और उपयोगी टूल्स — एक ही जगह, आसान भाषा में।",
      searchPlaceholder:"आधार, PAN, राशन कार्ड, नौकरी, योजना खोजें...",searchButton:"खोजें",
      panelTitle:"जो चाहिए, खोजें",panelSub:"खोजें → समझें → आधिकारिक पोर्टल खोलें",allServices:"सभी सेवाएं",freeTools:"फ्री टूल्स",
      featuredKicker:"लोकप्रिय सेवाएं",featuredTitle:"श्रेणी के अनुसार सेवाएं",featuredSub:"हर श्रेणी की जरूरी सेवाएं, सीधे काम करने वाले लिंक के साथ।",featuredAll:"सभी सेवाएं देखें →",
      browseKicker:"ब्राउज़ करें",browseTitle:"श्रेणी के अनुसार खोजें",browseAll:"सभी सेवाएं →",
      toolsKicker:"फ्री उपयोगी टूल्स",toolsTitle:"लोकप्रिय टूल्स",toolsSub:"रोज़मर्रा के काम के लिए उपयोगी कैलकुलेटर और नागरिक टूल्स।",toolsAll:"सभी टूल्स देखें →",
      latestKicker:"नवीनतम",latestTitle:"नवीनतम सेवाएं और अवसर",latestSub:"पोर्टल पर हाल में जोड़ी या अपडेट की गई जानकारी।",
      stateKicker:"राज्य सेवाएं",stateTitle:"राज्य के अनुसार सेवाएं खोजें",stateSub:"अपने राज्य की सरकारी सेवाएं, प्रमाण पत्र और उपयोगी पोर्टल देखें।",stateButton:"सभी राज्य देखें →",
      blogKicker:"ब्लॉग से",blogTitle:"गाइड और आसान जानकारी",blogAll:"सभी पढ़ें →",
      trustKicker:"SARKARISEWA INDIA क्यों",trustTitle:"सरल जानकारी। आधिकारिक लिंक। कोई भ्रम नहीं।",trustSub:"हम सरकारी सेवाओं की जानकारी को साफ और खोजने योग्य तरीके से व्यवस्थित करते हैं, ताकि आधिकारिक पोर्टल खोलने से पहले प्रक्रिया समझ सकें।",
      trust:["आधिकारिक लिंक","संबंधित सरकारी पोर्टल के सीधे लिंक।","हिंदी + अंग्रेज़ी","आसान समझ के लिए द्विभाषी गाइड।","फ्री उपयोगी टूल्स","कैलकुलेटर और नागरिक टूल्स एक ही जगह।","स्वतंत्र पोर्टल","किसी सरकारी विभाग से संबद्ध नहीं।"],
      faqKicker:"मदद",faqTitle:"अक्सर पूछे जाने वाले सवाल",
      faqQ:["क्या SarkariSewa India सरकारी वेबसाइट है?","क्या यहां से सीधे आवेदन कर सकते हैं?","क्या टूल्स मुफ्त हैं?","क्या वेबसाइट मोबाइल पर चलती है?"],
      faqA:["नहीं। यह एक स्वतंत्र सूचना पोर्टल है।","हम जानकारी और आधिकारिक लिंक देते हैं; आवेदन संबंधित आधिकारिक पोर्टल पर पूरा होता है।","दिए गए नागरिक टूल्स इस पोर्टल पर बिना सेवा शुल्क के उपलब्ध कराने के लिए बनाए गए हैं।","हां। होमपेज और सर्विस डायरेक्टरी मोबाइल, टैबलेट और डेस्कटॉप पर responsive हैं।"],
      footerTools:["टूल्स और कैलकुलेटर","योजना पात्रता इंजन"],
      footerResources:["प्रोजेक्ट रिपोर्ट जनरेटर","राज्यवार लोकप्रिय सेवाएं","हमारे बारे में","साइटमैप","FAQ","संपर्क"],
      footerSupport:["सपोर्ट होम","राज्यवार सेवाएं","हेल्पलाइन डायरेक्टरी","RTI गाइड"],
      footerLegal:["प्राइवेसी पॉलिसी","डिस्क्लेमर","नियम और शर्तें","स्टाफ लॉगिन"]
    }
  };
  function setText(el,value){if(el)el.textContent=value;}
  function apply(lang){
    const c=copy[lang]||copy.hi;
    const nav=document.querySelectorAll(".homepage-main-nav a"); c.nav.forEach((v,i)=>setText(nav[i],v));
    setText(document.querySelector(".ss-eyebrow"),c.heroEyebrow);
    const hero=document.querySelector(".ss-hero h1"); if(hero)hero.innerHTML=c.heroTitle;
    setText(document.querySelector(".ss-hero-copy>p"),c.heroSub);
    const si=document.getElementById("hero-search"); if(si)si.placeholder=c.searchPlaceholder;
    const sb=document.querySelector(".ss-hero-search button"); if(sb)sb.innerHTML=c.searchButton+" <span>→</span>";
    const panel=document.querySelector(".ss-hero-panel"); if(panel){setText(panel.querySelector("strong"),c.panelTitle);setText(panel.querySelector("span:not(.ss-panel-icon)"),c.panelSub);const links=panel.querySelectorAll(".ss-panel-links a");setText(links[0],c.allServices+" →");setText(links[1],c.freeTools+" →");}
    const heads=[...document.querySelectorAll(".ss-section-head")];
    const vals=[[c.featuredKicker,c.featuredTitle,c.featuredSub,c.featuredAll],[c.browseKicker,c.browseTitle,"",c.browseAll],[c.toolsKicker,c.toolsTitle,c.toolsSub,c.toolsAll],[c.latestKicker,c.latestTitle,c.latestSub,""],[c.blogKicker,c.blogTitle,"",c.blogAll],[c.faqKicker,c.faqTitle,"",""]];
    heads.forEach((h,i)=>{const v=vals[i];if(!v)return;setText(h.querySelector(".ss-kicker"),v[0]);setText(h.querySelector("h2"),v[1]);const p=h.querySelector("p");if(p&&v[2])setText(p,v[2]);const a=h.querySelector(".ss-view-all");if(a&&v[3])setText(a,v[3]);});
    const toolCards=document.querySelectorAll(".ss-tool-card");
    const toolNames=lang==="hi"?["EPF कैलकुलेटर","सेविंग्स कम्पेरेटर","पात्रता जांचकर्ता","प्रोजेक्ट रिपोर्ट जनरेटर","फोटो रिसाइज़र","CSC लोकेटर"]:["EPF Calculator","Savings Comparator","Eligibility Checker","Project Report Generator","Photo Resizer","CSC Locator"];
    const toolDesc=lang==="hi"?["EPF बैलेंस का अनुमान लगाएं","बचत योजनाओं की तुलना करें","योजना पात्रता जांचें","ऑनलाइन प्रोजेक्ट रिपोर्ट बनाएं","आवेदन के लिए फोटो का आकार बदलें","नजदीकी CSC केंद्र खोजें"]:["Estimate your EPF balance","Compare savings schemes","Check scheme eligibility","Create a project report online","Resize photos for applications","Find Common Service Centres"];
    toolCards.forEach((el,i)=>{setText(el.querySelector("strong"),toolNames[i]);setText(el.querySelector("small"),toolDesc[i]);setText(el.querySelector("b"),lang==="hi"?"खोलें →":"Open →");});
    const state=document.querySelector(".ss-state-wrap");if(state){setText(state.querySelector(".ss-kicker"),c.stateKicker);setText(state.querySelector("h2"),c.stateTitle);setText(state.querySelector("p"),c.stateSub);setText(state.querySelector(".ss-primary-btn"),c.stateButton);}
    const trust=document.querySelector(".ss-trust-grid");if(trust){setText(trust.querySelector(".ss-kicker"),c.trustKicker);setText(trust.querySelector("h2"),c.trustTitle);setText(trust.querySelector("p"),c.trustSub);const rows=trust.querySelectorAll(".ss-trust-points>div");rows.forEach((r,i)=>{setText(r.querySelector("strong"),c.trust[i*2]);setText(r.querySelector("small"),c.trust[i*2+1]);});}
    const faq=document.querySelectorAll(".ss-faq-grid details");faq.forEach((d,i)=>{setText(d.querySelector("summary"),c.faqQ[i]);setText(d.querySelector("p"),c.faqA[i]);});
    const mobile=document.querySelectorAll("#mobile-nav>a");const mobileVals=[...c.nav,"State Services"];mobile.forEach((a,i)=>{if(mobileVals[i])setText(a,mobileVals[i]);});
    const disc=document.querySelector(".footer-disclaimer-banner p");if(disc)setText(disc,c.footerDisclaimer);const lists=document.querySelectorAll(".footer-grid ul");[c.footerTools,c.footerResources,c.footerSupport,c.footerLegal].forEach((arr,i)=>{if(!lists[i])return;lists[i].querySelectorAll("a").forEach((a,j)=>{if(arr[j])setText(a,arr[j]);});});
  }
  document.addEventListener("ss:ready",()=>apply((window.SITE&&SITE.lang)||"hi"),{once:false});
  document.addEventListener("ss:language-changed",e=>apply(e.detail&&e.detail.lang||"hi"));
})();
