(function(){
"use strict";
const ROOT=window.SS_ROOT||"";
const listEl=document.getElementById("services-directory-list");
const countEl=document.getElementById("services-directory-count");
const resultsCount=document.getElementById("sd-results-count");
const resultsTitle=document.getElementById("sd-results-title");
const input=document.getElementById("services-directory-search");
const filter=document.getElementById("services-directory-filter");
const categoryGrid=document.getElementById("sd-category-grid");
let all=[],cats=[];
const tfn=typeof t==="function"?t:(x)=>typeof x==="object"?(x.en||x.hi||""):String(x||"");
function esc(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));}
function href(s){return typeof ssServiceHref==="function"?ssServiceHref(ROOT,s):ROOT+"service/"+encodeURIComponent(s.slug)+".html";}
function renderCategories(){
 categoryGrid.innerHTML=cats.map(c=>{
   const items=all.filter(s=>s.category===c.slug);
   return '<a class="sd-category-card" href="'+ROOT+'category/'+c.slug+'.html" data-category="'+esc(c.slug)+'">'+
     '<span class="sd-category-icon">'+esc(c.icon||"▦")+'</span>'+
     '<span class="sd-category-copy"><strong>'+esc(tfn(c.name))+'</strong><small>'+esc(tfn(c.description))+'</small></span>'+
     '<span class="sd-category-count">'+items.length+'<small>services</small></span>'+
     '<b>→</b></a>';
 }).join("");
}
function render(){
 const q=(input.value||"").trim().toLowerCase();
 const cat=filter.value;
 let items=all.filter(s=>!cat||s.category===cat);
 if(q) items=items.filter(s=>[s.name?.en,s.name?.hi,s.shortDescription?.en,s.shortDescription?.hi,s.slug,s.category].filter(Boolean).join(" ").toLowerCase().includes(q));
 resultsCount.textContent=items.length+" found";
 resultsTitle.textContent=q||cat?"Matching services":"All Services";
 listEl.innerHTML=items.length?items.map(s=>
 '<a class="sd-card" href="'+href(s)+'"><span class="sd-icon">📌</span><span class="sd-card-copy"><strong>'+esc(tfn(s.name))+'</strong><small>'+esc(tfn(s.shortDescription||""))+'</small><em>'+esc(s.category||"")+'</em></span><b>→</b></a>'
 ).join(""):'<div class="sd-empty"><strong>No matching service found</strong><span>Try another keyword or choose a different category.</span></div>';
 if(location.hash==="#all-services"||q||cat) document.getElementById("all-services")?.scrollIntoView({behavior:"smooth",block:"start"});
}
Promise.all([
 typeof fetchAllServices==="function"?fetchAllServices():fetch(ROOT+"data/services.json").then(r=>r.json()),
 fetch(ROOT+"data/categories.json").then(r=>r.json())
]).then(([s,c])=>{
 all=Array.isArray(s)?s:(s.services||[]);
 cats=Array.isArray(c)?c:(c.categories||[]);
 countEl.innerHTML=all.length+"+<span>services &amp; guides</span>";
 filter.innerHTML='<option value="">All categories</option>'+cats.map(x=>'<option value="'+esc(x.slug)+'">'+esc(tfn(x.name))+'</option>').join("");
 renderCategories(); render();
 input.addEventListener("input",render);
 filter.addEventListener("change",render);
 if(typeof onLangChange==="function") onLangChange(()=>{renderCategories();render();});
 if(window.innerWidth<=768&&!document.querySelector(".ss-mobile-bottom-nav")){
   const n=document.createElement("nav"); n.className="ss-mobile-bottom-nav"; n.setAttribute("aria-label","Quick navigation");
   n.innerHTML='<a href="'+ROOT+'index.html">⌂<span>Home</span></a><a class="active" href="'+ROOT+'services/index.html">▦<span>Services</span></a><a href="'+ROOT+'jobs/index.html">💼<span>Jobs</span></a><a href="'+ROOT+'category/government-schemes.html">📜<span>Schemes</span></a><a href="'+ROOT+'tools/index.html">🛠️<span>Tools</span></a>';
   document.body.appendChild(n);
 }
}).catch(()=>{countEl.textContent="";resultsCount.textContent="Unable to load";listEl.innerHTML='<div class="sd-empty">Services could not be loaded. Please refresh the page.</div>';});
})();