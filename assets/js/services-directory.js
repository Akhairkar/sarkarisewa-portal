(function(){
"use strict";
const ROOT=window.SS_ROOT||"";
const sectorsEl=document.getElementById("sd-sectors");
const countEl=document.getElementById("services-directory-count");
let all=[],cats=[];
const tfn=typeof t==="function"?t:(x)=>typeof x==="object"?(x.en||x.hi||""):String(x||"");
function esc(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));}
function href(s){return typeof ssServiceHref==="function"?ssServiceHref(ROOT,s):ROOT+"service/"+encodeURIComponent(s.slug)+".html";}
function render(){
 sectorsEl.innerHTML=cats.map(c=>{
  const items=all.filter(s=>s.category===c.slug);
  if(!items.length)return "";
  return '<section class="sd-sector" id="sector-'+esc(c.slug)+'"><div class="sd-sector-head"><div class="sd-sector-title"><span class="sd-category-icon">'+esc(c.icon||"▦")+'</span><span><h2>'+esc(tfn(c.name))+'</h2><p>'+esc(tfn(c.description))+'</p></span></div><a class="sd-sector-link" href="'+ROOT+'category/'+esc(c.slug)+'.html">View sector →</a></div><div class="sd-grid">'+items.map(s=>'<a class="sd-card" href="'+href(s)+'"><span class="sd-icon">📌</span><span class="sd-card-copy"><strong>'+esc(tfn(s.name))+'</strong><small>'+esc(tfn(s.shortDescription||""))+'</small></span><b>→</b></a>').join("")+'</div></section>';
 }).join("");
}
Promise.all([typeof fetchAllServices==="function"?fetchAllServices():fetch(ROOT+"data/services.json").then(r=>r.json()),fetch(ROOT+"data/categories.json").then(r=>r.json())]).then(([s,c])=>{
 all=Array.isArray(s)?s:(s.services||[]);cats=Array.isArray(c)?c:(c.categories||[]);countEl.innerHTML=all.length+"+<span>services &amp; guides</span>";render();
 if(typeof onLangChange==="function")onLangChange(render);
 const y=document.getElementById("footer-year");if(y)y.textContent=new Date().getFullYear();
 if(window.innerWidth<=768&&!document.querySelector(".ss-mobile-bottom-nav")){const n=document.createElement("nav");n.className="ss-mobile-bottom-nav";n.setAttribute("aria-label","Quick navigation");n.innerHTML='<a href="'+ROOT+'index.html">⌂<span>Home</span></a><a class="active" href="'+ROOT+'services/index.html">▦<span>Services</span></a><a href="'+ROOT+'jobs/index.html">💼<span>Jobs</span></a><a href="'+ROOT+'category/government-schemes.html">📜<span>Schemes</span></a><a href="'+ROOT+'tools/index.html">🛠️<span>Tools</span></a>';document.body.appendChild(n);}
}).catch(()=>{countEl.textContent="";sectorsEl.innerHTML='<div class="sd-empty"><strong>Services could not be loaded</strong><span>Please refresh the page.</span></div>';});
})();